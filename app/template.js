export let home = `
<header class="animated slideInDown"><img src="{{./img/logo.png}}"></header>
<div class="body animated zoomInDown">
  <img src="{{./img/homepage.png}}">
</div>
<p class="arrow animated fadeInUp delay-1">
  <i class="fa fa-chevron-up fadeInUp animated infinite duration-2"></i>
</p>
<footer class="animated slideInUp"><img src="{{./img/logos.png}}" ></footer>
`;

export let nav = `
<ul>
  <li class="animated fadeInRight"><div class="bg"></div><a href="#/about">关于磨铁</a></li> 
  <li class="animated fadeInRight"><div class="bg"></div><a href="#/ip100">公布磨铁百大IP</a></li> 
  <li class="animated fadeInRight"><div class="bg"></div><a href="#/portfolio">公布磨铁即将启动的 电影、电视剧项目</a></li> 
  <li class="animated fadeInRight"><div class="bg"></div><a href="#/invitation">大会邀请函</a></li> 
</ul>
`;

export let about = `
<article>
<h2>关于磨铁：</h2>
<p>磨铁集团成立于2007年12月12日。十年间，磨铁集团形成了磨铁图书、磨铁文学、磨铁娱乐三大基石业务板块。</p>
<p>磨铁内容生态未来将是开放生态，一端连接内容创作者，另一端连接更广泛的内容孵化者，通过磨铁内容生态创作者可以安心于创作，并能得到商业价值的最大化，而磨铁将与内容创作者携手一同打造更多属于中国的优秀原创内容。</p>
<h2><img src="./img/logo-tushu.png" width="88"></h2>
<p>磨铁集团起步于大众图书出版，经过多年的发展，成为民营图书出版中的领军企业。</p>
<h2><img src="./img/logo-wenxue.png" width="88"></h2>
<p>2011年磨铁集团进军网络文学，创建磨铁中文网、锦文小说网、墨墨言情网、逸云书院四大在线网站，并打造磨铁阅读和来看阅读两大阅读平台客户端沉淀深度用户。</p>
<h2><img src="./img/logo-yule.png" width="90"></h2>
<p>2013年磨铁集团进军影视制作，利用IP资源储备进行影视剧项目开发。磨铁图书、磨铁文学以及磨铁娱乐在构建成为完整的内容生产链的同时也沉淀了大量内容丰富的IP资源，而磨铁将以此为契机与更多的合作伙伴链接，创造出更大IP的价值。</p>
</article>
<footer>
<a href="#/home" class="back-button"><span>返回</span></a>
</footer>
`;

export let ip100 = `
<article>
<h2>“十大类型，百个IP”</h2>
<ul>
<li class="animated fadeInUp">十大主旋律正能量IP</li>
<li class="animated fadeInUp">十大电影IP</li>
<li class="animated fadeInUp">十大电视剧（网剧）IP</li>
<li class="animated fadeInUp">十大古装IP</li>
<li class="animated fadeInUp">十大现象级网络文学IP</li>
<li class="animated fadeInUp">十大漫改IP</li>
<li class="animated fadeInUp">十大都市IP</li>
<li class="animated fadeInUp">十大悬疑侦探推理IP</li>
<li class="animated fadeInUp">十大仙侠玄幻IP</li>
<li class="animated fadeInUp">十大网络大电影IP</li>
</ul>
<p class="animated zoomInDown delay-2">开放IP大池，大家一起来游泳</p>
</article>
<footer>
<a href="#/home" class="back-button"><span>返回</span></a>
</footer>
`;

export let invitation = `
<div><img src="./img/invitation.jpg"></div>
<footer>
<a href="#/home" class="back-button"><span>返回</span></a>
</footer>
`;

export let portfolio = `
<header>
  <nav>
    <div class="nav-item active"><span>电影</span></div>
    <div class="nav-item"><span>电视</span></div>
  </nav>
</header>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="{{./img/haibao1.jpg}}">
      <h3>电影《从你的全世界路过》</h3>
      <p>联合出品方：光线传媒<br>
张一白执导；邓超领衔主演，白百何特约出演，杨洋、张天爱、岳云鹏、杜鹃、柳岩领衔主演</p>
    </div>
    <div class="swiper-slide">
      <img src="{{./img/haibao2.jpg}}">
      <h3>电影《悟空传》</h3>
      <p>联合出品方：新丽传媒、上海三次元影业<br>
郭子健执导；彭于晏、倪妮、欧豪、余文乐、郑爽、乔杉、杨迪联袂主演，俞飞鸿特别出演。</p>
    </div>
    <div class="swiper-slide">
      <img src="{{./img/haibao3.jpg}}">
      <h3>超级网剧《天意之秦天宝鉴》</h3>
      <p>联合出品方：优酷、青春你好<br>
丁仰国执导，欧豪、海铃、李雨轩、孙珍妮、于济玮、田一彤、李感领衔主演；唐嫣、乔振宇、张丹峰、张睿特别出演的东方科幻网剧</p>
    </div>
    <div class="swiper-slide">
      <img src="{{./img/haibao4.jpg}}">
      <h3>漫改剧《单恋大作战》</h3>
      <p>联合出品方：聚禾映画<br>
沈沁源执导；由孔垂楠，刘美含，李鹤领衔主演；黄灿灿、张艺瀚特别出演。</p>
    </div>
  </div>
  
  <div class="swiper-button-next"></div>  
  <div class="swiper-button-prev"></div>
</div>
<footer>
<a href="#/home" class="back-button"><span>返回</span></a>
</footer>
`;