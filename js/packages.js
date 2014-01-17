---
---
phploep_jsonp_callback([
{% for package in site.data.packages -%}  {
    "name": "{{ package.name }}",
    "repo": "{{ package.repo }}",
    "description": "{{ package.description }}",
    "author": {
      "name": "{{ package.author.name }}",
      "username": "{{ package.author.username }}"
    }
  }{% unless forloop.last %},{% endunless %}
{% endfor %}])
