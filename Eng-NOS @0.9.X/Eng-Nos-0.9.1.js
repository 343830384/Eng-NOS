/* Eng-NOS.js  v0.9.1.min
 * (c) 2018 Xin Wang
 * Released under the APACHE2.0 License
 */
(function(){var A=function(x){var t=typeof(x),k;if(t=="string"){return 1}if(t=="boolean"){return 2}if(t=="number"){return 3}if(x instanceof Array){return 4}if(t=="object"){for(k in x){return 5}}return 0};var B=function(v,a,b,n){var d=a[1],e,c,f,g=a.length,h,y;switch(g){case 2:h=1,c=v;break;case 4:v?h=1:0;c=a[2],f=a[3];break;case 6:d=a[2],e=a[1],e==0?(v==a[3]?h=1:0):0,e==1?(v>=a[3]?h=1:0):0,e==2?(v<=a[3]?h=1:0):0,e==3?(v>a[3]?h=1:0):0,e==4?(v<a[3]?h=1:0):0,c=a[4],f=a[5];break;default:return}d?d=d.toLowerCase():0;if(d=="class"){y=" ",b=b[0][n]}if(d=="style"){y=";",b=b[1][n]}if(g>2&&y){v=b,v?(v=v.replace(y+f,"").replace(y+c,"").trim()):0,v?(v=v+y+(h?c:f)):(v=y+(h?c:f));return d+"='"+v+"'"}else{return d+"='"+(h?c:f)+"'"}};var C=function(o,t,s,b,c,a){var i=1,v,e,n,k;if(a){b=t.$_b,c=t.$_c,t=t.$_a}while(i<3){v=o[i];if(v){e=v.length;while(e--){n=v[e];if(i==1){t[n]=s}else{k=b[n],t[n]=B(s,k[0],c,k[1])}}}i++}};var D={"1":1,"2":1,"3":1};var E=function(o,j,f,x){var k,v,n,y,z,i,l,m=[],p=[],q,s="<!--$#",e="#$-->",r,t=1;z=j.$_a,y=j.$_b,r=j.$_c;if(f&&!z){for(k in o){v=o[k],n=A(v);if(n==5){return E(v,j[k])}}}else{if(j.$_d){C(j.$_d,z,x,y,r)}if(n==5&&j.$_d){C(j.$_d,z,x,y,r)}for(k in o){v=o[k];n=A(v);if(n==5){m.push(s+k+e),p.push(E(v,j[k],0,x))}else{if(n==4){m.push(s+k+e),l=v.length,i=0,q=[];while(i<l){if(t){n=A(v[i]);if(D[n]){t=0}}if(t){q.push(E(v[i],j[k],0,i))}else{if(j[k].$_d){C(j[k].$_d,j[k],i,y,r,1)}if(j[k].$_e){C(j[k].$_e,j[k],v[i],y,r,1)}q.push(j[k].$_a.join(""))}i++}t=1,p.push(q.join(""))}else{if(j[k]){C(j[k],z,v,y,r)}}}}}z=z.join(""),i=m.length;while(i--){z=z.replace(m[i],p[i])}return z};Eng_Nos=function(a,b){return E(a,b,1)}}());