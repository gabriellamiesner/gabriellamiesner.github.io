---
layout: page
title: classes
permalink: /classes/
description: notes, projects, and things from my undergraduate classes.
---
#### Spring 2021
* econ 1200 : introduction to macroeconomics 
* ist 585 : human-computer interaction
* ist 4654: web and digital media development
* ist 1750 : introdction to management information systems
* ist 1561 : algorithms and programming in java
* phil 104 : introdction to ethics
* math 1212 : business calculus

#### Fall 2020
* fr eng 1100 : freshman engineering
* bio sci 1113 : general biology
* bio sci 1219 : general biology lab
* bio sci 1163 : biotechnology in film
* math 1120 : college algebra

#### Summer 2020
* wms 100 : introdction to women's studies
* psych 1101 : general psychology
* sp&ms 1185 : principles of speech

{% for project in site.teaching %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail" id = "{{project.id}}">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}" />
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
