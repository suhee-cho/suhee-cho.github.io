---
layout: page
title: News
permalink: /news/
rootlink: /news/
description: Some small but exciting news in my life
nav: true
tag_source: news
nav_order: 1
---

{% assign news_docs = site.news | sort: "date" | reverse %}
{% assign news_by_year = news_docs | group_by_exp: "item", "item.date | date: '%Y'" %}

<div class="news">
  {% for y in news_by_year %}
    <details class="news-year-block filter-group" open>
      <summary class="news-year">
        <span class="news-year-text">{{ y.name }}</span>
        <span class="news-year-toggle" aria-hidden="true"></span>
      </summary>

      {% assign news_by_month = y.items | group_by_exp: "item", "item.date | date: '%m'" %}
      {% for m in news_by_month %}
        {% assign month_label = m.items[0].date | date: "%B" %}

        <div class="month-entry filter-group">
          <h4 class="news-month">{{ month_label }}</h4>

          <div class="news-card">
            <ul class="news-list">
              {% for item in m.items %}
                {% assign item_tag_str = item.tags | join: " " %}
                <li class="news-item filterable" data-tags="{{ item_tag_str }}">
                  <span class="news-arrow" aria-hidden="true">▶</span>

                  <div class="news-item-content">
                    {% if item.inline %}
                      <span class="news-inline">
                        {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
                      </span>
                    {% else %}
                      {% if item.external_url %}
                        <a class="news-title" href="{{ item.external_url }}" target="_blank" rel="noopener noreferrer">
                          {{ item.title }}
                        </a>
                      {% else %}
                        <a class="news-title" href="{{ item.url | relative_url }}">
                          {{ item.title }}
                        </a>
                      {% endif %}
                    {% endif %}

                    <div class="news-date">{{ item.date | date: "%b %-d" }}</div>
                  </div>
                </li>
              {% endfor %}
            </ul>
          </div>
        </div>
      {% endfor %}
    </details>
  {% endfor %}
</div>
