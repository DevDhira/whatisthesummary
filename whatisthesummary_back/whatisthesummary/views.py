from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
from .summ import Summarize
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import TextFormatter
from summa.summarizer import summarize
import nltk


@api_view(['POST'])
def blog_post_summarizer(request):
    nltk.download('punkt')
    url = str(request.data['url'])
    summarized_content = Summarize.summary(url)

    return Response(summarized_content)

@api_view(['POST'])
def news_summarizer(request):
    nltk.download('punkt')
    url = request.data['url']
    print(url)
    
    try:
        summarized_content = Summarize.summary(url)
        print(summarized_content)
        return Response(summarized_content)
        
    except Exception as e:
        print(e)
        return Response(e)

@api_view(['POST'])
def youtube_video_summarizer(request):
    video_id  = str(request.data['id'])
    print(video_id)
    transcript=YouTubeTranscriptApi.get_transcript(video_id)    
    text_formatter = TextFormatter()

    text_formatted = text_formatter.format_transcript(transcript)


    return Response(str(summarize(text_formatted)).replace('\n',' '))




