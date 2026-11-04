(()=>{var Gc="170";var mf=0,Fh=1,gf=2;var ju=1,Wc=2,Wi=3,Ii=0,Ve=1,Fe=2,be=0,hn=1,Zi=2,Oh=3,Bh=4,qc=5,hi=100,vf=101,xf=102,yf=103,_f=104,Rs=200,Mf=201,bf=202,wf=203,_l=204,Ml=205,qo=206,Sf=207,Xo=208,Tf=209,Ef=210,Af=211,Cf=212,Rf=213,Pf=214,bl=0,wl=1,Sl=2,gs=3,Tl=4,El=5,Al=6,Cl=7,Ku=0,Df=1,If=2,un=0,Xc=1,Yc=2,$c=3,mr=4,Lf=5,Zc=6,jc=7;var Ju=300,vs=301,xs=302,Rl=303,Pl=304,Yo=306,wi=1e3,zn=1001,Dl=1002,Ee=1003,Uf=1004;var Nr=1005;var qe=1006,Ha=1007;var Xi=1008;var si=1009,Qu=1010,td=1011,sr=1012,Kc=1013,Nn=1014,Di=1015,_e=1016,Jc=1017,Qc=1018,dn=1020,ed=35902,id=1021,nd=1022,ni=1023,sd=1024,rd=1025,fs=1026,fn=1027,Ps=1028,th=1029,od=1030,eh=1031;var ih=1033,ho=33776,uo=33777,fo=33778,po=33779,Il=35840,Ll=35841,Ul=35842,zl=35843,Nl=36196,kl=37492,Fl=37496,Ol=37808,Bl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,ql=37814,Xl=37815,Yl=37816,$l=37817,Zl=37818,jl=37819,Kl=37820,Jl=37821,mo=36492,Ql=36494,tc=36495,ad=36283,ec=36284,ic=36285,nc=36286;var go=2300,sc=2301,Va=2302,Hh=2400,Vh=2401,Gh=2402;var zf=3200,nh=3201;var sh=0,Nf=1,cn="",Le="srgb",Ds="srgb-linear",$o="linear",re="srgb";var Zn=7680;var Wh=519,kf=512,Ff=513,Of=514,ld=515,Bf=516,Hf=517,Vf=518,Gf=519,qh=35044,Vn=35048;var Xh="300 es",Yi=2e3,vo=2001,pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,Js=Math.PI/180,ys=180/Math.PI;function Gn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[r&255]+Be[r>>8&255]+Be[r>>16&255]+Be[r>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Ue(r,t,e){return Math.max(t,Math.min(e,r))}function rh(r,t){return(r%t+t)%t}function Wf(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function qf(r,t,e){return r!==t?(e-r)/(t-r):0}function Qs(r,t,e){return(1-e)*r+e*t}function Xf(r,t,e,i){return Qs(r,t,1-Math.exp(-e*i))}function Yf(r,t=1){return t-Math.abs(rh(r,t*2)-t)}function $f(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Zf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function jf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Kf(r,t){return r+Math.random()*(t-r)}function Jf(r){return r*(.5-Math.random())}function Qf(r){r!==void 0&&(Yh=r);let t=Yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tp(r){return r*Js}function ep(r){return r*ys}function ip(r){return(r&r-1)===0&&r!==0}function np(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rp(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function hs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var cd={DEG2RAD:Js,RAD2DEG:ys,generateUUID:Gn,clamp:Ue,euclideanModulo:rh,mapLinear:Wf,inverseLerp:qf,lerp:Qs,damp:Xf,pingpong:Yf,smoothstep:$f,smootherstep:Zf,randInt:jf,randFloat:Kf,randFloatSpread:Jf,seededRandom:Qf,degToRad:tp,radToDeg:ep,isPowerOfTwo:ip,ceilPowerOfTwo:np,floorPowerOfTwo:sp,setQuaternionFromProperEuler:rp,normalize:Ge,denormalize:hs},nt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],v=n[0],g=n[3],m=n[6],y=n[1],x=n[4],_=n[7],A=n[2],S=n[5],w=n[8];return s[0]=a*v+o*y+l*A,s[3]=a*g+o*x+l*S,s[6]=a*m+o*_+l*w,s[1]=c*v+h*y+u*A,s[4]=c*g+h*x+u*S,s[7]=c*m+h*_+u*w,s[2]=d*v+f*y+p*A,s[5]=d*g+f*x+p*S,s[8]=d*m+f*_+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=d*v,t[4]=(h*e-n*l)*v,t[5]=(n*s-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ga=new Yt;function hd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function op(){let r=xo("canvas");return r.style.display="block",r}var $h={};function js(r){r in $h||($h[r]=!0,console.warn(r))}function ap(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function lp(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cn?$o:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Zh=[.64,.33,.3,.6,.15,.06],jh=[.2126,.7152,.0722],Kh=[.3127,.329],Jh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Ds]:{primaries:Zh,whitePoint:Kh,transfer:$o,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:jh,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Zh,whitePoint:Kh,transfer:re,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:jh,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});var jn,rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=xo("canvas")),jn.width=t.width,jn.height=t.height;let i=jn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($i(e[i]/255)*255):e[i]=$i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hp=0,yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Wa(n[a].image)):s.push(Wa(n[a]))}else s=Wa(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,je=class r extends pn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=zn,n=zn,s=qe,a=Xi,o=ni,l=si,c=r.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Gn(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wi:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wi:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Ju;je.DEFAULT_ANISOTROPY=1;var ie=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,_=(f+1)/2,A=(m+1)/2,S=(h+d)/4,w=(u+v)/4,P=(p+g)/4;return x>_&&x>A?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=S/i,s=w/i):_>A?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=S/n,s=P/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=w/s,n=P/s),this.set(i,n,s,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new je(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},me=class extends oc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_o=class extends je{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends je{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ae=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let A=Math.sqrt(x),S=Math.atan2(A,m*y);g=Math.sin(g*S)/A,o=Math.sin(o*S)/A}let _=o*y;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+v*_,g===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new C,tu=new Ae,Si=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yi):yi.fromBufferAttribute(s,a),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Fr.subVectors(this.max,Gs),Kn.subVectors(t.a,Gs),Jn.subVectors(t.b,Gs),Qn.subVectors(t.c,Gs),nn.subVectors(Jn,Kn),sn.subVectors(Qn,Jn),En.subVectors(Kn,Qn);let e=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-En.z,En.y,nn.z,0,-nn.x,sn.z,0,-sn.x,En.z,0,-En.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-En.y,En.x,0];return!Xa(e,Kn,Jn,Qn,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Kn,Jn,Qn,Fr))?!1:(Or.crossVectors(nn,sn),e=[Or.x,Or.y,Or.z],Xa(e,Kn,Jn,Qn,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Oi=[new C,new C,new C,new C,new C,new C,new C,new C],yi=new C,kr=new Si,Kn=new C,Jn=new C,Qn=new C,nn=new C,sn=new C,En=new C,Gs=new C,Fr=new C,Or=new C,An=new C;function Xa(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){An.fromArray(r,s);let o=n.x*Math.abs(An.x)+n.y*Math.abs(An.y)+n.z*Math.abs(An.z),l=t.dot(An),c=e.dot(An),h=i.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dp=new Si,Ws=new C,Ya=new C,mn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):dp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ws,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Ya)),this.expandByPoint(Ws.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new C,$a=new C,Br=new C,rn=new C,Za=new C,Hr=new C,ja=new C,Mo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){$a.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),rn.copy(this.origin).sub($a);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Br),o=rn.dot(this.direction),l=-rn.dot(Br),c=rn.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy($a).addScaledVector(Br,d),f}intersectSphere(t,e){Bi.subVectors(t.center,this.origin);let i=Bi.dot(this.direction),n=Bi.dot(Bi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,i,n,s){Za.subVectors(e,t),Hr.subVectors(i,t),ja.crossVectors(Za,Hr);let a=this.direction.dot(ja),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rn.subVectors(this.origin,t);let l=o*this.direction.dot(Hr.crossVectors(rn,Hr));if(l<0)return null;let c=o*this.direction.dot(Za.cross(rn));if(c<0||l+c>a)return null;let h=-o*rn.dot(ja);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,v,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,v,g)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ts.setFromMatrixColumn(t,0).length(),s=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,pp)}lookAt(t,e,i){let n=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),on.crossVectors(i,ei),on.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),on.crossVectors(i,ei)),on.normalize(),Vr.crossVectors(ei,on),n[0]=on.x,n[4]=Vr.x,n[8]=ei.x,n[1]=on.y,n[5]=Vr.y,n[9]=ei.y,n[2]=on.z,n[6]=Vr.z,n[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],y=i[3],x=i[7],_=i[11],A=i[15],S=n[0],w=n[4],P=n[8],b=n[12],M=n[1],T=n[5],D=n[9],L=n[13],z=n[2],F=n[6],O=n[10],Z=n[14],V=n[3],Q=n[7],K=n[11],ht=n[15];return s[0]=a*S+o*M+l*z+c*V,s[4]=a*w+o*T+l*F+c*Q,s[8]=a*P+o*D+l*O+c*K,s[12]=a*b+o*L+l*Z+c*ht,s[1]=h*S+u*M+d*z+f*V,s[5]=h*w+u*T+d*F+f*Q,s[9]=h*P+u*D+d*O+f*K,s[13]=h*b+u*L+d*Z+f*ht,s[2]=p*S+v*M+g*z+m*V,s[6]=p*w+v*T+g*F+m*Q,s[10]=p*P+v*D+g*O+m*K,s[14]=p*b+v*L+g*Z+m*ht,s[3]=y*S+x*M+_*z+A*V,s[7]=y*w+x*T+_*F+A*Q,s[11]=y*P+x*D+_*O+A*K,s[15]=y*b+x*L+_*Z+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+v*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],y=u*g*c-v*d*c+v*l*f-o*g*f-u*l*m+o*d*m,x=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,_=h*v*c-p*u*c+p*o*f-a*v*f-h*o*m+a*u*m,A=p*u*l-h*v*l-p*o*d+a*v*d+h*o*g-a*u*g,S=e*y+i*x+n*_+s*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=y*w,t[1]=(v*d*s-u*g*s-v*n*f+i*g*f+u*n*m-i*d*m)*w,t[2]=(o*g*s-v*l*s+v*n*c-i*g*c-o*n*m+i*l*m)*w,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*w,t[4]=x*w,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*w,t[6]=(p*l*s-a*g*s-p*n*c+e*g*c+a*n*m-e*l*m)*w,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*w,t[8]=_*w,t[9]=(p*u*s-h*v*s-p*i*f+e*v*f+h*i*m-e*u*m)*w,t[10]=(a*v*s-p*o*s+p*i*c-e*v*c-a*i*m+e*o*m)*w,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*w,t[12]=A*w,t[13]=(h*v*n-p*u*n+p*i*d-e*v*d-h*i*g+e*u*g)*w,t[14]=(p*o*n-a*v*n-p*i*l+e*v*l+a*i*g-e*o*g)*w,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,v=a*h,g=a*u,m=o*u,y=l*c,x=l*h,_=l*u,A=i.x,S=i.y,w=i.z;return n[0]=(1-(v+m))*A,n[1]=(f+_)*A,n[2]=(p-x)*A,n[3]=0,n[4]=(f-_)*S,n[5]=(1-(d+m))*S,n[6]=(g+y)*S,n[7]=0,n[8]=(p+x)*w,n[9]=(g-y)*w,n[10]=(1-(d+v))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=ts.set(n[0],n[1],n[2]).length(),a=ts.set(n[4],n[5],n[6]).length(),o=ts.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],_i.copy(this);let c=1/s,h=1/a,u=1/o;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,e.setFromRotationMatrix(_i),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Yi){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(o===Yi)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===vo)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Yi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,p,v;if(o===Yi)p=(a+s)*u,v=-2*u;else if(o===vo)p=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ts=new C,_i=new Tt,fp=new C(0,0,0),pp=new C(1,1,1),on=new C,Vr=new C,ei=new C,eu=new Tt,iu=new Ae,Ke=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mp=0,nu=new C,es=new Ae,Hi=new Tt,Gr=new C,qs=new C,gp=new C,vp=new Ae,su=new C(1,0,0),ru=new C(0,1,0),ou=new C(0,0,1),au={type:"added"},xp={type:"removed"},is={type:"childadded",child:null},Ka={type:"childremoved",child:null},ze=class r extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new C,e=new Ke,i=new Ae,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Yt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return nu.copy(t).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(qs,Gr,this.up):Hi.lookAt(Gr,qs,this.up),this.quaternion.setFromRotationMatrix(Hi),n&&(Hi.extractRotation(n.matrixWorld),es.setFromRotationMatrix(Hi),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(au),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(au),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ze.DEFAULT_UP=new C(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new C,Vi=new C,Ja=new C,Gi=new C,ns=new C,ss=new C,lu=new C,Qa=new C,tl=new C,el=new C,il=new ie,nl=new ie,sl=new ie,Ln=class r{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Mi.subVectors(t,e),n.cross(Mi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Mi.subVectors(n,e),Vi.subVectors(i,e),Ja.subVectors(t,e);let a=Mi.dot(Mi),o=Mi.dot(Vi),l=Mi.dot(Ja),c=Vi.dot(Vi),h=Vi.dot(Ja),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return il.setScalar(0),nl.setScalar(0),sl.setScalar(0),il.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,i),sl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(il,s.x),a.addScaledVector(nl,s.y),a.addScaledVector(sl,s.z),a}static isFrontFacing(t,e,i,n){return Mi.subVectors(i,e),Vi.subVectors(t,e),Mi.cross(Vi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),Mi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ns.subVectors(n,i),ss.subVectors(s,i),Qa.subVectors(t,i);let l=ns.dot(Qa),c=ss.dot(Qa);if(l<=0&&c<=0)return e.copy(i);tl.subVectors(t,n);let h=ns.dot(tl),u=ss.dot(tl);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ns,a);el.subVectors(t,s);let f=ns.dot(el),p=ss.dot(el);if(p>=0&&f<=p)return e.copy(s);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(ss,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return lu.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(lu,o);let m=1/(g+v+d);return a=v*m,o=d*m,e.copy(i).addScaledVector(ns,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function rl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Kt.workingColorSpace){if(t=rh(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=rl(a,s,t+1/3),this.g=rl(a,s,t),this.b=rl(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,n),this}setStyle(t,e=Le){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let i=ud[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Kt.fromWorkingColorSpace(He.copy(this),t),Math.round(Ue(He.r*255,0,255))*65536+Math.round(Ue(He.g*255,0,255))*256+Math.round(Ue(He.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(He.copy(this),e);let i=He.r,n=He.g,s=He.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Le){Kt.fromWorkingColorSpace(He.copy(this),t);let e=He.r,i=He.g,n=He.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(Wr);let i=Qs(an.h,Wr.h,e),n=Qs(an.s,Wr.s,e),s=Qs(an.l,Wr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new dt;dt.NAMES=ud;var yp=0,ji=class extends pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Gn(),this.name="",this.blending=hn,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=Ml,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hn&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==Ml&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Li=class extends ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qi=_p();function _p(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Mp(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ue(r,-65504,65504),qi.floatView[0]=r;let t=qi.uint32View[0],e=t>>23&511;return qi.baseTable[e]+((t&8388607)>>qi.shiftTable[e])}function bp(r){let t=r>>10;return qi.uint32View[0]=qi.mantissaTable[qi.offsetTable[t]+(r&1023)]+qi.exponentTable[t],qi.floatView[0]}var dd={toHalfFloat:Mp,fromHalfFloat:bp},we=new C,qr=new nt,fe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qh&&(t.usage=this.usage),t}};var wo=class extends fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var So=class extends fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},wp=0,ci=new Tt,ol=new ze,rs=new C,ii=new Si,Xs=new Si,Ie=new C,ye=class r extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?So:wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(i,3))}else{for(let i=0,n=e.count;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(ii.min,Xs.min),ii.expandByPoint(Ie),Ie.addVectors(ii.max,Xs.max),ii.expandByPoint(Ie)):(ii.expandByPoint(Xs.min),ii.expandByPoint(Xs.max))}ii.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ie.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ie));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Ie.add(rs)),n=Math.max(n,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new nt,f=new nt,p=new nt,v=new C,g=new C;function m(P,b,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let T=1/(f.x*p.y-p.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(T),o[P].add(v),o[b].add(v),o[M].add(v),l[P].add(g),l[b].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){let M=y[P],T=M.start,D=M.count;for(let L=T,z=T+D;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let x=new C,_=new C,A=new C,S=new C;function w(P){A.fromBufferAttribute(n,P),S.copy(A);let b=o[P];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(S,b);let T=_.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,b=y.length;P<b;++P){let M=y[P],T=M.start,D=M.count;for(let L=T,z=T+D;L<z;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cu=new Tt,Cn=new Mo,Xr=new mn,hu=new C,Yr=new C,$r=new C,Zr=new C,al=new C,jr=new C,uu=new C,Kr=new C,$t=class extends ze{constructor(t=new ye,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){jr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(al.fromBufferAttribute(u,t),a?jr.addScaledVector(al,h):jr.addScaledVector(al.sub(e),h))}e.add(jr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Cn.copy(t.ray).recast(t.near),!(Xr.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Xr,hu)===null||Cn.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(s).invert(),Cn.copy(t.ray).applyMatrix4(cu),!(i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){let S=o.getX(_),w=o.getX(_+1),P=o.getX(_+2);n=Jr(this,m,t,i,c,h,u,S,w,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);n=Jr(this,a,t,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){let S=_,w=_+1,P=_+2;n=Jr(this,m,t,i,c,h,u,S,w,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let y=g,x=g+1,_=g+2;n=Jr(this,a,t,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Sp(r,t,e,i,n,s,a,o){let l;if(t.side===Ve?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Ii,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:r}}function Jr(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Yr),r.getVertexPosition(l,$r),r.getVertexPosition(c,Zr);let h=Sp(r,t,e,i,Yr,$r,Zr,uu);if(h){let u=new C;Ln.getBarycoord(uu,Yr,$r,Zr,u),n&&(h.uv=Ln.getInterpolatedAttribute(n,o,l,c,u,new nt)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,o,l,c,u,new nt)),a&&(h.normal=Ln.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Ln.getNormal(Yr,$r,Zr,d.normal),h.face=d,h.barycoord=u}return h}var ri=class r extends ye{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function p(v,g,m,y,x,_,A,S,w,P,b){let M=_/w,T=A/P,D=_/2,L=A/2,z=S/2,F=w+1,O=P+1,Z=0,V=0,Q=new C;for(let K=0;K<O;K++){let ht=K*T-L;for(let wt=0;wt<F;wt++){let Ft=wt*M-D;Q[v]=Ft*y,Q[g]=ht*x,Q[m]=z,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[m]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(wt/w),u.push(1-K/P),Z+=1}}for(let K=0;K<P;K++)for(let ht=0;ht<w;ht++){let wt=d+ht+F*K,Ft=d+ht+F*(K+1),Y=d+(ht+1)+F*(K+1),ot=d+(ht+1)+F*K;l.push(wt,Ft,ot),l.push(Ft,Y,ot),V+=6}o.addGroup(f,V,b),f+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function We(r){let t={};for(let e=0;e<r.length;e++){let i=_s(r[e]);for(let n in i)t[n]=i[n]}return t}function Tp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function fd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Ne={clone:_s,merge:We},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},To=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ln=new C,du=new nt,fu=new nt,Se=class extends To{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ln.x,ln.y).multiplyScalar(-t/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ln.x,ln.y).multiplyScalar(-t/ln.z)}getViewSize(t,e){return this.getViewBounds(t,du,fu),e.subVectors(fu,du)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},os=-90,as=1,lc=class extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Se(os,as,t,e);n.layers=this.layers,this.add(n);let s=new Se(os,as,t,e);s.layers=this.layers,this.add(s);let a=new Se(os,as,t,e);a.layers=this.layers,this.add(a);let o=new Se(os,as,t,e);o.layers=this.layers,this.add(o);let l=new Se(os,as,t,e);l.layers=this.layers,this.add(l);let c=new Se(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Eo=class extends je{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cc=class extends me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Eo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ri(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:be});s.uniforms.tEquirect.value=e;let a=new $t(n,s),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=qe),new lc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},ll=new C,Cp=new C,Rp=new Yt,bi=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ll.subVectors(i,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ll),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Rp.getNormalMatrix(t),n=this.coplanarPoint(ll).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rn=new mn,Qr=new C,rr=class{constructor(t=new bi,e=new bi,i=new bi,n=new bi,s=new bi,a=new bi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],v=n[10],g=n[11],m=n[12],y=n[13],x=n[14],_=n[15];if(i[0].setComponents(l-s,d-c,g-f,_-m).normalize(),i[1].setComponents(l+s,d+c,g+f,_+m).normalize(),i[2].setComponents(l+a,d+h,g+p,_+y).normalize(),i[3].setComponents(l-a,d-h,g-p,_-y).normalize(),i[4].setComponents(l-o,d-u,g-v,_-x).normalize(),e===Yi)i[5].setComponents(l+o,d+u,g+v,_+x).normalize();else if(e===vo)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Qr.x=n.normal.x>0?t.max.x:t.min.x,Qr.y=n.normal.y>0?t.max.y:t.min.y,Qr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pd(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Pp(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Je=class r extends ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let y=m*d-a;for(let x=0;x<c;x++){let _=x*u-s;p.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let x=y+c*m,_=y+c*(m+1),A=y+1+c*(m+1),S=y+1+c*m;f.push(x,_,S),f.push(_,A,S)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,R0=`struct PhysicalMaterial {
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
}`,P0=`
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Om=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,$m=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,jm=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,tg=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,ig=`#define TOON
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
}`,ng=`#define TOON
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,ag=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Dp,alphahash_pars_fragment:Ip,alphamap_fragment:Lp,alphamap_pars_fragment:Up,alphatest_fragment:zp,alphatest_pars_fragment:Np,aomap_fragment:kp,aomap_pars_fragment:Fp,batching_pars_vertex:Op,batching_vertex:Bp,begin_vertex:Hp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:qp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Zp,color_fragment:jp,color_pars_fragment:Kp,color_pars_vertex:Jp,color_vertex:Qp,common:t0,cube_uv_reflection_fragment:e0,defaultnormal_vertex:i0,displacementmap_pars_vertex:n0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:w0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:v0,gradientmap_pars_fragment:x0,lightmap_pars_fragment:y0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:M0,lights_pars_begin:b0,lights_toon_fragment:S0,lights_toon_pars_fragment:T0,lights_phong_fragment:E0,lights_phong_pars_fragment:A0,lights_physical_fragment:C0,lights_physical_pars_fragment:R0,lights_fragment_begin:P0,lights_fragment_maps:D0,lights_fragment_end:I0,logdepthbuf_fragment:L0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:N0,map_fragment:k0,map_pars_fragment:F0,map_particle_fragment:O0,map_particle_pars_fragment:B0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:q0,morphtarget_pars_vertex:X0,morphtarget_vertex:Y0,normal_fragment_begin:$0,normal_fragment_maps:Z0,normal_pars_fragment:j0,normal_pars_vertex:K0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:im,iridescence_pars_fragment:nm,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:vm,skinning_vertex:xm,skinnormal_vertex:ym,specularmap_fragment:_m,specularmap_pars_fragment:Mm,tonemapping_fragment:bm,tonemapping_pars_fragment:wm,transmission_fragment:Sm,transmission_pars_fragment:Tm,uv_pars_fragment:Em,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Dm,backgroundCube_vert:Im,backgroundCube_frag:Lm,cube_vert:Um,cube_frag:zm,depth_vert:Nm,depth_frag:km,distanceRGBA_vert:Fm,distanceRGBA_frag:Om,equirect_vert:Bm,equirect_frag:Hm,linedashed_vert:Vm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:qm,meshlambert_vert:Xm,meshlambert_frag:Ym,meshmatcap_vert:$m,meshmatcap_frag:Zm,meshnormal_vert:jm,meshnormal_frag:Km,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:tg,meshphysical_frag:eg,meshtoon_vert:ig,meshtoon_frag:ng,points_vert:sg,points_frag:rg,shadow_vert:og,shadow_frag:ag,sprite_vert:lg,sprite_frag:cg},mt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Pi={basic:{uniforms:We([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:We([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:We([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:We([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:We([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:We([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:We([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:We([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:We([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:We([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:We([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:We([mt.common,mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:We([mt.lights,mt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Pi.physical={uniforms:We([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var to={r:0,b:0,g:0},Pn=new Ke,hg=new Tt;function ug(r,t,e,i,n,s,a){let o=new dt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1,_=p(y);_===null?m(o,l):_&&_.isColor&&(m(_,1),x=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,x){let _=p(x);_&&(_.isCubeTexture||_.mapping===Yo)?(h===void 0&&(h=new $t(new ri(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:_s(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Pn.copy(x.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(Pn)),h.material.toneMapped=Kt.getTransfer(_.colorSpace)!==re,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new $t(new Je(2,2),new Jt({name:"BackgroundMaterial",uniforms:_s(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(to,fd(r)),i.buffers.color.setClear(to.r,to.g,to.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:g}}function dg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(M,T,D,L,z){let F=!1,O=u(L,D,T);s!==O&&(s=O,c(s.object)),F=f(M,L,D,z),F&&p(M,L,D,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,_(M,T,D,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,T,D){let L=D.wireframe===!0,z=i[M.id];z===void 0&&(z={},i[M.id]=z);let F=z[T.id];F===void 0&&(F={},z[T.id]=F);let O=F[L];return O===void 0&&(O=d(l()),F[L]=O),O}function d(M){let T=[],D=[],L=[];for(let z=0;z<e;z++)T[z]=0,D[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,T,D,L){let z=s.attributes,F=T.attributes,O=0,Z=D.getAttributes();for(let V in Z)if(Z[V].location>=0){let K=z[V],ht=F[V];if(ht===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),K===void 0||K.attribute!==ht||ht&&K.data!==ht.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function p(M,T,D,L){let z={},F=T.attributes,O=0,Z=D.getAttributes();for(let V in Z)if(Z[V].location>=0){let K=F[V];K===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));let ht={};ht.attribute=K,K&&K.data&&(ht.data=K.data),z[V]=ht,O++}s.attributes=z,s.attributesNum=O,s.index=L}function v(){let M=s.newAttributes;for(let T=0,D=M.length;T<D;T++)M[T]=0}function g(M){m(M,0)}function m(M,T){let D=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;D[M]=1,L[M]===0&&(r.enableVertexAttribArray(M),L[M]=1),z[M]!==T&&(r.vertexAttribDivisor(M,T),z[M]=T)}function y(){let M=s.newAttributes,T=s.enabledAttributes;for(let D=0,L=T.length;D<L;D++)T[D]!==M[D]&&(r.disableVertexAttribArray(D),T[D]=0)}function x(M,T,D,L,z,F,O){O===!0?r.vertexAttribIPointer(M,T,D,z,F):r.vertexAttribPointer(M,T,D,L,z,F)}function _(M,T,D,L){v();let z=L.attributes,F=D.getAttributes(),O=T.defaultAttributeValues;for(let Z in F){let V=F[Z];if(V.location>=0){let Q=z[Z];if(Q===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){let K=Q.normalized,ht=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;let Ft=wt.buffer,Y=wt.type,ot=wt.bytesPerElement,vt=Y===r.INT||Y===r.UNSIGNED_INT||Q.gpuType===Kc;if(Q.isInterleavedBufferAttribute){let st=Q.data,St=st.stride,Nt=Q.offset;if(st.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt,st.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)g(V.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let Lt=0;Lt<V.locationSize;Lt++)x(V.location+Lt,ht/V.locationSize,Y,K,St*ot,(Nt+ht/V.locationSize*Lt)*ot,vt)}else{if(Q.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)m(V.location+st,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<V.locationSize;st++)g(V.location+st);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let st=0;st<V.locationSize;st++)x(V.location+st,ht/V.locationSize,Y,K,ht*ot,ht/V.locationSize*st*ot,vt)}}else if(O!==void 0){let K=O[Z];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(V.location,K);break;case 3:r.vertexAttrib3fv(V.location,K);break;case 4:r.vertexAttrib4fv(V.location,K);break;default:r.vertexAttrib1fv(V.location,K)}}}}y()}function A(){P();for(let M in i){let T=i[M];for(let D in T){let L=T[D];for(let z in L)h(L[z].object),delete L[z];delete T[D]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;let T=i[M.id];for(let D in T){let L=T[D];for(let z in L)h(L[z].object),delete L[z];delete T[D]}delete i[M.id]}function w(M){for(let T in i){let D=i[T];if(D[M.id]===void 0)continue;let L=D[M.id];for(let z in L)h(L[z].object),delete L[z];delete D[M.id]}}function P(){b(),a=!0,s!==n&&(s=n,c(s.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function fg(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];e.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pg(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==ni&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let P=w===_e&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==si&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Di&&!P)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:S}}function mg(r){let t=this,e=null,i=0,n=!1,s=!1,a=new bi,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let y=s?0:i,x=y*4,_=m.clippingState||null;l.value=_,_=h(p,d,x,f);for(let A=0;A!==x;++A)_[A]=e[A];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function gg(r){let t=new WeakMap;function e(a,o){return o===Rl?a.mapping=vs:o===Pl&&(a.mapping=xs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Rl||o===Pl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ms=class extends To{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,pu=[.125,.215,.35,.446,.526,.582],Un=20,cl=new Ms,mu=new dt,hl=null,ul=0,dl=0,fl=!1,In=(1+Math.sqrt(5))/2,ls=1/In,gu=[new C(-In,ls,0),new C(In,ls,0),new C(-ls,0,In),new C(ls,0,In),new C(0,In,-ls),new C(0,In,ls),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:_e,format:ni,colorSpace:Ds,depthBuffer:!1},n=vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(s)),this._blurMaterial=xg(s,t,e)}return n}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,i,n){let o=new Se(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mu),h.toneMapping=un,h.autoClear=!1;let f=new Li({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),p=new $t(new ri,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(mu),v=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let x=this._cubeSize;eo(n,y*x,m>2?x:0,x,x),h.setRenderTarget(n),v&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===vs||t.mapping===xs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;eo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,cl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gu[(n-s-1)%gu.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $t(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Un-1),v=s/p,g=isFinite(s)?1+Math.floor(h*v):Un;g>Un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Un}`);let m=[],y=0;for(let w=0;w<Un;++w){let P=w/v,b=Math.exp(-P*P/2);m.push(b),w===0?y+=b:w<g&&(y+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;let _=this._sizeLods[n],A=3*_*(n>x-us?n-x+us:0),S=4*(this._cubeSize-_);eo(e,A,S,3*_,2*_),l.setRenderTarget(e),l.render(u,cl)}};function vg(r){let t=[],e=[],i=[],n=r,s=r-us+1+pu.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-us?l=pu[a-r+us-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),x=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,P=S>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];y.set(b,v*p*S),x.set(d,g*p*S);let M=[S,S,S,S,S,S];_.set(M,m*p*S)}let A=new ye;A.setAttribute("position",new fe(y,v)),A.setAttribute("uv",new fe(x,g)),A.setAttribute("faceIndex",new fe(_,m)),t.push(A),n>us&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vu(r,t,e){let i=new me(r,t,e);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function xg(r,t,e){let i=new Float32Array(Un),n=new C(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:oh(),fragmentShader:`

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
		`,blending:be,depthTest:!1,depthWrite:!1})}function xu(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:be,depthTest:!1,depthWrite:!1})}function yu(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:be,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function yg(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Rl||l===Pl,h=l===vs||l===xs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bs(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new bs(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function _g(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&js("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Mg(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){let A=y[x+0],S=y[x+1],w=y[x+2];d.push(A,S,S,w,w,A)}}else if(p!==void 0){let y=p.array;v=p.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let A=x+0,S=x+1,w=x+2;d.push(A,S,S,w,w,A)}}else return;let g=new(hd(d)?So:wo)(d,1);g.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bg(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(i,f,s,d*a,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,v){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y]*v[y];e.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Sg(r,t,e){let i=new WeakMap,n=new ie;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let b=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*A*4*u),w=new _o(S,_,A,u);w.type=Di,w.needsUpdate=!0;let P=x*4;for(let M=0;M<u;M++){let T=g[M],D=m[M],L=y[M],z=_*A*4*M;for(let F=0;F<T.count;F++){let O=F*P;f===!0&&(n.fromBufferAttribute(T,F),S[z+O+0]=n.x,S[z+O+1]=n.y,S[z+O+2]=n.z,S[z+O+3]=0),p===!0&&(n.fromBufferAttribute(D,F),S[z+O+4]=n.x,S[z+O+5]=n.y,S[z+O+6]=n.z,S[z+O+7]=0),v===!0&&(n.fromBufferAttribute(L,F),S[z+O+8]=n.x,S[z+O+9]=n.y,S[z+O+10]=n.z,S[z+O+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:w,size:new nt(_,A)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Tg(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var ws=class extends je{constructor(t,e,i,n,s,a,o,l,c,h=fs){if(h!==fs&&h!==fn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fs&&(i=Nn),i===void 0&&h===fn&&(i=dn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},md=new je,_u=new ws(1,1),gd=new _o,vd=new ac,xd=new Eo,Mu=[],bu=[],wu=new Float32Array(16),Su=new Float32Array(9),Tu=new Float32Array(4);function Is(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Mu[n];if(s===void 0&&(s=new Float32Array(n),Mu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ce(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Re(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Zo(r,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Eg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ag(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2fv(this.addr,t),Re(e,t)}}function Cg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;r.uniform3fv(this.addr,t),Re(e,t)}}function Rg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4fv(this.addr,t),Re(e,t)}}function Pg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;Tu.set(i),r.uniformMatrix2fv(this.addr,!1,Tu),Re(e,i)}}function Dg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;Su.set(i),r.uniformMatrix3fv(this.addr,!1,Su),Re(e,i)}}function Ig(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;wu.set(i),r.uniformMatrix4fv(this.addr,!1,wu),Re(e,i)}}function Lg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ug(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2iv(this.addr,t),Re(e,t)}}function zg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3iv(this.addr,t),Re(e,t)}}function Ng(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4iv(this.addr,t),Re(e,t)}}function kg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2uiv(this.addr,t),Re(e,t)}}function Og(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3uiv(this.addr,t),Re(e,t)}}function Bg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4uiv(this.addr,t),Re(e,t)}}function Hg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(_u.compareFunction=ld,s=_u):s=md,e.setTexture2D(t||s,n)}function Vg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||vd,n)}function Gg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||xd,n)}function Wg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||gd,n)}function qg(r){switch(r){case 5126:return Eg;case 35664:return Ag;case 35665:return Cg;case 35666:return Rg;case 35674:return Pg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Lg;case 35667:case 35671:return Ug;case 35668:case 35672:return zg;case 35669:case 35673:return Ng;case 5125:return kg;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}function Xg(r,t){r.uniform1fv(this.addr,t)}function Yg(r,t){let e=Is(t,this.size,2);r.uniform2fv(this.addr,e)}function $g(r,t){let e=Is(t,this.size,3);r.uniform3fv(this.addr,e)}function Zg(r,t){let e=Is(t,this.size,4);r.uniform4fv(this.addr,e)}function jg(r,t){let e=Is(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Kg(r,t){let e=Is(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Jg(r,t){let e=Is(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Qg(r,t){r.uniform1iv(this.addr,t)}function tv(r,t){r.uniform2iv(this.addr,t)}function ev(r,t){r.uniform3iv(this.addr,t)}function iv(r,t){r.uniform4iv(this.addr,t)}function nv(r,t){r.uniform1uiv(this.addr,t)}function sv(r,t){r.uniform2uiv(this.addr,t)}function rv(r,t){r.uniform3uiv(this.addr,t)}function ov(r,t){r.uniform4uiv(this.addr,t)}function av(r,t,e){let i=this.cache,n=t.length,s=Zo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||md,s[a])}function lv(r,t,e){let i=this.cache,n=t.length,s=Zo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||vd,s[a])}function cv(r,t,e){let i=this.cache,n=t.length,s=Zo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||xd,s[a])}function hv(r,t,e){let i=this.cache,n=t.length,s=Zo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||gd,s[a])}function uv(r){switch(r){case 5126:return Xg;case 35664:return Yg;case 35665:return $g;case 35666:return Zg;case 35674:return jg;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return iv;case 5125:return nv;case 36294:return sv;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}var hc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}},uc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uv(e.type)}},dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},pl=/(\w+)(\])?(\[|\.)?/g;function Eu(r,t){r.seq.push(t),r.map[t.id]=t}function dv(r,t,e){let i=r.name,n=i.length;for(pl.lastIndex=0;;){let s=pl.exec(i),a=pl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Eu(e,c===void 0?new hc(o,r,t):new uc(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new dc(o),Eu(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);dv(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Au(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var fv=37297,pv=0;function mv(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Cu=new Yt;function gv(r){Kt._getMatrix(Cu,Kt.workingColorSpace,r);let t=`mat3( ${Cu.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(r)){case $o:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ru(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+mv(r.getShaderSource(t),a)}else return n}function vv(r,t){let e=gv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xv(r,t){let e;switch(t){case Xc:e="Linear";break;case Yc:e="Reinhard";break;case $c:e="Cineon";break;case mr:e="ACESFilmic";break;case Zc:e="AgX";break;case jc:e="Neutral";break;case Lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var io=new C;function yv(){Kt.getLuminanceCoefficients(io);let r=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Mv(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function bv(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ks(r){return r!==""}function Pu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(r){return r.replace(wv,Tv)}var Sv=new Map;function Tv(r,t){let e=Vt[t];if(e===void 0){let i=Sv.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fc(e)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(r){return r.replace(Ev,Av)}function Av(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Lu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function Rv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vs:case xs:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Dv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ku:t="ENVMAP_BLENDING_MULTIPLY";break;case Df:t="ENVMAP_BLENDING_MIX";break;case If:t="ENVMAP_BLENDING_ADD";break}return t}function Iv(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Lv(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cv(e),c=Rv(e),h=Pv(e),u=Dv(e),d=Iv(e),f=_v(e),p=Mv(s),v=n.createProgram(),g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ks).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ks).join(`
`),m.length>0&&(m+=`
`)):(g=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),m=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Vt.tonemapping_pars_fragment:"",e.toneMapping!==un?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),a=fc(a),a=Pu(a,e),a=Du(a,e),o=fc(o),o=Pu(o,e),o=Du(o,e),a=Iu(a),o=Iu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=y+g+a,_=y+m+o,A=Au(n,n.VERTEX_SHADER,x),S=Au(n,n.FRAGMENT_SHADER,_);n.attachShader(v,A),n.attachShader(v,S),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function w(T){if(r.debug.checkShaderErrors){let D=n.getProgramInfoLog(v).trim(),L=n.getShaderInfoLog(A).trim(),z=n.getShaderInfoLog(S).trim(),F=!0,O=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,A,S);else{let Z=Ru(n,A,"vertex"),V=Ru(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+Z+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||z==="")&&(O=!1);O&&(T.diagnostics={runnable:F,programLog:D,vertexShader:{log:L,prefix:g},fragmentShader:{log:z,prefix:m}})}n.deleteShader(A),n.deleteShader(S),P=new ms(n,v),b=bv(n,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,fv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=S,this}var Uv=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new mc(t),e.set(t,i)),i}},mc=class{constructor(t){this.id=Uv++,this.code=t,this.usedTimes=0}};function zv(r,t,e,i,n,s,a){let o=new bo,l=new pc,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,T,D,L){let z=D.fog,F=L.geometry,O=b.isMeshStandardMaterial?D.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),V=Z&&Z.mapping===Yo?Z.image.height:null,Q=p[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ht=K!==void 0?K.length:0,wt=0;F.morphAttributes.position!==void 0&&(wt=1),F.morphAttributes.normal!==void 0&&(wt=2),F.morphAttributes.color!==void 0&&(wt=3);let Ft,Y,ot,vt;if(Q){let oe=Pi[Q];Ft=oe.vertexShader,Y=oe.fragmentShader}else Ft=b.vertexShader,Y=b.fragmentShader,l.update(b),ot=l.getVertexShaderID(b),vt=l.getFragmentShaderID(b);let st=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,Lt=L.isBatchedMesh===!0,Zt=!!b.map,tt=!!b.matcap,lt=!!Z,U=!!b.aoMap,Rt=!!b.lightMap,rt=!!b.bumpMap,Mt=!!b.normalMap,ut=!!b.displacementMap,kt=!!b.emissiveMap,xt=!!b.metalnessMap,I=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,j=b.dispersion>0,it=b.iridescence>0,J=b.sheen>0,Ct=b.transmission>0,ft=E&&!!b.anisotropyMap,gt=G&&!!b.clearcoatMap,Wt=G&&!!b.clearcoatNormalMap,at=G&&!!b.clearcoatRoughnessMap,Et=it&&!!b.iridescenceMap,Ot=it&&!!b.iridescenceThicknessMap,Bt=J&&!!b.sheenColorMap,At=J&&!!b.sheenRoughnessMap,jt=!!b.specularMap,Ht=!!b.specularColorMap,te=!!b.specularIntensityMap,k=Ct&&!!b.transmissionMap,pt=Ct&&!!b.thicknessMap,$=!!b.gradientMap,et=!!b.alphaMap,bt=b.alphaTest>0,yt=!!b.alphaHash,qt=!!b.extensions,xe=un;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(xe=r.toneMapping);let Oe={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Ft,fragmentShader:Y,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ds,alphaToCoverage:!!b.alphaToCoverage,map:Zt,matcap:tt,envMap:lt,envMapMode:lt&&Z.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Rt,bumpMap:rt,normalMap:Mt,displacementMap:d&&ut,emissiveMap:kt,normalMapObjectSpace:Mt&&b.normalMapType===Nf,normalMapTangentSpace:Mt&&b.normalMapType===sh,metalnessMap:xt,roughnessMap:I,anisotropy:E,anisotropyMap:ft,clearcoat:G,clearcoatMap:gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:at,dispersion:j,iridescence:it,iridescenceMap:Et,iridescenceThicknessMap:Ot,sheen:J,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:jt,specularColorMap:Ht,specularIntensityMap:te,transmission:Ct,transmissionMap:k,thicknessMap:pt,gradientMap:$,opaque:b.transparent===!1&&b.blending===hn&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:bt,alphaHash:yt,combine:b.combine,mapUv:Zt&&v(b.map.channel),aoMapUv:U&&v(b.aoMap.channel),lightMapUv:Rt&&v(b.lightMap.channel),bumpMapUv:rt&&v(b.bumpMap.channel),normalMapUv:Mt&&v(b.normalMap.channel),displacementMapUv:ut&&v(b.displacementMap.channel),emissiveMapUv:kt&&v(b.emissiveMap.channel),metalnessMapUv:xt&&v(b.metalnessMap.channel),roughnessMapUv:I&&v(b.roughnessMap.channel),anisotropyMapUv:ft&&v(b.anisotropyMap.channel),clearcoatMapUv:gt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(b.sheenRoughnessMap.channel),specularMapUv:jt&&v(b.specularMap.channel),specularColorMapUv:Ht&&v(b.specularColorMap.channel),specularIntensityMapUv:te&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:pt&&v(b.thicknessMap.channel),alphaMapUv:et&&v(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Mt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Zt||et),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:Zt&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:kt&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)M.push(T),M.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){let M=p[b.type],T;if(M){let D=Pi[M];T=Ne.clone(D.uniforms)}else T=b.uniforms;return T}function A(b,M){let T;for(let D=0,L=h.length;D<L;D++){let z=h[D];if(z.cacheKey===M){T=z,++T.usedTimes;break}}return T===void 0&&(T=new Lv(r,M,b,s),h.push(T)),T}function S(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:P}}function Nv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function kv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Uu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,p,v,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function o(u,d,f,p,v,g){let m=a(u,d,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,v,g){let m=a(u,d,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||kv),i.length>1&&i.sort(d||Uu),n.length>1&&n.sort(d||Uu)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Fv(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new zu,r.set(i,[a])):n>=s.length?(a=new zu,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ov(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new dt};break;case"SpotLight":e={position:new C,direction:new C,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function Bv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Hv=0;function Vv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Gv(r){let t=new Ov,e=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let n=new C,s=new Tt,a=new Tt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,y=0,x=0,_=0,A=0,S=0,w=0;c.sort(Vv);for(let b=0,M=c.length;b<M;b++){let T=c[b],D=T.color,L=T.intensity,z=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*L,u+=D.g*L,d+=D.b*L;else if(T.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(T.sh.coefficients[O],L);w++}else if(T.isDirectionalLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z=T.shadow,V=e.get(T);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=T.shadow.matrix,y++}i.directional[f]=O,f++}else if(T.isSpotLight){let O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(D).multiplyScalar(L),O.distance=z,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,i.spot[v]=O;let Z=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,Z.updateMatrices(T),T.castShadow&&S++),i.spotLightMatrix[v]=Z.matrix,T.castShadow){let V=e.get(T);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=F,_++}v++}else if(T.isRectAreaLight){let O=t.get(T);O.color.copy(D).multiplyScalar(L),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=O,g++}else if(T.isPointLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){let Z=T.shadow,V=e.get(T);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=T.shadow.matrix,x++}i.point[p]=O,p++}else if(T.isHemisphereLight){let O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(L),O.groundColor.copy(T.groundColor).multiplyScalar(L),i.hemi[m]=O,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,P.directionalLength=f,P.pointLength=p,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=w,i.version=Hv++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),u++}else if(x.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Nu(r){let t=new Gv(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Wv(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Nu(r),t.set(n,[o])):s>=a.length?(o=new Nu(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var or=class extends ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gc=class extends ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
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
}`;function Yv(r,t,e){let i=new rr,n=new nt,s=new nt,a=new ie,o=new or({depthPacking:nh}),l=new gc,c={},h=e.maxTextureSize,u={[Ii]:Ve,[Ve]:Ii,[Fe]:Fe},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:qv,fragmentShader:Xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new $t(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let m=this.type;this.render=function(S,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=r.getRenderTarget(),M=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),D=r.state;D.setBlending(be),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=m!==Wi&&this.type===Wi,z=m===Wi&&this.type!==Wi;for(let F=0,O=S.length;F<O;F++){let Z=S[F],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let Q=V.getFrameExtents();if(n.multiply(Q),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Q.x),n.x=s.x*Q.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Q.y),n.y=s.y*Q.y,V.mapSize.y=s.y)),V.map===null||L===!0||z===!0){let ht=this.type!==Wi?{minFilter:Ee,magFilter:Ee}:{};V.map!==null&&V.map.dispose(),V.map=new me(n.x,n.y,ht),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let K=V.getViewportCount();for(let ht=0;ht<K;ht++){let wt=V.getViewport(ht);a.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),D.viewport(a),V.updateMatrices(Z,ht),i=V.getFrustum(),_(w,P,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&y(V,P),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(b,M,T)};function y(S,w){let P=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new me(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,P,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,P,f,v,null)}function x(S,w,P,b){let M=null,T=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=P.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=M.uuid,L=w.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let F=z[L];F===void 0&&(F=M.clone(),z[L]=F,w.addEventListener("dispose",A)),M=F}if(M.visible=w.visible,M.wireframe=w.wireframe,b===Wi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=r.properties.get(M);D.light=P}return M}function _(S,w,P,b,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Wi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let L=t.update(S),z=S.material;if(Array.isArray(z)){let F=L.groups;for(let O=0,Z=F.length;O<Z;O++){let V=F[O],Q=z[V.materialIndex];if(Q&&Q.visible){let K=x(S,Q,b,M);S.onBeforeShadow(r,S,w,P,L,K,V),r.renderBufferDirect(P,null,L,K,S,V),S.onAfterShadow(r,S,w,P,L,K,V)}}}else if(z.visible){let F=x(S,z,b,M);S.onBeforeShadow(r,S,w,P,L,F,null),r.renderBufferDirect(P,null,L,F,S,null),S.onAfterShadow(r,S,w,P,L,F,null)}}let D=S.children;for(let L=0,z=D.length;L<z;L++)_(D[L],w,P,b,M)}function A(S){S.target.removeEventListener("dispose",A);for(let P in c){let b=c[P],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var $v={[bl]:wl,[Sl]:Al,[Tl]:Cl,[gs]:El,[wl]:bl,[Al]:Sl,[Cl]:Tl,[El]:gs};function Zv(r,t){function e(){let k=!1,pt=new ie,$=null,et=new ie(0,0,0,0);return{setMask:function(bt){$!==bt&&!k&&(r.colorMask(bt,bt,bt,bt),$=bt)},setLocked:function(bt){k=bt},setClear:function(bt,yt,qt,xe,Oe){Oe===!0&&(bt*=xe,yt*=xe,qt*=xe),pt.set(bt,yt,qt,xe),et.equals(pt)===!1&&(r.clearColor(bt,yt,qt,xe),et.copy(pt))},reset:function(){k=!1,$=null,et.set(-1,0,0,0)}}}function i(){let k=!1,pt=!1,$=null,et=null,bt=null;return{setReversed:function(yt){if(pt!==yt){let qt=t.get("EXT_clip_control");pt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let xe=bt;bt=null,this.setClear(xe)}pt=yt},getReversed:function(){return pt},setTest:function(yt){yt?st(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(yt){$!==yt&&!k&&(r.depthMask(yt),$=yt)},setFunc:function(yt){if(pt&&(yt=$v[yt]),et!==yt){switch(yt){case bl:r.depthFunc(r.NEVER);break;case wl:r.depthFunc(r.ALWAYS);break;case Sl:r.depthFunc(r.LESS);break;case gs:r.depthFunc(r.LEQUAL);break;case Tl:r.depthFunc(r.EQUAL);break;case El:r.depthFunc(r.GEQUAL);break;case Al:r.depthFunc(r.GREATER);break;case Cl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=yt}},setLocked:function(yt){k=yt},setClear:function(yt){bt!==yt&&(pt&&(yt=1-yt),r.clearDepth(yt),bt=yt)},reset:function(){k=!1,$=null,et=null,bt=null,pt=!1}}}function n(){let k=!1,pt=null,$=null,et=null,bt=null,yt=null,qt=null,xe=null,Oe=null;return{setTest:function(oe){k||(oe?st(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!k&&(r.stencilMask(oe),pt=oe)},setFunc:function(oe,vi,ki){($!==oe||et!==vi||bt!==ki)&&(r.stencilFunc(oe,vi,ki),$=oe,et=vi,bt=ki)},setOp:function(oe,vi,ki){(yt!==oe||qt!==vi||xe!==ki)&&(r.stencilOp(oe,vi,ki),yt=oe,qt=vi,xe=ki)},setLocked:function(oe){k=oe},setClear:function(oe){Oe!==oe&&(r.clearStencil(oe),Oe=oe)},reset:function(){k=!1,pt=null,$=null,et=null,bt=null,yt=null,qt=null,xe=null,Oe=null}}}let s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,y=null,x=null,_=null,A=null,S=null,w=new dt(0,0,0),P=0,b=!1,M=null,T=null,D=null,L=null,z=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=Z>=2);let Q=null,K={},ht=r.getParameter(r.SCISSOR_BOX),wt=r.getParameter(r.VIEWPORT),Ft=new ie().fromArray(ht),Y=new ie().fromArray(wt);function ot(k,pt,$,et){let bt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(k,yt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<$;qt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(pt,0,r.RGBA,1,1,et,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(pt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return yt}let vt={};vt[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(r.DEPTH_TEST),a.setFunc(gs),rt(!1),Mt(Fh),st(r.CULL_FACE),U(be);function st(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function St(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Nt(k,pt){return u[k]!==pt?(r.bindFramebuffer(k,pt),u[k]=pt,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=pt),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=pt),!0):!1}function Lt(k,pt){let $=f,et=!1;if(k){$=d.get(pt),$===void 0&&($=[],d.set(pt,$));let bt=k.textures;if($.length!==bt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,qt=bt.length;yt<qt;yt++)$[yt]=r.COLOR_ATTACHMENT0+yt;$.length=bt.length,et=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,et=!0);et&&r.drawBuffers($)}function Zt(k){return p!==k?(r.useProgram(k),p=k,!0):!1}let tt={[hi]:r.FUNC_ADD,[vf]:r.FUNC_SUBTRACT,[xf]:r.FUNC_REVERSE_SUBTRACT};tt[yf]=r.MIN,tt[_f]=r.MAX;let lt={[Rs]:r.ZERO,[Mf]:r.ONE,[bf]:r.SRC_COLOR,[_l]:r.SRC_ALPHA,[Ef]:r.SRC_ALPHA_SATURATE,[Xo]:r.DST_COLOR,[qo]:r.DST_ALPHA,[wf]:r.ONE_MINUS_SRC_COLOR,[Ml]:r.ONE_MINUS_SRC_ALPHA,[Tf]:r.ONE_MINUS_DST_COLOR,[Sf]:r.ONE_MINUS_DST_ALPHA,[Af]:r.CONSTANT_COLOR,[Cf]:r.ONE_MINUS_CONSTANT_COLOR,[Rf]:r.CONSTANT_ALPHA,[Pf]:r.ONE_MINUS_CONSTANT_ALPHA};function U(k,pt,$,et,bt,yt,qt,xe,Oe,oe){if(k===be){v===!0&&(St(r.BLEND),v=!1);return}if(v===!1&&(st(r.BLEND),v=!0),k!==qc){if(k!==g||oe!==b){if((m!==hi||_!==hi)&&(r.blendEquation(r.FUNC_ADD),m=hi,_=hi),oe)switch(k){case hn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zi:r.blendFunc(r.ONE,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,x=null,A=null,S=null,w.set(0,0,0),P=0,g=k,b=oe}return}bt=bt||pt,yt=yt||$,qt=qt||et,(pt!==m||bt!==_)&&(r.blendEquationSeparate(tt[pt],tt[bt]),m=pt,_=bt),($!==y||et!==x||yt!==A||qt!==S)&&(r.blendFuncSeparate(lt[$],lt[et],lt[yt],lt[qt]),y=$,x=et,A=yt,S=qt),(xe.equals(w)===!1||Oe!==P)&&(r.blendColor(xe.r,xe.g,xe.b,Oe),w.copy(xe),P=Oe),g=k,b=!1}function Rt(k,pt){k.side===Fe?St(r.CULL_FACE):st(r.CULL_FACE);let $=k.side===Ve;pt&&($=!$),rt($),k.blending===hn&&k.transparent===!1?U(be):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);let et=k.stencilWrite;o.setTest(et),et&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){M!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),M=k)}function Mt(k){k!==mf?(st(r.CULL_FACE),k!==T&&(k===Fh?r.cullFace(r.BACK):k===gf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),T=k}function ut(k){k!==D&&(O&&r.lineWidth(k),D=k)}function kt(k,pt,$){k?(st(r.POLYGON_OFFSET_FILL),(L!==pt||z!==$)&&(r.polygonOffset(pt,$),L=pt,z=$)):St(r.POLYGON_OFFSET_FILL)}function xt(k){k?st(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function I(k){k===void 0&&(k=r.TEXTURE0+F-1),Q!==k&&(r.activeTexture(k),Q=k)}function E(k,pt,$){$===void 0&&(Q===null?$=r.TEXTURE0+F-1:$=Q);let et=K[$];et===void 0&&(et={type:void 0,texture:void 0},K[$]=et),(et.type!==k||et.texture!==pt)&&(Q!==$&&(r.activeTexture($),Q=$),r.bindTexture(k,pt||vt[k]),et.type=k,et.texture=pt)}function G(){let k=K[Q];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(k){Ft.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ft.copy(k))}function At(k){Y.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function jt(k,pt){let $=c.get(pt);$===void 0&&($=new WeakMap,c.set(pt,$));let et=$.get(k);et===void 0&&(et=r.getUniformBlockIndex(pt,k.name),$.set(k,et))}function Ht(k,pt){let et=c.get(pt).get(k);l.get(pt)!==et&&(r.uniformBlockBinding(pt,et,k.__bindingPointIndex),l.set(pt,et))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,K={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,y=null,x=null,_=null,A=null,S=null,w=new dt(0,0,0),P=0,b=!1,M=null,T=null,D=null,L=null,z=null,Ft.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:St,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Zt,setBlending:U,setMaterial:Rt,setFlipSided:rt,setCullFace:Mt,setLineWidth:ut,setPolygonOffset:kt,setScissorTest:xt,activeTexture:I,bindTexture:E,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:it,texImage2D:Et,texImage3D:Ot,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:gt,scissor:Bt,viewport:At,reset:te}}function ku(r,t,e,i){let n=jv(i);switch(e){case id:return r*t;case sd:return r*t;case rd:return r*t*2;case Ps:return r*t/n.components*n.byteLength;case th:return r*t/n.components*n.byteLength;case od:return r*t*2/n.components*n.byteLength;case eh:return r*t*2/n.components*n.byteLength;case nd:return r*t*3/n.components*n.byteLength;case ni:return r*t*4/n.components*n.byteLength;case ih:return r*t*4/n.components*n.byteLength;case ho:case uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ll:case zl:return Math.max(r,16)*Math.max(t,8)/4;case Il:case Ul:return Math.max(r,8)*Math.max(t,8)/2;case Nl:case kl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case mo:case Ql:case tc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ad:case ec:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ic:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jv(r){switch(r){case si:case Qu:return{byteLength:1,components:1};case sr:case td:case _e:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case Nn:case Kc:case Di:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Kv(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):xo("canvas")}function v(I,E,G){let j=1,it=xt(I);if((it.width>G||it.height>G)&&(j=G/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let J=Math.floor(j*it.width),Ct=Math.floor(j*it.height);u===void 0&&(u=p(J,Ct));let ft=E?p(J,Ct):u;return ft.width=J,ft.height=Ct,ft.getContext("2d").drawImage(I,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Ct+")."),ft}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(I,E,G,j,it=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let J=E;if(E===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),E===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGB8UI),G===r.UNSIGNED_SHORT&&(J=r.RGB16UI),G===r.UNSIGNED_INT&&(J=r.RGB32UI),G===r.BYTE&&(J=r.RGB8I),G===r.SHORT&&(J=r.RGB16I),G===r.INT&&(J=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),G===r.UNSIGNED_INT&&(J=r.RGBA32UI),G===r.BYTE&&(J=r.RGBA8I),G===r.SHORT&&(J=r.RGBA16I),G===r.INT&&(J=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),E===r.RGBA){let Ct=it?$o:Kt.getTransfer(j);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=Ct===re?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(I,E){let G;return I?E===null||E===Nn||E===dn?G=r.DEPTH24_STENCIL8:E===Di?G=r.DEPTH32F_STENCIL8:E===sr&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Nn||E===dn?G=r.DEPTH_COMPONENT24:E===Di?G=r.DEPTH_COMPONENT32F:E===sr&&(G=r.DEPTH_COMPONENT16),G}function A(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ee&&I.minFilter!==qe?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function S(I){let E=I.target;E.removeEventListener("dispose",S),P(E),E.isVideoTexture&&h.delete(E)}function w(I){let E=I.target;E.removeEventListener("dispose",w),M(E)}function P(I){let E=i.get(I);if(E.__webglInit===void 0)return;let G=I.source,j=d.get(G);if(j){let it=j[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(j).length===0&&d.delete(G)}i.remove(I)}function b(I){let E=i.get(I);r.deleteTexture(E.__webglTexture);let G=I.source,j=d.get(G);delete j[E.__cacheKey],a.memory.textures--}function M(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let it=0;it<E.__webglFramebuffer[j].length;it++)r.deleteFramebuffer(E.__webglFramebuffer[j][it]);else r.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)r.deleteFramebuffer(E.__webglFramebuffer[j]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let j=0,it=G.length;j<it;j++){let J=i.get(G[j]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(G[j])}i.remove(I)}let T=0;function D(){T=0}function L(){let I=T;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),T+=1,I}function z(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function F(I,E){let G=i.get(I);if(I.isVideoTexture&&ut(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,I,E);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function O(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Y(G,I,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function Z(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Y(G,I,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function V(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){ot(G,I,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}let Q={[wi]:r.REPEAT,[zn]:r.CLAMP_TO_EDGE,[Dl]:r.MIRRORED_REPEAT},K={[Ee]:r.NEAREST,[Uf]:r.NEAREST_MIPMAP_NEAREST,[Nr]:r.NEAREST_MIPMAP_LINEAR,[qe]:r.LINEAR,[Ha]:r.LINEAR_MIPMAP_NEAREST,[Xi]:r.LINEAR_MIPMAP_LINEAR},ht={[kf]:r.NEVER,[Gf]:r.ALWAYS,[Ff]:r.LESS,[ld]:r.LEQUAL,[Of]:r.EQUAL,[Vf]:r.GEQUAL,[Bf]:r.GREATER,[Hf]:r.NOTEQUAL};function wt(I,E){if(E.type===Di&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===qe||E.magFilter===Ha||E.magFilter===Nr||E.magFilter===Xi||E.minFilter===qe||E.minFilter===Ha||E.minFilter===Nr||E.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Q[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,K[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ht[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ee||E.minFilter!==Nr&&E.minFilter!==Xi||E.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ft(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",S));let j=E.source,it=d.get(j);it===void 0&&(it={},d.set(j,it));let J=z(E);if(J!==I.__cacheKey){it[J]===void 0&&(it[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[J].usedTimes++;let Ct=it[I.__cacheKey];Ct!==void 0&&(it[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(E)),I.__cacheKey=J,I.__webglTexture=it[J].texture}return G}function Y(I,E,G){let j=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=r.TEXTURE_3D);let it=Ft(I,E),J=E.source;e.bindTexture(j,I.__webglTexture,r.TEXTURE0+G);let Ct=i.get(J);if(J.version!==Ct.__version||it===!0){e.activeTexture(r.TEXTURE0+G);let ft=Kt.getPrimaries(Kt.workingColorSpace),gt=E.colorSpace===cn?null:Kt.getPrimaries(E.colorSpace),Wt=E.colorSpace===cn||ft===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let at=v(E.image,!1,n.maxTextureSize);at=kt(E,at);let Et=s.convert(E.format,E.colorSpace),Ot=s.convert(E.type),Bt=x(E.internalFormat,Et,Ot,E.colorSpace,E.isVideoTexture);wt(j,E);let At,jt=E.mipmaps,Ht=E.isVideoTexture!==!0,te=Ct.__version===void 0||it===!0,k=J.dataReady,pt=A(E,at);if(E.isDepthTexture)Bt=_(E.format===fn,E.type),te&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Bt,at.width,at.height):e.texImage2D(r.TEXTURE_2D,0,Bt,at.width,at.height,0,Et,Ot,null));else if(E.isDataTexture)if(jt.length>0){Ht&&te&&e.texStorage2D(r.TEXTURE_2D,pt,Bt,jt[0].width,jt[0].height);for(let $=0,et=jt.length;$<et;$++)At=jt[$],Ht?k&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,At.width,At.height,Et,Ot,At.data):e.texImage2D(r.TEXTURE_2D,$,Bt,At.width,At.height,0,Et,Ot,At.data);E.generateMipmaps=!1}else Ht?(te&&e.texStorage2D(r.TEXTURE_2D,pt,Bt,at.width,at.height),k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at.width,at.height,Et,Ot,at.data)):e.texImage2D(r.TEXTURE_2D,0,Bt,at.width,at.height,0,Et,Ot,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ht&&te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Bt,jt[0].width,jt[0].height,at.depth);for(let $=0,et=jt.length;$<et;$++)if(At=jt[$],E.format!==ni)if(Et!==null)if(Ht){if(k)if(E.layerUpdates.size>0){let bt=ku(At.width,At.height,E.format,E.type);for(let yt of E.layerUpdates){let qt=At.data.subarray(yt*bt/At.data.BYTES_PER_ELEMENT,(yt+1)*bt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,yt,At.width,At.height,1,Et,qt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,at.depth,Et,At.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Bt,At.width,At.height,at.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?k&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,at.depth,Et,Ot,At.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Bt,At.width,At.height,at.depth,0,Et,Ot,At.data)}else{Ht&&te&&e.texStorage2D(r.TEXTURE_2D,pt,Bt,jt[0].width,jt[0].height);for(let $=0,et=jt.length;$<et;$++)At=jt[$],E.format!==ni?Et!==null?Ht?k&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?k&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,At.width,At.height,Et,Ot,At.data):e.texImage2D(r.TEXTURE_2D,$,Bt,At.width,At.height,0,Et,Ot,At.data)}else if(E.isDataArrayTexture)if(Ht){if(te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Bt,at.width,at.height,at.depth),k)if(E.layerUpdates.size>0){let $=ku(at.width,at.height,E.format,E.type);for(let et of E.layerUpdates){let bt=at.data.subarray(et*$/at.data.BYTES_PER_ELEMENT,(et+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,Et,Ot,bt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Ot,at.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,at.width,at.height,at.depth,0,Et,Ot,at.data);else if(E.isData3DTexture)Ht?(te&&e.texStorage3D(r.TEXTURE_3D,pt,Bt,at.width,at.height,at.depth),k&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Ot,at.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,at.width,at.height,at.depth,0,Et,Ot,at.data);else if(E.isFramebufferTexture){if(te)if(Ht)e.texStorage2D(r.TEXTURE_2D,pt,Bt,at.width,at.height);else{let $=at.width,et=at.height;for(let bt=0;bt<pt;bt++)e.texImage2D(r.TEXTURE_2D,bt,Bt,$,et,0,Et,Ot,null),$>>=1,et>>=1}}else if(jt.length>0){if(Ht&&te){let $=xt(jt[0]);e.texStorage2D(r.TEXTURE_2D,pt,Bt,$.width,$.height)}for(let $=0,et=jt.length;$<et;$++)At=jt[$],Ht?k&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Et,Ot,At):e.texImage2D(r.TEXTURE_2D,$,Bt,Et,Ot,At);E.generateMipmaps=!1}else if(Ht){if(te){let $=xt(at);e.texStorage2D(r.TEXTURE_2D,pt,Bt,$.width,$.height)}k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,Ot,at)}else e.texImage2D(r.TEXTURE_2D,0,Bt,Et,Ot,at);g(E)&&m(j),Ct.__version=J.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ot(I,E,G){if(E.image.length!==6)return;let j=Ft(I,E),it=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);let J=i.get(it);if(it.version!==J.__version||j===!0){e.activeTexture(r.TEXTURE0+G);let Ct=Kt.getPrimaries(Kt.workingColorSpace),ft=E.colorSpace===cn?null:Kt.getPrimaries(E.colorSpace),gt=E.colorSpace===cn||Ct===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!Wt&&!at?Et[et]=v(E.image[et],!0,n.maxCubemapSize):Et[et]=at?E.image[et].image:E.image[et],Et[et]=kt(E,Et[et]);let Ot=Et[0],Bt=s.convert(E.format,E.colorSpace),At=s.convert(E.type),jt=x(E.internalFormat,Bt,At,E.colorSpace),Ht=E.isVideoTexture!==!0,te=J.__version===void 0||j===!0,k=it.dataReady,pt=A(E,Ot);wt(r.TEXTURE_CUBE_MAP,E);let $;if(Wt){Ht&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,jt,Ot.width,Ot.height);for(let et=0;et<6;et++){$=Et[et].mipmaps;for(let bt=0;bt<$.length;bt++){let yt=$[bt];E.format!==ni?Bt!==null?Ht?k&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,0,0,yt.width,yt.height,Bt,yt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,jt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,0,0,yt.width,yt.height,Bt,At,yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,jt,yt.width,yt.height,0,Bt,At,yt.data)}}}else{if($=E.mipmaps,Ht&&te){$.length>0&&pt++;let et=xt(Et[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,jt,et.width,et.height)}for(let et=0;et<6;et++)if(at){Ht?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,Bt,At,Et[et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,Et[et].width,Et[et].height,0,Bt,At,Et[et].data);for(let bt=0;bt<$.length;bt++){let qt=$[bt].image[et].image;Ht?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,0,0,qt.width,qt.height,Bt,At,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,jt,qt.width,qt.height,0,Bt,At,qt.data)}}else{Ht?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Bt,At,Et[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,Bt,At,Et[et]);for(let bt=0;bt<$.length;bt++){let yt=$[bt];Ht?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,0,0,Bt,At,yt.image[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,jt,Bt,At,yt.image[et])}}}g(E)&&m(r.TEXTURE_CUBE_MAP),J.__version=it.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function vt(I,E,G,j,it,J){let Ct=s.convert(G.format,G.colorSpace),ft=s.convert(G.type),gt=x(G.internalFormat,Ct,ft,G.colorSpace),Wt=i.get(E),at=i.get(G);if(at.__renderTarget=E,!Wt.__hasExternalTextures){let Et=Math.max(1,E.width>>J),Ot=Math.max(1,E.height>>J);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,J,gt,Et,Ot,E.depth,0,Ct,ft,null):e.texImage2D(it,J,gt,Et,Ot,0,Ct,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),Mt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,it,at.__webglTexture,0,rt(E)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,it,at.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(I,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){let j=E.depthTexture,it=j&&j.isDepthTexture?j.type:null,J=_(E.stencilBuffer,it),Ct=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=rt(E);Mt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,J,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,J,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,J,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,I)}else{let j=E.textures;for(let it=0;it<j.length;it++){let J=j[it],Ct=s.convert(J.format,J.colorSpace),ft=s.convert(J.type),gt=x(J.internalFormat,Ct,ft,J.colorSpace),Wt=rt(E);G&&Mt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,gt,E.width,E.height):Mt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,gt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,gt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);let it=j.__webglTexture,J=rt(E);if(E.depthTexture.format===fs)Mt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(E.depthTexture.format===fn)Mt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Nt(I){let E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=j}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");St(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=r.createRenderbuffer(),st(E.__webglDepthbuffer[j],I,!1);else{let it=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),st(E.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,it)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(I,E,G){let j=i.get(I);E!==void 0&&vt(j.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Nt(I)}function Zt(I){let E=I.texture,G=i.get(I),j=i.get(E);I.addEventListener("dispose",w);let it=I.textures,J=I.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=E.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let gt=0;gt<E.mipmaps.length;gt++)G.__webglFramebuffer[ft][gt]=r.createFramebuffer()}else G.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)G.__webglFramebuffer[ft]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ct)for(let ft=0,gt=it.length;ft<gt;ft++){let Wt=i.get(it[ft]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&Mt(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){let gt=it[ft];G.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);let Wt=s.convert(gt.format,gt.colorSpace),at=s.convert(gt.type),Et=x(gt.internalFormat,Wt,at,gt.colorSpace,I.isXRRenderTarget===!0),Ot=rt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,Et,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),st(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),wt(r.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)vt(G.__webglFramebuffer[ft][gt],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else vt(G.__webglFramebuffer[ft],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,gt=it.length;ft<gt;ft++){let Wt=it[ft],at=i.get(Wt);e.bindTexture(r.TEXTURE_2D,at.__webglTexture),wt(r.TEXTURE_2D,Wt),vt(G.__webglFramebuffer,I,Wt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),g(Wt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ft=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),wt(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)vt(G.__webglFramebuffer[gt],I,E,r.COLOR_ATTACHMENT0,ft,gt);else vt(G.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,ft,0);g(E)&&m(ft),e.unbindTexture()}I.depthBuffer&&Nt(I)}function tt(I){let E=I.textures;for(let G=0,j=E.length;G<j;G++){let it=E[G];if(g(it)){let J=y(I),Ct=i.get(it).__webglTexture;e.bindTexture(J,Ct),m(J),e.unbindTexture()}}}let lt=[],U=[];function Rt(I){if(I.samples>0){if(Mt(I)===!1){let E=I.textures,G=I.width,j=I.height,it=r.COLOR_BUFFER_BIT,J=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=i.get(I),ft=E.length>1;if(ft)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[gt]);let Wt=i.get(E[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,it,r.NEAREST),l===!0&&(lt.length=0,U.length=0,lt.push(r.COLOR_ATTACHMENT0+gt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(lt.push(J),U.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[gt]);let Wt=i.get(E[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function rt(I){return Math.min(n.maxSamples,I.samples)}function Mt(I){let E=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function kt(I,E){let G=I.colorSpace,j=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Ds&&G!==cn&&(Kt.getTransfer(G)===re?(j!==ni||it!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Lt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Mt}function Jv(r,t){function e(i,n=cn){let s,a=Kt.getTransfer(n);if(i===si)return r.UNSIGNED_BYTE;if(i===Jc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Qu)return r.BYTE;if(i===td)return r.SHORT;if(i===sr)return r.UNSIGNED_SHORT;if(i===Kc)return r.INT;if(i===Nn)return r.UNSIGNED_INT;if(i===Di)return r.FLOAT;if(i===_e)return r.HALF_FLOAT;if(i===id)return r.ALPHA;if(i===nd)return r.RGB;if(i===ni)return r.RGBA;if(i===sd)return r.LUMINANCE;if(i===rd)return r.LUMINANCE_ALPHA;if(i===fs)return r.DEPTH_COMPONENT;if(i===fn)return r.DEPTH_STENCIL;if(i===Ps)return r.RED;if(i===th)return r.RED_INTEGER;if(i===od)return r.RG;if(i===eh)return r.RG_INTEGER;if(i===ih)return r.RGBA_INTEGER;if(i===ho||i===uo||i===fo||i===po)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ll||i===Ul||i===zl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===kl||i===Fl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nl||i===kl)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ol||i===Bl||i===Hl||i===Vl||i===Gl||i===Wl||i===ql||i===Xl||i===Yl||i===$l||i===Zl||i===jl||i===Kl||i===Jl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ol)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===Ql||i===tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===mo)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===ec||i===ic||i===nc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var vc=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qv={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new je,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Jt({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Je(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yc=class extends pn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=new xc,g=e.getContextAttributes(),m=null,y=null,x=[],_=[],A=new nt,S=null,w=new Se;w.viewport=new ie;let P=new Se;P.viewport=new ie;let b=[w,P],M=new vc,T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=x[Y];return ot===void 0&&(ot=new tr,x[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=x[Y];return ot===void 0&&(ot=new tr,x[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=x[Y];return ot===void 0&&(ot=new tr,x[Y]=ot),ot.getHandSpace()};function L(Y){let ot=_.indexOf(Y.inputSource);if(ot===-1)return;let vt=x[ot];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",F);for(let Y=0;Y<x.length;Y++){let ot=_[Y];ot!==null&&(_[Y]=null,x[Y].disconnect(ot))}T=null,D=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,y=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",z),n.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),n.renderState.layers===void 0){let ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,ot),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new me(f.framebufferWidth,f.framebufferHeight,{format:ni,type:si,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,vt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?fn:fs,vt=g.stencil?dn:Nn);let St={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(St),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new me(d.textureWidth,d.textureHeight,{format:ni,type:si,depthTexture:new ws(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ft.setContext(n),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(Y){for(let ot=0;ot<Y.removed.length;ot++){let vt=Y.removed[ot],st=_.indexOf(vt);st>=0&&(_[st]=null,x[st].disconnect(vt))}for(let ot=0;ot<Y.added.length;ot++){let vt=Y.added[ot],st=_.indexOf(vt);if(st===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=_.length){_.push(vt),st=Nt;break}else if(_[Nt]===null){_[Nt]=vt,st=Nt;break}if(st===-1)break}let St=x[st];St&&St.connect(vt)}}let O=new C,Z=new C;function V(Y,ot,vt){O.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);let st=O.distanceTo(Z),St=ot.projectionMatrix.elements,Nt=vt.projectionMatrix.elements,Lt=St[14]/(St[10]-1),Zt=St[14]/(St[10]+1),tt=(St[9]+1)/St[5],lt=(St[9]-1)/St[5],U=(St[8]-1)/St[0],Rt=(Nt[8]+1)/Nt[0],rt=Lt*U,Mt=Lt*Rt,ut=st/(-U+Rt),kt=ut*-U;if(ot.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(kt),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let xt=Lt+ut,I=Zt+ut,E=rt-kt,G=Mt+(st-kt),j=tt*Zt/I*xt,it=lt*Zt/I*xt;Y.projectionMatrix.makePerspective(E,G,j,it,xt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Q(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ot=Y.near,vt=Y.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),M.near=P.near=w.near=ot,M.far=P.far=w.far=vt,(T!==M.near||D!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,D=M.far),w.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;let st=Y.parent,St=M.cameras;Q(M,st);for(let Nt=0;Nt<St.length;Nt++)Q(St[Nt],st);St.length===2?V(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),K(Y,M,st)};function K(Y,ot,vt){vt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ys*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ht=null;function wt(Y,ot){if(h=ot.getViewerPose(c||a),p=ot,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Nt=0;Nt<vt.length;Nt++){let Lt=vt[Nt],Zt=null;if(f!==null)Zt=f.getViewport(Lt);else{let lt=u.getViewSubImage(d,Lt);Zt=lt.viewport,Nt===0&&(t.setRenderTargetTextures(y,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(y))}let tt=b[Nt];tt===void 0&&(tt=new Se,tt.layers.enable(Nt),tt.viewport=new ie,b[Nt]=tt),tt.matrix.fromArray(Lt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Lt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(tt)}let St=n.enabledFeatures;if(St&&St.includes("depth-sensing")){let Nt=u.getDepthInformation(vt[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,n.renderState)}}for(let vt=0;vt<x.length;vt++){let st=_[vt],St=x[vt];st!==null&&St!==void 0&&St.update(st,ot,c||a)}ht&&ht(Y,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),p=null}let Ft=new pd;Ft.setAnimationLoop(wt),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}},Dn=new Ke,ix=new Tt;function nx(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,fd(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,y,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ve&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ve&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Dn.copy(_),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),g.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Dn)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function sx(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=n[y.id];_===void 0&&(p(y),_=h(y),n[y.id]=_,y.addEventListener("dispose",g));let A=x.program;i.updateUBOMapping(y,A);let S=t.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function h(y){let x=u();y.__bindingPointIndex=x;let _=r.createBuffer(),A=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,A,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=n[y.id],_=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let S=0,w=_.length;S<w;S++){let P=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,M=P.length;b<M;b++){let T=P[b];if(f(T,S,b,A)===!0){let D=T.__offset,L=Array.isArray(T.value)?T.value:[T.value],z=0;for(let F=0;F<L.length;F++){let O=L[F],Z=v(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,D+z,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,_,A){let S=y.value,w=x+"_"+_;if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:A[w]=S.clone(),!0;{let P=A[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return A[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function p(y){let x=y.uniforms,_=0,A=16;for(let w=0,P=x.length;w<P;w++){let b=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,T=b.length;M<T;M++){let D=b[M],L=Array.isArray(D.value)?D.value:[D.value];for(let z=0,F=L.length;z<F;z++){let O=L[z],Z=v(O),V=_%A,Q=V%Z.boundary,K=V+Q;_+=Q,K!==0&&A-K<Z.storage&&(_+=A-K),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Z.storage}}}let S=_%A;return S>0&&(_+=A-S),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function m(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var Ao=class{constructor(t={}){let{canvas:e=op(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=un,this.toneMappingExposure=1;let _=this,A=!1,S=0,w=0,P=null,b=-1,M=null,T=new ie,D=new ie,L=null,z=new dt(0),F=0,O=e.width,Z=e.height,V=1,Q=null,K=null,ht=new ie(0,0,O,Z),wt=new ie(0,0,O,Z),Ft=!1,Y=new rr,ot=!1,vt=!1,st=new Tt,St=new Tt,Nt=new C,Lt=new ie,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function lt(){return P===null?V:1}let U=i;function Rt(R,B){return e.getContext(R,B)}try{let R={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),U===null){let B="webgl2";if(U=Rt(B,R),U===null)throw Rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let rt,Mt,ut,kt,xt,I,E,G,j,it,J,Ct,ft,gt,Wt,at,Et,Ot,Bt,At,jt,Ht,te,k;function pt(){rt=new _g(U),rt.init(),Ht=new Jv(U,rt),Mt=new pg(U,rt,t,Ht),ut=new Zv(U,rt),Mt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),kt=new wg(U),xt=new Nv,I=new Kv(U,rt,ut,xt,Mt,Ht,kt),E=new gg(_),G=new yg(_),j=new Pp(U),te=new dg(U,j),it=new Mg(U,j,kt,te),J=new Tg(U,it,j,kt),Bt=new Sg(U,Mt,I),at=new mg(xt),Ct=new zv(_,E,G,rt,Mt,te,at),ft=new nx(_,xt),gt=new Fv,Wt=new Wv(rt),Ot=new ug(_,E,G,ut,J,f,l),Et=new Yv(_,J,Mt),k=new sx(U,kt,Mt,ut),At=new fg(U,rt,kt),jt=new bg(U,rt,kt),kt.programs=Ct.programs,_.capabilities=Mt,_.extensions=rt,_.properties=xt,_.renderLists=gt,_.shadowMap=Et,_.state=ut,_.info=kt}pt();let $=new yc(_,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(O,Z,!1))},this.getSize=function(R){return R.set(O,Z)},this.setSize=function(R,B,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Z=B,e.width=Math.floor(R*V),e.height=Math.floor(B*V),q===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(O*V,Z*V).floor()},this.setDrawingBufferSize=function(R,B,q){O=R,Z=B,V=q,e.width=Math.floor(R*q),e.height=Math.floor(B*q),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(ht)},this.setViewport=function(R,B,q,X){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,B,q,X),ut.viewport(T.copy(ht).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(wt)},this.setScissor=function(R,B,q,X){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,B,q,X),ut.scissor(D.copy(wt).multiplyScalar(V).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(R){ut.setScissorTest(Ft=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(R=!0,B=!0,q=!0){let X=0;if(R){let H=!1;if(P!==null){let ct=P.texture.format;H=ct===ih||ct===eh||ct===th}if(H){let ct=P.texture.type,_t=ct===si||ct===Nn||ct===sr||ct===dn||ct===Jc||ct===Qc,Pt=Ot.getClearColor(),Dt=Ot.getClearAlpha(),Gt=Pt.r,Xt=Pt.g,It=Pt.b;_t?(p[0]=Gt,p[1]=Xt,p[2]=It,p[3]=Dt,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=Gt,v[1]=Xt,v[2]=It,v[3]=Dt,U.clearBufferiv(U.COLOR,0,v))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT),q&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),gt.dispose(),Wt.dispose(),xt.dispose(),E.dispose(),G.dispose(),J.dispose(),te.dispose(),k.dispose(),Ct.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ph),$.removeEventListener("sessionend",Dh),Tn.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=kt.autoReset,B=Et.enabled,q=Et.autoUpdate,X=Et.needsUpdate,H=Et.type;pt(),kt.autoReset=R,Et.enabled=B,Et.autoUpdate=q,Et.needsUpdate=X,Et.type=H}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){let B=R.target;B.removeEventListener("dispose",qt),xe(B)}function xe(R){Oe(R),xt.remove(R)}function Oe(R){let B=xt.get(R).programs;B!==void 0&&(B.forEach(function(q){Ct.releaseProgram(q)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,q,X,H,ct){B===null&&(B=Zt);let _t=H.isMesh&&H.matrixWorld.determinant()<0,Pt=df(R,B,q,X,H);ut.setMaterial(X,_t);let Dt=q.index,Gt=1;if(X.wireframe===!0){if(Dt=it.getWireframeAttribute(q),Dt===void 0)return;Gt=2}let Xt=q.drawRange,It=q.attributes.position,ee=Xt.start*Gt,he=(Xt.start+Xt.count)*Gt;ct!==null&&(ee=Math.max(ee,ct.start*Gt),he=Math.min(he,(ct.start+ct.count)*Gt)),Dt!==null?(ee=Math.max(ee,0),he=Math.min(he,Dt.count)):It!=null&&(ee=Math.max(ee,0),he=Math.min(he,It.count));let ue=he-ee;if(ue<0||ue===1/0)return;te.setup(H,X,Pt,q,Dt);let Ze,ne=At;if(Dt!==null&&(Ze=j.get(Dt),ne=jt,ne.setIndex(Ze)),H.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*lt()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(H.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),ut.setLineWidth(Ut*lt()),H.isLineSegments?ne.setMode(U.LINES):H.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else H.isPoints?ne.setMode(U.POINTS):H.isSprite&&ne.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ne.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ne.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ut=H._multiDrawStarts,Fi=H._multiDrawCounts,se=H._multiDrawCount,xi=Dt?j.get(Dt).bytesPerElement:1,$n=xt.get(X).currentProgram.getUniforms();for(let ti=0;ti<se;ti++)$n.setValue(U,"_gl_DrawID",ti),ne.render(Ut[ti]/xi,Fi[ti])}else if(H.isInstancedMesh)ne.renderInstances(ee,ue,H.count);else if(q.isInstancedBufferGeometry){let Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Fi=Math.min(q.instanceCount,Ut);ne.renderInstances(ee,ue,Fi)}else ne.render(ee,ue)};function oe(R,B,q){R.transparent===!0&&R.side===Fe&&R.forceSinglePass===!1?(R.side=Ve,R.needsUpdate=!0,zr(R,B,q),R.side=Ii,R.needsUpdate=!0,zr(R,B,q),R.side=Fe):zr(R,B,q)}this.compile=function(R,B,q=null){q===null&&(q=R),m=Wt.get(q),m.init(B),x.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==q&&R.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let X=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ct=H.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Pt=ct[_t];oe(Pt,q,H),X.add(Pt)}else oe(ct,q,H),X.add(ct)}),x.pop(),m=null,X},this.compileAsync=function(R,B,q=null){let X=this.compile(R,B,q);return new Promise(H=>{function ct(){if(X.forEach(function(_t){xt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){H(R);return}setTimeout(ct,10)}rt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let vi=null;function ki(R){vi&&vi(R)}function Ph(){Tn.stop()}function Dh(){Tn.start()}let Tn=new pd;Tn.setAnimationLoop(ki),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(R){vi=R,$.setAnimationLoop(R),R===null?Tn.stop():Tn.start()},$.addEventListener("sessionstart",Ph),$.addEventListener("sessionend",Dh),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,B,P),m=Wt.get(R,x.length),m.init(B),x.push(m),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(St),vt=this.localClippingEnabled,ot=at.init(this.clippingPlanes,vt),g=gt.get(R,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&Ba(ct,B,-1/0,_.sortObjects)}Ba(R,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Q,K),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&Ot.addToRenderList(g,R),this.info.render.frame++,ot===!0&&at.beginShadows();let q=m.state.shadowsArray;Et.render(q,R,B),ot===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,H=g.transmissive;if(m.setupLights(),B.isArrayCamera){let ct=B.cameras;if(H.length>0)for(let _t=0,Pt=ct.length;_t<Pt;_t++){let Dt=ct[_t];Lh(X,H,R,Dt)}tt&&Ot.render(R);for(let _t=0,Pt=ct.length;_t<Pt;_t++){let Dt=ct[_t];Ih(g,R,Dt,Dt.viewport)}}else H.length>0&&Lh(X,H,R,B),tt&&Ot.render(R),Ih(g,R,B);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(_,R,B),te.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(m=x[x.length-1],ot===!0&&at.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ba(R,B,q,X){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){X&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);let _t=J.update(R),Pt=R.material;Pt.visible&&g.push(R,_t,Pt,q,Lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){let _t=J.update(R),Pt=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Lt.copy(_t.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Pt)){let Dt=_t.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){let It=Dt[Gt],ee=Pt[It.materialIndex];ee&&ee.visible&&g.push(R,_t,ee,q,Lt.z,It)}}else Pt.visible&&g.push(R,_t,Pt,q,Lt.z,null)}}let ct=R.children;for(let _t=0,Pt=ct.length;_t<Pt;_t++)Ba(ct[_t],B,q,X)}function Ih(R,B,q,X){let H=R.opaque,ct=R.transmissive,_t=R.transparent;m.setupLightsView(q),ot===!0&&at.setGlobalState(_.clippingPlanes,q),X&&ut.viewport(T.copy(X)),H.length>0&&Ur(H,B,q),ct.length>0&&Ur(ct,B,q),_t.length>0&&Ur(_t,B,q),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Lh(R,B,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new me(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?_e:si,minFilter:Xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ct=m.state.transmissionRenderTarget[X.id],_t=X.viewport||T;ct.setSize(_t.z,_t.w);let Pt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(z),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Ot.render(q);let Dt=_.toneMapping;_.toneMapping=un;let Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),ot===!0&&at.setGlobalState(_.clippingPlanes,X),Ur(R,q,X),I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,ee=B.length;It<ee;It++){let he=B[It],ue=he.object,Ze=he.geometry,ne=he.material,Ut=he.group;if(ne.side===Fe&&ue.layers.test(X.layers)){let Fi=ne.side;ne.side=Ve,ne.needsUpdate=!0,Uh(ue,q,X,Ze,ne,Ut),ne.side=Fi,ne.needsUpdate=!0,Xt=!0}}Xt===!0&&(I.updateMultisampleRenderTarget(ct),I.updateRenderTargetMipmap(ct))}_.setRenderTarget(Pt),_.setClearColor(z,F),Gt!==void 0&&(X.viewport=Gt),_.toneMapping=Dt}function Ur(R,B,q){let X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ct=R.length;H<ct;H++){let _t=R[H],Pt=_t.object,Dt=_t.geometry,Gt=X===null?_t.material:X,Xt=_t.group;Pt.layers.test(q.layers)&&Uh(Pt,B,q,Dt,Gt,Xt)}}function Uh(R,B,q,X,H,ct){R.onBeforeRender(_,B,q,X,H,ct),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(_,B,q,X,R,ct),H.transparent===!0&&H.side===Fe&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,_.renderBufferDirect(q,B,X,H,R,ct),H.side=Ii,H.needsUpdate=!0,_.renderBufferDirect(q,B,X,H,R,ct),H.side=Fe):_.renderBufferDirect(q,B,X,H,R,ct),R.onAfterRender(_,B,q,X,H,ct)}function zr(R,B,q){B.isScene!==!0&&(B=Zt);let X=xt.get(R),H=m.state.lights,ct=m.state.shadowsArray,_t=H.state.version,Pt=Ct.getParameters(R,H.state,ct,B,q),Dt=Ct.getProgramCacheKey(Pt),Gt=X.programs;X.environment=R.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(R.isMeshStandardMaterial?G:E).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Gt===void 0&&(R.addEventListener("dispose",qt),Gt=new Map,X.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===_t)return Nh(R,Pt),Xt}else Pt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Pt,_),Xt=Ct.acquireProgram(Pt,Dt),Gt.set(Dt,Xt),X.uniforms=Pt.uniforms;let It=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=at.uniform),Nh(R,Pt),X.needsLights=pf(R),X.lightsStateVersion=_t,X.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function zh(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=ms.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Nh(R,B){let q=xt.get(R);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function df(R,B,q,X,H){B.isScene!==!0&&(B=Zt),I.resetTextureUnits();let ct=B.fog,_t=X.isMeshStandardMaterial?B.environment:null,Pt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ds,Dt=(X.isMeshStandardMaterial?G:E).get(X.envMap||_t),Gt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,he=!!q.morphAttributes.color,ue=un;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=_.toneMapping);let Ze=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ne=Ze!==void 0?Ze.length:0,Ut=xt.get(X),Fi=m.state.lights;if(ot===!0&&(vt===!0||R!==M)){let li=R===M&&X.id===b;at.setState(X,R,li)}let se=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Fi.state.version||Ut.outputColorSpace!==Pt||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==Dt||X.fog===!0&&Ut.fog!==ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==Xt||Ut.morphTargets!==It||Ut.morphNormals!==ee||Ut.morphColors!==he||Ut.toneMapping!==ue||Ut.morphTargetsCount!==ne)&&(se=!0):(se=!0,Ut.__version=X.version);let xi=Ut.currentProgram;se===!0&&(xi=zr(X,B,H));let $n=!1,ti=!1,Hs=!1,de=xi.getUniforms(),Ri=Ut.uniforms;if(ut.useProgram(xi.program)&&($n=!0,ti=!0,Hs=!0),X.id!==b&&(b=X.id,ti=!0),$n||M!==R){ut.buffers.depth.getReversed()?(st.copy(R.projectionMatrix),lp(st),cp(st),de.setValue(U,"projectionMatrix",st)):de.setValue(U,"projectionMatrix",R.projectionMatrix),de.setValue(U,"viewMatrix",R.matrixWorldInverse);let tn=de.map.cameraPosition;tn!==void 0&&tn.setValue(U,Nt.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&de.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,ti=!0,Hs=!0)}if(H.isSkinnedMesh){de.setOptional(U,H,"bindMatrix"),de.setOptional(U,H,"bindMatrixInverse");let li=H.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),de.setValue(U,"boneTexture",li.boneTexture,I))}H.isBatchedMesh&&(de.setOptional(U,H,"batchingTexture"),de.setValue(U,"batchingTexture",H._matricesTexture,I),de.setOptional(U,H,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",H._indirectTexture,I),de.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",H._colorsTexture,I));let Vs=q.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&Bt.update(H,q,xi),(ti||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,de.setValue(U,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ri.envMap.value=Dt,Ri.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Ri.envMapIntensity.value=B.environmentIntensity),ti&&(de.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&ff(Ri,Hs),ct&&X.fog===!0&&ft.refreshFogUniforms(Ri,ct),ft.refreshMaterialUniforms(Ri,X,V,Z,m.state.transmissionRenderTarget[R.id]),ms.upload(U,zh(Ut),Ri,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ms.upload(U,zh(Ut),Ri,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&de.setValue(U,"center",H.center),de.setValue(U,"modelViewMatrix",H.modelViewMatrix),de.setValue(U,"normalMatrix",H.normalMatrix),de.setValue(U,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let li=X.uniformsGroups;for(let tn=0,en=li.length;tn<en;tn++){let kh=li[tn];k.update(kh,xi),k.bind(kh,xi)}}return xi}function ff(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function pf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,B,q){xt.get(R.texture).__webglTexture=B,xt.get(R.depthTexture).__webglTexture=q;let X=xt.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){let q=xt.get(R);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,q=0){P=R,S=B,w=q;let X=!0,H=null,ct=!1,_t=!1;if(R){let Dt=xt.get(R);if(Dt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(Dt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Dt.__hasExternalTextures)I.rebindTextures(R,xt.get(R.texture).__webglTexture,xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let It=R.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&xt.has(It)&&(R.width!==It.image.width||R.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(_t=!0);let Xt=xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?H=Xt[B][q]:H=Xt[B],ct=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?H=xt.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[q]:H=Xt,T.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else T.copy(ht).multiplyScalar(V).floor(),D.copy(wt).multiplyScalar(V).floor(),L=Ft;if(ut.bindFramebuffer(U.FRAMEBUFFER,H)&&X&&ut.drawBuffers(R,H),ut.viewport(T),ut.scissor(D),ut.setScissorTest(L),ct){let Dt=xt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,q)}else if(_t){let Dt=xt.get(R.texture),Gt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,q||0,Gt)}b=-1},this.readRenderTargetPixels=function(R,B,q,X,H,ct,_t){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(Pt=Pt[_t]),Pt){ut.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let Dt=R.texture,Gt=Dt.format,Xt=Dt.type;if(!Mt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-X&&q>=0&&q<=R.height-H&&U.readPixels(B,q,X,H,Ht.convert(Gt),Ht.convert(Xt),ct)}finally{let Dt=P!==null?xt.get(P).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,B,q,X,H,ct,_t){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(Pt=Pt[_t]),Pt){let Dt=R.texture,Gt=Dt.format,Xt=Dt.type;if(!Mt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-X&&q>=0&&q<=R.height-H){ut.bindFramebuffer(U.FRAMEBUFFER,Pt);let It=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,It),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(B,q,X,H,Ht.convert(Gt),Ht.convert(Xt),0);let ee=P!==null?xt.get(P).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,ee);let he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ap(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,It),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(It),U.deleteSync(he),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,q=0){R.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);let X=Math.pow(2,-q),H=Math.floor(R.image.width*X),ct=Math.floor(R.image.height*X),_t=B!==null?B.x:0,Pt=B!==null?B.y:0;I.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,_t,Pt,H,ct),ut.unbindTexture()},this.copyTextureToTexture=function(R,B,q=null,X=null,H=0){R.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],B=arguments[2],H=arguments[3]||0,q=null);let ct,_t,Pt,Dt,Gt,Xt,It,ee,he,ue=R.isCompressedTexture?R.mipmaps[H]:R.image;q!==null?(ct=q.max.x-q.min.x,_t=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,Gt=q.min.y,Xt=q.isBox3?q.min.z:0):(ct=ue.width,_t=ue.height,Pt=ue.depth||1,Dt=0,Gt=0,Xt=0),X!==null?(It=X.x,ee=X.y,he=X.z):(It=0,ee=0,he=0);let Ze=Ht.convert(B.format),ne=Ht.convert(B.type),Ut;B.isData3DTexture?(I.setTexture3D(B,0),Ut=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),Ut=U.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),Ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Fi=U.getParameter(U.UNPACK_ROW_LENGTH),se=U.getParameter(U.UNPACK_IMAGE_HEIGHT),xi=U.getParameter(U.UNPACK_SKIP_PIXELS),$n=U.getParameter(U.UNPACK_SKIP_ROWS),ti=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);let Hs=R.isDataArrayTexture||R.isData3DTexture,de=B.isDataArrayTexture||B.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Ri=xt.get(R),Vs=xt.get(B),li=xt.get(Ri.__renderTarget),tn=xt.get(Vs.__renderTarget);ut.bindFramebuffer(U.READ_FRAMEBUFFER,li.__webglFramebuffer),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let en=0;en<Pt;en++)Hs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.get(R).__webglTexture,H,Xt+en),R.isDepthTexture?(de&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.get(B).__webglTexture,H,he+en),U.blitFramebuffer(Dt,Gt,ct,_t,It,ee,ct,_t,U.DEPTH_BUFFER_BIT,U.NEAREST)):de?U.copyTexSubImage3D(Ut,H,It,ee,he+en,Dt,Gt,ct,_t):U.copyTexSubImage2D(Ut,H,It,ee,he+en,Dt,Gt,ct,_t);ut.bindFramebuffer(U.READ_FRAMEBUFFER,null),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Ut,H,It,ee,he,ct,_t,Pt,Ze,ne,ue.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,H,It,ee,he,ct,_t,Pt,Ze,ue.data):U.texSubImage3D(Ut,H,It,ee,he,ct,_t,Pt,Ze,ne,ue):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,It,ee,ct,_t,Ze,ne,ue.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,It,ee,ue.width,ue.height,Ze,ue.data):U.texSubImage2D(U.TEXTURE_2D,H,It,ee,ct,_t,Ze,ne,ue);U.pixelStorei(U.UNPACK_ROW_LENGTH,Fi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xi),U.pixelStorei(U.UNPACK_SKIP_ROWS,$n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ti),H===0&&B.generateMipmaps&&U.generateMipmap(Ut),ut.unbindTexture()},this.copyTextureToTexture3D=function(R,B,q=null,X=null,H=0){return R.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,X=arguments[1]||null,R=arguments[2],B=arguments[3],H=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,B,q,X,H)},this.initRenderTarget=function(R){xt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),ut.unbindTexture()},this.resetState=function(){S=0,w=0,P=null,ut.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}},Co=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var kn=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ui=class extends je{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Ee,h=Ee,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class extends fe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new Tt,Fu=new Tt,no=[],Ou=new Si,rx=new Tt,Ys=new $t,$s=new mn,di=class extends $t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ui(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,rx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),Ou.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),$s.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),t.ray.intersectsSphere($s)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,cs),Fu.multiplyMatrices(i,cs),Ys.matrixWorld=Fu,Ys.raycast(t,no);for(let a=0,o=no.length;a<o;a++){let l=no[a];l.instanceId=s,l.object=this,e.push(l)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(n*this.count),n,this.count,Ps,Di));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ar=class extends ji{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bu=new Tt,_c=new Mo,so=new mn,ro=new C,Ro=class extends ze{constructor(t=new ye,e=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(n),so.radius+=s,t.ray.intersectsSphere(so)===!1)return;Bu.copy(n).invert(),_c.copy(t.ray).applyMatrix4(Bu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);ro.fromBufferAttribute(u,g),Hu(ro,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)ro.fromBufferAttribute(u,p),Hu(ro,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Hu(r,t,e,i,n,s,a){let o=_c.distanceSqToPoint(r);if(o<e){let l=new C;_c.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ss=class extends je{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new nt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,n=[],s=[],a=[],o=new C,l=new Tt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ue(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ue(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends fi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mc=class extends lr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var oo=new C,ml=new ah,gl=new ah,vl=new ah,bc=class extends fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(oo.subVectors(n[0],n[1]).add(n[0]),c=oo);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(oo.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),ml.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),gl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),vl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ml.calc(l),gl.calc(l),vl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function ox(r,t){let e=1-r;return e*e*t}function ax(r,t){return 2*(1-r)*r*t}function lx(r,t){return r*r*t}function er(r,t,e,i){return ox(r,t)+ax(r,e)+lx(r,i)}function cx(r,t){let e=1-r;return e*e*e*t}function hx(r,t){let e=1-r;return 3*e*e*r*t}function ux(r,t){return 3*(1-r)*r*r*t}function dx(r,t){return r*r*r*t}function ir(r,t,e,i,n){return cx(r,t)+hx(r,e)+ux(r,i)+dx(r,n)}var Po=class extends fi{constructor(t=new nt,e=new nt,i=new nt,n=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new nt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(t,n.x,s.x,a.x,o.x),ir(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wc=class extends fi{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(t,n.x,s.x,a.x,o.x),ir(t,n.y,s.y,a.y,o.y),ir(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends fi{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends fi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends fi{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(er(t,n.x,s.x,a.x),er(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tc=class extends fi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(er(t,n.x,s.x,a.x),er(t,n.y,s.y,a.y),er(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Vu(o,l.x,c.x,h.x,u.x),Vu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new nt().fromArray(n))}return this}},Ec=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:bc,CubicBezierCurve:Po,CubicBezierCurve3:wc,EllipseCurve:lr,LineCurve:Do,LineCurve3:Sc,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Tc,SplineCurve:Lo}),Ac=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Ec[n.type]().fromJSON(n))}return this}},Uo=class extends Ac{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Do(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Io(this.currentPoint.clone(),new nt(t,e),new nt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Po(this.currentPoint.clone(),new nt(t,e),new nt(i,n),new nt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Lo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new lr(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ts=class r extends ye{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,v=[],g=i/2,m=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function y(){let _=new C,A=new C,S=0,w=(e-t)/i;for(let P=0;P<=s;P++){let b=[],M=P/s,T=M*(e-t)+t;for(let D=0;D<=n;D++){let L=D/n,z=L*l+o,F=Math.sin(z),O=Math.cos(z);A.x=T*F,A.y=-M*i+g,A.z=T*O,u.push(A.x,A.y,A.z),_.set(F,w,O).normalize(),d.push(_.x,_.y,_.z),f.push(L,1-M),b.push(p++)}v.push(b)}for(let P=0;P<n;P++)for(let b=0;b<s;b++){let M=v[b][P],T=v[b+1][P],D=v[b+1][P+1],L=v[b][P+1];(t>0||b!==0)&&(h.push(M,T,L),S+=3),(e>0||b!==s-1)&&(h.push(T,D,L),S+=3)}c.addGroup(m,S,0),m+=S}function x(_){let A=p,S=new nt,w=new C,P=0,b=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let T=p;for(let D=0;D<=n;D++){let z=D/n*l+o,F=Math.cos(z),O=Math.sin(z);w.x=b*O,w.y=g*M,w.z=b*F,u.push(w.x,w.y,w.z),d.push(0,M,0),S.x=F*.5+.5,S.y=O*.5*M+.5,f.push(S.x,S.y),p++}for(let D=0;D<n;D++){let L=A+D,z=T+D;_===!0?h.push(z,z+1,L):h.push(z+1,z,L),P+=3}c.addGroup(m,P,_===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fn=class r extends Ts{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zo=class r extends ye{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(s.slice(),3)),this.setAttribute("uv",new ce(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new C,_=new C,A=new C;for(let S=0;S<e.length;S+=3)f(e[S+0],x),f(e[S+1],_),f(e[S+2],A),l(x,_,A,y)}function l(y,x,_,A){let S=A+1,w=[];for(let P=0;P<=S;P++){w[P]=[];let b=y.clone().lerp(_,P/S),M=x.clone().lerp(_,P/S),T=S-P;for(let D=0;D<=T;D++)D===0&&P===S?w[P][D]=b:w[P][D]=b.clone().lerp(M,D/T)}for(let P=0;P<S;P++)for(let b=0;b<2*(S-P)-1;b++){let M=Math.floor(b/2);b%2===0?(d(w[P][M+1]),d(w[P+1][M]),d(w[P][M])):(d(w[P][M+1]),d(w[P+1][M+1]),d(w[P+1][M]))}}function c(y){let x=new C;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){let y=new C;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let _=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;a.push(_,1-A)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],A=a[y+4],S=Math.max(x,_,A),w=Math.min(x,_,A);S>.9&&w<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){let _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function p(){let y=new C,x=new C,_=new C,A=new C,S=new nt,w=new nt,P=new nt;for(let b=0,M=0;b<s.length;b+=9,M+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),S.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),A.copy(y).add(x).add(_).divideScalar(3);let T=g(A);v(S,M+0,y,T),v(w,M+2,x,T),v(P,M+4,_,T)}}function v(y,x,_,A){A<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},No=class r extends zo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var cr=class extends Uo{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Uo().fromJSON(n))}return this}},fx={triangulate:function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=yd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=xx(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let p=e;p<n;p+=e)u=r[p],d=r[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return hr(s,a,e,o,l,f,0),a}};function yd(r,t,e,i,n){let s,a;if(n===Rx(r,t,e,i)>0)for(s=t;s<e;s+=i)a=Gu(s,r[s],r[s+1],a);else for(s=e-i;s>=t;s-=i)a=Gu(s,r[s],r[s+1],a);return a&&jo(a,a.next)&&(dr(a),a=a.next),a}function On(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(jo(e,e.next)||ge(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function hr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&wx(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?mx(r,i,n,s):px(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),dr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=gx(On(r),t,e),hr(r,t,e,i,n,s,2)):a===2&&vx(r,t,e,i,n,s):hr(On(r),t,e,i,n,s,1);break}}}function px(r){let t=r.prev,e=r,i=r.next;if(ge(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ds(n,o,s,l,a,c,p.x,p.y)&&ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function mx(r,t,e,i){let n=r.prev,s=r,a=r.next;if(ge(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Cc(f,p,t,e,i),y=Cc(v,g,t,e,i),x=r.prevZ,_=r.nextZ;for(;x&&x.z>=m&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==n&&x!==a&&ds(o,h,l,u,c,d,x.x,x.y)&&ge(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&ds(o,h,l,u,c,d,_.x,_.y)&&ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==n&&x!==a&&ds(o,h,l,u,c,d,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&ds(o,h,l,u,c,d,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function gx(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!jo(n,s)&&_d(n,i,i.next,s)&&ur(n,s)&&ur(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),dr(i),dr(i.next),i=r=s),i=i.next}while(i!==r);return On(i)}function vx(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ex(a,o)){let l=Md(a,o);a=On(a,a.next),l=On(l,l.next),hr(a,t,e,i,n,s,0),hr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function xx(r,t,e,i){let n=[],s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=yd(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Tx(c));for(n.sort(yx),s=0;s<n.length;s++)e=_x(n[s],e);return e}function yx(r,t){return r.x-t.x}function _x(r,t){let e=Mx(r,t);if(!e)return t;let i=Md(e,r);return On(i,i.next),On(e,e.next)}function Mx(r,t){let e=t,i=-1/0,n,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===s))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&ds(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),ur(e,r)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&bx(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function bx(r,t){return ge(r.prev,r,t.prev)<0&&ge(t.next,r,r.next)<0}function wx(r,t,e,i){let n=r;do n.z===0&&(n.z=Cc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Sx(n)}function Sx(r){let t,e,i,n,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(a>1);return r}function Cc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Tx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ds(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Ex(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Ax(r,t)&&(ur(r,t)&&ur(t,r)&&Cx(r,t)&&(ge(r.prev,r,t.prev)||ge(r,t.prev,t))||jo(r,t)&&ge(r.prev,r,r.next)>0&&ge(t.prev,t,t.next)>0)}function ge(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function jo(r,t){return r.x===t.x&&r.y===t.y}function _d(r,t,e,i){let n=lo(ge(r,t,e)),s=lo(ge(r,t,i)),a=lo(ge(e,i,r)),o=lo(ge(e,i,t));return!!(n!==s&&a!==o||n===0&&ao(r,e,t)||s===0&&ao(r,i,t)||a===0&&ao(e,r,i)||o===0&&ao(e,t,i))}function ao(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function lo(r){return r>0?1:r<0?-1:0}function Ax(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&_d(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ur(r,t){return ge(r.prev,r,r.next)<0?ge(r,t,r.next)>=0&&ge(r,r.prev,t)>=0:ge(r,t,r.prev)<0||ge(r,r.next,t)<0}function Cx(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Md(r,t){let e=new Rc(r.i,r.x,r.y),i=new Rc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Gu(r,t,e,i){let n=new Rc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function dr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Rc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rx(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var nr=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];Wu(t),qu(i,t);let a=t.length;e.forEach(Wu);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,qu(i,e[l]);let o=fx.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Wu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function qu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var ko=class r extends ye{constructor(t=new cr([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ce(n,3)),this.setAttribute("uv",new ce(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Px,x,_=!1,A,S,w,P;m&&(x=m.getSpacedPoints(h),_=!0,d=!1,A=m.computeFrenetFrames(h,!1),S=new C,w=new C,P=new C),d||(g=0,f=0,p=0,v=0);let b=o.extractPoints(c),M=b.shape,T=b.holes;if(!nr.isClockWise(M)){M=M.reverse();for(let tt=0,lt=T.length;tt<lt;tt++){let U=T[tt];nr.isClockWise(U)&&(T[tt]=U.reverse())}}let L=nr.triangulateShape(M,T),z=M;for(let tt=0,lt=T.length;tt<lt;tt++){let U=T[tt];M=M.concat(U)}function F(tt,lt,U){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(lt,U)}let O=M.length,Z=L.length;function V(tt,lt,U){let Rt,rt,Mt,ut=tt.x-lt.x,kt=tt.y-lt.y,xt=U.x-tt.x,I=U.y-tt.y,E=ut*ut+kt*kt,G=ut*I-kt*xt;if(Math.abs(G)>Number.EPSILON){let j=Math.sqrt(E),it=Math.sqrt(xt*xt+I*I),J=lt.x-kt/j,Ct=lt.y+ut/j,ft=U.x-I/it,gt=U.y+xt/it,Wt=((ft-J)*I-(gt-Ct)*xt)/(ut*I-kt*xt);Rt=J+ut*Wt-tt.x,rt=Ct+kt*Wt-tt.y;let at=Rt*Rt+rt*rt;if(at<=2)return new nt(Rt,rt);Mt=Math.sqrt(at/2)}else{let j=!1;ut>Number.EPSILON?xt>Number.EPSILON&&(j=!0):ut<-Number.EPSILON?xt<-Number.EPSILON&&(j=!0):Math.sign(kt)===Math.sign(I)&&(j=!0),j?(Rt=-kt,rt=ut,Mt=Math.sqrt(E)):(Rt=ut,rt=kt,Mt=Math.sqrt(E/2))}return new nt(Rt/Mt,rt/Mt)}let Q=[];for(let tt=0,lt=z.length,U=lt-1,Rt=tt+1;tt<lt;tt++,U++,Rt++)U===lt&&(U=0),Rt===lt&&(Rt=0),Q[tt]=V(z[tt],z[U],z[Rt]);let K=[],ht,wt=Q.concat();for(let tt=0,lt=T.length;tt<lt;tt++){let U=T[tt];ht=[];for(let Rt=0,rt=U.length,Mt=rt-1,ut=Rt+1;Rt<rt;Rt++,Mt++,ut++)Mt===rt&&(Mt=0),ut===rt&&(ut=0),ht[Rt]=V(U[Rt],U[Mt],U[ut]);K.push(ht),wt=wt.concat(ht)}for(let tt=0;tt<g;tt++){let lt=tt/g,U=f*Math.cos(lt*Math.PI/2),Rt=p*Math.sin(lt*Math.PI/2)+v;for(let rt=0,Mt=z.length;rt<Mt;rt++){let ut=F(z[rt],Q[rt],Rt);st(ut.x,ut.y,-U)}for(let rt=0,Mt=T.length;rt<Mt;rt++){let ut=T[rt];ht=K[rt];for(let kt=0,xt=ut.length;kt<xt;kt++){let I=F(ut[kt],ht[kt],Rt);st(I.x,I.y,-U)}}}let Ft=p+v;for(let tt=0;tt<O;tt++){let lt=d?F(M[tt],wt[tt],Ft):M[tt];_?(w.copy(A.normals[0]).multiplyScalar(lt.x),S.copy(A.binormals[0]).multiplyScalar(lt.y),P.copy(x[0]).add(w).add(S),st(P.x,P.y,P.z)):st(lt.x,lt.y,0)}for(let tt=1;tt<=h;tt++)for(let lt=0;lt<O;lt++){let U=d?F(M[lt],wt[lt],Ft):M[lt];_?(w.copy(A.normals[tt]).multiplyScalar(U.x),S.copy(A.binormals[tt]).multiplyScalar(U.y),P.copy(x[tt]).add(w).add(S),st(P.x,P.y,P.z)):st(U.x,U.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){let lt=tt/g,U=f*Math.cos(lt*Math.PI/2),Rt=p*Math.sin(lt*Math.PI/2)+v;for(let rt=0,Mt=z.length;rt<Mt;rt++){let ut=F(z[rt],Q[rt],Rt);st(ut.x,ut.y,u+U)}for(let rt=0,Mt=T.length;rt<Mt;rt++){let ut=T[rt];ht=K[rt];for(let kt=0,xt=ut.length;kt<xt;kt++){let I=F(ut[kt],ht[kt],Rt);_?st(I.x,I.y+x[h-1].y,x[h-1].x+U):st(I.x,I.y,u+U)}}}Y(),ot();function Y(){let tt=n.length/3;if(d){let lt=0,U=O*lt;for(let Rt=0;Rt<Z;Rt++){let rt=L[Rt];St(rt[2]+U,rt[1]+U,rt[0]+U)}lt=h+g*2,U=O*lt;for(let Rt=0;Rt<Z;Rt++){let rt=L[Rt];St(rt[0]+U,rt[1]+U,rt[2]+U)}}else{for(let lt=0;lt<Z;lt++){let U=L[lt];St(U[2],U[1],U[0])}for(let lt=0;lt<Z;lt++){let U=L[lt];St(U[0]+O*h,U[1]+O*h,U[2]+O*h)}}i.addGroup(tt,n.length/3-tt,0)}function ot(){let tt=n.length/3,lt=0;vt(z,lt),lt+=z.length;for(let U=0,Rt=T.length;U<Rt;U++){let rt=T[U];vt(rt,lt),lt+=rt.length}i.addGroup(tt,n.length/3-tt,1)}function vt(tt,lt){let U=tt.length;for(;--U>=0;){let Rt=U,rt=U-1;rt<0&&(rt=tt.length-1);for(let Mt=0,ut=h+g*2;Mt<ut;Mt++){let kt=O*Mt,xt=O*(Mt+1),I=lt+Rt+kt,E=lt+rt+kt,G=lt+rt+xt,j=lt+Rt+xt;Nt(I,E,G,j)}}}function st(tt,lt,U){l.push(tt),l.push(lt),l.push(U)}function St(tt,lt,U){Lt(tt),Lt(lt),Lt(U);let Rt=n.length/3,rt=y.generateTopUV(i,n,Rt-3,Rt-2,Rt-1);Zt(rt[0]),Zt(rt[1]),Zt(rt[2])}function Nt(tt,lt,U,Rt){Lt(tt),Lt(lt),Lt(Rt),Lt(lt),Lt(U),Lt(Rt);let rt=n.length/3,Mt=y.generateSideWallUV(i,n,rt-6,rt-3,rt-2,rt-1);Zt(Mt[0]),Zt(Mt[1]),Zt(Mt[3]),Zt(Mt[1]),Zt(Mt[2]),Zt(Mt[3])}function Lt(tt){n.push(l[tt*3+0]),n.push(l[tt*3+1]),n.push(l[tt*3+2])}function Zt(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Dx(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Ec[n.type]().fromJSON(n)),new r(i,t.options)}},Px={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new nt(s,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],v=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-u),new nt(d,1-p),new nt(v,1-m)]:[new nt(o,1-l),new nt(h,1-u),new nt(f,1-p),new nt(g,1-m)]}};function Dx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fo=class r extends zo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Oo=class extends Jt{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ve=class extends ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bo=class extends ji{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function co(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ix(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Es=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends Es{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vh:s=t,o=2*e-i;break;case Gh:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:a=t,l=2*i-e;break;case Gh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let A=0;A!==o;++A)s[A]=m*a[h+A]+y*a[c+A]+x*a[l+A]+_*a[u+A];return s}},Dc=class extends Es{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ic=class extends Es{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case sc:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Ix(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Va,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=sc;var Bn=class extends Ti{constructor(t,e,i){super(t,e,i)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=go;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Ti{};Lc.prototype.ValueTypeName="color";var Uc=class extends Ti{};Uc.prototype.ValueTypeName="number";var zc=class extends Es{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ae.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ho=class extends Ti{InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Ti{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=go;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Ti{};Nc.prototype.ValueTypeName="vector";var kc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Lx=new kc,Fc=class{constructor(t){this.manager=t!==void 0?t:Lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Cs=class extends As{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},xl=new Tt,Xu=new C,Yu=new C,fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oc=class extends fr{constructor(){super(new Se(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=ys*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Vo=class extends As{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Oc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$u=new Tt,Zs=new C,yl=new C,Bc=class extends fr{constructor(){super(new Se(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zs),yl.copy(i.position),yl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(yl),i.updateMatrixWorld(),n.makeTranslation(-Zs.x,-Zs.y,-Zs.z),$u.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}},Go=class extends As{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Hc=class extends fr{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gn=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var pr=class extends ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Wo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zu(){return performance.now()}var lh="\\[\\]\\.:\\/",Ux=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",zx="[^"+lh.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",ch),kx=/(WCOD+)?/.source.replace("WCOD",zx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Bx=new RegExp("^"+Nx+kx+Fx+Ox+"$"),Hx=["material","materials","bones","map"],Vc=class{constructor(t,e,i){let n=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ux,"")}static parseTrackName(t){let e=Bx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Hx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Vc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);var bd="fireline.settings.v1",Ls={low:{renderScale:.75,shadows:"off",ssao:!1,bloom:!1,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!1,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!1,grass:"off",treeWind:!1,waterReflections:!1,waterWaves:!0,particles:"low",decals:!0,debris:!1,viewDistance:500},medium:{renderScale:1,shadows:"medium",ssao:!1,bloom:!0,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!0,grass:"low",treeWind:!0,waterReflections:!1,waterWaves:!0,particles:"medium",decals:!0,debris:!0,viewDistance:700},high:{renderScale:1,shadows:"high",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"medium",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:900},ultra:{renderScale:1,shadows:"ultra",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"high",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:1200}},Vx=Object.assign({preset:"high",fov:95,sensitivity:1,adsSensitivity:.85,invertY:!1,volume:.8,musicVolume:.5,showFps:!0,screenShake:!0,headBob:!0,difficulty:"veteran",crosshair:!0,nameTags:!0},Ls.high),wd=[{group:"Display"},{key:"preset",label:"Quality preset",type:"select",options:["low","medium","high","ultra","custom"]},{key:"renderScale",label:"Render scale",type:"range",min:.5,max:1.5,step:.05},{key:"fov",label:"Field of view (horizontal)",type:"range",min:70,max:115,step:1},{key:"viewDistance",label:"View distance (m)",type:"range",min:300,max:1500,step:50},{key:"antialias",label:"Anti-aliasing",type:"select",options:["off","fxaa","msaa"]},{key:"showFps",label:"Show FPS",type:"bool"},{group:"Lighting"},{key:"shadows",label:"Shadows",type:"select",options:["off","low","medium","high","ultra"],hint:"high/ultra use cascaded shadow maps"},{key:"ssao",label:"Ambient occlusion (GTAO)",type:"bool"},{key:"ibl",label:"Image-based lighting",type:"bool"},{key:"atmosphere",label:"Atmospheric sky",type:"bool"},{key:"fog",label:"Fog / aerial haze",type:"bool"},{group:"Post-processing"},{key:"bloom",label:"Bloom",type:"bool"},{key:"dof",label:"Depth of field (ADS / menus)",type:"bool"},{key:"motionBlur",label:"Motion blur",type:"bool"},{key:"colorGrading",label:"Color grading",type:"bool"},{key:"filmGrain",label:"Film grain",type:"bool"},{key:"vignette",label:"Vignette",type:"bool"},{key:"chromatic",label:"Chromatic aberration",type:"bool"},{group:"World"},{key:"grass",label:"Grass",type:"select",options:["off","low","medium","high"]},{key:"treeWind",label:"Wind sway (trees & grass)",type:"bool"},{key:"waterReflections",label:"Water reflections",type:"bool"},{key:"waterWaves",label:"Water waves & foam",type:"bool"},{group:"Effects"},{key:"particles",label:"Particle quality",type:"select",options:["low","medium","high"]},{key:"decals",label:"Decals (bullet holes, scorch)",type:"bool"},{key:"debris",label:"Destruction debris physics",type:"bool"},{key:"screenShake",label:"Screen shake",type:"bool"},{key:"headBob",label:"Head bob",type:"bool"},{group:"Gameplay"},{key:"difficulty",label:"Bot difficulty",type:"select",options:["recruit","regular","veteran","elite"]},{key:"crosshair",label:"Crosshair",type:"bool"},{key:"nameTags",label:"Friendly name tags",type:"bool"},{group:"Controls & audio"},{key:"sensitivity",label:"Mouse sensitivity",type:"range",min:.1,max:3,step:.05},{key:"adsSensitivity",label:"ADS sensitivity",type:"range",min:.2,max:1.5,step:.05},{key:"invertY",label:"Invert Y",type:"bool"},{key:"volume",label:"Master volume",type:"range",min:0,max:1,step:.05}],hh=class{constructor(){this.values=Object.assign({},Vx),this.listeners=[];try{let t=localStorage.getItem(bd);t&&Object.assign(this.values,JSON.parse(t))}catch{}}get(t){return this.values[t]}set(t,e){this.values[t]=e,t==="preset"&&Ls[e]?Object.assign(this.values,Ls[e]):t in Ls.high&&t!=="preset"&&(this.values.preset="custom"),this.save();for(let i of this.listeners)i(t,e)}onChange(t){this.listeners.push(t)}save(){try{localStorage.setItem(bd,JSON.stringify(this.values))}catch{}}},Ko=new hh;var Jo=class r{constructor(){this.ctx=null,this.buffers={},this.voices=0,this.volume=.8,this.listener={x:0,y:0,z:0,fx:0,fz:-1},this.loops={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e}catch{this.ctx=null;return}let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.volume,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.25,this.master.connect(this.comp),this.comp.connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(2.6,2.2),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.32,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.generate()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}makeImpulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let l=0;l<n;l++){let c=l/n;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<400?l/400:1)}}return s}buf(t,e){let i=this.ctx,n=i.sampleRate,s=Math.max(1,Math.floor(n*t)),a=i.createBuffer(1,s,n),o=a.getChannelData(0);e(o,n,s);let l=0;for(let c=0;c<s;c++)l=Math.max(l,Math.abs(o[c]));if(l>0)for(let c=0;c<s;c++)o[c]/=l;return a}static lp(t,e){let i=0;for(let n=0;n<t.length;n++)i+=e*(t[n]-i),t[n]=i}static hp(t,e){let i=0,n=0;for(let s=0;s<t.length;s++)i=e*(i+t[s]-n),n=t[s],t[s]=i}gun(t,e,i,n,s,a){return this.buf(t,(o,l,c)=>{let h=new Float32Array(c);for(let u=0;u<c;u++)h[u]=Math.random()*2-1;r.lp(h,a);for(let u=0;u<c;u++){let d=u/l,f=Math.exp(-d*e)*.8+Math.exp(-d*s)*.25,p=Math.exp(-d*300)*i*(Math.random()*2-1),v=Math.sin(2*Math.PI*n*d*(1-d*2))*Math.exp(-d*28)*.9;o[u]=h[u]*f*2.2+p+v}})}generate(){let t=this.buffers;t.rifle=this.gun(.9,30,1,85,5,.45),t.carbine=this.gun(.8,34,1,95,6,.5),t.smg=this.gun(.55,48,.8,120,9,.55),t.pistol=this.gun(.5,45,.9,140,9,.6),t.lmg=this.gun(1,26,1.1,70,4,.4),t.sniper=this.gun(1.8,16,1.3,55,2.2,.35),t.dmr=this.gun(1.3,22,1.2,65,3,.38),t.shotgun=this.gun(1.1,18,.9,60,3.5,.3),t.suppressed=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*45)*.6+Math.sin(2*Math.PI*180*u)*Math.exp(-u*60)*.5}r.lp(o,.25)}),t.far=this.buf(1.6,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*14)+Math.exp(-u*3)*.3)}r.lp(o,.06),r.lp(o,.1)}),t.explosion=this.buf(3.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*3.2)+Math.exp(-u*18)*1.5)+Math.sin(2*Math.PI*(55-u*12)*u)*Math.exp(-u*4)*1.2}r.lp(o,.08),r.lp(o,.18)}),t.explosionFar=this.buf(3.5,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*2.2)+Math.sin(2*Math.PI*40*u)*Math.exp(-u*3)}r.lp(o,.025),r.lp(o,.05)});let e=o=>this.buf(.12,(l,c,h)=>{for(let u=0;u<h;u++){let d=u/c;l[u]=(Math.random()*2-1)*Math.exp(-d*(o?70:45))*(d<.004?d/.004:1)}r.lp(l,o?.5:.18)});t.stepGrass=e(!1),t.stepHard=e(!0),t.stepWater=this.buf(.3,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*14)*(.5+.5*Math.sin(u*300))}r.lp(o,.3)});let i=(o,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.sin(2*Math.PI*o*p)*.6+(Math.random()*2-1)*.5)*Math.exp(-p*c)}});t.magOut=i(900,.15,40),t.magIn=i(1300,.12,55),t.bolt=this.buf(.3,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=u<.12?Math.exp(-u*60):Math.exp(-(u-.15)*60)*(u>.15?1:0);o[h]=(Math.sin(2*Math.PI*1500*u)*.5+(Math.random()*2-1)*.6)*d}}),t.dry=i(2400,.06,120),t.pin=i(3e3,.18,30),t.switch=i(700,.1,50),t.hit=this.buf(.07,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*2200*u)*Math.exp(-u*70)}}),t.headshot=this.buf(.35,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.sin(2*Math.PI*1760*u)+Math.sin(2*Math.PI*2640*u)*.5)*Math.exp(-u*12)}}),t.kill=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*(900+u*1200)*u)*Math.exp(-u*14)+(Math.random()*2-1)*Math.exp(-u*60)*.3}}),t.hurt=this.buf(.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*(120-u*200)*u)*Math.exp(-u*18)+(Math.random()*2-1)*Math.exp(-u*40)*.4}r.lp(o,.3)}),t.whiz=this.buf(.35,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.sin(Math.PI*u/.35);o[h]=(Math.random()*2-1)*d*d}r.hp(o,.92),r.lp(o,.4)}),t.crack=this.buf(.09,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*90)+(u<.002?1:0)}r.hp(o,.8)});let n=(o,l,c)=>this.buf(.25,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*Math.exp(-p*l)+(c?Math.sin(2*Math.PI*c*p)*Math.exp(-p*20)*.6:0)}r.lp(h,o)});t.impactDirt=n(.15,50,0),t.impactHard=n(.55,70,0),t.impactMetal=n(.7,40,2900),t.impactWood=n(.3,45,420),t.impactFlesh=n(.12,35,0),t.impactWater=this.buf(.4,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*12)*(.6+.4*Math.sin(u*900))}r.lp(o,.25)});let s=(o,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*(Math.exp(-p*6)*(.5+Math.random()*.5))+(c?Math.sin(2*Math.PI*c*p*(1+p))*Math.exp(-p*5)*.4:0)}r.lp(h,o)});t.breakWood=s(.25,.9,300),t.breakStone=s(.12,1.4,0),t.breakMetal=s(.5,1.2,1200);let a=(o,l)=>this.buf(l,(c,h,u)=>{for(let d=0;d<u;d++){let f=d/h,p=Math.min(o.length-1,Math.floor(f/l*o.length));c[d]=Math.sin(2*Math.PI*o[p]*f)*Math.min(1,(l-f)*10)*Math.min(1,f*200)*.6}});t.capture=a([660,880,1320],.5),t.lost=a([880,660,440],.5),t.beep=a([1200],.12),t.ui=a([900],.05),t.deploy=a([440,660],.3),t.heartbeat=this.buf(.8,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.exp(-((u-.05)**2)/4e-4),f=Math.exp(-((u-.28)**2)/4e-4)*.7;o[h]=Math.sin(2*Math.PI*55*u)*(d+f)}}),t.bandage=this.buf(.6,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(.4+.6*Math.abs(Math.sin(u*40)))*Math.exp(-u*3)}r.hp(o,.7)}),t.throw=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.sin(Math.PI*u/.25)}r.lp(o,.2)}),t.bounce=n(.4,60,1800),t.rocket=this.buf(1.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*25)*1.5+Math.exp(-u*2)*.5)}r.lp(o,.2)}),t.wind=this.buf(6,(o,l,c)=>{let h=0;for(let d=0;d<c;d++){h=(h+.02*(Math.random()*2-1))/1.02;let f=d/l;o[d]=h*(.6+.4*Math.sin(f*.9)*Math.sin(f*.37+1))}let u=Math.floor(l*.3);for(let d=0;d<u;d++){let f=d/u;o[d]=o[d]*f+o[c-u+d]*(1-f)}}),t.birds=this.buf(8,(o,l,c)=>{for(let h=0;h<14;h++){let u=Math.random()*7.2,d=2500+Math.random()*2500,f=2+Math.floor(Math.random()*4);for(let p=0;p<f;p++){let v=Math.floor((u+p*.13)*l),g=Math.floor(.08*l);for(let m=0;m<g&&v+m<c;m++){let y=m/l;o[v+m]+=Math.sin(2*Math.PI*(d+Math.sin(y*90)*600)*y)*Math.sin(Math.PI*m/g)*.3}}}})}setListener(t,e,i,n,s){let a=this.listener;a.x=t,a.y=e,a.z=i;let o=Math.hypot(n,s)||1;a.fx=n/o,a.fz=s/o}_out(t,e,i,n,s){let a=this.ctx,o=a.createGain();o.gain.value=t;let l=o;if(i<19e3){let h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=i,o.connect(h),l=h}let c=l;if(a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=e,l.connect(h),c=h}if(c.connect(this.master),n>0){let h=a.createGain();h.gain.value=n,c.connect(h),h.connect(this.reverb)}return o}play2d(t,e={}){if(!this.ctx||!this.buffers[t]||this.voices>60)return;let i=this.ctx.createBufferSource();i.buffer=this.buffers[t],i.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let n=this._out(e.vol??1,e.pan||0,e.cutoff||2e4,e.reverb??.05);return i.connect(n),this.voices++,i.onended=()=>{this.voices--;try{n.disconnect()}catch{}},i.start(this.ctx.currentTime+(e.delay||0)),i}play3d(t,e,i,n,s={}){if(!this.ctx)return;let a=this.listener,o=e-a.x,l=i-a.y,c=n-a.z,h=Math.sqrt(o*o+l*l+c*c),u=s.maxDist||120;if(h>u)return;let d=s.ref||6,f=(s.vol??1)*d/(d+Math.max(0,h-d)*(s.rolloff||1));if(f*=1-Math.pow(h/u,3),f<.004||this.voices>48&&f<.15)return;let p=-a.fz,v=a.fx,g=h>.5?Math.max(-1,Math.min(1,(o*p+c*v)/Math.max(1,Math.hypot(o,c))*.85)):0,m=s.occluded?Math.min(2500,2e4/(1+h*.02)):2e4/(1+h*.012),y=h>60?h/343:0;this.play2d(t,{vol:f,pan:g,cutoff:m,rate:s.rate,vary:s.vary??.08,reverb:(s.reverb??.18)*Math.min(1,.4+h/80),delay:y})}gunshot(t,e,i,n,s,a){if(!this.ctx)return;if(s){this.play3d("suppressed",e,i,n,{vol:a?.55:.6,maxDist:60,ref:4});return}if(a){this.play2d(t,{vol:.62,vary:.06,reverb:.28});return}let o=this.listener,l=Math.hypot(e-o.x,i-o.y,n-o.z);l<90&&this.play3d(t,e,i,n,{vol:.95,maxDist:160,ref:10,rolloff:.8}),l>40&&this.play3d("far",e,i,n,{vol:.55*Math.min(1,(l-40)/60),maxDist:900,ref:60,rolloff:.5,reverb:.5})}explosion(t,e,i){if(!this.ctx)return;let n=this.listener;Math.hypot(t-n.x,e-n.y,i-n.z)<150&&this.play3d("explosion",t,e,i,{vol:1.2,maxDist:250,ref:14,rolloff:.7,reverb:.4}),this.play3d("explosionFar",t,e,i,{vol:.9,maxDist:1200,ref:80,rolloff:.5,reverb:.6})}startAmbience(t,e){if(!this.ctx)return;this.stopAmbience();let i=(n,s)=>{let a=this.ctx.createBufferSource();a.buffer=this.buffers[n],a.loop=!0;let o=this.ctx.createGain();return o.gain.value=s,a.connect(o),o.connect(this.master),a.start(),{src:a,g:o}};this.loops.wind=i("wind",t==="arid"?.22:.14),!e&&t!=="arid"&&(this.loops.birds=i("birds",.06))}stopAmbience(){for(let t in this.loops)try{this.loops[t].src.stop()}catch{}this.loops={}}};var Qo=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,buttons:0,pressed:new Set,released:new Set,wheel:0},this.locked=!1,this.enabled=!0,this.listeners=[];let e=(i,n,s,a)=>{i.addEventListener(n,s,a),this.listeners.push([i,n,s,a])};e(window,"keydown",i=>{this.enabled&&((["Tab","Space","KeyF","ControlLeft","AltLeft"].includes(i.code)||i.ctrlKey&&i.code==="KeyW")&&i.preventDefault(),this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code))}),e(window,"keyup",i=>{this.keys.delete(i.code),this.released.add(i.code)}),e(window,"blur",()=>{this.keys.clear(),this.mouse.buttons=0}),e(t,"mousedown",i=>{this.enabled&&(this.mouse.buttons|=1<<i.button,this.mouse.pressed.add(i.button),i.preventDefault())}),e(window,"mouseup",i=>{this.mouse.buttons&=~(1<<i.button),this.mouse.released.add(i.button)}),e(window,"mousemove",i=>{this.enabled&&(this.locked||this.allowUnlocked)&&(this.mouse.dx+=i.movementX||0,this.mouse.dy+=i.movementY||0)}),e(t,"wheel",i=>{this.mouse.wheel+=Math.sign(i.deltaY),i.preventDefault()},{passive:!1}),e(t,"contextmenu",i=>i.preventDefault()),e(document,"pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange&&this.onLockChange(this.locked)}),e(document,"pointerlockerror",()=>{this.locked=!1}),this.allowUnlocked=!1}lock(){try{let t=this.canvas.requestPointerLock&&this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}btn(t){return(this.mouse.buttons&1<<t)!==0}btnHit(t){return this.mouse.pressed.has(t)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.pressed.clear(),this.mouse.released.clear(),this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0}dispose(){for(let[t,e,i,n]of this.listeners)t.removeEventListener(e,i,n)}};var zt=(r,t,e)=>r<t?t:r>e?e:r,Qt=(r,t,e)=>r+(t-r)*e,Gx=(r,t,e)=>zt((e-r)/(t-r),0,1),ke=(r,t,e)=>{let i=Gx(r,t,e);return i*i*(3-2*i)},Ei=(r,t,e,i)=>Qt(r,t,1-Math.exp(-e*i)),W=(r=0,t=1)=>r+Math.random()*(t-r);var le=Math.PI/180,Sd=Math.PI*2;function zi(r){for(;r>Math.PI;)r-=Sd;for(;r<-Math.PI;)r+=Sd;return r}function gr(r,t,e){let i=zi(t-r);return Math.abs(i)<=e?t:r+Math.sign(i)*e}function Xe(r){let t=r>>>0,e=()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+e()*(n-i),e.int=(i,n)=>Math.floor(i+e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e}function Ai(r=1){let t=Xe(r),e=new Uint8Array(512),i=new Uint8Array(256);for(let l=0;l<256;l++)i[l]=l;for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1)),h=i[l];i[l]=i[c],i[c]=h}for(let l=0;l<512;l++)e[l]=i[l&255];let n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],s=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;function o(l,c){let h=(l+c)*s,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*a,p=l-(u-f),v=c-(d-f),g=p>v?1:0,m=p>v?0:1,y=p-g+a,x=v-m+a,_=p-1+2*a,A=v-1+2*a,S=u&255,w=d&255,P=0,b=0,M=0,T=.5-p*p-v*v;if(T>0){let z=n[e[S+e[w]]&7];T*=T,P=T*T*(z[0]*p+z[1]*v)}let D=.5-y*y-x*x;if(D>0){let z=n[e[S+g+e[w+m]]&7];D*=D,b=D*D*(z[0]*y+z[1]*x)}let L=.5-_*_-A*A;if(L>0){let z=n[e[S+1+e[w+1]]&7];L*=L,M=L*L*(z[0]*_+z[1]*A)}return 70*(P+b+M)}return o.fbm=(l,c,h=4,u=2,d=.5)=>{let f=1,p=1,v=0,g=0;for(let m=0;m<h;m++)v+=f*o(l*p,c*p),g+=f,f*=d,p*=u;return v/g},o.ridge=(l,c,h=4)=>{let u=1,d=1,f=0,p=0;for(let v=0;v<h;v++)f+=u*(1-Math.abs(o(l*d,c*d))),p+=u,u*=.5,d*=2;return f/p},o}function Us(r,t,e,i,n,s){let a=n-e,o=s-i,l=r-e,c=t-i,h=a*a+o*o,u=h>0?(l*a+c*o)/h:0;u=zt(u,0,1);let d=r-(e+a*u),f=t-(i+o*u);return d*d+f*f}function uh(r,t,e,i,n,s,a,o,l,c){let h=r-a,u=t-o,d=e-l,f=i*i+n*n+s*s,p=h*i+u*n+d*s,v=h*h+u*u+d*d-c*c;if(v>0&&p>0)return-1;let g=p*p-f*v;if(g<0)return-1;let m=(-p-Math.sqrt(g))/f;return m<0&&(m=0),m>1?-1:m}var ta=class{constructor(t=1024){this.items=new Int32Array(t),this.keys=new Float32Array(t),this.size=0}clear(){this.size=0}push(t,e){if(this.size>=this.items.length){let a=new Int32Array(this.items.length*2);a.set(this.items),this.items=a;let o=new Float32Array(this.keys.length*2);o.set(this.keys),this.keys=o}let i=this.size++,n=this.items,s=this.keys;for(;i>0;){let a=i-1>>1;if(s[a]<=e)break;n[i]=n[a],s[i]=s[a],i=a}n[i]=t,s[i]=e}pop(){let t=this.items,e=this.keys,i=t[0],n=--this.size;if(n>0){let s=t[n],a=e[n],o=0;for(;;){let l=o*2+1;if(l>=n)break;let c=l+1;if(c<n&&e[c]<e[l]&&(l=c),e[l]>=a)break;t[o]=t[l],e[o]=e[l],o=l}t[o]=s,e[o]=a}return i}};var Wx={house:[5,4],house2:[5,4],shop:[4,4],barn:[6,5],warehouse:[10,6],shed:[2,2],bunker:[3,3],church:[5,13],ruin:[4,4],pumphouse:[4,3]},Td=r=>Math.floor(r)+.5,ea=class{constructor(t){this.def=t,this.rng=Xe(t.seed),this.buildings=[],this.props=[],this.flatZones=[],this.fps=[],this.roads=t.roads,this.rivers=t.rivers||[],this.bridges=[],this.noTree=[]}riverDist(t,e){let i=1e9;for(let n of this.rivers)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Us(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}roadDist(t,e){let i=1e9;for(let n of this.roads)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Us(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}rectRoadClear(t,e,i,n,s){for(let a=-1;a<=1;a+=.5)for(let o=-1;o<=1;o+=.5){let l=t+a*i,c=e+o*n;if(this.roadDist(l,c)<s||this.riverDist(l,c)<s+4||this.def.isWater&&this.def.isWater(l,c))return!1}return!0}overlaps(t,e,i,n,s){for(let a of this.fps)if(t-i-s<a.maxX&&t+i+s>a.minX&&e-n-s<a.maxZ&&e+n+s>a.minZ)return!0;return!1}inBounds(t,e,i,n){let s=this.def.playHalf-8;return Math.abs(t)+i<s&&Math.abs(e)+n<s}b(t,e,i,n=0,s={},a=!1){e=Td(e),i=Td(i);let o=Wx[t],l=s.w||o[0],c=s.d||o[1],h=n&1?c:l,u=n&1?l:c;return!a&&(!this.inBounds(e,i,h,u)||this.overlaps(e,i,h,u,s.gap??2.5)||!this.rectRoadClear(e,i,h+1,u+1,s.roadGap??1.5))?!1:(this.buildings.push({type:t,x:e,z:i,rot:n,opts:s}),this.fps.push({minX:e-h,maxX:e+h,minZ:i-u,maxZ:i+u}),this.flatZones.push({x:e,z:i,hw:h+1.2,hd:u+1.2,margin:5,noGrass:!0}),!0)}p(t,e,i,n=0,s={},a=0,o=0){if(a>0){if(this.overlaps(e,i,a,o,.6))return!1;this.fps.push({minX:e-a,maxX:e+a,minZ:i-o,maxZ:i+o}),s.flat&&this.flatZones.push({x:e,z:i,hw:a+.5,hd:o+.5,margin:3,noGrass:!0})}return this.props.push({type:t,x:e,z:i,rot:n,opts:s}),!0}flat(t,e,i,n,s=6,a,o=!1,l=1){this.flatZones.push({x:t,z:e,hw:i,hd:n,margin:s,h:a,noGrass:o,strength:l})}line(t,e,i,n,s,a=2){let o=Math.abs(n-e)>=Math.abs(s-i),l=Math.abs(o?n-e:s-i),c=Math.max(1,Math.floor(l/(a*2)));for(let h=0;h<c;h++){let u=(h+.5)/c,d=Qt(e,n,u),f=Qt(i,s,u);this.roadDist(d,f)<1||this.riverDist(d,f)<1||this.props.push({type:t,x:d,z:f,rot:o?0:1,opts:{n:a}})}}scatter(t,e,i,n,s,a,o=!0,l={}){let c=0;for(let h=0;h<s*12&&c<s;h++){let u=this.rng()*Math.PI*2,d=Qt(i,n,Math.sqrt(this.rng())),f=t+Math.cos(u)*d,p=e+Math.sin(u)*d,v=a[Math.floor(this.rng()*a.length)],g=o?Math.floor(this.rng()*4):0;this.b(v,f,p,g,Object.assign({},l))&&c++}return c}hq(t){let e=this.def.hq[t];this.flat(e.x,e.z,30,22,14,void 0,!1);let i=t===0?1:-1;this.p("tent",e.x-14,e.z-6*i,0,{},2.5,3),this.p("tent",e.x+14,e.z-6*i,0,{},2.5,3),this.p("tent",e.x,e.z-10*i,1,{},3,2.5),this.p("crateStack",e.x-6,e.z+2*i,0,{},1.3,.7),this.p("crate",e.x+7,e.z+3*i,0,{},.7,.7),this.p("container",e.x+22,e.z+6*i,0,{},1.3,3.1),this.p("container",e.x-22,e.z+6*i,0,{},1.3,3.1);for(let n=-3;n<=3;n++)this.p("hesco",e.x+n*7,e.z+22*i,0,{n:3},1.7,.6);this.noTree.push({x:e.x,z:e.z,r:40})}},qx={id:"greenhollow",name:"Greenhollow",desc:"Rolling farmland and woods split by a slow river. Long sightlines over the fields, close fights in the village by the mill bridge.",size:960,cell:3,seed:1337,waterLevel:0,playHalf:440,biome:"temperate",time:"morning",terrainTextures:["grass","dirt","rock","gravel"],palette:{t0:[.55,.78,.3],t1:[1,.86,.68],t2:[.95,.95,.95],t3:[.95,.92,.85],macro:[.95,.92,.55]},mapColors:[[104,138,66],[146,124,96],[132,130,124],[158,150,132]],wallColors:[15261904,14207920,13226454,15129024,12562068,14075816],roofColors:[9058862,5917764,6975088,8079926,5200486],grassColor:[5798448,7246906,9219664],trees:{types:["pine","oak","birch"],weights:[.5,.38,.12],scatter:1/2600,bush:1/1300,rock:1/3200},hq:[{x:0,z:-420,r:45},{x:0,z:420,r:45}],flags:[{id:"A",name:"Farmstead",x:-260,z:-250,r:22},{id:"B",name:"Radio Hill",x:250,z:-230,r:20},{id:"C",name:"Mill Bridge",x:-35,z:8,r:24},{id:"D",name:"Lumber Mill",x:-280,z:232,r:22},{id:"E",name:"Chapel",x:240,z:300,r:22}],rivers:[{points:[[-500,-175],[-360,-122],[-240,-86],[-130,-40],[-40,8],[50,40],[150,80],[250,150],[340,210],[500,255]],width:22,depth:3.2,bankSlope:.32,fords:[{x:-240,z:-86,r:22,depth:.55}]}],roads:[{points:[[0,-440],[-80,-330],[-260,-250]],width:6},{points:[[0,-440],[20,-250],[-20,-120],[-35,-40],[-35,60],[-90,150],[-280,232]],width:7},{points:[[-260,-250],[-150,-180],[-20,-120]],width:5},{points:[[250,-230],[120,-330],[0,-440]],width:6},{points:[[250,-230],[265,-100],[270,60],[270,140],[270,190],[240,300]],width:6},{points:[[-35,60],[80,130],[150,250],[240,300]],width:6},{points:[[-280,232],[-150,380],[0,440]],width:6},{points:[[240,300],[120,400],[0,440]],width:6},{points:[[-260,-250],[-250,-140],[-240,-86],[-262,60],[-280,232]],width:4}],height(r,t,e,i){let n=9+6.5*e.fbm(r/320,t/320,4)+2.6*i.fbm(r/85,t/85,3);n+=26*Math.exp(-((r-250)**2+(t+230)**2)/(2*80*80)),n+=10*Math.exp(-((r+300)**2+(t-300)**2)/(2*120*120)),n+=8*Math.exp(-((r-380)**2+(t-30)**2)/(2*90*90));let s=Math.max(Math.abs(r),Math.abs(t));return n+=ke(400,478,s)*(30+12*e.fbm(r/60,t/60,2)),Math.max(n,2.4+i(r/40,t/40)*.3)},splat(r,t,e,i,n,s,a,o){let l=ke(.2,.38,i)+ke(32,40,e)*.6,c=(1-ke(9,15,s))*1.2,h=ke(.42,.6,a(r/70+13,t/70-7))*(1-ke(25,35,e))*.75,u=n*1.4+(o?.9:0)+h;return[Math.max(.05,1-l-c-u),u,l,c]},grassDensity(r,t,e,i,n,s,a,o){return zt(o[0]/(o[0]+o[1]+o[2]+o[3])*(1-n)*(.55+.45*a(r/25,t/25))*1.2,0,1)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.bridges.push({x:-35.5,z:9.5,len:44,w:8},{x:270.5,z:163.5,len:52,w:7});for(let h of r.bridges)r.fps.push({minX:h.x-h.w/2-1,maxX:h.x+h.w/2+1,minZ:h.z-h.len/2,maxZ:h.z+h.len/2});let i=t[0];r.b("barn",i.x-14,i.z-8,0,{},!0),r.b("house2",i.x+15,i.z-12,1,{},!0),r.b("shed",i.x-26,i.z+12,0),r.b("shed",i.x+17,i.z+13,2),r.b("house",i.x+6,i.z+26,0),r.p("waterTower",i.x+2,i.z+13,0,{},2,2),r.p("haystack",i.x-3,i.z-1,0,{},1.3,.9),r.p("hay",i.x+5,i.z+4,1,{},.9,.7),r.p("hay",i.x-7,i.z+7,0,{},.7,.9),r.p("car",i.x+6,i.z-3,1,{},2.2,1),r.p("logs",i.x-18,i.z+4,1,{},1.3,2.6),r.line("fence",i.x-60,i.z-40,i.x-30,i.z-40),r.line("fence",i.x-60,i.z-40,i.x-60,i.z+20),r.line("fence",i.x+30,i.z+40,i.x+70,i.z+40),r.line("fence",i.x+70,i.z+40,i.x+70,i.z-10),r.line("stoneWall",i.x-40,i.z+30,i.x-10,i.z+30);let n=t[1];r.p("radioTower",n.x+8,n.z+6,0,{},3,3),r.b("bunker",n.x-8,n.z-8,0,{},!0),r.b("house",n.x-17,n.z+13,1,{cat:"concrete",flat:!0,color:12170923}),r.p("sandbagRing",n.x+2,n.z-15,0,{},2.5,2),r.p("sandbagRing",n.x-20,n.z-2,1,{},2,2.5),r.p("sandbagRing",n.x+17,n.z+19,2,{},2.5,2),r.p("container",n.x+17,n.z-6,0,{},1.3,3.1),r.p("container",n.x+22,n.z-4,0,{},1.3,3.1),r.p("sandbags",n.x-2,n.z+18,0,{n:3},1.6,.4),r.p("sandbags",n.x+12,n.z-22,0,{n:3},1.6,.4),r.p("crateStack",n.x-4,n.z+5,0,{},1.3,.7);let s=t[2];r.b("warehouse",s.x+46,s.z-22,0,{cat:"wood",w:7,d:4,H:5});let a=[[-62,-30,0],[-12,-32,1],[-68,-58,1],[-10,-62,0],[-48,-90,0],[-90,-40,1],[-70,48,2],[-5,52,3],[-60,80,0],[10,85,2],[30,62,1],[-100,60,0],[25,-60,0],[-30,-66,2]];for(let[h,u,d]of a)r.b(e()<.35?"house2":"house",s.x+h,s.z+u,d,{w:e()<.5?4:5,d:e()<.5?3:4});r.scatter(s.x,s.z,40,110,6,["shed","house","ruin"]),r.p("car",s.x-31,s.z-52,0,{},1,2.2),r.p("car",s.x-41,s.z+46,0,{},1,2.2),r.p("sandbags",s.x-32,s.z-20,0,{n:2},1.1,.4),r.p("sandbags",s.x-38,s.z+38,0,{n:2},1.1,.4),r.p("crateStack",s.x-45,s.z-18,0,{},1.3,.7),r.p("barrels",s.x-22,s.z+30,0,{},1,.4);let o=t[3];r.b("warehouse",o.x-6,o.z-12,0,{cat:"wood",w:8,d:5,H:5.5},!0),r.b("house",o.x+18,o.z+8,1),r.b("shed",o.x-22,o.z+13,0),r.b("house2",o.x-26,o.z+34,0),r.b("shed",o.x+10,o.z+26,1);for(let h=0;h<5;h++)r.p("logs",o.x-8+h*6.5,o.z+6+h%2*6,1,{},1.3,2.6);r.p("crateStack",o.x+12,o.z-6,0,{},1.3,.7),r.p("car",o.x+4,o.z-26,1,{},2.2,1),r.p("sandbags",o.x-18,o.z-2,1,{n:2},.4,1.1);let l=t[4];r.b("church",l.x-2,l.z+6,0,{},!0);for(let h=0;h<4;h++)for(let u=0;u<5;u++)r.p("grave",l.x+16+h*3,l.z-2+u*3.2,0,{},.4,.2);r.line("stoneWall",l.x+12,l.z-6,l.x+30,l.z-6),r.line("stoneWall",l.x+30,l.z-6,l.x+30,l.z+16),r.b("house",l.x-26,l.z-12,0),r.b("house2",l.x-26,l.z+22,1),r.b("shed",l.x+20,l.z-18,0),r.b("house",l.x+6,l.z+40,2),r.p("sandbagRing",l.x-4,l.z-18,0,{},2.5,2),r.p("car",l.x-12,l.z-22,0,{},1,2.2);let c=[[-100,-270],[130,-290],[380,-120],[-400,80],[-170,120],[90,200],[380,330],[-380,-200],[150,-60],[-200,360],[60,-360],[-60,330],[330,40],[-330,-20]];for(let[h,u]of c){let d=e();d<.2?r.b("ruin",h,u,Math.floor(e()*4)):d<.45?(r.b("barn",h,u,Math.floor(e()*4)),r.b("shed",h+18,u+6,0)):(r.b(e()<.4?"house2":"house",h,u,Math.floor(e()*4)),r.b("shed",h-14,u+9,1),r.p("hay",h+12,u-10,0,{},.7,.9)),e()<.5&&r.line("fence",h-30,u+22,h+20,u+22)}for(let[h,u]of[[60,-170],[-120,-60],[200,40],[-210,320],[110,-210],[-150,220]])r.b("ruin",h,u,Math.floor(e()*4));for(let h=0;h<6;h++){let u=(e()-.5)*700,d=(e()-.5)*700;r.p("sandbagRing",u,d,Math.floor(e()*4),{},2.5,2.5)}r.forests=[[-400,-20,90],[130,-20,62],[-140,300,80],[390,40,70],[-390,-360,70],[390,-390,60],[390,400,60],[-110,-340,50],[60,330,45],[-330,140,55],[330,-60,40],[-200,-150,35],[180,-150,30],[-60,180,35]];for(let h of t)r.noTree.push({x:h.x,z:h.z,r:h.r*.8})}},vr=(r,t)=>238+16*t(r/130,3.3),Xx={id:"kessar",name:"Port Kessar",desc:"A sun-baked harbor town. Dense alleys in the old town, a container depot, a ridge outpost with long sightlines and the docks on the sea.",size:720,cell:2.5,seed:4242,waterLevel:0,playHalf:330,biome:"arid",time:"afternoon",flatRoofs:!0,terrainTextures:["sand","drygrass","rock","asphalt"],palette:{t0:[1,.9,.72],t1:[1,.92,.7],t2:[1,.92,.82],t3:[1.25,1.25,1.3],macro:[1,.85,.65]},mapColors:[[200,182,140],[168,150,104],[150,136,118],[96,96,98]],wallColors:[14930864,14271642,15722194,13349770,14731686,15785152,13160656,15255720],roofColors:[11904652],grassColor:[11049562,12101736,9407050],trees:{types:["palm","acacia","shrub"],weights:[.45,.35,.2],scatter:1/4500,bush:1/1800,rock:1/1400},hq:[{x:-30,z:-316,r:42},{x:-30,z:316,r:42}],flags:[{id:"A",name:"Ridge Outpost",x:-225,z:-192,r:20},{id:"B",name:"Container Depot",x:118,z:-172,r:22},{id:"C",name:"Old Town",x:-20,z:0,r:20},{id:"D",name:"Pump Station",x:-212,z:172,r:22},{id:"E",name:"Harbor",x:182,z:168,r:22}],rivers:[],roads:[{points:[[-30,-340],[-25,-200],[-20,0],[-25,200],[-30,340]],width:10},{points:[[-230,0],[160,6]],width:9},{points:[[-25,-200],[-225,-192]],width:6},{points:[[-20,-90],[118,-172]],width:7},{points:[[-20,90],[-212,172]],width:7},{points:[[-20,60],[182,168]],width:7},{points:[[118,-172],[200,-40],[195,60],[182,168]],width:7},{points:[[-110,-60],[70,-60]],width:6},{points:[[-110,60],[70,60]],width:6},{points:[[-110,-30],[70,-30]],width:5},{points:[[-110,30],[70,30]],width:5},{points:[[-110,-60],[-110,60]],width:5},{points:[[-80,-60],[-80,60]],width:5},{points:[[-50,-60],[-50,60]],width:5},{points:[[10,-60],[10,60]],width:5},{points:[[40,-60],[40,60]],width:5},{points:[[70,-60],[70,60]],width:5}],isWater(r,t){return r>vr(t,this._n||(e=>0))-6},height(r,t,e,i){this._n=e;let n=5+3*e.fbm(r/210,t/210,4)+1.4*i.fbm(r/55,t/55,3);n+=15*Math.exp(-((r+228)**2+(t+196)**2)/(2*50*50))*(.85+.3*i(r/18,t/18)),n+=ke(-200,-335,r)*(16+8*e.fbm(r/70,t/70,3)),n+=ke(285,355,Math.abs(t))*(22+8*e.fbm(r/50,t/50,2)),n+=6*Math.exp(-((r+120)**2+(t-250)**2)/(2*60*60)),n=Math.max(n,2.6);let s=vr(t,e),a=ke(s-28,s+26,r);return n=Qt(n,-8,a),n},splat(r,t,e,i,n,s,a,o){let l=ke(.18,.34,i)*1.3+ke(13,19,e)*.5,c=n*1.6,h=ke(.15,.5,a(r/90-5,t/90+3))*.9+(o?.25:0);return[Math.max(.1,1.1-l-c-h*.6)+(e<1.2?1:0),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){let l=o[0]+o[1]+o[2]+o[3];return zt(o[1]/l*(1-n)*1.3*(.4+.6*a(r/18,t/18)),0,.85)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);let i=[-110,-80,-50,-20,10,40,70],n=[-60,-30,0,30,60];for(let d=0;d<i.length-1;d++)for(let f=0;f<n.length-1;f++){let p=i[d]+3.5,v=i[d+1]-3.5,g=n[f]+3.5,m=n[f+1]-3.5,y=(p+v)/2,x=(g+m)/2;if(Math.hypot(y-t[2].x,x-t[2].z)<22)continue;if(e()<.12){r.p("car",y,x,Math.floor(e()*2),{},2.2,2.2),r.p("crate",y+4,x+3,0,{},.7,.7);continue}let A=[[p,g],[y+.5,g],[p,x+.5],[y+.5,x+.5]];for(let[S,w]of A){if(e()<.16)continue;let P=2+Math.floor(e()*2),b=2+Math.floor(e()*2);r.b("shop",S+P+.6,w+b+.6,Math.floor(e()*4)&2,{w:P,d:b,gap:1.4,roadGap:.4})}}let s=t[2];for(let d=0;d<6;d++){let f=d/6*Math.PI*2+.3;r.p("stall",s.x+Math.cos(f)*11,s.z+Math.sin(f)*11,d&1,{},1.7,1.3)}r.p("car",s.x+6,s.z-16,1,{},2.2,1),r.p("jersey",s.x-14,s.z+6,1,{n:2},.4,2.1),r.p("sandbags",s.x+4,s.z+14,0,{n:3},1.6,.4);let a=t[0];r.flat(a.x,a.z,22,18,10,void 0,!0,.9),r.b("bunker",a.x-6,a.z-4,0,{},!0),r.p("watchtower",a.x+14,a.z-12,0,{},2,2),r.p("watchtower",a.x-16,a.z+12,2,{},2,2),r.p("radioTower",a.x+8,a.z+10,0,{h:20},3,3);for(let d=-3;d<=3;d++)d!==0&&(r.p("hesco",a.x+d*3.6,a.z-24,0,{n:3},1.7,.6),r.p("hesco",a.x+d*3.6,a.z+24,0,{n:3},1.7,.6));for(let d=-2;d<=2;d++)d!==0&&(r.p("hesco",a.x-26,a.z+d*3.6,1,{n:3},.6,1.7),r.p("hesco",a.x+26,a.z+d*3.6,1,{n:3},.6,1.7));r.p("sandbagRing",a.x+6,a.z-14,0,{},2.5,2),r.p("container",a.x-14,a.z-10,1,{},3.1,1.3),r.p("crateStack",a.x+2,a.z+4,0,{},1.3,.7);let o=t[1];r.flat(o.x,o.z,46,34,8,void 0,!0),r.b("warehouse",o.x-22,o.z-18,0,{},!0),r.b("warehouse",o.x+26,o.z+16,1,{w:8,d:6},!0);for(let d=0;d<6;d++)for(let f=0;f<2;f++)e()<.2||r.p("container",o.x-14+d*5.2,o.z+6+f*13,0,{stack:e()<.45},1.3,3.1);r.p("crane",o.x+4,o.z-30,0,{},4.4,1.9),r.p("jersey",o.x-30,o.z+14,1,{n:3},.4,3.1),r.p("jersey",o.x+2,o.z-4,0,{n:2},2.1,.4),r.p("crateStack",o.x+6,o.z+2,0,{},1.3,.7),r.p("barrels",o.x-8,o.z-2,0,{},1,.4);let l=t[3];r.flat(l.x,l.z,32,28,8,void 0,!0),r.b("pumphouse",l.x-8,l.z-8,0,{},!0),r.b("pumphouse",l.x+14,l.z+12,1,{},!0),r.b("house",l.x-20,l.z+16,0,{flat:!0,w:4,d:3}),r.p("tank",l.x+10,l.z-12,0,{},1.7,1.7),r.p("tank",l.x+16,l.z-12,0,{},1.7,1.7),r.p("tank",l.x+22,l.z-12,0,{color:12103840},1.7,1.7),r.p("pipe",l.x+2,l.z-2,0,{len:12},6,.4),r.p("pipe",l.x-10,l.z+6,1,{len:8},.4,4),r.p("barrels",l.x+2,l.z+6,0,{},1,.4),r.p("sandbagRing",l.x-2,l.z+22,2,{},2.5,2),r.line("compoundWall",l.x-32,l.z-28,l.x-8,l.z-28),r.line("compoundWall",l.x+8,l.z-28,l.x+32,l.z-28),r.line("compoundWall",l.x-32,l.z+28,l.x-6,l.z+28),r.line("compoundWall",l.x+10,l.z+28,l.x+32,l.z+28),r.line("compoundWall",l.x-32,l.z-26,l.x-32,l.z-6),r.line("compoundWall",l.x-32,l.z+8,l.x-32,l.z+26);let c=t[4],h=vr(c.z,r.noise||(()=>0));r.flat(c.x+10,c.z,46,40,6,2.2,!0),r.b("warehouse",c.x-12,c.z-22,0,{w:9,d:5},!0),r.b("warehouse",c.x-16,c.z+22,0,{w:8,d:5},!0);for(let d=0;d<4;d++)r.p("container",c.x+6+d*5,c.z-6,0,{stack:e()<.4},1.3,3.1);for(let d=0;d<3;d++)r.p("container",c.x+8+d*5,c.z+10,0,{},1.3,3.1);r.p("crateStack",c.x-2,c.z+2,0,{},1.3,.7),r.p("crate",c.x+2,c.z-12,0,{},.7,.7),r.p("barrels",c.x-4,c.z+8,0,{},1,.4),r.p("crane",c.x+30,c.z+28,1,{},1.9,4.4),r.piers=[{z:c.z-26},{z:c.z+2},{z:c.z+40}];let u=[[-120,-200],[40,-262],[-262,-40],[-150,132],[60,200],[-100,262],[150,-60],[200,-262],[-240,70],[100,120]];for(let[d,f]of u)r.b("house",d,f,Math.floor(e()*4),{flat:!0,w:4,d:3,gap:6})&&(r.line("compoundWall",d-14,f-12,d+14,f-12),r.line("compoundWall",d-14,f+12,d+4,f+12),r.line("compoundWall",d-14,f-10,d-14,f+10),r.p("car",d+9,f+18,0,{},1,2.2));for(let[d,f]of[[-160,-100],[120,-110],[-180,250],[80,250],[-280,120],[20,-150]])r.b("ruin",d,f,Math.floor(e()*4));r.forests=[[-300,-100,40],[-280,260,50],[120,260,40],[-140,200,30],[220,-120,30],[-60,-240,30],[200,260,25]];for(let d of t)r.noTree.push({x:d.x,z:d.z,r:d.r});r.noTree.push({x:-20,z:0,r:95})}},ia={greenhollow:qx,kessar:Xx};var zs={conquest:{name:"Conquest",desc:"Capture and hold flags. Holding the majority drains enemy tickets; every death costs one.",tickets:350,time:1500},frontline:{name:"Frontline",desc:"Flags fall in order. Push the line flag by flag; only the front flags can be captured.",tickets:300,time:1500},tdm:{name:"Team Deathmatch",desc:"First team to the kill limit wins. Squad spawns keep the fight rolling.",tickets:150,time:900}},na=class{constructor(t,e,i={}){this.game=t,this.type=e;let n=zs[e];this.maxTickets=i.tickets||n.tickets,this.tickets=[this.maxTickets,this.maxTickets],this.kills=[0,0],this.timeLimit=i.time||n.time,this.time=0,this.over=!1,this.winner=-1,this.bleedAcc=0,this.tick=0;let s=t.world.def;if(this.flags=e==="tdm"?[]:s.flags.map((a,o)=>({id:a.id,name:a.name,x:a.x,z:a.z,r:a.r,y:t.world.terrain.heightAt(a.x,a.z),index:o,owner:-1,progress:0,counts:[0,0],contested:!1,capTeam:-1})),e==="frontline"){this.flags.sort((o,l)=>o.z-l.z),this.flags.forEach((o,l)=>{o.index=l});let a=this.flags.length;this.flags.forEach((o,l)=>{l<Math.floor(a/2)?(o.owner=0,o.progress=1):l>=a-Math.floor(a/2)&&(o.owner=1,o.progress=-1)})}}capturable(t,e){if(this.type==="conquest")return!0;if(this.type!=="frontline")return!1;if(t.owner===e)return!0;let i=t.index,n=this.flags;return e===0?i===0||n[i-1].owner===0:i===n.length-1||n[i+1].owner===1}update(t){if(!this.over){if(this.time+=t,this.tick+=t,this.tick>=.25&&(this.updateFlags(this.tick),this.tick=0),this.type==="conquest"){let e=[0,0];for(let n of this.flags)n.owner>=0&&e[n.owner]++;let i=e[0]-e[1];if(i!==0)for(this.bleedAcc+=t*Math.abs(i)/4.5;this.bleedAcc>=1;)this.bleedAcc-=1,this.tickets[i>0?1:0]=Math.max(0,this.tickets[i>0?1:0]-1)}if(this.type==="tdm"?this.kills[0]>=this.maxTickets?this.end(0):this.kills[1]>=this.maxTickets&&this.end(1):(this.tickets[0]<=0?this.end(1):this.tickets[1]<=0&&this.end(0),this.type==="frontline"&&(this.flags.every(e=>e.owner===0)?this.end(0):this.flags.every(e=>e.owner===1)&&this.end(1))),!this.over&&this.time>=this.timeLimit){let e=this.type==="tdm"?this.kills[0]:this.tickets[0],i=this.type==="tdm"?this.kills[1]:this.tickets[1];this.end(e===i?-1:e>i?0:1)}}}updateFlags(t){let e=this.game.soldiers;for(let i of this.flags){i.counts[0]=0,i.counts[1]=0;for(let c of e){if(c.state!=="alive")continue;let h=c.pos.x-i.x,u=c.pos.z-i.z;h*h+u*u<i.r*i.r&&Math.abs(c.pos.y-i.y)<14&&i.counts[c.team]++}let n=i.counts[0],s=i.counts[1];i.contested=n>0&&s>0;let a=n-s,o=i.progress,l=i.owner;if(i.capTeam=-1,a!==0){let c=a>0?0:1;if(this.capturable(i,c)){let h=.045454545454545456*Math.pow(Math.min(Math.abs(a),5),.6),u=c===0?1:-1;i.progress*u<1&&(i.capTeam=c),i.progress=Math.max(-1,Math.min(1,i.progress+u*h*t))}}else if(n===0&&s===0){let c=i.owner===0?1:i.owner===1?-1:0,h=.02*t;i.progress+=Math.max(-h,Math.min(h,c-i.progress))}i.owner===0&&i.progress<=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",1,l)),i.owner===1&&i.progress>=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",0,l)),i.owner!==0&&i.progress>=1&&(i.owner=0,this.game.onFlagEvent(i,"captured",0,l)),i.owner!==1&&i.progress<=-1&&(i.owner=1,this.game.onFlagEvent(i,"captured",1,l))}}onDeath(t){this.type!=="tdm"&&(this.tickets[t]=Math.max(0,this.tickets[t]-1))}onKill(t){this.kills[t]++}end(t){this.over||(this.over=!0,this.winner=t,this.game.onMatchEnd(t))}flagSpawns(t){return this.flags.filter(e=>e.owner===t&&e.counts[1-t]===0)}};var Ye={m4a1:{name:"M4A1",type:"carbine",dmg:26,dmgMin:19,r0:40,r1:120,rpm:800,vel:880,mag:30,mags:5,reload:2.1,reloadEmpty:2.6,modes:["auto","semi"],recoilV:.42,recoilH:.22,spreadHip:2.6,spreadAds:.12,adsTime:.2,moveMul:.97,pen:.8,sound:"carbine",look:{len:.82,color:2829099,mag:"curve",stock:"tube"}},ak74:{name:"AK-74",type:"ar",dmg:28,dmgMin:20,r0:45,r1:130,rpm:650,vel:880,mag:30,mags:5,reload:2.4,reloadEmpty:3,modes:["auto","semi"],recoilV:.5,recoilH:.3,spreadHip:2.8,spreadAds:.13,adsTime:.24,moveMul:.95,pen:.85,sound:"rifle",look:{len:.92,color:3813416,wood:8014378,mag:"curve",stock:"solid"}},aug:{name:"AUG A3",type:"ar",dmg:25,dmgMin:19,r0:45,r1:130,rpm:700,vel:920,mag:30,mags:5,reload:2.6,reloadEmpty:3.2,modes:["auto","semi"],recoilV:.36,recoilH:.18,spreadHip:2.7,spreadAds:.11,adsTime:.24,moveMul:.95,pen:.8,sound:"rifle",look:{len:.78,color:4938299,mag:"straight",stock:"bullpup"}},scarh:{name:"SCAR-H",type:"ar",dmg:36,dmgMin:27,r0:50,r1:150,rpm:600,vel:840,mag:20,mags:6,reload:2.5,reloadEmpty:3.1,modes:["auto","semi"],recoilV:.7,recoilH:.32,spreadHip:3,spreadAds:.13,adsTime:.27,moveMul:.93,pen:1.1,sound:"rifle",look:{len:.95,color:11901546,mag:"straight",stock:"solid"}},g36c:{name:"G36C",type:"carbine",dmg:24,dmgMin:18,r0:35,r1:110,rpm:750,vel:800,mag:30,mags:5,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.36,recoilH:.24,spreadHip:2.4,spreadAds:.13,adsTime:.19,moveMul:.98,pen:.75,sound:"carbine",look:{len:.72,color:3026478,mag:"straight",stock:"solid"}},mp7:{name:"MP7",type:"smg",dmg:20,dmgMin:13,r0:15,r1:55,rpm:950,vel:700,mag:40,mags:5,reload:1.9,reloadEmpty:2.3,modes:["auto","semi"],recoilV:.24,recoilH:.2,spreadHip:1.9,spreadAds:.16,adsTime:.15,moveMul:1.04,pen:.5,sound:"smg",look:{len:.55,color:2500134,mag:"straight",stock:"tube"}},ump45:{name:"UMP-45",type:"smg",dmg:27,dmgMin:17,r0:15,r1:50,rpm:620,vel:420,mag:25,mags:6,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.3,recoilH:.18,spreadHip:1.9,spreadAds:.18,adsTime:.16,moveMul:1.03,pen:.45,sound:"smg",look:{len:.6,color:3158064,mag:"straight",stock:"solid"}},p90:{name:"P90",type:"smg",dmg:19,dmgMin:13,r0:18,r1:60,rpm:900,vel:715,mag:50,mags:4,reload:2.4,reloadEmpty:2.9,modes:["auto","semi"],recoilV:.22,recoilH:.16,spreadHip:2,spreadAds:.15,adsTime:.16,moveMul:1.03,pen:.5,sound:"smg",look:{len:.52,color:3815988,mag:"top",stock:"bullpup"}},m249:{name:"M249",type:"lmg",dmg:26,dmgMin:20,r0:50,r1:150,rpm:750,vel:900,mag:100,mags:3,reload:5.2,reloadEmpty:6,modes:["auto"],recoilV:.4,recoilH:.34,spreadHip:4.5,spreadAds:.18,adsTime:.36,moveMul:.88,pen:1.2,sound:"lmg",look:{len:1,color:3092266,mag:"box",stock:"solid",bipod:!0}},pkm:{name:"PKM",type:"lmg",dmg:33,dmgMin:25,r0:55,r1:160,rpm:650,vel:825,mag:100,mags:3,reload:5.6,reloadEmpty:6.4,modes:["auto"],recoilV:.55,recoilH:.38,spreadHip:4.8,spreadAds:.2,adsTime:.4,moveMul:.86,pen:1.35,sound:"lmg",look:{len:1.1,color:2894374,wood:6962722,mag:"box",stock:"solid",bipod:!0}},mk14:{name:"MK14 EBR",type:"dmr",dmg:46,dmgMin:39,r0:70,r1:220,rpm:420,vel:850,mag:20,mags:5,reload:2.6,reloadEmpty:3.1,modes:["semi"],recoilV:1.15,recoilH:.35,spreadHip:3.4,spreadAds:.05,adsTime:.3,moveMul:.93,pen:1.5,sound:"dmr",sight:"acog",look:{len:1.05,color:4868674,mag:"straight",stock:"solid"}},svd:{name:"SVD",type:"dmr",dmg:57,dmgMin:47,r0:80,r1:250,rpm:300,vel:830,mag:10,mags:6,reload:2.7,reloadEmpty:3.3,modes:["semi"],recoilV:1.6,recoilH:.4,spreadHip:3.8,spreadAds:.04,adsTime:.33,moveMul:.92,pen:1.7,sound:"dmr",sight:"acog",look:{len:1.2,color:2762532,wood:8014378,mag:"straight",stock:"solid"}},l96:{name:"L96A1",type:"sniper",dmg:96,dmgMin:86,r0:100,r1:400,rpm:46,vel:910,mag:5,mags:6,reload:3.2,reloadEmpty:3.8,modes:["bolt"],bolt:!0,recoilV:2.6,recoilH:.5,spreadHip:5,spreadAds:0,adsTime:.38,moveMul:.92,pen:2.5,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.2,color:4872762,mag:"straight",stock:"solid"}},m200:{name:"M200",type:"sniper",dmg:112,dmgMin:100,r0:120,r1:500,rpm:38,vel:980,mag:7,mags:5,reload:3.6,reloadEmpty:4.2,modes:["bolt"],bolt:!0,recoilV:3.2,recoilH:.6,spreadHip:5.5,spreadAds:0,adsTime:.42,moveMul:.9,pen:3,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.3,color:3815990,mag:"straight",stock:"solid"}},m870:{name:"M870",type:"shotgun",dmg:14,dmgMin:5,pellets:9,r0:8,r1:32,rpm:70,vel:400,mag:6,mags:6,reload:.55,reloadEmpty:.55,shellReload:!0,modes:["pump"],pump:!0,recoilV:2.2,recoilH:.6,spreadHip:4.2,spreadAds:2.6,pelletSpread:2.6,adsTime:.2,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2763306,wood:6964264,mag:"tube",stock:"solid"}},m1014:{name:"M1014",type:"shotgun",dmg:11,dmgMin:4,pellets:9,r0:8,r1:28,rpm:260,vel:400,mag:7,mags:5,reload:.5,reloadEmpty:.5,shellReload:!0,modes:["semi"],recoilV:1.8,recoilH:.6,spreadHip:4.4,spreadAds:3,pelletSpread:3,adsTime:.22,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2500134,mag:"tube",stock:"solid"}},m9:{name:"M9",type:"pistol",dmg:24,dmgMin:15,r0:15,r1:45,rpm:420,vel:380,mag:15,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.8,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.22,color:2763306}},g18:{name:"Glock 18",type:"pistol",dmg:18,dmgMin:11,r0:12,r1:40,rpm:1100,vel:375,mag:19,mags:4,reload:1.4,reloadEmpty:1.8,modes:["auto","semi"],recoilV:.5,recoilH:.4,spreadHip:2,spreadAds:.4,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.2,color:1973790}},deagle:{name:"Desert Eagle",type:"pistol",dmg:48,dmgMin:30,r0:20,r1:55,rpm:230,vel:440,mag:7,mags:4,reload:1.8,reloadEmpty:2.2,modes:["semi"],recoilV:2,recoilH:.6,spreadHip:2.4,spreadAds:.3,adsTime:.14,moveMul:1.03,pen:.6,sound:"pistol",look:{len:.27,color:9079434}},usp:{name:"USP",type:"pistol",dmg:26,dmgMin:16,r0:15,r1:45,rpm:400,vel:370,mag:12,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.9,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.21,color:2763306}}},Ns={sight:{iron:{name:"Iron sights",zoom:1.15},reddot:{name:"Red dot",zoom:1.3,reticle:"dot"},holo:{name:"Holographic",zoom:1.3,reticle:"holo"},x2:{name:"2x Prism",zoom:2,reticle:"chevron"},acog:{name:"4x ACOG",zoom:4,reticle:"chevron",optic:!0},scope8:{name:"8x Scope",zoom:8,scope:!0,reticle:"cross"}},barrel:{none:{name:"None"},suppressor:{name:"Suppressor",suppressed:!0,velMul:.92,dmgMul:.94,recoilVMul:.95,noFlash:!0},compensator:{name:"Compensator",recoilHMul:.68},brake:{name:"Muzzle brake",recoilVMul:.8,recoilHMul:1.05},flashhider:{name:"Flash hider",noFlash:!0,recoilVMul:.96}},grip:{none:{name:"None"},vertical:{name:"Vertical grip",recoilVMul:.8},angled:{name:"Angled grip",adsMul:.72,recoilHMul:.9},stubby:{name:"Stubby grip",recoilVMul:.9,recoilHMul:.88,hipMul:.9},bipod:{name:"Bipod",bipod:!0}},rail:{none:{name:"None"},laser:{name:"Laser",hipMul:.62,laser:!0},flashlight:{name:"Flashlight",light:!0}}};function dh(r,t){let i=Ye[r].type,n=Object.keys(Ns[t]);return i==="pistol"?t==="sight"?["iron","reddot"]:t==="barrel"?["none","suppressor"]:t==="rail"?n:["none"]:t==="sight"?i==="sniper"?["scope8","acog","x2","reddot","iron"]:i==="shotgun"?["iron","reddot","holo"]:i==="smg"?["iron","reddot","holo","x2"]:["iron","reddot","holo","x2","acog"]:t==="grip"?i==="sniper"||i==="lmg"||i==="dmr"?["none","vertical","angled","bipod"]:i==="shotgun"?["none","vertical","angled"]:["none","vertical","angled","stubby"]:t==="barrel"&&i==="shotgun"?["none","suppressor"]:n}var Ki={frag:{name:"Frag grenade",count:2,kind:"throw",key:"G"},smoke:{name:"Smoke grenade",count:2,kind:"throw"},impact:{name:"Impact grenade",count:2,kind:"throw"},flash:{name:"Flashbang",count:2,kind:"throw"},m320:{name:"M320 launcher",count:4,kind:"launcher"},medkit:{name:"Medkit",count:1/0,kind:"medkit"},rpg:{name:"RPG-7",count:3,kind:"rpg"},c4:{name:"C4",count:3,kind:"c4"},ammobox:{name:"Ammo box",count:2,kind:"place"},sandbags:{name:"Sandbag kit",count:5,kind:"place"},claymore:{name:"Claymore",count:2,kind:"place"},beacon:{name:"Spawn beacon",count:1,kind:"place"},rally:{name:"Rally point",count:1,kind:"place"},binoculars:{name:"Binoculars",count:1/0,kind:"binoculars"}},oi={assault:{name:"Assault",desc:"Frontline rifleman. Underbarrel grenade launcher and extra frags.",types:["ar","carbine"],gadgets:["m320","frag"],throwables:3,color:"#d9a441"},medic:{name:"Medic",desc:"Fast full-health revives. Medkit heals you and nearby squadmates.",types:["ar","carbine","smg"],gadgets:["medkit","smoke"],throwables:2,color:"#6fd36a"},engineer:{name:"Engineer",desc:"Breacher. RPG and C4 blow open walls and clear buildings.",types:["smg","shotgun","carbine"],gadgets:["rpg","c4"],throwables:2,color:"#e07a4a"},support:{name:"Support",desc:"Light machine guns, ammo boxes and sandbag fortifications.",types:["lmg","ar"],gadgets:["ammobox","sandbags"],throwables:2,color:"#4ab0e0"},recon:{name:"Recon",desc:"Marksman. Claymores and a spawn beacon for the squad.",types:["sniper","dmr"],gadgets:["claymore","beacon"],throwables:2,color:"#b48ae6"},leader:{name:"Squad Leader",desc:"Gives orders, drops a rally point and spots enemies with binoculars.",types:["ar","carbine","dmr"],gadgets:["rally","binoculars"],throwables:2,color:"#f0e070",leader:!0}},Ed=["frag","smoke","impact","flash"],sa=["m9","g18","deagle","usp"];function ra(r){let t=oi[r].types;return Object.keys(Ye).filter(e=>t.includes(Ye[e].type))}function xr(r){let t=Ye[r];return{sight:t.sight||(t.type==="pistol"?"iron":"reddot"),barrel:"none",grip:"none",rail:"none"}}function oa(r,t=Math.random){let e=ra(r),i=e[Math.floor(t()*e.length)],n=Ye[i],s=xr(i),a=c=>{let h=dh(i,c);return h[Math.floor(t()*h.length)]};n.type!=="sniper"&&(s.sight=a("sight")),n.type==="dmr"&&t()<.6&&(s.sight="acog"),s.barrel=t()<.55?a("barrel"):"none",s.grip=t()<.6?a("grip"):"none",s.rail=t()<.3?a("rail"):"none";let o=sa[Math.floor(t()*sa.length)],l=r==="medic"||r==="leader"?t()<.6?"smoke":"frag":t()<.75?"frag":t()<.5?"impact":"smoke";return{cls:r,primary:i,att:s,secondary:o,satt:{sight:"iron",barrel:t()<.2?"suppressor":"none",grip:"none",rail:"none"},throwable:l,armor:t()<.4?"heavy":"light"}}function Ad(r,t){let e=Ye[r],i=Object.assign({},e);i.id=r,i.recoilVMul=1,i.recoilHMul=1,i.hipMul=1,i.adsMul=1,i.velMul=1,i.dmgMul=1,i.suppressed=!1,i.noFlash=!1,i.laser=!1,i.light=!1,i.bipod=!1;for(let s of["sight","barrel","grip","rail"]){let a=Ns[s][t&&t[s]]||null;if(a){for(let o of["recoilVMul","recoilHMul","hipMul","adsMul","velMul","dmgMul"])a[o]&&(i[o]*=a[o]);for(let o of["suppressed","noFlash","laser","light","bipod"])a[o]&&(i[o]=!0)}}let n=Ns.sight[t&&t.sight||"iron"]||Ns.sight.iron;return i.zoom=n.zoom,i.scope=!!n.scope,i.reticle=n.reticle||null,i.sightId=t&&t.sight||"iron",i.interval=60/i.rpm,i}function Rd(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ye,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Cd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let p=Cd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Cd(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new fe(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let v=h.getComponent(d,p);o.setComponent(d+u,p,v)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Pd=new dt,Dd=new Tt,Id=new Ae,Ld=new Ke,Ud=new C,zd=new C;function vn(r,t,e=0){r=r.index?r.toNonIndexed():r;let i=r.attributes.position.count,n=new Float32Array(i*3);Pd.set(t);let s=Pd.clone();for(let a=0;a<i;a+=3){let o=e?1+(Math.random()-.5)*e:1;for(let l=0;l<3;l++)n[(a+l)*3]=s.r*o,n[(a+l)*3+1]=s.g*o,n[(a+l)*3+2]=s.b*o}return r.setAttribute("color",new fe(n,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function xn(r,t=0,e=0,i=0,n=0,s=0,a=0,o=1,l=1,c=1){return Ld.set(n,s,a),Id.setFromEuler(Ld),zd.set(t,e,i),Ud.set(o,l,c),Dd.compose(zd,Id,Ud),r.applyMatrix4(Dd),r}var N={box(r,t,e,i,n=0,s=0,a=0,o=0,l=0,c=0,h=0){return xn(vn(new ri(r,t,e),i,h),n,s,a,o,l,c)},cyl(r,t,e,i,n,s=0,a=0,o=0,l=0,c=0,h=0,u=0){return xn(vn(new Ts(r,t,e,i),n,u),s,a,o,l,c,h)},tube(r,t,e,i,n=0,s=0,a=0,o=Math.PI/2,l=0,c=0){return xn(vn(new Ts(r,r,t,e,1,!0),i),n,s,a,o,l,c)},cone(r,t,e,i,n=0,s=0,a=0,o=0){return xn(vn(new Fn(r,t,e),i,o),n,s,a)},ico(r,t,e,i=0,n=0,s=0,a=1,o=1,l=1,c=.1,h=0){let u=new Fo(r,t);if(h){let d=u.attributes.position;for(let f=0;f<d.count;f++){let p=1+Math.sin(d.getX(f)*12.9+d.getY(f)*78.2+d.getZ(f)*37.7)*.5*h;d.setXYZ(f,d.getX(f)*p,d.getY(f)*p,d.getZ(f)*p)}}return xn(vn(u,e,c),i,n,s,0,0,0,a,o,l)},dodeca(r,t,e=0,i=0,n=0,s=1,a=1,o=1,l=.12){return xn(vn(new No(r,0),t,l),e,i,n,0,0,0,s,a,o)},prism(r,t,e,i,n=0,s=0,a=0,o=0){let l=new cr;l.moveTo(-e/2,0),l.lineTo(e/2,0),l.lineTo(0,t),l.lineTo(-e/2,0);let c=new ko(l,{depth:r,bevelEnabled:!1});return c.translate(0,0,-r/2),c.rotateY(Math.PI/2),xn(vn(c,i),n,s,a,0,o,0)},pyramid(r,t,e,i=0,n=0,s=0){let a=new Fn(r*.7071,t,4);return a.rotateY(Math.PI/4),xn(vn(a,e),i,n+t/2,s)},merge(r){let t=r.filter(Boolean).map(i=>(i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1"),i)),e=Rd(t,!1);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var fh=new Map;function Me(r,t,{srgb:e=!0,repeat:i=!0}={}){let n=document.createElement("canvas");n.width=n.height=r;let s=n.getContext("2d");t(s,r);let a=new Ss(n);return i&&(a.wrapS=a.wrapT=wi),e&&(a.colorSpace=Le),a.anisotropy=8,a.generateMipmaps=!0,a.minFilter=Xi,a.magFilter=qe,a}function pi(r,t,e,i,n,s,a=4){let o=Ai(s),l=r.createImageData(t,t),c=l.data;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=u/t*Math.PI*2,f=h/t*Math.PI*2,p=Math.cos(d)*n,v=Math.sin(d)*n,g=Math.cos(f)*n,m=Math.sin(f)*n,y=(o.fbm(p+g*.7,v+m*.7,a)+o.fbm(g-3.1,m+1.7,a)*.6)*.5,x=(h*t+u)*4;c[x]=Math.max(0,Math.min(255,e[0]+y*i[0])),c[x+1]=Math.max(0,Math.min(255,e[1]+y*i[1])),c[x+2]=Math.max(0,Math.min(255,e[2]+y*i[2])),c[x+3]=255}r.putImageData(l,0,0)}function Ci(r,t,e,i,n,s,a,o=.5){let l=Xe(a);for(let c=0;c<e;c++){r.fillStyle=i[Math.floor(l()*i.length)],r.globalAlpha=o*(.4+l()*.6);let h=l()*t,u=l()*t,d=n+l()*(s-n);for(let f of[-t,0,t])for(let p of[-t,0,t])r.fillRect(h+f,u+p,d,d*(.6+l()*.8))}r.globalAlpha=1}function mi(r){if(fh.has(r))return fh.get(r);let t;switch(r){case"grass":t=Me(256,(e,i)=>{pi(e,i,[118,128,118],[40,45,30],3,11),Ci(e,i,900,["#9fb07a","#5f7046","#b7c48b","#4d5c38"],1,3,2,.45)});break;case"drygrass":t=Me(256,(e,i)=>{pi(e,i,[150,135,100],[40,35,25],3,12),Ci(e,i,900,["#c9b68a","#8f7b55","#d8c79d","#a39064"],1,3,3,.5)});break;case"dirt":t=Me(256,(e,i)=>{pi(e,i,[128,112,96],[45,40,35],4,13),Ci(e,i,700,["#8a7560","#a8927a","#5e4f40","#c2ae95"],1,4,4,.5)});break;case"rock":t=Me(256,(e,i)=>{pi(e,i,[130,128,124],[55,55,55],5,14,5);let n=Xe(9);e.strokeStyle="rgba(40,40,40,0.35)",e.lineWidth=1.2;for(let s=0;s<40;s++){e.beginPath();let a=n()*i,o=n()*i;e.moveTo(a,o);for(let l=0;l<5;l++)a+=(n()-.5)*40,o+=(n()-.5)*40,e.lineTo(a,o);e.stroke()}});break;case"sand":t=Me(256,(e,i)=>{pi(e,i,[196,178,140],[30,28,22],6,15),Ci(e,i,1200,["#d9c8a0","#b19a72","#e8dcb8"],1,2,6,.4)});break;case"gravel":t=Me(256,(e,i)=>{pi(e,i,[140,132,118],[35,32,30],6,16),Ci(e,i,1600,["#7d766a","#b5ab98","#5d564b","#cfc5b0"],1,4,7,.65)});break;case"asphalt":t=Me(256,(e,i)=>{pi(e,i,[92,92,94],[24,24,24],8,17),Ci(e,i,1500,["#6b6b6e","#4a4a4c","#8a8a8a"],1,2,8,.5)});break;case"plaster":t=Me(256,(e,i)=>{pi(e,i,[222,220,214],[30,30,30],5,18),Ci(e,i,300,["#bdb8ae","#e9e6df"],2,8,10,.25)});break;case"brick":t=Me(256,(e,i)=>{e.fillStyle="#bfb6aa",e.fillRect(0,0,i,i);let n=Xe(21),s=i/16,a=i/8;for(let o=0;o<16;o++)for(let l=-1;l<9;l++){let c=o%2*a*.5,h=200+n()*55;e.fillStyle=`rgb(${h},${h*.92},${h*.86})`,e.fillRect(l*a+c+1,o*s+1,a-2,s-2)}Ci(e,i,400,["#8d857a","#ffffff"],1,3,11,.2)});break;case"wood":t=Me(256,(e,i)=>{let n=Xe(31),s=i/8;for(let a=0;a<8;a++){let o=190+n()*60;e.fillStyle=`rgb(${o},${o*.9},${o*.82})`,e.fillRect(0,a*s,i,s)}e.strokeStyle="rgba(60,40,25,0.5)";for(let a=0;a<=8;a++)e.beginPath(),e.moveTo(0,a*s),e.lineTo(i,a*s),e.stroke();e.strokeStyle="rgba(90,60,35,0.18)";for(let a=0;a<120;a++){let o=n()*i;e.beginPath(),e.moveTo(n()*i,o),e.lineTo(n()*i,o+(n()-.5)*4),e.stroke()}});break;case"concrete":t=Me(256,(e,i)=>{pi(e,i,[196,194,188],[30,30,30],7,19),Ci(e,i,500,["#a8a59e","#d9d6cf","#8c8982"],1,3,12,.35),e.strokeStyle="rgba(80,80,80,0.25)",e.strokeRect(.5,.5,i-1,i-1)});break;case"metal":t=Me(256,(e,i)=>{let n=e.createLinearGradient(0,0,i/16,0);n.addColorStop(0,"#d8d8d8"),n.addColorStop(.5,"#f4f4f4"),n.addColorStop(1,"#bcbcbc"),e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<16;s++)e.fillStyle=s%2?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",e.fillRect(s*i/16,0,i/32,i);Ci(e,i,260,["#8a6a4a","#6b5038"],1,5,13,.25)});break;case"sandbag":t=Me(256,(e,i)=>{e.fillStyle="#bba57c",e.fillRect(0,0,i,i);let n=Xe(41),s=i/4,a=i/2;for(let o=0;o<4;o++)for(let l=-1;l<3;l++){let c=o%2*a*.5,h=170+n()*40;e.fillStyle=`rgb(${h},${h*.9},${h*.7})`,e.beginPath(),e.ellipse(l*a+c+a/2,o*s+s/2,a/2-3,s/2-3,0,0,Math.PI*2),e.fill()}Ci(e,i,500,["#7f6d4d","#d4c29b"],1,2,14,.3)});break;case"hay":t=Me(256,(e,i)=>{pi(e,i,[200,172,96],[40,35,20],9,20),e.strokeStyle="rgba(120,90,30,0.35)";let n=Xe(5);for(let s=0;s<300;s++){let a=n()*i,o=n()*i;e.beginPath(),e.moveTo(a,o),e.lineTo(a+(n()-.5)*20,o+(n()-.5)*6),e.stroke()}});break;case"roof":t=Me(256,(e,i)=>{e.fillStyle="#c8c0b8",e.fillRect(0,0,i,i);let n=Xe(51);for(let s=0;s<10;s++)for(let a=-1;a<11;a++){let o=s%2*i/20,l=175+n()*60;e.fillStyle=`rgb(${l},${l*.95},${l*.92})`,e.fillRect(a*i/10+o+1,s*i/10+1,i/10-2,i/10-1),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(a*i/10+o,s*i/10+i/10-3,i/10,3)}});break;case"cloth":t=Me(128,(e,i)=>{pi(e,i,[230,230,230],[20,20,20],4,22),e.fillStyle="rgba(0,0,0,0.12)";for(let n=0;n<i;n+=16)e.fillRect(n,0,8,i)});break;case"noise":t=Me(256,(e,i)=>pi(e,i,[128,128,128],[127,127,127],2,23,5),{srgb:!1});break;case"smoke":t=Me(128,(e,i)=>{let n=Ai(77),s=e.createImageData(i,i),a=s.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(o-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u)*(.65+.35*n.fbm(l/22,o/22,4)),f=(o*i+l)*4;a[f]=a[f+1]=a[f+2]=255,a[f+3]=Math.max(0,Math.min(255,Math.pow(d,1.4)*255))}e.putImageData(s,0,0)},{repeat:!1,srgb:!1});break;case"spark":t=Me(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.8)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1,srgb:!1});break;case"flash":t=Me(128,(e,i)=>{e.translate(i/2,i/2);for(let s=0;s<7;s++){e.rotate(Math.PI*2/7+.3);let a=e.createLinearGradient(0,0,i/2,0);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(0,-6),e.lineTo(i/2,0),e.lineTo(0,6),e.fill()}let n=e.createRadialGradient(0,0,0,0,0,i/3);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(-i/2,-i/2,i,i)},{repeat:!1,srgb:!1});break;case"bullethole":t=Me(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(10,10,10,1)"),n.addColorStop(.18,"rgba(20,18,16,1)"),n.addColorStop(.32,"rgba(60,55,50,0.7)"),n.addColorStop(1,"rgba(60,55,50,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1});break;case"scorch":t=Me(128,(e,i)=>{let n=Ai(99),s=e.createImageData(i,i),a=s.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(o-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u*(.8+.4*n.fbm(l/14,o/14,3))),f=(o*i+l)*4;a[f]=15,a[f+1]=12,a[f+2]=10,a[f+3]=Math.min(255,d*330)}e.putImageData(s,0,0)},{repeat:!1});break;default:throw new Error("unknown texture "+r)}return fh.set(r,t),t}var Ni={uTime:{value:0},uWind:{value:1}},yr=new Set,_r=null;function la(r){let t=r.userData.patches||[],e=r.userData.csmHook;r.onBeforeCompile=(n,s)=>{e&&e(n,s);for(let a of t)a.fn(n,s)};let i=t.map(n=>n.name).join("|")+(e?"|csm":"");r.customProgramCacheKey=()=>i,r.needsUpdate=!0}function Wn(r,t,e){return r.userData.patches=r.userData.patches||[],r.userData.patches.push({name:t,fn:e}),Nd(r),la(r),r}function Nd(r){return yr.has(r)||(yr.add(r),_r?kd(r,_r):la(r)),r}function kd(r,t){t.setupMaterial(r),r.userData.csmHook=r.onBeforeCompile,la(r)}function ca(r){if(_r!==r){for(let t of yr)t.defines&&(delete t.defines.USE_CSM,delete t.defines.CSM_CASCADES,delete t.defines.CSM_FADE),t.userData.csmHook=null;_r=r;for(let t of yr)r?kd(t,r):la(t)}}function Fd(){yr.clear(),_r=null}function ph(r,t,e=.5,i=1){let s={uTriMap:{value:mi(t)},uTriScale:{value:e},uTriStrength:{value:i}};return Wn(r,"tri_"+t,a=>{Object.assign(a.uniforms,s),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= mix(vec3(1.0), triC.rgb, uTriStrength);`)})}function mh(r,t=.03,e=.5,i=1.4){return Wn(r,`wind_${t}_${e}`,n=>{n.uniforms.uTime=Ni.uTime,n.uniforms.uWind=Ni.uWind,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        }`)})}var aa=new Map;function yn(r="default",t={}){if(aa.has(r))return aa.get(r);let e=new ve(Object.assign({vertexColors:!0,roughness:.85,metalness:0,flatShading:!1,side:r==="weapon"?Fe:Ii},t));return Nd(e),aa.set(r,e),e}function Od(){aa.clear()}var _n=new Map;function Bd(r,t={}){let e=r+JSON.stringify(t);if(_n.has(e))return _n.get(e);let i=Ye[r],n=i.look||{len:.8,color:2763306},s=m=>new dt(m).lerp(new dt(8026746),.3).getHex(),a=s(n.color),o=s(1842204),l=s(n.wood||n.color),c=s(3815994),h=[],u=.105,d,f=-.05,p=n.len;if(i.type==="pistol")h.push(N.box(.03,.034,p,a,0,.045,-p*.35)),h.push(N.box(.028,.025,p*.8,o,0,.018,-p*.3)),h.push(N.box(.028,.095,.04,o,0,-.03,.01,.25)),h.push(N.box(.006,.012,.006,o,0,.068,-p*.8)),h.push(N.box(.02,.01,.008,o,0,.066,.02)),d=-p*.85,u=.072,t.sight==="reddot"&&(h.push(N.box(.026,.028,.035,o,0,.078,-.03)),u=.084);else{let m=n.stock==="bullpup",y=m?-p*.05:-p*.12;h.push(N.box(.058,.085,p*.42,a,0,.045,y)),h.push(N.box(.05,.02,p*.36,c,0,.096,y-.02)),h.push(N.box(.062,.065,p*.26,n.wood&&i.type!=="lmg"?l:a,0,.04,-p*.42));let x=-p*.55,_=-p*.66;h.push(N.cyl(.012,.012,Math.abs(_-x)+.05,6,o,0,.05,(x+_)/2,Math.PI/2)),d=_-.02,h.push(N.box(.034,.1,.045,o,0,-.04,m?-.18:.02,.3)),n.stock==="tube"?(h.push(N.cyl(.014,.014,p*.3,6,o,0,.05,p*.2,Math.PI/2)),h.push(N.box(.045,.11,.05,o,0,.03,p*.34))):n.stock==="solid"?h.push(N.box(.05,.1,p*.3,n.wood?l:a,0,.03,p*.2,-.06)):m&&h.push(N.box(.06,.1,p*.22,a,0,.03,p*.22));let A=m?p*.12:-.1;n.mag==="curve"?h.push(N.box(.028,.16,.06,o,0,-.06,A,.3)):n.mag==="straight"?h.push(N.box(.028,.13,.05,o,0,-.05,A,.12)):n.mag==="box"?h.push(N.box(.09,.1,.11,3817520,.02,-.04,-.08)):n.mag==="top"?h.push(N.box(.05,.03,p*.45,2763304,0,.1,-p*.18)):n.mag==="tube"&&(h.push(N.cyl(.013,.013,p*.45,6,o,0,.012,-p*.42,Math.PI/2)),h.push(N.box(.05,.045,.13,l,0,.01,-p*.42))),n.bipod&&(h.push(N.box(.01,.01,.22,o,-.015,0,-p*.5)),h.push(N.box(.01,.01,.22,o,.015,0,-p*.5))),i.bolt&&h.push(N.cyl(.008,.008,.06,5,c,.04,.07,0,0,0,Math.PI/2));let S=t.sight||"iron",w=-.04;S==="iron"?(h.push(N.box(.006,.045,.006,o,0,.105,-p*.5)),h.push(N.box(.01,.03,.012,o,-.012,.11,.02)),h.push(N.box(.01,.03,.012,o,.012,.11,.02)),h.push(N.box(.034,.008,.012,o,0,.098,.02)),u=.123,f=.02):S==="reddot"?(h.push(N.tube(.021,.05,10,o,0,.13,w)),h.push(N.box(.02,.012,.04,o,0,.104,w)),u=.13,f=w):S==="holo"?(h.push(N.box(.05,.008,.07,o,0,.107,w)),h.push(N.box(.006,.045,.07,o,-.022,.13,w)),h.push(N.box(.006,.045,.07,o,.022,.13,w)),h.push(N.box(.05,.006,.07,o,0,.153,w)),u=.13,f=w):S==="x2"?(h.push(N.tube(.022,.09,8,o,0,.13,w)),h.push(N.box(.03,.014,.06,o,0,.102,w)),u=.13,f=w):S==="acog"?(h.push(N.box(.044,.05,.12,3815984,0,.13,w)),h.push(N.cyl(.026,.026,.03,8,3815984,0,.133,w-.07,Math.PI/2)),u=.133,f=w):S==="scope8"&&(h.push(N.cyl(.02,.02,.28,8,o,0,.14,w-.04,Math.PI/2)),h.push(N.cyl(.03,.026,.06,8,o,0,.14,w-.18,Math.PI/2)),h.push(N.cyl(.026,.03,.05,8,o,0,.14,w+.1,Math.PI/2)),h.push(N.box(.02,.03,.03,o,0,.11,w)),u=.14,f=w+.1),t.barrel==="suppressor"?(h.push(N.cyl(.022,.022,.17,8,2236962,0,.05,d-.08,Math.PI/2)),d-=.17):t.barrel&&t.barrel!=="none"&&(h.push(N.cyl(.018,.016,.055,6,2500134,0,.05,d-.02,Math.PI/2)),d-=.055);let P=-p*.42;t.grip==="vertical"?h.push(N.box(.026,.085,.03,o,0,-.03,P)):t.grip==="angled"?h.push(N.box(.026,.04,.07,o,0,-.005,P,-.5)):t.grip==="stubby"?h.push(N.box(.026,.045,.03,o,0,-.01,P)):t.grip==="bipod"&&!n.bipod&&(h.push(N.box(.01,.01,.2,o,-.015,0,P-.06)),h.push(N.box(.01,.01,.2,o,.015,0,P-.06))),t.rail==="laser"?(h.push(N.box(.022,.024,.06,o,.042,.04,P+.02)),h.push(N.box(.008,.008,.004,16719904,.042,.04,P-.012))):t.rail==="flashlight"&&h.push(N.cyl(.016,.018,.08,8,o,.042,.04,P,Math.PI/2))}let g={geo:N.merge(h),sightY:u,sightZ:f,muzzle:new C(0,i.type==="pistol"?.045:.05,d),len:p};return _n.set(e,g),g}function Mr(r){let t="g_"+r;if(_n.has(t))return _n.get(t);let e;switch(r){case"frag":case"impact":e=[N.ico(.04,1,r==="impact"?8022586:4147758,0,0,0),N.box(.015,.03,.015,8947848,0,.045,0),N.box(.008,.06,.012,7829367,.02,.03,0)];break;case"smoke":case"flash":e=[N.cyl(.032,.032,.12,8,r==="flash"?2763306:6975088,0,0,0),N.box(.015,.025,.015,8947848,0,.07,0)];break;case"m320":e=[N.cyl(.03,.03,.3,8,2763306,0,.04,-.15,Math.PI/2),N.box(.03,.1,.04,1842204,0,-.03,.02,.3),N.box(.04,.05,.15,3355443,0,.06,.04)];break;case"rpg":e=[N.cyl(.035,.035,.95,8,4872762,0,.06,-.15,Math.PI/2),N.cone(.055,.2,8,5925450,0,.06,-.72),N.box(.03,.09,.04,1842204,0,-.02,0,.3),N.box(.03,.09,.04,1842204,0,-.02,-.25,.3),N.box(.03,.04,.05,2236962,-.04,.12,-.1)];break;case"medkit":e=[N.box(.18,.12,.08,15263976,0,0,0),N.box(.06,.02,.085,13639712,0,0,0),N.box(.02,.06,.085,13639712,0,0,0)];break;case"ammobox":e=[N.box(.25,.14,.14,4872746,0,0,0),N.box(.1,.02,.06,2236962,0,.08,0)];break;case"c4":e=[N.box(.12,.05,.08,13154442,0,0,0),N.box(.03,.02,.06,2236962,.03,.035,0),N.box(.04,.09,.025,2763306,-.12,0,.02)];break;case"claymore":e=[N.box(.18,.1,.04,4872750,0,0,0),N.box(.01,.06,.01,3355443,-.06,-.07,0),N.box(.01,.06,.01,3355443,.06,-.07,0)];break;case"beacon":e=[N.box(.14,.18,.1,3820122,0,0,0),N.box(.01,.2,.01,2236962,.04,.18,0),N.box(.03,.03,.03,3211104,.04,.29,0)];break;case"rally":e=[N.box(.16,.12,.1,4868666,0,0,0),N.box(.01,.35,.01,2236962,-.05,.22,0),N.box(.12,.08,.005,15786096,.01,.34,0)];break;case"binoculars":e=[N.cyl(.025,.025,.12,8,2763306,-.035,0,0,Math.PI/2),N.cyl(.025,.025,.12,8,2763306,.035,0,0,Math.PI/2),N.box(.04,.02,.04,2236962,0,0,0)];break;case"sandbags":e=[N.box(.3,.12,.18,12100474,0,0,0)];break;case"bandage":e=[N.cyl(.035,.035,.07,8,15658734,0,0,0,0,0,Math.PI/2)];break;default:e=[N.box(.1,.1,.1,8947848)]}let i=N.merge(e);return _n.set(t,i),i}var $e=[{uniform:5991238,vest:3950898,helmet:5069884,accent:4034016,pack:4608570,pants:5595967,name:"NORTHWIND",css:"#4a9cf0"},{uniform:10259046,vest:7101763,helmet:8286035,accent:14700605,pack:8022605,pants:9272411,name:"IRONSIDE",css:"#f05a48"}],gh=[14726287,13013104,9263676,15780008,11040079];function ha(r,t,e,i,n,s,a,o){let l=i-r,c=n-t,h=s-e,u=Math.hypot(l,c,h),d=N.box(a,a,u,o),f=new Tt().lookAt(new C(0,0,0),new C(l,c,h),new C(0,1,0));return d.applyMatrix4(f),d.translate((r+i)/2,(t+n)/2,(e+s)/2),d}function Hd(r,t,e=0){let i=$e[r],n=gh[e%gh.length],s=yn("soldier",{roughness:.85}),a=`s_${r}_${t}_${e%gh.length}`,o=_n.get(a);if(!o){o={},o.hips=N.merge([N.box(.34,.16,.2,i.pants,0,0,0),N.box(.36,.04,.22,2763298,0,.07,0)]);let m=[N.box(.38,.5,.22,i.uniform,0,.27,0),N.box(.4,.38,.26,i.vest,0,.3,-.005),N.box(.12,.08,.05,i.vest,-.1,.24,-.14),N.box(.12,.08,.05,i.vest,.1,.24,-.14)];m.push(N.box(.3,.36,.16,i.pack,0,.3,.19)),t==="medic"&&(m.push(N.box(.12,.04,.01,13639712,0,.36,.275)),m.push(N.box(.04,.12,.01,13639712,0,.36,.275))),t==="support"&&m.push(N.box(.24,.12,.12,3820074,0,.1,.22)),t==="engineer"&&m.push(N.cyl(.05,.05,.5,6,4872762,.14,.42,.22,.4)),t==="leader"&&m.push(N.box(.02,.35,.02,2236962,-.1,.62,.2)),m.push(N.box(.08,.06,.24,i.accent,.205,.38,0)),o.torso=N.merge(m);let y=[N.box(.2,.22,.2,n,0,.11,0)];t==="recon"?y.push(N.box(.36,.03,.36,i.helmet,0,.22,0),N.box(.22,.08,.22,i.helmet,0,.26,0)):t==="leader"?y.push(N.box(.23,.1,.23,i.helmet,0,.23,0),N.box(.22,.02,.1,i.helmet,0,.19,-.15),N.box(.04,.08,.08,2236962,.12,.12,0)):y.push(N.box(.26,.12,.27,i.helmet,0,.23,.01),N.box(.27,.05,.28,i.helmet,0,.17,.01)),y.push(N.box(.17,.03,.01,2236962,0,.14,-.101)),o.head=N.merge(y),o.thigh=N.merge([N.box(.15,.46,.16,i.pants,0,-.23,0),N.box(.06,.12,.1,i.vest,.08,-.25,0)]),o.shin=N.merge([N.box(.13,.42,.14,i.pants,0,-.21,0),N.box(.15,.1,.24,2762274,0,-.43,-.04)]),o.armR=N.merge([ha(.2,0,0,.12,-.2,-.2,.11,i.uniform),ha(.12,-.2,-.2,.05,-.13,-.34,.1,i.uniform),N.box(.08,.08,.09,3026474,.045,-.13,-.36)]),o.armL=N.merge([ha(0,0,0,0,-.22,-.22,.11,i.uniform),ha(0,-.22,-.22,.17,-.1,-.5,.1,i.uniform),N.box(.08,.08,.09,3026474,.17,-.1,-.52)]),_n.set(a,o)}let l=m=>{let y=new $t(m,s);return y.castShadow=!0,y.receiveShadow=!0,y},c=new Te,h=new Te;h.position.y=.95,c.add(h),h.add(l(o.hips));let u=new Te;u.position.y=.06,h.add(u),u.add(l(o.torso));let d=new Te;d.position.y=.55,u.add(d),d.add(l(o.head));let f=new Te;f.position.set(0,.42,0),u.add(f),f.add(l(o.armR));let p=new Te;p.position.set(-.2,0,0),f.add(p),p.add(l(o.armL));let v=new Te;v.position.set(.05,-.1,-.34),f.add(v);let g=[];for(let m of[-1,1]){let y=new Te;y.position.set(m*.1,-.04,0),h.add(y),y.add(l(o.thigh));let x=new Te;x.position.y=-.46,y.add(x),x.add(l(o.shin)),g.push({thigh:y,shin:x})}return{root:c,hips:h,torso:u,head:d,aim:f,armL:p,weapon:v,legs:g,weaponMesh:null,mat:s}}function Vd(r,t){r.weaponMesh&&r.weapon.remove(r.weaponMesh);let e=new $t(t,yn("weapon",{roughness:.6,metalness:.25}));e.castShadow=!0,r.weapon.add(e),r.weaponMesh=e}function Yx(r){let t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstElementChild}var $x=[["W A S D","Move"],["Shift","Sprint"],["Space","Jump / vault / climb"],["C / Ctrl","Crouch (toggle / hold)"],["Z","Prone"],["Q / E","Lean left / right"],["Mouse 1","Fire"],["Mouse 2","Aim down sights \xB7 detonate C4"],["R","Reload"],["B","Fire mode"],["1 \u2013 5","Primary, sidearm, gadgets, throwable"],["Wheel","Cycle slots"],["G","Quick-throw grenade"],["X","Bandage (stops bleeding)"],["F (hold)","Revive downed teammate \xB7 heal with medkit"],["T","Spot enemy \xB7 squad leader: order flag / move / follow"],["V","Flashlight"],["Tab","Scoreboard"],["M","Map"],["Esc","Pause / settings"]],ua=class{constructor(t){this.app=t,this.root=document.getElementById("ui"),this.screens={},this.loadout=this.loadSavedLoadout()}loadSavedLoadout(){try{let t=JSON.parse(localStorage.getItem("fireline.loadout")||"null");if(t&&t.cls&&Ye[t.primary])return t}catch{}return{cls:"assault",primary:"m4a1",att:xr("m4a1"),secondary:"m9",satt:{sight:"iron",barrel:"none",grip:"none",rail:"none"},throwable:"frag",armor:"light"}}saveLoadout(){try{localStorage.setItem("fireline.loadout",JSON.stringify(this.loadout))}catch{}}hideAll(){for(let t in this.screens)this.screens[t].style.display="none"}screen(t,e){this.screens[t]&&this.screens[t].remove();let i=Yx(`<div class="screen ${t}">${e}</div>`);return this.root.appendChild(i),this.screens[t]=i,i}click(t){t.addEventListener("click",()=>this.app.audio.play2d("ui",{vol:.3}))}showMain(){this.hideAll();let t=this.screen("main",`
      <div class="title"><h1>FIRE<span>LINE</span></h1><div class="sub">16 vs 16 \xB7 infantry combat \xB7 destructible battlefield</div></div>
      <div class="menu-col">
        <button class="btn big primary" data-a="play">Play</button>
        <button class="btn big" data-a="settings">Settings</button>
        <button class="btn big" data-a="controls">Controls</button>
      </div>
      <div class="foot">All models, textures and sounds are generated procedurally at runtime.</div>`);t.querySelector("[data-a=play]").onclick=()=>this.showSetup(),t.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showMain()),t.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showMain()),t.querySelectorAll("button").forEach(e=>this.click(e)),t.style.display="flex"}showSetup(){this.hideAll();let t=this.app.matchConfig,e=Object.values(ia),i=this.screen("setup",`
      <div class="panel wide">
        <h2>Match setup</h2>
        <div class="mapcards">${e.map(a=>`<div class="mapcard${t.map===a.id?" on":""}" data-map="${a.id}"><div class="mc-img mc-${a.id}"></div><b>${a.name}</b><span>${a.size}m \xD7 ${a.size}m \xB7 ${a.biome}</span><p>${a.desc}</p></div>`).join("")}</div>
        <div class="row3">
          <label>Mode<select data-k="mode">${Object.entries(zs).map(([a,o])=>`<option value="${a}"${t.mode===a?" selected":""}>${o.name}</option>`).join("")}</select><small class="mdesc"></small></label>
          <label>Time of day<select data-k="time"><option value="default">Map default</option>${["morning","noon","afternoon","dusk","night"].map(a=>`<option value="${a}"${t.time===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Bot difficulty<select data-k="difficulty">${["recruit","regular","veteran","elite"].map(a=>`<option value="${a}"${this.app.settings.get("difficulty")===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Your team<select data-k="team"><option value="0"${t.team===0?" selected":""}>${$e[0].name}</option><option value="1"${t.team===1?" selected":""}>${$e[1].name}</option></select></label>
          <label>Tickets / kill limit<select data-k="tickets"><option value="0">Mode default</option><option value="150">150</option><option value="250">250</option><option value="400">400</option><option value="600">600</option></select></label>
          <label>Callsign<input data-k="name" maxlength="14" value="${t.name}"></label>
        </div>
        <div class="note">16 vs 16 \u2014 you plus 31 AI soldiers in 8 squads of four.</div>
        <div class="btnrow"><button class="btn" data-a="back">Back</button><button class="btn primary" data-a="start">Start match</button></div>
      </div>`),n=i.querySelector(".mdesc"),s=()=>{n.textContent=zs[i.querySelector("[data-k=mode]").value].desc};s(),i.querySelector("[data-k=mode]").onchange=s,i.querySelectorAll(".mapcard").forEach(a=>a.onclick=()=>{i.querySelectorAll(".mapcard").forEach(o=>o.classList.remove("on")),a.classList.add("on"),t.map=a.dataset.map,this.app.audio.play2d("ui",{vol:.3})}),i.querySelector("[data-a=back]").onclick=()=>this.showMain(),i.querySelector("[data-a=start]").onclick=()=>{t.mode=i.querySelector("[data-k=mode]").value,t.time=i.querySelector("[data-k=time]").value,t.team=Number(i.querySelector("[data-k=team]").value),t.tickets=Number(i.querySelector("[data-k=tickets]").value),t.name=(i.querySelector("[data-k=name]").value||"You").slice(0,14),this.app.settings.set("difficulty",i.querySelector("[data-k=difficulty]").value),this.app.startMatch()},i.querySelectorAll("button").forEach(a=>this.click(a)),i.style.display="flex"}showLoading(t,e){let i=this.screens.loading;(!i||i.style.display==="none")&&(this.hideAll(),i=this.screen("loading",'<div class="loadbox"><h2>FIRE<span>LINE</span></h2><div class="lt"></div><div class="lbar"><div></div></div><div class="tip"></div></div>'),i.style.display="flex"),i.querySelector(".lt").textContent=t,i.querySelector(".lbar div").style.width=`${Math.round(e*100)}%`;let n=["Downed teammates can be revived by anyone \u2014 medics revive to full health.","Bandage [X] to stop bleeding before it drops you.","Engineers can blow holes in walls with RPGs and C4.","Suppressors keep you off the enemy minimap.","Bots react to gunfire, footsteps and muzzle flashes. Flank them.","Squad leaders press [T] on a flag to give orders.","Spawn on your squad leader or a rally point to stay in the fight."];i.dataset.tip||(i.dataset.tip=1,i.querySelector(".tip").textContent=n[Math.floor(Math.random()*n.length)])}showDeploy(t){this.hideAll();let e=this.screen("deploy",`
      <div class="deploy-left panel">
        <h3>Class</h3><div class="classes"></div>
        <div class="cdesc"></div>
        <h3>Primary</h3><div class="wlist"></div>
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
      </div>`);this.deployEl=e,this.game=t,this.buildClassUI();let i=e.querySelector(".dmap");i.onclick=n=>{let s=i.getBoundingClientRect(),a=(n.clientX-s.left)/s.width*i.width,o=(n.clientY-s.top)/s.height*i.height,l=null,c=30;for(let h of this.spawns||[]){let u=Math.hypot(h._mx-a,h._my-o);u<c&&(c=u,l=h)}l&&(this.selectedSpawn=l,this.app.audio.play2d("ui",{vol:.3}))},e.querySelector(".dbtn").onclick=()=>this.tryDeploy(),e.style.display="flex",this.selectedSpawn=null}buildClassUI(){let t=this.deployEl,e=this.loadout;t.querySelector(".classes").innerHTML=Object.entries(oi).map(([u,d])=>`<button class="cls${e.cls===u?" on":""}" data-c="${u}" style="--cc:${d.color}"><b>${d.name}</b></button>`).join(""),t.querySelectorAll(".cls").forEach(u=>u.onclick=()=>{e.cls=u.dataset.c;let d=ra(e.cls);d.includes(e.primary)||(e.primary=d[0],e.att=xr(e.primary)),(e.cls==="medic"||e.cls==="leader")&&(["smoke","frag"].includes(e.throwable)||(e.throwable="smoke")),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let i=oi[e.cls];t.querySelector(".cdesc").innerHTML=`<b style="color:${i.color}">${i.name}</b> \u2014 ${i.desc}${e.cls==="leader"?"<br><i>You will lead your squad. Press [T] at a flag to order it.</i>":""}`;let n=ra(e.cls);t.querySelector(".wlist").innerHTML=n.map(u=>`<button class="wbtn${e.primary===u?" on":""}" data-w="${u}"><b>${Ye[u].name}</b><span>${Ye[u].type.toUpperCase()}</span></button>`).join(""),t.querySelectorAll(".wbtn").forEach(u=>u.onclick=()=>{e.primary=u.dataset.w,e.att=xr(e.primary),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let s=Ye[e.primary],a=(u,d)=>`<div class="stat"><span>${u}</span><div><i style="width:${Math.max(4,Math.min(100,d))}%"></i></div></div>`;t.querySelector(".wstats").innerHTML=a("Damage",s.dmg*(s.pellets||1)/1.1)+a("Fire rate",s.rpm/11)+a("Range",s.r1/4)+a("Control",100-s.recoilV*40)+a("Mobility",(s.moveMul-.8)*400)+`<div class="wnum">${s.rpm} RPM \xB7 ${s.vel} m/s \xB7 ${s.mag} rds \xB7 ${s.modes.join("/")}</div>`,t.querySelector(".atts").innerHTML=["sight","barrel","grip","rail"].map(u=>`<label>${u[0].toUpperCase()+u.slice(1)}<select data-slot="${u}">${dh(e.primary,u).map(d=>`<option value="${d}"${e.att[u]===d?" selected":""}>${Ns[u][d].name}</option>`).join("")}</select></label>`).join(""),t.querySelectorAll(".atts select").forEach(u=>u.onchange=()=>{e.att[u.dataset.slot]=u.value,this.saveLoadout()});let o=t.querySelector("[data-k=secondary]");o.innerHTML=sa.map(u=>`<option value="${u}"${e.secondary===u?" selected":""}>${Ye[u].name}</option>`).join(""),o.onchange=()=>{e.secondary=o.value,this.saveLoadout()};let l=t.querySelector("[data-k=throwable]");l.innerHTML=Ed.map(u=>`<option value="${u}"${e.throwable===u?" selected":""}>${Ki[u].name}</option>`).join(""),l.onchange=()=>{e.throwable=l.value,this.saveLoadout()};let c=t.querySelector("[data-k=armor]");c.value=e.armor||"light",c.onchange=()=>{e.armor=c.value,this.saveLoadout()};let h=t.querySelector("[data-k=sbarrel]");h.value=e.satt.barrel,h.onchange=()=>{e.satt.barrel=h.value,this.saveLoadout()},t.querySelector(".gadgets").innerHTML="<h3>Class gadgets</h3>"+i.gadgets.map((u,d)=>`<div class="gad"><i>${d+3}</i>${Ki[u].name}${Ki[u].count!==1/0?` \xD7${Ki[u].count}`:""}</div>`).join("")+`<div class="gad"><i>5</i>${Ki[e.throwable].name} \xD7${i.throwables}</div><div class="gad"><i>X</i>Bandage \xD74</div>`,this.saveLoadout()}updateDeploy(t){let e=this.deployEl;if(!e||e.style.display==="none")return;let i=t.player;this.spawns=t.spawnOptions(i),!this.selectedSpawn||!this.spawns.find(o=>o.key===this.selectedSpawn.key)?this.selectedSpawn=this.spawns.find(o=>o.kind==="squad")||this.spawns.find(o=>o.kind==="flag")||this.spawns[0]:this.selectedSpawn=this.spawns.find(o=>o.key===this.selectedSpawn.key),t.hud.drawMap(e.querySelector(".dmap"),!0,this.spawns,this.selectedSpawn);let n=Math.max(0,t.respawnAt-t.time),s=e.querySelector(".dbtn");s.textContent=n>0?`Deploy in ${n.toFixed(1)}s`:"Deploy [Space]",s.classList.toggle("wait",n>0),e.querySelector(".dteam").textContent=$e[i.team].name,e.querySelector(".dteam").style.color=$e[i.team].css,e.querySelector(".dsquad").textContent=i.squad?`${i.squad.name} squad \xB7 ${t.modeName} \xB7 ${t.world.def.name}`:"",e.querySelector(".dspawn").textContent=this.selectedSpawn?`Spawn: ${this.selectedSpawn.label}`:"";let a=t.lastDeath;e.querySelector(".dkill").innerHTML=a?`${a.killer?`Killed by <b style="color:#ff6a5a">${a.killer}</b>`:"You died"} ${a.weapon?`\xB7 ${a.weapon}`:""} ${a.dist?`\xB7 ${Math.round(a.dist)}m`:""}${a.head?" \xB7 headshot":""}`:"Choose your class, loadout and spawn point.",(t.input.hit("Space")||t.input.hit("Enter"))&&this.tryDeploy()}tryDeploy(){let t=this.game;!t||t.time<t.respawnAt||!this.selectedSpawn||(this.saveLoadout(),t.deployPlayer(JSON.parse(JSON.stringify(this.loadout)),this.selectedSpawn))}showPause(t){this.hideAll();let e=this.screen("pause",`
      <div class="panel">
        <h2>Paused</h2>
        <div class="menu-col">
          <button class="btn big primary" data-a="resume">Resume</button>
          ${t.player.state!=="dead"?'<button class="btn big" data-a="redeploy">Redeploy (change class)</button>':""}
          <button class="btn big" data-a="settings">Settings</button>
          <button class="btn big" data-a="controls">Controls</button>
          <button class="btn big" data-a="quit">Leave match</button>
        </div>
      </div>`);e.querySelector("[data-a=resume]").onclick=()=>this.app.resume();let i=e.querySelector("[data-a=redeploy]");i&&(i.onclick=()=>{t.player.die(null,"Redeploy",!1,!0),this.app.resume()}),e.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showPause(t)),e.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showPause(t)),e.querySelector("[data-a=quit]").onclick=()=>this.app.quitMatch(),e.querySelectorAll("button").forEach(n=>this.click(n)),e.style.display="flex"}showSettings(t){this.hideAll();let e=this.app.settings,i='<div class="panel wide settings"><h2>Settings</h2><div class="setgrid">';for(let s of wd){if(s.group){i+=`<h3>${s.group}</h3>`;continue}let a=e.get(s.key);s.type==="bool"?i+=`<label class="set"><span>${s.label}</span><input type="checkbox" data-k="${s.key}"${a?" checked":""}></label>`:s.type==="select"?i+=`<label class="set"><span>${s.label}${s.hint?`<small>${s.hint}</small>`:""}</span><select data-k="${s.key}">${s.options.map(o=>`<option value="${o}"${a===o?" selected":""}>${o}</option>`).join("")}</select></label>`:i+=`<label class="set"><span>${s.label}</span><input type="range" data-k="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${a}"><em>${a}</em></label>`}i+='</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>';let n=this.screen("settings",i);n.querySelectorAll("[data-k]").forEach(s=>{let a=s.dataset.k,o=s.type==="range"?"input":"change";s.addEventListener(o,()=>{let l;if(s.type==="checkbox"?l=s.checked:s.type==="range"?(l=Number(s.value),s.nextElementSibling.textContent=l):l=s.value,e.set(a,l),a==="preset"&&Ls[l])this.showSettings(t);else if(a!=="preset"){let c=n.querySelector("[data-k=preset]");c&&(c.value=e.get("preset"))}})}),n.querySelector("[data-a=back]").onclick=t,n.style.display="flex"}showControls(t){this.hideAll();let e=this.screen("controls",`<div class="panel"><h2>Controls</h2><div class="ctl">${$x.map(([i,n])=>`<div><kbd>${i}</kbd><span>${n}</span></div>`).join("")}</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>`);e.querySelector("[data-a=back]").onclick=t,e.style.display="flex"}showEnd(t,e){this.hideAll();let i=t.player,n=e===i.team,s=t.soldiers.slice().sort((p,v)=>v.stats.score-p.stats.score),a=s[0],o=s.indexOf(i)+1,l=0;try{l=Number(localStorage.getItem("fireline.xp")||0)}catch{}let c=i.stats.score+(n?500:150),h=p=>Math.floor(Math.sqrt(p/400))+1,u=h(l);l+=c;let d=h(l);try{localStorage.setItem("fireline.xp",String(l))}catch{}let f=this.screen("end",`
      <div class="panel wide">
        <h1 class="${e===-1?"draw":n?"win":"lose"}">${e===-1?"DRAW":n?"VICTORY":"DEFEAT"}</h1>
        <div class="endsub">${t.world.def.name} \xB7 ${t.modeName} \xB7 ${$e[0].name} ${t.mode.type==="tdm"?t.mode.kills[0]:t.mode.tickets[0]} \u2014 ${t.mode.type==="tdm"?t.mode.kills[1]:t.mode.tickets[1]} ${$e[1].name}</div>
        <div class="endstats">
          <div><b>${i.stats.score}</b><span>Score (#${o})</span></div><div><b>${i.stats.kills}</b><span>Kills</span></div><div><b>${i.stats.deaths}</b><span>Deaths</span></div>
          <div><b>${i.stats.assists}</b><span>Assists</span></div><div><b>${i.stats.revives}</b><span>Revives</span></div><div><b>${i.stats.caps}</b><span>Captures</span></div>
        </div>
        <div class="mvp">+${c} XP \xB7 Rank ${d}${d>u?' <b style="color:#ffcc4d">RANK UP!</b>':""} (${l} XP total)</div>
        <div class="mvp">MVP: <b style="color:${$e[a.team].css}">${a.name}</b> \u2014 ${a.stats.score} pts, ${a.stats.kills} kills</div>
        <div class="btnrow"><button class="btn" data-a="menu">Main menu</button><button class="btn primary" data-a="again">Play again</button></div>
      </div>`);f.querySelector("[data-a=menu]").onclick=()=>this.app.quitMatch(),f.querySelector("[data-a=again]").onclick=()=>this.app.startMatch(),f.querySelectorAll("button").forEach(p=>this.click(p)),f.style.display="flex"}};var da=class{constructor(t,e){this.def=t,this.size=t.size,this.half=t.size/2,this.cell=t.cell,this.n=Math.round(t.size/t.cell)+1,this.waterLevel=t.waterLevel,this.noise=Ai(t.seed),this.noise2=Ai(t.seed+101),this.layout=e,this.heights=new Float32Array(this.n*this.n),this.roadMask=new Float32Array(this.n*this.n),this.riverDist=new Float32Array(this.n*this.n).fill(1e4),this.splat=new Float32Array(this.n*this.n*4),this.grass=new Uint8Array(this.n*this.n),this.generate()}idx(t,e){return e*this.n+t}worldX(t){return-this.half+t*this.cell}generate(){let{n:t,cell:e,half:i,def:n,noise:s}=this,a=this.heights;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=-i+u*e,f=-i+h*e;a[h*t+u]=n.height(d,f,s,this.noise2)}for(let h of this.layout.rivers||[]){let u=h.points;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let p=-i+f*e,v=-i+d*e,g=1e12;for(let S=0;S<u.length-1;S++){let w=Us(p,v,u[S][0],u[S][1],u[S+1][0],u[S+1][1]);w<g&&(g=w)}let m=Math.sqrt(g)+s(p*.03,v*.03)*2.5,y=d*t+f;m<this.riverDist[y]&&(this.riverDist[y]=m);let x=h.width/2,_=h.depth;for(let S of h.fords||[]){let w=Math.hypot(p-S.x,v-S.z);w<S.r&&(_=Qt(S.depth,_,ke(S.r*.5,S.r,w)))}let A;m<x?A=this.waterLevel-_*(1-m/x*(m/x))-.3:A=this.waterLevel-.3+(m-x)*h.bankSlope,A<a[y]&&(a[y]=A)}}let o=this.blur(a,4);for(let h of this.layout.roads||[]){let u=h.points,d=h.width/2,f=Math.min(...u.map(A=>A[0]))-d-8,p=Math.max(...u.map(A=>A[0]))+d+8,v=Math.min(...u.map(A=>A[1]))-d-8,g=Math.max(...u.map(A=>A[1]))+d+8,m=Math.max(0,Math.floor((f+i)/e)),y=Math.min(t-1,Math.ceil((p+i)/e)),x=Math.max(0,Math.floor((v+i)/e)),_=Math.min(t-1,Math.ceil((g+i)/e));for(let A=x;A<=_;A++)for(let S=m;S<=y;S++){let w=-i+S*e,P=-i+A*e,b=1e12;for(let z=0;z<u.length-1;z++){let F=Us(w,P,u[z][0],u[z][1],u[z+1][0],u[z+1][1]);F<b&&(b=F)}let M=Math.sqrt(b),T=1-ke(d*.7,d+1.5,M),D=A*t+S;T>this.roadMask[D]&&(this.roadMask[D]=T);let L=1-ke(d,d+7,M);this.riverDist[D]>3&&(a[D]=Qt(a[D],o[D]-.08*T,L*.85))}}for(let h of this.layout.flatZones||[]){let u=h.h!==void 0?h.h:this.sampleAvg(a,h.x,h.z,h.hw,h.hd);h.h=u;let d=h.margin||4,f=Math.max(0,Math.floor((h.x-h.hw-d+i)/e)),p=Math.min(t-1,Math.ceil((h.x+h.hw+d+i)/e)),v=Math.max(0,Math.floor((h.z-h.hd-d+i)/e)),g=Math.min(t-1,Math.ceil((h.z+h.hd+d+i)/e));for(let m=v;m<=g;m++)for(let y=f;y<=p;y++){let x=-i+y*e,_=-i+m*e,A=Math.max(0,Math.abs(x-h.x)-h.hw),S=Math.max(0,Math.abs(_-h.z)-h.hd),w=Math.sqrt(A*A+S*S),P=1-ke(0,d,w),b=m*t+y;a[b]=Qt(a[b],u,P*(h.strength??1)),h.noGrass&&w<1.5&&(this.grass[b]=255)}}this.computeNormals(),this.computeSplat();let l=-1/0,c=1/0;for(let h=0;h<a.length;h++)a[h]>l&&(l=a[h]),a[h]<c&&(c=a[h]);this.maxH=l,this.minH=c}blur(t,e){let{n:i}=this,n=new Float32Array(t.length),s=new Float32Array(t.length);for(let a=0;a<i;a++){let o=0,l=0;for(let c=-e;c<=e;c++){let h=zt(c,0,i-1);o+=t[a*i+h],l++}for(let c=0;c<i;c++){n[a*i+c]=o/l;let h=zt(c-e,0,i-1),u=zt(c+e+1,0,i-1);o+=t[a*i+u]-t[a*i+h]}}for(let a=0;a<i;a++){let o=0,l=0;for(let c=-e;c<=e;c++){let h=zt(c,0,i-1);o+=n[h*i+a],l++}for(let c=0;c<i;c++){s[c*i+a]=o/l;let h=zt(c-e,0,i-1),u=zt(c+e+1,0,i-1);o+=n[u*i+a]-n[h*i+a]}}return s}sampleAvg(t,e,i,n,s){let a=0,o=0;for(let l=-s;l<=s;l+=Math.max(1,s/3))for(let c=-n;c<=n;c+=Math.max(1,n/3))a+=this.heightAtArr(t,e+c,i+l),o++;return a/o}heightAtArr(t,e,i){let{n,cell:s,half:a}=this,o=(e+a)/s,l=(i+a)/s;o=zt(o,0,n-1.001),l=zt(l,0,n-1.001);let c=Math.floor(o),h=Math.floor(l),u=o-c,d=l-h,f=t[h*n+c],p=t[h*n+c+1],v=t[(h+1)*n+c],g=t[(h+1)*n+c+1];return(f*(1-u)+p*u)*(1-d)+(v*(1-u)+g*u)*d}heightAt(t,e){return this.heightAtArr(this.heights,t,e)}computeNormals(){let{n:t,cell:e}=this,i=this.heights;this.normals=new Float32Array(t*t*3);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let a=i[n*t+Math.max(0,s-1)],o=i[n*t+Math.min(t-1,s+1)],l=i[Math.max(0,n-1)*t+s],c=i[Math.min(t-1,n+1)*t+s],h=a-o,u=2*e,d=l-c,f=Math.hypot(h,u,d),p=(n*t+s)*3;this.normals[p]=h/f,this.normals[p+1]=u/f,this.normals[p+2]=d/f}}normalAt(t,e){let{n:i,cell:n,half:s}=this,a=zt(Math.round((t+s)/n),0,i-1),l=(zt(Math.round((e+s)/n),0,i-1)*i+a)*3;return[this.normals[l],this.normals[l+1],this.normals[l+2]]}computeSplat(){let{n:t,cell:e,half:i,def:n}=this;for(let s=0;s<t;s++)for(let a=0;a<t;a++){let o=s*t+a,l=-i+a*e,c=-i+s*e,h=this.heights[o],u=1-this.normals[o*3+1],d=this.grass[o]===255,f=n.splat(l,c,h,u,this.roadMask[o],this.riverDist[o],this.noise,d),p=f[0]+f[1]+f[2]+f[3]||1;this.splat[o*4]=f[0]/p,this.splat[o*4+1]=f[1]/p,this.splat[o*4+2]=f[2]/p,this.splat[o*4+3]=f[3]/p;let v=n.grassDensity(l,c,h,u,this.roadMask[o],this.riverDist[o],this.noise,f);d&&(v=0),this.waterLevel!==null&&h<this.waterLevel+.3&&(v=0),this.grass[o]=zt(Math.round(v*255),0,254)}}raycast(t,e,i,n,s,a,o){if(e>this.maxH&&s>=0)return 1/0;let l=Math.max(.5,this.cell*.5),c=0,h=0,u=e-this.heightAt(t,i);if(u<0)return 0;for(;c<o;){c=Math.min(o,c+l);let d=t+n*c,f=e+s*c,p=i+a*c;if(f>this.maxH+.1&&s>=0)return 1/0;let v=f-this.heightAt(d,p);if(v<0){let g=h,m=c;for(let y=0;y<6;y++){let x=(g+m)*.5;e+s*x-this.heightAt(t+n*x,i+a*x)<0?m=x:g=x}return g}if(h=c,u=v,c>=o)break}return 1/0}buildMesh(t){let{n:e,cell:i,half:n,def:s}=this,a=new Te;a.name="terrain";let o=s.terrainTextures.map(mi),l=mi("noise"),c=new ve({color:16777215,roughness:.95,metalness:0}),h={uT0:{value:o[0]},uT1:{value:o[1]},uT2:{value:o[2]},uT3:{value:o[3]},uNoise:{value:l},uTint0:{value:new dt().setRGB(...s.palette.t0)},uTint1:{value:new dt().setRGB(...s.palette.t1)},uTint2:{value:new dt().setRGB(...s.palette.t2)},uTint3:{value:new dt().setRGB(...s.palette.t3)},uMacro:{value:new dt().setRGB(...s.palette.macro)}};Wn(c,"terrain",p=>{Object.assign(p.uniforms,h),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= tcol;`)}),c.userData.terrainUniforms=h,this.material=c;let u=48,d=e-1;for(let p=0;p<d;p+=u)for(let v=0;v<d;v+=u){let g=Math.min(u,d-v),m=Math.min(u,d-p),y=(g+1)*(m+1),x=new Float32Array(y*3),_=new Float32Array(y*3),A=new Float32Array(y*4),S=0;for(let T=0;T<=m;T++)for(let D=0;D<=g;D++){let L=v+D,z=p+T,F=z*e+L;x[S*3]=-n+L*i,x[S*3+1]=this.heights[F],x[S*3+2]=-n+z*i,_[S*3]=this.normals[F*3],_[S*3+1]=this.normals[F*3+1],_[S*3+2]=this.normals[F*3+2],A[S*4]=this.splat[F*4],A[S*4+1]=this.splat[F*4+1],A[S*4+2]=this.splat[F*4+2],A[S*4+3]=this.splat[F*4+3],S++}let w=new Uint32Array(g*m*6),P=0;for(let T=0;T<m;T++)for(let D=0;D<g;D++){let L=T*(g+1)+D,z=L+1,F=L+(g+1),O=F+1;D+T&1?(w[P++]=L,w[P++]=F,w[P++]=z,w[P++]=z,w[P++]=F,w[P++]=O):(w[P++]=L,w[P++]=F,w[P++]=O,w[P++]=L,w[P++]=O,w[P++]=z)}let b=new ye;b.setAttribute("position",new fe(x,3)),b.setAttribute("normal",new fe(_,3)),b.setAttribute("splat",new fe(A,4)),b.setIndex(new fe(w,1)),b.computeBoundingBox(),b.computeBoundingSphere();let M=new $t(b,c);M.receiveShadow=!0,M.castShadow=!0,a.add(M)}t.add(a),this.mesh=a;let f=new Uint16Array(e*e);for(let p=0;p<e*e;p++)f[p]=dd.toHalfFloat(this.heights[p]);return this.heightTex=new Ui(f,e,e,Ps,_e),this.heightTex.minFilter=this.heightTex.magFilter=qe,this.heightTex.needsUpdate=!0,this.grassTex=new Ui(this.grass,e,e,Ps,si),this.grassTex.minFilter=this.grassTex.magFilter=qe,this.grassTex.needsUpdate=!0,a}renderMapImage(t=512,e){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),s=n.createImageData(t,t),a=s.data,o=this.def.mapColors;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let h=-this.half+(c+.5)/t*this.size,u=-this.half+(l+.5)/t*this.size,d=this.heightAt(h,u),f=Math.round((h+this.half)/this.cell),p=Math.round((u+this.half)/this.cell),v=zt(p,0,this.n-1)*this.n+zt(f,0,this.n-1),g=[this.splat[v*4],this.splat[v*4+1],this.splat[v*4+2],this.splat[v*4+3]],m=0,y=0,x=0;for(let P=0;P<4;P++)m+=o[P][0]*g[P],y+=o[P][1]*g[P],x+=o[P][2]*g[P];let _=this.heightAt(h+2,u)-this.heightAt(h-2,u),A=this.heightAt(h,u+2)-this.heightAt(h,u-2),S=zt(1-(_*.5+A*.5)*.12,.6,1.35);if(m*=S,y*=S,x*=S,this.waterLevel!==null&&d<this.waterLevel){let P=zt((this.waterLevel-d)/4,0,1);m=Qt(90,40,P),y=Qt(130,85,P),x=Qt(150,120,P)}let w=(l*t+c)*4;a[w]=zt(m,0,255),a[w+1]=zt(y,0,255),a[w+2]=zt(x,0,255),a[w+3]=255}if(n.putImageData(s,0,0),e){let l=t/this.size;for(let c of e)n.fillStyle=c.color||"rgba(70,64,58,0.9)",n.fillRect((c.minX+this.half)*l,(c.minZ+this.half)*l,Math.max(1,(c.maxX-c.minX)*l),Math.max(1,(c.maxZ-c.minZ)*l))}return i}};var fa=class r{constructor(t){this.terrain=t,this.half=t.half,this.dim=Math.ceil(t.size/4),this.cells=new Array(this.dim*this.dim);for(let e=0;e<this.cells.length;e++)this.cells[e]=[];this.boxes=[],this.stamp=1,this.softOccluders=[],this.softGrid=null}cellIndex(t,e){let i=Math.floor((t+this.half)/4),n=Math.floor((e+this.half)/4);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}addBox(t){t.id=this.boxes.length,t.alive=!0,t._stamp=0,this.boxes.push(t);let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let o=e;o<=i;o++)this.cells[a*this.dim+o].push(t);return t}removeBox(t){if(!t.alive)return;t.alive=!1;let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let o=e;o<=i;o++){let l=this.cells[a*this.dim+o],c=l.indexOf(t);c>=0&&(l[c]=l[l.length-1],l.pop())}}query(t,e,i,n,s){let a=++this.stamp,o=Math.max(0,Math.floor((t+this.half)/4)),l=Math.min(this.dim-1,Math.floor((i+this.half)/4)),c=Math.max(0,Math.floor((e+this.half)/4)),h=Math.min(this.dim-1,Math.floor((n+this.half)/4));for(let u=c;u<=h;u++)for(let d=o;d<=l;d++){let f=this.cells[u*this.dim+d];for(let p=0;p<f.length;p++){let v=f[p];if(v._stamp!==a&&(v._stamp=a,!(v.maxX<t||v.minX>i||v.maxZ<e||v.minZ>n)&&s(v)===!1))return}}}static rayBox(t,e,i,n,s,a,o,l){let c=(o.minX-t)*n,h=(o.maxX-t)*n,u=Math.min(c,h),d=Math.max(c,h),f=0;c=(o.minY-e)*s,h=(o.maxY-e)*s;let p=Math.min(c,h),v=Math.max(c,h);return p>u&&(u=p,f=1),v<d&&(d=v),c=(o.minZ-i)*a,h=(o.maxZ-i)*a,p=Math.min(c,h),v=Math.max(c,h),p>u&&(u=p,f=2),v<d&&(d=v),d<0||u>d||u>l?null:[u,d,f]}raycast(t,e,i,n,s,a,o,l=null){let c=1/(n||1e-9),h=1/(s||1e-9),u=1/(a||1e-9),d=o,f=null,p=0,v=0,g=++this.stamp,m=l&&l.ignore,y=Math.floor((t+this.half)/4),x=Math.floor((i+this.half)/4),_=n>0?1:-1,A=a>0?1:-1,S=(y+(_>0?1:0))*4-this.half,w=(x+(A>0?1:0))*4-this.half,P=Math.abs(n)<1e-9?1/0:(S-t)/n,b=Math.abs(a)<1e-9?1/0:(w-i)/a,M=Math.abs(n)<1e-9?1/0:4/Math.abs(n),T=Math.abs(a)<1e-9?1/0:4/Math.abs(a),D=0;for(let K=0;K<2e3;K++){if(y>=0&&x>=0&&y<this.dim&&x<this.dim){let ht=this.cells[x*this.dim+y];for(let wt=0;wt<ht.length;wt++){let Ft=ht[wt];if(Ft._stamp===g||(Ft._stamp=g,m&&m(Ft)))continue;let Y=r.rayBox(t,e,i,c,h,u,Ft,d);Y&&Y[0]>=0&&Y[0]<d?(d=Y[0],f=Ft,p=Y[2],v=Y[1]):Y&&Y[0]<0&&Y[1]>0&&0<d&&!(l&&l.skipInside)&&(d=0,f=Ft,p=Y[2],v=Y[1])}}if(D=Math.min(P,b),D>d||(P<b?(P+=M,y+=_):(b+=T,x+=A),y<-1&&_<0||y>this.dim&&_>0||x<-1&&A<0||x>this.dim&&A>0))break}let L=1/0;if((!l||l.terrain!==!1)&&(L=this.terrain.raycast(t,e,i,n,s,a,d)),L<d){let K=t+n*L,ht=e+s*L,wt=i+a*L,Ft=this.terrain.normalAt(K,wt);return{t:L,x:K,y:ht,z:wt,nx:Ft[0],ny:Ft[1],nz:Ft[2],box:null,thickness:99}}if(!f)return null;let z=t+n*d,F=e+s*d,O=i+a*d,Z=0,V=0,Q=0;return p===0?Z=n>0?-1:1:p===1?V=s>0?-1:1:Q=a>0?-1:1,{t:d,x:z,y:F,z:O,nx:Z,ny:V,nz:Q,box:f,thickness:v-d}}los(t,e,i,n,s,a,o){let l=n-t,c=s-e,h=a-i,u=Math.sqrt(l*l+c*c+h*h);return u<.01?!0:!this.raycast(t,e,i,l/u,c/u,h/u,u-.05,o)}addSoft(t){if(!this.softGrid){this.softDim=Math.ceil(this.terrain.size/16),this.softGrid=new Array(this.softDim*this.softDim);for(let a=0;a<this.softGrid.length;a++)this.softGrid[a]=[]}let e=Math.max(0,Math.floor((t.x-t.r+this.half)/16)),i=Math.min(this.softDim-1,Math.floor((t.x+t.r+this.half)/16)),n=Math.max(0,Math.floor((t.z-t.r+this.half)/16)),s=Math.min(this.softDim-1,Math.floor((t.z+t.r+this.half)/16));t._s=0;for(let a=n;a<=s;a++)for(let o=e;o<=i;o++)this.softGrid[a*this.softDim+o].push(t)}addDynamicSoft(t){this.softOccluders.push(t)}static _softTest(t,e,i,n,s,a,o,l,c){let h=t.x-e,u=t.y-i,d=t.z-n,f=(h*s+u*a+d*o)/l;if(f<0||f>1)return!1;let p=e+s*f-t.x,v=i+a*f-t.y,g=n+o*f-t.z,m=t.r*(t.grow?t.grow(c):1);return p*p+v*v+g*g<m*m}softVisibility(t,e,i,n,s,a,o){let l=1,c=n-t,h=s-e,u=a-i,d=c*c+h*h+u*u;if(d<1e-6)return 1;for(let m=this.softOccluders.length-1;m>=0;m--){let y=this.softOccluders[m];if(y.until&&y.until<o){this.softOccluders.splice(m,1);continue}if(r._softTest(y,t,e,i,c,h,u,d,o)&&(l*=1-y.strength,l<.02))return 0}if(!this.softGrid)return l;let f=++this.stamp,p=Math.sqrt(d),v=Math.ceil(p/8)+1,g=-1;for(let m=0;m<=v;m++){let y=m/v,x=t+c*y,_=i+u*y,A=Math.floor((x+this.half)/16),S=Math.floor((_+this.half)/16);if(A<0||S<0||A>=this.softDim||S>=this.softDim)continue;let w=S*this.softDim+A;if(w===g)continue;g=w;let P=this.softGrid[w];for(let b=0;b<P.length;b++){let M=P[b];if(M._s!==f&&(M._s=f,r._softTest(M,t,e,i,c,h,u,d,o)&&(l*=1-M.strength,l<.02)))return 0}}return l}groundAt(t,e,i,n=.25){let s=this.terrain.heightAt(t,e);return this.query(t-n,e-n,t+n,e+n,a=>{a.maxY<=i+.05&&a.maxY>s&&!a.noStand&&(s=a.maxY)}),s}move(t,e,i,n,s,a,o){o.hitWall=!1,o.ceiling=!1,o.stepped=!1;let l=o.grounded;for(let f=0;f<2;f++){let p=(f===0?e.x:e.z)*i;p!==0&&(f===0?t.x+=p:t.z+=p,this._resolveHorizontal(t,n,s,f,p,a,l,o))}t.y+=e.y*i,o.grounded=!1;let c=this.terrain.heightAt(t.x,t.z),h=c,u=1/0;this.query(t.x-n,t.z-n,t.x+n,t.z+n,f=>{f.noCollide||t.x+n<=f.minX||t.x-n>=f.maxX||t.z+n<=f.minZ||t.z-n>=f.maxZ||(f.maxY<=t.y+.35+(e.y<0?-e.y*i:0)?f.maxY>h&&(h=f.maxY):f.minY>=t.y+s*.5&&f.minY<u&&(u=f.minY))}),t.y+s>u&&e.y>0&&(t.y=u-s,e.y=0,o.ceiling=!0),t.y<=h+.001?(t.y=h,e.y<0&&(e.y=0),o.grounded=!0):l&&e.y<=0&&t.y-h<a*.9&&(t.y=h,e.y=0,o.grounded=!0),o.groundY=h,o.onTerrain=h===c;let d=this.half-2;return t.x<-d&&(t.x=-d),t.x>d&&(t.x=d),t.z<-d&&(t.z=-d),t.z>d&&(t.z=d),o}_resolveHorizontal(t,e,i,n,s,a,o,l){let c=0,h=!0;for(;h&&c++<4;){h=!1;let u=null;if(this.query(t.x-e,t.z-e,t.x+e,t.z+e,d=>{if(!d.noCollide&&!(t.x+e<=d.minX||t.x-e>=d.maxX||t.z+e<=d.minZ||t.z-e>=d.maxZ)&&!(d.maxY<=t.y+.02||d.minY>=t.y+i))return u=d,!1}),!u)break;if(o&&u.maxY-t.y<=a){let d=u.maxY;if(!this.overlapsAny(t.x,d+.01,t.z,e,i)){t.y=d,l.stepped=!0,h=!0;continue}}l.hitWall=!0,n===0?t.x=s>0?u.minX-e-.001:u.maxX+e+.001:t.z=s>0?u.minZ-e-.001:u.maxZ+e+.001,h=!0}}overlapsAny(t,e,i,n,s){let a=!1;return this.query(t-n,i-n,t+n,i+n,o=>{if(!o.noCollide&&!(t+n<=o.minX||t-n>=o.maxX||i+n<=o.minZ||i-n>=o.maxZ)&&!(o.maxY<=e||o.minY>=e+s))return a=!0,!1}),a}};var br={wood:{hp:70,pen:.35,tex:"wood",scale:.55,rough:.9,debris:9071176,sound:"wood"},plaster:{hp:170,pen:.8,tex:"plaster",scale:.35,rough:.95,debris:13617339,sound:"stone"},brick:{hp:280,pen:2,tex:"brick",scale:.5,rough:.92,debris:10514522,sound:"stone"},concrete:{hp:420,pen:3,tex:"concrete",scale:.25,rough:.9,debris:11118496,sound:"stone"},metal:{hp:160,pen:.55,tex:"metal",scale:.5,rough:.55,metal:.35,debris:9409430,sound:"metal"},container:{hp:3e3,pen:.9,tex:"metal",scale:.4,rough:.6,metal:.3,debris:8022618,sound:"metal"},sand:{hp:260,pen:6,tex:"sandbag",scale:1,rough:1,debris:12100474,sound:"dirt"},hay:{hp:45,pen:.6,tex:"hay",scale:.6,rough:1,debris:13808746,sound:"dirt"},cloth:{hp:25,pen:.05,tex:"cloth",scale:.8,rough:1,debris:13421772,sound:"dirt"},stone:{hp:340,pen:4,tex:"rock",scale:.45,rough:.95,debris:9407364,sound:"stone"}},Zx=3,pa=class{constructor(t){this.world=t,this.coll=t.collision,this.terrain=t.terrain,this.pieces=[],this.byCat={},this.decor=[],this.footprints=[],this.meshes={},this.rng=Xe(t.def.seed*7+3)}piece(t,e,i,n,s,a,o,l={}){let c=br[t],h={minX:Math.min(e,s),minY:Math.min(i,a),minZ:Math.min(n,o),maxX:Math.max(e,s),maxY:Math.max(i,a),maxZ:Math.max(n,o),cat:t,mat:t,color:l.color??16777215,hp:(l.hp??c.hp)*(l.hpMul||1),destructible:l.destructible!==!1,navFloor:!!l.navFloor,vault:!!l.vault,pen:c.pen,noCollide:!!l.noCollide,noStand:!!l.noStand,below:[],above:[],inst:-1,grounded:l.grounded!==!1,building:l.building||null};return h.maxHp=h.hp,this.coll.addBox(h),this.pieces.push(h),(this.byCat[t]=this.byCat[t]||[]).push(h),h}frame(t,e,i,n){let s=this,a=(o,l)=>{switch(i&3){case 0:return[t+o,e+l];case 1:return[t-l,e+o];case 2:return[t-o,e-l];default:return[t+l,e-o]}};return{tf:a,y0:n,box(o,l,c,h,u,d,f,p){let[v,g]=a(l,h),[m,y]=a(u,f);return s.piece(o,v,n+c,g,m,n+d,y,p)},decor(o,l,c,h,u=0){let[d,f]=a(l,h);o.rotateY(-(i&3)*Math.PI/2+u),o.translate(d,n+c,f),s.decor.push(o)}}}wall(t,e,i,n,s,a,o,l,c,h={}){let u=h.thick||.3,d=[],f=(m,y,x,_)=>{if(y-m<.05||_-x<.05)return null;let A;return i==="x"?A=t.box(e,m,x,n-u/2,y,_,n+u/2,{color:c,building:h.building,hpMul:h.hpMul}):A=t.box(e,n-u/2,x,m,n+u/2,_,y,{color:c,building:h.building,hpMul:h.hpMul}),A._a0=m,A._a1=y,A._y0=x,A._y1=_,d.push(A),A},p=(m,y,x,_,A=1)=>{let S=Math.max(1,Math.round((y-m)/1.5)),w=(_-x)/A;for(let P=0;P<A;P++)for(let b=0;b<S;b++)f(x+P*w,x+(P+1)*w,m+(y-m)*b/S,m+(y-m)*(b+1)/S)},v=o+l,g=s;for(let m=0;m<a.length;m++){let y=a[m],x=g,_=g+2;if(y==="solid")p(o,v,x,_,2);else if(y==="window")p(o,o+1,x,_,2),f(x,x+.4,o+1,o+2.2),f(_-.4,_,o+1,o+2.2),p(o+2.2,v,x,_,1);else if(y==="slit")p(o,o+1.25,x,_,2),f(x,x+.3,o+1.25,o+1.65),f(_-.3,_,o+1.25,o+1.65),p(o+1.65,v,x,_,1);else if(y==="door")p(o,o+2.3,x,x+.3,1),p(o,o+2.3,_-.3,_,1),p(o+2.3,v,x,_,1);else if(y==="wide"){let A=g+4,S=Math.min(l-.6,4.2);p(o,o+S,x,x+.3,1),p(o,o+S,A-.3,A,1),p(o+S,v,x,A,2),g+=4;continue}g+=2}for(let m of d){if(m._y0<=o+.01){m.grounded=!0;continue}m.grounded=!1;for(let y of d)y!==m&&Math.abs(y._y1-m._y0)<.02&&y._a1>m._a0+.05&&y._a0<m._a1-.05&&(m.below.push(y),y.above.push(m));m.below.length===0&&(m.grounded=!0)}return d}storey(t,e,i,n,s,a,o,l,c){this.wall(t,e,"x",-n,-i,l.n,s,a,o,c),this.wall(t,e,"x",n,-i,l.s,s,a,o,c),this.wall(t,e,"z",-i,-n,l.w,s,a,o,c),this.wall(t,e,"z",i,-n,l.e,s,a,o,c)}randomMods(t,e,i,n=.55,s="door"){let a=[];for(let o=0;o<t;o++)a.push(i()<n?"window":"solid");return e!=null&&e>=0&&e<t&&(a[e]=s),a}footprint(t,e,i,n,s,a){let o=i&1,l=o?s:n,c=o?n:s,h={minX:t-l,maxX:t+l,minZ:e-c,maxZ:e+c,color:a};return this.footprints.push(h),h}building(t,e,i,n=0,s={}){let a=this.rng,o=s.y??this.terrain.heightAt(e,i),l={type:t,cx:e,cz:i,rot:n};switch(t){case"house":return this.house(e,i,n,o,Object.assign({w:5,d:4,floors:1},s),l);case"house2":return this.house(e,i,n,o,Object.assign({w:5,d:4,floors:2},s),l);case"shop":return this.house(e,i,n,o,Object.assign({w:4,d:4,floors:a()<.45?2:1,flat:!0,cat:"plaster"},s),l);case"barn":return this.barn(e,i,n,o,s,l);case"warehouse":return this.warehouse(e,i,n,o,s,l);case"shed":return this.house(e,i,n,o,Object.assign({w:2,d:2,floors:1,cat:"wood",H:2.8,noInterior:!0,winP:.3,color:10518624},s),l);case"bunker":return this.house(e,i,n,o,Object.assign({w:3,d:3,floors:1,cat:"concrete",H:2.7,flat:!0,slits:!0,noInterior:!0,color:12104872},s),l);case"church":return this.church(e,i,n,o,s,l);case"ruin":return this.house(e,i,n,o,Object.assign({w:4,d:4,floors:1,ruin:!0,noRoof:!0,flat:!0},s),l);case"pumphouse":return this.house(e,i,n,o,Object.assign({w:4,d:3,floors:1,cat:"concrete",H:3.6,flat:!0,noInterior:!0,color:13091509},s),l);default:throw new Error("unknown building "+t)}}house(t,e,i,n,s,a){let o=this.rng,l=this.frame(t,e,i,n),c=s.w,h=s.d,u=c,d=h,f=s.H||Zx,p=s.cat||(o()<.3?"brick":"plaster"),v=s.palette||(p==="brick"?[14203040,13213834,14731444]:this.world.def.wallColors),g=s.color??v[Math.floor(o()*v.length)],m=s.floors,y={building:a};this.footprint(t,e,i,u,d),l.box("concrete",-u,-.6,-d,u,.12,d,{destructible:!1,navFloor:!0,color:10328722});for(let x=0;x<m;x++){let _=x*f+(x>0?.12:-.15),A=x>0?f-.12:f+.15,S=x===0?Math.floor(c/2):-1,w=x===0&&o()<.6?Math.floor(o()*c):-1,P=x===0&&!s.noSideDoor&&o()<.35?Math.floor(h/2):-1,b=s.winP??.55,M={n:this.randomMods(c,S,o,b),s:this.randomMods(c,w,o,b),e:this.randomMods(h,P,o,b),w:this.randomMods(h,-1,o,b)};if(s.slits)for(let T of["n","s","e","w"])M[T]=M[T].map(D=>(D==="window"||D==="solid")&&o()<.6?"slit":D);if(this.storey(l,p,u,d,_,A,g,M,y),x===0&&m===1&&c>=4&&!s.noInterior){let T=o()<.5?2:c-2,D=[];for(let L=0;L<h;L++)D.push("solid");D[Math.floor(o()*h)]="door",this.wall(l,"plaster","z",-u+T*2,-d+.15,D,_,A,15131094,Object.assign({thick:.2},y))}}if(m>1){let A=(f+.12-.12)/12,S=-u+.3,w=d-1.25,P=d-.16;for(let M=0;M<12;M++)l.box("wood",S+M*.28,.12,w,S+(M+1)*.28,.12+A*(M+1),P,{destructible:!1,color:9136970});let b=S+12*.28+.05;for(let M=1;M<m;M++){let T=M*f;l.box("concrete",-u,T-.05,-d,u,T+.12,w-.05,{destructible:!1,color:11117722}),l.box("concrete",b,T-.05,w-.05,u,T+.12,d,{destructible:!1,color:11117722})}}if(!s.noRoof){let x=m*f;if(l.box("concrete",-u-.2,x,-d-.2,u+.2,x+.25,d+.2,{destructible:!1,color:s.flat?12169893:9341572,noStand:!1}),!s.flat&&!this.world.def.flatRoofs){let _=this.world.def.roofColors[Math.floor(o()*this.world.def.roofColors.length)],S=c>=h?N.prism(c*2+.6,Math.min(h,4)*.55,h*2+.6,_):N.prism(h*2+.6,Math.min(c,4)*.55,c*2+.6,_,0,0,0,Math.PI/2);l.decor(S,0,x+.25,0)}else l.decor(N.box(u*2+.4,.35,.2,11051153,0,.17,0),0,x+.25,-d-.1),l.decor(N.box(u*2+.4,.35,.2,11051153,0,.17,0),0,x+.25,d+.1),l.decor(N.box(.2,.35,d*2+.4,11051153,0,.17,0),-u-.1,x+.25,0),l.decor(N.box(.2,.35,d*2+.4,11051153,0,.17,0),u+.1,x+.25,0)}if(s.ruin){for(let x of this.pieces.slice(-200))x.building===a&&x.destructible&&x.minY>n+.5&&this.rng()<.45&&(x.alive=!1,this.coll.removeBox(x),x.ruined=!0);this.prop("rubble",t+1.5,e-1.5,0)}if(!s.ruin&&c>=3&&this.rng()<.7){let[x,_]=l.tf(u-1.2,-d+1.2);this.prop("crate",x,_,0,{y:n+.12,size:.9})}return a}barn(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=s.w||6,c=s.d||5,h=l,u=c,d=s.H||5.5,f=s.color??10111546;this.footprint(t,e,i,h,u),o.box("concrete",-h,-.6,-u,h,.08,u,{destructible:!1,navFloor:!0,color:9273456});let p=Math.floor(l/2)-1,v=(g,m)=>{let y=[];for(let x=0;x<g;x++)x===m?(y.push("wide"),x++):y.push(this.rng()<.2?"window":"solid");return y};this.storey(o,"wood",h,u,-.15,d+.15,f,{n:v(l,p),s:v(l,p),e:v(c,-1),w:this.randomMods(c,Math.floor(c/2),this.rng,.2)},{building:a,thick:.25}),o.box("wood",-h-.3,d,-u-.3,h+.3,d+.2,u+.3,{destructible:!1,color:7032896}),o.decor(N.prism(l*2+.8,3.2,c*2+.8,6115656),0,d+.2,0);for(let g=0;g<4;g++){let[m,y]=o.tf(-h+1.5+this.rng()*(h*2-3),(this.rng()<.5?-1:1)*(u-1.4));this.prop("hay",m,y,this.rng()<.5?0:1,{y:n+.08})}return a}warehouse(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=s.w||10,c=s.d||6,h=l,u=c,d=s.H||7,f=s.cat||"metal",p=s.color??(f==="wood"?9400916:[11121592,12037010,10135450][Math.floor(this.rng()*3)]);this.footprint(t,e,i,h,u),o.box("concrete",-h,-.6,-u,h,.1,u,{destructible:!1,navFloor:!0,color:10131343});let v=(x,_,A)=>{let S=[];for(let w=0;w<x;w++)w===_||w===A?(S.push("wide"),w++):S.push("solid");return S},g=Math.floor(c/2),m=[];for(let x=0;x<c;x++)m.push(x===g?"door":this.rng()<.25?"window":"solid");let y=m.slice();y[g]=this.rng()<.5?"door":"solid",this.storey(o,f,h,u,-.15,d+.15,p,{n:v(l,1,l-3),s:v(l,Math.floor(l/2)-1,-9),e:m,w:y},{building:a,thick:.2}),o.box("metal",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:7831428}),o.decor(N.prism(l*2+.6,1.4,c*2+.6,7305084),0,d+.25,0);for(let x=0;x<6;x++){let[_,A]=o.tf(-h+2+this.rng()*(h*2-4),-u+2.5+this.rng()*(u*2-5));this.prop(this.rng()<.4?"crateStack":"crate",_,A,0,{y:n+.1})}return a}church(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=5,c=9,h=l,u=c,d=6.5,f=14275267;this.footprint(t,e,i,h,u+4),o.box("concrete",-h,-.6,-u,h,.12,u,{destructible:!1,navFloor:!0,color:10131086});let p=[];for(let y=0;y<c;y++)p.push(y%2?"window":"solid");p[2]="door";let v=["solid","solid","door","solid","solid"];this.storey(o,"brick",h,u,-.15,d+.15,f,{n:v,s:["solid","window","solid","window","solid"],e:p,w:p.slice().reverse()},{building:a,thick:.4}),o.box("concrete",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:8220260}),o.decor(N.prism(c*2+.6,4.2,l*2+.6,7232076,0,0,0,Math.PI/2),0,d+.25,0);let g=-u-2,m=this.frame(...o.tf(0,g),i,n);return m.box("concrete",-2,-.6,-2,2,.12,2,{destructible:!1,navFloor:!0,color:10131086}),this.storey(m,"brick",2,2,-.15,14.15,f,{n:["door","solid"],s:["solid","solid"],e:["solid","solid"],w:["solid","solid"]},{building:a,thick:.4}),m.box("concrete",-2.2,14,-2.2,2.2,14.3,2.2,{destructible:!1,color:8220260}),m.decor(N.pyramid(4.6,5,5983298),0,14.3,0),m.decor(N.box(.15,1.6,.15,4473924,0,.8,0),0,19.3,0),m.decor(N.box(.8,.15,.15,4473924,0,0,0),0,20.4,0),a}prop(t,e,i,n=0,s={}){let a=this.rng,o=s.y??this.terrain.heightAt(e,i),l=this.frame(e,i,n,o);switch(t){case"crate":{let c=s.size||1.2;l.box("wood",-c/2,0,-c/2,c/2,c,c/2,{color:s.color??[11570527,10255186,8227418][Math.floor(a()*3)],hp:60});break}case"crateStack":{l.box("wood",-1.2,0,-.6,0,1.2,.6,{color:11044438}),l.box("wood",0,0,-.6,1.2,1.2,.6,{color:10255186});let c=l.box("wood",-.6,1.2,-.6,.6,2.4,.6,{color:11570527});c.grounded=!1;break}case"container":{let c=[10173231,3104651,4160074,12159534,8224125,9129775],h=s.color??c[Math.floor(a()*c.length)],u=l.box("container",-1.22,0,-3.03,1.22,2.6,3.03,{color:h,destructible:!1});if(s.stack){let d=l.box("container",-1.22,2.6,-3.03,1.22,5.2,3.03,{color:c[Math.floor(a()*c.length)],destructible:!1});d.grounded=!1}this.footprint(e,i,n,1.22,3.03,"rgba(90,80,70,0.9)");break}case"sandbags":{let c=s.n||2;for(let h=0;h<c;h++)l.box("sand",-c/2+h,0,-.3,-c/2+h+1,.95,.3,{color:16777215,vault:!0});break}case"sandbagRing":{for(let c=-2;c<2;c++)l.box("sand",c,0,-1.6,c+1,1,-1,{vault:!0});for(let c=-1;c<1;c++)l.box("sand",-2.3,0,c,-1.7,1,c+1,{vault:!0}),l.box("sand",1.7,0,c,2.3,1,c+1,{vault:!0});break}case"hesco":{let c=s.n||3;for(let h=0;h<c;h++)l.box("sand",-c*.55+h*1.1,0,-.55,-c*.55+(h+1)*1.1,1.3,.55,{color:13153418,hpMul:2.2});break}case"jersey":{let c=s.n||1;for(let h=0;h<c;h++)l.box("concrete",-c+h*2,0,-.28,-c+(h+1)*2-.05,.85,.28,{color:12894390,vault:!0});break}case"fence":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("wood",-c+h*2,u,-.05,-c+(h+1)*2,u+1.05,.05,{color:9072208,hp:30,vault:!0})}break}case"stoneWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("stone",-c+h*2,u-.2,-.3,-c+(h+1)*2,u+1,.3,{color:12433066,vault:!0})}break}case"compoundWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("plaster",-c+h*2,u-.3,-.2,-c+h*2+1,u+2.3,.2,{color:s.color??14272420}),l.box("plaster",-c+h*2+1,u-.3,-.2,-c+(h+1)*2,u+2.3,.2,{color:s.color??14272420})}break}case"hay":l.box("hay",-.6,0,-.8,.6,1.1,.8,{color:16777215});break;case"haystack":{l.box("hay",-1.2,0,-.8,0,1.1,.8,{}),l.box("hay",0,0,-.8,1.2,1.1,.8,{});let c=l.box("hay",-.6,1.1,-.8,.6,2.2,.8,{});c.grounded=!1;break}case"car":{let c=[7158322,4872810,8024674,6187850,9080724,4013376],h=s.color??c[Math.floor(a()*c.length)];l.box("metal",-.9,.25,-2.1,.9,1.05,2.1,{color:h,destructible:!1}),l.box("metal",-.8,1.05,-1,.8,1.6,.9,{color:h,destructible:!1});for(let[u,d]of[[-.85,-1.3],[.85,-1.3],[-.85,1.3],[.85,1.3]])l.decor(N.cyl(.36,.36,.25,8,1907997,0,0,0,0,0,Math.PI/2),u,.36,d);l.decor(N.box(1.5,.45,.06,2766144,0,0,0,-.5),0,1.33,-1.05),this.footprint(e,i,n,.9,2.1,"rgba(60,60,60,0.9)");break}case"waterTower":{for(let[c,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])l.box("wood",c-.15,0,h-.15,c+.15,6,h+.15,{destructible:!1,color:7035464});l.box("wood",-1.8,6,-1.8,1.8,6.25,1.8,{destructible:!1,color:7035464}),l.decor(N.cyl(1.7,1.7,3.2,10,8350293),0,7.85,0),l.decor(N.cone(1.9,1,10,5918016),0,9.95,0);break}case"radioTower":{let c=s.h||42,h=[[-2.5,-2.5],[2.5,-2.5],[-2.5,2.5],[2.5,2.5]],u=[];for(let[d,f]of h)l.box("metal",d-.2,0,f-.2,d+.2,3,f+.2,{destructible:!1,color:11549230}),u.push(N.box(.18,c,.18,12105912,d*.5,c/2,f*.5,f*.05,0,-d*.05));for(let d=4;d<c;d+=4){let f=2.5*(1-d/c*.55),p=d/4%2?12599344:15263976;u.push(N.box(f*2,.12,.12,p,0,d,-f)),u.push(N.box(f*2,.12,.12,p,0,d,f)),u.push(N.box(.12,.12,f*2,p,-f,d,0)),u.push(N.box(.12,.12,f*2,p,f,d,0))}u.push(N.box(.6,.6,.6,16724e3,0,c+.3,0)),l.decor(N.merge(u),0,0,0);break}case"stall":{let c=[12077626,3832504,14198842,4889178][Math.floor(a()*4)];for(let[h,u]of[[-1.4,-1],[1.4,-1],[-1.4,1],[1.4,1]])l.box("wood",h-.06,0,u-.06,h+.06,2.4,u+.06,{color:6967872,hp:40});l.box("cloth",-1.6,2.4,-1.2,1.6,2.5,1.2,{color:c,noStand:!0,grounded:!1}),l.box("wood",-1.3,0,-.5,1.3,.9,.3,{color:9071178,vault:!0});break}case"logs":{for(let c=0;c<3;c++)l.box("wood",-2.5,c*.5,-1.2+c*.25,2.5,(c+1)*.5,1.2-c*.25,{color:8018490,vault:c===0});break}case"tank":{l.box("metal",-1.6,0,-1.6,1.6,3.4,1.6,{color:s.color??14210248,destructible:!1,noCollide:!1}),l.decor(N.cyl(1.75,1.75,.3,12,10132122),0,3.5,0);break}case"pipe":{let c=s.len||10;l.box("metal",-c/2,.3,-.35,c/2,1,.35,{color:9080724,destructible:!1,vault:!0});break}case"pier":{let c=s.len||30,h=s.w||6,u=(s.deckY??1.6)-o;l.box("concrete",-h/2,u-.8,0,h/2,u,c,{destructible:!1,navFloor:!0,color:11578530});for(let d=4;d<c;d+=8)for(let f of[-h/2+.4,h/2-.4])l.box("concrete",f-.3,u-8,d-.3,f+.3,u-.8,d+.3,{destructible:!1,color:9407362});for(let d=3;d<c;d+=6)l.decor(N.cyl(.18,.22,.5,6,3355443),h/2-.4,u+.25,d);this.footprint(e,i,n,h/2,c/2,"rgba(150,145,135,0.9)");break}case"bridge":{let c=s.len||40,h=s.w||8,u=(s.deckY??3)-o;l.box("concrete",-h/2,u-.7,-c/2,h/2,u,c/2,{destructible:!1,navFloor:!0,color:11117979});for(let d of[-h/2+.15,h/2-.15])l.box("concrete",d-.15,u,-c/2,d+.15,u+.9,c/2,{destructible:!1,color:12236202});for(let d=-c/2+8;d<c/2-4;d+=10)l.box("concrete",-h/2+.5,u-9,d-.6,h/2-.5,u-.7,d+.6,{destructible:!1,color:9209983});break}case"tent":{let c=s.color??7040590;l.box("cloth",-2,0,-2.5,-1.9,1.6,2.5,{color:c}),l.box("cloth",1.9,0,-2.5,2,1.6,2.5,{color:c}),l.box("cloth",-2,0,2.4,2,1.6,2.5,{color:c}),l.decor(N.prism(5.2,1.3,4.2,c),0,1.6,0);break}case"grave":l.box("stone",-.3,0,-.08,.3,.75,.08,{color:11117722,vault:!0});break;case"barrels":{for(let c=0;c<(s.n||3);c++)l.box("metal",-.9+c*.65,0,-.3,-.3+c*.65,.95,.3,{color:[3824266,9058858,4876858][c%3],hp:80});break}case"watchtower":{for(let[c,h]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])l.box("wood",c-.12,0,h-.12,c+.12,5,h+.12,{destructible:!1,color:7035464});l.box("wood",-1.6,4.8,-1.6,1.6,5,1.6,{destructible:!1,color:8021584});for(let c of[-1,1])l.box("wood",-1.6,5,c*1.55-.05,1.6,6,c*1.55+.05,{color:9074272,grounded:!1}),l.box("wood",c*1.55-.05,5,-1.6,c*1.55+.05,6,1.6,{color:9074272,grounded:!1});l.decor(N.pyramid(3.6,1.2,5917242),0,7.4,0);for(let[c,h]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])l.decor(N.box(.1,1.4,.1,7035464,0,.7,0),c,6,h);for(let c=0;c<9;c++)l.box("wood",-.4,.5*c,1.7,.4,.5*c+.08,1.95,{destructible:!1,color:7035464,noCollide:!1});break}case"rubble":{for(let c=0;c<4;c++)l.decor(N.dodeca(.4+a()*.5,10787984,0,0,0,1.4,.5,1.1),(a()-.5)*3,.1,(a()-.5)*3);break}case"pole":l.box("wood",-.12,0,-.12,.12,8,.12,{destructible:!1,color:5917242}),l.decor(N.box(1.8,.12,.12,5917242),0,7.4,0);break;case"crane":{for(let[c,h]of[[-4,-1.5],[4,-1.5],[-4,1.5],[4,1.5]])l.box("metal",c-.3,0,h-.3,c+.3,14,h+.3,{destructible:!1,color:14196778});l.decor(N.box(9,1.2,4,14196778,0,0,0),0,14.6,0),l.decor(N.box(26,.8,1.2,14196778,0,0,0),9,15.8,0),l.decor(N.box(.08,9,.08,2236962,0,0,0),18,11,0);break}default:throw new Error("unknown prop "+t)}}finalize(t){let e=new ri(1,1,1);e.deleteAttribute("uv");let i=new Tt,n=new dt,s=new Ae,a=new C,o=new C;this.byCat.sand||(this.byCat.sand=[]);for(let l of Object.keys(this.byCat)){let c=this.byCat[l],h=br[l],u=new ve({color:16777215,roughness:h.rough,metalness:h.metal||0});ph(u,h.tex,h.scale,1);let d=l==="sand"?160:0,f=new di(e,u,c.length+d);for(let p=c.length;p<c.length+d;p++)f.setMatrixAt(p,new Tt().makeScale(0,0,0)),f.setColorAt(p,n.set(16777215));d&&(this.spareNext=c.length,this.spareMax=c.length+d),f.castShadow=!0,f.receiveShadow=!0;for(let p=0;p<c.length;p++){let v=c[p];v.inst=p,v.mesh=f,v.alive?(o.set((v.minX+v.maxX)/2,(v.minY+v.maxY)/2,(v.minZ+v.maxZ)/2),a.set(v.maxX-v.minX,v.maxY-v.minY,v.maxZ-v.minZ),i.compose(o,s,a)):i.makeScale(0,0,0),f.setMatrixAt(p,i),n.set(v.color),f.setColorAt(p,n)}f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.computeBoundingSphere(),t.add(f),this.meshes[l]=f}if(this.decor.length){let l=N.merge(this.decor),c=new ve({vertexColors:!0,roughness:.9});ph(c,"roof",.6,.6);let h=new $t(l,c);h.castShadow=!0,h.receiveShadow=!0,t.add(h),this.decorMesh=h,this.decor=[]}}addSandbag(t,e,i,n){let s=this.meshes.sand;if(!s||this.spareNext+2>this.spareMax)return!1;let o=(Math.round(n/(Math.PI/2))%4+4)%4%2===0,l=new Tt,c=new Ae,h=new C,u=new C;for(let d=0;d<2;d++){let f=-1+d,p=o?this.piece("sand",t+f,e-.1,i-.3,t+f+1,e+.95,i+.3,{vault:!0}):this.piece("sand",t-.3,e-.1,i+f,t+.3,e+.95,i+f+1,{vault:!0});p.inst=this.spareNext++,p.mesh=s,u.set((p.minX+p.maxX)/2,(p.minY+p.maxY)/2,(p.minZ+p.maxZ)/2),h.set(p.maxX-p.minX,p.maxY-p.minY,p.maxZ-p.minZ),l.compose(u,c,h),s.setMatrixAt(p.inst,l),this.world.nav&&this.world.nav.markDirty(p)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),!0}hidePiece(t){if(t.inst<0||!t.mesh)return;let e=new Tt().makeScale(0,0,0);t.mesh.setMatrixAt(t.inst,e),t.mesh.instanceMatrix.needsUpdate=!0}damagePiece(t,e,i,n){return!t.alive||!t.destructible||(t.hp-=e,t.hp>0)?!1:(this.destroyPiece(t,i,n),!0)}destroyPiece(t,e,i,n=0){if(t.alive&&(this.coll.removeBox(t),this.hidePiece(t),e&&e.pieceDestroyed(t,i),this.world.nav&&this.world.nav.markDirty(t),n<12))for(let s of t.above)!s.alive||s.grounded||s.below.every(a=>!a.alive)&&setTimeout(()=>this.destroyPiece(s,e,"collapse",n+1),60+Math.random()*120)}explode(t,e,i,n,s,a){let o=[];this.coll.query(t-n,i-n,t+n,i+n,c=>{c.destructible&&c.alive&&o.push(c)});let l=0;for(let c of o){let h=Math.max(c.minX,Math.min(t,c.maxX)),u=Math.max(c.minY,Math.min(e,c.maxY)),d=Math.max(c.minZ,Math.min(i,c.maxZ)),f=Math.hypot(h-t,u-e,d-i);if(f>n)continue;let p=s*(1-f/n)*(1-f/n*.5);this.damagePiece(c,p,a,"explosion")&&l++}return l}};function jx(r,t){switch(r){case"pine":return N.merge([N.cyl(.16,.28,3.2,6,5915186,0,1.6,0),N.cone(2.4,3.4,7,3103278,0,3.6,0,.12),N.cone(1.85,2.9,7,3499317,0,5.4,0,.12),N.cone(1.2,2.4,7,3960889,0,7,0,.12)]);case"oak":return N.merge([N.cyl(.24,.36,3.6,6,6178356,0,1.8,0),N.ico(2.3,0,5208626,0,4.9,0,1,.85,1,.15,.15),N.ico(1.7,0,5932600,1.3,4.2,.6,1,.9,1,.15,.2),N.ico(1.6,0,4616236,-1.2,4.4,-.7,1,.9,1,.15,.2),N.ico(1.4,0,6130746,.2,6,-.4,1,.9,1,.15,.2)]);case"birch":return N.merge([N.cyl(.12,.18,5.5,5,15131350,0,2.75,0),N.ico(1.4,0,8298570,0,5.6,0,1,1.3,1,.15,.15),N.ico(1,0,9219669,.6,4.6,.3,1,1.2,1,.15,.2)]);case"palm":{let e=[],i=0,n=0;for(let s=0;s<6;s++)e.push(N.cyl(.17,.22,1.25,6,s%2?9073748:8021064,i,n+.62,0,0,0,-.06*s)),i+=.08*s,n+=1.2;for(let s=0;s<7;s++){let a=s/7*Math.PI*2,o=N.box(.5,.06,3.2,6261306,0,0,1.5,-.35,0,0);o.rotateY(a),o.translate(i,n,0),e.push(o)}return e.push(N.ico(.4,0,6967344,i,n,0)),N.merge(e)}case"acacia":return N.merge([N.cyl(.14,.24,3.4,5,6968384,0,1.7,0,0,0,.12),N.cyl(.1,.14,1.6,5,6968384,.5,3.4,0,0,0,-.5),N.ico(2.6,0,8030786,.3,4.3,0,1.2,.32,1.1,.12,.2),N.ico(1.8,0,7307323,-1.2,4,.5,1.1,.3,1,.12,.2)]);case"shrub":return N.merge([N.ico(1,0,8224072,0,.6,0,1.3,.75,1.2,.18,.25),N.ico(.7,0,9079376,.6,.5,.3,1,.8,1,.18,.25)])}}var Kx={pine:.3,oak:.38,birch:.2,palm:.25,acacia:.25,shrub:0},Jx={pine:[4.8,2.2],oak:[4.9,2.6],birch:[5.2,1.4],palm:[7.2,2.2],acacia:[4.2,2.4],shrub:[.7,1.1]},ma=class{constructor(t){this.world=t,this.meshes=[]}build(t,e){let{terrain:i,collision:n,def:s}=this.world,a=Xe(s.seed+999),o=Ai(s.seed+5),l=s.playHalf+30,c=(M,T,D=2)=>{for(let z of e.fps)if(M>z.minX-D&&M<z.maxX+D&&T>z.minZ-D&&T<z.maxZ+D)return!0;if(e.roadDist(M,T)<1.5||e.riverDist(M,T)<2)return!0;for(let z of e.noTree)if((M-z.x)**2+(T-z.z)**2<z.r*z.r)return!0;let L=i.heightAt(M,T);return i.waterLevel!==null&&L<i.waterLevel+.6||i.normalAt(M,T)[1]<.8},h=s.trees.types,u=s.trees.weights,d=()=>{let M=a(),T=0;for(let D=0;D<h.length;D++)if(T+=u[D],M<T)return h[D];return h[0]},f={};for(let M of h)f[M]=[];let p=(M,T,D)=>{let L=.75+a()*.6,z=i.heightAt(T,D)-.15;f[M].push([T,z,D,a()*Math.PI*2,L]);let F=Kx[M]*L;F>0&&n.addBox({minX:T-F,maxX:T+F,minZ:D-F,maxZ:D+F,minY:z-.5,maxY:z+5*L,mat:"wood",cat:"tree",destructible:!1,pen:3,noStand:!0});let[O,Z]=Jx[M];n.addSoft({x:T,y:z+O*L,z:D,r:Z*L,strength:M==="shrub"?.6:.5})};for(let[M,T,D]of e.forests||[]){let L=Math.floor(D*D*Math.PI/70);for(let z=0;z<L;z++){let F=a()*Math.PI*2,O=Math.sqrt(a())*D*(.8+.3*o(Math.cos(F)*2,Math.sin(F)*2)),Z=M+Math.cos(F)*O,V=T+Math.sin(F)*O;c(Z,V,2.5)||p(d(),Z,V)}}let v=(l*2)**2,g=Math.floor(v*s.trees.scatter);for(let M=0;M<g;M++){let T=(a()-.5)*l*2,D=(a()-.5)*l*2;o(T/120,D/120)<-.1||c(T,D,3)||p(d(),T,D)}let m=new Tt,y=new Ae,x=new C,_=new C,A=new C(0,1,0);for(let M of h){let T=f[M];if(!T.length)continue;let D=jx(M,s.biome),L=new ve({vertexColors:!0,roughness:.9,flatShading:!0});mh(L,M==="palm"?.025:.018,1.5,1.2);let z=new di(D,L,T.length);T.forEach(([F,O,Z,V,Q],K)=>{y.setFromAxisAngle(A,V),x.set(F,O,Z),_.set(Q,Q*(.9+K%5*.05),Q),m.compose(x,y,_),z.setMatrixAt(K,m)}),z.castShadow=!0,z.receiveShadow=!0,z.computeBoundingSphere(),t.add(z),this.meshes.push(z),this.windMats=(this.windMats||[]).concat(L)}this.treeCount=h.reduce((M,T)=>M+f[T].length,0);let S=Math.floor(v*s.trees.bush),w=[];for(let M=0;M<S;M++){let T=(a()-.5)*l*2,D=(a()-.5)*l*2;c(T,D,1.5)||w.push([T,i.heightAt(T,D)-.1,D,a()*6.28,.7+a()*.8])}for(let[M,T,D]of e.forests||[])for(let L=0;L<D*.8;L++){let z=a()*Math.PI*2,F=M+Math.cos(z)*D*(1+a()*.2),O=T+Math.sin(z)*D*(1+a()*.2);c(F,O,1.5)||w.push([F,i.heightAt(F,O)-.1,O,a()*6.28,.8+a()*.7])}if(w.length){let M=s.biome==="arid"?[8223304,9078352]:[4616238,5603386],T=N.merge([N.ico(1,0,M[0],0,.55,0,1.3,.8,1.2,.2,.3),N.ico(.75,0,M[1],.55,.75,.25,1,.9,1,.2,.3),N.ico(.7,0,M[0],-.5,.5,-.3,1,.8,1,.2,.3)]),D=new ve({vertexColors:!0,roughness:.95,flatShading:!0});mh(D,.05,.2,1.8);let L=new di(T,D,w.length);w.forEach(([z,F,O,Z,V],Q)=>{y.setFromAxisAngle(A,Z),x.set(z,F,O),_.set(V,V,V),m.compose(x,y,_),L.setMatrixAt(Q,m),n.addSoft({x:z,y:F+.7*V,z:O,r:1.15*V,strength:.65})}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),t.add(L),this.meshes.push(L)}let P=Math.floor(v*s.trees.rock),b=[];for(let M=0;M<P;M++){let T=(a()-.5)*l*2,D=(a()-.5)*l*2,L=!1;for(let Z of e.fps)if(T>Z.minX-2&&T<Z.maxX+2&&D>Z.minZ-2&&D<Z.maxZ+2){L=!0;break}if(L||e.roadDist(T,D)<1.5)continue;let z=i.heightAt(T,D);if(i.waterLevel!==null&&z<i.waterLevel-1)continue;let F=1-i.normalAt(T,D)[1];if(a()>.35+F*3)continue;let O=.5+Math.pow(a(),2.5)*3.2;b.push([T,z-O*.3,D,a()*6.28,O])}if(b.length){let M=s.biome==="arid"?11048314:9276036,T=N.merge([N.dodeca(1,M,0,0,0,1.2,.75,1,.15),N.dodeca(.6,M,.7,-.1,.3,1,.8,1,.15)]),D=new ve({vertexColors:!0,roughness:.95,flatShading:!0});Wn(D,"rock",()=>{});let L=new di(T,D,b.length);b.forEach(([z,F,O,Z,V],Q)=>{if(y.setFromAxisAngle(A,Z),x.set(z,F,O),_.set(V,V,V),m.compose(x,y,_),L.setMatrixAt(Q,m),V>.9){let K=V*.9;n.addBox({minX:z-K,maxX:z+K,minZ:O-K,maxZ:O+K,minY:F-V,maxY:F+V*.62+V*.3,mat:"stone",cat:"rock",destructible:!1,pen:9,vault:V*.92<1.25})}}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),t.add(L),this.meshes.push(L)}this.rockCount=b.length}setWind(t){Ni.uWind.value=t?1:0}},ga=class{constructor(t,e){this.world=t,this.scene=e,this.mesh=null,this.level="off"}setLevel(t){if(t===this.level||(this.level=t,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null),t==="off"))return;let e={low:[120,.7],medium:[190,.52],high:[260,.42]}[t],[i,n]=e,s=this.world.terrain,a=this.world.def,o=[],l=[],c=[],h=new dt(a.grassColor[0]),u=new dt(a.grassColor[1]),d=new dt(a.grassColor[2]);for(let m=0;m<4;m++){let y=m/4*Math.PI*2+.4,x=Math.cos(y*1.7)*.12,_=Math.sin(y*1.3)*.12,A=Math.cos(y),S=Math.sin(y),w=.04,P=.24+m%2*.1,b=.09,M=-S*w,T=A*w,D=[[x-M,0,_-T],[x+M,0,_+T],[x+A*b*.4+M*.6,P*.55,_+S*b*.4+T*.6],[x-M,0,_-T],[x+A*b*.4+M*.6,P*.55,_+S*b*.4+T*.6],[x+A*b*.4-M*.6,P*.55,_+S*b*.4-T*.6],[x+A*b*.4-M*.6,P*.55,_+S*b*.4-T*.6],[x+A*b*.4+M*.6,P*.55,_+S*b*.4+T*.6],[x+A*b,P,_+S*b]],L=[h,h,u,h,u,u,u,u,d];for(let z=0;z<9;z++)o.push(...D[z]),l.push(L[z].r,L[z].g,L[z].b),c.push(0,1,0)}let f=new ye;f.setAttribute("position",new ce(o,3)),f.setAttribute("color",new ce(l,3)),f.setAttribute("normal",new ce(c,3));let p=new ve({vertexColors:!0,roughness:1,side:Fe}),v={uCenter:{value:new C},uCam:{value:new C},uSpacing:{value:n},uN:{value:i},uHeight:{value:s.heightTex},uMask:{value:s.grassTex},uSize:{value:s.size},uHalf:{value:s.half},uTexN:{value:s.n},uRadius:{value:i*n*.5}};this.uniforms=v,Wn(p,"grass",m=>{Object.assign(m.uniforms,v),m.uniforms.uTime=Ni.uTime,m.uniforms.uWind=Ni.uWind,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
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
          transformed += vec3(wp.x, gh - 0.03, wp.y);`)});let g=new di(f,p,i*i);g.frustumCulled=!1,g.castShadow=!1,g.receiveShadow=!0,this.mesh=g,this.scene.add(g)}update(t){if(!this.mesh)return;let e=this.uniforms.uSpacing.value;this.uniforms.uCenter.value.set(Math.round(t.x/e)*e,0,Math.round(t.z/e)*e),this.uniforms.uCam.value.copy(t)}};var ks=1,qn=2,Xn=4,Gd=8,Wd=16,qd=Math.SQRT2,Yn=class{constructor(t){this.world=t,this.terrain=t.terrain,this.coll=t.collision,this.size=Math.floor(this.terrain.size),this.half=this.terrain.half,this.dim=this.size;let e=this.dim*this.dim;this.flags=new Uint8Array(e),this.floor=new Float32Array(e),this.cover=new Uint8Array(e),this.g=new Float32Array(e),this.parent=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.curStamp=1,this.heap=new ta(4096),this.dirty=[],this.build()}cellOf(t,e){let i=Math.floor(t+this.half),n=Math.floor(e+this.half);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}cx(t){return t%this.dim-this.half+.5}cz(t){return Math.floor(t/this.dim)-this.half+.5}build(){let{dim:t}=this;for(let e=0;e<t;e++)for(let i=0;i<t;i++)this.evalCell(e*t+i);this.computeCover(0,0,t-1,t-1)}evalCell(t){let e=this.cx(t),i=this.cz(t),n=this.terrain,s=n.heightAt(e,i),a=s,o=0,l=.2;this.coll.query(e-.05,i-.05,e+.05,i+.05,c=>{c.navFloor&&c.maxY>a&&c.maxY<s+12&&e>c.minX&&e<c.maxX&&i>c.minZ&&i<c.maxZ&&(a=c.maxY)}),this.coll.query(e-l,i-l,e+l,i+l,c=>{c.noCollide||c.navFloor||e+l<=c.minX||e-l>=c.maxX||i+l<=c.minZ||i-l>=c.maxZ||c.maxY<=a+.45||c.minY>=a+1.75||(c.vault&&c.maxY<=a+1.25?o|=qn:o|=ks)}),a===s&&(n.normalAt(e,i)[1]<.72&&(o|=Gd),n.waterLevel!==null&&s<n.waterLevel-.4&&(o|=Xn,s<n.waterLevel-1.3&&(o|=Wd))),this.flags[t]=o,this.floor[t]=a}computeCover(t,e,i,n){let{dim:s}=this,a=2;for(let o=Math.max(0,e);o<=Math.min(s-1,n);o++)for(let l=Math.max(0,t);l<=Math.min(s-1,i);l++){let c=o*s+l;if(this.flags[c]&ks){this.cover[c]=0;continue}let h=0;for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){let f=l+d,p=o+u;f<0||p<0||f>=s||p>=s||this.flags[p*s+f]&(ks|qn)&&h++}this.cover[c]=Math.min(255,h*20)}}markDirty(t){this.dirty.push(t)}processDirty(){if(!this.dirty.length)return;let t=this.dirty;this.dirty=[];for(let e of t){let i=Math.floor(e.minX+this.half)-1,n=Math.floor(e.maxX+this.half)+1,s=Math.floor(e.minZ+this.half)-1,a=Math.floor(e.maxZ+this.half)+1;for(let o=Math.max(0,s);o<=Math.min(this.dim-1,a);o++)for(let l=Math.max(0,i);l<=Math.min(this.dim-1,n);l++)this.evalCell(o*this.dim+l);this.computeCover(i-2,s-2,n+2,a+2)}}walkable(t){return t>=0&&!(this.flags[t]&(ks|Gd))}isBlocked(t){return t<0||(this.flags[t]&ks)!==0}isVault(t){return t>=0&&(this.flags[t]&qn)!==0}isWater(t){return t>=0&&(this.flags[t]&Xn)!==0}cost(t,e){let i=this.flags[t],n=1;if(i&qn&&(n+=4),i&Xn&&(n+=i&Wd?14:4),e&&e.coverBias&&(n+=(1-this.cover[t]/255)*e.coverBias),e&&e.avoid){let s=this.cx(t),a=this.cz(t);for(let o of e.avoid){let l=s-o.x,c=a-o.z,h=l*l+c*c;h<o.r*o.r&&(n+=o.w*(1-h/(o.r*o.r)))}}return n}nearestWalkable(t,e,i=6){let n=this.cellOf(t,e);if(this.walkable(n))return n;let s=Math.floor(t+this.half),a=Math.floor(e+this.half);for(let o=1;o<=i;o++)for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){if(Math.abs(c)!==o&&Math.abs(l)!==o)continue;let h=s+c,u=a+l;if(h<0||u<0||h>=this.dim||u>=this.dim)continue;let d=u*this.dim+h;if(this.walkable(d))return d}return-1}findPath(t,e,i,n,s={}){let a=this.nearestWalkable(t,e,4),o=this.nearestWalkable(i,n,8);if(a<0||o<0)return null;if(a===o)return[[i,n]];let{dim:l}=this,c=s.maxNodes||4e4,h=s.weight||1.35,u=++this.curStamp,d=this.heap;d.clear();let f=o%l,p=Math.floor(o/l),v=T=>{let D=Math.abs(T%l-f),L=Math.abs(Math.floor(T/l)-p);return(D+L+(qd-2)*Math.min(D,L))*h};this.g[a]=0,this.stamp[a]=u,this.parent[a]=-1,d.push(a,v(a));let g=a,m=v(a),y=0,x=!1;for(;d.size;){let T=d.pop();if(this.closed[T]===u)continue;if(this.closed[T]=u,T===o){x=!0;break}if(++y>c)break;let D=T%l,L=(T-D)/l,z=this.g[T];for(let F=0;F<8;F++){let O=F<4?[1,-1,0,0][F]:[1,1,-1,-1][F-4],Z=F<4?[0,0,1,-1][F]:[1,-1,1,-1][F-4],V=D+O,Q=L+Z;if(V<0||Q<0||V>=l||Q>=l)continue;let K=Q*l+V;if(!this.walkable(K)||this.closed[K]===u||Math.abs(this.floor[K]-this.floor[T])>.9&&!(this.flags[K]&qn)||F>=4&&(!this.walkable(L*l+V)||!this.walkable(Q*l+D)))continue;let ht=z+(F<4?1:qd)*this.cost(K,s);if(this.stamp[K]!==u||ht<this.g[K]){this.stamp[K]=u,this.g[K]=ht,this.parent[K]=T;let wt=v(K);d.push(K,ht+wt),wt<m&&(m=wt,g=K)}}}let _=x?o:g;if(_===a)return null;let A=[],S=_,w=0;for(;S!==-1&&w++<1e5&&(A.push(S),S!==a);)S=this.parent[S];A.reverse();let P=[],b=0;P.push([this.cx(A[0]),this.cz(A[0])]);let M=1;for(;M<A.length;){let T=M;for(let D=M;D<Math.min(A.length,b+60)&&this.lineWalkable(A[b],A[D]);D++)T=D;P.push([this.cx(A[T]),this.cz(A[T])]),b=T,M=T+1}return x&&(P[P.length-1]=[i,n]),P.partial=!x,P}lineWalkable(t,e){let{dim:i}=this,n=t%i,s=Math.floor(t/i),a=e%i,o=Math.floor(e/i),l=Math.abs(a-n),c=Math.abs(o-s),h=n<a?1:-1,u=s<o?1:-1,d=l-c,f=this.floor[t];for(let p=0;p<400;p++){let v=s*i+n;if(!this.walkable(v)||this.flags[v]&(qn|Xn)||Math.abs(this.floor[v]-f)>1.2)return!1;if(n===a&&s===o)return!0;let g=2*d;if(g>-c&&g<l&&(!this.walkable(s*i+n+h)||!this.walkable((s+u)*i+n)))return!1;g>-c&&(d-=c,n+=h),g<l&&(d+=l,s+=u)}return!1}findCover(t,e,i,n,s={}){let a=[],o=Math.ceil(n),l=Math.floor(t+this.half),c=Math.floor(e+this.half),{dim:h}=this,u=[];for(let p=-o;p<=o;p+=1)for(let v=-o;v<=o;v+=1){let g=v*v+p*p;if(g>o*o)continue;let m=l+v,y=c+p;if(m<1||y<1||m>=h-1||y>=h-1)continue;let x=y*h+m;!this.walkable(x)||this.cover[x]<30||this.flags[x]&Xn||u.push([x,g])}u.sort((p,v)=>v[0]%7-p[0]%7+(p[1]-v[1])*.02);let d=s.maxTests||28,f=0;for(let[p,v]of u){if(f++>d)break;let g=this.cx(p),m=this.cz(p),y=this.floor[p];if(!!this.coll.los(g,y+.95,m,i.x,i.y,i.z))continue;let _=this.coll.los(g,y+1.6,m,i.x,i.y,i.z),A=i.x-g,S=i.z-m,w=Math.hypot(A,S);if(s.minThreatDist&&w<s.minThreatDist)continue;let P=(_?3:1)-Math.sqrt(v)*.12+this.cover[p]/255;s.prefer&&(P-=Math.hypot(g-s.prefer.x,m-s.prefer.z)*.04),s.occupied&&s.occupied(g,m)&&(P-=4),a.push({x:g,z:m,y,peek:_,score:P})}return a.sort((p,v)=>v.score-p.score),a}randomWalkableNear(t,e,i,n=Math.random){for(let a=0;a<20;a++){let o=n()*Math.PI*2,l=Math.sqrt(n())*i,c=this.cellOf(t+Math.cos(o)*l,e+Math.sin(o)*l);if(this.walkable(c)&&!(this.flags[c]&Xn))return[this.cx(c),this.cz(c),this.floor[c]]}let s=this.nearestWalkable(t,e,10);return s>=0?[this.cx(s),this.cz(s),this.floor[s]]:[t,e,this.terrain.heightAt(t,e)]}};Yn.BLOCKED=ks;Yn.VAULT=qn;Yn.WATER=Xn;var Fs=()=>new Promise(r=>setTimeout(r,0)),va=class{constructor(t,e){this.def=t,this.scene=e}async build(t){let e=this.def,i=this.scene;e._n=Ai(e.seed),t("Planning layout",.05),await Fs();let n=new ea(e);n.noise=e._n,e.layout(n),this.layout=n,t("Shaping terrain",.15),await Fs(),this.terrain=new da(e,n),this.terrain.buildMesh(i),this.collision=new fa(this.terrain),t("Constructing buildings",.35),await Fs(),this.structures=new pa(this);for(let s of n.buildings)this.structures.building(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.props)this.structures.prop(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.bridges){let a=this.terrain.heightAt(s.x,s.z-s.len/2-1),o=this.terrain.heightAt(s.x,s.z+s.len/2+1),l=Math.max(a,o,(this.terrain.waterLevel??0)+2)+.15;this.structures.prop("bridge",s.x,s.z,0,{len:s.len+4,w:s.w,deckY:l,y:l-3}),this.structures.footprints.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.len/2,maxZ:s.z+s.len/2,color:"rgba(160,155,145,0.95)"}),s.deckY=l}for(let s of n.piers||[]){let a=vr(s.z,e._n);this.structures.prop("pier",Math.floor(a-14)+.5,Math.floor(s.z)+.5,3,{len:50,w:6,deckY:2.25,y:0})}return this.flagPoles(i),this.structures.finalize(i),t("Growing vegetation",.6),await Fs(),this.vegetation=new ma(this),this.vegetation.build(i,n),t("Building navigation mesh",.75),await Fs(),this.nav=new Yn(this),t("Drawing maps",.92),await Fs(),this.mapImage=this.terrain.renderMapImage(768,this.structures.footprints),this}flagPoles(t){let e=[];for(let n of this.def.flags){let s=this.terrain.heightAt(n.x,n.z);e.push(N.cyl(.07,.09,9,6,14211288,n.x,s+4.5,n.z)),e.push(N.cyl(.4,.5,.4,8,6974058,n.x,s+.2,n.z))}let i=new $t(N.merge(e),yn("poles",{roughness:.6}));i.castShadow=!0,t.add(i),this.flagCloth=this.def.flags.map(n=>{let s=this.terrain.heightAt(n.x,n.z),a=new $t(new Je(1.8,1.1,6,3),new ve({color:13421772,side:Fe,roughness:.9}));return a.geometry.translate(.9,0,0),a.position.set(n.x+.08,s+8.3,n.z),a.castShadow=!0,t.add(a),a})}updateFlags(t,e){if(this.flagCloth&&(t.flags.forEach(i=>{let n=this.def.flags.findIndex(h=>h.id===i.id),s=this.flagCloth[n];if(!s)return;let a=i.owner===0?4034016:i.owner===1?14700605:13684944;s.material.color.setHex(a);let o=this.terrain.heightAt(i.x,i.z);s.position.y=o+1.8+Math.abs(i.progress)*6.5;let l=s.geometry.attributes.position;s.userData.base||(s.userData.base=l.array.slice());let c=s.userData.base;for(let h=0;h<l.count;h++){let u=c[h*3];l.array[h*3+2]=Math.sin(u*2.4-e*5+i.x)*.12*u}l.needsUpdate=!0,s.rotation.y=.6}),!t.flags.length))for(let i of this.flagCloth)i.visible=!1}};var Os=class r extends $t{constructor(){let t=r.SkyShader,e=new Jt({name:t.name,uniforms:Ne.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ve,depthWrite:!1});super(new ri(1,1,1),e),this.isSky=!0}};Os.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},up:{value:new C(0,1,0)}},vertexShader:`
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

		}`};var vh=new Tt,wr=class r{constructor(t){t=t||{},this.zNear=t.webGL===!0?-1:0,this.vertices={near:[new C,new C,new C,new C],far:[new C,new C,new C,new C]},t.projectionMatrix!==void 0&&this.setFromProjectionMatrix(t.projectionMatrix,t.maxFar||1e4)}setFromProjectionMatrix(t,e){let i=this.zNear,n=t.elements[2*4+3]===0;return vh.copy(t).invert(),this.vertices.near[0].set(1,1,i),this.vertices.near[1].set(1,-1,i),this.vertices.near[2].set(-1,-1,i),this.vertices.near[3].set(-1,1,i),this.vertices.near.forEach(function(s){s.applyMatrix4(vh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(s){s.applyMatrix4(vh);let a=Math.abs(s.z);n?s.z*=Math.min(e/a,1):s.multiplyScalar(Math.min(e/a,1))}),this.vertices}split(t,e){for(;t.length>e.length;)e.push(new r);e.length=t.length;for(let i=0;i<t.length;i++){let n=e[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i-1]);if(i===t.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i])}}toSpace(t,e){for(let i=0;i<4;i++)e.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(t),e.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(t)}};var xh={lights_fragment_begin:`
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
	`+Vt.lights_pars_begin};var Xd=new Tt,yh=new wr({webGL:!0}),Ji=new C,Sr=new Si,_h=[],Mh=[],bh=new Tt,Yd=new Tt,Qx=new C(0,1,0),xa=class{constructor(t){this.camera=t.camera,this.parent=t.parent,this.cascades=t.cascades||3,this.maxFar=t.maxFar||1e5,this.mode=t.mode||"practical",this.shadowMapSize=t.shadowMapSize||2048,this.shadowBias=t.shadowBias||1e-6,this.lightDirection=t.lightDirection||new C(1,-1,1).normalize(),this.lightIntensity=t.lightIntensity||3,this.lightNear=t.lightNear||1,this.lightFar=t.lightFar||2e3,this.lightMargin=t.lightMargin||200,this.customSplitsCallback=t.customSplitsCallback,this.fade=!1,this.mainFrustum=new wr({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let t=0;t<this.cascades;t++){let e=new gn(16777215,this.lightIntensity);e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,e.shadow.camera.near=this.lightNear,e.shadow.camera.far=this.lightFar,e.shadow.bias=this.shadowBias,this.parent.add(e),this.parent.add(e.target),this.lights.push(e)}}initCascades(){let t=this.camera;t.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){let t=this.frustums;for(let e=0;e<t.length;e++){let n=this.lights[e].shadow.camera,s=this.frustums[e],a=s.vertices.near,o=s.vertices.far,l=o[0],c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){let u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),p=.25*Math.pow(f,2)*(d-u.near);h+=p}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){let t=this.camera,e=Math.min(t.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,t.near,e,this.breaks);break;case"logarithmic":n(this.cascades,t.near,e,this.breaks);break;case"practical":s(this.cascades,t.near,e,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,t.near,e,this.breaks);break}function i(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function n(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function s(a,o,l,c,h){_h.length=0,Mh.length=0,n(a,o,l,Mh),i(a,o,l,_h);for(let u=1;u<a;u++)h.push(cd.lerp(_h[u-1],Mh[u-1],c));h.push(1)}}update(){let t=this.camera,e=this.frustums;bh.lookAt(new C,this.lightDirection,Qx),Yd.copy(bh).invert();for(let i=0;i<e.length;i++){let n=this.lights[i],s=n.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,o=(s.top-s.bottom)/this.shadowMapSize;Xd.multiplyMatrices(Yd,t.matrixWorld),e[i].toSpace(Xd,yh);let l=yh.vertices.near,c=yh.vertices.far;Sr.makeEmpty();for(let h=0;h<4;h++)Sr.expandByPoint(l[h]),Sr.expandByPoint(c[h]);Sr.getCenter(Ji),Ji.z=Sr.max.z+this.lightMargin,Ji.x=Math.floor(Ji.x/a)*a,Ji.y=Math.floor(Ji.y/o)*o,Ji.applyMatrix4(bh),n.position.copy(Ji),n.target.position.copy(Ji),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){Vt.lights_fragment_begin=xh.lights_fragment_begin,Vt.lights_pars_begin=xh.lights_pars_begin}setupMaterial(t){t.defines=t.defines||{},t.defines.USE_CSM=1,t.defines.CSM_CASCADES=this.cascades,this.fade&&(t.defines.CSM_FADE="");let e=[],i=this,n=this.shaders;t.onBeforeCompile=function(s){let a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(e),s.uniforms.CSM_cascades={value:e},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},n.set(t,s)},n.set(t,null)}updateUniforms(){let t=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){let s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=t}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(t){for(;t.length<this.breaks.length;)t.push(new nt);t.length=this.breaks.length;for(let e=0;e<this.cascades;e++){let i=this.breaks[e],n=this.breaks[e-1]||0;t[e].x=n,t[e].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let t=0;t<this.lights.length;t++)this.parent.remove(this.lights[t].target),this.parent.remove(this.lights[t])}dispose(){let t=this.shaders;t.forEach(function(e,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),i.needsUpdate=!0}),t.clear()}};var $d={morning:{elev:32,az:125,sun:[1,.93,.82],sunI:3.6,sky:[.55,.68,.92],ground:[.38,.34,.26],hemiI:.55,fog:[.62,.72,.84],fogD:.0012,turb:2.6,ray:1.2,exp:1,skyMul:.62,env:.35},noon:{elev:64,az:160,sun:[1,.98,.94],sunI:3.8,sky:[.55,.68,.94],ground:[.42,.38,.3],hemiI:.55,fog:[.66,.74,.86],fogD:.001,turb:2.4,ray:1,exp:.92,skyMul:.6,env:.35},afternoon:{elev:26,az:245,sun:[1,.86,.68],sunI:3.7,sky:[.66,.68,.78],ground:[.5,.42,.3],hemiI:.55,fog:[.8,.72,.6],fogD:.0015,turb:5,ray:1.4,exp:.98,skyMul:.62,env:.38},dusk:{elev:6,az:275,sun:[1,.6,.36],sunI:2.8,sky:[.45,.42,.58],ground:[.32,.24,.2],hemiI:.45,fog:[.58,.46,.42],fogD:.0019,turb:8,ray:2.4,exp:1.15,skyMul:.7,env:.32},night:{elev:38,az:200,sun:[.55,.65,1],sunI:.42,sky:[.12,.16,.28],ground:[.05,.05,.07],hemiI:.35,fog:[.03,.04,.07],fogD:.0032,turb:2,ray:.3,exp:1.25,skyMul:0,env:.12,night:!0}},ya=class{constructor(t,e,i,n){this.renderer=t,this.scene=e,this.camera=i,this.settings=n,this.sunDir=new C(0,1,0),this.shadowMode=null,this.csm=null,this.hemi=new Cs(16777215,4473924,.7),e.add(this.hemi),this.sun=new gn(16777215,3),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun),e.add(this.sun.target),this.sky=new Os,this.sky.material.depthWrite=!1,this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.skyUniforms={uFogColor:{value:new dt},uHorizon:{value:1},uSkyMul:{value:1}},Object.assign(this.sky.material.uniforms,this.skyUniforms),this.sky.material.fragmentShader=this.sky.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform vec3 uFogColor; uniform float uHorizon; uniform float uSkyMul;`).replace("gl_FragColor = vec4( retColor, 1.0 );",`
        retColor *= uSkyMul;
        retColor = mix(retColor, uFogColor, smoothstep(0.16, -0.04, direction.y) * uHorizon);
        gl_FragColor = vec4( retColor, 1.0 );`),e.add(this.sky);let s=new ye,a=[];for(let o=0;o<1800;o++){let l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=Math.abs(l);a.push(Math.cos(c)*h,u,Math.sin(c)*h)}s.setAttribute("position",new ce(a,3)),this.stars=new Ro(s,new ar({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})),this.stars.visible=!1,this.stars.frustumCulled=!1,this.stars.renderOrder=-9,e.add(this.stars),this.fog=new Co(11189196,.0015),e.fog=this.fog,this.pmrem=new bs(t),this.envMap=null}setTime(t){let e=$d[t]||$d.morning;this.time=e,this.timeName=t;let i=(90-e.elev)*le,n=e.az*le;this.sunDir.setFromSphericalCoords(1,i,n);let s=this.sky.material.uniforms;if(s.turbidity.value=e.turb,s.rayleigh.value=e.ray,s.mieCoefficient.value=.005,s.mieDirectionalG.value=.8,s.sunPosition.value.copy(this.sunDir).multiplyScalar(e.night?-1:1),this.skyUniforms.uSkyMul.value=e.skyMul,this.sun.color.setRGB(...e.sun),this.sun.intensity=e.sunI,this.hemi.color.setRGB(...e.sky),this.hemi.groundColor.setRGB(...e.ground),this.hemi.intensity=e.hemiI,this.fogColor=new dt().setRGB(...e.fog),this.fog.color.copy(this.fogColor),this.skyUniforms.uFogColor.value.copy(this.fogColor),this.stars.visible=!!e.night,this.renderer.toneMappingExposure=e.exp,this.csm)for(let a of this.csm.lights)a.color.copy(this.sun.color),a.intensity=e.sunI;this.csm&&this.csm.lightDirection.copy(this.sunDir).negate(),this.applySettings(),this.buildEnvMap()}buildEnvMap(){this.envMap&&(this.envMap.dispose(),this.envMap=null);let t=this.time,e=new kn,i=new Os;i.material.uniforms.turbidity.value=t.turb,i.material.uniforms.rayleigh.value=t.ray,i.material.uniforms.sunPosition.value.copy(this.sunDir),i.scale.setScalar(1e3),e.add(i),t.night&&(e.background=new dt(659488));let n=new $t(new Je(2e3,2e3),new Li({color:new dt().setRGB(...t.ground).multiplyScalar(.6)}));n.rotation.x=-Math.PI/2,n.position.y=-5,e.add(n),this.envMap=this.pmrem.fromScene(e,0,.1,3e3).texture,i.geometry.dispose(),i.material.dispose(),this.applySettings()}applySettings(){let t=this.settings,e=this.time;e&&(this.fog.density=t.get("fog")?e.fogD*(900/Math.max(500,t.get("viewDistance")))**.5:1e-5,this.sky.visible=t.get("atmosphere"),this.scene.background=t.get("atmosphere")?null:this.fogColor,this.skyUniforms.uHorizon.value=t.get("fog")?1:.35,this.scene.environment=t.get("ibl")?this.envMap:null,this.scene.environmentIntensity=e.env,this.hemi.intensity=e.hemiI*(t.get("ibl")?.8:1.25),this.setShadows(t.get("shadows")))}setShadows(t){if(t!==this.shadowMode){if(this.shadowMode=t,this.csm&&(ca(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.sun.visible=!0,this.sun.castShadow=!1,t==="low"||t==="medium"){let e=t==="low"?1024:2048,i=t==="low"?45:75;this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=-i,n.right=i,n.top=i,n.bottom=-i,n.near=1,n.far=600,n.updateProjectionMatrix(),this.shadowExt=i}else if(t==="high"||t==="ultra"){this.sun.visible=!1,this.csm=new xa({maxFar:t==="ultra"?520:320,cascades:t==="ultra"?4:3,mode:"practical",parent:this.scene,shadowMapSize:t==="ultra"?4096:2048,lightDirection:this.sunDir.clone().negate(),camera:this.camera,lightIntensity:this.time?this.time.sunI:3,lightNear:1,lightFar:1400,lightMargin:250,shadowBias:-2e-4});for(let e of this.csm.lights)e.shadow.normalBias=.05,this.time&&e.color.copy(this.sun.color);this.csm.fade=!0,ca(this.csm)}}}update(t){this.sky.position.copy(t);let e=this.camera.far;if(this.sky.scale.setScalar(e*1),this.stars.position.copy(t),this.stars.scale.setScalar(e*.45),this.csm)this.csm.update();else if(this.sun.castShadow){let i=this.shadowExt,n=this.sun.shadow.mapSize.x,s=i*2/n,a=t.clone();a.x=Math.round(a.x/s)*s,a.z=Math.round(a.z/s)*s,this.sun.target.position.copy(a),this.sun.position.copy(a).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld()}else this.sun.position.copy(t).addScaledVector(this.sunDir,300),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}dispose(){this.csm&&(ca(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.envMap&&this.envMap.dispose(),this.pmrem.dispose()}};var _a=class{constructor(t,e,i){this.world=t,this.scene=e,this.env=i;let n=t.terrain;this.level=n.waterLevel,this.rt=new me(512,512,{type:_e}),this.textureMatrix=new Tt,this.virtualCam=new Se;let s=t.def.biome==="arid"?[.02,.12,.16]:[.03,.09,.08],a=t.def.biome==="arid"?[.12,.38,.38]:[.12,.24,.17];this.uniforms={uTime:Ni.uTime,uReflection:{value:this.rt.texture},uTexMat:{value:this.textureMatrix},uUseRefl:{value:1},uNoise:{value:mi("noise")},uHeight:{value:n.heightTex},uSize:{value:n.size},uHalf:{value:n.half},uTexN:{value:n.n},uLevel:{value:this.level},uSunDir:{value:new C},uSunColor:{value:new dt},uSkyColor:{value:new dt},uFogColor:{value:new dt},uFogDensity:{value:.001},uWaves:{value:1},uDeep:{value:new dt().setRGB(...s)},uShallow:{value:new dt().setRGB(...a)}};let o=new Jt({uniforms:this.uniforms,transparent:!0,depthWrite:!0,vertexShader:`
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
        }`}),l=n.size+400,c=new Je(l,l,160,160);c.rotateX(-Math.PI/2),this.mesh=new $t(c,o),this.mesh.position.y=this.level,this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,e.add(this.mesh),this.hideList=[]}setQuality(t,e){this.reflections=t,this.uniforms.uUseRefl.value=t?1:0,this.uniforms.uWaves.value=e?1:0}update(t){let e=this.uniforms;e.uSunDir.value.copy(t.sunDir),e.uSunColor.value.copy(t.sun.color).multiplyScalar(t.time.night?.4:1),e.uSkyColor.value.setRGB(...t.time.sky),e.uFogColor.value.copy(t.fog.color),e.uFogDensity.value=t.fog.density}renderReflection(t,e,i,n,s){if(!this.reflections)return;let a=i.position;if(a.y<this.level)return;let o=Math.max(256,Math.floor(n*.5)),l=Math.max(256,Math.floor(s*.5));(this.rt.width!==o||this.rt.height!==l)&&this.rt.setSize(o,l);let c=this.virtualCam;c.copy(i,!1),c.position.set(a.x,2*this.level-a.y,a.z);let h=new C;i.getWorldDirection(h),h.y=-h.y,c.up.set(0,1,0),c.lookAt(c.position.clone().add(h)),c.updateMatrixWorld(),c.projectionMatrix.copy(i.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(c.projectionMatrix),this.textureMatrix.multiply(c.matrixWorldInverse);let u=new bi(new C(0,1,0),-this.level);u.applyMatrix4(c.matrixWorldInverse);let d=new ie(u.normal.x,u.normal.y,u.normal.z,u.constant),f=c.projectionMatrix,p=new ie((Math.sign(d.x)+f.elements[8])/f.elements[0],(Math.sign(d.y)+f.elements[9])/f.elements[5],-1,(1+f.elements[10])/f.elements[14]);d.multiplyScalar(2/d.dot(p)),f.elements[2]=d.x,f.elements[6]=d.y,f.elements[10]=d.z+1-.003,f.elements[14]=d.w,this.mesh.visible=!1;let v=[];for(let y of this.hideList)y&&y.visible&&(y.visible=!1,v.push(y));let g=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;let m=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,c),t.setRenderTarget(m),t.shadowMap.autoUpdate=g;for(let y of v)y.visible=!0;this.mesh.visible=!0}};var Mn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var De=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ty=new Ms(-1,1,1,-1,0,1),wh=class extends ye{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}},ey=new wh,gi=class{constructor(t){this._mesh=new $t(ey,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ty)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var bn=class extends De{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Jt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ne.clone(t.uniforms),this.material=new Jt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Tr=class extends De{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Ma=class extends De{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ba=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_e}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bn(Mn),this.copyPass.material.blending=be,this.clock=new Wo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Tr!==void 0&&(a instanceof Tr?i=!0:a instanceof Ma&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wa=class extends De{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Zd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Bs=class r extends De{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new me(s,a,{type:_e}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new me(s,a,{type:_e});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new me(s,a,{type:_e});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=Zd;this.highPassUniforms=Ne.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Mn;this.copyUniforms=Ne.clone(h.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new Li,this.fsQuad=new gi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Jt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Bs.BlurDirectionX=new nt(1,0);Bs.BlurDirectionY=new nt(0,1);var jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Sa=class extends De{constructor(){super();let t=jd;this.uniforms=Ne.clone(t.uniforms),this.material=new Oo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Tt},cameraProjectionMatrixInverse:{value:new Tt},cameraWorldMatrix:{value:new Tt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

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
		}`},Ar={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ta={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Kd(r=5){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=iy(t),i=e.length,n=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=e[a],l=2*Math.PI*o/i,c=new C(Math.cos(l),Math.sin(l),0).normalize();n[a*4]=(c.x*.5+.5)*255,n[a*4+1]=(c.y*.5+.5)*255,n[a*4+2]=127,n[a*4+3]=255}let s=new Ui(n,t,t);return s.wrapS=wi,s.wrapT=wi,s.needsUpdate=!0,s}function iy(r){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,i=Array(e).fill(0),n=Math.floor(t/2),s=t-1;for(let a=1;a<=e;){if(n===-1&&s===t?(s=t-2,n=0):(s===t&&(s=0),n<0&&(n=t-1)),i[n*t+s]!==0){s-=2,n++;continue}else i[n*t+s]=a++;s++,n--}return i}var Cr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Sh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraProjectionMatrixInverse:{value:new Tt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Sh(r,t,e){let i=ny(r,t,e),n="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=i[s];n+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return n}function ny(r,t,e){let i=[];for(let n=0;n<r;n++){let s=2*Math.PI*t*n/r,a=Math.pow(n/(r-1),e);i.push(new C(Math.cos(s),Math.sin(s),a))}return i}var Ea=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,s){return t[0]*e+t[1]*i+t[2]*n+t[3]*s}noise(t,e){let i,n,s,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,v=e-f,g,m;p>v?(g=1,m=0):(g=0,m=1);let y=p-g+h,x=v-m+h,_=p-1+2*h,A=v-1+2*h,S=l&255,w=c&255,P=this.perm[S+this.perm[w]]%12,b=this.perm[S+g+this.perm[w+m]]%12,M=this.perm[S+1+this.perm[w+1]]%12,T=.5-p*p-v*v;T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[P],p,v));let D=.5-y*y-x*x;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[b],y,x));let L=.5-_*_-A*A;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[M],_,A)),70*(i+n+s)}noise3d(t,e,i){let n,s,a,o,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(i+c),f=1/6,p=(h+u+d)*f,v=h-p,g=u-p,m=d-p,y=t-v,x=e-g,_=i-m,A,S,w,P,b,M;y>=x?x>=_?(A=1,S=0,w=0,P=1,b=1,M=0):y>=_?(A=1,S=0,w=0,P=1,b=0,M=1):(A=0,S=0,w=1,P=1,b=0,M=1):x<_?(A=0,S=0,w=1,P=0,b=1,M=1):y<_?(A=0,S=1,w=0,P=0,b=1,M=1):(A=0,S=1,w=0,P=1,b=1,M=0);let T=y-A+f,D=x-S+f,L=_-w+f,z=y-P+2*f,F=x-b+2*f,O=_-M+2*f,Z=y-1+3*f,V=x-1+3*f,Q=_-1+3*f,K=h&255,ht=u&255,wt=d&255,Ft=this.perm[K+this.perm[ht+this.perm[wt]]]%12,Y=this.perm[K+A+this.perm[ht+S+this.perm[wt+w]]]%12,ot=this.perm[K+P+this.perm[ht+b+this.perm[wt+M]]]%12,vt=this.perm[K+1+this.perm[ht+1+this.perm[wt+1]]]%12,st=.6-y*y-x*x-_*_;st<0?n=0:(st*=st,n=st*st*this.dot3(this.grad3[Ft],y,x,_));let St=.6-T*T-D*D-L*L;St<0?s=0:(St*=St,s=St*St*this.dot3(this.grad3[Y],T,D,L));let Nt=.6-z*z-F*F-O*O;Nt<0?a=0:(Nt*=Nt,a=Nt*Nt*this.dot3(this.grad3[ot],z,F,O));let Lt=.6-Z*Z-V*V-Q*Q;return Lt<0?o=0:(Lt*=Lt,o=Lt*Lt*this.dot3(this.grad3[vt],Z,V,Q)),32*(n+s+a+o)}noise4d(t,e,i,n){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,v=(t+e+i+n)*l,g=Math.floor(t+v),m=Math.floor(e+v),y=Math.floor(i+v),x=Math.floor(n+v),_=(g+m+y+x)*c,A=g-_,S=m-_,w=y-_,P=x-_,b=t-A,M=e-S,T=i-w,D=n-P,L=b>M?32:0,z=b>T?16:0,F=M>T?8:0,O=b>D?4:0,Z=M>D?2:0,V=T>D?1:0,Q=L+z+F+O+Z+V,K=a[Q][0]>=3?1:0,ht=a[Q][1]>=3?1:0,wt=a[Q][2]>=3?1:0,Ft=a[Q][3]>=3?1:0,Y=a[Q][0]>=2?1:0,ot=a[Q][1]>=2?1:0,vt=a[Q][2]>=2?1:0,st=a[Q][3]>=2?1:0,St=a[Q][0]>=1?1:0,Nt=a[Q][1]>=1?1:0,Lt=a[Q][2]>=1?1:0,Zt=a[Q][3]>=1?1:0,tt=b-K+c,lt=M-ht+c,U=T-wt+c,Rt=D-Ft+c,rt=b-Y+2*c,Mt=M-ot+2*c,ut=T-vt+2*c,kt=D-st+2*c,xt=b-St+3*c,I=M-Nt+3*c,E=T-Lt+3*c,G=D-Zt+3*c,j=b-1+4*c,it=M-1+4*c,J=T-1+4*c,Ct=D-1+4*c,ft=g&255,gt=m&255,Wt=y&255,at=x&255,Et=o[ft+o[gt+o[Wt+o[at]]]]%32,Ot=o[ft+K+o[gt+ht+o[Wt+wt+o[at+Ft]]]]%32,Bt=o[ft+Y+o[gt+ot+o[Wt+vt+o[at+st]]]]%32,At=o[ft+St+o[gt+Nt+o[Wt+Lt+o[at+Zt]]]]%32,jt=o[ft+1+o[gt+1+o[Wt+1+o[at+1]]]]%32,Ht=.6-b*b-M*M-T*T-D*D;Ht<0?h=0:(Ht*=Ht,h=Ht*Ht*this.dot4(s[Et],b,M,T,D));let te=.6-tt*tt-lt*lt-U*U-Rt*Rt;te<0?u=0:(te*=te,u=te*te*this.dot4(s[Ot],tt,lt,U,Rt));let k=.6-rt*rt-Mt*Mt-ut*ut-kt*kt;k<0?d=0:(k*=k,d=k*k*this.dot4(s[Bt],rt,Mt,ut,kt));let pt=.6-xt*xt-I*I-E*E-G*G;pt<0?f=0:(pt*=pt,f=pt*pt*this.dot4(s[At],xt,I,E,G));let $=.6-j*j-it*it-J*J-Ct*Ct;return $<0?p=0:($*=$,p=$*$*this.dot4(s[jt],j,it,J,Ct)),27*(h+u+d+f+p)}};var Rr=class r extends De{constructor(t,e,i,n,s,a,o){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Kd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new me(this.width,this.height,{type:_e}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Jt({defines:Object.assign({},Er.defines),uniforms:Ne.clone(Er.uniforms),vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,blending:be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Bo,this.normalMaterial.blending=be,this.pdMaterial=new Jt({defines:Object.assign({},Cr.defines),uniforms:Ne.clone(Cr.uniforms),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Jt({defines:Object.assign({},Ar.defines),uniforms:Ne.clone(Ar.uniforms),vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader,blending:be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Jt({uniforms:Ne.clone(Mn.uniforms),vertexShader:Mn.vertexShader,fragmentShader:Mn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xo,blendDst:Rs,blendEquation:hi,blendSrcAlpha:qo,blendDstAlpha:Rs,blendEquationAlpha:hi}),this.blendMaterial=new Jt({uniforms:Ne.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:qc,blendSrc:Xo,blendDst:Rs,blendEquation:hi,blendSrcAlpha:qo,blendDstAlpha:Rs,blendEquationAlpha:hi}),this.fsQuad=new gi(null),this.originalClearColor=new dt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ws,this.depthTexture.format=fn,this.depthTexture.type=dn,this.normalRenderTarget=new me(this.width,this.height,{minFilter:Ee,magFilter:Ee,type:_e,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Sh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,s=e.clearAlpha||s,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let n=e.get(i);i.visible=n}),e.clear()}generateNoise(t=64){let e=new Ea,i=t*t*4,n=new Uint8Array(i);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;n[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,n[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,n[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,n[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new Ui(n,t,t,ni,si);return s.wrapS=wi,s.wrapT=wi,s.needsUpdate=!0,s}};Rr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Jd={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var Aa=class extends De{constructor(t,e,i){super(),this.scene=t,this.camera=e;let n=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new me(1,1,{minFilter:Ee,magFilter:Ee,type:_e}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new or,this.materialDepth.depthPacking=nh,this.materialDepth.blending=be;let o=Jd,l=Ne.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=n,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new Jt({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new gi(this.materialBokeh),this._oldClearColor=new dt}render(t,e,i){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);let n=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(n),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var Qd={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new nt(1/1024,1/512)}},vertexShader:`

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
			
		}`};var sy={uniforms:{tDiffuse:{value:null},uCurInv:{value:new Tt},uPrev:{value:new Tt},uStrength:{value:.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},ry={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new nt(1,1)},uGrade:{value:1},uGrain:{value:.04},uVignette:{value:1},uCA:{value:1},uDamage:{value:0},uSuppress:{value:0},uFlash:{value:0},uDowned:{value:0},uSat:{value:1.08},uContrast:{value:1.06},uLift:{value:new C(.01,.01,.02)},uGamma:{value:new C(1,1,1)},uGain:{value:new C(1.02,1,.97)},uTint:{value:new C(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Th=class extends De{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.clear=!1}render(t,e,i){let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(this.renderToScreen?null:i),t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=n}};function tf(r,t){let e=r.render.bind(r);return r.render=(...i)=>{let n=t(),s=n.map(a=>a.visible);n.forEach(a=>{a.visible=!1}),e(...i),n.forEach((a,o)=>{a.visible=s[o]})},r}var Ca=class{constructor(t,e,i,n,s,a){this.renderer=t,this.scene=e,this.camera=i,this.vmScene=n,this.vmCamera=s,this.settings=a,this.hidden=[],this.prevRot=new Tt,this.focus=50,this.dofAmount=0,this.menuBlur=0,this.time=0,this.build()}build(){let t=this.renderer,e=t.getDrawingBufferSize(new nt),i=this.settings.get("antialias"),n=new me(e.x,e.y,{type:_e,samples:i==="msaa"?4:0});this.composer&&this.composer.dispose(),this.composer=new ba(t,n),this.composer.setPixelRatio(1),this.composer.setSize(e.x,e.y),this.aa=i,this.renderPass=new wa(this.scene,this.camera),this.gtao=tf(new Rr(this.scene,this.camera,e.x,e.y),()=>this.hidden),this.gtao.updateGtaoMaterial({radius:1.4,distanceExponent:1.5,thickness:2.5,scale:1.25,samples:12,distanceFallOff:1}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.gtao.blendIntensity=.85,this.bokeh=tf(new Aa(this.scene,this.camera,{focus:50,aperture:2e-5,maxblur:.008}),()=>this.hidden),this.motion=new bn(sy),this.vmPass=new Th(this.vmScene,this.vmCamera),this.bloom=new Bs(new nt(e.x/2,e.y/2),.28,.45,2.2),this.output=new Sa,this.final=new bn(ry),this.fxaa=new bn(Qd);for(let s of[this.renderPass,this.gtao,this.bokeh,this.motion,this.vmPass,this.bloom,this.output,this.final,this.fxaa])this.composer.addPass(s);this.setSize(e.x,e.y),this.applySettings()}applySettings(){let t=this.settings;if(t.get("antialias")!==this.aa){this.build();return}this.gtao.enabled=t.get("ssao"),this.bloom.enabled=t.get("bloom"),this.motion.enabled=t.get("motionBlur"),this.fxaa.enabled=t.get("antialias")==="fxaa";let e=this.final.uniforms;e.uGrade.value=t.get("colorGrading")?1:0,e.uGrain.value=t.get("filmGrain")?.045:0,e.uVignette.value=t.get("vignette")?1:0,e.uCA.value=t.get("chromatic")?1:0,this.updateDofEnabled()}setGrade(t){let e=this.final.uniforms;e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uLift.value.set(...t.lift),e.uGamma.value.set(...t.gamma),e.uGain.value.set(...t.gain),e.uTint.value.set(...t.tint||[1,1,1])}updateDofEnabled(){this.bokeh.enabled=this.settings.get("dof")&&(this.dofAmount>.02||this.menuBlur>.02)}setSize(t,e){this.composer.setSize(t,e),this.final.uniforms.uRes.value.set(t,e),this.fxaa.material.uniforms.resolution.value.set(1/t,1/e)}render(t,e){this.time+=t;let i=this.final.uniforms;if(i.uTime.value=this.time,i.uDamage.value=e.damage||0,i.uSuppress.value=e.suppress||0,i.uFlash.value=e.flash||0,i.uDowned.value=e.downed||0,this.dofAmount=e.ads||0,this.menuBlur=e.menu?1:0,this.updateDofEnabled(),this.bokeh.enabled){let n=this.bokeh.uniforms;this.focus+=((e.focus||60)-this.focus)*Math.min(1,t*8),n.focus.value=this.menuBlur?2:this.focus,n.aperture.value=this.menuBlur?.0012:4e-5*this.dofAmount,n.maxblur.value=this.menuBlur?.012:.006*this.dofAmount}if(this.motion.enabled){let n=this.camera,a=new Tt().extractRotation(n.matrixWorld).clone().invert(),o=new Tt().multiplyMatrices(n.projectionMatrix,a);this.motion.uniforms.uCurInv.value.copy(o).invert(),this.motion.uniforms.uPrev.value.copy(this.prevVP||o),this.motion.uniforms.uStrength.value=Math.min(1,.016/Math.max(t,.001))*.55,this.prevVP=o}else this.prevVP=null;this.composer.render(t)}};var oy=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),ef=[0,1,2,0,2,3],Pr=class{constructor(t,e,i,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.c1=new Float32Array(e*4),this.rot=new Float32Array(e),this.rotV=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e);let s=new pr;s.setAttribute("corner",new fe(oy,2)),s.setIndex(ef),this.aPos=new ui(new Float32Array(e*3),3).setUsage(Vn),this.aCol=new ui(new Float32Array(e*4),4).setUsage(Vn),this.aSR=new ui(new Float32Array(e*2),2).setUsage(Vn),s.setAttribute("iPos",this.aPos),s.setAttribute("iCol",this.aCol),s.setAttribute("iSR",this.aSR),s.instanceCount=0,this.uniforms={uTex:{value:i},uLight:{value:new dt(1,1,1)},uFogColor:{value:new dt},uFogDensity:{value:0}};let a=new Jt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:n?Zi:hn,vertexShader:`
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
        }`});this.mesh=new $t(s,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?6:5,t.add(this.mesh),this.geo=s}emit(t,e,i,n,s,a,o,l,c,h,u,d=0,f=0,p=0){let v;this.n<this.max?v=this.n++:v=Math.floor(Math.random()*this.max),this.pos[v*3]=t,this.pos[v*3+1]=e,this.pos[v*3+2]=i,this.vel[v*3]=n,this.vel[v*3+1]=s,this.vel[v*3+2]=a,this.life[v]=o,this.maxLife[v]=o,this.s0[v]=l,this.s1[v]=c;for(let g=0;g<4;g++)this.c0[v*4+g]=h[g],this.c1[v*4+g]=u[g];this.rot[v]=Math.random()*6.28,this.rotV[v]=p*(Math.random()-.5),this.drag[v]=d,this.grav[v]=f}update(t){let e=0,i=this.aPos.array,n=this.aCol.array,s=this.aSR.array;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let l=--this.n;l!==e&&(this.pos.copyWithin(e*3,l*3,l*3+3),this.vel.copyWithin(e*3,l*3,l*3+3),this.c0.copyWithin(e*4,l*4,l*4+4),this.c1.copyWithin(e*4,l*4,l*4+4),this.life[e]=this.life[l],this.maxLife[e]=this.maxLife[l],this.s0[e]=this.s0[l],this.s1[e]=this.s1[l],this.rot[e]=this.rot[l],this.rotV[e]=this.rotV[l],this.drag[e]=this.drag[l],this.grav[e]=this.grav[l]);continue}let a=Math.max(0,1-this.drag[e]*t);this.vel[e*3]*=a,this.vel[e*3+1]=this.vel[e*3+1]*a-this.grav[e]*t,this.vel[e*3+2]*=a,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.rot[e]+=this.rotV[e]*t;let o=1-this.life[e]/this.maxLife[e];i[e*3]=this.pos[e*3],i[e*3+1]=this.pos[e*3+1],i[e*3+2]=this.pos[e*3+2];for(let l=0;l<4;l++)n[e*4+l]=this.c0[e*4+l]+(this.c1[e*4+l]-this.c0[e*4+l])*o;o<.08&&(n[e*4+3]*=o/.08),s[e*2]=this.s0[e]+(this.s1[e]-this.s0[e])*Math.sqrt(o),s[e*2+1]=this.rot[e],e++}this.geo.instanceCount=this.n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSR.needsUpdate=!0,this.aPos.updateRanges=[{start:0,count:this.n*3}]}},Eh=class{constructor(t,e=400){this.max=e;let i=new pr;i.setAttribute("corner",new fe(new Float32Array([0,-1,1,-1,1,1,0,1]),2)),i.setIndex(ef),this.aS=new ui(new Float32Array(e*3),3).setUsage(Vn),this.aE=new ui(new Float32Array(e*3),3).setUsage(Vn),this.aC=new ui(new Float32Array(e*4),4).setUsage(Vn),i.setAttribute("iS",this.aS),i.setAttribute("iE",this.aE),i.setAttribute("iC",this.aC),i.instanceCount=0;let n=new Jt({transparent:!0,depthWrite:!1,blending:Zi,vertexShader:`
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
        void main() { float a = vT * vT * (1.0 - abs(vSide)); gl_FragColor = vec4(vC.rgb * a * 2.5, a); }`});this.mesh=new $t(i,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh),this.geo=i,this.n=0}begin(){this.n=0}add(t,e,i,n,s,a,o,l,c,h){if(this.n>=this.max)return;let u=this.n++,d=this.aS.array,f=this.aE.array,p=this.aC.array;d[u*3]=t,d[u*3+1]=e,d[u*3+2]=i,f[u*3]=n,f[u*3+1]=s,f[u*3+2]=a,p[u*4]=o,p[u*4+1]=l,p[u*4+2]=c,p[u*4+3]=h}end(){this.geo.instanceCount=this.n,this.aS.needsUpdate=this.aE.needsUpdate=this.aC.needsUpdate=!0}},Ra=class{constructor(t,e,i,n){this.max=e,this.i=0,this.owners=new Array(e).fill(null);let s=new ve({map:mi(i),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,roughness:1});this.mesh=new di(new Je(1,1),s,e);let a=new Tt().makeScale(0,0,0);for(let o=0;o<e;o++)this.mesh.setMatrixAt(o,a);this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.receiveShadow=!0,t.add(this.mesh),this.size=n,this._m=new Tt,this._q=new Ae,this._q2=new Ae,this._v=new C,this._n=new C,this._s=new C}add(t,e,i,n,s,a,o,l=1){let c=this.i;this.i=(this.i+1)%this.max,this._n.set(n,s,a),this._q.setFromUnitVectors(new C(0,0,1),this._n),this._q2.setFromAxisAngle(new C(0,0,1),Math.random()*6.28),this._q.multiply(this._q2);let h=this.size*l*(.8+Math.random()*.4);this._v.set(t+n*.012,e+s*.012,i+a*.012),this._s.set(h,h,h),this._m.compose(this._v,this._q,this._s),this.mesh.setMatrixAt(c,this._m),this.mesh.instanceMatrix.needsUpdate=!0,this.owners[c]=o||null}removeOwner(t){let e=new Tt().makeScale(0,0,0),i=!1;for(let n=0;n<this.max;n++)this.owners[n]===t&&(this.mesh.setMatrixAt(n,e),this.owners[n]=null,i=!0);i&&(this.mesh.instanceMatrix.needsUpdate=!0)}},Ah=class{constructor(t,e=500){this.max=e,this.list=[];let i=new ve({roughness:.9});this.mesh=new di(new ri(1,1,1),i,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1;let n=new Tt().makeScale(0,0,0);for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,n),this.mesh.setColorAt(s,new dt(1,1,1));t.add(this.mesh),this.free=[];for(let s=e-1;s>=0;s--)this.free.push(s);this._m=new Tt,this._q=new Ae,this._e=new Ke,this._p=new C,this._s=new C,this._c=new dt}spawn(t,e,i,n,s,a,o,l,c,h,u=8){let d;this.free.length?d=this.free.pop():d=this.list.shift().slot,this.list.push({slot:d,x:t,y:e,z:i,vx:n,vy:s,vz:a,rx:Math.random()*6,ry:Math.random()*6,rz:Math.random()*6,ax:W(-8,8),ay:W(-8,8),az:W(-8,8),sx:o,sy:l,sz:c,life:u,rest:!1}),this._c.set(h).multiplyScalar(.8+Math.random()*.35),this.mesh.setColorAt(d,this._c),this.mesh.instanceColor.needsUpdate=!0}update(t,e){if(this.list.length){for(let i=this.list.length-1;i>=0;i--){let n=this.list[i];if(n.life-=t,n.life<=0){this.mesh.setMatrixAt(n.slot,this._m.makeScale(0,0,0)),this.free.push(n.slot),this.list.splice(i,1);continue}if(!n.rest){n.vy-=18*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rx+=n.ax*t,n.ry+=n.ay*t,n.rz+=n.az*t;let a=e.groundAt(n.x,n.z,n.y+.3,.05)+Math.min(n.sx,n.sy,n.sz)*.5;n.y<a&&(n.y=a,Math.abs(n.vy)<1.5&&(n.rest=!0,n.vx=n.vz=0),n.vy=-n.vy*.3,n.vx*=.55,n.vz*=.55,n.ax*=.5,n.ay*=.5,n.az*=.5)}let s=n.life<1?n.life:1;this._e.set(n.rx,n.ry,n.rz),this._q.setFromEuler(this._e),this._p.set(n.x,n.y,n.z),this._s.set(n.sx*s,n.sy*s,n.sz*s),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(n.slot,this._m)}this.mesh.instanceMatrix.needsUpdate=!0}}},Pa=class{constructor(t){this.game=t;let e=t.scene;this.smoke=new Pr(e,3e3,mi("smoke"),!1),this.glow=new Pr(e,2500,mi("spark"),!0),this.flashes=new Pr(e,200,mi("flash"),!0),this.tracers=new Eh(e,500),this.holes=new Ra(e,450,"bullethole",.13),this.scorch=new Ra(e,60,"scorch",4.2),this.debris=new Ah(e,500),this.lights=[];for(let i=0;i<3;i++){let n=new Go(16755285,0,20,2);n.castShadow=!1,e.add(n),this.lights.push({light:n,t:0,dur:1,i0:0})}this.emitters=[],this.trauma=0,this.q=1,this.hidden=[this.smoke.mesh,this.glow.mesh,this.flashes.mesh,this.tracers.mesh,this.holes.mesh,this.scorch.mesh]}setQuality(t){this.q={low:.35,medium:.65,high:1}[t.get("particles")]||1,this.decalsOn=t.get("decals"),this.debrisOn=t.get("debris"),this.shakeOn=t.get("screenShake"),this.holes.mesh.visible=this.scorch.mesh.visible=this.decalsOn}count(t){return Math.max(1,Math.round(t*this.q))}flashLight(t,e,i,n,s,a,o){let l=this.lights[0];for(let c of this.lights)c.t/c.dur*c.i0<l.t/l.dur*l.i0&&(l=c);l.light.position.set(t,e,i),l.light.color.set(n),l.light.distance=a,l.i0=s,l.t=o,l.dur=o}shake(t,e,i,n){if(!this.shakeOn)return;let s=t;if(e!==void 0){let a=this.game.camera.position,o=Math.hypot(a.x-e,a.y-i,a.z-n);s=t*Math.max(0,1-o/60)}this.trauma=Math.min(1,this.trauma+s)}muzzle(t,e,i,n,s,a,o=1,l=!1,c=!1){l||(this.flashes.emit(t,e,i,0,0,0,.05,.45*o,.65*o,[1,.8,.45,1],[1,.5,.2,0],0,0),this.flashes.emit(t+n*.15,e+s*.15,i+a*.15,n*2,s*2,a*2,.04,.3*o,.5*o,[1,.9,.6,1],[1,.6,.2,0],0,0),this.flashLight(t,e,i,16756832,c?6:12,12,.06)),Math.random()<this.q&&this.smoke.emit(t+n*.2,e+s*.2,i+a*.2,n*1.5+W(-.2,.2),s*1.5+.4,a*1.5+W(-.2,.2),.8,.15,.9,[.8,.8,.8,.22],[.8,.8,.8,0],2,-.3,1)}impact(t,e,i,n,s,a,o,l){let c=this.q;switch(o){case"flesh":for(let h=0;h<this.count(6);h++)this.smoke.emit(t,e,i,n*1.5+W(-1,1),s*1.5+W(-.5,1),a*1.5+W(-1,1),.35,.08,.5,[.55,.04,.03,.85],[.4,.02,.02,0],4,3);return;case"water":for(let h=0;h<this.count(10);h++)this.smoke.emit(t,e,i,W(-1,1),W(2,5),W(-1,1),.6,.1,.5,[.9,.95,1,.7],[.9,.95,1,0],1,9);return;case"metal":case"container":for(let h=0;h<this.count(10);h++)this.glow.emit(t,e,i,n*4+W(-3,3),s*4+W(-1,4),a*4+W(-3,3),W(.15,.4),.06,.02,[1,.8,.4,1],[1,.4,.1,0],1,12);this.smoke.emit(t,e,i,n,s,a,.5,.1,.4,[.5,.5,.5,.3],[.5,.5,.5,0],2,0);break;default:{let h=this.matColor(o),u=this.count(5);for(let d=0;d<u;d++)this.smoke.emit(t+n*.05,e+s*.05,i+a*.05,n*W(1,3)+W(-.6,.6),s*W(1,3)+W(0,1.2),a*W(1,3)+W(-.6,.6),W(.5,1.1),.1,W(.5,.9),[h[0],h[1],h[2],.55],[h[0],h[1],h[2],0],3,1.2,1);if(o==="stone"||o==="concrete"||o==="brick"||o==="rock")for(let d=0;d<this.count(3);d++)this.glow.emit(t,e,i,n*3+W(-2,2),s*3+W(0,3),a*3+W(-2,2),.12,.04,.02,[1,.85,.6,1],[1,.5,.2,0],1,10);for(let d=0;d<this.count(4);d++)this.smoke.emit(t,e,i,n*3+W(-2,2),s*3+W(1,4),a*3+W(-2,2),.6,.04,.04,[h[0]*.7,h[1]*.7,h[2]*.7,1],[h[0]*.7,h[1]*.7,h[2]*.7,1],.5,14)}}this.decalsOn&&c>.2&&this.holes.add(t,e,i,n,s,a,l)}matColor(t){switch(t){case"wood":return[.55,.42,.3];case"plaster":return[.85,.82,.76];case"brick":return[.7,.48,.38];case"concrete":case"stone":case"rock":return[.68,.67,.64];case"sand":return[.78,.7,.52];case"hay":return[.85,.75,.45];case"grass":return[.45,.4,.28];case"dirt":return[.5,.42,.32];default:return[.55,.47,.36]}}explosion(t,e,i,n=1,s={}){let a=this.q;this.flashLight(t,e+1,i,16751168,60*n,30*n,.35),this.flashes.emit(t,e+.5,i,0,0,0,.12,2*n,6*n,[1,.8,.5,1],[1,.4,.1,0],0,0);for(let l=0;l<this.count(18*n);l++){let c=Math.random()*6.28,h=Math.random(),u=W(3,9)*n;this.glow.emit(t,e+.5,i,Math.cos(c)*u*(1-h),W(2,8)*n,Math.sin(c)*u*(1-h),W(.25,.6),1.6*n,3.5*n,[1,.62,.25,.9],[.8,.2,.05,0],4,-1,2)}for(let l=0;l<this.count(30*n);l++)this.glow.emit(t,e+.5,i,W(-14,14),W(4,18),W(-14,14),W(.4,1.2),.12,.05,[1,.8,.4,1],[1,.4,.1,0],.5,18);for(let l=0;l<this.count(16*n);l++){let c=W(.12,.3);this.smoke.emit(t+W(-1.5,1.5)*n,e+W(0,2)*n,i+W(-1.5,1.5)*n,W(-2,2),W(1.5,5)*n,W(-2,2),W(4,9),2.2*n,8*n,[c,c,c*.95,.75],[.35,.34,.33,0],.8,-.4,.6)}let o=s.dirt||[.45,.38,.28];for(let l=0;l<this.count(14*n);l++){let c=Math.random()*6.28;this.smoke.emit(t,e+.2,i,Math.cos(c)*W(6,12)*n,W(.2,1.5),Math.sin(c)*W(6,12)*n,W(1.5,3),1.2*n,4*n,[o[0],o[1],o[2],.55],[o[0],o[1],o[2],0],2.5,.2,.5)}for(let l=0;l<this.count(16*n);l++)this.smoke.emit(t,e+.3,i,W(-7,7)*n,W(5,14)*n,W(-7,7)*n,W(.8,1.6),.15,.15,[o[0]*.6,o[1]*.6,o[2]*.6,1],[o[0]*.6,o[1]*.6,o[2]*.6,1],.3,16);if(this.debrisOn)for(let l=0;l<Math.round(8*n*a);l++){let c=W(.08,.25);this.debris.spawn(t,e+.4,i,W(-7,7),W(5,12),W(-7,7),c,c,c,s.debrisColor||5917242,W(4,8))}this.decalsOn&&s.ground&&this.scorch.add(t,e+.02,i,s.nx??0,s.ny??1,s.nz??0,s.box,n),s.fire&&this.addFire(t,e,i,s.fire,n*.6),this.shake(.55*n,t,e,i)}pieceDestroyed(t,e){let i=br[t.mat]||br.plaster,n=(t.minX+t.maxX)/2,s=(t.minY+t.maxY)/2,a=(t.minZ+t.maxZ)/2,o=t.maxX-t.minX,l=t.maxY-t.minY,c=t.maxZ-t.minZ,h=this.matColor(t.mat),u=this.count(6);for(let d=0;d<u;d++)this.smoke.emit(n+W(-o,o)*.4,s+W(-l,l)*.4,a+W(-c,c)*.4,W(-1,1),W(0,1.5),W(-1,1),W(2.5,5),.8,3.2,[h[0],h[1],h[2],.6],[h[0],h[1],h[2],0],1.2,-.1,.5);if(this.debrisOn){let d=Math.max(2,Math.round(Math.min(8,o*l*c*14+2)*this.q));for(let f=0;f<d;f++){let p=Math.min(.45,Math.max(o,l,c)*W(.15,.35));this.debris.spawn(n+W(-o,o)*.4,s+W(-l,l)*.4,a+W(-c,c)*.4,W(-3,3),W(0,4),W(-3,3),p*W(.6,1.4),p*W(.5,1.2),p*W(.6,1.4),i.debris,W(6,12))}}this.holes.removeOwner(t),this.game.audio&&this.game.audio.play3d(i.sound==="wood"?"breakWood":i.sound==="metal"?"breakMetal":"breakStone",n,s,a,{vol:.8})}addSmokeScreen(t,e,i,n=16){let s=this.game.time,a=s,o={x:t,y:e+1.5,z:i,r:6.5,strength:.96,until:s+n,grow:l=>Math.min(1,(l-a)/2.5)*(l>a+n-3?Math.max(.2,(a+n-l)/3):1)};this.game.world.collision.addDynamicSoft(o),this.emitters.push({type:"smoke",x:t,y:e,z:i,t:n,rate:26,acc:0})}addFire(t,e,i,n=8,s=1){this.emitters.push({type:"fire",x:t,y:e,z:i,t:n,rate:22*s,acc:0,scale:s})}update(t){for(let e=this.emitters.length-1;e>=0;e--){let i=this.emitters[e];if(i.t-=t,i.t<=0){this.emitters.splice(e,1);continue}for(i.acc+=t*i.rate*this.q;i.acc>=1;)if(i.acc-=1,i.type==="smoke"){let n=W(.72,.88);this.smoke.emit(i.x+W(-.8,.8),i.y+.3,i.z+W(-.8,.8),W(-1.6,1.6),W(.4,1.5),W(-1.6,1.6),W(5,8),1.5,9,[n,n,n,.7],[n,n,n,0],.35,-.06,.3)}else if(i.type==="fire"){let n=i.scale;this.glow.emit(i.x+W(-.6,.6)*n,i.y+.2,i.z+W(-.6,.6)*n,W(-.3,.3),W(1.5,3)*n,W(-.3,.3),W(.4,.9),.9*n,.2,[1,.55,.15,.9],[.9,.2,.05,0],.5,-1,1),Math.random()<.3&&this.smoke.emit(i.x,i.y+1.5*n,i.z,W(-.4,.4),W(1,2),W(-.4,.4),W(3,6),.8*n,4*n,[.12,.11,.1,.55],[.3,.3,.3,0],.3,-.3,.4),Math.random()<.15&&this.flashLight(i.x,i.y+1,i.z,16747056,6*n,10,.25)}}this.smoke.update(t),this.glow.update(t),this.flashes.update(t),this.debris.update(t,this.game.world.collision);for(let e of this.lights)e.t>0?(e.t-=t,e.light.intensity=Math.max(0,e.t/e.dur)*e.i0):e.light.intensity=0;this.trauma=Math.max(0,this.trauma-t*1.4)}setLighting(t){let e=t.time,i=new dt().setRGB(...e.sky).multiplyScalar(e.hemiI*.8).add(new dt().setRGB(...e.sun).multiplyScalar(e.sunI*.22));this.smoke.uniforms.uLight.value.copy(i);for(let n of[this.smoke,this.glow,this.flashes])n.uniforms.uFogColor.value.copy(t.fog.color),n.uniforms.uFogDensity.value=t.fog.density}};var Dr=Math.PI/180,Ir=new C,nf=new C,sf=new C,wn=class{constructor(t){this.game=t,this.bullets=[],this.projectiles=[],this.placed=[],this.shotCounter=0}get world(){return this.game.world}fireBullet(t,e,i){let n=e.stats,s=t.eye(new C),a=t.aimDir(new C),o=t.spread();if(n.pellets&&(o=Math.max(o,n.pelletSpread||2.5)*(i===0?.3:1)),t.suppression>.2&&!t.isPlayer&&(o+=t.suppression*.8),o>0){let u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*o*.5*Dr,f=Math.abs(a.y)>.99?Ir.set(1,0,0):Ir.set(0,1,0),p=new C().crossVectors(a,f).normalize(),v=new C().crossVectors(p,a).normalize();a.addScaledVector(p,Math.cos(u)*Math.tan(d)).addScaledVector(v,Math.sin(u)*Math.tan(d)).normalize()}let l=n.vel*n.velMul,c=t.isPlayer&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new C);this.shotCounter++;let h=!n.suppressed&&(n.type==="sniper"||n.type==="lmg"||i===0&&this.shotCounter%(t.isPlayer?3:2)===0);this.bullets.push({x:s.x,y:s.y,z:s.z,vx:a.x*l,vy:a.y*l,vz:a.z*l,ox:c.x-s.x,oy:c.y-s.y,oz:c.z-s.z,shooter:t,team:t.team,s:n,dmgMul:n.dmgMul,traveled:0,life:2.6,penLeft:n.pen,penDmg:1,tracer:h,whizzed:!1,weapon:n.name})}falloff(t,e){return e<=t.r0?t.dmg:e>=t.r1?t.dmgMin:Qt(t.dmg,t.dmgMin,(e-t.r0)/(t.r1-t.r0))}updateBullets(t){let e=this.game.fx,i=this.game.soldiers,n=this.world.collision,s=this.world.terrain.waterLevel;e.tracers.begin();for(let a=this.bullets.length-1;a>=0;a--){let o=this.bullets[a];o.life-=t;let l=t,c=o.life>0,h=0;for(;c&&l>0&&h++<4;){let u=l;l=0;let d=o.vy-9.81*u,f=o.x+o.vx*u,p=o.y+(o.vy+d)*.5*u,v=o.z+o.vz*u;o.vy=d;let g=f-o.x,m=p-o.y,y=v-o.z,x=Math.sqrt(g*g+m*m+y*y);if(x<1e-6)break;let _=g/x,A=m/x,S=y/x,w=n.raycast(o.x,o.y,o.z,_,A,S,x,{skipInside:!0,ignore:D=>D.cat==="cloth"}),P=w?w.t:1/0;if(s!==null&&(o.y-s)*(p-s)<0){let D=(o.y-s)/(o.y-p)*x;if(D<P){e.impact(o.x+_*D,s,o.z+S*D,0,1,0,"water"),this.game.audio.play3d("impactWater",o.x+_*D,s,o.z+S*D,{vol:.5,maxDist:60}),c=!1;break}}let b=null,M=P,T=null;for(let D=0;D<i.length;D++){let L=i[D];if(L===o.shooter||L.state==="dead"||L.team===o.team)continue;let z=L.pos.x,F=L.pos.y+.9,O=L.pos.z,Z=z-o.x,V=F-o.y,Q=O-o.z,K=zt(Z*_+V*A+Q*S,0,x),ht=o.x+_*K-z,wt=o.y+A*K-F,Ft=o.z+S*K-O,Y=ht*ht+wt*wt+Ft*Ft;if(Y>1.6*1.6){Y<4.5*4.5&&K<M&&this.nearMiss(o,L,Math.sqrt(Y),o.x+_*K,o.y+A*K,o.z+S*K);continue}let ot=L.hitSpheres();for(let vt=0;vt<ot.length;vt++){let st=ot[vt],St=uh(o.x,o.y,o.z,g,m,y,st[0],st[1],st[2],st[3]);St>=0&&St*x<M&&(M=St*x,b=L,T=st[4])}(!b||b!==L)&&K<M&&this.nearMiss(o,L,Math.sqrt(Y)*.5,o.x+_*K,o.y+A*K,o.z+S*K)}if(b){let D=o.x+_*M,L=o.y+A*M,z=o.z+S*M,F=o.traveled+M,O=this.falloff(o.s,F)*o.dmgMul*o.penDmg,Z=T==="head"?o.s.headMul||(o.s.type==="shotgun"?1.5:1.9):T==="leg"?.78:1;O*=Z;let V=new C(_,A,S),Q=b.state==="alive";b.takeDamage(O,o.shooter,T,o.weapon,V,!1),e.impact(D,L,z,-_,-A,-S,"flesh"),this.game.onHit(o.shooter,b,O,T,Q),c=!1,o.x=D,o.y=L,o.z=z;break}if(w){let D=w.box?w.box.mat:this.terrainMat(w.x,w.z);if(e.impact(w.x,w.y,w.z,w.nx,w.ny,w.nz,D,w.box),Math.random()<.5&&this.game.audio.play3d(this.impactSound(D),w.x,w.y,w.z,{vol:.5,maxDist:50}),w.box&&w.box.destructible){let L=this.falloff(o.s,o.traveled+w.t)*(w.box.mat==="wood"||w.box.mat==="hay"||w.box.mat==="cloth"?.25:.04)*(o.s.pen>1?1.6:1);this.world.structures.damagePiece(w.box,L,e,"bullet")}if(w.box&&w.box.alive!==!1){let L=w.box.pen*Math.min(w.thickness,1.5)*4;if(L<o.penLeft){let z=1-L/o.penLeft;o.penLeft-=L,o.penDmg*=Math.max(.2,z);let F=w.x+_*(w.thickness+.02),O=w.y+A*(w.thickness+.02),Z=w.z+S*(w.thickness+.02);o.traveled+=w.t+w.thickness,o.x=F,o.y=O,o.z=Z;let V=Math.sqrt(o.vx*o.vx+o.vy*o.vy+o.vz*o.vz)*.85;o.vx=_*V,o.vy=A*V,o.vz=S*V,l=u*Math.max(0,(x-w.t-w.thickness)/x),e.impact(F,O,Z,_,A,S,w.box.mat,w.box);continue}}else if(w.box){o.traveled+=w.t,o.x=w.x+_*.05,o.y=w.y+A*.05,o.z=w.z+S*.05,o.penDmg*=.7,l=u*Math.max(0,(x-w.t)/x);continue}c=!1,o.x=w.x,o.y=w.y,o.z=w.z;break}o.x=f,o.y=p,o.z=v,o.traveled+=x}if((o.traveled>1400||Math.abs(o.x)>this.world.terrain.half||Math.abs(o.z)>this.world.terrain.half)&&(c=!1),o.tracer){let u=Math.hypot(o.vx,o.vy,o.vz),d=Math.min(o.traveled,u*.03),f=1-Math.min(1,o.traveled/40),p=o.x+o.ox*f,v=o.y+o.oy*f,g=o.z+o.oz*f,m=1-Math.min(1,Math.max(0,o.traveled-d)/40),y=o.x-o.vx/u*d+o.ox*m,x=o.y-o.vy/u*d+o.oy*m,_=o.z-o.vz/u*d+o.oz*m,A=o.team===0?[1,.85,.5]:[1,.7,.4];e.tracers.add(y,x,_,p,v,g,A[0],A[1],A[2],.025)}c||this.bullets.splice(a,1)}e.tracers.end()}nearMiss(t,e,i,n,s,a){if(e.state==="alive"&&(t.nm||(t.nm=[]),!t.nm.includes(e))){if(t.nm.push(e),e.suppression=Math.min(1,e.suppression+(1-i/4.5)*(t.s.type==="sniper"?.45:.16)),e.isPlayer){let o=Math.hypot(t.vx,t.vy,t.vz)>343;this.game.audio.play3d(o?"crack":"whiz",n,s,a,{vol:.65,maxDist:10,reverb:.05})}e.brain&&e.brain.onNearMiss(t.shooter)}}terrainMat(t,e){let i=this.world.terrain,n=Math.round((t+i.half)/i.cell),s=Math.round((e+i.half)/i.cell),a=(zt(s,0,i.n-1)*i.n+zt(n,0,i.n-1))*4,o=i.splat;return o[a+2]>.5?"rock":this.world.def.biome==="arid"?o[a+3]>.5?"concrete":"sand":o[a]>.5?"grass":"dirt"}impactSound(t){switch(t){case"metal":case"container":return"impactMetal";case"wood":case"hay":return"impactWood";case"concrete":case"brick":case"stone":case"rock":case"plaster":return"impactHard";default:return"impactDirt"}}explode(t,e,i,n){let s=this.game.fx,a=n.radius||7,o=n.damage||120,l=this.world.terrain.normalAt(t,i),c=Math.abs(e-this.world.terrain.heightAt(t,i))<.8;s.explosion(t,e,i,n.scale||1,{ground:c,nx:l[0],ny:l[1],nz:l[2],fire:n.fire,dirt:this.world.def.biome==="arid"?[.6,.52,.38]:[.42,.36,.27]}),this.game.audio.explosion(t,e,i);for(let h of this.game.soldiers){if(h.state==="dead")continue;let u=h.center(Ir),d=Math.hypot(u.x-t,u.y-e,u.z-i);if(n.directional){let f=u.x-t,p=u.z-i,v=Math.hypot(f,p)||1;if(f/v*n.dx+p/v*n.dz<.35)continue}if(d<a){let f=o*Math.pow(1-d/a,1.1);this.world.collision.los(t,e+.3,i,u.x,u.y,u.z)||(f*=.25),h.takeDamage(f,n.attacker,"body",n.weapon,nf.set(u.x-t,u.y-e,u.z-i).normalize().clone(),!0),n.attacker&&n.attacker!==h&&h.team!==n.attacker.team&&this.game.onHit(n.attacker,h,f,"body",!0)}d<a*3&&h.state==="alive"&&(h.suppression=Math.min(1,h.suppression+(1-d/(a*3))*.8)),h.brain&&d<80&&h.brain.onSound(t,i,n.attacker,!0)}n.power&&this.world.structures.explode(t,e,i,a*(n.structRadiusMul||.8),n.power,s);for(let h of this.placed)(h.type==="c4"||h.type==="claymore")&&!h.dead&&Math.hypot(h.x-t,h.y-e,h.z-i)<2.5&&(h.dead=!0,setTimeout(()=>this.detonatePlaced(h),80))}spawnProjectile(t,e,i,n,s={}){let a=Mr(t==="launcher"?"frag":t==="rocket"?"rpg":t),o=new $t(t==="rocket"?new Fn(.05,.4,6).rotateX(-Math.PI/2):a,yn("weapon"));t==="rocket"&&(o.material=new ve({color:5925450})),o.castShadow=!0,this.game.scene.add(o);let l=Object.assign({type:t,owner:e,team:e.team,x:i.x,y:i.y,z:i.z,vx:n.x,vy:n.y,vz:n.z,t:0,mesh:o,bounces:0,rest:!1},s);return l.fuse={frag:3.2,smoke:1.4,flash:1.6,impact:8,launcher:8,rocket:5,c4:30}[t]??3,this.projectiles.push(l),l}throwGrenade(t,e,i){let n=t.eye(new C),s=t.aimDir(new C),a=n.clone().addScaledVector(s,.5).add(t.right(new C).multiplyScalar(.15)),o=i||s.clone().multiplyScalar(e==="c4"?9:17).add(new C(0,2.2,0)).add(new C(t.vel.x*.5,0,t.vel.z*.5));this.spawnProjectile(e,t,a,o),this.game.audio.play3d("throw",a.x,a.y,a.z,{vol:.5,maxDist:25}),e!=="c4"&&this.game.onGrenadeThrown(t,e)}updateProjectiles(t){let e=this.world.collision,i=this.game.fx;for(let n=this.projectiles.length-1;n>=0;n--){let s=this.projectiles[n];s.t+=t;let a=s.t>=s.fuse;if(!s.rest&&!a){let o=s.type==="rocket"?2.5:s.type==="launcher"?9.81:15;s.vy-=o*t;let l=s.vx*t,c=s.vy*t,h=s.vz*t,u=Math.hypot(l,c,h);if(u>1e-5){let d=l/u,f=c/u,p=h/u,v=e.raycast(s.x,s.y,s.z,d,f,p,u+.05,{skipInside:!0});if(s.type==="rocket"||s.type==="launcher"||s.type==="impact")for(let g of this.game.soldiers){if(g.state==="dead"||g===s.owner||g.team===s.team)continue;let m=g.hitSpheres();for(let y of m){let x=uh(s.x,s.y,s.z,l,c,h,y[0],y[1],y[2],y[3]+.1);x>=0&&(!v||x*u<v.t)&&(v={t:x*u,x:s.x+l*x,y:s.y+c*x,z:s.z+h*x,nx:-d,ny:-f,nz:-p,soldier:g})}}if(v)if(s.x=v.x+v.nx*.05,s.y=v.y+v.ny*.05,s.z=v.z+v.nz*.05,s.type==="rocket"||s.type==="impact"||s.type==="launcher"&&s.t>.12)a=!0;else if(s.type==="c4"){s.rest=!0,s.stuck=!0,s.vx=s.vy=s.vz=0,this.convertToPlaced(s,v),n=Math.min(n,this.projectiles.length);continue}else{let g=s.vx*v.nx+s.vy*v.ny+s.vz*v.nz;s.vx-=1.6*g*v.nx,s.vy-=1.6*g*v.ny,s.vz-=1.6*g*v.nz,s.vx*=.45,s.vy*=.45,s.vz*=.45,Math.abs(g)>2&&s.bounces++<8&&this.game.audio.play3d("bounce",s.x,s.y,s.z,{vol:.35,maxDist:30}),Math.hypot(s.vx,s.vy,s.vz)<.6&&v.ny>.5&&(s.rest=!0,s.vx=s.vy=s.vz=0)}else s.x+=l,s.y+=c,s.z+=h}s.type==="rocket"&&(i.smoke.emit(s.x,s.y,s.z,W(-.3,.3),W(0,.4),W(-.3,.3),1.6,.25,1.4,[.8,.8,.8,.5],[.7,.7,.7,0],1,-.2,1),i.glow.emit(s.x,s.y,s.z,0,0,0,.06,.5,.2,[1,.7,.3,1],[1,.4,.1,0],0,0))}s.mesh&&(s.mesh.position.set(s.x,s.y,s.z),s.type==="rocket"?s.mesh.lookAt(s.x+s.vx,s.y+s.vy,s.z+s.vz):s.rest||(s.mesh.rotation.x+=t*8)),a&&(this.projectiles.splice(n,1),s.mesh&&this.game.scene.remove(s.mesh),this.detonateProjectile(s))}}detonateProjectile(t){switch(t.type){case"frag":this.explode(t.x,t.y+.15,t.z,{radius:8,damage:160,power:160,attacker:t.owner,weapon:"Frag grenade",scale:.9});break;case"impact":this.explode(t.x,t.y+.1,t.z,{radius:5.5,damage:120,power:110,attacker:t.owner,weapon:"Impact grenade",scale:.7});break;case"launcher":this.explode(t.x,t.y+.1,t.z,{radius:6,damage:140,power:260,attacker:t.owner,weapon:"M320",scale:.85});break;case"rocket":this.explode(t.x,t.y,t.z,{radius:6.5,damage:210,power:900,structRadiusMul:.75,attacker:t.owner,weapon:"RPG-7",scale:1.3,fire:5});break;case"smoke":this.game.fx.addSmokeScreen(t.x,t.y,t.z,18),this.game.audio.play3d("pin",t.x,t.y,t.z,{vol:.5,maxDist:30});break;case"flash":this.flashbang(t);break}}flashbang(t){let e=this.game.fx;e.flashLight(t.x,t.y+.5,t.z,16777215,120,25,.25),e.flashes.emit(t.x,t.y+.3,t.z,0,0,0,.15,2,5,[1,1,1,1],[1,1,1,0],0,0),this.game.audio.play3d("explosion",t.x,t.y,t.z,{vol:.6,maxDist:150,rate:1.6});for(let i of this.game.soldiers){if(i.state!=="alive")continue;let n=i.eye(Ir),s=Math.hypot(n.x-t.x,n.y-t.y,n.z-t.z);if(s>18||!this.world.collision.los(t.x,t.y+.3,t.z,n.x,n.y,n.z))continue;let a=i.aimDir(nf),o=sf.set(t.x-n.x,t.y-n.y,t.z-n.z).normalize(),l=(a.dot(o)+1)/2;i.flashed=Math.min(1,i.flashed+(1-s/18)*(.4+l*.8))}}convertToPlaced(t,e){t.mesh&&this.game.scene.remove(t.mesh);let i=this.projectiles.indexOf(t);i>=0&&this.projectiles.splice(i,1),this.place("c4",t.owner,t.x,t.y,t.z,0)}place(t,e,i,n,s,a){if(t==="beacon"||t==="rally")for(let h of this.placed)h.type===t&&h.owner===e&&!h.dead&&this.removePlaced(h);let o=Mr(t==="sandbags"?"sandbags":t),l=new $t(o,yn("weapon"));l.position.set(i,n+(t==="ammobox"?.07:t==="claymore"?.09:.06),s),l.rotation.y=a,(t==="ammobox"||t==="beacon"||t==="rally")&&l.scale.setScalar(2.2),l.castShadow=!0,this.game.scene.add(l);let c={type:t,owner:e,team:e.team,squad:e.squad,x:i,y:n,z:s,yaw:a,mesh:l,t:0,dead:!1,dx:-Math.sin(a),dz:-Math.cos(a),tick:0};return this.placed.push(c),t==="c4"&&(e.c4s=e.c4s||[],e.c4s.push(c)),(t==="rally"||t==="beacon")&&this.game.onSpawnPointPlaced(c),c}removePlaced(t){t.dead=!0,t.mesh&&this.game.scene.remove(t.mesh);let e=this.placed.indexOf(t);if(e>=0&&this.placed.splice(e,1),t.type==="c4"&&t.owner.c4s){let i=t.owner.c4s.indexOf(t);i>=0&&t.owner.c4s.splice(i,1)}}detonatePlaced(t){this.removePlaced(t),t.type==="c4"?this.explode(t.x,t.y+.1,t.z,{radius:7.5,damage:240,power:1500,structRadiusMul:.7,attacker:t.owner,weapon:"C4",scale:1.4,fire:4}):t.type==="claymore"&&this.explode(t.x,t.y+.5,t.z,{radius:7,damage:180,power:60,attacker:t.owner,weapon:"Claymore",scale:.7,directional:!0,dx:t.dx,dz:t.dz})}detonateC4(t){if(!t.c4s||!t.c4s.length)return!1;let e=t.c4s.slice();return this.game.audio.play3d("beep",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.6,maxDist:20}),e.forEach((i,n)=>setTimeout(()=>{i.dead||this.detonatePlaced(i)},150+n*90)),!0}updatePlaced(t){let e=this.game.time;for(let i=this.placed.length-1;i>=0;i--){let n=this.placed[i];if(n.t+=t,!n.dead)if(n.type==="claymore"&&n.t>1.5)for(let s of this.game.soldiers){if(s.state!=="alive"||s.team===n.team)continue;let a=s.pos.x-n.x,o=s.pos.z-n.z,l=s.pos.y-n.y,c=Math.hypot(a,o);if(!(c>3.6||Math.abs(l)>2||s.stance==="prone"&&Math.hypot(s.vel.x,s.vel.z)<.8)&&!(a/c*n.dx+o/c*n.dz<.3)){this.detonatePlaced(n);break}}else if(n.type==="ammobox"){if(n.tick+=t,n.tick>1.5){n.tick=0;for(let s of this.game.soldiers)s.state!=="alive"||s.team!==n.team||Math.hypot(s.pos.x-n.x,s.pos.z-n.z)>4||Math.abs(s.pos.y-n.y)>2.5||this.resupply(s,1)&&n.owner!==s&&n.owner.state!=="dead"&&this.game.addScore(n.owner,10,"RESUPPLY")}}else n.type==="rally"&&(n.blocked=this.game.soldiers.some(s=>s.state==="alive"&&s.team!==n.team&&Math.hypot(s.pos.x-n.x,s.pos.z-n.z)<18),n.t>300&&this.removePlaced(n))}}resupply(t,e){let i=!1;for(let n=0;n<2;n++){let s=t.slots[n];s&&s.reserve<s.stats.mag*s.stats.mags&&(s.reserve=Math.min(s.stats.mag*s.stats.mags,s.reserve+Math.ceil(s.stats.mag*.5*e)),i=!0)}if(t.resupplyAcc=(t.resupplyAcc||0)+e,t.resupplyAcc>=4){t.resupplyAcc=0;for(let n=2;n<5;n++){let s=t.slots[n];if(!s||s.def.count===1/0)continue;let a=n===4?t.loadout.cls==="assault"?3:2:s.def.count;s.count<a&&!["beacon","rally","ammobox"].includes(s.id)&&(s.count++,i=!0)}t.bandages<4&&(t.bandages++,i=!0)}return i}useGadget(t,e,i){let n=t.weapon;if(!n||n.kind!=="gadget"||t.state!=="alive"||t.switchT>0||t.actionT>0)return;let s=n.def.kind;if(s==="throw")e&&n.count>0&&(n.count--,t.startAction("throw",.42,{type:n.id}),this.game.audio.play3d("pin",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.4,maxDist:15}));else if(s==="launcher"||s==="rpg"){if(e&&n.count>0&&n.loaded){n.count--,n.loaded=!1;let a=t.eye(new C),o=t.aimDir(new C),l=s==="rpg"?t.adsT>.5?.6:3:t.adsT>.5?.5:2.5;o.x+=(Math.random()-.5)*l*Dr,o.y+=(Math.random()-.5)*l*Dr,o.normalize();let c=o.clone().multiplyScalar(s==="rpg"?115:72);this.spawnProjectile(s==="rpg"?"rocket":"launcher",t,a.clone().addScaledVector(o,.8),c),this.game.audio.play3d(s==="rpg"?"rocket":"shotgun",a.x,a.y,a.z,{vol:.9,maxDist:250}),t.pitch+=(s==="rpg"?3:2)*Dr,this.game.onGadgetFired(t,s),n.count>0&&t.startAction("reloadGadget",s==="rpg"?3.4:2.2,{slot:t.active})}}else if(s==="medkit")e&&t.medkitCd<=0&&(t.hp<100||t.bleed>0)&&t.startAction("medkitSelf",1.1);else if(s==="c4")i?this.detonateC4(t):e&&n.count>0&&(n.count--,t.startAction("throwC4",.4));else if(s==="place"){if(e&&(n.count>0||n.id==="beacon"||n.id==="rally")){let a=this.placementSpot(t);a?(n.id!=="beacon"&&n.id!=="rally"&&n.count--,t.startAction("place",.6,{gid:n.id,spot:a})):t.isPlayer&&this.game.hud&&this.game.hud.toast("Cannot place here")}}else s==="binoculars"&&e&&this.spot(t,t.adsT>.5?12:6,t.adsT>.5?2.2:5)}placementSpot(t){let e=this.world.collision,i=t.forward(new C),n=t.pos.x+i.x*1.4,s=t.pos.z+i.z*1.4,a=e.raycast(n,t.pos.y+1.4,s,0,-1,0,3,{});return!a||a.ny<.6||Math.abs(a.y-t.pos.y)>1.2||!e.los(t.pos.x,t.pos.y+1,t.pos.z,n,a.y+.5,s)?null:{x:n,y:a.y,z:s,yaw:t.yaw}}finishAction(t,e){switch(e.name){case"throw":if(this.throwGrenade(t,e.data.type,t.throwVel||null),t.throwVel=null,t.weapon.kind==="gadget"&&t.weapon.count<=0&&t.switchTo(t.quickReturn??0),t.quickReturn!==void 0&&t.quickReturn!==null){let i=t.quickReturn;t.quickReturn=null,t.switchTo(i)}break;case"throwC4":this.throwGrenade(t,"c4",t.throwVel||null),t.throwVel=null;break;case"bandage":t.bandages--,t.bleed=0,t.healT+=15;break;case"medkitSelf":t.bleed=0,t.healT+=50,t.medkitCd=5;break;case"medkitOther":e.data.target.state==="alive"&&(e.data.target.bleed=0,e.data.target.healT+=60,this.game.addScore(t,20,"HEAL"),t.stats.heals++),t.medkitCd=2.5;break;case"reloadGadget":{let i=t.slots[e.data.slot];i&&(i.loaded=!0);break}case"place":{let{gid:i,spot:n}=e.data;i==="sandbags"?this.world.structures.addSandbag(n.x,n.y,n.z,t.yaw):this.place(i,t,n.x,n.y,n.z,t.yaw),this.game.audio.play3d("switch",n.x,n.y,n.z,{vol:.6,maxDist:20});let s=t.slots.find(a=>a&&a.id===i);s&&s.count<=0&&i!=="beacon"&&i!=="rally"&&t.active>=2&&t.switchTo(0);break}}}spot(t,e=6,i=5){let n=t.eye(new C),s=t.aimDir(new C),a=0;for(let o of this.game.soldiers){if(o.team===t.team||o.state==="dead")continue;let l=o.center(Ir),c=sf.set(l.x-n.x,l.y-n.y,l.z-n.z),h=c.length();h>450||(c.divideScalar(h),Math.acos(zt(c.dot(s),-1,1))/Dr>Math.max(i,60/Math.max(h,1)))||this.world.collision.los(n.x,n.y,n.z,l.x,l.y,l.z)&&(o.spotUntil=this.game.time+e,a++)}return a&&(this.game.audio.play2d("beep",{vol:t.isPlayer?.3:0}),t.isPlayer&&this.game.addScore(t,0,a>1?`SPOTTED ${a}`:"SPOTTED")),a}update(t){this.updateBullets(t),this.updateProjectiles(t),this.updatePlaced(t)}clear(){for(let t of this.projectiles)t.mesh&&this.game.scene.remove(t.mesh);for(let t of this.placed)t.mesh&&this.game.scene.remove(t.mesh);this.bullets=[],this.projectiles=[],this.placed=[]}static solveBallistic(t,e,i,n){let s=e.x-t.x,a=e.z-t.z,o=e.y-t.y,l=Math.hypot(s,a),c=i*i,h=c*c-n*(n*l*l+2*o*c);if(h<0)return null;let u=Math.atan2(c-Math.sqrt(h),n*l),d=Math.cos(u)*i,f=Math.sin(u)*i;return new C(s/l*d,f,a/l*d)}};var ay=[["ALPHA","BRAVO","CHARLIE","DELTA"],["ECHO","FOXTROT","GOLF","HOTEL"]],Da=class{constructor(t){this.game=t,this.list=[[],[]],this.evalT=[0,2],this.enemyHeat=[null,null]}build(t,e=4){for(let i=0;i<2;i++){this.list[i]=[];let n=t[i],s=Math.ceil(n.length/e);for(let a=0;a<s;a++){let o={id:a,team:i,name:ay[i][a]||`S${a}`,members:[],leader:null,order:null,orderT:0};this.list[i].push(o)}n.forEach((a,o)=>{let l=this.list[i][Math.floor(o/e)];l.members.push(a),a.squad=l});for(let a of this.list[i])this.pickLeader(a)}}pickLeader(t){let e=t.members.find(i=>i.isPlayer&&i.loadout&&i.loadout.cls==="leader");t.leader=e||t.members.find(i=>i.loadout&&i.loadout.cls==="leader")||t.members.find(i=>!i.isPlayer)||t.members[0]}playerIsLeader(t){return t.leader&&t.leader.isPlayer}objectiveFor(t){let e=t.squad,i=e&&e.order;if(!i){let o=this.game.world.def.hq[1-t.team];return{x:o.x*.3,z:o.z*.3,r:30,hold:!1}}if(i.type==="follow"){let o=e.leader;if(o&&o.state==="alive"){let c=e.members.indexOf(t)*1.9+.7;return{x:o.pos.x+Math.cos(c)*5,z:o.pos.z+Math.sin(c)*5,r:6,hold:!1}}}let s=e.members.indexOf(t)*1.7+e.id,a=i.flag?i.flag.r*.35:4;return{x:i.x+Math.cos(s)*a,z:i.z+Math.sin(s)*a,r:i.flag?i.flag.r:15,hold:i.type!=="move",cx:i.x,cz:i.z,type:i.type}}orderType(t){return t.squad&&t.squad.order?t.squad.order.type:"attack"}threatPoint(t,e){let i=this.enemyHeat[t];if(i&&this.game.time-i.t<20)return i;let n=this.game.mode,s=null,a=1e9;for(let l of n.flags){if(l.owner!==1-t)continue;let c=Math.hypot(l.x-e.x,l.z-e.z);c<a&&c>5&&(a=c,s=l)}if(s)return{x:s.x,y:s.y,z:s.z};let o=this.game.world.def.hq[1-t];return{x:o.x,y:this.game.world.terrain.heightAt(o.x,o.z),z:o.z}}setOrder(t,e,i,n,s){t.order={type:e,flag:i||null,x:i?i.x:n,z:i?i.z:s,t:this.game.time};for(let a of t.members)a.brain&&(a.brain.holdSpot=null,a.brain.path=null)}update(t){let e=this.game;for(let i=0;i<2;i++){let n=0,s=0,a=0;for(let o of e.teams[i])if(!(!o.brain||o.state!=="alive"))for(let[,l]of o.brain.known)e.time-l.t<5&&(n+=l.x,s+=l.z,a++);a>0&&(this.enemyHeat[i]={x:n/a,y:e.world.terrain.heightAt(n/a,s/a),z:s/a,t:e.time}),this.evalT[i]-=t,!(this.evalT[i]>0)&&(this.evalT[i]=5,this.assign(i))}}assign(t){let e=this.game,i=e.mode,n=this.list[t].filter(p=>!this.playerIsLeader(p));if(i.type==="tdm"){let p=this.enemyHeat[t],v=e.world.def.flags;for(let g of n){if(g.order&&e.time-g.order.t<25&&Math.random()<.7)continue;let m;if(p&&Math.random()<.6){let y=null,x=1e9;for(let _ of v){let A=Math.hypot(_.x-p.x,_.z-p.z)+W(0,60);A<x&&(x=A,y=_)}m=y}else m=v[Math.floor(Math.random()*v.length)];this.setOrder(g,"attack",null,m.x+W(-15,15),m.z+W(-15,15)),g.order.flag={x:g.order.x,z:g.order.z,r:22}}return}let s=i.flags,a=new Map;for(let p of this.list[t])p.order&&p.order.flag&&this.playerIsLeader(p)&&a.set(p.order.flag,(a.get(p.order.flag)||0)+1);let o=[0,0];for(let p of s)p.owner>=0&&o[p.owner]++;let l=o[t]<o[1-t]||i.tickets[t]<i.tickets[1-t]-30,c=p=>p.counts[1-t]>0||p.capTeam===1-t||Math.abs(p.progress)<.85,h=(p,v)=>{let g=this.centroid(p),m=null,y=-1e9;for(let x of s){let _;if(x.owner===t){if(c(x))_=1.45;else if(v)_=.1;else continue;if(i.type==="frontline"){let w=s.some(P=>P.owner!==t&&Math.abs(P.index-x.index)===1);_+=w?.35:-.4}}else if(i.capturable(x,t))_=(x.owner===-1?1.2:1)+(l?.25:0);else continue;let A=g?Math.hypot(g.x-x.x,g.z-x.z):300;_-=A/1400;let S=a.get(x)||0;_-=S*(x.owner===t&&!c(x)?1.2:.45),p.order&&p.order.flag===x&&(_+=.25),_+=W(0,.12),_>y&&(y=_,m=x)}return m},u=0,d=[];for(let p of n){let v=h(p,!0);v&&(a.set(v,(a.get(v)||0)+1),d.push([p,v]),v.owner!==t&&u++)}let f=Math.min(n.length,l?3:2);for(let p of d){if(u>=f)break;let[v,g]=p;if(g.owner===t&&!c(g)){let m=h(v,!1);m&&m.owner!==t&&(a.set(g,a.get(g)-1),a.set(m,(a.get(m)||0)+1),p[1]=m,u++)}}for(let[p,v]of d)!p.order||p.order.flag!==v?this.setOrder(p,v.owner===t?"defend":"attack",v):p.order.type=v.owner===t?"defend":"attack",p.order.ownedByUs=v.owner===t}centroid(t){let e=0,i=0,n=0;for(let s of t.members)s.state==="alive"&&(e+=s.pos.x,i+=s.pos.z,n++);return n?{x:e/n,z:i/n}:null}};var Ia={stand:{h:1.8,eye:1.62,speed:4.3},crouch:{h:1.25,eye:1.12,speed:2.5},prone:{h:.62,eye:.42,speed:1}},ly=6.7,cy=20,hy=1,La=class{constructor(t,e,i,n=!1){this.game=t,this.id=hy++,this.team=e,this.name=i,this.isPlayer=n,this.squad=null,this.pos=new C,this.vel=new C,this.yaw=0,this.pitch=0,this.lean=0,this.leanTarget=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.move={grounded:!0,hitWall:!1},this.input={mx:0,mz:0,sprint:!1,jump:!1,crouch:!1,prone:!1,fire:!1,ads:!1,lean:0},this.state="dead",this.hp=100,this.bleed=0,this.downedHp=100,this.downedTime=0,this.lastDamage=-99,this.lastAttacker=null,this.damagers=new Map,this.stats={kills:0,deaths:0,assists:0,revives:0,score:0,caps:0,heals:0},this.slots=[],this.active=0,this.prevActive=0,this.fireCd=0,this.reloadT=0,this.switchT=0,this.actionT=0,this.action=null,this.adsT=0,this.bloom=0,this.triggerHeld=!1,this.burst=0,this.boltT=0,this.recoilPitch=0,this.recoilYaw=0,this.spotUntil=0,this.lastShotTime=-99,this.lastLoudShot=-99,this.walkPhase=0,this.vault=null,this.swimming=!1,this.inWater=!1,this.fallVel=0,this.spawnProtect=0,this.reviveTarget=null,this.reviveProgress=0,this.suppression=0,this.flashed=0,this.flashlightOn=!1,this.rig=null,this.deathPose=0,this.deathDir=1,this.deadTime=0,this.stepAcc=0,this.healT=0,this.bandages=4,this.medkitCd=0}get alive(){return this.state==="alive"}get downed(){return this.state==="downed"}get cls(){return this.loadout?this.loadout.cls:"assault"}get isMedic(){return this.cls==="medic"}ensureRig(){let t=this.id*7;this.rig&&this.rigCls===this.cls||(this.rig&&this.game.scene.remove(this.rig.root),this.rig=Hd(this.team,this.cls,t),this.rigCls=this.cls,this.rig.root.visible=!this.isPlayer,this.game.scene.add(this.rig.root))}setLoadout(t){this.loadout=t;let e=(s,a)=>{let o=Ad(s,a);return{kind:"gun",id:s,att:a,stats:o,mag:o.mag,reserve:o.mag*o.mags,mode:0,model:Bd(s,a)}},i=oi[t.cls],n=s=>({kind:"gadget",id:s,def:Ki[s],count:Ki[s].count,loaded:!0,model:Mr(s)});this.slots=[e(t.primary,t.att),e(t.secondary,t.satt),n(i.gadgets[0]),n(i.gadgets[1]),Object.assign(n(t.throwable),{count:i.throwables})],this.bandages=4,this.heavy=t.armor==="heavy",this.ensureRig()}get weapon(){return this.slots[this.active]}get gun(){let t=this.slots[this.active];return t&&t.kind==="gun"?t:null}spawn(t,e,i,n){this.pos.set(t,e,i),this.vel.set(0,0,0),this.yaw=n,this.pitch=0,this.lean=0,this.state="alive",this.hp=100,this.bleed=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.active=0,this.switchT=.4,this.reloadT=0,this.fireCd=0,this.action=null,this.actionT=0,this.adsT=0,this.bloom=0,this.recoilPitch=0,this.recoilYaw=0,this.vault=null,this.damagers.clear(),this.lastAttacker=null,this.lastDamage=-99,this.spawnProtect=2.5,this.suppression=0,this.flashed=0,this.deathPose=0,this.reviveProgress=0,this.swimming=!1,this.move.grounded=!0,this.ensureRig(),this.rig.root.visible=!this.isPlayer,this.syncWeaponModel(),this.spawnTime=this.game.time}syncWeaponModel(){let t=this.weapon;!this.rig||!t||Vd(this.rig,t.kind==="gun"?t.model.geo:t.model)}eye(t=new C){let e=this.right();return t.set(this.pos.x+e.x*this.lean*.42,this.pos.y+this.eyeH-Math.abs(this.lean)*.08,this.pos.z+e.z*this.lean*.42),t}forward(t=new C){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(t=new C){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}aimDir(t=new C){let e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}center(t=new C){return t.set(this.pos.x,this.pos.y+this.bodyH*.6,this.pos.z)}headPos(t=new C){let e=this.hitSpheres();return t.set(e[0][0],e[0][1],e[0][2])}hitSpheres(){let t=this.pos,e=this.forward(Ch),i=this.right(rf),n=this.lean*.35,s=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),a=(o,l,c,h,u)=>{s[o][0]=t.x+e.x*l+i.x*h,s[o][1]=t.y+c,s[o][2]=t.z+e.z*l+i.z*h,s[o][3]=u};if(this.state==="downed"||this.state==="dead"||this.stance==="prone"){let o=this.state==="alive"?1:-1;a(0,.78*o,.28,0,.14),a(1,.42*o,.24,0,.22),a(2,.05*o,.22,0,.21),a(3,-.4*o,.15,-.12,.13),a(4,-.4*o,.15,.12,.13),a(5,-.8*o,.13,-.12,.12),a(6,-.8*o,.13,.12,.12)}else this.stance==="crouch"?(a(0,.04,1.22,n*1.2,.14),a(1,.02,.96,n,.24),a(2,0,.72,n*.5,.22),a(3,-.15,.48,-.12,.14),a(4,.15,.48,.12,.14),a(5,-.25,.2,-.12,.13),a(6,.25,.2,.12,.13)):(a(0,.02,1.66,n*1.2,.14),a(1,0,1.36,n,.24),a(2,0,1.06,n*.5,.22),a(3,0,.72,-.1,.14),a(4,0,.72,.1,.14),a(5,0,.3,-.1,.13),a(6,0,.3,.1,.13));return s}setStance(t){if(t===this.stance)return!0;let e=Ia[t].h;return e>this.bodyH+.01&&this.game.world.collision.overlapsAny(this.pos.x,this.pos.y+.05,this.pos.z,.28,e-.05)?!1:(this.stance=t,this.bodyH=e,!0)}speedTarget(){if(this.swimming)return 2.2;let t=Ia[this.stance].speed,e=this.gun,i=e?e.stats.moveMul:1.02;return this.sprinting?t=ly:this.adsT>.5&&(t=Math.min(t,this.stance==="stand"?2.7:t*.8)),this.heavy&&(t*=.94),this.bleed>0&&this.hp<30&&(t*=.85),t*i}updateMovement(t){let e=this.game.world.collision,i=this.input;if(this.vault){this.updateVault(t);return}i.prone&&this.stance!=="prone"?this.setStance("prone")&&(i.prone=!1):i.crouch&&this.stance==="stand"?this.setStance("crouch"):!i.crouch&&!i.proneHold&&this.stance==="crouch"&&!(this.slideT>0)&&this.setStance("stand");let n=Math.abs(i.mx)+Math.abs(i.mz)>.05;if(this.sprinting=i.sprint&&n&&i.mz<-.3&&this.stance!=="prone"&&!this.swimming&&this.adsT<.3&&this.actionT<=0,this.sprinting&&this.stance==="crouch"&&this.setStance("stand"),this.sprinting&&this.reloadT>0&&!this.isPlayer&&(this.sprinting=!1),i.slide&&(i.slide=!1,this.wasSprinting&&this.move.grounded&&!this.swimming)){let A=Math.hypot(this.vel.x,this.vel.z)||1,S=Math.max(A,8.4)/A;this.vel.x*=S,this.vel.z*=S,this.slideT=.85,this.stance="crouch",this.bodyH=Ia.crouch.h,this.game.onVault(this)}this.wasSprinting=this.sprinting;let s=this.slideT>0;s&&(this.slideT-=t,this.sprinting=!1,(Math.hypot(this.vel.x,this.vel.z)<2.6||!this.move.grounded)&&(this.slideT=0));let a=this.forward(Ch),o=this.right(rf),l=a.x*-i.mz+o.x*i.mx,c=a.z*-i.mz+o.z*i.mx,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let u=this.speedTarget();i.mz>.3&&!this.swimming&&(u*=.8);let d=l*u,f=c*u,p=this.move.grounded||this.swimming?n?38:26:5;if(s){let A=Math.max(0,1-1.4*t);this.vel.x=this.vel.x*A+d*.6*t,this.vel.z=this.vel.z*A+f*.6*t}else this.vel.x+=(d-this.vel.x)*Math.min(1,p*t/4),this.vel.z+=(f-this.vel.z)*Math.min(1,p*t/4);let v=this.game.world.terrain.waterLevel,g=this.game.world.terrain.heightAt(this.pos.x,this.pos.z);this.inWater=v!==null&&this.pos.y<v-.2;let m=v!==null&&g<v-1.25&&this.pos.y<v-1.1;if(m&&!this.swimming&&(this.swimming=!0,this.setStance("stand")),this.swimming&&(!m||g>v-1.2)&&(this.swimming=!1),this.swimming){let A=v-1.35;this.vel.y+=(A-this.pos.y)*6*t-this.vel.y*3*t,i.jump&&this.pos.y>A-.3&&this.tryVault(!0)}else this.vel.y-=cy*t,i.jump&&(i.jump=!1,!this.tryVault(!1)&&this.move.grounded&&(this.stance!=="stand"?this.setStance("stand"):(this.vel.y=5.4,this.move.grounded=!1)));let y=this.vel.y,x=this.move.grounded;e.move(this.pos,this.vel,t,.3,this.bodyH,this.move.grounded?.48:.1,this.move),this.move.grounded&&!x&&y<-12.5&&!this.swimming&&this.takeDamage((-y-12.5)*9,null,"fall","Fall",null,!1);let _=Math.hypot(this.vel.x,this.vel.z);if(this.move.grounded&&_>.5){this.walkPhase+=_*t*(this.sprinting?1.7:2.1),this.stepAcc+=_*t;let A=this.sprinting?1.9:1.5;this.stepAcc>A&&(this.stepAcc=0,this.game.onFootstep(this,this.sprinting?1:this.stance==="stand"?.6:.3))}}tryVault(t){if(this.stance==="prone"||this.state!=="alive")return!1;let e=this.game.world.collision,i=this.forward(Ch),n=this.pos.y,s=!1;for(let a of[.6,1,1.4]){let o=e.raycast(this.pos.x,n+a,this.pos.z,i.x,0,i.z,.9,{terrain:!0});if(o&&o.t<.85){s=!0;break}}if(!s)return!1;for(let a of[.55,.8,1.05]){let o=this.pos.x+i.x*a,l=this.pos.z+i.z*a,c=e.raycast(o,n+2.5,l,0,-1,0,2.5,{});if(!c)continue;let h=c.y-n;if(h<.45||h>(t?2.6:2.25))continue;if(e.overlapsAny(o,c.y+.05,l,.28,1.2)){let p=this.pos.x+i.x*1.6,v=this.pos.z+i.z*1.6;if(h<1.3&&!e.overlapsAny(p,n+.05,v,.28,1.2))return this.startVault(p,e.groundAt(p,v,n+1.5),v,.55,c.y),!0;continue}let u=this.pos.x+i.x*1.7,d=this.pos.z+i.z*1.7,f=e.raycast(u,n+2.5,d,0,-1,0,3.5,{});return h<1.3&&f&&f.y<c.y-.4&&!e.overlapsAny(u,f.y+.05,d,.28,1.6)?this.startVault(u,f.y,d,.5,c.y):this.startVault(o,c.y,l,h>1.3?.75:.42,c.y),!0}return!1}startVault(t,e,i,n,s){this.vault={sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,x:t,y:e,z:i,t:0,dur:n,apex:Math.max(s,e)+.25},this.vel.set(0,0,0),this.swimming=!1,this.stance!=="stand"&&this.setStance("stand"),this.game.onVault(this)}updateVault(t){let e=this.vault;e.t+=t/e.dur;let i=Math.min(1,e.t),n=Math.min(1,i/.55);this.pos.x=Qt(e.sx,e.x,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.z=Qt(e.sz,e.z,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.y=i<.55?Qt(e.sy,e.apex,Math.sin(n*Math.PI/2)):Qt(e.apex,e.y,(i-.55)/.45),i>=1&&(this.pos.set(e.x,e.y,e.z),this.vault=null,this.move.grounded=!0)}spread(){let t=this.gun;if(!t)return 2;let e=t.stats,i=e.spreadHip*e.hipMul,n=Qt(i,e.spreadAds,this.adsT),s=Math.hypot(this.vel.x,this.vel.z);return n*=1+Math.min(1.5,s/4.3)*(this.adsT>.5?.6:.9),this.stance==="crouch"?n*=.8:this.stance==="prone"&&(n*=.6),this.move.grounded||(n*=2.5),n+=this.bloom*(this.adsT>.5?.35:1),e.type==="sniper"&&this.adsT>.95&&(n=0),n}recoilFactor(){let t=1;this.stance==="crouch"&&(t*=.82),this.stance==="prone"&&(t*=.65);let e=this.gun;return e&&e.stats.bipod&&(this.stance==="prone"||this.stance==="crouch")&&(t*=.45),this.adsT<.5&&(t*=1.15),t}canFire(){return this.state==="alive"&&this.switchT<=0&&this.reloadT<=0&&this.actionT<=0&&!this.sprinting&&!this.vault&&!this.swimming&&this.boltT<=0}updateWeapon(t,e){if(this.fireCd-=t,this.boltT-=t,this.switchT>0&&(this.switchT-=t),this.medkitCd>0&&(this.medkitCd-=t),this.actionT>0&&(this.actionT-=t,this.actionT<=0&&this.finishAction()),this.reloadT>0){this.reloadT-=t;let g=this.gun;if(g&&g.stats.shellReload&&this.reloadT<=0)g.reserve>0&&g.mag<g.stats.mag&&(g.mag++,g.reserve--,this.game.onReloadSound(this,"magIn")),g.mag<g.stats.mag&&g.reserve>0&&!this.input.fire&&(this.reloadT=g.stats.reload);else if(g&&this.reloadT<=0){let m=g.stats.mag-g.mag,y=Math.min(m,g.reserve);g.mag+=y,g.reserve-=y,this.game.onReloadSound(this,"magIn")}}this.bloom=Math.max(0,this.bloom-t*6);let i=this.gun,n=this.input.ads&&this.state==="alive"&&!this.sprinting&&this.switchT<=0&&!this.swimming&&!this.vault&&(i||this.weapon&&this.weapon.id==="binoculars"),s=i?1/(i.stats.adsTime*i.stats.adsMul):6;this.adsT=zt(this.adsT+(n?s:-s*1.4)*t,0,1);let a=Math.min(1,t*7),o=this.recoilPitch*a,l=this.recoilYaw*a;if(this.recoilPitch-=o,this.recoilYaw-=l,(!this.triggerHeld||this.fireCd<-.1)&&(this.pitch-=o*.55,this.yaw-=l*.4),!i)return this.triggerHeld=this.input.fire,!1;let c=i.stats,h=c.modes[i.mode]||"auto",u=this.input.fire&&!this.triggerHeld;if(this.triggerHeld=this.input.fire,this.input.fire&&i.stats.shellReload&&this.reloadT>0&&i.mag>0&&(this.reloadT=0),!this.input.fire)return this.burst=0,!1;if(!this.canFire()||h!=="auto"&&!u||this.fireCd>0)return!1;if(i.mag<=0)return u&&this.game.onDryFire(this),i.reserve>0&&this.reload(),!1;i.mag--,this.fireCd=c.interval,(c.bolt||c.pump)&&(this.boltT=c.interval*.9),this.burst++,this.lastShotTime=e,c.suppressed||(this.lastLoudShot=e);let d=c.pellets||1;for(let g=0;g<d;g++)this.game.combat.fireBullet(this,i,g);let f=this.recoilFactor(),p=c.recoilV*c.recoilVMul*f*(this.burst>1?1:1.25),v=(Math.random()-.5)*2*c.recoilH*c.recoilHMul*f;return this.pitch+=p*Math.PI/180,this.yaw-=v*Math.PI/180,this.recoilPitch+=p*Math.PI/180,this.recoilYaw-=v*Math.PI/180,this.bloom=Math.min(c.type==="lmg"?3:2.2,this.bloom+c.recoilV*.6),this.pitch=zt(this.pitch,-1.5,1.5),this.game.onShot(this,i),i.mag===0&&i.reserve>0&&!this.isPlayer&&this.reload(),!0}reload(){let t=this.gun;return!t||this.reloadT>0||t.mag>=t.stats.mag||t.reserve<=0||this.state!=="alive"||this.actionT>0?!1:(this.reloadT=t.stats.shellReload?t.stats.reload+.3:t.mag===0?t.stats.reloadEmpty:t.stats.reload,this.reloadTotal=this.reloadT,this.game.onReloadSound(this,"magOut"),!0)}switchTo(t){if(t===this.active||!this.slots[t]||this.state!=="alive")return;let e=this.slots[t];e.kind==="gadget"&&e.count<=0&&e.def.kind!=="medkit"&&e.def.kind!=="binoculars"&&!(e.def.kind==="c4"&&this.c4s&&this.c4s.length)||(this.prevActive=this.active,this.active=t,this.switchT=.45,this.reloadT=0,this.action=null,this.actionT=0,this.adsT=Math.min(this.adsT,.2),this.syncWeaponModel(),this.game.onSwitch(this))}cycleMode(){let t=this.gun;!t||t.stats.modes.length<2||(t.mode=(t.mode+1)%t.stats.modes.length)}startAction(t,e,i){return this.actionT>0||this.state!=="alive"?!1:(this.action={name:t,data:i},this.actionT=e,this.actionDur=e,this.reloadT=0,!0)}finishAction(){let t=this.action;this.action=null,!(!t||this.state!=="alive")&&this.game.combat.finishAction(this,t)}bandage(){return this.bandages<=0||this.bleed<=0&&this.hp>=100?!1:this.startAction("bandage",1.8)?(this.game.onBandage(this),!0):!1}takeDamage(t,e,i,n,s,a){if(this.state==="dead"||this.spawnProtect>0&&e&&e!==this||e&&e!==this&&e.team===this.team)return;let o=this.game.time;if(this.heavy&&i!=="head"&&(t*=.86),this.lastDamage=o,e&&e!==this&&(this.lastAttacker=e,this.damagers.set(e,(this.damagers.get(e)||0)+t),this.lastDamageDir=s?s.clone():null),this.state==="downed"){this.downedHp-=t*1.5,this.downedHp<=0&&this.die(e,n,i==="head",!0);return}if(this.hp-=t,t>=12&&i!=="fall"&&(this.bleed=Math.min(3.5,this.bleed+t*.012)),this.game.onDamaged(this,e,t,i,s),this.hp<=0){let l=-this.hp;l>70||i==="head"&&t>90||a&&l>40||this.swimming?this.die(e,n,i==="head",!1):this.goDown(e,n,i==="head")}}goDown(t,e,i){this.state="downed",this.hp=0,this.downedHp=100,this.downedTime=0,this.setStance("prone"),this.stance="prone",this.bodyH=.6,this.vel.x=this.vel.z=0,this.adsT=0,this.reloadT=0,this.action=null,this.actionT=0,this.vault=null,this.reviveProgress=0,this.game.onDowned(this,t,e,i)}die(t,e,i,n){if(this.state==="dead")return;let s=this.state==="downed";this.state="dead",this.deadTime=0,this.deathDir=Math.random()<.5?-1:1,this.stats.deaths++,this.game.onKilled(this,t||this.lastAttacker,e,i,s)}revive(t){this.state==="downed"&&(this.state="alive",this.hp=t&&t.isMedic?100:40,this.bleed=0,this.setStance("crouch"),this.spawnProtect=1.2,this.game.onRevived(this,t))}heal(t){this.hp=Math.min(100,this.hp+t)}updateVitals(t,e){this.spawnProtect>0&&(this.spawnProtect-=t,(this.input.fire||Math.hypot(this.vel.x,this.vel.z)>2)&&(this.spawnProtect=Math.min(this.spawnProtect,.5))),this.suppression=Math.max(0,this.suppression-t*.35),this.flashed=Math.max(0,this.flashed-t*.4),this.lean=Ei(this.lean,this.state==="alive"&&!this.sprinting?this.leanTarget:0,12,t);let i=this.state==="alive"?Ia[this.stance].eye:.35;if(this.eyeH=Ei(this.eyeH,i,10,t),this.state==="alive"){if(this.bleed>0?(this.hp-=this.bleed*t,this.hp<=0&&(this.hp=0,this.goDown(this.lastAttacker,"Bleeding",!1))):e-this.lastDamage>7&&this.hp<60&&(this.hp=Math.min(60,this.hp+4*t)),this.healT>0){let n=Math.min(this.healT,30*t);this.healT-=n,this.heal(n)}}else this.state==="downed"?(this.downedTime+=t,this.downedHp-=t*100/28,this.downedHp<=0&&this.die(this.lastAttacker,"Bled out",!1,!0)):this.state==="dead"&&(this.deadTime+=t)}updateAnim(t,e){let i=this.rig;if(!i)return;if(this.isPlayer){i.root.visible=!1;return}if(this.state==="dead"&&this.deadTime>25){i.root.visible=!1;return}i.root.visible=!0;let n=(this.pos.x-e.x)**2+(this.pos.z-e.z)**2;if(n>160*160&&(this.id+this.game.frame)%3!==0&&this.state==="alive"){i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;return}let a=n<90*90;a!==this._cs&&(this._cs=a,i.root.traverse(M=>{M.isMesh&&(M.castShadow=a)}));let o=Math.min(1,t*12);i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;let l=Math.hypot(this.vel.x,this.vel.z),c=Math.min(1,l/4),h=this.walkPhase,u=.95,d=0,f=this.pitch*.3,p=this.pitch*.7,v=-this.lean*.4,g=0,m=0,y=0,x=0,_=0,A=0,S=0,w=0,P=0;if(this.state==="downed")u=.22,d=1.45,f=-.2,p=-1.2,g=-.2,m=.15,y=.4,x=.2,w=-.6,v=Math.sin(this.downedTime*3)*.05;else if(this.state==="dead"){this.deathPose=Math.min(1,this.deathPose+t*2.6);let M=this.deathPose;u=Qt(.95,.18,M),d=Qt(0,1.5*this.deathDir,M),f=0,p=Qt(this.pitch,-1.4,M),g=Qt(0,.3,M),m=Qt(0,-.2,M),y=.3*M,w=.3*M,v=.3*M*this.deathDir}else if(this.stance==="prone"){u=.22,d=-1.42,p=1.42+this.pitch*.8,f=0,w=1.1;let M=Math.sin(h*1.5)*c;g=.1+M*.25,m=.1-M*.25,y=.2,x=.2,P=0}else if(this.stance==="crouch")u=.62,d=.12,g=-1.1+Math.sin(h)*.35*c,m=-.5-Math.sin(h)*.35*c,y=1.7,x=1.25,f+=.12,p-=.12;else{let M=Math.sin(h),T=Math.cos(h),D=this.sprinting?.85:.55;g=M*D*c,m=-M*D*c,y=Math.max(0,-T)*1*c+.05,x=Math.max(0,T)*1*c+.05,u=.95+Math.abs(T)*.04*c,this.sprinting&&(p=-.75,f=.18,A=.6,d=.1),!this.move.grounded&&!this.swimming&&(g=-.6,m=-.2,y=.9,x=.6),this.swimming&&(u=.95,g=M*.4,m=-M*.4,p=-.4)}this.reloadT>0&&(_=Math.sin(this.game.time*9)*.35-.5,A+=.35),this.action&&(_=-.9,p-=.25),i.hips.position.y=Ei(i.hips.position.y,u,12,t),i.hips.position.z=P,i.hips.rotation.x+=(d-i.hips.rotation.x)*o,i.torso.rotation.x+=(f-i.torso.rotation.x)*o,i.torso.rotation.z+=(v-i.torso.rotation.z)*o,i.aim.rotation.x+=(p-i.aim.rotation.x)*o,i.head.rotation.x+=(w-i.head.rotation.x)*o,i.armL.rotation.x+=(_-i.armL.rotation.x)*o,i.weapon.rotation.z+=(A-i.weapon.rotation.z)*o;let b=i.legs;b[0].thigh.rotation.x+=(g-b[0].thigh.rotation.x)*o,b[1].thigh.rotation.x+=(m-b[1].thigh.rotation.x)*o,b[0].shin.rotation.x+=(y-b[0].shin.rotation.x)*o,b[1].shin.rotation.x+=(x-b[1].shin.rotation.x)*o,i.root.rotation.x=S,this.game.time-this.lastShotTime<.06?i.weapon.position.z=-.3:i.weapon.position.z=Ei(i.weapon.position.z,-.34,20,t)}muzzleWorld(t=new C){if(this.rig&&this.rig.weaponMesh&&!this.isPlayer){let e=this.gun,i=e?e.model.muzzle:uy;return this.rig.weapon.updateWorldMatrix(!0,!1),t.copy(i).applyMatrix4(this.rig.weapon.matrixWorld)}return this.eye(t)}removeFromScene(){this.rig&&this.game.scene.remove(this.rig.root)}},Ch=new C,rf=new C,uy=new C;function of(r,t,e,i,n,s,a,o){let l=i-r,c=n-t,h=s-e,u=Math.hypot(l,c,h),d=N.box(a,a*.9,u,o),f=new Tt().lookAt(new C,new C(l,c,h),new C(0,1,0));return d.applyMatrix4(f),d.translate((r+i)/2,(t+n)/2,(e+s)/2),d}function dy(r){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");e.strokeStyle=e.fillStyle=r==="holo"?"#ff4040":r==="chevron"?"#ff6020":"#ff2a2a",e.lineWidth=3,r==="dot"?(e.beginPath(),e.arc(32,32,4,0,7),e.fill()):r==="holo"?(e.beginPath(),e.arc(32,32,20,0,7),e.stroke(),e.beginPath(),e.arc(32,32,3,0,7),e.fill()):(e.beginPath(),e.moveTo(22,40),e.lineTo(32,28),e.lineTo(42,40),e.stroke(),e.fillRect(31,27,2,2));let i=new Ss(t);return i.colorSpace=Le,i}var Ua=class{constructor(t,e){this.game=t,this.s=e,this.input=t.input,this.camera=t.camera,this.vmScene=t.vmScene,this.vmCamera=t.vmCamera,this.vmRoot=new Te,this.vmScene.add(this.vmRoot),this.vmMat=new ve({vertexColors:!0,roughness:.6,metalness:.15,side:Fe}),this.vmMesh=null,this.vmArms=null,this.reticle=null,this.bobPhase=0,this.swayX=0,this.swayY=0,this.kick=0,this.lastShot=-1,this.crouchToggle=!1,this.proneToggle=!1,this.giveUpT=0,this.interactT=0,this.camRoll=0,this.landDip=0,this.prevGrounded=!0,this.vmKey=null,this.flashlight=new Vo(16773592,0,60,.42,.45,1.5),this.flashlight.castShadow=!1,this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.flashlight.position.set(.2,-.15,0),this.flashlight.target.position.set(0,0,-10),this.laserDot=null}buildViewmodel(){let t=this.s,e=t.weapon;if(!e)return;let i=t.active+":"+(e.kind==="gun"?e.id+JSON.stringify(e.att):e.id)+":"+t.team;if(i===this.vmKey)return;this.vmKey=i,this.vmMesh&&(this.vmRoot.remove(this.vmMesh),this.vmMesh=null),this.vmArms&&(this.vmRoot.remove(this.vmArms),this.vmArms.geometry.dispose(),this.vmArms=null),this.reticle&&(this.vmRoot.remove(this.reticle),this.reticle=null);let n=$e[t.team],s,a,o=new C(0,-.035,.02);if(e.kind==="gun"){let c=e.model;if(s=c.geo,a=new C(0,0,e.stats.type==="pistol"?0:-c.len*.42),e.stats.type==="pistol"&&a.set(-.02,-.04,.02),this.sightY=c.sightY,this.sightZ=c.sightZ,this.muzzle=c.muzzle.clone(),e.stats.reticle&&!e.stats.scope&&e.stats.zoom<3.5){let h=new $t(new Je(.03,.03),new Li({map:dy(e.stats.reticle),transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1}));h.position.set(0,c.sightY,c.sightZ-.03),this.reticle=h,this.vmRoot.add(h)}}else s=e.model,a=new C(-.1,-.02,.02),this.sightY=.1,this.sightZ=0,this.muzzle=new C(0,.05,-.6);this.vmMesh=new $t(s,this.vmMat),this.vmRoot.add(this.vmMesh);let l=[of(.16,-.3,.3,o.x+.03,o.y-.03,o.z+.06,.07,n.uniform),N.box(.06,.07,.09,3026474,o.x+.012,o.y,o.z),of(-.2,-.3,.12,a.x-.03,a.y-.04,a.z+.06,.07,n.uniform),N.box(.065,.06,.09,3026474,a.x-.01,a.y-.025,a.z),N.box(.075,.03,.05,n.accent,.11,-.2,.2)];this.vmArms=new $t(N.merge(l),this.vmMat),this.vmRoot.add(this.vmArms)}update(t){let e=this.s,i=this.input,n=this.game,s=n.settings,a=n.hud,o=n.uiBlocking(),l=!o&&e.state==="alive";if(!o&&e.state!=="dead"){let h=e.gun,u=e.adsT>.5?h?h.stats.zoom:e.weapon&&e.weapon.id==="binoculars"?6:1:1,d=.0021*s.get("sensitivity")*(e.adsT>.5?s.get("adsSensitivity")/Math.pow(u,.85):1);e.yaw-=i.mouse.dx*d,e.pitch-=i.mouse.dy*d*(s.get("invertY")?-1:1),e.pitch=zt(e.pitch,e.state==="downed"?-.6:-1.45,e.state==="downed"?.6:1.45)}let c=e.input;if(c.mx=0,c.mz=0,c.fire=!1,c.ads=!1,c.sprint=!1,l){i.down("KeyW")&&(c.mz-=1),i.down("KeyS")&&(c.mz+=1),i.down("KeyA")&&(c.mx-=1),i.down("KeyD")&&(c.mx+=1),c.sprint=i.down("ShiftLeft")||i.down("ShiftRight"),i.hit("Space")&&(c.jump=!0),(i.hit("KeyC")||i.hit("ControlLeft"))&&e.sprinting?c.slide=!0:i.hit("KeyC")&&(this.crouchToggle=!this.crouchToggle,e.stance==="prone"&&(this.crouchToggle=!0,e.setStance("crouch"))),i.hit("KeyZ")&&(e.stance==="prone"?e.setStance("crouch")&&(this.crouchToggle=!0):(c.prone=!0,this.crouchToggle=!1)),c.sprint&&c.mz<0&&e.stance==="crouch"&&this.crouchToggle&&(this.crouchToggle=!1),c.sprint&&c.mz<0&&e.stance==="prone"&&e.setStance("stand"),c.crouch=this.crouchToggle||i.down("ControlLeft"),c.proneHold=e.stance==="prone",c.fire=i.btn(0),c.ads=i.btn(2);let h=0;if(i.down("KeyQ")&&(h-=1),i.down("KeyE")&&(h+=1),h!==0){let u=e.right(new C).multiplyScalar(h),d=e.eye(new C),f=n.world.collision.raycast(e.pos.x,e.pos.y+e.eyeH,e.pos.z,u.x,0,u.z,.7,{});f&&(h*=zt((f.t-.25)/.45,0,1))}e.leanTarget=h,i.hit("KeyR")&&e.reload(),i.hit("KeyB")&&(e.cycleMode(),n.audio.play2d("switch",{vol:.4})),i.hit("KeyX")&&e.bandage(),i.hit("KeyV")&&this.toggleLight();for(let u=0;u<5;u++)i.hit("Digit"+(u+1))&&e.switchTo(u);if(i.mouse.wheel){let u=e.active;for(let d=0;d<5;d++){u=(u+(i.mouse.wheel>0?1:4))%5;let f=e.slots[u];if(f&&(f.kind==="gun"||f.count>0||f.def.count===1/0))break}e.switchTo(u)}i.hit("KeyG")&&this.quickThrow(),i.hit("KeyT")&&this.spotOrOrder(),e.weapon&&e.weapon.kind==="gadget"&&(n.combat.useGadget(e,i.btnHit(0),i.btnHit(2)),c.fire=!1,e.weapon.id!=="binoculars"&&e.weapon.id!=="rpg"&&e.weapon.id!=="m320"&&(c.ads=!1)),this.interact(t,i.down("KeyF"))}else e.leanTarget=0,c.crouch=!1;e.state==="downed"&&!o&&(i.down("Space")?(this.giveUpT+=t,this.giveUpT>1.5&&(this.giveUpT=0,e.die(e.lastAttacker,"Gave up",!1,!0))):this.giveUpT=0),a&&(a.giveUp=this.giveUpT/1.5)}toggleLight(){let t=this.s;t.slots[0]&&(t.flashlightOn=!t.flashlightOn,this.game.audio.play2d("switch",{vol:.35}))}quickThrow(){let t=this.s,e=t.slots[4];!e||e.count<=0||t.actionT>0||t.state!=="alive"||(e.count--,t.startAction("throw",.55,{type:e.id}),this.game.audio.play2d("pin",{vol:.4}))}spotOrOrder(){let t=this.s,e=this.game;if(e.combat.spot(t,7,4)>0)return;let n=t.squad;if(!n||n.leader!==t)return;let s=t.eye(new C),a=t.aimDir(new C),o=null,l=7*le;for(let h of e.mode.flags){let u=new C(h.x-s.x,h.y+3-s.y,h.z-s.z).normalize(),d=Math.acos(zt(u.dot(a),-1,1));d<l&&(l=d,o=h)}if(o){e.squads.setOrder(n,o.owner===t.team?"defend":"attack",o),e.hud.toast(`Squad: ${o.owner===t.team?"DEFEND":"ATTACK"} ${o.id} \u2014 ${o.name}`),e.audio.play2d("beep",{vol:.4});return}let c=e.world.collision.raycast(s.x,s.y,s.z,a.x,a.y,a.z,350,{});c?(e.squads.setOrder(n,"move",null,c.x,c.z),n.order.flag={x:c.x,z:c.z,r:12},e.hud.toast("Squad: MOVE to marker"),e.audio.play2d("beep",{vol:.4})):(e.squads.setOrder(n,"follow",null,t.pos.x,t.pos.z),e.hud.toast("Squad: FOLLOW me"))}interact(t,e){let i=this.s,n=this.game;this.prompt=null;let s=null,a=2.2;for(let o of n.teams[i.team]){if(o===i||o.state!=="downed")continue;let l=Math.hypot(o.pos.x-i.pos.x,o.pos.z-i.pos.z);l<a&&(a=l,s=o)}if(s){this.prompt=`Hold [F] to revive ${s.name}`,e?n.reviveTick(i,s,t):i.reviveProgress=0;return}if(i.reviveProgress=0,i.weapon&&i.weapon.id==="medkit"){let o=null;a=3;for(let l of n.teams[i.team]){if(l===i||l.state!=="alive"||l.hp>=100&&l.bleed<=0)continue;let c=Math.hypot(l.pos.x-i.pos.x,l.pos.z-i.pos.z);c<a&&(a=c,o=l)}o&&(this.prompt=`[F] Heal ${o.name}`,n.input.hit("KeyF")&&i.medkitCd<=0&&i.startAction("medkitOther",.9,{target:o}))}}updateCamera(t){let e=this.s,i=this.camera,n=this.game,s=n.settings,a=e.eye(new C);e.move.grounded&&!this.prevGrounded&&e.state==="alive"&&(this.landDip=.12),this.prevGrounded=e.move.grounded,this.landDip=Ei(this.landDip,0,8,t);let o=Math.hypot(e.vel.x,e.vel.z);e.move.grounded&&o>.3&&(this.bobPhase+=o*t*(e.sprinting?1.6:1.9));let l=s.get("headBob")?Math.min(1,o/5)*(e.adsT>.5?.25:1):0,c=Math.abs(Math.sin(this.bobPhase))*.045*l,h=Math.cos(this.bobPhase)*.025*l;i.position.set(a.x,a.y+c-this.landDip,a.z);let u=n.fx.trauma,d=u*u,f=n.time,p=d*.06*Math.sin(f*37.1),v=d*.05*Math.sin(f*41.7+1),g=d*.05*Math.sin(f*29.3+2);this.camRoll=Ei(this.camRoll,-e.lean*.17+(e.state==="downed"?.35:0),10,t),i.rotation.order="YXZ",i.rotation.set(e.pitch+v+(e.state==="downed"?-0:0),e.yaw+p+h*.15,this.camRoll+g);let m=e.gun,y=e.weapon&&e.weapon.id==="binoculars",x=m?m.stats.zoom:y?6:1,_=Qt(1,x,e.adsT),A=s.get("fov")*le,S=i.aspect,w=2*Math.atan(Math.tan(A/2)/S)/le;i.fov=w/_*(e.sprinting?1.06:1),i.updateProjectionMatrix(),i.updateMatrixWorld();let P=e.slots[0]&&e.slots[0].stats&&e.slots[0].stats.light,b=n.env.time.night;this.flashlight.intensity=e.flashlightOn&&e.state==="alive"&&(P||b)?b?26:12:0,this.updateViewmodel(t,h,c)}updateViewmodel(t,e,i){let n=this.s,s=this.game;this.buildViewmodel();let a=this.vmRoot,o=this.isScoped();if(a.visible=n.state==="alive"&&!o,!a.visible){this.updateMuzzleWorld();return}let l=n.weapon,c=l&&l.kind==="gun",h=c?n.adsT:0,u=s.input.mouse.dx,d=s.input.mouse.dy;this.swayX=Ei(this.swayX,zt(-u*6e-4,-.05,.05),10,t),this.swayY=Ei(this.swayY,zt(d*6e-4,-.05,.05),10,t),n.lastShotTime!==this.lastShot&&(this.lastShot=n.lastShotTime,this.kick=1),this.kick=Ei(this.kick,0,18,t);let f=new C(.15,-.19,-.56),p=c&&l.stats.zoom>1.2?.2:.26,v=new C(0,-this.sightY,-p-this.sightZ),g=f.clone().lerp(v,h),m=.035*(1-h),y=.04*(1-h),x=0,_=1-h*.8;g.x+=(e*.5+this.swayX)*_,g.y+=(-i*.35+this.swayY)*_;let A=s.time;if(g.y+=Math.sin(A*1.6)*.0025*(1-h*.7),n.sprinting&&(g.x+=.03,g.y-=.06,m-=.35,y+=.65),n.reloadT>0){let w=n.reloadTotal||2,P=1-n.reloadT/w,b=Math.sin(Math.min(1,P)*Math.PI);g.y-=.07*b,x+=.45*b,m+=.25*b}if(n.switchT>0){let w=n.switchT/.45;g.y-=.35*w,m-=.6*w}if(n.action){let w=1-n.actionT/(n.actionDur||1);n.action.name==="throw"||n.action.name==="throwC4"?(g.y-=.1,m+=Math.sin(w*Math.PI)*.9,g.z+=.08*Math.sin(w*Math.PI)):(g.y-=.12*Math.sin(w*Math.PI),x-=.3*Math.sin(w*Math.PI))}if(n.state==="alive"&&n.vault&&(g.y-=.1,m-=.3),c){let w=(l.stats.type==="sniper"||l.stats.type==="shotgun"?.09:.035)*this.kick;g.z+=w,m+=this.kick*(l.stats.type==="sniper"?.12:.04)*(1-h*.5)}a.position.lerp(g,1-Math.exp(-t*30)),a.rotation.set(m,y,x+n.lean*.06),this.reticle&&(this.reticle.visible=h>.85);let S=s.env.sunDir.clone().transformDirection(this.camera.matrixWorldInverse);s.vmLight.position.copy(S).multiplyScalar(5),this.updateMuzzleWorld()}updateMuzzleWorld(){let t=this.s;if(!this.muzzle)return;let e=this.muzzle.clone();this.vmRoot.updateMatrixWorld(),e.applyMatrix4(this.vmRoot.matrixWorld),t.vmMuzzle=this.camera.localToWorld(e.clone())}isScoped(){let t=this.s,e=t.gun;return t.state!=="alive"?!1:!!(e&&(e.stats.scope||e.stats.zoom>=3.5)&&t.adsT>.92||t.weapon&&t.weapon.id==="binoculars"&&t.adsT>.9)}dispose(){this.vmScene.remove(this.vmRoot),this.camera.remove(this.flashlight),this.camera.remove(this.flashlight.target)}};var af={recruit:{react:.7,turn:150,err0:7,errTau:1.25,jitter:.95,comp:.35,head:.05,sight:.75,cover:.45,strafe:.4,nade:.25,think:.6,lead:.5,burst:.55},regular:{react:.48,turn:230,err0:4.6,errTau:.9,jitter:.62,comp:.55,head:.12,sight:.9,cover:.65,strafe:.65,nade:.45,think:.45,lead:.7,burst:.7},veteran:{react:.31,turn:340,err0:2.9,errTau:.62,jitter:.4,comp:.75,head:.22,sight:1,cover:.85,strafe:.85,nade:.65,think:.34,lead:.85,burst:.85},elite:{react:.21,turn:480,err0:1.9,errTau:.43,jitter:.25,comp:.88,head:.32,sight:1.12,cover:1,strafe:1,nade:.8,think:.27,lead:.95,burst:.95}},fy={smg:14,shotgun:9,carbine:26,ar:34,lmg:40,dmr:75,sniper:130,pistol:12},py={smg:75,shotgun:40,carbine:150,ar:180,lmg:190,dmr:280,sniper:420,pistol:50},lf=new C,za=new C,cf=new C,Na=class{constructor(t,e){this.s=t,this.game=e,this.setDifficulty(e.settings.get("difficulty")),this.aggro=W(.35,.95),this.known=new Map,this.target=null,this.reactT=0,this.part="body",this.errY=0,this.errP=0,this.ph1=W(0,100),this.ph2=W(0,100),this.aiYaw=0,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPitch=0,this.lastYaw=0,this.state="objective",this.path=null,this.pathI=0,this.goal=null,this.pathPending=!1,this.repathT=0,this.cover=null,this.peekT=0,this.peeking=!1,this.coverSearchT=0,this.strafeDir=1,this.strafeT=0,this.nextPerceive=W(0,.2),this.nextThink=W(0,.5),this.burstLeft=0,this.holdFire=0,this.nadeCd=W(4,12),this.gadgetCd=W(5,20),this.lookYaw=0,this.glanceT=W(1,3),this.glancing=0,this.glanceYaw=0,this.stuckT=0,this.lastPos=new C,this.progressT=0,this.holdSpot=null,this.holdT=0,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.wantStance="stand"}setDifficulty(t){this.d=af[t]||af.veteran,this.diffName=t}reset(){this.known.clear(),this.target=null,this.path=null,this.goal=null,this.cover=null,this.holdSpot=null,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.state="objective",this.aiYaw=this.s.yaw,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPos.copy(this.s.pos),this.stuckT=0,this.burstLeft=0,this.pathPending=!1,this.placedClaymore=!1}inform(t,e,i,n,s,a){if(!t||t.team===this.s.team||t.state==="dead")return;let o=this.known.get(t);o?a>=o.t&&(o.x=e,o.y=i,o.z=n,o.t=a,s&&(o.seenT=a)):this.known.set(t,{x:e,y:i,z:n,t:a,seenT:s?a:-99,aw:0,vis:!1})}onDamaged(t,e){let i=this.game.time;if(t&&t!==this.s&&t.team!==this.s.team){let n=this.s.pos.distanceTo(t.pos),s=Math.min(12,n*.08);this.inform(t,t.pos.x+W(-s,s),t.pos.y,t.pos.z+W(-s,s),!1,i);let a=this.known.get(t);a&&(a.aw=Math.max(a.aw,.75)),(!this.target||this.target.state!=="alive")&&(this.target=t)}this.nextThink=Math.min(this.nextThink,.05),this.cover=null}onNearMiss(t){if(!t||t.team===this.s.team)return;let e=this.game.time,i=this.s.pos.distanceTo(t.pos),n=Math.min(20,i*.12);this.inform(t,t.pos.x+W(-n,n),t.pos.y,t.pos.z+W(-n,n),!1,e)}onSound(t,e,i,n){if(!i||i.team===this.s.team||i.state==="dead")return;let s=this.game.time,a=Math.hypot(t-this.s.pos.x,e-this.s.pos.z),o=Math.min(25,3+a*.1);this.inform(i,t+W(-o,o),i.pos.y,e+W(-o,o),!1,s),!this.target&&this.state!=="revive"&&(!this.investigate||s-this.investigate.t>4)&&(this.investigate={x:t,z:e,t:s})}perceive(t){let e=this.s,i=this.game.time,n=this.game.world.collision,s=e.eye(za),a=this.game.env.time.night,o=(a?140:380)*this.d.sight;for(let l of this.game.teams[1-e.team]){if(l.state==="dead"){this.known.delete(l);continue}let c=this.known.get(l),h=l.pos.x-s.x,u=l.pos.z-s.z,d=Math.hypot(h,u);if(c&&(c.vis=!1),d>o*1.1){c&&(c.aw=Math.max(0,c.aw-t*.6));continue}let f=Math.atan2(-h,-u),p=Math.abs(zi(f-e.yaw))/le,v=i-l.lastLoudShot<.7,g=d<6?140:d<30||v?105:62;if(p>g){c&&(c.aw=Math.max(0,c.aw-t*.5));continue}let m=l.hitSpheres(),y=n.los(s.x,s.y,s.z,m[0][0],m[0][1],m[0][2]);if(y||(y=n.los(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2])),!y){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}let x=zt(1.25-d/(o*.8),.1,1);l.stance==="prone"||l.state==="downed"?x*=d>25?.35:.7:l.stance==="crouch"&&(x*=.75);let _=Math.hypot(l.vel.x,l.vel.z);if(x*=l.sprinting?1.5:_>1?1.25:.8,v&&(x*=3),a&&(x*=l.flashlightOn?2.5:v?1:.45),p>62&&(x*=.45),d>5&&(x*=n.softVisibility(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2],i)),l.spotUntil>i&&(x*=1.8),x*=this.d.sight*(1-e.suppression*.4)*(1-e.flashed),x<.02){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}c||(c={x:l.pos.x,y:l.pos.y,z:l.pos.z,t:-99,seenT:-99,aw:0,vis:!1},this.known.set(l,c));let A=i-c.t<4;if(c.aw=Math.min(1.6,c.aw+x*t*(A?9:4.5)),c.aw>=1&&(c.vis=!0,c.x=l.pos.x,c.y=l.pos.y,c.z=l.pos.z,c.t=i,c.seenT=i,l.spotUntil<i&&Math.random()<t*.6&&(l.spotUntil=i+4),e.squad))for(let S of e.squad.members)S!==e&&S.brain&&S.state==="alive"&&S.pos.distanceTo(e.pos)<120&&S.brain.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i-.4)}for(let[l,c]of this.known)(l.state==="dead"||i-c.t>14&&c.aw<.02)&&this.known.delete(l);this.selectTarget(i)}selectTarget(t){let e=this.s,i=null,n=-1e9;for(let[s,a]of this.known){if(!a.vis)continue;let l=120/(e.pos.distanceTo(s.pos)+5);s.state==="downed"&&(l-=30),e.lastAttacker===s&&t-e.lastDamage<3&&(l+=25);let c=s.aimDir(lf),h=cf.subVectors(e.pos,s.pos).normalize();c.dot(h)>.97&&(l+=15),s===this.target&&(l+=12),l>n&&(n=l,i=s)}if(i&&i!==this.target)this.acquire(i,t);else if(!i&&this.target){let s=this.known.get(this.target);(!s||this.target.state==="dead"||t-s.t>10)&&(this.target=null)}}acquire(t,e){let i=this.s,n=this.target;this.target=t;let s=i.pos.distanceTo(t.pos),a=Math.atan2(-(t.pos.x-i.pos.x),-(t.pos.z-i.pos.z)),o=Math.abs(zi(a-i.yaw))/le,l=this.d.react*W(.8,1.35)*(s>90?1.25:1)*(o>60?1.35:1);n&&n.state==="alive"&&e-(this.known.get(n)?.seenT??-99)<1&&(l*=.6),this.reactT=l;let c=this.d.err0*W(.6,1.4)*(1+s/140)*(1+Math.hypot(t.vel.x,t.vel.z)/8)*le,h=W(0,Math.PI*2);this.errY=Math.cos(h)*c,this.errP=Math.sin(h)*c*.7;let u=i.gun&&(i.gun.stats.type==="sniper"||i.gun.stats.type==="dmr");this.part=Math.random()<this.d.head*(u?1.8:1)?"head":"body",this.burstLeft=0}update(t){let e=this.s,i=this.game.time;if(e.state!=="alive"){e.input.fire=!1;return}if(this.nextPerceive-=t,this.nextPerceive<=0){let d=.16+W(0,.05);this.perceive(d),this.nextPerceive=d}this.nextThink-=t,this.nextThink<=0&&(this.think(i),this.nextThink=this.d.think*W(.8,1.3));let n=e.input;n.fire=!1,n.jump=!1,n.sprint=!1,n.mx=0,n.mz=0;let s=0,a=0,o=!1,l=!0,c=this.target?this.known.get(this.target):null,h=!!(c&&c.vis);switch(this.gadgetTask&&this.runGadgetTask(t,i),this.state){case"combat":[s,a,o,l]=this.combatMove(t,i,c,h);break;case"revive":[s,a,o,l]=this.reviveMove(t,i);break;case"heal":[s,a,o,l]=this.healMove(t,i);break;default:[s,a,o,l]=this.objectiveMove(t,i)}for(let d of this.game.teams[e.team]){if(d===e||d.state!=="alive")continue;let f=e.pos.x-d.pos.x,p=e.pos.z-d.pos.z,v=f*f+p*p;if(v<1.6*1.6&&v>1e-4){let g=Math.sqrt(v);s+=f/g*(1.6-g)*.9,a+=p/g*(1.6-g)*.9}}let u=Math.hypot(s,a);if(this.progressT+=t,this.progressT>1){let d=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);u>.3&&d<.35&&!e.action?this.stuckT+=this.progressT:this.stuckT=0,this.lastPos.copy(e.pos),this.progressT=0}if(this.stuckT>.9&&(n.jump=!0),this.stuckT>2.5&&(this.path=null,this.cover=null,this.holdSpot=null,this.stuckT=0,s+=W(-1,1),a+=W(-1,1),this.requestRepath()),e.move.hitWall&&u>.3&&Math.random()<t*3&&(n.jump=!0),this.path&&this.pathI<this.path.length&&u>.3){let d=this.game.world.nav,f=d.cellOf(e.pos.x+s/Math.max(u,.01)*.8,e.pos.z+a/Math.max(u,.01)*.8);d.isVault(f)&&(n.jump=!0)}if(this.updateAim(t,i,c,h,s,a,l,o),u>.01){let d=s/Math.max(u,1),f=a/Math.max(u,1),p=e.forward(lf),v=e.right(cf);n.mz=-(d*p.x+f*p.z),n.mx=d*v.x+f*v.z,n.sprint=o&&n.mz<-.6}n.crouch=this.wantStance==="crouch",this.wantStance==="prone"&&e.stance!=="prone"&&(n.prone=!0),this.wantStance!=="prone"&&e.stance==="prone"&&!n.crouch&&e.setStance(this.wantStance==="crouch"?"crouch":"stand"),e.swimming&&(n.crouch=!1)}think(t){let e=this.s,i=this.target?this.known.get(this.target):null,n=[...this.known.values()].some(c=>c.vis);e.bleed>0&&!n&&e.actionT<=0&&e.bandages>0&&t-e.lastDamage>1.2?e.isMedic&&e.medkitCd<=0?e.startAction("medkitSelf",1.1):e.bandage():e.isMedic&&e.hp<60&&!n&&e.medkitCd<=0&&e.actionT<=0&&e.startAction("medkitSelf",1.1);let s=e.gun;if(s&&!n&&s.mag<s.stats.mag*.6&&s.reserve>0&&e.reload(),e.active===1&&e.slots[0].mag+e.slots[0].reserve>0&&!n&&e.switchTo(0),e.active>=2&&!this.gadgetTask&&e.actionT<=0&&e.switchTo(0),!n&&!this.reviveMate){let c=e.isMedic?50:26,h=null,u=1e9;for(let d of this.game.teams[e.team]){if(d.state!=="downed"||d===e)continue;let f=d.pos.distanceTo(e.pos),p=d.squad===e.squad?c*1.3:c;if(f>p||d.reviver&&d.reviver!==e&&d.reviver.state==="alive"||d.downedHp<15&&f>15)continue;let v=f*(d.squad===e.squad?.7:1)*(d.isPlayer?.6:1);v<u&&(u=v,h=d)}h&&(this.reviveMate=h,h.reviver=e,this.path=null,this.smokeThrown=!1)}if(this.reviveMate&&this.reviveMate.state!=="downed"&&(this.reviveMate.reviver===e&&(this.reviveMate.reviver=null),this.reviveMate=null,e.reviveProgress=0),e.isMedic&&!n&&!this.reviveMate&&!this.healMate&&e.medkitCd<=0){for(let c of this.game.teams[e.team])if(c!==e&&c.state==="alive"&&(c.hp<65||c.bleed>0)&&c.pos.distanceTo(e.pos)<14){this.healMate=c;break}}this.healMate&&(this.healMate.state!=="alive"||this.healMate.hp>=95&&this.healMate.bleed<=0)&&(this.healMate=null);let a=py[s?s.stats.type:"ar"]||150,o=i?Math.hypot(i.x-e.pos.x,i.z-e.pos.z):1e9,l=i&&(i.vis&&o<a*1.15||t-i.t<7&&o<Math.min(80,a)||t-e.lastDamage<3);if(this.reviveMate&&(!n||i&&e.pos.distanceTo(this.target.pos)>60)?this.state="revive":l?this.state="combat":this.healMate?this.state="heal":this.state="objective",s&&s.mag===0&&s.reserve===0&&e.active===0&&e.switchTo(1),this.gadgetCd-=this.d.think,this.nadeCd-=this.d.think,!this.gadgetTask&&this.gadgetCd<=0&&this.considerGadgets(t,n),this.cover&&this.target){let c=this.target,h=this.cover;!this.game.world.collision.los(h.x,h.y+.95,h.z,c.pos.x,c.pos.y+1.2,c.pos.z)||(this.cover=null)}}considerGadgets(t,e){let i=this.s,n=i.cls,s=i.squad&&i.squad.order,a=s?Math.hypot(s.x-i.pos.x,s.z-i.pos.z):999;if(n==="support"&&!e&&a<40&&i.slots[2].count>0&&Math.random()<.5){let o=this.game.combat.placementSpot(i);if(o){i.slots[2].count--,i.startAction("place",.6,{gid:"ammobox",spot:o}),this.gadgetCd=40;return}}if(n==="support"&&!e&&a<25&&i.slots[3].count>0&&s&&s.type==="defend"&&Math.random()<.4){let o=this.game.combat.placementSpot(i);if(o){i.slots[3].count--,i.startAction("place",.6,{gid:"sandbags",spot:o}),this.gadgetCd=15;return}}if(n==="recon"&&!e&&a<25&&!this.placedClaymore&&i.slots[2].count>0&&s&&(s.type==="defend"||s.ownedByUs)){let o=this.game.combat.placementSpot(i);if(o){i.slots[2].count--,i.startAction("place",.6,{gid:"claymore",spot:o}),this.placedClaymore=!0,this.gadgetCd=30;return}}if((n==="recon"||n==="leader")&&!e&&a>45&&a<140){let o=n==="recon"?"beacon":"rally",l=this.game.combat.placed.find(c=>c.owner===i&&c.type===o);if(!l||Math.hypot(l.x-s.x,l.z-s.z)>160){let c=this.game.combat.placementSpot(i);if(c&&this.game.world.nav.cover[this.game.world.nav.cellOf(c.x,c.z)]>40){i.startAction("place",.6,{gid:o,spot:c}),this.gadgetCd=45;return}}}this.gadgetCd=W(3,7)}objectiveMove(t,e){let i=this.s,n=this.game.squads.objectiveFor(i);this.wantStance="stand";let s=n.x,a=n.z;this.investigate&&e-this.investigate.t<12&&Math.hypot(this.investigate.x-i.pos.x,this.investigate.z-i.pos.z)<70&&this.aggro>.45&&(s=this.investigate.x,a=this.investigate.z,Math.hypot(s-i.pos.x,a-i.pos.z)<6&&(this.investigate=null));let o=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);if(o<n.r*.85&&n.hold){if(this.holdT-=t,!this.holdSpot||this.holdT<=0){let m=this.game.squads.threatPoint(i.team,n),y=this.game.world.nav.findCover(n.x,n.z,{x:m.x,y:m.y+1.4,z:m.z},n.r*.75,{maxTests:22,occupied:(_,A)=>this.game.teams[i.team].some(S=>S!==i&&S.state==="alive"&&S.brain&&S.brain.holdSpot&&Math.hypot(S.brain.holdSpot.x-_,S.brain.holdSpot.z-A)<3)}),x=y.length?y[Math.floor(Math.random()*Math.min(3,y.length))]:null;if(x)this.holdSpot={x:x.x,z:x.z,peek:x.peek};else{let[_,A]=this.game.world.nav.randomWalkableNear(n.x,n.z,n.r*.6);this.holdSpot={x:_,z:A,peek:!0}}this.holdT=W(10,22),this.path=null}if(s=this.holdSpot.x,a=this.holdSpot.z,Math.hypot(s-i.pos.x,a-i.pos.z)<1)return this.wantStance=this.holdSpot.peek&&Math.sin(e*.4+this.ph1)>.2?"stand":"crouch",[0,0,!1,!1]}let[c,h,u]=this.followTo(s,a,t),d=Math.hypot(s-i.pos.x,a-i.pos.z),f=[...this.known.values()].some(g=>e-g.t<6&&Math.hypot(g.x-i.pos.x,g.z-i.pos.z)<80),p=this.target&&this.known.get(this.target)&&this.known.get(this.target).vis,v=d>25&&!f&&!p&&i.hp>35&&!u;return!v&&o<70&&(this.wantStance="stand"),[c,h,v,v||!f]}combatMove(t,e,i,n){let s=this.s,a=this.target;if(!a||!i)return this.state="objective",[0,0,!1,!0];let o=Math.hypot(i.x-s.pos.x,i.z-s.pos.z),l=s.gun,c=fy[l?l.stats.type:"ar"]||30,h=this.game.world.nav;if(this.wantStance="stand",n){this.lostT=0,this.coverSearchT-=t;let f=s.suppression>.25||e-s.lastDamage<1.5;if(!this.cover&&this.coverSearchT<=0&&o>18&&Math.random()<this.d.cover){this.coverSearchT=W(1.5,3);let P={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},b=h.findCover(s.pos.x,s.pos.z,P,f?9:12,{maxTests:20,minThreatDist:10,prefer:o>c*1.5?{x:Qt(s.pos.x,a.pos.x,.25),z:Qt(s.pos.z,a.pos.z,.25)}:null,occupied:(M,T)=>this.game.teams[s.team].some(D=>D!==s&&D.brain&&D.brain.cover&&Math.hypot(D.brain.cover.x-M,D.brain.cover.z-T)<2)});b.length&&(this.cover=b[0],this.path=null,this.peekT=0)}let p=this.game.squads.objectiveFor(s),v=Math.hypot(p.x-s.pos.x,p.z-s.pos.z),g=this.game.squads.orderType(s)!=="defend";this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1?this.coverTime=(this.coverTime||0)+t:this.cover||(this.coverTime=0);let m=g?5+this.aggro*-2+W(0,4):14;if(this.cover&&this.coverTime>m&&(v>p.r*.8||!g)){let P=g?{x:Qt(s.pos.x,p.x,Math.min(1,22/Math.max(v,1))),z:Qt(s.pos.z,p.z,Math.min(1,22/Math.max(v,1)))}:{x:s.pos.x+W(-8,8),z:s.pos.z+W(-8,8)},b={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},M=h.findCover(P.x,P.z,b,10,{maxTests:18,minThreatDist:8,prefer:P});this.cover=M.length?M[0]:null,this.coverTime=0,this.path=null,!this.cover&&g&&o>25&&(this.advanceT=W(2.5,5))}if(this.advanceT>0){this.advanceT-=t;let[P,b]=this.followTo(p.x,p.z,t);return this.wantStance="stand",[P,b,!1,!1]}if(!this.cover&&g&&o>70&&v>p.r&&Math.random()<t*.5&&(this.advanceT=W(2,4)),this.cover){let P=Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z);if(P>.9){let[b,M]=this.followTo(this.cover.x,this.cover.z,t),T=f&&P>4;return this.wantStance="stand",[b,M,T,T]}return this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?W(1.4,3.2):W(.6,1.6)+s.suppression*2,!this.peeking&&l&&l.mag<l.stats.mag*.45&&s.reload()),(s.reloadT>0||s.suppression>.75||s.actionT>0)&&(this.peeking=!1),this.wantStance=this.peeking&&this.cover.peek?"stand":"crouch",this.peeking&&!this.cover.peek&&(this.wantStance="crouch"),[0,0,!1,!1]}this.strafeT-=t,this.strafeT<=0&&(this.strafeDir=Math.random()<.5?-1:1,this.strafeT=W(.35,.95)/(.4+this.d.strafe*.6),Math.random()<.15*this.d.strafe&&o<25&&(this.crouchSpamT=.35)),this.crouchSpamT>0&&(this.crouchSpamT-=t);let y=(a.pos.x-s.pos.x)/Math.max(o,.1),x=(a.pos.z-s.pos.z)/Math.max(o,.1),_=0,A=0,S=o<60?this.d.strafe:this.d.strafe*.4;_+=-x*this.strafeDir*S,A+=y*this.strafeDir*S,o>c*1.4&&this.aggro>.5?(_+=y*.6,A+=x*.6):o<c*.5&&l&&(l.stats.type==="dmr"||l.stats.type==="sniper")&&(_-=y*.7,A-=x*.7);let w=h.cellOf(s.pos.x+_*1.2,s.pos.z+A*1.2);return(!h.walkable(w)||h.isWater(w))&&(_=-_,A=-A,this.strafeDir*=-1),o>70&&l&&["lmg","dmr","sniper"].includes(l.stats.type)&&s.suppression<.6?(this.wantStance="prone",[0,0,!1,!1]):(o>40&&Math.random()<.5&&(this.wantStance="crouch"),this.crouchSpamT>0&&(this.wantStance="crouch"),[_,A,!1,!1])}this.lostT=(this.lostT||0)+t;let u=e-i.t;if(l&&l.mag<l.stats.mag*.5&&s.reload(),this.nadeCd<=0&&u<5&&o>10&&o<34&&i.seenT>e-6&&Math.random()<this.d.nade*t*2&&this.throwGrenadeAt(i.x,i.y,i.z),!this.gadgetTask&&u<4&&o>18&&o<110&&Math.random()<t*.6*this.d.nade&&this.tryHeavyAt(i),this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1&&this.lostT<3.5)return this.wantStance=this.cover.peek?"stand":"crouch",[0,0,!1,!1];if(this.lostT<1.6)return this.wantStance=Math.random()<.5?"crouch":"stand",[0,0,!1,!1];if((this.aggro>.5||this.game.squads.orderType(s)==="attack"||o<25)&&u<9){this.cover=null;let[f,p,v]=this.followTo(i.x,i.z,t);return v&&(this.known.delete(a),this.target=null),this.wantStance="stand",[f,p,!1,!1]}return this.cover=null,this.objectiveMove(t,e)}reviveMove(t,e){let i=this.s,n=this.reviveMate;if(!n||n.state!=="downed")return this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(!this.smokeThrown&&s<30&&i.slots[4].id==="smoke"&&i.slots[4].count>0&&[...this.known.values()].some(o=>e-o.t<6&&Math.hypot(o.x-n.pos.x,o.z-n.pos.z)<60)&&(this.throwGrenadeAt(n.pos.x+W(-2,2),n.pos.y,n.pos.z+W(-2,2),"smoke"),this.smokeThrown=!0),i.isMedic&&i.slots[3].id==="smoke"&&!this.smokeThrown&&s<25&&i.slots[3].count>0&&[...this.known.values()].some(o=>e-o.t<6)&&(i.slots[3].count--,this.throwGrenadeAt(n.pos.x,n.pos.y,n.pos.z,"smoke",!0),this.smokeThrown=!0),s>1.4){let[a,o]=this.followTo(n.pos.x,n.pos.z,t),l=s>6;return this.wantStance="stand",i.reviveProgress=0,[a,o,l,!0]}return this.wantStance="crouch",this.lookAt(n.pos.x,n.pos.y+.3,n.pos.z,t,300),this.game.reviveTick(i,n,t),[0,0,!1,!1]}healMove(t,e){let i=this.s,n=this.healMate;if(!n||n.state!=="alive")return this.healMate=null,this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(s>2.5){let[a,o]=this.followTo(n.pos.x,n.pos.z,t);return[a,o,s>8,!0]}return i.actionT<=0&&i.medkitCd<=0&&(i.startAction("medkitOther",1,{target:n}),this.healMate=null),[0,0,!1,!1]}requestRepath(){this.repathT=0,this.path=null}followTo(t,e,i){let n=this.s,s=Math.hypot(t-n.pos.x,e-n.pos.z);if(s<.8)return[0,0,!0];this.repathT-=i;let a=!this.goal||Math.hypot(this.goal.x-t,this.goal.z-e)>Math.max(3,s*.2);if((!this.path||a||this.repathT<=0)&&!this.pathPending&&(this.goal={x:t,z:e},this.pathPending=!0,this.game.ai.requestPath(this,t,e),this.repathT=W(6,10)),!this.path)return s<12?[(t-n.pos.x)/s,(e-n.pos.z)/s,!1]:[0,0,!1];for(;this.pathI<this.path.length;){let u=this.path[this.pathI],d=Math.hypot(u[0]-n.pos.x,u[1]-n.pos.z),f=this.pathI===this.path.length-1;if(d<(f?.7:n.sprinting?1.6:1.1))this.pathI++;else break}if(this.pathI>=this.path.length)return this.path.partial?(this.path=null,[0,0,!1]):[(t-n.pos.x)/s,(e-n.pos.z)/s,s<1.5];let o=this.path[this.pathI],l=o[0]-n.pos.x,c=o[1]-n.pos.z,h=Math.hypot(l,c)||1;return[l/h,c/h,!1]}onPath(t){this.pathPending=!1,this.path=t,this.pathI=t&&t.length>1?1:0}lookAt(t,e,i,n,s){let a=this.s.eye(za),o=t-a.x,l=e-a.y,c=i-a.z,h=Math.atan2(-o,-c),u=Math.atan2(l,Math.hypot(o,c));this.aiYaw=gr(this.aiYaw,h,s*le*n),this.aiPitch+=zt(u-this.aiPitch,-s*le*n,s*le*n)}updateAim(t,e,i,n,s,a,o,l){let c=this.s,h=c.pitch-this.lastPitch,u=zi(c.yaw-this.lastYaw);Math.abs(h)<.2&&(this.recoilOff+=h*(1-this.d.comp)),Math.abs(u)<.2&&(this.recoilOffY+=u*(1-this.d.comp)),this.recoilOff*=Math.exp(-t*5),this.recoilOffY*=Math.exp(-t*5);let d=!1;if(this.gadgetTask&&this.gadgetTask.aimYaw!==void 0)this.aiYaw=gr(this.aiYaw,this.gadgetTask.aimYaw,this.d.turn*le*t),this.aiPitch+=zt(this.gadgetTask.aimPitch-this.aiPitch,-this.d.turn*le*t,this.d.turn*le*t);else if(n&&this.target&&this.state!=="revive"){let f=this.target,p=c.eye(za),v=f.hitSpheres(),g=this.part==="head"?v[0]:v[1],m=c.gun,y=m?m.stats.vel*m.stats.velMul:800,x=Math.hypot(g[0]-p.x,g[1]-p.y,g[2]-p.z),_=x/y,A=this.d.lead,S=g[0]+f.vel.x*_*A,w=g[1]+f.vel.y*_*A*.3+.5*9.81*_*_*A,P=g[2]+f.vel.z*_*A,b=S-p.x,M=w-p.y,T=P-p.z,D=Math.atan2(-b,-T),L=Math.atan2(M,Math.hypot(b,T)),z=Math.exp(-t/this.d.errTau);this.errY*=z,this.errP*=z;let F=Math.hypot(c.vel.x,c.vel.z)>1?1.6:1,O=this.d.jitter*le*F*(1+c.suppression*2.2+c.flashed*6),Z=(Math.sin(e*2.3+this.ph1)+Math.sin(e*5.1+this.ph2)*.5)*O*.6,V=(Math.sin(e*2.9+this.ph2)+Math.sin(e*4.3+this.ph1)*.5)*O*.45,Q=D+this.errY+Z,K=L+this.errP+V,ht=Math.abs(zi(Q-this.aiYaw))+Math.abs(K-this.aiPitch),wt=this.d.turn*le*t*(.25+.75*Math.min(1,ht/(12*le)));this.aiYaw=gr(this.aiYaw,Q,wt),this.aiPitch+=zt(K-this.aiPitch,-wt,wt);let Ft=this.aiYaw+this.recoilOffY,Y=this.aiPitch+this.recoilOff,ot=Math.hypot(zi(Ft-D),Y-L),vt=this.part==="head"?.14:.3,st=Math.max(.35*le,Math.atan(vt/Math.max(x,1))*(x<15?2.6:1.6));this.reactT-=t,d=this.reactT<=0&&ot<st*(this.burstLeft>0?2.2:1),f.state==="downed"&&[...this.known.values()].filter(St=>St.vis).length>1&&(d=!1),this.handleTrigger(t,d,x,e),c.input.ads=!!m&&(x>14||m.stats.type==="sniper"||m.stats.type==="dmr")&&c.reloadT<=0}else{c.input.ads=!1,this.burstLeft=0;let f=null,p=0;if(i&&!n){let v=c.eye(za);f=Math.atan2(-(i.x-v.x),-(i.z-v.z)),p=Math.atan2(i.y+1.3-v.y,Math.hypot(i.x-v.x,i.z-v.z))}else if(o&&Math.hypot(s,a)>.2){if(f=Math.atan2(-s,-a),this.glanceT-=t,!l&&this.glanceT<=0){this.glancing=W(.6,1.2),this.glanceT=W(2.5,5);let v=this.game.squads.threatPoint(c.team,this.game.squads.objectiveFor(c));this.glanceYaw=Math.atan2(-(v.x-c.pos.x),-(v.z-c.pos.z))}this.glancing>0&&(this.glancing-=t,Math.abs(zi(this.glanceYaw-f))<1.6&&(f=this.glanceYaw))}else{let v=this.game.squads.objectiveFor(c),g=this.game.squads.threatPoint(c.team,v);f=Math.atan2(-(g.x-c.pos.x),-(g.z-c.pos.z))+Math.sin(e*.35+this.ph1)*.9,p=-.04}f!==null&&(this.aiYaw=gr(this.aiYaw,f,(l?400:220)*le*t),this.aiPitch+=zt(p-this.aiPitch,-2*t,2*t))}c.yaw=this.aiYaw+this.recoilOffY,c.pitch=zt(this.aiPitch+this.recoilOff,-1.4,1.4),this.lastPitch=c.pitch,this.lastYaw=c.yaw}handleTrigger(t,e,i,n){let s=this.s,a=s.gun;if(!a||s.reloadT>0||s.actionT>0)return;if(a.mag===0){a.reserve>0&&i<14&&s.slots[1].mag>0&&Math.random()<.5?s.switchTo(1):s.reload();return}this.holdFire-=t;let o=a.stats,l=o.modes[a.mode];if(this.burstLeft>0){if(l==="auto"?(s.input.fire=!0,s.fireCd<=1e-4&&this.burstLeft--):s.fireCd<=0&&(s.input.fire=!this.prevFire,this.burstLeft-=s.input.fire?1:0),this.prevFire=s.input.fire,this.burstLeft<=0){let c=i<20?W(.05,.18):i<60?W(.18,.4):W(.3,.65);this.holdFire=c*(1.6-this.d.burst)}return}if(this.prevFire=!1,!(!e||this.holdFire>0))if(l==="auto"){let c=i<20?Math.round(W(6,14)):i<45?Math.round(W(3,7)):i<90?Math.round(W(2,4)):Math.round(W(1,2));this.burstLeft=o.type==="lmg"?c*2:c,s.input.fire=!0}else s.input.fire=!0,this.prevFire=!0,this.burstLeft=0,this.holdFire=o.interval+(i>50?W(.12,.35):W(.03,.12))*(o.bolt?.5:1)}throwGrenadeAt(t,e,i,n,s){let a=this.s,o=s?a.slots[3]:a.slots[4];if(!o||o.count<=0||a.actionT>0)return!1;if(n){if(!s&&o.id!==n)return!1}else{if(o.id!=="frag"&&o.id!=="impact")return!1;n=o.id}let l=a.eye(new C),c=new C(t,e+.3,i),h=wn.solveBallistic(l,c,17,15);if(h||(h=wn.solveBallistic(l,c,22,15)),!h)return!1;let u=h.length();return this.game.world.collision.los(l.x,l.y,l.z,l.x+h.x/u*3,l.y+h.y/u*3,l.z+h.z/u*3)?(s||o.count--,a.throwVel=h,a.startAction("throw",.5,{type:n}),this.aiYaw=Math.atan2(-h.x,-h.z),this.nadeCd=W(10,18)/this.d.nade,!0):!1}tryHeavyAt(t){let e=this.s,i=e.slots.findIndex((l,c)=>c>=2&&l&&(l.id==="rpg"||l.id==="m320")&&l.count>0);if(i<0)return!1;let n=e.eye(new C),s=new C(t.x,t.y+1,t.z),a=e.slots[i].id==="rpg",o=wn.solveBallistic(n,s,a?115:72,a?2.5:9.81);return!o||Math.hypot(t.x-e.pos.x,t.z-e.pos.z)<12?!1:(this.gadgetTask={slot:i,t:0,aimYaw:Math.atan2(-o.x,-o.z),aimPitch:Math.atan2(o.y,Math.hypot(o.x,o.z)),fired:!1},e.switchTo(i),!0)}runGadgetTask(t,e){let i=this.s,n=this.gadgetTask;n.t+=t,!n.fired&&i.switchT<=0&&n.t>.55&&(Math.abs(zi(this.aiYaw-n.aimYaw))<2*le||n.t>1.6)&&(i.input.ads=!0,i.adsT=1,this.game.combat.useGadget(i,!0,!1),n.fired=!0,n.t=0),n.fired&&n.t>.6&&(this.gadgetTask=null,i.switchTo(0)),n.t>4&&(this.gadgetTask=null,i.switchTo(0))}},ka=class{constructor(t){this.game=t,this.queue=[]}requestPath(t,e,i){this.queue.includes(t)||this.queue.push(t),t._pathGoal=[e,i]}update(){let t=this.game.world.nav;t.processDirty();let e=3;for(;e-- >0&&this.queue.length;){let i=this.queue.shift();if(i.s.state!=="alive"){i.pathPending=!1;continue}let[n,s]=i._pathGoal,a=t.findPath(i.s.pos.x,i.s.pos.z,n,s,{coverBias:.6,maxNodes:3e4,weight:1.45});i.onPath(a)}}clear(){this.queue=[]}};var Qe="#4aa8ff",Qi="#86e05a",ai="#ff4b3a",Sn="#c8c8c8",Lr=new C;function ae(r,t,e,i){let n=document.createElement(r);return t&&(n.className=t),i!==void 0&&(n.innerHTML=i),e&&e.appendChild(n),n}var Fa=class{constructor(t){this.game=t;let e=this.root=ae("div","hud",document.getElementById("ui"));this.markers=ae("canvas","markers",e),this.mctx=this.markers.getContext("2d"),this.top=ae("div","hud-top",e),this.ticketsEl=ae("div","tickets",this.top),this.flagsEl=ae("div","flagrow",this.top),this.compass=ae("canvas","compass",this.top),this.compass.width=520,this.compass.height=30,this.capEl=ae("div","capbar",e),this.capEl.innerHTML='<div class="caplabel"></div><div class="captrack"><div class="capfill"></div></div>',this.minimap=ae("canvas","minimap",e),this.minimap.width=this.minimap.height=220,this.feed=ae("div","killfeed",e),this.squadEl=ae("div","squadlist",e),this.vitals=ae("div","vitals",e),this.vitals.innerHTML='<div class="hpnum">100</div><div class="hpbar"><div class="hpfill"></div></div><div class="vstat"></div>',this.weaponEl=ae("div","weaponbox",e),this.crosshair=ae("div","crosshair",e),this.crosshair.innerHTML='<i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-d"></i>',this.hitmarker=ae("div","hitmarker",e),this.hitmarker.innerHTML="<i></i><i></i><i></i><i></i>",this.prompt=ae("div","prompt",e),this.progress=ae("div","progress",e),this.progress.innerHTML="<div></div>",this.toasts=ae("div","scoretoasts",e),this.msg=ae("div","hudmsg",e),this.scope=ae("div","scope",e),this.scope.innerHTML='<div class="scope-ring"></div><div class="scope-h"></div><div class="scope-v"></div><div class="scope-dot"></div>',this.downedEl=ae("div","downed",e),this.oob=ae("div","oob",e),this.fps=ae("div","fps",e),this.flashEl=ae("div","flashbang",e),this.order=ae("div","orderline",e),this.board=ae("div","scoreboard",e),this.bigmap=ae("canvas","bigmap",e),this.bigmap.width=this.bigmap.height=760,this.dmg=[],this.hitT=0,this.hitKill=!1,this.feedItems=[],this.toastItems=[],this.giveUp=0,this.fpsAcc=0,this.fpsN=0,this.fpsT=0,this.lastWeaponKey="",this.lastFlagsKey="",this.resize()}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.markers.width=Math.floor(window.innerWidth*t),this.markers.height=Math.floor(window.innerHeight*t),this.dpr=t}setVisible(t){this.root.style.display=t?"":"none"}addKill(t,e,i,n,s){let a=t?t.team===this.game.player.team?t.squad===this.game.player.squad?Qi:Qe:ai:Sn,o=e.team===this.game.player.team?e.squad===this.game.player.squad?Qi:Qe:ai,l=t===this.game.player||e===this.game.player,c=ae("div","kf"+(l?" me":""),this.feed,`${t&&t!==e?`<b style="color:${a}">${t.name}</b>`:""} <span class="kfw">${s?"\u25BC ":""}${i||""}${n?" \u2738":""}</span> <b style="color:${o}">${e.name}</b>`);this.feedItems.push({row:c,t:7}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}addRevive(t,e){let i=t.team===this.game.player.team?Qe:ai,n=ae("div","kf",this.feed,`<b style="color:${i}">${t.name}</b> <span class="kfw" style="color:#7fe07a">\u271A revived</span> <b style="color:${i}">${e.name}</b>`);this.feedItems.push({row:n,t:5}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}scorePopup(t,e){let i=ae("div","toast",this.toasts,e?`<b>+${e}</b> ${t}`:t);this.toastItems.push({row:i,t:2.2}),this.toastItems.length>5&&this.toastItems.shift().row.remove()}toast(t,e=2.5){this.msg.textContent=t,this.msg.style.opacity=1,this.msgT=e}hit(t,e){this.hitT=.16,this.hitKill=t,this.hitHead=e}damageFrom(t){if(!t)return;let e=this.game.player,i=Math.atan2(-t.x,-t.z)-e.yaw+Math.PI;this.dmg.push({a:i,t:1.4})}update(t){let e=this.game,i=e.player;if(!i)return;this.fpsAcc+=t,this.fpsN++,this.fpsT-=t,this.fpsT<=0&&(this.fps.textContent=e.settings.get("showFps")?`${Math.round(this.fpsN/this.fpsAcc)} FPS`:"",this.fpsAcc=0,this.fpsN=0,this.fpsT=.5);for(let d of[this.feedItems,this.toastItems])for(let f=d.length-1;f>=0;f--)d[f].t-=t,d[f].t<=0?(d[f].row.remove(),d.splice(f,1)):d[f].t<.5&&(d[f].row.style.opacity=d[f].t/.5);this.msgT!==void 0&&(this.msgT-=t,this.msgT<=0&&(this.msg.style.opacity=0)),this.updateTop(),this.updateWeapon(),this.updateVitals(),this.updateSquad(),this.updateCrosshair(t),this.drawMinimap(),this.drawMarkers(t),this.updateCapture();let n=e.playerCtl&&e.playerCtl.isScoped();this.scope.style.display=n?"block":"none",this.flashEl.style.opacity=zt(i.flashed*1.4,0,1);let s=e.playerCtl&&e.playerCtl.prompt;this.prompt.textContent=s||"",this.prompt.style.display=s&&i.state==="alive"?"block":"none";let a=i.action&&!["throw","throwC4","reloadGadget"].includes(i.action.name),o=i.reviveProgress>0?i.reviveProgress:a?1-i.actionT/i.actionDur:0;if(this.progress.style.display=o>0&&i.state==="alive"?"block":"none",this.progress.firstChild.style.width=`${o*100}%`,i.state==="downed"){this.downedEl.style.display="block";let d=i.reviver&&i.reviver.state==="alive"&&i.reviver.reviveProgress>0;this.downedEl.innerHTML=`<div class="dt">YOU ARE DOWN</div><div class="ds">${d?`${i.reviver.name} is reviving you\u2026`:"Wait for a teammate to revive you"}</div><div class="dbar"><div style="width:${zt(i.downedHp,0,100)}%"></div></div><div class="dk">Hold [SPACE] to give up ${this.giveUp>0?Math.round(this.giveUp*100)+"%":""}</div>`}else this.downedEl.style.display="none";let l=e.oobTime;this.oob.style.display=l>0?"block":"none",l>0&&(this.oob.innerHTML=`RETURN TO THE BATTLEFIELD<br><b>${Math.ceil(l)}</b>`);let c=i.squad;if(c&&c.order){let d=c.order,f=d.type==="follow"?"FOLLOW SQUAD LEADER":d.type==="move"?"MOVE TO MARKER":`${d.type.toUpperCase()} ${d.flag&&d.flag.id?d.flag.id+" \xB7 "+d.flag.name:""}`;this.order.innerHTML=`<b>${c.name}</b> ${f}${c.leader===i?" <span>[T] give orders</span>":""}`}else this.order.textContent="";let h=e.input.down("Tab")&&!e.uiBlocking();this.board.style.display=h?"block":"none",h&&this.drawBoard();let u=e.input.down("KeyM")&&!e.uiBlocking();this.bigmap.style.display=u?"block":"none",u&&this.drawMap(this.bigmap,!1)}updateTop(){let t=this.game,e=t.mode,i=t.player,n=i.team,s=1-n,a=e.type==="tdm",o=a?e.kills[n]:e.tickets[n],l=a?e.kills[s]:e.tickets[s],c=Math.max(0,e.timeLimit-e.time),h=Math.floor(c/60),u=Math.floor(c%60),d=o/e.maxTickets,f=l/e.maxTickets,p=`${o}|${l}|${h}|${u}`;p!==this.lastTicketKey&&(this.lastTicketKey=p,this.ticketsEl.innerHTML=`<div class="tk mine"><span>${$e[n].name}</span><b>${o}</b><div class="tkbar"><div style="width:${d*100}%"></div></div></div><div class="clock">${h}:${String(u).padStart(2,"0")}</div><div class="tk theirs"><b>${l}</b><span>${$e[s].name}</span><div class="tkbar"><div style="width:${f*100}%"></div></div></div>`);let v=e.flags.map(y=>`${y.id}${y.owner}${Math.round(y.progress*20)}${y.contested?1:0}${y.capTeam}`).join(",");v!==this.lastFlagsKey&&(this.lastFlagsKey=v,this.flagsEl.innerHTML=e.flags.map(y=>{let x=y.owner===-1?"n":y.owner===n?"f":"e",_=Math.abs(y.progress),A=y.progress>0?0:1,S=y.progress===0?Sn:A===n?Qe:ai,w=e.type==="frontline"&&!e.capturable(y,n)&&y.owner!==n?" locked":"";return`<div class="flag ${x}${y.contested?" contested":""}${w}" style="--p:${_*100}%;--c:${S}"><span>${y.id}</span></div>`}).join(""));let g=this.compass.getContext("2d");g.clearRect(0,0,520,30);let m=(-i.yaw/le%360+360)%360;g.font="600 12px Rajdhani, Bahnschrift, sans-serif",g.textAlign="center";for(let y=-100;y<=100;y+=5){let _=(Math.round(m+y)%360+360)%360,A=260+(y-(m-Math.round(m)))*2.5;if(_%15!==0)continue;g.fillStyle="rgba(255,255,255,0.75)";let S={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[_];S?(g.fillStyle=_%90===0?"#ffd76a":"#fff",g.fillText(S,A,13)):(g.fillRect(A-.5,4,1,6),g.fillStyle="rgba(255,255,255,0.5)",g.fillText(String(_),A,22))}for(let y of e.flags){let _=(Math.atan2(y.x-i.pos.x,-(y.z-i.pos.z))/le-m+540)%360-180;if(Math.abs(_)>100)continue;let A=260+_*2.5;g.fillStyle=y.owner===-1?Sn:y.owner===n?Qe:ai,g.fillText(y.id,A,29)}g.fillStyle="#ffd76a",g.fillRect(259,0,2,7)}updateWeapon(){let t=this.game.player,e=t.weapon;if(!e)return;let i="",n="",s="";e.kind==="gun"?(i=e.stats.name,n=`<b>${e.mag}</b><span>/${e.reserve}</span>`,s=e.stats.modes[e.mode].toUpperCase()):(i=e.def.name,n=e.def.count===1/0?"<b>\u221E</b>":`<b>${e.count}</b>`,e.id==="c4"&&t.c4s&&t.c4s.length&&(s=`${t.c4s.length} PLACED \xB7 RMB DETONATE`),(e.id==="rpg"||e.id==="m320")&&!e.loaded&&(s="RELOADING"));let a=t.slots.map((l,c)=>{if(!l)return"";let h=l.kind==="gun"?l.stats.name:l.def.name,u=l.kind==="gun"||l.def.count===1/0?"":`<em>${l.count}</em>`;return`<div class="slot${c===t.active?" on":""}${l.kind==="gadget"&&l.count<=0&&l.def.count!==1/0?" empty":""}"><i>${c+1}</i>${h}${u}</div>`}).join(""),o=i+n+s+a+t.bandages+(t.reloadT>0);o!==this.lastWeaponKey&&(this.lastWeaponKey=o,this.weaponEl.innerHTML=`<div class="wname">${i}${t.reloadT>0?' <span class="rl">RELOADING</span>':""}</div><div class="ammo">${n}<div class="fmode">${s}</div></div><div class="slots">${a}<div class="slot"><i>X</i>Bandage<em>${t.bandages}</em></div></div>`)}updateVitals(){let t=this.game.player,e=t.state==="alive"?Math.max(0,Math.ceil(t.hp)):0;if(e!==this.lastHp||t.bleed>0!==this.lastBleed||t.stance!==this.lastStance){this.lastHp=e,this.lastBleed=t.bleed>0,this.lastStance=t.stance,this.vitals.querySelector(".hpnum").textContent=e;let i=this.vitals.querySelector(".hpfill");i.style.width=`${e}%`,i.style.background=e<30?"#e8443a":e<60?"#e8b23a":"#e9eef2",this.vitals.querySelector(".vstat").innerHTML=`${t.bleed>0?'<span class="bleed">BLEEDING \xB7 [X] bandage</span>':""}<span class="stance">${t.stance.toUpperCase()}</span><span class="cls" style="color:${oi[t.cls].color}">${oi[t.cls].name.toUpperCase()}</span>`}}updateSquad(){let t=this.game.player,e=t.squad;if(!e)return;let i=e.members.map(n=>n.name+n.state+(n===e.leader)+n.cls).join("|");i!==this.lastSquadKey&&(this.lastSquadKey=i,this.squadEl.innerHTML=`<div class="sqname">${e.name} SQUAD</div>`+e.members.map(n=>`<div class="sqm ${n.state}${n===t?" me":""}"><span class="sqc" style="background:${oi[n.cls].color}"></span>${n===e.leader?"\u2605 ":""}${n.name}<em>${n.state==="downed"?"DOWN":n.state==="dead"?"KIA":""}</em></div>`).join(""))}updateCrosshair(t){let e=this.game,i=e.player,n=e.settings.get("crosshair")&&i.state==="alive"&&i.adsT<.5&&!i.sprinting&&!e.uiBlocking();if(this.crosshair.style.display=n?"block":"none",n){let s=i.gun?i.spread():1.2,a=e.camera,o=Math.tan(s*.5*le)/Math.tan(a.fov*.5*le)*window.innerHeight*.5;this.crosshair.style.setProperty("--gap",`${zt(o,3,140)}px`)}this.hitT-=t,this.hitmarker.style.opacity=this.hitT>0?1:0,this.hitmarker.className="hitmarker"+(this.hitKill?" kill":"")+(this.hitHead?" head":"")}updateCapture(){let t=this.game,e=t.player,i=null;if(e.state==="alive"){for(let h of t.mode.flags)if(Math.hypot(e.pos.x-h.x,e.pos.z-h.z)<h.r&&Math.abs(e.pos.y-h.y)<14){i=h;break}}if(!i){this.capEl.style.display="none";return}this.capEl.style.display="block";let n=e.team,s=this.capEl.querySelector(".caplabel"),a=i.contested?"CONTESTED":i.capTeam===n?i.owner===-1?"CAPTURING":"NEUTRALIZING":i.capTeam===1-n?"LOSING":i.owner===n?"SECURED":t.mode.capturable(i,n)?"":"LOCKED";s.innerHTML=`<b>${i.id}</b> ${i.name} <span>${a}</span> <i>${i.counts[n]} vs ${i.counts[1-n]}</i>`;let o=this.capEl.querySelector(".capfill"),l=Math.abs(i.progress),c=i.progress>=0?0:1;o.style.width=`${l*100}%`,o.style.background=i.progress===0?Sn:c===n?Qe:ai}worldToMap(t,e,i){let n=this.game.world.terrain.half;return[(t+n)/(n*2)*i,(e+n)/(n*2)*i]}drawMinimap(){let t=this.game,e=t.player,i=this.minimap.getContext("2d"),n=220,s=110,a=t.world.mapImage,o=t.world.terrain.half,l=170,c=s/l;i.save(),i.clearRect(0,0,n,n),i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.clip(),i.fillStyle="#1a1f22",i.fillRect(0,0,n,n),i.translate(s,s),i.rotate(e.yaw);let h=a.width/(o*2);i.globalAlpha=.92,i.drawImage(a,(-o-e.pos.x)*c,(-o-e.pos.z)*c,o*2*c,o*2*c),i.globalAlpha=1;let u=(d,f)=>[(d-e.pos.x)*c,(f-e.pos.z)*c];for(let d of t.mode.flags){let[f,p]=u(d.x,d.z);i.strokeStyle=d.owner===-1?Sn:d.owner===e.team?Qe:ai,i.lineWidth=2,i.globalAlpha=.5,i.beginPath(),i.arc(f,p,d.r*c,0,Math.PI*2),i.stroke(),i.globalAlpha=1}this.drawUnits(i,u,e,3.2,l),i.restore(),i.save(),i.translate(s,s);for(let d of t.mode.flags){let[f,p]=u(d.x,d.z),v=Math.cos(e.yaw),g=Math.sin(e.yaw),m=f*v-p*g,y=f*g+p*v,x=Math.hypot(m,y);x>s-12&&(m*=(s-12)/x,y*=(s-12)/x),i.fillStyle="rgba(0,0,0,0.6)",i.beginPath(),i.arc(m,y,8,0,7),i.fill(),i.fillStyle=d.owner===-1?Sn:d.owner===e.team?Qe:ai,i.font="bold 11px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(d.id,m,y+1)}i.fillStyle="#ffd76a",i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore(),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=2,i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.stroke()}drawUnits(t,e,i,n,s){let a=this.game,o=a.time;for(let c of a.soldiers){if(c===i||c.state==="dead")continue;let h=c.team===i.team;if(!(h||c.spotUntil>o||o-c.lastLoudShot<1.2&&c.pos.distanceTo(i.pos)<160))continue;let[d,f]=e(c.pos.x,c.pos.z);if(!(s&&Math.hypot(d,f)>1e9)){if(t.fillStyle=h?c.squad===i.squad?Qi:Qe:ai,c.state==="downed"){t.fillRect(d-n,f-1,n*2,2),t.fillRect(d-1,f-n,2,n*2);continue}t.save(),t.translate(d,f),t.rotate(-c.yaw),t.beginPath(),t.moveTo(0,-n*1.4),t.lineTo(n,n),t.lineTo(-n,n),t.closePath(),t.fill(),t.restore()}}for(let c of a.combat.placed){if(c.team!==i.team||c.type!=="rally"&&c.type!=="beacon"||c.squad!==i.squad)continue;let[h,u]=e(c.x,c.z);t.fillStyle=c.type==="rally"?"#f0e070":"#30ff80",t.fillRect(h-3,u-3,6,6)}let l=i.squad;if(l&&l.order&&l.order.type==="move"){let[c,h]=e(l.order.x,l.order.z);t.strokeStyle=Qi,t.lineWidth=2,t.beginPath(),t.arc(c,h,5,0,7),t.stroke()}}drawMap(t,e,i,n){let s=this.game,a=s.player,o=t.getContext("2d"),l=t.width;o.clearRect(0,0,l,l),o.drawImage(s.world.mapImage,0,0,l,l);let c=s.world.terrain.half,h=(g,m)=>[(g+c)/(c*2)*l,(m+c)/(c*2)*l],u=s.world.def.playHalf,[d,f]=h(-u,-u),[p,v]=h(u,u);o.strokeStyle="rgba(255,80,60,0.6)",o.setLineDash([8,6]),o.lineWidth=2,o.strokeRect(d,f,p-d,v-f),o.setLineDash([]),s.world.def.hq.forEach((g,m)=>{let[y,x]=h(g.x,g.z);o.fillStyle=m===a.team?Qe:ai,o.globalAlpha=.25,o.beginPath(),o.arc(y,x,g.r/(c*2)*l,0,7),o.fill(),o.globalAlpha=1,o.font="bold 14px Rajdhani",o.textAlign="center",o.fillText("HQ",y,x+5)});for(let g of s.mode.flags){let[m,y]=h(g.x,g.z),x=g.owner===-1?Sn:g.owner===a.team?Qe:ai;o.fillStyle="rgba(0,0,0,0.55)",o.beginPath(),o.arc(m,y,16,0,7),o.fill(),o.strokeStyle=x,o.lineWidth=3,o.beginPath(),o.arc(m,y,16,0,7),o.stroke(),o.fillStyle=x,o.font="bold 18px Rajdhani",o.textAlign="center",o.textBaseline="middle",o.fillText(g.id,m,y+1),o.font="600 12px Rajdhani",o.fillStyle="#fff",o.fillText(g.name,m,y+28)}if(o.textBaseline="alphabetic",(a.state!=="dead"||!e)&&this.drawUnits(o,h,a,4,0),a.state!=="dead"){let[g,m]=h(a.pos.x,a.pos.z);o.save(),o.translate(g,m),o.rotate(-a.yaw),o.fillStyle="#ffd76a",o.beginPath(),o.moveTo(0,-9),o.lineTo(6,7),o.lineTo(-6,7),o.closePath(),o.fill(),o.restore()}if(i)for(let g of i){let[m,y]=h(g.x,g.z),x=n===g;o.fillStyle=x?"#ffd76a":g.kind==="squad"?Qi:g.kind==="rally"?"#f0e070":g.kind==="beacon"?"#30ff80":Qe,o.strokeStyle="#000",o.lineWidth=2;let _=x?11:8;o.beginPath(),o.moveTo(m,y-_),o.lineTo(m+_,y),o.lineTo(m,y+_),o.lineTo(m-_,y),o.closePath(),o.fill(),o.stroke(),(x||g.kind!=="flag")&&(o.font="bold 12px Rajdhani",o.fillStyle="#fff",o.textAlign="center",o.fillText(g.label,m,y-_-5)),g._mx=m,g._my=y}}drawMarkers(t){let e=this.game,i=e.player,n=this.mctx,s=e.camera,a=this.markers.width,o=this.markers.height,l=this.dpr;n.clearRect(0,0,a,o);for(let p=this.dmg.length-1;p>=0;p--){let v=this.dmg[p];if(v.t-=t,v.t<=0){this.dmg.splice(p,1);continue}n.save(),n.translate(a/2,o/2),n.rotate(-v.a),n.strokeStyle=`rgba(255,50,40,${Math.min(1,v.t)})`,n.lineWidth=6*l,n.beginPath(),n.arc(0,0,90*l,-Math.PI/2-.25,-Math.PI/2+.25),n.stroke(),n.restore()}if(e.uiBlocking()&&i.state==="dead")return;let c=(p,v,g)=>(Lr.set(p,v,g).applyMatrix4(s.matrixWorldInverse),Lr.z>-.2?null:(Lr.applyMatrix4(s.projectionMatrix),[(Lr.x*.5+.5)*a,(-Lr.y*.5+.5)*o])),h=(p,v)=>[zt(p,30*l,a-30*l),zt(v,30*l,o-30*l)];n.textAlign="center",n.textBaseline="middle";for(let p of e.mode.flags){let v=c(p.x,p.y+7,p.z),g=p.owner===-1?Sn:p.owner===i.team?Qe:ai,m=Math.hypot(p.x-i.pos.x,p.z-i.pos.z);if(!v)continue;let[y,x]=h(v[0],v[1]),_=i.squad&&i.squad.order&&i.squad.order.flag===p;n.globalAlpha=m<p.r?.5:.95,n.fillStyle="rgba(0,0,0,0.5)",n.beginPath(),n.arc(y,x,13*l,0,7),n.fill(),n.strokeStyle=g,n.lineWidth=2.5*l,n.beginPath(),n.arc(y,x,13*l,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.abs(p.progress)),n.stroke(),n.fillStyle=g,n.font=`bold ${15*l}px Rajdhani, sans-serif`,n.fillText(p.id,y,x+1*l),n.font=`600 ${11*l}px Rajdhani, sans-serif`,n.fillStyle="#fff",n.fillText(`${Math.round(m)}m`,y,x+22*l),_&&(n.fillStyle=Qi,n.fillText(i.squad.order.type.toUpperCase(),y,x-22*l)),n.globalAlpha=1}let u=i.squad;if(u&&u.order&&u.order.type==="move"){let p=c(u.order.x,e.world.terrain.heightAt(u.order.x,u.order.z)+2,u.order.z);p&&(n.strokeStyle=Qi,n.lineWidth=2*l,n.beginPath(),n.arc(p[0],p[1],8*l,0,7),n.stroke(),n.fillStyle=Qi,n.font=`600 ${11*l}px Rajdhani`,n.fillText("MOVE",p[0],p[1]-16*l))}let d=e.time,f=e.settings.get("nameTags");for(let p of e.soldiers){if(p===i||p.state==="dead")continue;let v=p.pos.distanceTo(s.position);if(p.team===i.team){let g=p.squad===i.squad;if(p.state==="downed"&&v<90){let y=c(p.pos.x,p.pos.y+1,p.pos.z);if(y){n.fillStyle="#ff5a4a";let x=7*l;n.fillRect(y[0]-x,y[1]-x*.33,x*2,x*.66),n.fillRect(y[0]-x*.33,y[1]-x,x*.66,x*2),n.font=`600 ${10*l}px Rajdhani`,n.fillStyle="#fff",n.fillText(`${Math.round(v)}m`,y[0],y[1]+14*l)}continue}if(!f||v>(g?250:45))continue;let m=c(p.pos.x,p.pos.y+p.bodyH+.5,p.pos.z);if(!m)continue;n.fillStyle=g?Qi:Qe,n.globalAlpha=zt(1.3-v/(g?250:45),.35,.95),n.beginPath(),n.moveTo(m[0]-5*l,m[1]-4*l),n.lineTo(m[0]+5*l,m[1]-4*l),n.lineTo(m[0],m[1]+3*l),n.closePath(),n.fill(),v<30&&(n.font=`600 ${11*l}px Rajdhani`,n.fillText(p.name,m[0],m[1]-12*l)),n.globalAlpha=1}else if(p.spotUntil>d&&p.state==="alive"){let g=c(p.pos.x,p.pos.y+p.bodyH+.45,p.pos.z);if(!g)continue;let m=5*l;n.fillStyle=ai,n.beginPath(),n.moveTo(g[0],g[1]-m),n.lineTo(g[0]+m,g[1]),n.lineTo(g[0],g[1]+m),n.lineTo(g[0]-m,g[1]),n.closePath(),n.fill()}}for(let p of e.combat.placed){if(p.team!==i.team||p.squad!==i.squad||p.type!=="rally"&&p.type!=="beacon")continue;let v=c(p.x,p.y+1.5,p.z);v&&(n.fillStyle=p.type==="rally"?"#f0e070":"#30ff80",n.font=`bold ${11*l}px Rajdhani`,n.fillText(p.type==="rally"?"\u25B2 RALLY":"\u25B2 BEACON",v[0],v[1]))}if(i.state==="alive"&&i.gun&&i.gun.stats.laser&&i.adsT<.6){let p=i.eye(new C),v=i.aimDir(new C),g=e.world.collision.raycast(p.x,p.y,p.z,v.x,v.y,v.z,60,{});if(g){let m=c(g.x,g.y,g.z);m&&(n.fillStyle="rgba(255,40,40,0.9)",n.beginPath(),n.arc(m[0],m[1],2.5*l,0,7),n.fill())}}}drawBoard(){let t=this.game,e=t.player,i=n=>{let s=t.teams[n].slice().sort((o,l)=>l.stats.score-o.stats.score),a=t.mode.type==="tdm";return`<div class="sbteam t${n===e.team?"f":"e"}"><div class="sbh"><b>${$e[n].name}</b><span>${a?t.mode.kills[n]+" kills":t.mode.tickets[n]+" tickets"}</span></div>
        <table><tr><th></th><th>Name</th><th>Squad</th><th>K</th><th>D</th><th>A</th><th>Rev</th><th>Score</th></tr>
        ${s.map(o=>`<tr class="${o===e?"me":""} ${o.state}"><td><i style="background:${oi[o.cls].color}"></i></td><td>${o.squad&&o.squad.leader===o?"\u2605 ":""}${o.name}</td><td>${o.squad?o.squad.name:""}</td><td>${o.stats.kills}</td><td>${o.stats.deaths}</td><td>${o.stats.assists}</td><td>${o.stats.revives}</td><td>${o.stats.score}</td></tr>`).join("")}</table></div>`};this.board.innerHTML=`<div class="sbtitle">${t.world.def.name} \xB7 ${t.modeName}</div><div class="sbcols">${i(e.team)}${i(1-e.team)}</div>`}dispose(){this.root.remove()}};var my=["Viper","Hawk","Nomad","Rook","Bishop","Ghost","Mako","Jester","Reaper","Kodiak","Talon","Sable","Ranger","Wolf","Cobra","Bravo","Atlas","Raven","Moose","Hound","Diesel","Patch","Tank","Specter","Flint","Drifter","Saint","Gunny","Sarge","Ace","Blaze","Ox","Lynx","Falcon","Orca","Shadow","Grizzly","Rocco","Duke","Ziggy","Bear","Fox","Scout","Hammer","Ice","Kilo","Mustang","Pyro","Rex","Titan","Wasp","Yeti","Zulu","Cricket","Doc","Smokey","Tex","Chief","Boomer","Echo","Pilot","Sparks","Crow","Tusk"],hf=[["leader","medic","assault","support"],["leader","assault","engineer","medic"],["leader","support","recon","assault"],["leader","medic","engineer","assault"]],uf={morning:{sat:1.1,contrast:1.06,lift:[.01,.012,.02],gamma:[1,1,1],gain:[1.03,1,.96]},noon:{sat:1.06,contrast:1.05,lift:[0,0,.01],gamma:[1,1,1],gain:[1,1,.98]},afternoon:{sat:1.04,contrast:1.07,lift:[.015,.01,0],gamma:[1,1,1],gain:[1.05,1,.9]},dusk:{sat:1.12,contrast:1.08,lift:[.02,0,.02],gamma:[1,1,1],gain:[1.08,.96,.88]},night:{sat:.85,contrast:1.05,lift:[0,.01,.03],gamma:[1,1,1.05],gain:[.92,.98,1.1]}},Oa=class{constructor(t,e){this.app=t,this.config=e,this.renderer=t.renderer,this.settings=t.settings,this.audio=t.audio,this.input=t.input,this.menus=t.menus,this.time=0,this.frame=0,this.paused=!1,this.soldiers=[],this.teams=[[],[]],this.oobTime=0,this.respawnAt=0,this.lastDeath=null,this.ended=!1}async init(t){let e=this.config,i=ia[e.map];this.def=i,Fd(),Od();let n=this.scene=new kn,s=window.innerWidth,a=window.innerHeight;this.camera=new Se(70,s/a,.06,this.settings.get("viewDistance")),n.add(this.camera),this.vmScene=new kn,this.vmCamera=new Se(58,s/a,.01,10),this.vmScene.add(new Cs(14543103,5261374,1.1)),this.vmLight=new gn(16777215,1.6),this.vmScene.add(this.vmLight),this.env=new ya(this.renderer,n,this.camera,this.settings);let o=e.time==="default"?i.time:e.time;this.timeName=o,t("Lighting the sky",.02),this.world=new va(i,n),await this.world.build(t),this.env.setTime(o),this.vmLight.color.copy(this.env.sun.color).multiplyScalar(this.env.time.night?.6:1),this.vmScene.environment=this.env.envMap,this.vmScene.environmentIntensity=.6,t("Spawning soldiers",.95),this.water=this.world.terrain.waterLevel!==null?new _a(this.world,n,this.env):null,this.grass=new ga(this.world,n),this.fx=new Pa(this),this.combat=new wn(this),this.mode=new na(this,e.mode,e.tickets?{tickets:e.tickets}:{}),this.modeName=zs[e.mode].name,this.ai=new ka(this),this.squads=new Da(this),this.createSoldiers(),this.post=new Ca(this.renderer,n,this.camera,this.vmScene,this.vmCamera,this.settings),this.post.hidden=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]],this.water&&(this.water.hideList=[...this.fx.hidden]),this.post.setGrade(uf[o]||uf.morning),this.hud=new Fa(this),this.playerCtl=new Ua(this,this.player),this.applySettings(),this.unsub=l=>this.applySettings(l),this.settings.onChange(this.unsub),this.audio.startAmbience(i.biome,this.env.time.night);for(let l of this.soldiers)l.isPlayer||(l.respawnAt=W(0,2.5));return this.respawnAt=0,this.player.state="dead",this.deployCam={a:0},this}createSoldiers(){let t=this.config.team??0,e=my.slice().sort(()=>Math.random()-.5),i=0;for(let n=0;n<2;n++)for(let s=0;s<4;s++)for(let a=0;a<4;a++){let o=n===t&&s===0&&a===3,l=hf[(s+n)%hf.length][a],c=new La(this,n,o?this.config.name:e[i++%e.length],o);c.setLoadout(o?JSON.parse(JSON.stringify(this.menus.loadout)):oa(l)),o||(c.brain=new Na(c,this)),c.state="dead",c.respawnAt=0,this.soldiers.push(c),this.teams[n].push(c),o&&(this.player=c)}this.squads.build(this.teams,4);for(let n of this.squads.list[t])n.members.includes(this.player)&&(this.playerSquad=n)}applySettings(t){let e=this.settings;if(this.env.applySettings(),this.post.applySettings(),this.grass.setLevel(e.get("grass")),this.grass.mesh?this.post.hidden=[...this.fx.hidden,this.grass.mesh]:this.post.hidden=[...this.fx.hidden],this.water&&(this.water.setQuality(e.get("waterReflections"),e.get("waterWaves")),this.water.hideList=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]]),this.world.vegetation.setWind(e.get("treeWind")),this.fx.setQuality(e),this.camera.far=e.get("viewDistance"),this.camera.updateProjectionMatrix(),this.audio.setVolume(e.get("volume")),t==="difficulty")for(let i of this.soldiers)i.brain&&i.brain.setDifficulty(e.get("difficulty"));(t==="renderScale"||t==="antialias"||t===void 0)&&this.app.resize()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.vmCamera.aspect=t/e,this.vmCamera.updateProjectionMatrix();let i=this.renderer.getDrawingBufferSize(new nt);this.post.setSize(i.x,i.y),this.hud.resize()}uiBlocking(){return this.paused||this.player.state==="dead"||this.ended}spawnOptions(t){let e=[],i=t.team,n=this.def.hq[i];e.push({kind:"hq",key:"hq",label:"HQ",x:n.x,z:n.z});for(let s of this.mode.flagSpawns(i))e.push({kind:"flag",key:"flag"+s.id,label:`${s.id} \xB7 ${s.name}`,x:s.x,z:s.z,flag:s});if(t.squad){for(let s of t.squad.members)s===t||s.state!=="alive"||!this.safeToSpawnOn(s)||e.push({kind:"squad",key:"sq"+s.id,label:`${s===t.squad.leader?"\u2605 ":""}${s.name}`,x:s.pos.x,z:s.pos.z,mate:s});for(let s of this.combat.placed)(s.type==="rally"||s.type==="beacon")&&s.squad===t.squad&&!s.blocked&&e.push({kind:s.type,key:s.type+s.owner.id,label:s.type==="rally"?"Rally point":"Spawn beacon",x:s.x,z:s.z,placed:s})}return e}safeToSpawnOn(t){if(this.time-t.lastDamage<6||t.swimming||t.vault)return!1;for(let e of this.teams[1-t.team])if(e.state==="alive"&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<22)return!1;if(t.brain){for(let[,e]of t.brain.known)if(e.vis)return!1}return!0}resolveSpawn(t,e){let i=this.world.nav,n=this.teams[1-e].filter(d=>d.state==="alive"),s=(d,f)=>{let p=1e9;for(let v of n)p=Math.min(p,Math.hypot(v.pos.x-d,v.pos.z-f));return p},a,o,l,c,h=(d,f)=>Math.atan2(-(d-a),-(f-o)),u=this.mode.flags.length?this.mode.flags.reduce((d,f)=>({x:d.x+f.x/this.mode.flags.length,z:d.z+f.z/this.mode.flags.length}),{x:0,z:0}):{x:0,z:0};if(t.kind==="squad"&&t.mate&&t.mate.state==="alive"){let d=t.mate,f=d.forward(new C),p=[[d.pos.x-f.x*1.6,d.pos.z-f.z*1.6],[d.pos.x+1.2,d.pos.z],[d.pos.x-1.2,d.pos.z],[d.pos.x,d.pos.z+1.2]];for(let[v,g]of p){let m=this.world.collision.groundAt(v,g,d.pos.y+.6);if(Math.abs(m-d.pos.y)<.6&&!this.world.collision.overlapsAny(v,m+.05,g,.3,1.7)){a=v,o=g,l=m;break}}a===void 0&&(a=d.pos.x,o=d.pos.z,l=d.pos.y),c=d.yaw}else{let d=t.kind==="hq"?20:t.kind==="flag"?t.flag.r*.8:4,f=null,p=-1;for(let v=0;v<8;v++){let[g,m,y]=i.randomWalkableNear(t.x,t.z,d),x=s(g,m)+Math.random()*5;x>p&&(p=x,f=[g,m,y])}[a,o,l]=f,l=this.world.collision.groundAt(a,o,l+1),c=h(u.x,u.z)}return{x:a,y:l,z:o,yaw:c}}deployPlayer(t,e){let i=this.player;if(i.squad)if(t.cls==="leader"){let s=i.squad.leader;i.squad.leader=i,s&&s!==i&&s.loadout.cls==="leader"&&s.setLoadout(oa("assault")),(!i.squad.order||i.squad.order.type!=="follow")&&this.squads.setOrder(i.squad,"follow",null,0,0)}else i.squad.leader===i&&(this.squads.pickLeader(i.squad),i.squad.leader===i&&(i.squad.leader=i.squad.members.find(s=>s!==i)||i),i.squad.order&&i.squad.order.type==="follow"&&(i.squad.order=null));i.setLoadout(t);let n=this.resolveSpawn(e,i.team);i.spawn(n.x,n.y,n.z,n.yaw),this.playerCtl.vmKey=null,this.playerCtl.crouchToggle=!1,this.menus.hideAll(),this.hud.setVisible(!0),this.app.lockPointer(),this.audio.play2d("deploy",{vol:.4}),this.oobTime=0}botSpawn(t){let e=t.squad,i=[],n=e&&e.leader,s=e&&e.order;if(n&&n!==t&&n.state==="alive"&&this.safeToSpawnOn(n)&&Math.random()<.65&&i.push({kind:"squad",mate:n,x:n.pos.x,z:n.pos.z}),!i.length&&e){let o=this.combat.placed.find(l=>(l.type==="rally"||l.type==="beacon")&&l.squad===e&&!l.blocked);o&&Math.random()<.8&&i.push({kind:"rally",x:o.x,z:o.z})}if(!i.length&&e&&Math.random()<.35){let o=e.members.filter(l=>l!==t&&l.state==="alive"&&this.safeToSpawnOn(l));if(o.length){let l=o[Math.floor(Math.random()*o.length)];i.push({kind:"squad",mate:l,x:l.pos.x,z:l.pos.z})}}if(!i.length){let o=this.mode.flagSpawns(t.team);if(o.length&&s){let l=null,c=1e9;for(let u of o){let d=Math.hypot(u.x-s.x,u.z-s.z);d<c&&(c=d,l=u)}let h=this.def.hq[t.team];l&&c<Math.hypot(h.x-s.x,h.z-s.z)+30&&i.push({kind:"flag",flag:l,x:l.x,z:l.z})}}if(!i.length){let o=this.def.hq[t.team];i.push({kind:"hq",x:o.x,z:o.z})}let a=this.resolveSpawn(i[0],t.team);Math.random()<.15&&t.squad&&t.squad.leader!==t?t.setLoadout(oa(t.cls)):t.setLoadout(t.loadout),t.spawn(a.x,a.y,a.z,a.yaw),t.brain.reset()}onShot(t,e){let i=e.stats,n=t===this.player,s=n&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new C),a=t.aimDir(new C);(!n||!this.playerCtl.isScoped())&&this.fx.muzzle(s.x,s.y,s.z,a.x,a.y,a.z,i.type==="lmg"||i.type==="sniper"?1.3:i.type==="pistol"||i.type==="smg"?.7:1,i.noFlash,n),this.audio.gunshot(i.suppressed?"suppressed":i.sound,t.pos.x,t.pos.y+1.5,t.pos.z,i.suppressed,n),n&&i.bolt&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5}),350),n&&i.pump&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5,rate:.8}),250);let o=i.suppressed?25:i.type==="sniper"||i.type==="lmg"?320:220;for(let l of this.teams[1-t.team])!l.brain||l.state!=="alive"||Math.abs(l.pos.x-t.pos.x)>o||Math.abs(l.pos.z-t.pos.z)>o||l.pos.distanceTo(t.pos)<o&&l.brain.onSound(t.pos.x,t.pos.z,t,!0)}onFootstep(t,e){let i=this.audio.listener;if(Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<40){let a=t.move.onTerrain,o=t.inWater?"stepWater":a?"stepGrass":"stepHard";t.isPlayer?this.audio.play2d(o,{vol:.16*e+.05,vary:.2}):this.audio.play3d(o,t.pos.x,t.pos.y,t.pos.z,{vol:.5*e,maxDist:30,ref:3,vary:.2})}let s=9+e*10;for(let a of this.teams[1-t.team])a.brain&&a.state==="alive"&&a.pos.distanceTo(t.pos)<s&&a.brain.onSound(t.pos.x,t.pos.z,t,!1)}onVault(t){t.isPlayer&&this.audio.play2d("stepHard",{vol:.35,rate:.7})}onReloadSound(t,e){t.isPlayer?this.audio.play2d(e,{vol:.5}):this.audio.play3d(e,t.pos.x,t.pos.y+1.2,t.pos.z,{vol:.5,maxDist:18})}onDryFire(t){t.isPlayer&&this.audio.play2d("dry",{vol:.5})}onSwitch(t){t.isPlayer&&this.audio.play2d("switch",{vol:.35})}onBandage(t){t.isPlayer&&this.audio.play2d("bandage",{vol:.5})}onGrenadeThrown(){}onGadgetFired(){}onSpawnPointPlaced(t){t.squad===this.player.squad&&this.hud.toast(`${t.owner.name} placed a ${t.type==="rally"?"rally point":"spawn beacon"}`)}onDamaged(t,e,i,n,s){t.brain&&t.brain.onDamaged(e,s),t===this.player&&(this.hud.damageFrom(s),this.audio.play2d("hurt",{vol:.5}),this.dmgFlash=Math.min(1,(this.dmgFlash||0)+i/50),t.pitch+=.012*Math.min(3,i/15),this.fx.shake(Math.min(.3,i/120)))}onHit(t,e,i,n,s){if(t!==this.player)return;let a=e.state!=="alive"&&s;this.hud.hit(a,n==="head"),this.audio.play2d(n==="head"?"headshot":"hit",{vol:n==="head"?.35:.45})}creditKill(t,e,i,n){if(!(!t||t===e||t.team===e.team)){t.stats.kills++,this.addScore(t,100,"ENEMY DOWN"),n&&this.addScore(t,25,"HEADSHOT");for(let s of this.mode.flags)if(Math.hypot(e.pos.x-s.x,e.pos.z-s.z)<s.r*1.5){this.addScore(t,25,s.owner===t.team?"FLAG DEFEND":"FLAG ATTACK");break}for(let[s,a]of e.damagers)s!==t&&s.team!==e.team&&a>=20&&(s.stats.assists++,this.addScore(s,50,"ASSIST"));t===this.player&&this.audio.play2d("kill",{vol:.4})}}onDowned(t,e,i,n){this.hud.addKill(e,t,i,n,!0),this.creditKill(e,t,i,n),t.downCredited=!0,t===this.player&&(this.playerCtl.giveUpT=0,this.audio.play2d("heartbeat",{vol:.6}))}onKilled(t,e,i,n,s){if(s?e&&t.lastAttacker&&e!==t&&i!=="Bled out"&&i!=="Gave up"&&i!=="Redeploy"&&this.hud.addKill(e,t,i,n,!1):(this.hud.addKill(e,t,i,n,!1),this.creditKill(e,t,i,n)),this.mode.onDeath(t.team),e&&e.team!==t.team&&this.mode.type==="tdm"&&this.mode.onKill(e.team),t.reviver&&(t.reviver=null),t.downCredited=!1,t.respawnAt=this.time+(t.isPlayer?7:W(7,10)),t===this.player){let a=e&&e!==t?e:null;this.lastDeath={killer:a?a.name:null,weapon:i,head:n,dist:a?a.pos.distanceTo(t.pos):0},this.respawnAt=this.time+(i==="Redeploy"?1:7),this.deathT=0,this.deathPos=t.pos.clone(),this.killerRef=a,this.app.unlockPointer(),setTimeout(()=>{this.player.state==="dead"&&!this.ended&&this.menus.showDeploy(this)},i==="Redeploy"?50:1800)}}onRevived(t,e){e&&(e.stats.revives++,this.addScore(e,75,"REVIVE"),this.hud.addRevive(e,t)),t.reviver=null,t===this.player&&this.hud.toast(`Revived by ${e?e.name:"a teammate"}`)}reviveTick(t,e,i){if(e.state!=="downed"||t.state!=="alive"){t.reviveProgress=0;return}e.reviver=t,t.reviveProgress+=i/(t.isMedic?1.8:4.5),t.reviveProgress>=1&&(t.reviveProgress=0,e.revive(t))}onFlagEvent(t,e,i,n){let s=this.player,a=i===s.team;if(e==="captured"){this.hud.toast(`${a?"We captured":"Enemy captured"} ${t.id} \xB7 ${t.name}`,3),this.audio.play2d(a?"capture":"lost",{vol:.5});for(let o of this.teams[i])o.state==="alive"&&Math.hypot(o.pos.x-t.x,o.pos.z-t.z)<t.r&&(o.stats.caps++,this.addScore(o,150,"FLAG CAPTURED"))}else if(e==="neutralized"){n===s.team&&(this.hud.toast(`We lost ${t.id} \xB7 ${t.name}`,3),this.audio.play2d("lost",{vol:.4}));for(let o of this.teams[i])o.state==="alive"&&Math.hypot(o.pos.x-t.x,o.pos.z-t.z)<t.r&&this.addScore(o,75,"FLAG NEUTRALIZED")}}onMatchEnd(t){this.ended=!0,this.app.unlockPointer(),setTimeout(()=>{this.hud.setVisible(!1),this.menus.showEnd(this,t)},2500)}addScore(t,e,i){t.stats.score+=e,t===this.player&&this.hud.scorePopup(i,e)}update(t){if(this.paused)return;this.time+=t,this.frame++,Ni.uTime.value+=t;let e=this.player;this.playerCtl.update(t);for(let i of this.soldiers){if(i.state==="dead"){!i.isPlayer&&this.time>=i.respawnAt&&!this.ended&&this.botSpawn(i),i.updateVitals(t,this.time);continue}if(i.brain&&i.brain.update(t),i.state==="alive"){let n=t>.034?2:1;for(let s=0;s<n;s++)i.updateMovement(t/n);i.updateWeapon(t,this.time)}else i.state==="downed"&&(i.vel.x*=.8,i.vel.z*=.8,i.vel.y-=20*t,this.world.collision.move(i.pos,i.vel,t,.3,.6,.3,i.move));i.updateVitals(t,this.time),this.checkBounds(i,t)}this.combat.update(t),this.mode.update(t),this.squads.update(t),this.ai.update(),this.fx.update(t),this.world.updateFlags(this.mode,this.time);for(let i of this.soldiers)i.updateAnim(t,this.camera.position);this.updateCamera(t),this.dmgFlash=Math.max(0,(this.dmgFlash||0)-t*1.5),this.ended||(this.hud.update(t),e.state==="dead"&&this.menus.updateDeploy(this))}simulate(t,e=1/30){let i=Math.round(t/e);for(let n=0;n<i;n++)this.update(e)}checkBounds(t,e){let i=this.def.playHalf,n=this.def.hq[1-t.team],s=Math.abs(t.pos.x)>i||Math.abs(t.pos.z)>i||Math.hypot(t.pos.x-n.x,t.pos.z-n.z)<n.r;t===this.player?s&&t.state==="alive"?(this.oobTime<=0&&(this.oobTime=10),this.oobTime-=e,this.oobTime<=.01&&(this.oobTime=0,t.die(null,"Deserted",!1,!1))):this.oobTime=0:s&&t.state==="alive"?(t.oob=(t.oob||0)+e,t.oob>12&&(t.oob=0,t.die(null,"Deserted",!1,!1))):t.oob=0}updateCamera(t){let e=this.player,i=this.camera;if(e.state!=="dead"){this.playerCtl.updateCamera(t),this.audio.setListener(i.position.x,i.position.y,i.position.z,-Math.sin(e.yaw),-Math.cos(e.yaw));return}if(this.deathT=(this.deathT||0)+t,this.deathT<1.8&&this.deathPos){let n=this.killerRef,s=n?n.pos:this.deathPos,a=this.deathPos.clone().add(new C(0,2.5+this.deathT*1.5,0));i.position.lerp(a,1-Math.exp(-t*4)),i.lookAt(s.x,s.y+1.2,s.z)}else{let n=this.menus.selectedSpawn,s=n?new C(n.x,this.world.terrain.heightAt(n.x,n.z),n.z):new C(0,0,0);this.deployCam.a+=t*.08;let a=70,o=new C(s.x+Math.cos(this.deployCam.a)*a,s.y+55,s.z+Math.sin(this.deployCam.a)*a);this.deployCamInit||(i.position.copy(o),this.deployCamInit=!0),i.position.lerp(o,1-Math.exp(-t*1.5)),i.lookAt(s)}i.fov=60,i.updateProjectionMatrix(),i.updateMatrixWorld(),this.playerCtl.vmRoot.visible=!1,this.audio.setListener(i.position.x,i.position.y,i.position.z,0,-1)}render(t){let e=this.camera;if(this.env.update(e.position),this.grass.update(e.position),this.frame%30===0&&this.fx.setLighting(this.env),this.water){this.water.update(this.env);let a=this.renderer.getDrawingBufferSize(new nt);this.water.renderReflection(this.renderer,this.scene,e,a.x,a.y)}let i=this.player,n=60;if(i.state==="alive"&&i.adsT>.3){let a=i.eye(new C),o=i.aimDir(new C),l=this.world.collision.raycast(a.x,a.y,a.z,o.x,o.y,o.z,300,{});n=l?l.t:300}let s=this.playerCtl.isScoped();this.post.render(t,{damage:zt(this.dmgFlash||0,0,1)*.8+(i.state==="alive"&&i.hp<35?(35-i.hp)/35*.5:0),suppress:i.state==="alive"?i.suppression:0,flash:i.flashed>.6?(i.flashed-.6)*2.5:0,downed:i.state==="downed"?.6+.4*(1-i.downedHp/100):0,ads:i.state==="alive"&&!s?i.adsT*(i.gun&&i.gun.stats.zoom>1.2?1:.6):0,focus:n,menu:i.state==="dead"&&this.deathT>1.8||this.paused||this.ended})}dispose(){this.audio.stopAmbience(),this.hud.dispose(),this.playerCtl.dispose(),this.env.dispose(),this.post.composer.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.settings.listeners=this.settings.listeners.filter(t=>t!==this.unsub)}};var Rh=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new Ao({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=mr,this.renderer.outputColorSpace=Le,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wc,this.settings=Ko,this.audio=new Jo,this.input=new Qo(this.canvas),this.params=new URLSearchParams(location.search),this.params.get("test")&&(this.input.allowUnlocked=!0),this.params.get("preset")&&Ko.set("preset",this.params.get("preset")),this.menus=new ua(this),this.matchConfig={map:this.params.get("map")||"greenhollow",mode:this.params.get("mode")||"conquest",time:this.params.get("time")||"default",team:0,tickets:0,name:"You"},this.game=null,this.last=performance.now(),window.addEventListener("resize",()=>this.resize());let t=()=>this.audio.unlock();window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),this.input.onLockChange=e=>{e||(this.lastUnlock=performance.now()),!e&&this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&!this.input.allowUnlocked&&this.pause()},window.addEventListener("keydown",e=>{e.code!=="Escape"||!this.game||this.game.ended||performance.now()-(this.lastUnlock||0)<400||(this.game.paused?this.resume():this.game.player.state!=="dead"&&this.pause())}),this.canvas.addEventListener("click",()=>{this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&this.lockPointer()}),this.resize(),this.menus.showMain(),requestAnimationFrame(e=>this.loop(e)),this.params.get("autostart")&&this.startMatch().then(()=>{this.params.get("autodeploy")&&setTimeout(()=>this.autoDeploy(),300)})}autoDeploy(){let t=this.game;t&&(this.menus.showDeploy(t),t.respawnAt=0,this.menus.updateDeploy(t),this.menus.tryDeploy())}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2)*Ko.get("renderScale");this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.game&&this.game.resize(t,e)}lockPointer(){this.input.allowUnlocked||this.input.lock()}unlockPointer(){this.input.unlock()}async startMatch(){this.audio.unlock(),this.game&&(this.game.dispose(),this.game=null),this.menus.showLoading("Preparing",0);let t=Object.assign({},this.matchConfig),e=new Oa(this,t);try{await e.init((i,n)=>this.menus.showLoading(i,n))}catch(i){throw console.error(i),this.menus.showLoading("Failed to load: "+i.message,0),i}this.game=e,window.__fireline={app:this,game:e},this.resize(),this.menus.hideAll(),this.menus.showDeploy(e),this.last=performance.now()}quitMatch(){this.game&&(this.game.dispose(),this.game=null),this.unlockPointer(),this.menus.showMain()}pause(){this.game&&(this.game.paused=!0,this.unlockPointer(),this.menus.showPause(this.game))}resume(){this.game&&(this.game.paused=!1,this.menus.hideAll(),this.game.player.state==="dead"?this.menus.showDeploy(this.game):this.lockPointer())}loop(t){if(requestAnimationFrame(n=>this.loop(n)),this.halt){this.last=t;return}let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.05);let i=this.game;if(i)try{i.update(e),i.render(e)}catch(n){console.error(n),this.showError(n)}else this.renderer.setClearColor(724498,1),this.renderer.clear();this.input.endFrame()}showError(t){if(this.errShown)return;this.errShown=!0;let e=document.createElement("div");e.className="errbox",e.textContent="Error: "+(t&&t.message?t.message:t),document.body.appendChild(e)}};window.addEventListener("DOMContentLoaded",()=>{window.fireline=new Rh});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
