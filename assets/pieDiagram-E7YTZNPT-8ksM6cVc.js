import{p as et}from"./chunk-JWPE2WC7-BfIYJ6jx.js";import{g as at,s as rt,a as it,b as ot,r as nt,q as st,c as l,l as z,d as lt,E as ct,H as dt,I as pt,J as U,e as gt,t as ht,K as mt,F as ft}from"./mermaid-2K7CK3J4-BNGKx7bK.js";import{p as ut}from"./cynefin-OW5HDTMX-CTh2bMWu.js";import{o as vt}from"./d3-scale-BLyZcHiq.js";import"./index-jWeqikei.js";import"./tutor-DXY5EPGi.js";import"./arrow-down-DsOlWzjQ.js";import"./separator-fnCaenZn.js";import"./index-DRvduj3W.js";import"./index-DxKQI6NO.js";import"./purify.es-BhqXAQOW.js";import"./d3-path-CgeVrazB.js";import"./index-COcp1A_g.js";import"./dialog-u_8TrbFt.js";import"./search-Ci0KkMUA.js";import"./textarea-BNbd6UdO.js";import"./square-BeX5xkiV.js";import"./refresh-cw-BOaX99FR.js";var St=ft.pie,R={sections:new Map,showData:!1},T=R.sections,F=R.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),$t=l(()=>{T=new Map,F=R.showData,ht()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>T,"getSections"),yt=l(t=>{F=t},"setShowData"),Tt=l(()=>F,"getShowData"),q={getConfig:wt,clear:$t,setDiagramTitle:st,getDiagramTitle:nt,setAccTitle:ot,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:Ct,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await ut("pie",t);z.debug(a),bt(a,q)},"parse")},kt=l(t=>`
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
`,"getStyles"),_t=kt,Et=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),H=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return mt().value(n=>n.value).sort(null)(H)},"createPieArcs"),zt=l((t,a,H,L)=>{var N;z.debug(`rendering pie chart
`+t);const n=L.db,u=lt(),h=ct(n.getConfig(),u.pie),W=40,i=18,c=4,$=450,S=$,b=dt(a),C=b.append("g");C.attr("transform","translate("+S/2+","+$/2+")");const{themeVariables:o}=u;let[M]=pt(o.pieOuterStrokeWidth);M??(M=2);const J=h.legendPosition,O=h.textPosition,K=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,m=Math.min(S,$)/2-W,V=U().innerRadius(K*m).outerRadius(m),X=U().innerRadius(m*O).outerRadius(m*O),x=C.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",m+M/2).attr("class","pieOuterCircle");const D=n.getSections(),Z=Et(D),j=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const P=Z.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),k=vt(j).domain([...D.keys()]);x.selectAll("mySlices").data(P).enter().append("path").attr("d",V).attr("fill",e=>k(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(P).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+X.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=C.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),f=C.selectAll(".legend").data(w).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>k(e.label)).style("stroke",e=>k(e.label)),f.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=$,_=S+W;const s=i+c,E=w.length*s;switch(J){case"center":f.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=E,f.attr("transform",(e,r)=>{const d=m,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,f.attr("transform",(e,r)=>{const d=-m-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":_+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,p=-m-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:_+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const G=((N=Q.node())==null?void 0:N.getBoundingClientRect().width)??0,Y=S/2-G/2,tt=S/2+G/2,B=Math.min(0,Y),I=Math.max(_,tt)-B;b.attr("viewBox",`${B} 0 ${I} ${y}`),gt(b,y,I,h.useMaxWidth)},"draw"),Rt={draw:zt},Qt={parser:At,db:q,renderer:Rt,styles:_t};export{Qt as diagram};
