---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <header class="blog-hero">
    {% if blog_name_size > 0 %}
      <h1 class="page-title">{{ site.blog_name }}</h1>
    {% endif %}
    {% if blog_description_size > 0 %}
      <p class="page-description">{{ site.blog_description }}</p>
    {% endif %}
  </header>
{% endif %}

{% if site.display_tags and site.display_tags.size > 0 %}

  <div class="tag-list">
    <p class="keywords-title" style="color: #fff;">Keywords</p>

    <ul class="keywords-list">
      {% if tags != "" %}
        {% for tag in site.display_tags %}
          <li class="keywords-item">
            <a class="tag-label" style="color: #fff;" href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
            </a>
          </li>
        {% endfor %}
      {% endif %}
    </ul>
  </div>
{% endif %}

<div class="page-paper">
  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}
      {% assign year = post.date | date: "%Y" %}
      {% assign tags = post.tags | join: "" %}

      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p style="color: #000">{{ post.description }}</p>
        <p class="post-meta" style="color: #000">
          {{ read_time }} min read &nbsp; &middot; &nbsp;
          {{ post.date | date: '%B %d, %Y' }}
          {% if post.external_source %}
            &nbsp; &middot; &nbsp; {{ post.external_source }}
          {% endif %}
          {% if tags != "" %}
            &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
              <a class="black-red-button" href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
            {% endfor %}
          {% endif %}
        </p>
      </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}

</div>
</div>