function eventAttach(){
    var cal = document.getElementById("calendar");
    var paperA = document.getElementById("paperBefore");

    var event = {

        openCal: function(){
            cal.style.display = "block";
            cal.style.visibility = "visible";
            // paperA.style.backgroundColor = "#fc8f96";
            paperA.style.backgroundColor = "#fff";
        },

        closeCal: function(){
            cal.style.display = "none";
            cal.style.visibility = "hidden";
            // paperA.style.backgroundColor = "#fff";
            paperA.style.backgroundColor = "#fc8f96";
        }
    };

    var closeBtn = document.getElementById("closeBtn");
    var openBtn = document.getElementById("openBtn");

    closeBtn.addEventListener('click', event.closeCal, false);
    openBtn.addEventListener('click', event.openCal, false);
}

function calInit(){
    var cal = {
        today: new Date(),
        on: new Date(), //当前最后一篇文章的日期
        dateEle: document.getElementsByClassName("cal-day"),
        render : {},

        url: {
            "2016/12/4": "http://soyaine.cn",
            "2016/12/5": "http://soyaine.cn",
            "2016/12/6": "http://soyaine.cn",
            "2016/12/7": "http://soyaine.cn",
            "2016/12/8": "http://soyaine.cn"
        },

        loadCal : function(){
            var render = this.render;
            var elem = this.dateEle;
            var i = 0;
            for(var day in render){
                elem[i].setAttribute("id", day);
                if(render[day].url){
                    elem[i].innerHTML = "<a href='" + render[day].url + "'>" + render[day].date + "</a>";
                }else {
                    elem[i].innerText = render[day].date;
                }
                i++;
            }

            var y = this["on"].getFullYear();
            var m = this["on"].getMonth();

            var yEle = document.getElementById("cal-year");
            var mEle = document.getElementById("cal-month");

            yEle.children[1].innerText = y;
            var mThis = mEle.getElementsByClassName("cal-this-month");
            mThis[0].classList.remove("cal-this-month");
            mEle.children[m].classList.add("cal-this-month");
        },

        //som: (function(){
        //    var first = new Date();
        //    first = this.data[first];
        //    return new Date(first.getYear(), first.getMonth(), -first.getDay());
        //}())

        loadLink: function(){
            //var url = this.url;
            var url = urlJSON;
            for (var n in url){
                n = n.replace(/^[\s\uFEFF\xA0\n]+|[\s\uFEFF\n\xA0]+$/g, '');
                var ele = document.getElementById(n);
                if(ele){
                    ele.innerHTML = "<a href='" + url[n].url + "'>" + this.render[n].date + "</a>";
                    ele.title = url[n].excerpt;
                    //render[n]["url"] = url[n];
                }
            }
        },

        loadDate: function(first){
            // 根据任意日期，获取此月日历中第一个周一的日期
            first.setDate(1);
            var y = first.getFullYear();
            var m = first.getMonth();
            var w = first.getDay();
            if(!w) w = 7; // 针对周日的 getDay() 值为0 的处理，将0转化为7
            first = new Date(y, m, 2-w); // 以周一为第一天
            //first = new Date(y, m, 1-w); // 以周日为第一天

            // 遍历获取所有日期
            var arr = {};
            for(var i = 0; i < 42; i++){
                var date = first.getDate();
                var dateStr = first.toLocaleDateString();
                arr[dateStr] = {
                    "date": date
                    //"url": null
                };
                first.setDate(++date);
            }
            return arr;
        },

        //loadList: function(){
        //    var list = document.getElementById("urlList");
        //    var url = {};
        //    for(var li in list.children){
        //        var date = list.children[li].innerText;
        //        url[date] = list.children[li].href;
        //    }
        //    this.url = url;
        //},

        init: function(){
            this.render = this.loadDate(this["on"]);
            this.loadCal();
            //this.loadList();
            this.loadLink();
        }
    };

    var monthNav = document.getElementById("cal-month");
    monthNav.addEventListener('click', function(event){
        var month = event.target.title - 1;
        cal.on.setMonth(+month);
        cal.init();
    }, false);

    var yearNav = document.getElementById('cal-year');
    yearNav.addEventListener('click',function(event){
        var choice = event.target.id; //nextYearBtn   //lastYearBtn
        var year = yearNav.getElementsByTagName('label')[0].innerText;
        // alert(year);
        if (choice == 'lastYearBtn') {
            year = parseInt(year) - parseInt(1) ;
        }else if (choice == 'nextYearBtn') {
            year = parseInt(year) + parseInt(1) ;
        }else{
            return false;
        };
        // alert(year);
        cal.on.setFullYear(+year);
        cal.init();
    },false);

    cal.init();
}



