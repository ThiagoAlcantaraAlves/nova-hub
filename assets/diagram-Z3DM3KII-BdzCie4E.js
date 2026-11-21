import{p as $}from"./chunk-JWPE2WC7-Bltmxy4m.js";import{_ as f,E as u,I as C,d as S,l as w,b as D,a as T,p as E,q as P,g as z,s as F,B as A,G as W,t as _}from"./mermaid-XW76GIA2-naJbi7mC.js";import{p as N}from"./cynefin-OW5HDTMX-DG1Ngd22.js";import"./index-BEpbVRWG.js";import"./tutor-IaGduGHH.js";import"./arrow-down-TSbquK9-.js";import"./separator-DPNZ9SHo.js";import"./index-C-y0Qfh7.js";import"./index-BGTe7olG.js";import"./purify.es-BhqXAQOW.js";import"./d3-path-CgeVrazB.js";import"./index-GAwWDs4w.js";import"./dialog-BWTHkpFC.js";import"./search-CpYG8w2i.js";import"./dropdown-menu-CKdWozaQ.js";import"./index-D3luIKtv.js";import"./chevron-right-BHu0TnVV.js";import"./circle-C0kZKLzn.js";import"./textarea-eRKpShF_.js";import"./square-DmSFjfLH.js";import"./refresh-cw-x2q8mVGC.js";var I=W.packet,b,v=(b=class{constructor(){this.packet=[],this.setAccTitle=D,this.getAccTitle=T,this.setDiagramTitle=E,this.getDiagramTitle=P,this.getAccDescription=z,this.setAccDescription=F}getConfig(){const t=u({...I,...A().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){_(),this.packet=[]}},f(b,"PacketDB"),b),L=1e4,M=f((e,t)=>{$(e,t);let o=-1,r=[],n=1;const{bitsPerRow:l}=t.getConfig();for(let{start:a,end:s,bits:p,label:c}of e.blocks){if(a!==void 0&&s!==void 0&&s<a)throw new Error(`Packet block ${a} - ${s} is invalid. End must be greater than start.`);if(a??(a=o+1),a!==o+1)throw new Error(`Packet block ${a} - ${s??a} is not contiguous. It should start from ${o+1}.`);if(p===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(s??(s=a+(p??1)-1),p??(p=s-a+1),o=s,w.debug(`Packet block ${a} - ${o} with label ${c}`);r.length<=l+1&&t.getPacket().length<L;){const[d,i]=Y({start:a,end:s,bits:p,label:c},n,l);if(r.push(d),d.end+1===n*l&&(t.pushWord(r),r=[],n++),!i)break;({start:a,end:s,bits:p,label:c}=i)}}t.pushWord(r)},"populate"),Y=f((e,t,o)=>{if(e.start===void 0)throw new Error("start should have been set during first phase");if(e.end===void 0)throw new Error("end should have been set during first phase");if(e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*o)return[e,void 0];const r=t*o-1,n=t*o;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:n,end:e.end,label:e.label,bits:e.end-n}]},"getNextFittingBlock"),x={parser:{yy:void 0},parse:f(async e=>{var r;const t=await N("packet",e),o=(r=x.parser)==null?void 0:r.yy;if(!(o instanceof v))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");w.debug(t),M(t,o)},"parse")},G=f((e,t,o,r)=>{const n=r.db,l=n.getConfig(),{rowHeight:a,paddingY:s,bitWidth:p,bitsPerRow:c}=l,d=n.getPacket(),i=n.getDiagramTitle(),h=a+s,g=h*(d.length+1)-(i?0:a),m=p*c+2,k=C(t);k.attr("viewBox",`0 0 ${m} ${g}`),S(k,g,m,l.useMaxWidth);for(const[y,B]of d.entries())O(k,B,y,l);k.append("text").text(i).attr("x",m/2).attr("y",g-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),O=f((e,t,o,{rowHeight:r,paddingX:n,paddingY:l,bitWidth:a,bitsPerRow:s,showBits:p})=>{const c=e.append("g"),d=o*(r+l)+l;for(const i of t){const h=i.start%s*a+1,g=(i.end-i.start+1)*a-n;if(c.append("rect").attr("x",h).attr("y",d).attr("width",g).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",h+g/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!p)continue;const m=i.end===i.start,k=d-2;c.append("text").attr("x",h+(m?g/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",m?"middle":"start").text(i.start),m||c.append("text").attr("x",h+g).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),j={draw:G},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},H=f(({packet:e}={})=>{const t=u(q,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles"),ht={parser:x,get db(){return new v},renderer:j,styles:H};export{ht as diagram};
