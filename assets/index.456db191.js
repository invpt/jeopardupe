(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const E={};function Se(e){E.context=e}const Te=(e,t)=>e===t,me=Symbol("solid-track"),j={equals:Te};let pe=ve;const O=1,z=2,ge={owned:null,cleanups:null,context:null,owner:null};var A=null;let R=null,v=null,T=null,D=null,oe=0;function U(e,t){const n=v,s=A,i=e.length===0,r=i?ge:{owned:null,cleanups:null,context:null,owner:t||s},l=i?e:()=>e(()=>H(()=>le(r)));A=r,v=null;try{return M(l,!0)}finally{v=n,A=s}}function I(e,t){t=t?Object.assign({},j,t):j;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),_e(n,i));return[we.bind(n),s]}function S(e,t,n){const s=re(e,t,!1,O);F(s)}function xe(e,t,n){pe=ke;const s=re(e,t,!1,O);s.user=!0,D?D.push(s):F(s)}function P(e,t,n){n=n?Object.assign({},j,n):j;const s=re(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,F(s),we.bind(s)}function H(e){const t=v;v=null;try{return e()}finally{v=t}}function ye(e){return A===null||(A.cleanups===null?A.cleanups=[e]:A.cleanups.push(e)),e}function we(){const e=R;if(this.sources&&(this.state||e))if(this.state===O||e)F(this);else{const t=T;T=null,M(()=>G(this),!1),T=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function _e(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=R&&R.running;l&&R.disposed.has(r),(l&&!r.tState||!l&&!r.state)&&(r.pure?T.push(r):D.push(r),r.observers&&$e(r)),l||(r.state=O)}if(T.length>1e6)throw T=[],new Error},!1)),t}function F(e){if(!e.fn)return;le(e);const t=A,n=v,s=oe;v=A=e,qe(e,e.value,s),v=n,A=t}function qe(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=O),be(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?_e(e,s):e.value=s,e.updatedAt=n)}function re(e,t,n,s=O,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:null,pure:n};return A===null||A!==ge&&(A.owned?A.owned.push(r):A.owned=[r]),r}function K(e){const t=R;if(e.state===0||t)return;if(e.state===z||t)return G(e);if(e.suspense&&H(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===O||t)F(e);else if(e.state===z||t){const i=T;T=null,M(()=>G(e,n[0]),!1),T=i}}function M(e,t){if(T)return e();let n=!1;t||(T=[]),D?n=!0:D=[],oe++;try{const s=e();return Ne(n),s}catch(s){T||(D=null),be(s)}}function Ne(e){if(T&&(ve(T),T=null),e)return;const t=D;D=null,t.length&&M(()=>pe(t),!1)}function ve(e){for(let t=0;t<e.length;t++)K(e[t])}function ke(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:K(s)}for(E.context&&Se(),t=0;t<n;t++)K(e[t])}function G(e,t){const n=R;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===O||n?i!==t&&K(i):(i.state===z||n)&&G(i,t))}}function $e(e){const t=R;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=z,s.pure?T.push(s):D.push(s),s.observers&&$e(s))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function We(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function be(e){throw e=We(e),e}const ne=Symbol("fallback");function V(e){for(let t=0;t<e.length;t++)e[t]()}function Be(e,t,n={}){let s=[],i=[],r=[],l=0,o=t.length>1?[]:null;return ye(()=>V(r)),()=>{let a=e()||[],c,u;return a[me],H(()=>{let f=a.length,$,N,x,L,h,p,d,g,y;if(f===0)l!==0&&(V(r),r=[],s=[],i=[],l=0,o&&(o=[])),n.fallback&&(s=[ne],i[0]=U(b=>(r[0]=b,n.fallback())),l=1);else if(l===0){for(i=new Array(f),u=0;u<f;u++)s[u]=a[u],i[u]=U(m);l=f}else{for(x=new Array(f),L=new Array(f),o&&(h=new Array(f)),p=0,d=Math.min(l,f);p<d&&s[p]===a[p];p++);for(d=l-1,g=f-1;d>=p&&g>=p&&s[d]===a[g];d--,g--)x[g]=i[d],L[g]=r[d],o&&(h[g]=o[d]);for($=new Map,N=new Array(g+1),u=g;u>=p;u--)y=a[u],c=$.get(y),N[u]=c===void 0?-1:c,$.set(y,u);for(c=p;c<=d;c++)y=s[c],u=$.get(y),u!==void 0&&u!==-1?(x[u]=i[c],L[u]=r[c],o&&(h[u]=o[c]),u=N[u],$.set(y,u)):r[c]();for(u=p;u<f;u++)u in x?(i[u]=x[u],r[u]=L[u],o&&(o[u]=h[u],o[u](u))):i[u]=U(m);i=i.slice(0,l=f),s=a.slice(0)}return i});function m(f){if(r[u]=f,o){const[$,N]=I(u);return o[u]=N,t(a[u],$)}return t(a[u])}}}function Ee(e,t,n={}){let s=[],i=[],r=[],l=[],o=0,a;return ye(()=>V(r)),()=>{const c=e()||[];return c[me],H(()=>{if(c.length===0)return o!==0&&(V(r),r=[],s=[],i=[],o=0,l=[]),n.fallback&&(s=[ne],i[0]=U(m=>(r[0]=m,n.fallback())),o=1),i;for(s[0]===ne&&(r[0](),r=[],s=[],i=[],o=0),a=0;a<c.length;a++)a<s.length&&s[a]!==c[a]?l[a](()=>c[a]):a>=s.length&&(i[a]=U(u));for(;a<s.length;a++)r[a]();return o=l.length=r.length=c.length,s=c.slice(0),i=i.slice(0,o)});function u(m){r[a]=m;const[f,$]=I(c[a]);return l[a]=$,t(f,a)}}}function B(e,t){return H(()=>e(t||{}))}function Z(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Be(()=>e.each,e.children,t||void 0))}function Le(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Ee(()=>e.each,e.children,t||void 0))}function Je(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,a=t[i-1].nextSibling,c=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const u=r<s?o?n[o-1].nextSibling:n[r-o]:a;for(;o<r;)e.insertBefore(n[o++],u)}else if(r===o)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],u),t[i]=n[r]}else{if(!c){c=new Map;let m=o;for(;m<r;)c.set(n[m],m++)}const u=c.get(t[l]);if(u!=null)if(o<u&&u<r){let m=l,f=1,$;for(;++m<i&&m<r&&!(($=c.get(t[m]))==null||$!==u+f);)f++;if(f>u-o){const N=t[l];for(;o<u;)e.insertBefore(n[o++],N)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const ue="_$DX_DELEGATE";function De(e,t,n,s={}){let i;return U(r=>{i=r,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function k(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ae(e,t=window.document){const n=t[ue]||(t[ue]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Ie))}}function ee(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ce(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function Oe(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(ce(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(ce(e,o,!0),n[o]=a)}return n}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return X(e,t,s,n);S(i=>X(e,t(),i,n),s)}function ce(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function Ie(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),E.registry&&!E.done&&(E.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function X(e,t,n,s,i){for(E.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(E.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=Q(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(E.context)return n;n=Q(e,n,s)}else{if(r==="function")return S(()=>{let o=t();for(;typeof o=="function";)o=o();n=X(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(se(o,t,n,i))return S(()=>n=X(e,o,n,s,!0)),()=>n;if(E.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=Q(e,n,s),l)return n}else a?n.length===0?fe(e,o,s):Je(e,n,o):(n&&Q(e),fe(e,o));n=o}else if(t instanceof Node){if(E.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=Q(e,n,s,t);Q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function se(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],a=n&&n[r];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=se(e,o,a)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=se(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||i}else e.push(o),i=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return i}function fe(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function Q(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const a=o.parentNode===e;!r&&!l?a?e.replaceChild(i,o):e.insertBefore(i,n):a&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const Re="_Wrapper_1xczt_1",Qe="_ResetButton_1xczt_8",Ue="_JeopardyColumns_1xczt_41",Pe="_JeopardyColumn_1xczt_41",He="_JeopardyColumnHeaders_1xczt_54",Fe="_QA_1xczt_74",Me="_CodeQuestion_1xczt_79",je="_Answer_1xczt_94",ze="_ShowAnswer_1xczt_103",Ke="_DoneButton_1xczt_117",W={Wrapper:Re,ResetButton:Qe,JeopardyColumns:Ue,JeopardyColumn:Pe,JeopardyColumnHeaders:He,QA:Fe,CodeQuestion:Me,Answer:je,ShowAnswer:ze,DoneButton:Ke},Ge="_JeopardyCard_11yhd_1",Ve="_Done_11yhd_16",de={JeopardyCard:Ge,Done:Ve},Xe=k("<button>$</button>"),Ye=({question:e,done:t,onClick:n})=>(()=>{const s=Xe.cloneNode(!0);return s.firstChild,Ce(s,"click",n,!0),C(s,()=>e.points,null),S(i=>{const r=de.JeopardyCard,l={[de.Done]:t()};return r!==i._v$&&_(s,i._v$=r),i._v$2=Oe(s,l,i._v$2),i},{_v$:void 0,_v$2:void 0}),s})();ae(["click"]);const Ze=""+new URL("x.3dc22299.svg",import.meta.url).href,et="_Teams_lsh0y_1",tt="_Hidden_lsh0y_13",nt="_TeamWrapper_lsh0y_17",st="_Team_lsh0y_1",it="_Score_lsh0y_37",ot="_RemoveTeam_lsh0y_82",rt="_AddTeam_lsh0y_100",lt="_AnswerButtons_lsh0y_115",at="_WrongButton_lsh0y_124",ut="_RightButton_lsh0y_125",J={Teams:et,Hidden:tt,TeamWrapper:nt,Team:st,Score:it,RemoveTeam:ot,AddTeam:rt,AnswerButtons:lt,WrongButton:at,RightButton:ut},ct=k("<div><button>+</button></div>"),ft=k('<div><div><div><input type="text" name="team-score" placeholder="Score"></div><input type="text" name="team-name" placeholder="Team Name"><div><button>Wrong</button><button>Right</button></div></div><button><img width="20" height="20" title="Delete Team"></button></div>'),dt=({teamsSignal:e,currentCQ:t,answerShown:n})=>{const[s,i]=e;return(()=>{const r=ct.cloneNode(!0),l=r.firstChild;return C(r,B(Le,{get each(){return s()},children:(o,a)=>B(ht,{index:a,team:o,setTeam:c=>i([...s().slice(0,a),c,...s().slice(a+1)]),remove:()=>i([...s().slice(0,a),...s().slice(a+1)]),qPoints:()=>t()?.question.points})}),l),l.$$click=()=>i([...s(),{name:"",points:0}]),S(o=>{const a=J.Teams,c=J.AddTeam;return a!==o._v$&&_(r,o._v$=a),c!==o._v$2&&_(l,o._v$2=c),o},{_v$:void 0,_v$2:void 0}),r})()},ht=({index:e,team:t,setTeam:n,remove:s,qPoints:i})=>{function r(o){n({...t(),name:o.currentTarget.value})}function l(o){const a=o.currentTarget.value.trim().replace("$","");a!==""&&!Number.isNaN(+a)&&n({...t(),points:+a})}return(()=>{const o=ft.cloneNode(!0),a=o.firstChild,c=a.firstChild,u=c.firstChild,m=c.nextSibling,f=m.nextSibling,$=f.firstChild,N=$.nextSibling,x=a.nextSibling,L=x.firstChild;return u.$$input=l,ee(u,"id",`team-${e}-score`),m.$$input=r,ee(m,"id",`team-${e}-name`),$.$$click=()=>{i()!=null&&n({...t(),points:t().points-i()})},N.$$click=()=>{console.log(i()),i()!=null&&n({...t(),points:t().points+i()})},Ce(x,"click",s,!0),ee(L,"src",Ze),S(h=>{const p=J.TeamWrapper,d=J.Team,g=J.Score,y=J.AnswerButtons,b=J.WrongButton,w=J.RightButton,q=J.RemoveTeam;return p!==h._v$3&&_(o,h._v$3=p),d!==h._v$4&&_(a,h._v$4=d),g!==h._v$5&&_(c,h._v$5=g),y!==h._v$6&&_(f,h._v$6=y),b!==h._v$7&&_($,h._v$7=b),w!==h._v$8&&_(N,h._v$8=w),q!==h._v$9&&_(x,h._v$9=q),h},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),S(()=>u.value="$"+t().points),S(()=>m.value=t().name),o})()};ae(["click","input"]);const mt=k("<div><header></header></div>"),Ae=k("<pre><code></code></pre>"),ie=k("<div></div>"),pt=k("<div><main></main><button>RESET</button></div>"),gt=k("<div><div></div><div></div></div>"),yt=k("<header></header>"),wt=k("<button>Done</button>"),_t=k("<button>Show Answer</button>"),vt=({prompt:e,code:t})=>(()=>{const n=mt.cloneNode(!0),s=n.firstChild;return C(s,e),C(n,t!=null?(()=>{const i=Ae.cloneNode(!0),r=i.firstChild;return C(r,t),i})():null,null),S(()=>_(n,W.CodeQuestion)),n})(),$t=({answer:e,code:t})=>(()=>{const n=ie.cloneNode(!0);return C(n,e,null),C(n,t!=null?(()=>{const s=Ae.cloneNode(!0),i=s.firstChild;return C(i,t),s})():null,null),S(()=>_(n,W.Answer)),n})(),te=[{name:"Programming Languages",questions:[{points:200,question:"This language, invented by Guido van Rossum, is often used for web development and data analysis.",answer:"What is Python?"},{points:400,question:"This language, created by James Gosling at Sun Microsystems, is object-oriented and platform-independent.",answer:"What is Java?"},{points:600,question:"This language, designed by Brendan Eich, is most commonly used for client-side web development.",answer:"What is JavaScript?"},{points:800,question:"This programming language, first appearing in 1972, is known for its efficiency and is often used for system programming.",answer:"What is C?"},{points:1e3,question:"This functional language, which has roots in academia, is used in sectors like finance and has a mascot named Conrad.",answer:"What is Haskell?"}]},{name:"Data Structures",questions:[{points:200,question:"This data structure operates on a Last-In, First-Out (LIFO) principle.",answer:"What is a Stack?"},{points:400,question:"This tree-based data structure maintains a sorted order of its elements.",answer:"What is a Binary Search Tree (BST)?"},{points:600,question:"In this data structure, each element points to both a 'next' and 'previous' element.",answer:"What is a Doubly Linked List?"},{points:800,question:"This data structure can have a worst case search, insert, and delete time complexity of O(1).",answer:"What is a Hash Table (or Hash Map)?"},{points:1e3,question:"This non-linear data structure represents hierarchical data and is used in applications such as network routing and abstract syntax trees.",answer:"What is a Tree?"}]},{name:"Algorithms",questions:[{points:200,question:"This sorting algorithm works by repeatedly swapping adjacent elements if they are in the wrong order.",answer:"What is Bubble Sort?"},{points:400,question:"This divide-and-conquer algorithm works by partitioning an array into smaller sub-arrays.",answer:"What is QuickSort?"},{points:600,question:"This algorithm is used to find the shortest path between nodes in a graph.",answer:"What is Dijkstra's Algorithm?"},{points:800,question:"This technique stores solutions of overlapping subproblems to improve computational efficiency.",answer:"What is Dynamic Programming?"},{points:1e3,question:"This algorithm is used to determine the single-source shortest paths in a graph with negative weight edges but no negative weight cycles.",answer:"What is Bellman-Ford Algorithm?"}]},{name:"Operating Systems",questions:[{points:200,question:"This family of operating systems is derived from the Unix operating system.",answer:"What is Linux?"},{points:400,question:"This scheduling algorithm assigns CPU to the process with the smallest next CPU burst.",answer:"What is Shortest Job First (SJF)?"},{points:600,question:"This mechanism allows operating systems to run multiple processes concurrently, sharing a single CPU.",answer:"What is Multitasking?"},{points:800,question:"This is a technique that allows a computer to run a program that requires more memory space than is physically available.",answer:"What is Virtual Memory?"},{points:1e3,question:"This policy replaces the page that will not be used for the longest time in the future.",answer:"What is Optimal Page Replacement?"}]},{name:"Computer Architecture",questions:[{points:200,question:"This is the primary storage area for instructions to be executed by the CPU.",answer:"What is the main memory or RAM?"},{points:400,question:"In a CPU, this component performs arithmetic and logical operations.",answer:"What is the Arithmetic Logic Unit (ALU)?"},{points:600,question:"This type of CPU architecture uses a pipeline to allow more than one instruction to be executed at any given time.",answer:"What is Superscalar architecture?"},{points:800,question:"This is a collection of wires through which data is transmitted from one part of a computer to another.",answer:"What is a Bus?"},{points:1e3,question:"This component of the CPU provides timing and control signals for the operations of all other units.",answer:"What is the Control Unit?"}]}],he={name:"Final Jeopardy",questions:[{points:1e3,question:"Derived from Latin for 'few' and often used in optimization problems, this algorithmic technique builds a solution piece by piece, making choices that offer the most immediate benefit. It's known to provide local optima but not necessarily a global optimum.",answer:"What is a Greedy Algorithm?"}]},bt=()=>{const e=window.localStorage.getItem("teams"),t=window.localStorage.getItem("doneQuestions");let n=[];e!=null&&(n=JSON.parse(e));let s=[];t!=null&&(s=JSON.parse(t));const i=I(n),[r,l]=i,[o,a]=I(s),[c,u]=I(),[m,f]=I(!1),[$,N]=I(!1);return xe(()=>{window.localStorage.setItem("teams",JSON.stringify(r())),window.localStorage.setItem("doneQuestions",JSON.stringify(o()))}),(()=>{const x=pt.cloneNode(!0),L=x.firstChild,h=L.nextSibling;return C(L,(()=>{const p=P(()=>c()==null);return()=>p()?(()=>{const d=gt.cloneNode(!0),g=d.firstChild,y=g.nextSibling;return C(g,B(Z,{each:te,children:b=>(()=>{const w=yt.cloneNode(!0);return C(w,()=>b.name),w})()})),C(y,B(Z,{each:te,children:b=>(()=>{const w=ie.cloneNode(!0);return C(w,B(Z,{get each(){return b.questions},children:(q,Y)=>B(Ye,{question:q,done:()=>o().indexOf(b.name+Y())!=-1,onClick:()=>u({category:b,question:q})})})),S(()=>_(w,W.JeopardyColumn)),w})()})),S(b=>{const w=W.JeopardyColumnHeaders,q=W.JeopardyColumns;return w!==b._v$3&&_(g,b._v$3=w),q!==b._v$4&&_(y,b._v$4=q),b},{_v$3:void 0,_v$4:void 0}),d})():(()=>{const d=ie.cloneNode(!0);return C(d,()=>B(vt,{get prompt(){return c().question.question},get code(){return c().question.questionCode}}),null),C(d,(()=>{const g=P(()=>!!m());return()=>g()?[P(()=>B($t,{get answer(){return c().question.answer},get code(){return c().question.answerCode}})),(()=>{const y=wt.cloneNode(!0);return y.$$click=()=>{const b=c().category.name+c()?.category.questions.findIndex(w=>w==c().question);o().indexOf(b)==-1&&a([...o(),c().category.name+c()?.category.questions.findIndex(w=>w==c().question)]),u(void 0),f(!1),o().length==te.map(w=>w.questions.map(q=>1).reduce((q,Y)=>q+Y)).reduce((w,q)=>w+q)&&!$()&&(alert("Final Jeopardy!"),u({category:he,question:he.questions[0]}),N(!0))},S(()=>_(y,W.DoneButton)),y})()]:(()=>{const y=_t.cloneNode(!0);return y.$$click=()=>f(!0),S(()=>_(y,W.ShowAnswer)),y})()})(),null),S(()=>_(d,W.QA)),d})()})()),h.$$click=()=>{!confirm("Are you sure you want to reset the board?")||!confirm("Resetting the board.")||(l([]),a([]),u(void 0),f(!1))},C(x,B(dt,{teamsSignal:i,currentCQ:c,answerShown:m}),null),S(p=>{const d=W.Wrapper,g=W.ResetButton;return d!==p._v$&&_(x,p._v$=d),g!==p._v$2&&_(h,p._v$2=g),p},{_v$:void 0,_v$2:void 0}),x})()};ae(["click"]);De(()=>B(bt,{}),document.getElementById("root"));