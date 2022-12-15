from django.urls import path
from .views import blog_post_summarizer,news_summarizer,youtube_video_summarizer


urlpatterns = [
 path('blog_summarize/',blog_post_summarizer,name='blog_post_summarizer'),
 path('news_summarize/',news_summarizer,name='blog_post_summarizer'),
 path('youtube_video_summarize/',youtube_video_summarizer,name='youtube_video_summarizer'),
]