function init(){
    calInit();
    eventAttach();

}

init();




var urlJSON = {

    "2017/9/20": {
        url: "/diary/2017/09/20/soyaine-daily-151" ,
        excerpt: ""
    },

    "2017/9/10": {
        url: "/diary/2017/09/10/soyaine-daily-150" ,
        excerpt: ""
    },

    "2017/7/23": {
        url: "/diary/2017/07/23/soyaine-daily-149" ,
        excerpt: ""
    },

    "2017/7/15": {
        url: "/diary/2017/07/15/soyaine-daily-148" ,
        excerpt: ""
    },

    "2017/7/8": {
        url: "/diary/2017/07/08/soyaine-daily-147" ,
        excerpt: ""
    },

    "2017/7/6": {
        url: "/diary/2017/07/06/soyaine-daily-146" ,
        excerpt: ""
    },

    "2017/7/1": {
        url: "/diary/2017/07/01/soyaine-daily-145" ,
        excerpt: ""
    },

    "2017/6/11": {
        url: "/diary/2017/06/11/soyaine-daily-144" ,
        excerpt: ""
    },

    "2017/6/9": {
        url: "/diary/2017/06/09/soyaine-daily-143" ,
        excerpt: ""
    },

    "2017/6/8": {
        url: "/diary/2017/06/08/soyaine-daily-142" ,
        excerpt: ""
    },

    "2017/6/7": {
        url: "/diary/2017/06/07/soyaine-daily-141" ,
        excerpt: ""
    },

    "2017/6/6": {
        url: "/diary/2017/06/06/soyaine-daily-140" ,
        excerpt: ""
    },

    "2017/6/5": {
        url: "/diary/2017/06/05/soyaine-daily-139" ,
        excerpt: ""
    },

    "2017/6/4": {
        url: "/diary/2017/06/04/soyaine-daily-138" ,
        excerpt: ""
    },

    "2017/6/3": {
        url: "/diary/2017/06/03/soyaine-daily-137" ,
        excerpt: ""
    },

    "2017/6/2": {
        url: "/diary/2017/06/02/soyaine-daily-136" ,
        excerpt: ""
    },

    "2017/6/1": {
        url: "/diary/2017/06/01/soyaine-daily-135" ,
        excerpt: ""
    },

    "2017/5/31": {
        url: "/diary/2017/05/31/soyaine-daily-134" ,
        excerpt: ""
    },

    "2017/5/30": {
        url: "/diary/2017/05/30/soyaine-daily-133" ,
        excerpt: ""
    },

    "2017/5/29": {
        url: "/diary/2017/05/29/soyaine-daily-132" ,
        excerpt: ""
    },

    "2017/5/28": {
        url: "/diary/2017/05/28/soyaine-daily-131" ,
        excerpt: ""
    },

    "2017/5/27": {
        url: "/diary/2017/05/27/soyaine-daily-130" ,
        excerpt: ""
    },

    "2017/5/26": {
        url: "/diary/2017/05/26/soyaine-daily-129" ,
        excerpt: ""
    },

    "2017/5/26": {
        url: "/diary/2017/05/26/soyaine-daily-128" ,
        excerpt: ""
    },

    "2017/5/24": {
        url: "/diary/2017/05/24/soyaine-daily-127" ,
        excerpt: ""
    },

    "2017/5/23": {
        url: "/diary/2017/05/23/soyaine-daily-126" ,
        excerpt: ""
    },

    "2017/5/22": {
        url: "/diary/2017/05/22/soyaine-daily-125" ,
        excerpt: ""
    },

    "2017/5/21": {
        url: "/diary/2017/05/21/soyaine-daily-124" ,
        excerpt: ""
    },

    "2017/5/20": {
        url: "/diary/2017/05/20/soyaine-daily-123" ,
        excerpt: ""
    },

    "2017/5/19": {
        url: "/diary/2017/05/19/soyaine-daily-122" ,
        excerpt: ""
    },

    "2017/5/18": {
        url: "/diary/2017/05/18/soyaine-daily-121" ,
        excerpt: ""
    },

    "2017/5/17": {
        url: "/diary/2017/05/17/soyaine-daily-120" ,
        excerpt: ""
    },

    "2017/5/15": {
        url: "/diary/2017/05/15/soyaine-daily-119" ,
        excerpt: ""
    },

    "2017/5/13": {
        url: "/diary/2017/05/13/soyaine-daily-118" ,
        excerpt: ""
    },

    "2017/5/12": {
        url: "/diary/2017/05/12/soyaine-daily-117" ,
        excerpt: ""
    },

    "2017/5/11": {
        url: "/diary/2017/05/11/soyaine-daily-116" ,
        excerpt: ""
    },

    "2017/5/9": {
        url: "/diary/2017/05/09/soyaine-daily-115" ,
        excerpt: ""
    },

    "2017/5/8": {
        url: "/diary/2017/05/08/soyaine-daily-114" ,
        excerpt: ""
    },

    "2017/5/7": {
        url: "/diary/2017/05/07/soyaine-daily-113" ,
        excerpt: ""
    },

    "2017/5/6": {
        url: "/diary/2017/05/06/soyaine-daily-112" ,
        excerpt: ""
    },

    "2017/5/5": {
        url: "/diary/2017/05/05/soyaine-daily-111" ,
        excerpt: ""
    },

    "2017/5/4": {
        url: "/diary/2017/05/04/soyaine-daily-110" ,
        excerpt: ""
    },

    "2017/5/3": {
        url: "/diary/2017/05/03/soyaine-daily-109" ,
        excerpt: ""
    },

    "2017/5/2": {
        url: "/diary/2017/05/02/soyaine-daily-108" ,
        excerpt: ""
    },

    "2017/5/1": {
        url: "/diary/2017/05/01/soyaine-daily-107" ,
        excerpt: ""
    },

    "2017/4/30": {
        url: "/diary/2017/04/30/soyaine-daily-106" ,
        excerpt: ""
    },

    "2017/4/28": {
        url: "/diary/2017/04/28/soyaine-daily-105" ,
        excerpt: ""
    },

    "2017/4/27": {
        url: "/diary/2017/04/27/soyaine-daily-104" ,
        excerpt: ""
    },

    "2017/4/25": {
        url: "/diary/2017/04/25/soyaine-daily-103" ,
        excerpt: ""
    },

    "2017/4/24": {
        url: "/diary/2017/04/24/soyaine-daily-102" ,
        excerpt: ""
    },

    "2017/4/23": {
        url: "/diary/2017/04/23/soyaine-daily-101" ,
        excerpt: ""
    },

    "2017/4/22": {
        url: "/diary/2017/04/22/soyaine-daily-100" ,
        excerpt: ""
    },

    "2017/4/21": {
        url: "/diary/2017/04/21/soyaine-daily-099" ,
        excerpt: ""
    },

    "2017/4/20": {
        url: "/diary/2017/04/20/soyaine-daily-098" ,
        excerpt: ""
    },

    "2017/4/19": {
        url: "/diary/2017/04/19/soyaine-daily-097" ,
        excerpt: "开发手记"
    },

    "2017/4/18": {
        url: "/diary/2017/04/18/soyaine-daily-096" ,
        excerpt: ""
    },

    "2017/4/17": {
        url: "/diary/2017/04/17/soyaine-daily-095" ,
        excerpt: ""
    },

    "2017/4/16": {
        url: "/diary/2017/04/16/soyaine-daily-094" ,
        excerpt: "GDG-Women Techmakers 北京站的一些记录 + About更新记录"
    },

    "2017/4/15": {
        url: "/diary/2017/04/15/soyaine-daily-093" ,
        excerpt: ""
    },

    "2017/4/14": {
        url: "/diary/2017/04/14/soyaine-daily-092" ,
        excerpt: ""
    },

    "2017/4/13": {
        url: "/diary/2017/04/13/soyaine-daily-091" ,
        excerpt: ""
    },

    "2017/4/12": {
        url: "/diary/2017/04/12/soyaine-daily-090" ,
        excerpt: ""
    },

    "2017/3/31": {
        url: "/diary/2017/03/31/soyaine-daily-089" ,
        excerpt: ""
    },

    "2017/3/24": {
        url: "/diary/2017/03/24/soyaine-daily-088" ,
        excerpt: "强行凑字数的五连击♪(^∇^*)"
    },

    "2017/3/23": {
        url: "/diary/2017/03/23/soyaine-daily-087" ,
        excerpt: "新的旅程开始了~"
    },

    "2017/3/22": {
        url: "/diary/2017/03/22/soyaine-daily-086" ,
        excerpt: "好久好久没练习，去吹笛子晃悠了一圈，很治愈。看完《四重奏》大结局，很温馨。"
    },

    "2017/3/21": {
        url: "/diary/2017/03/21/soyaine-daily-085" ,
        excerpt: "偶遇之喜"
    },

    "2017/3/20": {
        url: "/diary/2017/03/20/soyaine-daily-084" ,
        excerpt: "据说今天是国际幸福日，召唤了一次图片精灵"
    },

    "2017/3/19": {
        url: "/diary/2017/03/19/soyaine-daily-083" ,
        excerpt: "ECharts 中箱线图的数据问题"
    },

    "2017/3/18": {
        url: "/diary/2017/03/18/soyaine-daily-082" ,
        excerpt: ""
    },

    "2017/2/24": {
        url: "/diary/2017/02/24/soyaine-daily-081" ,
        excerpt: ""
    },

    "2017/2/22": {
        url: "/diary/2017/02/22/soyaine-daily-080" ,
        excerpt: ""
    },

    "2017/1/11": {
        url: "/diary/2017/01/11/soyaine-daily-079" ,
        excerpt: ""
    },

    "2017/1/10": {
        url: "/diary/2017/01/10/soyaine-daily-078" ,
        excerpt: "Diary 更新日志，TransChart 项目进程记录"
    },

    "2017/1/9": {
        url: "/diary/2017/01/09/soyaine-daily-077" ,
        excerpt: "TransChart 项目进程记录，阅读记录：EJS Jade MVC MVVM"
    },

    "2017/1/8": {
        url: "/diary/2017/01/08/soyaine-daily-076" ,
        excerpt: ""
    },

    "2017/1/7": {
        url: "/diary/2017/01/07/soyaine-daily-075" ,
        excerpt: ""
    },

    "2017/1/6": {
        url: "/diary/2017/01/06/soyaine-daily-074" ,
        excerpt: ""
    },

    "2017/1/3": {
        url: "/diary/2017/01/03/soyaine-daily-073" ,
        excerpt: ""
    },

    "2017/1/2": {
        url: "/diary/2017/01/02/soyaine-daily-072" ,
        excerpt: "The Impossible Dream (The Quest)"
    },

    "2017/1/1": {
        url: "/diary/2017/01/01/soyaine-daily-071" ,
        excerpt: ""
    },

    "2016/12/31": {
        url: "/diary/2016/12/31/soyaine-daily-070" ,
        excerpt: "关于 GitHub 图片加载的问题手记，关于 HTTP header 中的 Content-Length"
    },

    "2016/12/29": {
        url: "/diary/2016/12/29/soyaine-daily-069" ,
        excerpt: ""
    },

    "2016/12/28": {
        url: "/diary/2016/12/28/soyaine-daily-068" ,
        excerpt: ""
    },

    "2016/12/27": {
        url: "/diary/2016/12/27/soyaine-daily-067" ,
        excerpt: ""
    },

    "2016/12/25": {
        url: "/diary/2016/12/25/soyaine-daily-066" ,
        excerpt: ""
    },

    "2016/12/24": {
        url: "/diary/2016/12/24/soyaine-daily-065" ,
        excerpt: ""
    },

    "2016/12/23": {
        url: "/diary/2016/12/23/soyaine-daily-064" ,
        excerpt: ""
    },

    "2016/12/22": {
        url: "/diary/2016/12/22/soyaine-daily-063" ,
        excerpt: "学习笔记"
    },

    "2016/12/21": {
        url: "/diary/2016/12/21/soyaine-daily-062" ,
        excerpt: ""
    },

    "2016/12/20": {
        url: "/diary/2016/12/20/soyaine-daily-061" ,
        excerpt: "JavaScript30 begin"
    },

    "2016/12/11": {
        url: "/diary/2016/12/11/soyaine-daily-060" ,
        excerpt: ""
    },

    "2016/12/10": {
        url: "/diary/2016/12/10/soyaine-daily-059" ,
        excerpt: ""
    },

    "2016/12/9": {
        url: "/diary/2016/12/09/soyaine-daily-058" ,
        excerpt: "看了《你的名字》"
    },

    "2016/12/8": {
        url: "/diary/2016/12/08/soyaine-daily-057" ,
        excerpt: "something about liquid"
    },

    "2016/12/7": {
        url: "/diary/2016/12/07/soyaine-daily-056" ,
        excerpt: ""
    },

    "2016/12/6": {
        url: "/diary/2016/12/06/soyaine-daily-055" ,
        excerpt: "意外重新发现 Chain"
    },

    "2016/12/5": {
        url: "/diary/2016/12/05/soyaine-daily-054" ,
        excerpt: ""
    },

    "2016/12/4": {
        url: "/diary/2016/12/04/soyaine-daily-053" ,
        excerpt: "初步完成 diary 的雏形，看《我，堂吉诃德》的音乐剧"
    },

    "2016/12/3": {
        url: "/diary/2016/12/03/soyaine-daily-052" ,
        excerpt: ""
    },

    "2016/12/2": {
        url: "/diary/2016/12/02/soyaine-daily-051" ,
        excerpt: ""
    },

    "2016/9/27": {
        url: "/diary/2016/09/27/soyaine-daily-050" ,
        excerpt: "版式设计的学习"
    },

    "2016/7/12": {
        url: "/diary/2016/07/12/soyaine-daily-049" ,
        excerpt: "简单的每日总结"
    },

    "2016/7/11": {
        url: "/diary/2016/07/11/soyaine-daily-048" ,
        excerpt: "零散的感想总结"
    },

    "2016/6/30": {
        url: "/diary/2016/06/30/soyaine-daily-047" ,
        excerpt: ""
    },

    "2016/6/29": {
        url: "/diary/2016/06/29/soyaine-daily-046" ,
        excerpt: ""
    },

    "2016/6/28": {
        url: "/diary/2016/06/28/soyaine-daily-045" ,
        excerpt: ""
    },

    "2016/6/14": {
        url: "/diary/2016/06/14/soyaine-daily-044" ,
        excerpt: "其他想法"
    },

    "2016/6/13": {
        url: "/diary/2016/06/13/soyaine-daily-043" ,
        excerpt: "学习笔记"
    },

    "2016/6/12": {
        url: "/diary/2016/06/12/soyaine-daily-145" ,
        excerpt: ""
    },

    "2016/6/11": {
        url: "/diary/2016/06/11/soyaine-daily-042" ,
        excerpt: "反思"
    },

    "2016/6/9": {
        url: "/diary/2016/06/09/soyaine-daily-041" ,
        excerpt: "学习笔记 JavaScript下拉框选值"
    },

    "2016/6/5": {
        url: "/diary/2016/06/05/soyaine-daily-040" ,
        excerpt: "求职进展"
    },

    "2016/6/4": {
        url: "/diary/2016/06/04/soyaine-daily-039" ,
        excerpt: "求职进程"
    },

    "2016/6/3": {
        url: "/diary/2016/06/03/soyaine-daily-038" ,
        excerpt: "关于日报，话语摘录，学习笔记，求职进程"
    },

    "2016/6/1": {
        url: "/diary/2016/06/01/soyaine-daily-037" ,
        excerpt: "学习汇报"
    },

    "2016/5/31": {
        url: "/diary/2016/05/31/soyaine-daily-036" ,
        excerpt: "学习汇报"
    },

    "2016/5/30": {
        url: "/diary/2016/05/30/soyaine-daily-035" ,
        excerpt: "读书心得《天龙八部》，学习进程"
    },

    "2016/5/29": {
        url: "/diary/2016/05/29/soyaine-daily-034" ,
        excerpt: "学习汇报，其他想法，读书心得"
    },

    "2016/5/28": {
        url: "/diary/2016/05/28/soyaine-daily-033" ,
        excerpt: "生活的思考，学习笔记 CSS Transform"
    },

    "2016/5/25": {
        url: "/diary/2016/05/25/soyaine-daily-032" ,
        excerpt: "知乎掠影，读书心得"
    },

    "2016/5/24": {
        url: "/diary/2016/05/24/soyaine-daily-031" ,
        excerpt: "关于日报，学习笔记，其他想法"
    },

    "2016/5/23": {
        url: "/diary/2016/05/23/soyaine-daily-030" ,
        excerpt: "关于日报 关于网站 其他想法"
    },

    "2016/5/22": {
        url: "/diary/2016/05/22/soyaine-daily-029" ,
        excerpt: "两句勉励自己的话"
    },

    "2016/5/20": {
        url: "/diary/2016/05/20/soyaine-daily-028" ,
        excerpt: "学习笔记 CSS绘图"
    },

    "2016/5/18": {
        url: "/diary/2016/05/18/soyaine-daily-027" ,
        excerpt: "总结"
    },

    "2016/5/17": {
        url: "/diary/2016/05/17/soyaine-daily-026" ,
        excerpt: "睡前随想"
    },

    "2016/5/16": {
        url: "/diary/2016/05/16/soyaine-daily-025" ,
        excerpt: "学习笔记 居中心得、类图"
    },

    "2016/5/15": {
        url: "/diary/2016/05/15/soyaine-daily-024" ,
        excerpt: "学习笔记 居中，其他想法"
    },

    "2016/5/14": {
        url: "/diary/2016/05/14/soyaine-daily-023" ,
        excerpt: "学习笔记 CSS布局-position float z-index，其他想法"
    },

    "2016/5/13": {
        url: "/diary/2016/05/13/soyaine-daily-022" ,
        excerpt: "时间管理，读书心得《奇特的一生》，关于日报，其他想法"
    },

    "2016/5/11": {
        url: "/diary/2016/05/11/soyaine-daily-021" ,
        excerpt: "读书心得《茶馆之殇》，其他想法"
    },

    "2016/5/10": {
        url: "/diary/2016/05/10/soyaine-daily-020" ,
        excerpt: "读书心得《茶馆之殇》，其他想法"
    },

    "2016/5/9": {
        url: "/diary/2016/05/09/soyaine-daily-019" ,
        excerpt: "其他想法"
    },

    "2016/5/8": {
        url: "/diary/2016/05/08/soyaine-daily-018" ,
        excerpt: "学习笔记，其他想法"
    },

    "2016/5/7": {
        url: "/diary/2016/05/07/soyaine-daily-017" ,
        excerpt: "学习笔记，其他想法"
    },

    "2016/5/6": {
        url: "/diary/2016/05/06/soyaine-daily-016" ,
        excerpt: "学习笔记，观剧心得，读书心得"
    },

    "2016/5/5": {
        url: "/diary/2016/05/05/soyaine-daily-015" ,
        excerpt: "其他想法 读书心得 观影心得"
    },

    "2016/5/4": {
        url: "/diary/2016/05/04/soyaine-daily-014" ,
        excerpt: "读书心得，阅读《成功，动机与目标》 "
    },

    "2016/5/3": {
        url: "/diary/2016/05/03/soyaine-daily-013" ,
        excerpt: "关于日报，学习笔记 CSS盒模型，IFE Practice，阅读，运动"
    },

    "2016/5/2": {
        url: "/diary/2016/05/02/soyaine-daily-012" ,
        excerpt: "学习笔记 CSS 盒模型"
    },

    "2016/5/1": {
        url: "/diary/2016/05/01/soyaine-daily-011" ,
        excerpt: "观剧心得《Legal High》第 8、11 集，读书心得《成功，动机与目标》，关于日报，行动反思"
    },

    "2016/4/30": {
        url: "/diary/2016/04/30/soyaine-daily-010" ,
        excerpt: "观剧心得《Legal High》第 7 集，读书心得《成功，动机与目标》《MacTalk 跨越边界》，其他想法 Coursera - Learn How to Learn"
    },

    "2016/4/29": {
        url: "/diary/2016/04/29/soyaine-daily-009" ,
        excerpt: "观剧心得《Legal High》第 6 集，读书心得《成功，动机与目标》"
    },

    "2016/4/28": {
        url: "/diary/2016/04/28/soyaine-daily-008" ,
        excerpt: "观剧心得《Legal High》第 5 集，读书心得《成功，动机与目标》"
    },

    "2016/4/27": {
        url: "/diary/2016/04/27/soyaine-daily-007" ,
        excerpt: "观剧心得《Legal High》第2、3、4集，学习心得「元」CMS"
    },

    "2016/4/26": {
        url: "/diary/2016/04/26/soyaine-daily-006" ,
        excerpt: "阅读心得《奖赏会伤人》、Learn How to Learn、 TED、 高情商的人如何在沟通中化险为夷？，关于公众号"
    },

    "2016/4/25": {
        url: "/diary/2016/04/25/soyaine-daily-005" ,
        excerpt: "关于日报，随思随想，阅读心得，观剧心得《琅琊榜》《未生》第 19 集"
    },

    "2016/4/24": {
        url: "/diary/2016/04/24/soyaine-daily-004" ,
        excerpt: "关于日报，关于技能，关于生活"
    },

    "2016/4/23": {
        url: "/diary/2016/04/23/soyaine-daily-003" ,
        excerpt: "读书心得《把时间当做朋友》"
    },

    "2016/4/22": {
        url: "/diary/2016/04/22/soyaine-daily-002" ,
        excerpt: "关于技能 Python抓数据"
    },

    "2016/4/21": {
        url: "/diary/2016/04/21/soyaine-daily-001" ,
        excerpt: "关于日报，读书札记《把时间当做朋友》，关于技能 CSS，其他内容 小狼毫/鼠须管"
    },

    "2015/6/12": {
        url: "/diary/2015/06/12/hello-aoao" ,
        excerpt: "Hello World"
    },

    "end": "end"
};