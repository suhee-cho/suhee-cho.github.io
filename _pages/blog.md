---
layout: page
permalink: /blog/
rootlink: /blog/
title: Blog
description: Random miscellaneous thoughts about research and life
nav: true
tag_source: posts
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

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
      {% assign post_tag_str = post.tags | join: " " %}

      <li class="filterable" data-tags="{{ post_tag_str }}">
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p>{{ post.description }}</p>
        <p class="post-meta">
          {{ read_time }} min read &nbsp; &middot; &nbsp;
          {{ post.date | date: '%B %d, %Y' }}
          {% if post.external_source %}
            &nbsp; &middot; &nbsp; {{ post.external_source }}
          {% endif %}
          {% if post_tag_str != "" %}
            &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
              <a class="black-red-button" data-tag="{{ tag | slugify }}" href="#">
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
