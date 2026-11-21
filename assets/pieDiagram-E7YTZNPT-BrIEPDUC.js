import{p as et}from"./chunk-JWPE2WC7-Bltmxy4m.js";import{g as at,s as rt,a as it,b as ot,q as nt,p as st,_ as l,l as z,c as lt,E as ct,I as dt,J as pt,K as U,d as gt,t as ht,L as mt,G as ft}from"./mermaid-XW76GIA2-naJbi7mC.js";import{p as ut}from"./cynefin-OW5HDTMX-DG1Ngd22.js";import{o as vt}from"./d3-scale-BLyZcHiq.js";import"./index-BEpbVRWG.js";import"./tutor-IaGduGHH.js";import"./arrow-down-TSbquK9-.js";import"./separator-DPNZ9SHo.js";import"./index-C-y0Qfh7.js";import"./index-BGTe7olG.js";import"./purify.es-BhqXAQOW.js";import"./d3-path-CgeVrazB.js";import"./index-GAwWDs4w.js";import"./dialog-BWTHkpFC.js";import"./search-CpYG8w2i.js";import"./dropdown-menu-CKdWozaQ.js";import"./index-D3luIKtv.js";import"./chevron-right-BHu0TnVV.js";import"./circle-C0kZKLzn.js";import"./textarea-eRKpShF_.js";import"./square-DmSFjfLH.js";import"./refresh-cw-x2q8mVGC.js";var St=ft.pie,L={sections:new Map,showData:!1},T=L.sections,R=L.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),$t=l(()=>{T=new Map,R=L.showData,ht()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>T,"getSections"),yt=l(t=>{R=t},"setShowData"),Tt=l(()=>R,"getShowData"),q={getConfig:wt,clear:$t,setDiagramTitle:st,getDiagramTitle:nt,setAccTitle:ot,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:Ct,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await ut("pie",t);z.debug(a),bt(a,q)},"parse")},_t=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=_t,Et=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),W=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return mt().value(n=>n.value).sort(null)(W)},"createPieArcs"),zt=l((t,a,W,F)=>{var N;z.debug(`rendering pie chart
`+t);const n=F.db,u=lt(),h=ct(n.getConfig(),u.pie),G=40,i=18,c=4,$=450,S=$,b=dt(a),C=b.append("g");C.attr("transform","translate("+S/2+","+$/2+")");const{themeVariables:o}=u;let[H]=pt(o.pieOuterStrokeWidth);H??(H=2);const J=h.legendPosition,M=h.textPosition,K=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,m=Math.min(S,$)/2-G,V=U().innerRadius(K*m).outerRadius(m),X=U().innerRadius(m*M).outerRadius(m*M),x=C.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",m+H/2).attr("class","pieOuterCircle");const D=n.getSections(),Z=Et(D),j=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const O=Z.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=vt(j).domain([...D.keys()]);x.selectAll("mySlices").data(O).enter().append("path").attr("d",V).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+X.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=C.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),f=C.selectAll(".legend").data(w).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),f.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=$,k=S+G;const s=i+c,E=w.length*s;switch(J){case"center":f.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=E,f.attr("transform",(e,r)=>{const d=m,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,f.attr("transform",(e,r)=>{const d=-m-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":k+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,p=-m-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:k+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const P=((N=Q.node())==null?void 0:N.getBoundingClientRect().width)??0,Y=S/2-P/2,tt=S/2+P/2,B=Math.min(0,Y),I=Math.max(k,tt)-B;b.attr("viewBox",`${B} 0 ${I} ${y}`),gt(b,y,I,h.useMaxWidth)},"draw"),Lt={draw:zt},ae={parser:At,db:q,renderer:Lt,styles:kt};export{ae as diagram};
