/* Eng-NOS.js  v0.9.0.beta.min
 * (c) 2018 Xin Wang
 * Released under the APACHE2.0 License
 */
(function(){var B=function(x){var t=typeof(x),k;if(t=="string"){return 1}if(t=="boolean"){return 2}if(t=="number"){return 3}if(x instanceof Array){return 4}if(t=="object"){for(k in x){return 5}}return 0};var C=function(a,b,c,d){var e=b[1],f,g,h,i=b.length,j,y;switch(i){case 2:j=1,g=a;break;case 4:a?j=1:0;g=b[2],h=b[3];break;case 6:e=b[2];f=b[1];f==0?(a==b[3]?j=1:0):0;f==1?(a>=b[3]?j=1:0):0;f==2?(a<=b[3]?j=1:0):0;f==3?(a>b[3]?j=1:0):0;f==4?(a<b[3]?j=1:0):0;g=b[4],h=b[5];break;default:return}e?e=e.toLowerCase():0;if(e=="class"){y=" ",c=c[0][d]}if(e=="style"){y=";",c=c[1][d]}if(i>2&&y){a=c;a?(a=a.replace(y+h,"").replace(y+g,"").trim()):0;a?(a=a+y+(j?g:h)):(a=y+(j?g:h));return e+"='"+a+"'"}else{return e+"='"+(flag?g:h)+"'"}};var A=[2,1];var D=function(o,j,f){var k,v,n,a,b,i,x,y,l,c=[],d=[],z,s="<!--$#",e="#$-->",cs;b=j.$_a;a=j.$_b,cs=j.$_c;if(f&&!b){for(k in o){v=o[k];n=B(v);if(n==5){return D(v,j[k])}}}else{for(k in o){v=o[k];n=B(v);if(n==5){c.push(s+k+e);d.push(D(v,j[k]))}else{if(n==4){c.push(s+k+e);l=v.length,i=0,z=[];while(i<l){z.push(D(v[i],j[k]));i++}d.push(z.join(""))}else{i=2;y=j[k];while(i--){x=y[A[i]];if(!x){continue}l=x.length;while(l--){n=x[l];if(i){b[n]=v}else{k=a[n];b[n]=C(v,k[0],cs,k[1])}}}}}}}b=b.join("");i=c.length;while(i--){b=b.replace(c[i],d[i])}return b};Eng_Nos=function(a,b){return D(a,b,1)}}());