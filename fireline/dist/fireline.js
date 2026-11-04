(()=>{var rh="170";var Nf=0,su=1,Ff=2;var gd=1,oh=2,ji=3,Oi=0,Fe=1,Re=2,Ee=0,xn=1,en=2,ru=3,ou=4,ah=5,xi=100,Of=101,Bf=102,Hf=103,Vf=104,Fs=200,Gf=201,Wf=202,qf=203,Ul=204,Nl=205,ia=206,Xf=207,na=208,Yf=209,$f=210,Zf=211,jf=212,Kf=213,Jf=214,Fl=0,Ol=1,Bl=2,Ts=3,Hl=4,Vl=5,Gl=6,Wl=7,xd=0,Qf=1,tp=2,vn=0,lh=1,ch=2,hh=3,Yn=4,ep=5,uh=6,dh=7;var vd=300,Es=301,As=302,ql=303,Xl=304,sa=306,Di=1e3,Bn=1001,Yl=1002,Pe=1003,ip=1004;var Xr=1005;var je=1006,nl=1007;var Ji=1008;var hi=1009,yd=1010,Md=1011,pr=1012,fh=1013,Hn=1014,Fi=1015,Se=1016,ph=1017,mh=1018,yn=1020,bd=35902,_d=1021,wd=1022,ci=1023,Sd=1024,Td=1025,_s=1026,Mn=1027,Os=1028,gh=1029,Ed=1030,xh=1031;var vh=1033,bo=33776,_o=33777,wo=33778,So=33779,$l=35840,Zl=35841,jl=35842,Kl=35843,Jl=36196,Ql=37492,tc=37496,ec=37808,ic=37809,nc=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,To=36492,mc=36494,gc=36495,Ad=36283,xc=36284,vc=36285,yc=36286;var Eo=2300,Mc=2301,sl=2302,au=2400,lu=2401,cu=2402;var np=3200,yh=3201;var Mh=0,sp=1,gn="",Te="srgb",Bs="srgb-linear",ra="linear",le="srgb";var ss=7680;var hu=519,rp=512,op=513,ap=514,Cd=515,lp=516,cp=517,hp=518,up=519,uu=35044,$n=35048;var du="300 es",Qi=2e3,Ao=2001,bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,lr=Math.PI/180,Cs=180/Math.PI;function Zn(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[o&255]+Ve[o>>8&255]+Ve[o>>16&255]+Ve[o>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Ne(o,t,e){return Math.max(t,Math.min(e,o))}function bh(o,t){return(o%t+t)%t}function dp(o,t,e,i,n){return i+(o-t)*(n-i)/(e-t)}function fp(o,t,e){return o!==t?(e-o)/(t-o):0}function cr(o,t,e){return(1-e)*o+e*t}function pp(o,t,e,i){return cr(o,t,1-Math.exp(-e*i))}function mp(o,t=1){return t-Math.abs(bh(o,t*2)-t)}function gp(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function xp(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function vp(o,t){return o+Math.floor(Math.random()*(t-o+1))}function yp(o,t){return o+Math.random()*(t-o)}function Mp(o){return o*(.5-Math.random())}function bp(o){o!==void 0&&(fu=o);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(o){return o*lr}function wp(o){return o*Cs}function Sp(o){return(o&o-1)===0&&o!==0}function Tp(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ep(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ap(o,t,e,i,n){let s=Math.cos,a=Math.sin,r=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":o.set(r*h,l*u,l*d,r*c);break;case"YZY":o.set(l*d,r*h,l*u,r*c);break;case"ZXZ":o.set(l*u,l*d,r*h,r*c);break;case"XZX":o.set(r*h,l*p,l*f,r*c);break;case"YXY":o.set(l*f,r*h,l*p,r*c);break;case"ZYZ":o.set(l*p,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ys(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $e(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Rd={DEG2RAD:lr,RAD2DEG:Cs,generateUUID:Zn,clamp:Ne,euclideanModulo:bh,mapLinear:dp,inverseLerp:fp,lerp:cr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:xp,randInt:vp,randFloat:yp,randFloatSpread:Mp,seededRandom:bp,degToRad:_p,radToDeg:wp,isPowerOfTwo:Sp,ceilPowerOfTwo:Tp,floorPowerOfTwo:Ep,setQuaternionFromProperEuler:Ap,normalize:$e,denormalize:ys},lt=class o{constructor(t=0,e=0){o.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class o{constructor(t,e,i,n,s,a,r,l,c){o.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,r,l,c)}set(t,e,i,n,s,a,r,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],y=n[4],M=n[7],S=n[2],w=n[5],T=n[8];return s[0]=a*x+r*v+l*S,s[3]=a*g+r*y+l*w,s[6]=a*m+r*M+l*T,s[1]=c*x+h*v+u*S,s[4]=c*g+h*y+u*w,s[7]=c*m+h*M+u*T,s[2]=d*x+f*v+p*S,s[5]=d*g+f*y+p*w,s[8]=d*m+f*M+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-i*s*h+i*r*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,d=r*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(r*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-r*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*r)+a+t,-n*c,n*l,-n*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new Zt;function Pd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Co(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Cp(){let o=Co("canvas");return o.style.display="block",o}var pu={};function or(o){o in pu||(pu[o]=!0,console.warn(o))}function Rp(o,t,e){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Pp(o){let t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dp(o){let t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(o,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(o.r=tn(o.r),o.g=tn(o.g),o.b=tn(o.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(o.r=ws(o.r),o.g=ws(o.g),o.b=ws(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===gn?ra:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,e){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function tn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],xu=[.3127,.329],vu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Bs]:{primaries:mu,whitePoint:xu,transfer:ra,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:mu,whitePoint:xu,transfer:le,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});var rs,bc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Co("canvas")),rs.width=t.width,rs.height=t.height;let i=rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=tn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tn(e[i]/255)*255):e[i]=tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,Ro=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(ol(n[a].image)):s.push(ol(n[a]))}else s=ol(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function ol(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,ti=class o extends bn{constructor(t=o.DEFAULT_IMAGE,e=o.DEFAULT_MAPPING,i=Bn,n=Bn,s=je,a=Ji,r=ci,l=hi,c=o.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Zn(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=vd;ti.DEFAULT_ANISOTROPY=1;var re=class o{constructor(t=0,e=0,i=0,n=1){o.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(f+1)/2,S=(m+1)/2,w=(h+d)/4,T=(u+x)/4,A=(p+g)/4;return y>M&&y>S?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=w/i,s=T/i):M>S?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=T/s,n=A/s),this.set(i,n,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends bn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ye=class extends _c{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Po=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var De=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,r){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-r,m=l*d+c*f+h*p+u*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let S=Math.sqrt(y),w=Math.atan2(S,m*v);g=Math.sin(g*w)/S,r=Math.sin(r*w)/S}let M=r*v;if(l=l*g+d*M,c=c*g+f*M,h=h*g+p*M,u=u*g+x*M,g===1-r){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let r=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=r*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-r*f,t[e+2]=c*p+h*f+r*d-l*u,t[e+3]=h*p-r*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(n/2),u=r(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+r+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>r&&i>u){let f=2*Math.sqrt(1+i-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(r>u){let f=2*Math.sqrt(1+r-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-r);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*r+n*c-s*l,this._y=n*h+a*l+s*r-i*c,this._z=s*h+a*c+i*l-n*r,this._w=a*h-i*r-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-r*r;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class o{constructor(t=0,e=0,i=0){o.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*n-r*i),h=2*(r*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-r*h,this.y=i+l*h+r*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new R,Mu=new De,Ii=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),$r.subVectors(this.max,Qs),os.subVectors(t.a,Qs),as.subVectors(t.b,Qs),ls.subVectors(t.c,Qs),hn.subVectors(as,os),un.subVectors(ls,as),Dn.subVectors(os,ls);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Dn.z,Dn.y,hn.z,0,-hn.x,un.z,0,-un.x,Dn.z,0,-Dn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Dn.y,Dn.x,0];return!ll(e,os,as,ls,$r)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,os,as,ls,$r))?!1:(Zr.crossVectors(hn,un),e=[Zr.x,Zr.y,Zr.z],ll(e,os,as,ls,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new R,new R,new R,new R,new R,new R,new R,new R],Ai=new R,Yr=new Ii,os=new R,as=new R,ls=new R,hn=new R,un=new R,Dn=new R,Qs=new R,$r=new R,Zr=new R,In=new R;function ll(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){In.fromArray(o,s);let r=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}var kp=new Ii,tr=new R,cl=new R,_n=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):kp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(tr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(cl)),this.expandByPoint(tr.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new R,hl=new R,jr=new R,dn=new R,ul=new R,Kr=new R,dl=new R,Do=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){hl.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(hl);let s=t.distanceTo(e)*.5,a=-this.direction.dot(jr),r=dn.dot(this.direction),l=-dn.dot(jr),c=dn.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-r,d=a*r-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+r)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+r)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(hl).addScaledVector(jr,d),f}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,n,s){ul.subVectors(e,t),Kr.subVectors(i,t),dl.crossVectors(ul,Kr);let a=this.direction.dot(dl),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;dn.subVectors(this.origin,t);let l=r*this.direction.dot(Kr.crossVectors(dn,Kr));if(l<0)return null;let c=r*this.direction.dot(ul.cross(dn));if(c<0||l+c>a)return null;let h=-r*dn.dot(dl);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class o{constructor(t,e,i,n,s,a,r,l,c,h,u,d,f,p,x,g){o.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,r,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,s,a,r,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=r,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new o().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=r*h,x=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-r*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*r,e[4]=p*r-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=f*r-p,e[6]=x+d*r,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*r,e[4]=-a*u,e[8]=p+f*r,e[1]=f+p*r,e[5]=a*h,e[9]=x-d*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=r*h,x=r*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=r*l,x=r*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=r*l,x=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=r*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Up)}lookAt(t,e,i){let n=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),fn.crossVectors(i,ai),fn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),fn.crossVectors(i,ai)),fn.normalize(),Jr.crossVectors(ai,fn),n[0]=fn.x,n[4]=Jr.x,n[8]=ai.x,n[1]=fn.y,n[5]=Jr.y,n[9]=ai.y,n[2]=fn.z,n[6]=Jr.z,n[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],y=i[7],M=i[11],S=i[15],w=n[0],T=n[4],A=n[8],_=n[12],b=n[1],C=n[5],L=n[9],k=n[13],N=n[2],O=n[6],U=n[10],X=n[14],F=n[3],B=n[7],j=n[11],rt=n[15];return s[0]=a*w+r*b+l*N+c*F,s[4]=a*T+r*C+l*O+c*B,s[8]=a*A+r*L+l*U+c*j,s[12]=a*_+r*k+l*X+c*rt,s[1]=h*w+u*b+d*N+f*F,s[5]=h*T+u*C+d*O+f*B,s[9]=h*A+u*L+d*U+f*j,s[13]=h*_+u*k+d*X+f*rt,s[2]=p*w+x*b+g*N+m*F,s[6]=p*T+x*C+g*O+m*B,s[10]=p*A+x*L+g*U+m*j,s[14]=p*_+x*k+g*X+m*rt,s[3]=v*w+y*b+M*N+S*F,s[7]=v*T+y*C+M*O+S*B,s[11]=v*A+y*L+M*U+S*j,s[15]=v*_+y*k+M*X+S*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*r*d+i*c*d+n*r*f-i*l*f)+x*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*r*f-s*a*u+i*a*f+s*r*h-i*c*h)+m*(-n*r*h-e*l*u+e*r*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=u*g*c-x*d*c+x*l*f-r*g*f-u*l*m+r*d*m,y=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,M=h*x*c-p*u*c+p*r*f-a*x*f-h*r*m+a*u*m,S=p*u*l-h*x*l-p*r*d+a*x*d+h*r*g-a*u*g,w=e*v+i*y+n*M+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*m-i*d*m)*T,t[2]=(r*g*s-x*l*s+x*n*c-i*g*c-r*n*m+i*l*m)*T,t[3]=(u*l*s-r*d*s-u*n*c+i*d*c+r*n*f-i*l*f)*T,t[4]=y*T,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*T,t[6]=(p*l*s-a*g*s-p*n*c+e*g*c+a*n*m-e*l*m)*T,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*T,t[8]=M*T,t[9]=(p*u*s-h*x*s-p*i*f+e*x*f+h*i*m-e*u*m)*T,t[10]=(a*x*s-p*r*s+p*i*c-e*x*c-a*i*m+e*r*m)*T,t[11]=(h*r*s-a*u*s-h*i*c+e*u*c+a*i*f-e*r*f)*T,t[12]=S*T,t[13]=(h*x*n-p*u*n+p*i*d-e*x*d-h*i*g+e*u*g)*T,t[14]=(p*r*n-a*x*n-p*i*l+e*x*l+a*i*g-e*r*g)*T,t[15]=(a*u*n-h*r*n+h*i*l-e*u*l-a*i*d+e*r*d)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,l=t.z,c=s*a,h=s*r;return this.set(c*a+i,c*r-n*l,c*l+n*r,0,c*r+n*l,h*r+i,h*l-n*a,0,c*l-n*r,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,c=s+s,h=a+a,u=r+r,d=s*c,f=s*h,p=s*u,x=a*h,g=a*u,m=r*u,v=l*c,y=l*h,M=l*u,S=i.x,w=i.y,T=i.z;return n[0]=(1-(x+m))*S,n[1]=(f+M)*S,n[2]=(p-y)*S,n[3]=0,n[4]=(f-M)*w,n[5]=(1-(d+m))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(p+y)*T,n[9]=(g-v)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=cs.set(n[0],n[1],n[2]).length(),a=cs.set(n[4],n[5],n[6]).length(),r=cs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ci.copy(this);let c=1/s,h=1/a,u=1/r;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a,r=Qi){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(r===Qi)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(r===Ao)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,r=Qi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,p,x;if(r===Qi)p=(a+s)*u,x=-2*u;else if(r===Ao)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},cs=new R,Ci=new Rt,zp=new R(0,0,0),Up=new R(1,1,1),fn=new R,Jr=new R,ai=new R,bu=new Rt,_u=new De,We=class o{constructor(t=0,e=0,i=0,n=o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],r=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};We.DEFAULT_ORDER="XYZ";var Io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Np=0,wu=new R,hs=new De,Yi=new Rt,Qr=new R,er=new R,Fp=new R,Op=new De,Su=new R(1,0,0),Tu=new R(0,1,0),Eu=new R(0,0,1),Au={type:"added"},Bp={type:"removed"},us={type:"childadded",child:null},fl={type:"childremoved",child:null},Oe=class o extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o.DEFAULT_UP.clone();let t=new R,e=new We,i=new De,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Zt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=o.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(Tu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(Tu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qr.copy(t):Qr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(er,Qr,this.up):Yi.lookAt(Qr,er,this.up),this.quaternion.setFromRotationMatrix(Yi),n&&(Yi.extractRotation(n.matrixWorld),hs.setFromRotationMatrix(Yi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];n.animations.push(s(t.animations,l))}}if(e){let r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(r){let l=[];for(let c in r){let h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Oe.DEFAULT_UP=new R(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new R,$i=new R,pl=new R,Zi=new R,ds=new R,fs=new R,Cu=new R,ml=new R,gl=new R,xl=new R,vl=new re,yl=new re,Ml=new re,Fn=class o{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ri.subVectors(n,e),$i.subVectors(i,e),pl.subVectors(t,e);let a=Ri.dot(Ri),r=Ri.dot($i),l=Ri.dot(pl),c=$i.dot($i),h=$i.dot(pl),u=a*c-r*r;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-r*h)*d,p=(a*h-r*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,n,s,a,r,l){return this.getBarycoord(t,e,i,n,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(r,Zi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return vl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),vl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(vl,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(Ml,s.z),a}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),$i.subVectors(t,e),Ri.cross($i).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ri.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return o.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return o.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return o.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return o.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return o.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,r;ds.subVectors(n,i),fs.subVectors(s,i),ml.subVectors(t,i);let l=ds.dot(ml),c=fs.dot(ml);if(l<=0&&c<=0)return e.copy(i);gl.subVectors(t,n);let h=ds.dot(gl),u=fs.dot(gl);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ds,a);xl.subVectors(t,s);let f=ds.dot(xl),p=fs.dot(xl);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return r=c/(c-p),e.copy(i).addScaledVector(fs,r);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Cu.subVectors(s,n),r=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Cu,r);let m=1/(g+x+d);return a=x*m,r=d*m,e.copy(i).addScaledVector(ds,a).addScaledVector(fs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},to={h:0,s:0,l:0};function bl(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=bh(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=bl(a,s,t+1/3),this.g=bl(a,s,t),this.b=bl(a,s,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Te){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let i=Dd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ne(Ge.r*255,0,255))*65536+Math.round(Ne(Ge.g*255,0,255))*256+Math.round(Ne(Ge.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ge.copy(this),e);let i=Ge.r,n=Ge.g,s=Ge.b,a=Math.max(i,n,s),r=Math.min(i,n,s),l,c,h=(r+a)/2;if(r===a)l=0,c=0;else{let u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Te){te.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,i=Ge.g,n=Ge.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(to);let i=cr(pn.h,to.h,e),n=cr(pn.s,to.s,e),s=cr(pn.l,to.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new dt;dt.NAMES=Dd;var Hp=0,nn=class extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Zn(),this.name="",this.blending=xn,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xn&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let r in s){let l=s[r];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Li=class extends nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ki=Vp();function Vp(){let o=new ArrayBuffer(4),t=new Float32Array(o),e=new Uint32Array(o),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),r=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(r[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:r}}function Gp(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=Ne(o,-65504,65504),Ki.floatView[0]=o;let t=Ki.uint32View[0],e=t>>23&511;return Ki.baseTable[e]+((t&8388607)>>Ki.shiftTable[e])}function Wp(o){let t=o>>10;return Ki.uint32View[0]=Ki.mantissaTable[Ki.offsetTable[t]+(o&1023)]+Ki.exponentTable[t],Ki.floatView[0]}var Id={toHalfFloat:Gp,fromHalfFloat:Wp},Ce=new R,eo=new lt,he=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}};var Lo=class extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ko=class extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Kt=class extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}},qp=0,gi=new Rt,_l=new Oe,ps=new R,li=new Ii,ir=new Ii,Ue=new R,de=class o extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pd(t)?ko:Lo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let r=e[s];ir.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(li.min,ir.min),li.expandByPoint(Ue),Ue.addVectors(li.max,ir.max),li.expandByPoint(Ue)):(li.expandByPoint(ir.min),li.expandByPoint(ir.max))}li.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){let r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Ue.fromBufferAttribute(r,c),l&&(ps.fromBufferAttribute(t,c),Ue.add(ps)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),r=[],l=[];for(let A=0;A<i.count;A++)r[A]=new R,l[A]=new R;let c=new R,h=new R,u=new R,d=new lt,f=new lt,p=new lt,x=new R,g=new R;function m(A,_,b){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),r[A].add(x),r[_].add(x),r[b].add(x),l[A].add(g),l[_].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,_=v.length;A<_;++A){let b=v[A],C=b.start,L=b.count;for(let k=C,N=C+L;k<N;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new R,M=new R,S=new R,w=new R;function T(A){S.fromBufferAttribute(n,A),w.copy(S);let _=r[A];y.copy(_),y.sub(S.multiplyScalar(S.dot(_))).normalize(),M.crossVectors(w,_);let C=M.dot(l[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,_=v.length;A<_;++A){let b=v[A],C=b.start,L=b.count;for(let k=C,N=C+L;k<N;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,r=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),r.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),r.add(h),l.add(h),c.add(h),i.setXYZ(p,r.x,r.y,r.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(r,l){let c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){r.isInterleavedBufferAttribute?f=l[x]*r.data.stride+r.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new he(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new o,i=this.index.array,n=this.attributes;for(let r in n){let l=n[r],c=t(l,i);e.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let r=0,l=a.length;r<l;r++){let c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ru=new Rt,Ln=new Do,io=new _n,Pu=new R,no=new R,so=new R,ro=new R,wl=new R,oo=new R,Du=new R,ao=new R,Ot=class extends Oe{constructor(t=new de,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let r=this.morphTargetInfluences;if(s&&r){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=r[l],u=s[l];h!==0&&(wl.fromBufferAttribute(u,t),a?oo.addScaledVector(wl,h):oo.addScaledVector(wl.sub(e),h))}e.add(oo)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),Ln.copy(t.ray).recast(t.near),!(io.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(io,Pu)===null||Ln.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Ru.copy(s).invert(),Ln.copy(t.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(r.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=y;M<S;M+=3){let w=r.getX(M),T=r.getX(M+1),A=r.getX(M+2);n=lo(this,m,t,i,c,h,u,w,T,A),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(r.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=r.getX(g),y=r.getX(g+1),M=r.getX(g+2);n=lo(this,a,t,i,c,h,u,v,y,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=y;M<S;M+=3){let w=M,T=M+1,A=M+2;n=lo(this,m,t,i,c,h,u,w,T,A),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,y=g+1,M=g+2;n=lo(this,a,t,i,c,h,u,v,y,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Xp(o,t,e,i,n,s,a,r){let l;if(t.side===Fe?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,t.side===Oi,r),l===null)return null;ao.copy(r),ao.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(ao);return c<e.near||c>e.far?null:{distance:c,point:ao.clone(),object:o}}function lo(o,t,e,i,n,s,a,r,l,c){o.getVertexPosition(r,no),o.getVertexPosition(l,so),o.getVertexPosition(c,ro);let h=Xp(o,t,e,i,no,so,ro,Du);if(h){let u=new R;Fn.getBarycoord(Du,no,so,ro,u),n&&(h.uv=Fn.getInterpolatedAttribute(n,r,l,c,u,new lt)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,r,l,c,u,new lt)),a&&(h.normal=Fn.getInterpolatedAttribute(a,r,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:r,b:l,c,normal:new R,materialIndex:0};Fn.getNormal(no,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var ui=class o extends de{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function p(x,g,m,v,y,M,S,w,T,A,_){let b=M/T,C=S/A,L=M/2,k=S/2,N=w/2,O=T+1,U=A+1,X=0,F=0,B=new R;for(let j=0;j<U;j++){let rt=j*C-k;for(let st=0;st<O;st++){let _t=st*b-L;B[x]=_t*v,B[g]=rt*y,B[m]=N,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=w>0?1:-1,h.push(B.x,B.y,B.z),u.push(st/T),u.push(1-j/A),X+=1}}for(let j=0;j<A;j++)for(let rt=0;rt<T;rt++){let st=d+rt+O*j,_t=d+rt+O*(j+1),Y=d+(rt+1)+O*(j+1),J=d+(rt+1)+O*j;l.push(st,_t,J),l.push(_t,Y,J),F+=6}r.addGroup(f,F,_),f+=F,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(o){let t={};for(let e in o){t[e]={};for(let i in o[e]){let n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ze(o){let t={};for(let e=0;e<o.length;e++){let i=Rs(o[e]);for(let n in i)t[n]=i[n]}return t}function Yp(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Ld(o){let t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Be={clone:Rs,merge:Ze},$p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},zo=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=new R,Iu=new lt,Lu=new lt,be=class extends zo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Lu),e.subVectors(Lu,Iu)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,Sc=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new be(ms,gs,t,e);n.layers=this.layers,this.add(n);let s=new be(ms,gs,t,e);s.layers=this.layers,this.add(s);let a=new be(ms,gs,t,e);a.layers=this.layers,this.add(a);let r=new be(ms,gs,t,e);r.layers=this.layers,this.add(r);let l=new be(ms,gs,t,e);l.layers=this.layers,this.add(l);let c=new be(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,r,l]=e;for(let c of e)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,r,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Uo=class extends ti{constructor(t,e,i,n,s,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,i,n,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tc=class extends ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Uo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ui(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Ee});s.uniforms.tEquirect.value=e;let a=new Ot(n,s),r=e.minFilter;return e.minFilter===Ji&&(e.minFilter=je),new Sc(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Sl=new R,jp=new R,Kp=new Zt,Pi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Sl.subVectors(i,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Sl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Kp.getNormalMatrix(t),n=this.coplanarPoint(Sl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new _n,co=new R,mr=class{constructor(t=new Pi,e=new Pi,i=new Pi,n=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){let i=this.planes,n=t.elements,s=n[0],a=n[1],r=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],x=n[10],g=n[11],m=n[12],v=n[13],y=n[14],M=n[15];if(i[0].setComponents(l-s,d-c,g-f,M-m).normalize(),i[1].setComponents(l+s,d+c,g+f,M+m).normalize(),i[2].setComponents(l+a,d+h,g+p,M+v).normalize(),i[3].setComponents(l-a,d-h,g-p,M-v).normalize(),i[4].setComponents(l-r,d-u,g-x,M-y).normalize(),e===Qi)i[5].setComponents(l+r,d+u,g+x,M+y).normalize();else if(e===Ao)i[5].setComponents(r,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(co.x=n.normal.x>0?t.max.x:t.min.x,co.y=n.normal.y>0?t.max.y:t.min.y,co.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kd(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Jp(o){let t=new WeakMap;function e(r,l){let c=r.array,h=r.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,c){let h=l.array,u=l.updateRanges;if(o.bindBuffer(c,r),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);let l=t.get(r);l&&(o.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){let h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}let c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:n,remove:s,update:a}}var Ke=class o extends de{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,r=Math.floor(i),l=Math.floor(n),c=r+1,h=l+1,u=t/r,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*d-a;for(let y=0;y<c;y++){let M=y*u-s;p.push(M,-v,0),x.push(0,0,1),g.push(y/r),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<r;v++){let y=v+c*m,M=v+c*(m+1),S=v+1+c*(m+1),w=v+1+c*m;f.push(y,M,w),f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.widthSegments,t.heightSegments)}},Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Qp,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:i0,alphatest_fragment:n0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:v0,color_pars_fragment:y0,color_pars_vertex:M0,color_vertex:b0,common:_0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:S0,displacementmap_pars_vertex:T0,displacementmap_vertex:E0,emissivemap_fragment:A0,emissivemap_pars_fragment:C0,colorspace_fragment:R0,colorspace_pars_fragment:P0,envmap_fragment:D0,envmap_common_pars_fragment:I0,envmap_pars_fragment:L0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:q0,envmap_vertex:z0,fog_vertex:U0,fog_pars_vertex:N0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:X0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:j0,lights_physical_pars_fragment:K0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:vm,normal_pars_vertex:ym,normal_vertex:Mm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Tm,opaque_fragment:Em,packing:Am,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Dm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:zm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:Hm,specularmap_fragment:Vm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:qm,transmission_fragment:Xm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:Zm,uv_vertex:jm,worldpos_vertex:Km,background_vert:Jm,background_frag:Qm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ig,cube_frag:ng,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:og,distanceRGBA_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:bg,meshphysical_vert:_g,meshphysical_frag:wg,meshtoon_vert:Sg,meshtoon_frag:Tg,points_vert:Eg,points_frag:Ag,shadow_vert:Cg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Dg},wt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ni={basic:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ze([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ze([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ze([wt.points,wt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ze([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ze([wt.common,wt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ze([wt.sprite,wt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ze([wt.common,wt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ze([wt.lights,wt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Ni.physical={uniforms:Ze([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var ho={r:0,b:0,g:0},zn=new We,Ig=new Rt;function Lg(o,t,e,i,n,s,a){let r=new dt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,M=p(v);M===null?m(r,l):M&&M.isColor&&(m(M,1),y=!0);let S=o.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(o.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(v,y){let M=p(y);M&&(M.isCubeTexture||M.mapping===sa)?(h===void 0&&(h=new Ot(new ui(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Rs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),zn.copy(y.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(zn)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==le,(u!==M||d!==M.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=o.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ot(new Ke(2,2),new Jt({name:"BackgroundMaterial",uniforms:Rs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=o.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(ho,Ld(o)),i.buffers.color.setClear(ho.r,ho.g,ho.b,y,a)}return{getClearColor:function(){return r},setClearColor:function(v,y=1){r.set(v),l=y,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(r,l)},render:x,addToRenderList:g}}function kg(o,t){let e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function r(b,C,L,k,N){let O=!1,U=u(k,L,C);s!==U&&(s=U,c(s.object)),O=f(b,k,L,N),O&&p(b,k,L,N),N!==null&&t.update(N,o.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(b,C,L,k),N!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return o.createVertexArray()}function c(b){return o.bindVertexArray(b)}function h(b){return o.deleteVertexArray(b)}function u(b,C,L){let k=L.wireframe===!0,N=i[b.id];N===void 0&&(N={},i[b.id]=N);let O=N[C.id];O===void 0&&(O={},N[C.id]=O);let U=O[k];return U===void 0&&(U=d(l()),O[k]=U),U}function d(b){let C=[],L=[],k=[];for(let N=0;N<e;N++)C[N]=0,L[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,C,L,k){let N=s.attributes,O=C.attributes,U=0,X=L.getAttributes();for(let F in X)if(X[F].location>=0){let j=N[F],rt=O[F];if(rt===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),j===void 0||j.attribute!==rt||rt&&j.data!==rt.data)return!0;U++}return s.attributesNum!==U||s.index!==k}function p(b,C,L,k){let N={},O=C.attributes,U=0,X=L.getAttributes();for(let F in X)if(X[F].location>=0){let j=O[F];j===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(j=b.instanceColor));let rt={};rt.attribute=j,j&&j.data&&(rt.data=j.data),N[F]=rt,U++}s.attributes=N,s.attributesNum=U,s.index=k}function x(){let b=s.newAttributes;for(let C=0,L=b.length;C<L;C++)b[C]=0}function g(b){m(b,0)}function m(b,C){let L=s.newAttributes,k=s.enabledAttributes,N=s.attributeDivisors;L[b]=1,k[b]===0&&(o.enableVertexAttribArray(b),k[b]=1),N[b]!==C&&(o.vertexAttribDivisor(b,C),N[b]=C)}function v(){let b=s.newAttributes,C=s.enabledAttributes;for(let L=0,k=C.length;L<k;L++)C[L]!==b[L]&&(o.disableVertexAttribArray(L),C[L]=0)}function y(b,C,L,k,N,O,U){U===!0?o.vertexAttribIPointer(b,C,L,N,O):o.vertexAttribPointer(b,C,L,k,N,O)}function M(b,C,L,k){x();let N=k.attributes,O=L.getAttributes(),U=C.defaultAttributeValues;for(let X in O){let F=O[X];if(F.location>=0){let B=N[X];if(B===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(B=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(B=b.instanceColor)),B!==void 0){let j=B.normalized,rt=B.itemSize,st=t.get(B);if(st===void 0)continue;let _t=st.buffer,Y=st.type,J=st.bytesPerElement,gt=Y===o.INT||Y===o.UNSIGNED_INT||B.gpuType===fh;if(B.isInterleavedBufferAttribute){let it=B.data,xt=it.stride,St=B.offset;if(it.isInstancedInterleavedBuffer){for(let vt=0;vt<F.locationSize;vt++)m(F.location+vt,it.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let vt=0;vt<F.locationSize;vt++)g(F.location+vt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let vt=0;vt<F.locationSize;vt++)y(F.location+vt,rt/F.locationSize,Y,j,xt*J,(St+rt/F.locationSize*vt)*J,gt)}else{if(B.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)m(F.location+it,B.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let it=0;it<F.locationSize;it++)g(F.location+it);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let it=0;it<F.locationSize;it++)y(F.location+it,rt/F.locationSize,Y,j,rt*J,rt/F.locationSize*it*J,gt)}}else if(U!==void 0){let j=U[X];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(F.location,j);break;case 3:o.vertexAttrib3fv(F.location,j);break;case 4:o.vertexAttrib4fv(F.location,j);break;default:o.vertexAttrib1fv(F.location,j)}}}}v()}function S(){A();for(let b in i){let C=i[b];for(let L in C){let k=C[L];for(let N in k)h(k[N].object),delete k[N];delete C[L]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let C=i[b.id];for(let L in C){let k=C[L];for(let N in k)h(k[N].object),delete k[N];delete C[L]}delete i[b.id]}function T(b){for(let C in i){let L=i[C];if(L[b.id]===void 0)continue;let k=L[b.id];for(let N in k)h(k[N].object),delete k[N];delete L[b.id]}}function A(){_(),a=!0,s!==n&&(s=n,c(s.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:r,reset:A,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function zg(o,t,e){let i;function n(c){i=c}function s(c,h){o.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(o.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Ug(o,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==ci&&i.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(T){let A=T===Se&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==hi&&i.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!A)}function l(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),p=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),M=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,w=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:w}}function Ng(o){let t=this,e=null,i=0,n=!1,s=!1,a=new Pi,r=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=o.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let v=s?0:i,y=v*4,M=m.clippingState||null;l.value=M,M=h(p,d,y,f);for(let S=0;S!==y;++S)M[S]=e[S];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;r.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(v,r),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Fg(o){let t=new WeakMap;function e(a,r){return r===ql?a.mapping=Es:r===Xl&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){let r=a.mapping;if(r===ql||r===Xl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Tc(l.height);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let r=a.target;r.removeEventListener("dispose",n);let l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ps=class extends zo{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,r=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,ku=[.125,.215,.35,.446,.526,.582],On=20,Tl=new Ps,zu=new dt,El=null,Al=0,Cl=0,Rl=!1,Nn=(1+Math.sqrt(5))/2,xs=1/Nn,Uu=[new R(-Nn,xs,0),new R(Nn,xs,0),new R(-xs,0,Nn),new R(xs,0,Nn),new R(0,Nn,-xs),new R(0,Nn,xs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){El=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(El,Al,Cl),this._renderer.xr.enabled=Rl,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:Se,format:ci,colorSpace:Bs,depthBuffer:!1},n=Nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(s)),this._blurMaterial=Bg(s,t,e)}return n}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,i,n){let r=new be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zu),h.toneMapping=vn,h.autoClear=!1;let f=new Li({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),p=new Ot(new ui,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(zu),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(r.up.set(0,l[m],0),r.lookAt(c[m],0,0)):v===1?(r.up.set(0,0,l[m]),r.lookAt(0,c[m],0)):(r.up.set(0,l[m],0),r.lookAt(0,0,c[m]));let y=this._cubeSize;uo(n,v*y,m>2?y:0,y,y),h.setRenderTarget(n),x&&h.render(p,r),h.render(t,r)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Es||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;let l=this._cubeSize;uo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Tl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Uu[(n-s-1)%Uu.length];this._blur(t,s-1,s,a,r)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*On-1),x=s/p,g=isFinite(s)?1+Math.floor(h*x):On;g>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${On}`);let m=[],v=0;for(let T=0;T<On;++T){let A=T/x,_=Math.exp(-A*A/2);m.push(_),T===0?v+=_:T<g&&(v+=2*_)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-i;let M=this._sizeLods[n],S=3*M*(n>y-Ms?n-y+Ms:0),w=4*(this._cubeSize-M);uo(e,S,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Tl)}};function Og(o){let t=[],e=[],i=[],n=o,s=o-Ms+1+ku.length;for(let a=0;a<s;a++){let r=Math.pow(2,n);e.push(r);let l=1/r;a>o-Ms?l=ku[a-o+Ms-1]:a===0&&(l=0),i.push(l);let c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*f),y=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,A=w>2?0:-1,_=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(_,x*p*w),y.set(d,g*p*w);let b=[w,w,w,w,w,w];M.set(b,m*p*w)}let S=new de;S.setAttribute("position",new he(v,x)),S.setAttribute("uv",new he(y,g)),S.setAttribute("faceIndex",new he(M,m)),t.push(S),n>Ms&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nu(o,t,e){let i=new ye(o,t,e);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function Bg(o,t,e){let i=new Float32Array(On),n=new R(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ee,depthTest:!1,depthWrite:!1})}function Fu(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ee,depthTest:!1,depthWrite:!1})}function Ou(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ee,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){let l=r.mapping,c=l===ql||l===Xl,h=l===Es||l===As;if(c||h){let u=t.get(r),d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new Ds(o)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{let f=r.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Ds(o)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function n(r){let l=0,c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){let l=r.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Vg(o){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&or("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Gg(o,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],o.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],o.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,M=v.length;y<M;y+=3){let S=v[y+0],w=v[y+1],T=v[y+2];d.push(S,w,w,T,T,S)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let S=y+0,w=y+1,T=y+2;d.push(S,w,w,T,T,S)}}else return;let g=new(Pd(d)?ko:Lo)(d,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Wg(o,t,e){let i;function n(d){i=d}let s,a;function r(d){s=d.type,a=d.bytesPerElement}function l(d,f){o.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,p){p!==0&&(o.drawElementsInstanced(i,f,s,d*a,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*x[v];e.update(m,i,1)}}this.setMode=n,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qg(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case o.TRIANGLES:e.triangles+=r*(s/3);break;case o.LINES:e.lines+=r*(s/2);break;case o.LINE_STRIP:e.lines+=r*(s-1);break;case o.LINE_LOOP:e.lines+=r*s;break;case o.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xg(o,t,e){let i=new WeakMap,n=new re;function s(a,r,l){let c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(r);if(d===void 0||d.count!==u){let _=function(){T.dispose(),i.delete(r),r.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=r.morphAttributes.position!==void 0,p=r.morphAttributes.normal!==void 0,x=r.morphAttributes.color!==void 0,g=r.morphAttributes.position||[],m=r.morphAttributes.normal||[],v=r.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let M=r.attributes.position.count*y,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*S*4*u),T=new Po(w,M,S,u);T.type=Fi,T.needsUpdate=!0;let A=y*4;for(let b=0;b<u;b++){let C=g[b],L=m[b],k=v[b],N=M*S*4*b;for(let O=0;O<C.count;O++){let U=O*A;f===!0&&(n.fromBufferAttribute(C,O),w[N+U+0]=n.x,w[N+U+1]=n.y,w[N+U+2]=n.z,w[N+U+3]=0),p===!0&&(n.fromBufferAttribute(L,O),w[N+U+4]=n.x,w[N+U+5]=n.y,w[N+U+6]=n.z,w[N+U+7]=0),x===!0&&(n.fromBufferAttribute(k,O),w[N+U+8]=n.x,w[N+U+9]=n.y,w[N+U+10]=n.z,w[N+U+11]=k.itemSize===4?n.w:1)}}d={count:u,texture:T,size:new lt(M,S)},i.set(r,d),r.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=r.morphTargetsRelative?1:1-f;l.getUniforms().setValue(o,"morphTargetBaseInfluence",p),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function Yg(o,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),n.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Is=class extends ti{constructor(t,e,i,n,s,a,r,l,c,h=_s){if(h!==_s&&h!==Mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=Hn),i===void 0&&h===Mn&&(i=yn),super(null,n,s,a,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zd=new ti,Bu=new Is(1,1),Ud=new Po,Nd=new wc,Fd=new Uo,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),qu=new Float32Array(4);function Hs(o,t,e){let i=o[0];if(i<=0||i>0)return o;let n=t*e,s=Hu[n];if(s===void 0&&(s=new Float32Array(n),Hu[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function Ie(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Le(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function oa(o,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function $g(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Zg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;o.uniform2fv(this.addr,t),Le(e,t)}}function jg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;o.uniform3fv(this.addr,t),Le(e,t)}}function Kg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;o.uniform4fv(this.addr,t),Le(e,t)}}function Jg(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;qu.set(i),o.uniformMatrix2fv(this.addr,!1,qu),Le(e,i)}}function Qg(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;Wu.set(i),o.uniformMatrix3fv(this.addr,!1,Wu),Le(e,i)}}function tx(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;Gu.set(i),o.uniformMatrix4fv(this.addr,!1,Gu),Le(e,i)}}function ex(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function ix(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;o.uniform2iv(this.addr,t),Le(e,t)}}function nx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;o.uniform3iv(this.addr,t),Le(e,t)}}function sx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;o.uniform4iv(this.addr,t),Le(e,t)}}function rx(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function ox(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;o.uniform2uiv(this.addr,t),Le(e,t)}}function ax(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;o.uniform3uiv(this.addr,t),Le(e,t)}}function lx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;o.uniform4uiv(this.addr,t),Le(e,t)}}function cx(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(Bu.compareFunction=Cd,s=Bu):s=zd,e.setTexture2D(t||s,n)}function hx(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Nd,n)}function ux(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Fd,n)}function dx(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ud,n)}function fx(o){switch(o){case 5126:return $g;case 35664:return Zg;case 35665:return jg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return ix;case 35668:case 35672:return nx;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}function px(o,t){o.uniform1fv(this.addr,t)}function mx(o,t){let e=Hs(t,this.size,2);o.uniform2fv(this.addr,e)}function gx(o,t){let e=Hs(t,this.size,3);o.uniform3fv(this.addr,e)}function xx(o,t){let e=Hs(t,this.size,4);o.uniform4fv(this.addr,e)}function vx(o,t){let e=Hs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function yx(o,t){let e=Hs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Mx(o,t){let e=Hs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function bx(o,t){o.uniform1iv(this.addr,t)}function _x(o,t){o.uniform2iv(this.addr,t)}function wx(o,t){o.uniform3iv(this.addr,t)}function Sx(o,t){o.uniform4iv(this.addr,t)}function Tx(o,t){o.uniform1uiv(this.addr,t)}function Ex(o,t){o.uniform2uiv(this.addr,t)}function Ax(o,t){o.uniform3uiv(this.addr,t)}function Cx(o,t){o.uniform4uiv(this.addr,t)}function Rx(o,t,e){let i=this.cache,n=t.length,s=oa(e,n);Ie(i,s)||(o.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||zd,s[a])}function Px(o,t,e){let i=this.cache,n=t.length,s=oa(e,n);Ie(i,s)||(o.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Nd,s[a])}function Dx(o,t,e){let i=this.cache,n=t.length,s=oa(e,n);Ie(i,s)||(o.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Fd,s[a])}function Ix(o,t,e){let i=this.cache,n=t.length,s=oa(e,n);Ie(i,s)||(o.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ud,s[a])}function Lx(o){switch(o){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return xx;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return _x;case 35668:case 35672:return wx;case 35669:case 35673:return Sx;case 5125:return Tx;case 36294:return Ex;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ix}}var Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}},Ac=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lx(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let r=n[s];r.setValue(t,e[r.id],i)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Xu(o,t){o.seq.push(t),o.map[t.id]=t}function kx(o,t,e){let i=o.name,n=i.length;for(Pl.lastIndex=0;;){let s=Pl.exec(i),a=Pl.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===n){Xu(e,c===void 0?new Ec(r,o,t):new Ac(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new Cc(r),Xu(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);kx(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let r=e[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Yu(o,t,e){let i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}var zx=37297,Ux=0;function Nx(o,t){let e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}var $u=new Zt;function Fx(o){te._getMatrix($u,te.workingColorSpace,o);let t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(o)){case ra:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Zu(o,t,e){let i=o.getShaderParameter(t,o.COMPILE_STATUS),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Nx(o.getShaderSource(t),a)}else return n}function Ox(o,t){let e=Fx(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bx(o,t){let e;switch(t){case lh:e="Linear";break;case ch:e="Reinhard";break;case hh:e="Cineon";break;case Yn:e="ACESFilmic";break;case uh:e="AgX";break;case dh:e="Neutral";break;case ep:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fo=new R;function Hx(){te.getLuminanceCoefficients(fo);let o=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Gx(o){let t=[];for(let e in o){let i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wx(o,t){let e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=o.getActiveAttrib(t,n),a=s.name,r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function ar(o){return o!==""}function ju(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(o){return o.replace(qx,Yx)}var Xx=new Map;function Yx(o,t){let e=Wt[t];if(e===void 0){let i=Xx.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(o){return o.replace($x,Zx)}function Zx(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Qu(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jx(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Kx(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case As:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Qx(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xd:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case tp:t="ENVMAP_BLENDING_ADD";break}return t}function tv(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ev(o,t,e,i){let n=o.getContext(),s=e.defines,a=e.vertexShader,r=e.fragmentShader,l=jx(e),c=Kx(e),h=Jx(e),u=Qx(e),d=tv(e),f=Vx(e),p=Gx(s),x=n.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),m.length>0&&(m+=`
`)):(g=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==vn?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),Hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),a=Rc(a),a=ju(a,e),a=Ku(a,e),r=Rc(r),r=ju(r,e),r=Ku(r,e),a=Ju(a),r=Ju(r),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+a,M=v+m+r,S=Yu(n,n.VERTEX_SHADER,y),w=Yu(n,n.FRAGMENT_SHADER,M);n.attachShader(x,S),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function T(C){if(o.debug.checkShaderErrors){let L=n.getProgramInfoLog(x).trim(),k=n.getShaderInfoLog(S).trim(),N=n.getShaderInfoLog(w).trim(),O=!0,U=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(O=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,x,S,w);else{let X=Zu(n,S,"vertex"),F=Zu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+X+`
`+F)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(k===""||N==="")&&(U=!1);U&&(C.diagnostics={runnable:O,programLog:L,vertexShader:{log:k,prefix:g},fragmentShader:{log:N,prefix:m}})}n.deleteShader(S),n.deleteShader(w),A=new Ss(n,x),_=Wx(n,x)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,zx)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var iv=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Dc(t),e.set(t,i)),i}},Dc=class{constructor(t){this.id=iv++,this.code=t,this.usedTimes=0}};function nv(o,t,e,i,n,s,a){let r=new Io,l=new Pc,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,C,L,k){let N=L.fog,O=k.geometry,U=_.isMeshStandardMaterial?L.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||U),F=X&&X.mapping===sa?X.image.height:null,B=p[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=j!==void 0?j.length:0,st=0;O.morphAttributes.position!==void 0&&(st=1),O.morphAttributes.normal!==void 0&&(st=2),O.morphAttributes.color!==void 0&&(st=3);let _t,Y,J,gt;if(B){let ce=Ni[B];_t=ce.vertexShader,Y=ce.fragmentShader}else _t=_.vertexShader,Y=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),gt=l.getFragmentShaderID(_);let it=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),St=k.isInstancedMesh===!0,vt=k.isBatchedMesh===!0,Gt=!!_.map,nt=!!_.matcap,ut=!!X,z=!!_.aoMap,pt=!!_.lightMap,ct=!!_.bumpMap,yt=!!_.normalMap,ft=!!_.displacementMap,Lt=!!_.emissiveMap,et=!!_.metalnessMap,I=!!_.roughnessMap,E=_.anisotropy>0,W=_.clearcoat>0,Q=_.dispersion>0,ot=_.iridescence>0,tt=_.sheen>0,It=_.transmission>0,Mt=E&&!!_.anisotropyMap,Tt=W&&!!_.clearcoatMap,Xt=W&&!!_.clearcoatNormalMap,ht=W&&!!_.clearcoatRoughnessMap,Pt=ot&&!!_.iridescenceMap,Bt=ot&&!!_.iridescenceThicknessMap,Ht=tt&&!!_.sheenColorMap,Dt=tt&&!!_.sheenRoughnessMap,jt=!!_.specularMap,Vt=!!_.specularColorMap,ee=!!_.specularIntensityMap,H=It&&!!_.transmissionMap,bt=It&&!!_.thicknessMap,K=!!_.gradientMap,at=!!_.alphaMap,Ct=_.alphaTest>0,Et=!!_.alphaHash,Yt=!!_.extensions,we=vn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(we=o.toneMapping);let He={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:Y,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:vt,batchingColor:vt&&k._colorsTexture!==null,instancing:St,instancingColor:St&&k.instanceColor!==null,instancingMorph:St&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Bs,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:nt,envMap:ut,envMapMode:ut&&X.mapping,envMapCubeUVHeight:F,aoMap:z,lightMap:pt,bumpMap:ct,normalMap:yt,displacementMap:d&&ft,emissiveMap:Lt,normalMapObjectSpace:yt&&_.normalMapType===sp,normalMapTangentSpace:yt&&_.normalMapType===Mh,metalnessMap:et,roughnessMap:I,anisotropy:E,anisotropyMap:Mt,clearcoat:W,clearcoatMap:Tt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ht,dispersion:Q,iridescence:ot,iridescenceMap:Pt,iridescenceThicknessMap:Bt,sheen:tt,sheenColorMap:Ht,sheenRoughnessMap:Dt,specularMap:jt,specularColorMap:Vt,specularIntensityMap:ee,transmission:It,transmissionMap:H,thicknessMap:bt,gradientMap:K,opaque:_.transparent===!1&&_.blending===xn&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:Ct,alphaHash:Et,combine:_.combine,mapUv:Gt&&x(_.map.channel),aoMapUv:z&&x(_.aoMap.channel),lightMapUv:pt&&x(_.lightMap.channel),bumpMapUv:ct&&x(_.bumpMap.channel),normalMapUv:yt&&x(_.normalMap.channel),displacementMapUv:ft&&x(_.displacementMap.channel),emissiveMapUv:Lt&&x(_.emissiveMap.channel),metalnessMapUv:et&&x(_.metalnessMap.channel),roughnessMapUv:I&&x(_.roughnessMap.channel),anisotropyMapUv:Mt&&x(_.anisotropyMap.channel),clearcoatMapUv:Tt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(_.sheenRoughnessMap.channel),specularMapUv:jt&&x(_.specularMap.channel),specularColorMapUv:Vt&&x(_.specularColorMap.channel),specularIntensityMapUv:ee&&x(_.specularIntensityMap.channel),transmissionMapUv:H&&x(_.transmissionMap.channel),thicknessMapUv:bt&&x(_.thicknessMap.channel),alphaMapUv:at&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(yt||E),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Gt||at),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:we,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Re,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(v(b,_),y(b,_),b.push(o.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function v(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),_.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),_.push(r.mask)}function M(_){let b=p[_.type],C;if(b){let L=Ni[b];C=Be.clone(L.uniforms)}else C=_.uniforms;return C}function S(_,b){let C;for(let L=0,k=h.length;L<k;L++){let N=h[L];if(N.cacheKey===b){C=N,++C.usedTimes;break}}return C===void 0&&(C=new ev(o,b,_,s),h.push(C)),C}function w(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function T(_){l.remove(_)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:A}}function sv(){let o=new WeakMap;function t(a){return o.has(a)}function e(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function i(a){o.delete(a)}function n(a,r,l){o.get(a)[r]=l}function s(){o=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function rv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function td(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ed(){let o=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,p,x,g){let m=o[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},o[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function r(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||rv),i.length>1&&i.sort(d||td),n.length>1&&n.sort(d||td)}function h(){for(let u=t,d=o.length;u<d;u++){let f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:h,sort:c}}function ov(){let o=new WeakMap;function t(i,n){let s=o.get(i),a;return s===void 0?(a=new ed,o.set(i,[a])):n>=s.length?(a=new ed,s.push(a)):a=s[n],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function av(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new dt};break;case"SpotLight":e={position:new R,direction:new R,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new R,halfWidth:new R,halfHeight:new R};break}return o[t.id]=e,e}}}function lv(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var cv=0;function hv(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function uv(o){let t=new av,e=lv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new Rt,a=new Rt;function r(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,y=0,M=0,S=0,w=0,T=0;c.sort(hv);for(let _=0,b=c.length;_<b;_++){let C=c[_],L=C.color,k=C.intensity,N=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*k,u+=L.g*k,d+=L.b*k;else if(C.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(C.sh.coefficients[U],k);T++}else if(C.isDirectionalLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,F=e.get(C);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=C.shadow.matrix,v++}i.directional[f]=U,f++}else if(C.isSpotLight){let U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(L).multiplyScalar(k),U.distance=N,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,i.spot[x]=U;let X=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,X.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[x]=X.matrix,C.castShadow){let F=e.get(C);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=O,M++}x++}else if(C.isRectAreaLight){let U=t.get(C);U.color.copy(L).multiplyScalar(k),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=U,g++}else if(C.isPointLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let X=C.shadow,F=e.get(C);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=C.shadow.matrix,y++}i.point[p]=U,p++}else if(C.isHemisphereLight){let U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(k),U.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[m]=U,m++}}g>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let A=i.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==x||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==M||A.numSpotMaps!==S||A.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,A.directionalLength=f,A.pointLength=p,A.spotLength=x,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=M,A.numSpotMaps=S,A.numLightProbes=T,i.version=cv++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),u++}else if(y.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:r,setupView:l,state:i}}function id(o){let t=new uv(o),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function dv(o){let t=new WeakMap;function e(n,s=0){let a=t.get(n),r;return a===void 0?(r=new id(o),t.set(n,[r])):s>=a.length?(r=new id(o),a.push(r)):r=a[s],r}function i(){t=new WeakMap}return{get:e,dispose:i}}var gr=class extends nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ic=class extends nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mv(o,t,e){let i=new mr,n=new lt,s=new lt,a=new re,r=new gr({depthPacking:yh}),l=new Ic,c={},h=e.maxTextureSize,u={[Oi]:Fe,[Fe]:Oi,[Re]:Re},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new de;p.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let m=this.type;this.render=function(w,T,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let _=o.getRenderTarget(),b=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Ee),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==ji&&this.type===ji,N=m===ji&&this.type!==ji;for(let O=0,U=w.length;O<U;O++){let X=w[O],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let B=F.getFrameExtents();if(n.multiply(B),s.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/B.x),n.x=s.x*B.x,F.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/B.y),n.y=s.y*B.y,F.mapSize.y=s.y)),F.map===null||k===!0||N===!0){let rt=this.type!==ji?{minFilter:Pe,magFilter:Pe}:{};F.map!==null&&F.map.dispose(),F.map=new ye(n.x,n.y,rt),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}o.setRenderTarget(F.map),o.clear();let j=F.getViewportCount();for(let rt=0;rt<j;rt++){let st=F.getViewport(rt);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),L.viewport(a),F.updateMatrices(X,rt),i=F.getFrustum(),M(T,A,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===ji&&v(F,A),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,o.setRenderTarget(_,b,C)};function v(w,T){let A=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ye(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(T,null,A,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(T,null,A,f,x,null)}function y(w,T,A,_){let b=null,C=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=A.isPointLight===!0?l:r,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let L=b.uuid,k=T.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let O=N[k];O===void 0&&(O=b.clone(),N[k]=O,T.addEventListener("dispose",S)),b=O}if(b.visible=T.visible,b.wireframe=T.wireframe,_===ji?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=o.properties.get(b);L.light=A}return b}function M(w,T,A,_,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ji)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let k=t.update(w),N=w.material;if(Array.isArray(N)){let O=k.groups;for(let U=0,X=O.length;U<X;U++){let F=O[U],B=N[F.materialIndex];if(B&&B.visible){let j=y(w,B,_,b);w.onBeforeShadow(o,w,T,A,k,j,F),o.renderBufferDirect(A,null,k,j,w,F),w.onAfterShadow(o,w,T,A,k,j,F)}}}else if(N.visible){let O=y(w,N,_,b);w.onBeforeShadow(o,w,T,A,k,O,null),o.renderBufferDirect(A,null,k,O,w,null),w.onAfterShadow(o,w,T,A,k,O,null)}}let L=w.children;for(let k=0,N=L.length;k<N;k++)M(L[k],T,A,_,b)}function S(w){w.target.removeEventListener("dispose",S);for(let A in c){let _=c[A],b=w.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var gv={[Fl]:Ol,[Bl]:Gl,[Hl]:Wl,[Ts]:Vl,[Ol]:Fl,[Gl]:Bl,[Wl]:Hl,[Vl]:Ts};function xv(o,t){function e(){let H=!1,bt=new re,K=null,at=new re(0,0,0,0);return{setMask:function(Ct){K!==Ct&&!H&&(o.colorMask(Ct,Ct,Ct,Ct),K=Ct)},setLocked:function(Ct){H=Ct},setClear:function(Ct,Et,Yt,we,He){He===!0&&(Ct*=we,Et*=we,Yt*=we),bt.set(Ct,Et,Yt,we),at.equals(bt)===!1&&(o.clearColor(Ct,Et,Yt,we),at.copy(bt))},reset:function(){H=!1,K=null,at.set(-1,0,0,0)}}}function i(){let H=!1,bt=!1,K=null,at=null,Ct=null;return{setReversed:function(Et){if(bt!==Et){let Yt=t.get("EXT_clip_control");bt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let we=Ct;Ct=null,this.setClear(we)}bt=Et},getReversed:function(){return bt},setTest:function(Et){Et?it(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(Et){K!==Et&&!H&&(o.depthMask(Et),K=Et)},setFunc:function(Et){if(bt&&(Et=gv[Et]),at!==Et){switch(Et){case Fl:o.depthFunc(o.NEVER);break;case Ol:o.depthFunc(o.ALWAYS);break;case Bl:o.depthFunc(o.LESS);break;case Ts:o.depthFunc(o.LEQUAL);break;case Hl:o.depthFunc(o.EQUAL);break;case Vl:o.depthFunc(o.GEQUAL);break;case Gl:o.depthFunc(o.GREATER);break;case Wl:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}at=Et}},setLocked:function(Et){H=Et},setClear:function(Et){Ct!==Et&&(bt&&(Et=1-Et),o.clearDepth(Et),Ct=Et)},reset:function(){H=!1,K=null,at=null,Ct=null,bt=!1}}}function n(){let H=!1,bt=null,K=null,at=null,Ct=null,Et=null,Yt=null,we=null,He=null;return{setTest:function(ce){H||(ce?it(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(ce){bt!==ce&&!H&&(o.stencilMask(ce),bt=ce)},setFunc:function(ce,Ti,Gi){(K!==ce||at!==Ti||Ct!==Gi)&&(o.stencilFunc(ce,Ti,Gi),K=ce,at=Ti,Ct=Gi)},setOp:function(ce,Ti,Gi){(Et!==ce||Yt!==Ti||we!==Gi)&&(o.stencilOp(ce,Ti,Gi),Et=ce,Yt=Ti,we=Gi)},setLocked:function(ce){H=ce},setClear:function(ce){He!==ce&&(o.clearStencil(ce),He=ce)},reset:function(){H=!1,bt=null,K=null,at=null,Ct=null,Et=null,Yt=null,we=null,He=null}}}let s=new e,a=new i,r=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,M=null,S=null,w=null,T=new dt(0,0,0),A=0,_=!1,b=null,C=null,L=null,k=null,N=null,O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,X=0,F=o.getParameter(o.VERSION);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=X>=2);let B=null,j={},rt=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),_t=new re().fromArray(rt),Y=new re().fromArray(st);function J(H,bt,K,at){let Ct=new Uint8Array(4),Et=o.createTexture();o.bindTexture(H,Et),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<K;Yt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,at,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(bt+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Et}let gt={};gt[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),it(o.DEPTH_TEST),a.setFunc(Ts),ct(!1),yt(su),it(o.CULL_FACE),z(Ee);function it(H){h[H]!==!0&&(o.enable(H),h[H]=!0)}function xt(H){h[H]!==!1&&(o.disable(H),h[H]=!1)}function St(H,bt){return u[H]!==bt?(o.bindFramebuffer(H,bt),u[H]=bt,H===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=bt),H===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function vt(H,bt){let K=f,at=!1;if(H){K=d.get(bt),K===void 0&&(K=[],d.set(bt,K));let Ct=H.textures;if(K.length!==Ct.length||K[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Yt=Ct.length;Et<Yt;Et++)K[Et]=o.COLOR_ATTACHMENT0+Et;K.length=Ct.length,at=!0}}else K[0]!==o.BACK&&(K[0]=o.BACK,at=!0);at&&o.drawBuffers(K)}function Gt(H){return p!==H?(o.useProgram(H),p=H,!0):!1}let nt={[xi]:o.FUNC_ADD,[Of]:o.FUNC_SUBTRACT,[Bf]:o.FUNC_REVERSE_SUBTRACT};nt[Hf]=o.MIN,nt[Vf]=o.MAX;let ut={[Fs]:o.ZERO,[Gf]:o.ONE,[Wf]:o.SRC_COLOR,[Ul]:o.SRC_ALPHA,[$f]:o.SRC_ALPHA_SATURATE,[na]:o.DST_COLOR,[ia]:o.DST_ALPHA,[qf]:o.ONE_MINUS_SRC_COLOR,[Nl]:o.ONE_MINUS_SRC_ALPHA,[Yf]:o.ONE_MINUS_DST_COLOR,[Xf]:o.ONE_MINUS_DST_ALPHA,[Zf]:o.CONSTANT_COLOR,[jf]:o.ONE_MINUS_CONSTANT_COLOR,[Kf]:o.CONSTANT_ALPHA,[Jf]:o.ONE_MINUS_CONSTANT_ALPHA};function z(H,bt,K,at,Ct,Et,Yt,we,He,ce){if(H===Ee){x===!0&&(xt(o.BLEND),x=!1);return}if(x===!1&&(it(o.BLEND),x=!0),H!==ah){if(H!==g||ce!==_){if((m!==xi||M!==xi)&&(o.blendEquation(o.FUNC_ADD),m=xi,M=xi),ce)switch(H){case xn:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case en:o.blendFunc(o.ONE,o.ONE);break;case ru:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ou:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xn:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case en:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ru:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ou:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,y=null,S=null,w=null,T.set(0,0,0),A=0,g=H,_=ce}return}Ct=Ct||bt,Et=Et||K,Yt=Yt||at,(bt!==m||Ct!==M)&&(o.blendEquationSeparate(nt[bt],nt[Ct]),m=bt,M=Ct),(K!==v||at!==y||Et!==S||Yt!==w)&&(o.blendFuncSeparate(ut[K],ut[at],ut[Et],ut[Yt]),v=K,y=at,S=Et,w=Yt),(we.equals(T)===!1||He!==A)&&(o.blendColor(we.r,we.g,we.b,He),T.copy(we),A=He),g=H,_=!1}function pt(H,bt){H.side===Re?xt(o.CULL_FACE):it(o.CULL_FACE);let K=H.side===Fe;bt&&(K=!K),ct(K),H.blending===xn&&H.transparent===!1?z(Ee):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);let at=H.stencilWrite;r.setTest(at),at&&(r.setMask(H.stencilWriteMask),r.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),r.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Lt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){b!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),b=H)}function yt(H){H!==Nf?(it(o.CULL_FACE),H!==C&&(H===su?o.cullFace(o.BACK):H===Ff?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),C=H}function ft(H){H!==L&&(U&&o.lineWidth(H),L=H)}function Lt(H,bt,K){H?(it(o.POLYGON_OFFSET_FILL),(k!==bt||N!==K)&&(o.polygonOffset(bt,K),k=bt,N=K)):xt(o.POLYGON_OFFSET_FILL)}function et(H){H?it(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function I(H){H===void 0&&(H=o.TEXTURE0+O-1),B!==H&&(o.activeTexture(H),B=H)}function E(H,bt,K){K===void 0&&(B===null?K=o.TEXTURE0+O-1:K=B);let at=j[K];at===void 0&&(at={type:void 0,texture:void 0},j[K]=at),(at.type!==H||at.texture!==bt)&&(B!==K&&(o.activeTexture(K),B=K),o.bindTexture(H,bt||gt[H]),at.type=H,at.texture=bt)}function W(){let H=j[B];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xt(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Bt(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ht(H){_t.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function Dt(H){Y.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Y.copy(H))}function jt(H,bt){let K=c.get(bt);K===void 0&&(K=new WeakMap,c.set(bt,K));let at=K.get(H);at===void 0&&(at=o.getUniformBlockIndex(bt,H.name),K.set(H,at))}function Vt(H,bt){let at=c.get(bt).get(H);l.get(bt)!==at&&(o.uniformBlockBinding(bt,at,H.__bindingPointIndex),l.set(bt,at))}function ee(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},B=null,j={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,M=null,S=null,w=null,T=new dt(0,0,0),A=0,_=!1,b=null,C=null,L=null,k=null,N=null,_t.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:it,disable:xt,bindFramebuffer:St,drawBuffers:vt,useProgram:Gt,setBlending:z,setMaterial:pt,setFlipSided:ct,setCullFace:yt,setLineWidth:ft,setPolygonOffset:Lt,setScissorTest:et,activeTexture:I,bindTexture:E,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:Pt,texImage3D:Bt,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:ht,texSubImage2D:tt,texSubImage3D:It,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Tt,scissor:Ht,viewport:Dt,reset:ee}}function nd(o,t,e,i){let n=vv(i);switch(e){case _d:return o*t;case Sd:return o*t;case Td:return o*t*2;case Os:return o*t/n.components*n.byteLength;case gh:return o*t/n.components*n.byteLength;case Ed:return o*t*2/n.components*n.byteLength;case xh:return o*t*2/n.components*n.byteLength;case wd:return o*t*3/n.components*n.byteLength;case ci:return o*t*4/n.components*n.byteLength;case vh:return o*t*4/n.components*n.byteLength;case bo:case _o:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wo:case So:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zl:case Kl:return Math.max(o,16)*Math.max(t,8)/4;case $l:case jl:return Math.max(o,8)*Math.max(t,8)/2;case Jl:case Ql:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case To:case mc:case gc:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ad:case xc:return Math.ceil(o/4)*Math.ceil(t/4)*8;case vc:case yc:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vv(o){switch(o){case hi:case yd:return{byteLength:1,components:1};case pr:case Md:case Se:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Hn:case fh:case Fi:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function yv(o,t,e,i,n,s,a){let r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):Co("canvas")}function x(I,E,W){let Q=1,ot=et(I);if((ot.width>W||ot.height>W)&&(Q=W/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let tt=Math.floor(Q*ot.width),It=Math.floor(Q*ot.height);u===void 0&&(u=p(tt,It));let Mt=E?p(tt,It):u;return Mt.width=tt,Mt.height=It,Mt.getContext("2d").drawImage(I,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+It+")."),Mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){o.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(I,E,W,Q,ot=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let tt=E;if(E===o.RED&&(W===o.FLOAT&&(tt=o.R32F),W===o.HALF_FLOAT&&(tt=o.R16F),W===o.UNSIGNED_BYTE&&(tt=o.R8)),E===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(tt=o.R8UI),W===o.UNSIGNED_SHORT&&(tt=o.R16UI),W===o.UNSIGNED_INT&&(tt=o.R32UI),W===o.BYTE&&(tt=o.R8I),W===o.SHORT&&(tt=o.R16I),W===o.INT&&(tt=o.R32I)),E===o.RG&&(W===o.FLOAT&&(tt=o.RG32F),W===o.HALF_FLOAT&&(tt=o.RG16F),W===o.UNSIGNED_BYTE&&(tt=o.RG8)),E===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(tt=o.RG8UI),W===o.UNSIGNED_SHORT&&(tt=o.RG16UI),W===o.UNSIGNED_INT&&(tt=o.RG32UI),W===o.BYTE&&(tt=o.RG8I),W===o.SHORT&&(tt=o.RG16I),W===o.INT&&(tt=o.RG32I)),E===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(tt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(tt=o.RGB16UI),W===o.UNSIGNED_INT&&(tt=o.RGB32UI),W===o.BYTE&&(tt=o.RGB8I),W===o.SHORT&&(tt=o.RGB16I),W===o.INT&&(tt=o.RGB32I)),E===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(tt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(tt=o.RGBA16UI),W===o.UNSIGNED_INT&&(tt=o.RGBA32UI),W===o.BYTE&&(tt=o.RGBA8I),W===o.SHORT&&(tt=o.RGBA16I),W===o.INT&&(tt=o.RGBA32I)),E===o.RGB&&W===o.UNSIGNED_INT_5_9_9_9_REV&&(tt=o.RGB9_E5),E===o.RGBA){let It=ot?ra:te.getTransfer(Q);W===o.FLOAT&&(tt=o.RGBA32F),W===o.HALF_FLOAT&&(tt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(tt=It===le?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(tt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(tt=o.RGB5_A1)}return(tt===o.R16F||tt===o.R32F||tt===o.RG16F||tt===o.RG32F||tt===o.RGBA16F||tt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(I,E){let W;return I?E===null||E===Hn||E===yn?W=o.DEPTH24_STENCIL8:E===Fi?W=o.DEPTH32F_STENCIL8:E===pr&&(W=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hn||E===yn?W=o.DEPTH_COMPONENT24:E===Fi?W=o.DEPTH_COMPONENT32F:E===pr&&(W=o.DEPTH_COMPONENT16),W}function S(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pe&&I.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&h.delete(E)}function T(I){let E=I.target;E.removeEventListener("dispose",T),b(E)}function A(I){let E=i.get(I);if(E.__webglInit===void 0)return;let W=I.source,Q=d.get(W);if(Q){let ot=Q[E.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&_(I),Object.keys(Q).length===0&&d.delete(W)}i.remove(I)}function _(I){let E=i.get(I);o.deleteTexture(E.__webglTexture);let W=I.source,Q=d.get(W);delete Q[E.__cacheKey],a.memory.textures--}function b(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ot=0;ot<E.__webglFramebuffer[Q].length;ot++)o.deleteFramebuffer(E.__webglFramebuffer[Q][ot]);else o.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)o.deleteFramebuffer(E.__webglFramebuffer[Q]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=I.textures;for(let Q=0,ot=W.length;Q<ot;Q++){let tt=i.get(W[Q]);tt.__webglTexture&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),i.remove(W[Q])}i.remove(I)}let C=0;function L(){C=0}function k(){let I=C;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),C+=1,I}function N(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function O(I,E){let W=i.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){let Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,I,E);return}}e.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+E)}function U(I,E){let W=i.get(I);if(I.version>0&&W.__version!==I.version){Y(W,I,E);return}e.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+E)}function X(I,E){let W=i.get(I);if(I.version>0&&W.__version!==I.version){Y(W,I,E);return}e.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+E)}function F(I,E){let W=i.get(I);if(I.version>0&&W.__version!==I.version){J(W,I,E);return}e.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+E)}let B={[Di]:o.REPEAT,[Bn]:o.CLAMP_TO_EDGE,[Yl]:o.MIRRORED_REPEAT},j={[Pe]:o.NEAREST,[ip]:o.NEAREST_MIPMAP_NEAREST,[Xr]:o.NEAREST_MIPMAP_LINEAR,[je]:o.LINEAR,[nl]:o.LINEAR_MIPMAP_NEAREST,[Ji]:o.LINEAR_MIPMAP_LINEAR},rt={[rp]:o.NEVER,[up]:o.ALWAYS,[op]:o.LESS,[Cd]:o.LEQUAL,[ap]:o.EQUAL,[hp]:o.GEQUAL,[lp]:o.GREATER,[cp]:o.NOTEQUAL};function st(I,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===je||E.magFilter===nl||E.magFilter===Xr||E.magFilter===Ji||E.minFilter===je||E.minFilter===nl||E.minFilter===Xr||E.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,B[E.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,B[E.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,B[E.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,j[E.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pe||E.minFilter!==Xr&&E.minFilter!==Ji||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function _t(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let Q=E.source,ot=d.get(Q);ot===void 0&&(ot={},d.set(Q,ot));let tt=N(E);if(tt!==I.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ot[tt].usedTimes++;let It=ot[I.__cacheKey];It!==void 0&&(ot[I.__cacheKey].usedTimes--,It.usedTimes===0&&_(E)),I.__cacheKey=tt,I.__webglTexture=ot[tt].texture}return W}function Y(I,E,W){let Q=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=o.TEXTURE_3D);let ot=_t(I,E),tt=E.source;e.bindTexture(Q,I.__webglTexture,o.TEXTURE0+W);let It=i.get(tt);if(tt.version!==It.__version||ot===!0){e.activeTexture(o.TEXTURE0+W);let Mt=te.getPrimaries(te.workingColorSpace),Tt=E.colorSpace===gn?null:te.getPrimaries(E.colorSpace),Xt=E.colorSpace===gn||Mt===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ht=x(E.image,!1,n.maxTextureSize);ht=Lt(E,ht);let Pt=s.convert(E.format,E.colorSpace),Bt=s.convert(E.type),Ht=y(E.internalFormat,Pt,Bt,E.colorSpace,E.isVideoTexture);st(Q,E);let Dt,jt=E.mipmaps,Vt=E.isVideoTexture!==!0,ee=It.__version===void 0||ot===!0,H=tt.dataReady,bt=S(E,ht);if(E.isDepthTexture)Ht=M(E.format===Mn,E.type),ee&&(Vt?e.texStorage2D(o.TEXTURE_2D,1,Ht,ht.width,ht.height):e.texImage2D(o.TEXTURE_2D,0,Ht,ht.width,ht.height,0,Pt,Bt,null));else if(E.isDataTexture)if(jt.length>0){Vt&&ee&&e.texStorage2D(o.TEXTURE_2D,bt,Ht,jt[0].width,jt[0].height);for(let K=0,at=jt.length;K<at;K++)Dt=jt[K],Vt?H&&e.texSubImage2D(o.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Bt,Dt.data):e.texImage2D(o.TEXTURE_2D,K,Ht,Dt.width,Dt.height,0,Pt,Bt,Dt.data);E.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(o.TEXTURE_2D,bt,Ht,ht.width,ht.height),H&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,ht.width,ht.height,Pt,Bt,ht.data)):e.texImage2D(o.TEXTURE_2D,0,Ht,ht.width,ht.height,0,Pt,Bt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Ht,jt[0].width,jt[0].height,ht.depth);for(let K=0,at=jt.length;K<at;K++)if(Dt=jt[K],E.format!==ci)if(Pt!==null)if(Vt){if(H)if(E.layerUpdates.size>0){let Ct=nd(Dt.width,Dt.height,E.format,E.type);for(let Et of E.layerUpdates){let Yt=Dt.data.subarray(Et*Ct/Dt.data.BYTES_PER_ELEMENT,(Et+1)*Ct/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,Et,Dt.width,Dt.height,1,Pt,Yt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Pt,Dt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,K,Ht,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Pt,Bt,Dt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,K,Ht,Dt.width,Dt.height,ht.depth,0,Pt,Bt,Dt.data)}else{Vt&&ee&&e.texStorage2D(o.TEXTURE_2D,bt,Ht,jt[0].width,jt[0].height);for(let K=0,at=jt.length;K<at;K++)Dt=jt[K],E.format!==ci?Pt!==null?Vt?H&&e.compressedTexSubImage2D(o.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Dt.data):e.compressedTexImage2D(o.TEXTURE_2D,K,Ht,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(o.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Bt,Dt.data):e.texImage2D(o.TEXTURE_2D,K,Ht,Dt.width,Dt.height,0,Pt,Bt,Dt.data)}else if(E.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Ht,ht.width,ht.height,ht.depth),H)if(E.layerUpdates.size>0){let K=nd(ht.width,ht.height,E.format,E.type);for(let at of E.layerUpdates){let Ct=ht.data.subarray(at*K/ht.data.BYTES_PER_ELEMENT,(at+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,Pt,Bt,Ct)}E.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Pt,Bt,ht.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Ht,ht.width,ht.height,ht.depth,0,Pt,Bt,ht.data);else if(E.isData3DTexture)Vt?(ee&&e.texStorage3D(o.TEXTURE_3D,bt,Ht,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Pt,Bt,ht.data)):e.texImage3D(o.TEXTURE_3D,0,Ht,ht.width,ht.height,ht.depth,0,Pt,Bt,ht.data);else if(E.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(o.TEXTURE_2D,bt,Ht,ht.width,ht.height);else{let K=ht.width,at=ht.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(o.TEXTURE_2D,Ct,Ht,K,at,0,Pt,Bt,null),K>>=1,at>>=1}}else if(jt.length>0){if(Vt&&ee){let K=et(jt[0]);e.texStorage2D(o.TEXTURE_2D,bt,Ht,K.width,K.height)}for(let K=0,at=jt.length;K<at;K++)Dt=jt[K],Vt?H&&e.texSubImage2D(o.TEXTURE_2D,K,0,0,Pt,Bt,Dt):e.texImage2D(o.TEXTURE_2D,K,Ht,Pt,Bt,Dt);E.generateMipmaps=!1}else if(Vt){if(ee){let K=et(ht);e.texStorage2D(o.TEXTURE_2D,bt,Ht,K.width,K.height)}H&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Bt,ht)}else e.texImage2D(o.TEXTURE_2D,0,Ht,Pt,Bt,ht);g(E)&&m(Q),It.__version=tt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function J(I,E,W){if(E.image.length!==6)return;let Q=_t(I,E),ot=E.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+W);let tt=i.get(ot);if(ot.version!==tt.__version||Q===!0){e.activeTexture(o.TEXTURE0+W);let It=te.getPrimaries(te.workingColorSpace),Mt=E.colorSpace===gn?null:te.getPrimaries(E.colorSpace),Tt=E.colorSpace===gn||It===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let at=0;at<6;at++)!Xt&&!ht?Pt[at]=x(E.image[at],!0,n.maxCubemapSize):Pt[at]=ht?E.image[at].image:E.image[at],Pt[at]=Lt(E,Pt[at]);let Bt=Pt[0],Ht=s.convert(E.format,E.colorSpace),Dt=s.convert(E.type),jt=y(E.internalFormat,Ht,Dt,E.colorSpace),Vt=E.isVideoTexture!==!0,ee=tt.__version===void 0||Q===!0,H=ot.dataReady,bt=S(E,Bt);st(o.TEXTURE_CUBE_MAP,E);let K;if(Xt){Vt&&ee&&e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,jt,Bt.width,Bt.height);for(let at=0;at<6;at++){K=Pt[at].mipmaps;for(let Ct=0;Ct<K.length;Ct++){let Et=K[Ct];E.format!==ci?Ht!==null?Vt?H&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,0,0,Et.width,Et.height,Ht,Et.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,jt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?H&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,0,0,Et.width,Et.height,Ht,Dt,Et.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,jt,Et.width,Et.height,0,Ht,Dt,Et.data)}}}else{if(K=E.mipmaps,Vt&&ee){K.length>0&&bt++;let at=et(Pt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,jt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){Vt?H&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Pt[at].width,Pt[at].height,Ht,Dt,Pt[at].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,Pt[at].width,Pt[at].height,0,Ht,Dt,Pt[at].data);for(let Ct=0;Ct<K.length;Ct++){let Yt=K[Ct].image[at].image;Vt?H&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,0,0,Yt.width,Yt.height,Ht,Dt,Yt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,jt,Yt.width,Yt.height,0,Ht,Dt,Yt.data)}}else{Vt?H&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ht,Dt,Pt[at]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,Ht,Dt,Pt[at]);for(let Ct=0;Ct<K.length;Ct++){let Et=K[Ct];Vt?H&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,0,0,Ht,Dt,Et.image[at]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,jt,Ht,Dt,Et.image[at])}}}g(E)&&m(o.TEXTURE_CUBE_MAP),tt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function gt(I,E,W,Q,ot,tt){let It=s.convert(W.format,W.colorSpace),Mt=s.convert(W.type),Tt=y(W.internalFormat,It,Mt,W.colorSpace),Xt=i.get(E),ht=i.get(W);if(ht.__renderTarget=E,!Xt.__hasExternalTextures){let Pt=Math.max(1,E.width>>tt),Bt=Math.max(1,E.height>>tt);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,Tt,Pt,Bt,E.depth,0,It,Mt,null):e.texImage2D(ot,tt,Tt,Pt,Bt,0,It,Mt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),yt(E)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Q,ot,ht.__webglTexture,0,ct(E)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Q,ot,ht.__webglTexture,tt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function it(I,E,W){if(o.bindRenderbuffer(o.RENDERBUFFER,I),E.depthBuffer){let Q=E.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,tt=M(E.stencilBuffer,ot),It=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=ct(E);yt(E)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Mt,tt,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,tt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,tt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,I)}else{let Q=E.textures;for(let ot=0;ot<Q.length;ot++){let tt=Q[ot],It=s.convert(tt.format,tt.colorSpace),Mt=s.convert(tt.type),Tt=y(tt.internalFormat,It,Mt,tt.colorSpace),Xt=ct(E);W&&yt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,Tt,E.width,E.height):yt(E)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt,Tt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function xt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);let ot=Q.__webglTexture,tt=ct(E);if(E.depthTexture.format===_s)yt(E)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0);else if(E.depthTexture.format===Mn)yt(E)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function St(I){let E=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let ot=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),E.__depthDisposeCallback=ot}E.__boundDepthTexture=Q}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");xt(E.__webglFramebuffer,I)}else if(W){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=o.createRenderbuffer(),it(E.__webglDepthbuffer[Q],I,!1);else{let ot=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[Q];o.bindRenderbuffer(o.RENDERBUFFER,tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),it(E.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,Q,o.RENDERBUFFER,ot)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(I,E,W){let Q=i.get(I);E!==void 0&&gt(Q.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&St(I)}function Gt(I){let E=I.texture,W=i.get(I),Q=i.get(E);I.addEventListener("dispose",T);let ot=I.textures,tt=I.isWebGLCubeRenderTarget===!0,It=ot.length>1;if(It||(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=E.version,a.memory.textures++),tt){W.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Mt]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)W.__webglFramebuffer[Mt][Tt]=o.createFramebuffer()}else W.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)W.__webglFramebuffer[Mt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(It)for(let Mt=0,Tt=ot.length;Mt<Tt;Mt++){let Xt=i.get(ot[Mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),a.memory.textures++)}if(I.samples>0&&yt(I)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ot.length;Mt++){let Tt=ot[Mt];W.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Mt]);let Xt=s.convert(Tt.format,Tt.colorSpace),ht=s.convert(Tt.type),Pt=y(Tt.internalFormat,Xt,ht,Tt.colorSpace,I.isXRRenderTarget===!0),Bt=ct(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Pt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),it(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(tt){e.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture),st(o.TEXTURE_CUBE_MAP,E);for(let Mt=0;Mt<6;Mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)gt(W.__webglFramebuffer[Mt][Tt],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Tt);else gt(W.__webglFramebuffer[Mt],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(E)&&m(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Mt=0,Tt=ot.length;Mt<Tt;Mt++){let Xt=ot[Mt],ht=i.get(Xt);e.bindTexture(o.TEXTURE_2D,ht.__webglTexture),st(o.TEXTURE_2D,Xt),gt(W.__webglFramebuffer,I,Xt,o.COLOR_ATTACHMENT0+Mt,o.TEXTURE_2D,0),g(Xt)&&m(o.TEXTURE_2D)}e.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Mt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Q.__webglTexture),st(Mt,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)gt(W.__webglFramebuffer[Tt],I,E,o.COLOR_ATTACHMENT0,Mt,Tt);else gt(W.__webglFramebuffer,I,E,o.COLOR_ATTACHMENT0,Mt,0);g(E)&&m(Mt),e.unbindTexture()}I.depthBuffer&&St(I)}function nt(I){let E=I.textures;for(let W=0,Q=E.length;W<Q;W++){let ot=E[W];if(g(ot)){let tt=v(I),It=i.get(ot).__webglTexture;e.bindTexture(tt,It),m(tt),e.unbindTexture()}}}let ut=[],z=[];function pt(I){if(I.samples>0){if(yt(I)===!1){let E=I.textures,W=I.width,Q=I.height,ot=o.COLOR_BUFFER_BIT,tt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=i.get(I),Mt=E.length>1;if(Mt)for(let Tt=0;Tt<E.length;Tt++)e.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<E.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),Mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let Xt=i.get(E[Tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Xt,0)}o.blitFramebuffer(0,0,W,Q,0,0,W,Q,ot,o.NEAREST),l===!0&&(ut.length=0,z.length=0,ut.push(o.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(tt),z.push(tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Mt)for(let Tt=0;Tt<E.length;Tt++){e.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let Xt=i.get(E[Tt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,Xt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let E=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ct(I){return Math.min(n.maxSamples,I.samples)}function yt(I){let E=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Lt(I,E){let W=I.colorSpace,Q=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Bs&&W!==gn&&(te.getTransfer(W)===le?(Q!==ci||ot!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function et(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=F,this.rebindTextures=vt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=yt}function Mv(o,t){function e(i,n=gn){let s,a=te.getTransfer(n);if(i===hi)return o.UNSIGNED_BYTE;if(i===ph)return o.UNSIGNED_SHORT_4_4_4_4;if(i===mh)return o.UNSIGNED_SHORT_5_5_5_1;if(i===bd)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===yd)return o.BYTE;if(i===Md)return o.SHORT;if(i===pr)return o.UNSIGNED_SHORT;if(i===fh)return o.INT;if(i===Hn)return o.UNSIGNED_INT;if(i===Fi)return o.FLOAT;if(i===Se)return o.HALF_FLOAT;if(i===_d)return o.ALPHA;if(i===wd)return o.RGB;if(i===ci)return o.RGBA;if(i===Sd)return o.LUMINANCE;if(i===Td)return o.LUMINANCE_ALPHA;if(i===_s)return o.DEPTH_COMPONENT;if(i===Mn)return o.DEPTH_STENCIL;if(i===Os)return o.RED;if(i===gh)return o.RED_INTEGER;if(i===Ed)return o.RG;if(i===xh)return o.RG_INTEGER;if(i===vh)return o.RGBA_INTEGER;if(i===bo||i===_o||i===wo||i===So)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Zl||i===jl||i===Kl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$l)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===tc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jl||i===Ql)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ec||i===ic||i===nc||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ec)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===mc||i===gc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===To)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ad||i===xc||i===vc||i===yc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===To)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yn?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}var Lc=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},bv={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ti,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Jt({vertexShader:_v,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ke(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends bn{constructor(t,e){super();let i=this,n=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new kc,g=e.getContextAttributes(),m=null,v=null,y=[],M=[],S=new lt,w=null,T=new be;T.viewport=new re;let A=new be;A.viewport=new re;let _=[T,A],b=new Lc,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=y[Y];return J===void 0&&(J=new hr,y[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=y[Y];return J===void 0&&(J=new hr,y[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=y[Y];return J===void 0&&(J=new hr,y[Y]=J),J.getHandSpace()};function k(Y){let J=M.indexOf(Y.inputSource);if(J===-1)return;let gt=y[J];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",O);for(let Y=0;Y<y.length;Y++){let J=M[Y];J!==null&&(M[Y]=null,y[Y].disconnect(J))}C=null,L=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,v=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",N),n.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),n.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,J),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ye(f.framebufferWidth,f.framebufferHeight,{format:ci,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,gt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?Mn:_s,gt=g.stencil?yn:Hn);let xt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(xt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ye(d.textureWidth,d.textureHeight,{format:ci,type:hi,depthTexture:new Is(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(r),_t.setContext(n),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Y){for(let J=0;J<Y.removed.length;J++){let gt=Y.removed[J],it=M.indexOf(gt);it>=0&&(M[it]=null,y[it].disconnect(gt))}for(let J=0;J<Y.added.length;J++){let gt=Y.added[J],it=M.indexOf(gt);if(it===-1){for(let St=0;St<y.length;St++)if(St>=M.length){M.push(gt),it=St;break}else if(M[St]===null){M[St]=gt,it=St;break}if(it===-1)break}let xt=y[it];xt&&xt.connect(gt)}}let U=new R,X=new R;function F(Y,J,gt){U.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(gt.matrixWorld);let it=U.distanceTo(X),xt=J.projectionMatrix.elements,St=gt.projectionMatrix.elements,vt=xt[14]/(xt[10]-1),Gt=xt[14]/(xt[10]+1),nt=(xt[9]+1)/xt[5],ut=(xt[9]-1)/xt[5],z=(xt[8]-1)/xt[0],pt=(St[8]+1)/St[0],ct=vt*z,yt=vt*pt,ft=it/(-z+pt),Lt=ft*-z;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let et=vt+ft,I=Gt+ft,E=ct-Lt,W=yt+(it-Lt),Q=nt*Gt/I*et,ot=ut*Gt/I*et;Y.projectionMatrix.makePerspective(E,W,Q,ot,et,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function B(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let J=Y.near,gt=Y.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),b.near=A.near=T.near=J,b.far=A.far=T.far=gt,(C!==b.near||L!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,L=b.far),T.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,b.layers.mask=T.layers.mask|A.layers.mask;let it=Y.parent,xt=b.cameras;B(b,it);for(let St=0;St<xt.length;St++)B(xt[St],it);xt.length===2?F(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),j(Y,b,it)};function j(Y,J,gt){gt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let rt=null;function st(Y,J){if(h=J.getViewerPose(c||a),p=J,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let it=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let St=0;St<gt.length;St++){let vt=gt[St],Gt=null;if(f!==null)Gt=f.getViewport(vt);else{let ut=u.getViewSubImage(d,vt);Gt=ut.viewport,St===0&&(t.setRenderTargetTextures(v,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(v))}let nt=_[St];nt===void 0&&(nt=new be,nt.layers.enable(St),nt.viewport=new re,_[St]=nt),nt.matrix.fromArray(vt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(vt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),St===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(nt)}let xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")){let St=u.getDepthInformation(gt[0]);St&&St.isValid&&St.texture&&x.init(t,St,n.renderState)}}for(let gt=0;gt<y.length;gt++){let it=M[gt],xt=y[gt];it!==null&&xt!==void 0&&xt.update(it,J,c||a)}rt&&rt(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),p=null}let _t=new kd;_t.setAnimationLoop(st),this.setAnimationLoop=function(Y){rt=Y},this.dispose=function(){}}},Un=new We,Sv=new Rt;function Tv(o,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ld(o)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&r(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,Un.copy(M),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),g.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(Un)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function r(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ev(o,t,e,i){let n={},s={},a=[],r=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;i.uniformBlockBinding(v,M)}function c(v,y){let M=n[v.id];M===void 0&&(p(v),M=h(v),n[v.id]=M,v.addEventListener("dispose",g));let S=y.program;i.updateUBOMapping(v,S);let w=t.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let M=o.createBuffer(),S=v.__size,w=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,M),o.bufferData(o.UNIFORM_BUFFER,S,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<r;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=n[v.id],M=v.uniforms,S=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let w=0,T=M.length;w<T;w++){let A=Array.isArray(M[w])?M[w]:[M[w]];for(let _=0,b=A.length;_<b;_++){let C=A[_];if(f(C,w,_,S)===!0){let L=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],N=0;for(let O=0;O<k.length;O++){let U=k[O],X=x(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,L+N,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,L,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,y,M,S){let w=v.value,T=y+"_"+M;if(S[T]===void 0)return typeof w=="number"||typeof w=="boolean"?S[T]=w:S[T]=w.clone(),!0;{let A=S[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return S[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function p(v){let y=v.uniforms,M=0,S=16;for(let T=0,A=y.length;T<A;T++){let _=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,C=_.length;b<C;b++){let L=_[b],k=Array.isArray(L.value)?L.value:[L.value];for(let N=0,O=k.length;N<O;N++){let U=k[N],X=x(U),F=M%S,B=F%X.boundary,j=F+B;M+=B,j!==0&&S-j<X.storage&&(M+=S-j),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=X.storage}}}let w=M%S;return w>0&&(M+=S-w),v.__size=M,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function m(){for(let v in n)o.deleteBuffer(n[v]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var Ls=class{constructor(t={}){let{canvas:e=Cp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=vn,this.toneMappingExposure=1;let M=this,S=!1,w=0,T=0,A=null,_=-1,b=null,C=new re,L=new re,k=null,N=new dt(0),O=0,U=e.width,X=e.height,F=1,B=null,j=null,rt=new re(0,0,U,X),st=new re(0,0,U,X),_t=!1,Y=new mr,J=!1,gt=!1,it=new Rt,xt=new Rt,St=new R,vt=new re,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ut(){return A===null?F:1}let z=i;function pt(D,V){return e.getContext(D,V)}try{let D={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rh}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Et,!1),z===null){let V="webgl2";if(z=pt(V,D),z===null)throw pt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ct,yt,ft,Lt,et,I,E,W,Q,ot,tt,It,Mt,Tt,Xt,ht,Pt,Bt,Ht,Dt,jt,Vt,ee,H;function bt(){ct=new Vg(z),ct.init(),Vt=new Mv(z,ct),yt=new Ug(z,ct,t,Vt),ft=new xv(z,ct),yt.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),Lt=new qg(z),et=new sv,I=new yv(z,ct,ft,et,yt,Vt,Lt),E=new Fg(M),W=new Hg(M),Q=new Jp(z),ee=new kg(z,Q),ot=new Gg(z,Q,Lt,ee),tt=new Yg(z,ot,Q,Lt),Ht=new Xg(z,yt,I),ht=new Ng(et),It=new nv(M,E,W,ct,yt,ee,ht),Mt=new Tv(M,et),Tt=new ov,Xt=new dv(ct),Bt=new Lg(M,E,W,ft,tt,f,l),Pt=new mv(M,tt,yt),H=new Ev(z,Lt,yt,ft),Dt=new zg(z,ct,Lt),jt=new Wg(z,ct,Lt),Lt.programs=It.programs,M.capabilities=yt,M.extensions=ct,M.properties=et,M.renderLists=Tt,M.shadowMap=Pt,M.state=ft,M.info=Lt}bt();let K=new zc(M,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let D=ct.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ct.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(D){D!==void 0&&(F=D,this.setSize(U,X,!1))},this.getSize=function(D){return D.set(U,X)},this.setSize=function(D,V,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=D,X=V,e.width=Math.floor(D*F),e.height=Math.floor(V*F),$===!0&&(e.style.width=D+"px",e.style.height=V+"px"),this.setViewport(0,0,D,V)},this.getDrawingBufferSize=function(D){return D.set(U*F,X*F).floor()},this.setDrawingBufferSize=function(D,V,$){U=D,X=V,F=$,e.width=Math.floor(D*$),e.height=Math.floor(V*$),this.setViewport(0,0,D,V)},this.getCurrentViewport=function(D){return D.copy(C)},this.getViewport=function(D){return D.copy(rt)},this.setViewport=function(D,V,$,Z){D.isVector4?rt.set(D.x,D.y,D.z,D.w):rt.set(D,V,$,Z),ft.viewport(C.copy(rt).multiplyScalar(F).round())},this.getScissor=function(D){return D.copy(st)},this.setScissor=function(D,V,$,Z){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,V,$,Z),ft.scissor(L.copy(st).multiplyScalar(F).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(D){ft.setScissorTest(_t=D)},this.setOpaqueSort=function(D){B=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(D=!0,V=!0,$=!0){let Z=0;if(D){let G=!1;if(A!==null){let mt=A.texture.format;G=mt===vh||mt===xh||mt===gh}if(G){let mt=A.texture.type,At=mt===hi||mt===Hn||mt===pr||mt===yn||mt===ph||mt===mh,kt=Bt.getClearColor(),zt=Bt.getClearAlpha(),qt=kt.r,$t=kt.g,Ut=kt.b;At?(p[0]=qt,p[1]=$t,p[2]=Ut,p[3]=zt,z.clearBufferuiv(z.COLOR,0,p)):(x[0]=qt,x[1]=$t,x[2]=Ut,x[3]=zt,z.clearBufferiv(z.COLOR,0,x))}else Z|=z.COLOR_BUFFER_BIT}V&&(Z|=z.DEPTH_BUFFER_BIT),$&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Tt.dispose(),Xt.dispose(),et.dispose(),E.dispose(),W.dispose(),tt.dispose(),ee.dispose(),H.dispose(),It.dispose(),K.dispose(),K.removeEventListener("sessionstart",jh),K.removeEventListener("sessionend",Kh),Pn.stop()};function at(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let D=Lt.autoReset,V=Pt.enabled,$=Pt.autoUpdate,Z=Pt.needsUpdate,G=Pt.type;bt(),Lt.autoReset=D,Pt.enabled=V,Pt.autoUpdate=$,Pt.needsUpdate=Z,Pt.type=G}function Et(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Yt(D){let V=D.target;V.removeEventListener("dispose",Yt),we(V)}function we(D){He(D),et.remove(D)}function He(D){let V=et.get(D).programs;V!==void 0&&(V.forEach(function($){It.releaseProgram($)}),D.isShaderMaterial&&It.releaseShaderCache(D))}this.renderBufferDirect=function(D,V,$,Z,G,mt){V===null&&(V=Gt);let At=G.isMesh&&G.matrixWorld.determinant()<0,kt=kf(D,V,$,Z,G);ft.setMaterial(Z,At);let zt=$.index,qt=1;if(Z.wireframe===!0){if(zt=ot.getWireframeAttribute($),zt===void 0)return;qt=2}let $t=$.drawRange,Ut=$.attributes.position,ie=$t.start*qt,me=($t.start+$t.count)*qt;mt!==null&&(ie=Math.max(ie,mt.start*qt),me=Math.min(me,(mt.start+mt.count)*qt)),zt!==null?(ie=Math.max(ie,0),me=Math.min(me,zt.count)):Ut!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ut.count));let ge=me-ie;if(ge<0||ge===1/0)return;ee.setup(G,Z,kt,$,zt);let Qe,oe=Dt;if(zt!==null&&(Qe=Q.get(zt),oe=jt,oe.setIndex(Qe)),G.isMesh)Z.wireframe===!0?(ft.setLineWidth(Z.wireframeLinewidth*ut()),oe.setMode(z.LINES)):oe.setMode(z.TRIANGLES);else if(G.isLine){let Nt=Z.linewidth;Nt===void 0&&(Nt=1),ft.setLineWidth(Nt*ut()),G.isLineSegments?oe.setMode(z.LINES):G.isLineLoop?oe.setMode(z.LINE_LOOP):oe.setMode(z.LINE_STRIP)}else G.isPoints?oe.setMode(z.POINTS):G.isSprite&&oe.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)oe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Nt=G._multiDrawStarts,Wi=G._multiDrawCounts,ae=G._multiDrawCount,Ei=zt?Q.get(zt).bytesPerElement:1,ns=et.get(Z).currentProgram.getUniforms();for(let oi=0;oi<ae;oi++)ns.setValue(z,"_gl_DrawID",oi),oe.render(Nt[oi]/Ei,Wi[oi])}else if(G.isInstancedMesh)oe.renderInstances(ie,ge,G.count);else if($.isInstancedBufferGeometry){let Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wi=Math.min($.instanceCount,Nt);oe.renderInstances(ie,ge,Wi)}else oe.render(ie,ge)};function ce(D,V,$){D.transparent===!0&&D.side===Re&&D.forceSinglePass===!1?(D.side=Fe,D.needsUpdate=!0,qr(D,V,$),D.side=Oi,D.needsUpdate=!0,qr(D,V,$),D.side=Re):qr(D,V,$)}this.compile=function(D,V,$=null){$===null&&($=D),m=Xt.get($),m.init(V),y.push(m),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),D!==$&&D.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let Z=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let mt=G.material;if(mt)if(Array.isArray(mt))for(let At=0;At<mt.length;At++){let kt=mt[At];ce(kt,$,G),Z.add(kt)}else ce(mt,$,G),Z.add(mt)}),y.pop(),m=null,Z},this.compileAsync=function(D,V,$=null){let Z=this.compile(D,V,$);return new Promise(G=>{function mt(){if(Z.forEach(function(At){et.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){G(D);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ti=null;function Gi(D){Ti&&Ti(D)}function jh(){Pn.stop()}function Kh(){Pn.start()}let Pn=new kd;Pn.setAnimationLoop(Gi),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(D){Ti=D,K.setAnimationLoop(D),D===null?Pn.stop():Pn.start()},K.addEventListener("sessionstart",jh),K.addEventListener("sessionend",Kh),this.render=function(D,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(V),V=K.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,V,A),m=Xt.get(D,y.length),m.init(V),y.push(m),xt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(xt),gt=this.localClippingEnabled,J=ht.init(this.clippingPlanes,gt),g=Tt.get(D,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){let mt=M.xr.getDepthSensingMesh();mt!==null&&il(mt,V,-1/0,M.sortObjects)}il(D,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(B,j),nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,nt&&Bt.addToRenderList(g,D),this.info.render.frame++,J===!0&&ht.beginShadows();let $=m.state.shadowsArray;Pt.render($,D,V),J===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,G=g.transmissive;if(m.setupLights(),V.isArrayCamera){let mt=V.cameras;if(G.length>0)for(let At=0,kt=mt.length;At<kt;At++){let zt=mt[At];Qh(Z,G,D,zt)}nt&&Bt.render(D);for(let At=0,kt=mt.length;At<kt;At++){let zt=mt[At];Jh(g,D,zt,zt.viewport)}}else G.length>0&&Qh(Z,G,D,V),nt&&Bt.render(D),Jh(g,D,V);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(M,D,V),ee.resetDefaultState(),_=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],J===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function il(D,V,$,Z){if(D.visible===!1)return;if(D.layers.test(V.layers)){if(D.isGroup)$=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(V);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Y.intersectsSprite(D)){Z&&vt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(xt);let At=tt.update(D),kt=D.material;kt.visible&&g.push(D,At,kt,$,vt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Y.intersectsObject(D))){let At=tt.update(D),kt=D.material;if(Z&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),vt.copy(D.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),vt.copy(At.boundingSphere.center)),vt.applyMatrix4(D.matrixWorld).applyMatrix4(xt)),Array.isArray(kt)){let zt=At.groups;for(let qt=0,$t=zt.length;qt<$t;qt++){let Ut=zt[qt],ie=kt[Ut.materialIndex];ie&&ie.visible&&g.push(D,At,ie,$,vt.z,Ut)}}else kt.visible&&g.push(D,At,kt,$,vt.z,null)}}let mt=D.children;for(let At=0,kt=mt.length;At<kt;At++)il(mt[At],V,$,Z)}function Jh(D,V,$,Z){let G=D.opaque,mt=D.transmissive,At=D.transparent;m.setupLightsView($),J===!0&&ht.setGlobalState(M.clippingPlanes,$),Z&&ft.viewport(C.copy(Z)),G.length>0&&Wr(G,V,$),mt.length>0&&Wr(mt,V,$),At.length>0&&Wr(At,V,$),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Qh(D,V,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new ye(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Se:hi,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let mt=m.state.transmissionRenderTarget[Z.id],At=Z.viewport||C;mt.setSize(At.z,At.w);let kt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(N),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),nt&&Bt.render($);let zt=M.toneMapping;M.toneMapping=vn;let qt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),J===!0&&ht.setGlobalState(M.clippingPlanes,Z),Wr(D,$,Z),I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,ie=V.length;Ut<ie;Ut++){let me=V[Ut],ge=me.object,Qe=me.geometry,oe=me.material,Nt=me.group;if(oe.side===Re&&ge.layers.test(Z.layers)){let Wi=oe.side;oe.side=Fe,oe.needsUpdate=!0,tu(ge,$,Z,Qe,oe,Nt),oe.side=Wi,oe.needsUpdate=!0,$t=!0}}$t===!0&&(I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt))}M.setRenderTarget(kt),M.setClearColor(N,O),qt!==void 0&&(Z.viewport=qt),M.toneMapping=zt}function Wr(D,V,$){let Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,mt=D.length;G<mt;G++){let At=D[G],kt=At.object,zt=At.geometry,qt=Z===null?At.material:Z,$t=At.group;kt.layers.test($.layers)&&tu(kt,V,$,zt,qt,$t)}}function tu(D,V,$,Z,G,mt){D.onBeforeRender(M,V,$,Z,G,mt),D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(M,V,$,Z,D,mt),G.transparent===!0&&G.side===Re&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,M.renderBufferDirect($,V,Z,G,D,mt),G.side=Oi,G.needsUpdate=!0,M.renderBufferDirect($,V,Z,G,D,mt),G.side=Re):M.renderBufferDirect($,V,Z,G,D,mt),D.onAfterRender(M,V,$,Z,G,mt)}function qr(D,V,$){V.isScene!==!0&&(V=Gt);let Z=et.get(D),G=m.state.lights,mt=m.state.shadowsArray,At=G.state.version,kt=It.getParameters(D,G.state,mt,V,$),zt=It.getProgramCacheKey(kt),qt=Z.programs;Z.environment=D.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(D.isMeshStandardMaterial?W:E).get(D.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&D.envMap===null?V.environmentRotation:D.envMapRotation,qt===void 0&&(D.addEventListener("dispose",Yt),qt=new Map,Z.programs=qt);let $t=qt.get(zt);if($t!==void 0){if(Z.currentProgram===$t&&Z.lightsStateVersion===At)return iu(D,kt),$t}else kt.uniforms=It.getUniforms(D),D.onBeforeCompile(kt,M),$t=It.acquireProgram(kt,zt),qt.set(zt,$t),Z.uniforms=kt.uniforms;let Ut=Z.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),iu(D,kt),Z.needsLights=Uf(D),Z.lightsStateVersion=At,Z.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=$t,Z.uniformsList=null,$t}function eu(D){if(D.uniformsList===null){let V=D.currentProgram.getUniforms();D.uniformsList=Ss.seqWithValue(V.seq,D.uniforms)}return D.uniformsList}function iu(D,V){let $=et.get(D);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function kf(D,V,$,Z,G){V.isScene!==!0&&(V=Gt),I.resetTextureUnits();let mt=V.fog,At=Z.isMeshStandardMaterial?V.environment:null,kt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bs,zt=(Z.isMeshStandardMaterial?W:E).get(Z.envMap||At),qt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$t=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,me=!!$.morphAttributes.color,ge=vn;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ge=M.toneMapping);let Qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Qe!==void 0?Qe.length:0,Nt=et.get(Z),Wi=m.state.lights;if(J===!0&&(gt===!0||D!==b)){let mi=D===b&&Z.id===_;ht.setState(Z,D,mi)}let ae=!1;Z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Wi.state.version||Nt.outputColorSpace!==kt||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==zt||Z.fog===!0&&Nt.fog!==mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ht.numPlanes||Nt.numIntersection!==ht.numIntersection)||Nt.vertexAlphas!==qt||Nt.vertexTangents!==$t||Nt.morphTargets!==Ut||Nt.morphNormals!==ie||Nt.morphColors!==me||Nt.toneMapping!==ge||Nt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Nt.__version=Z.version);let Ei=Nt.currentProgram;ae===!0&&(Ei=qr(Z,V,G));let ns=!1,oi=!1,Ks=!1,xe=Ei.getUniforms(),Ui=Nt.uniforms;if(ft.useProgram(Ei.program)&&(ns=!0,oi=!0,Ks=!0),Z.id!==_&&(_=Z.id,oi=!0),ns||b!==D){ft.buffers.depth.getReversed()?(it.copy(D.projectionMatrix),Pp(it),Dp(it),xe.setValue(z,"projectionMatrix",it)):xe.setValue(z,"projectionMatrix",D.projectionMatrix),xe.setValue(z,"viewMatrix",D.matrixWorldInverse);let ln=xe.map.cameraPosition;ln!==void 0&&ln.setValue(z,St.setFromMatrixPosition(D.matrixWorld)),yt.logarithmicDepthBuffer&&xe.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,oi=!0,Ks=!0)}if(G.isSkinnedMesh){xe.setOptional(z,G,"bindMatrix"),xe.setOptional(z,G,"bindMatrixInverse");let mi=G.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),xe.setValue(z,"boneTexture",mi.boneTexture,I))}G.isBatchedMesh&&(xe.setOptional(z,G,"batchingTexture"),xe.setValue(z,"batchingTexture",G._matricesTexture,I),xe.setOptional(z,G,"batchingIdTexture"),xe.setValue(z,"batchingIdTexture",G._indirectTexture,I),xe.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(z,"batchingColorTexture",G._colorsTexture,I));let Js=$.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Ht.update(G,$,Ei),(oi||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,xe.setValue(z,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ui.envMap.value=zt,Ui.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Ui.envMapIntensity.value=V.environmentIntensity),oi&&(xe.setValue(z,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&zf(Ui,Ks),mt&&Z.fog===!0&&Mt.refreshFogUniforms(Ui,mt),Mt.refreshMaterialUniforms(Ui,Z,F,X,m.state.transmissionRenderTarget[D.id]),Ss.upload(z,eu(Nt),Ui,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ss.upload(z,eu(Nt),Ui,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(z,"center",G.center),xe.setValue(z,"modelViewMatrix",G.modelViewMatrix),xe.setValue(z,"normalMatrix",G.normalMatrix),xe.setValue(z,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let mi=Z.uniformsGroups;for(let ln=0,cn=mi.length;ln<cn;ln++){let nu=mi[ln];H.update(nu,Ei),H.bind(nu,Ei)}}return Ei}function zf(D,V){D.ambientLightColor.needsUpdate=V,D.lightProbe.needsUpdate=V,D.directionalLights.needsUpdate=V,D.directionalLightShadows.needsUpdate=V,D.pointLights.needsUpdate=V,D.pointLightShadows.needsUpdate=V,D.spotLights.needsUpdate=V,D.spotLightShadows.needsUpdate=V,D.rectAreaLights.needsUpdate=V,D.hemisphereLights.needsUpdate=V}function Uf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,V,$){et.get(D.texture).__webglTexture=V,et.get(D.depthTexture).__webglTexture=$;let Z=et.get(D);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,V){let $=et.get(D);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(D,V=0,$=0){A=D,w=V,T=$;let Z=!0,G=null,mt=!1,At=!1;if(D){let zt=et.get(D);if(zt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(z.FRAMEBUFFER,null),Z=!1;else if(zt.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(zt.__hasExternalTextures)I.rebindTextures(D,et.get(D.texture).__webglTexture,et.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Ut=D.depthTexture;if(zt.__boundDepthTexture!==Ut){if(Ut!==null&&et.has(Ut)&&(D.width!==Ut.image.width||D.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}let qt=D.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let $t=et.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[V])?G=$t[V][$]:G=$t[V],mt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?G=et.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?G=$t[$]:G=$t,C.copy(D.viewport),L.copy(D.scissor),k=D.scissorTest}else C.copy(rt).multiplyScalar(F).floor(),L.copy(st).multiplyScalar(F).floor(),k=_t;if(ft.bindFramebuffer(z.FRAMEBUFFER,G)&&Z&&ft.drawBuffers(D,G),ft.viewport(C),ft.scissor(L),ft.setScissorTest(k),mt){let zt=et.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,$)}else if(At){let zt=et.get(D.texture),qt=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.__webglTexture,$||0,qt)}_=-1},this.readRenderTargetPixels=function(D,V,$,Z,G,mt,At){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=et.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(kt=kt[At]),kt){ft.bindFramebuffer(z.FRAMEBUFFER,kt);try{let zt=D.texture,qt=zt.format,$t=zt.type;if(!yt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=D.width-Z&&$>=0&&$<=D.height-G&&z.readPixels(V,$,Z,G,Vt.convert(qt),Vt.convert($t),mt)}finally{let zt=A!==null?et.get(A).__webglFramebuffer:null;ft.bindFramebuffer(z.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(D,V,$,Z,G,mt,At){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=et.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(kt=kt[At]),kt){let zt=D.texture,qt=zt.format,$t=zt.type;if(!yt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=D.width-Z&&$>=0&&$<=D.height-G){ft.bindFramebuffer(z.FRAMEBUFFER,kt);let Ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ut),z.bufferData(z.PIXEL_PACK_BUFFER,mt.byteLength,z.STREAM_READ),z.readPixels(V,$,Z,G,Vt.convert(qt),Vt.convert($t),0);let ie=A!==null?et.get(A).__webglFramebuffer:null;ft.bindFramebuffer(z.FRAMEBUFFER,ie);let me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Rp(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,mt),z.deleteBuffer(Ut),z.deleteSync(me),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,V=null,$=0){D.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,D=arguments[1]);let Z=Math.pow(2,-$),G=Math.floor(D.image.width*Z),mt=Math.floor(D.image.height*Z),At=V!==null?V.x:0,kt=V!==null?V.y:0;I.setTexture2D(D,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,At,kt,G,mt),ft.unbindTexture()},this.copyTextureToTexture=function(D,V,$=null,Z=null,G=0){D.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let mt,At,kt,zt,qt,$t,Ut,ie,me,ge=D.isCompressedTexture?D.mipmaps[G]:D.image;$!==null?(mt=$.max.x-$.min.x,At=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,zt=$.min.x,qt=$.min.y,$t=$.isBox3?$.min.z:0):(mt=ge.width,At=ge.height,kt=ge.depth||1,zt=0,qt=0,$t=0),Z!==null?(Ut=Z.x,ie=Z.y,me=Z.z):(Ut=0,ie=0,me=0);let Qe=Vt.convert(V.format),oe=Vt.convert(V.type),Nt;V.isData3DTexture?(I.setTexture3D(V,0),Nt=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Nt=z.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Nt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let Wi=z.getParameter(z.UNPACK_ROW_LENGTH),ae=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ei=z.getParameter(z.UNPACK_SKIP_PIXELS),ns=z.getParameter(z.UNPACK_SKIP_ROWS),oi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,zt),z.pixelStorei(z.UNPACK_SKIP_ROWS,qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);let Ks=D.isDataArrayTexture||D.isData3DTexture,xe=V.isDataArrayTexture||V.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Ui=et.get(D),Js=et.get(V),mi=et.get(Ui.__renderTarget),ln=et.get(Js.__renderTarget);ft.bindFramebuffer(z.READ_FRAMEBUFFER,mi.__webglFramebuffer),ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let cn=0;cn<kt;cn++)Ks&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,et.get(D).__webglTexture,G,$t+cn),D.isDepthTexture?(xe&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,et.get(V).__webglTexture,G,me+cn),z.blitFramebuffer(zt,qt,mt,At,Ut,ie,mt,At,z.DEPTH_BUFFER_BIT,z.NEAREST)):xe?z.copyTexSubImage3D(Nt,G,Ut,ie,me+cn,zt,qt,mt,At):z.copyTexSubImage2D(Nt,G,Ut,ie,me+cn,zt,qt,mt,At);ft.bindFramebuffer(z.READ_FRAMEBUFFER,null),ft.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else xe?D.isDataTexture||D.isData3DTexture?z.texSubImage3D(Nt,G,Ut,ie,me,mt,At,kt,Qe,oe,ge.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,G,Ut,ie,me,mt,At,kt,Qe,ge.data):z.texSubImage3D(Nt,G,Ut,ie,me,mt,At,kt,Qe,oe,ge):D.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,Ut,ie,mt,At,Qe,oe,ge.data):D.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,Ut,ie,ge.width,ge.height,Qe,ge.data):z.texSubImage2D(z.TEXTURE_2D,G,Ut,ie,mt,At,Qe,oe,ge);z.pixelStorei(z.UNPACK_ROW_LENGTH,Wi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ei),z.pixelStorei(z.UNPACK_SKIP_ROWS,ns),z.pixelStorei(z.UNPACK_SKIP_IMAGES,oi),G===0&&V.generateMipmaps&&z.generateMipmap(Nt),ft.unbindTexture()},this.copyTextureToTexture3D=function(D,V,$=null,Z=null,G=0){return D.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,D=arguments[2],V=arguments[3],G=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,V,$,Z,G)},this.initRenderTarget=function(D){et.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),ft.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,ft.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}},No=class o{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Fo=class o{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=i}clone(){return new o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Hi=class extends ti{constructor(t=null,e=1,i=1,n,s,a,r,l,c=Pe,h=Pe,u,d){super(null,a,r,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class extends he{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new Rt,sd=new Rt,po=[],rd=new Ii,Av=new Rt,nr=new Ot,sr=new _n,yi=class extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Av)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),rd.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(rd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),sr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let r=0;r<i.length;r++)i[r]=n[a+r]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(i),t.ray.intersectsSphere(sr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,vs),sd.multiplyMatrices(i,vs),nr.matrixWorld=sd,nr.raycast(t,po);for(let a=0,r=po.length;a<r;a++){let l=po[a];l.instanceId=s,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(n*this.count),n,this.count,Os,Fi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let r=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=r,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xr=class extends nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},od=new Rt,Uc=new Do,mo=new _n,go=new R,Oo=class extends Oe{constructor(t=new de,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(n),mo.radius+=s,t.ray.intersectsSphere(mo)===!1)return;od.copy(n).invert(),Uc.copy(t.ray).applyMatrix4(od);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);go.fromBufferAttribute(u,g),ad(go,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)go.fromBufferAttribute(u,p),ad(go,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}};function ad(o,t,e,i,n,s,a){let r=Uc.distanceSqToPoint(o);if(r<e){let l=new R;Uc.closestPointToPoint(o,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vn=class extends ti{constructor(t,e,i,n,s,a,r,l,c){super(t,e,i,n,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let r=0,l=s-1,c;for(;r<=l;)if(n=Math.floor(r+(l-r)/2),c=i[n]-a,c<0)r=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),r=this.getPoint(s),l=e||(a.isVector2?new lt:new R);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,n=[],s=[],a=[],r=new R,l=new Rt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),r.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],r),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(n[f-1],n[f]),r.length()>Number.EPSILON){r.normalize();let p=Math.acos(Ne(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(r,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ne(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(r.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends Mi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(t,e=new lt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let r=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nc=class extends vr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wh(){let o=0,t=0,e=0,i=0;function n(s,a,r,l){o=s,t=r,e=-3*s+3*a-2*r-l,i=2*s-2*a+r+l}return{initCatmullRom:function(s,a,r,l,c){n(a,r,c*(r-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,r,l,c,h,u){let d=(a-s)/c-(r-s)/(c+h)+(r-a)/h,f=(r-a)/h-(l-a)/(h+u)+(l-r)/u;d*=h,f*=h,n(a,r,d,f)},calc:function(s){let a=s*s,r=a*s;return o+t*s+e*a+i*r}}}var xo=new R,Dl=new wh,Il=new wh,Ll=new wh,Fc=class extends Mi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,h;this.closed||r>0?c=n[(r-1)%s]:(xo.subVectors(n[0],n[1]).add(n[0]),c=xo);let u=n[r%s],d=n[(r+1)%s];if(this.closed||r+2<s?h=n[(r+2)%s]:(xo.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Dl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),Il.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),Ll.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Il.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ll.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Dl.calc(l),Il.calc(l),Ll.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ld(o,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,r=o*o,l=o*r;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*r+s*o+e}function Cv(o,t){let e=1-o;return e*e*t}function Rv(o,t){return 2*(1-o)*o*t}function Pv(o,t){return o*o*t}function ur(o,t,e,i){return Cv(o,t)+Rv(o,e)+Pv(o,i)}function Dv(o,t){let e=1-o;return e*e*e*t}function Iv(o,t){let e=1-o;return 3*e*e*o*t}function Lv(o,t){return 3*(1-o)*o*o*t}function kv(o,t){return o*o*o*t}function dr(o,t,e,i,n){return Dv(o,t)+Iv(o,e)+Lv(o,i)+kv(o,n)}var Bo=class extends Mi{constructor(t=new lt,e=new lt,i=new lt,n=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new lt){let i=e,n=this.v0,s=this.v1,a=this.v2,r=this.v3;return i.set(dr(t,n.x,s.x,a.x,r.x),dr(t,n.y,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends Mi{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2,r=this.v3;return i.set(dr(t,n.x,s.x,a.x,r.x),dr(t,n.y,s.y,a.y,r.y),dr(t,n.z,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Mi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends Mi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Mi{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(ur(t,n.x,s.x,a.x),ur(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends Mi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(ur(t,n.x,s.x,a.x),ur(t,n.y,s.y,a.y),ur(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),r=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(ld(r,l.x,c.x,h.x,u.x),ld(r,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new lt().fromArray(n))}return this}},Vc=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Fc,CubicBezierCurve:Bo,CubicBezierCurve3:Oc,EllipseCurve:vr,LineCurve:Ho,LineCurve3:Bc,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Hc,SplineCurve:Go}),Gc=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,r=this.curves[s],l=r.getLength(),c=l===0?0:1-a/l;return r.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],r=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(r);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Vc[n.type]().fromJSON(n))}return this}},Wo=class extends Gc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ho(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Vo(this.currentPoint.clone(),new lt(t,e),new lt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let r=new Bo(this.currentPoint.clone(),new lt(t,e),new lt(i,n),new lt(s,a));return this.curves.push(r),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Go(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+r,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,r,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,r,l),this}absellipse(t,e,i,n,s,a,r,l){let c=new vr(t,e,i,n,s,a,r,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ks=class o extends de{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],r=[],l=[],c=new R,h=new lt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wn=class o extends de{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function v(){let M=new R,S=new R,w=0,T=(e-t)/i;for(let A=0;A<=s;A++){let _=[],b=A/s,C=b*(e-t)+t;for(let L=0;L<=n;L++){let k=L/n,N=k*l+r,O=Math.sin(N),U=Math.cos(N);S.x=C*O,S.y=-b*i+g,S.z=C*U,u.push(S.x,S.y,S.z),M.set(O,T,U).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-b),_.push(p++)}x.push(_)}for(let A=0;A<n;A++)for(let _=0;_<s;_++){let b=x[_][A],C=x[_+1][A],L=x[_+1][A+1],k=x[_][A+1];(t>0||_!==0)&&(h.push(b,C,k),w+=3),(e>0||_!==s-1)&&(h.push(C,L,k),w+=3)}c.addGroup(m,w,0),m+=w}function y(M){let S=p,w=new lt,T=new R,A=0,_=M===!0?t:e,b=M===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let C=p;for(let L=0;L<=n;L++){let N=L/n*l+r,O=Math.cos(N),U=Math.sin(N);T.x=_*U,T.y=g*b,T.z=_*O,u.push(T.x,T.y,T.z),d.push(0,b,0),w.x=O*.5+.5,w.y=U*.5*b+.5,f.push(w.x,w.y),p++}for(let L=0;L<n;L++){let k=S+L,N=C+L;M===!0?h.push(N,N+1,k):h.push(N+1,N,k),A+=3}c.addGroup(m,A,M===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gn=class o extends wn{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,r=Math.PI*2){super(0,t,e,i,n,s,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(t){return new o(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qo=class o extends de{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];r(n),c(i),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(v){let y=new R,M=new R,S=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],M),f(e[w+2],S),l(y,M,S,v)}function l(v,y,M,S){let w=S+1,T=[];for(let A=0;A<=w;A++){T[A]=[];let _=v.clone().lerp(M,A/w),b=y.clone().lerp(M,A/w),C=w-A;for(let L=0;L<=C;L++)L===0&&A===w?T[A][L]=_:T[A][L]=_.clone().lerp(b,L/C)}for(let A=0;A<w;A++)for(let _=0;_<2*(w-A)-1;_++){let b=Math.floor(_/2);_%2===0?(d(T[A][b+1]),d(T[A+1][b]),d(T[A][b])):(d(T[A][b+1]),d(T[A+1][b+1]),d(T[A+1][b]))}}function c(v){let y=new R;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(v),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){let v=new R;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];let M=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(M,1-S)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){let y=a[v+0],M=a[v+2],S=a[v+4],w=Math.max(y,M,S),T=Math.min(y,M,S);w>.9&&T<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){let M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){let v=new R,y=new R,M=new R,S=new R,w=new lt,T=new lt,A=new lt;for(let _=0,b=0;_<s.length;_+=9,b+=6){v.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),w.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),A.set(a[b+4],a[b+5]),S.copy(v).add(y).add(M).divideScalar(3);let C=g(S);x(w,b+0,v,C),x(T,b+2,y,C),x(A,b+4,M,C)}}function x(v,y,M,S){S<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.vertices,t.indices,t.radius,t.details)}},Xo=class o extends qo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new o(t.radius,t.detail)}};var yr=class extends Wo{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Wo().fromJSON(n))}return this}},zv={triangulate:function(o,t,e=2){let i=t&&t.length,n=i?t[0]*e:o.length,s=Od(o,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let r,l,c,h,u,d,f;if(i&&(s=Bv(o,t,s,e)),o.length>80*e){r=c=o[0],l=h=o[1];for(let p=e;p<n;p+=e)u=o[p],d=o[p+1],u<r&&(r=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-r,h-l),f=f!==0?32767/f:0}return Mr(s,a,e,r,l,f,0),a}};function Od(o,t,e,i,n){let s,a;if(n===Kv(o,t,e,i)>0)for(s=t;s<e;s+=i)a=cd(s,o[s],o[s+1],a);else for(s=e-i;s>=t;s-=i)a=cd(s,o[s],o[s+1],a);return a&&aa(a,a.next)&&(_r(a),a=a.next),a}function Wn(o,t){if(!o)return o;t||(t=o);let e=o,i;do if(i=!1,!e.steiner&&(aa(e,e.next)||_e(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mr(o,t,e,i,n,s,a){if(!o)return;!a&&s&&qv(o,i,n,s);let r=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?Nv(o,i,n,s):Uv(o)){t.push(l.i/e|0),t.push(o.i/e|0),t.push(c.i/e|0),_r(o),o=c.next,r=c.next;continue}if(o=c,o===r){a?a===1?(o=Fv(Wn(o),t,e),Mr(o,t,e,i,n,s,2)):a===2&&Ov(o,t,e,i,n,s):Mr(Wn(o),t,e,i,n,s,1);break}}}function Uv(o){let t=o.prev,e=o,i=o.next;if(_e(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,r=t.y,l=e.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=r<l?r<c?r:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=r>l?r>c?r:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&bs(n,r,s,l,a,c,p.x,p.y)&&_e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Nv(o,t,e,i){let n=o.prev,s=o,a=o.next;if(_e(n,s,a)>=0)return!1;let r=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=r<l?r<c?r:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=r>l?r>c?r:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Wc(f,p,t,e,i),v=Wc(x,g,t,e,i),y=o.prevZ,M=o.nextZ;for(;y&&y.z>=m&&M&&M.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==n&&y!==a&&bs(r,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&bs(r,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==n&&y!==a&&bs(r,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&bs(r,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Fv(o,t,e){let i=o;do{let n=i.prev,s=i.next.next;!aa(n,s)&&Bd(n,i,i.next,s)&&br(n,s)&&br(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),_r(i),_r(i.next),i=o=s),i=i.next}while(i!==o);return Wn(i)}function Ov(o,t,e,i,n,s){let a=o;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&$v(a,r)){let l=Hd(a,r);a=Wn(a,a.next),l=Wn(l,l.next),Mr(a,t,e,i,n,s,0),Mr(l,t,e,i,n,s,0);return}r=r.next}a=a.next}while(a!==o)}function Bv(o,t,e,i){let n=[],s,a,r,l,c;for(s=0,a=t.length;s<a;s++)r=t[s]*i,l=s<a-1?t[s+1]*i:o.length,c=Od(o,r,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Yv(c));for(n.sort(Hv),s=0;s<n.length;s++)e=Vv(n[s],e);return e}function Hv(o,t){return o.x-t.x}function Vv(o,t){let e=Gv(o,t);if(!e)return t;let i=Hd(e,o);return Wn(i,i.next),Wn(e,e.next)}function Gv(o,t){let e=t,i=-1/0,n,s=o.x,a=o.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===s))return n}e=e.next}while(e!==t);if(!n)return null;let r=n,l=n.x,c=n.y,h=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&bs(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),br(e,o)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Wv(n,e)))&&(n=e,h=u)),e=e.next;while(e!==r);return n}function Wv(o,t){return _e(o.prev,o,t.prev)<0&&_e(t.next,o,o.next)<0}function qv(o,t,e,i){let n=o;do n.z===0&&(n.z=Wc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==o);n.prevZ.nextZ=null,n.prevZ=null,Xv(n)}function Xv(o){let t,e,i,n,s,a,r,l,c=1;do{for(e=o,o=null,s=null,a=0;e;){for(a++,i=e,r=0,t=0;t<c&&(r++,i=i.nextZ,!!i);t++);for(l=c;r>0||l>0&&i;)r!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,r--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:o=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(a>1);return o}function Wc(o,t,e,i,n){return o=(o-e)*n|0,t=(t-i)*n|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Yv(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function bs(o,t,e,i,n,s,a,r){return(n-a)*(t-r)>=(o-a)*(s-r)&&(o-a)*(i-r)>=(e-a)*(t-r)&&(e-a)*(s-r)>=(n-a)*(i-r)}function $v(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Zv(o,t)&&(br(o,t)&&br(t,o)&&jv(o,t)&&(_e(o.prev,o,t.prev)||_e(o,t.prev,t))||aa(o,t)&&_e(o.prev,o,o.next)>0&&_e(t.prev,t,t.next)>0)}function _e(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function aa(o,t){return o.x===t.x&&o.y===t.y}function Bd(o,t,e,i){let n=yo(_e(o,t,e)),s=yo(_e(o,t,i)),a=yo(_e(e,i,o)),r=yo(_e(e,i,t));return!!(n!==s&&a!==r||n===0&&vo(o,e,t)||s===0&&vo(o,i,t)||a===0&&vo(e,o,i)||r===0&&vo(e,t,i))}function vo(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function yo(o){return o>0?1:o<0?-1:0}function Zv(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&Bd(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function br(o,t){return _e(o.prev,o,o.next)<0?_e(o,t,o.next)>=0&&_e(o,o.prev,t)>=0:_e(o,t,o.prev)<0||_e(o,o.next,t)<0}function jv(o,t){let e=o,i=!1,n=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==o);return i}function Hd(o,t){let e=new qc(o.i,o.x,o.y),i=new qc(t.i,t.x,t.y),n=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function cd(o,t,e,i){let n=new qc(o,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function _r(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function qc(o,t,e){this.i=o,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kv(o,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(o[a]-o[s])*(o[s+1]+o[a+1]),a=s;return n}var fr=class o{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return o.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];hd(t),ud(i,t);let a=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,ud(i,e[l]);let r=zv.triangulate(i,n);for(let l=0;l<r.length;l+=3)s.push(r.slice(l,l+3));return s}};function hd(o){let t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function ud(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}var Yo=class o extends de{constructor(t=new yr([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let r=0,l=t.length;r<l;r++){let c=t[r];a(c)}this.setAttribute("position",new Kt(n,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function a(r){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Jv,y,M=!1,S,w,T,A;m&&(y=m.getSpacedPoints(h),M=!0,d=!1,S=m.computeFrenetFrames(h,!1),w=new R,T=new R,A=new R),d||(g=0,f=0,p=0,x=0);let _=r.extractPoints(c),b=_.shape,C=_.holes;if(!fr.isClockWise(b)){b=b.reverse();for(let nt=0,ut=C.length;nt<ut;nt++){let z=C[nt];fr.isClockWise(z)&&(C[nt]=z.reverse())}}let k=fr.triangulateShape(b,C),N=b;for(let nt=0,ut=C.length;nt<ut;nt++){let z=C[nt];b=b.concat(z)}function O(nt,ut,z){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ut,z)}let U=b.length,X=k.length;function F(nt,ut,z){let pt,ct,yt,ft=nt.x-ut.x,Lt=nt.y-ut.y,et=z.x-nt.x,I=z.y-nt.y,E=ft*ft+Lt*Lt,W=ft*I-Lt*et;if(Math.abs(W)>Number.EPSILON){let Q=Math.sqrt(E),ot=Math.sqrt(et*et+I*I),tt=ut.x-Lt/Q,It=ut.y+ft/Q,Mt=z.x-I/ot,Tt=z.y+et/ot,Xt=((Mt-tt)*I-(Tt-It)*et)/(ft*I-Lt*et);pt=tt+ft*Xt-nt.x,ct=It+Lt*Xt-nt.y;let ht=pt*pt+ct*ct;if(ht<=2)return new lt(pt,ct);yt=Math.sqrt(ht/2)}else{let Q=!1;ft>Number.EPSILON?et>Number.EPSILON&&(Q=!0):ft<-Number.EPSILON?et<-Number.EPSILON&&(Q=!0):Math.sign(Lt)===Math.sign(I)&&(Q=!0),Q?(pt=-Lt,ct=ft,yt=Math.sqrt(E)):(pt=ft,ct=Lt,yt=Math.sqrt(E/2))}return new lt(pt/yt,ct/yt)}let B=[];for(let nt=0,ut=N.length,z=ut-1,pt=nt+1;nt<ut;nt++,z++,pt++)z===ut&&(z=0),pt===ut&&(pt=0),B[nt]=F(N[nt],N[z],N[pt]);let j=[],rt,st=B.concat();for(let nt=0,ut=C.length;nt<ut;nt++){let z=C[nt];rt=[];for(let pt=0,ct=z.length,yt=ct-1,ft=pt+1;pt<ct;pt++,yt++,ft++)yt===ct&&(yt=0),ft===ct&&(ft=0),rt[pt]=F(z[pt],z[yt],z[ft]);j.push(rt),st=st.concat(rt)}for(let nt=0;nt<g;nt++){let ut=nt/g,z=f*Math.cos(ut*Math.PI/2),pt=p*Math.sin(ut*Math.PI/2)+x;for(let ct=0,yt=N.length;ct<yt;ct++){let ft=O(N[ct],B[ct],pt);it(ft.x,ft.y,-z)}for(let ct=0,yt=C.length;ct<yt;ct++){let ft=C[ct];rt=j[ct];for(let Lt=0,et=ft.length;Lt<et;Lt++){let I=O(ft[Lt],rt[Lt],pt);it(I.x,I.y,-z)}}}let _t=p+x;for(let nt=0;nt<U;nt++){let ut=d?O(b[nt],st[nt],_t):b[nt];M?(T.copy(S.normals[0]).multiplyScalar(ut.x),w.copy(S.binormals[0]).multiplyScalar(ut.y),A.copy(y[0]).add(T).add(w),it(A.x,A.y,A.z)):it(ut.x,ut.y,0)}for(let nt=1;nt<=h;nt++)for(let ut=0;ut<U;ut++){let z=d?O(b[ut],st[ut],_t):b[ut];M?(T.copy(S.normals[nt]).multiplyScalar(z.x),w.copy(S.binormals[nt]).multiplyScalar(z.y),A.copy(y[nt]).add(T).add(w),it(A.x,A.y,A.z)):it(z.x,z.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){let ut=nt/g,z=f*Math.cos(ut*Math.PI/2),pt=p*Math.sin(ut*Math.PI/2)+x;for(let ct=0,yt=N.length;ct<yt;ct++){let ft=O(N[ct],B[ct],pt);it(ft.x,ft.y,u+z)}for(let ct=0,yt=C.length;ct<yt;ct++){let ft=C[ct];rt=j[ct];for(let Lt=0,et=ft.length;Lt<et;Lt++){let I=O(ft[Lt],rt[Lt],pt);M?it(I.x,I.y+y[h-1].y,y[h-1].x+z):it(I.x,I.y,u+z)}}}Y(),J();function Y(){let nt=n.length/3;if(d){let ut=0,z=U*ut;for(let pt=0;pt<X;pt++){let ct=k[pt];xt(ct[2]+z,ct[1]+z,ct[0]+z)}ut=h+g*2,z=U*ut;for(let pt=0;pt<X;pt++){let ct=k[pt];xt(ct[0]+z,ct[1]+z,ct[2]+z)}}else{for(let ut=0;ut<X;ut++){let z=k[ut];xt(z[2],z[1],z[0])}for(let ut=0;ut<X;ut++){let z=k[ut];xt(z[0]+U*h,z[1]+U*h,z[2]+U*h)}}i.addGroup(nt,n.length/3-nt,0)}function J(){let nt=n.length/3,ut=0;gt(N,ut),ut+=N.length;for(let z=0,pt=C.length;z<pt;z++){let ct=C[z];gt(ct,ut),ut+=ct.length}i.addGroup(nt,n.length/3-nt,1)}function gt(nt,ut){let z=nt.length;for(;--z>=0;){let pt=z,ct=z-1;ct<0&&(ct=nt.length-1);for(let yt=0,ft=h+g*2;yt<ft;yt++){let Lt=U*yt,et=U*(yt+1),I=ut+pt+Lt,E=ut+ct+Lt,W=ut+ct+et,Q=ut+pt+et;St(I,E,W,Q)}}}function it(nt,ut,z){l.push(nt),l.push(ut),l.push(z)}function xt(nt,ut,z){vt(nt),vt(ut),vt(z);let pt=n.length/3,ct=v.generateTopUV(i,n,pt-3,pt-2,pt-1);Gt(ct[0]),Gt(ct[1]),Gt(ct[2])}function St(nt,ut,z,pt){vt(nt),vt(ut),vt(pt),vt(ut),vt(z),vt(pt);let ct=n.length/3,yt=v.generateSideWallUV(i,n,ct-6,ct-3,ct-2,ct-1);Gt(yt[0]),Gt(yt[1]),Gt(yt[3]),Gt(yt[1]),Gt(yt[2]),Gt(yt[3])}function vt(nt){n.push(l[nt*3+0]),n.push(l[nt*3+1]),n.push(l[nt*3+2])}function Gt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Qv(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=e[t.shapes[s]];i.push(r)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Vc[n.type]().fromJSON(n)),new o(i,t.options)}},Jv={generateTopUV:function(o,t,e,i,n){let s=t[e*3],a=t[e*3+1],r=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new lt(s,a),new lt(r,l),new lt(c,h)]},generateSideWallUV:function(o,t,e,i,n,s){let a=t[e*3],r=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(r-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(d,1-p),new lt(x,1-m)]:[new lt(r,1-l),new lt(h,1-u),new lt(f,1-p),new lt(g,1-m)]}};function Qv(o,t,e){if(e.shapes=[],Array.isArray(o))for(let i=0,n=o.length;i<n;i++){let s=o[i];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $o=class o extends qo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new o(t.radius,t.detail)}};var zs=class o extends de{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let r=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new R,p=new lt;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let v=m+g,y=v,M=v+i+1,S=v+i+2,w=v+1;r.push(y,M,w),r.push(M,S,w)}}this.setIndex(r),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zo=class o extends de{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+r,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],y=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){let w=S/e;u.x=-t*Math.cos(n+w*s)*Math.sin(a+y*r),u.y=t*Math.cos(a+y*r),u.z=t*Math.sin(n+w*s)*Math.sin(a+y*r),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+M,1-y),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let y=h[m][v+1],M=h[m][v],S=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(y,M,w),(m!==i-1||l<Math.PI)&&f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jo=class extends Jt{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},fe=class extends nn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ko=class extends nn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function Mo(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function t1(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var Us=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let r=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let r=e[1];t<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let r=i+a>>>1;t<e[r]?a=r:i=r+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xc=class extends Us{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case lu:s=t,r=2*e-i;break;case cu:s=n.length-2,r=e+n[s]-n[s+1];break;default:s=t,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:a=t,l=2*i-e;break;case cu:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let S=0;S!==r;++S)s[S]=m*a[h+S]+v*a[c+S]+y*a[l+S]+M*a[u+S];return s}},Yc=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==r;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},$c=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ki=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Eo:e=this.InterpolantFactoryMethodDiscrete;break;case Mc:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let r=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*r,a*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){let l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(n!==void 0&&t1(n))for(let r=0,l=n.length;r!==l;++r){let c=n[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===sl,s=t.length-1,a=1;for(let r=1;r<s;++r){let l=!1,c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(n)l=!0;else{let u=r*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];let u=r*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let r=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Mc;var qn=class extends ki{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Eo;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends ki{};Zc.prototype.ValueTypeName="color";var jc=class extends ki{};jc.prototype.ValueTypeName="number";var Kc=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-e)/(n-e),c=t*r;for(let h=c+r;c!==h;c+=4)De.slerpFlat(s,0,a,c-r,a,c,l);return s}},Jo=class extends ki{InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}};Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends ki{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Eo;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends ki{};Jc.prototype.ValueTypeName="vector";var Qc=class{constructor(t,e,i){let n=this,s=!1,a=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){r++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,r),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,r),a===r&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},e1=new Qc,th=class{constructor(t){this.manager=t!==void 0?t:e1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};th.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sn=class extends Ns{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},kl=new Rt,dd=new R,fd=new R,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(dd),fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fd),e.updateMatrixWorld(),kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},eh=class extends wr{constructor(){super(new be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Cs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Qo=class extends Ns{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new eh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},pd=new Rt,rr=new R,zl=new R,ih=class extends wr{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),i.position.copy(rr),zl.copy(i.position),zl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(zl),i.updateMatrixWorld(),n.makeTranslation(-rr.x,-rr.y,-rr.z),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}},ta=class extends Ns{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},nh=class extends wr{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bi=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new nh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sr=class extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ea=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=md();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function md(){return performance.now()}var Sh="\\[\\]\\.:\\/",i1=new RegExp("["+Sh+"]","g"),Th="[^"+Sh+"]",n1="[^"+Sh.replace("\\.","")+"]",s1=/((?:WC+[\/:])*)/.source.replace("WC",Th),r1=/(WCOD+)?/.source.replace("WCOD",n1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),a1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),l1=new RegExp("^"+s1+r1+o1+a1+"$"),c1=["material","materials","bones","map"],sh=class{constructor(t,e,i){let n=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class o{constructor(t,e,i){this.path=e,this.parsedPath=i||o.parseTrackName(e),this.node=o.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new o.Composite(t,e,i):new o(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i1,"")}static parseTrackName(t){let e=l1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);c1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let r=s[a];if(r.name===e||r.uuid===e)return r;let l=i(r.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=o.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=sh;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);var Vd="fireline.settings.v1",Vs={low:{renderScale:.75,shadows:"off",ssao:!1,bloom:!1,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!1,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!1,grass:"off",treeWind:!1,waterReflections:!1,waterWaves:!0,particles:"low",decals:!0,debris:!1,viewDistance:500},medium:{renderScale:1,shadows:"medium",ssao:!1,bloom:!0,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!0,grass:"low",treeWind:!0,waterReflections:!1,waterWaves:!0,particles:"medium",decals:!0,debris:!0,viewDistance:700},high:{renderScale:1,shadows:"high",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"medium",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:900},ultra:{renderScale:1,shadows:"ultra",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"high",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:1200}},h1=Object.assign({preset:"high",fov:95,sensitivity:1,adsSensitivity:.85,invertY:!1,volume:.8,musicVolume:.5,showFps:!0,screenShake:!0,headBob:!0,difficulty:"veteran",crosshair:!0,nameTags:!0,enemyOutline:!0,aimAssist:"low",mouseSmoothing:0,keyLookSpeed:140,autoSprint:!1,semiAutoRepeat:!1,trackpadMode:!1,crouchMode:"toggle",adsMode:"hold",leanMode:"hold",sprintMode:"hold",scoreboardMode:"hold",mapMode:"hold",hitmarkerSound:!0},Vs.high),Gd=[{group:"Display"},{key:"preset",label:"Quality preset",type:"select",options:["low","medium","high","ultra","custom"]},{key:"renderScale",label:"Render scale",type:"range",min:.5,max:1.5,step:.05},{key:"fov",label:"Field of view (horizontal)",type:"range",min:70,max:115,step:1},{key:"viewDistance",label:"View distance (m)",type:"range",min:300,max:1500,step:50},{key:"antialias",label:"Anti-aliasing",type:"select",options:["off","fxaa","msaa"]},{key:"showFps",label:"Show FPS",type:"bool"},{group:"Lighting"},{key:"shadows",label:"Shadows",type:"select",options:["off","low","medium","high","ultra"],hint:"high/ultra use cascaded shadow maps"},{key:"ssao",label:"Ambient occlusion (GTAO)",type:"bool"},{key:"ibl",label:"Image-based lighting",type:"bool"},{key:"atmosphere",label:"Atmospheric sky",type:"bool"},{key:"fog",label:"Fog / aerial haze",type:"bool"},{group:"Post-processing"},{key:"bloom",label:"Bloom",type:"bool"},{key:"dof",label:"Depth of field (ADS / menus)",type:"bool"},{key:"motionBlur",label:"Motion blur",type:"bool"},{key:"colorGrading",label:"Color grading",type:"bool"},{key:"filmGrain",label:"Film grain",type:"bool"},{key:"vignette",label:"Vignette",type:"bool"},{key:"chromatic",label:"Chromatic aberration",type:"bool"},{group:"World"},{key:"grass",label:"Grass",type:"select",options:["off","low","medium","high"]},{key:"treeWind",label:"Wind sway (trees & grass)",type:"bool"},{key:"waterReflections",label:"Water reflections",type:"bool"},{key:"waterWaves",label:"Water waves & foam",type:"bool"},{group:"Effects"},{key:"particles",label:"Particle quality",type:"select",options:["low","medium","high"]},{key:"decals",label:"Decals (bullet holes, scorch)",type:"bool"},{key:"debris",label:"Destruction debris physics",type:"bool"},{key:"screenShake",label:"Screen shake",type:"bool"},{key:"headBob",label:"Head bob",type:"bool"},{group:"Gameplay"},{key:"difficulty",label:"Bot difficulty",type:"select",options:["recruit","regular","veteran","elite"]},{key:"crosshair",label:"Crosshair",type:"bool"},{key:"nameTags",label:"Friendly name tags",type:"bool"},{key:"enemyOutline",label:"Red outline on visible enemies",type:"bool"},{group:"Controls & audio"},{group:"Trackpad & accessibility"},{key:"trackpadMode",label:"Trackpad mode (applies the options below)",type:"bool",hint:"aim assist high, toggle aim/crouch/lean/sprint, smoothing, auto-sprint, hold-to-fire"},{key:"aimAssist",label:"Aim assist",type:"select",options:["off","low","medium","high"],hint:"slows and nudges your aim onto enemies you can see"},{key:"mouseSmoothing",label:"Look smoothing",type:"range",min:0,max:.8,step:.05},{key:"keyLookSpeed",label:"Arrow-key look speed (\xB0/s)",type:"range",min:40,max:360,step:10},{key:"autoSprint",label:"Auto-sprint when moving forward",type:"bool"},{key:"semiAutoRepeat",label:"Hold to keep firing semi-auto weapons",type:"bool"},{group:"Mouse & keys"},{key:"sensitivity",label:"Mouse sensitivity",type:"range",min:.1,max:3,step:.05},{key:"adsSensitivity",label:"ADS sensitivity",type:"range",min:.2,max:1.5,step:.05},{key:"invertY",label:"Invert Y",type:"bool"},{key:"crouchMode",label:"Crouch key",type:"select",options:["toggle","hold"]},{key:"adsMode",label:"Aim down sights",type:"select",options:["hold","toggle"]},{key:"leanMode",label:"Lean keys",type:"select",options:["hold","toggle"]},{key:"sprintMode",label:"Sprint key",type:"select",options:["hold","toggle"]},{key:"scoreboardMode",label:"Scoreboard key",type:"select",options:["hold","toggle"]},{key:"mapMode",label:"Map key",type:"select",options:["hold","toggle"]},{key:"hitmarkerSound",label:"Hitmarker sound",type:"bool"},{key:"volume",label:"Master volume",type:"range",min:0,max:1,step:.05}],Eh=class{constructor(){this.values=Object.assign({},h1),this.listeners=[];try{let t=localStorage.getItem(Vd);t&&Object.assign(this.values,JSON.parse(t))}catch{}}get(t){return this.values[t]}set(t,e){this.values[t]=e,t==="preset"&&Vs[e]&&Object.assign(this.values,Vs[e]),t==="trackpadMode"&&e?Object.assign(this.values,{aimAssist:"high",adsMode:"toggle",crouchMode:"toggle",leanMode:"toggle",sprintMode:"toggle",mouseSmoothing:.35,autoSprint:!0,semiAutoRepeat:!0,sensitivity:Math.max(this.values.sensitivity,1.3)}):t in Vs.high&&t!=="preset"&&(this.values.preset="custom"),this.save();for(let i of this.listeners)i(t,e)}onChange(t){this.listeners.push(t)}save(){try{localStorage.setItem(Vd,JSON.stringify(this.values))}catch{}}},la=new Eh;var ca=class o{constructor(){this.ctx=null,this.buffers={},this.voices=0,this.volume=.8,this.listener={x:0,y:0,z:0,fx:0,fz:-1},this.loops={}}unlock(){if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e}catch{this.ctx=null;return}let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.volume,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.25,this.master.connect(this.comp),this.comp.connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(2.6,2.2),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.32,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.generate()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}makeImpulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let r=s.getChannelData(a);for(let l=0;l<n;l++){let c=l/n;r[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<400?l/400:1)}}return s}buf(t,e){let i=this.ctx,n=i.sampleRate,s=Math.max(1,Math.floor(n*t)),a=i.createBuffer(1,s,n),r=a.getChannelData(0);e(r,n,s);let l=0;for(let c=0;c<s;c++)l=Math.max(l,Math.abs(r[c]));if(l>0)for(let c=0;c<s;c++)r[c]/=l;return a}static lp(t,e){let i=0;for(let n=0;n<t.length;n++)i+=e*(t[n]-i),t[n]=i}static hp(t,e){let i=0,n=0;for(let s=0;s<t.length;s++)i=e*(i+t[s]-n),n=t[s],t[s]=i}gun(t,e,i,n,s,a){return this.buf(t,(r,l,c)=>{let h=new Float32Array(c);for(let u=0;u<c;u++)h[u]=Math.random()*2-1;o.lp(h,a);for(let u=0;u<c;u++){let d=u/l,f=Math.exp(-d*e)*.8+Math.exp(-d*s)*.25,p=Math.exp(-d*300)*i*(Math.random()*2-1),x=Math.sin(2*Math.PI*n*d*(1-d*2))*Math.exp(-d*28)*.9;r[u]=h[u]*f*2.2+p+x}})}generate(){let t=this.buffers;t.rifle=this.gun(.9,30,1,85,5,.45),t.carbine=this.gun(.8,34,1,95,6,.5),t.smg=this.gun(.55,48,.8,120,9,.55),t.pistol=this.gun(.5,45,.9,140,9,.6),t.lmg=this.gun(1,26,1.1,70,4,.4),t.sniper=this.gun(1.8,16,1.3,55,2.2,.35),t.dmr=this.gun(1.3,22,1.2,65,3,.38),t.shotgun=this.gun(1.1,18,.9,60,3.5,.3),t.suppressed=this.buf(.25,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*Math.exp(-u*45)*.6+Math.sin(2*Math.PI*180*u)*Math.exp(-u*60)*.5}o.lp(r,.25)}),t.far=this.buf(1.6,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*(Math.exp(-u*14)+Math.exp(-u*3)*.3)}o.lp(r,.06),o.lp(r,.1)}),t.explosion=this.buf(3.2,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*(Math.exp(-u*3.2)+Math.exp(-u*18)*1.5)+Math.sin(2*Math.PI*(55-u*12)*u)*Math.exp(-u*4)*1.2}o.lp(r,.08),o.lp(r,.18)}),t.explosionFar=this.buf(3.5,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*Math.exp(-u*2.2)+Math.sin(2*Math.PI*40*u)*Math.exp(-u*3)}o.lp(r,.025),o.lp(r,.05)});let e=r=>this.buf(.12,(l,c,h)=>{for(let u=0;u<h;u++){let d=u/c;l[u]=(Math.random()*2-1)*Math.exp(-d*(r?70:45))*(d<.004?d/.004:1)}o.lp(l,r?.5:.18)});t.stepGrass=e(!1),t.stepHard=e(!0),t.stepWater=this.buf(.3,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*Math.exp(-u*14)*(.5+.5*Math.sin(u*300))}o.lp(r,.3)});let i=(r,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.sin(2*Math.PI*r*p)*.6+(Math.random()*2-1)*.5)*Math.exp(-p*c)}});t.magOut=i(900,.15,40),t.magIn=i(1300,.12,55),t.bolt=this.buf(.3,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=u<.12?Math.exp(-u*60):Math.exp(-(u-.15)*60)*(u>.15?1:0);r[h]=(Math.sin(2*Math.PI*1500*u)*.5+(Math.random()*2-1)*.6)*d}}),t.dry=i(2400,.06,120),t.pin=i(3e3,.18,30),t.switch=i(700,.1,50),t.hit=this.buf(.07,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=Math.sin(2*Math.PI*2200*u)*Math.exp(-u*70)}}),t.headshot=this.buf(.35,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.sin(2*Math.PI*1760*u)+Math.sin(2*Math.PI*2640*u)*.5)*Math.exp(-u*12)}}),t.kill=this.buf(.25,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=Math.sin(2*Math.PI*(900+u*1200)*u)*Math.exp(-u*14)+(Math.random()*2-1)*Math.exp(-u*60)*.3}}),t.hurt=this.buf(.2,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=Math.sin(2*Math.PI*(120-u*200)*u)*Math.exp(-u*18)+(Math.random()*2-1)*Math.exp(-u*40)*.4}o.lp(r,.3)}),t.whiz=this.buf(.35,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.sin(Math.PI*u/.35);r[h]=(Math.random()*2-1)*d*d}o.hp(r,.92),o.lp(r,.4)}),t.crack=this.buf(.09,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*Math.exp(-u*90)+(u<.002?1:0)}o.hp(r,.8)});let n=(r,l,c)=>this.buf(.25,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*Math.exp(-p*l)+(c?Math.sin(2*Math.PI*c*p)*Math.exp(-p*20)*.6:0)}o.lp(h,r)});t.impactDirt=n(.15,50,0),t.impactHard=n(.55,70,0),t.impactMetal=n(.7,40,2900),t.impactWood=n(.3,45,420),t.impactFlesh=n(.12,35,0),t.impactWater=this.buf(.4,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*Math.exp(-u*12)*(.6+.4*Math.sin(u*900))}o.lp(r,.25)});let s=(r,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*(Math.exp(-p*6)*(.5+Math.random()*.5))+(c?Math.sin(2*Math.PI*c*p*(1+p))*Math.exp(-p*5)*.4:0)}o.lp(h,r)});t.breakWood=s(.25,.9,300),t.breakStone=s(.12,1.4,0),t.breakMetal=s(.5,1.2,1200);let a=(r,l)=>this.buf(l,(c,h,u)=>{for(let d=0;d<u;d++){let f=d/h,p=Math.min(r.length-1,Math.floor(f/l*r.length));c[d]=Math.sin(2*Math.PI*r[p]*f)*Math.min(1,(l-f)*10)*Math.min(1,f*200)*.6}});t.capture=a([660,880,1320],.5),t.lost=a([880,660,440],.5),t.beep=a([1200],.12),t.ui=a([900],.05),t.deploy=a([440,660],.3),t.heartbeat=this.buf(.8,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.exp(-((u-.05)**2)/4e-4),f=Math.exp(-((u-.28)**2)/4e-4)*.7;r[h]=Math.sin(2*Math.PI*55*u)*(d+f)}}),t.bandage=this.buf(.6,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*(.4+.6*Math.abs(Math.sin(u*40)))*Math.exp(-u*3)}o.hp(r,.7)}),t.throw=this.buf(.25,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*Math.sin(Math.PI*u/.25)}o.lp(r,.2)}),t.bounce=n(.4,60,1800),t.rocket=this.buf(1.2,(r,l,c)=>{for(let h=0;h<c;h++){let u=h/l;r[h]=(Math.random()*2-1)*(Math.exp(-u*25)*1.5+Math.exp(-u*2)*.5)}o.lp(r,.2)}),t.wind=this.buf(6,(r,l,c)=>{let h=0;for(let d=0;d<c;d++){h=(h+.02*(Math.random()*2-1))/1.02;let f=d/l;r[d]=h*(.6+.4*Math.sin(f*.9)*Math.sin(f*.37+1))}let u=Math.floor(l*.3);for(let d=0;d<u;d++){let f=d/u;r[d]=r[d]*f+r[c-u+d]*(1-f)}}),t.birds=this.buf(8,(r,l,c)=>{for(let h=0;h<14;h++){let u=Math.random()*7.2,d=2500+Math.random()*2500,f=2+Math.floor(Math.random()*4);for(let p=0;p<f;p++){let x=Math.floor((u+p*.13)*l),g=Math.floor(.08*l);for(let m=0;m<g&&x+m<c;m++){let v=m/l;r[x+m]+=Math.sin(2*Math.PI*(d+Math.sin(v*90)*600)*v)*Math.sin(Math.PI*m/g)*.3}}}})}setListener(t,e,i,n,s){let a=this.listener;a.x=t,a.y=e,a.z=i;let r=Math.hypot(n,s)||1;a.fx=n/r,a.fz=s/r}_out(t,e,i,n,s){let a=this.ctx,r=a.createGain();r.gain.value=t;let l=r;if(i<19e3){let h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=i,r.connect(h),l=h}let c=l;if(a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=e,l.connect(h),c=h}if(c.connect(this.master),n>0){let h=a.createGain();h.gain.value=n,c.connect(h),h.connect(this.reverb)}return r}play2d(t,e={}){if(!this.ctx||!this.buffers[t]||this.voices>60)return;let i=this.ctx.createBufferSource();i.buffer=this.buffers[t],i.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let n=this._out(e.vol??1,e.pan||0,e.cutoff||2e4,e.reverb??.05);return i.connect(n),this.voices++,i.onended=()=>{this.voices--;try{n.disconnect()}catch{}},i.start(this.ctx.currentTime+(e.delay||0)),i}play3d(t,e,i,n,s={}){if(!this.ctx)return;let a=this.listener,r=e-a.x,l=i-a.y,c=n-a.z,h=Math.sqrt(r*r+l*l+c*c),u=s.maxDist||120;if(h>u)return;let d=s.ref||6,f=(s.vol??1)*d/(d+Math.max(0,h-d)*(s.rolloff||1));if(f*=1-Math.pow(h/u,3),f<.004||this.voices>48&&f<.15)return;let p=-a.fz,x=a.fx,g=h>.5?Math.max(-1,Math.min(1,(r*p+c*x)/Math.max(1,Math.hypot(r,c))*.85)):0,m=s.occluded?Math.min(2500,2e4/(1+h*.02)):2e4/(1+h*.012),v=h>60?h/343:0;this.play2d(t,{vol:f,pan:g,cutoff:m,rate:s.rate,vary:s.vary??.08,reverb:(s.reverb??.18)*Math.min(1,.4+h/80),delay:v})}gunshot(t,e,i,n,s,a){if(!this.ctx)return;if(s){this.play3d("suppressed",e,i,n,{vol:a?.55:.6,maxDist:60,ref:4});return}if(a){this.play2d(t,{vol:.62,vary:.06,reverb:.28});return}let r=this.listener,l=Math.hypot(e-r.x,i-r.y,n-r.z);l<90&&this.play3d(t,e,i,n,{vol:.95,maxDist:160,ref:10,rolloff:.8}),l>40&&this.play3d("far",e,i,n,{vol:.55*Math.min(1,(l-40)/60),maxDist:900,ref:60,rolloff:.5,reverb:.5})}explosion(t,e,i){if(!this.ctx)return;let n=this.listener;Math.hypot(t-n.x,e-n.y,i-n.z)<150&&this.play3d("explosion",t,e,i,{vol:1.2,maxDist:250,ref:14,rolloff:.7,reverb:.4}),this.play3d("explosionFar",t,e,i,{vol:.9,maxDist:1200,ref:80,rolloff:.5,reverb:.6})}startAmbience(t,e){if(!this.ctx)return;this.stopAmbience();let i=(n,s)=>{let a=this.ctx.createBufferSource();a.buffer=this.buffers[n],a.loop=!0;let r=this.ctx.createGain();return r.gain.value=s,a.connect(r),r.connect(this.master),a.start(),{src:a,g:r}};this.loops.wind=i("wind",t==="arid"?.22:.14),!e&&t!=="arid"&&(this.loops.birds=i("birds",.06))}stopAmbience(){for(let t in this.loops)try{this.loops[t].src.stop()}catch{}this.loops={}}};var ha=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,buttons:0,pressed:new Set,released:new Set,wheel:0},this.locked=!1,this.enabled=!0,this.listeners=[];let e=(i,n,s,a)=>{i.addEventListener(n,s,a),this.listeners.push([i,n,s,a])};e(window,"keydown",i=>{this.enabled&&((["Tab","Space","KeyF","ControlLeft","AltLeft"].includes(i.code)||i.ctrlKey&&i.code==="KeyW")&&i.preventDefault(),this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code))}),e(window,"keyup",i=>{this.keys.delete(i.code),this.released.add(i.code)}),e(window,"blur",()=>{this.keys.clear(),this.mouse.buttons=0}),e(t,"mousedown",i=>{this.enabled&&(this.mouse.buttons|=1<<i.button,this.mouse.pressed.add(i.button),i.preventDefault())}),e(window,"mouseup",i=>{this.mouse.buttons&=~(1<<i.button),this.mouse.released.add(i.button)}),e(window,"mousemove",i=>{this.enabled&&(this.locked||this.allowUnlocked)&&(this.mouse.dx+=i.movementX||0,this.mouse.dy+=i.movementY||0)}),e(t,"wheel",i=>{this.mouse.wheel+=Math.sign(i.deltaY),i.preventDefault()},{passive:!1}),e(t,"contextmenu",i=>i.preventDefault()),e(document,"pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange&&this.onLockChange(this.locked)}),e(document,"pointerlockerror",()=>{this.locked=!1}),this.allowUnlocked=!1}lock(){try{let t=this.canvas.requestPointerLock&&this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}isDown(t){return t?t.startsWith("Mouse")?this.btn(Number(t.slice(5))):this.keys.has(t):!1}isHit(t){return t?t.startsWith("Mouse")?this.btnHit(Number(t.slice(5))):this.pressed.has(t):!1}isReleased(t){return t?t.startsWith("Mouse")?this.mouse.released.has(Number(t.slice(5))):this.released.has(t):!1}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}btn(t){return(this.mouse.buttons&1<<t)!==0}btnHit(t){return this.mouse.pressed.has(t)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.pressed.clear(),this.mouse.released.clear(),this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0}dispose(){for(let[t,e,i,n]of this.listeners)t.removeEventListener(e,i,n)}};var Ft=(o,t,e)=>o<t?t:o>e?e:o,Qt=(o,t,e)=>o+(t-o)*e,u1=(o,t,e)=>Ft((e-o)/(t-o),0,1),ke=(o,t,e)=>{let i=u1(o,t,e);return i*i*(3-2*i)},ei=(o,t,e,i)=>Qt(o,t,1-Math.exp(-e*i)),q=(o=0,t=1)=>o+Math.random()*(t-o);var ne=Math.PI/180,Wd=Math.PI*2;function _i(o){for(;o>Math.PI;)o-=Wd;for(;o<-Math.PI;)o+=Wd;return o}function Tr(o,t,e){let i=_i(t-o);return Math.abs(i)<=e?t:o+Math.sign(i)*e}function qe(o){let t=o>>>0,e=()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+e()*(n-i),e.int=(i,n)=>Math.floor(i+e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e}function zi(o=1){let t=qe(o),e=new Uint8Array(512),i=new Uint8Array(256);for(let l=0;l<256;l++)i[l]=l;for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1)),h=i[l];i[l]=i[c],i[c]=h}for(let l=0;l<512;l++)e[l]=i[l&255];let n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],s=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;function r(l,c){let h=(l+c)*s,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*a,p=l-(u-f),x=c-(d-f),g=p>x?1:0,m=p>x?0:1,v=p-g+a,y=x-m+a,M=p-1+2*a,S=x-1+2*a,w=u&255,T=d&255,A=0,_=0,b=0,C=.5-p*p-x*x;if(C>0){let N=n[e[w+e[T]]&7];C*=C,A=C*C*(N[0]*p+N[1]*x)}let L=.5-v*v-y*y;if(L>0){let N=n[e[w+g+e[T+m]]&7];L*=L,_=L*L*(N[0]*v+N[1]*y)}let k=.5-M*M-S*S;if(k>0){let N=n[e[w+1+e[T+1]]&7];k*=k,b=k*k*(N[0]*M+N[1]*S)}return 70*(A+_+b)}return r.fbm=(l,c,h=4,u=2,d=.5)=>{let f=1,p=1,x=0,g=0;for(let m=0;m<h;m++)x+=f*r(l*p,c*p),g+=f,f*=d,p*=u;return x/g},r.ridge=(l,c,h=4)=>{let u=1,d=1,f=0,p=0;for(let x=0;x<h;x++)f+=u*(1-Math.abs(r(l*d,c*d))),p+=u,u*=.5,d*=2;return f/p},r}function Gs(o,t,e,i,n,s){let a=n-e,r=s-i,l=o-e,c=t-i,h=a*a+r*r,u=h>0?(l*a+c*r)/h:0;u=Ft(u,0,1);let d=o-(e+a*u),f=t-(i+r*u);return d*d+f*f}function Ah(o,t,e,i,n,s,a,r,l,c){let h=o-a,u=t-r,d=e-l,f=i*i+n*n+s*s,p=h*i+u*n+d*s,x=h*h+u*u+d*d-c*c;if(x>0&&p>0)return-1;let g=p*p-f*x;if(g<0)return-1;let m=(-p-Math.sqrt(g))/f;return m<0&&(m=0),m>1?-1:m}var ua=class{constructor(t=1024){this.items=new Int32Array(t),this.keys=new Float32Array(t),this.size=0}clear(){this.size=0}push(t,e){if(this.size>=this.items.length){let a=new Int32Array(this.items.length*2);a.set(this.items),this.items=a;let r=new Float32Array(this.keys.length*2);r.set(this.keys),this.keys=r}let i=this.size++,n=this.items,s=this.keys;for(;i>0;){let a=i-1>>1;if(s[a]<=e)break;n[i]=n[a],s[i]=s[a],i=a}n[i]=t,s[i]=e}pop(){let t=this.items,e=this.keys,i=t[0],n=--this.size;if(n>0){let s=t[n],a=e[n],r=0;for(;;){let l=r*2+1;if(l>=n)break;let c=l+1;if(c<n&&e[c]<e[l]&&(l=c),e[l]>=a)break;t[r]=t[l],e[r]=e[l],r=l}t[r]=s,e[r]=a}return i}};var d1={house:[5,4],house2:[5,4],shop:[4,4],barn:[6,5],warehouse:[10,6],shed:[2,2],bunker:[3,3],church:[5,13],ruin:[4,4],pumphouse:[4,3]},qd=o=>Math.floor(o)+.5,da=class{constructor(t){this.def=t,this.rng=qe(t.seed),this.buildings=[],this.props=[],this.flatZones=[],this.fps=[],this.roads=t.roads,this.rivers=t.rivers||[],this.bridges=[],this.noTree=[]}riverDist(t,e){let i=1e9;for(let n of this.rivers)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Gs(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}roadDist(t,e){let i=1e9;for(let n of this.roads)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Gs(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}rectRoadClear(t,e,i,n,s){for(let a=-1;a<=1;a+=.5)for(let r=-1;r<=1;r+=.5){let l=t+a*i,c=e+r*n;if(this.roadDist(l,c)<s||this.riverDist(l,c)<s+4||this.def.isWater&&this.def.isWater(l,c))return!1}return!0}overlaps(t,e,i,n,s){for(let a of this.fps)if(t-i-s<a.maxX&&t+i+s>a.minX&&e-n-s<a.maxZ&&e+n+s>a.minZ)return!0;return!1}inBounds(t,e,i,n){let s=this.def.playHalf-8;return Math.abs(t)+i<s&&Math.abs(e)+n<s}b(t,e,i,n=0,s={},a=!1){e=qd(e),i=qd(i);let r=d1[t],l=s.w||r[0],c=s.d||r[1],h=n&1?c:l,u=n&1?l:c;return!a&&(!this.inBounds(e,i,h,u)||this.overlaps(e,i,h,u,s.gap??2.5)||!this.rectRoadClear(e,i,h+1,u+1,s.roadGap??1.5))?!1:(this.buildings.push({type:t,x:e,z:i,rot:n,opts:s}),this.fps.push({minX:e-h,maxX:e+h,minZ:i-u,maxZ:i+u}),this.flatZones.push({x:e,z:i,hw:h+1.2,hd:u+1.2,margin:5,noGrass:!0}),!0)}p(t,e,i,n=0,s={},a=0,r=0){if(a>0){if(this.overlaps(e,i,a,r,.6))return!1;this.fps.push({minX:e-a,maxX:e+a,minZ:i-r,maxZ:i+r}),s.flat&&this.flatZones.push({x:e,z:i,hw:a+.5,hd:r+.5,margin:3,noGrass:!0})}return this.props.push({type:t,x:e,z:i,rot:n,opts:s}),!0}flat(t,e,i,n,s=6,a,r=!1,l=1){this.flatZones.push({x:t,z:e,hw:i,hd:n,margin:s,h:a,noGrass:r,strength:l})}line(t,e,i,n,s,a=2){let r=Math.abs(n-e)>=Math.abs(s-i),l=Math.abs(r?n-e:s-i),c=Math.max(1,Math.floor(l/(a*2)));for(let h=0;h<c;h++){let u=(h+.5)/c,d=Qt(e,n,u),f=Qt(i,s,u);this.roadDist(d,f)<1||this.riverDist(d,f)<1||this.props.push({type:t,x:d,z:f,rot:r?0:1,opts:{n:a}})}}scatter(t,e,i,n,s,a,r=!0,l={}){let c=0;for(let h=0;h<s*12&&c<s;h++){let u=this.rng()*Math.PI*2,d=Qt(i,n,Math.sqrt(this.rng())),f=t+Math.cos(u)*d,p=e+Math.sin(u)*d,x=a[Math.floor(this.rng()*a.length)],g=r?Math.floor(this.rng()*4):0;this.b(x,f,p,g,Object.assign({},l))&&c++}return c}reserve(t,e,i,n){this.fps.push({minX:t-i,maxX:t+i,minZ:e-n,maxZ:e+n})}fillBlock(t,e,i,n){if(e-t<8||n-i<8)return;let s=this.rng,a=Math.max(1,Math.floor((e-t)/12)),r=Math.max(1,Math.floor((n-i)/12));for(let l=0;l<a;l++)for(let c=0;c<r;c++){if(s()<.12)continue;let h=t+(l+.5)*(e-t)/a,u=i+(c+.5)*(n-i)/r,d=3+Math.floor(s()*2),f=3+Math.floor(s()*2);this.b(s()<.55?"house2":"house",h,u,Math.floor(s()*4)&2,{w:d,d:f,gap:1.6,roadGap:.6})}s()<.5&&this.p(s()<.5?"crateStack":"barrels",(t+e)/2+s()*4,(i+n)/2,0,{},1.3,.7)}hq(t){let e=this.def.hq[t];this.flat(e.x,e.z,34,22,14,void 0,!1);let i=t===0?1:-1,n=(s,a,r,l)=>this.p("blastWall",e.x+s,e.z+a*i,r,{n:l/2,h:this.def.hqWallH||3.6});n(-15,16,0,24),n(15,16,0,24),n(0,11,0,18);for(let s of[-1,1])n(27*s,10,1,12),n(27*s,-9,1,14),n(22*s,1,1,14),this.p("container",e.x+33*s,e.z+21*i,0,{},1.3,3.1);this.p("tent",e.x-13,e.z-7*i,0,{},2.5,3),this.p("tent",e.x+13,e.z-7*i,0,{},2.5,3),this.p("tent",e.x,e.z-11*i,1,{},3,2.5),this.p("crateStack",e.x-6,e.z+2*i,0,{},1.3,.7),this.p("crate",e.x+7,e.z+3*i,0,{},.7,.7),this.noTree.push({x:e.x,z:e.z,r:34}),this.reserve(e.x,e.z,38,20)}},f1={id:"ironworks",name:"Ironworks",desc:"A shut-down foundry under grey skies. Fight through the furnace hall, a rail yard of boxcars, the smelter courtyard and the loading docks, with a control block in the middle.",size:252,cell:2,seed:9091,waterLevel:null,playHalf:108,biome:"industrial",time:"overcast",flatRoofs:!0,cqb:!0,terrainTextures:["gravel","dirt","rock","asphalt"],palette:{t0:[.72,.7,.66],t1:[.8,.7,.6],t2:[.85,.85,.85],t3:[1,1,1.05],macro:[.75,.72,.66]},mapColors:[[132,128,120],[118,104,90],[120,118,112],[88,88,92]],wallColors:[12104874,11117722,12893358,10133668,11577492],roofColors:[6975088],grassColor:[6975552,8028232,9080912],trees:{types:["birch","oak","pine"],weights:[.5,.3,.2],scatter:1/9e3,bush:1/2500,rock:1/3500},hq:[{x:0,z:-94,r:16},{x:0,z:94,r:16}],flags:[{id:"A",name:"Furnace Hall",x:-46,z:-38,r:14},{id:"B",name:"Rail Yard",x:48,z:-30,r:14},{id:"C",name:"Smelter",x:-48,z:30,r:14},{id:"D",name:"Loading Docks",x:46,z:38,r:14}],rivers:[],roads:[{points:[[0,-112],[0,-64]],width:7},{points:[[0,64],[0,112]],width:7},{points:[[-96,-64],[96,-64]],width:6},{points:[[-96,64],[96,64]],width:6},{points:[[-84,-64],[-84,64]],width:5},{points:[[84,-64],[84,64]],width:5},{points:[[-84,0],[-16,0]],width:6},{points:[[16,0],[84,0]],width:6}],height(o,t,e,i){let n=4+.6*e.fbm(o/80,t/80,3),s=Math.max(Math.abs(o),Math.abs(t));return n+=ke(96,124,s)*(11+4*i.fbm(o/30,t/30,2)),n},splat(o,t,e,i,n,s,a,r){let l=ke(.2,.36,i),c=n*1.6+(r?.7:0),h=ke(.2,.6,a(o/30+3,t/30))*.8;return[Math.max(.2,1-l-c-h*.5),h,l,c]},grassDensity(o,t,e,i,n,s,a,r){return Ft(r[1]/(r[0]+r[1]+r[2]+r[3])*(1-n)*.7*(.3+.7*a(o/12,t/12)),0,.6)},layout(o){let t=this.flags,e=o.rng;o.hq(0),o.hq(1),o.b("house2",0,0,0,{cat:"concrete",flat:!0,w:6,d:5,color:11578530},!0),o.p("container",0,-34,1,{stack:!0},3.1,1.3),o.p("container",0,34,1,{stack:!0},3.1,1.3),o.p("crateStack",-8,-20,0,{},1.3,.7),o.p("crateStack",8,20,0,{},1.3,.7),o.p("jersey",10,-14,0,{n:2},2,.4),o.p("jersey",-10,14,0,{n:2},2,.4);let i=t[0];o.b("warehouse",i.x,i.z,0,{w:12,d:7,H:9,gap:1},!0);for(let[l,c]of[[-9,-3],[0,3],[9,-3]])o.p("tank",i.x+l,i.z+c,0,{color:6969930},0,0);o.p("pipe",i.x,i.z-10,0,{len:18},0,0),o.p("chimney",i.x-20,i.z-5,0,{h:24},1.7,1.7),o.p("chimney",i.x-20,i.z+5,0,{h:20},1.7,1.7),o.p("crateStack",i.x+16,i.z+11,0,{},1.3,.7),o.p("crateStack",i.x-10,i.z+12,0,{},1.3,.7),o.b("house2",i.x+26,i.z-14,1,{cat:"concrete",flat:!0,w:4,d:3,color:11578530}),o.b("shed",i.x-18,i.z+20,0,{cat:"metal"});let n=t[1];for(let l of[-12,0,12])o.p("rails",n.x+l,n.z,1,{len:56});for(let l of[-12,0,12])for(let c=-1;c<=1;c++)e()<.2&&c!==0||o.p("traincar",n.x+l+.5,n.z+c*16,0,{},1.5,7.2);for(let l=0;l<6;l++)o.p("container",n.x+24+l%2*6,n.z-20+Math.floor(l/2)*14,0,{stack:e()<.4},1.3,3.1);o.b("shop",n.x-26,n.z-18,0,{cat:"brick",w:3,d:3,floors:1}),o.p("jersey",n.x-22,n.z+14,1,{n:3},.4,3.1),o.p("sandbagRing",n.x-20,n.z+2,1,{},2,2.5);let s=t[2];for(let[l,c]of[[-9,-9],[9,-9],[-9,9],[9,9]])o.p("tank",s.x+l,s.z+c,0,{color:11052186},1.7,1.7);o.p("pipe",s.x,s.z-9,0,{len:14},0,0),o.p("pipe",s.x,s.z+9,0,{len:14},0,0),o.p("pipe",s.x-9,s.z,1,{len:14},0,0),o.b("pumphouse",s.x+22,s.z-4,1,{},!0),o.b("pumphouse",s.x-24,s.z+6,1,{}),o.p("chimney",s.x+2,s.z+22,0,{h:26},1.7,1.7),o.b("warehouse",s.x,s.z-20,0,{w:8,d:3,H:6},!0),o.p("barrels",s.x+4,s.z+2,0,{},1,.4),o.p("crateStack",s.x-3,s.z-3,0,{},1.3,.7);let a=t[3];o.b("warehouse",a.x-18,a.z-8,1,{w:6,d:4,H:6},!0),o.b("warehouse",a.x+18,a.z-8,1,{w:6,d:4,H:6},!0),o.p("platform",a.x,a.z+13,0,{len:26,w:4},13,2);for(let l=0;l<4;l++)o.p("crateStack",a.x-9+l*6,a.z+4,0,{},1.3,.7);o.p("car",a.x-5,a.z-6,1,{color:6974042},2.2,1),o.p("car",a.x+6,a.z-2,0,{color:9062954},1,2.2),o.p("container",a.x,a.z-20,1,{stack:!0},3.1,1.3),o.b("house2",i.x,i.z+21,0,{cat:"concrete",flat:!0,w:5,d:3,color:11841702},!0),o.b("warehouse",-14,36,1,{w:6,d:4,H:6},!0),o.b("house2",16,40,0,{cat:"concrete",flat:!0,w:4,d:4,color:11578530},!0),o.p("container",40,10,1,{stack:!0},3.1,1.3),o.p("container",52,12,1,{stack:!0},3.1,1.3),o.p("container",60,7,1,{},3.1,1.3);for(let l of t)o.reserve(l.x,l.z,8,8);let r=[[-22,-22],[22,22],[-22,22],[22,-20],[-62,-82],[62,82],[-62,82],[62,-82],[-70,0],[70,0]];for(let[l,c]of r){let h=e();h<.4?o.b("house2",l,c,Math.floor(e()*4),{cat:"concrete",flat:!0,w:4,d:3,color:11841702}):h<.65?o.b("warehouse",l,c,Math.floor(e()*2),{w:5,d:4,H:6}):h<.85?(o.p("container",l,c,0,{stack:!0},1.3,3.1),o.p("container",l+4,c,0,{},1.3,3.1)):o.b("ruin",l,c,Math.floor(e()*4),{cat:"brick"})}o.scatter(0,0,18,92,16,["warehouse","shed","house2","pumphouse","shop"],!0,{w:4,d:3,cat:"metal",flat:!0,gap:3});for(let l=0;l<14;l++){let c=e()*Math.PI*2,h=16+e()*76,u=Math.cos(c)*h,d=Math.sin(c)*h;if(o.roadDist(u,d)<5)continue;let f=e()<.5?0:1;o.p("container",u,d,f,{stack:e()<.35},f?3.2:1.4,f?1.4:3.2),e()<.6&&o.p("crateStack",u+(f?0:3),d+(f?3:0),0,{},1.3,.7)}for(let l=0;l<8;l++){let c=(e()-.5)*170,h=(e()-.5)*150;o.p(e()<.5?"hesco":"jersey",c,h,Math.floor(e()*2),{n:3},2,2)}o.forests=[[-96,-96,10],[96,96,10],[96,-40,8],[-96,40,8]];for(let l of t)o.noTree.push({x:l.x,z:l.z,r:l.r*1.4})}},p1={id:"brennhof",name:"Brennhof",desc:"A tight old town split by a canal. Narrow streets and alleys, the station, a brewery, the church and town hall, and three bridges over the water. Every corner is a fight.",size:248,cell:2,seed:7171,waterLevel:0,playHalf:106,biome:"temperate",time:"dusk",cqb:!0,terrainTextures:["grass","dirt","rock","gravel"],palette:{t0:[.55,.75,.32],t1:[1,.86,.68],t2:[.95,.95,.95],t3:[1.05,1.02,.98],macro:[.95,.92,.6]},mapColors:[[104,136,70],[146,124,96],[132,130,124],[150,146,138]],wallColors:[15261904,14731432,14209216,13161680,15259832,14203040,15788248,12630184],roofColors:[9058862,8079926,5917764,6961712,5200486],grassColor:[5798448,7246906,9219664],trees:{types:["oak","birch","pine"],weights:[.6,.3,.1],scatter:1/6e3,bush:1/2200,rock:1/6e3},hq:[{x:0,z:-92,r:16},{x:0,z:92,r:16}],flags:[{id:"A",name:"Station",x:-72,z:-46,r:14},{id:"B",name:"Brewery",x:72,z:-44,r:14},{id:"C",name:"Canal Bridge",x:.5,z:4.5,r:13},{id:"D",name:"Church",x:-72,z:46,r:14},{id:"E",name:"Town Hall",x:72,z:48,r:14}],rivers:[{points:[[-124,4],[-60,2.5],[0,4],[60,5.5],[124,4]],width:12,depth:2.4,bankSlope:.9}],roads:[{points:[[0,-112],[0,-66]],width:7},{points:[[0,66],[0,112]],width:7},{points:[[-100,-66],[100,-66]],width:6},{points:[[-100,66],[100,66]],width:6},{points:[[-100,-28],[100,-28]],width:5},{points:[[-100,32],[100,32]],width:5},{points:[[-54,-66],[-54,-7]],width:6},{points:[[-54,13],[-54,66]],width:6},{points:[[54,-66],[54,-5]],width:6},{points:[[54,15],[54,66]],width:6},{points:[[0,-28],[0,-7]],width:6},{points:[[0,16],[0,32]],width:6}],height(o,t,e,i){let n=3.2+.4*e.fbm(o/100,t/100,3),s=Math.max(Math.abs(o),Math.abs(t));return n+=ke(94,122,s)*(13+5*i.fbm(o/30,t/30,2)),n},splat(o,t,e,i,n,s,a,r){let l=ke(.22,.4,i),c=n*1.6+(r?.6:0)+(1-ke(4,8,s))*1.2,h=ke(.35,.65,a(o/30,t/30))*.5;return[Math.max(.05,1-l-c-h),h,l,c]},grassDensity(o,t,e,i,n,s,a,r){return Ft(r[0]/(r[0]+r[1]+r[2]+r[3])*(1-n)*(.5+.5*a(o/18,t/18)),0,1)},layout(o){let t=this.flags,e=o.rng;o.hq(0),o.hq(1),o.bridges.push({x:.5,z:4.5,len:22,w:8},{x:-53.5,z:3,len:20,w:6},{x:54.5,z:5.5,len:20,w:6});for(let c of o.bridges)o.fps.push({minX:c.x-c.w/2-1,maxX:c.x+c.w/2+1,minZ:c.z-c.len/2,maxZ:c.z+c.len/2});for(let c of[-1,1])for(let h=-98;h<100;h+=8)Math.abs(h)<7||Math.abs(h+54)<7||Math.abs(h-54)<7||o.p("stoneWall",h,4+c*9,0,{n:2});let i=t[0],n=t[1],s=t[2],a=t[3],r=t[4];o.b("warehouse",i.x,i.z-10,0,{cat:"brick",w:10,d:4,H:6,color:12089946},!0),o.p("platform",i.x,i.z+1,0,{len:34,w:4},17,2),o.p("rails",i.x-4,i.z+7,0,{len:50}),o.p("traincar",i.x-12,i.z+7,1,{},7.2,1.5),o.p("traincar",i.x+6,i.z+7,1,{},7.2,1.5),o.b("warehouse",n.x,n.z-6,1,{cat:"brick",w:7,d:5,H:7,color:11037258},!0);for(let[c,h]of[[-11,6],[-11,-6]])o.p("tank",n.x+c,n.z+h,0,{color:11569754},1.7,1.7);o.p("barrels",n.x+10,n.z+10,0,{},1,.4),o.p("crateStack",n.x-6,n.z+10,0,{},1.3,.7),o.p("sandbags",s.x+6,s.z-13,0,{n:3},1.6,.4),o.p("sandbags",s.x-6,s.z+13,0,{n:3},1.6,.4),o.p("car",s.x-12,s.z-15,1,{},2.2,1),o.p("car",s.x+12,s.z+15,1,{},2.2,1);for(let c=0;c<4;c++)o.p("stall",-10.5+c*7,-36,0,{},1.7,1.3);for(let c=0;c<4;c++)o.p("stall",-10.5+c*7,40,2,{},1.7,1.3);o.b("house2",-36,-17,0,{w:5,d:3,color:14731432},!0),o.b("house2",36,23,0,{w:5,d:3,color:14209216},!0),o.b("house2",74,-17,0,{w:5,d:3,color:15259832},!0),o.b("house2",70,23,0,{w:5,d:3,color:13161680},!0),o.b("house",-72,-18,0,{w:5,d:3,color:14203040},!0),o.b("house",-74,22,0,{w:5,d:3,color:15788248},!0),o.b("church",a.x,a.z+2,0,{},!0);for(let c=0;c<3;c++)for(let h=0;h<3;h++)o.p("grave",a.x+13+c*3,a.z-4+h*3.2,0,{},.4,.2);o.b("house2",r.x,r.z+6,0,{cat:"brick",w:6,d:4,color:14203032},!0),o.p("fountain",r.x-2,r.z-8,0,{},4,4),o.b("house2",0,-47,0,{cat:"brick",w:7,d:5,color:14207144},!0),o.b("house2",0,49,0,{cat:"brick",w:7,d:5,color:13154464},!0);for(let c of t)c.id!=="C"&&o.reserve(c.x,c.z,7,7);let l=[[-100,-54,-100,-66],[54,100,-100,-66],[-54,-30,-100,-66],[30,54,-100,-66],[-100,-54,-66,-28],[-54,54,-66,-28],[54,100,-66,-28],[-100,-54,-28,-8],[-54,0,-28,-8],[0,54,-28,-8],[54,100,-28,-8],[-100,-54,16,32],[-54,0,16,32],[0,54,16,32],[54,100,16,32],[-100,-54,32,66],[-54,54,32,66],[54,100,32,66],[-100,-54,66,100],[54,100,66,100],[-54,-30,66,100],[30,54,66,100]];for(let[c,h,u,d]of l)o.fillBlock(c+4,h-4,u+4,d-4);o.forests=[[-92,-92,9],[92,92,9],[92,-92,8],[-92,92,8]];for(let c of t)o.noTree.push({x:c.x,z:c.z,r:c.r*1.2})}},m1={id:"outpost",name:"Outpost Zero",desc:"A small walled desert base. Barracks rows, a comms tower and a motor pool packed inside a hesco perimeter, with guard towers on every corner.",size:260,cell:2,seed:3131,waterLevel:null,playHalf:112,biome:"arid",time:"noon",flatRoofs:!0,cqb:!0,small:!0,terrainTextures:["sand","drygrass","rock","asphalt"],palette:{t0:[1,.9,.72],t1:[1,.92,.7],t2:[1,.92,.82],t3:[1.2,1.2,1.25],macro:[1,.85,.65]},mapColors:[[200,182,140],[168,150,104],[150,136,118],[110,110,112]],wallColors:[14272420,13349770,14930864,13156520],roofColors:[11904652],grassColor:[11049562,12101736,9407050],trees:{types:["acacia","shrub","palm"],weights:[.4,.4,.2],scatter:1/5e3,bush:1/1500,rock:1/1500},hq:[{x:0,z:-98,r:16},{x:0,z:98,r:16}],flags:[{id:"A",name:"Barracks",x:-40,z:-36,r:13},{id:"B",name:"Comms Tower",x:4,z:4,r:13},{id:"C",name:"Motor Pool",x:40,z:40,r:13}],rivers:[],roads:[{points:[[0,-120],[0,120]],width:6},{points:[[-120,0],[120,0]],width:6}],height(o,t,e,i){let n=3+.5*e.fbm(o/60,t/60,3),s=Math.max(Math.abs(o),Math.abs(t));return n+=ke(100,128,s)*(9+3*i.fbm(o/25,t/25,2)),n},splat(o,t,e,i,n,s,a,r){let l=ke(.2,.36,i),c=n*1.6+(r?.4:0),h=ke(.2,.6,a(o/30,t/30))*.7;return[Math.max(.15,1-l-c-h*.5),h,l,c]},grassDensity(o,t,e,i,n,s,a,r){return Ft(r[1]/(r[0]+r[1]+r[2]+r[3])*(1-n)*.8,0,.7)},layout(o){let t=this.flags,e=o.rng;o.hq(0),o.hq(1);for(let r=-80;r<=80;r+=4)Math.abs(r)>8&&(o.p("hesco",-80,r,1,{n:3}),o.p("hesco",80,r,1,{n:3})),Math.abs(r)>32&&(o.p("hesco",r,-80,0,{n:3}),o.p("hesco",r,80,0,{n:3}));for(let[r,l]of[[-76,-76],[76,-76],[-76,76],[76,76]])o.p("watchtower",r,l,0,{},2,2);let i=t[0];for(let r=-1;r<=1;r++)o.b("house",i.x+r*14,i.z-4,1,{cat:"concrete",flat:!0,w:6,d:2,noInterior:!0,gap:1},!0);o.p("sandbags",i.x,i.z+12,0,{n:4},2.1,.4),o.p("sandbagRing",i.x-18,i.z+14,0,{},2.5,2),o.p("crateStack",i.x+18,i.z+12,0,{},1.3,.7);let n=t[1];o.p("radioTower",n.x+7,n.z-7,0,{h:26},3,3),o.b("bunker",n.x-8,n.z+6,0,{},!0),o.p("sandbagRing",n.x+10,n.z+10,2,{},2.5,2),o.p("sandbagRing",n.x-12,n.z-10,0,{},2.5,2),o.p("container",n.x+18,n.z-2,0,{},1.3,3.1),o.p("container",n.x-20,n.z,0,{stack:!0},1.3,3.1);let s=t[2];o.b("warehouse",s.x,s.z-6,0,{w:7,d:4,H:5.5},!0);for(let r=0;r<4;r++)o.p("car",s.x-12+r*8,s.z+10,0,{color:[6974026,8024674,6187850,9080724][r]},1,2.2);o.p("tank",s.x+20,s.z-18,0,{color:12103840},1.7,1.7),o.p("barrels",s.x-18,s.z-14,0,{},1,.4),o.b("shop",-18,-16,0,{w:4,d:4,floors:2,flat:!0,cat:"concrete",color:14272420},!0),o.b("shop",22,22,0,{w:4,d:4,floors:2,flat:!0,cat:"concrete",color:13349770},!0),o.p("container",-10,-26,0,{stack:!0},1.3,3.1),o.p("container",-27,-8,1,{stack:!0},3.1,1.3),o.p("container",31,14,1,{stack:!0},3.1,1.3),o.p("container",14,31,0,{stack:!0},1.3,3.1);let a=[[-40,20],[40,-30],[-10,-50],[20,55],[-55,50],[55,-55],[-20,30],[25,-15],[-60,-5],[60,10]];for(let[r,l]of a){let c=e();c<.35?o.b(e()<.5?"shop":"bunker",r,l,Math.floor(e()*4),{w:3,d:3,floors:1,gap:2}):c<.65?o.p("container",r,l,Math.floor(e()*2),{stack:e()<.4},3.2,3.2):(o.p("jersey",r,l,Math.floor(e()*2),{n:2},2.2,2.2),o.p("crateStack",r+3,l+3,0,{},1.3,.7))}o.forests=[];for(let r of t)o.noTree.push({x:r.x,z:r.z,r:r.r*1.5});o.noTree.push({x:0,z:0,r:85})}},g1={id:"frostpine",name:"Frostpine",desc:"A snowed-in mountain village. A timber ski lodge, cabins among snowy pines, a frozen pond in the middle and a sawmill, all within a few hundred metres.",size:280,cell:2,seed:6262,waterLevel:null,playHalf:122,biome:"winter",time:"snow",weather:"snow",small:!0,hqWallH:4.6,terrainTextures:["snow","dirt","rock","ice"],palette:{t0:[1,1,1],t1:[.95,.88,.82],t2:[.92,.94,.98],t3:[1,1,1],macro:[.92,.95,1]},mapColors:[[228,232,238],[168,150,130],[150,152,158],[176,204,222]],wallColors:[9071180,8018496,10123864,7230528],roofColors:[15133936,14476522],grassColor:[6975568,8028248,9080928],trees:{types:["snowpine"],weights:[1],scatter:1/900,bush:1/1400,rock:1/2500},hq:[{x:0,z:-108,r:16},{x:0,z:108,r:16}],flags:[{id:"A",name:"Ski Lodge",x:-42,z:-40,r:14},{id:"B",name:"Frozen Pond",x:6,z:4,r:15},{id:"C",name:"Sawmill",x:44,z:44,r:14}],rivers:[],roads:[{points:[[0,-130],[-20,-60],[-42,-40],[-26,-8],[6,4],[30,25],[44,44],[20,90],[0,130]],width:5}],height(o,t,e,i){let n=7+3.5*e.fbm(o/90,t/90,3)+1.2*i.fbm(o/30,t/30,2);n-=3*Math.exp(-((o-6)**2+(t-4)**2)/(2*26*26));let s=Math.max(Math.abs(o),Math.abs(t));return n+=ke(105,138,s)*(16+6*i.fbm(o/30,t/30,2)),n},splat(o,t,e,i,n,s,a,r){let l=ke(.24,.42,i),c=1-ke(16,20,Math.hypot(o-6,t-4)),h=n*.9+(r?.25:0);return[Math.max(.1,1.2-l-h-c*2),h,l,c*2]},grassDensity(){return 0},layout(o){let t=this.flags,e=o.rng;o.hq(0),o.hq(1),o.flat(6,4,20,20,8,void 0,!0,.85);let i=t[0];o.b("barn",i.x,i.z-4,0,{w:7,d:5,H:6,color:8018496},!0),o.b("house2",i.x+22,i.z+6,1,{cat:"wood",w:3,d:4}),o.b("shed",i.x-22,i.z+10,0,{color:7230528}),o.p("logs",i.x+4,i.z+14,0,{},2.6,1.3),o.line("fence",i.x-28,i.z+22,i.x+10,i.z+22);let n=t[1];o.b("shed",n.x+22,n.z-8,1,{color:7230528}),o.p("crateStack",n.x-18,n.z+6,0,{},1.3,.7),o.p("logs",n.x-8,n.z-14,1,{},1.3,2.6),o.p("logs",n.x+10,n.z+16,0,{},2.6,1.3),o.p("sandbags",n.x,n.z,0,{n:3},1.6,.4),o.p("haystack",n.x-20,n.z-18,0,{},1.3,.9);let s=t[2];o.b("warehouse",s.x-4,s.z-6,1,{cat:"wood",w:7,d:4,H:5,color:8018496},!0);for(let r=0;r<4;r++)o.p("logs",s.x+12,s.z-14+r*7,1,{},1.3,2.6);o.p("crane",s.x-18,s.z+18,0,{},4.4,1.9),o.b("shed",s.x+16,s.z+16,0,{color:7230528}),o.b("house2",-16,-17,0,{cat:"wood",w:4,d:3},!0),o.b("house",-6,-28,0,{cat:"wood",w:3,d:3},!0),o.b("house2",18,32,1,{cat:"wood",w:4,d:3},!0),o.b("house",37,13,0,{cat:"wood",w:3,d:3},!0),o.p("logs",-30,-24,1,{},1.3,2.6),o.p("logs",28,30,0,{},2.6,1.3);let a=[[-60,10],[-30,40],[30,-40],[60,-10],[-10,60],[10,-60],[-70,-70],[70,70],[-60,60],[60,-60],[-25,-75],[25,75]];for(let[r,l]of a)o.b(e()<.4?"house2":"house",r,l,Math.floor(e()*4),{cat:"wood",w:3,d:3,gap:3});for(let r=0;r<8;r++){let l=(e()-.5)*180,c=(e()-.5)*180;o.p(e()<.5?"logs":"crateStack",l,c,Math.floor(e()*2),{},2.6,2.6)}o.forests=[[-80,20,30],[80,-20,30],[-30,80,26],[30,-80,26],[-85,-85,22],[85,85,22],[60,40,14],[-60,-30,14]];for(let r of t)o.noTree.push({x:r.x,z:r.z,r:r.r*1.3});o.noTree.push({x:6,z:4,r:24})}},Ws={ironworks:f1,brennhof:p1,outpost:m1,frostpine:g1};var qs={conquest:{name:"Conquest",desc:"Capture and hold flags. Holding the majority drains enemy tickets; every death costs one.",tickets:350,time:1500},frontline:{name:"Frontline",desc:"Flags fall in order. Push the line flag by flag; only the front flags can be captured.",tickets:300,time:1500},tdm:{name:"Team Deathmatch",desc:"First team to the kill limit wins. Squad spawns keep the fight rolling.",tickets:150,time:900}},fa=class{constructor(t,e,i={}){this.game=t,this.type=e;let n=qs[e];this.maxTickets=i.tickets||n.tickets,this.tickets=[this.maxTickets,this.maxTickets],this.kills=[0,0],this.timeLimit=i.time||n.time,this.time=0,this.over=!1,this.winner=-1,this.bleedAcc=0,this.tick=0;let s=t.world.def;if(this.flags=e==="tdm"?[]:s.flags.map((a,r)=>({id:a.id,name:a.name,x:a.x,z:a.z,r:a.r,y:t.world.terrain.heightAt(a.x,a.z),index:r,owner:-1,progress:0,counts:[0,0],contested:!1,capTeam:-1})),e==="frontline"){this.flags.sort((r,l)=>r.z-l.z),this.flags.forEach((r,l)=>{r.index=l});let a=this.flags.length;this.flags.forEach((r,l)=>{l<Math.floor(a/2)?(r.owner=0,r.progress=1):l>=a-Math.floor(a/2)&&(r.owner=1,r.progress=-1)})}}capturable(t,e){if(this.type==="conquest")return!0;if(this.type!=="frontline")return!1;if(t.owner===e)return!0;let i=t.index,n=this.flags;return e===0?i===0||n[i-1].owner===0:i===n.length-1||n[i+1].owner===1}update(t){if(!this.over){if(this.time+=t,this.tick+=t,this.tick>=.25&&(this.updateFlags(this.tick),this.tick=0),this.type==="conquest"){let e=[0,0];for(let n of this.flags)n.owner>=0&&e[n.owner]++;let i=e[0]-e[1];if(i!==0)for(this.bleedAcc+=t*Math.abs(i)/4.5;this.bleedAcc>=1;)this.bleedAcc-=1,this.tickets[i>0?1:0]=Math.max(0,this.tickets[i>0?1:0]-1)}if(this.type==="tdm"?this.kills[0]>=this.maxTickets?this.end(0):this.kills[1]>=this.maxTickets&&this.end(1):(this.tickets[0]<=0?this.end(1):this.tickets[1]<=0&&this.end(0),this.type==="frontline"&&(this.flags.every(e=>e.owner===0)?this.end(0):this.flags.every(e=>e.owner===1)&&this.end(1))),!this.over&&this.time>=this.timeLimit){let e=this.type==="tdm"?this.kills[0]:this.tickets[0],i=this.type==="tdm"?this.kills[1]:this.tickets[1];this.end(e===i?-1:e>i?0:1)}}}updateFlags(t){let e=this.game.soldiers;for(let i of this.flags){i.counts[0]=0,i.counts[1]=0;for(let c of e){if(c.state!=="alive")continue;let h=c.pos.x-i.x,u=c.pos.z-i.z;h*h+u*u<i.r*i.r&&Math.abs(c.pos.y-i.y)<14&&i.counts[c.team]++}let n=i.counts[0],s=i.counts[1];i.contested=n>0&&s>0;let a=n-s,r=i.progress,l=i.owner;if(i.capTeam=-1,a!==0){let c=a>0?0:1;if(this.capturable(i,c)){let h=.045454545454545456*Math.pow(Math.min(Math.abs(a),5),.6),u=c===0?1:-1;i.progress*u<1&&(i.capTeam=c),i.progress=Math.max(-1,Math.min(1,i.progress+u*h*t))}}else if(n===0&&s===0){let c=i.owner===0?1:i.owner===1?-1:0,h=.02*t;i.progress+=Math.max(-h,Math.min(h,c-i.progress))}i.owner===0&&i.progress<=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",1,l)),i.owner===1&&i.progress>=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",0,l)),i.owner!==0&&i.progress>=1&&(i.owner=0,this.game.onFlagEvent(i,"captured",0,l)),i.owner!==1&&i.progress<=-1&&(i.owner=1,this.game.onFlagEvent(i,"captured",1,l))}}onDeath(t){this.type!=="tdm"&&(this.tickets[t]=Math.max(0,this.tickets[t]-1))}onKill(t){this.kills[t]++}end(t){this.over||(this.over=!0,this.winner=t,this.game.onMatchEnd(t))}flagSpawns(t){return this.flags.filter(e=>e.owner===t&&e.counts[1-t]===0)}};var Je={m4a1:{name:"M4A1",type:"carbine",dmg:26,dmgMin:19,r0:40,r1:120,rpm:800,vel:880,mag:30,mags:5,reload:2.1,reloadEmpty:2.6,modes:["auto","semi"],recoilV:.42,recoilH:.22,spreadHip:2.6,spreadAds:.12,adsTime:.2,moveMul:.97,pen:.8,sound:"carbine",look:{len:.82,color:2829099,mag:"curve",stock:"tube"}},ak74:{name:"AK-74",type:"ar",dmg:28,dmgMin:20,r0:45,r1:130,rpm:650,vel:880,mag:30,mags:5,reload:2.4,reloadEmpty:3,modes:["auto","semi"],recoilV:.5,recoilH:.3,spreadHip:2.8,spreadAds:.13,adsTime:.24,moveMul:.95,pen:.85,sound:"rifle",look:{len:.92,color:3813416,wood:8014378,mag:"curve",stock:"solid"}},aug:{name:"AUG A3",type:"ar",dmg:25,dmgMin:19,r0:45,r1:130,rpm:700,vel:920,mag:30,mags:5,reload:2.6,reloadEmpty:3.2,modes:["auto","semi"],recoilV:.36,recoilH:.18,spreadHip:2.7,spreadAds:.11,adsTime:.24,moveMul:.95,pen:.8,sound:"rifle",look:{len:.78,color:4938299,mag:"straight",stock:"bullpup"}},scarh:{name:"SCAR-H",type:"ar",dmg:36,dmgMin:27,r0:50,r1:150,rpm:600,vel:840,mag:20,mags:6,reload:2.5,reloadEmpty:3.1,modes:["auto","semi"],recoilV:.7,recoilH:.32,spreadHip:3,spreadAds:.13,adsTime:.27,moveMul:.93,pen:1.1,sound:"rifle",look:{len:.95,color:11901546,mag:"straight",stock:"solid"}},g36c:{name:"G36C",type:"carbine",dmg:24,dmgMin:18,r0:35,r1:110,rpm:750,vel:800,mag:30,mags:5,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.36,recoilH:.24,spreadHip:2.4,spreadAds:.13,adsTime:.19,moveMul:.98,pen:.75,sound:"carbine",look:{len:.72,color:3026478,mag:"straight",stock:"solid"}},mp7:{name:"MP7",type:"smg",dmg:20,dmgMin:13,r0:15,r1:55,rpm:950,vel:700,mag:40,mags:5,reload:1.9,reloadEmpty:2.3,modes:["auto","semi"],recoilV:.24,recoilH:.2,spreadHip:1.9,spreadAds:.16,adsTime:.15,moveMul:1.04,pen:.5,sound:"smg",look:{len:.55,color:2500134,mag:"straight",stock:"tube"}},ump45:{name:"UMP-45",type:"smg",dmg:27,dmgMin:17,r0:15,r1:50,rpm:620,vel:420,mag:25,mags:6,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.3,recoilH:.18,spreadHip:1.9,spreadAds:.18,adsTime:.16,moveMul:1.03,pen:.45,sound:"smg",look:{len:.6,color:3158064,mag:"straight",stock:"solid"}},p90:{name:"P90",type:"smg",dmg:19,dmgMin:13,r0:18,r1:60,rpm:900,vel:715,mag:50,mags:4,reload:2.4,reloadEmpty:2.9,modes:["auto","semi"],recoilV:.22,recoilH:.16,spreadHip:2,spreadAds:.15,adsTime:.16,moveMul:1.03,pen:.5,sound:"smg",look:{len:.52,color:3815988,mag:"top",stock:"bullpup"}},m249:{name:"M249",type:"lmg",dmg:26,dmgMin:20,r0:50,r1:150,rpm:750,vel:900,mag:100,mags:3,reload:5.2,reloadEmpty:6,modes:["auto"],recoilV:.4,recoilH:.34,spreadHip:4.5,spreadAds:.18,adsTime:.36,moveMul:.88,pen:1.2,sound:"lmg",look:{len:1,color:3092266,mag:"box",stock:"solid",bipod:!0}},pkm:{name:"PKM",type:"lmg",dmg:33,dmgMin:25,r0:55,r1:160,rpm:650,vel:825,mag:100,mags:3,reload:5.6,reloadEmpty:6.4,modes:["auto"],recoilV:.55,recoilH:.38,spreadHip:4.8,spreadAds:.2,adsTime:.4,moveMul:.86,pen:1.35,sound:"lmg",look:{len:1.1,color:2894374,wood:6962722,mag:"box",stock:"solid",bipod:!0}},mk14:{name:"MK14 EBR",type:"dmr",dmg:46,dmgMin:39,r0:70,r1:220,rpm:420,vel:850,mag:20,mags:5,reload:2.6,reloadEmpty:3.1,modes:["semi"],recoilV:1.15,recoilH:.35,spreadHip:3.4,spreadAds:.05,adsTime:.3,moveMul:.93,pen:1.5,sound:"dmr",sight:"acog",look:{len:1.05,color:4868674,mag:"straight",stock:"solid"}},svd:{name:"SVD",type:"dmr",dmg:57,dmgMin:47,r0:80,r1:250,rpm:300,vel:830,mag:10,mags:6,reload:2.7,reloadEmpty:3.3,modes:["semi"],recoilV:1.6,recoilH:.4,spreadHip:3.8,spreadAds:.04,adsTime:.33,moveMul:.92,pen:1.7,sound:"dmr",sight:"acog",look:{len:1.2,color:2762532,wood:8014378,mag:"straight",stock:"solid"}},l96:{name:"L96A1",type:"sniper",dmg:96,dmgMin:86,r0:100,r1:400,rpm:46,vel:910,mag:5,mags:6,reload:3.2,reloadEmpty:3.8,modes:["bolt"],bolt:!0,recoilV:2.6,recoilH:.5,spreadHip:5,spreadAds:0,adsTime:.38,moveMul:.92,pen:2.5,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.2,color:4872762,mag:"straight",stock:"solid"}},m200:{name:"M200",type:"sniper",dmg:112,dmgMin:100,r0:120,r1:500,rpm:38,vel:980,mag:7,mags:5,reload:3.6,reloadEmpty:4.2,modes:["bolt"],bolt:!0,recoilV:3.2,recoilH:.6,spreadHip:5.5,spreadAds:0,adsTime:.42,moveMul:.9,pen:3,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.3,color:3815990,mag:"straight",stock:"solid"}},m870:{name:"M870",type:"shotgun",dmg:14,dmgMin:5,pellets:9,r0:8,r1:32,rpm:70,vel:400,mag:6,mags:6,reload:.55,reloadEmpty:.55,shellReload:!0,modes:["pump"],pump:!0,recoilV:2.2,recoilH:.6,spreadHip:4.2,spreadAds:2.6,pelletSpread:2.6,adsTime:.2,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2763306,wood:6964264,mag:"tube",stock:"solid"}},m1014:{name:"M1014",type:"shotgun",dmg:11,dmgMin:4,pellets:9,r0:8,r1:28,rpm:260,vel:400,mag:7,mags:5,reload:.5,reloadEmpty:.5,shellReload:!0,modes:["semi"],recoilV:1.8,recoilH:.6,spreadHip:4.4,spreadAds:3,pelletSpread:3,adsTime:.22,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2500134,mag:"tube",stock:"solid"}},m9:{name:"M9",type:"pistol",dmg:24,dmgMin:15,r0:15,r1:45,rpm:420,vel:380,mag:15,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.8,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.22,color:2763306}},g18:{name:"Glock 18",type:"pistol",dmg:18,dmgMin:11,r0:12,r1:40,rpm:1100,vel:375,mag:19,mags:4,reload:1.4,reloadEmpty:1.8,modes:["auto","semi"],recoilV:.5,recoilH:.4,spreadHip:2,spreadAds:.4,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.2,color:1973790}},deagle:{name:"Desert Eagle",type:"pistol",dmg:48,dmgMin:30,r0:20,r1:55,rpm:230,vel:440,mag:7,mags:4,reload:1.8,reloadEmpty:2.2,modes:["semi"],recoilV:2,recoilH:.6,spreadHip:2.4,spreadAds:.3,adsTime:.14,moveMul:1.03,pen:.6,sound:"pistol",look:{len:.27,color:9079434}},usp:{name:"USP",type:"pistol",dmg:26,dmgMin:16,r0:15,r1:45,rpm:400,vel:370,mag:12,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.9,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.21,color:2763306}}},Xs={sight:{iron:{name:"Iron sights",zoom:1.15},reddot:{name:"Red dot",zoom:1.3,reticle:"dot"},holo:{name:"Holographic",zoom:1.3,reticle:"holo"},x2:{name:"2x Prism",zoom:2,reticle:"chevron"},acog:{name:"4x ACOG",zoom:4,reticle:"chevron",optic:!0},scope8:{name:"8x Scope",zoom:8,scope:!0,reticle:"cross"}},barrel:{none:{name:"None"},suppressor:{name:"Suppressor",suppressed:!0,velMul:.92,dmgMul:.94,recoilVMul:.95,noFlash:!0},compensator:{name:"Compensator",recoilHMul:.68},brake:{name:"Muzzle brake",recoilVMul:.8,recoilHMul:1.05},flashhider:{name:"Flash hider",noFlash:!0,recoilVMul:.96}},grip:{none:{name:"None"},vertical:{name:"Vertical grip",recoilVMul:.8},angled:{name:"Angled grip",adsMul:.72,recoilHMul:.9},stubby:{name:"Stubby grip",recoilVMul:.9,recoilHMul:.88,hipMul:.9},bipod:{name:"Bipod",bipod:!0}},rail:{none:{name:"None"},laser:{name:"Laser",hipMul:.62,laser:!0},flashlight:{name:"Flashlight",light:!0}}};function Ch(o,t){let i=Je[o].type,n=Object.keys(Xs[t]);return i==="pistol"?t==="sight"?["iron","reddot"]:t==="barrel"?["none","suppressor"]:t==="rail"?n:["none"]:t==="sight"?i==="sniper"?["scope8","acog","x2","reddot","iron"]:i==="shotgun"?["iron","reddot","holo"]:i==="smg"?["iron","reddot","holo","x2"]:["iron","reddot","holo","x2","acog"]:t==="grip"?i==="sniper"||i==="lmg"||i==="dmr"?["none","vertical","angled","bipod"]:i==="shotgun"?["none","vertical","angled"]:["none","vertical","angled","stubby"]:t==="barrel"&&i==="shotgun"?["none","suppressor"]:n}var rn={frag:{name:"Frag grenade",count:2,kind:"throw",key:"G"},smoke:{name:"Smoke grenade",count:2,kind:"throw"},impact:{name:"Impact grenade",count:2,kind:"throw"},flash:{name:"Flashbang",count:2,kind:"throw"},m320:{name:"M320 launcher",count:4,kind:"launcher"},medkit:{name:"Medkit",count:1/0,kind:"medkit"},rpg:{name:"RPG-7",count:3,kind:"rpg"},c4:{name:"C4",count:3,kind:"c4"},ammobox:{name:"Ammo box",count:2,kind:"place"},sandbags:{name:"Sandbag kit",count:5,kind:"place"},claymore:{name:"Claymore",count:2,kind:"place"},beacon:{name:"Spawn beacon",count:1,kind:"place"},rally:{name:"Rally point",count:1,kind:"place"},binoculars:{name:"Binoculars",count:1/0,kind:"binoculars"}},di={assault:{name:"Assault",desc:"Frontline rifleman. Underbarrel grenade launcher and extra frags.",types:["ar","carbine"],gadgets:["m320","frag"],throwables:3,color:"#d9a441"},medic:{name:"Medic",desc:"Fast full-health revives. Medkit heals you and nearby squadmates.",types:["ar","carbine","smg"],gadgets:["medkit","smoke"],throwables:2,color:"#6fd36a"},engineer:{name:"Engineer",desc:"Breacher. RPG and C4 blow open walls and clear buildings.",types:["smg","shotgun","carbine"],gadgets:["rpg","c4"],throwables:2,color:"#e07a4a"},support:{name:"Support",desc:"Light machine guns, ammo boxes and sandbag fortifications.",types:["lmg","ar"],gadgets:["ammobox","sandbags"],throwables:2,color:"#4ab0e0"},recon:{name:"Recon",desc:"Marksman. Claymores and a spawn beacon for the squad.",types:["sniper","dmr"],gadgets:["claymore","beacon"],throwables:2,color:"#b48ae6"},leader:{name:"Squad Leader",desc:"Gives orders, drops a rally point and spots enemies with binoculars.",types:["ar","carbine","dmr"],gadgets:["rally","binoculars"],throwables:2,color:"#f0e070",leader:!0}},Xd=["frag","smoke","impact","flash"],pa=["m9","g18","deagle","usp"];function ma(o){let t=di[o].types;return Object.keys(Je).filter(e=>t.includes(Je[e].type))}function Er(o){let t=Je[o];return{sight:t.sight||(t.type==="pistol"?"iron":"reddot"),barrel:"none",grip:"none",rail:"none"}}function ga(o,t=Math.random){let e=ma(o),i=e[Math.floor(t()*e.length)],n=Je[i],s=Er(i),a=c=>{let h=Ch(i,c);return h[Math.floor(t()*h.length)]};n.type!=="sniper"&&(s.sight=a("sight")),n.type==="dmr"&&t()<.6&&(s.sight="acog"),s.barrel=t()<.55?a("barrel"):"none",s.grip=t()<.6?a("grip"):"none",s.rail=t()<.3?a("rail"):"none";let r=pa[Math.floor(t()*pa.length)],l=o==="medic"||o==="leader"?t()<.6?"smoke":"frag":t()<.75?"frag":t()<.5?"impact":"smoke";return{cls:o,primary:i,att:s,secondary:r,satt:{sight:"iron",barrel:t()<.2?"suppressor":"none",grip:"none",rail:"none"},throwable:l,armor:t()<.4?"heavy":"light"}}function Yd(o,t){let e=Je[o],i=Object.assign({},e);i.id=o,i.recoilVMul=1,i.recoilHMul=1,i.hipMul=1,i.adsMul=1,i.velMul=1,i.dmgMul=1,i.suppressed=!1,i.noFlash=!1,i.laser=!1,i.light=!1,i.bipod=!1;for(let s of["sight","barrel","grip","rail"]){let a=Xs[s][t&&t[s]]||null;if(a){for(let r of["recoilVMul","recoilHMul","hipMul","adsMul","velMul","dmgMul"])a[r]&&(i[r]*=a[r]);for(let r of["suppressed","noFlash","laser","light","bipod"])a[r]&&(i[r]=!0)}}let n=Xs.sight[t&&t.sight||"iron"]||Xs.sight.iron;return i.zoom=n.zoom,i.scope=!!n.scope,i.reticle=n.reticle||null,i.sightId=t&&t.sight||"iron",i.interval=60/i.rpm,i}function Zd(o,t=!1){let e=o[0].index!==null,i=new Set(Object.keys(o[0].attributes)),n=new Set(Object.keys(o[0].morphAttributes)),s={},a={},r=o[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<o.length;++h){let u=o[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<o.length;++d){let f=o[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=o[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=$d(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=$d(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function $d(o){let t,e,i,n=-1,s=0;for(let c=0;c<o.length;++c){let h=o[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),r=new he(a,e,i),l=0;for(let c=0;c<o.length;++c){let h=o[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);r.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(r.gpuType=n),r}var jd=new dt,Kd=new Rt,Jd=new De,Qd=new We,tf=new R,ef=new R;function ii(o,t,e=0){o=o.index?o.toNonIndexed():o;let i=o.attributes.position.count,n=new Float32Array(i*3);jd.set(t);let s=jd.clone();for(let a=0;a<i;a+=3){let r=e?1+(Math.random()-.5)*e:1;for(let l=0;l<3;l++)n[(a+l)*3]=s.r*r,n[(a+l)*3+1]=s.g*r,n[(a+l)*3+2]=s.b*r}return o.setAttribute("color",new he(n,3)),o.attributes.uv&&o.deleteAttribute("uv"),o}function fi(o,t=0,e=0,i=0,n=0,s=0,a=0,r=1,l=1,c=1){return Qd.set(n,s,a),Jd.setFromEuler(Qd),ef.set(t,e,i),tf.set(r,l,c),Kd.compose(ef,Jd,tf),o.applyMatrix4(Kd),o}var P={colorize(o,t){return ii(o,t)},box(o,t,e,i,n=0,s=0,a=0,r=0,l=0,c=0,h=0){return fi(ii(new ui(o,t,e),i,h),n,s,a,r,l,c)},cyl(o,t,e,i,n,s=0,a=0,r=0,l=0,c=0,h=0,u=0){return fi(ii(new wn(o,t,e,i),n,u),s,a,r,l,c,h)},tube(o,t,e,i,n=0,s=0,a=0,r=Math.PI/2,l=0,c=0){return fi(ii(new wn(o,o,t,e,1,!0),i),n,s,a,r,l,c)},ring(o,t,e,i,n=0,s=0,a=0){return fi(ii(new zs(o,t,e),i),n,s,a)},sleeve(o,t,e,i,n,s=0,a=0,r=0){return[fi(ii(new wn(o,o,e,i,1,!0),n),s,a,r,Math.PI/2),fi(ii(new wn(t,t,e,i,1,!0),n),s,a,r,Math.PI/2),fi(ii(new zs(t,o,i),n),s,a,r+e/2),fi(ii(new zs(t,o,i),n),s,a,r-e/2,0,Math.PI,0)]},cone(o,t,e,i,n=0,s=0,a=0,r=0){return fi(ii(new Gn(o,t,e),i,r),n,s,a)},ico(o,t,e,i=0,n=0,s=0,a=1,r=1,l=1,c=.1,h=0){let u=new $o(o,t);if(h){let d=u.attributes.position;for(let f=0;f<d.count;f++){let p=1+Math.sin(d.getX(f)*12.9+d.getY(f)*78.2+d.getZ(f)*37.7)*.5*h;d.setXYZ(f,d.getX(f)*p,d.getY(f)*p,d.getZ(f)*p)}}return fi(ii(u,e,c),i,n,s,0,0,0,a,r,l)},dodeca(o,t,e=0,i=0,n=0,s=1,a=1,r=1,l=.12){return fi(ii(new Xo(o,0),t,l),e,i,n,0,0,0,s,a,r)},prism(o,t,e,i,n=0,s=0,a=0,r=0){let l=new yr;l.moveTo(-e/2,0),l.lineTo(e/2,0),l.lineTo(0,t),l.lineTo(-e/2,0);let c=new Yo(l,{depth:o,bevelEnabled:!1});return c.translate(0,0,-o/2),c.rotateY(Math.PI/2),fi(ii(c,i),n,s,a,0,r,0)},pyramid(o,t,e,i=0,n=0,s=0){let a=new Gn(o*.7071,t,4);return a.rotateY(Math.PI/4),fi(ii(a,e),i,n+t/2,s)},merge(o){let t=o.filter(Boolean).map(i=>(i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1"),i)),e=Zd(t,!1);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var Rh=new Map;function Me(o,t,{srgb:e=!0,repeat:i=!0}={}){let n=document.createElement("canvas");n.width=n.height=o;let s=n.getContext("2d");t(s,o);let a=new Vn(n);return i&&(a.wrapS=a.wrapT=Di),e&&(a.colorSpace=Te),a.anisotropy=8,a.generateMipmaps=!0,a.minFilter=Ji,a.magFilter=je,a}function ni(o,t,e,i,n,s,a=4){let r=zi(s),l=o.createImageData(t,t),c=l.data;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=u/t*Math.PI*2,f=h/t*Math.PI*2,p=Math.cos(d)*n,x=Math.sin(d)*n,g=Math.cos(f)*n,m=Math.sin(f)*n,v=(r.fbm(p+g*.7,x+m*.7,a)+r.fbm(g-3.1,m+1.7,a)*.6)*.5,y=(h*t+u)*4;c[y]=Math.max(0,Math.min(255,e[0]+v*i[0])),c[y+1]=Math.max(0,Math.min(255,e[1]+v*i[1])),c[y+2]=Math.max(0,Math.min(255,e[2]+v*i[2])),c[y+3]=255}o.putImageData(l,0,0)}function wi(o,t,e,i,n,s,a,r=.5){let l=qe(a);for(let c=0;c<e;c++){o.fillStyle=i[Math.floor(l()*i.length)],o.globalAlpha=r*(.4+l()*.6);let h=l()*t,u=l()*t,d=n+l()*(s-n);for(let f of[-t,0,t])for(let p of[-t,0,t])o.fillRect(h+f,u+p,d,d*(.6+l()*.8))}o.globalAlpha=1}function si(o){if(Rh.has(o))return Rh.get(o);let t;switch(o){case"grass":t=Me(256,(e,i)=>{ni(e,i,[118,128,118],[40,45,30],3,11),wi(e,i,900,["#9fb07a","#5f7046","#b7c48b","#4d5c38"],1,3,2,.45)});break;case"drygrass":t=Me(256,(e,i)=>{ni(e,i,[150,135,100],[40,35,25],3,12),wi(e,i,900,["#c9b68a","#8f7b55","#d8c79d","#a39064"],1,3,3,.5)});break;case"dirt":t=Me(256,(e,i)=>{ni(e,i,[128,112,96],[45,40,35],4,13),wi(e,i,700,["#8a7560","#a8927a","#5e4f40","#c2ae95"],1,4,4,.5)});break;case"rock":t=Me(256,(e,i)=>{ni(e,i,[130,128,124],[55,55,55],5,14,5);let n=qe(9);e.strokeStyle="rgba(40,40,40,0.35)",e.lineWidth=1.2;for(let s=0;s<40;s++){e.beginPath();let a=n()*i,r=n()*i;e.moveTo(a,r);for(let l=0;l<5;l++)a+=(n()-.5)*40,r+=(n()-.5)*40,e.lineTo(a,r);e.stroke()}});break;case"sand":t=Me(256,(e,i)=>{ni(e,i,[196,178,140],[30,28,22],6,15),wi(e,i,1200,["#d9c8a0","#b19a72","#e8dcb8"],1,2,6,.4)});break;case"gravel":t=Me(256,(e,i)=>{ni(e,i,[140,132,118],[35,32,30],6,16),wi(e,i,1600,["#7d766a","#b5ab98","#5d564b","#cfc5b0"],1,4,7,.65)});break;case"asphalt":t=Me(256,(e,i)=>{ni(e,i,[92,92,94],[24,24,24],8,17),wi(e,i,1500,["#6b6b6e","#4a4a4c","#8a8a8a"],1,2,8,.5)});break;case"plaster":t=Me(256,(e,i)=>{ni(e,i,[222,220,214],[30,30,30],5,18),wi(e,i,300,["#bdb8ae","#e9e6df"],2,8,10,.25)});break;case"brick":t=Me(256,(e,i)=>{e.fillStyle="#bfb6aa",e.fillRect(0,0,i,i);let n=qe(21),s=i/16,a=i/8;for(let r=0;r<16;r++)for(let l=-1;l<9;l++){let c=r%2*a*.5,h=200+n()*55;e.fillStyle=`rgb(${h},${h*.92},${h*.86})`,e.fillRect(l*a+c+1,r*s+1,a-2,s-2)}wi(e,i,400,["#8d857a","#ffffff"],1,3,11,.2)});break;case"wood":t=Me(256,(e,i)=>{let n=qe(31),s=i/8;for(let a=0;a<8;a++){let r=190+n()*60;e.fillStyle=`rgb(${r},${r*.9},${r*.82})`,e.fillRect(0,a*s,i,s)}e.strokeStyle="rgba(60,40,25,0.5)";for(let a=0;a<=8;a++)e.beginPath(),e.moveTo(0,a*s),e.lineTo(i,a*s),e.stroke();e.strokeStyle="rgba(90,60,35,0.18)";for(let a=0;a<120;a++){let r=n()*i;e.beginPath(),e.moveTo(n()*i,r),e.lineTo(n()*i,r+(n()-.5)*4),e.stroke()}});break;case"concrete":t=Me(256,(e,i)=>{ni(e,i,[196,194,188],[30,30,30],7,19),wi(e,i,500,["#a8a59e","#d9d6cf","#8c8982"],1,3,12,.35),e.strokeStyle="rgba(80,80,80,0.25)",e.strokeRect(.5,.5,i-1,i-1)});break;case"metal":t=Me(256,(e,i)=>{let n=e.createLinearGradient(0,0,i/16,0);n.addColorStop(0,"#d8d8d8"),n.addColorStop(.5,"#f4f4f4"),n.addColorStop(1,"#bcbcbc"),e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<16;s++)e.fillStyle=s%2?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",e.fillRect(s*i/16,0,i/32,i);wi(e,i,260,["#8a6a4a","#6b5038"],1,5,13,.25)});break;case"sandbag":t=Me(256,(e,i)=>{e.fillStyle="#bba57c",e.fillRect(0,0,i,i);let n=qe(41),s=i/4,a=i/2;for(let r=0;r<4;r++)for(let l=-1;l<3;l++){let c=r%2*a*.5,h=170+n()*40;e.fillStyle=`rgb(${h},${h*.9},${h*.7})`,e.beginPath(),e.ellipse(l*a+c+a/2,r*s+s/2,a/2-3,s/2-3,0,0,Math.PI*2),e.fill()}wi(e,i,500,["#7f6d4d","#d4c29b"],1,2,14,.3)});break;case"hay":t=Me(256,(e,i)=>{ni(e,i,[200,172,96],[40,35,20],9,20),e.strokeStyle="rgba(120,90,30,0.35)";let n=qe(5);for(let s=0;s<300;s++){let a=n()*i,r=n()*i;e.beginPath(),e.moveTo(a,r),e.lineTo(a+(n()-.5)*20,r+(n()-.5)*6),e.stroke()}});break;case"roof":t=Me(256,(e,i)=>{e.fillStyle="#c8c0b8",e.fillRect(0,0,i,i);let n=qe(51);for(let s=0;s<10;s++)for(let a=-1;a<11;a++){let r=s%2*i/20,l=175+n()*60;e.fillStyle=`rgb(${l},${l*.95},${l*.92})`,e.fillRect(a*i/10+r+1,s*i/10+1,i/10-2,i/10-1),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(a*i/10+r,s*i/10+i/10-3,i/10,3)}});break;case"cloth":t=Me(128,(e,i)=>{ni(e,i,[230,230,230],[20,20,20],4,22),e.fillStyle="rgba(0,0,0,0.12)";for(let n=0;n<i;n+=16)e.fillRect(n,0,8,i)});break;case"snow":t=Me(256,(e,i)=>{ni(e,i,[232,236,242],[20,20,16],4,31),wi(e,i,700,["#ffffff","#dfe6ee","#cfd8e2"],1,3,32,.45)});break;case"ice":t=Me(256,(e,i)=>{ni(e,i,[176,204,222],[26,22,18],3,33);let n=qe(34);e.strokeStyle="rgba(255,255,255,0.45)",e.lineWidth=1;for(let s=0;s<30;s++){e.beginPath();let a=n()*i,r=n()*i;e.moveTo(a,r);for(let l=0;l<4;l++)a+=(n()-.5)*60,r+=(n()-.5)*60,e.lineTo(a,r);e.stroke()}});break;case"noise":t=Me(256,(e,i)=>ni(e,i,[128,128,128],[127,127,127],2,23,5),{srgb:!1});break;case"smoke":t=Me(128,(e,i)=>{let n=zi(77),s=e.createImageData(i,i),a=s.data;for(let r=0;r<i;r++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(r-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u)*(.65+.35*n.fbm(l/22,r/22,4)),f=(r*i+l)*4;a[f]=a[f+1]=a[f+2]=255,a[f+3]=Math.max(0,Math.min(255,Math.pow(d,1.4)*255))}e.putImageData(s,0,0)},{repeat:!1,srgb:!1});break;case"spark":t=Me(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.8)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1,srgb:!1});break;case"flash":t=Me(128,(e,i)=>{e.translate(i/2,i/2);for(let s=0;s<7;s++){e.rotate(Math.PI*2/7+.3);let a=e.createLinearGradient(0,0,i/2,0);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(0,-6),e.lineTo(i/2,0),e.lineTo(0,6),e.fill()}let n=e.createRadialGradient(0,0,0,0,0,i/3);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(-i/2,-i/2,i,i)},{repeat:!1,srgb:!1});break;case"bullethole":t=Me(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(10,10,10,1)"),n.addColorStop(.18,"rgba(20,18,16,1)"),n.addColorStop(.32,"rgba(60,55,50,0.7)"),n.addColorStop(1,"rgba(60,55,50,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1});break;case"scorch":t=Me(128,(e,i)=>{let n=zi(99),s=e.createImageData(i,i),a=s.data;for(let r=0;r<i;r++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(r-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u*(.8+.4*n.fbm(l/14,r/14,3))),f=(r*i+l)*4;a[f]=15,a[f+1]=12,a[f+2]=10,a[f+3]=Math.min(255,d*330)}e.putImageData(s,0,0)},{repeat:!1});break;default:throw new Error("unknown texture "+o)}return Rh.set(o,t),t}var Vi={uTime:{value:0},uWind:{value:1}},Ar=new Set,Cr=null;function va(o){let t=o.userData.patches||[],e=o.userData.csmHook;o.onBeforeCompile=(n,s)=>{e&&e(n,s);for(let a of t)a.fn(n,s)};let i=t.map(n=>n.name).join("|")+(e?"|csm":"");o.customProgramCacheKey=()=>i,o.needsUpdate=!0}function jn(o,t,e){return o.userData.patches=o.userData.patches||[],o.userData.patches.push({name:t,fn:e}),nf(o),va(o),o}function nf(o){return Ar.has(o)||(Ar.add(o),Cr?sf(o,Cr):va(o)),o}function sf(o,t){t.setupMaterial(o),o.userData.csmHook=o.onBeforeCompile,va(o)}function ya(o){if(Cr!==o){for(let t of Ar)t.defines&&(delete t.defines.USE_CSM,delete t.defines.CSM_CASCADES,delete t.defines.CSM_FADE),t.userData.csmHook=null;Cr=o;for(let t of Ar)o?sf(t,o):va(t)}}function rf(){Ar.clear(),Cr=null}function Ph(o,t,e=.5,i=1){let s={uTriMap:{value:si(t)},uTriScale:{value:e},uTriStrength:{value:i}};return jn(o,"tri_"+t,a=>{Object.assign(a.uniforms,s),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTriPos;
varying vec3 vTriNrm;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 triWp = vec4(transformed, 1.0);
        vec3 triN = objectNormal;
        #ifdef USE_INSTANCING
          triWp = instanceMatrix * triWp;
          triN = mat3(instanceMatrix) * triN;
        #endif
        triWp = modelMatrix * triWp;
        vTriPos = triWp.xyz;
        vTriNrm = normalize(mat3(modelMatrix) * triN);`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uTriMap; uniform float uTriScale; uniform float uTriStrength;
varying vec3 vTriPos;
varying vec3 vTriNrm;`).replace("#include <map_fragment>",`
        vec3 tw = abs(normalize(vTriNrm)); tw = pow(tw, vec3(4.0)); tw /= (tw.x + tw.y + tw.z);
        vec3 tp = vTriPos * uTriScale;
        vec4 triC = texture2D(uTriMap, tp.zy) * tw.x + texture2D(uTriMap, tp.xz) * tw.y + texture2D(uTriMap, vec2(tp.x, tp.y)) * tw.z;
        diffuseColor.rgb *= mix(vec3(1.0), triC.rgb, uTriStrength);`)})}function Dh(o,t=.03,e=.5,i=1.4){return jn(o,`wind_${t}_${e}`,n=>{n.uniforms.uTime=Vi.uTime,n.uniforms.uWind=Vi.uWind,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #endif
          float hh = max(position.y - ${e.toFixed(3)}, 0.0);
          float ph = uTime * ${i.toFixed(3)} + ip.x * 0.071 + ip.z * 0.053;
          float gust = 0.6 + 0.4 * sin(uTime * 0.37 + ip.x * 0.01);
          transformed.x += (sin(ph) * 0.7 + sin(ph * 2.3 + position.z) * 0.3) * hh * ${t.toFixed(4)} * uWind * gust;
          transformed.z += (cos(ph * 0.83) * 0.6 + sin(ph * 1.9 + position.x) * 0.25) * hh * ${t.toFixed(4)} * uWind * gust;
        }`)})}var xa=new Map;function Sn(o="default",t={}){if(xa.has(o))return xa.get(o);let e=new fe(Object.assign({vertexColors:!0,roughness:.85,metalness:0,flatShading:!1,side:o==="weapon"?Re:Oi},t));return nf(e),xa.set(o,e),e}function of(){xa.clear()}var Tn=new Map,Xe=(o,t=.3)=>new dt(o).lerp(new dt(8026746),t).getHex();function x1(o,t,e,i=1,n=.85,s=1.05){let a=new Zo(o,9,5,0,Math.PI*2,0,Math.PI*.56);return a.scale(i,n,s),a.translate(0,e,0),P.colorize(a,t)}function Rr(o,t={}){let e=o+JSON.stringify(t);if(Tn.has(e))return Tn.get(e);let i=Je[o],n=i.look||{len:.8,color:2763306},s=Xe(n.color),a=Xe(n.color,.18),r=Xe(1842204),l=Xe(n.wood||n.color,.2),c=Xe(3815994),h=[],u=[],d=[],f=.105,p,x=-.05,g=null,m=new R,v=n.len;if(i.type==="pistol"){h.push(P.box(.03,.034,v,s,0,.047,-v*.35));for(let T=0;T<4;T++)h.push(P.box(.032,.026,.004,r,0,.05,.03-T*.012));h.push(P.box(.027,.024,v*.78,r,0,.02,-v*.3)),h.push(P.box(.028,.06,.04,r,0,-.012,.012,.22)),h.push(P.box(.006,.022,.03,r,0,-.004,-.04)),h.push(P.box(.006,.012,.006,r,0,.07,-v*.8)),h.push(P.box(.02,.01,.008,r,0,.068,.02)),u.push(P.box(.024,.075,.034,Xe(2500134),0,-.037,0,.22)),m.set(0,-.025,.018),p=-v*.85,f=.074,t.sight==="reddot"&&(h.push(P.box(.028,.008,.036,r,0,.068,-.03)),h.push(P.box(.004,.024,.008,r,-.012,.084,-.042),P.box(.004,.024,.008,r,.012,.084,-.042),P.box(.028,.005,.008,r,0,.098,-.042)),h.push(P.box(.026,.01,.014,r,0,.076,-.018)),d.push({type:"rect",w:.02,h:.022,y:.085,z:-.042}),f=.085,g=-.038),t.barrel==="suppressor"&&(h.push(P.cyl(.017,.017,.13,8,2236962,0,.047,p-.06,Math.PI/2)),p-=.13)}else{let T=n.stock==="bullpup",A=T?-v*.05:-v*.12,_=v*.42;h.push(P.box(.056,.045,_,s,0,.068,A)),h.push(P.box(.05,.045,_*.8,a,0,.024,A+_*.06)),h.push(P.box(.003,.018,.06,r,.029,.07,A+.02)),h.push(P.box(.02,.012,.03,r,0,.094,A+_*.5-.01)),h.push(P.box(.03,.01,_*.95,c,0,.095,A-.01));for(let st=0;st<7;st++)h.push(P.box(.034,.006,.008,r,0,.101,A-_*.42+st*_*.13));h.push(P.box(.008,.006,.07,r,0,-.01,-.03)),h.push(P.box(.006,.03,.006,r,0,-.02,0));let b=-v*.42,C=v*.27,L=n.wood&&i.type!=="lmg"?l:s;h.push(P.box(.062,.062,C,L,0,.045,b));for(let st=0;st<4;st++)h.push(P.box(.064,.012,.025,r,0,.05,b-C*.35+st*C*.23));n.wood&&h.push(P.cyl(.011,.011,C,6,c,0,.09,b,Math.PI/2));let k=b-C/2,N=-v*.68;if(h.push(P.cyl(.011,.012,Math.abs(N-k)+.02,7,r,0,.05,(k+N)/2,Math.PI/2)),h.push(P.box(.026,.03,.03,r,0,.06,k-.03)),p=N-.01,h.push(P.box(.032,.095,.044,r,0,-.04,T?-.18:.02,.3)),n.stock==="tube")h.push(P.cyl(.015,.015,v*.26,7,r,0,.055,v*.17,Math.PI/2)),h.push(P.box(.044,.05,v*.14,r,0,.045,v*.25)),h.push(P.box(.046,.12,.035,r,0,.03,v*.33));else if(n.stock==="solid"){let st=n.wood?l:s;h.push(P.box(.046,.07,v*.3,st,0,.05,v*.2,-.05)),h.push(P.box(.044,.05,v*.22,st,0,0,v*.24,.18)),h.push(P.box(.048,.13,.03,r,0,.02,v*.355))}else T&&h.push(P.box(.06,.1,v*.22,s,0,.03,v*.22));let O=T?v*.12:-.1,U=Xe(2236962,.25);if(n.mag==="curve")u.push(P.box(.028,.08,.058,U,0,-.04,0,.12)),u.push(P.box(.028,.08,.056,U,0,-.11,-.025,.42)),m.set(0,0,O);else if(n.mag==="straight")u.push(P.box(.028,.13,.05,U,0,-.065,0,.1)),u.push(P.box(.032,.012,.054,r,0,-.13,.006,.1)),m.set(0,0,O);else if(n.mag==="box")u.push(P.box(.09,.1,.11,3817520,.02,-.05,0)),m.set(0,0,-.08);else if(n.mag==="top")u.push(P.box(.05,.03,v*.45,2763304,0,0,0)),m.set(0,.11,-v*.18);else if(n.mag==="tube"){h.push(P.cyl(.013,.013,v*.45,6,r,0,.012,-v*.42,Math.PI/2)),h.push(P.box(.05,.045,.13,l,0,.01,-v*.42));for(let st=0;st<3;st++)h.push(P.box(.052,.006,.01,r,0,.012,-v*.42-.04+st*.04));u.push(P.cyl(.011,.011,.05,6,11546656,0,0,0,Math.PI/2)),m.set(0,0,-.05)}n.bipod&&(h.push(P.box(.01,.01,.22,r,-.015,0,-v*.5)),h.push(P.box(.01,.01,.22,r,.015,0,-v*.5))),i.bolt&&(h.push(P.cyl(.008,.008,.06,5,c,.04,.07,0,0,0,Math.PI/2)),h.push(P.ico(.012,0,c,.07,.07,0)));let X=t.sight||"iron",F=-.04,B=Xe(1579032,.22),j=Xe(3815984,.2);if(X==="iron"){let st=-v*.5;h.push(P.box(.02,.024,.022,r,0,.094,st)),h.push(P.box(.004,.02,.004,B,0,.113,st)),h.push(P.box(.004,.03,.014,r,-.011,.11,st),P.box(.004,.03,.014,r,.011,.11,st)),h.push(P.box(.03,.012,.024,r,0,.1,.02)),h.push(P.box(.006,.026,.018,r,-.015,.117,.02),P.box(.006,.026,.018,r,.015,.117,.02)),h.push(...P.sleeve(.009,.0042,.006,12,B,0,.123,.02)),h.push(P.box(.022,.006,.006,r,0,.112,.02)),f=.123,x=.02}else if(X==="reddot")h.push(P.box(.022,.016,.046,r,0,.104,F),P.box(.03,.006,.05,r,0,.099,F)),h.push(...P.sleeve(.021,.0175,.052,14,B,0,.131,F)),h.push(...P.sleeve(.0235,.0175,.008,14,B,0,.131,F-.026)),h.push(...P.sleeve(.0225,.0175,.006,14,B,0,.131,F+.026)),h.push(P.cyl(.008,.008,.012,8,r,.026,.131,F,0,0,Math.PI/2),P.cyl(.008,.008,.012,8,r,0,.156,F)),h.push(P.box(.006,.006,.006,10040098,.033,.131,F)),d.push({type:"circle",r:.0175,y:.131,z:F-.024}),f=.131,x=F,g=F-.02;else if(X==="holo")h.push(P.box(.046,.016,.09,r,0,.104,F+.005)),h.push(P.box(.042,.016,.03,B,0,.112,F+.04)),h.push(P.box(.008,.005,.006,4868682,-.012,.1125,F+.057),P.box(.008,.005,.006,4868682,.012,.1125,F+.057)),h.push(P.box(.006,.046,.034,B,-.025,.136,F-.018),P.box(.006,.046,.034,B,.025,.136,F-.018)),h.push(P.box(.056,.007,.034,B,0,.16,F-.018)),h.push(P.box(.044,.004,.004,r,0,.158,F-.034),P.box(.044,.004,.004,r,0,.114,F-.034)),d.push({type:"rect",w:.044,h:.04,y:.136,z:F-.02}),f=.136,x=F,g=F-.016;else if(X==="x2")h.push(P.box(.026,.014,.06,r,0,.104,F)),h.push(...P.sleeve(.02,.0165,.07,12,B,0,.132,F)),h.push(...P.sleeve(.024,.0165,.012,12,B,0,.132,F-.038)),h.push(...P.sleeve(.022,.0165,.01,12,B,0,.132,F+.036)),h.push(P.box(.02,.012,.04,B,0,.157,F),P.cyl(.006,.006,.012,8,r,.024,.132,F+.01,0,0,Math.PI/2)),d.push({type:"circle",r:.0165,y:.132,z:F-.042},{type:"circle",r:.0165,y:.132,z:F+.04,back:!0}),f=.132,x=F,g=F-.03;else if(X==="acog")h.push(P.box(.03,.014,.07,j,0,.104,F)),h.push(P.cyl(.018,.027,.12,12,j,0,.134,F,Math.PI/2)),h.push(...P.sleeve(.029,.023,.01,12,j,0,.134,F-.062)),h.push(P.box(.012,.009,.08,2763300,0,.162,F),P.box(.006,.004,.06,10107434,0,.167,F)),h.push(P.cyl(.007,.007,.012,8,j,.026,.134,F,0,0,Math.PI/2)),d.push({type:"circle",r:.024,y:.134,z:F-.067},{type:"circle",r:.017,y:.134,z:F+.061,back:!0}),f=.134,x=F+.06;else if(X==="scope8"){let st=F-.03;h.push(P.cyl(.017,.017,.2,12,B,0,.142,st,Math.PI/2)),h.push(P.cyl(.02,.032,.07,14,B,0,.142,st-.135,Math.PI/2)),h.push(...P.sleeve(.033,.029,.01,14,B,0,.142,st-.172)),h.push(P.cyl(.025,.019,.06,12,B,0,.142,st+.13,Math.PI/2)),h.push(P.cyl(.024,.024,.014,14,Xe(2763306),0,.142,st+.09,Math.PI/2)),h.push(P.cyl(.011,.011,.03,10,B,0,.17,st),P.cyl(.011,.011,.03,10,B,.03,.142,st,0,0,Math.PI/2));for(let _t of[st-.06,st+.06])h.push(...P.sleeve(.021,.0172,.014,12,r,0,.142,_t)),h.push(P.box(.02,.03,.014,r,0,.115,_t));d.push({type:"circle",r:.029,y:.142,z:st-.176},{type:"circle",r:.021,y:.142,z:st+.16,back:!0}),f=.142,x=st+.16}t.barrel==="suppressor"?(h.push(P.cyl(.022,.022,.17,8,2236962,0,.05,p-.08,Math.PI/2)),p-=.17):t.barrel&&t.barrel!=="none"?(h.push(P.cyl(.018,.016,.055,6,2500134,0,.05,p-.02,Math.PI/2)),p-=.055):(h.push(P.cyl(.015,.014,.04,6,r,0,.05,p-.015,Math.PI/2)),p-=.04);let rt=-v*.42;t.grip==="vertical"?h.push(P.box(.026,.085,.03,r,0,-.03,rt)):t.grip==="angled"?h.push(P.box(.026,.04,.07,r,0,-.005,rt,-.5)):t.grip==="stubby"?h.push(P.box(.026,.045,.03,r,0,-.01,rt)):t.grip==="bipod"&&!n.bipod&&(h.push(P.box(.01,.01,.2,r,-.015,0,rt-.06)),h.push(P.box(.01,.01,.2,r,.015,0,rt-.06))),t.rail==="laser"?(h.push(P.box(.022,.024,.06,r,.042,.04,rt+.02)),h.push(P.box(.008,.008,.004,16719904,.042,.04,rt-.012))):t.rail==="flashlight"&&h.push(P.cyl(.016,.018,.08,8,r,.042,.04,rt,Math.PI/2))}let y=P.merge(h),M=u.length?P.merge(u):null,w={geo:M?P.merge([y.clone(),M.clone().translate(m.x,m.y,m.z)]):y,bodyGeo:y,magGeo:M,magPos:m,sightY:f,sightZ:x,lenses:d,reticleZ:g,muzzle:new R(0,i.type==="pistol"?.047:.05,p),len:v,pistol:i.type==="pistol"};return Tn.set(e,w),w}function Kn(o){let t="g_"+o;if(Tn.has(t))return Tn.get(t);let e;switch(o){case"frag":case"impact":e=[P.ico(.04,1,o==="impact"?8022586:4147758,0,0,0),P.box(.015,.03,.015,8947848,0,.045,0),P.box(.008,.06,.012,7829367,.02,.03,0)];break;case"smoke":case"flash":e=[P.cyl(.032,.032,.12,8,o==="flash"?2763306:6975088,0,0,0),P.box(.015,.025,.015,8947848,0,.07,0),P.cyl(.033,.033,.02,8,o==="flash"?6710886:13684944,0,.02,0)];break;case"m320":e=[P.cyl(.03,.03,.3,8,2763306,0,.04,-.15,Math.PI/2),P.box(.03,.1,.04,1842204,0,-.03,.02,.3),P.box(.04,.05,.15,3355443,0,.06,.04),P.box(.05,.1,.03,2763306,0,.03,.14)];break;case"rpg":e=[P.cyl(.035,.035,.95,8,4872762,0,.06,-.15,Math.PI/2),P.cone(.055,.2,8,5925450,0,.06,-.72),P.box(.03,.09,.04,1842204,0,-.02,0,.3),P.box(.03,.09,.04,1842204,0,-.02,-.25,.3),P.box(.03,.04,.05,2236962,-.04,.12,-.1),P.cyl(.045,.04,.1,8,6969914,0,.06,.32,Math.PI/2)];break;case"medkit":e=[P.box(.18,.12,.08,15263976,0,0,0),P.box(.06,.02,.085,13639712,0,0,0),P.box(.02,.06,.085,13639712,0,0,0),P.box(.06,.02,.02,6710886,0,.07,0)];break;case"ammobox":e=[P.box(.25,.14,.14,4872746,0,0,0),P.box(.1,.02,.06,2236962,0,.08,0),P.box(.26,.02,.15,3820066,0,.06,0)];break;case"c4":e=[P.box(.12,.05,.08,13154442,0,0,0),P.box(.03,.02,.06,2236962,.03,.035,0),P.box(.04,.09,.025,2763306,-.12,0,.02),P.box(.01,.01,.01,16719904,.03,.05,0)];break;case"claymore":e=[P.box(.18,.1,.04,4872750,0,0,0),P.box(.01,.06,.01,3355443,-.06,-.07,0),P.box(.01,.06,.01,3355443,.06,-.07,0)];break;case"beacon":e=[P.box(.14,.18,.1,3820122,0,0,0),P.box(.01,.2,.01,2236962,.04,.18,0),P.box(.03,.03,.03,3211104,.04,.29,0)];break;case"rally":e=[P.box(.16,.12,.1,4868666,0,0,0),P.box(.01,.35,.01,2236962,-.05,.22,0),P.box(.12,.08,.005,15786096,.01,.34,0)];break;case"binoculars":e=[P.cyl(.025,.025,.12,8,2763306,-.035,0,0,Math.PI/2),P.cyl(.025,.025,.12,8,2763306,.035,0,0,Math.PI/2),P.box(.04,.02,.04,2236962,0,0,0)];break;case"sandbags":e=[P.box(.3,.12,.18,12100474,0,0,0)];break;case"knife":e=[P.box(.012,.03,.14,12106944,0,0,-.1),P.box(.022,.03,.09,2763302,0,-.005,.02),P.box(.05,.012,.012,3815990,0,0,-.03)];break;case"bandage":e=[P.cyl(.035,.035,.07,8,15658734,0,0,0,0,0,Math.PI/2)];break;default:e=[P.box(.1,.1,.1,8947848)]}let i=P.merge(e);return Tn.set(t,i),i}var Ye=[{uniform:5991238,uniform2:5003834,vest:3950898,helmet:5069884,accent:4034016,pack:4608570,pants:5595967,glove:3093288,name:"NORTHWIND",css:"#4a9cf0"},{uniform:10259046,uniform2:8746322,vest:7101763,helmet:8286035,accent:14700605,pack:8022605,pants:9272411,glove:3813926,name:"IRONSIDE",css:"#f05a48"}],Ih=[14726287,13013104,9263676,15780008,11040079];function af(o,t,e,i,n,s,a,r,l){let c=i-o,h=n-t,u=s-e,d=Math.hypot(c,h,u),f=P.box(a,l||a,d,r),p=new Rt().lookAt(new R(0,0,0),new R(c,h,u),new R(0,1,0));return f.applyMatrix4(p),f.translate((o+i)/2,(t+n)/2,(e+s)/2),f}var v1={R:{rifle:[[-.03,-.24,-.1],[-.15,-.14,-.33]],pistol:[[-.04,-.22,-.14],[-.17,-.12,-.42]],gadget:[[-.04,-.26,-.08],[-.12,-.2,-.3]]},L:{rifle:[[.06,-.24,-.3],[.24,-.12,-.66]],pistol:[[.08,-.24,-.16],[.22,-.14,-.4]],gadget:[[.02,-.28,-.06],[.1,-.26,-.24]]}};function lf(o,t,e){let[i,n]=v1[o][t];return P.merge([P.box(.13,.12,.13,e.uniform,0,-.02,0),af(0,-.02,0,i[0],i[1],i[2],.11,e.uniform,.105),P.box(.1,.1,.1,e.uniform2,i[0],i[1],i[2]),af(i[0],i[1],i[2],n[0],n[1],n[2],.095,e.uniform2,.09),P.box(.085,.085,.1,e.glove,n[0],n[1]+.005,n[2])])}function Ma(o,t,e=0){let i=Ye[o],n=Ih[e%Ih.length],s=Sn("soldier",{roughness:.85}),a=`s2_${o}_${t}_${e%Ih.length}`,r=Tn.get(a);if(!r){r={},r.pelvis=P.merge([P.box(.34,.17,.21,i.pants,0,-.03,0),P.box(.36,.05,.23,2828836,0,.06,0),P.box(.04,.04,.03,9075280,0,.06,-.12),P.box(.07,.13,.06,2763302,.2,-.04,.02),P.box(.08,.08,.07,i.vest,-.19,0,.04)]);let S=[P.box(.31,.2,.19,i.uniform,0,.1,0),P.box(.39,.28,.23,i.uniform,0,.34,0),P.box(.35,.3,.06,i.vest,0,.29,-.125),P.box(.35,.32,.06,i.vest,0,.3,.125),P.box(.06,.22,.24,i.vest,-.19,.27,0),P.box(.06,.22,.24,i.vest,.19,.27,0),P.box(.07,.1,.05,Xe(i.vest,.1),-.1,.2,-.17),P.box(.07,.1,.05,Xe(i.vest,.1),0,.2,-.17),P.box(.07,.1,.05,Xe(i.vest,.1),.1,.2,-.17),P.box(.06,.07,.04,2763302,.12,.36,-.165),P.box(.03,.02,.32,2763302,-.12,.47,0),P.box(.03,.02,.32,2763302,.12,.47,0),P.box(.13,.07,.13,n,0,.52,0),P.box(.09,.07,.01,i.accent,.205,.38,-.02)],w=i.pack;t==="medic"?S.push(P.box(.28,.3,.13,14211280,0,.3,.2),P.box(.1,.035,.01,13639712,0,.32,.27),P.box(.035,.1,.01,13639712,0,.32,.27)):t==="support"?S.push(P.box(.3,.32,.15,w,0,.3,.2),P.box(.24,.12,.12,3820074,0,.08,.22)):t==="engineer"?S.push(P.box(.26,.3,.13,w,0,.28,.19),P.cyl(.05,.05,.62,7,4872762,.13,.46,.22,.35)):t==="recon"?S.push(P.box(.26,.26,.12,w,0,.26,.19),P.cyl(.07,.07,.32,8,5920320,0,.46,.22,0,0,Math.PI/2)):t==="leader"?S.push(P.box(.24,.28,.12,w,0,.28,.19),P.box(.015,.4,.015,2236962,-.09,.62,.22)):S.push(P.box(.26,.24,.1,w,0,.27,.18),P.box(.12,.12,.05,Xe(w,.1),0,.22,.25)),r.torso=P.merge(S);let T=[P.box(.2,.22,.21,n,0,.12,0),P.box(.04,.05,.03,Xe(n,.05),0,.11,-.115),P.box(.035,.02,.01,2236962,-.05,.15,-.106),P.box(.035,.02,.01,2236962,.05,.15,-.106),P.box(.03,.06,.05,n,-.105,.12,0),P.box(.03,.06,.05,n,.105,.12,0)];t==="recon"?T.push(P.cyl(.21,.21,.02,10,i.helmet,0,.215,0),P.cyl(.12,.13,.1,10,i.helmet,0,.27,0)):t==="leader"?T.push(P.box(.23,.09,.23,i.helmet,0,.245,0),P.box(.21,.02,.09,i.helmet,0,.21,-.14),P.box(.04,.09,.08,2236962,.12,.13,0),P.box(.04,.09,.08,2236962,-.12,.13,0),P.box(.24,.015,.03,2236962,0,.21,0)):(T.push(x1(.155,i.helmet,.17),P.box(.3,.02,.3,i.helmet,0,.17,0)),T.push(P.box(.05,.04,.03,2763302,0,.25,-.15)),o===1&&T.push(P.box(.19,.04,.02,2236962,0,.2,-.155)),t==="medic"&&T.push(P.box(.05,.015,.01,13639712,0,.27,.15),P.box(.015,.05,.01,13639712,0,.27,.15))),r.head=P.merge(T),r.thigh=P.merge([P.box(.15,.44,.17,i.pants,0,-.22,0),P.box(.04,.12,.1,Xe(i.pants,.08),.085,-.24,0)]),r.shin=P.merge([P.box(.13,.4,.14,i.pants,0,-.2,0),P.box(.14,.12,.05,i.vest,0,-.03,-.08),P.box(.15,.11,.27,2762274,0,-.42,-.04),P.box(.155,.03,.28,1710102,0,-.475,-.04)]);for(let A of["rifle","pistol","gadget"])r["armR_"+A]=lf("R",A,i),r["armL_"+A]=lf("L",A,i);Tn.set(a,r)}let l=S=>{let w=new Ot(S,s);return w.castShadow=!0,w.receiveShadow=!0,w},c=new ue,h=new ue;h.position.y=.95,c.add(h);let u=new ue;h.add(u),u.add(l(r.pelvis));let d=new ue;d.position.y=.06,h.add(d),d.add(l(r.torso));let f=new ue;f.position.y=.55,d.add(f),f.add(l(r.head));let p=new ue;p.position.set(0,.44,0),d.add(p);let x=new ue;x.position.set(.21,0,0),p.add(x);let g=new ue;g.position.set(-.21,0,0),p.add(g);let m=l(r.armR_rifle),v=l(r.armL_rifle);x.add(m),g.add(v);let y=new ue;y.position.set(.06,-.11,-.33),p.add(y);let M=[];for(let S of[-1,1]){let w=new ue;w.position.set(S*.095,-.06,0),u.add(w),w.add(l(r.thigh));let T=new ue;T.position.y=-.44,w.add(T),T.add(l(r.shin)),M.push({thigh:w,shin:T})}return{root:c,body:h,pelvis:u,spine:d,hips:h,torso:d,head:f,aim:p,armR:x,armL:g,armRMesh:m,armLMesh:v,weapon:y,legs:M,weaponMesh:null,mat:s,geos:r,pose:"rifle"}}function ba(o,t,e="rifle"){o.weaponMesh&&o.weapon.remove(o.weaponMesh);let i=new Ot(t,Sn("weapon",{roughness:.6,metalness:.25}));if(i.castShadow=!0,o.weapon.add(i),o.weaponMesh=i,e!==o.pose&&(o.pose=e,o.armRMesh.geometry=o.geos["armR_"+e],o.armLMesh.geometry=o.geos["armL_"+e],o.weapon.position.set(.06,-.11,e==="pistol"?-.42:e==="gadget"?-.3:-.33)),o.outlined&&(M1(o),o.outlines))for(let n of o.outlines)n.visible=o.outlineOn!==!1}var y1=new Jt({uniforms:{uColor:{value:new dt(1,.1,.06)},uWidth:{value:.0032}},vertexShader:`
    uniform float uWidth;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 n = normalize(normalMatrix * normal);
      float d = clamp(-mv.z, 1.2, 40.0); // constant on screen up close, thinner far away
      mv.xyz += n * uWidth * d;
      mv.z -= 0.09; // sit just behind the soldier's own parts so only the silhouette shows
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:"uniform vec3 uColor; void main() { gl_FragColor = vec4(uColor, 1.0); }",side:Fe}),Lh=new WeakMap;function cf(o){if(Lh.has(o))return Lh.get(o);let t=o.attributes.position,e=new Map,i=r=>`${Math.round(t.getX(r)*1e3)},${Math.round(t.getY(r)*1e3)},${Math.round(t.getZ(r)*1e3)}`,n=o.attributes.normal;for(let r=0;r<t.count;r++){let l=i(r),c=e.get(l)||[0,0,0];c[0]+=n.getX(r),c[1]+=n.getY(r),c[2]+=n.getZ(r),e.set(l,c)}let s=new Float32Array(t.count*3);for(let r=0;r<t.count;r++){let l=e.get(i(r)),c=Math.hypot(l[0],l[1],l[2])||1;s[r*3]=l[0]/c,s[r*3+1]=l[1]/c,s[r*3+2]=l[2]/c}let a=new de;return a.setAttribute("position",t),a.setAttribute("normal",new he(s,3)),o.index&&a.setIndex(o.index),a.boundingSphere=o.boundingSphere,a.boundingBox=o.boundingBox,Lh.set(o,a),a}function hf(o,t){if(o.userData.outline){o.userData.outline.geometry=cf(o.geometry);return}let e=new Ot(cf(o.geometry),y1);e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1,e.userData.isOutline=!0,o.add(e),o.userData.outline=e,t.outlines.push(e)}function uf(o,t=!0){if(!o.outlines){o.outlines=[];let e=[];o.root.traverse(i=>{i.isMesh&&!i.userData.isOutline&&e.push(i)});for(let i of e)hf(i,o);o.outlined=!0}for(let e of o.outlines)e.visible=t}function M1(o){if(!o.outlined)return;let t=[];o.root.traverse(e=>{e.isMesh&&!e.userData.isOutline&&t.push(e)});for(let e of t)hf(e,o)}var df="fireline.keybinds.v1",_a=[{group:"Movement"},{id:"forward",label:"Move forward",def:"KeyW"},{id:"back",label:"Move back",def:"KeyS"},{id:"left",label:"Strafe left",def:"KeyA"},{id:"right",label:"Strafe right",def:"KeyD"},{id:"sprint",label:"Sprint \xB7 hold breath when scoped",def:"ShiftLeft"},{id:"jump",label:"Jump / vault / climb",def:"Space"},{id:"crouch",label:"Crouch (slide while sprinting)",def:"KeyC"},{id:"crouchHold",label:"Crouch (always hold)",def:"ControlLeft"},{id:"prone",label:"Prone",def:"KeyZ"},{id:"leanL",label:"Lean left",def:"KeyQ"},{id:"leanR",label:"Lean right",def:"KeyE"},{group:"Combat"},{id:"fire",label:"Fire",def:"Mouse0"},{id:"ads",label:"Aim down sights \xB7 detonate C4",def:"Mouse2"},{id:"reload",label:"Reload",def:"KeyR"},{id:"firemode",label:"Fire mode",def:"KeyB"},{id:"melee",label:"Melee (knife)",def:"KeyV"},{id:"grenade",label:"Quick grenade",def:"KeyG"},{id:"slot1",label:"Primary weapon",def:"Digit1"},{id:"slot2",label:"Sidearm",def:"Digit2"},{id:"slot3",label:"Gadget 1",def:"Digit3"},{id:"slot4",label:"Gadget 2",def:"Digit4"},{id:"slot5",label:"Throwable",def:"Digit5"},{group:"Squad & utility"},{id:"interact",label:"Revive / heal (hold)",def:"KeyF"},{id:"bandage",label:"Bandage",def:"KeyX"},{id:"spot",label:"Spot enemy \xB7 squad order",def:"KeyT"},{id:"light",label:"Flashlight",def:"KeyL"},{id:"scoreboard",label:"Scoreboard",def:"Tab"},{id:"map",label:"Map",def:"KeyM"},{group:"Trackpad & accessibility"},{id:"lookLeft",label:"Look left",def:"ArrowLeft"},{id:"lookRight",label:"Look right",def:"ArrowRight"},{id:"lookUp",label:"Look up",def:"ArrowUp"},{id:"lookDown",label:"Look down",def:"ArrowDown"}],ff={Mouse0:"LMB",Mouse1:"MMB",Mouse2:"RMB",Mouse3:"Mouse 4",Mouse4:"Mouse 5",Space:"Space",Tab:"Tab",Escape:"Esc",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",CapsLock:"Caps",Enter:"Enter",Backspace:"Bksp",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192"};function b1(o){return o?ff[o]?ff[o]:o.startsWith("Key")?o.slice(3):o.startsWith("Digit")?o.slice(5):o.startsWith("Numpad")?"Num "+o.slice(6):o:"\u2014"}var kh=class{constructor(){this.map={};for(let t of _a)t.id&&(this.map[t.id]=t.def);try{let t=localStorage.getItem(df);t&&Object.assign(this.map,JSON.parse(t))}catch{}}code(t){return this.map[t]}name(t){return b1(this.map[t])}set(t,e){this.map[t]=e,this.save()}reset(){for(let t of _a)t.id&&(this.map[t.id]=t.def);this.save()}save(){try{localStorage.setItem(df,JSON.stringify(this.map))}catch{}}conflicts(){let t={},e=new Set;for(let[i,n]of Object.entries(this.map))t[n]?(e.add(i),e.add(t[n])):t[n]=i;return e}down(t,e){return t.isDown(this.map[e])}hit(t,e){return t.isHit(this.map[e])}released(t,e){return t.isReleased(this.map[e])}},pe=new kh;function _1(o,t,e){return P.merge([P.cyl(.16*e,.26*e,3*e,6,5915186,o,1.5*e,t),P.cone(2.2*e,3.2*e,7,3103278,o,3.4*e,t,.12),P.cone(1.7*e,2.7*e,7,3499317,o,5.1*e,t,.12),P.cone(1.1*e,2.2*e,7,3960889,o,6.6*e,t,.12)])}var wa=class{constructor(t){this.renderer=t,this.scene=new Bi,this.scene.background=new dt(10466500),this.scene.fog=new Fo(10466500,30,75),this.camera=new be(42,1,.1,200),this.t=0,this.build()}build(){let t=this.scene,e=new sn(13163760,5918784,1.2);t.add(e);let i=new bi(16773336,3.2);i.position.set(12,18,8),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);let n=i.shadow.camera;n.left=-14,n.right=14,n.top=14,n.bottom=-14,n.near=1,n.far=60,i.shadow.bias=-5e-4,i.shadow.normalBias=.03,t.add(i);let s=new ks(60,64,0,Math.PI*2);s.rotateX(-Math.PI/2);let a=s.attributes.position,r=new Float32Array(a.count*3),l=new dt(6983484),c=new dt(9074006),h=new dt;for(let x=0;x<a.count;x++){let g=a.getX(x),m=a.getZ(x),v=Math.hypot(g,m);a.setY(x,Math.sin(g*.35)*.15+Math.cos(m*.27)*.15+Math.max(0,v-18)*.12+(v>20?Math.sin(g*.2+m*.15)*1.5:0));let y=Math.max(0,1-Math.hypot(g-1,m+1)/5)+(Math.sin(g*.7)*Math.cos(m*.5)>.6?.4:0);h.copy(l).lerp(c,Math.min(1,y)),r[x*3]=h.r,r[x*3+1]=h.g,r[x*3+2]=h.b}s.setAttribute("color",new he(r,3)),s.computeVertexNormals();let u=new Ot(s,new fe({vertexColors:!0,roughness:1,map:si("grass")}));u.receiveShadow=!0,t.add(u);let d=[];for(let x=0;x<6;x++)d.push(P.box(1,.95,.6,12100474,-2.5+x*1,.47,-2.2,0,.05*(x%2)));for(let x=0;x<4;x++)d.push(P.box(1,.5,.6,11047786,-2+x*1,1.2,-2.2));d.push(P.box(1.2,1.2,1.2,10255186,4.2,.6,1.5,0,.3),P.box(1,1,1,11570527,4.6,1.7,1.4,0,.6)),d.push(P.box(2.4,2.6,6,3104651,-7,1.3,4,0,.4));for(let[x,g,m]of[[-9,-8,1.2],[8,-10,1],[11,4,1.3],[-12,2,.9],[3,-14,1.1],[-4,12,1],[14,-4,.8]])d.push(_1(x,g,m));let f=new Ot(P.merge(d),new fe({vertexColors:!0,roughness:.9,flatShading:!0}));f.castShadow=!0,f.receiveShadow=!0,t.add(f),this.rigs=[];let p=(x,g,m,v,y,M,S)=>{let w=Ma(x,g,Math.floor(Math.random()*5)),T=Rr(m,{sight:"reddot"});return ba(w,T.geo,T.pistol?"pistol":"rifle"),w.root.position.set(v,0,y),w.root.rotation.y=M,w.root.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),t.add(w.root),this.rigs.push({rig:w,pose:S,phase:Math.random()*6}),w};p(0,"assault","m4a1",-.8,-1.2,.2,"kneel"),p(0,"support","m249",1.6,-1,-.15,"stand"),p(0,"medic","mp7",.2,1.6,2.6,"crouchwalk"),p(0,"recon","l96",-3.2,1,.5,"prone")}pose(t,e){let{rig:i,pose:n}=t,s=Math.sin(e*1.6+t.phase)*.01;i.body.position.y=.95+s,i.aim.rotation.x=.02+s,i.spine.rotation.x=.03;let a=i.legs;n==="kneel"?(i.body.position.y=.62+s,i.body.rotation.x=-.08,a[0].thigh.rotation.x=.25,a[0].shin.rotation.x=-1.75,a[1].thigh.rotation.x=1.1,a[1].shin.rotation.x=-1.65,i.aim.rotation.x=.05+s,i.head.rotation.y=Math.sin(e*.4)*.15):n==="prone"?(i.body.position.y=.2,i.body.rotation.x=-1.47,i.aim.rotation.x=1.47,i.head.rotation.x=1.15,a[0].thigh.rotation.z=.18,a[1].thigh.rotation.z=-.18):n==="crouchwalk"?(i.body.position.y=.66+s,i.spine.rotation.x=.08,a[0].thigh.rotation.x=.9,a[0].shin.rotation.x=-1.4,a[1].thigh.rotation.x=.6,a[1].shin.rotation.x=-1.2,i.aim.rotation.x=-.25):(i.spine.rotation.y=Math.sin(e*.3+t.phase)*.12,i.head.rotation.x=-.05,a[0].thigh.rotation.x=.08,a[1].thigh.rotation.x=-.05,a[0].thigh.rotation.z=.06,a[1].thigh.rotation.z=-.06)}render(t,e,i){this.t+=t;let n=this.t,s=n*.06+.9;this.camera.position.set(Math.cos(s)*9.5,2.6+Math.sin(n*.13)*.4,Math.sin(s)*9.5),this.camera.lookAt(-.6,.9,0),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();for(let a of this.rigs)this.pose(a,n);this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}},Sa=class{constructor(t){this.canvas=t;try{this.renderer=new Ls({canvas:t,antialias:!0,alpha:!0})}catch{this.renderer=null;return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.toneMapping=Yn,this.renderer.outputColorSpace=Te,this.scene=new Bi,this.scene.add(new sn(15265528,4208688,1.6));let e=new bi(16777215,2.4);e.position.set(2,3,2),this.scene.add(e);let i=new bi(10139903,1);i.position.set(-3,1,-2),this.scene.add(i),this.camera=new be(30,2,.05,20),this.group=new ue,this.scene.add(this.group),this.mat=new fe({vertexColors:!0,roughness:.55,metalness:.25,side:Re}),this.t=0,this.key=null}set(t,e){if(!this.renderer)return;let i=t+JSON.stringify(e);if(i===this.key)return;this.key=i,this.group.clear();let n=Rr(t,e),s=new Ot(n.geo,this.mat);n.geo.computeBoundingBox();let a=n.geo.boundingBox,r=a.getCenter(new R);s.position.set(-r.x,-r.y,-r.z),this.group.add(s),this.size=a.getSize(new R).length()}render(t){if(!this.renderer)return;this.t+=t;let e=this.canvas.clientWidth,i=this.canvas.clientHeight;if(!e||!i)return;this.canvas.width!==Math.floor(e*this.renderer.getPixelRatio())&&this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();let n=(this.size||1)*1.05;this.camera.position.set(.15*n,.18*n,n),this.camera.lookAt(0,0,0),this.group.rotation.y=Math.PI/2+Math.sin(this.t*.6)*.5,this.group.rotation.x=Math.sin(this.t*.4)*.05,this.renderer.render(this.scene,this.camera)}};var w1={assault:'<path d="M2 13h13l3-2h4v2h-3l-1 2H9l-1 3H5l1-3H2z"/>',medic:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',engineer:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',support:'<path d="M4 8h16v11H4zM8 5h8v3H8zM7 11h2v5H7zm4 0h2v5h-2zm4 0h2v5h-2z"/>',recon:'<path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="1.5"/>',leader:'<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/>'},S1=o=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">${w1[o]||""}</svg>`;function T1(o){let t=document.createElement("template");return t.innerHTML=o.trim(),t.content.firstElementChild}var Ta=class{constructor(t){this.app=t,this.root=document.getElementById("ui"),this.screens={},this.loadout=this.loadSavedLoadout()}loadSavedLoadout(){try{let t=JSON.parse(localStorage.getItem("fireline.loadout")||"null");if(t&&t.cls&&Je[t.primary])return t}catch{}return{cls:"assault",primary:"m4a1",att:Er("m4a1"),secondary:"m9",satt:{sight:"iron",barrel:"none",grip:"none",rail:"none"},throwable:"frag",armor:"light"}}saveLoadout(){try{localStorage.setItem("fireline.loadout",JSON.stringify(this.loadout))}catch{}}hideAll(){for(let t in this.screens)this.screens[t].style.display="none"}screen(t,e){this.screens[t]&&this.screens[t].remove();let i=T1(`<div class="screen ${t}">${e}</div>`);return this.root.appendChild(i),this.screens[t]=i,i}click(t){t.addEventListener("click",()=>this.app.audio.play2d("ui",{vol:.3}))}showMain(){this.hideAll();let t=0;try{t=Number(localStorage.getItem("fireline.xp")||0)}catch{}let e=Math.floor(Math.sqrt(t/400))+1,i=this.screen("main",`
      <div class="mm-left">
        <div class="title"><h1>FIRE<span>LINE</span></h1><div class="sub">16 vs 16 infantry warfare</div></div>
        <div class="menu-col">
          <button class="btn big primary" data-a="play">Play</button>
          <button class="btn big" data-a="settings">Settings</button>
          <button class="btn big" data-a="controls">Controls</button>
        </div>
        <div class="mm-rank"><b>RANK ${e}</b><span>${t} XP</span></div>
      </div>
      <div class="mm-info">
        <div><b>${Object.keys(Ws).length}</b><span>maps</span></div><div><b>3</b><span>modes</span></div><div><b>31</b><span>AI soldiers</span></div><div><b>6</b><span>classes</span></div>
      </div>
      <div class="foot">Every model, texture and sound is generated in code.</div>`);i.querySelector("[data-a=play]").onclick=()=>this.showSetup(),i.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showMain()),i.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showMain()),i.querySelectorAll("button").forEach(n=>this.click(n)),i.style.display="flex"}showSetup(){this.hideAll();let t=this.app.matchConfig,e=Object.values(Ws),i=this.screen("setup",`
      <div class="panel wide">
        <h2>Match setup</h2>
        <div class="mapcards">${e.map(a=>`<div class="mapcard${t.map===a.id?" on":""}" data-map="${a.id}"><div class="mc-img mc-${a.id}"></div><b>${a.name}</b><span>${a.playHalf*2}m play area \xB7 ${a.biome}</span><p>${a.desc}</p></div>`).join("")}</div>
        <div class="row3">
          <label>Mode<select data-k="mode">${Object.entries(qs).map(([a,r])=>`<option value="${a}"${t.mode===a?" selected":""}>${r.name}</option>`).join("")}</select><small class="mdesc"></small></label>
          <label>Time of day<select data-k="time"><option value="default">Map default</option>${["morning","noon","afternoon","dusk","overcast","snow","night"].map(a=>`<option value="${a}"${t.time===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Bot difficulty<select data-k="difficulty">${["recruit","regular","veteran","elite"].map(a=>`<option value="${a}"${this.app.settings.get("difficulty")===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Your team<select data-k="team"><option value="0"${t.team===0?" selected":""}>${Ye[0].name}</option><option value="1"${t.team===1?" selected":""}>${Ye[1].name}</option></select></label>
          <label>Tickets / kill limit<select data-k="tickets"><option value="0">Mode default</option><option value="150">150</option><option value="250">250</option><option value="400">400</option><option value="600">600</option></select></label>
          <label>Callsign<input data-k="name" maxlength="14" value="${t.name}"></label>
        </div>
        <div class="note">16 vs 16 \u2014 you plus 31 AI soldiers in 8 squads of four.</div>
        <div class="btnrow"><button class="btn" data-a="back">Back</button><button class="btn primary" data-a="start">Start match</button></div>
      </div>`),n=i.querySelector(".mdesc"),s=()=>{n.textContent=qs[i.querySelector("[data-k=mode]").value].desc};s(),i.querySelector("[data-k=mode]").onchange=s,i.querySelectorAll(".mapcard").forEach(a=>a.onclick=()=>{i.querySelectorAll(".mapcard").forEach(r=>r.classList.remove("on")),a.classList.add("on"),t.map=a.dataset.map,this.app.audio.play2d("ui",{vol:.3})}),i.querySelector("[data-a=back]").onclick=()=>this.showMain(),i.querySelector("[data-a=start]").onclick=()=>{t.mode=i.querySelector("[data-k=mode]").value,t.time=i.querySelector("[data-k=time]").value,t.team=Number(i.querySelector("[data-k=team]").value),t.tickets=Number(i.querySelector("[data-k=tickets]").value),t.name=(i.querySelector("[data-k=name]").value||"You").slice(0,14),this.app.settings.set("difficulty",i.querySelector("[data-k=difficulty]").value),this.app.startMatch()},i.querySelectorAll("button").forEach(a=>this.click(a)),i.style.display="flex"}showLoading(t,e){let i=this.screens.loading;(!i||i.style.display==="none")&&(this.hideAll(),i=this.screen("loading",'<div class="loadbox"><h2>FIRE<span>LINE</span></h2><div class="lt"></div><div class="lbar"><div></div></div><div class="tip"></div></div>'),i.style.display="flex"),i.querySelector(".lt").textContent=t,i.querySelector(".lbar div").style.width=`${Math.round(e*100)}%`;let n=["Downed teammates can be revived by anyone \u2014 medics revive to full health.","Bandage [X] to stop bleeding before it drops you.","Engineers can blow holes in walls with RPGs and C4.","Suppressors keep you off the enemy minimap.","Bots react to gunfire, footsteps and muzzle flashes. Flank them.","Squad leaders press [T] on a flag to give orders.","Spawn on your squad leader or a rally point to stay in the fight."];i.dataset.tip||(i.dataset.tip=1,i.querySelector(".tip").textContent=n[Math.floor(Math.random()*n.length)])}showDeploy(t){this.hideAll();let e=this.screen("deploy",`
      <div class="deploy-left panel">
        <h3>Class</h3><div class="classes"></div>
        <div class="cdesc"></div>
        <h3>Primary</h3><canvas class="wprev"></canvas><div class="wlist"></div>
        <div class="wstats"></div>
        <div class="atts"></div>
        <h3>Sidearm & equipment</h3>
        <div class="row2"><label>Sidearm<select data-k="secondary"></select></label><label>Throwable<select data-k="throwable"></select></label><label>Armor<select data-k="armor"><option value="light">Light (faster)</option><option value="heavy">Heavy (\u221214% body dmg)</option></select></label><label>Sidearm barrel<select data-k="sbarrel"><option value="none">None</option><option value="suppressor">Suppressor</option></select></label></div>
        <div class="gadgets"></div>
      </div>
      <div class="deploy-right panel">
        <div class="dhead"><b class="dteam"></b><span class="dsquad"></span></div>
        <canvas class="dmap" width="720" height="720"></canvas>
        <div class="dfoot"><div class="dkill"></div><div class="dspawn"></div><button class="btn primary big dbtn">Deploy</button></div>
      </div>`);this.deployEl=e,this.game=t,this.buildClassUI();let i=e.querySelector(".dmap");i.onclick=n=>{let s=i.getBoundingClientRect(),a=(n.clientX-s.left)/s.width*i.width,r=(n.clientY-s.top)/s.height*i.height,l=null,c=30;for(let h of this.spawns||[]){let u=Math.hypot(h._mx-a,h._my-r);u<c&&(c=u,l=h)}l&&(this.selectedSpawn=l,this.app.audio.play2d("ui",{vol:.3}))},e.querySelector(".dbtn").onclick=()=>this.tryDeploy(),e.style.display="flex",this.selectedSpawn=null}buildClassUI(){let t=this.deployEl,e=this.loadout;t.querySelector(".classes").innerHTML=Object.entries(di).map(([u,d])=>`<button class="cls${e.cls===u?" on":""}" data-c="${u}" style="--cc:${d.color}">${S1(u)}<b>${d.name}</b></button>`).join(""),t.querySelectorAll(".cls").forEach(u=>u.onclick=()=>{e.cls=u.dataset.c;let d=ma(e.cls);d.includes(e.primary)||(e.primary=d[0],e.att=Er(e.primary)),(e.cls==="medic"||e.cls==="leader")&&(["smoke","frag"].includes(e.throwable)||(e.throwable="smoke")),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let i=di[e.cls];t.querySelector(".cdesc").innerHTML=`<b style="color:${i.color}">${i.name}</b> \u2014 ${i.desc}${e.cls==="leader"?"<br><i>You will lead your squad. Press [T] at a flag to order it.</i>":""}`;let n=ma(e.cls);t.querySelector(".wlist").innerHTML=n.map(u=>`<button class="wbtn${e.primary===u?" on":""}" data-w="${u}"><b>${Je[u].name}</b><span>${Je[u].type.toUpperCase()}</span></button>`).join(""),t.querySelectorAll(".wbtn").forEach(u=>u.onclick=()=>{e.primary=u.dataset.w,e.att=Er(e.primary),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let s=Je[e.primary],a=(u,d)=>`<div class="stat"><span>${u}</span><div><i style="width:${Math.max(4,Math.min(100,d))}%"></i></div></div>`;t.querySelector(".wstats").innerHTML=a("Damage",s.dmg*(s.pellets||1)/1.1)+a("Fire rate",s.rpm/11)+a("Range",s.r1/4)+a("Control",100-s.recoilV*40)+a("Mobility",(s.moveMul-.8)*400)+`<div class="wnum">${s.rpm} RPM \xB7 ${s.vel} m/s \xB7 ${s.mag} rds \xB7 ${s.modes.join("/")}</div>`,t.querySelector(".atts").innerHTML=["sight","barrel","grip","rail"].map(u=>`<label>${u[0].toUpperCase()+u.slice(1)}<select data-slot="${u}">${Ch(e.primary,u).map(d=>`<option value="${d}"${e.att[u]===d?" selected":""}>${Xs[u][d].name}</option>`).join("")}</select></label>`).join(""),t.querySelectorAll(".atts select").forEach(u=>u.onchange=()=>{e.att[u.dataset.slot]=u.value,this.saveLoadout()});let r=t.querySelector("[data-k=secondary]");r.innerHTML=pa.map(u=>`<option value="${u}"${e.secondary===u?" selected":""}>${Je[u].name}</option>`).join(""),r.onchange=()=>{e.secondary=r.value,this.saveLoadout()};let l=t.querySelector("[data-k=throwable]");l.innerHTML=Xd.map(u=>`<option value="${u}"${e.throwable===u?" selected":""}>${rn[u].name}</option>`).join(""),l.onchange=()=>{e.throwable=l.value,this.saveLoadout()};let c=t.querySelector("[data-k=armor]");c.value=e.armor||"light",c.onchange=()=>{e.armor=c.value,this.saveLoadout()};let h=t.querySelector("[data-k=sbarrel]");h.value=e.satt.barrel,h.onchange=()=>{e.satt.barrel=h.value,this.saveLoadout()},t.querySelector(".gadgets").innerHTML="<h3>Class gadgets</h3>"+i.gadgets.map((u,d)=>`<div class="gad"><i>${d+3}</i>${rn[u].name}${rn[u].count!==1/0?` \xD7${rn[u].count}`:""}</div>`).join("")+`<div class="gad"><i>5</i>${rn[e.throwable].name} \xD7${i.throwables}</div><div class="gad"><i>X</i>Bandage \xD74</div>`,this.saveLoadout()}updateDeploy(t){let e=this.deployEl;if(!e||e.style.display==="none")return;let i=t.player,n=e.querySelector(".wprev");n&&((!this.preview||this.preview.canvas!==n)&&(this.preview&&this.preview.renderer&&this.preview.renderer.dispose(),this.preview=new Sa(n)),this.preview.set(this.loadout.primary,this.loadout.att),this.preview.render(1/60)),this.spawns=t.spawnOptions(i),!this.selectedSpawn||!this.spawns.find(l=>l.key===this.selectedSpawn.key)?this.selectedSpawn=this.spawns.find(l=>l.kind==="squad")||this.spawns.find(l=>l.kind==="flag")||this.spawns[0]:this.selectedSpawn=this.spawns.find(l=>l.key===this.selectedSpawn.key),t.hud.drawMap(e.querySelector(".dmap"),!0,this.spawns,this.selectedSpawn);let s=Math.max(0,t.respawnAt-t.time),a=e.querySelector(".dbtn");a.textContent=s>0?`Deploy in ${s.toFixed(1)}s`:"Deploy [Space]",a.classList.toggle("wait",s>0),e.querySelector(".dteam").textContent=Ye[i.team].name,e.querySelector(".dteam").style.color=Ye[i.team].css,e.querySelector(".dsquad").textContent=i.squad?`${i.squad.name} squad \xB7 ${t.modeName} \xB7 ${t.world.def.name}`:"",e.querySelector(".dspawn").textContent=this.selectedSpawn?`Spawn: ${this.selectedSpawn.label}`:"";let r=t.lastDeath;e.querySelector(".dkill").innerHTML=r?`${r.killer?`Killed by <b style="color:#ff6a5a">${r.killer}</b>`:"You died"} ${r.weapon?`\xB7 ${r.weapon}`:""} ${r.dist?`\xB7 ${Math.round(r.dist)}m`:""}${r.head?" \xB7 headshot":""}`:"Choose your class, loadout and spawn point.",(t.input.hit("Space")||t.input.hit("Enter")||t.input.hit("NumpadEnter"))&&this.tryDeploy()}tryDeploy(){let t=this.game;!t||t.time<t.respawnAt||!this.selectedSpawn||(this.saveLoadout(),t.deployPlayer(JSON.parse(JSON.stringify(this.loadout)),this.selectedSpawn))}showPause(t){this.hideAll();let e=this.screen("pause",`
      <div class="panel">
        <h2>Paused</h2>
        <div class="menu-col">
          <button class="btn big primary" data-a="resume">Resume</button>
          ${t.player.state!=="dead"?'<button class="btn big" data-a="redeploy">Redeploy (change class)</button>':""}
          <button class="btn big" data-a="settings">Settings</button>
          <button class="btn big" data-a="controls">Controls</button>
          <button class="btn big" data-a="quit">Leave match</button>
        </div>
      </div>`);e.querySelector("[data-a=resume]").onclick=()=>this.app.resume();let i=e.querySelector("[data-a=redeploy]");i&&(i.onclick=()=>{t.player.die(null,"Redeploy",!1,!0),this.app.resume()}),e.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showPause(t)),e.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showPause(t)),e.querySelector("[data-a=quit]").onclick=()=>this.app.quitMatch(),e.querySelectorAll("button").forEach(n=>this.click(n)),e.style.display="flex"}showSettings(t){this.hideAll();let e=this.app.settings,i='<div class="panel wide settings"><h2>Settings</h2><div class="setgrid">';for(let s of Gd){if(s.group){i+=`<h3>${s.group}</h3>`;continue}let a=e.get(s.key);s.type==="bool"?i+=`<label class="set"><span>${s.label}</span><input type="checkbox" data-k="${s.key}"${a?" checked":""}></label>`:s.type==="select"?i+=`<label class="set"><span>${s.label}${s.hint?`<small>${s.hint}</small>`:""}</span><select data-k="${s.key}">${s.options.map(r=>`<option value="${r}"${a===r?" selected":""}>${r}</option>`).join("")}</select></label>`:i+=`<label class="set"><span>${s.label}</span><input type="range" data-k="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${a}"><em>${a}</em></label>`}i+='</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>';let n=this.screen("settings",i);n.querySelectorAll("[data-k]").forEach(s=>{let a=s.dataset.k,r=s.type==="range"?"input":"change";s.addEventListener(r,()=>{let l;if(s.type==="checkbox"?l=s.checked:s.type==="range"?(l=Number(s.value),s.nextElementSibling.textContent=l):l=s.value,e.set(a,l),a==="preset"&&Vs[l]||a==="trackpadMode"&&l)this.showSettings(t);else if(a!=="preset"){let c=n.querySelector("[data-k=preset]");c&&(c.value=e.get("preset"))}})}),n.querySelector("[data-a=back]").onclick=t,n.style.display="flex"}showControls(t){this.hideAll();let e=pe.conflicts(),i='<div class="panel wide controls"><h2>Controls</h2><p class="hint">Click a key to rebind it, then press a key or mouse button. Esc cancels. Mouse wheel always cycles weapons.</p><div class="bindgrid">';for(let h of _a){if(h.group){i+=`<h3>${h.group}</h3>`;continue}let u=e.has(h.id)&&!["sprint"].includes(h.id);i+=`<div class="bind"><span>${h.label}</span><button class="key${u?" warn":""}" data-act="${h.id}" title="${u?"Shared with another action":""}">${pe.name(h.id)}</button></div>`}i+='</div><div class="btnrow"><button class="btn" data-a="reset">Reset to defaults</button><button class="btn primary" data-a="back">Done</button></div></div>';let n=this.screen("controls",i),s=null,a=()=>{window.removeEventListener("keydown",l,!0),window.removeEventListener("mousedown",c,!0),s=null},r=h=>{s&&(pe.set(s,h),a(),this.app.audio.play2d("ui",{vol:.3}),this.showControls(t))},l=h=>{if(h.preventDefault(),h.stopPropagation(),h.code==="Escape"){a(),this.showControls(t);return}r(h.code)},c=h=>{if(h.target&&h.target.classList&&h.target.classList.contains("key")&&h.target.dataset.act===s&&h.button===0&&!this._armed){this._armed=!0;return}h.preventDefault(),h.stopPropagation(),r("Mouse"+h.button)};n.querySelectorAll(".key").forEach(h=>h.addEventListener("click",()=>{s||(s=h.dataset.act,this._armed=!0,h.textContent="Press a key\u2026",h.classList.add("listen"),setTimeout(()=>{this._armed=!1,window.addEventListener("keydown",l,!0),window.addEventListener("mousedown",c,!0)},60))})),n.addEventListener("contextmenu",h=>h.preventDefault()),n.querySelector("[data-a=reset]").onclick=()=>{pe.reset(),this.showControls(t)},n.querySelector("[data-a=back]").onclick=()=>{a(),t()},n.style.display="flex"}showEnd(t,e){this.hideAll();let i=t.player,n=e===i.team,s=t.soldiers.slice().sort((p,x)=>x.stats.score-p.stats.score),a=s[0],r=s.indexOf(i)+1,l=0;try{l=Number(localStorage.getItem("fireline.xp")||0)}catch{}let c=i.stats.score+(n?500:150),h=p=>Math.floor(Math.sqrt(p/400))+1,u=h(l);l+=c;let d=h(l);try{localStorage.setItem("fireline.xp",String(l))}catch{}let f=this.screen("end",`
      <div class="panel wide">
        <h1 class="${e===-1?"draw":n?"win":"lose"}">${e===-1?"DRAW":n?"VICTORY":"DEFEAT"}</h1>
        <div class="endsub">${t.world.def.name} \xB7 ${t.modeName} \xB7 ${Ye[0].name} ${t.mode.type==="tdm"?t.mode.kills[0]:t.mode.tickets[0]} \u2014 ${t.mode.type==="tdm"?t.mode.kills[1]:t.mode.tickets[1]} ${Ye[1].name}</div>
        <div class="endstats">
          <div><b>${i.stats.score}</b><span>Score (#${r})</span></div><div><b>${i.stats.kills}</b><span>Kills</span></div><div><b>${i.stats.deaths}</b><span>Deaths</span></div>
          <div><b>${i.stats.assists}</b><span>Assists</span></div><div><b>${i.stats.revives}</b><span>Revives</span></div><div><b>${i.stats.caps}</b><span>Captures</span></div>
        </div>
        <div class="mvp">+${c} XP \xB7 Rank ${d}${d>u?' <b style="color:#ffcc4d">RANK UP!</b>':""} (${l} XP total)</div>
        <div class="mvp">MVP: <b style="color:${Ye[a.team].css}">${a.name}</b> \u2014 ${a.stats.score} pts, ${a.stats.kills} kills</div>
        <div class="btnrow"><button class="btn" data-a="menu">Main menu</button><button class="btn primary" data-a="again">Play again</button></div>
      </div>`);f.querySelector("[data-a=menu]").onclick=()=>this.app.quitMatch(),f.querySelector("[data-a=again]").onclick=()=>this.app.startMatch(),f.querySelectorAll("button").forEach(p=>this.click(p)),f.style.display="flex"}};var Ea=class{constructor(t,e){this.def=t,this.size=t.size,this.half=t.size/2,this.cell=t.cell,this.n=Math.round(t.size/t.cell)+1,this.waterLevel=t.waterLevel,this.noise=zi(t.seed),this.noise2=zi(t.seed+101),this.layout=e,this.heights=new Float32Array(this.n*this.n),this.roadMask=new Float32Array(this.n*this.n),this.riverDist=new Float32Array(this.n*this.n).fill(1e4),this.splat=new Float32Array(this.n*this.n*4),this.grass=new Uint8Array(this.n*this.n),this.generate()}idx(t,e){return e*this.n+t}worldX(t){return-this.half+t*this.cell}generate(){let{n:t,cell:e,half:i,def:n,noise:s}=this,a=this.heights;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=-i+u*e,f=-i+h*e;a[h*t+u]=n.height(d,f,s,this.noise2)}for(let h of this.layout.rivers||[]){let u=h.points;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let p=-i+f*e,x=-i+d*e,g=1e12;for(let w=0;w<u.length-1;w++){let T=Gs(p,x,u[w][0],u[w][1],u[w+1][0],u[w+1][1]);T<g&&(g=T)}let m=Math.sqrt(g)+s(p*.03,x*.03)*2.5,v=d*t+f;m<this.riverDist[v]&&(this.riverDist[v]=m);let y=h.width/2,M=h.depth;for(let w of h.fords||[]){let T=Math.hypot(p-w.x,x-w.z);T<w.r&&(M=Qt(w.depth,M,ke(w.r*.5,w.r,T)))}let S;m<y?S=this.waterLevel-M*(1-m/y*(m/y))-.3:S=this.waterLevel-.3+(m-y)*h.bankSlope,S<a[v]&&(a[v]=S)}}let r=this.blur(a,4);for(let h of this.layout.roads||[]){let u=h.points,d=h.width/2,f=Math.min(...u.map(S=>S[0]))-d-8,p=Math.max(...u.map(S=>S[0]))+d+8,x=Math.min(...u.map(S=>S[1]))-d-8,g=Math.max(...u.map(S=>S[1]))+d+8,m=Math.max(0,Math.floor((f+i)/e)),v=Math.min(t-1,Math.ceil((p+i)/e)),y=Math.max(0,Math.floor((x+i)/e)),M=Math.min(t-1,Math.ceil((g+i)/e));for(let S=y;S<=M;S++)for(let w=m;w<=v;w++){let T=-i+w*e,A=-i+S*e,_=1e12;for(let N=0;N<u.length-1;N++){let O=Gs(T,A,u[N][0],u[N][1],u[N+1][0],u[N+1][1]);O<_&&(_=O)}let b=Math.sqrt(_),C=1-ke(d*.7,d+1.5,b),L=S*t+w;C>this.roadMask[L]&&(this.roadMask[L]=C);let k=1-ke(d,d+7,b);this.riverDist[L]>3&&(a[L]=Qt(a[L],r[L]-.08*C,k*.85))}}for(let h of this.layout.flatZones||[]){let u=h.h!==void 0?h.h:this.sampleAvg(a,h.x,h.z,h.hw,h.hd);h.h=u;let d=h.margin||4,f=Math.max(0,Math.floor((h.x-h.hw-d+i)/e)),p=Math.min(t-1,Math.ceil((h.x+h.hw+d+i)/e)),x=Math.max(0,Math.floor((h.z-h.hd-d+i)/e)),g=Math.min(t-1,Math.ceil((h.z+h.hd+d+i)/e));for(let m=x;m<=g;m++)for(let v=f;v<=p;v++){let y=-i+v*e,M=-i+m*e,S=Math.max(0,Math.abs(y-h.x)-h.hw),w=Math.max(0,Math.abs(M-h.z)-h.hd),T=Math.sqrt(S*S+w*w),A=1-ke(0,d,T),_=m*t+v;a[_]=Qt(a[_],u,A*(h.strength??1)),h.noGrass&&T<1.5&&(this.grass[_]=255)}}this.computeNormals(),this.computeSplat();let l=-1/0,c=1/0;for(let h=0;h<a.length;h++)a[h]>l&&(l=a[h]),a[h]<c&&(c=a[h]);this.maxH=l,this.minH=c}blur(t,e){let{n:i}=this,n=new Float32Array(t.length),s=new Float32Array(t.length);for(let a=0;a<i;a++){let r=0,l=0;for(let c=-e;c<=e;c++){let h=Ft(c,0,i-1);r+=t[a*i+h],l++}for(let c=0;c<i;c++){n[a*i+c]=r/l;let h=Ft(c-e,0,i-1),u=Ft(c+e+1,0,i-1);r+=t[a*i+u]-t[a*i+h]}}for(let a=0;a<i;a++){let r=0,l=0;for(let c=-e;c<=e;c++){let h=Ft(c,0,i-1);r+=n[h*i+a],l++}for(let c=0;c<i;c++){s[c*i+a]=r/l;let h=Ft(c-e,0,i-1),u=Ft(c+e+1,0,i-1);r+=n[u*i+a]-n[h*i+a]}}return s}sampleAvg(t,e,i,n,s){let a=0,r=0;for(let l=-s;l<=s;l+=Math.max(1,s/3))for(let c=-n;c<=n;c+=Math.max(1,n/3))a+=this.heightAtArr(t,e+c,i+l),r++;return a/r}heightAtArr(t,e,i){let{n,cell:s,half:a}=this,r=(e+a)/s,l=(i+a)/s;r=Ft(r,0,n-1.001),l=Ft(l,0,n-1.001);let c=Math.floor(r),h=Math.floor(l),u=r-c,d=l-h,f=t[h*n+c],p=t[h*n+c+1],x=t[(h+1)*n+c],g=t[(h+1)*n+c+1];return(f*(1-u)+p*u)*(1-d)+(x*(1-u)+g*u)*d}heightAt(t,e){return this.heightAtArr(this.heights,t,e)}computeNormals(){let{n:t,cell:e}=this,i=this.heights;this.normals=new Float32Array(t*t*3);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let a=i[n*t+Math.max(0,s-1)],r=i[n*t+Math.min(t-1,s+1)],l=i[Math.max(0,n-1)*t+s],c=i[Math.min(t-1,n+1)*t+s],h=a-r,u=2*e,d=l-c,f=Math.hypot(h,u,d),p=(n*t+s)*3;this.normals[p]=h/f,this.normals[p+1]=u/f,this.normals[p+2]=d/f}}normalAt(t,e){let{n:i,cell:n,half:s}=this,a=Ft(Math.round((t+s)/n),0,i-1),l=(Ft(Math.round((e+s)/n),0,i-1)*i+a)*3;return[this.normals[l],this.normals[l+1],this.normals[l+2]]}computeSplat(){let{n:t,cell:e,half:i,def:n}=this;for(let s=0;s<t;s++)for(let a=0;a<t;a++){let r=s*t+a,l=-i+a*e,c=-i+s*e,h=this.heights[r],u=1-this.normals[r*3+1],d=this.grass[r]===255,f=n.splat(l,c,h,u,this.roadMask[r],this.riverDist[r],this.noise,d),p=f[0]+f[1]+f[2]+f[3]||1;this.splat[r*4]=f[0]/p,this.splat[r*4+1]=f[1]/p,this.splat[r*4+2]=f[2]/p,this.splat[r*4+3]=f[3]/p;let x=n.grassDensity(l,c,h,u,this.roadMask[r],this.riverDist[r],this.noise,f);d&&(x=0),this.waterLevel!==null&&h<this.waterLevel+.3&&(x=0),this.grass[r]=Ft(Math.round(x*255),0,254)}}raycast(t,e,i,n,s,a,r){if(e>this.maxH&&s>=0)return 1/0;let l=Math.max(.5,this.cell*.5),c=0,h=0,u=e-this.heightAt(t,i);if(u<0)return 0;for(;c<r;){c=Math.min(r,c+l);let d=t+n*c,f=e+s*c,p=i+a*c;if(f>this.maxH+.1&&s>=0)return 1/0;let x=f-this.heightAt(d,p);if(x<0){let g=h,m=c;for(let v=0;v<6;v++){let y=(g+m)*.5;e+s*y-this.heightAt(t+n*y,i+a*y)<0?m=y:g=y}return g}if(h=c,u=x,c>=r)break}return 1/0}buildMesh(t){let{n:e,cell:i,half:n,def:s}=this,a=new ue;a.name="terrain";let r=s.terrainTextures.map(si),l=si("noise"),c=new fe({color:16777215,roughness:.95,metalness:0}),h={uT0:{value:r[0]},uT1:{value:r[1]},uT2:{value:r[2]},uT3:{value:r[3]},uNoise:{value:l},uTint0:{value:new dt().setRGB(...s.palette.t0)},uTint1:{value:new dt().setRGB(...s.palette.t1)},uTint2:{value:new dt().setRGB(...s.palette.t2)},uTint3:{value:new dt().setRGB(...s.palette.t3)},uMacro:{value:new dt().setRGB(...s.palette.macro)}};jn(c,"terrain",p=>{Object.assign(p.uniforms,h),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat;
varying vec4 vSplat;
varying vec3 vTPos;
varying vec3 vTNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSplat = splat;
vTPos = (modelMatrix * vec4(position,1.0)).xyz;
vTNrm = normal;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
          uniform sampler2D uT0; uniform sampler2D uT1; uniform sampler2D uT2; uniform sampler2D uT3; uniform sampler2D uNoise;
          uniform vec3 uTint0; uniform vec3 uTint1; uniform vec3 uTint2; uniform vec3 uTint3; uniform vec3 uMacro;
          varying vec4 vSplat; varying vec3 vTPos; varying vec3 vTNrm;`).replace("#include <map_fragment>",`
          vec2 tuv = vTPos.xz * 0.16;
          float macroN = texture2D(uNoise, vTPos.xz * 0.0035).r;
          float macroN2 = texture2D(uNoise, vTPos.xz * 0.019).g;
          vec3 c0 = texture2D(uT0, tuv).rgb * uTint0;
          vec3 c0b = texture2D(uT0, tuv * 0.37 + 0.5).rgb * uTint0;
          c0 = mix(c0, c0b, 0.45);
          vec3 c1 = texture2D(uT1, tuv * 0.8).rgb * uTint1;
          vec3 an = abs(normalize(vTNrm)); an = pow(an, vec3(3.0)); an /= (an.x + an.y + an.z);
          vec3 c2 = (texture2D(uT2, vTPos.zy * 0.12).rgb * an.x + texture2D(uT2, vTPos.xz * 0.12).rgb * an.y + texture2D(uT2, vTPos.xy * 0.12).rgb * an.z) * uTint2;
          vec3 c3 = texture2D(uT3, tuv * 1.2).rgb * uTint3;
          vec4 sw = vSplat;
          // sharpen blend with noise for natural edges
          float hn = macroN2 * 0.5;
          sw = max(sw + vec4(hn, 0.0, 0.0, 0.0) * sw.x - 0.08, 0.0);
          sw /= max(sw.x + sw.y + sw.z + sw.w, 0.0001);
          vec3 tcol = c0 * sw.x + c1 * sw.y + c2 * sw.z + c3 * sw.w;
          tcol *= mix(vec3(1.0), uMacro, smoothstep(0.35, 0.75, macroN) * 0.6);
          tcol *= 0.88 + macroN2 * 0.24;
          diffuseColor.rgb *= tcol;`)}),c.userData.terrainUniforms=h,this.material=c;let u=48,d=e-1;for(let p=0;p<d;p+=u)for(let x=0;x<d;x+=u){let g=Math.min(u,d-x),m=Math.min(u,d-p),v=(g+1)*(m+1),y=new Float32Array(v*3),M=new Float32Array(v*3),S=new Float32Array(v*4),w=0;for(let C=0;C<=m;C++)for(let L=0;L<=g;L++){let k=x+L,N=p+C,O=N*e+k;y[w*3]=-n+k*i,y[w*3+1]=this.heights[O],y[w*3+2]=-n+N*i,M[w*3]=this.normals[O*3],M[w*3+1]=this.normals[O*3+1],M[w*3+2]=this.normals[O*3+2],S[w*4]=this.splat[O*4],S[w*4+1]=this.splat[O*4+1],S[w*4+2]=this.splat[O*4+2],S[w*4+3]=this.splat[O*4+3],w++}let T=new Uint32Array(g*m*6),A=0;for(let C=0;C<m;C++)for(let L=0;L<g;L++){let k=C*(g+1)+L,N=k+1,O=k+(g+1),U=O+1;L+C&1?(T[A++]=k,T[A++]=O,T[A++]=N,T[A++]=N,T[A++]=O,T[A++]=U):(T[A++]=k,T[A++]=O,T[A++]=U,T[A++]=k,T[A++]=U,T[A++]=N)}let _=new de;_.setAttribute("position",new he(y,3)),_.setAttribute("normal",new he(M,3)),_.setAttribute("splat",new he(S,4)),_.setIndex(new he(T,1)),_.computeBoundingBox(),_.computeBoundingSphere();let b=new Ot(_,c);b.receiveShadow=!0,b.castShadow=!0,a.add(b)}t.add(a),this.mesh=a;let f=new Uint16Array(e*e);for(let p=0;p<e*e;p++)f[p]=Id.toHalfFloat(this.heights[p]);return this.heightTex=new Hi(f,e,e,Os,Se),this.heightTex.minFilter=this.heightTex.magFilter=je,this.heightTex.needsUpdate=!0,this.grassTex=new Hi(this.grass,e,e,Os,hi),this.grassTex.minFilter=this.grassTex.magFilter=je,this.grassTex.needsUpdate=!0,a}renderMapImage(t=512,e){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),s=n.createImageData(t,t),a=s.data,r=this.def.mapColors;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let h=-this.half+(c+.5)/t*this.size,u=-this.half+(l+.5)/t*this.size,d=this.heightAt(h,u),f=Math.round((h+this.half)/this.cell),p=Math.round((u+this.half)/this.cell),x=Ft(p,0,this.n-1)*this.n+Ft(f,0,this.n-1),g=[this.splat[x*4],this.splat[x*4+1],this.splat[x*4+2],this.splat[x*4+3]],m=0,v=0,y=0;for(let A=0;A<4;A++)m+=r[A][0]*g[A],v+=r[A][1]*g[A],y+=r[A][2]*g[A];let M=this.heightAt(h+2,u)-this.heightAt(h-2,u),S=this.heightAt(h,u+2)-this.heightAt(h,u-2),w=Ft(1-(M*.5+S*.5)*.12,.6,1.35);if(m*=w,v*=w,y*=w,this.waterLevel!==null&&d<this.waterLevel){let A=Ft((this.waterLevel-d)/4,0,1);m=Qt(90,40,A),v=Qt(130,85,A),y=Qt(150,120,A)}let T=(l*t+c)*4;a[T]=Ft(m,0,255),a[T+1]=Ft(v,0,255),a[T+2]=Ft(y,0,255),a[T+3]=255}if(n.putImageData(s,0,0),e){let l=t/this.size;for(let c of e)n.fillStyle=c.color||"rgba(70,64,58,0.9)",n.fillRect((c.minX+this.half)*l,(c.minZ+this.half)*l,Math.max(1,(c.maxX-c.minX)*l),Math.max(1,(c.maxZ-c.minZ)*l))}return i}};var Aa=class o{constructor(t){this.terrain=t,this.half=t.half,this.dim=Math.ceil(t.size/4),this.cells=new Array(this.dim*this.dim);for(let e=0;e<this.cells.length;e++)this.cells[e]=[];this.boxes=[],this.stamp=1,this.softOccluders=[],this.softGrid=null}cellIndex(t,e){let i=Math.floor((t+this.half)/4),n=Math.floor((e+this.half)/4);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}addBox(t){t.id=this.boxes.length,t.alive=!0,t._stamp=0,this.boxes.push(t);let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let r=e;r<=i;r++)this.cells[a*this.dim+r].push(t);return t}removeBox(t){if(!t.alive)return;t.alive=!1;let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let r=e;r<=i;r++){let l=this.cells[a*this.dim+r],c=l.indexOf(t);c>=0&&(l[c]=l[l.length-1],l.pop())}}query(t,e,i,n,s){let a=++this.stamp,r=Math.max(0,Math.floor((t+this.half)/4)),l=Math.min(this.dim-1,Math.floor((i+this.half)/4)),c=Math.max(0,Math.floor((e+this.half)/4)),h=Math.min(this.dim-1,Math.floor((n+this.half)/4));for(let u=c;u<=h;u++)for(let d=r;d<=l;d++){let f=this.cells[u*this.dim+d];for(let p=0;p<f.length;p++){let x=f[p];if(x._stamp!==a&&(x._stamp=a,!(x.maxX<t||x.minX>i||x.maxZ<e||x.minZ>n)&&s(x)===!1))return}}}static rayBox(t,e,i,n,s,a,r,l){let c=(r.minX-t)*n,h=(r.maxX-t)*n,u=Math.min(c,h),d=Math.max(c,h),f=0;c=(r.minY-e)*s,h=(r.maxY-e)*s;let p=Math.min(c,h),x=Math.max(c,h);return p>u&&(u=p,f=1),x<d&&(d=x),c=(r.minZ-i)*a,h=(r.maxZ-i)*a,p=Math.min(c,h),x=Math.max(c,h),p>u&&(u=p,f=2),x<d&&(d=x),d<0||u>d||u>l?null:[u,d,f]}raycast(t,e,i,n,s,a,r,l=null){let c=1/(n||1e-9),h=1/(s||1e-9),u=1/(a||1e-9),d=r,f=null,p=0,x=0,g=++this.stamp,m=l&&l.ignore,v=Math.floor((t+this.half)/4),y=Math.floor((i+this.half)/4),M=n>0?1:-1,S=a>0?1:-1,w=(v+(M>0?1:0))*4-this.half,T=(y+(S>0?1:0))*4-this.half,A=Math.abs(n)<1e-9?1/0:(w-t)/n,_=Math.abs(a)<1e-9?1/0:(T-i)/a,b=Math.abs(n)<1e-9?1/0:4/Math.abs(n),C=Math.abs(a)<1e-9?1/0:4/Math.abs(a),L=0;for(let j=0;j<2e3;j++){if(v>=0&&y>=0&&v<this.dim&&y<this.dim){let rt=this.cells[y*this.dim+v];for(let st=0;st<rt.length;st++){let _t=rt[st];if(_t._stamp===g||(_t._stamp=g,m&&m(_t)))continue;let Y=o.rayBox(t,e,i,c,h,u,_t,d);Y&&Y[0]>=0&&Y[0]<d?(d=Y[0],f=_t,p=Y[2],x=Y[1]):Y&&Y[0]<0&&Y[1]>0&&0<d&&!(l&&l.skipInside)&&(d=0,f=_t,p=Y[2],x=Y[1])}}if(L=Math.min(A,_),L>d||(A<_?(A+=b,v+=M):(_+=C,y+=S),v<-1&&M<0||v>this.dim&&M>0||y<-1&&S<0||y>this.dim&&S>0))break}let k=1/0;if((!l||l.terrain!==!1)&&(k=this.terrain.raycast(t,e,i,n,s,a,d)),k<d){let j=t+n*k,rt=e+s*k,st=i+a*k,_t=this.terrain.normalAt(j,st);return{t:k,x:j,y:rt,z:st,nx:_t[0],ny:_t[1],nz:_t[2],box:null,thickness:99}}if(!f)return null;let N=t+n*d,O=e+s*d,U=i+a*d,X=0,F=0,B=0;return p===0?X=n>0?-1:1:p===1?F=s>0?-1:1:B=a>0?-1:1,{t:d,x:N,y:O,z:U,nx:X,ny:F,nz:B,box:f,thickness:x-d}}los(t,e,i,n,s,a,r){let l=n-t,c=s-e,h=a-i,u=Math.sqrt(l*l+c*c+h*h);return u<.01?!0:!this.raycast(t,e,i,l/u,c/u,h/u,u-.05,r)}addSoft(t){if(!this.softGrid){this.softDim=Math.ceil(this.terrain.size/16),this.softGrid=new Array(this.softDim*this.softDim);for(let a=0;a<this.softGrid.length;a++)this.softGrid[a]=[]}let e=Math.max(0,Math.floor((t.x-t.r+this.half)/16)),i=Math.min(this.softDim-1,Math.floor((t.x+t.r+this.half)/16)),n=Math.max(0,Math.floor((t.z-t.r+this.half)/16)),s=Math.min(this.softDim-1,Math.floor((t.z+t.r+this.half)/16));t._s=0;for(let a=n;a<=s;a++)for(let r=e;r<=i;r++)this.softGrid[a*this.softDim+r].push(t)}addDynamicSoft(t){this.softOccluders.push(t)}static _softTest(t,e,i,n,s,a,r,l,c){let h=t.x-e,u=t.y-i,d=t.z-n,f=(h*s+u*a+d*r)/l;if(f<0||f>1)return!1;let p=e+s*f-t.x,x=i+a*f-t.y,g=n+r*f-t.z,m=t.r*(t.grow?t.grow(c):1);return p*p+x*x+g*g<m*m}softVisibility(t,e,i,n,s,a,r){let l=1,c=n-t,h=s-e,u=a-i,d=c*c+h*h+u*u;if(d<1e-6)return 1;for(let m=this.softOccluders.length-1;m>=0;m--){let v=this.softOccluders[m];if(v.until&&v.until<r){this.softOccluders.splice(m,1);continue}if(o._softTest(v,t,e,i,c,h,u,d,r)&&(l*=1-v.strength,l<.02))return 0}if(!this.softGrid)return l;let f=++this.stamp,p=Math.sqrt(d),x=Math.ceil(p/8)+1,g=-1;for(let m=0;m<=x;m++){let v=m/x,y=t+c*v,M=i+u*v,S=Math.floor((y+this.half)/16),w=Math.floor((M+this.half)/16);if(S<0||w<0||S>=this.softDim||w>=this.softDim)continue;let T=w*this.softDim+S;if(T===g)continue;g=T;let A=this.softGrid[T];for(let _=0;_<A.length;_++){let b=A[_];if(b._s!==f&&(b._s=f,o._softTest(b,t,e,i,c,h,u,d,r)&&(l*=1-b.strength,l<.02)))return 0}}return l}groundAt(t,e,i,n=.25){let s=this.terrain.heightAt(t,e);return this.query(t-n,e-n,t+n,e+n,a=>{a.maxY<=i+.05&&a.maxY>s&&!a.noStand&&(s=a.maxY)}),s}move(t,e,i,n,s,a,r){r.hitWall=!1,r.ceiling=!1,r.stepped=!1;let l=r.grounded;for(let f=0;f<2;f++){let p=(f===0?e.x:e.z)*i;p!==0&&(f===0?t.x+=p:t.z+=p,this._resolveHorizontal(t,n,s,f,p,a,l,r))}t.y+=e.y*i,r.grounded=!1;let c=this.terrain.heightAt(t.x,t.z),h=c,u=1/0;this.query(t.x-n,t.z-n,t.x+n,t.z+n,f=>{f.noCollide||t.x+n<=f.minX||t.x-n>=f.maxX||t.z+n<=f.minZ||t.z-n>=f.maxZ||(f.maxY<=t.y+.35+(e.y<0?-e.y*i:0)?f.maxY>h&&(h=f.maxY):f.minY>=t.y+s*.5&&f.minY<u&&(u=f.minY))}),t.y+s>u&&e.y>0&&(t.y=u-s,e.y=0,r.ceiling=!0),t.y<=h+.001?(t.y=h,e.y<0&&(e.y=0),r.grounded=!0):l&&e.y<=0&&t.y-h<a*.9&&(t.y=h,e.y=0,r.grounded=!0),r.groundY=h,r.onTerrain=h===c;let d=this.half-2;return t.x<-d&&(t.x=-d),t.x>d&&(t.x=d),t.z<-d&&(t.z=-d),t.z>d&&(t.z=d),r}_resolveHorizontal(t,e,i,n,s,a,r,l){let c=0,h=!0;for(;h&&c++<4;){h=!1;let u=null;if(this.query(t.x-e,t.z-e,t.x+e,t.z+e,d=>{if(!d.noCollide&&!(t.x+e<=d.minX||t.x-e>=d.maxX||t.z+e<=d.minZ||t.z-e>=d.maxZ)&&!(d.maxY<=t.y+.02||d.minY>=t.y+i))return u=d,!1}),!u)break;if(r&&u.maxY-t.y<=a){let d=u.maxY;if(!this.overlapsAny(t.x,d+.01,t.z,e,i)){t.y=d,l.stepped=!0,h=!0;continue}}l.hitWall=!0,n===0?t.x=s>0?u.minX-e-.001:u.maxX+e+.001:t.z=s>0?u.minZ-e-.001:u.maxZ+e+.001,h=!0}}overlapsAny(t,e,i,n,s){let a=!1;return this.query(t-n,i-n,t+n,i+n,r=>{if(!r.noCollide&&!(t+n<=r.minX||t-n>=r.maxX||i+n<=r.minZ||i-n>=r.maxZ)&&!(r.maxY<=e||r.minY>=e+s))return a=!0,!1}),a}};var Pr={wood:{hp:70,pen:.35,tex:"wood",scale:.55,rough:.9,debris:9071176,sound:"wood"},plaster:{hp:170,pen:.8,tex:"plaster",scale:.35,rough:.95,debris:13617339,sound:"stone"},brick:{hp:280,pen:2,tex:"brick",scale:.5,rough:.92,debris:10514522,sound:"stone"},concrete:{hp:420,pen:3,tex:"concrete",scale:.25,rough:.9,debris:11118496,sound:"stone"},metal:{hp:160,pen:.55,tex:"metal",scale:.5,rough:.55,metal:.35,debris:9409430,sound:"metal"},container:{hp:3e3,pen:.9,tex:"metal",scale:.4,rough:.6,metal:.3,debris:8022618,sound:"metal"},sand:{hp:260,pen:6,tex:"sandbag",scale:1,rough:1,debris:12100474,sound:"dirt"},hay:{hp:45,pen:.6,tex:"hay",scale:.6,rough:1,debris:13808746,sound:"dirt"},cloth:{hp:25,pen:.05,tex:"cloth",scale:.8,rough:1,debris:13421772,sound:"dirt"},stone:{hp:340,pen:4,tex:"rock",scale:.45,rough:.95,debris:9407364,sound:"stone"}},E1=3,Ca=class{constructor(t){this.world=t,this.coll=t.collision,this.terrain=t.terrain,this.pieces=[],this.byCat={},this.decor=[],this.footprints=[],this.meshes={},this.rng=qe(t.def.seed*7+3)}piece(t,e,i,n,s,a,r,l={}){let c=Pr[t],h={minX:Math.min(e,s),minY:Math.min(i,a),minZ:Math.min(n,r),maxX:Math.max(e,s),maxY:Math.max(i,a),maxZ:Math.max(n,r),cat:t,mat:t,color:l.color??16777215,hp:(l.hp??c.hp)*(l.hpMul||1),destructible:l.destructible!==!1,navFloor:!!l.navFloor,vault:!!l.vault,pen:c.pen,noCollide:!!l.noCollide,noStand:!!l.noStand,below:[],above:[],inst:-1,grounded:l.grounded!==!1,building:l.building||null};return h.maxHp=h.hp,this.coll.addBox(h),this.pieces.push(h),(this.byCat[t]=this.byCat[t]||[]).push(h),h}frame(t,e,i,n){let s=this,a=(r,l)=>{switch(i&3){case 0:return[t+r,e+l];case 1:return[t-l,e+r];case 2:return[t-r,e-l];default:return[t+l,e-r]}};return{tf:a,y0:n,box(r,l,c,h,u,d,f,p){let[x,g]=a(l,h),[m,v]=a(u,f);return s.piece(r,x,n+c,g,m,n+d,v,p)},decor(r,l,c,h,u=0){let[d,f]=a(l,h);r.rotateY(-(i&3)*Math.PI/2+u),r.translate(d,n+c,f),s.decor.push(r)}}}wall(t,e,i,n,s,a,r,l,c,h={}){let u=h.thick||.3,d=[],f=(m,v,y,M)=>{if(v-m<.05||M-y<.05)return null;let S;return i==="x"?S=t.box(e,m,y,n-u/2,v,M,n+u/2,{color:c,building:h.building,hpMul:h.hpMul}):S=t.box(e,n-u/2,y,m,n+u/2,M,v,{color:c,building:h.building,hpMul:h.hpMul}),S._a0=m,S._a1=v,S._y0=y,S._y1=M,d.push(S),S},p=(m,v,y,M,S=1)=>{let w=Math.max(1,Math.round((v-m)/1.5)),T=(M-y)/S;for(let A=0;A<S;A++)for(let _=0;_<w;_++)f(y+A*T,y+(A+1)*T,m+(v-m)*_/w,m+(v-m)*(_+1)/w)},x=r+l,g=s;for(let m=0;m<a.length;m++){let v=a[m],y=g,M=g+2;if(v==="solid")p(r,x,y,M,2);else if(v==="window")p(r,r+1,y,M,2),f(y,y+.4,r+1,r+2.2),f(M-.4,M,r+1,r+2.2),p(r+2.2,x,y,M,1);else if(v==="slit")p(r,r+1.25,y,M,2),f(y,y+.3,r+1.25,r+1.65),f(M-.3,M,r+1.25,r+1.65),p(r+1.65,x,y,M,1);else if(v==="door")p(r,r+2.3,y,y+.3,1),p(r,r+2.3,M-.3,M,1),p(r+2.3,x,y,M,1);else if(v==="wide"){let S=g+4,w=Math.min(l-.6,4.2);p(r,r+w,y,y+.3,1),p(r,r+w,S-.3,S,1),p(r+w,x,y,S,2),g+=4;continue}g+=2}for(let m of d){if(m._y0<=r+.01){m.grounded=!0;continue}m.grounded=!1;for(let v of d)v!==m&&Math.abs(v._y1-m._y0)<.02&&v._a1>m._a0+.05&&v._a0<m._a1-.05&&(m.below.push(v),v.above.push(m));m.below.length===0&&(m.grounded=!0)}return d}storey(t,e,i,n,s,a,r,l,c){this.wall(t,e,"x",-n,-i,l.n,s,a,r,c),this.wall(t,e,"x",n,-i,l.s,s,a,r,c),this.wall(t,e,"z",-i,-n,l.w,s,a,r,c),this.wall(t,e,"z",i,-n,l.e,s,a,r,c)}randomMods(t,e,i,n=.55,s="door"){let a=[];for(let r=0;r<t;r++)a.push(i()<n?"window":"solid");return e!=null&&e>=0&&e<t&&(a[e]=s),a}footprint(t,e,i,n,s,a){let r=i&1,l=r?s:n,c=r?n:s,h={minX:t-l,maxX:t+l,minZ:e-c,maxZ:e+c,color:a};return this.footprints.push(h),h}building(t,e,i,n=0,s={}){let a=this.rng,r=s.y??this.terrain.heightAt(e,i),l={type:t,cx:e,cz:i,rot:n};switch(t){case"house":return this.house(e,i,n,r,Object.assign({w:5,d:4,floors:1},s),l);case"house2":return this.house(e,i,n,r,Object.assign({w:5,d:4,floors:2},s),l);case"shop":return this.house(e,i,n,r,Object.assign({w:4,d:4,floors:a()<.45?2:1,flat:!0,cat:"plaster"},s),l);case"barn":return this.barn(e,i,n,r,s,l);case"warehouse":return this.warehouse(e,i,n,r,s,l);case"shed":return this.house(e,i,n,r,Object.assign({w:2,d:2,floors:1,cat:"wood",H:2.8,noInterior:!0,winP:.3,color:10518624},s),l);case"bunker":return this.house(e,i,n,r,Object.assign({w:3,d:3,floors:1,cat:"concrete",H:2.7,flat:!0,slits:!0,noInterior:!0,color:12104872},s),l);case"church":return this.church(e,i,n,r,s,l);case"ruin":return this.house(e,i,n,r,Object.assign({w:4,d:4,floors:1,ruin:!0,noRoof:!0,flat:!0},s),l);case"pumphouse":return this.house(e,i,n,r,Object.assign({w:4,d:3,floors:1,cat:"concrete",H:3.6,flat:!0,noInterior:!0,color:13091509},s),l);default:throw new Error("unknown building "+t)}}house(t,e,i,n,s,a){let r=this.rng,l=this.frame(t,e,i,n),c=s.w,h=s.d,u=c,d=h,f=s.H||E1,p=s.cat||(r()<.3?"brick":"plaster"),x=s.palette||(p==="brick"?[14203040,13213834,14731444]:this.world.def.wallColors),g=s.color??x[Math.floor(r()*x.length)],m=s.floors,v={building:a};this.footprint(t,e,i,u,d),l.box("concrete",-u,-.6,-d,u,.12,d,{destructible:!1,navFloor:!0,color:10328722});for(let y=0;y<m;y++){let M=y*f+(y>0?.12:-.15),S=y>0?f-.12:f+.15,w=y===0?Math.floor(c/2):-1,T=y===0&&r()<.6?Math.floor(r()*c):-1,A=y===0&&!s.noSideDoor&&r()<.35?Math.floor(h/2):-1,_=s.winP??.55,b={n:this.randomMods(c,w,r,_),s:this.randomMods(c,T,r,_),e:this.randomMods(h,A,r,_),w:this.randomMods(h,-1,r,_)};if(s.slits)for(let C of["n","s","e","w"])b[C]=b[C].map(L=>(L==="window"||L==="solid")&&r()<.6?"slit":L);if(this.storey(l,p,u,d,M,S,g,b,v),y===0&&m===1&&c>=4&&!s.noInterior){let C=r()<.5?2:c-2,L=[];for(let k=0;k<h;k++)L.push("solid");L[Math.floor(r()*h)]="door",this.wall(l,"plaster","z",-u+C*2,-d+.15,L,M,S,15131094,Object.assign({thick:.2},v))}}if(m>1){let S=(f+.12-.12)/12,w=-u+.3,T=d-1.25,A=d-.16;for(let b=0;b<12;b++)l.box("wood",w+b*.28,.12,T,w+(b+1)*.28,.12+S*(b+1),A,{destructible:!1,color:9136970});let _=w+12*.28+.05;for(let b=1;b<m;b++){let C=b*f;l.box("concrete",-u,C-.05,-d,u,C+.12,T-.05,{destructible:!1,color:11117722}),l.box("concrete",_,C-.05,T-.05,u,C+.12,d,{destructible:!1,color:11117722})}}if(!s.noRoof){let y=m*f;if(l.box("concrete",-u-.2,y,-d-.2,u+.2,y+.25,d+.2,{destructible:!1,color:s.flat?12169893:9341572,noStand:!1}),!s.flat&&!this.world.def.flatRoofs){let M=this.world.def.roofColors[Math.floor(r()*this.world.def.roofColors.length)],w=c>=h?P.prism(c*2+.6,Math.min(h,4)*.55,h*2+.6,M):P.prism(h*2+.6,Math.min(c,4)*.55,c*2+.6,M,0,0,0,Math.PI/2);l.decor(w,0,y+.25,0)}else l.decor(P.box(u*2+.4,.35,.2,11051153,0,.17,0),0,y+.25,-d-.1),l.decor(P.box(u*2+.4,.35,.2,11051153,0,.17,0),0,y+.25,d+.1),l.decor(P.box(.2,.35,d*2+.4,11051153,0,.17,0),-u-.1,y+.25,0),l.decor(P.box(.2,.35,d*2+.4,11051153,0,.17,0),u+.1,y+.25,0)}if(s.ruin){for(let y of this.pieces.slice(-200))y.building===a&&y.destructible&&y.minY>n+.5&&this.rng()<.45&&(y.alive=!1,this.coll.removeBox(y),y.ruined=!0);this.prop("rubble",t+1.5,e-1.5,0)}if(!s.ruin&&c>=3&&this.rng()<.7){let[y,M]=l.tf(u-1.2,-d+1.2);this.prop("crate",y,M,0,{y:n+.12,size:.9})}return a}barn(t,e,i,n,s,a){let r=this.frame(t,e,i,n),l=s.w||6,c=s.d||5,h=l,u=c,d=s.H||5.5,f=s.color??10111546;this.footprint(t,e,i,h,u),r.box("concrete",-h,-.6,-u,h,.08,u,{destructible:!1,navFloor:!0,color:9273456});let p=Math.floor(l/2)-1,x=(g,m)=>{let v=[];for(let y=0;y<g;y++)y===m?(v.push("wide"),y++):v.push(this.rng()<.2?"window":"solid");return v};this.storey(r,"wood",h,u,-.15,d+.15,f,{n:x(l,p),s:x(l,p),e:x(c,-1),w:this.randomMods(c,Math.floor(c/2),this.rng,.2)},{building:a,thick:.25}),r.box("wood",-h-.3,d,-u-.3,h+.3,d+.2,u+.3,{destructible:!1,color:7032896}),r.decor(P.prism(l*2+.8,3.2,c*2+.8,6115656),0,d+.2,0);for(let g=0;g<4;g++){let[m,v]=r.tf(-h+1.5+this.rng()*(h*2-3),(this.rng()<.5?-1:1)*(u-1.4));this.prop("hay",m,v,this.rng()<.5?0:1,{y:n+.08})}return a}warehouse(t,e,i,n,s,a){let r=this.frame(t,e,i,n),l=s.w||10,c=s.d||6,h=l,u=c,d=s.H||7,f=s.cat||"metal",p=s.color??(f==="wood"?9400916:[11121592,12037010,10135450][Math.floor(this.rng()*3)]);this.footprint(t,e,i,h,u),r.box("concrete",-h,-.6,-u,h,.1,u,{destructible:!1,navFloor:!0,color:10131343});let x=(y,M,S)=>{let w=[];for(let T=0;T<y;T++)T===M||T===S?(w.push("wide"),T++):w.push("solid");return w},g=Math.floor(c/2),m=[];for(let y=0;y<c;y++)m.push(y===g?"door":this.rng()<.25?"window":"solid");let v=m.slice();v[g]=this.rng()<.5?"door":"solid",this.storey(r,f,h,u,-.15,d+.15,p,{n:x(l,1,l-3),s:x(l,Math.floor(l/2)-1,-9),e:m,w:v},{building:a,thick:.2}),r.box("metal",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:7831428}),r.decor(P.prism(l*2+.6,1.4,c*2+.6,7305084),0,d+.25,0);for(let y=0;y<6;y++){let[M,S]=r.tf(-h+2+this.rng()*(h*2-4),-u+2.5+this.rng()*(u*2-5));this.prop(this.rng()<.4?"crateStack":"crate",M,S,0,{y:n+.1})}return a}church(t,e,i,n,s,a){let r=this.frame(t,e,i,n),l=5,c=9,h=l,u=c,d=6.5,f=14275267;this.footprint(t,e,i,h,u+4),r.box("concrete",-h,-.6,-u,h,.12,u,{destructible:!1,navFloor:!0,color:10131086});let p=[];for(let v=0;v<c;v++)p.push(v%2?"window":"solid");p[2]="door";let x=["solid","solid","door","solid","solid"];this.storey(r,"brick",h,u,-.15,d+.15,f,{n:x,s:["solid","window","solid","window","solid"],e:p,w:p.slice().reverse()},{building:a,thick:.4}),r.box("concrete",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:8220260}),r.decor(P.prism(c*2+.6,4.2,l*2+.6,7232076,0,0,0,Math.PI/2),0,d+.25,0);let g=-u-2,m=this.frame(...r.tf(0,g),i,n);return m.box("concrete",-2,-.6,-2,2,.12,2,{destructible:!1,navFloor:!0,color:10131086}),this.storey(m,"brick",2,2,-.15,14.15,f,{n:["door","solid"],s:["solid","solid"],e:["solid","solid"],w:["solid","solid"]},{building:a,thick:.4}),m.box("concrete",-2.2,14,-2.2,2.2,14.3,2.2,{destructible:!1,color:8220260}),m.decor(P.pyramid(4.6,5,5983298),0,14.3,0),m.decor(P.box(.15,1.6,.15,4473924,0,.8,0),0,19.3,0),m.decor(P.box(.8,.15,.15,4473924,0,0,0),0,20.4,0),a}prop(t,e,i,n=0,s={}){let a=this.rng,r=s.y??this.terrain.heightAt(e,i),l=this.frame(e,i,n,r);switch(t){case"crate":{let c=s.size||1.2;l.box("wood",-c/2,0,-c/2,c/2,c,c/2,{color:s.color??[11570527,10255186,8227418][Math.floor(a()*3)],hp:60});break}case"crateStack":{l.box("wood",-1.2,0,-.6,0,1.2,.6,{color:11044438}),l.box("wood",0,0,-.6,1.2,1.2,.6,{color:10255186});let c=l.box("wood",-.6,1.2,-.6,.6,2.4,.6,{color:11570527});c.grounded=!1;break}case"container":{let c=[10173231,3104651,4160074,12159534,8224125,9129775],h=s.color??c[Math.floor(a()*c.length)],u=l.box("container",-1.22,0,-3.03,1.22,2.6,3.03,{color:h,destructible:!1});if(s.stack){let d=l.box("container",-1.22,2.6,-3.03,1.22,5.2,3.03,{color:c[Math.floor(a()*c.length)],destructible:!1});d.grounded=!1}this.footprint(e,i,n,1.22,3.03,"rgba(90,80,70,0.9)");break}case"sandbags":{let c=s.n||2;for(let h=0;h<c;h++)l.box("sand",-c/2+h,0,-.3,-c/2+h+1,.95,.3,{color:16777215,vault:!0});break}case"sandbagRing":{for(let c=-2;c<2;c++)l.box("sand",c,0,-1.6,c+1,1,-1,{vault:!0});for(let c=-1;c<1;c++)l.box("sand",-2.3,0,c,-1.7,1,c+1,{vault:!0}),l.box("sand",1.7,0,c,2.3,1,c+1,{vault:!0});break}case"hesco":{let c=s.n||3;for(let h=0;h<c;h++)l.box("sand",-c*.55+h*1.1,0,-.55,-c*.55+(h+1)*1.1,1.3,.55,{color:13153418,hpMul:2.2});break}case"jersey":{let c=s.n||1;for(let h=0;h<c;h++)l.box("concrete",-c+h*2,0,-.28,-c+(h+1)*2-.05,.85,.28,{color:12894390,vault:!0});break}case"fence":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-r;l.box("wood",-c+h*2,u,-.05,-c+(h+1)*2,u+1.05,.05,{color:9072208,hp:30,vault:!0})}break}case"stoneWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-r;l.box("stone",-c+h*2,u-.2,-.3,-c+(h+1)*2,u+1,.3,{color:12433066,vault:!0})}break}case"compoundWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-r;l.box("plaster",-c+h*2,u-.3,-.2,-c+h*2+1,u+2.3,.2,{color:s.color??14272420}),l.box("plaster",-c+h*2+1,u-.3,-.2,-c+(h+1)*2,u+2.3,.2,{color:s.color??14272420})}break}case"hay":l.box("hay",-.6,0,-.8,.6,1.1,.8,{color:16777215});break;case"haystack":{l.box("hay",-1.2,0,-.8,0,1.1,.8,{}),l.box("hay",0,0,-.8,1.2,1.1,.8,{});let c=l.box("hay",-.6,1.1,-.8,.6,2.2,.8,{});c.grounded=!1;break}case"car":{let c=[7158322,4872810,8024674,6187850,9080724,4013376],h=s.color??c[Math.floor(a()*c.length)];l.box("metal",-.9,.25,-2.1,.9,1.05,2.1,{color:h,destructible:!1}),l.box("metal",-.8,1.05,-1,.8,1.6,.9,{color:h,destructible:!1});for(let[u,d]of[[-.85,-1.3],[.85,-1.3],[-.85,1.3],[.85,1.3]])l.decor(P.cyl(.36,.36,.25,8,1907997,0,0,0,0,0,Math.PI/2),u,.36,d);l.decor(P.box(1.5,.45,.06,2766144,0,0,0,-.5),0,1.33,-1.05),this.footprint(e,i,n,.9,2.1,"rgba(60,60,60,0.9)");break}case"waterTower":{for(let[c,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])l.box("wood",c-.15,0,h-.15,c+.15,6,h+.15,{destructible:!1,color:7035464});l.box("wood",-1.8,6,-1.8,1.8,6.25,1.8,{destructible:!1,color:7035464}),l.decor(P.cyl(1.7,1.7,3.2,10,8350293),0,7.85,0),l.decor(P.cone(1.9,1,10,5918016),0,9.95,0);break}case"radioTower":{let c=s.h||42,h=[[-2.5,-2.5],[2.5,-2.5],[-2.5,2.5],[2.5,2.5]],u=[];for(let[d,f]of h)l.box("metal",d-.2,0,f-.2,d+.2,3,f+.2,{destructible:!1,color:11549230}),u.push(P.box(.18,c,.18,12105912,d*.5,c/2,f*.5,f*.05,0,-d*.05));for(let d=4;d<c;d+=4){let f=2.5*(1-d/c*.55),p=d/4%2?12599344:15263976;u.push(P.box(f*2,.12,.12,p,0,d,-f)),u.push(P.box(f*2,.12,.12,p,0,d,f)),u.push(P.box(.12,.12,f*2,p,-f,d,0)),u.push(P.box(.12,.12,f*2,p,f,d,0))}u.push(P.box(.6,.6,.6,16724e3,0,c+.3,0)),l.decor(P.merge(u),0,0,0);break}case"stall":{let c=[12077626,3832504,14198842,4889178][Math.floor(a()*4)];for(let[h,u]of[[-1.4,-1],[1.4,-1],[-1.4,1],[1.4,1]])l.box("wood",h-.06,0,u-.06,h+.06,2.4,u+.06,{color:6967872,hp:40});l.box("cloth",-1.6,2.4,-1.2,1.6,2.5,1.2,{color:c,noStand:!0,grounded:!1}),l.box("wood",-1.3,0,-.5,1.3,.9,.3,{color:9071178,vault:!0});break}case"logs":{for(let c=0;c<3;c++)l.box("wood",-2.5,c*.5,-1.2+c*.25,2.5,(c+1)*.5,1.2-c*.25,{color:8018490,vault:c===0});break}case"tank":{l.box("metal",-1.6,0,-1.6,1.6,3.4,1.6,{color:s.color??14210248,destructible:!1,noCollide:!1}),l.decor(P.cyl(1.75,1.75,.3,12,10132122),0,3.5,0);break}case"pipe":{let c=s.len||10;l.box("metal",-c/2,.3,-.35,c/2,1,.35,{color:9080724,destructible:!1,vault:!0});break}case"pier":{let c=s.len||30,h=s.w||6,u=(s.deckY??1.6)-r;l.box("concrete",-h/2,u-.8,0,h/2,u,c,{destructible:!1,navFloor:!0,color:11578530});for(let d=4;d<c;d+=8)for(let f of[-h/2+.4,h/2-.4])l.box("concrete",f-.3,u-8,d-.3,f+.3,u-.8,d+.3,{destructible:!1,color:9407362});for(let d=3;d<c;d+=6)l.decor(P.cyl(.18,.22,.5,6,3355443),h/2-.4,u+.25,d);this.footprint(e,i,n,h/2,c/2,"rgba(150,145,135,0.9)");break}case"bridge":{let c=s.len||40,h=s.w||8,u=(s.deckY??3)-r;l.box("concrete",-h/2,u-.7,-c/2,h/2,u,c/2,{destructible:!1,navFloor:!0,color:11117979});for(let d of[-h/2+.15,h/2-.15])l.box("concrete",d-.15,u,-c/2,d+.15,u+.9,c/2,{destructible:!1,color:12236202});for(let d=-c/2+8;d<c/2-4;d+=10)l.box("concrete",-h/2+.5,u-9,d-.6,h/2-.5,u-.7,d+.6,{destructible:!1,color:9209983});break}case"blastWall":{let c=s.n||3,h=s.h||3.6;for(let u=0;u<c;u++){let d=-c+u*2,f=this.terrain.heightAt(...l.tf(d+1,0))-r;l.box("concrete",d,f-.3,-.35,d+2,f+h,.35,{color:u%2?11841702:12368046,destructible:!1}),l.box("concrete",d+.06,f-.3,-.55,d+1.94,f+.45,.55,{color:11052186,destructible:!1})}this.footprint(e,i,n,c,.5,"rgba(150,146,138,0.95)");break}case"tent":{let c=s.color??7040590;l.box("cloth",-2,0,-2.5,-1.9,1.6,2.5,{color:c}),l.box("cloth",1.9,0,-2.5,2,1.6,2.5,{color:c}),l.box("cloth",-2,0,2.4,2,1.6,2.5,{color:c}),l.decor(P.prism(5.2,1.3,4.2,c),0,1.6,0);break}case"grave":l.box("stone",-.3,0,-.08,.3,.75,.08,{color:11117722,vault:!0});break;case"barrels":{for(let c=0;c<(s.n||3);c++)l.box("metal",-.9+c*.65,0,-.3,-.3+c*.65,.95,.3,{color:[3824266,9058858,4876858][c%3],hp:80});break}case"watchtower":{for(let[c,h]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])l.box("wood",c-.12,0,h-.12,c+.12,5,h+.12,{destructible:!1,color:7035464});l.box("wood",-1.6,4.8,-1.6,1.6,5,1.6,{destructible:!1,color:8021584});for(let c of[-1,1])l.box("wood",-1.6,5,c*1.55-.05,1.6,6,c*1.55+.05,{color:9074272,grounded:!1}),l.box("wood",c*1.55-.05,5,-1.6,c*1.55+.05,6,1.6,{color:9074272,grounded:!1});l.decor(P.pyramid(3.6,1.2,5917242),0,7.4,0);for(let[c,h]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])l.decor(P.box(.1,1.4,.1,7035464,0,.7,0),c,6,h);for(let c=0;c<9;c++)l.box("wood",-.4,.5*c,1.7,.4,.5*c+.08,1.95,{destructible:!1,color:7035464,noCollide:!1});break}case"rubble":{for(let c=0;c<4;c++)l.decor(P.dodeca(.4+a()*.5,10787984,0,0,0,1.4,.5,1.1),(a()-.5)*3,.1,(a()-.5)*3);break}case"chimney":{let c=s.h||24;l.box("brick",-1.6,-.5,-1.6,1.6,c,1.6,{destructible:!1,color:s.color??11037266}),l.decor(P.box(3.8,.6,3.8,6965818,0,0,0),0,c+.3,0),l.decor(P.box(3.4,.4,3.4,2236962,0,0,0),0,c+.8,0);for(let h=4;h<c;h+=6)l.decor(P.box(3.5,.3,3.5,9067076,0,0,0),0,h,0);this.footprint(e,i,n,1.6,1.6,"rgba(120,80,60,0.95)");break}case"platform":{let c=s.len||30,h=s.w||5;l.box("concrete",-c/2,-.6,-h/2,c/2,.42,h/2,{destructible:!1,navFloor:!0,color:11907238}),l.decor(P.box(c,.06,.3,14204992,0,0,0),0,.45,h/2-.2);for(let u=-c/2+6;u<c/2;u+=12)l.box("metal",u-.1,.42,-.1,u+.1,3.4,.1,{destructible:!1,color:5595242});l.box("metal",-c/2,3.4,-h/2+.5,c/2,3.55,h/2-.5,{destructible:!1,color:6976636,noStand:!0}),this.footprint(e,i,n,c/2,h/2,"rgba(160,155,145,0.95)");break}case"fountain":{for(let c=0;c<8;c++){let h=c/8*Math.PI*2,u=Math.cos(h)*3.2,d=Math.sin(h)*3.2;l.box("stone",u-1.3,0,d-.35,u+1.3,.75,d+.35,{color:13156528,vault:!0})}l.box("stone",-.5,0,-.5,.5,2.2,.5,{destructible:!1,color:12432546}),l.decor(P.cyl(1.2,1,.3,10,12432546),0,2.3,0),l.decor(P.cyl(2.9,2.9,.1,16,4881034),0,.4,0);break}case"traincar":{let c=s.color??[8010282,3824234,5921354][Math.floor(a()*3)];l.box("container",-1.4,.9,-7,1.4,4,7,{color:c,destructible:!1}),l.box("metal",-1.2,.3,-6.5,1.2,.9,6.5,{color:2763306,destructible:!1});for(let h of[-5,-3.6,3.6,5])for(let u of[-.75,.75])l.decor(P.cyl(.45,.45,.2,8,1907997,0,0,0,0,0,Math.PI/2),u,.45,h);this.footprint(e,i,n,1.4,7,"rgba(110,70,60,0.95)");break}case"rails":{let c=s.len||100;l.decor(P.box(.12,.12,c,5921370,0,0,0),-.75,.06,0),l.decor(P.box(.12,.12,c,5921370,0,0,0),.75,.06,0);for(let h=-c/2;h<c/2;h+=1.2)l.decor(P.box(2.4,.08,.25,5916214,0,0,0),0,.02,h);break}case"pole":l.box("wood",-.12,0,-.12,.12,8,.12,{destructible:!1,color:5917242}),l.decor(P.box(1.8,.12,.12,5917242),0,7.4,0);break;case"crane":{for(let[c,h]of[[-4,-1.5],[4,-1.5],[-4,1.5],[4,1.5]])l.box("metal",c-.3,0,h-.3,c+.3,14,h+.3,{destructible:!1,color:14196778});l.decor(P.box(9,1.2,4,14196778,0,0,0),0,14.6,0),l.decor(P.box(26,.8,1.2,14196778,0,0,0),9,15.8,0),l.decor(P.box(.08,9,.08,2236962,0,0,0),18,11,0);break}default:throw new Error("unknown prop "+t)}}finalize(t){let e=new ui(1,1,1);e.deleteAttribute("uv");let i=new Rt,n=new dt,s=new De,a=new R,r=new R;this.byCat.sand||(this.byCat.sand=[]);for(let l of Object.keys(this.byCat)){let c=this.byCat[l],h=Pr[l],u=new fe({color:16777215,roughness:h.rough,metalness:h.metal||0});Ph(u,h.tex,h.scale,1);let d=l==="sand"?160:0,f=new yi(e,u,c.length+d);for(let p=c.length;p<c.length+d;p++)f.setMatrixAt(p,new Rt().makeScale(0,0,0)),f.setColorAt(p,n.set(16777215));d&&(this.spareNext=c.length,this.spareMax=c.length+d),f.castShadow=!0,f.receiveShadow=!0;for(let p=0;p<c.length;p++){let x=c[p];x.inst=p,x.mesh=f,x.alive?(r.set((x.minX+x.maxX)/2,(x.minY+x.maxY)/2,(x.minZ+x.maxZ)/2),a.set(x.maxX-x.minX,x.maxY-x.minY,x.maxZ-x.minZ),i.compose(r,s,a)):i.makeScale(0,0,0),f.setMatrixAt(p,i),n.set(x.color),f.setColorAt(p,n)}f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.computeBoundingSphere(),t.add(f),this.meshes[l]=f}if(this.decor.length){let l=P.merge(this.decor),c=new fe({vertexColors:!0,roughness:.9});Ph(c,"roof",.6,.6);let h=new Ot(l,c);h.castShadow=!0,h.receiveShadow=!0,t.add(h),this.decorMesh=h,this.decor=[]}}addSandbag(t,e,i,n){let s=this.meshes.sand;if(!s||this.spareNext+2>this.spareMax)return!1;let r=(Math.round(n/(Math.PI/2))%4+4)%4%2===0,l=new Rt,c=new De,h=new R,u=new R;for(let d=0;d<2;d++){let f=-1+d,p=r?this.piece("sand",t+f,e-.1,i-.3,t+f+1,e+.95,i+.3,{vault:!0}):this.piece("sand",t-.3,e-.1,i+f,t+.3,e+.95,i+f+1,{vault:!0});p.inst=this.spareNext++,p.mesh=s,u.set((p.minX+p.maxX)/2,(p.minY+p.maxY)/2,(p.minZ+p.maxZ)/2),h.set(p.maxX-p.minX,p.maxY-p.minY,p.maxZ-p.minZ),l.compose(u,c,h),s.setMatrixAt(p.inst,l),this.world.nav&&this.world.nav.markDirty(p)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),!0}hidePiece(t){if(t.inst<0||!t.mesh)return;let e=new Rt().makeScale(0,0,0);t.mesh.setMatrixAt(t.inst,e),t.mesh.instanceMatrix.needsUpdate=!0}damagePiece(t,e,i,n){return!t.alive||!t.destructible||(t.hp-=e,t.hp>0)?!1:(this.destroyPiece(t,i,n),!0)}destroyPiece(t,e,i,n=0){if(t.alive&&(this.coll.removeBox(t),this.hidePiece(t),e&&e.pieceDestroyed(t,i),this.world.nav&&this.world.nav.markDirty(t),n<12))for(let s of t.above)!s.alive||s.grounded||s.below.every(a=>!a.alive)&&setTimeout(()=>this.destroyPiece(s,e,"collapse",n+1),60+Math.random()*120)}explode(t,e,i,n,s,a){let r=[];this.coll.query(t-n,i-n,t+n,i+n,c=>{c.destructible&&c.alive&&r.push(c)});let l=0;for(let c of r){let h=Math.max(c.minX,Math.min(t,c.maxX)),u=Math.max(c.minY,Math.min(e,c.maxY)),d=Math.max(c.minZ,Math.min(i,c.maxZ)),f=Math.hypot(h-t,u-e,d-i);if(f>n)continue;let p=s*(1-f/n)*(1-f/n*.5);this.damagePiece(c,p,a,"explosion")&&l++}return l}};function A1(o,t){switch(o){case"pine":return P.merge([P.cyl(.16,.28,3.2,6,5915186,0,1.6,0),P.cone(2.4,3.4,7,3103278,0,3.6,0,.12),P.cone(1.85,2.9,7,3499317,0,5.4,0,.12),P.cone(1.2,2.4,7,3960889,0,7,0,.12)]);case"oak":return P.merge([P.cyl(.24,.36,3.6,6,6178356,0,1.8,0),P.ico(2.3,0,5208626,0,4.9,0,1,.85,1,.15,.15),P.ico(1.7,0,5932600,1.3,4.2,.6,1,.9,1,.15,.2),P.ico(1.6,0,4616236,-1.2,4.4,-.7,1,.9,1,.15,.2),P.ico(1.4,0,6130746,.2,6,-.4,1,.9,1,.15,.2)]);case"birch":return P.merge([P.cyl(.12,.18,5.5,5,15131350,0,2.75,0),P.ico(1.4,0,8298570,0,5.6,0,1,1.3,1,.15,.15),P.ico(1,0,9219669,.6,4.6,.3,1,1.2,1,.15,.2)]);case"palm":{let e=[],i=0,n=0;for(let s=0;s<6;s++)e.push(P.cyl(.17,.22,1.25,6,s%2?9073748:8021064,i,n+.62,0,0,0,-.06*s)),i+=.08*s,n+=1.2;for(let s=0;s<7;s++){let a=s/7*Math.PI*2,r=P.box(.5,.06,3.2,6261306,0,0,1.5,-.35,0,0);r.rotateY(a),r.translate(i,n,0),e.push(r)}return e.push(P.ico(.4,0,6967344,i,n,0)),P.merge(e)}case"acacia":return P.merge([P.cyl(.14,.24,3.4,5,6968384,0,1.7,0,0,0,.12),P.cyl(.1,.14,1.6,5,6968384,.5,3.4,0,0,0,-.5),P.ico(2.6,0,8030786,.3,4.3,0,1.2,.32,1.1,.12,.2),P.ico(1.8,0,7307323,-1.2,4,.5,1.1,.3,1,.12,.2)]);case"snowpine":return P.merge([P.cyl(.16,.28,3.2,6,4864556,0,1.6,0),P.cone(2.4,3.4,7,2770486,0,3.6,0,.1),P.cone(2,1.2,7,15659766,0,4.7,0,.04),P.cone(1.85,2.9,7,3034170,0,5.4,0,.1),P.cone(1.5,1,7,15659766,0,6.3,0,.04),P.cone(1.2,2.4,7,3297854,0,7,0,.1),P.cone(.75,1.1,7,16054266,0,7.75,0,.04)]);case"shrub":return P.merge([P.ico(1,0,8224072,0,.6,0,1.3,.75,1.2,.18,.25),P.ico(.7,0,9079376,.6,.5,.3,1,.8,1,.18,.25)])}}var C1={snowpine:.3,pine:.3,oak:.38,birch:.2,palm:.25,acacia:.25,shrub:0},R1={snowpine:[4.8,2.2],pine:[4.8,2.2],oak:[4.9,2.6],birch:[5.2,1.4],palm:[7.2,2.2],acacia:[4.2,2.4],shrub:[.7,1.1]},Ra=class{constructor(t){this.world=t,this.meshes=[]}build(t,e){let{terrain:i,collision:n,def:s}=this.world,a=qe(s.seed+999),r=zi(s.seed+5),l=s.playHalf+30,c=(b,C,L=2)=>{for(let N of e.fps)if(b>N.minX-L&&b<N.maxX+L&&C>N.minZ-L&&C<N.maxZ+L)return!0;if(e.roadDist(b,C)<1.5||e.riverDist(b,C)<2)return!0;for(let N of e.noTree)if((b-N.x)**2+(C-N.z)**2<N.r*N.r)return!0;let k=i.heightAt(b,C);return i.waterLevel!==null&&k<i.waterLevel+.6||i.normalAt(b,C)[1]<.8},h=s.trees.types,u=s.trees.weights,d=()=>{let b=a(),C=0;for(let L=0;L<h.length;L++)if(C+=u[L],b<C)return h[L];return h[0]},f={};for(let b of h)f[b]=[];let p=(b,C,L)=>{let k=.75+a()*.6,N=i.heightAt(C,L)-.15;f[b].push([C,N,L,a()*Math.PI*2,k]);let O=C1[b]*k;O>0&&n.addBox({minX:C-O,maxX:C+O,minZ:L-O,maxZ:L+O,minY:N-.5,maxY:N+5*k,mat:"wood",cat:"tree",destructible:!1,pen:3,noStand:!0});let[U,X]=R1[b];n.addSoft({x:C,y:N+U*k,z:L,r:X*k,strength:b==="shrub"?.6:.5})};for(let[b,C,L]of e.forests||[]){let k=Math.floor(L*L*Math.PI/70);for(let N=0;N<k;N++){let O=a()*Math.PI*2,U=Math.sqrt(a())*L*(.8+.3*r(Math.cos(O)*2,Math.sin(O)*2)),X=b+Math.cos(O)*U,F=C+Math.sin(O)*U;c(X,F,2.5)||p(d(),X,F)}}let x=(l*2)**2,g=Math.floor(x*s.trees.scatter);for(let b=0;b<g;b++){let C=(a()-.5)*l*2,L=(a()-.5)*l*2;r(C/120,L/120)<-.1||c(C,L,3)||p(d(),C,L)}let m=new Rt,v=new De,y=new R,M=new R,S=new R(0,1,0);for(let b of h){let C=f[b];if(!C.length)continue;let L=A1(b,s.biome),k=new fe({vertexColors:!0,roughness:.9,flatShading:!0});Dh(k,b==="palm"?.025:.018,1.5,1.2);let N=new yi(L,k,C.length);C.forEach(([O,U,X,F,B],j)=>{v.setFromAxisAngle(S,F),y.set(O,U,X),M.set(B,B*(.9+j%5*.05),B),m.compose(y,v,M),N.setMatrixAt(j,m)}),N.castShadow=!0,N.receiveShadow=!0,N.computeBoundingSphere(),t.add(N),this.meshes.push(N),this.windMats=(this.windMats||[]).concat(k)}this.treeCount=h.reduce((b,C)=>b+f[C].length,0);let w=Math.floor(x*s.trees.bush),T=[];for(let b=0;b<w;b++){let C=(a()-.5)*l*2,L=(a()-.5)*l*2;c(C,L,1.5)||T.push([C,i.heightAt(C,L)-.1,L,a()*6.28,.7+a()*.8])}for(let[b,C,L]of e.forests||[])for(let k=0;k<L*.8;k++){let N=a()*Math.PI*2,O=b+Math.cos(N)*L*(1+a()*.2),U=C+Math.sin(N)*L*(1+a()*.2);c(O,U,1.5)||T.push([O,i.heightAt(O,U)-.1,U,a()*6.28,.8+a()*.7])}if(T.length){let b=s.biome==="arid"?[8223304,9078352]:s.biome==="winter"?[5925468,14673644]:[4616238,5603386],C=P.merge([P.ico(1,0,b[0],0,.55,0,1.3,.8,1.2,.2,.3),P.ico(.75,0,b[1],.55,.75,.25,1,.9,1,.2,.3),P.ico(.7,0,b[0],-.5,.5,-.3,1,.8,1,.2,.3)]),L=new fe({vertexColors:!0,roughness:.95,flatShading:!0});Dh(L,.05,.2,1.8);let k=new yi(C,L,T.length);T.forEach(([N,O,U,X,F],B)=>{v.setFromAxisAngle(S,X),y.set(N,O,U),M.set(F,F,F),m.compose(y,v,M),k.setMatrixAt(B,m),n.addSoft({x:N,y:O+.7*F,z:U,r:1.15*F,strength:.65})}),k.castShadow=!0,k.receiveShadow=!0,k.computeBoundingSphere(),t.add(k),this.meshes.push(k)}let A=Math.floor(x*s.trees.rock),_=[];for(let b=0;b<A;b++){let C=(a()-.5)*l*2,L=(a()-.5)*l*2,k=!1;for(let X of e.fps)if(C>X.minX-2&&C<X.maxX+2&&L>X.minZ-2&&L<X.maxZ+2){k=!0;break}if(k||e.roadDist(C,L)<1.5)continue;let N=i.heightAt(C,L);if(i.waterLevel!==null&&N<i.waterLevel-1)continue;let O=1-i.normalAt(C,L)[1];if(a()>.35+O*3)continue;let U=.5+Math.pow(a(),2.5)*3.2;_.push([C,N-U*.3,L,a()*6.28,U])}if(_.length){let b=s.biome==="arid"?11048314:s.biome==="winter"?10133670:9276036,C=P.merge([P.dodeca(1,b,0,0,0,1.2,.75,1,.15),P.dodeca(.6,b,.7,-.1,.3,1,.8,1,.15)]),L=new fe({vertexColors:!0,roughness:.95,flatShading:!0});jn(L,"rock",()=>{});let k=new yi(C,L,_.length);_.forEach(([N,O,U,X,F],B)=>{if(v.setFromAxisAngle(S,X),y.set(N,O,U),M.set(F,F,F),m.compose(y,v,M),k.setMatrixAt(B,m),F>.9){let j=F*.9;n.addBox({minX:N-j,maxX:N+j,minZ:U-j,maxZ:U+j,minY:O-F,maxY:O+F*.62+F*.3,mat:"stone",cat:"rock",destructible:!1,pen:9,vault:F*.92<1.25})}}),k.castShadow=!0,k.receiveShadow=!0,k.computeBoundingSphere(),t.add(k),this.meshes.push(k)}this.rockCount=_.length}setWind(t){Vi.uWind.value=t?1:0}},Pa=class{constructor(t,e){this.world=t,this.scene=e,this.mesh=null,this.level="off"}setLevel(t){if(t===this.level||(this.level=t,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null),t==="off"))return;let e={low:[120,.7],medium:[190,.52],high:[260,.42]}[t],[i,n]=e,s=this.world.terrain,a=this.world.def,r=[],l=[],c=[],h=new dt(a.grassColor[0]),u=new dt(a.grassColor[1]),d=new dt(a.grassColor[2]);for(let m=0;m<4;m++){let v=m/4*Math.PI*2+.4,y=Math.cos(v*1.7)*.12,M=Math.sin(v*1.3)*.12,S=Math.cos(v),w=Math.sin(v),T=.04,A=.24+m%2*.1,_=.09,b=-w*T,C=S*T,L=[[y-b,0,M-C],[y+b,0,M+C],[y+S*_*.4+b*.6,A*.55,M+w*_*.4+C*.6],[y-b,0,M-C],[y+S*_*.4+b*.6,A*.55,M+w*_*.4+C*.6],[y+S*_*.4-b*.6,A*.55,M+w*_*.4-C*.6],[y+S*_*.4-b*.6,A*.55,M+w*_*.4-C*.6],[y+S*_*.4+b*.6,A*.55,M+w*_*.4+C*.6],[y+S*_,A,M+w*_]],k=[h,h,u,h,u,u,u,u,d];for(let N=0;N<9;N++)r.push(...L[N]),l.push(k[N].r,k[N].g,k[N].b),c.push(0,1,0)}let f=new de;f.setAttribute("position",new Kt(r,3)),f.setAttribute("color",new Kt(l,3)),f.setAttribute("normal",new Kt(c,3));let p=new fe({vertexColors:!0,roughness:1,side:Re}),x={uCenter:{value:new R},uCam:{value:new R},uSpacing:{value:n},uN:{value:i},uHeight:{value:s.heightTex},uMask:{value:s.grassTex},uSize:{value:s.size},uHalf:{value:s.half},uTexN:{value:s.n},uRadius:{value:i*n*.5}};this.uniforms=x,jn(p,"grass",m=>{Object.assign(m.uniforms,x),m.uniforms.uTime=Vi.uTime,m.uniforms.uWind=Vi.uWind,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
          uniform vec3 uCenter; uniform vec3 uCam; uniform float uSpacing; uniform float uN; uniform sampler2D uHeight; uniform sampler2D uMask;
          uniform float uSize; uniform float uHalf; uniform float uTexN; uniform float uRadius; uniform float uTime; uniform float uWind;
          vec2 ghash(vec2 p) { p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }`).replace("#include <begin_vertex>",`
          float gid = float(gl_InstanceID);
          float gz = floor(gid / uN); float gx = gid - gz * uN;
          vec2 cell = (vec2(gx, gz) - uN * 0.5) * uSpacing + uCenter.xz;
          vec2 hh = ghash(cell);
          vec2 wp = cell + (hh - 0.5) * uSpacing * 0.9;
          vec2 tuv = ((wp + uHalf) / uSize) * ((uTexN - 1.0) / uTexN) + 0.5 / uTexN;
          float gh = texture(uHeight, tuv).r;
          float dens = texture(uMask, tuv).r;
          float dd = distance(wp, uCam.xz);
          float fade = 1.0 - smoothstep(uRadius * 0.55, uRadius * 0.98, dd);
          float keep = step(hh.y, dens * 1.05);
          float s = keep * fade * (0.65 + hh.x * 0.7);
          float ang = hh.x * 6.2831;
          float ca = cos(ang), sa = sin(ang);
          vec3 transformed = vec3(position.x * ca - position.z * sa, position.y, position.x * sa + position.z * ca) * s;
          float tipW = position.y * 2.2;
          float ph = uTime * 2.1 + wp.x * 0.35 + wp.y * 0.27;
          transformed.x += (sin(ph) * 0.09 + sin(ph * 2.7) * 0.03) * tipW * uWind * s;
          transformed.z += (cos(ph * 0.8) * 0.07) * tipW * uWind * s;
          transformed += vec3(wp.x, gh - 0.03, wp.y);`)});let g=new yi(f,p,i*i);g.frustumCulled=!1,g.castShadow=!1,g.receiveShadow=!0,this.mesh=g,this.scene.add(g)}update(t){if(!this.mesh)return;let e=this.uniforms.uSpacing.value;this.uniforms.uCenter.value.set(Math.round(t.x/e)*e,0,Math.round(t.z/e)*e),this.uniforms.uCam.value.copy(t)}};var Ys=1,Jn=2,Qn=4,pf=8,mf=16,gf=Math.SQRT2,ts=class{constructor(t){this.world=t,this.terrain=t.terrain,this.coll=t.collision,this.size=Math.floor(this.terrain.size),this.half=this.terrain.half,this.dim=this.size;let e=this.dim*this.dim;this.flags=new Uint8Array(e),this.floor=new Float32Array(e),this.cover=new Uint8Array(e),this.g=new Float32Array(e),this.parent=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.curStamp=1,this.heap=new ua(4096),this.dirty=[],this.build()}cellOf(t,e){let i=Math.floor(t+this.half),n=Math.floor(e+this.half);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}cx(t){return t%this.dim-this.half+.5}cz(t){return Math.floor(t/this.dim)-this.half+.5}build(){let{dim:t}=this;for(let e=0;e<t;e++)for(let i=0;i<t;i++)this.evalCell(e*t+i);this.computeCover(0,0,t-1,t-1)}evalCell(t){let e=this.cx(t),i=this.cz(t),n=this.terrain,s=n.heightAt(e,i),a=s,r=0,l=.2;this.coll.query(e-.05,i-.05,e+.05,i+.05,c=>{c.navFloor&&c.maxY>a&&c.maxY<s+12&&e>c.minX&&e<c.maxX&&i>c.minZ&&i<c.maxZ&&(a=c.maxY)}),this.coll.query(e-l,i-l,e+l,i+l,c=>{c.noCollide||c.navFloor||e+l<=c.minX||e-l>=c.maxX||i+l<=c.minZ||i-l>=c.maxZ||c.maxY<=a+.45||c.minY>=a+1.75||(c.vault&&c.maxY<=a+1.25?r|=Jn:r|=Ys)}),a===s&&(n.normalAt(e,i)[1]<.72&&(r|=pf),n.waterLevel!==null&&s<n.waterLevel-.4&&(r|=Qn,s<n.waterLevel-1.3&&(r|=mf))),this.flags[t]=r,this.floor[t]=a}computeCover(t,e,i,n){let{dim:s}=this,a=2;for(let r=Math.max(0,e);r<=Math.min(s-1,n);r++)for(let l=Math.max(0,t);l<=Math.min(s-1,i);l++){let c=r*s+l;if(this.flags[c]&Ys){this.cover[c]=0;continue}let h=0;for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){let f=l+d,p=r+u;f<0||p<0||f>=s||p>=s||this.flags[p*s+f]&(Ys|Jn)&&h++}this.cover[c]=Math.min(255,h*20)}}markDirty(t){this.dirty.push(t)}processDirty(){if(!this.dirty.length)return;let t=this.dirty;this.dirty=[];for(let e of t){let i=Math.floor(e.minX+this.half)-1,n=Math.floor(e.maxX+this.half)+1,s=Math.floor(e.minZ+this.half)-1,a=Math.floor(e.maxZ+this.half)+1;for(let r=Math.max(0,s);r<=Math.min(this.dim-1,a);r++)for(let l=Math.max(0,i);l<=Math.min(this.dim-1,n);l++)this.evalCell(r*this.dim+l);this.computeCover(i-2,s-2,n+2,a+2)}}walkable(t){return t>=0&&!(this.flags[t]&(Ys|pf))}isBlocked(t){return t<0||(this.flags[t]&Ys)!==0}isVault(t){return t>=0&&(this.flags[t]&Jn)!==0}isWater(t){return t>=0&&(this.flags[t]&Qn)!==0}cost(t,e){let i=this.flags[t],n=1;if(i&Jn&&(n+=4),i&Qn&&(n+=i&mf?14:4),e&&e.coverBias&&(n+=(1-this.cover[t]/255)*e.coverBias),e&&e.avoid){let s=this.cx(t),a=this.cz(t);for(let r of e.avoid){let l=s-r.x,c=a-r.z,h=l*l+c*c;h<r.r*r.r&&(n+=r.w*(1-h/(r.r*r.r)))}}return n}nearestWalkable(t,e,i=6){let n=this.cellOf(t,e);if(this.walkable(n))return n;let s=Math.floor(t+this.half),a=Math.floor(e+this.half);for(let r=1;r<=i;r++)for(let l=-r;l<=r;l++)for(let c=-r;c<=r;c++){if(Math.abs(c)!==r&&Math.abs(l)!==r)continue;let h=s+c,u=a+l;if(h<0||u<0||h>=this.dim||u>=this.dim)continue;let d=u*this.dim+h;if(this.walkable(d))return d}return-1}findPath(t,e,i,n,s={}){let a=this.nearestWalkable(t,e,4),r=this.nearestWalkable(i,n,8);if(a<0||r<0)return null;if(a===r)return[[i,n]];let{dim:l}=this,c=s.maxNodes||4e4,h=s.weight||1.35,u=++this.curStamp,d=this.heap;d.clear();let f=r%l,p=Math.floor(r/l),x=C=>{let L=Math.abs(C%l-f),k=Math.abs(Math.floor(C/l)-p);return(L+k+(gf-2)*Math.min(L,k))*h};this.g[a]=0,this.stamp[a]=u,this.parent[a]=-1,d.push(a,x(a));let g=a,m=x(a),v=0,y=!1;for(;d.size;){let C=d.pop();if(this.closed[C]===u)continue;if(this.closed[C]=u,C===r){y=!0;break}if(++v>c)break;let L=C%l,k=(C-L)/l,N=this.g[C];for(let O=0;O<8;O++){let U=O<4?[1,-1,0,0][O]:[1,1,-1,-1][O-4],X=O<4?[0,0,1,-1][O]:[1,-1,1,-1][O-4],F=L+U,B=k+X;if(F<0||B<0||F>=l||B>=l)continue;let j=B*l+F;if(!this.walkable(j)||this.closed[j]===u||Math.abs(this.floor[j]-this.floor[C])>.9&&!(this.flags[j]&Jn)||O>=4&&(!this.walkable(k*l+F)||!this.walkable(B*l+L)))continue;let rt=N+(O<4?1:gf)*this.cost(j,s);if(this.stamp[j]!==u||rt<this.g[j]){this.stamp[j]=u,this.g[j]=rt,this.parent[j]=C;let st=x(j);d.push(j,rt+st),st<m&&(m=st,g=j)}}}let M=y?r:g;if(M===a)return null;let S=[],w=M,T=0;for(;w!==-1&&T++<1e5&&(S.push(w),w!==a);)w=this.parent[w];S.reverse();let A=[],_=0;A.push([this.cx(S[0]),this.cz(S[0])]);let b=1;for(;b<S.length;){let C=b;for(let L=b;L<Math.min(S.length,_+60)&&this.lineWalkable(S[_],S[L]);L++)C=L;A.push([this.cx(S[C]),this.cz(S[C])]),_=C,b=C+1}return y&&(A[A.length-1]=[i,n]),A.partial=!y,A}lineWalkable(t,e){let{dim:i}=this,n=t%i,s=Math.floor(t/i),a=e%i,r=Math.floor(e/i),l=Math.abs(a-n),c=Math.abs(r-s),h=n<a?1:-1,u=s<r?1:-1,d=l-c,f=this.floor[t];for(let p=0;p<400;p++){let x=s*i+n;if(!this.walkable(x)||this.flags[x]&(Jn|Qn)||Math.abs(this.floor[x]-f)>1.2)return!1;if(n===a&&s===r)return!0;let g=2*d;if(g>-c&&g<l&&(!this.walkable(s*i+n+h)||!this.walkable((s+u)*i+n)))return!1;g>-c&&(d-=c,n+=h),g<l&&(d+=l,s+=u)}return!1}findCover(t,e,i,n,s={}){let a=[],r=Math.ceil(n),l=Math.floor(t+this.half),c=Math.floor(e+this.half),{dim:h}=this,u=[];for(let p=-r;p<=r;p+=1)for(let x=-r;x<=r;x+=1){let g=x*x+p*p;if(g>r*r)continue;let m=l+x,v=c+p;if(m<1||v<1||m>=h-1||v>=h-1)continue;let y=v*h+m;!this.walkable(y)||this.cover[y]<30||this.flags[y]&Qn||u.push([y,g])}u.sort((p,x)=>x[0]%7-p[0]%7+(p[1]-x[1])*.02);let d=s.maxTests||28,f=0;for(let[p,x]of u){if(f++>d)break;let g=this.cx(p),m=this.cz(p),v=this.floor[p];if(!!this.coll.los(g,v+.95,m,i.x,i.y,i.z))continue;let M=this.coll.los(g,v+1.6,m,i.x,i.y,i.z),S=i.x-g,w=i.z-m,T=Math.hypot(S,w);if(s.minThreatDist&&T<s.minThreatDist)continue;let A=null;if(!M&&T>.1){let b=-w/T,C=S/T;for(let L of[1,-1]){let k=g+b*L*.6,N=m+C*L*.6;if(this.coll.los(k,v+1.5,N,i.x,i.y,i.z)&&this.coll.los(g,v+1.5,m,k,v+1.5,N)){A={x:b*L,z:C*L};break}}}let _=(M?3:A?2.7:1)-Math.sqrt(x)*.12+this.cover[p]/255;s.prefer&&(_-=Math.hypot(g-s.prefer.x,m-s.prefer.z)*.04),s.occupied&&s.occupied(g,m)&&(_-=4),a.push({x:g,z:m,y:v,peek:M,lean:A,score:_})}return a.sort((p,x)=>x.score-p.score),a}randomWalkableNear(t,e,i,n=Math.random){for(let a=0;a<20;a++){let r=n()*Math.PI*2,l=Math.sqrt(n())*i,c=this.cellOf(t+Math.cos(r)*l,e+Math.sin(r)*l);if(this.walkable(c)&&!(this.flags[c]&Qn))return[this.cx(c),this.cz(c),this.floor[c]]}let s=this.nearestWalkable(t,e,10);return s>=0?[this.cx(s),this.cz(s),this.floor[s]]:[t,e,this.terrain.heightAt(t,e)]}};ts.BLOCKED=Ys;ts.VAULT=Jn;ts.WATER=Qn;var $s=()=>new Promise(o=>setTimeout(o,0)),Da=class{constructor(t,e){this.def=t,this.scene=e}async build(t){let e=this.def,i=this.scene;e._n=zi(e.seed),t("Planning layout",.05),await $s();let n=new da(e);n.noise=e._n,e.layout(n),this.layout=n,t("Shaping terrain",.15),await $s(),this.terrain=new Ea(e,n),this.terrain.buildMesh(i),this.collision=new Aa(this.terrain),t("Constructing buildings",.35),await $s(),this.structures=new Ca(this);for(let s of n.buildings)this.structures.building(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.props)this.structures.prop(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.bridges){let a=this.terrain.heightAt(s.x,s.z-s.len/2-1),r=this.terrain.heightAt(s.x,s.z+s.len/2+1),l=Math.max(a,r,(this.terrain.waterLevel??0)+2)+.15;this.structures.prop("bridge",s.x,s.z,0,{len:s.len+4,w:s.w,deckY:l,y:l-3}),this.structures.footprints.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.len/2,maxZ:s.z+s.len/2,color:"rgba(160,155,145,0.95)"}),s.deckY=l}return this.flagPoles(i),this.structures.finalize(i),t("Growing vegetation",.6),await $s(),this.vegetation=new Ra(this),this.vegetation.build(i,n),t("Building navigation mesh",.75),await $s(),this.nav=new ts(this),t("Drawing maps",.92),await $s(),this.mapImage=this.terrain.renderMapImage(768,this.structures.footprints),this}flagPoles(t){let e=[];for(let n of this.def.flags){let s=this.terrain.heightAt(n.x,n.z);e.push(P.cyl(.07,.09,9,6,14211288,n.x,s+4.5,n.z)),e.push(P.cyl(.4,.5,.4,8,6974058,n.x,s+.2,n.z))}let i=new Ot(P.merge(e),Sn("poles",{roughness:.6}));i.castShadow=!0,t.add(i),this.flagCloth=this.def.flags.map(n=>{let s=this.terrain.heightAt(n.x,n.z),a=new Ot(new Ke(1.8,1.1,6,3),new fe({color:13421772,side:Re,roughness:.9}));return a.geometry.translate(.9,0,0),a.position.set(n.x+.08,s+8.3,n.z),a.castShadow=!0,t.add(a),a})}updateFlags(t,e){if(this.flagCloth&&(t.flags.forEach(i=>{let n=this.def.flags.findIndex(h=>h.id===i.id),s=this.flagCloth[n];if(!s)return;let a=i.owner===0?4034016:i.owner===1?14700605:13684944;s.material.color.setHex(a);let r=this.terrain.heightAt(i.x,i.z);s.position.y=r+1.8+Math.abs(i.progress)*6.5;let l=s.geometry.attributes.position;s.userData.base||(s.userData.base=l.array.slice());let c=s.userData.base;for(let h=0;h<l.count;h++){let u=c[h*3];l.array[h*3+2]=Math.sin(u*2.4-e*5+i.x)*.12*u}l.needsUpdate=!0,s.rotation.y=.6}),!t.flags.length))for(let i of this.flagCloth)i.visible=!1}};var Zs=class o extends Ot{constructor(){let t=o.SkyShader,e=new Jt({name:t.name,uniforms:Be.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Fe,depthWrite:!1});super(new ui(1,1,1),e),this.isSky=!0}};Zs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var zh=new Rt,Dr=class o{constructor(t){t=t||{},this.zNear=t.webGL===!0?-1:0,this.vertices={near:[new R,new R,new R,new R],far:[new R,new R,new R,new R]},t.projectionMatrix!==void 0&&this.setFromProjectionMatrix(t.projectionMatrix,t.maxFar||1e4)}setFromProjectionMatrix(t,e){let i=this.zNear,n=t.elements[2*4+3]===0;return zh.copy(t).invert(),this.vertices.near[0].set(1,1,i),this.vertices.near[1].set(1,-1,i),this.vertices.near[2].set(-1,-1,i),this.vertices.near[3].set(-1,1,i),this.vertices.near.forEach(function(s){s.applyMatrix4(zh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(s){s.applyMatrix4(zh);let a=Math.abs(s.z);n?s.z*=Math.min(e/a,1):s.multiplyScalar(Math.min(e/a,1))}),this.vertices}split(t,e){for(;t.length>e.length;)e.push(new o);e.length=t.length;for(let i=0;i<t.length;i++){let n=e[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i-1]);if(i===t.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i])}}toSpace(t,e){for(let i=0;i<4;i++)e.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(t),e.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(t)}};var Uh={lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
 	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

  		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
		vec2 cascade;
		float cascadeCenter;
		float closestEdge;
		float margin;
		float csmx;
		float csmy;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				// NOTE: Depth gets larger away from the camera.
				// cascade.x is closer, cascade.y is further
				cascade = CSM_cascades[ i ];
				cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
				closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
				margin = 0.25 * pow( closestEdge, 2.0 );
				csmx = cascade.x - margin / 2.0;
				csmy = cascade.y + margin / 2.0;
				if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

					float dist = min( linearDepth - csmx, csmy - linearDepth );
					float ratio = clamp( dist / margin, 0.0, 1.0 );

					vec3 prevColor = directLight.color;
					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
					directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

					ReflectedLight prevLight = reflectedLight;
					RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

					bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
					float blendRatio = shouldBlend ? ratio : 1.0;

					reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
					reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
					reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
					reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

				}
			#endif

		}
		#pragma unroll_loop_end
	#elif defined (USE_SHADOWMAP)

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

				directionalLightShadow = directionalLightShadows[ i ];
				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )
		// note: no loop here - all CSM lights are in fact one light only
		getDirectionalLightInfo( directionalLights[0], directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, directLight );

			RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+Wt.lights_pars_begin};var xf=new Rt,Nh=new Dr({webGL:!0}),on=new R,Ir=new Ii,Fh=[],Oh=[],Bh=new Rt,vf=new Rt,P1=new R(0,1,0),Ia=class{constructor(t){this.camera=t.camera,this.parent=t.parent,this.cascades=t.cascades||3,this.maxFar=t.maxFar||1e5,this.mode=t.mode||"practical",this.shadowMapSize=t.shadowMapSize||2048,this.shadowBias=t.shadowBias||1e-6,this.lightDirection=t.lightDirection||new R(1,-1,1).normalize(),this.lightIntensity=t.lightIntensity||3,this.lightNear=t.lightNear||1,this.lightFar=t.lightFar||2e3,this.lightMargin=t.lightMargin||200,this.customSplitsCallback=t.customSplitsCallback,this.fade=!1,this.mainFrustum=new Dr({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let t=0;t<this.cascades;t++){let e=new bi(16777215,this.lightIntensity);e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,e.shadow.camera.near=this.lightNear,e.shadow.camera.far=this.lightFar,e.shadow.bias=this.shadowBias,this.parent.add(e),this.parent.add(e.target),this.lights.push(e)}}initCascades(){let t=this.camera;t.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){let t=this.frustums;for(let e=0;e<t.length;e++){let n=this.lights[e].shadow.camera,s=this.frustums[e],a=s.vertices.near,r=s.vertices.far,l=r[0],c;l.distanceTo(r[2])>l.distanceTo(a[2])?c=r[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){let u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),p=.25*Math.pow(f,2)*(d-u.near);h+=p}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){let t=this.camera,e=Math.min(t.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,t.near,e,this.breaks);break;case"logarithmic":n(this.cascades,t.near,e,this.breaks);break;case"practical":s(this.cascades,t.near,e,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,t.near,e,this.breaks);break}function i(a,r,l,c){for(let h=1;h<a;h++)c.push((r+(l-r)*h/a)/l);c.push(1)}function n(a,r,l,c){for(let h=1;h<a;h++)c.push(r*(l/r)**(h/a)/l);c.push(1)}function s(a,r,l,c,h){Fh.length=0,Oh.length=0,n(a,r,l,Oh),i(a,r,l,Fh);for(let u=1;u<a;u++)h.push(Rd.lerp(Fh[u-1],Oh[u-1],c));h.push(1)}}update(){let t=this.camera,e=this.frustums;Bh.lookAt(new R,this.lightDirection,P1),vf.copy(Bh).invert();for(let i=0;i<e.length;i++){let n=this.lights[i],s=n.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,r=(s.top-s.bottom)/this.shadowMapSize;xf.multiplyMatrices(vf,t.matrixWorld),e[i].toSpace(xf,Nh);let l=Nh.vertices.near,c=Nh.vertices.far;Ir.makeEmpty();for(let h=0;h<4;h++)Ir.expandByPoint(l[h]),Ir.expandByPoint(c[h]);Ir.getCenter(on),on.z=Ir.max.z+this.lightMargin,on.x=Math.floor(on.x/a)*a,on.y=Math.floor(on.y/r)*r,on.applyMatrix4(Bh),n.position.copy(on),n.target.position.copy(on),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){Wt.lights_fragment_begin=Uh.lights_fragment_begin,Wt.lights_pars_begin=Uh.lights_pars_begin}setupMaterial(t){t.defines=t.defines||{},t.defines.USE_CSM=1,t.defines.CSM_CASCADES=this.cascades,this.fade&&(t.defines.CSM_FADE="");let e=[],i=this,n=this.shaders;t.onBeforeCompile=function(s){let a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(e),s.uniforms.CSM_cascades={value:e},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},n.set(t,s)},n.set(t,null)}updateUniforms(){let t=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){let s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=t}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(t){for(;t.length<this.breaks.length;)t.push(new lt);t.length=this.breaks.length;for(let e=0;e<this.cascades;e++){let i=this.breaks[e],n=this.breaks[e-1]||0;t[e].x=n,t[e].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let t=0;t<this.lights.length;t++)this.parent.remove(this.lights[t].target),this.parent.remove(this.lights[t])}dispose(){let t=this.shaders;t.forEach(function(e,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),i.needsUpdate=!0}),t.clear()}};var yf={morning:{elev:32,az:125,sun:[1,.93,.82],sunI:3.6,sky:[.55,.68,.92],ground:[.38,.34,.26],hemiI:.55,fog:[.62,.72,.84],fogD:.0012,turb:2.6,ray:1.2,exp:1,skyMul:.62,env:.35},noon:{elev:64,az:160,sun:[1,.98,.94],sunI:3.8,sky:[.55,.68,.94],ground:[.42,.38,.3],hemiI:.55,fog:[.66,.74,.86],fogD:.001,turb:2.4,ray:1,exp:.92,skyMul:.6,env:.35},afternoon:{elev:26,az:245,sun:[1,.86,.68],sunI:3.7,sky:[.66,.68,.78],ground:[.5,.42,.3],hemiI:.55,fog:[.8,.72,.6],fogD:.0015,turb:5,ray:1.4,exp:.98,skyMul:.62,env:.38},dusk:{elev:6,az:275,sun:[1,.6,.36],sunI:2.8,sky:[.45,.42,.58],ground:[.32,.24,.2],hemiI:.45,fog:[.58,.46,.42],fogD:.0019,turb:8,ray:2.4,exp:1.15,skyMul:.7,env:.32},overcast:{elev:48,az:150,sun:[.92,.94,1],sunI:1.7,sky:[.62,.66,.72],ground:[.36,.35,.33],hemiI:.95,fog:[.6,.63,.67],fogD:.0026,turb:10,ray:.6,exp:1.05,skyMul:.55,env:.45},snow:{elev:26,az:140,sun:[.95,.97,1],sunI:2.5,sky:[.68,.75,.86],ground:[.72,.76,.8],hemiI:.85,fog:[.8,.84,.9],fogD:.0042,turb:8,ray:.8,exp:.9,skyMul:.6,env:.45},night:{elev:38,az:200,sun:[.55,.65,1],sunI:.42,sky:[.12,.16,.28],ground:[.05,.05,.07],hemiI:.35,fog:[.03,.04,.07],fogD:.0032,turb:2,ray:.3,exp:1.25,skyMul:0,env:.12,night:!0}},La=class{constructor(t,e,i,n){this.renderer=t,this.scene=e,this.camera=i,this.settings=n,this.sunDir=new R(0,1,0),this.shadowMode=null,this.csm=null,this.hemi=new sn(16777215,4473924,.7),e.add(this.hemi),this.sun=new bi(16777215,3),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun),e.add(this.sun.target),this.sky=new Zs,this.sky.material.depthWrite=!1,this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.skyUniforms={uFogColor:{value:new dt},uHorizon:{value:1},uSkyMul:{value:1}},Object.assign(this.sky.material.uniforms,this.skyUniforms),this.sky.material.fragmentShader=this.sky.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform vec3 uFogColor; uniform float uHorizon; uniform float uSkyMul;`).replace("gl_FragColor = vec4( retColor, 1.0 );",`
        retColor *= uSkyMul;
        retColor = mix(retColor, uFogColor, smoothstep(0.16, -0.04, direction.y) * uHorizon);
        gl_FragColor = vec4( retColor, 1.0 );`),e.add(this.sky);let s=new de,a=[];for(let r=0;r<1800;r++){let l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=Math.abs(l);a.push(Math.cos(c)*h,u,Math.sin(c)*h)}s.setAttribute("position",new Kt(a,3)),this.stars=new Oo(s,new xr({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})),this.stars.visible=!1,this.stars.frustumCulled=!1,this.stars.renderOrder=-9,e.add(this.stars),this.fog=new No(11189196,.0015),e.fog=this.fog,this.pmrem=new Ds(t),this.envMap=null}setTime(t){let e=yf[t]||yf.morning;this.time=e,this.timeName=t;let i=(90-e.elev)*ne,n=e.az*ne;this.sunDir.setFromSphericalCoords(1,i,n);let s=this.sky.material.uniforms;if(s.turbidity.value=e.turb,s.rayleigh.value=e.ray,s.mieCoefficient.value=.005,s.mieDirectionalG.value=.8,s.sunPosition.value.copy(this.sunDir).multiplyScalar(e.night?-1:1),this.skyUniforms.uSkyMul.value=e.skyMul,this.sun.color.setRGB(...e.sun),this.sun.intensity=e.sunI,this.hemi.color.setRGB(...e.sky),this.hemi.groundColor.setRGB(...e.ground),this.hemi.intensity=e.hemiI,this.fogColor=new dt().setRGB(...e.fog),this.fog.color.copy(this.fogColor),this.skyUniforms.uFogColor.value.copy(this.fogColor),this.stars.visible=!!e.night,this.renderer.toneMappingExposure=e.exp,this.csm)for(let a of this.csm.lights)a.color.copy(this.sun.color),a.intensity=e.sunI;this.csm&&this.csm.lightDirection.copy(this.sunDir).negate(),this.applySettings(),this.buildEnvMap()}buildEnvMap(){this.envMap&&(this.envMap.dispose(),this.envMap=null);let t=this.time,e=new Bi,i=new Zs;i.material.uniforms.turbidity.value=t.turb,i.material.uniforms.rayleigh.value=t.ray,i.material.uniforms.sunPosition.value.copy(this.sunDir),i.scale.setScalar(1e3),e.add(i),t.night&&(e.background=new dt(659488));let n=new Ot(new Ke(2e3,2e3),new Li({color:new dt().setRGB(...t.ground).multiplyScalar(.6)}));n.rotation.x=-Math.PI/2,n.position.y=-5,e.add(n),this.envMap=this.pmrem.fromScene(e,0,.1,3e3).texture,i.geometry.dispose(),i.material.dispose(),this.applySettings()}applySettings(){let t=this.settings,e=this.time;e&&(this.fog.density=t.get("fog")?e.fogD*(900/Math.max(500,t.get("viewDistance")))**.5:1e-5,this.sky.visible=t.get("atmosphere"),this.scene.background=t.get("atmosphere")?null:this.fogColor,this.skyUniforms.uHorizon.value=t.get("fog")?1:.35,this.scene.environment=t.get("ibl")?this.envMap:null,this.scene.environmentIntensity=e.env,this.hemi.intensity=e.hemiI*(t.get("ibl")?.8:1.25),this.setShadows(t.get("shadows")))}setShadows(t){if(t!==this.shadowMode){if(this.shadowMode=t,this.csm&&(ya(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.sun.visible=!0,this.sun.castShadow=!1,t==="low"||t==="medium"){let e=t==="low"?1024:2048,i=t==="low"?45:75;this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=-i,n.right=i,n.top=i,n.bottom=-i,n.near=1,n.far=600,n.updateProjectionMatrix(),this.shadowExt=i}else if(t==="high"||t==="ultra"){this.sun.visible=!1,this.csm=new Ia({maxFar:t==="ultra"?520:320,cascades:t==="ultra"?4:3,mode:"practical",parent:this.scene,shadowMapSize:t==="ultra"?4096:2048,lightDirection:this.sunDir.clone().negate(),camera:this.camera,lightIntensity:this.time?this.time.sunI:3,lightNear:1,lightFar:1400,lightMargin:250,shadowBias:-2e-4});for(let e of this.csm.lights)e.shadow.normalBias=.05,this.time&&e.color.copy(this.sun.color);this.csm.fade=!0,ya(this.csm)}}}update(t){this.sky.position.copy(t);let e=this.camera.far;if(this.sky.scale.setScalar(e*1),this.stars.position.copy(t),this.stars.scale.setScalar(e*.45),this.csm)this.csm.update();else if(this.sun.castShadow){let i=this.shadowExt,n=this.sun.shadow.mapSize.x,s=i*2/n,a=t.clone();a.x=Math.round(a.x/s)*s,a.z=Math.round(a.z/s)*s,this.sun.target.position.copy(a),this.sun.position.copy(a).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld()}else this.sun.position.copy(t).addScaledVector(this.sunDir,300),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}dispose(){this.csm&&(ya(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.envMap&&this.envMap.dispose(),this.pmrem.dispose()}};var ka=class{constructor(t,e,i){this.world=t,this.scene=e,this.env=i;let n=t.terrain;this.level=n.waterLevel,this.rt=new ye(512,512,{type:Se}),this.textureMatrix=new Rt,this.virtualCam=new be;let s=t.def.biome==="arid"?[.02,.12,.16]:[.03,.09,.08],a=t.def.biome==="arid"?[.12,.38,.38]:[.12,.24,.17];this.uniforms={uTime:Vi.uTime,uReflection:{value:this.rt.texture},uTexMat:{value:this.textureMatrix},uUseRefl:{value:1},uNoise:{value:si("noise")},uHeight:{value:n.heightTex},uSize:{value:n.size},uHalf:{value:n.half},uTexN:{value:n.n},uLevel:{value:this.level},uSunDir:{value:new R},uSunColor:{value:new dt},uSkyColor:{value:new dt},uFogColor:{value:new dt},uFogDensity:{value:.001},uWaves:{value:1},uDeep:{value:new dt().setRGB(...s)},uShallow:{value:new dt().setRGB(...a)}};let r=new Jt({uniforms:this.uniforms,transparent:!0,depthWrite:!0,vertexShader:`
        uniform float uTime; uniform float uWaves; uniform mat4 uTexMat;
        varying vec3 vW; varying vec4 vMirror; varying float vFogDepth;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          float w = sin(wp.x * 0.13 + uTime * 1.1) * 0.09 + sin(wp.z * 0.19 + uTime * 0.85) * 0.07 + sin((wp.x + wp.z) * 0.37 + uTime * 1.9) * 0.035;
          wp.y += w * uWaves;
          vW = wp.xyz;
          vMirror = uTexMat * (modelMatrix * vec4(position, 1.0));
          vec4 mv = viewMatrix * wp;
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime; uniform sampler2D uReflection; uniform float uUseRefl; uniform sampler2D uNoise; uniform sampler2D uHeight;
        uniform float uSize; uniform float uHalf; uniform float uTexN; uniform float uLevel; uniform float uWaves;
        uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSkyColor; uniform vec3 uFogColor; uniform float uFogDensity;
        uniform vec3 uDeep; uniform vec3 uShallow;
        varying vec3 vW; varying vec4 vMirror; varying float vFogDepth;
        void main() {
          vec2 p = vW.xz;
          vec2 n1 = texture2D(uNoise, p * 0.035 + vec2(uTime * 0.012, uTime * 0.008)).rg - 0.5;
          vec2 n2 = texture2D(uNoise, p * 0.11 - vec2(uTime * 0.02, -uTime * 0.017)).rg - 0.5;
          vec2 n3 = texture2D(uNoise, p * 0.31 + vec2(uTime * 0.04, uTime * 0.03)).rg - 0.5;
          vec2 pert = (n1 * 0.6 + n2 * 0.45 + n3 * 0.25) * (0.35 + 0.65 * uWaves);
          vec3 N = normalize(vec3(pert.x, 1.0, pert.y));
          vec3 V = normalize(cameraPosition - vW);
          float fres = 0.02 + 0.98 * pow(1.0 - max(dot(V, N), 0.0), 5.0);
          vec3 refl;
          if (uUseRefl > 0.5) {
            vec4 mc = vMirror; mc.xy += pert * 1.4 * mc.w * 0.08;
            refl = texture2DProj(uReflection, mc).rgb;
          } else {
            vec3 R = reflect(-V, N);
            refl = mix(uFogColor, uSkyColor, smoothstep(-0.05, 0.4, R.y));
          }
          vec2 tuv = ((vW.xz + uHalf) / uSize) * ((uTexN - 1.0) / uTexN) + 0.5 / uTexN;
          float ground = texture2D(uHeight, tuv).r;
          float depth = max(uLevel - ground, 0.0);
          vec3 body = mix(uShallow, uDeep, smoothstep(0.2, 3.5, depth));
          vec3 col = mix(body, refl, clamp(fres, 0.0, 1.0));
          vec3 H = normalize(uSunDir + V);
          float spec = pow(max(dot(N, H), 0.0), 220.0) * 3.0;
          col += uSunColor * spec;
          float foamN = texture2D(uNoise, p * 0.25 + vec2(uTime * 0.05, 0.0)).b;
          float foam = (1.0 - smoothstep(0.0, 0.55, depth)) * smoothstep(0.35, 0.65, foamN + sin(uTime * 1.6 + depth * 9.0) * 0.18) * uWaves;
          col = mix(col, vec3(0.85, 0.88, 0.86) * (0.4 + 0.6 * uSunColor), foam * 0.8);
          float alpha = clamp(0.55 + depth * 0.25 + fres * 0.3, 0.0, 0.96);
          alpha = max(alpha * smoothstep(0.0, 0.25, depth + 0.05), foam * 0.8);
          float fogF = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fogF, 0.0, 1.0));
          gl_FragColor = vec4(col, alpha);
        }`}),l=n.size+400,c=new Ke(l,l,160,160);c.rotateX(-Math.PI/2),this.mesh=new Ot(c,r),this.mesh.position.y=this.level,this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,e.add(this.mesh),this.hideList=[]}setQuality(t,e){this.reflections=t,this.uniforms.uUseRefl.value=t?1:0,this.uniforms.uWaves.value=e?1:0}update(t){let e=this.uniforms;e.uSunDir.value.copy(t.sunDir),e.uSunColor.value.copy(t.sun.color).multiplyScalar(t.time.night?.4:1),e.uSkyColor.value.setRGB(...t.time.sky),e.uFogColor.value.copy(t.fog.color),e.uFogDensity.value=t.fog.density}renderReflection(t,e,i,n,s){if(!this.reflections)return;let a=i.position;if(a.y<this.level)return;let r=Math.max(256,Math.floor(n*.5)),l=Math.max(256,Math.floor(s*.5));(this.rt.width!==r||this.rt.height!==l)&&this.rt.setSize(r,l);let c=this.virtualCam;c.copy(i,!1),c.position.set(a.x,2*this.level-a.y,a.z);let h=new R;i.getWorldDirection(h),h.y=-h.y,c.up.set(0,1,0),c.lookAt(c.position.clone().add(h)),c.updateMatrixWorld(),c.projectionMatrix.copy(i.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(c.projectionMatrix),this.textureMatrix.multiply(c.matrixWorldInverse);let u=new Pi(new R(0,1,0),-this.level);u.applyMatrix4(c.matrixWorldInverse);let d=new re(u.normal.x,u.normal.y,u.normal.z,u.constant),f=c.projectionMatrix,p=new re((Math.sign(d.x)+f.elements[8])/f.elements[0],(Math.sign(d.y)+f.elements[9])/f.elements[5],-1,(1+f.elements[10])/f.elements[14]);d.multiplyScalar(2/d.dot(p)),f.elements[2]=d.x,f.elements[6]=d.y,f.elements[10]=d.z+1-.003,f.elements[14]=d.w,this.mesh.visible=!1;let x=[];for(let v of this.hideList)v&&v.visible&&(v.visible=!1,x.push(v));let g=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;let m=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,c),t.setRenderTarget(m),t.shadowMap.autoUpdate=g;for(let v of x)v.visible=!0;this.mesh.visible=!0}};var En={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ze=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},D1=new Ps(-1,1,1,-1,0,1),Hh=class extends de{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},I1=new Hh,Si=class{constructor(t){this._mesh=new Ot(I1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,D1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var An=class extends ze{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Jt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Be.clone(t.uniforms),this.material=new Jt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Si(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lr=class extends ze{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},za=class extends ze{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ua=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Se}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new An(En),this.copyPass.material.blending=Ee,this.clock=new ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Lr!==void 0&&(a instanceof Lr?i=!0:a instanceof za&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Na=class extends ze{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Mf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var js=class o extends ze{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ye(s,a,{type:Se}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ye(s,a,{type:Se});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ye(s,a,{type:Se});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let r=Mf;this.highPassUniforms=Be.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=En;this.copyUniforms=Be.clone(h.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:en,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new Li,this.fsQuad=new Si(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new lt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Jt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Jt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};js.BlurDirectionX=new lt(1,0);js.BlurDirectionY=new lt(0,1);var bf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Fa=class extends ze{constructor(){super();let t=bf;this.uniforms=Be.clone(t.uniforms),this.material=new jo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var kr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Rt},cameraProjectionMatrixInverse:{value:new Rt},cameraWorldMatrix:{value:new Rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},zr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Oa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function _f(o=5){let t=Math.floor(o)%2===0?Math.floor(o)+1:Math.floor(o),e=L1(t),i=e.length,n=new Uint8Array(i*4);for(let a=0;a<i;++a){let r=e[a],l=2*Math.PI*r/i,c=new R(Math.cos(l),Math.sin(l),0).normalize();n[a*4]=(c.x*.5+.5)*255,n[a*4+1]=(c.y*.5+.5)*255,n[a*4+2]=127,n[a*4+3]=255}let s=new Hi(n,t,t);return s.wrapS=Di,s.wrapT=Di,s.needsUpdate=!0,s}function L1(o){let t=Math.floor(o)%2===0?Math.floor(o)+1:Math.floor(o),e=t*t,i=Array(e).fill(0),n=Math.floor(t/2),s=t-1;for(let a=1;a<=e;){if(n===-1&&s===t?(s=t-2,n=0):(s===t&&(s=0),n<0&&(n=t-1)),i[n*t+s]!==0){s-=2,n++;continue}else i[n*t+s]=a++;s++,n--}return i}var Ur={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Vh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraProjectionMatrixInverse:{value:new Rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Vh(o,t,e){let i=k1(o,t,e),n="vec3[SAMPLES](";for(let s=0;s<o;s++){let a=i[s];n+=`vec3(${a.x}, ${a.y}, ${a.z})${s<o-1?",":")"}`}return n}function k1(o,t,e){let i=[];for(let n=0;n<o;n++){let s=2*Math.PI*t*n/o,a=Math.pow(n/(o-1),e);i.push(new R(Math.cos(s),Math.sin(s),a))}return i}var Ba=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,s){return t[0]*e+t[1]*i+t[2]*n+t[3]*s}noise(t,e){let i,n,s,a=.5*(Math.sqrt(3)-1),r=(t+e)*a,l=Math.floor(t+r),c=Math.floor(e+r),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,x=e-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let v=p-g+h,y=x-m+h,M=p-1+2*h,S=x-1+2*h,w=l&255,T=c&255,A=this.perm[w+this.perm[T]]%12,_=this.perm[w+g+this.perm[T+m]]%12,b=this.perm[w+1+this.perm[T+1]]%12,C=.5-p*p-x*x;C<0?i=0:(C*=C,i=C*C*this.dot(this.grad3[A],p,x));let L=.5-v*v-y*y;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[_],v,y));let k=.5-M*M-S*S;return k<0?s=0:(k*=k,s=k*k*this.dot(this.grad3[b],M,S)),70*(i+n+s)}noise3d(t,e,i){let n,s,a,r,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(i+c),f=1/6,p=(h+u+d)*f,x=h-p,g=u-p,m=d-p,v=t-x,y=e-g,M=i-m,S,w,T,A,_,b;v>=y?y>=M?(S=1,w=0,T=0,A=1,_=1,b=0):v>=M?(S=1,w=0,T=0,A=1,_=0,b=1):(S=0,w=0,T=1,A=1,_=0,b=1):y<M?(S=0,w=0,T=1,A=0,_=1,b=1):v<M?(S=0,w=1,T=0,A=0,_=1,b=1):(S=0,w=1,T=0,A=1,_=1,b=0);let C=v-S+f,L=y-w+f,k=M-T+f,N=v-A+2*f,O=y-_+2*f,U=M-b+2*f,X=v-1+3*f,F=y-1+3*f,B=M-1+3*f,j=h&255,rt=u&255,st=d&255,_t=this.perm[j+this.perm[rt+this.perm[st]]]%12,Y=this.perm[j+S+this.perm[rt+w+this.perm[st+T]]]%12,J=this.perm[j+A+this.perm[rt+_+this.perm[st+b]]]%12,gt=this.perm[j+1+this.perm[rt+1+this.perm[st+1]]]%12,it=.6-v*v-y*y-M*M;it<0?n=0:(it*=it,n=it*it*this.dot3(this.grad3[_t],v,y,M));let xt=.6-C*C-L*L-k*k;xt<0?s=0:(xt*=xt,s=xt*xt*this.dot3(this.grad3[Y],C,L,k));let St=.6-N*N-O*O-U*U;St<0?a=0:(St*=St,a=St*St*this.dot3(this.grad3[J],N,O,U));let vt=.6-X*X-F*F-B*B;return vt<0?r=0:(vt*=vt,r=vt*vt*this.dot3(this.grad3[gt],X,F,B)),32*(n+s+a+r)}noise4d(t,e,i,n){let s=this.grad4,a=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,x=(t+e+i+n)*l,g=Math.floor(t+x),m=Math.floor(e+x),v=Math.floor(i+x),y=Math.floor(n+x),M=(g+m+v+y)*c,S=g-M,w=m-M,T=v-M,A=y-M,_=t-S,b=e-w,C=i-T,L=n-A,k=_>b?32:0,N=_>C?16:0,O=b>C?8:0,U=_>L?4:0,X=b>L?2:0,F=C>L?1:0,B=k+N+O+U+X+F,j=a[B][0]>=3?1:0,rt=a[B][1]>=3?1:0,st=a[B][2]>=3?1:0,_t=a[B][3]>=3?1:0,Y=a[B][0]>=2?1:0,J=a[B][1]>=2?1:0,gt=a[B][2]>=2?1:0,it=a[B][3]>=2?1:0,xt=a[B][0]>=1?1:0,St=a[B][1]>=1?1:0,vt=a[B][2]>=1?1:0,Gt=a[B][3]>=1?1:0,nt=_-j+c,ut=b-rt+c,z=C-st+c,pt=L-_t+c,ct=_-Y+2*c,yt=b-J+2*c,ft=C-gt+2*c,Lt=L-it+2*c,et=_-xt+3*c,I=b-St+3*c,E=C-vt+3*c,W=L-Gt+3*c,Q=_-1+4*c,ot=b-1+4*c,tt=C-1+4*c,It=L-1+4*c,Mt=g&255,Tt=m&255,Xt=v&255,ht=y&255,Pt=r[Mt+r[Tt+r[Xt+r[ht]]]]%32,Bt=r[Mt+j+r[Tt+rt+r[Xt+st+r[ht+_t]]]]%32,Ht=r[Mt+Y+r[Tt+J+r[Xt+gt+r[ht+it]]]]%32,Dt=r[Mt+xt+r[Tt+St+r[Xt+vt+r[ht+Gt]]]]%32,jt=r[Mt+1+r[Tt+1+r[Xt+1+r[ht+1]]]]%32,Vt=.6-_*_-b*b-C*C-L*L;Vt<0?h=0:(Vt*=Vt,h=Vt*Vt*this.dot4(s[Pt],_,b,C,L));let ee=.6-nt*nt-ut*ut-z*z-pt*pt;ee<0?u=0:(ee*=ee,u=ee*ee*this.dot4(s[Bt],nt,ut,z,pt));let H=.6-ct*ct-yt*yt-ft*ft-Lt*Lt;H<0?d=0:(H*=H,d=H*H*this.dot4(s[Ht],ct,yt,ft,Lt));let bt=.6-et*et-I*I-E*E-W*W;bt<0?f=0:(bt*=bt,f=bt*bt*this.dot4(s[Dt],et,I,E,W));let K=.6-Q*Q-ot*ot-tt*tt-It*It;return K<0?p=0:(K*=K,p=K*K*this.dot4(s[jt],Q,ot,tt,It)),27*(h+u+d+f+p)}};var Nr=class o extends ze{constructor(t,e,i,n,s,a,r){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=_f(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ye(this.width,this.height,{type:Se}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Jt({defines:Object.assign({},kr.defines),uniforms:Be.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,blending:Ee,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ko,this.normalMaterial.blending=Ee,this.pdMaterial=new Jt({defines:Object.assign({},Ur.defines),uniforms:Be.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Jt({defines:Object.assign({},zr.defines),uniforms:Be.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,blending:Ee}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Jt({uniforms:Be.clone(En.uniforms),vertexShader:En.vertexShader,fragmentShader:En.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:na,blendDst:Fs,blendEquation:xi,blendSrcAlpha:ia,blendDstAlpha:Fs,blendEquationAlpha:xi}),this.blendMaterial=new Jt({uniforms:Be.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ah,blendSrc:na,blendDst:Fs,blendEquation:xi,blendSrcAlpha:ia,blendDstAlpha:Fs,blendEquationAlpha:xi}),this.fsQuad=new Si(null),this.originalClearColor=new dt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),r!==void 0&&this.updatePdMaterial(r)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Is,this.depthTexture.format=Mn,this.depthTexture.type=yn,this.normalRenderTarget=new ye(this.width,this.height,{minFilter:Pe,magFilter:Pe,type:Se,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Vh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case o.OUTPUT.Off:break;case o.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case o.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case o.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case o.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case o.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case o.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=r,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,s=e.clearAlpha||s,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=r,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let n=e.get(i);i.visible=n}),e.clear()}generateNoise(t=64){let e=new Ba,i=t*t*4,n=new Uint8Array(i);for(let a=0;a<t;a++)for(let r=0;r<t;r++){let l=a,c=r;n[(a*t+r)*4]=(e.noise(l,c)*.5+.5)*255,n[(a*t+r)*4+1]=(e.noise(l+t,c)*.5+.5)*255,n[(a*t+r)*4+2]=(e.noise(l,c+t)*.5+.5)*255,n[(a*t+r)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new Hi(n,t,t,ci,hi);return s.wrapS=Di,s.wrapT=Di,s.needsUpdate=!0,s}};Nr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var wf={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Ha=class extends ze{constructor(t,e,i){super(),this.scene=t,this.camera=e;let n=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new ye(1,1,{minFilter:Pe,magFilter:Pe,type:Se}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new gr,this.materialDepth.depthPacking=yh,this.materialDepth.blending=Ee;let r=wf,l=Be.clone(r.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=n,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new Jt({defines:Object.assign({},r.defines),uniforms:l,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.uniforms=l,this.fsQuad=new Si(this.materialBokeh),this._oldClearColor=new dt}render(t,e,i){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);let n=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(n),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var Sf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new lt(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};var z1={uniforms:{tDiffuse:{value:null},uCurInv:{value:new Rt},uPrev:{value:new Rt},uStrength:{value:.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform mat4 uCurInv; uniform mat4 uPrev; uniform float uStrength; varying vec2 vUv;
    void main(){
      vec2 ndc = vUv * 2.0 - 1.0;
      vec4 w = uCurInv * vec4(ndc, 1.0, 1.0); w.xyz /= w.w;
      vec4 p = uPrev * vec4(w.xyz, 1.0); p.xy /= p.w;
      vec2 vel = (ndc - p.xy) * 0.5 * uStrength;
      float l = length(vel);
      if (l > 0.035) vel *= 0.035 / l;
      vec4 c = texture2D(tDiffuse, vUv);
      if (l < 0.0006) { gl_FragColor = c; return; }
      vec4 acc = c;
      for (int i = 1; i < 8; i++) { float t = float(i) / 7.0 - 0.5; acc += texture2D(tDiffuse, vUv - vel * t); }
      gl_FragColor = acc / 8.0;
    }`},U1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new lt(1,1)},uGrade:{value:1},uGrain:{value:.04},uVignette:{value:1},uCA:{value:1},uDamage:{value:0},uSuppress:{value:0},uFlash:{value:0},uDowned:{value:0},uSat:{value:1.08},uContrast:{value:1.06},uLift:{value:new R(.01,.01,.02)},uGamma:{value:new R(1,1,1)},uGain:{value:new R(1.02,1,.97)},uTint:{value:new R(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform vec2 uRes;
    uniform float uGrade; uniform float uGrain; uniform float uVignette; uniform float uCA;
    uniform float uDamage; uniform float uSuppress; uniform float uFlash; uniform float uDowned;
    uniform float uSat; uniform float uContrast; uniform vec3 uLift; uniform vec3 uGamma; uniform vec3 uGain; uniform vec3 uTint;
    varying vec2 vUv;
    void main(){
      vec2 uv = vUv; vec2 d = uv - 0.5;
      float ca = uCA * (0.0012 + uDamage * 0.006 + uSuppress * 0.003 + uDowned * 0.004);
      vec3 col;
      if (ca > 0.00001) { col = vec3(texture2D(tDiffuse, uv + d * ca).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - d * ca).b); }
      else col = texture2D(tDiffuse, uv).rgb;
      float sat = 1.0;
      if (uGrade > 0.5) {
        col = col * uGain + uLift * (1.0 - col);
        col = pow(max(col, 0.0), 1.0 / uGamma);
        col = (col - 0.5) * uContrast + 0.5;
        col *= uTint;
        sat = uSat;
      }
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, sat * (1.0 - uSuppress * 0.45 - uDowned * 0.75));
      float r = length(d * vec2(uRes.x / uRes.y, 1.0));
      if (uVignette > 0.5) col *= mix(1.0, smoothstep(0.95, 0.3, r), 0.38);
      col *= mix(1.0, smoothstep(0.95, 0.15, r), uSuppress * 0.55);
      col = mix(col, vec3(0.45, 0.02, 0.02), uDamage * smoothstep(0.25, 0.85, r) * 0.75);
      col = mix(col, vec3(0.18, 0.0, 0.0), uDowned * smoothstep(0.05, 0.75, r) * 0.85);
      col = mix(col, vec3(1.0), clamp(uFlash, 0.0, 1.0));
      if (uGrain > 0.0) {
        float g = fract(sin(dot(floor(uv * uRes) + fract(uTime) * 91.7, vec2(12.9898, 78.233))) * 43758.5453);
        col += (g - 0.5) * uGrain * (1.2 - l);
      }
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`},Gh=class extends ze{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.clear=!1}render(t,e,i){let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(this.renderToScreen?null:i),t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=n}};function Tf(o,t){let e=o.render.bind(o);return o.render=(...i)=>{let n=t(),s=n.map(a=>a.visible);n.forEach(a=>{a.visible=!1}),e(...i),n.forEach((a,r)=>{a.visible=s[r]})},o}var Va=class{constructor(t,e,i,n,s,a){this.renderer=t,this.scene=e,this.camera=i,this.vmScene=n,this.vmCamera=s,this.settings=a,this.hidden=[],this.prevRot=new Rt,this.focus=50,this.dofAmount=0,this.menuBlur=0,this.time=0,this.build()}build(){let t=this.renderer,e=t.getDrawingBufferSize(new lt),i=this.settings.get("antialias"),n=new ye(e.x,e.y,{type:Se,samples:i==="msaa"?4:0});this.composer&&this.composer.dispose(),this.composer=new Ua(t,n),this.composer.setPixelRatio(1),this.composer.setSize(e.x,e.y),this.aa=i,this.renderPass=new Na(this.scene,this.camera),this.gtao=Tf(new Nr(this.scene,this.camera,e.x,e.y),()=>this.hidden),this.gtao.updateGtaoMaterial({radius:1.4,distanceExponent:1.5,thickness:2.5,scale:1.25,samples:12,distanceFallOff:1}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.gtao.blendIntensity=.85,this.bokeh=Tf(new Ha(this.scene,this.camera,{focus:50,aperture:2e-5,maxblur:.008}),()=>this.hidden),this.motion=new An(z1),this.vmPass=new Gh(this.vmScene,this.vmCamera),this.bloom=new js(new lt(e.x/2,e.y/2),.28,.45,2.2),this.output=new Fa,this.final=new An(U1),this.fxaa=new An(Sf);for(let s of[this.renderPass,this.gtao,this.bokeh,this.motion,this.vmPass,this.bloom,this.output,this.final,this.fxaa])this.composer.addPass(s);this.setSize(e.x,e.y),this.applySettings()}applySettings(){let t=this.settings;if(t.get("antialias")!==this.aa){this.build();return}this.gtao.enabled=t.get("ssao"),this.bloom.enabled=t.get("bloom"),this.motion.enabled=t.get("motionBlur"),this.fxaa.enabled=t.get("antialias")==="fxaa";let e=this.final.uniforms;e.uGrade.value=t.get("colorGrading")?1:0,e.uGrain.value=t.get("filmGrain")?.045:0,e.uVignette.value=t.get("vignette")?1:0,e.uCA.value=t.get("chromatic")?1:0,this.updateDofEnabled()}setGrade(t){let e=this.final.uniforms;e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uLift.value.set(...t.lift),e.uGamma.value.set(...t.gamma),e.uGain.value.set(...t.gain),e.uTint.value.set(...t.tint||[1,1,1])}updateDofEnabled(){this.bokeh.enabled=this.settings.get("dof")&&(this.dofAmount>.02||this.menuBlur>.02)}setSize(t,e){this.composer.setSize(t,e),this.final.uniforms.uRes.value.set(t,e),this.fxaa.material.uniforms.resolution.value.set(1/t,1/e)}render(t,e){this.time+=t;let i=this.final.uniforms;if(i.uTime.value=this.time,i.uDamage.value=e.damage||0,i.uSuppress.value=e.suppress||0,i.uFlash.value=e.flash||0,i.uDowned.value=e.downed||0,this.dofAmount=e.ads||0,this.menuBlur=e.menu?1:0,this.updateDofEnabled(),this.bokeh.enabled){let n=this.bokeh.uniforms;this.focus+=((e.focus||60)-this.focus)*Math.min(1,t*8),n.focus.value=this.menuBlur?2:this.focus,n.aperture.value=this.menuBlur?.0012:4e-5*this.dofAmount,n.maxblur.value=this.menuBlur?.012:.006*this.dofAmount}if(this.motion.enabled){let n=this.camera,a=new Rt().extractRotation(n.matrixWorld).clone().invert(),r=new Rt().multiplyMatrices(n.projectionMatrix,a);this.motion.uniforms.uCurInv.value.copy(r).invert(),this.motion.uniforms.uPrev.value.copy(this.prevVP||r),this.motion.uniforms.uStrength.value=Math.min(1,.016/Math.max(t,.001))*.55,this.prevVP=r}else this.prevVP=null;this.composer.render(t)}};var N1=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),Ef=[0,1,2,0,2,3],Fr=class{constructor(t,e,i,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.c1=new Float32Array(e*4),this.rot=new Float32Array(e),this.rotV=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e);let s=new Sr;s.setAttribute("corner",new he(N1,2)),s.setIndex(Ef),this.aPos=new vi(new Float32Array(e*3),3).setUsage($n),this.aCol=new vi(new Float32Array(e*4),4).setUsage($n),this.aSR=new vi(new Float32Array(e*2),2).setUsage($n),s.setAttribute("iPos",this.aPos),s.setAttribute("iCol",this.aCol),s.setAttribute("iSR",this.aSR),s.instanceCount=0,this.uniforms={uTex:{value:i},uLight:{value:new dt(1,1,1)},uFogColor:{value:new dt},uFogDensity:{value:0}};let a=new Jt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:n?en:xn,vertexShader:`
        attribute vec2 corner; attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSR;
        varying vec2 vUv; varying vec4 vCol; varying float vFog;
        void main() {
          vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
          vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          float c = cos(iSR.y), s = sin(iSR.y);
          vec2 q = vec2(corner.x * c - corner.y * s, corner.x * s + corner.y * c) * iSR.x;
          vec3 wp = iPos + right * q.x + up * q.y;
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          vFog = -mv.z;
          gl_Position = projectionMatrix * mv;
          vUv = corner + 0.5; vCol = iCol;
        }`,fragmentShader:`
        uniform sampler2D uTex; uniform vec3 uLight; uniform vec3 uFogColor; uniform float uFogDensity;
        varying vec2 vUv; varying vec4 vCol; varying float vFog;
        void main() {
          vec4 t = texture2D(uTex, vUv);
          vec4 c = vec4(vCol.rgb * ${n?"1.0":"uLight"}, vCol.a * t.a);
          ${n?"c.rgb *= t.rgb * c.a;":""}
          float f = 1.0 - exp(-uFogDensity * uFogDensity * vFog * vFog);
          ${n?"c.rgb *= 1.0 - f;":"c.rgb = mix(c.rgb, uFogColor, f);"}
          if (c.a < 0.003) discard;
          gl_FragColor = c;
        }`});this.mesh=new Ot(s,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?6:5,t.add(this.mesh),this.geo=s}emit(t,e,i,n,s,a,r,l,c,h,u,d=0,f=0,p=0){let x;this.n<this.max?x=this.n++:x=Math.floor(Math.random()*this.max),this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=i,this.vel[x*3]=n,this.vel[x*3+1]=s,this.vel[x*3+2]=a,this.life[x]=r,this.maxLife[x]=r,this.s0[x]=l,this.s1[x]=c;for(let g=0;g<4;g++)this.c0[x*4+g]=h[g],this.c1[x*4+g]=u[g];this.rot[x]=Math.random()*6.28,this.rotV[x]=p*(Math.random()-.5),this.drag[x]=d,this.grav[x]=f}update(t){let e=0,i=this.aPos.array,n=this.aCol.array,s=this.aSR.array;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let l=--this.n;l!==e&&(this.pos.copyWithin(e*3,l*3,l*3+3),this.vel.copyWithin(e*3,l*3,l*3+3),this.c0.copyWithin(e*4,l*4,l*4+4),this.c1.copyWithin(e*4,l*4,l*4+4),this.life[e]=this.life[l],this.maxLife[e]=this.maxLife[l],this.s0[e]=this.s0[l],this.s1[e]=this.s1[l],this.rot[e]=this.rot[l],this.rotV[e]=this.rotV[l],this.drag[e]=this.drag[l],this.grav[e]=this.grav[l]);continue}let a=Math.max(0,1-this.drag[e]*t);this.vel[e*3]*=a,this.vel[e*3+1]=this.vel[e*3+1]*a-this.grav[e]*t,this.vel[e*3+2]*=a,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.rot[e]+=this.rotV[e]*t;let r=1-this.life[e]/this.maxLife[e];i[e*3]=this.pos[e*3],i[e*3+1]=this.pos[e*3+1],i[e*3+2]=this.pos[e*3+2];for(let l=0;l<4;l++)n[e*4+l]=this.c0[e*4+l]+(this.c1[e*4+l]-this.c0[e*4+l])*r;r<.08&&(n[e*4+3]*=r/.08),s[e*2]=this.s0[e]+(this.s1[e]-this.s0[e])*Math.sqrt(r),s[e*2+1]=this.rot[e],e++}this.geo.instanceCount=this.n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSR.needsUpdate=!0,this.aPos.updateRanges=[{start:0,count:this.n*3}]}},Wh=class{constructor(t,e=400){this.max=e;let i=new Sr;i.setAttribute("corner",new he(new Float32Array([0,-1,1,-1,1,1,0,1]),2)),i.setIndex(Ef),this.aS=new vi(new Float32Array(e*3),3).setUsage($n),this.aE=new vi(new Float32Array(e*3),3).setUsage($n),this.aC=new vi(new Float32Array(e*4),4).setUsage($n),i.setAttribute("iS",this.aS),i.setAttribute("iE",this.aE),i.setAttribute("iC",this.aC),i.instanceCount=0;let n=new Jt({transparent:!0,depthWrite:!1,blending:en,vertexShader:`
        attribute vec2 corner; attribute vec3 iS; attribute vec3 iE; attribute vec4 iC;
        varying vec4 vC; varying float vT; varying float vSide;
        void main() {
          vec3 p = mix(iS, iE, corner.x);
          vec3 dir = normalize(iE - iS + 1e-5);
          vec3 vd = normalize(cameraPosition - p);
          vec3 side = normalize(cross(dir, vd) + 1e-5);
          float dist = length(cameraPosition - p);
          float w = iC.a * max(1.0, dist * 0.0022 / iC.a * 0.6);
          p += side * corner.y * w;
          vC = iC; vT = corner.x; vSide = corner.y;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        varying vec4 vC; varying float vT; varying float vSide;
        void main() { float a = vT * vT * (1.0 - abs(vSide)); gl_FragColor = vec4(vC.rgb * a * 2.5, a); }`});this.mesh=new Ot(i,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh),this.geo=i,this.n=0}begin(){this.n=0}add(t,e,i,n,s,a,r,l,c,h){if(this.n>=this.max)return;let u=this.n++,d=this.aS.array,f=this.aE.array,p=this.aC.array;d[u*3]=t,d[u*3+1]=e,d[u*3+2]=i,f[u*3]=n,f[u*3+1]=s,f[u*3+2]=a,p[u*4]=r,p[u*4+1]=l,p[u*4+2]=c,p[u*4+3]=h}end(){this.geo.instanceCount=this.n,this.aS.needsUpdate=this.aE.needsUpdate=this.aC.needsUpdate=!0}},Ga=class{constructor(t,e,i,n){this.max=e,this.i=0,this.owners=new Array(e).fill(null);let s=new fe({map:si(i),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,roughness:1});this.mesh=new yi(new Ke(1,1),s,e);let a=new Rt().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,a);this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.receiveShadow=!0,t.add(this.mesh),this.size=n,this._m=new Rt,this._q=new De,this._q2=new De,this._v=new R,this._n=new R,this._s=new R}add(t,e,i,n,s,a,r,l=1){let c=this.i;this.i=(this.i+1)%this.max,this._n.set(n,s,a),this._q.setFromUnitVectors(new R(0,0,1),this._n),this._q2.setFromAxisAngle(new R(0,0,1),Math.random()*6.28),this._q.multiply(this._q2);let h=this.size*l*(.8+Math.random()*.4);this._v.set(t+n*.012,e+s*.012,i+a*.012),this._s.set(h,h,h),this._m.compose(this._v,this._q,this._s),this.mesh.setMatrixAt(c,this._m),this.mesh.instanceMatrix.needsUpdate=!0,this.owners[c]=r||null}removeOwner(t){let e=new Rt().makeScale(0,0,0),i=!1;for(let n=0;n<this.max;n++)this.owners[n]===t&&(this.mesh.setMatrixAt(n,e),this.owners[n]=null,i=!0);i&&(this.mesh.instanceMatrix.needsUpdate=!0)}},qh=class{constructor(t,e=500){this.max=e,this.list=[];let i=new fe({roughness:.9});this.mesh=new yi(new ui(1,1,1),i,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1;let n=new Rt().makeScale(0,0,0);for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,n),this.mesh.setColorAt(s,new dt(1,1,1));t.add(this.mesh),this.free=[];for(let s=e-1;s>=0;s--)this.free.push(s);this._m=new Rt,this._q=new De,this._e=new We,this._p=new R,this._s=new R,this._c=new dt}spawn(t,e,i,n,s,a,r,l,c,h,u=8){let d;this.free.length?d=this.free.pop():d=this.list.shift().slot,this.list.push({slot:d,x:t,y:e,z:i,vx:n,vy:s,vz:a,rx:Math.random()*6,ry:Math.random()*6,rz:Math.random()*6,ax:q(-8,8),ay:q(-8,8),az:q(-8,8),sx:r,sy:l,sz:c,life:u,rest:!1}),this._c.set(h).multiplyScalar(.8+Math.random()*.35),this.mesh.setColorAt(d,this._c),this.mesh.instanceColor.needsUpdate=!0}update(t,e){if(this.list.length){for(let i=this.list.length-1;i>=0;i--){let n=this.list[i];if(n.life-=t,n.life<=0){this.mesh.setMatrixAt(n.slot,this._m.makeScale(0,0,0)),this.free.push(n.slot),this.list.splice(i,1);continue}if(!n.rest){n.vy-=18*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rx+=n.ax*t,n.ry+=n.ay*t,n.rz+=n.az*t;let a=e.groundAt(n.x,n.z,n.y+.3,.05)+Math.min(n.sx,n.sy,n.sz)*.5;n.y<a&&(n.y=a,Math.abs(n.vy)<1.5&&(n.rest=!0,n.vx=n.vz=0),n.vy=-n.vy*.3,n.vx*=.55,n.vz*=.55,n.ax*=.5,n.ay*=.5,n.az*=.5)}let s=n.life<1?n.life:1;this._e.set(n.rx,n.ry,n.rz),this._q.setFromEuler(this._e),this._p.set(n.x,n.y,n.z),this._s.set(n.sx*s,n.sy*s,n.sz*s),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(n.slot,this._m)}this.mesh.instanceMatrix.needsUpdate=!0}}},Wa=class{constructor(t){this.game=t;let e=t.scene;this.smoke=new Fr(e,3e3,si("smoke"),!1),this.glow=new Fr(e,2500,si("spark"),!0),this.flashes=new Fr(e,200,si("flash"),!0),this.tracers=new Wh(e,1400),this.holes=new Ga(e,450,"bullethole",.13),this.scorch=new Ga(e,60,"scorch",4.2),this.debris=new qh(e,500),this.lights=[];for(let i=0;i<3;i++){let n=new ta(16755285,0,20,2);n.castShadow=!1,e.add(n),this.lights.push({light:n,t:0,dur:1,i0:0})}this.emitters=[],this.trauma=0,this.q=1,this.hidden=[this.smoke.mesh,this.glow.mesh,this.flashes.mesh,this.tracers.mesh,this.holes.mesh,this.scorch.mesh]}setQuality(t){this.q={low:.35,medium:.65,high:1}[t.get("particles")]||1,this.decalsOn=t.get("decals"),this.debrisOn=t.get("debris"),this.shakeOn=t.get("screenShake"),this.holes.mesh.visible=this.scorch.mesh.visible=this.decalsOn}count(t){return Math.max(1,Math.round(t*this.q))}flashLight(t,e,i,n,s,a,r){let l=this.lights[0];for(let c of this.lights)c.t/c.dur*c.i0<l.t/l.dur*l.i0&&(l=c);l.light.position.set(t,e,i),l.light.color.set(n),l.light.distance=a,l.i0=s,l.t=r,l.dur=r}shake(t,e,i,n){if(!this.shakeOn)return;let s=t;if(e!==void 0){let a=this.game.camera.position,r=Math.hypot(a.x-e,a.y-i,a.z-n);s=t*Math.max(0,1-r/60)}this.trauma=Math.min(1,this.trauma+s)}muzzle(t,e,i,n,s,a,r=1,l=!1,c=!1){l||(this.flashes.emit(t,e,i,0,0,0,.05,.45*r,.65*r,[1,.8,.45,1],[1,.5,.2,0],0,0),this.flashes.emit(t+n*.15,e+s*.15,i+a*.15,n*2,s*2,a*2,.04,.3*r,.5*r,[1,.9,.6,1],[1,.6,.2,0],0,0),this.flashLight(t,e,i,16756832,c?6:12,12,.06)),Math.random()<this.q&&this.smoke.emit(t+n*.2,e+s*.2,i+a*.2,n*1.5+q(-.2,.2),s*1.5+.4,a*1.5+q(-.2,.2),.8,.15,.9,[.8,.8,.8,.22],[.8,.8,.8,0],2,-.3,1)}impact(t,e,i,n,s,a,r,l){let c=this.q;switch(r){case"flesh":for(let h=0;h<this.count(6);h++)this.smoke.emit(t,e,i,n*1.5+q(-1,1),s*1.5+q(-.5,1),a*1.5+q(-1,1),.35,.08,.5,[.55,.04,.03,.85],[.4,.02,.02,0],4,3);return;case"water":for(let h=0;h<this.count(10);h++)this.smoke.emit(t,e,i,q(-1,1),q(2,5),q(-1,1),.6,.1,.5,[.9,.95,1,.7],[.9,.95,1,0],1,9);return;case"metal":case"container":for(let h=0;h<this.count(10);h++)this.glow.emit(t,e,i,n*4+q(-3,3),s*4+q(-1,4),a*4+q(-3,3),q(.15,.4),.06,.02,[1,.8,.4,1],[1,.4,.1,0],1,12);this.smoke.emit(t,e,i,n,s,a,.5,.1,.4,[.5,.5,.5,.3],[.5,.5,.5,0],2,0);break;default:{let h=this.matColor(r),u=this.count(5);for(let d=0;d<u;d++)this.smoke.emit(t+n*.05,e+s*.05,i+a*.05,n*q(1,3)+q(-.6,.6),s*q(1,3)+q(0,1.2),a*q(1,3)+q(-.6,.6),q(.5,1.1),.1,q(.5,.9),[h[0],h[1],h[2],.55],[h[0],h[1],h[2],0],3,1.2,1);if(r==="stone"||r==="concrete"||r==="brick"||r==="rock")for(let d=0;d<this.count(3);d++)this.glow.emit(t,e,i,n*3+q(-2,2),s*3+q(0,3),a*3+q(-2,2),.12,.04,.02,[1,.85,.6,1],[1,.5,.2,0],1,10);for(let d=0;d<this.count(4);d++)this.smoke.emit(t,e,i,n*3+q(-2,2),s*3+q(1,4),a*3+q(-2,2),.6,.04,.04,[h[0]*.7,h[1]*.7,h[2]*.7,1],[h[0]*.7,h[1]*.7,h[2]*.7,1],.5,14)}}this.decalsOn&&c>.2&&this.holes.add(t,e,i,n,s,a,l)}matColor(t){switch(t){case"wood":return[.55,.42,.3];case"plaster":return[.85,.82,.76];case"brick":return[.7,.48,.38];case"concrete":case"stone":case"rock":return[.68,.67,.64];case"sand":return[.78,.7,.52];case"hay":return[.85,.75,.45];case"grass":return[.45,.4,.28];case"dirt":return[.5,.42,.32];default:return[.55,.47,.36]}}explosion(t,e,i,n=1,s={}){let a=this.q;this.flashLight(t,e+1,i,16751168,60*n,30*n,.35),this.flashes.emit(t,e+.5,i,0,0,0,.12,2*n,6*n,[1,.8,.5,1],[1,.4,.1,0],0,0);for(let l=0;l<this.count(18*n);l++){let c=Math.random()*6.28,h=Math.random(),u=q(3,9)*n;this.glow.emit(t,e+.5,i,Math.cos(c)*u*(1-h),q(2,8)*n,Math.sin(c)*u*(1-h),q(.25,.6),1.6*n,3.5*n,[1,.62,.25,.9],[.8,.2,.05,0],4,-1,2)}for(let l=0;l<this.count(30*n);l++)this.glow.emit(t,e+.5,i,q(-14,14),q(4,18),q(-14,14),q(.4,1.2),.12,.05,[1,.8,.4,1],[1,.4,.1,0],.5,18);for(let l=0;l<this.count(16*n);l++){let c=q(.12,.3);this.smoke.emit(t+q(-1.5,1.5)*n,e+q(0,2)*n,i+q(-1.5,1.5)*n,q(-2,2),q(1.5,5)*n,q(-2,2),q(4,9),2.2*n,8*n,[c,c,c*.95,.75],[.35,.34,.33,0],.8,-.4,.6)}let r=s.dirt||[.45,.38,.28];for(let l=0;l<this.count(14*n);l++){let c=Math.random()*6.28;this.smoke.emit(t,e+.2,i,Math.cos(c)*q(6,12)*n,q(.2,1.5),Math.sin(c)*q(6,12)*n,q(1.5,3),1.2*n,4*n,[r[0],r[1],r[2],.55],[r[0],r[1],r[2],0],2.5,.2,.5)}for(let l=0;l<this.count(16*n);l++)this.smoke.emit(t,e+.3,i,q(-7,7)*n,q(5,14)*n,q(-7,7)*n,q(.8,1.6),.15,.15,[r[0]*.6,r[1]*.6,r[2]*.6,1],[r[0]*.6,r[1]*.6,r[2]*.6,1],.3,16);if(this.debrisOn)for(let l=0;l<Math.round(8*n*a);l++){let c=q(.08,.25);this.debris.spawn(t,e+.4,i,q(-7,7),q(5,12),q(-7,7),c,c,c,s.debrisColor||5917242,q(4,8))}this.decalsOn&&s.ground&&this.scorch.add(t,e+.02,i,s.nx??0,s.ny??1,s.nz??0,s.box,n),s.fire&&this.addFire(t,e,i,s.fire,n*.6),this.shake(.55*n,t,e,i)}pieceDestroyed(t,e){let i=Pr[t.mat]||Pr.plaster,n=(t.minX+t.maxX)/2,s=(t.minY+t.maxY)/2,a=(t.minZ+t.maxZ)/2,r=t.maxX-t.minX,l=t.maxY-t.minY,c=t.maxZ-t.minZ,h=this.matColor(t.mat),u=this.count(6);for(let d=0;d<u;d++)this.smoke.emit(n+q(-r,r)*.4,s+q(-l,l)*.4,a+q(-c,c)*.4,q(-1,1),q(0,1.5),q(-1,1),q(2.5,5),.8,3.2,[h[0],h[1],h[2],.6],[h[0],h[1],h[2],0],1.2,-.1,.5);if(this.debrisOn){let d=Math.max(2,Math.round(Math.min(8,r*l*c*14+2)*this.q));for(let f=0;f<d;f++){let p=Math.min(.45,Math.max(r,l,c)*q(.15,.35));this.debris.spawn(n+q(-r,r)*.4,s+q(-l,l)*.4,a+q(-c,c)*.4,q(-3,3),q(0,4),q(-3,3),p*q(.6,1.4),p*q(.5,1.2),p*q(.6,1.4),i.debris,q(6,12))}}this.holes.removeOwner(t),this.game.audio&&this.game.audio.play3d(i.sound==="wood"?"breakWood":i.sound==="metal"?"breakMetal":"breakStone",n,s,a,{vol:.8})}addSmokeScreen(t,e,i,n=16){let s=this.game.time,a=s,r={x:t,y:e+1.5,z:i,r:6.5,strength:.96,until:s+n,grow:l=>Math.min(1,(l-a)/2.5)*(l>a+n-3?Math.max(.2,(a+n-l)/3):1)};this.game.world.collision.addDynamicSoft(r),this.emitters.push({type:"smoke",x:t,y:e,z:i,t:n,rate:26,acc:0})}addFire(t,e,i,n=8,s=1){this.emitters.push({type:"fire",x:t,y:e,z:i,t:n,rate:22*s,acc:0,scale:s})}update(t){for(let e=this.emitters.length-1;e>=0;e--){let i=this.emitters[e];if(i.t-=t,i.t<=0){this.emitters.splice(e,1);continue}for(i.acc+=t*i.rate*this.q;i.acc>=1;)if(i.acc-=1,i.type==="smoke"){let n=q(.72,.88);this.smoke.emit(i.x+q(-.8,.8),i.y+.3,i.z+q(-.8,.8),q(-1.6,1.6),q(.4,1.5),q(-1.6,1.6),q(5,8),1.5,9,[n,n,n,.7],[n,n,n,0],.35,-.06,.3)}else if(i.type==="fire"){let n=i.scale;this.glow.emit(i.x+q(-.6,.6)*n,i.y+.2,i.z+q(-.6,.6)*n,q(-.3,.3),q(1.5,3)*n,q(-.3,.3),q(.4,.9),.9*n,.2,[1,.55,.15,.9],[.9,.2,.05,0],.5,-1,1),Math.random()<.3&&this.smoke.emit(i.x,i.y+1.5*n,i.z,q(-.4,.4),q(1,2),q(-.4,.4),q(3,6),.8*n,4*n,[.12,.11,.1,.55],[.3,.3,.3,0],.3,-.3,.4),Math.random()<.15&&this.flashLight(i.x,i.y+1,i.z,16747056,6*n,10,.25)}}this.smoke.update(t),this.glow.update(t),this.flashes.update(t),this.debris.update(t,this.game.world.collision);for(let e of this.lights)e.t>0?(e.t-=t,e.light.intensity=Math.max(0,e.t/e.dur)*e.i0):e.light.intensity=0;this.trauma=Math.max(0,this.trauma-t*1.4)}setLighting(t){let e=t.time,i=new dt().setRGB(...e.sky).multiplyScalar(e.hemiI*.8).add(new dt().setRGB(...e.sun).multiplyScalar(e.sunI*.22));this.smoke.uniforms.uLight.value.copy(i);for(let n of[this.smoke,this.glow,this.flashes])n.uniforms.uFogColor.value.copy(t.fog.color),n.uniforms.uFogDensity.value=t.fog.density}};var Or=Math.PI/180,es=new R,Xh=new R,Af=new R,Cn=class{constructor(t){this.game=t,this.bullets=[],this.projectiles=[],this.placed=[],this.shotCounter=0}get world(){return this.game.world}fireBullet(t,e,i){let n=e.stats,s=new R,a=new R;t.isPlayer&&this.game.playerCtl?this.game.playerCtl.aimRay(s,a):(t.eye(s),t.aimDir(a));let r=t.spread();if(n.pellets&&(r=Math.max(r,n.pelletSpread||2.5)*(i===0?.3:1)),t.suppression>.2&&!t.isPlayer&&(r+=t.suppression*.8),r>0){let u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*r*.5*Or,f=Math.abs(a.y)>.99?es.set(1,0,0):es.set(0,1,0),p=new R().crossVectors(a,f).normalize(),x=new R().crossVectors(p,a).normalize();a.addScaledVector(p,Math.cos(u)*Math.tan(d)).addScaledVector(x,Math.sin(u)*Math.tan(d)).normalize()}let l=n.vel*n.velMul,c=t.isPlayer&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new R);this.shotCounter++;let h=!n.suppressed&&(n.type==="sniper"||n.type==="lmg"||i===0&&this.shotCounter%(t.isPlayer?3:2)===0);this.bullets.push({x:s.x,y:s.y,z:s.z,vx:a.x*l,vy:a.y*l,vz:a.z*l,ox:c.x-s.x,oy:c.y-s.y,oz:c.z-s.z,shooter:t,team:t.team,s:n,dmgMul:n.dmgMul,traveled:0,life:2.6,penLeft:n.pen,penDmg:1,tracer:h,whizzed:!1,weapon:n.name})}falloff(t,e){return e<=t.r0?t.dmg:e>=t.r1?t.dmgMin:Qt(t.dmg,t.dmgMin,(e-t.r0)/(t.r1-t.r0))}updateBullets(t){let e=this.game.fx,i=this.game.soldiers,n=this.world.collision,s=this.world.terrain.waterLevel;e.tracers.begin();for(let a=this.bullets.length-1;a>=0;a--){let r=this.bullets[a];r.life-=t;let l=t,c=r.life>0,h=r.x,u=r.y,d=r.z,f=0;for(;c&&l>0&&f++<4;){let p=l;l=0;let x=r.vy-9.81*p,g=r.x+r.vx*p,m=r.y+(r.vy+x)*.5*p,v=r.z+r.vz*p;r.vy=x;let y=g-r.x,M=m-r.y,S=v-r.z,w=Math.sqrt(y*y+M*M+S*S);if(w<1e-6)break;let T=y/w,A=M/w,_=S/w,b=n.raycast(r.x,r.y,r.z,T,A,_,w,{skipInside:!0,ignore:O=>O.cat==="cloth"}),C=b?b.t:1/0;if(s!==null&&(r.y-s)*(m-s)<0){let O=(r.y-s)/(r.y-m)*w;if(O<C){e.impact(r.x+T*O,s,r.z+_*O,0,1,0,"water"),this.game.audio.play3d("impactWater",r.x+T*O,s,r.z+_*O,{vol:.5,maxDist:60}),c=!1;break}}let L=null,k=C,N=null;for(let O=0;O<i.length;O++){let U=i[O];if(U===r.shooter||U.state==="dead"||U.team===r.team)continue;let X=U.pos.x,F=U.pos.y+.9,B=U.pos.z,j=X-r.x,rt=F-r.y,st=B-r.z,_t=Ft(j*T+rt*A+st*_,0,w),Y=r.x+T*_t-X,J=r.y+A*_t-F,gt=r.z+_*_t-B,it=Y*Y+J*J+gt*gt;if(it>1.6*1.6){it<4.5*4.5&&_t<k&&this.nearMiss(r,U,Math.sqrt(it),r.x+T*_t,r.y+A*_t,r.z+_*_t);continue}let xt=U.hitSpheres();for(let St=0;St<xt.length;St++){let vt=xt[St],Gt=Ah(r.x,r.y,r.z,y,M,S,vt[0],vt[1],vt[2],vt[3]);Gt>=0&&Gt*w<k&&(k=Gt*w,L=U,N=vt[4])}(!L||L!==U)&&_t<k&&this.nearMiss(r,U,Math.sqrt(it)*.5,r.x+T*_t,r.y+A*_t,r.z+_*_t)}if(L){let O=r.x+T*k,U=r.y+A*k,X=r.z+_*k,F=r.traveled+k,B=this.falloff(r.s,F)*r.dmgMul*r.penDmg,j=N==="head"?r.s.headMul||(r.s.type==="shotgun"?1.5:1.9):N==="leg"?.78:1;B*=j;let rt=new R(T,A,_),st=L.state==="alive";L.takeDamage(B,r.shooter,N,r.weapon,rt,!1),e.impact(O,U,X,-T,-A,-_,"flesh"),this.game.onHit(r.shooter,L,B,N,st),c=!1,r.x=O,r.y=U,r.z=X;break}if(b){let O=b.box?b.box.mat:this.terrainMat(b.x,b.z);if(e.impact(b.x,b.y,b.z,b.nx,b.ny,b.nz,O,b.box),Math.random()<.5&&this.game.audio.play3d(this.impactSound(O),b.x,b.y,b.z,{vol:.5,maxDist:50}),b.box&&b.box.destructible){let U=this.falloff(r.s,r.traveled+b.t)*(b.box.mat==="wood"||b.box.mat==="hay"||b.box.mat==="cloth"?.25:.04)*(r.s.pen>1?1.6:1);this.world.structures.damagePiece(b.box,U,e,"bullet")}if(b.box&&b.box.alive!==!1){let U=b.box.pen*Math.min(b.thickness,1.5)*4;if(U<r.penLeft){let X=1-U/r.penLeft;r.penLeft-=U,r.penDmg*=Math.max(.2,X);let F=b.x+T*(b.thickness+.02),B=b.y+A*(b.thickness+.02),j=b.z+_*(b.thickness+.02);r.traveled+=b.t+b.thickness,r.x=F,r.y=B,r.z=j;let rt=Math.sqrt(r.vx*r.vx+r.vy*r.vy+r.vz*r.vz)*.85;r.vx=T*rt,r.vy=A*rt,r.vz=_*rt,l=p*Math.max(0,(w-b.t-b.thickness)/w),e.impact(F,B,j,T,A,_,b.box.mat,b.box);continue}}else if(b.box){r.traveled+=b.t,r.x=b.x+T*.05,r.y=b.y+A*.05,r.z=b.z+_*.05,r.penDmg*=.7,l=p*Math.max(0,(w-b.t)/w);continue}c=!1,r.x=b.x,r.y=b.y,r.z=b.z;break}r.x=g,r.y=m,r.z=v,r.traveled+=w}if((r.traveled>1400||Math.abs(r.x)>this.world.terrain.half||Math.abs(r.z)>this.world.terrain.half)&&(c=!1),r.s.type==="sniper"||r.s.type==="dmr"){let p=Math.hypot(r.x-h,r.y-u,r.z-d),x=Math.min(26,Math.ceil(p/(r.s.type==="sniper"?1.4:2.6)*e.q)),g=r.s.type==="sniper"?.36:.18;for(let m=0;m<x;m++){let v=(m+Math.random())/x;e.smoke.emit(h+(r.x-h)*v,u+(r.y-u)*v,d+(r.z-d)*v,(Math.random()-.5)*.15,.06,(Math.random()-.5)*.15,r.s.type==="sniper"?1.8:1.1,.04,.32,[.88,.88,.9,g],[.88,.88,.9,0],1.2,-.03,0)}}{let p=Math.hypot(r.vx,r.vy,r.vz)||1,x=Math.min(r.traveled,p*(r.tracer?.035:.028)),g=1-Math.min(1,r.traveled/40),m=r.x+r.ox*g,v=r.y+r.oy*g,y=r.z+r.oz*g,M=1-Math.min(1,Math.max(0,r.traveled-x)/40),S=r.x-r.vx/p*x+r.ox*M,w=r.y-r.vy/p*x+r.oy*M,T=r.z-r.vz/p*x+r.oz*M;if(r.tracer){let A=r.team===0?[1,.85,.5]:[1,.7,.4];e.tracers.add(S,w,T,m,v,y,A[0],A[1],A[2],r.s.type==="sniper"?.032:.025)}else r.s.suppressed?e.tracers.add(S,w,T,m,v,y,.22,.21,.19,.01):e.tracers.add(S,w,T,m,v,y,.62,.56,.44,.013)}c||this.bullets.splice(a,1)}e.tracers.end()}nearMiss(t,e,i,n,s,a){if(e.state==="alive"&&(t.nm||(t.nm=[]),!t.nm.includes(e))){if(t.nm.push(e),e.suppression=Math.min(1,e.suppression+(1-i/4.5)*(t.s.type==="sniper"?.45:.16)),e.isPlayer){let r=Math.hypot(t.vx,t.vy,t.vz)>343;this.game.audio.play3d(r?"crack":"whiz",n,s,a,{vol:.65,maxDist:10,reverb:.05})}e.brain&&e.brain.onNearMiss(t.shooter)}}terrainMat(t,e){let i=this.world.terrain,n=Math.round((t+i.half)/i.cell),s=Math.round((e+i.half)/i.cell),a=(Ft(s,0,i.n-1)*i.n+Ft(n,0,i.n-1))*4,r=i.splat;return r[a+2]>.5?"rock":this.world.def.biome==="arid"?r[a+3]>.5?"concrete":"sand":r[a]>.5?"grass":"dirt"}impactSound(t){switch(t){case"metal":case"container":return"impactMetal";case"wood":case"hay":return"impactWood";case"concrete":case"brick":case"stone":case"rock":case"plaster":return"impactHard";default:return"impactDirt"}}explode(t,e,i,n){let s=this.game.fx,a=n.radius||7,r=n.damage||120,l=this.world.terrain.normalAt(t,i),c=Math.abs(e-this.world.terrain.heightAt(t,i))<.8;s.explosion(t,e,i,n.scale||1,{ground:c,nx:l[0],ny:l[1],nz:l[2],fire:n.fire,dirt:this.world.def.biome==="arid"?[.6,.52,.38]:[.42,.36,.27]}),this.game.audio.explosion(t,e,i);for(let h of this.game.soldiers){if(h.state==="dead")continue;let u=h.center(es),d=Math.hypot(u.x-t,u.y-e,u.z-i);if(n.directional){let f=u.x-t,p=u.z-i,x=Math.hypot(f,p)||1;if(f/x*n.dx+p/x*n.dz<.35)continue}if(d<a){let f=r*Math.pow(1-d/a,1.1);this.world.collision.los(t,e+.3,i,u.x,u.y,u.z)||(f*=.25),h.takeDamage(f,n.attacker,"body",n.weapon,Xh.set(u.x-t,u.y-e,u.z-i).normalize().clone(),!0),n.attacker&&n.attacker!==h&&h.team!==n.attacker.team&&this.game.onHit(n.attacker,h,f,"body",!0)}d<a*3&&h.state==="alive"&&(h.suppression=Math.min(1,h.suppression+(1-d/(a*3))*.8)),h.brain&&d<80&&h.brain.onSound(t,i,n.attacker,!0)}n.power&&this.world.structures.explode(t,e,i,a*(n.structRadiusMul||.8),n.power,s);for(let h of this.placed)(h.type==="c4"||h.type==="claymore")&&!h.dead&&Math.hypot(h.x-t,h.y-e,h.z-i)<2.5&&(h.dead=!0,setTimeout(()=>this.detonatePlaced(h),80))}spawnProjectile(t,e,i,n,s={}){let a=Kn(t==="launcher"?"frag":t==="rocket"?"rpg":t),r=new Ot(t==="rocket"?new Gn(.05,.4,6).rotateX(-Math.PI/2):a,Sn("weapon"));t==="rocket"&&(r.material=new fe({color:5925450})),r.castShadow=!0,this.game.scene.add(r);let l=Object.assign({type:t,owner:e,team:e.team,x:i.x,y:i.y,z:i.z,vx:n.x,vy:n.y,vz:n.z,t:0,mesh:r,bounces:0,rest:!1},s);return l.fuse={frag:3.2,smoke:1.4,flash:1.6,impact:8,launcher:8,rocket:5,c4:30}[t]??3,this.projectiles.push(l),l}throwGrenade(t,e,i){let n=t.eye(new R),s=t.aimDir(new R),a=n.clone().addScaledVector(s,.5).add(t.right(new R).multiplyScalar(.15)),r=i||s.clone().multiplyScalar(e==="c4"?9:17).add(new R(0,2.2,0)).add(new R(t.vel.x*.5,0,t.vel.z*.5));this.spawnProjectile(e,t,a,r),this.game.audio.play3d("throw",a.x,a.y,a.z,{vol:.5,maxDist:25}),e!=="c4"&&this.game.onGrenadeThrown(t,e)}updateProjectiles(t){let e=this.world.collision,i=this.game.fx;for(let n=this.projectiles.length-1;n>=0;n--){let s=this.projectiles[n];s.t+=t;let a=s.t>=s.fuse;if(!s.rest&&!a){let r=s.type==="rocket"?2.5:s.type==="launcher"?9.81:15;s.vy-=r*t;let l=s.vx*t,c=s.vy*t,h=s.vz*t,u=Math.hypot(l,c,h);if(u>1e-5){let d=l/u,f=c/u,p=h/u,x=e.raycast(s.x,s.y,s.z,d,f,p,u+.05,{skipInside:!0});if(s.type==="rocket"||s.type==="launcher"||s.type==="impact")for(let g of this.game.soldiers){if(g.state==="dead"||g===s.owner||g.team===s.team)continue;let m=g.hitSpheres();for(let v of m){let y=Ah(s.x,s.y,s.z,l,c,h,v[0],v[1],v[2],v[3]+.1);y>=0&&(!x||y*u<x.t)&&(x={t:y*u,x:s.x+l*y,y:s.y+c*y,z:s.z+h*y,nx:-d,ny:-f,nz:-p,soldier:g})}}if(x)if(s.x=x.x+x.nx*.05,s.y=x.y+x.ny*.05,s.z=x.z+x.nz*.05,s.type==="rocket"||s.type==="impact"||s.type==="launcher"&&s.t>.12)a=!0;else if(s.type==="c4"){s.rest=!0,s.stuck=!0,s.vx=s.vy=s.vz=0,this.convertToPlaced(s,x),n=Math.min(n,this.projectiles.length);continue}else{let g=s.vx*x.nx+s.vy*x.ny+s.vz*x.nz;s.vx-=1.6*g*x.nx,s.vy-=1.6*g*x.ny,s.vz-=1.6*g*x.nz,s.vx*=.45,s.vy*=.45,s.vz*=.45,Math.abs(g)>2&&s.bounces++<8&&this.game.audio.play3d("bounce",s.x,s.y,s.z,{vol:.35,maxDist:30}),Math.hypot(s.vx,s.vy,s.vz)<.6&&x.ny>.5&&(s.rest=!0,s.vx=s.vy=s.vz=0)}else s.x+=l,s.y+=c,s.z+=h}s.type==="rocket"&&(i.smoke.emit(s.x,s.y,s.z,q(-.3,.3),q(0,.4),q(-.3,.3),1.6,.25,1.4,[.8,.8,.8,.5],[.7,.7,.7,0],1,-.2,1),i.glow.emit(s.x,s.y,s.z,0,0,0,.06,.5,.2,[1,.7,.3,1],[1,.4,.1,0],0,0))}s.mesh&&(s.mesh.position.set(s.x,s.y,s.z),s.type==="rocket"?s.mesh.lookAt(s.x+s.vx,s.y+s.vy,s.z+s.vz):s.rest||(s.mesh.rotation.x+=t*8)),a&&(this.projectiles.splice(n,1),s.mesh&&this.game.scene.remove(s.mesh),this.detonateProjectile(s))}}detonateProjectile(t){switch(t.type){case"frag":this.explode(t.x,t.y+.15,t.z,{radius:8,damage:160,power:160,attacker:t.owner,weapon:"Frag grenade",scale:.9});break;case"impact":this.explode(t.x,t.y+.1,t.z,{radius:5.5,damage:120,power:110,attacker:t.owner,weapon:"Impact grenade",scale:.7});break;case"launcher":this.explode(t.x,t.y+.1,t.z,{radius:6,damage:140,power:260,attacker:t.owner,weapon:"M320",scale:.85});break;case"rocket":this.explode(t.x,t.y,t.z,{radius:6.5,damage:210,power:900,structRadiusMul:.75,attacker:t.owner,weapon:"RPG-7",scale:1.3,fire:5});break;case"smoke":this.game.fx.addSmokeScreen(t.x,t.y,t.z,18),this.game.audio.play3d("pin",t.x,t.y,t.z,{vol:.5,maxDist:30});break;case"flash":this.flashbang(t);break}}flashbang(t){let e=this.game.fx;e.flashLight(t.x,t.y+.5,t.z,16777215,120,25,.25),e.flashes.emit(t.x,t.y+.3,t.z,0,0,0,.15,2,5,[1,1,1,1],[1,1,1,0],0,0),this.game.audio.play3d("explosion",t.x,t.y,t.z,{vol:.6,maxDist:150,rate:1.6});for(let i of this.game.soldiers){if(i.state!=="alive")continue;let n=i.eye(es),s=Math.hypot(n.x-t.x,n.y-t.y,n.z-t.z);if(s>18||!this.world.collision.los(t.x,t.y+.3,t.z,n.x,n.y,n.z))continue;let a=i.aimDir(Xh),r=Af.set(t.x-n.x,t.y-n.y,t.z-n.z).normalize(),l=(a.dot(r)+1)/2;i.flashed=Math.min(1,i.flashed+(1-s/18)*(.4+l*.8))}}convertToPlaced(t,e){t.mesh&&this.game.scene.remove(t.mesh);let i=this.projectiles.indexOf(t);i>=0&&this.projectiles.splice(i,1),this.place("c4",t.owner,t.x,t.y,t.z,0)}place(t,e,i,n,s,a){if(t==="beacon"||t==="rally")for(let h of this.placed)h.type===t&&h.owner===e&&!h.dead&&this.removePlaced(h);let r=Kn(t==="sandbags"?"sandbags":t),l=new Ot(r,Sn("weapon"));l.position.set(i,n+(t==="ammobox"?.07:t==="claymore"?.09:.06),s),l.rotation.y=a,(t==="ammobox"||t==="beacon"||t==="rally")&&l.scale.setScalar(2.2),l.castShadow=!0,this.game.scene.add(l);let c={type:t,owner:e,team:e.team,squad:e.squad,x:i,y:n,z:s,yaw:a,mesh:l,t:0,dead:!1,dx:-Math.sin(a),dz:-Math.cos(a),tick:0};return this.placed.push(c),t==="c4"&&(e.c4s=e.c4s||[],e.c4s.push(c)),(t==="rally"||t==="beacon")&&this.game.onSpawnPointPlaced(c),c}removePlaced(t){t.dead=!0,t.mesh&&this.game.scene.remove(t.mesh);let e=this.placed.indexOf(t);if(e>=0&&this.placed.splice(e,1),t.type==="c4"&&t.owner.c4s){let i=t.owner.c4s.indexOf(t);i>=0&&t.owner.c4s.splice(i,1)}}detonatePlaced(t){this.removePlaced(t),t.type==="c4"?this.explode(t.x,t.y+.1,t.z,{radius:7.5,damage:240,power:1500,structRadiusMul:.7,attacker:t.owner,weapon:"C4",scale:1.4,fire:4}):t.type==="claymore"&&this.explode(t.x,t.y+.5,t.z,{radius:7,damage:180,power:60,attacker:t.owner,weapon:"Claymore",scale:.7,directional:!0,dx:t.dx,dz:t.dz})}detonateC4(t){if(!t.c4s||!t.c4s.length)return!1;let e=t.c4s.slice();return this.game.audio.play3d("beep",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.6,maxDist:20}),e.forEach((i,n)=>setTimeout(()=>{i.dead||this.detonatePlaced(i)},150+n*90)),!0}updatePlaced(t){let e=this.game.time;for(let i=this.placed.length-1;i>=0;i--){let n=this.placed[i];if(n.t+=t,!n.dead)if(n.type==="claymore"&&n.t>1.5)for(let s of this.game.soldiers){if(s.state!=="alive"||s.team===n.team)continue;let a=s.pos.x-n.x,r=s.pos.z-n.z,l=s.pos.y-n.y,c=Math.hypot(a,r);if(!(c>3.6||Math.abs(l)>2||s.stance==="prone"&&Math.hypot(s.vel.x,s.vel.z)<.8)&&!(a/c*n.dx+r/c*n.dz<.3)){this.detonatePlaced(n);break}}else if(n.type==="ammobox"){if(n.tick+=t,n.tick>1.5){n.tick=0;for(let s of this.game.soldiers)s.state!=="alive"||s.team!==n.team||Math.hypot(s.pos.x-n.x,s.pos.z-n.z)>4||Math.abs(s.pos.y-n.y)>2.5||this.resupply(s,1)&&n.owner!==s&&n.owner.state!=="dead"&&this.game.addScore(n.owner,10,"RESUPPLY")}}else n.type==="rally"&&(n.blocked=this.game.soldiers.some(s=>s.state==="alive"&&s.team!==n.team&&Math.hypot(s.pos.x-n.x,s.pos.z-n.z)<18),n.t>300&&this.removePlaced(n))}}resupply(t,e){let i=!1;for(let n=0;n<2;n++){let s=t.slots[n];s&&s.reserve<s.stats.mag*s.stats.mags&&(s.reserve=Math.min(s.stats.mag*s.stats.mags,s.reserve+Math.ceil(s.stats.mag*.5*e)),i=!0)}if(t.resupplyAcc=(t.resupplyAcc||0)+e,t.resupplyAcc>=4){t.resupplyAcc=0;for(let n=2;n<5;n++){let s=t.slots[n];if(!s||s.def.count===1/0)continue;let a=n===4?t.loadout.cls==="assault"?3:2:s.def.count;s.count<a&&!["beacon","rally","ammobox"].includes(s.id)&&(s.count++,i=!0)}t.bandages<4&&(t.bandages++,i=!0)}return i}useGadget(t,e,i){let n=t.weapon;if(!n||n.kind!=="gadget"||t.state!=="alive"||t.switchT>0||t.actionT>0)return;let s=n.def.kind;if(s==="throw")e&&n.count>0&&(n.count--,t.startAction("throw",.42,{type:n.id}),this.game.audio.play3d("pin",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.4,maxDist:15}));else if(s==="launcher"||s==="rpg"){if(e&&n.count>0&&n.loaded){n.count--,n.loaded=!1;let a=t.eye(new R),r=t.aimDir(new R),l=s==="rpg"?t.adsT>.5?.6:3:t.adsT>.5?.5:2.5;r.x+=(Math.random()-.5)*l*Or,r.y+=(Math.random()-.5)*l*Or,r.normalize();let c=r.clone().multiplyScalar(s==="rpg"?115:72);this.spawnProjectile(s==="rpg"?"rocket":"launcher",t,a.clone().addScaledVector(r,.8),c),this.game.audio.play3d(s==="rpg"?"rocket":"shotgun",a.x,a.y,a.z,{vol:.9,maxDist:250}),t.pitch+=(s==="rpg"?3:2)*Or,this.game.onGadgetFired(t,s),n.count>0&&t.startAction("reloadGadget",s==="rpg"?3.4:2.2,{slot:t.active})}}else if(s==="medkit")e&&t.medkitCd<=0&&(t.hp<100||t.bleed>0)&&t.startAction("medkitSelf",1.1);else if(s==="c4")i?this.detonateC4(t):e&&n.count>0&&(n.count--,t.startAction("throwC4",.4));else if(s==="place"){if(e&&(n.count>0||n.id==="beacon"||n.id==="rally")){let a=this.placementSpot(t);a?(n.id!=="beacon"&&n.id!=="rally"&&n.count--,t.startAction("place",.6,{gid:n.id,spot:a})):t.isPlayer&&this.game.hud&&this.game.hud.toast("Cannot place here")}}else s==="binoculars"&&e&&this.spot(t,t.adsT>.5?12:6,t.adsT>.5?2.2:5)}placementSpot(t){let e=this.world.collision,i=t.forward(new R),n=t.pos.x+i.x*1.4,s=t.pos.z+i.z*1.4,a=e.raycast(n,t.pos.y+1.4,s,0,-1,0,3,{});return!a||a.ny<.6||Math.abs(a.y-t.pos.y)>1.2||!e.los(t.pos.x,t.pos.y+1,t.pos.z,n,a.y+.5,s)?null:{x:n,y:a.y,z:s,yaw:t.yaw}}finishAction(t,e){switch(e.name){case"throw":if(this.throwGrenade(t,e.data.type,t.throwVel||null),t.throwVel=null,t.weapon.kind==="gadget"&&t.weapon.count<=0&&t.switchTo(t.quickReturn??0),t.quickReturn!==void 0&&t.quickReturn!==null){let i=t.quickReturn;t.quickReturn=null,t.switchTo(i)}break;case"melee":this.meleeHit(t);break;case"throwC4":this.throwGrenade(t,"c4",t.throwVel||null),t.throwVel=null;break;case"bandage":t.bandages--,t.bleed=0,t.healT+=15;break;case"medkitSelf":t.bleed=0,t.healT+=50,t.medkitCd=5;break;case"medkitOther":e.data.target.state==="alive"&&(e.data.target.bleed=0,e.data.target.healT+=60,this.game.addScore(t,20,"HEAL"),t.stats.heals++),t.medkitCd=2.5;break;case"reloadGadget":{let i=t.slots[e.data.slot];i&&(i.loaded=!0);break}case"place":{let{gid:i,spot:n}=e.data;i==="sandbags"?this.world.structures.addSandbag(n.x,n.y,n.z,t.yaw):this.place(i,t,n.x,n.y,n.z,t.yaw),this.game.audio.play3d("switch",n.x,n.y,n.z,{vol:.6,maxDist:20});let s=t.slots.find(a=>a&&a.id===i);s&&s.count<=0&&i!=="beacon"&&i!=="rally"&&t.active>=2&&t.switchTo(0);break}}}melee(t){return t.state!=="alive"||t.actionT>0||t.switchT>0||t.vault||t.swimming?!1:(t.reloadT=0,t.startAction("melee",.34),this.game.audio.play3d("throw",t.pos.x,t.pos.y+1.4,t.pos.z,{vol:.5,maxDist:20,rate:1.4}),!0)}meleeHit(t){let e=t.eye(new R),i=t.forward(new R),n=null,s=2.4;for(let u of this.game.soldiers){if(u===t||u.team===t.team||u.state==="dead")continue;let d=u.center(es),f=d.x-e.x,p=d.z-e.z,x=Math.hypot(f,p);x>s||Math.abs(d.y-e.y)>1.8||f/x*i.x+p/x*i.z<.55||this.world.collision.los(e.x,e.y-.3,e.z,d.x,d.y,d.z)&&(s=x,n=u)}if(!n){this.game.audio.play3d("impactDirt",e.x,e.y,e.z,{vol:.15,maxDist:10});return}let a=n.forward(Xh),r=a.x*i.x+a.z*i.z>.4,l=n.state==="downed"||r?250:80,c=n.state==="alive",h=n.center(es);n.takeDamage(l,t,"body","Knife",i.clone(),!1),this.game.fx.impact(h.x,h.y+.2,h.z,-i.x,0,-i.z,"flesh"),this.game.audio.play3d("impactFlesh",h.x,h.y,h.z,{vol:.8,maxDist:25}),this.game.onHit(t,n,l,"body",c),n.brain&&n.brain.onDamaged(t,i)}spotRange(t){if(!t.isPlayer)return 100;let e=t.weapon;if(e&&e.id==="binoculars")return t.adsT>.5?400:150;let i=t.gun&&t.adsT>.5?t.gun.stats.zoom:1;return i>=6?320:i>=3.5?240:i>=1.9?170:120}spot(t,e=6,i=5){let n=new R,s=new R;t.isPlayer&&this.game.playerCtl?this.game.playerCtl.aimRay(n,s):(t.eye(n),t.aimDir(s));let a=this.spotRange(t),r=0,l=0;for(let c of this.game.soldiers){if(c.team===t.team||c.state==="dead")continue;let h=c.center(es),u=Af.set(h.x-n.x,h.y-n.y,h.z-n.z),d=u.length();if(!(d>500||(u.divideScalar(d),Math.acos(Ft(u.dot(s),-1,1))/Or>Math.max(i,60/Math.max(d,1))))&&this.world.collision.los(n.x,n.y,n.z,h.x,h.y,h.z)){if(d>a){l++;continue}c.spotUntil=this.game.time+e,r++}}return r?t.isPlayer&&(this.game.audio.play2d("beep",{vol:.3}),this.game.addScore(t,0,r>1?`SPOTTED ${r}`:"SPOTTED")):l&&t.isPlayer&&this.game.hud.toast(`Too far to spot \xB7 ${a}m max${t.adsT>.5?"":" (aim or use binoculars for more)"}`,1.8),r}update(t){this.updateBullets(t),this.updateProjectiles(t),this.updatePlaced(t)}clear(){for(let t of this.projectiles)t.mesh&&this.game.scene.remove(t.mesh);for(let t of this.placed)t.mesh&&this.game.scene.remove(t.mesh);this.bullets=[],this.projectiles=[],this.placed=[]}static solveBallistic(t,e,i,n){let s=e.x-t.x,a=e.z-t.z,r=e.y-t.y,l=Math.hypot(s,a),c=i*i,h=c*c-n*(n*l*l+2*r*c);if(h<0)return null;let u=Math.atan2(c-Math.sqrt(h),n*l),d=Math.cos(u)*i,f=Math.sin(u)*i;return new R(s/l*d,f,a/l*d)}};var F1=[["ALPHA","BRAVO","CHARLIE","DELTA"],["ECHO","FOXTROT","GOLF","HOTEL"]],qa=class{constructor(t){this.game=t,this.list=[[],[]],this.evalT=[0,2],this.enemyHeat=[null,null]}build(t,e=4){for(let i=0;i<2;i++){this.list[i]=[];let n=t[i],s=Math.ceil(n.length/e);for(let a=0;a<s;a++){let r={id:a,team:i,name:F1[i][a]||`S${a}`,members:[],leader:null,order:null,orderT:0};this.list[i].push(r)}n.forEach((a,r)=>{let l=this.list[i][Math.floor(r/e)];l.members.push(a),a.squad=l});for(let a of this.list[i])this.pickLeader(a)}}pickLeader(t){let e=t.members.find(i=>i.isPlayer&&i.loadout&&i.loadout.cls==="leader");t.leader=e||t.members.find(i=>i.loadout&&i.loadout.cls==="leader")||t.members.find(i=>!i.isPlayer)||t.members[0]}playerIsLeader(t){return t.leader&&t.leader.isPlayer}objectiveFor(t){let e=t.squad,i=e&&e.order;if(!i){let r=this.game.world.def.hq[1-t.team];return{x:r.x*.3,z:r.z*.3,r:30,hold:!1}}if(i.type==="follow"){let r=e.leader;if(r&&r.state==="alive"){let c=e.members.indexOf(t)*1.9+.7;return{x:r.pos.x+Math.cos(c)*5,z:r.pos.z+Math.sin(c)*5,r:6,hold:!1}}}let s=e.members.indexOf(t)*1.7+e.id,a=i.flag?i.flag.r*.35:4;return{x:i.x+Math.cos(s)*a,z:i.z+Math.sin(s)*a,r:i.flag?i.flag.r:15,hold:i.type!=="move",cx:i.x,cz:i.z,type:i.type}}orderType(t){return t.squad&&t.squad.order?t.squad.order.type:"attack"}threatPoint(t,e){let i=this.enemyHeat[t];if(i&&this.game.time-i.t<20)return i;let n=this.game.mode,s=null,a=1e9;for(let l of n.flags){if(l.owner!==1-t)continue;let c=Math.hypot(l.x-e.x,l.z-e.z);c<a&&c>5&&(a=c,s=l)}if(s)return{x:s.x,y:s.y,z:s.z};let r=this.game.world.def.hq[1-t];return{x:r.x,y:this.game.world.terrain.heightAt(r.x,r.z),z:r.z}}setOrder(t,e,i,n,s){t.order={type:e,flag:i||null,x:i?i.x:n,z:i?i.z:s,t:this.game.time};for(let a of t.members)a.brain&&(a.brain.holdSpot=null,a.brain.path=null)}update(t){let e=this.game;for(let i=0;i<2;i++){let n=0,s=0,a=0;for(let r of e.teams[i])if(!(!r.brain||r.state!=="alive"))for(let[,l]of r.brain.known)e.time-l.t<5&&(n+=l.x,s+=l.z,a++);a>0&&(this.enemyHeat[i]={x:n/a,y:e.world.terrain.heightAt(n/a,s/a),z:s/a,t:e.time}),this.evalT[i]-=t,!(this.evalT[i]>0)&&(this.evalT[i]=5,this.assign(i))}}assign(t){let e=this.game,i=e.mode,n=this.list[t].filter(p=>!this.playerIsLeader(p));if(i.type==="tdm"){let p=this.enemyHeat[t],x=e.world.def.flags;for(let g of n){if(g.order&&e.time-g.order.t<25&&Math.random()<.7)continue;let m;if(p&&Math.random()<.6){let v=null,y=1e9;for(let M of x){let S=Math.hypot(M.x-p.x,M.z-p.z)+q(0,60);S<y&&(y=S,v=M)}m=v}else m=x[Math.floor(Math.random()*x.length)];this.setOrder(g,"attack",null,m.x+q(-15,15),m.z+q(-15,15)),g.order.flag={x:g.order.x,z:g.order.z,r:22}}return}let s=i.flags,a=new Map;for(let p of this.list[t])p.order&&p.order.flag&&this.playerIsLeader(p)&&a.set(p.order.flag,(a.get(p.order.flag)||0)+1);let r=[0,0];for(let p of s)p.owner>=0&&r[p.owner]++;let l=r[t]<r[1-t]||i.tickets[t]<i.tickets[1-t]-30,c=p=>p.counts[1-t]>0||p.capTeam===1-t||Math.abs(p.progress)<.85,h=(p,x)=>{let g=this.centroid(p),m=null,v=-1e9;for(let y of s){let M;if(y.owner===t){if(c(y))M=1.45;else if(x)M=.1;else continue;if(i.type==="frontline"){let T=s.some(A=>A.owner!==t&&Math.abs(A.index-y.index)===1);M+=T?.35:-.4}}else if(i.capturable(y,t))M=(y.owner===-1?1.2:1)+(l?.25:0);else continue;let S=g?Math.hypot(g.x-y.x,g.z-y.z):300;M-=S/1400;let w=a.get(y)||0;M-=w*(y.owner===t&&!c(y)?1.2:.45),p.order&&p.order.flag===y&&(M+=.25),M+=q(0,.12),M>v&&(v=M,m=y)}return m},u=0,d=[];for(let p of n){let x=h(p,!0);x&&(a.set(x,(a.get(x)||0)+1),d.push([p,x]),x.owner!==t&&u++)}let f=Math.min(n.length,l?3:2);for(let p of d){if(u>=f)break;let[x,g]=p;if(g.owner===t&&!c(g)){let m=h(x,!1);m&&m.owner!==t&&(a.set(g,a.get(g)-1),a.set(m,(a.get(m)||0)+1),p[1]=m,u++)}}for(let[p,x]of d)!p.order||p.order.flag!==x?this.setOrder(p,x.owner===t?"defend":"attack",x):p.order.type=x.owner===t?"defend":"attack",p.order.ownedByUs=x.owner===t}centroid(t){let e=0,i=0,n=0;for(let s of t.members)s.state==="alive"&&(e+=s.pos.x,i+=s.pos.z,n++);return n?{x:e/n,z:i/n}:null}};var Xa={stand:{h:1.8,eye:1.62,speed:4.3},crouch:{h:1.25,eye:1.12,speed:2.5},prone:{h:.62,eye:.42,speed:1}},O1=6.7,B1=20,H1=1,Ya=class{constructor(t,e,i,n=!1){this.game=t,this.id=H1++,this.team=e,this.name=i,this.isPlayer=n,this.squad=null,this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.lean=0,this.leanTarget=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.move={grounded:!0,hitWall:!1},this.input={mx:0,mz:0,sprint:!1,jump:!1,crouch:!1,prone:!1,fire:!1,ads:!1,lean:0},this.state="dead",this.hp=100,this.bleed=0,this.downedHp=100,this.downedTime=0,this.lastDamage=-99,this.lastAttacker=null,this.damagers=new Map,this.stats={kills:0,deaths:0,assists:0,revives:0,score:0,caps:0,heals:0},this.slots=[],this.active=0,this.prevActive=0,this.fireCd=0,this.reloadT=0,this.switchT=0,this.actionT=0,this.action=null,this.adsT=0,this.bloom=0,this.triggerHeld=!1,this.burst=0,this.boltT=0,this.recoilPitch=0,this.recoilYaw=0,this.spotUntil=0,this.lastShotTime=-99,this.lastLoudShot=-99,this.walkPhase=0,this.vault=null,this.swimming=!1,this.inWater=!1,this.fallVel=0,this.spawnProtect=0,this.reviveTarget=null,this.reviveProgress=0,this.suppression=0,this.flashed=0,this.flashlightOn=!1,this.rig=null,this.deathPose=0,this.deathDir=1,this.deadTime=0,this.stepAcc=0,this.healT=0,this.bandages=4,this.medkitCd=0,this.swayP=0,this.swayY=0,this.holdingBreath=!1}get alive(){return this.state==="alive"}get downed(){return this.state==="downed"}get cls(){return this.loadout?this.loadout.cls:"assault"}get isMedic(){return this.cls==="medic"}ensureRig(){let t=this.id*7;this.rig&&this.rigCls===this.cls||(this.rig&&this.game.scene.remove(this.rig.root),this.rig=Ma(this.team,this.cls,t),this.rigCls=this.cls,this.rig.root.visible=!this.isPlayer,this.game.scene.add(this.rig.root),(this.game.player&&this.team!==this.game.player.team||!this.game.player&&this.team!==(this.game.config.team??0))&&(this.rig.outlineOn=this.game.settings.get("enemyOutline")!==!1,uf(this.rig,this.rig.outlineOn)))}setLoadout(t){this.loadout=t;let e=(s,a)=>{let r=Yd(s,a);return{kind:"gun",id:s,att:a,stats:r,mag:r.mag,reserve:r.mag*r.mags,mode:0,model:Rr(s,a)}},i=di[t.cls],n=s=>({kind:"gadget",id:s,def:rn[s],count:rn[s].count,loaded:!0,model:Kn(s)});this.slots=[e(t.primary,t.att),e(t.secondary,t.satt),n(i.gadgets[0]),n(i.gadgets[1]),Object.assign(n(t.throwable),{count:i.throwables})],this.bandages=4,this.heavy=t.armor==="heavy",this.ensureRig()}get weapon(){return this.slots[this.active]}get gun(){let t=this.slots[this.active];return t&&t.kind==="gun"?t:null}spawn(t,e,i,n){this.pos.set(t,e,i),this.vel.set(0,0,0),this.yaw=n,this.pitch=0,this.lean=0,this.state="alive",this.hp=100,this.bleed=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.active=0,this.switchT=.4,this.reloadT=0,this.fireCd=0,this.action=null,this.actionT=0,this.adsT=0,this.bloom=0,this.recoilPitch=0,this.recoilYaw=0,this.vault=null,this.damagers.clear(),this.lastAttacker=null,this.lastDamage=-99,this.spawnProtect=2.5,this.suppression=0,this.flashed=0,this.deathPose=0,this.reviveProgress=0,this.swimming=!1,this.move.grounded=!0,this.ensureRig(),this.rig.root.visible=!this.isPlayer,this.syncWeaponModel(),this.spawnTime=this.game.time}syncWeaponModel(){let t=this.weapon;if(!this.rig||!t)return;let e=t.kind==="gun"?t.model.pistol?"pistol":"rifle":t.id==="rpg"||t.id==="m320"?"rifle":"gadget";ba(this.rig,t.kind==="gun"?t.model.geo:t.model,e)}eye(t=new R){let e=this.right();return t.set(this.pos.x+e.x*this.lean*.58,this.pos.y+this.eyeH-Math.abs(this.lean)*.1,this.pos.z+e.z*this.lean*.58),t}forward(t=new R){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(t=new R){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}aimDir(t=new R){let e=this.pitch+this.swayP,i=this.yaw+this.swayY,n=Math.cos(e);return t.set(-Math.sin(i)*n,Math.sin(e),-Math.cos(i)*n)}center(t=new R){return t.set(this.pos.x,this.pos.y+this.bodyH*.6,this.pos.z)}headPos(t=new R){let e=this.hitSpheres();return t.set(e[0][0],e[0][1],e[0][2])}hitSpheres(){if(this.rigHS&&this.state!=="dead"&&this.game.frame-this.rigHSFrame<6){let r=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),l=this.pos.x-this.rigHSPos.x,c=this.pos.y-this.rigHSPos.y,h=this.pos.z-this.rigHSPos.z,u=this.rigHS;for(let d=0;d<7;d++)r[d][0]=u[d*4]+l,r[d][1]=u[d*4+1]+c,r[d][2]=u[d*4+2]+h,r[d][3]=u[d*4+3];return r}let t=this.pos,e=this.forward(Yh),i=this.right(Cf),n=this.lean*.5,s=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),a=(r,l,c,h,u)=>{s[r][0]=t.x+e.x*l+i.x*h,s[r][1]=t.y+c,s[r][2]=t.z+e.z*l+i.z*h,s[r][3]=u};if(this.state==="downed"||this.state==="dead"||this.stance==="prone"){let r=this.state==="alive"?1:-1;a(0,.78*r,.28,0,.14),a(1,.42*r,.24,0,.22),a(2,.05*r,.22,0,.21),a(3,-.4*r,.15,-.12,.13),a(4,-.4*r,.15,.12,.13),a(5,-.8*r,.13,-.12,.12),a(6,-.8*r,.13,.12,.12)}else this.stance==="crouch"?(a(0,.04,1.34,n*1.2,.15),a(1,.02,1,n,.23),a(2,0,.77,n*.5,.2),a(3,.2,.5,.1,.12),a(4,-.05,.42,-.1,.12),a(5,.38,.22,.1,.11),a(6,-.3,.12,-.1,.11)):(a(0,.02,1.69,n*1.2,.15),a(1,0,1.36,n,.23),a(2,0,1.1,n*.5,.2),a(3,0,.72,-.1,.14),a(4,0,.72,.1,.14),a(5,0,.3,-.1,.13),a(6,0,.3,.1,.13));return s}setStance(t){if(t===this.stance)return!0;let e=Xa[t].h;return e>this.bodyH+.01&&this.game.world.collision.overlapsAny(this.pos.x,this.pos.y+.05,this.pos.z,.28,e-.05)?!1:(this.stance=t,this.bodyH=e,!0)}speedTarget(){if(this.swimming)return 2.2;let t=Xa[this.stance].speed,e=this.gun,i=e?e.stats.moveMul:1.02;return this.sprinting?t=O1:this.adsT>.5&&(t=Math.min(t,this.stance==="stand"?2.7:t*.8)),this.heavy&&(t*=.94),this.bleed>0&&this.hp<30&&(t*=.85),t*i}updateMovement(t){let e=this.game.world.collision,i=this.input;if(this.vault){this.updateVault(t);return}i.prone&&this.stance!=="prone"?this.setStance("prone")&&(i.prone=!1):i.crouch&&this.stance==="stand"?this.setStance("crouch"):!i.crouch&&!i.proneHold&&this.stance==="crouch"&&!(this.slideT>0)&&this.setStance("stand");let n=Math.abs(i.mx)+Math.abs(i.mz)>.05;if(this.sprinting=i.sprint&&n&&i.mz<-.3&&this.stance!=="prone"&&!this.swimming&&this.adsT<.3&&this.actionT<=0,this.sprinting&&this.stance==="crouch"&&this.setStance("stand"),this.sprinting&&this.reloadT>0&&!this.isPlayer&&(this.sprinting=!1),i.slide&&(i.slide=!1,this.wasSprinting&&this.move.grounded&&!this.swimming)){let S=Math.hypot(this.vel.x,this.vel.z)||1,w=Math.max(S,8.4)/S;this.vel.x*=w,this.vel.z*=w,this.slideT=.85,this.stance="crouch",this.bodyH=Xa.crouch.h,this.game.onVault(this)}this.wasSprinting=this.sprinting;let s=this.slideT>0;s&&(this.slideT-=t,this.sprinting=!1,(Math.hypot(this.vel.x,this.vel.z)<2.6||!this.move.grounded)&&(this.slideT=0));let a=this.forward(Yh),r=this.right(Cf),l=a.x*-i.mz+r.x*i.mx,c=a.z*-i.mz+r.z*i.mx,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let u=this.speedTarget();i.mz>.3&&!this.swimming&&(u*=.8);let d=l*u,f=c*u,p=this.move.grounded||this.swimming?n?38:26:5;if(s){let S=Math.max(0,1-1.4*t);this.vel.x=this.vel.x*S+d*.6*t,this.vel.z=this.vel.z*S+f*.6*t}else this.vel.x+=(d-this.vel.x)*Math.min(1,p*t/4),this.vel.z+=(f-this.vel.z)*Math.min(1,p*t/4);let x=this.game.world.terrain.waterLevel,g=this.game.world.terrain.heightAt(this.pos.x,this.pos.z);this.inWater=x!==null&&this.pos.y<x-.2;let m=x!==null&&g<x-1.25&&this.pos.y<x-1.1;if(m&&!this.swimming&&(this.swimming=!0,this.setStance("stand")),this.swimming&&(!m||g>x-1.2)&&(this.swimming=!1),this.swimming){let S=x-1.35;this.vel.y+=(S-this.pos.y)*6*t-this.vel.y*3*t,i.jump&&this.pos.y>S-.3&&this.tryVault(!0)}else this.vel.y-=B1*t,i.jump&&(i.jump=!1,!this.tryVault(!1)&&this.move.grounded&&(this.stance!=="stand"?this.setStance("stand"):(this.vel.y=5.4,this.move.grounded=!1)));let v=this.vel.y,y=this.move.grounded;e.move(this.pos,this.vel,t,.3,this.bodyH,this.move.grounded?.48:.1,this.move),this.move.grounded&&!y&&v<-12.5&&!this.swimming&&this.takeDamage((-v-12.5)*9,null,"fall","Fall",null,!1);let M=Math.hypot(this.vel.x,this.vel.z);if(this.move.grounded&&M>.5){this.walkPhase+=M*t*(this.sprinting?1.7:2.1),this.stepAcc+=M*t;let S=this.sprinting?1.9:1.5;this.stepAcc>S&&(this.stepAcc=0,this.game.onFootstep(this,this.sprinting?1:this.stance==="stand"?.6:.3))}}tryVault(t){if(this.stance==="prone"||this.state!=="alive")return!1;let e=this.game.world.collision,i=this.forward(Yh),n=this.pos.y,s=!1;for(let a of[.6,1,1.4]){let r=e.raycast(this.pos.x,n+a,this.pos.z,i.x,0,i.z,.9,{terrain:!0});if(r&&r.t<.85){s=!0;break}}if(!s)return!1;for(let a of[.55,.8,1.05]){let r=this.pos.x+i.x*a,l=this.pos.z+i.z*a,c=e.raycast(r,n+2.5,l,0,-1,0,2.5,{});if(!c)continue;let h=c.y-n;if(h<.45||h>(t?2.6:2.25))continue;if(e.overlapsAny(r,c.y+.05,l,.28,1.2)){let p=this.pos.x+i.x*1.6,x=this.pos.z+i.z*1.6;if(h<1.3&&!e.overlapsAny(p,n+.05,x,.28,1.2))return this.startVault(p,e.groundAt(p,x,n+1.5),x,.55,c.y),!0;continue}let u=this.pos.x+i.x*1.7,d=this.pos.z+i.z*1.7,f=e.raycast(u,n+2.5,d,0,-1,0,3.5,{});return h<1.3&&f&&f.y<c.y-.4&&!e.overlapsAny(u,f.y+.05,d,.28,1.6)?this.startVault(u,f.y,d,.5,c.y):this.startVault(r,c.y,l,h>1.3?.75:.42,c.y),!0}return!1}startVault(t,e,i,n,s){this.vault={sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,x:t,y:e,z:i,t:0,dur:n,apex:Math.max(s,e)+.25},this.vel.set(0,0,0),this.swimming=!1,this.stance!=="stand"&&this.setStance("stand"),this.game.onVault(this)}updateVault(t){let e=this.vault;e.t+=t/e.dur;let i=Math.min(1,e.t),n=Math.min(1,i/.55);this.pos.x=Qt(e.sx,e.x,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.z=Qt(e.sz,e.z,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.y=i<.55?Qt(e.sy,e.apex,Math.sin(n*Math.PI/2)):Qt(e.apex,e.y,(i-.55)/.45),i>=1&&(this.pos.set(e.x,e.y,e.z),this.vault=null,this.move.grounded=!0)}spread(){let t=this.gun;if(!t)return 2;let e=t.stats,i=Math.hypot(this.vel.x,this.vel.z),n=Math.min(1.5,i/4.3),s=e.spreadHip*e.hipMul*(1+n*.9),a=e.spreadAds*.55*(1+n*.35);this.burst<=1&&i<.5&&(a*=.35);let r=this.adsT*this.adsT*(3-2*this.adsT),l=Qt(s,a,r);return this.stance==="crouch"?l*=.8:this.stance==="prone"&&(l*=.6),this.move.grounded||(l*=2.5),l+=this.bloom*Qt(1,.18,r),Math.abs(this.lean)>.5&&this.adsT>.5&&(l*=.85),e.type==="sniper"&&this.adsT>.95&&(l=0),l}recoilFactor(){let t=1;this.stance==="crouch"&&(t*=.82),this.stance==="prone"&&(t*=.65);let e=this.gun;return e&&e.stats.bipod&&(this.stance==="prone"||this.stance==="crouch")&&(t*=.45),this.adsT<.5&&(t*=1.15),t}canFire(){return this.state==="alive"&&this.switchT<=0&&this.reloadT<=0&&this.actionT<=0&&!this.sprinting&&!this.vault&&!this.swimming&&this.boltT<=0}updateWeapon(t,e){if(this.fireCd-=t,this.boltT-=t,this.switchT>0&&(this.switchT-=t),this.medkitCd>0&&(this.medkitCd-=t),this.actionT>0&&(this.actionT-=t,this.actionT<=0&&this.finishAction()),this.reloadT>0){this.reloadT-=t;let y=this.gun;if(y&&y.stats.shellReload&&this.reloadT<=0)y.reserve>0&&y.mag<y.stats.mag&&(y.mag++,y.reserve--,this.game.onReloadSound(this,"magIn")),y.mag<y.stats.mag&&y.reserve>0&&!this.input.fire&&(this.reloadT=y.stats.reload);else if(y&&this.reloadT<=0){let M=y.stats.mag-y.mag,S=Math.min(M,y.reserve);y.mag+=S,y.reserve-=S,this.isPlayer||this.game.onReloadSound(this,"magIn")}}this.bloom=Math.max(0,this.bloom-t*6);let i=this.gun,n=this.input.ads&&this.state==="alive"&&!this.sprinting&&this.switchT<=0&&!this.swimming&&!this.vault&&(i||this.weapon&&this.weapon.id==="binoculars"),s=i?1/(i.stats.adsTime*i.stats.adsMul):6;this.adsT=Ft(this.adsT+(n?s:-s*1.4)*t,0,1);let a=Math.min(1,t*7),r=this.recoilPitch*a,l=this.recoilYaw*a;if(this.recoilPitch-=r,this.recoilYaw-=l,!this.triggerHeld||this.fireCd<-.1){let y=this.adsT>.5;this.pitch-=r*(y?.7:.55),this.yaw-=l*(y?.6:.4)}if(!i)return this.triggerHeld=this.input.fire,!1;let c=i.stats,h=c.modes[i.mode]||"auto",u=this.input.fire&&!this.triggerHeld;if(this.triggerHeld=this.input.fire,this.input.fire&&i.stats.shellReload&&this.reloadT>0&&i.mag>0&&(this.reloadT=0),!this.input.fire)return this.burst=0,!1;if(!this.canFire()||h!=="auto"&&!u&&!(this.autoRepeat&&h==="semi")||this.fireCd>0)return!1;if(i.mag<=0)return u&&this.game.onDryFire(this),i.reserve>0&&this.reload(),!1;i.mag--,this.fireCd=c.interval,(c.bolt||c.pump)&&(this.boltT=c.interval*.9),this.burst++,this.lastShotTime=e,c.suppressed||(this.lastLoudShot=e);let d=c.pellets||1;for(let y=0;y<d;y++)this.game.combat.fireBullet(this,i,y);let f=this.recoilFactor(),p=this.burst,x=c.rpm%7+c.mag*.13,g=this.adsT>.5,m=g?c.recoilV*c.recoilVMul*f*(p>1?1-Math.min(.25,p*.015):1.15)*(.92+Math.random()*.16):c.recoilV*c.recoilVMul*f*(p>1?1:1.25),v=g?(Math.sin(p*.55+x)*.75+(Math.random()-.5)*.5)*c.recoilH*c.recoilHMul*f:(Math.random()-.5)*2*c.recoilH*c.recoilHMul*f;return this.pitch+=m*Math.PI/180,this.yaw-=v*Math.PI/180,this.recoilPitch+=m*Math.PI/180,this.recoilYaw-=v*Math.PI/180,this.bloom=Math.min(c.type==="lmg"?3:2.2,this.bloom+c.recoilV*.6),this.pitch=Ft(this.pitch,-1.5,1.5),this.game.onShot(this,i),i.mag===0&&i.reserve>0&&!this.isPlayer&&this.reload(),!0}reload(){let t=this.gun;return!t||this.reloadT>0||t.mag>=t.stats.mag||t.reserve<=0||this.state!=="alive"||this.actionT>0?!1:(this.reloadEmpty=t.mag===0,this.reloadT=t.stats.shellReload?t.stats.reload+.3:t.mag===0?t.stats.reloadEmpty:t.stats.reload,this.reloadTotal=this.reloadT,this.reloadStart=(this.reloadStart||0)+1,(!this.isPlayer||t.stats.shellReload)&&this.game.onReloadSound(this,"magOut"),!0)}switchTo(t){if(t===this.active||!this.slots[t]||this.state!=="alive")return;let e=this.slots[t];e.kind==="gadget"&&e.count<=0&&e.def.kind!=="medkit"&&e.def.kind!=="binoculars"&&!(e.def.kind==="c4"&&this.c4s&&this.c4s.length)||(this.prevActive=this.active,this.active=t,this.switchT=.45,this.reloadT=0,this.action=null,this.actionT=0,this.adsT=Math.min(this.adsT,.2),this.syncWeaponModel(),this.game.onSwitch(this))}cycleMode(){let t=this.gun;!t||t.stats.modes.length<2||(t.mode=(t.mode+1)%t.stats.modes.length)}startAction(t,e,i){return this.actionT>0||this.state!=="alive"?!1:(this.action={name:t,data:i},this.actionT=e,this.actionDur=e,this.reloadT=0,!0)}finishAction(){let t=this.action;this.action=null,!(!t||this.state!=="alive")&&this.game.combat.finishAction(this,t)}bandage(){return this.bandages<=0||this.bleed<=0&&this.hp>=100?!1:this.startAction("bandage",1.8)?(this.game.onBandage(this),!0):!1}takeDamage(t,e,i,n,s,a){if(this.state==="dead"||this.spawnProtect>0&&e&&e!==this||e&&e!==this&&e.team===this.team)return;let r=this.game.time;if(this.heavy&&i!=="head"&&(t*=.86),this.lastDamage=r,e&&e!==this&&(this.lastAttacker=e,this.damagers.set(e,(this.damagers.get(e)||0)+t),this.lastDamageDir=s?s.clone():null),this.state==="downed"){this.downedHp-=t*1.5,this.downedHp<=0&&this.die(e,n,i==="head",!0);return}if(this.hp-=t,t>=12&&i!=="fall"&&(this.bleed=Math.min(3.5,this.bleed+t*.012)),this.game.onDamaged(this,e,t,i,s),this.hp<=0){let l=-this.hp;l>70||i==="head"&&t>90||a&&l>40||this.swimming?this.die(e,n,i==="head",!1):this.goDown(e,n,i==="head")}}goDown(t,e,i){this.state="downed",this.hp=0,this.downedHp=100,this.downedTime=0,this.setStance("prone"),this.stance="prone",this.bodyH=.6,this.vel.x=this.vel.z=0,this.adsT=0,this.reloadT=0,this.action=null,this.actionT=0,this.vault=null,this.reviveProgress=0,this.game.onDowned(this,t,e,i)}die(t,e,i,n){if(this.state==="dead")return;let s=this.state==="downed";this.state="dead",this.deadTime=0,this.deathDir=Math.random()<.5?-1:1,this.stats.deaths++,this.game.onKilled(this,t||this.lastAttacker,e,i,s)}revive(t){this.state==="downed"&&(this.state="alive",this.hp=t&&t.isMedic?100:40,this.bleed=0,this.setStance("crouch"),this.spawnProtect=1.2,this.game.onRevived(this,t))}heal(t){this.hp=Math.min(100,this.hp+t)}updateSway(t,e){let i=this.gun,n=this.isPlayer&&i&&this.adsT>.3&&(i.stats.zoom>=3.5||i.stats.type==="sniper"||i.stats.type==="dmr"),s=0;n&&(s=(i.stats.type==="sniper"?.55:.35)*Math.PI/180,this.stance==="crouch"?s*=.6:this.stance==="prone"&&(s*=.3),i.stats.bipod&&this.stance!=="stand"&&(s*=.4),Math.abs(this.lean)>.5&&(s*=.7),Math.hypot(this.vel.x,this.vel.z)>.5&&(s*=1.8),this.holdingBreath&&(s*=.08),s*=1+this.suppression*2.5);let a=Math.sin(e*.83)*s+Math.sin(e*2.1+1)*s*.35,r=Math.sin(e*1.37+2)*s*.8+Math.sin(e*2.9)*s*.25,l=1-Math.exp(-t*6);this.swayY+=(a-this.swayY)*l,this.swayP+=(r-this.swayP)*l}updateVitals(t,e){this.updateSway(t,e),this.spawnProtect>0&&(this.spawnProtect-=t,(this.input.fire||Math.hypot(this.vel.x,this.vel.z)>2)&&(this.spawnProtect=Math.min(this.spawnProtect,.5))),this.suppression=Math.max(0,this.suppression-t*.35),this.flashed=Math.max(0,this.flashed-t*.4),this.lean=ei(this.lean,this.state==="alive"&&!this.sprinting?this.leanTarget:0,12,t);let i=this.state==="alive"?Xa[this.stance].eye:.35;if(this.eyeH=ei(this.eyeH,i,10,t),this.state==="alive"){if(this.bleed>0?(this.hp-=this.bleed*t,this.hp<=0&&(this.hp=0,this.goDown(this.lastAttacker,"Bleeding",!1))):e-this.lastDamage>7&&this.hp<60&&(this.hp=Math.min(60,this.hp+4*t)),this.healT>0){let n=Math.min(this.healT,30*t);this.healT-=n,this.heal(n)}}else this.state==="downed"?(this.downedTime+=t,this.downedHp-=t*100/(this.isPlayer?40:28),this.downedHp<=0&&this.die(this.lastAttacker,"Bled out",!1,!0)):this.state==="dead"&&(this.deadTime+=t)}updateAnim(t,e){let i=this.rig;if(!i)return;if(this.isPlayer){i.root.visible=!1;return}if(this.state==="dead"&&this.deadTime>25){i.root.visible=!1;return}if(i.outlines){let et=i.outlineOn!==!1&&this.state!=="dead";if(et!==i._olv){i._olv=et;for(let I of i.outlines)I.visible=et}}i.root.visible=!0;let n=(this.pos.x-e.x)**2+(this.pos.z-e.z)**2;if(n>160*160&&(this.id+this.game.frame)%3!==0&&this.state==="alive"){i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;return}let a=n<90*90;a!==this._cs&&(this._cs=a,i.root.traverse(et=>{et.isMesh&&(et.castShadow=a)})),i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;let r=this.anim||(this.anim={phase:0,legYaw:0,lastYaw:this.yaw,shuffle:0,throwT:0,meleeT:0,death:null}),l=this.game.time,c=-Math.sin(this.yaw),h=-Math.cos(this.yaw),u=Math.cos(this.yaw),d=-Math.sin(this.yaw),f=this.vel.x*c+this.vel.z*h,p=this.vel.x*u+this.vel.z*d,x=Math.hypot(f,p),g=f<-.4,m=_i(this.yaw-r.lastYaw)/Math.max(t,.001);r.lastYaw=this.yaw;let v=0;if(x>.5&&this.stance!=="prone"&&this.state==="alive"){let et=Math.atan2(p,f);Math.abs(et)>Math.PI/2&&(et=_i(et-Math.PI)),v=-Math.max(-1.05,Math.min(1.05,et))}r.legYaw=ei(r.legYaw,v,9,t);let y=this.stance==="crouch"?2.7:this.sprinting?1.45:this.stance==="prone"?3.2:2.05;r.phase+=x*t*y*(g?-1:1),x<.4&&Math.abs(m)>1.2&&this.state==="alive"&&this.stance!=="prone"?(r.shuffle=Math.min(1,r.shuffle+t*6),r.phase+=t*7):r.shuffle=Math.max(0,r.shuffle-t*4);let M=Math.sin(r.phase),S=Math.cos(r.phase),w=Math.max(Math.min(1,x/(this.sprinting?6:this.stance==="crouch"?2.4:4)),r.shuffle*.35);r.amp=ei(r.amp??w,w,8,t);let T=r.amp,A=.95,_=0,b=0,C=this.lean*.12,L=this.pitch*.25,k=-r.legYaw*.85,N=-this.lean*.42,O=this.pitch*.3,U=this.pitch*.72,X=0,F=0,B=0,j=0,rt=0,st=0,_t=0,Y=0,J=0,gt=0,it=0,xt=0,St=0,vt=0;if(this.state==="dead"){r.death||(r.death={dir:this.deathDir,roll:(Math.random()-.5)*.8,arms:Math.random()}),this.deathPose=Math.min(1,this.deathPose+t*2.2);let et=this.deathPose,I=1-Math.pow(1-et,3),E=r.death;A=Qt(.95,.17,I),_=1.52*E.dir*I,b=E.roll*I,L=.15*I,k=0,N=E.roll*.3*I,O=(E.dir>0?-.5:.6)*I,U=Qt(this.pitch,E.dir>0?1.2:-1.3,I),B=-.6*I*E.arms,rt=.7*I,J=.25*I,gt=-.15*I,it=-.4*I,xt=-.15*I,St=.15*I,vt=-.1*I,_t=1.2*I}else if(this.state==="downed"){let et=Math.sin(this.downedTime*2.4)*.06;A=.2,_=1.48,b=.2+et,L=-.25,k=0,O=-.7,U=-.9+et,X=.4,j=-.6,rt=.4,F=-.3,J=.45+et,it=-.9,gt=.15,xt=-.35,St=.1,vt=-.12,_t=1.3}else if(this.stance==="prone"){A=.2,_=-1.47,L=0,k=0,O=1.15+this.pitch*.4,U=1.47+this.pitch*.8;let et=M*T;J=.05+et*.3,gt=.05-et*.3,it=-.15-Math.max(0,et)*.9,xt=-.15-Math.max(0,-et)*.9,St=.18,vt=-.18,b=et*.05,j=et*.15,F=-et*.15}else if(this.stance==="crouch"){let et=1-T;A=Qt(.66,.62,et),_=-.08,J=Qt(.9+M*.45,.25,et),it=Qt(-1.35-Math.max(0,S)*.5,-1.75,et),gt=Qt(.9-M*.45,1.1,et),xt=Qt(-1.35-Math.max(0,-S)*.5,-1.65,et),L+=.08,U-=.08,A+=-Math.abs(M)*.02*T}else{let et=this.sprinting?.8:.48;J=M*et*T,gt=-M*et*T,it=-(Math.max(0,S)*(this.sprinting?1.4:.95)+.06)*T,xt=-(Math.max(0,-S)*(this.sprinting?1.4:.95)+.06)*T,A=.95-Math.abs(Math.sin(r.phase))*.035*T+(this.sprinting?-.03:0),b=M*.03*T,this.sprinting?(L=-.22,U=-.75,X=.55,_t=.9,st=.2,O=.15,F=M*.25,j=-M*.25):k+=M*.04*T,this.slideT>0&&(A=.5,_=.35,J=1.25,it=-.3,gt=.5,xt=-1.4,L=-.1,U=this.pitch*.7-.35),!this.move.grounded&&!this.swimming&&!this.vault&&(J=.75,it=-1.15,gt=.15,xt=-.6),this.vault&&(J=1.2,it=-1.6,gt=.8,xt=-1.2,_=-.2,U=-.5),this.swimming&&(A=.95,J=M*.4,gt=-M*.4,it=-.3,xt=-.3,U=-.5,F=S*.4,j=-S*.4)}if(this.state==="alive"){if(this.reloadT>0){let I=this.reloadTotal||2,E=1-this.reloadT/I,W=E<.25?E/.25:E<.65?1:E<.85?1-(E-.65)/.2:0;j=-.55*W,rt=.25*W,_t+=.45*Math.sin(Math.min(1,E)*Math.PI),st+=.15*W,U-=.18*Math.sin(Math.min(1,E)*Math.PI)}if(this.action){let I=1-this.actionT/(this.actionDur||1);if(this.action.name==="throw"||this.action.name==="throwC4"){let E=I<.55?I/.55:1-(I-.55)/.45;F=2.6*E-.6*(1-E)*(I>.55?1:0),B=-.3*E,U=this.pitch*.7-.3,Y=.2,k+=.35*E}else if(this.action.name==="melee"){let E=Math.sin(Math.min(1,I*1.6)*Math.PI);X=-.6*E,Y=-.25*E,k+=-.4*E}else j=-.9,F=-.5,U-=.6,_t+=.8}this.reviveProgress>0&&(U=-1.1,j=-.4,F=-.3,_t=1);let et=l-this.lastShotTime;et<.08&&(Y+=.05*(1-et/.08),U+=.04*(1-et/.08))}let Gt=1-Math.exp(-t*(this.state==="dead"?26:16)),nt=1-Math.exp(-t*(this.state==="dead"?22:10)),ut=1-Math.exp(-t*(this.state==="dead"?18:7)),z=Gt,pt=(et,I,E)=>{et[I]+=(E-et[I])*z};z=ut,pt(i.body.position,"y",A),pt(i.body.position,"x",C),pt(i.body.rotation,"x",_),pt(i.body.rotation,"z",b),z=nt,pt(i.pelvis.rotation,"y",r.legYaw*(this.stance==="prone"||this.state!=="alive"?0:1)),pt(i.spine.rotation,"x",L),pt(i.spine.rotation,"y",k),pt(i.spine.rotation,"z",N),pt(i.head.rotation,"x",O),z=Gt,pt(i.aim.rotation,"x",U),pt(i.aim.rotation,"y",X),pt(i.armR.rotation,"x",F),pt(i.armR.rotation,"z",B),pt(i.armL.rotation,"x",j),pt(i.armL.rotation,"z",rt),pt(i.weapon.rotation,"x",st),pt(i.weapon.rotation,"z",_t);let ct=i.pose==="pistol"?-.42:i.pose==="gadget"?-.3:-.33;pt(i.weapon.position,"z",ct+Y);let yt=i.legs;pt(yt[0].thigh.rotation,"x",J),pt(yt[1].thigh.rotation,"x",gt),pt(yt[0].thigh.rotation,"z",St),pt(yt[1].thigh.rotation,"z",vt),pt(yt[0].shin.rotation,"x",it),pt(yt[1].shin.rotation,"x",xt),this.state!=="dead"&&(r.death=null),i.root.updateMatrixWorld(!0);let ft=this.rigHS||(this.rigHS=new Float32Array(28)),Lt=(et,I,E,W,Q,ot)=>{Br.set(E,W,Q),I.localToWorld(Br),ft[et*4]=Br.x,ft[et*4+1]=Br.y,ft[et*4+2]=Br.z,ft[et*4+3]=ot};Lt(0,i.head,0,.14,0,.15),Lt(1,i.spine,0,.33,0,.23),Lt(2,i.spine,0,.09,0,.2),Lt(3,yt[0].thigh,0,-.22,0,.12),Lt(4,yt[1].thigh,0,-.22,0,.12),Lt(5,yt[0].shin,0,-.24,0,.11),Lt(6,yt[1].shin,0,-.24,0,.11),this.rigHSPos=(this.rigHSPos||new R).copy(this.pos),this.rigHSFrame=this.game.frame}muzzleWorld(t=new R){if(this.rig&&this.rig.weaponMesh&&!this.isPlayer){let e=this.gun,i=e?e.model.muzzle:V1;return this.rig.weapon.updateWorldMatrix(!0,!1),t.copy(i).applyMatrix4(this.rig.weapon.matrixWorld)}return this.eye(t)}removeFromScene(){this.rig&&this.game.scene.remove(this.rig.root)}},Yh=new R,Cf=new R,V1=new R,Br=new R;var Rf=new R;function is(o,t){if(t<=o[0][0])return o[0][1];for(let e=1;e<o.length;e++){let[i,n]=o[e];if(t<=i){let[s,a]=o[e-1],r=i>s?(t-s)/(i-s):1;return r=r*r*(3-2*r),Array.isArray(a)?a.map((l,c)=>l+(n[c]-l)*r):a+(n-a)*r}}return o[o.length-1][1]}var G1=o=>new dt(o).lerp(new dt(8026746),.25).getHex();function Hr(o,t,e,i,n,s,a,r){let l=i-o,c=n-t,h=s-e,u=Math.hypot(l,c,h),d=P.box(a,a*.9,u,r),f=new Rt().lookAt(new R,new R(l,c,h),new R(0,1,0));return d.applyMatrix4(f),d.translate((o+i)/2,(t+n)/2,(e+s)/2),d}var $h={};function W1(o){if($h[o])return $h[o];let t=256,e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),n=o==="chevron"?"#ff7a2a":"#ff3030";i.strokeStyle=i.fillStyle=n,i.shadowColor=n,i.lineCap="round";let s=(r,l)=>{i.shadowBlur=r,l(),i.shadowBlur=0,l()};o==="dot"?s(14,()=>{i.beginPath(),i.arc(128,128,9,0,7),i.fill()}):o==="holo"?s(8,()=>{i.lineWidth=3.5,i.beginPath(),i.arc(128,128,46,0,7),i.stroke();for(let[r,l]of[[0,-1],[0,1],[-1,0],[1,0]])i.beginPath(),i.moveTo(128+r*46,128+l*46),i.lineTo(128+r*58,128+l*58),i.stroke();i.beginPath(),i.arc(128,128,4.5,0,7),i.fill()}):s(8,()=>{i.lineWidth=4,i.beginPath(),i.moveTo(104,150),i.lineTo(128,124),i.lineTo(152,150),i.stroke(),i.lineWidth=3,i.beginPath(),i.arc(128,128,54,Math.PI*.15,Math.PI*.85,!0),i.stroke(),i.beginPath(),i.arc(128,124,3,0,7),i.fill()});let a=new Vn(e);return a.colorSpace=Te,a.anisotropy=4,$h[o]=a,a}var Vr=null;function q1(){if(Vr)return Vr;let o=128,t=document.createElement("canvas");t.width=t.height=o;let e=t.getContext("2d"),i=e.createRadialGradient(o*.5,o*.5,o*.1,o*.5,o*.5,o*.5);return i.addColorStop(0,"rgba(150,190,230,0.05)"),i.addColorStop(.75,"rgba(120,160,210,0.12)"),i.addColorStop(1,"rgba(50,70,100,0.45)"),e.fillStyle=i,e.fillRect(0,0,o,o),e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=5,e.beginPath(),e.arc(o*.5,o*.5,o*.36,Math.PI*1.1,Math.PI*1.4),e.stroke(),Vr=new Vn(t),Vr.colorSpace=Te,Vr}var $a=class{constructor(t,e){this.game=t,this.s=e,this.input=t.input,this.camera=t.camera,this.vmScene=t.vmScene,this.vmCamera=t.vmCamera,this.vmRoot=new ue,this.vmScene.add(this.vmRoot),this.vmMat=new fe({vertexColors:!0,roughness:.6,metalness:.15,side:Re}),this.vmMesh=null,this.vmArms=null,this.reticle=null,this.bobPhase=0,this.swayX=0,this.swayY=0,this.kick=0,this.lastShot=-1,this.crouchToggle=!1,this.proneToggle=!1,this.giveUpT=0,this.interactT=0,this.camRoll=0,this.landDip=0,this.prevGrounded=!0,this.vmKey=null,this.flashlight=new Qo(16773592,0,60,.42,.45,1.5),this.flashlight.castShadow=!1,this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.flashlight.position.set(.2,-.15,0),this.flashlight.target.position.set(0,0,-10),this.laserDot=null,this.breath=1,this.holding=!1,this.adsToggle=!1,this.leanToggle=0}buildViewmodel(){let t=this.s,e=t.weapon;if(!e)return;let i=t.active+":"+(e.kind==="gun"?e.id+JSON.stringify(e.att):e.id)+":"+t.team;if(i===this.vmKey)return;this.vmKey=i;for(let d of["vmMesh","vmMag","vmArmR","vmArmL","reticle","vmLenses"])this[d]&&(this[d].parent&&this[d].parent.remove(this[d]),this[d]=null);if(this.vmArmLGroup||(this.vmArmLGroup=new ue,this.vmRoot.add(this.vmArmLGroup)),!this.vmKnife){this.vmKnife=new ue;let d=new Ot(Kn("knife"),this.vmMat);d.rotation.x=-.2,this.vmKnife.add(d);let f=Ye[this.s.team],p=new Ot(P.merge([P.box(.07,.075,.09,f.glove,0,-.01,.03),P.box(.022,.03,.05,f.glove,-.035,.02,0),Hr(0,-.05,.06,.08,-.2,.32,.08,f.uniform2)]),this.vmMat);this.vmKnife.add(p),this.vmKnife.visible=!1,this.vmScene.add(this.vmKnife)}let n=Ye[t.team],s,a=null,r,l=new R(0,-.035,.02);if(this.magPos=null,e.kind==="gun"){let d=e.model;s=d.bodyGeo,a=d.magGeo,this.magPos=d.magPos.clone(),r=new R(0,0,e.stats.type==="pistol"?0:-d.len*.42),e.stats.type==="pistol"&&r.set(-.02,-.04,.02),this.sightY=d.sightY,this.sightZ=d.sightZ,this.muzzle=d.muzzle.clone(),this.glassMat||(this.glassMat=new Li({map:q1(),transparent:!0,depthWrite:!1,side:Re,toneMapped:!1})),this.vmLenses=new ue;for(let f of d.lenses||[]){let p=f.type==="rect"?new Ke(f.w,f.h):new ks(f.r,20),x=new Ot(p,this.glassMat);x.position.set(0,f.y,f.z),x.renderOrder=3,x.userData.back=!!f.back,this.vmLenses.add(x)}if(this.vmRoot.add(this.vmLenses),e.stats.reticle&&!e.stats.scope&&e.stats.zoom<3.5){let f=new Li({map:W1(e.stats.reticle),transparent:!0,depthWrite:!1,depthTest:!1,blending:en,toneMapped:!1});f.color.setRGB(2.2,2.2,2.2);let p=new Ot(new Ke(.024,.024),f);p.position.set(0,d.sightY,d.reticleZ??d.sightZ-.03),p.renderOrder=4,this.reticle=p,this.vmRoot.add(p)}}else s=e.model,r=new R(-.1,-.02,.02),this.sightY=.1,this.sightZ=0,this.muzzle=new R(0,.05,-.6);this.gripL=r,this.vmMesh=new Ot(s,this.vmMat),this.vmRoot.add(this.vmMesh),a&&(this.vmMag=new Ot(a,this.vmMat),this.vmMag.position.copy(this.magPos),this.vmRoot.add(this.vmMag));let c=(d,f,p,x)=>[P.box(.062,.066,.085,n.glove,d,f,p),P.box(.064,.02,.03,G1(n.glove),d,f+.03,p-.035),P.box(.02,.025,.05,n.glove,d+.03*x,f+.01,p-.02)],h=[Hr(.16,-.32,.32,l.x+.035,l.y-.035,l.z+.08,.075,n.uniform),Hr(l.x+.06,l.y-.06,l.z+.14,l.x+.02,l.y-.02,l.z+.05,.08,n.uniform2),...c(l.x+.012,l.y,l.z,-1),P.box(.075,.03,.05,n.accent,.12,-.21,.2)],u=[Hr(-.2,-.32,.14,r.x-.035,r.y-.045,r.z+.08,.075,n.uniform),Hr(r.x-.06,r.y-.07,r.z+.15,r.x-.02,r.y-.035,r.z+.05,.08,n.uniform2),...c(r.x-.01,r.y-.025,r.z,1)];this.vmArmR=new Ot(P.merge(h),this.vmMat),this.vmRoot.add(this.vmArmR),this.vmArmL=new Ot(P.merge(u),this.vmMat),this.vmArmLGroup.add(this.vmArmL)}update(t){let e=this.s,i=this.input,n=this.game,s=n.settings,a=n.hud,r=n.uiBlocking(),l=!r&&e.state==="alive";if(!r&&e.state!=="dead"){let u=e.gun,d=e.adsT>.5?u?u.stats.zoom:e.weapon&&e.weapon.id==="binoculars"?6:1:1,f=.0021*s.get("sensitivity")*(e.adsT>.5?s.get("adsSensitivity")/Math.pow(d,.85):1),p=s.get("mouseSmoothing")||0;this.smx=(this.smx||0)*p+i.mouse.dx*(1-p),this.smy=(this.smy||0)*p+i.mouse.dy*(1-p);let x=e.state==="alive"?this.aimAssistTarget(t):null,g=x?x.friction:1;e.yaw-=this.smx*f*g,e.pitch-=this.smy*f*g*(s.get("invertY")?-1:1);let m=(s.get("keyLookSpeed")||140)*ne*t*(e.adsT>.5?.45:1);pe.down(i,"lookLeft")&&(e.yaw+=m),pe.down(i,"lookRight")&&(e.yaw-=m),pe.down(i,"lookUp")&&(e.pitch+=m*.7),pe.down(i,"lookDown")&&(e.pitch-=m*.7),x&&this.applyAimPull(x,t),e.pitch=Ft(e.pitch,e.state==="downed"?-.6:-1.45,e.state==="downed"?.6:1.45)}let c=e.input,h=pe;if(c.mx=0,c.mz=0,c.fire=!1,c.ads=!1,c.sprint=!1,l){h.down(i,"forward")&&(c.mz-=1),h.down(i,"back")&&(c.mz+=1),h.down(i,"left")&&(c.mx-=1),h.down(i,"right")&&(c.mx+=1);let u=h.down(i,"sprint");s.get("sprintMode")==="toggle"&&(h.hit(i,"sprint")&&!(e.adsT>.5)&&(this.sprintToggle=!this.sprintToggle),(c.mz>-.3||e.adsT>.5||e.stance==="prone")&&(this.sprintToggle=!1),u=!!this.sprintToggle||e.adsT>.5&&h.down(i,"sprint")),c.sprint=(u||s.get("autoSprint")&&c.mz<-.5&&Math.abs(c.mx)<.5)&&!(e.adsT>.5)&&!c.ads,e.autoRepeat=!!s.get("semiAutoRepeat"),h.hit(i,"jump")&&(c.jump=!0);let d=h.hit(i,"crouch"),f=h.hit(i,"crouchHold"),p=s.get("crouchMode")==="hold";(d||f)&&e.sprinting?(c.slide=!0,this.crouchToggle=!p):d&&!p&&(this.crouchToggle=!this.crouchToggle,e.stance==="prone"&&(this.crouchToggle=!0,e.setStance("crouch"))),h.hit(i,"prone")&&(e.stance==="prone"?e.setStance("crouch")&&(this.crouchToggle=!0):(c.prone=!0,this.crouchToggle=!1)),c.sprint&&c.mz<0&&e.stance==="crouch"&&this.crouchToggle&&!(e.slideT>0)&&(this.crouchToggle=!1),c.sprint&&c.mz<0&&e.stance==="prone"&&e.setStance("stand"),c.crouch=this.crouchToggle||h.down(i,"crouchHold")||p&&h.down(i,"crouch"),c.proneHold=e.stance==="prone",c.fire=h.down(i,"fire"),s.get("adsMode")==="toggle"?(h.hit(i,"ads")&&(this.adsToggle=!this.adsToggle),(e.sprinting||e.reloadT>0&&!1)&&(this.adsToggle=!1),c.ads=this.adsToggle):c.ads=h.down(i,"ads");let x=0;if(s.get("leanMode")==="toggle"?(h.hit(i,"leanL")&&(this.leanToggle=this.leanToggle===-1?0:-1),h.hit(i,"leanR")&&(this.leanToggle=this.leanToggle===1?0:1),e.sprinting&&(this.leanToggle=0),x=this.leanToggle||0):(h.down(i,"leanL")&&(x-=1),h.down(i,"leanR")&&(x+=1)),x!==0){let m=e.right(new R).multiplyScalar(x),v=n.world.collision.raycast(e.pos.x,e.pos.y+e.eyeH,e.pos.z,m.x,0,m.z,.85,{});v&&(x*=Ft((v.t-.25)/.6,0,1))}e.leanTarget=x,e.adsT>.6&&e.gun&&(e.gun.stats.zoom>=3.5||e.gun.stats.type==="sniper"||e.gun.stats.type==="dmr")&&u&&this.breath>0?(this.holding=!0,this.breath=Math.max(0,this.breath-t/5)):(this.holding=!1,this.breath=Math.min(1,this.breath+t/(u?8:3.5))),e.holdingBreath=this.holding,h.hit(i,"reload")&&e.reload(),h.hit(i,"firemode")&&(e.cycleMode(),n.audio.play2d("switch",{vol:.4})),h.hit(i,"bandage")&&e.bandage(),h.hit(i,"light")&&this.toggleLight(),h.hit(i,"melee")&&n.combat.melee(e);for(let m=0;m<5;m++)h.hit(i,"slot"+(m+1))&&e.switchTo(m);if(i.mouse.wheel){let m=e.active;for(let v=0;v<5;v++){m=(m+(i.mouse.wheel>0?1:4))%5;let y=e.slots[m];if(y&&(y.kind==="gun"||y.count>0||y.def.count===1/0))break}e.switchTo(m)}h.hit(i,"grenade")&&this.quickThrow(),h.hit(i,"spot")&&this.spotOrOrder(),e.weapon&&e.weapon.kind==="gadget"&&(n.combat.useGadget(e,h.hit(i,"fire"),h.hit(i,"ads")),c.fire=!1,e.weapon.id!=="binoculars"&&e.weapon.id!=="rpg"&&e.weapon.id!=="m320"&&(c.ads=!1)),this.interact(t,h.down(i,"interact"))}else e.leanTarget=0,c.crouch=!1,this.adsToggle=!1;e.state==="downed"&&!r&&(h.down(i,"jump")?(this.giveUpT+=t,this.giveUpT>1.5&&(this.giveUpT=0,e.die(e.lastAttacker,"Gave up",!1,!0))):this.giveUpT=0),a&&(a.giveUp=this.giveUpT/1.5)}aimAssistTarget(t){let e=this.game.settings,i=e.get("aimAssist");if(!i||i==="off")return this.aaTarget=null,null;let n={low:{cone:2.6,fric:.32,pull:1.6,snap:.4,track:.35},medium:{cone:4,fric:.48,pull:2.8,snap:.6,track:.55},high:{cone:5.8,fric:.62,pull:4.4,snap:.8,track:.75}}[i],s=this.s,a=this.game;if(!n||!s.gun||s.sprinting||s.state!=="alive")return this.aaTarget=null,null;let r=s.eye(Rf),l=Math.cos(s.pitch),c=-Math.sin(s.yaw)*l,h=Math.sin(s.pitch),u=-Math.cos(s.yaw)*l,d=s.adsT>.5,f=a.world.collision,p=a.time;this.aaVis=this.aaVis||new Map;let x=null,g=1e9;for(let y of a.teams[1-s.team]){if(y.state!=="alive")continue;let M=y.hitSpheres(),S=M[1],w=S[0]-r.x,T=S[1]-r.y,A=S[2]-r.z,_=Math.hypot(w,T,A);if(_>(d?170:75)||_<.5)continue;let b=Math.acos(Math.max(-1,Math.min(1,(w*c+T*h+A*u)/_)))/ne,C=n.cone*Math.max(.6,Math.min(2.4,25/_))*(d?1.2:1);if(b>C*1.8)continue;let L=this.aaVis.get(y);if(!L||p-L.t>.05){let O=f.los(r.x,r.y,r.z,S[0],S[1],S[2])&&f.softVisibility(r.x,r.y,r.z,S[0],S[1],S[2],p)>.35,U=f.los(r.x,r.y,r.z,M[0][0],M[0][1],M[0][2])&&f.softVisibility(r.x,r.y,r.z,M[0][0],M[0][1],M[0][2],p)>.35;L={t:p,body:O,head:U},this.aaVis.set(y,L)}if(!L.body&&!L.head)continue;let k=L.body?S:M[0],N=b/C*(y===this.aaTarget?.65:1)+_*.002;N<g&&(g=N,x={e:y,ang:b,cone:C,d:_,x:k[0],y:k[1],z:k[2]})}if(!x)return this.aaTarget=null,null;x.e!==this.aaTarget&&(this.aaTarget=x.e,this.aaPrev=null);let m=x.ang<x.cone,v=m?1-x.ang/x.cone:0;return x.friction=1-n.fric*v*v*(3-2*v),x.cfg=n,x.inCone=m,x}applyAimPull(t,e){let i=this.s,n=i.eye(Rf),s=t.x-n.x,a=t.y-n.y,r=t.z-n.z,l=Math.atan2(-s,-r),c=Math.atan2(a,Math.hypot(s,r)),h=l-i.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;let u=c-i.pitch;if(i.adsT>.3&&!this.wasAds&&t.ang<t.cone*1.6&&(i.yaw+=h*t.cfg.snap,i.pitch+=u*t.cfg.snap),this.wasAds=i.adsT>.3,this.aaPrev&&t.inCone&&e>0){let f=l-this.aaPrev.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;let p=c-this.aaPrev.p;Math.abs(f)<.2&&Math.abs(p)<.2&&(i.yaw+=f*t.cfg.track,i.pitch+=p*t.cfg.track*.6)}if(this.aaPrev={y:l,p:c},!t.inCone)return;let d=1-Math.exp(-t.cfg.pull*e*(i.adsT>.5?1:.55));i.yaw+=h*d,i.pitch+=u*d*.6}toggleLight(){let t=this.s;t.slots[0]&&(t.flashlightOn=!t.flashlightOn,this.game.audio.play2d("switch",{vol:.35}))}quickThrow(){let t=this.s,e=t.slots[4];!e||e.count<=0||t.actionT>0||t.state!=="alive"||(e.count--,t.startAction("throw",.55,{type:e.id}),this.game.audio.play2d("pin",{vol:.4}))}spotOrOrder(){let t=this.s,e=this.game;if(e.combat.spot(t,7,4)>0)return;let n=t.squad;if(!n||n.leader!==t)return;let s=t.eye(new R),a=t.aimDir(new R),r=null,l=7*ne;for(let h of e.mode.flags){let u=new R(h.x-s.x,h.y+3-s.y,h.z-s.z).normalize(),d=Math.acos(Ft(u.dot(a),-1,1));d<l&&(l=d,r=h)}if(r){e.squads.setOrder(n,r.owner===t.team?"defend":"attack",r),e.hud.toast(`Squad: ${r.owner===t.team?"DEFEND":"ATTACK"} ${r.id} \u2014 ${r.name}`),e.audio.play2d("beep",{vol:.4});return}let c=e.world.collision.raycast(s.x,s.y,s.z,a.x,a.y,a.z,350,{});c?(e.squads.setOrder(n,"move",null,c.x,c.z),n.order.flag={x:c.x,z:c.z,r:12},e.hud.toast("Squad: MOVE to marker"),e.audio.play2d("beep",{vol:.4})):(e.squads.setOrder(n,"follow",null,t.pos.x,t.pos.z),e.hud.toast("Squad: FOLLOW me"))}interact(t,e){let i=this.s,n=this.game;this.prompt=null;let s=null,a=2.2;for(let r of n.teams[i.team]){if(r===i||r.state!=="downed")continue;let l=Math.hypot(r.pos.x-i.pos.x,r.pos.z-i.pos.z);l<a&&(a=l,s=r)}if(s){this.prompt=`Hold [${pe.name("interact")}] to revive ${s.name}`,e?n.reviveTick(i,s,t):i.reviveProgress=0;return}if(i.reviveProgress=0,i.weapon&&i.weapon.id==="medkit"){let r=null;a=3;for(let l of n.teams[i.team]){if(l===i||l.state!=="alive"||l.hp>=100&&l.bleed<=0)continue;let c=Math.hypot(l.pos.x-i.pos.x,l.pos.z-i.pos.z);c<a&&(a=c,r=l)}r&&(this.prompt=`[${pe.name("interact")}] Heal ${r.name}`,pe.hit(n.input,"interact")&&i.medkitCd<=0&&i.startAction("medkitOther",.9,{target:r}))}}updateCamera(t){let e=this.s,i=this.camera,n=this.game,s=n.settings,a=e.eye(new R);e.move.grounded&&!this.prevGrounded&&e.state==="alive"&&(this.landDip=.12),this.prevGrounded=e.move.grounded,this.landDip=ei(this.landDip,0,8,t);let r=Math.hypot(e.vel.x,e.vel.z);e.move.grounded&&r>.3&&(this.bobPhase+=r*t*(e.sprinting?1.6:1.9));let l=s.get("headBob")?Math.min(1,r/5)*(e.adsT>.5?.25:1):0,c=Math.abs(Math.sin(this.bobPhase))*.045*l,h=Math.cos(this.bobPhase)*.025*l;i.position.set(a.x,a.y+c-this.landDip,a.z);let u=n.fx.trauma,d=u*u,f=n.time,p=d*.06*Math.sin(f*37.1),x=d*.05*Math.sin(f*41.7+1),g=d*.05*Math.sin(f*29.3+2);this.camRoll=ei(this.camRoll,-e.lean*.17+(e.state==="downed"?.35:0),10,t),i.rotation.order="YXZ",i.rotation.set(e.pitch+e.swayP+x,e.yaw+e.swayY+p+h*.15,this.camRoll+g),this.camOff={p:x,y:p+h*.15,r:this.camRoll+g,dy:c-this.landDip};let m=e.gun,v=e.weapon&&e.weapon.id==="binoculars",y=m?m.stats.zoom:v?6:1,M=Qt(1,y,e.adsT),S=s.get("fov")*ne,w=i.aspect,T=2*Math.atan(Math.tan(S/2)/w)/ne;this.sprintFov=ei(this.sprintFov||1,e.sprinting?1.06:1,6,t),i.fov=T/M*this.sprintFov,i.updateProjectionMatrix(),i.updateMatrixWorld();let A=e.slots[0]&&e.slots[0].stats&&e.slots[0].stats.light,_=n.env.time.night;this.flashlight.intensity=e.flashlightOn&&e.state==="alive"&&(A||_)?_?26:12:0,this.updateViewmodel(t,h,c)}updateViewmodel(t,e,i){let n=this.s,s=this.game;this.buildViewmodel();let a=this.vmRoot,r=this.isScoped();if(a.visible=n.state==="alive"&&!r,!a.visible){this.updateMuzzleWorld();return}let l=n.weapon,c=l&&l.kind==="gun",h=c?n.adsT:0,u=h*h*(3-2*h),d=s.input.mouse.dx,f=s.input.mouse.dy;this.swayX=ei(this.swayX,Ft(-d*6e-4,-.05,.05),10,t),this.swayY=ei(this.swayY,Ft(f*6e-4,-.05,.05),10,t),n.lastShotTime!==this.lastShot&&(this.lastShot=n.lastShotTime,this.kick=1),this.kick=ei(this.kick,0,18,t);let p=new R(.155,-.2,-.6),x=c&&l.stats.zoom>1.2?.2:.26,g=new R(0,-this.sightY,-x-this.sightZ),m=p.clone().lerp(g,u),v=.035*(1-u),y=.04*(1-u),M=0,S=1-u*.8;m.x+=(e*.5+this.swayX)*S,m.y+=(-i*.35+this.swayY)*S;let w=s.time;m.y+=Math.sin(w*1.6)*.0025*(1-u*.7),this.sprintBlend=ei(this.sprintBlend||0,n.sprinting?1:0,9,t);let T=this.sprintBlend;T>.001&&(m.x+=.03*T,m.y-=.06*T,v-=.35*T,y+=.65*T,m.y+=Math.sin(this.bobPhase*2)*.012*T),this.crouchBlend=ei(this.crouchBlend||0,n.stance==="stand"?0:1,7,t),m.y+=.008*this.crouchBlend,M+=.04*this.crouchBlend*(1-u);let A=null,_=null;if(this.magFall=this.magFall||null,n.reloadT>0&&c){let O=n.reloadTotal||2,U=Math.min(1,1-n.reloadT/O),X=!!n.reloadEmpty;this._reloadId!==n.reloadStart&&(this._reloadId=n.reloadStart,this._rlSnd={},this.magFall=null);let F=(B,j,rt,st)=>{U>=j&&!this._rlSnd[B]&&(this._rlSnd[B]=!0,s.audio.play2d(rt,st||{vol:.5}))};if(l.stats.shellReload){let B=is([[0,0],[.12,1],[.88,1],[1,0]],U);M+=.5*B,m.y-=.03*B,m.x-=.02*B,y-=.12*B;let j=(O-n.reloadT)/(l.stats.reload||.55)%1;_=[.03*B,(-.12+.12*Math.sin(j*Math.PI))*B,(.16+.04*Math.sin(j*Math.PI))*B]}else{let B=X?{present:.1,release:.18,out:.28,gone:.38,up:.5,seat:.6,rack0:.7,rack1:.8,done:.92}:{present:.12,release:.2,out:.3,gone:.4,up:.54,seat:.66,rack0:.7,rack1:.7,done:.88},j=is([[0,0],[B.present,1],[B.seat,1],[B.seat+.03,.88],[B.rack0,.9],[B.done,0],[1,0]],U),rt=is([[0,0],[B.present,1],[B.seat+.02,1],[B.done,0]],U),st=is([[0,0],[B.seat-.015,0],[B.seat,1],[B.seat+.05,0],[1,0]],U);if(M+=.5*j,y-=.2*rt,v+=.07*j+.05*st,m.y-=.035*j-.018*st,m.x-=.03*j,m.z+=.02*rt,X){let St=is([[0,0],[B.rack0,0],[B.rack0+.04,1],[B.rack1,1],[B.rack1+.03,0],[1,0]],U);M-=.65*St,v+=.06*St;let vt=is([[0,0],[B.rack1-.04,0],[B.rack1,1],[B.rack1+.04,0],[1,0]],U);m.z+=.035*vt}let _t=this.magPos||new R,Y=this.gripL,J=[_t.x-Y.x-.01,_t.y-Y.y-.05,_t.z-Y.z+.01],gt=[J[0]-.08,J[1]-.34,J[2]+.12],it=[.02-Y.x,.09-Y.y,.02-Y.z+.06],xt=[[0,[0,0,0]],[B.present,J],[B.release,J],[B.out,[J[0],J[1]-.08,J[2]]],[B.gone,gt],[B.up-.06,gt],[B.up,[J[0],J[1]-.1,J[2]+.02]],[B.seat,J],[B.seat+.04,J]];if(X?xt.push([B.rack0,it],[B.rack1,[it[0],it[1],it[2]+.06]],[B.done,[0,0,0]]):xt.push([B.done,[0,0,0]]),xt.push([1,[0,0,0]]),_=is(xt,U),this.vmMag){let St=[_[0]-J[0],_[1]-J[1],_[2]-J[2]];if(U<B.release)A=[0,0,0,0];else if(U<B.out){let vt=(U-B.release)/(B.out-B.release);A=[0,-.08*vt*vt,0,0]}else if(U<B.up-.06)if(X){this.magFall||(this.magFall={t:0}),this.magFall.t+=t;let vt=this.magFall.t;A=[.02*vt,-.08-4.5*vt*vt,.12*vt,3*vt]}else A=[St[0],-.08+St[1],St[2],.3];else U<B.seat?A=[St[0],St[1],St[2],.25*(1-(U-(B.up-.06))/(B.seat-B.up+.06))]:A=[0,0,0,0]}F("out",B.release,"magOut",{vol:.55}),X&&F("drop",B.out+.08,"impactMetal",{vol:.12,rate:1.4}),F("in",B.seat,"magIn",{vol:.6}),X&&F("rack",B.rack1,"bolt",{vol:.55})}}if(c&&n.boltT>0&&(l.stats.bolt||l.stats.pump)){let O=1-n.boltT/(l.stats.interval*.9),U=Math.sin(Math.min(1,O)*Math.PI);l.stats.bolt?(M-=.25*U,m.y-=.02*U,m.x+=.02*U):(_=[0,0,.09*U],m.z+=.015*U)}if(n.switchT>0){let O=n.switchT/.45;m.y-=.35*O,v-=.6*O}let b=this.vmKnife;if(b&&(b.visible=!1),n.action){let O=1-n.actionT/(n.actionDur||1);if(n.action.name==="throw"||n.action.name==="throwC4")m.y-=.1,v+=Math.sin(O*Math.PI)*.9,m.z+=.08*Math.sin(O*Math.PI);else if(n.action.name==="melee"){if(m.y-=.25*Math.sin(O*Math.PI),m.x+=.12*Math.sin(O*Math.PI),M-=.5*Math.sin(O*Math.PI),b){b.visible=!0;let U=Math.min(1,O*1.5),X=U<.25?U/.25*.2:.2+(U-.25)/.75*.8;b.position.set(.32-X*.55,-.16+Math.sin(X*Math.PI)*.08,-.45+Math.sin(X*Math.PI)*-.12),b.rotation.set(-.3,.9-X*1.6,-.6+X*1.2)}}else m.y-=.12*Math.sin(O*Math.PI),M-=.3*Math.sin(O*Math.PI)}if(this.vmMag&&this.magPos&&(A?(this.vmMag.position.set(this.magPos.x+A[0],this.magPos.y+A[1],this.magPos.z+A[2]),this.vmMag.rotation.x=A[3],this.vmMag.visible=A[1]>-.6):(this.vmMag.position.copy(this.magPos),this.vmMag.rotation.x=0,this.vmMag.visible=!0)),this.vmArmLGroup){let O=_||[0,0,0],U=this.vmArmLGroup.position,X=1-Math.exp(-t*18);U.x+=(O[0]-U.x)*X,U.y+=(O[1]-U.y)*X,U.z+=(O[2]-U.z)*X}if(n.state==="alive"&&n.vault&&(m.y-=.1,v-=.3),n.slideT>0&&(M+=.25,m.y-=.03),c){let O=(l.stats.type==="sniper"||l.stats.type==="shotgun"?.09:.035)*this.kick;m.z+=O,v+=this.kick*(l.stats.type==="sniper"?.12:.04)*(1-u*.5)}let C=1-Math.exp(-t*(u>.5?26:16)),L=1-Math.exp(-t*14);a.position.lerp(m,C);let k=M+n.lean*.06;a.rotation.x+=(v-a.rotation.x)*L,a.rotation.y+=(y-a.rotation.y)*L,a.rotation.z+=(k-a.rotation.z)*L,this.reticle&&(this.reticle.visible=u>.85);let N=s.env.sunDir.clone().transformDirection(this.camera.matrixWorldInverse);s.vmLight.position.copy(N).multiplyScalar(5),this.updateMuzzleWorld()}updateReticleAim(){let t=this.s,e=t.weapon;if(this.retAx=0,this.retAy=0,!this.vmRoot.visible||!e||e.kind!=="gun"||t.adsT<.5||this.sightY===void 0)return;let i=new R(0,this.sightY,this.reticle?this.reticle.position.z:this.sightZ-.35);if(!this.reticle&&e.model&&!e.model.pistol&&(i.z=-e.model.len*.5),i.applyMatrix4(this.vmRoot.matrixWorld),i.z>-.01)return;let n=this.vmCamera,s=this.camera,a=Math.tan(n.fov*ne/2),r=Math.tan(s.fov*ne/2),l=i.x/-i.z/(a*n.aspect),c=i.y/-i.z/a;this.retAx=Math.atan(l*r*s.aspect),this.retAy=Math.atan(c*r)}aimRay(t,e){let i=this.s,n=this.camOff||{p:0,y:0,r:0,dy:0};i.eye(t),t.y+=n.dy;let s=new We(i.pitch+i.swayP+n.p,i.yaw+i.swayY+n.y,n.r,"YXZ");return e.set(Math.tan(this.retAx||0),Math.tan(this.retAy||0),-1).normalize().applyEuler(s),e}updateMuzzleWorld(){let t=this.s;if(this.vmRoot.updateMatrixWorld(),this.updateReticleAim(),!this.muzzle)return;let e=this.muzzle.clone();this.vmRoot.updateMatrixWorld(),e.applyMatrix4(this.vmRoot.matrixWorld),t.vmMuzzle=this.camera.localToWorld(e.clone())}isScoped(){let t=this.s,e=t.gun;return t.state!=="alive"?!1:!!(e&&(e.stats.scope||e.stats.zoom>=3.5)&&t.adsT>.92||t.weapon&&t.weapon.id==="binoculars"&&t.adsT>.9)}dispose(){this.vmScene.remove(this.vmRoot),this.camera.remove(this.flashlight),this.camera.remove(this.flashlight.target)}};var Pf={recruit:{react:.7,turn:150,err0:7,errTau:1.25,jitter:.95,comp:.35,head:.05,sight:.75,cover:.45,strafe:.4,nade:.25,think:.6,lead:.5,burst:.55},regular:{react:.48,turn:230,err0:4.6,errTau:.9,jitter:.62,comp:.55,head:.12,sight:.9,cover:.65,strafe:.65,nade:.45,think:.45,lead:.7,burst:.7},veteran:{react:.31,turn:340,err0:2.9,errTau:.62,jitter:.4,comp:.75,head:.22,sight:1,cover:.85,strafe:.85,nade:.65,think:.34,lead:.85,burst:.85},elite:{react:.21,turn:480,err0:1.9,errTau:.43,jitter:.25,comp:.88,head:.32,sight:1.12,cover:1,strafe:1,nade:.8,think:.27,lead:.95,burst:.95}},X1={smg:14,shotgun:9,carbine:26,ar:34,lmg:40,dmr:75,sniper:130,pistol:12},Y1={smg:70,shotgun:36,carbine:135,ar:160,lmg:180,dmr:300,sniper:450,pistol:45};function Za(o){if(!o)return 40;let t=Y1[o.stats.type]||140;return o.stats.zoom>=3.5?t*=1.3:o.stats.zoom>=1.9&&(t*=1.12),t}var Df=new R,ja=new R,Ka=new R,Ja=class{constructor(t,e){this.s=t,this.game=e,this.setDifficulty(e.settings.get("difficulty")),this.aggro=q(.35,.95),this.known=new Map,this.target=null,this.reactT=0,this.part="body",this.errY=0,this.errP=0,this.ph1=q(0,100),this.ph2=q(0,100),this.aiYaw=0,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPitch=0,this.lastYaw=0,this.state="objective",this.path=null,this.pathI=0,this.goal=null,this.pathPending=!1,this.repathT=0,this.cover=null,this.peekT=0,this.peeking=!1,this.coverSearchT=0,this.strafeDir=1,this.strafeT=0,this.nextPerceive=q(0,.2),this.nextThink=q(0,.5),this.burstLeft=0,this.holdFire=0,this.nadeCd=q(4,12),this.gadgetCd=q(5,20),this.lookYaw=0,this.glanceT=q(1,3),this.glancing=0,this.glanceYaw=0,this.stuckT=0,this.lastPos=new R,this.progressT=0,this.holdSpot=null,this.holdT=0,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.wantStance="stand"}setDifficulty(t){this.d=Pf[t]||Pf.veteran,this.diffName=t}reset(){this.known.clear(),this.target=null,this.path=null,this.goal=null,this.cover=null,this.holdSpot=null,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.state="objective",this.aiYaw=this.s.yaw,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPos.copy(this.s.pos),this.stuckT=0,this.burstLeft=0,this.pathPending=!1,this.placedClaymore=!1}inform(t,e,i,n,s,a){if(!t||t.team===this.s.team||t.state==="dead")return;let r=this.known.get(t);r?a>=r.t&&(r.x=e,r.y=i,r.z=n,r.t=a,s&&(r.seenT=a)):this.known.set(t,{x:e,y:i,z:n,t:a,seenT:s?a:-99,aw:0,vis:!1})}onDamaged(t,e){let i=this.game.time;if(t&&t!==this.s&&t.team!==this.s.team){let n=this.s.pos.distanceTo(t.pos),s=Math.min(12,n*.08);this.inform(t,t.pos.x+q(-s,s),t.pos.y,t.pos.z+q(-s,s),!1,i);let a=this.known.get(t);a&&(a.aw=Math.max(a.aw,.75)),(!this.target||this.target.state!=="alive")&&(this.target=t)}this.nextThink=Math.min(this.nextThink,.05),this.cover=null}onNearMiss(t){if(!t||t.team===this.s.team)return;let e=this.game.time,i=this.s.pos.distanceTo(t.pos),n=Math.min(20,i*.12);this.inform(t,t.pos.x+q(-n,n),t.pos.y,t.pos.z+q(-n,n),!1,e)}onSound(t,e,i,n){if(!i||i.team===this.s.team||i.state==="dead")return;let s=this.game.time,a=Math.hypot(t-this.s.pos.x,e-this.s.pos.z),r=Math.min(25,3+a*.1);this.inform(i,t+q(-r,r),i.pos.y,e+q(-r,r),!1,s),!this.target&&this.state!=="revive"&&(!this.investigate||s-this.investigate.t>4)&&(this.investigate={x:t,z:e,t:s})}perceive(t){let e=this.s,i=this.game.time,n=this.game.world.collision,s=e.eye(ja),a=this.game.env.time.night,r=(a?140:380)*this.d.sight;for(let l of this.game.teams[1-e.team]){if(l.state==="dead"){this.known.delete(l);continue}let c=this.known.get(l),h=l.pos.x-s.x,u=l.pos.z-s.z,d=Math.hypot(h,u);if(c&&(c.vis=!1),d>r*1.1){c&&(c.aw=Math.max(0,c.aw-t*.6));continue}let f=Math.atan2(-h,-u),p=Math.abs(_i(f-e.yaw))/ne,x=i-l.lastLoudShot<.7,g=d<6?140:d<30||x?105:62;if(p>g){c&&(c.aw=Math.max(0,c.aw-t*.5));continue}let m=l.hitSpheres(),v=n.los(s.x,s.y,s.z,m[0][0],m[0][1],m[0][2]),y=n.los(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2])||n.los(s.x,s.y,s.z,m[2][0],m[2][1],m[2][2]);if(!v&&!y){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}let M=Ft(1.25-d/(r*.8),.1,1);l.stance==="prone"||l.state==="downed"?M*=d>25?.35:.7:l.stance==="crouch"&&(M*=.75);let S=Math.hypot(l.vel.x,l.vel.z);if(M*=l.sprinting?1.5:S>1?1.25:.8,x&&(M*=3),a&&(M*=l.flashlightOn?2.5:x?1:.45),p>62&&(M*=.45),d>5&&(M*=n.softVisibility(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2],i)),l.spotUntil>i&&(M*=1.8),y||(M*=.45),M*=this.d.sight*(1-e.suppression*.4)*(1-e.flashed),M<.02){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}c||(c={x:l.pos.x,y:l.pos.y,z:l.pos.z,t:-99,seenT:-99,aw:0,vis:!1},this.known.set(l,c));let w=i-c.t<4;if(c.aw=Math.min(1.6,c.aw+M*t*(w?9:4.5)),c.aw>=1&&(c.vis=!0,c.x=l.pos.x,c.y=l.pos.y,c.z=l.pos.z,c.t=i,c.seenT=i,c.headOnly=!y,c.bodyOnly=!v,l.spotUntil<i&&d<110&&Math.random()<t*.6&&(l.spotUntil=i+4),e.squad))for(let T of e.squad.members)T!==e&&T.brain&&T.state==="alive"&&T.pos.distanceTo(e.pos)<120&&T.brain.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i-.4)}for(let l of this.game.teams[1-e.team])l.state==="alive"&&l.spotUntil>i&&!this.known.get(l)?.vis&&Math.abs(l.pos.x-e.pos.x)<220&&Math.abs(l.pos.z-e.pos.z)<220&&this.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i);for(let[l,c]of this.known)(l.state==="dead"||i-c.t>14&&c.aw<.02)&&this.known.delete(l);this.selectTarget(i)}selectTarget(t){let e=this.s,i=null,n=-1e9;for(let[s,a]of this.known){if(!a.vis)continue;let l=120/(e.pos.distanceTo(s.pos)+5);s.state==="downed"&&(l-=30),e.lastAttacker===s&&t-e.lastDamage<3&&(l+=25);let c=s.aimDir(Df),h=Ka.subVectors(e.pos,s.pos).normalize();c.dot(h)>.97&&(l+=15),s===this.target&&(l+=12),l>n&&(n=l,i=s)}if(i&&i!==this.target)this.acquire(i,t);else if(!i&&this.target){let s=this.known.get(this.target);(!s||this.target.state==="dead"||t-s.t>10)&&(this.target=null)}}acquire(t,e){let i=this.s,n=this.target;this.target=t;let s=i.pos.distanceTo(t.pos),a=Math.atan2(-(t.pos.x-i.pos.x),-(t.pos.z-i.pos.z)),r=Math.abs(_i(a-i.yaw))/ne,l=this.d.react*q(.8,1.35)*(s>90?1.25:1)*(r>60?1.35:1);n&&n.state==="alive"&&e-(this.known.get(n)?.seenT??-99)<1&&(l*=.6),this.reactT=l;let c=i.gun?Math.max(1,i.gun.stats.zoom):1,h=this.d.err0*q(.6,1.4)*(1+s/(c>=3.5?220:120))*(1+Math.hypot(t.vel.x,t.vel.z)/8)*ne,u=q(0,Math.PI*2);this.errY=Math.cos(u)*h,this.errP=Math.sin(u)*h*.7;let d=i.gun&&(i.gun.stats.type==="sniper"||i.gun.stats.type==="dmr");this.part=Math.random()<this.d.head*(d?1.8:1)?"head":"body",this.burstLeft=0}update(t){let e=this.s,i=this.game.time;if(e.state!=="alive"){e.input.fire=!1;return}if(this.nextPerceive-=t,this.nextPerceive<=0){let d=.16+q(0,.05);this.perceive(d),this.nextPerceive=d}this.nextThink-=t,this.nextThink<=0&&(this.think(i),this.nextThink=this.d.think*q(.8,1.3));let n=e.input;n.fire=!1,n.jump=!1,n.sprint=!1,n.mx=0,n.mz=0,this.wantLean=0;let s=0,a=0,r=!1,l=!0,c=this.target?this.known.get(this.target):null,h=!!(c&&c.vis);switch(this.gadgetTask&&this.runGadgetTask(t,i),this.state){case"combat":[s,a,r,l]=this.combatMove(t,i,c,h);break;case"revive":[s,a,r,l]=this.reviveMove(t,i);break;case"heal":[s,a,r,l]=this.healMove(t,i);break;default:[s,a,r,l]=this.objectiveMove(t,i)}for(let d of this.game.teams[e.team]){if(d===e||d.state!=="alive")continue;let f=e.pos.x-d.pos.x,p=e.pos.z-d.pos.z,x=f*f+p*p;if(x<1.6*1.6&&x>1e-4){let g=Math.sqrt(x);s+=f/g*(1.6-g)*.9,a+=p/g*(1.6-g)*.9}}let u=Math.hypot(s,a);if(this.progressT+=t,this.progressT>1){let d=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);u>.3&&d<.35&&!e.action?this.stuckT+=this.progressT:this.stuckT=0,this.lastPos.copy(e.pos),this.progressT=0}if(this.stuckT>.9&&(n.jump=!0),this.stuckT>2.5&&(this.path=null,this.cover=null,this.holdSpot=null,this.stuckT=0,s+=q(-1,1),a+=q(-1,1),this.requestRepath()),e.move.hitWall&&u>.3&&Math.random()<t*3&&(n.jump=!0),this.path&&this.pathI<this.path.length&&u>.3){let d=this.game.world.nav,f=d.cellOf(e.pos.x+s/Math.max(u,.01)*.8,e.pos.z+a/Math.max(u,.01)*.8);d.isVault(f)&&(n.jump=!0)}if(this.updateAim(t,i,c,h,s,a,l,r),u>.01){let d=s/Math.max(u,1),f=a/Math.max(u,1),p=e.forward(Df),x=e.right(Ka);n.mz=-(d*p.x+f*p.z),n.mx=d*x.x+f*x.z,n.sprint=r&&n.mz<-.6}n.crouch=this.wantStance==="crouch",e.leanTarget=this.wantLean,this.target&&c&&c.vis&&this.target.state!=="dead"&&e.pos.distanceTo(this.target.pos)<1.9&&(!e.gun||e.gun.mag===0||e.reloadT>0||Math.random()<t*2)&&this.game.combat.melee(e),this.wantStance==="prone"&&e.stance!=="prone"&&(n.prone=!0),this.wantStance!=="prone"&&e.stance==="prone"&&!n.crouch&&e.setStance(this.wantStance==="crouch"?"crouch":"stand"),e.swimming&&(n.crouch=!1)}think(t){let e=this.s,i=this.target?this.known.get(this.target):null,n=[...this.known.values()].some(h=>h.vis);e.bleed>0&&!n&&e.actionT<=0&&e.bandages>0&&t-e.lastDamage>1.2?e.isMedic&&e.medkitCd<=0?e.startAction("medkitSelf",1.1):e.bandage():e.isMedic&&e.hp<60&&!n&&e.medkitCd<=0&&e.actionT<=0&&e.startAction("medkitSelf",1.1);let s=e.gun;s&&!n&&s.mag<s.stats.mag*.6&&s.reserve>0&&e.reload(),e.active===1&&e.slots[0].mag+e.slots[0].reserve>0&&!n&&e.switchTo(0),e.active>=2&&!this.gadgetTask&&e.actionT<=0&&e.switchTo(0);let a=t-e.lastDamage<2.5;if(!this.reviveMate&&!a){let h=e.isMedic?50:26,u=null,d=1e9;for(let f of this.game.teams[e.team]){if(f.state!=="downed"||f===e||n&&!f.isPlayer)continue;let p=f.pos.distanceTo(e.pos),x=f.squad===e.squad?h*1.3:h;if(f.isPlayer&&(x=(e.isMedic?95:60)*(f.squad===e.squad?1.3:1)),p>x||f.reviver&&f.reviver!==e&&f.reviver.state==="alive"||f.downedHp<15&&p>15)continue;let g=p*(f.squad===e.squad?.7:1)*(f.isPlayer?.3:1);g<d&&(d=g,u=f)}u&&(this.reviveMate=u,u.reviver=e,this.path=null,this.smokeThrown=!1)}if(this.reviveMate&&this.reviveMate.state!=="downed"&&(this.reviveMate.reviver===e&&(this.reviveMate.reviver=null),this.reviveMate=null,e.reviveProgress=0),e.isMedic&&!n&&!this.reviveMate&&!this.healMate&&e.medkitCd<=0){for(let h of this.game.teams[e.team])if(h!==e&&h.state==="alive"&&(h.hp<65||h.bleed>0)&&h.pos.distanceTo(e.pos)<14){this.healMate=h;break}}this.healMate&&(this.healMate.state!=="alive"||this.healMate.hp>=95&&this.healMate.bleed<=0)&&(this.healMate=null);let r=Za(s),l=i?Math.hypot(i.x-e.pos.x,i.z-e.pos.z):1e9,c=i&&(i.vis&&l<r*1.15||t-i.t<7&&l<Math.min(80,r)||t-e.lastDamage<3);if(this.reviveMate&&(!n||i&&e.pos.distanceTo(this.target.pos)>(this.reviveMate.isPlayer?22:60))?this.state="revive":c?this.state="combat":this.healMate?this.state="heal":this.state="objective",s&&s.mag===0&&s.reserve===0&&e.active===0&&e.switchTo(1),this.gadgetCd-=this.d.think,this.nadeCd-=this.d.think,!this.gadgetTask&&this.gadgetCd<=0&&this.considerGadgets(t,n),this.cover&&this.target){let h=this.target,u=this.cover;!this.game.world.collision.los(u.x,u.y+.95,u.z,h.pos.x,h.pos.y+1.2,h.pos.z)||(this.cover=null)}}considerGadgets(t,e){let i=this.s,n=i.cls,s=i.squad&&i.squad.order,a=s?Math.hypot(s.x-i.pos.x,s.z-i.pos.z):999;if(n==="support"&&!e&&a<40&&i.slots[2].count>0&&Math.random()<.5){let r=this.game.combat.placementSpot(i);if(r){i.slots[2].count--,i.startAction("place",.6,{gid:"ammobox",spot:r}),this.gadgetCd=40;return}}if(n==="support"&&!e&&a<25&&i.slots[3].count>0&&s&&s.type==="defend"&&Math.random()<.4){let r=this.game.combat.placementSpot(i);if(r){i.slots[3].count--,i.startAction("place",.6,{gid:"sandbags",spot:r}),this.gadgetCd=15;return}}if(n==="recon"&&!e&&a<25&&!this.placedClaymore&&i.slots[2].count>0&&s&&(s.type==="defend"||s.ownedByUs)){let r=this.game.combat.placementSpot(i);if(r){i.slots[2].count--,i.startAction("place",.6,{gid:"claymore",spot:r}),this.placedClaymore=!0,this.gadgetCd=30;return}}if((n==="recon"||n==="leader")&&!e&&a>45&&a<140){let r=n==="recon"?"beacon":"rally",l=this.game.combat.placed.find(c=>c.owner===i&&c.type===r);if(!l||Math.hypot(l.x-s.x,l.z-s.z)>160){let c=this.game.combat.placementSpot(i);if(c&&this.game.world.nav.cover[this.game.world.nav.cellOf(c.x,c.z)]>40){i.startAction("place",.6,{gid:r,spot:c}),this.gadgetCd=45;return}}}this.gadgetCd=q(3,7)}objectiveMove(t,e){let i=this.s,n=this.game.squads.objectiveFor(i);this.wantStance="stand";let s=n.x,a=n.z;this.investigate&&e-this.investigate.t<12&&Math.hypot(this.investigate.x-i.pos.x,this.investigate.z-i.pos.z)<70&&this.aggro>.45&&(s=this.investigate.x,a=this.investigate.z,Math.hypot(s-i.pos.x,a-i.pos.z)<6&&(this.investigate=null));let r=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);if(r<n.r*.85&&n.hold){if(this.holdT-=t,!this.holdSpot||this.holdT<=0){let m=this.game.squads.threatPoint(i.team,n),v=this.game.world.nav.findCover(n.x,n.z,{x:m.x,y:m.y+1.4,z:m.z},n.r*.75,{maxTests:22,occupied:(M,S)=>this.game.teams[i.team].some(w=>w!==i&&w.state==="alive"&&w.brain&&w.brain.holdSpot&&Math.hypot(w.brain.holdSpot.x-M,w.brain.holdSpot.z-S)<3)}),y=v.length?v[Math.floor(Math.random()*Math.min(3,v.length))]:null;if(y)this.holdSpot={x:y.x,z:y.z,peek:y.peek};else{let[M,S]=this.game.world.nav.randomWalkableNear(n.x,n.z,n.r*.6);this.holdSpot={x:M,z:S,peek:!0}}this.holdT=q(10,22),this.path=null}if(s=this.holdSpot.x,a=this.holdSpot.z,Math.hypot(s-i.pos.x,a-i.pos.z)<1)return this.wantStance=this.holdSpot.peek&&Math.sin(e*.4+this.ph1)>.2?"stand":"crouch",[0,0,!1,!1]}let[c,h,u]=this.followTo(s,a,t),d=Math.hypot(s-i.pos.x,a-i.pos.z),f=[...this.known.values()].some(g=>e-g.t<6&&Math.hypot(g.x-i.pos.x,g.z-i.pos.z)<80),p=this.target&&this.known.get(this.target)&&this.known.get(this.target).vis,x=d>25&&!f&&!p&&i.hp>35&&!u;return!x&&r<70&&(this.wantStance="stand"),[c,h,x,x||!f]}combatMove(t,e,i,n){let s=this.s,a=this.target;if(!a||!i)return this.state="objective",[0,0,!1,!0];let r=Math.hypot(i.x-s.pos.x,i.z-s.pos.z),l=s.gun,c=X1[l?l.stats.type:"ar"]||30,h=this.game.world.nav;if(this.wantStance="stand",n){if(this.lostT=0,r>Za(l)*.95){if(this.game.squads.orderType(s)!=="defend"||r<Za(l)*1.5){let A=this.game.squads.objectiveFor(s),_=Math.hypot(A.x-s.pos.x,A.z-s.pos.z),b=_>A.r?A.x:a.pos.x,C=_>A.r?A.z:a.pos.z,[L,k]=this.followTo(b,C,t);return this.wantStance="stand",[L,k,!1,!1]}return this.wantStance="crouch",[0,0,!1,!1]}this.coverSearchT-=t;let f=s.suppression>.25||e-s.lastDamage<1.5;if(!this.cover&&this.coverSearchT<=0&&r>18&&Math.random()<this.d.cover){this.coverSearchT=q(1.5,3);let A={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},_=h.findCover(s.pos.x,s.pos.z,A,f?9:12,{maxTests:20,minThreatDist:10,prefer:r>c*1.5?{x:Qt(s.pos.x,a.pos.x,.25),z:Qt(s.pos.z,a.pos.z,.25)}:null,occupied:(b,C)=>this.game.teams[s.team].some(L=>L!==s&&L.brain&&L.brain.cover&&Math.hypot(L.brain.cover.x-b,L.brain.cover.z-C)<2)});_.length&&(this.cover=_[0],this.path=null,this.peekT=0)}let p=this.game.squads.objectiveFor(s),x=Math.hypot(p.x-s.pos.x,p.z-s.pos.z),g=this.game.squads.orderType(s)!=="defend";this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1?this.coverTime=(this.coverTime||0)+t:this.cover||(this.coverTime=0);let m=g?5+this.aggro*-2+q(0,4):14;if(this.cover&&this.coverTime>m&&(x>p.r*.8||!g)){let A=g?{x:Qt(s.pos.x,p.x,Math.min(1,22/Math.max(x,1))),z:Qt(s.pos.z,p.z,Math.min(1,22/Math.max(x,1)))}:{x:s.pos.x+q(-8,8),z:s.pos.z+q(-8,8)},_={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},b=h.findCover(A.x,A.z,_,10,{maxTests:18,minThreatDist:8,prefer:A});this.cover=b.length?b[0]:null,this.coverTime=0,this.path=null,!this.cover&&g&&r>25&&(this.advanceT=q(2.5,5))}if(this.advanceT>0){this.advanceT-=t;let[A,_]=this.followTo(p.x,p.z,t);return this.wantStance="stand",[A,_,!1,!1]}if(!this.cover&&g&&r>70&&x>p.r&&Math.random()<t*.5&&(this.advanceT=q(2,4)),this.cover){let A=Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z);if(A>.9){let[_,b]=this.followTo(this.cover.x,this.cover.z,t),C=f&&A>4;return this.wantStance="stand",[_,b,C,C]}if(this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?q(1.4,3.2):q(.6,1.6)+s.suppression*2,!this.peeking&&l&&l.mag<l.stats.mag*.45&&s.reload()),(s.reloadT>0||s.suppression>.75||s.actionT>0)&&(this.peeking=!1),this.cover.peek)this.wantStance=this.peeking?"stand":"crouch";else if(this.cover.lean){if(this.wantStance=this.peeking?"stand":"crouch",this.peeking){let _=s.right(Ka);this.wantLean=this.cover.lean.x*_.x+this.cover.lean.z*_.z>0?1:-1}}else this.wantStance="crouch";return[0,0,!1,!1]}this.strafeT-=t,this.strafeT<=0&&(this.strafeDir=Math.random()<.5?-1:1,this.strafeT=q(.35,.95)/(.4+this.d.strafe*.6),Math.random()<.15*this.d.strafe&&r<25&&(this.crouchSpamT=.35)),this.crouchSpamT>0&&(this.crouchSpamT-=t);let v=(a.pos.x-s.pos.x)/Math.max(r,.1),y=(a.pos.z-s.pos.z)/Math.max(r,.1),M=0,S=0,w=r<60?this.d.strafe:this.d.strafe*.4;M+=-y*this.strafeDir*w,S+=v*this.strafeDir*w,r>c*1.4&&this.aggro>.5?(M+=v*.6,S+=y*.6):r<c*.5&&l&&(l.stats.type==="dmr"||l.stats.type==="sniper")&&(M-=v*.7,S-=y*.7);let T=h.cellOf(s.pos.x+M*1.2,s.pos.z+S*1.2);if((!h.walkable(T)||h.isWater(T))&&(M=-M,S=-S,this.strafeDir*=-1),r>70&&l&&["lmg","dmr","sniper"].includes(l.stats.type)&&s.suppression<.6){let A=a.hitSpheres(),_=this.game.world.collision;return _.los(s.pos.x,s.pos.y+.45,s.pos.z,A[1][0],A[1][1],A[1][2])||_.los(s.pos.x,s.pos.y+.45,s.pos.z,A[0][0],A[0][1],A[0][2])?(this.wantStance="prone",[0,0,!1,!1]):_.los(s.pos.x,s.pos.y+1.1,s.pos.z,A[1][0],A[1][1],A[1][2])?(this.wantStance="crouch",[0,0,!1,!1]):(this.wantStance="stand",[0,0,!1,!1])}return r>40&&Math.random()<.5&&(this.wantStance="crouch"),this.crouchSpamT>0&&(this.wantStance="crouch"),[M,S,!1,!1]}this.lostT=(this.lostT||0)+t;let u=e-i.t;if(l&&l.mag<l.stats.mag*.5&&s.reload(),this.nadeCd<=0&&u<5&&r>10&&r<34&&i.seenT>e-6&&Math.random()<this.d.nade*t*2&&this.throwGrenadeAt(i.x,i.y,i.z),!this.gadgetTask&&u<4&&r>18&&r<110&&Math.random()<t*.6*this.d.nade&&this.tryHeavyAt(i),this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1&&this.lostT<6){if(this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?q(1.2,2.4):q(.7,1.6)+s.suppression),(s.reloadT>0||s.suppression>.75)&&(this.peeking=!1),this.cover.lean&&this.peeking){let p=s.right(Ka);this.wantLean=this.cover.lean.x*p.x+this.cover.lean.z*p.z>0?1:-1,this.wantStance="stand"}else this.wantStance=this.cover.peek&&this.peeking?"stand":"crouch";return[0,0,!1,!1]}if(this.lostT<1.6)return this.wantStance=Math.random()<.5?"crouch":"stand",[0,0,!1,!1];if((this.aggro>.5||this.game.squads.orderType(s)==="attack"||r<25)&&u<9){this.cover=null;let[f,p,x]=this.followTo(i.x,i.z,t);return x&&(this.known.delete(a),this.target=null),this.wantStance="stand",[f,p,!1,!1]}return this.cover=null,this.objectiveMove(t,e)}reviveMove(t,e){let i=this.s,n=this.reviveMate;if(!n||n.state!=="downed")return this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(!this.smokeThrown&&s<30&&i.slots[4].id==="smoke"&&i.slots[4].count>0&&[...this.known.values()].some(r=>e-r.t<6&&Math.hypot(r.x-n.pos.x,r.z-n.pos.z)<60)&&(this.throwGrenadeAt(n.pos.x+q(-2,2),n.pos.y,n.pos.z+q(-2,2),"smoke"),this.smokeThrown=!0),i.isMedic&&i.slots[3].id==="smoke"&&!this.smokeThrown&&s<25&&i.slots[3].count>0&&[...this.known.values()].some(r=>e-r.t<6)&&(i.slots[3].count--,this.throwGrenadeAt(n.pos.x,n.pos.y,n.pos.z,"smoke",!0),this.smokeThrown=!0),s>1.4){let[a,r]=this.followTo(n.pos.x,n.pos.z,t),l=s>6;return this.wantStance="stand",i.reviveProgress=0,[a,r,l,!0]}return this.wantStance="crouch",this.lookAt(n.pos.x,n.pos.y+.3,n.pos.z,t,300),this.game.reviveTick(i,n,t),[0,0,!1,!1]}healMove(t,e){let i=this.s,n=this.healMate;if(!n||n.state!=="alive")return this.healMate=null,this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(s>2.5){let[a,r]=this.followTo(n.pos.x,n.pos.z,t);return[a,r,s>8,!0]}return i.actionT<=0&&i.medkitCd<=0&&(i.startAction("medkitOther",1,{target:n}),this.healMate=null),[0,0,!1,!1]}requestRepath(){this.repathT=0,this.path=null}followTo(t,e,i){let n=this.s,s=Math.hypot(t-n.pos.x,e-n.pos.z);if(s<.8)return[0,0,!0];this.repathT-=i;let a=!this.goal||Math.hypot(this.goal.x-t,this.goal.z-e)>Math.max(3,s*.2);if((!this.path||a||this.repathT<=0)&&!this.pathPending&&(this.goal={x:t,z:e},this.pathPending=!0,this.game.ai.requestPath(this,t,e),this.repathT=q(6,10)),!this.path)return s<12?[(t-n.pos.x)/s,(e-n.pos.z)/s,!1]:[0,0,!1];for(;this.pathI<this.path.length;){let u=this.path[this.pathI],d=Math.hypot(u[0]-n.pos.x,u[1]-n.pos.z),f=this.pathI===this.path.length-1;if(d<(f?.7:n.sprinting?1.6:1.1))this.pathI++;else break}if(this.pathI>=this.path.length)return this.path.partial?(this.path=null,[0,0,!1]):[(t-n.pos.x)/s,(e-n.pos.z)/s,s<1.5];let r=this.path[this.pathI],l=r[0]-n.pos.x,c=r[1]-n.pos.z,h=Math.hypot(l,c)||1;return[l/h,c/h,!1]}onPath(t){this.pathPending=!1,this.path=t,this.pathI=t&&t.length>1?1:0}lookAt(t,e,i,n,s){let a=this.s.eye(ja),r=t-a.x,l=e-a.y,c=i-a.z,h=Math.atan2(-r,-c),u=Math.atan2(l,Math.hypot(r,c));this.aiYaw=Tr(this.aiYaw,h,s*ne*n),this.aiPitch+=Ft(u-this.aiPitch,-s*ne*n,s*ne*n)}updateAim(t,e,i,n,s,a,r,l){let c=this.s,h=c.pitch-this.lastPitch,u=_i(c.yaw-this.lastYaw);Math.abs(h)<.2&&(this.recoilOff+=h*(1-this.d.comp)),Math.abs(u)<.2&&(this.recoilOffY+=u*(1-this.d.comp)),this.recoilOff*=Math.exp(-t*5),this.recoilOffY*=Math.exp(-t*5);let d=!1;if(this.gadgetTask&&this.gadgetTask.aimYaw!==void 0)this.aiYaw=Tr(this.aiYaw,this.gadgetTask.aimYaw,this.d.turn*ne*t),this.aiPitch+=Ft(this.gadgetTask.aimPitch-this.aiPitch,-this.d.turn*ne*t,this.d.turn*ne*t);else if(n&&this.target&&this.state!=="revive"){let f=this.target,p=c.eye(ja),x=f.hitSpheres(),g=i.headOnly?"head":i.bodyOnly?"body":this.part,m=g==="head"?x[0]:x[1],v=c.gun,y=v?v.stats.vel*v.stats.velMul:800,M=Math.hypot(m[0]-p.x,m[1]-p.y,m[2]-p.z),S=M/y,w=this.d.lead,T=m[0]+f.vel.x*S*w,A=m[1]+f.vel.y*S*w*.3+.5*9.81*S*S*w,_=m[2]+f.vel.z*S*w,b=T-p.x,C=A-p.y,L=_-p.z,k=Math.atan2(-b,-L),N=Math.atan2(C,Math.hypot(b,L)),O=Math.exp(-t/(this.d.errTau*(v&&v.stats.zoom>=3.5?.7:1)));this.errY*=O,this.errP*=O;let U=Math.hypot(c.vel.x,c.vel.z)>1?1.6:1,X=v?Math.sqrt(Math.max(1,v.stats.zoom)):1,F=this.d.jitter*ne*U*(1+c.suppression*2.2+c.flashed*6)*(1+M/260)/Math.pow(v?Math.max(1,v.stats.zoom):1,.8),B=(Math.sin(e*2.3+this.ph1)+Math.sin(e*5.1+this.ph2)*.5)*F*.6,j=(Math.sin(e*2.9+this.ph2)+Math.sin(e*4.3+this.ph1)*.5)*F*.45,rt=k+this.errY+B,st=N+this.errP+j,_t=Math.abs(_i(rt-this.aiYaw))+Math.abs(st-this.aiPitch),Y=this.d.turn*ne*t*(.25+.75*Math.min(1,_t/(12*ne)));this.aiYaw=Tr(this.aiYaw,rt,Y),this.aiPitch+=Ft(st-this.aiPitch,-Y,Y);let J=this.aiYaw+this.recoilOffY,gt=this.aiPitch+this.recoilOff,it=Math.hypot(_i(J-k),gt-N),xt=g==="head"?.14:.3,vt=v&&v.stats.zoom>=3.5?.07:Qt(.35,.13,Ft(M/150,0,1)),Gt=Math.max(vt*ne,Math.atan(xt/Math.max(M,1))*(M<15?2.6:1.5));this.reactT-=t,d=this.reactT<=0&&it<Gt*(this.burstLeft>0?2.2:1)&&M<=Za(v),f.state==="downed"&&[...this.known.values()].filter(nt=>nt.vis).length>1&&(d=!1),this.handleTrigger(t,d,M,e),c.input.ads=!!v&&(M>14||v.stats.type==="sniper"||v.stats.type==="dmr")&&c.reloadT<=0}else{c.input.ads=!1,this.burstLeft=0;let f=null,p=0;if(i&&!n){let x=c.eye(ja);f=Math.atan2(-(i.x-x.x),-(i.z-x.z)),p=Math.atan2(i.y+1.3-x.y,Math.hypot(i.x-x.x,i.z-x.z))}else if(r&&Math.hypot(s,a)>.2){if(f=Math.atan2(-s,-a),this.glanceT-=t,!l&&this.glanceT<=0){this.glancing=q(.6,1.2),this.glanceT=q(2.5,5);let x=this.game.squads.threatPoint(c.team,this.game.squads.objectiveFor(c));this.glanceYaw=Math.atan2(-(x.x-c.pos.x),-(x.z-c.pos.z))}this.glancing>0&&(this.glancing-=t,Math.abs(_i(this.glanceYaw-f))<1.6&&(f=this.glanceYaw))}else{let x=this.game.squads.objectiveFor(c),g=this.game.squads.threatPoint(c.team,x);f=Math.atan2(-(g.x-c.pos.x),-(g.z-c.pos.z))+Math.sin(e*.35+this.ph1)*.9,p=-.04}f!==null&&(this.aiYaw=Tr(this.aiYaw,f,(l?400:220)*ne*t),this.aiPitch+=Ft(p-this.aiPitch,-2*t,2*t))}c.yaw=this.aiYaw+this.recoilOffY,c.pitch=Ft(this.aiPitch+this.recoilOff,-1.4,1.4),this.lastPitch=c.pitch,this.lastYaw=c.yaw}handleTrigger(t,e,i,n){let s=this.s,a=s.gun;if(!a||s.reloadT>0||s.actionT>0)return;if(a.mag===0){a.reserve>0&&i<14&&s.slots[1].mag>0&&Math.random()<.5?s.switchTo(1):s.reload();return}this.holdFire-=t;let r=a.stats,l=r.modes[a.mode];if(this.burstLeft>0){if(l==="auto"?(s.input.fire=!0,s.fireCd<=1e-4&&this.burstLeft--):s.fireCd<=0&&(s.input.fire=!this.prevFire,this.burstLeft-=s.input.fire?1:0),this.prevFire=s.input.fire,this.burstLeft<=0){let c=i<20?q(.05,.18):i<60?q(.18,.4):q(.3,.65);this.holdFire=c*(1.6-this.d.burst)}return}if(this.prevFire=!1,!(!e||this.holdFire>0))if(l==="auto"){let c=i<20?Math.round(q(6,14)):i<45?Math.round(q(3,7)):i<90?Math.round(q(2,4)):Math.round(q(1,2));this.burstLeft=r.type==="lmg"?c*2:c,s.input.fire=!0}else s.input.fire=!0,this.prevFire=!0,this.burstLeft=0,this.holdFire=r.interval+(i>50?q(.12,.35):q(.03,.12))*(r.bolt?.5:1)}throwGrenadeAt(t,e,i,n,s){let a=this.s,r=s?a.slots[3]:a.slots[4];if(!r||r.count<=0||a.actionT>0)return!1;if(n){if(!s&&r.id!==n)return!1}else{if(r.id!=="frag"&&r.id!=="impact")return!1;n=r.id}let l=a.eye(new R),c=new R(t,e+.3,i),h=Cn.solveBallistic(l,c,17,15);if(h||(h=Cn.solveBallistic(l,c,22,15)),!h)return!1;let u=h.length();return this.game.world.collision.los(l.x,l.y,l.z,l.x+h.x/u*3,l.y+h.y/u*3,l.z+h.z/u*3)?(s||r.count--,a.throwVel=h,a.startAction("throw",.5,{type:n}),this.aiYaw=Math.atan2(-h.x,-h.z),this.nadeCd=q(10,18)/this.d.nade,!0):!1}tryHeavyAt(t){let e=this.s,i=e.slots.findIndex((l,c)=>c>=2&&l&&(l.id==="rpg"||l.id==="m320")&&l.count>0);if(i<0)return!1;let n=e.eye(new R),s=new R(t.x,t.y+1,t.z),a=e.slots[i].id==="rpg",r=Cn.solveBallistic(n,s,a?115:72,a?2.5:9.81);return!r||Math.hypot(t.x-e.pos.x,t.z-e.pos.z)<12?!1:(this.gadgetTask={slot:i,t:0,aimYaw:Math.atan2(-r.x,-r.z),aimPitch:Math.atan2(r.y,Math.hypot(r.x,r.z)),fired:!1},e.switchTo(i),!0)}runGadgetTask(t,e){let i=this.s,n=this.gadgetTask;n.t+=t,!n.fired&&i.switchT<=0&&n.t>.55&&(Math.abs(_i(this.aiYaw-n.aimYaw))<2*ne||n.t>1.6)&&(i.input.ads=!0,i.adsT=1,this.game.combat.useGadget(i,!0,!1),n.fired=!0,n.t=0),n.fired&&n.t>.6&&(this.gadgetTask=null,i.switchTo(0)),n.t>4&&(this.gadgetTask=null,i.switchTo(0))}},Qa=class{constructor(t){this.game=t,this.queue=[]}requestPath(t,e,i){this.queue.includes(t)||this.queue.push(t),t._pathGoal=[e,i]}update(){let t=this.game.world.nav;t.processDirty();let e=3;for(;e-- >0&&this.queue.length;){let i=this.queue.shift();if(i.s.state!=="alive"){i.pathPending=!1;continue}let[n,s]=i._pathGoal,a=t.findPath(i.s.pos.x,i.s.pos.z,n,s,{coverBias:.6,maxNodes:3e4,weight:1.45});i.onPath(a)}}clear(){this.queue=[]}};var ri="#4aa8ff",an="#86e05a",pi="#ff4b3a",Rn="#c8c8c8",Gr=new R;function se(o,t,e,i){let n=document.createElement(o);return t&&(n.className=t),i!==void 0&&(n.innerHTML=i),e&&e.appendChild(n),n}var tl=class{constructor(t){this.game=t;let e=this.root=se("div","hud",document.getElementById("ui"));this.markers=se("canvas","markers",e),this.mctx=this.markers.getContext("2d"),this.top=se("div","hud-top",e),this.ticketsEl=se("div","tickets",this.top),this.flagsEl=se("div","flagrow",this.top),this.compass=se("canvas","compass",this.top),this.compass.width=520,this.compass.height=30,this.capEl=se("div","capbar",e),this.capEl.innerHTML='<div class="caplabel"></div><div class="captrack"><div class="capfill"></div></div>',this.minimap=se("canvas","minimap",e),this.minimap.width=this.minimap.height=220,this.feed=se("div","killfeed",e),this.squadEl=se("div","squadlist",e),this.vitals=se("div","vitals",e),this.vitals.innerHTML='<div class="hpnum">100</div><div class="hpbar"><div class="hpfill"></div></div><div class="vstat"></div>',this.weaponEl=se("div","weaponbox",e),this.crosshair=se("div","crosshair",e),this.crosshair.innerHTML='<i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-d"></i>',this.hitmarker=se("div","hitmarker",e),this.hitmarker.innerHTML="<i></i><i></i><i></i><i></i>",this.prompt=se("div","prompt",e),this.progress=se("div","progress",e),this.progress.innerHTML="<div></div>",this.toasts=se("div","scoretoasts",e),this.msg=se("div","hudmsg",e),this.scope=se("canvas","scopecv",e),this.scopeCtx=this.scope.getContext("2d"),this.downedEl=se("div","downed",e),this.oob=se("div","oob",e),this.fps=se("div","fps",e),this.flashEl=se("div","flashbang",e),this.banner=se("div","killbanner",e),this.ammoHint=se("div","ammohint",e),this.breathEl=se("div","breath",e),this.breathEl.innerHTML="<span>HOLD BREATH</span><div><i></i></div>",this.order=se("div","orderline",e),this.board=se("div","scoreboard",e),this.bigmap=se("canvas","bigmap",e),this.bigmap.width=this.bigmap.height=760,this.dmg=[],this.hitT=0,this.hitKill=!1,this.feedItems=[],this.toastItems=[],this.giveUp=0,this.fpsAcc=0,this.fpsN=0,this.fpsT=0,this.lastWeaponKey="",this.lastFlagsKey="",this.resize()}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.markers.width=Math.floor(window.innerWidth*t),this.markers.height=Math.floor(window.innerHeight*t),this.dpr=t}setVisible(t){this.root.style.display=t?"":"none"}addKill(t,e,i,n,s){let a=t?t.team===this.game.player.team?t.squad===this.game.player.squad?an:ri:pi:Rn,r=e.team===this.game.player.team?e.squad===this.game.player.squad?an:ri:pi,l=t===this.game.player||e===this.game.player,c=se("div","kf"+(l?" me":""),this.feed,`${t&&t!==e?`<b style="color:${a}">${t.name}</b>`:""} <span class="kfw">${s?"\u25BC ":""}${i||""}${n?" \u2738":""}</span> <b style="color:${r}">${e.name}</b>`);this.feedItems.push({row:c,t:7}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}addRevive(t,e){let i=t.team===this.game.player.team?ri:pi,n=se("div","kf",this.feed,`<b style="color:${i}">${t.name}</b> <span class="kfw" style="color:#7fe07a">\u271A revived</span> <b style="color:${i}">${e.name}</b>`);this.feedItems.push({row:n,t:5}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}scorePopup(t,e){let i=se("div","toast",this.toasts,e?`<b>+${e}</b> ${t}`:t);this.toastItems.push({row:i,t:2.2}),this.toastItems.length>5&&this.toastItems.shift().row.remove()}killBanner(t,e,i){this.banner.innerHTML=`<div class="kb-x">\u2715</div><div class="kb-t">${i?"ENEMY DOWN":"ENEMY KILLED"}${e?" <b>HEADSHOT</b>":""}</div><div class="kb-n">${t}</div>`,this.banner.classList.remove("show"),this.banner.offsetWidth,this.banner.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.banner.classList.remove("show"),2200)}toast(t,e=2.5){this.msg.textContent=t,this.msg.style.opacity=1,this.msgT=e}hit(t,e){this.hitT=.16,this.hitKill=t,this.hitHead=e}damageFrom(t){if(!t)return;let e=this.game.player,i=Math.atan2(-t.x,-t.z)-e.yaw+Math.PI;this.dmg.push({a:i,t:1.4})}update(t){let e=this.game,i=e.player;if(!i)return;this.fpsAcc+=t,this.fpsN++,this.fpsT-=t,this.fpsT<=0&&(this.fps.textContent=e.settings.get("showFps")?`${Math.round(this.fpsN/this.fpsAcc)} FPS`:"",this.fpsAcc=0,this.fpsN=0,this.fpsT=.5);for(let g of[this.feedItems,this.toastItems])for(let m=g.length-1;m>=0;m--)g[m].t-=t,g[m].t<=0?(g[m].row.remove(),g.splice(m,1)):g[m].t<.5&&(g[m].row.style.opacity=g[m].t/.5);this.msgT!==void 0&&(this.msgT-=t,this.msgT<=0&&(this.msg.style.opacity=0)),this.updateTop(),this.updateWeapon(),this.updateVitals(),this.updateSquad(),this.updateCrosshair(t),this.drawMinimap(),this.drawMarkers(t),this.updateCapture();let n=e.playerCtl&&e.playerCtl.isScoped();if(this.scope.style.display=n?"block":"none",n){let g=i.weapon&&i.weapon.id==="binoculars"?"binoc":i.gun&&i.gun.stats.sightId==="scope8"?"scope8":"acog";this.drawScope(g,i,t)}let s=e.playerCtl,a=n&&i.gun&&s;this.breathEl.style.display=a?"block":"none",a&&(this.breathEl.querySelector("i").style.width=`${s.breath*100}%`,this.breathEl.classList.toggle("on",!!s.holding),this.breathEl.querySelector("span").textContent=`HOLD [${pe.name("sprint")}] TO STEADY`);let r=i.gun,l="";i.state==="alive"&&r&&i.reloadT<=0&&(r.mag===0&&r.reserve===0?l='<b class="bad">NO AMMO</b> \xB7 find an ammo box or switch weapons':r.mag===0?l=`<b class="bad">RELOAD</b> [${pe.name("reload")}]`:r.mag<=Math.ceil(r.stats.mag*.25)&&r.reserve>0&&(l=`LOW AMMO \xB7 [${pe.name("reload")}]`)),l!==this._hint&&(this._hint=l,this.ammoHint.innerHTML=l),this.flashEl.style.opacity=Ft(i.flashed*1.4,0,1);let c=e.playerCtl&&e.playerCtl.prompt;this.prompt.textContent=c||"",this.prompt.style.display=c&&i.state==="alive"?"block":"none";let h=i.action&&!["throw","throwC4","reloadGadget","melee"].includes(i.action.name),u=i.reviveProgress>0?i.reviveProgress:h?1-i.actionT/i.actionDur:0;if(this.progress.style.display=u>0&&i.state==="alive"?"block":"none",this.progress.firstChild.style.width=`${u*100}%`,i.state==="downed"){this.downedEl.style.display="block";let g=i.reviver&&i.reviver.state==="alive"&&i.reviver.reviveProgress>0;this.downedEl.innerHTML=`<div class="dt">YOU ARE DOWN</div><div class="ds">${g?`${i.reviver.name} is reviving you\u2026`:"Wait for a teammate to revive you"}</div><div class="dbar"><div style="width:${Ft(i.downedHp,0,100)}%"></div></div><div class="dk">Hold [${pe.name("jump")}] to give up ${this.giveUp>0?Math.round(this.giveUp*100)+"%":""}</div>`}else this.downedEl.style.display="none";let d=e.oobTime;this.oob.style.display=d>0?"block":"none",d>0&&(this.oob.innerHTML=`RETURN TO THE BATTLEFIELD<br><b>${Math.ceil(d)}</b>`);let f=i.squad;if(f&&f.order){let g=f.order,m=g.type==="follow"?"FOLLOW SQUAD LEADER":g.type==="move"?"MOVE TO MARKER":`${g.type.toUpperCase()} ${g.flag&&g.flag.id?g.flag.id+" \xB7 "+g.flag.name:""}`;this.order.innerHTML=`<b>${f.name}</b> ${m}${f.leader===i?` <span>[${pe.name("spot")}] give orders</span>`:""}`}else this.order.textContent="";e.settings.get("scoreboardMode")==="toggle"?pe.hit(e.input,"scoreboard")&&(this.boardOpen=!this.boardOpen):this.boardOpen=pe.down(e.input,"scoreboard");let p=this.boardOpen&&!e.uiBlocking();this.board.style.display=p?"block":"none",p&&this.drawBoard(),e.settings.get("mapMode")==="toggle"?pe.hit(e.input,"map")&&(this.mapOpen=!this.mapOpen):this.mapOpen=pe.down(e.input,"map");let x=this.mapOpen&&!e.uiBlocking();this.bigmap.style.display=x?"block":"none",x&&this.drawMap(this.bigmap,!1)}updateTop(){let t=this.game,e=t.mode,i=t.player,n=i.team,s=1-n,a=e.type==="tdm",r=a?e.kills[n]:e.tickets[n],l=a?e.kills[s]:e.tickets[s],c=Math.max(0,e.timeLimit-e.time),h=Math.floor(c/60),u=Math.floor(c%60),d=r/e.maxTickets,f=l/e.maxTickets,p=`${r}|${l}|${h}|${u}`;p!==this.lastTicketKey&&(this.lastTicketKey=p,this.ticketsEl.innerHTML=`<div class="tk mine"><span>${Ye[n].name}</span><b>${r}</b><div class="tkbar"><div style="width:${d*100}%"></div></div></div><div class="clock">${h}:${String(u).padStart(2,"0")}</div><div class="tk theirs"><b>${l}</b><span>${Ye[s].name}</span><div class="tkbar"><div style="width:${f*100}%"></div></div></div>`);let x=e.flags.map(v=>`${v.id}${v.owner}${Math.round(v.progress*20)}${v.contested?1:0}${v.capTeam}`).join(",");x!==this.lastFlagsKey&&(this.lastFlagsKey=x,this.flagsEl.innerHTML=e.flags.map(v=>{let y=v.owner===-1?"n":v.owner===n?"f":"e",M=Math.abs(v.progress),S=v.progress>0?0:1,w=v.progress===0?Rn:S===n?ri:pi,T=e.type==="frontline"&&!e.capturable(v,n)&&v.owner!==n?" locked":"";return`<div class="flag ${y}${v.contested?" contested":""}${T}" style="--p:${M*100}%;--c:${w}"><span>${v.id}</span></div>`}).join(""));let g=this.compass.getContext("2d");g.clearRect(0,0,520,30);let m=(-i.yaw/ne%360+360)%360;g.font="600 12px Rajdhani, Bahnschrift, sans-serif",g.textAlign="center";for(let v=-100;v<=100;v+=5){let M=(Math.round(m+v)%360+360)%360,S=260+(v-(m-Math.round(m)))*2.5;if(M%15!==0)continue;g.fillStyle="rgba(255,255,255,0.75)";let w={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[M];w?(g.fillStyle=M%90===0?"#ffd76a":"#fff",g.fillText(w,S,13)):(g.fillRect(S-.5,4,1,6),g.fillStyle="rgba(255,255,255,0.5)",g.fillText(String(M),S,22))}for(let v of e.flags){let M=(Math.atan2(v.x-i.pos.x,-(v.z-i.pos.z))/ne-m+540)%360-180;if(Math.abs(M)>100)continue;let S=260+M*2.5;g.fillStyle=v.owner===-1?Rn:v.owner===n?ri:pi,g.fillText(v.id,S,29)}g.fillStyle="#ffd76a",g.fillRect(259,0,2,7)}updateWeapon(){let t=this.game.player,e=t.weapon;if(!e)return;let i="",n="",s="";e.kind==="gun"?(i=e.stats.name,n=`<b>${e.mag}</b><span>/${e.reserve}</span>`,s=e.stats.modes[e.mode].toUpperCase()):(i=e.def.name,n=e.def.count===1/0?"<b>\u221E</b>":`<b>${e.count}</b>`,e.id==="c4"&&t.c4s&&t.c4s.length&&(s=`${t.c4s.length} PLACED \xB7 RMB DETONATE`),(e.id==="rpg"||e.id==="m320")&&!e.loaded&&(s="RELOADING"));let a=t.slots.map((l,c)=>{if(!l)return"";let h=l.kind==="gun"?l.stats.name:l.def.name,u=l.kind==="gun"||l.def.count===1/0?"":`<em>${l.count}</em>`;return`<div class="slot${c===t.active?" on":""}${l.kind==="gadget"&&l.count<=0&&l.def.count!==1/0?" empty":""}"><i>${pe.name("slot"+(c+1))}</i>${h}${u}</div>`}).join(""),r=i+n+s+a+t.bandages+(t.reloadT>0);r!==this.lastWeaponKey&&(this.lastWeaponKey=r,this.weaponEl.innerHTML=`<div class="wname">${i}${t.reloadT>0?' <span class="rl">RELOADING</span>':""}</div><div class="ammo">${n}<div class="fmode">${s}</div></div><div class="slots">${a}<div class="slot"><i>${pe.name("bandage")}</i>Bandage<em>${t.bandages}</em></div></div>`)}updateVitals(){let t=this.game.player,e=t.state==="alive"?Math.max(0,Math.ceil(t.hp)):0;if(e!==this.lastHp||t.bleed>0!==this.lastBleed||t.stance!==this.lastStance){this.lastHp=e,this.lastBleed=t.bleed>0,this.lastStance=t.stance,this.vitals.querySelector(".hpnum").textContent=e;let i=this.vitals.querySelector(".hpfill");i.style.width=`${e}%`,i.style.background=e<30?"#e8443a":e<60?"#e8b23a":"#e9eef2",this.vitals.querySelector(".vstat").innerHTML=`${t.bleed>0?`<span class="bleed">BLEEDING \xB7 [${pe.name("bandage")}] bandage</span>`:""}<span class="stance">${t.stance.toUpperCase()}</span><span class="cls" style="color:${di[t.cls].color}">${di[t.cls].name.toUpperCase()}</span>`}}updateSquad(){let t=this.game.player,e=t.squad;if(!e)return;let i=e.members.map(n=>n.name+n.state+(n===e.leader)+n.cls).join("|");i!==this.lastSquadKey&&(this.lastSquadKey=i,this.squadEl.innerHTML=`<div class="sqname">${e.name} SQUAD</div>`+e.members.map(n=>`<div class="sqm ${n.state}${n===t?" me":""}"><span class="sqc" style="background:${di[n.cls].color}"></span>${n===e.leader?"\u2605 ":""}${n.name}<em>${n.state==="downed"?"DOWN":n.state==="dead"?"KIA":""}</em></div>`).join(""))}updateCrosshair(t){let e=this.game,i=e.player,n=e.settings.get("crosshair")&&i.state==="alive"&&i.adsT<.5&&!i.sprinting&&!e.uiBlocking();if(this.crosshair.style.display=n?"block":"none",n){let s=i.gun?i.spread():1.2,a=e.camera,r=Math.tan(s*.5*ne)/Math.tan(a.fov*.5*ne)*window.innerHeight*.5;this.crosshair.style.setProperty("--gap",`${Ft(r,3,140)}px`)}this.hitT-=t,this.hitmarker.style.opacity=this.hitT>0?1:0,this.hitmarker.className="hitmarker"+(this.hitKill?" kill":"")+(this.hitHead?" head":"")}updateCapture(){let t=this.game,e=t.player,i=null;if(e.state==="alive"){for(let h of t.mode.flags)if(Math.hypot(e.pos.x-h.x,e.pos.z-h.z)<h.r&&Math.abs(e.pos.y-h.y)<14){i=h;break}}if(!i){this.capEl.style.display="none";return}this.capEl.style.display="block";let n=e.team,s=this.capEl.querySelector(".caplabel"),a=i.contested?"CONTESTED":i.capTeam===n?i.owner===-1?"CAPTURING":"NEUTRALIZING":i.capTeam===1-n?"LOSING":i.owner===n?"SECURED":t.mode.capturable(i,n)?"":"LOCKED";s.innerHTML=`<b>${i.id}</b> ${i.name} <span>${a}</span> <i>${i.counts[n]} vs ${i.counts[1-n]}</i>`;let r=this.capEl.querySelector(".capfill"),l=Math.abs(i.progress),c=i.progress>=0?0:1;r.style.width=`${l*100}%`,r.style.background=i.progress===0?Rn:c===n?ri:pi}drawScope(t,e,i){let n=this.scope,s=this.dpr,a=Math.floor(window.innerWidth*s),r=Math.floor(window.innerHeight*s);(n.width!==a||n.height!==r)&&(n.width=a,n.height=r);let l=this.scopeCtx;l.clearRect(0,0,a,r);let c=a/2,h=r/2,u=Math.min(a,r)*(t==="binoc"?.36:.43),d=t==="binoc"?[[c-u*.55,h,u],[c+u*.55,h,u]]:[[c,h,u]];this._sbob=(this._sbob||0)+i*Math.hypot(e.vel.x,e.vel.z)*2.2;let f=Math.min(1,Math.hypot(e.vel.x,e.vel.z)/3),p=(e.swayY*900+Math.sin(this._sbob)*10*f)*s,x=(e.swayP*900+Math.abs(Math.cos(this._sbob))*12*f)*s;l.fillStyle="#050505",l.fillRect(0,0,a,r),l.globalCompositeOperation="destination-out";for(let[v,y,M]of d)l.beginPath(),l.arc(v,y,M,0,7),l.fill();l.globalCompositeOperation="source-over",l.save(),l.beginPath();for(let[v,y,M]of d)l.moveTo(v+M,y),l.arc(v,y,M,0,7);l.clip();for(let[v,y,M]of d){let S=l.createRadialGradient(v+p,y+x,M*.72,v+p,y+x,M*1.08);S.addColorStop(0,"rgba(0,0,0,0)"),S.addColorStop(.7,"rgba(0,0,0,0.55)"),S.addColorStop(1,"rgba(0,0,0,0.98)"),l.fillStyle=S,l.fillRect(v-M,y-M,M*2,M*2);let w=l.createRadialGradient(v,y,0,v,y,M);w.addColorStop(0,"rgba(120,160,200,0.0)"),w.addColorStop(1,"rgba(60,90,130,0.18)"),l.fillStyle=w,l.fillRect(v-M,y-M,M*2,M*2),l.strokeStyle="rgba(255,255,255,0.07)",l.lineWidth=M*.06,l.beginPath(),l.arc(v,y,M*.86,Math.PI*1.08,Math.PI*1.42),l.stroke()}l.restore();let g=s;l.save(),l.beginPath();for(let[v,y,M]of d)l.moveTo(v+M,y),l.arc(v,y,M,0,7);if(l.clip(),l.lineCap="butt",t==="scope8"){l.fillStyle=l.strokeStyle="#0a0a0a";let v=7*g,y=1.4*g,M=u*.42;l.fillRect(c-u,h-v/2,u-M,v),l.fillRect(c+M,h-v/2,u-M,v),l.fillRect(c-v/2,h+M,v,u-M),l.fillRect(c-v/2,h-u,v,u-M),l.fillRect(c-M,h-y/2,M*2,y),l.fillRect(c-y/2,h-M,y,M*2);for(let S=1;S<=5;S++){let w=S*M/5.5;for(let[T,A]of[[w,0],[-w,0],[0,w],[0,-w]])l.beginPath(),l.arc(c+T,h+A,2.4*g,0,7),l.fill()}l.fillStyle="#ff3a2a",l.shadowColor="#ff3a2a",l.shadowBlur=6*g,l.beginPath(),l.arc(c,h,1.8*g,0,7),l.fill(),l.shadowBlur=0}else if(t==="acog"){l.strokeStyle="#0a0a0a",l.lineWidth=1.6*g,l.beginPath(),l.moveTo(c-u,h),l.lineTo(c-u*.22,h),l.moveTo(c+u*.22,h),l.lineTo(c+u,h),l.stroke(),l.beginPath(),l.moveTo(c,h+u*.05),l.lineTo(c,h+u*.55),l.stroke();let v=[[.13,.08,"4"],[.22,.06,"5"],[.31,.045,"6"],[.42,.03,"8"]];l.font=`600 ${11*g}px Rajdhani, sans-serif`,l.fillStyle="#0a0a0a",l.textAlign="left";for(let[y,M,S]of v)l.beginPath(),l.moveTo(c-u*M,h+u*y),l.lineTo(c+u*M,h+u*y),l.stroke(),l.fillText(S,c+u*M+4*g,h+u*y+4*g);l.strokeStyle="#ff4a26",l.shadowColor="#ff4a26",l.shadowBlur=8*g,l.lineWidth=3*g,l.lineJoin="miter",l.beginPath(),l.moveTo(c-u*.045,h+u*.05),l.lineTo(c,h),l.lineTo(c+u*.045,h+u*.05),l.stroke(),l.shadowBlur=0}else{l.strokeStyle="rgba(10,10,10,0.85)",l.lineWidth=1.4*g,l.fillStyle="rgba(10,10,10,0.85)",l.beginPath(),l.moveTo(c-u*.6,h),l.lineTo(c+u*.6,h),l.stroke();for(let v=-6;v<=6;v++){let y=c+v*u*.1;l.beginPath(),l.moveTo(y,h-(v%2?4:9)*g),l.lineTo(y,h),l.stroke()}l.beginPath(),l.moveTo(c,h-u*.12),l.lineTo(c,h+u*.12),l.stroke(),l.font=`600 ${11*g}px Rajdhani, sans-serif`,l.textAlign="center",l.fillText("SPOT [LMB]",c,h+u*.3)}l.restore();let m=Math.min(1,Math.max(0,(e.adsT-.9)/.1));n.style.opacity=m}worldToMap(t,e,i){let n=this.game.world.terrain.half;return[(t+n)/(n*2)*i,(e+n)/(n*2)*i]}drawMinimap(){let t=this.game,e=t.player,i=this.minimap.getContext("2d"),n=220,s=110,a=t.world.mapImage,r=t.world.terrain.half,l=170,c=s/l;i.save(),i.clearRect(0,0,n,n),i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.clip(),i.fillStyle="#1a1f22",i.fillRect(0,0,n,n),i.translate(s,s),i.rotate(e.yaw);let h=a.width/(r*2);i.globalAlpha=.92,i.drawImage(a,(-r-e.pos.x)*c,(-r-e.pos.z)*c,r*2*c,r*2*c),i.globalAlpha=1;let u=(d,f)=>[(d-e.pos.x)*c,(f-e.pos.z)*c];for(let d of t.mode.flags){let[f,p]=u(d.x,d.z);i.strokeStyle=d.owner===-1?Rn:d.owner===e.team?ri:pi,i.lineWidth=2,i.globalAlpha=.5,i.beginPath(),i.arc(f,p,d.r*c,0,Math.PI*2),i.stroke(),i.globalAlpha=1}this.drawUnits(i,u,e,3.2,l),i.restore(),i.save(),i.translate(s,s);for(let d of t.mode.flags){let[f,p]=u(d.x,d.z),x=Math.cos(e.yaw),g=Math.sin(e.yaw),m=f*x-p*g,v=f*g+p*x,y=Math.hypot(m,v);y>s-12&&(m*=(s-12)/y,v*=(s-12)/y),i.fillStyle="rgba(0,0,0,0.6)",i.beginPath(),i.arc(m,v,8,0,7),i.fill(),i.fillStyle=d.owner===-1?Rn:d.owner===e.team?ri:pi,i.font="bold 11px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(d.id,m,v+1)}i.fillStyle="#ffd76a",i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore(),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=2,i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.stroke()}drawUnits(t,e,i,n,s){let a=this.game,r=a.time;for(let c of a.soldiers){if(c===i||c.state==="dead")continue;let h=c.team===i.team;if(!(h||c.spotUntil>r||r-c.lastLoudShot<1.2&&c.pos.distanceTo(i.pos)<160))continue;let[d,f]=e(c.pos.x,c.pos.z);if(!(s&&Math.hypot(d,f)>1e9)){if(t.fillStyle=h?c.squad===i.squad?an:ri:pi,c.state==="downed"){t.fillRect(d-n,f-1,n*2,2),t.fillRect(d-1,f-n,2,n*2);continue}t.save(),t.translate(d,f),t.rotate(-c.yaw),t.beginPath(),t.moveTo(0,-n*1.4),t.lineTo(n,n),t.lineTo(-n,n),t.closePath(),t.fill(),t.restore()}}for(let c of a.combat.placed){if(c.team!==i.team||c.type!=="rally"&&c.type!=="beacon"||c.squad!==i.squad)continue;let[h,u]=e(c.x,c.z);t.fillStyle=c.type==="rally"?"#f0e070":"#30ff80",t.fillRect(h-3,u-3,6,6)}let l=i.squad;if(l&&l.order&&l.order.type==="move"){let[c,h]=e(l.order.x,l.order.z);t.strokeStyle=an,t.lineWidth=2,t.beginPath(),t.arc(c,h,5,0,7),t.stroke()}}drawMap(t,e,i,n){let s=this.game,a=s.player,r=t.getContext("2d"),l=t.width;r.clearRect(0,0,l,l),r.drawImage(s.world.mapImage,0,0,l,l);let c=s.world.terrain.half,h=(g,m)=>[(g+c)/(c*2)*l,(m+c)/(c*2)*l],u=s.world.def.playHalf,[d,f]=h(-u,-u),[p,x]=h(u,u);r.strokeStyle="rgba(255,80,60,0.6)",r.setLineDash([8,6]),r.lineWidth=2,r.strokeRect(d,f,p-d,x-f),r.setLineDash([]),s.world.def.hq.forEach((g,m)=>{let[v,y]=h(g.x,g.z);r.fillStyle=m===a.team?ri:pi,r.globalAlpha=.25,r.beginPath(),r.arc(v,y,g.r/(c*2)*l,0,7),r.fill(),r.globalAlpha=1,r.font="bold 14px Rajdhani",r.textAlign="center",r.fillText("HQ",v,y+5)});for(let g of s.mode.flags){let[m,v]=h(g.x,g.z),y=g.owner===-1?Rn:g.owner===a.team?ri:pi;r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(m,v,16,0,7),r.fill(),r.strokeStyle=y,r.lineWidth=3,r.beginPath(),r.arc(m,v,16,0,7),r.stroke(),r.fillStyle=y,r.font="bold 18px Rajdhani",r.textAlign="center",r.textBaseline="middle",r.fillText(g.id,m,v+1),r.font="600 12px Rajdhani",r.fillStyle="#fff",r.fillText(g.name,m,v+28)}if(r.textBaseline="alphabetic",(a.state!=="dead"||!e)&&this.drawUnits(r,h,a,4,0),a.state!=="dead"){let[g,m]=h(a.pos.x,a.pos.z);r.save(),r.translate(g,m),r.rotate(-a.yaw),r.fillStyle="#ffd76a",r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(-6,7),r.closePath(),r.fill(),r.restore()}if(i)for(let g of i){let[m,v]=h(g.x,g.z),y=n===g;r.fillStyle=y?"#ffd76a":g.kind==="squad"?an:g.kind==="rally"?"#f0e070":g.kind==="beacon"?"#30ff80":ri,r.strokeStyle="#000",r.lineWidth=2;let M=y?11:8;r.beginPath(),r.moveTo(m,v-M),r.lineTo(m+M,v),r.lineTo(m,v+M),r.lineTo(m-M,v),r.closePath(),r.fill(),r.stroke(),(y||g.kind!=="flag")&&(r.font="bold 12px Rajdhani",r.fillStyle="#fff",r.textAlign="center",r.fillText(g.label,m,v-M-5)),g._mx=m,g._my=v}}drawMarkers(t){let e=this.game,i=e.player,n=this.mctx,s=e.camera,a=this.markers.width,r=this.markers.height,l=this.dpr;n.clearRect(0,0,a,r);for(let p=this.dmg.length-1;p>=0;p--){let x=this.dmg[p];if(x.t-=t,x.t<=0){this.dmg.splice(p,1);continue}n.save(),n.translate(a/2,r/2),n.rotate(-x.a),n.strokeStyle=`rgba(255,50,40,${Math.min(1,x.t)})`,n.lineWidth=6*l,n.beginPath(),n.arc(0,0,90*l,-Math.PI/2-.25,-Math.PI/2+.25),n.stroke(),n.restore()}if(e.uiBlocking()&&i.state==="dead")return;let c=(p,x,g)=>(Gr.set(p,x,g).applyMatrix4(s.matrixWorldInverse),Gr.z>-.2?null:(Gr.applyMatrix4(s.projectionMatrix),[(Gr.x*.5+.5)*a,(-Gr.y*.5+.5)*r])),h=(p,x)=>[Ft(p,30*l,a-30*l),Ft(x,30*l,r-30*l)];n.textAlign="center",n.textBaseline="middle";for(let p of e.mode.flags){let x=c(p.x,p.y+7,p.z),g=p.owner===-1?Rn:p.owner===i.team?ri:pi,m=Math.hypot(p.x-i.pos.x,p.z-i.pos.z);if(!x)continue;let[v,y]=h(x[0],x[1]),M=i.squad&&i.squad.order&&i.squad.order.flag===p;n.globalAlpha=m<p.r?.5:.95,n.fillStyle="rgba(0,0,0,0.5)",n.beginPath(),n.arc(v,y,13*l,0,7),n.fill(),n.strokeStyle=g,n.lineWidth=2.5*l,n.beginPath(),n.arc(v,y,13*l,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.abs(p.progress)),n.stroke(),n.fillStyle=g,n.font=`bold ${15*l}px Rajdhani, sans-serif`,n.fillText(p.id,v,y+1*l),n.font=`600 ${11*l}px Rajdhani, sans-serif`,n.fillStyle="#fff",n.fillText(`${Math.round(m)}m`,v,y+22*l),M&&(n.fillStyle=an,n.fillText(i.squad.order.type.toUpperCase(),v,y-22*l)),n.globalAlpha=1}let u=i.squad;if(u&&u.order&&u.order.type==="move"){let p=c(u.order.x,e.world.terrain.heightAt(u.order.x,u.order.z)+2,u.order.z);p&&(n.strokeStyle=an,n.lineWidth=2*l,n.beginPath(),n.arc(p[0],p[1],8*l,0,7),n.stroke(),n.fillStyle=an,n.font=`600 ${11*l}px Rajdhani`,n.fillText("MOVE",p[0],p[1]-16*l))}let d=e.time,f=e.settings.get("nameTags");for(let p of e.soldiers){if(p===i||p.state==="dead")continue;let x=p.pos.distanceTo(s.position);if(p.team===i.team){let g=p.squad===i.squad;if(p.state==="downed"&&x<90){let v=c(p.pos.x,p.pos.y+1,p.pos.z);if(v){n.fillStyle="#ff5a4a";let y=7*l;n.fillRect(v[0]-y,v[1]-y*.33,y*2,y*.66),n.fillRect(v[0]-y*.33,v[1]-y,y*.66,y*2),n.font=`600 ${10*l}px Rajdhani`,n.fillStyle="#fff",n.fillText(`${Math.round(x)}m`,v[0],v[1]+14*l)}continue}if(!f||x>(g?250:45))continue;let m=c(p.pos.x,p.pos.y+p.bodyH+.5,p.pos.z);if(!m)continue;n.fillStyle=g?an:ri,n.globalAlpha=Ft(1.3-x/(g?250:45),.35,.95),n.beginPath(),n.moveTo(m[0]-5*l,m[1]-4*l),n.lineTo(m[0]+5*l,m[1]-4*l),n.lineTo(m[0],m[1]+3*l),n.closePath(),n.fill(),x<30&&(n.font=`600 ${11*l}px Rajdhani`,n.fillText(p.name,m[0],m[1]-12*l)),n.globalAlpha=1}else if(p.spotUntil>d&&p.state==="alive"){let g=c(p.pos.x,p.pos.y+p.bodyH+.45,p.pos.z);if(!g)continue;let m=5*l;n.fillStyle=pi,n.beginPath(),n.moveTo(g[0],g[1]-m),n.lineTo(g[0]+m,g[1]),n.lineTo(g[0],g[1]+m),n.lineTo(g[0]-m,g[1]),n.closePath(),n.fill()}}for(let p of e.combat.projectiles){if(!["frag","impact","launcher","flash"].includes(p.type))continue;let x=Math.hypot(p.x-i.pos.x,p.y-i.pos.y,p.z-i.pos.z);if(x>12||i.state==="dead")continue;let g=c(p.x,p.y+.3,p.z),m=.6+.4*Math.sin(d*18);if(!g){let M=Math.atan2(p.x-i.pos.x,-(p.z-i.pos.z))+i.yaw;g=[a/2+Math.sin(M)*140*l,r/2-Math.cos(M)*140*l]}let[v,y]=h(g[0],g[1]);n.globalAlpha=m,n.fillStyle="rgba(0,0,0,0.55)",n.beginPath(),n.arc(v,y,15*l,0,7),n.fill(),n.strokeStyle="#ff5a3a",n.lineWidth=2.5*l,n.beginPath(),n.arc(v,y,15*l,0,7),n.stroke(),n.fillStyle="#ff5a3a",n.beginPath(),n.arc(v,y+2*l,6*l,0,7),n.fill(),n.fillRect(v-2*l,y-9*l,4*l,6*l),n.font=`700 ${10*l}px Rajdhani, sans-serif`,n.fillText(`${x.toFixed(0)}m`,v,y+26*l),n.globalAlpha=1}for(let p of e.combat.placed){if(p.team!==i.team||p.squad!==i.squad||p.type!=="rally"&&p.type!=="beacon")continue;let x=c(p.x,p.y+1.5,p.z);x&&(n.fillStyle=p.type==="rally"?"#f0e070":"#30ff80",n.font=`bold ${11*l}px Rajdhani`,n.fillText(p.type==="rally"?"\u25B2 RALLY":"\u25B2 BEACON",x[0],x[1]))}if(i.state==="alive"&&i.gun&&i.gun.stats.laser&&i.adsT<.6){let p=i.eye(new R),x=i.aimDir(new R),g=e.world.collision.raycast(p.x,p.y,p.z,x.x,x.y,x.z,60,{});if(g){let m=c(g.x,g.y,g.z);m&&(n.fillStyle="rgba(255,40,40,0.9)",n.beginPath(),n.arc(m[0],m[1],2.5*l,0,7),n.fill())}}}drawBoard(){let t=this.game,e=t.player,i=n=>{let s=t.teams[n].slice().sort((r,l)=>l.stats.score-r.stats.score),a=t.mode.type==="tdm";return`<div class="sbteam t${n===e.team?"f":"e"}"><div class="sbh"><b>${Ye[n].name}</b><span>${a?t.mode.kills[n]+" kills":t.mode.tickets[n]+" tickets"}</span></div>
        <table><tr><th></th><th>Name</th><th>Squad</th><th>K</th><th>D</th><th>A</th><th>Rev</th><th>Score</th></tr>
        ${s.map(r=>`<tr class="${r===e?"me":""} ${r.state}"><td><i style="background:${di[r.cls].color}"></i></td><td>${r.squad&&r.squad.leader===r?"\u2605 ":""}${r.name}</td><td>${r.squad?r.squad.name:""}</td><td>${r.stats.kills}</td><td>${r.stats.deaths}</td><td>${r.stats.assists}</td><td>${r.stats.revives}</td><td>${r.stats.score}</td></tr>`).join("")}</table></div>`};this.board.innerHTML=`<div class="sbtitle">${t.world.def.name} \xB7 ${t.modeName}</div><div class="sbcols">${i(e.team)}${i(1-e.team)}</div>`}dispose(){this.root.remove()}};var $1=["Viper","Hawk","Nomad","Rook","Bishop","Ghost","Mako","Jester","Reaper","Kodiak","Talon","Sable","Ranger","Wolf","Cobra","Bravo","Atlas","Raven","Moose","Hound","Diesel","Patch","Tank","Specter","Flint","Drifter","Saint","Gunny","Sarge","Ace","Blaze","Ox","Lynx","Falcon","Orca","Shadow","Grizzly","Rocco","Duke","Ziggy","Bear","Fox","Scout","Hammer","Ice","Kilo","Mustang","Pyro","Rex","Titan","Wasp","Yeti","Zulu","Cricket","Doc","Smokey","Tex","Chief","Boomer","Echo","Pilot","Sparks","Crow","Tusk"],If=[["leader","medic","assault","support"],["leader","assault","engineer","medic"],["leader","support","recon","assault"],["leader","medic","engineer","assault"]],Lf={morning:{sat:1.1,contrast:1.06,lift:[.01,.012,.02],gamma:[1,1,1],gain:[1.03,1,.96]},noon:{sat:1.06,contrast:1.05,lift:[0,0,.01],gamma:[1,1,1],gain:[1,1,.98]},afternoon:{sat:1.04,contrast:1.07,lift:[.015,.01,0],gamma:[1,1,1],gain:[1.05,1,.9]},dusk:{sat:1.12,contrast:1.08,lift:[.02,0,.02],gamma:[1,1,1],gain:[1.08,.96,.88]},overcast:{sat:.9,contrast:1.08,lift:[.01,.012,.016],gamma:[1,1,1],gain:[.98,1,1.03]},snow:{sat:.9,contrast:1.05,lift:[0,.01,.02],gamma:[1,1,1],gain:[.98,1,1.04]},night:{sat:.85,contrast:1.05,lift:[0,.01,.03],gamma:[1,1,1.05],gain:[.92,.98,1.1]}},el=class{constructor(t,e){this.app=t,this.config=e,this.renderer=t.renderer,this.settings=t.settings,this.audio=t.audio,this.input=t.input,this.menus=t.menus,this.time=0,this.frame=0,this.paused=!1,this.soldiers=[],this.teams=[[],[]],this.oobTime=0,this.respawnAt=0,this.lastDeath=null,this.ended=!1}async init(t){let e=this.config;Ws[e.map]||(e.map="ironworks");let i=Ws[e.map];this.def=i,rf(),of();let n=this.scene=new Bi,s=window.innerWidth,a=window.innerHeight;this.camera=new be(70,s/a,.06,this.settings.get("viewDistance")),n.add(this.camera),this.vmScene=new Bi,this.vmCamera=new be(64,s/a,.01,10),this.vmScene.add(new sn(14543103,5261374,1.1)),this.vmLight=new bi(16777215,1.6),this.vmScene.add(this.vmLight),this.env=new La(this.renderer,n,this.camera,this.settings);let r=e.time==="default"?i.time:e.time;this.timeName=r,t("Lighting the sky",.02),this.world=new Da(i,n),await this.world.build(t),this.env.setTime(r),this.vmLight.color.copy(this.env.sun.color).multiplyScalar(this.env.time.night?.6:1),this.vmScene.environment=this.env.envMap,this.vmScene.environmentIntensity=.6,t("Spawning soldiers",.95),this.water=this.world.terrain.waterLevel!==null?new ka(this.world,n,this.env):null,this.grass=new Pa(this.world,n),this.fx=new Wa(this),this.combat=new Cn(this),this.mode=new fa(this,e.mode,e.tickets?{tickets:e.tickets}:{}),this.modeName=qs[e.mode].name,this.ai=new Qa(this),this.squads=new qa(this),this.createSoldiers(),this.post=new Va(this.renderer,n,this.camera,this.vmScene,this.vmCamera,this.settings),this.post.hidden=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]],this.water&&(this.water.hideList=[...this.fx.hidden]),this.post.setGrade(Lf[r]||Lf.morning),this.hud=new tl(this),this.playerCtl=new $a(this,this.player),this.applySettings(),this.unsub=l=>this.applySettings(l),this.settings.onChange(this.unsub),this.audio.startAmbience(i.biome,this.env.time.night);for(let l of this.soldiers)l.isPlayer||(l.respawnAt=q(0,2.5));return this.respawnAt=0,this.player.state="dead",this.deployCam={a:0},this}createSoldiers(){let t=this.config.team??0,e=$1.slice().sort(()=>Math.random()-.5),i=0;for(let n=0;n<2;n++)for(let s=0;s<4;s++)for(let a=0;a<4;a++){let r=n===t&&s===0&&a===3,l=If[(s+n)%If.length][a],c=new Ya(this,n,r?this.config.name:e[i++%e.length],r);c.setLoadout(r?JSON.parse(JSON.stringify(this.menus.loadout)):ga(l)),r||(c.brain=new Ja(c,this)),c.state="dead",c.respawnAt=0,this.soldiers.push(c),this.teams[n].push(c),r&&(this.player=c)}this.squads.build(this.teams,4);for(let n of this.squads.list[t])n.members.includes(this.player)&&(this.playerSquad=n)}applySettings(t){let e=this.settings;if(this.env.applySettings(),this.post.applySettings(),this.grass.setLevel(e.get("grass")),this.grass.mesh?this.post.hidden=[...this.fx.hidden,this.grass.mesh]:this.post.hidden=[...this.fx.hidden],this.water&&(this.water.setQuality(e.get("waterReflections"),e.get("waterWaves")),this.water.hideList=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]]),this.world.vegetation.setWind(e.get("treeWind")),this.fx.setQuality(e),this.camera.far=e.get("viewDistance"),this.camera.updateProjectionMatrix(),this.audio.setVolume(e.get("volume")),t==="difficulty")for(let i of this.soldiers)i.brain&&i.brain.setDifficulty(e.get("difficulty"));if(t==="enemyOutline"||t===void 0)for(let i of this.soldiers)i.rig&&i.rig.outlined&&(i.rig.outlineOn=e.get("enemyOutline"),i.rig._olv=null);(t==="renderScale"||t==="antialias"||t===void 0)&&this.app.resize()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.vmCamera.aspect=t/e,this.vmCamera.updateProjectionMatrix();let i=this.renderer.getDrawingBufferSize(new lt);this.post.setSize(i.x,i.y),this.hud.resize()}uiBlocking(){return this.paused||this.player.state==="dead"||this.ended}spawnOptions(t){let e=[],i=t.team,n=this.def.hq[i];e.push({kind:"hq",key:"hq",label:"HQ",x:n.x,z:n.z});for(let s of this.safeFlagSpawns(i))e.push({kind:"flag",key:"flag"+s.id,label:`${s.id} \xB7 ${s.name}`,x:s.x,z:s.z,flag:s});if(t.squad){for(let s of t.squad.members)s===t||s.state!=="alive"||!this.safeToSpawnOn(s)||e.push({kind:"squad",key:"sq"+s.id,label:`${s===t.squad.leader?"\u2605 ":""}${s.name}`,x:s.pos.x,z:s.pos.z,mate:s});for(let s of this.combat.placed)(s.type==="rally"||s.type==="beacon")&&s.squad===t.squad&&!s.blocked&&e.push({kind:s.type,key:s.type+s.owner.id,label:s.type==="rally"?"Rally point":"Spawn beacon",x:s.x,z:s.z,placed:s})}return e}safeFlagSpawns(t){return this.mode.flagSpawns(t).filter(e=>!this.teams[1-t].some(i=>i.state==="alive"&&Math.hypot(i.pos.x-e.x,i.pos.z-e.z)<e.r+30))}safeToSpawnOn(t){if(this.time-t.lastDamage<6||t.swimming||t.vault)return!1;for(let e of this.teams[1-t.team])if(e.state==="alive"&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<22)return!1;if(t.brain){for(let[,e]of t.brain.known)if(e.vis)return!1}return!0}resolveSpawn(t,e){let i=this.world.nav,n=this.teams[1-e].filter(f=>f.state==="alive"),s=this.world.collision,a=(f,p,x)=>{let g=1e9,m=0;for(let v of n){let y=Math.hypot(v.pos.x-f,v.pos.z-p);g=Math.min(g,y),y<260&&s.los(v.pos.x,v.pos.y+1.6,v.pos.z,f,x+1.5,p)&&m++}return Math.min(g,80)-m*60},r,l,c,h,u=(f,p)=>Math.atan2(-(f-r),-(p-l)),d=this.mode.flags.length?this.mode.flags.reduce((f,p)=>({x:f.x+p.x/this.mode.flags.length,z:f.z+p.z/this.mode.flags.length}),{x:0,z:0}):{x:0,z:0};if(t.kind==="squad"&&t.mate&&t.mate.state==="alive"){let f=t.mate,p=f.forward(new R),x=[[f.pos.x-p.x*1.6,f.pos.z-p.z*1.6],[f.pos.x+1.2,f.pos.z],[f.pos.x-1.2,f.pos.z],[f.pos.x,f.pos.z+1.2]];for(let[g,m]of x){let v=this.world.collision.groundAt(g,m,f.pos.y+.6);if(Math.abs(v-f.pos.y)<.6&&!this.world.collision.overlapsAny(g,v+.05,m,.3,1.7)){r=g,l=m,c=v;break}}r===void 0&&(r=f.pos.x,l=f.pos.z,c=f.pos.y),h=f.yaw}else{let f=t.kind==="hq"?Math.min(20,this.def.hq[e].r*.6):t.kind==="flag"?t.flag.r*.8:4,p=null,x=-1/0,g=this.def.playHalf-6;for(let m=0;m<16;m++){let[v,y,M]=i.randomWalkableNear(t.x,t.z,f);if(Math.abs(v)>g||Math.abs(y)>g){if(m<15||p)continue;v=Math.max(-g,Math.min(g,v)),y=Math.max(-g,Math.min(g,y))}let S=a(v,y,M)+Math.random()*5;S>x&&(x=S,p=[v,y,M])}[r,l,c]=p,c=this.world.collision.groundAt(r,l,c+1),h=u(d.x,d.z)}return{x:r,y:c,z:l,yaw:h}}deployPlayer(t,e){let i=this.player;if(i.squad)if(t.cls==="leader"){let s=i.squad.leader;i.squad.leader=i,s&&s!==i&&s.loadout.cls==="leader"&&s.setLoadout(ga("assault")),(!i.squad.order||i.squad.order.type!=="follow")&&this.squads.setOrder(i.squad,"follow",null,0,0)}else i.squad.leader===i&&(this.squads.pickLeader(i.squad),i.squad.leader===i&&(i.squad.leader=i.squad.members.find(s=>s!==i)||i),i.squad.order&&i.squad.order.type==="follow"&&(i.squad.order=null));i.setLoadout(t);let n=this.resolveSpawn(e,i.team);i.spawn(n.x,n.y,n.z,n.yaw),this.playerCtl.vmKey=null,this.playerCtl.crouchToggle=!1,this.menus.hideAll(),this.hud.setVisible(!0),this.app.lockPointer(),this.audio.play2d("deploy",{vol:.4}),this.oobTime=0}botSpawn(t){let e=t.squad,i=[],n=e&&e.leader,s=e&&e.order;if(n&&n!==t&&n.state==="alive"&&this.safeToSpawnOn(n)&&Math.random()<.65&&i.push({kind:"squad",mate:n,x:n.pos.x,z:n.pos.z}),!i.length&&e){let r=this.combat.placed.find(l=>(l.type==="rally"||l.type==="beacon")&&l.squad===e&&!l.blocked);r&&Math.random()<.8&&i.push({kind:"rally",x:r.x,z:r.z})}if(!i.length&&e&&Math.random()<.35){let r=e.members.filter(l=>l!==t&&l.state==="alive"&&this.safeToSpawnOn(l));if(r.length){let l=r[Math.floor(Math.random()*r.length)];i.push({kind:"squad",mate:l,x:l.pos.x,z:l.pos.z})}}if(!i.length){let r=this.safeFlagSpawns(t.team);if(r.length&&s){let l=null,c=1e9;for(let u of r){let d=Math.hypot(u.x-s.x,u.z-s.z);d<c&&(c=d,l=u)}let h=this.def.hq[t.team];l&&c<Math.hypot(h.x-s.x,h.z-s.z)+30&&i.push({kind:"flag",flag:l,x:l.x,z:l.z})}}if(!i.length){let r=this.def.hq[t.team];i.push({kind:"hq",x:r.x,z:r.z})}let a=this.resolveSpawn(i[0],t.team);Math.random()<.15&&t.squad&&t.squad.leader!==t?t.setLoadout(ga(t.cls)):t.setLoadout(t.loadout),t.spawn(a.x,a.y,a.z,a.yaw),t.brain.reset()}onShot(t,e){let i=e.stats,n=t===this.player,s=n&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new R),a=t.aimDir(new R);(!n||!this.playerCtl.isScoped())&&this.fx.muzzle(s.x,s.y,s.z,a.x,a.y,a.z,i.type==="lmg"||i.type==="sniper"?1.3:i.type==="pistol"||i.type==="smg"?.7:1,i.noFlash,n),this.audio.gunshot(i.suppressed?"suppressed":i.sound,t.pos.x,t.pos.y+1.5,t.pos.z,i.suppressed,n),n&&i.bolt&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5}),350),n&&i.pump&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5,rate:.8}),250);let r=i.suppressed?25:i.type==="sniper"||i.type==="lmg"?320:220;for(let l of this.teams[1-t.team])!l.brain||l.state!=="alive"||Math.abs(l.pos.x-t.pos.x)>r||Math.abs(l.pos.z-t.pos.z)>r||l.pos.distanceTo(t.pos)<r&&l.brain.onSound(t.pos.x,t.pos.z,t,!0)}onFootstep(t,e){let i=this.audio.listener;if(Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<40){let a=t.move.onTerrain,r=t.inWater?"stepWater":a?"stepGrass":"stepHard";t.isPlayer?this.audio.play2d(r,{vol:.16*e+.05,vary:.2}):this.audio.play3d(r,t.pos.x,t.pos.y,t.pos.z,{vol:.5*e,maxDist:30,ref:3,vary:.2})}let s=9+e*10;for(let a of this.teams[1-t.team])a.brain&&a.state==="alive"&&a.pos.distanceTo(t.pos)<s&&a.brain.onSound(t.pos.x,t.pos.z,t,!1)}onVault(t){t.isPlayer&&this.audio.play2d("stepHard",{vol:.35,rate:.7})}onReloadSound(t,e){t.isPlayer?this.audio.play2d(e,{vol:.5}):this.audio.play3d(e,t.pos.x,t.pos.y+1.2,t.pos.z,{vol:.5,maxDist:18})}onDryFire(t){t.isPlayer&&this.audio.play2d("dry",{vol:.5})}onSwitch(t){t.isPlayer&&this.audio.play2d("switch",{vol:.35})}onBandage(t){t.isPlayer&&this.audio.play2d("bandage",{vol:.5})}onGrenadeThrown(){}onGadgetFired(){}onSpawnPointPlaced(t){t.squad===this.player.squad&&this.hud.toast(`${t.owner.name} placed a ${t.type==="rally"?"rally point":"spawn beacon"}`)}onDamaged(t,e,i,n,s){t.brain&&t.brain.onDamaged(e,s),t===this.player&&(this.hud.damageFrom(s),this.audio.play2d("hurt",{vol:.5}),this.dmgFlash=Math.min(1,(this.dmgFlash||0)+i/50),t.pitch+=.012*Math.min(3,i/15),this.fx.shake(Math.min(.3,i/120)))}onHit(t,e,i,n,s){if(t!==this.player)return;let a=e.state!=="alive"&&s;this.hud.hit(a,n==="head"),this.settings.get("hitmarkerSound")&&this.audio.play2d(n==="head"?"headshot":"hit",{vol:n==="head"?.35:.45})}creditKill(t,e,i,n){if(!(!t||t===e||t.team===e.team)){t.stats.kills++,this.addScore(t,100,"ENEMY DOWN"),n&&this.addScore(t,25,"HEADSHOT");for(let s of this.mode.flags)if(Math.hypot(e.pos.x-s.x,e.pos.z-s.z)<s.r*1.5){this.addScore(t,25,s.owner===t.team?"FLAG DEFEND":"FLAG ATTACK");break}for(let[s,a]of e.damagers)s!==t&&s.team!==e.team&&a>=20&&(s.stats.assists++,this.addScore(s,50,"ASSIST"));t===this.player&&(this.audio.play2d("kill",{vol:.4}),this.hud.killBanner(e.name,n,e.state==="downed"))}}onDowned(t,e,i,n){this.hud.addKill(e,t,i,n,!0),this.creditKill(e,t,i,n),t.downCredited=!0,t===this.player&&(this.playerCtl.giveUpT=0,this.audio.play2d("heartbeat",{vol:.6}))}onKilled(t,e,i,n,s){if(s?e&&t.lastAttacker&&e!==t&&i!=="Bled out"&&i!=="Gave up"&&i!=="Redeploy"&&this.hud.addKill(e,t,i,n,!1):(this.hud.addKill(e,t,i,n,!1),this.creditKill(e,t,i,n)),this.mode.onDeath(t.team),e&&e.team!==t.team&&this.mode.type==="tdm"&&this.mode.onKill(e.team),t.reviver&&(t.reviver=null),t.downCredited=!1,t.respawnAt=this.time+(t.isPlayer?7:q(7,10)),t===this.player){let a=e&&e!==t?e:null;this.lastDeath={killer:a?a.name:null,weapon:i,head:n,dist:a?a.pos.distanceTo(t.pos):0},this.respawnAt=this.time+(i==="Redeploy"?1:7),this.deathT=0,this.deathPos=t.pos.clone(),this.killerRef=a,this.app.unlockPointer(),setTimeout(()=>{this.player.state==="dead"&&!this.ended&&this.menus.showDeploy(this)},i==="Redeploy"?50:1800)}}onRevived(t,e){e&&(e.stats.revives++,this.addScore(e,75,"REVIVE"),this.hud.addRevive(e,t)),t.reviver=null,t===this.player&&this.hud.toast(`Revived by ${e?e.name:"a teammate"}`)}reviveTick(t,e,i){if(e.state!=="downed"||t.state!=="alive"){t.reviveProgress=0;return}e.reviver=t,t.reviveProgress+=i/(t.isMedic?1.8:4.5),t.reviveProgress>=1&&(t.reviveProgress=0,e.revive(t))}onFlagEvent(t,e,i,n){let s=this.player,a=i===s.team;if(e==="captured"){this.hud.toast(`${a?"We captured":"Enemy captured"} ${t.id} \xB7 ${t.name}`,3),this.audio.play2d(a?"capture":"lost",{vol:.5});for(let r of this.teams[i])r.state==="alive"&&Math.hypot(r.pos.x-t.x,r.pos.z-t.z)<t.r&&(r.stats.caps++,this.addScore(r,150,"FLAG CAPTURED"))}else if(e==="neutralized"){n===s.team&&(this.hud.toast(`We lost ${t.id} \xB7 ${t.name}`,3),this.audio.play2d("lost",{vol:.4}));for(let r of this.teams[i])r.state==="alive"&&Math.hypot(r.pos.x-t.x,r.pos.z-t.z)<t.r&&this.addScore(r,75,"FLAG NEUTRALIZED")}}onMatchEnd(t){this.ended=!0,this.app.unlockPointer(),setTimeout(()=>{this.hud.setVisible(!1),this.menus.showEnd(this,t)},2500)}addScore(t,e,i){t.stats.score+=e,t===this.player&&this.hud.scorePopup(i,e)}update(t){if(this.paused)return;this.time+=t,this.frame++,Vi.uTime.value+=t;let e=this.player;this.playerCtl.update(t);for(let i of this.soldiers){if(i.state==="dead"){!i.isPlayer&&this.time>=i.respawnAt&&!this.ended&&this.botSpawn(i),i.updateVitals(t,this.time);continue}if(i.brain&&i.brain.update(t),i.state==="alive"){let n=t>.034?2:1;for(let s=0;s<n;s++)i.updateMovement(t/n);i.updateWeapon(t,this.time)}else i.state==="downed"&&(i.vel.x*=.8,i.vel.z*=.8,i.vel.y-=20*t,this.world.collision.move(i.pos,i.vel,t,.3,.6,.3,i.move));i.updateVitals(t,this.time),this.checkBounds(i,t)}this.combat.update(t),this.mode.update(t),this.squads.update(t),this.ai.update(),this.def.weather==="snow"&&this.updateSnow(t),this.fx.update(t),this.world.updateFlags(this.mode,this.time);for(let i of this.soldiers)i.updateAnim(t,this.camera.position);this.updateCamera(t),this.dmgFlash=Math.max(0,(this.dmgFlash||0)-t*1.5),this.ended||(this.hud.update(t),e.state==="dead"&&this.menus.updateDeploy(this))}updateSnow(t){let e=this.camera.position,i=this.fx;for(this.snowAcc=(this.snowAcc||0)+t*120*i.q;this.snowAcc>=1;){this.snowAcc-=1;let n=e.x+(Math.random()-.5)*50,s=e.z+(Math.random()-.5)*50;i.smoke.emit(n,e.y+6+Math.random()*10,s,.7+Math.random()*.4,-1.6-Math.random()*.6,.3,6.5,.07,.07,[1,1,1,.9],[1,1,1,.85],0,0,1)}}simulate(t,e=1/30){let i=Math.round(t/e);for(let n=0;n<i;n++)this.update(e)}checkBounds(t,e){let i=this.def.playHalf,n=this.def.hq[1-t.team],s=Math.abs(t.pos.x)>i||Math.abs(t.pos.z)>i||Math.hypot(t.pos.x-n.x,t.pos.z-n.z)<n.r;t===this.player?s&&t.state==="alive"?(this.oobTime<=0&&(this.oobTime=10),this.oobTime-=e,this.oobTime<=.01&&(this.oobTime=0,t.die(null,"Deserted",!1,!1))):this.oobTime=0:s&&t.state==="alive"?(t.oob=(t.oob||0)+e,t.oob>12&&(t.oob=0,t.die(null,"Deserted",!1,!1))):t.oob=0}updateCamera(t){let e=this.player,i=this.camera;if(e.state!=="dead"){this.playerCtl.updateCamera(t),this.audio.setListener(i.position.x,i.position.y,i.position.z,-Math.sin(e.yaw),-Math.cos(e.yaw));return}if(this.deathT=(this.deathT||0)+t,this.deathT<1.8&&this.deathPos){let n=this.killerRef,s=n?n.pos:this.deathPos,a=this.deathPos.clone().add(new R(0,2.5+this.deathT*1.5,0));i.position.lerp(a,1-Math.exp(-t*4)),i.lookAt(s.x,s.y+1.2,s.z)}else{let n=this.menus.selectedSpawn,s=n?new R(n.x,this.world.terrain.heightAt(n.x,n.z),n.z):new R(0,0,0);this.deployCam.a+=t*.08;let a=70,r=new R(s.x+Math.cos(this.deployCam.a)*a,s.y+55,s.z+Math.sin(this.deployCam.a)*a);this.deployCamInit||(i.position.copy(r),this.deployCamInit=!0),i.position.lerp(r,1-Math.exp(-t*1.5)),i.lookAt(s)}i.fov=60,i.updateProjectionMatrix(),i.updateMatrixWorld(),this.playerCtl.vmRoot.visible=!1,this.audio.setListener(i.position.x,i.position.y,i.position.z,0,-1)}render(t){let e=this.camera;if(this.env.update(e.position),this.grass.update(e.position),this.frame%30===0&&this.fx.setLighting(this.env),this.water){this.water.update(this.env);let a=this.renderer.getDrawingBufferSize(new lt);this.water.renderReflection(this.renderer,this.scene,e,a.x,a.y)}let i=this.player,n=60;if(i.state==="alive"&&i.adsT>.3){let a=i.eye(new R),r=i.aimDir(new R),l=this.world.collision.raycast(a.x,a.y,a.z,r.x,r.y,r.z,300,{});n=l?l.t:300}let s=this.playerCtl.isScoped();this.post.render(t,{damage:Ft(this.dmgFlash||0,0,1)*.8+(i.state==="alive"&&i.hp<35?(35-i.hp)/35*.5:0),suppress:i.state==="alive"?i.suppression:0,flash:i.flashed>.6?(i.flashed-.6)*2.5:0,downed:i.state==="downed"?.6+.4*(1-i.downedHp/100):0,ads:i.state==="alive"&&!s?i.adsT*(i.gun&&i.gun.stats.zoom>1.2?1:.6):0,focus:n,menu:i.state==="dead"&&this.deathT>1.8||this.paused||this.ended})}dispose(){this.audio.stopAmbience(),this.hud.dispose(),this.playerCtl.dispose(),this.env.dispose(),this.post.composer.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.settings.listeners=this.settings.listeners.filter(t=>t!==this.unsub)}};var Zh=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new Ls({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=Yn,this.renderer.outputColorSpace=Te,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oh,this.settings=la,this.audio=new ca,this.input=new ha(this.canvas),this.params=new URLSearchParams(location.search),this.params.get("test")&&(this.input.allowUnlocked=!0),this.params.get("preset")&&la.set("preset",this.params.get("preset")),this.menus=new Ta(this),this.matchConfig={map:this.params.get("map")||"ironworks",mode:this.params.get("mode")||"conquest",time:this.params.get("time")||"default",team:0,tickets:0,name:"You"},this.game=null,this.last=performance.now(),window.addEventListener("resize",()=>this.resize());let t=()=>this.audio.unlock();window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),this.input.onLockChange=e=>{e||(this.lastUnlock=performance.now()),!e&&this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&!this.input.allowUnlocked&&this.pause()},window.addEventListener("keydown",e=>{e.code!=="Escape"||!this.game||this.game.ended||performance.now()-(this.lastUnlock||0)<400||(this.game.paused?this.resume():this.game.player.state!=="dead"&&this.pause())}),this.canvas.addEventListener("click",()=>{this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&this.lockPointer()}),this.resize(),this.menus.showMain(),requestAnimationFrame(e=>this.loop(e)),this.params.get("autostart")&&this.startMatch().then(()=>{this.params.get("autodeploy")&&setTimeout(()=>this.autoDeploy(),300)})}autoDeploy(){let t=this.game;t&&(this.menus.showDeploy(t),t.respawnAt=0,this.menus.updateDeploy(t),this.menus.tryDeploy())}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2)*la.get("renderScale");this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.game&&this.game.resize(t,e)}lockPointer(){this.input.allowUnlocked||this.input.lock()}unlockPointer(){this.input.unlock()}async startMatch(){this.audio.unlock(),this.game&&(this.game.dispose(),this.game=null),this.menus.showLoading("Preparing",0);let t=Object.assign({},this.matchConfig),e=new el(this,t);try{await e.init((i,n)=>this.menus.showLoading(i,n))}catch(i){throw console.error(i),this.menus.showLoading("Failed to load: "+i.message,0),i}this.game=e,window.__fireline={app:this,game:e},this.resize(),this.menus.hideAll(),this.menus.showDeploy(e),this.last=performance.now()}quitMatch(){this.game&&(this.game.dispose(),this.game=null),this.unlockPointer(),this.menus.showMain()}pause(){this.game&&(this.game.paused=!0,this.unlockPointer(),this.menus.showPause(this.game))}resume(){this.game&&(this.game.paused=!1,this.menus.hideAll(),this.game.player.state==="dead"?this.menus.showDeploy(this.game):this.lockPointer())}loop(t){if(requestAnimationFrame(n=>this.loop(n)),this.halt){this.last=t;return}let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.05);let i=this.game;if(i)try{i.update(e),i.render(e)}catch(n){console.error(n),this.showError(n)}else{if(!this.showcase)try{this.showcase=new wa(this.renderer)}catch(s){console.error(s),this.showcase=!1}let n=this.menus.screens.loading&&this.menus.screens.loading.style.display!=="none";this.showcase&&!n?this.showcase.render(e,window.innerWidth,window.innerHeight):(this.renderer.setClearColor(724498,1),this.renderer.clear())}this.input.endFrame()}showError(t){if(this.errShown)return;this.errShown=!0;let e=document.createElement("div");e.className="errbox",e.textContent="Error: "+(t&&t.message?t.message:t),document.body.appendChild(e)}};window.addEventListener("DOMContentLoaded",()=>{window.fireline=new Zh});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
