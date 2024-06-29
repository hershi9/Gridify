import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.Cmp6zcjC.js";const o=JSON.parse('{"title":"AutoMapper","description":"","frontmatter":{},"headers":[],"relativePath":"guide/autoMapper.md","filePath":"guide/autoMapper.md"}'),h={name:"guide/autoMapper.md"},n=t(`<h1 id="automapper" tabindex="-1">AutoMapper <a class="header-anchor" href="#automapper" aria-label="Permalink to &quot;AutoMapper&quot;">​</a></h1><p>Gridify is completely compatible with AutoMapper. Also, these two packages can help each other nicely. We can use Gridify for filtering, sorting, and paging and AutoMapper for the projection.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// AutoMapper ProjectTo + Filtering Only, example</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> personRepo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ApplyFiltering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gridifyQuery);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ProjectTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PersonDTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// AutoMapper ProjectTo + Filtering + Ordering + Paging, example</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryablePaging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> personRepo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GridifyQueryable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gridifyQuery);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Paging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(qp.Count, qp.Query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ProjectTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PersonDTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><h2 id="gridifyto" tabindex="-1">GridifyTo! <a class="header-anchor" href="#gridifyto" aria-label="Permalink to &quot;GridifyTo!&quot;">​</a></h2><p>Filtering, Ordering, Paging, and Projection are all done with <code>GridifyTo</code>.</p><p>Gridify library does not have a built-in <code>GridifyTo</code> extension method because we don&#39;t want to have AutoMapper dependency. but if you are using AutoMapper in your project, I recommend you to add the bellow extension method to your project.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Paging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GridifyTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IQueryable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IMapper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autoMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IGridifyQuery</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gridifyQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IGridifyMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GridifyQueryable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gridifyQuery, mapper);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Paging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(res.Count, res.Query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ProjectTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(autoMapper.ConfigurationProvider).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// only if you have Gridify.EntityFramework package installed.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Task</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Paging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GridifyToAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IQueryable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IMapper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autoMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IGridifyQuery</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gridifyQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IGridifyMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GridifyQueryableAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gridifyQuery, mapper);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Paging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(res.Count, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.Query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ProjectTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TDestination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(autoMapper.ConfigurationProvider).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToListAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9),p=[n];function k(l,e,r,d,E,g){return a(),s("div",null,p)}const F=i(h,[["render",k]]);export{o as __pageData,F as default};
