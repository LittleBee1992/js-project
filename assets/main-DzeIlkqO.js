/* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const B=e=>{let t;localStorage.getItem("cookies")==null?(t=[],t.push(e),localStorage.setItem("cookies",JSON.stringify(t))):(t=JSON.parse(localStorage.getItem("cookies")),t.push(e),localStorage.setItem("cookies",JSON.stringify(t)))},C=()=>{let e;return localStorage.getItem("cookies")==null?e=[]:e=JSON.parse(localStorage.getItem("cookies")),e},q=e=>{const t=JSON.parse(localStorage.getItem("cookies"));t.forEach((o,c)=>{o.id===e.id&&(console.log(e.id),console.log(o.id),t.splice(c,1,e))}),localStorage.setItem("cookies",JSON.stringify(t))},E=e=>{const t=JSON.parse(localStorage.getItem("cookies"));t.forEach((o,c)=>{o.id===e&&t.splice(c,1)}),localStorage.setItem("cookies",JSON.stringify(t))},$=()=>{localStorage.removeItem("cookies")};class M{constructor(t,o,c,s){this.id=t,this.name=o,this.money=c,this.category=s}}const a={items:C(),currentItem:null,totalMoney:0},x=()=>a.items,O=(e,t,o,c)=>{t=parseInt(t),c.includes("-")?t=t*-1:t=t;let s;a.items.length>0?s=a.items[a.items.length-1].id+1:s=0;const n=new M(s,e,t,o);return a.items.push(n),n},N=e=>{let t;return a.items.forEach(o=>{o.id===e&&(t=o)}),t},w=(e,t,o,c)=>{t=parseInt(t),c.includes("-")?t=-t:t=t*-1;let s;return a.items.forEach(n=>{n.id===a.currentItem.id&&(n.name=e,n.money=t,n.category=o,s=n)}),s},T=e=>{a.items.forEach((t,o)=>{t.id===e&&(console.log(o),a.items.splice(o,1))})},P=()=>{a.items=[]},J=e=>{a.currentItem=e},v=()=>a.currentItem,y=()=>{let e=[0];return a.items.forEach(t=>{e.push(t.money)}),a.totalMoney=e.reduce((t,o)=>t+o),a.totalMoney},A=()=>a,l={ulList:".transaction-list",liList:".transaction",inputName:"#item-name",inputMoney:"#item-money",addBtn:".add-btn",updateBtn:".update-btn",deleteBtn:".delete-btn",backBtn:".back-btn",totalMoney:".total__cash",category:"#category",removeBtn:".btn-remove",svg:"svg",totalPercent:".total__percent"},D=e=>{const t=document.querySelector(l.ulList);e.forEach(o=>{const c=document.createElement("li");c.classList.add("transaction"),c.setAttribute("id",o.id),c.innerHTML=`<p class="transaction-name"><i class="${o.category}"></i>${o.name}</p>
            <p class="transaction-amount">${o.money}zł <button class="edit"><i class="fa fa-pencil"></i></button></p>`,o.money>0?c.lastChild.style.color="lime":c.lastChild.style.color="red",t.append(c)})},_=e=>{const t=document.querySelector(l.ulList),o=document.createElement("li");o.classList.add("transaction"),o.setAttribute("id",e.id),o.innerHTML=`<p class="transaction-name"><i class="${e.category}"></i>${e.name}</p>
    <p class="transaction-amount">${e.money}zł <button class="edit"><i class="fa fa-pencil"></i></button></p>`,e.money>0?o.lastChild.style.color="lime":o.lastChild.style.color="red",t.append(o)},U=e=>{document.querySelectorAll(l.liList).forEach(o=>{o.id==e.id&&(o.innerHTML=`<p class="transaction-name"><i class="${e.category}"></i>${e.name}</p><p class="transaction-amount">${e.money}zł <button class="edit"><i class="fa fa-pencil"></i></button></p>`,e.money>0?o.lastChild.style.color="lime":o.lastChild.style.color="red")})},p=e=>{const o=document.querySelector(l.svg).lastChild.previousElementSibling,c=document.querySelector(l.totalPercent),s=parseInt(e/1e6*100);let n=0;c.textContent=`${n}%`,o.style.cssText=`--percent: ${n} `,o.attributes.stroke.value="";let I=setInterval(()=>{n<s?(n++,c.textContent=n+"%",o.style.cssText=`--percent: ${n}`,o.attributes.stroke.value="lime",n>=100&&(n=100,clearInterval(I))):n>s&&(c.textContent=`${n}%`,o.style.cssText=`--percent: ${n}`,n--,o.attributes.stroke.value="red",n<=-100&&(n=-100,clearInterval(I))),o.style.cssText=`--percent: ${n}`,c.textContent=`${n}%`},20)},F=e=>{document.getElementById(e).remove()},H=()=>{document.querySelector(l.ulList).textContent=""},h=()=>{const e=document.querySelector(l.category);return e.options[e.selectedIndex].text},k=e=>{let t;switch(e){case"[ + ] Incomes":t="fas fa-money-bill-wave";break;case"[ - ] Home":t="fa-solid fa-house";break;case"[ - ] Entertaiment":t="fas fa-film";break;case"[ - ] Shopping":t="fas fa-cart-arrow-down";break}return t},z=e=>{e.name.value=v().name,e.money.value=v().money},g=e=>{const t=document.querySelector(l.totalMoney);let o=0,c=parseInt(e/100),n=setInterval(()=>{e>0?(o+=c,t.textContent=o+"$",o>=e&&(t.textContent=e+"$",clearInterval(n))):(o-=-c,t.textContent=o+"$",o<=e&&(t.textContent=e+"$",clearInterval(n)))},10)},K=()=>{const e=document.querySelector(l.inputName),t=document.querySelector(l.inputMoney),o=document.querySelector(l.category);return{name:e,money:t,category:o}},S=e=>{e.name.value="",e.money.value="",e.category.selectedIndex=0},j=()=>l,f=(e,t)=>{document.querySelector(l.addBtn).style.display=e,document.querySelector(l.updateBtn).style.display=t,document.querySelector(l.deleteBtn).style.display=t,document.querySelector(l.backBtn).style.display=t},G=()=>{document.querySelector(".transactions").classList.toggle("active")},Q=()=>{const e=K(),t=()=>{if(e.name.value!==""&&e.money.value!==""&&e.category.selectedIndex!==0){const r=h(),i=k(r),d=O(e.name.value,e.money.value,i,r);_(d);const u=y();g(u),p(u),S(e),B(d);const b=A();console.log(b)}},o=r=>{if(r.target.matches(".fa-pencil")){const i=r.target.closest("li").id,d=parseInt(i),u=N(d);J(u),z(e),f("none","inline")}},c=()=>{if(e.name.value!==""&&e.money.value!==""&&e.category.selectedIndex!==0){const r=h(),i=k(r),d=w(e.name.value,e.money.value,i,r);U(d);const u=y();g(u),p(u),f("inline","none"),q(d),S(e)}},s=()=>{const r=v();T(r.id),F(r.id);const i=y();g(i),p(i),f("inline","none"),S(e),E(r.id)},n=()=>{P(),H();const r=y();g(r),p(r),$()},m=()=>{f("inline","none"),S(e)},I=()=>{const r=j();document.querySelector(r.addBtn).addEventListener("click",t),document.querySelector(r.ulList).addEventListener("click",o),document.querySelector(r.updateBtn).addEventListener("click",c),document.querySelector(r.deleteBtn).addEventListener("click",s),document.querySelector(r.removeBtn).addEventListener("click",n),document.querySelector(r.backBtn).addEventListener("click",m),document.querySelector(".transaction__burger").addEventListener("click",G)},L=()=>{const r=x();D(r);const i=y();g(i),p(i),f("inline","none")};I(),L()};window.addEventListener("DOMContentLoaded",Q);
