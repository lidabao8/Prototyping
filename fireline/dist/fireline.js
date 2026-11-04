(()=>{var sh="170";var Uf=0,nu=1,Nf=2;var md=1,rh=2,ji=3,Fi=0,Fe=1,Pe=2,Ae=0,xn=1,en=2,su=3,ru=4,oh=5,xi=100,Ff=101,Of=102,Bf=103,Hf=104,Ns=200,Vf=201,Gf=202,Wf=203,kl=204,Ul=205,ea=206,qf=207,ia=208,Xf=209,Yf=210,$f=211,Zf=212,jf=213,Kf=214,Nl=0,Fl=1,Ol=2,Ss=3,Bl=4,Hl=5,Vl=6,Gl=7,gd=0,Jf=1,Qf=2,vn=0,ah=1,lh=2,ch=3,Yn=4,t0=5,hh=6,uh=7;var xd=300,Ts=301,Es=302,Wl=303,ql=304,na=306,Di=1e3,Bn=1001,Xl=1002,De=1003,e0=1004;var qr=1005;var Ze=1006,il=1007;var Ji=1008;var hi=1009,vd=1010,yd=1011,dr=1012,dh=1013,Hn=1014,Ni=1015,Te=1016,fh=1017,ph=1018,yn=1020,Md=35902,bd=1021,_d=1022,ci=1023,wd=1024,Sd=1025,bs=1026,Mn=1027,Fs=1028,mh=1029,Td=1030,gh=1031;var xh=1033,Mo=33776,bo=33777,_o=33778,wo=33779,Yl=35840,$l=35841,Zl=35842,jl=35843,Kl=36196,Jl=37492,Ql=37496,tc=37808,ec=37809,ic=37810,nc=37811,sc=37812,rc=37813,oc=37814,ac=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,fc=37821,So=36492,pc=36494,mc=36495,Ed=36283,gc=36284,xc=36285,vc=36286;var To=2300,yc=2301,nl=2302,ou=2400,au=2401,lu=2402;var i0=3200,vh=3201;var yh=0,n0=1,gn="",Ee="srgb",Os="srgb-linear",sa="linear",le="srgb";var ns=7680;var cu=519,s0=512,r0=513,o0=514,Ad=515,a0=516,l0=517,c0=518,h0=519,hu=35044,$n=35048;var uu="300 es",Qi=2e3,Eo=2001,bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,or=Math.PI/180,As=180/Math.PI;function Zn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function Mh(r,t){return(r%t+t)%t}function u0(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function d0(r,t,e){return r!==t?(e-r)/(t-r):0}function ar(r,t,e){return(1-e)*r+e*t}function f0(r,t,e,i){return ar(r,t,1-Math.exp(-e*i))}function p0(r,t=1){return t-Math.abs(Mh(r,t*2)-t)}function m0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function g0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function x0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function v0(r,t){return r+Math.random()*(t-r)}function y0(r){return r*(.5-Math.random())}function M0(r){r!==void 0&&(du=r);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b0(r){return r*or}function _0(r){return r*As}function w0(r){return(r&r-1)===0&&r!==0}function S0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function T0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function E0(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function vs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Cd={DEG2RAD:or,RAD2DEG:As,generateUUID:Zn,clamp:Ne,euclideanModulo:Mh,mapLinear:u0,inverseLerp:d0,lerp:ar,damp:f0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:x0,randFloat:v0,randFloatSpread:y0,seededRandom:M0,degToRad:b0,radToDeg:_0,isPowerOfTwo:w0,ceilPowerOfTwo:S0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:E0,normalize:Ye,denormalize:vs},at=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],y=n[4],M=n[7],T=n[2],w=n[5],S=n[8];return s[0]=a*x+o*v+l*T,s[3]=a*g+o*y+l*w,s[6]=a*m+o*M+l*S,s[1]=c*x+h*v+u*T,s[4]=c*g+h*y+u*w,s[7]=c*m+h*M+u*S,s[2]=d*x+f*v+p*T,s[5]=d*g+f*y+p*w,s[8]=d*m+f*M+p*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sl=new $t;function Rd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function A0(){let r=Ao("canvas");return r.style.display="block",r}var fu={};function sr(r){r in fu||(fu[r]=!0,console.warn(r))}function C0(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function R0(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function P0(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(r.r=tn(r.r),r.g=tn(r.g),r.b=tn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gn?sa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var pu=[.64,.33,.3,.6,.15,.06],mu=[.2126,.7152,.0722],gu=[.3127,.329],xu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Os]:{primaries:pu,whitePoint:gu,transfer:sa,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:mu,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:pu,whitePoint:gu,transfer:le,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:mu,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});var ss,Mc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Ao("canvas")),ss.width=t.width,ss.height=t.height;let i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ao("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=tn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tn(e[i]/255)*255):e[i]=tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},D0=0,Co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(rl(n[a].image)):s.push(rl(n[a]))}else s=rl(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var I0=0,Qe=class r extends bn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Bn,n=Bn,s=Ze,a=Ji,o=ci,l=hi,c=r.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Zn(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=xd;Qe.DEFAULT_ANISOTROPY=1;var se=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(f+1)/2,T=(m+1)/2,w=(h+d)/4,S=(u+x)/4,C=(p+g)/4;return y>M&&y>T?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=w/i,s=S/i):M>T?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=w/n,s=C/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=S/s,n=C/s),this.set(i,n,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends bn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Qe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends bc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ro=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),w=Math.atan2(T,m*v);g=Math.sin(g*w)/T,o=Math.sin(o*w)/T}let M=o*v;if(l=l*g+d*M,c=c*g+f*M,h=h*g+p*M,u=u*g+x*M,g===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new R,yu=new Ie,Ii=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Yr.subVectors(this.max,Ks),rs.subVectors(t.a,Ks),os.subVectors(t.b,Ks),as.subVectors(t.c,Ks),hn.subVectors(os,rs),un.subVectors(as,os),Dn.subVectors(rs,as);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Dn.z,Dn.y,hn.z,0,-hn.x,un.z,0,-un.x,Dn.z,0,-Dn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Dn.y,Dn.x,0];return!al(e,rs,os,as,Yr)||(e=[1,0,0,0,1,0,0,0,1],!al(e,rs,os,as,Yr))?!1:($r.crossVectors(hn,un),e=[$r.x,$r.y,$r.z],al(e,rs,os,as,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new R,new R,new R,new R,new R,new R,new R,new R],Ai=new R,Xr=new Ii,rs=new R,os=new R,as=new R,hn=new R,un=new R,Dn=new R,Ks=new R,Yr=new R,$r=new R,In=new R;function al(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){In.fromArray(r,s);let o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var z0=new Ii,Js=new R,ll=new R,_n=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):z0.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Js,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(ll)),this.expandByPoint(Js.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new R,cl=new R,Zr=new R,dn=new R,hl=new R,jr=new R,ul=new R,Po=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){cl.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(cl);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),o=dn.dot(this.direction),l=-dn.dot(Zr),c=dn.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(cl).addScaledVector(Zr,d),f}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,n,s){hl.subVectors(e,t),jr.subVectors(i,t),ul.crossVectors(hl,jr);let a=this.direction.dot(ul),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,t);let l=o*this.direction.dot(jr.crossVectors(dn,jr));if(l<0)return null;let c=o*this.direction.dot(hl.cross(dn));if(c<0||l+c>a)return null;let h=-o*dn.dot(ul);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,k0)}lookAt(t,e,i){let n=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),fn.crossVectors(i,ai),fn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),fn.crossVectors(i,ai)),fn.normalize(),Kr.crossVectors(ai,fn),n[0]=fn.x,n[4]=Kr.x,n[8]=ai.x,n[1]=fn.y,n[5]=Kr.y,n[9]=ai.y,n[2]=fn.z,n[6]=Kr.z,n[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],y=i[7],M=i[11],T=i[15],w=n[0],S=n[4],C=n[8],_=n[12],b=n[1],A=n[5],z=n[9],L=n[13],U=n[2],O=n[6],N=n[10],q=n[14],F=n[3],X=n[7],j=n[11],lt=n[15];return s[0]=a*w+o*b+l*U+c*F,s[4]=a*S+o*A+l*O+c*X,s[8]=a*C+o*z+l*N+c*j,s[12]=a*_+o*L+l*q+c*lt,s[1]=h*w+u*b+d*U+f*F,s[5]=h*S+u*A+d*O+f*X,s[9]=h*C+u*z+d*N+f*j,s[13]=h*_+u*L+d*q+f*lt,s[2]=p*w+x*b+g*U+m*F,s[6]=p*S+x*A+g*O+m*X,s[10]=p*C+x*z+g*N+m*j,s[14]=p*_+x*L+g*q+m*lt,s[3]=v*w+y*b+M*U+T*F,s[7]=v*S+y*A+M*O+T*X,s[11]=v*C+y*z+M*N+T*j,s[15]=v*_+y*L+M*q+T*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=u*g*c-x*d*c+x*l*f-o*g*f-u*l*m+o*d*m,y=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,M=h*x*c-p*u*c+p*o*f-a*x*f-h*o*m+a*u*m,T=p*u*l-h*x*l-p*o*d+a*x*d+h*o*g-a*u*g,w=e*v+i*y+n*M+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return t[0]=v*S,t[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*m-i*d*m)*S,t[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*m+i*l*m)*S,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*S,t[4]=y*S,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*S,t[6]=(p*l*s-a*g*s-p*n*c+e*g*c+a*n*m-e*l*m)*S,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*S,t[8]=M*S,t[9]=(p*u*s-h*x*s-p*i*f+e*x*f+h*i*m-e*u*m)*S,t[10]=(a*x*s-p*o*s+p*i*c-e*x*c-a*i*m+e*o*m)*S,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*S,t[12]=T*S,t[13]=(h*x*n-p*u*n+p*i*d-e*x*d-h*i*g+e*u*g)*S,t[14]=(p*o*n-a*x*n-p*i*l+e*x*l+a*i*g-e*o*g)*S,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*S,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,x=a*h,g=a*u,m=o*u,v=l*c,y=l*h,M=l*u,T=i.x,w=i.y,S=i.z;return n[0]=(1-(x+m))*T,n[1]=(f+M)*T,n[2]=(p-y)*T,n[3]=0,n[4]=(f-M)*w,n[5]=(1-(d+m))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(p+y)*S,n[9]=(g-v)*S,n[10]=(1-(d+x))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=ls.set(n[0],n[1],n[2]).length(),a=ls.set(n[4],n[5],n[6]).length(),o=ls.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ci.copy(this);let c=1/s,h=1/a,u=1/o;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Qi){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(o===Qi)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Eo)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Qi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,p,x;if(o===Qi)p=(a+s)*u,x=-2*u;else if(o===Eo)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ls=new R,Ci=new Et,L0=new R(0,0,0),k0=new R(1,1,1),fn=new R,Kr=new R,ai=new R,Mu=new Et,bu=new Ie,ti=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U0=0,_u=new R,cs=new Ie,Yi=new Et,Jr=new R,Qs=new R,N0=new R,F0=new Ie,wu=new R(1,0,0),Su=new R(0,1,0),Tu=new R(0,0,1),Eu={type:"added"},O0={type:"removed"},hs={type:"childadded",child:null},dl={type:"childremoved",child:null},Oe=class r extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new ti,i=new Ie,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Et},normalMatrix:{value:new $t}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return _u.copy(t).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jr.copy(t):Jr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Qs,Jr,this.up):Yi.lookAt(Jr,Qs,this.up),this.quaternion.setFromRotationMatrix(Yi),n&&(Yi.extractRotation(n.matrixWorld),cs.setFromRotationMatrix(Yi),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O0),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,N0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,F0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Oe.DEFAULT_UP=new R(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new R,$i=new R,fl=new R,Zi=new R,us=new R,ds=new R,Au=new R,pl=new R,ml=new R,gl=new R,xl=new se,vl=new se,yl=new se,Fn=class r{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ri.subVectors(n,e),$i.subVectors(i,e),fl.subVectors(t,e);let a=Ri.dot(Ri),o=Ri.dot($i),l=Ri.dot(fl),c=$i.dot($i),h=$i.dot(fl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return xl.setScalar(0),vl.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),yl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(xl,s.x),a.addScaledVector(vl,s.y),a.addScaledVector(yl,s.z),a}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),$i.subVectors(t,e),Ri.cross($i).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ri.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;us.subVectors(n,i),ds.subVectors(s,i),pl.subVectors(t,i);let l=us.dot(pl),c=ds.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,n);let h=us.dot(ml),u=ds.dot(ml);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(us,a);gl.subVectors(t,s);let f=us.dot(gl),p=ds.dot(gl);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(ds,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Au.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Au,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ml(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Mh(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ml(a,s,t+1/3),this.g=Ml(a,s,t),this.b=Ml(a,s,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Ee){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=Pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return te.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ne(Ge.r*255,0,255))*65536+Math.round(Ne(Ge.g*255,0,255))*256+Math.round(Ne(Ge.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ge.copy(this),e);let i=Ge.r,n=Ge.g,s=Ge.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ee){te.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,i=Ge.g,n=Ge.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(Qr);let i=ar(pn.h,Qr.h,e),n=ar(pn.s,Qr.s,e),s=ar(pn.l,Qr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new dt;dt.NAMES=Pd;var B0=0,nn=class extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Zn(),this.name="",this.blending=xn,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Ul,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xn&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Oi=class extends nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ki=H0();function H0(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function V0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ne(r,-65504,65504),Ki.floatView[0]=r;let t=Ki.uint32View[0],e=t>>23&511;return Ki.baseTable[e]+((t&8388607)>>Ki.shiftTable[e])}function G0(r){let t=r>>10;return Ki.uint32View[0]=Ki.mantissaTable[Ki.offsetTable[t]+(r&1023)]+Ki.exponentTable[t],Ki.floatView[0]}var Dd={toHalfFloat:V0,fromHalfFloat:G0},Re=new R,to=new at,ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hu&&(t.usage=this.usage),t}};var Io=class extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zo=class extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Kt=class extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},W0=0,gi=new Et,bl=new Oe,fs=new R,li=new Ii,tr=new Ii,Ue=new R,pe=class r extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rd(t)?zo:Io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(li.min,tr.min),li.expandByPoint(Ue),Ue.addVectors(li.max,tr.max),li.expandByPoint(Ue)):(li.expandByPoint(tr.min),li.expandByPoint(tr.max))}li.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Ue.add(fs)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new R,l[C]=new R;let c=new R,h=new R,u=new R,d=new at,f=new at,p=new at,x=new R,g=new R;function m(C,_,b){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(A),o[C].add(x),o[_].add(x),o[b].add(x),l[C].add(g),l[_].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,_=v.length;C<_;++C){let b=v[C],A=b.start,z=b.count;for(let L=A,U=A+z;L<U;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new R,M=new R,T=new R,w=new R;function S(C){T.fromBufferAttribute(n,C),w.copy(T);let _=o[C];y.copy(_),y.sub(T.multiplyScalar(T.dot(_))).normalize(),M.crossVectors(w,_);let A=M.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,A)}for(let C=0,_=v.length;C<_;++C){let b=v[C],A=b.start,z=b.count;for(let L=A,U=A+z;L<U;L+=3)S(t.getX(L+0)),S(t.getX(L+1)),S(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new Et,zn=new Po,eo=new _n,Ru=new R,io=new R,no=new R,so=new R,_l=new R,ro=new R,Pu=new R,oo=new R,Ot=class extends Oe{constructor(t=new pe,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(_l.fromBufferAttribute(u,t),a?ro.addScaledVector(_l,h):ro.addScaledVector(_l.sub(e),h))}e.add(ro)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),zn.copy(t.ray).recast(t.near),!(eo.containsPoint(zn.origin)===!1&&(zn.intersectSphere(eo,Ru)===null||zn.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Cu.copy(s).invert(),zn.copy(t.ray).applyMatrix4(Cu),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){let w=o.getX(M),S=o.getX(M+1),C=o.getX(M+2);n=ao(this,m,t,i,c,h,u,w,S,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);n=ao(this,a,t,i,c,h,u,v,y,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){let w=M,S=M+1,C=M+2;n=ao(this,m,t,i,c,h,u,w,S,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,y=g+1,M=g+2;n=ao(this,a,t,i,c,h,u,v,y,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function q0(r,t,e,i,n,s,a,o){let l;if(t.side===Fe?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Fi,o),l===null)return null;oo.copy(o),oo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:r}}function ao(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,io),r.getVertexPosition(l,no),r.getVertexPosition(c,so);let h=q0(r,t,e,i,io,no,so,Pu);if(h){let u=new R;Fn.getBarycoord(Pu,io,no,so,u),n&&(h.uv=Fn.getInterpolatedAttribute(n,o,l,c,u,new at)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,c,u,new at)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Fn.getNormal(io,no,so,d.normal),h.face=d,h.barycoord=u}return h}var ui=class r extends pe{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function p(x,g,m,v,y,M,T,w,S,C,_){let b=M/S,A=T/C,z=M/2,L=T/2,U=w/2,O=S+1,N=C+1,q=0,F=0,X=new R;for(let j=0;j<N;j++){let lt=j*A-L;for(let et=0;et<O;et++){let Rt=et*b-z;X[x]=Rt*v,X[g]=lt*y,X[m]=U,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(et/S),u.push(1-j/C),q+=1}}for(let j=0;j<C;j++)for(let lt=0;lt<S;lt++){let et=d+lt+O*j,Rt=d+lt+O*(j+1),Y=d+(lt+1)+O*(j+1),rt=d+(lt+1)+O*j;l.push(et,Rt,rt),l.push(Rt,Y,rt),F+=6}o.addGroup(f,F,_),f+=F,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function $e(r){let t={};for(let e=0;e<r.length;e++){let i=Cs(r[e]);for(let n in i)t[n]=i[n]}return t}function X0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Id(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Be={clone:Cs,merge:$e},Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Lo=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=new R,Du=new at,Iu=new at,_e=class extends Lo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Iu),e.subVectors(Iu,Du)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,wc=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new _e(ps,ms,t,e);n.layers=this.layers,this.add(n);let s=new _e(ps,ms,t,e);s.layers=this.layers,this.add(s);let a=new _e(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new _e(ps,ms,t,e);o.layers=this.layers,this.add(o);let l=new _e(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new _e(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ko=class extends Qe{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sc=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ko(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ui(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Ae});s.uniforms.tEquirect.value=e;let a=new Ot(n,s),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Ze),new wc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},wl=new R,Z0=new R,j0=new $t,Pi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=wl.subVectors(i,e).cross(Z0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(wl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||j0.getNormalMatrix(t),n=this.coplanarPoint(wl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ln=new _n,lo=new R,fr=class{constructor(t=new Pi,e=new Pi,i=new Pi,n=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],x=n[10],g=n[11],m=n[12],v=n[13],y=n[14],M=n[15];if(i[0].setComponents(l-s,d-c,g-f,M-m).normalize(),i[1].setComponents(l+s,d+c,g+f,M+m).normalize(),i[2].setComponents(l+a,d+h,g+p,M+v).normalize(),i[3].setComponents(l-a,d-h,g-p,M-v).normalize(),i[4].setComponents(l-o,d-u,g-x,M-y).normalize(),e===Qi)i[5].setComponents(l+o,d+u,g+x,M+y).normalize();else if(e===Eo)i[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(lo.x=n.normal.x>0?t.max.x:t.min.x,lo.y=n.normal.y>0?t.max.y:t.min.y,lo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zd(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function K0(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var je=class r extends pe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*d-a;for(let y=0;y<c;y++){let M=y*u-s;p.push(M,-v,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let y=v+c*m,M=v+c*(m+1),T=v+1+c*(m+1),w=v+1+c*m;f.push(y,M,w),f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,sg=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,og=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define MATCAP
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
}`,gg=`#define MATCAP
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
}`,xg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,bg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,wg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,Tg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:ip,alphatest_pars_fragment:np,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:op,batching_vertex:ap,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:dp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:xp,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:Mp,common:bp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:wp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Tp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Ap,colorspace_fragment:Cp,colorspace_pars_fragment:Rp,envmap_fragment:Pp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Ip,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Wp,envmap_vertex:Lp,fog_vertex:kp,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Gp,lights_toon_fragment:qp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Yp,lights_phong_pars_fragment:$p,lights_physical_fragment:Zp,lights_physical_pars_fragment:jp,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:nm,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:xm,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Sm,opaque_fragment:Tm,packing:Em,premultiplied_alpha_fragment:Am,project_vertex:Cm,dithering_fragment:Rm,dithering_pars_fragment:Pm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Lm,shadowmap_vertex:km,shadowmask_pars_fragment:Um,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:Bm,specularmap_fragment:Hm,specularmap_pars_fragment:Vm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Wm,transmission_fragment:qm,transmission_pars_fragment:Xm,uv_pars_fragment:Ym,uv_pars_vertex:$m,uv_vertex:Zm,worldpos_vertex:jm,background_vert:Km,background_frag:Jm,backgroundCube_vert:Qm,backgroundCube_frag:tg,cube_vert:eg,cube_frag:ig,depth_vert:ng,depth_frag:sg,distanceRGBA_vert:rg,distanceRGBA_frag:og,equirect_vert:ag,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:fg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:xg,meshnormal_frag:vg,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:bg,meshphysical_frag:_g,meshtoon_vert:wg,meshtoon_frag:Sg,points_vert:Tg,points_frag:Eg,shadow_vert:Ag,shadow_frag:Cg,sprite_vert:Rg,sprite_frag:Pg},bt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ui={basic:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:$e([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:$e([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:$e([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:$e([bt.points,bt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:$e([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:$e([bt.common,bt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:$e([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:$e([bt.sprite,bt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:$e([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:$e([bt.lights,bt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ui.physical={uniforms:$e([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var co={r:0,b:0,g:0},kn=new ti,Dg=new Et;function Ig(r,t,e,i,n,s,a){let o=new dt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,M=p(v);M===null?m(o,l):M&&M.isColor&&(m(M,1),y=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,y){let M=p(y);M&&(M.isCubeTexture||M.mapping===na)?(h===void 0&&(h=new Ot(new ui(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Cs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),kn.copy(y.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(kn)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==le,(u!==M||d!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ot(new je(2,2),new Jt({name:"BackgroundMaterial",uniforms:Cs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(co,Id(r)),i.buffers.color.setClear(co.r,co.g,co.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:x,addToRenderList:g}}function zg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(b,A,z,L,U){let O=!1,N=u(L,z,A);s!==N&&(s=N,c(s.object)),O=f(b,L,z,U),O&&p(b,L,z,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(b,A,z,L),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,A,z){let L=z.wireframe===!0,U=i[b.id];U===void 0&&(U={},i[b.id]=U);let O=U[A.id];O===void 0&&(O={},U[A.id]=O);let N=O[L];return N===void 0&&(N=d(l()),O[L]=N),N}function d(b){let A=[],z=[],L=[];for(let U=0;U<e;U++)A[U]=0,z[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,A,z,L){let U=s.attributes,O=A.attributes,N=0,q=z.getAttributes();for(let F in q)if(q[F].location>=0){let j=U[F],lt=O[F];if(lt===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),j===void 0||j.attribute!==lt||lt&&j.data!==lt.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function p(b,A,z,L){let U={},O=A.attributes,N=0,q=z.getAttributes();for(let F in q)if(q[F].location>=0){let j=O[F];j===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(j=b.instanceColor));let lt={};lt.attribute=j,j&&j.data&&(lt.data=j.data),U[F]=lt,N++}s.attributes=U,s.attributesNum=N,s.index=L}function x(){let b=s.newAttributes;for(let A=0,z=b.length;A<z;A++)b[A]=0}function g(b){m(b,0)}function m(b,A){let z=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;z[b]=1,L[b]===0&&(r.enableVertexAttribArray(b),L[b]=1),U[b]!==A&&(r.vertexAttribDivisor(b,A),U[b]=A)}function v(){let b=s.newAttributes,A=s.enabledAttributes;for(let z=0,L=A.length;z<L;z++)A[z]!==b[z]&&(r.disableVertexAttribArray(z),A[z]=0)}function y(b,A,z,L,U,O,N){N===!0?r.vertexAttribIPointer(b,A,z,U,O):r.vertexAttribPointer(b,A,z,L,U,O)}function M(b,A,z,L){x();let U=L.attributes,O=z.getAttributes(),N=A.defaultAttributeValues;for(let q in O){let F=O[q];if(F.location>=0){let X=U[q];if(X===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){let j=X.normalized,lt=X.itemSize,et=t.get(X);if(et===void 0)continue;let Rt=et.buffer,Y=et.type,rt=et.bytesPerElement,gt=Y===r.INT||Y===r.UNSIGNED_INT||X.gpuType===dh;if(X.isInterleavedBufferAttribute){let nt=X.data,yt=nt.stride,It=X.offset;if(nt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<F.locationSize;Dt++)m(F.location+Dt,nt.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Dt=0;Dt<F.locationSize;Dt++)g(F.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Dt=0;Dt<F.locationSize;Dt++)y(F.location+Dt,lt/F.locationSize,Y,j,yt*rt,(It+lt/F.locationSize*Dt)*rt,gt)}else{if(X.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt,X.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let nt=0;nt<F.locationSize;nt++)g(F.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let nt=0;nt<F.locationSize;nt++)y(F.location+nt,lt/F.locationSize,Y,j,lt*rt,lt/F.locationSize*nt*rt,gt)}}else if(N!==void 0){let j=N[q];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(F.location,j);break;case 3:r.vertexAttrib3fv(F.location,j);break;case 4:r.vertexAttrib4fv(F.location,j);break;default:r.vertexAttrib1fv(F.location,j)}}}}v()}function T(){C();for(let b in i){let A=i[b];for(let z in A){let L=A[z];for(let U in L)h(L[U].object),delete L[U];delete A[z]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let A=i[b.id];for(let z in A){let L=A[z];for(let U in L)h(L[U].object),delete L[U];delete A[z]}delete i[b.id]}function S(b){for(let A in i){let z=i[A];if(z[b.id]===void 0)continue;let L=z[b.id];for(let U in L)h(L[U].object),delete L[U];delete z[b.id]}}function C(){_(),a=!0,s!==n&&(s=n,c(s.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Lg(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kg(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(S){return!(S!==ci&&i.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let C=S===Te&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==hi&&i.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ni&&!C)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:T,maxSamples:w}}function Ug(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Pi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let v=s?0:i,y=v*4,M=m.clippingState||null;l.value=M,M=h(p,d,y,f);for(let T=0;T!==y;++T)M[T]=e[T];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Ng(r){let t=new WeakMap;function e(a,o){return o===Wl?a.mapping=Ts:o===ql&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wl||o===ql)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Rs=class extends Lo{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,zu=[.125,.215,.35,.446,.526,.582],On=20,Sl=new Rs,Lu=new dt,Tl=null,El=0,Al=0,Cl=!1,Nn=(1+Math.sqrt(5))/2,gs=1/Nn,ku=[new R(-Nn,gs,0),new R(Nn,gs,0),new R(-gs,0,Nn),new R(gs,0,Nn),new R(0,Nn,-gs),new R(0,Nn,gs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Tl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,El,Al),this._renderer.xr.enabled=Cl,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Te,format:ci,colorSpace:Os,depthBuffer:!1},n=Uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(s)),this._blurMaterial=Og(s,t,e)}return n}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,i,n){let o=new _e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lu),h.toneMapping=vn,h.autoClear=!1;let f=new Oi({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),p=new Ot(new ui,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Lu),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;ho(n,v*y,m>2?y:0,y,y),h.setRenderTarget(n),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ts||t.mapping===Es;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;ho(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Sl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ku[(n-s-1)%ku.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*On-1),x=s/p,g=isFinite(s)?1+Math.floor(h*x):On;g>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${On}`);let m=[],v=0;for(let S=0;S<On;++S){let C=S/x,_=Math.exp(-C*C/2);m.push(_),S===0?v+=_:S<g&&(v+=2*_)}for(let S=0;S<m.length;S++)m[S]=m[S]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-i;let M=this._sizeLods[n],T=3*M*(n>y-ys?n-y+ys:0),w=4*(this._cubeSize-M);ho(e,T,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Sl)}};function Fg(r){let t=[],e=[],i=[],n=r,s=r-ys+1+zu.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-ys?l=zu[a-r+ys-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*f),y=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let w=0;w<f;w++){let S=w%3*2/3-1,C=w>2?0:-1,_=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];v.set(_,x*p*w),y.set(d,g*p*w);let b=[w,w,w,w,w,w];M.set(b,m*p*w)}let T=new pe;T.setAttribute("position",new ue(v,x)),T.setAttribute("uv",new ue(y,g)),T.setAttribute("faceIndex",new ue(M,m)),t.push(T),n>ys&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uu(r,t,e){let i=new Me(r,t,e);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Og(r,t,e){let i=new Float32Array(On),n=new R(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Nu(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Fu(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function Bg(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wl||l===ql,h=l===Ts||l===Es;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ps(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Ps(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Hg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Vg(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,M=v.length;y<M;y+=3){let T=v[y+0],w=v[y+1],S=v[y+2];d.push(T,w,w,S,S,T)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let T=y+0,w=y+1,S=y+2;d.push(T,w,w,S,S,T)}}else return;let g=new(Rd(d)?zo:Io)(d,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gg(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(i,f,s,d*a,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*x[v];e.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qg(r,t,e){let i=new WeakMap,n=new se;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let _=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*u),S=new Ro(w,M,T,u);S.type=Ni,S.needsUpdate=!0;let C=y*4;for(let b=0;b<u;b++){let A=g[b],z=m[b],L=v[b],U=M*T*4*b;for(let O=0;O<A.count;O++){let N=O*C;f===!0&&(n.fromBufferAttribute(A,O),w[U+N+0]=n.x,w[U+N+1]=n.y,w[U+N+2]=n.z,w[U+N+3]=0),p===!0&&(n.fromBufferAttribute(z,O),w[U+N+4]=n.x,w[U+N+5]=n.y,w[U+N+6]=n.z,w[U+N+7]=0),x===!0&&(n.fromBufferAttribute(L,O),w[U+N+8]=n.x,w[U+N+9]=n.y,w[U+N+10]=n.z,w[U+N+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:S,size:new at(M,T)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Xg(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Ds=class extends Qe{constructor(t,e,i,n,s,a,o,l,c,h=bs){if(h!==bs&&h!==Mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bs&&(i=Hn),i===void 0&&h===Mn&&(i=yn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ld=new Qe,Ou=new Ds(1,1),kd=new Ro,Ud=new _c,Nd=new ko,Bu=[],Hu=[],Vu=new Float32Array(16),Gu=new Float32Array(9),Wu=new Float32Array(4);function Bs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Bu[n];if(s===void 0&&(s=new Float32Array(n),Bu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Le(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ra(r,t){let e=Hu[t];e===void 0&&(e=new Int32Array(t),Hu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Yg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function $g(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),Le(e,t)}}function Zg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),Le(e,t)}}function jg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),Le(e,t)}}function Kg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;Wu.set(i),r.uniformMatrix2fv(this.addr,!1,Wu),Le(e,i)}}function Jg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;Gu.set(i),r.uniformMatrix3fv(this.addr,!1,Gu),Le(e,i)}}function Qg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;Vu.set(i),r.uniformMatrix4fv(this.addr,!1,Vu),Le(e,i)}}function tx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ex(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),Le(e,t)}}function ix(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),Le(e,t)}}function nx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),Le(e,t)}}function sx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function rx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),Le(e,t)}}function ox(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),Le(e,t)}}function ax(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),Le(e,t)}}function lx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Ou.compareFunction=Ad,s=Ou):s=Ld,e.setTexture2D(t||s,n)}function cx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ud,n)}function hx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Nd,n)}function ux(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||kd,n)}function dx(r){switch(r){case 5126:return Yg;case 35664:return $g;case 35665:return Zg;case 35666:return jg;case 35674:return Kg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return ix;case 35669:case 35673:return nx;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(r,t){r.uniform1fv(this.addr,t)}function px(r,t){let e=Bs(t,this.size,2);r.uniform2fv(this.addr,e)}function mx(r,t){let e=Bs(t,this.size,3);r.uniform3fv(this.addr,e)}function gx(r,t){let e=Bs(t,this.size,4);r.uniform4fv(this.addr,e)}function xx(r,t){let e=Bs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vx(r,t){let e=Bs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function yx(r,t){let e=Bs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Mx(r,t){r.uniform1iv(this.addr,t)}function bx(r,t){r.uniform2iv(this.addr,t)}function _x(r,t){r.uniform3iv(this.addr,t)}function wx(r,t){r.uniform4iv(this.addr,t)}function Sx(r,t){r.uniform1uiv(this.addr,t)}function Tx(r,t){r.uniform2uiv(this.addr,t)}function Ex(r,t){r.uniform3uiv(this.addr,t)}function Ax(r,t){r.uniform4uiv(this.addr,t)}function Cx(r,t,e){let i=this.cache,n=t.length,s=ra(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Ld,s[a])}function Rx(r,t,e){let i=this.cache,n=t.length,s=ra(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ud,s[a])}function Px(r,t,e){let i=this.cache,n=t.length,s=ra(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Nd,s[a])}function Dx(r,t,e){let i=this.cache,n=t.length,s=ra(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||kd,s[a])}function Ix(r){switch(r){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return bx;case 35668:case 35672:return _x;case 35669:case 35673:return wx;case 5125:return Sx;case 36294:return Tx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Dx}}var Tc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dx(e.type)}},Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function qu(r,t){r.seq.push(t),r.map[t.id]=t}function zx(r,t,e){let i=r.name,n=i.length;for(Rl.lastIndex=0;;){let s=Rl.exec(i),a=Rl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){qu(e,c===void 0?new Tc(o,r,t):new Ec(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Ac(o),qu(e,u)),e=u}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);zx(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Xu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Lx=37297,kx=0;function Ux(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Yu=new $t;function Nx(r){te._getMatrix(Yu,te.workingColorSpace,r);let t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(r)){case sa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $u(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Ux(r.getShaderSource(t),a)}else return n}function Fx(r,t){let e=Nx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ox(r,t){let e;switch(t){case ah:e="Linear";break;case lh:e="Reinhard";break;case ch:e="Cineon";break;case Yn:e="ACESFilmic";break;case hh:e="AgX";break;case uh:e="Neutral";break;case t0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new R;function Bx(){te.getLuminanceCoefficients(uo);let r=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Vx(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gx(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function rr(r){return r!==""}function Zu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(r){return r.replace(Wx,Xx)}var qx=new Map;function Xx(r,t){let e=Gt[t];if(e===void 0){let i=qx.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(r){return r.replace(Yx,$x)}function $x(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ju(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Zx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===md?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function jx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ts:case Es:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function Jx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gd:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function Qx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function tv(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Zx(e),c=jx(e),h=Kx(e),u=Jx(e),d=Qx(e),f=Hx(e),p=Vx(s),x=n.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(rr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==vn?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Fx("linearToOutputTexel",e.outputColorSpace),Bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),a=Cc(a),a=Zu(a,e),a=ju(a,e),o=Cc(o),o=Zu(o,e),o=ju(o,e),a=Ku(a),o=Ku(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+a,M=v+m+o,T=Xu(n,n.VERTEX_SHADER,y),w=Xu(n,n.FRAGMENT_SHADER,M);n.attachShader(x,T),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function S(A){if(r.debug.checkShaderErrors){let z=n.getProgramInfoLog(x).trim(),L=n.getShaderInfoLog(T).trim(),U=n.getShaderInfoLog(w).trim(),O=!0,N=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,T,w);else{let q=$u(n,T,"vertex"),F=$u(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+q+`
`+F)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||U==="")&&(N=!1);N&&(A.diagnostics={runnable:O,programLog:z,vertexShader:{log:L,prefix:g},fragmentShader:{log:U,prefix:m}})}n.deleteShader(T),n.deleteShader(w),C=new ws(n,x),_=Gx(n,x)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,Lx)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var ev=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Pc(t),e.set(t,i)),i}},Pc=class{constructor(t){this.id=ev++,this.code=t,this.usedTimes=0}};function iv(r,t,e,i,n,s,a){let o=new Do,l=new Rc,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,A,z,L){let U=z.fog,O=L.geometry,N=_.isMeshStandardMaterial?z.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||N),F=q&&q.mapping===na?q.image.height:null,X=p[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,lt=j!==void 0?j.length:0,et=0;O.morphAttributes.position!==void 0&&(et=1),O.morphAttributes.normal!==void 0&&(et=2),O.morphAttributes.color!==void 0&&(et=3);let Rt,Y,rt,gt;if(X){let he=Ui[X];Rt=he.vertexShader,Y=he.fragmentShader}else Rt=_.vertexShader,Y=_.fragmentShader,l.update(_),rt=l.getVertexShaderID(_),gt=l.getFragmentShaderID(_);let nt=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),It=L.isInstancedMesh===!0,Dt=L.isBatchedMesh===!0,Zt=!!_.map,it=!!_.matcap,ut=!!q,k=!!_.aoMap,pt=!!_.lightMap,ct=!!_.bumpMap,xt=!!_.normalMap,ft=!!_.displacementMap,zt=!!_.emissiveMap,tt=!!_.metalnessMap,I=!!_.roughnessMap,E=_.anisotropy>0,G=_.clearcoat>0,J=_.dispersion>0,st=_.iridescence>0,Q=_.sheen>0,Pt=_.transmission>0,vt=E&&!!_.anisotropyMap,_t=G&&!!_.clearcoatMap,qt=G&&!!_.clearcoatNormalMap,ht=G&&!!_.clearcoatRoughnessMap,At=st&&!!_.iridescenceMap,Bt=st&&!!_.iridescenceThicknessMap,Ht=Q&&!!_.sheenColorMap,Ct=Q&&!!_.sheenRoughnessMap,jt=!!_.specularMap,Vt=!!_.specularColorMap,ee=!!_.specularIntensityMap,B=Pt&&!!_.transmissionMap,Mt=Pt&&!!_.thicknessMap,K=!!_.gradientMap,ot=!!_.alphaMap,Tt=_.alphaTest>0,wt=!!_.alphaHash,Xt=!!_.extensions,Se=vn;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Se=r.toneMapping);let He={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:Y,defines:_.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&L._colorsTexture!==null,instancing:It,instancingColor:It&&L.instanceColor!==null,instancingMorph:It&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Os,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:it,envMap:ut,envMapMode:ut&&q.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:pt,bumpMap:ct,normalMap:xt,displacementMap:d&&ft,emissiveMap:zt,normalMapObjectSpace:xt&&_.normalMapType===n0,normalMapTangentSpace:xt&&_.normalMapType===yh,metalnessMap:tt,roughnessMap:I,anisotropy:E,anisotropyMap:vt,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:qt,clearcoatRoughnessMap:ht,dispersion:J,iridescence:st,iridescenceMap:At,iridescenceThicknessMap:Bt,sheen:Q,sheenColorMap:Ht,sheenRoughnessMap:Ct,specularMap:jt,specularColorMap:Vt,specularIntensityMap:ee,transmission:Pt,transmissionMap:B,thicknessMap:Mt,gradientMap:K,opaque:_.transparent===!1&&_.blending===xn&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:Tt,alphaHash:wt,combine:_.combine,mapUv:Zt&&x(_.map.channel),aoMapUv:k&&x(_.aoMap.channel),lightMapUv:pt&&x(_.lightMap.channel),bumpMapUv:ct&&x(_.bumpMap.channel),normalMapUv:xt&&x(_.normalMap.channel),displacementMapUv:ft&&x(_.displacementMap.channel),emissiveMapUv:zt&&x(_.emissiveMap.channel),metalnessMapUv:tt&&x(_.metalnessMap.channel),roughnessMapUv:I&&x(_.roughnessMap.channel),anisotropyMapUv:vt&&x(_.anisotropyMap.channel),clearcoatMapUv:_t&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(_.sheenRoughnessMap.channel),specularMapUv:jt&&x(_.specularMap.channel),specularColorMapUv:Vt&&x(_.specularColorMap.channel),specularIntensityMapUv:ee&&x(_.specularIntensityMap.channel),transmissionMapUv:B&&x(_.transmissionMap.channel),thicknessMapUv:Mt&&x(_.thicknessMap.channel),alphaMapUv:ot&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xt||E),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Zt||ot),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&_.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(v(b,_),y(b,_),b.push(r.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function v(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){let b=p[_.type],A;if(b){let z=Ui[b];A=Be.clone(z.uniforms)}else A=_.uniforms;return A}function T(_,b){let A;for(let z=0,L=h.length;z<L;z++){let U=h[z];if(U.cacheKey===b){A=U,++A.usedTimes;break}}return A===void 0&&(A=new tv(r,b,_,s),h.push(A)),A}function w(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function S(_){l.remove(_)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:T,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:C}}function nv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function sv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Qu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function td(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,p,x,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||sv),i.length>1&&i.sort(d||Qu),n.length>1&&n.sort(d||Qu)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function rv(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new td,r.set(i,[a])):n>=s.length?(a=new td,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function ov(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new dt};break;case"SpotLight":e={position:new R,direction:new R,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function av(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var lv=0;function cv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hv(r){let t=new ov,e=av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new Et,a=new Et;function o(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,y=0,M=0,T=0,w=0,S=0;c.sort(cv);for(let _=0,b=c.length;_<b;_++){let A=c[_],z=A.color,L=A.intensity,U=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*L,u+=z.g*L,d+=z.b*L;else if(A.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(A.sh.coefficients[N],L);S++}else if(A.isDirectionalLight){let N=t.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let q=A.shadow,F=e.get(A);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=A.shadow.matrix,v++}i.directional[f]=N,f++}else if(A.isSpotLight){let N=t.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(z).multiplyScalar(L),N.distance=U,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,i.spot[x]=N;let q=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,q.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[x]=q.matrix,A.castShadow){let F=e.get(A);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=O,M++}x++}else if(A.isRectAreaLight){let N=t.get(A);N.color.copy(z).multiplyScalar(L),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=N,g++}else if(A.isPointLight){let N=t.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){let q=A.shadow,F=e.get(A);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,F.shadowCameraNear=q.camera.near,F.shadowCameraFar=q.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=A.shadow.matrix,y++}i.point[p]=N,p++}else if(A.isHemisphereLight){let N=t.get(A);N.skyColor.copy(A.color).multiplyScalar(L),N.groundColor.copy(A.groundColor).multiplyScalar(L),i.hemi[m]=N,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==M||C.numSpotMaps!==T||C.numLightProbes!==S)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=S,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=M,C.numSpotMaps=T,C.numLightProbes=S,i.version=lv++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),u++}else if(y.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function ed(r){let t=new hv(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function uv(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new ed(r),t.set(n,[o])):s>=a.length?(o=new ed(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var pr=class extends nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dc=class extends nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
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
}`;function pv(r,t,e){let i=new fr,n=new at,s=new at,a=new se,o=new pr({depthPacking:vh}),l=new Dc,c={},h=e.maxTextureSize,u={[Fi]:Fe,[Fe]:Fi,[Pe]:Pe},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dv,fragmentShader:fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new pe;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let m=this.type;this.render=function(w,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let _=r.getRenderTarget(),b=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ae),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let L=m!==ji&&this.type===ji,U=m===ji&&this.type!==ji;for(let O=0,N=w.length;O<N;O++){let q=w[O],F=q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let X=F.getFrameExtents();if(n.multiply(X),s.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/X.x),n.x=s.x*X.x,F.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/X.y),n.y=s.y*X.y,F.mapSize.y=s.y)),F.map===null||L===!0||U===!0){let lt=this.type!==ji?{minFilter:De,magFilter:De}:{};F.map!==null&&F.map.dispose(),F.map=new Me(n.x,n.y,lt),F.map.texture.name=q.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let j=F.getViewportCount();for(let lt=0;lt<j;lt++){let et=F.getViewport(lt);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),z.viewport(a),F.updateMatrices(q,lt),i=F.getFrustum(),M(S,C,F.camera,q,this.type)}F.isPointLightShadow!==!0&&this.type===ji&&v(F,C),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(_,b,A)};function v(w,S){let C=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Me(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,C,f,x,null)}function y(w,S,C,_){let b=null,A=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)b=A;else if(b=C.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let z=b.uuid,L=S.uuid,U=c[z];U===void 0&&(U={},c[z]=U);let O=U[L];O===void 0&&(O=b.clone(),U[L]=O,S.addEventListener("dispose",T)),b=O}if(b.visible=S.visible,b.wireframe=S.wireframe,_===ji?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=r.properties.get(b);z.light=C}return b}function M(w,S,C,_,b){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ji)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let L=t.update(w),U=w.material;if(Array.isArray(U)){let O=L.groups;for(let N=0,q=O.length;N<q;N++){let F=O[N],X=U[F.materialIndex];if(X&&X.visible){let j=y(w,X,_,b);w.onBeforeShadow(r,w,S,C,L,j,F),r.renderBufferDirect(C,null,L,j,w,F),w.onAfterShadow(r,w,S,C,L,j,F)}}}else if(U.visible){let O=y(w,U,_,b);w.onBeforeShadow(r,w,S,C,L,O,null),r.renderBufferDirect(C,null,L,O,w,null),w.onAfterShadow(r,w,S,C,L,O,null)}}let z=w.children;for(let L=0,U=z.length;L<U;L++)M(z[L],S,C,_,b)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let _=c[C],b=w.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var mv={[Nl]:Fl,[Ol]:Vl,[Bl]:Gl,[Ss]:Hl,[Fl]:Nl,[Vl]:Ol,[Gl]:Bl,[Hl]:Ss};function gv(r,t){function e(){let B=!1,Mt=new se,K=null,ot=new se(0,0,0,0);return{setMask:function(Tt){K!==Tt&&!B&&(r.colorMask(Tt,Tt,Tt,Tt),K=Tt)},setLocked:function(Tt){B=Tt},setClear:function(Tt,wt,Xt,Se,He){He===!0&&(Tt*=Se,wt*=Se,Xt*=Se),Mt.set(Tt,wt,Xt,Se),ot.equals(Mt)===!1&&(r.clearColor(Tt,wt,Xt,Se),ot.copy(Mt))},reset:function(){B=!1,K=null,ot.set(-1,0,0,0)}}}function i(){let B=!1,Mt=!1,K=null,ot=null,Tt=null;return{setReversed:function(wt){if(Mt!==wt){let Xt=t.get("EXT_clip_control");Mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Se=Tt;Tt=null,this.setClear(Se)}Mt=wt},getReversed:function(){return Mt},setTest:function(wt){wt?nt(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(wt){K!==wt&&!B&&(r.depthMask(wt),K=wt)},setFunc:function(wt){if(Mt&&(wt=mv[wt]),ot!==wt){switch(wt){case Nl:r.depthFunc(r.NEVER);break;case Fl:r.depthFunc(r.ALWAYS);break;case Ol:r.depthFunc(r.LESS);break;case Ss:r.depthFunc(r.LEQUAL);break;case Bl:r.depthFunc(r.EQUAL);break;case Hl:r.depthFunc(r.GEQUAL);break;case Vl:r.depthFunc(r.GREATER);break;case Gl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ot=wt}},setLocked:function(wt){B=wt},setClear:function(wt){Tt!==wt&&(Mt&&(wt=1-wt),r.clearDepth(wt),Tt=wt)},reset:function(){B=!1,K=null,ot=null,Tt=null,Mt=!1}}}function n(){let B=!1,Mt=null,K=null,ot=null,Tt=null,wt=null,Xt=null,Se=null,He=null;return{setTest:function(he){B||(he?nt(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(he){Mt!==he&&!B&&(r.stencilMask(he),Mt=he)},setFunc:function(he,Ti,Gi){(K!==he||ot!==Ti||Tt!==Gi)&&(r.stencilFunc(he,Ti,Gi),K=he,ot=Ti,Tt=Gi)},setOp:function(he,Ti,Gi){(wt!==he||Xt!==Ti||Se!==Gi)&&(r.stencilOp(he,Ti,Gi),wt=he,Xt=Ti,Se=Gi)},setLocked:function(he){B=he},setClear:function(he){He!==he&&(r.clearStencil(he),He=he)},reset:function(){B=!1,Mt=null,K=null,ot=null,Tt=null,wt=null,Xt=null,Se=null,He=null}}}let s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,M=null,T=null,w=null,S=new dt(0,0,0),C=0,_=!1,b=null,A=null,z=null,L=null,U=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,q=0,F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=q>=2);let X=null,j={},lt=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),Rt=new se().fromArray(lt),Y=new se().fromArray(et);function rt(B,Mt,K,ot){let Tt=new Uint8Array(4),wt=r.createTexture();r.bindTexture(B,wt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<K;Xt++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,ot,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Mt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return wt}let gt={};gt[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(r.DEPTH_TEST),a.setFunc(Ss),ct(!1),xt(nu),nt(r.CULL_FACE),k(Ae);function nt(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function yt(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function It(B,Mt){return u[B]!==Mt?(r.bindFramebuffer(B,Mt),u[B]=Mt,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Mt),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Dt(B,Mt){let K=f,ot=!1;if(B){K=d.get(Mt),K===void 0&&(K=[],d.set(Mt,K));let Tt=B.textures;if(K.length!==Tt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,Xt=Tt.length;wt<Xt;wt++)K[wt]=r.COLOR_ATTACHMENT0+wt;K.length=Tt.length,ot=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ot=!0);ot&&r.drawBuffers(K)}function Zt(B){return p!==B?(r.useProgram(B),p=B,!0):!1}let it={[xi]:r.FUNC_ADD,[Ff]:r.FUNC_SUBTRACT,[Of]:r.FUNC_REVERSE_SUBTRACT};it[Bf]=r.MIN,it[Hf]=r.MAX;let ut={[Ns]:r.ZERO,[Vf]:r.ONE,[Gf]:r.SRC_COLOR,[kl]:r.SRC_ALPHA,[Yf]:r.SRC_ALPHA_SATURATE,[ia]:r.DST_COLOR,[ea]:r.DST_ALPHA,[Wf]:r.ONE_MINUS_SRC_COLOR,[Ul]:r.ONE_MINUS_SRC_ALPHA,[Xf]:r.ONE_MINUS_DST_COLOR,[qf]:r.ONE_MINUS_DST_ALPHA,[$f]:r.CONSTANT_COLOR,[Zf]:r.ONE_MINUS_CONSTANT_COLOR,[jf]:r.CONSTANT_ALPHA,[Kf]:r.ONE_MINUS_CONSTANT_ALPHA};function k(B,Mt,K,ot,Tt,wt,Xt,Se,He,he){if(B===Ae){x===!0&&(yt(r.BLEND),x=!1);return}if(x===!1&&(nt(r.BLEND),x=!0),B!==oh){if(B!==g||he!==_){if((m!==xi||M!==xi)&&(r.blendEquation(r.FUNC_ADD),m=xi,M=xi),he)switch(B){case xn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case en:r.blendFunc(r.ONE,r.ONE);break;case su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case en:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,y=null,T=null,w=null,S.set(0,0,0),C=0,g=B,_=he}return}Tt=Tt||Mt,wt=wt||K,Xt=Xt||ot,(Mt!==m||Tt!==M)&&(r.blendEquationSeparate(it[Mt],it[Tt]),m=Mt,M=Tt),(K!==v||ot!==y||wt!==T||Xt!==w)&&(r.blendFuncSeparate(ut[K],ut[ot],ut[wt],ut[Xt]),v=K,y=ot,T=wt,w=Xt),(Se.equals(S)===!1||He!==C)&&(r.blendColor(Se.r,Se.g,Se.b,He),S.copy(Se),C=He),g=B,_=!1}function pt(B,Mt){B.side===Pe?yt(r.CULL_FACE):nt(r.CULL_FACE);let K=B.side===Fe;Mt&&(K=!K),ct(K),B.blending===xn&&B.transparent===!1?k(Ae):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);let ot=B.stencilWrite;o.setTest(ot),ot&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(B){b!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),b=B)}function xt(B){B!==Uf?(nt(r.CULL_FACE),B!==A&&(B===nu?r.cullFace(r.BACK):B===Nf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),A=B}function ft(B){B!==z&&(N&&r.lineWidth(B),z=B)}function zt(B,Mt,K){B?(nt(r.POLYGON_OFFSET_FILL),(L!==Mt||U!==K)&&(r.polygonOffset(Mt,K),L=Mt,U=K)):yt(r.POLYGON_OFFSET_FILL)}function tt(B){B?nt(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function I(B){B===void 0&&(B=r.TEXTURE0+O-1),X!==B&&(r.activeTexture(B),X=B)}function E(B,Mt,K){K===void 0&&(X===null?K=r.TEXTURE0+O-1:K=X);let ot=j[K];ot===void 0&&(ot={type:void 0,texture:void 0},j[K]=ot),(ot.type!==B||ot.texture!==Mt)&&(X!==K&&(r.activeTexture(K),X=K),r.bindTexture(B,Mt||gt[B]),ot.type=B,ot.texture=Mt)}function G(){let B=j[X];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(B){Rt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Rt.copy(B))}function Ct(B){Y.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Y.copy(B))}function jt(B,Mt){let K=c.get(Mt);K===void 0&&(K=new WeakMap,c.set(Mt,K));let ot=K.get(B);ot===void 0&&(ot=r.getUniformBlockIndex(Mt,B.name),K.set(B,ot))}function Vt(B,Mt){let ot=c.get(Mt).get(B);l.get(Mt)!==ot&&(r.uniformBlockBinding(Mt,ot,B.__bindingPointIndex),l.set(Mt,ot))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,j={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,M=null,T=null,w=null,S=new dt(0,0,0),C=0,_=!1,b=null,A=null,z=null,L=null,U=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:yt,bindFramebuffer:It,drawBuffers:Dt,useProgram:Zt,setBlending:k,setMaterial:pt,setFlipSided:ct,setCullFace:xt,setLineWidth:ft,setPolygonOffset:zt,setScissorTest:tt,activeTexture:I,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:At,texImage3D:Bt,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:qt,texStorage3D:ht,texSubImage2D:Q,texSubImage3D:Pt,compressedTexSubImage2D:vt,compressedTexSubImage3D:_t,scissor:Ht,viewport:Ct,reset:ee}}function id(r,t,e,i){let n=xv(i);switch(e){case bd:return r*t;case wd:return r*t;case Sd:return r*t*2;case Fs:return r*t/n.components*n.byteLength;case mh:return r*t/n.components*n.byteLength;case Td:return r*t*2/n.components*n.byteLength;case gh:return r*t*2/n.components*n.byteLength;case _d:return r*t*3/n.components*n.byteLength;case ci:return r*t*4/n.components*n.byteLength;case xh:return r*t*4/n.components*n.byteLength;case Mo:case bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _o:case wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $l:case jl:return Math.max(r,16)*Math.max(t,8)/4;case Yl:case Zl:return Math.max(r,8)*Math.max(t,8)/2;case Kl:case Jl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ql:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case lc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case So:case pc:case mc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ed:case gc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xc:case vc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xv(r){switch(r){case hi:case vd:return{byteLength:1,components:1};case dr:case yd:case Te:return{byteLength:2,components:1};case fh:case ph:return{byteLength:2,components:4};case Hn:case dh:case Ni:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function vv(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):Ao("canvas")}function x(I,E,G){let J=1,st=tt(I);if((st.width>G||st.height>G)&&(J=G/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Q=Math.floor(J*st.width),Pt=Math.floor(J*st.height);u===void 0&&(u=p(Q,Pt));let vt=E?p(Q,Pt):u;return vt.width=Q,vt.height=Pt,vt.getContext("2d").drawImage(I,0,0,Q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Pt+")."),vt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,E,G,J,st=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=E;if(E===r.RED&&(G===r.FLOAT&&(Q=r.R32F),G===r.HALF_FLOAT&&(Q=r.R16F),G===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.R8UI),G===r.UNSIGNED_SHORT&&(Q=r.R16UI),G===r.UNSIGNED_INT&&(Q=r.R32UI),G===r.BYTE&&(Q=r.R8I),G===r.SHORT&&(Q=r.R16I),G===r.INT&&(Q=r.R32I)),E===r.RG&&(G===r.FLOAT&&(Q=r.RG32F),G===r.HALF_FLOAT&&(Q=r.RG16F),G===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RG8UI),G===r.UNSIGNED_SHORT&&(Q=r.RG16UI),G===r.UNSIGNED_INT&&(Q=r.RG32UI),G===r.BYTE&&(Q=r.RG8I),G===r.SHORT&&(Q=r.RG16I),G===r.INT&&(Q=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),G===r.UNSIGNED_INT&&(Q=r.RGB32UI),G===r.BYTE&&(Q=r.RGB8I),G===r.SHORT&&(Q=r.RGB16I),G===r.INT&&(Q=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),G===r.UNSIGNED_INT&&(Q=r.RGBA32UI),G===r.BYTE&&(Q=r.RGBA8I),G===r.SHORT&&(Q=r.RGBA16I),G===r.INT&&(Q=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),E===r.RGBA){let Pt=st?sa:te.getTransfer(J);G===r.FLOAT&&(Q=r.RGBA32F),G===r.HALF_FLOAT&&(Q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Q=Pt===le?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(I,E){let G;return I?E===null||E===Hn||E===yn?G=r.DEPTH24_STENCIL8:E===Ni?G=r.DEPTH32F_STENCIL8:E===dr&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hn||E===yn?G=r.DEPTH_COMPONENT24:E===Ni?G=r.DEPTH_COMPONENT32F:E===dr&&(G=r.DEPTH_COMPONENT16),G}function T(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==De&&I.minFilter!==Ze?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function S(I){let E=I.target;E.removeEventListener("dispose",S),b(E)}function C(I){let E=i.get(I);if(E.__webglInit===void 0)return;let G=I.source,J=d.get(G);if(J){let st=J[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&_(I),Object.keys(J).length===0&&d.delete(G)}i.remove(I)}function _(I){let E=i.get(I);r.deleteTexture(E.__webglTexture);let G=I.source,J=d.get(G);delete J[E.__cacheKey],a.memory.textures--}function b(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let st=0;st<E.__webglFramebuffer[J].length;st++)r.deleteFramebuffer(E.__webglFramebuffer[J][st]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let J=0,st=G.length;J<st;J++){let Q=i.get(G[J]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(G[J])}i.remove(I)}let A=0;function z(){A=0}function L(){let I=A;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),A+=1,I}function U(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function O(I,E){let G=i.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,I,E);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function N(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Y(G,I,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function q(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Y(G,I,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function F(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){rt(G,I,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}let X={[Di]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[Xl]:r.MIRRORED_REPEAT},j={[De]:r.NEAREST,[e0]:r.NEAREST_MIPMAP_NEAREST,[qr]:r.NEAREST_MIPMAP_LINEAR,[Ze]:r.LINEAR,[il]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},lt={[s0]:r.NEVER,[h0]:r.ALWAYS,[r0]:r.LESS,[Ad]:r.LEQUAL,[o0]:r.EQUAL,[c0]:r.GEQUAL,[a0]:r.GREATER,[l0]:r.NOTEQUAL};function et(I,E){if(E.type===Ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ze||E.magFilter===il||E.magFilter===qr||E.magFilter===Ji||E.minFilter===Ze||E.minFilter===il||E.minFilter===qr||E.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,X[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,j[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,lt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===De||E.minFilter!==qr&&E.minFilter!==Ji||E.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let J=E.source,st=d.get(J);st===void 0&&(st={},d.set(J,st));let Q=U(E);if(Q!==I.__cacheKey){st[Q]===void 0&&(st[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),st[Q].usedTimes++;let Pt=st[I.__cacheKey];Pt!==void 0&&(st[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&_(E)),I.__cacheKey=Q,I.__webglTexture=st[Q].texture}return G}function Y(I,E,G){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);let st=Rt(I,E),Q=E.source;e.bindTexture(J,I.__webglTexture,r.TEXTURE0+G);let Pt=i.get(Q);if(Q.version!==Pt.__version||st===!0){e.activeTexture(r.TEXTURE0+G);let vt=te.getPrimaries(te.workingColorSpace),_t=E.colorSpace===gn?null:te.getPrimaries(E.colorSpace),qt=E.colorSpace===gn||vt===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let ht=x(E.image,!1,n.maxTextureSize);ht=zt(E,ht);let At=s.convert(E.format,E.colorSpace),Bt=s.convert(E.type),Ht=y(E.internalFormat,At,Bt,E.colorSpace,E.isVideoTexture);et(J,E);let Ct,jt=E.mipmaps,Vt=E.isVideoTexture!==!0,ee=Pt.__version===void 0||st===!0,B=Q.dataReady,Mt=T(E,ht);if(E.isDepthTexture)Ht=M(E.format===Mn,E.type),ee&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Ht,ht.width,ht.height):e.texImage2D(r.TEXTURE_2D,0,Ht,ht.width,ht.height,0,At,Bt,null));else if(E.isDataTexture)if(jt.length>0){Vt&&ee&&e.texStorage2D(r.TEXTURE_2D,Mt,Ht,jt[0].width,jt[0].height);for(let K=0,ot=jt.length;K<ot;K++)Ct=jt[K],Vt?B&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Ct.width,Ct.height,At,Bt,Ct.data):e.texImage2D(r.TEXTURE_2D,K,Ht,Ct.width,Ct.height,0,At,Bt,Ct.data);E.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(r.TEXTURE_2D,Mt,Ht,ht.width,ht.height),B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht.width,ht.height,At,Bt,ht.data)):e.texImage2D(r.TEXTURE_2D,0,Ht,ht.width,ht.height,0,At,Bt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Ht,jt[0].width,jt[0].height,ht.depth);for(let K=0,ot=jt.length;K<ot;K++)if(Ct=jt[K],E.format!==ci)if(At!==null)if(Vt){if(B)if(E.layerUpdates.size>0){let Tt=id(Ct.width,Ct.height,E.format,E.type);for(let wt of E.layerUpdates){let Xt=Ct.data.subarray(wt*Tt/Ct.data.BYTES_PER_ELEMENT,(wt+1)*Tt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,wt,Ct.width,Ct.height,1,At,Xt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Ct.width,Ct.height,ht.depth,At,Ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Ht,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Ct.width,Ct.height,ht.depth,At,Bt,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Ht,Ct.width,Ct.height,ht.depth,0,At,Bt,Ct.data)}else{Vt&&ee&&e.texStorage2D(r.TEXTURE_2D,Mt,Ht,jt[0].width,jt[0].height);for(let K=0,ot=jt.length;K<ot;K++)Ct=jt[K],E.format!==ci?At!==null?Vt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Ht,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?B&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Ct.width,Ct.height,At,Bt,Ct.data):e.texImage2D(r.TEXTURE_2D,K,Ht,Ct.width,Ct.height,0,At,Bt,Ct.data)}else if(E.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Ht,ht.width,ht.height,ht.depth),B)if(E.layerUpdates.size>0){let K=id(ht.width,ht.height,E.format,E.type);for(let ot of E.layerUpdates){let Tt=ht.data.subarray(ot*K/ht.data.BYTES_PER_ELEMENT,(ot+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,At,Bt,Tt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,At,Bt,ht.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,ht.width,ht.height,ht.depth,0,At,Bt,ht.data);else if(E.isData3DTexture)Vt?(ee&&e.texStorage3D(r.TEXTURE_3D,Mt,Ht,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,At,Bt,ht.data)):e.texImage3D(r.TEXTURE_3D,0,Ht,ht.width,ht.height,ht.depth,0,At,Bt,ht.data);else if(E.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(r.TEXTURE_2D,Mt,Ht,ht.width,ht.height);else{let K=ht.width,ot=ht.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,Ht,K,ot,0,At,Bt,null),K>>=1,ot>>=1}}else if(jt.length>0){if(Vt&&ee){let K=tt(jt[0]);e.texStorage2D(r.TEXTURE_2D,Mt,Ht,K.width,K.height)}for(let K=0,ot=jt.length;K<ot;K++)Ct=jt[K],Vt?B&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,At,Bt,Ct):e.texImage2D(r.TEXTURE_2D,K,Ht,At,Bt,Ct);E.generateMipmaps=!1}else if(Vt){if(ee){let K=tt(ht);e.texStorage2D(r.TEXTURE_2D,Mt,Ht,K.width,K.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Bt,ht)}else e.texImage2D(r.TEXTURE_2D,0,Ht,At,Bt,ht);g(E)&&m(J),Pt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function rt(I,E,G){if(E.image.length!==6)return;let J=Rt(I,E),st=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);let Q=i.get(st);if(st.version!==Q.__version||J===!0){e.activeTexture(r.TEXTURE0+G);let Pt=te.getPrimaries(te.workingColorSpace),vt=E.colorSpace===gn?null:te.getPrimaries(E.colorSpace),_t=E.colorSpace===gn||Pt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let qt=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,At=[];for(let ot=0;ot<6;ot++)!qt&&!ht?At[ot]=x(E.image[ot],!0,n.maxCubemapSize):At[ot]=ht?E.image[ot].image:E.image[ot],At[ot]=zt(E,At[ot]);let Bt=At[0],Ht=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),jt=y(E.internalFormat,Ht,Ct,E.colorSpace),Vt=E.isVideoTexture!==!0,ee=Q.__version===void 0||J===!0,B=st.dataReady,Mt=T(E,Bt);et(r.TEXTURE_CUBE_MAP,E);let K;if(qt){Vt&&ee&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,jt,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){K=At[ot].mipmaps;for(let Tt=0;Tt<K.length;Tt++){let wt=K[Tt];E.format!==ci?Ht!==null?Vt?B&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,wt.width,wt.height,Ht,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,jt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,wt.width,wt.height,Ht,Ct,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,jt,wt.width,wt.height,0,Ht,Ct,wt.data)}}}else{if(K=E.mipmaps,Vt&&ee){K.length>0&&Mt++;let ot=tt(At[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){Vt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,At[ot].width,At[ot].height,Ht,Ct,At[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,At[ot].width,At[ot].height,0,Ht,Ct,At[ot].data);for(let Tt=0;Tt<K.length;Tt++){let Xt=K[Tt].image[ot].image;Vt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Xt.width,Xt.height,Ht,Ct,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,jt,Xt.width,Xt.height,0,Ht,Ct,Xt.data)}}else{Vt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Ct,At[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,Ht,Ct,At[ot]);for(let Tt=0;Tt<K.length;Tt++){let wt=K[Tt];Vt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Ht,Ct,wt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,jt,Ht,Ct,wt.image[ot])}}}g(E)&&m(r.TEXTURE_CUBE_MAP),Q.__version=st.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function gt(I,E,G,J,st,Q){let Pt=s.convert(G.format,G.colorSpace),vt=s.convert(G.type),_t=y(G.internalFormat,Pt,vt,G.colorSpace),qt=i.get(E),ht=i.get(G);if(ht.__renderTarget=E,!qt.__hasExternalTextures){let At=Math.max(1,E.width>>Q),Bt=Math.max(1,E.height>>Q);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,_t,At,Bt,E.depth,0,Pt,vt,null):e.texImage2D(st,Q,_t,At,Bt,0,Pt,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),xt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,st,ht.__webglTexture,0,ct(E)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,st,ht.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(I,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){let J=E.depthTexture,st=J&&J.isDepthTexture?J.type:null,Q=M(E.stencilBuffer,st),Pt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=ct(E);xt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,Q,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,I)}else{let J=E.textures;for(let st=0;st<J.length;st++){let Q=J[st],Pt=s.convert(Q.format,Q.colorSpace),vt=s.convert(Q.type),_t=y(Q.internalFormat,Pt,vt,Q.colorSpace),qt=ct(E);G&&xt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,_t,E.width,E.height):xt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,_t,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_t,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);let st=J.__webglTexture,Q=ct(E);if(E.depthTexture.format===bs)xt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(E.depthTexture.format===Mn)xt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function It(I){let E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=J}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");yt(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=r.createRenderbuffer(),nt(E.__webglDepthbuffer[J],I,!1);else{let st=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),nt(E.__webglDepthbuffer,I,!1);else{let J=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(I,E,G){let J=i.get(I);E!==void 0&&gt(J.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&It(I)}function Zt(I){let E=I.texture,G=i.get(I),J=i.get(E);I.addEventListener("dispose",S);let st=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let _t=0;_t<E.mipmaps.length;_t++)G.__webglFramebuffer[vt][_t]=r.createFramebuffer()}else G.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)G.__webglFramebuffer[vt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let vt=0,_t=st.length;vt<_t;vt++){let qt=i.get(st[vt]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&xt(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<st.length;vt++){let _t=st[vt];G.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);let qt=s.convert(_t.format,_t.colorSpace),ht=s.convert(_t.type),At=y(_t.internalFormat,qt,ht,_t.colorSpace,I.isXRRenderTarget===!0),Bt=ct(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,At,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)gt(G.__webglFramebuffer[vt][_t],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,_t);else gt(G.__webglFramebuffer[vt],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let vt=0,_t=st.length;vt<_t;vt++){let qt=st[vt],ht=i.get(qt);e.bindTexture(r.TEXTURE_2D,ht.__webglTexture),et(r.TEXTURE_2D,qt),gt(G.__webglFramebuffer,I,qt,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),g(qt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,J.__webglTexture),et(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)gt(G.__webglFramebuffer[_t],I,E,r.COLOR_ATTACHMENT0,vt,_t);else gt(G.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,vt,0);g(E)&&m(vt),e.unbindTexture()}I.depthBuffer&&It(I)}function it(I){let E=I.textures;for(let G=0,J=E.length;G<J;G++){let st=E[G];if(g(st)){let Q=v(I),Pt=i.get(st).__webglTexture;e.bindTexture(Q,Pt),m(Q),e.unbindTexture()}}}let ut=[],k=[];function pt(I){if(I.samples>0){if(xt(I)===!1){let E=I.textures,G=I.width,J=I.height,st=r.COLOR_BUFFER_BIT,Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=i.get(I),vt=E.length>1;if(vt)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[_t]);let qt=i.get(E[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,G,J,0,0,G,J,st,r.NEAREST),l===!0&&(ut.length=0,k.length=0,ut.push(r.COLOR_ATTACHMENT0+_t),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(Q),k.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[_t]);let qt=i.get(E[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ct(I){return Math.min(n.maxSamples,I.samples)}function xt(I){let E=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function zt(I,E){let G=I.colorSpace,J=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Os&&G!==gn&&(te.getTransfer(G)===le?(J!==ci||st!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=F,this.rebindTextures=Dt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=xt}function yv(r,t){function e(i,n=gn){let s,a=te.getTransfer(n);if(i===hi)return r.UNSIGNED_BYTE;if(i===fh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===vd)return r.BYTE;if(i===yd)return r.SHORT;if(i===dr)return r.UNSIGNED_SHORT;if(i===dh)return r.INT;if(i===Hn)return r.UNSIGNED_INT;if(i===Ni)return r.FLOAT;if(i===Te)return r.HALF_FLOAT;if(i===bd)return r.ALPHA;if(i===_d)return r.RGB;if(i===ci)return r.RGBA;if(i===wd)return r.LUMINANCE;if(i===Sd)return r.LUMINANCE_ALPHA;if(i===bs)return r.DEPTH_COMPONENT;if(i===Mn)return r.DEPTH_STENCIL;if(i===Fs)return r.RED;if(i===mh)return r.RED_INTEGER;if(i===Td)return r.RG;if(i===gh)return r.RG_INTEGER;if(i===xh)return r.RGBA_INTEGER;if(i===Mo||i===bo||i===_o||i===wo)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yl||i===$l||i===Zl||i===jl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Jl||i===Ql)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kl||i===Jl)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ql)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===ec||i===ic||i===nc||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===So||i===pc||i===mc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===So)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===gc||i===xc||i===vc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===So)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Ic=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new Qe,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Jt({vertexShader:bv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new je(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends bn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new zc,g=e.getContextAttributes(),m=null,v=null,y=[],M=[],T=new at,w=null,S=new _e;S.viewport=new se;let C=new _e;C.viewport=new se;let _=[S,C],b=new Ic,A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=y[Y];return rt===void 0&&(rt=new lr,y[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=y[Y];return rt===void 0&&(rt=new lr,y[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=y[Y];return rt===void 0&&(rt=new lr,y[Y]=rt),rt.getHandSpace()};function L(Y){let rt=M.indexOf(Y.inputSource);if(rt===-1)return;let gt=y[rt];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",O);for(let Y=0;Y<y.length;Y++){let rt=M[Y];rt!==null&&(M[Y]=null,y[Y].disconnect(rt))}A=null,z=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,v=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",U),n.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),n.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,rt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Me(f.framebufferWidth,f.framebufferHeight,{format:ci,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,gt=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Mn:bs,gt=g.stencil?yn:Hn);let yt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(yt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Me(d.textureWidth,d.textureHeight,{format:ci,type:hi,depthTexture:new Ds(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Rt.setContext(n),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Y){for(let rt=0;rt<Y.removed.length;rt++){let gt=Y.removed[rt],nt=M.indexOf(gt);nt>=0&&(M[nt]=null,y[nt].disconnect(gt))}for(let rt=0;rt<Y.added.length;rt++){let gt=Y.added[rt],nt=M.indexOf(gt);if(nt===-1){for(let It=0;It<y.length;It++)if(It>=M.length){M.push(gt),nt=It;break}else if(M[It]===null){M[It]=gt,nt=It;break}if(nt===-1)break}let yt=y[nt];yt&&yt.connect(gt)}}let N=new R,q=new R;function F(Y,rt,gt){N.setFromMatrixPosition(rt.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);let nt=N.distanceTo(q),yt=rt.projectionMatrix.elements,It=gt.projectionMatrix.elements,Dt=yt[14]/(yt[10]-1),Zt=yt[14]/(yt[10]+1),it=(yt[9]+1)/yt[5],ut=(yt[9]-1)/yt[5],k=(yt[8]-1)/yt[0],pt=(It[8]+1)/It[0],ct=Dt*k,xt=Dt*pt,ft=nt/(-k+pt),zt=ft*-k;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),yt[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let tt=Dt+ft,I=Zt+ft,E=ct-zt,G=xt+(nt-zt),J=it*Zt/I*tt,st=ut*Zt/I*tt;Y.projectionMatrix.makePerspective(E,G,J,st,tt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function X(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let rt=Y.near,gt=Y.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),b.near=C.near=S.near=rt,b.far=C.far=S.far=gt,(A!==b.near||z!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,z=b.far),S.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,b.layers.mask=S.layers.mask|C.layers.mask;let nt=Y.parent,yt=b.cameras;X(b,nt);for(let It=0;It<yt.length;It++)X(yt[It],nt);yt.length===2?F(b,S,C):b.projectionMatrix.copy(S.projectionMatrix),j(Y,b,nt)};function j(Y,rt,gt){gt===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=As*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let lt=null;function et(Y,rt){if(h=rt.getViewerPose(c||a),p=rt,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let nt=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,nt=!0);for(let It=0;It<gt.length;It++){let Dt=gt[It],Zt=null;if(f!==null)Zt=f.getViewport(Dt);else{let ut=u.getViewSubImage(d,Dt);Zt=ut.viewport,It===0&&(t.setRenderTargetTextures(v,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(v))}let it=_[It];it===void 0&&(it=new _e,it.layers.enable(It),it.viewport=new se,_[It]=it),it.matrix.fromArray(Dt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Dt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),It===0&&(b.matrix.copy(it.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),nt===!0&&b.cameras.push(it)}let yt=n.enabledFeatures;if(yt&&yt.includes("depth-sensing")){let It=u.getDepthInformation(gt[0]);It&&It.isValid&&It.texture&&x.init(t,It,n.renderState)}}for(let gt=0;gt<y.length;gt++){let nt=M[gt],yt=y[gt];nt!==null&&yt!==void 0&&yt.update(nt,rt,c||a)}lt&&lt(Y,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),p=null}let Rt=new zd;Rt.setAnimationLoop(et),this.setAnimationLoop=function(Y){lt=Y},this.dispose=function(){}}},Un=new ti,wv=new Et;function Sv(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Id(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,Un.copy(M),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),g.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(Un)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Tv(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;i.uniformBlockBinding(v,M)}function c(v,y){let M=n[v.id];M===void 0&&(p(v),M=h(v),n[v.id]=M,v.addEventListener("dispose",g));let T=y.program;i.updateUBOMapping(v,T);let w=t.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let M=r.createBuffer(),T=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=n[v.id],M=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,S=M.length;w<S;w++){let C=Array.isArray(M[w])?M[w]:[M[w]];for(let _=0,b=C.length;_<b;_++){let A=C[_];if(f(A,w,_,T)===!0){let z=A.__offset,L=Array.isArray(A.value)?A.value:[A.value],U=0;for(let O=0;O<L.length;O++){let N=L[O],q=x(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,z+U,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,M,T){let w=v.value,S=y+"_"+M;if(T[S]===void 0)return typeof w=="number"||typeof w=="boolean"?T[S]=w:T[S]=w.clone(),!0;{let C=T[S];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[S]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function p(v){let y=v.uniforms,M=0,T=16;for(let S=0,C=y.length;S<C;S++){let _=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,A=_.length;b<A;b++){let z=_[b],L=Array.isArray(z.value)?z.value:[z.value];for(let U=0,O=L.length;U<O;U++){let N=L[U],q=x(N),F=M%T,X=F%q.boundary,j=F+X;M+=X,j!==0&&T-j<q.storage&&(M+=T-j),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=q.storage}}}let w=M%T;return w>0&&(M+=T-w),v.__size=M,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function m(){for(let v in n)r.deleteBuffer(n[v]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var Is=class{constructor(t={}){let{canvas:e=A0(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=vn,this.toneMappingExposure=1;let M=this,T=!1,w=0,S=0,C=null,_=-1,b=null,A=new se,z=new se,L=null,U=new dt(0),O=0,N=e.width,q=e.height,F=1,X=null,j=null,lt=new se(0,0,N,q),et=new se(0,0,N,q),Rt=!1,Y=new fr,rt=!1,gt=!1,nt=new Et,yt=new Et,It=new R,Dt=new se,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function ut(){return C===null?F:1}let k=i;function pt(D,H){return e.getContext(D,H)}try{let D={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sh}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),k===null){let H="webgl2";if(k=pt(H,D),k===null)throw pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ct,xt,ft,zt,tt,I,E,G,J,st,Q,Pt,vt,_t,qt,ht,At,Bt,Ht,Ct,jt,Vt,ee,B;function Mt(){ct=new Hg(k),ct.init(),Vt=new yv(k,ct),xt=new kg(k,ct,t,Vt),ft=new gv(k,ct),xt.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),zt=new Wg(k),tt=new nv,I=new vv(k,ct,ft,tt,xt,Vt,zt),E=new Ng(M),G=new Bg(M),J=new K0(k),ee=new zg(k,J),st=new Vg(k,J,zt,ee),Q=new Xg(k,st,J,zt),Ht=new qg(k,xt,I),ht=new Ug(tt),Pt=new iv(M,E,G,ct,xt,ee,ht),vt=new Sv(M,tt),_t=new rv,qt=new uv(ct),Bt=new Ig(M,E,G,ft,Q,f,l),At=new pv(M,Q,xt),B=new Tv(k,zt,xt,ft),Ct=new Lg(k,ct,zt),jt=new Gg(k,ct,zt),zt.programs=Pt.programs,M.capabilities=xt,M.extensions=ct,M.properties=tt,M.renderLists=_t,M.shadowMap=At,M.state=ft,M.info=zt}Mt();let K=new Lc(M,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let D=ct.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ct.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(D){D!==void 0&&(F=D,this.setSize(N,q,!1))},this.getSize=function(D){return D.set(N,q)},this.setSize=function(D,H,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=D,q=H,e.width=Math.floor(D*F),e.height=Math.floor(H*F),$===!0&&(e.style.width=D+"px",e.style.height=H+"px"),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(N*F,q*F).floor()},this.setDrawingBufferSize=function(D,H,$){N=D,q=H,F=$,e.width=Math.floor(D*$),e.height=Math.floor(H*$),this.setViewport(0,0,D,H)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(lt)},this.setViewport=function(D,H,$,Z){D.isVector4?lt.set(D.x,D.y,D.z,D.w):lt.set(D,H,$,Z),ft.viewport(A.copy(lt).multiplyScalar(F).round())},this.getScissor=function(D){return D.copy(et)},this.setScissor=function(D,H,$,Z){D.isVector4?et.set(D.x,D.y,D.z,D.w):et.set(D,H,$,Z),ft.scissor(z.copy(et).multiplyScalar(F).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(D){ft.setScissorTest(Rt=D)},this.setOpaqueSort=function(D){X=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(D=!0,H=!0,$=!0){let Z=0;if(D){let V=!1;if(C!==null){let mt=C.texture.format;V=mt===xh||mt===gh||mt===mh}if(V){let mt=C.texture.type,St=mt===hi||mt===Hn||mt===dr||mt===yn||mt===fh||mt===ph,Lt=Bt.getClearColor(),kt=Bt.getClearAlpha(),Wt=Lt.r,Yt=Lt.g,Ut=Lt.b;St?(p[0]=Wt,p[1]=Yt,p[2]=Ut,p[3]=kt,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=Wt,x[1]=Yt,x[2]=Ut,x[3]=kt,k.clearBufferiv(k.COLOR,0,x))}else Z|=k.COLOR_BUFFER_BIT}H&&(Z|=k.DEPTH_BUFFER_BIT),$&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),_t.dispose(),qt.dispose(),tt.dispose(),E.dispose(),G.dispose(),Q.dispose(),ee.dispose(),B.dispose(),Pt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Zh),K.removeEventListener("sessionend",jh),Pn.stop()};function ot(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let D=zt.autoReset,H=At.enabled,$=At.autoUpdate,Z=At.needsUpdate,V=At.type;Mt(),zt.autoReset=D,At.enabled=H,At.autoUpdate=$,At.needsUpdate=Z,At.type=V}function wt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Xt(D){let H=D.target;H.removeEventListener("dispose",Xt),Se(H)}function Se(D){He(D),tt.remove(D)}function He(D){let H=tt.get(D).programs;H!==void 0&&(H.forEach(function($){Pt.releaseProgram($)}),D.isShaderMaterial&&Pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,$,Z,V,mt){H===null&&(H=Zt);let St=V.isMesh&&V.matrixWorld.determinant()<0,Lt=zf(D,H,$,Z,V);ft.setMaterial(Z,St);let kt=$.index,Wt=1;if(Z.wireframe===!0){if(kt=st.getWireframeAttribute($),kt===void 0)return;Wt=2}let Yt=$.drawRange,Ut=$.attributes.position,ie=Yt.start*Wt,me=(Yt.start+Yt.count)*Wt;mt!==null&&(ie=Math.max(ie,mt.start*Wt),me=Math.min(me,(mt.start+mt.count)*Wt)),kt!==null?(ie=Math.max(ie,0),me=Math.min(me,kt.count)):Ut!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ut.count));let ge=me-ie;if(ge<0||ge===1/0)return;ee.setup(V,Z,Lt,$,kt);let Je,oe=Ct;if(kt!==null&&(Je=J.get(kt),oe=jt,oe.setIndex(Je)),V.isMesh)Z.wireframe===!0?(ft.setLineWidth(Z.wireframeLinewidth*ut()),oe.setMode(k.LINES)):oe.setMode(k.TRIANGLES);else if(V.isLine){let Ft=Z.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*ut()),V.isLineSegments?oe.setMode(k.LINES):V.isLineLoop?oe.setMode(k.LINE_LOOP):oe.setMode(k.LINE_STRIP)}else V.isPoints?oe.setMode(k.POINTS):V.isSprite&&oe.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ft=V._multiDrawStarts,Wi=V._multiDrawCounts,ae=V._multiDrawCount,Ei=kt?J.get(kt).bytesPerElement:1,is=tt.get(Z).currentProgram.getUniforms();for(let oi=0;oi<ae;oi++)is.setValue(k,"_gl_DrawID",oi),oe.render(Ft[oi]/Ei,Wi[oi])}else if(V.isInstancedMesh)oe.renderInstances(ie,ge,V.count);else if($.isInstancedBufferGeometry){let Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wi=Math.min($.instanceCount,Ft);oe.renderInstances(ie,ge,Wi)}else oe.render(ie,ge)};function he(D,H,$){D.transparent===!0&&D.side===Pe&&D.forceSinglePass===!1?(D.side=Fe,D.needsUpdate=!0,Wr(D,H,$),D.side=Fi,D.needsUpdate=!0,Wr(D,H,$),D.side=Pe):Wr(D,H,$)}this.compile=function(D,H,$=null){$===null&&($=D),m=qt.get($),m.init(H),y.push(m),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),D!==$&&D.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let Z=new Set;return D.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let mt=V.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let Lt=mt[St];he(Lt,$,V),Z.add(Lt)}else he(mt,$,V),Z.add(mt)}),y.pop(),m=null,Z},this.compileAsync=function(D,H,$=null){let Z=this.compile(D,H,$);return new Promise(V=>{function mt(){if(Z.forEach(function(St){tt.get(St).currentProgram.isReady()&&Z.delete(St)}),Z.size===0){V(D);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ti=null;function Gi(D){Ti&&Ti(D)}function Zh(){Pn.stop()}function jh(){Pn.start()}let Pn=new zd;Pn.setAnimationLoop(Gi),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(D){Ti=D,K.setAnimationLoop(D),D===null?Pn.stop():Pn.start()},K.addEventListener("sessionstart",Zh),K.addEventListener("sessionend",jh),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,H,C),m=qt.get(D,y.length),m.init(H),y.push(m),yt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(yt),gt=this.localClippingEnabled,rt=ht.init(this.clippingPlanes,gt),g=_t.get(D,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){let mt=M.xr.getDepthSensingMesh();mt!==null&&el(mt,H,-1/0,M.sortObjects)}el(D,H,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(X,j),it=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,it&&Bt.addToRenderList(g,D),this.info.render.frame++,rt===!0&&ht.beginShadows();let $=m.state.shadowsArray;At.render($,D,H),rt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,V=g.transmissive;if(m.setupLights(),H.isArrayCamera){let mt=H.cameras;if(V.length>0)for(let St=0,Lt=mt.length;St<Lt;St++){let kt=mt[St];Jh(Z,V,D,kt)}it&&Bt.render(D);for(let St=0,Lt=mt.length;St<Lt;St++){let kt=mt[St];Kh(g,D,kt,kt.viewport)}}else V.length>0&&Jh(Z,V,D,H),it&&Bt.render(D),Kh(g,D,H);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),D.isScene===!0&&D.onAfterRender(M,D,H),ee.resetDefaultState(),_=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],rt===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function el(D,H,$,Z){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)$=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Y.intersectsSprite(D)){Z&&Dt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(yt);let St=Q.update(D),Lt=D.material;Lt.visible&&g.push(D,St,Lt,$,Dt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Y.intersectsObject(D))){let St=Q.update(D),Lt=D.material;if(Z&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Dt.copy(D.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Dt.copy(St.boundingSphere.center)),Dt.applyMatrix4(D.matrixWorld).applyMatrix4(yt)),Array.isArray(Lt)){let kt=St.groups;for(let Wt=0,Yt=kt.length;Wt<Yt;Wt++){let Ut=kt[Wt],ie=Lt[Ut.materialIndex];ie&&ie.visible&&g.push(D,St,ie,$,Dt.z,Ut)}}else Lt.visible&&g.push(D,St,Lt,$,Dt.z,null)}}let mt=D.children;for(let St=0,Lt=mt.length;St<Lt;St++)el(mt[St],H,$,Z)}function Kh(D,H,$,Z){let V=D.opaque,mt=D.transmissive,St=D.transparent;m.setupLightsView($),rt===!0&&ht.setGlobalState(M.clippingPlanes,$),Z&&ft.viewport(A.copy(Z)),V.length>0&&Gr(V,H,$),mt.length>0&&Gr(mt,H,$),St.length>0&&Gr(St,H,$),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Jh(D,H,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Me(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Te:hi,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let mt=m.state.transmissionRenderTarget[Z.id],St=Z.viewport||A;mt.setSize(St.z,St.w);let Lt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(U),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),it&&Bt.render($);let kt=M.toneMapping;M.toneMapping=vn;let Wt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),rt===!0&&ht.setGlobalState(M.clippingPlanes,Z),Gr(D,$,Z),I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ut=0,ie=H.length;Ut<ie;Ut++){let me=H[Ut],ge=me.object,Je=me.geometry,oe=me.material,Ft=me.group;if(oe.side===Pe&&ge.layers.test(Z.layers)){let Wi=oe.side;oe.side=Fe,oe.needsUpdate=!0,Qh(ge,$,Z,Je,oe,Ft),oe.side=Wi,oe.needsUpdate=!0,Yt=!0}}Yt===!0&&(I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt))}M.setRenderTarget(Lt),M.setClearColor(U,O),Wt!==void 0&&(Z.viewport=Wt),M.toneMapping=kt}function Gr(D,H,$){let Z=H.isScene===!0?H.overrideMaterial:null;for(let V=0,mt=D.length;V<mt;V++){let St=D[V],Lt=St.object,kt=St.geometry,Wt=Z===null?St.material:Z,Yt=St.group;Lt.layers.test($.layers)&&Qh(Lt,H,$,kt,Wt,Yt)}}function Qh(D,H,$,Z,V,mt){D.onBeforeRender(M,H,$,Z,V,mt),D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),V.onBeforeRender(M,H,$,Z,D,mt),V.transparent===!0&&V.side===Pe&&V.forceSinglePass===!1?(V.side=Fe,V.needsUpdate=!0,M.renderBufferDirect($,H,Z,V,D,mt),V.side=Fi,V.needsUpdate=!0,M.renderBufferDirect($,H,Z,V,D,mt),V.side=Pe):M.renderBufferDirect($,H,Z,V,D,mt),D.onAfterRender(M,H,$,Z,V,mt)}function Wr(D,H,$){H.isScene!==!0&&(H=Zt);let Z=tt.get(D),V=m.state.lights,mt=m.state.shadowsArray,St=V.state.version,Lt=Pt.getParameters(D,V.state,mt,H,$),kt=Pt.getProgramCacheKey(Lt),Wt=Z.programs;Z.environment=D.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(D.isMeshStandardMaterial?G:E).get(D.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,Wt===void 0&&(D.addEventListener("dispose",Xt),Wt=new Map,Z.programs=Wt);let Yt=Wt.get(kt);if(Yt!==void 0){if(Z.currentProgram===Yt&&Z.lightsStateVersion===St)return eu(D,Lt),Yt}else Lt.uniforms=Pt.getUniforms(D),D.onBeforeCompile(Lt,M),Yt=Pt.acquireProgram(Lt,kt),Wt.set(kt,Yt),Z.uniforms=Lt.uniforms;let Ut=Z.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),eu(D,Lt),Z.needsLights=kf(D),Z.lightsStateVersion=St,Z.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Yt,Z.uniformsList=null,Yt}function tu(D){if(D.uniformsList===null){let H=D.currentProgram.getUniforms();D.uniformsList=ws.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function eu(D,H){let $=tt.get(D);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function zf(D,H,$,Z,V){H.isScene!==!0&&(H=Zt),I.resetTextureUnits();let mt=H.fog,St=Z.isMeshStandardMaterial?H.environment:null,Lt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Os,kt=(Z.isMeshStandardMaterial?G:E).get(Z.envMap||St),Wt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Yt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,me=!!$.morphAttributes.color,ge=vn;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=M.toneMapping);let Je=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Je!==void 0?Je.length:0,Ft=tt.get(Z),Wi=m.state.lights;if(rt===!0&&(gt===!0||D!==b)){let mi=D===b&&Z.id===_;ht.setState(Z,D,mi)}let ae=!1;Z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Wi.state.version||Ft.outputColorSpace!==Lt||V.isBatchedMesh&&Ft.batching===!1||!V.isBatchedMesh&&Ft.batching===!0||V.isBatchedMesh&&Ft.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ft.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||V.isInstancedMesh&&Ft.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ft.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ft.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ft.instancingMorph===!1&&V.morphTexture!==null||Ft.envMap!==kt||Z.fog===!0&&Ft.fog!==mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==Wt||Ft.vertexTangents!==Yt||Ft.morphTargets!==Ut||Ft.morphNormals!==ie||Ft.morphColors!==me||Ft.toneMapping!==ge||Ft.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ft.__version=Z.version);let Ei=Ft.currentProgram;ae===!0&&(Ei=Wr(Z,H,V));let is=!1,oi=!1,Zs=!1,xe=Ei.getUniforms(),ki=Ft.uniforms;if(ft.useProgram(Ei.program)&&(is=!0,oi=!0,Zs=!0),Z.id!==_&&(_=Z.id,oi=!0),is||b!==D){ft.buffers.depth.getReversed()?(nt.copy(D.projectionMatrix),R0(nt),P0(nt),xe.setValue(k,"projectionMatrix",nt)):xe.setValue(k,"projectionMatrix",D.projectionMatrix),xe.setValue(k,"viewMatrix",D.matrixWorldInverse);let ln=xe.map.cameraPosition;ln!==void 0&&ln.setValue(k,It.setFromMatrixPosition(D.matrixWorld)),xt.logarithmicDepthBuffer&&xe.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,oi=!0,Zs=!0)}if(V.isSkinnedMesh){xe.setOptional(k,V,"bindMatrix"),xe.setOptional(k,V,"bindMatrixInverse");let mi=V.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),xe.setValue(k,"boneTexture",mi.boneTexture,I))}V.isBatchedMesh&&(xe.setOptional(k,V,"batchingTexture"),xe.setValue(k,"batchingTexture",V._matricesTexture,I),xe.setOptional(k,V,"batchingIdTexture"),xe.setValue(k,"batchingIdTexture",V._indirectTexture,I),xe.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&xe.setValue(k,"batchingColorTexture",V._colorsTexture,I));let js=$.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&Ht.update(V,$,Ei),(oi||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,xe.setValue(k,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ki.envMap.value=kt,ki.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(ki.envMapIntensity.value=H.environmentIntensity),oi&&(xe.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&Lf(ki,Zs),mt&&Z.fog===!0&&vt.refreshFogUniforms(ki,mt),vt.refreshMaterialUniforms(ki,Z,F,q,m.state.transmissionRenderTarget[D.id]),ws.upload(k,tu(Ft),ki,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ws.upload(k,tu(Ft),ki,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(k,"center",V.center),xe.setValue(k,"modelViewMatrix",V.modelViewMatrix),xe.setValue(k,"normalMatrix",V.normalMatrix),xe.setValue(k,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let mi=Z.uniformsGroups;for(let ln=0,cn=mi.length;ln<cn;ln++){let iu=mi[ln];B.update(iu,Ei),B.bind(iu,Ei)}}return Ei}function Lf(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function kf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(D,H,$){tt.get(D.texture).__webglTexture=H,tt.get(D.depthTexture).__webglTexture=$;let Z=tt.get(D);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,H){let $=tt.get(D);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(D,H=0,$=0){C=D,w=H,S=$;let Z=!0,V=null,mt=!1,St=!1;if(D){let kt=tt.get(D);if(kt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(kt.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(kt.__hasExternalTextures)I.rebindTextures(D,tt.get(D.texture).__webglTexture,tt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Ut=D.depthTexture;if(kt.__boundDepthTexture!==Ut){if(Ut!==null&&tt.has(Ut)&&(D.width!==Ut.image.width||D.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}let Wt=D.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);let Yt=tt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Yt[H])?V=Yt[H][$]:V=Yt[H],mt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?V=tt.get(D).__webglMultisampledFramebuffer:Array.isArray(Yt)?V=Yt[$]:V=Yt,A.copy(D.viewport),z.copy(D.scissor),L=D.scissorTest}else A.copy(lt).multiplyScalar(F).floor(),z.copy(et).multiplyScalar(F).floor(),L=Rt;if(ft.bindFramebuffer(k.FRAMEBUFFER,V)&&Z&&ft.drawBuffers(D,V),ft.viewport(A),ft.scissor(z),ft.setScissorTest(L),mt){let kt=tt.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,kt.__webglTexture,$)}else if(St){let kt=tt.get(D.texture),Wt=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,kt.__webglTexture,$||0,Wt)}_=-1},this.readRenderTargetPixels=function(D,H,$,Z,V,mt,St){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=tt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){ft.bindFramebuffer(k.FRAMEBUFFER,Lt);try{let kt=D.texture,Wt=kt.format,Yt=kt.type;if(!xt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-Z&&$>=0&&$<=D.height-V&&k.readPixels(H,$,Z,V,Vt.convert(Wt),Vt.convert(Yt),mt)}finally{let kt=C!==null?tt.get(C).__webglFramebuffer:null;ft.bindFramebuffer(k.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(D,H,$,Z,V,mt,St){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=tt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){let kt=D.texture,Wt=kt.format,Yt=kt.type;if(!xt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=D.width-Z&&$>=0&&$<=D.height-V){ft.bindFramebuffer(k.FRAMEBUFFER,Lt);let Ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ut),k.bufferData(k.PIXEL_PACK_BUFFER,mt.byteLength,k.STREAM_READ),k.readPixels(H,$,Z,V,Vt.convert(Wt),Vt.convert(Yt),0);let ie=C!==null?tt.get(C).__webglFramebuffer:null;ft.bindFramebuffer(k.FRAMEBUFFER,ie);let me=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await C0(k,me,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,mt),k.deleteBuffer(Ut),k.deleteSync(me),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,H=null,$=0){D.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,D=arguments[1]);let Z=Math.pow(2,-$),V=Math.floor(D.image.width*Z),mt=Math.floor(D.image.height*Z),St=H!==null?H.x:0,Lt=H!==null?H.y:0;I.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,St,Lt,V,mt),ft.unbindTexture()},this.copyTextureToTexture=function(D,H,$=null,Z=null,V=0){D.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1],H=arguments[2],V=arguments[3]||0,$=null);let mt,St,Lt,kt,Wt,Yt,Ut,ie,me,ge=D.isCompressedTexture?D.mipmaps[V]:D.image;$!==null?(mt=$.max.x-$.min.x,St=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,kt=$.min.x,Wt=$.min.y,Yt=$.isBox3?$.min.z:0):(mt=ge.width,St=ge.height,Lt=ge.depth||1,kt=0,Wt=0,Yt=0),Z!==null?(Ut=Z.x,ie=Z.y,me=Z.z):(Ut=0,ie=0,me=0);let Je=Vt.convert(H.format),oe=Vt.convert(H.type),Ft;H.isData3DTexture?(I.setTexture3D(H,0),Ft=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Ft=k.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Ft=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let Wi=k.getParameter(k.UNPACK_ROW_LENGTH),ae=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ei=k.getParameter(k.UNPACK_SKIP_PIXELS),is=k.getParameter(k.UNPACK_SKIP_ROWS),oi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ge.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yt);let Zs=D.isDataArrayTexture||D.isData3DTexture,xe=H.isDataArrayTexture||H.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let ki=tt.get(D),js=tt.get(H),mi=tt.get(ki.__renderTarget),ln=tt.get(js.__renderTarget);ft.bindFramebuffer(k.READ_FRAMEBUFFER,mi.__webglFramebuffer),ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let cn=0;cn<Lt;cn++)Zs&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tt.get(D).__webglTexture,V,Yt+cn),D.isDepthTexture?(xe&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tt.get(H).__webglTexture,V,me+cn),k.blitFramebuffer(kt,Wt,mt,St,Ut,ie,mt,St,k.DEPTH_BUFFER_BIT,k.NEAREST)):xe?k.copyTexSubImage3D(Ft,V,Ut,ie,me+cn,kt,Wt,mt,St):k.copyTexSubImage2D(Ft,V,Ut,ie,me+cn,kt,Wt,mt,St);ft.bindFramebuffer(k.READ_FRAMEBUFFER,null),ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else xe?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Ft,V,Ut,ie,me,mt,St,Lt,Je,oe,ge.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Ft,V,Ut,ie,me,mt,St,Lt,Je,ge.data):k.texSubImage3D(Ft,V,Ut,ie,me,mt,St,Lt,Je,oe,ge):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,Ut,ie,mt,St,Je,oe,ge.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,Ut,ie,ge.width,ge.height,Je,ge.data):k.texSubImage2D(k.TEXTURE_2D,V,Ut,ie,mt,St,Je,oe,ge);k.pixelStorei(k.UNPACK_ROW_LENGTH,Wi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ei),k.pixelStorei(k.UNPACK_SKIP_ROWS,is),k.pixelStorei(k.UNPACK_SKIP_IMAGES,oi),V===0&&H.generateMipmaps&&k.generateMipmap(Ft),ft.unbindTexture()},this.copyTextureToTexture3D=function(D,H,$=null,Z=null,V=0){return D.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,D=arguments[2],H=arguments[3],V=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,H,$,Z,V)},this.initRenderTarget=function(D){tt.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),ft.unbindTexture()},this.resetState=function(){w=0,S=0,C=null,ft.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}},Uo=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},No=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Hi=class extends Qe{constructor(t=null,e=1,i=1,n,s,a,o,l,c=De,h=De,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class extends ue{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new Et,nd=new Et,fo=[],sd=new Ii,Ev=new Et,er=new Ot,ir=new _n,yi=class extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ev)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),sd.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),ir.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(i),t.ray.intersectsSphere(ir)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,xs),nd.multiplyMatrices(i,xs),er.matrixWorld=nd,er.raycast(t,fo);for(let a=0,o=fo.length;a<o;a++){let l=fo[a];l.instanceId=s,l.object=this,e.push(l)}fo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(n*this.count),n,this.count,Fs,Ni));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mr=class extends nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rd=new Et,kc=new Po,po=new _n,mo=new R,Fo=class extends Oe{constructor(t=new pe,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(n),po.radius+=s,t.ray.intersectsSphere(po)===!1)return;rd.copy(n).invert(),kc.copy(t.ray).applyMatrix4(rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);mo.fromBufferAttribute(u,g),od(mo,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)mo.fromBufferAttribute(u,p),od(mo,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function od(r,t,e,i,n,s,a){let o=kc.distanceSqToPoint(r);if(o<e){let l=new R;kc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vn=class extends Qe{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new at:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,n=[],s=[],a=[],o=new R,l=new Et;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ne(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ne(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends Mi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uc=class extends gr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _h(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var go=new R,Pl=new _h,Dl=new _h,Il=new _h,Nc=class extends Mi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(go.subVectors(n[0],n[1]).add(n[0]),c=go);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(go.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Pl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),Dl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),Il.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Il.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Pl.calc(l),Dl.calc(l),Il.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ad(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Av(r,t){let e=1-r;return e*e*t}function Cv(r,t){return 2*(1-r)*r*t}function Rv(r,t){return r*r*t}function cr(r,t,e,i){return Av(r,t)+Cv(r,e)+Rv(r,i)}function Pv(r,t){let e=1-r;return e*e*e*t}function Dv(r,t){let e=1-r;return 3*e*e*r*t}function Iv(r,t){return 3*(1-r)*r*r*t}function zv(r,t){return r*r*r*t}function hr(r,t,e,i,n){return Pv(r,t)+Dv(r,e)+Iv(r,i)+zv(r,n)}var Oo=class extends Mi{constructor(t=new at,e=new at,i=new at,n=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new at){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hr(t,n.x,s.x,a.x,o.x),hr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fc=class extends Mi{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hr(t,n.x,s.x,a.x,o.x),hr(t,n.y,s.y,a.y,o.y),hr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Mi{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oc=class extends Mi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Mi{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(cr(t,n.x,s.x,a.x),cr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends Mi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(cr(t,n.x,s.x,a.x),cr(t,n.y,s.y,a.y),cr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(ad(o,l.x,c.x,h.x,u.x),ad(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new at().fromArray(n))}return this}},Hc=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Nc,CubicBezierCurve:Oo,CubicBezierCurve3:Fc,EllipseCurve:gr,LineCurve:Bo,LineCurve3:Oc,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Bc,SplineCurve:Vo}),Vc=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Hc[n.type]().fromJSON(n))}return this}},Go=class extends Vc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Bo(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Ho(this.currentPoint.clone(),new at(t,e),new at(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Oo(this.currentPoint.clone(),new at(t,e),new at(i,n),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Vo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new gr(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var zs=class r extends pe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new R,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wn=class r extends pe{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function v(){let M=new R,T=new R,w=0,S=(e-t)/i;for(let C=0;C<=s;C++){let _=[],b=C/s,A=b*(e-t)+t;for(let z=0;z<=n;z++){let L=z/n,U=L*l+o,O=Math.sin(U),N=Math.cos(U);T.x=A*O,T.y=-b*i+g,T.z=A*N,u.push(T.x,T.y,T.z),M.set(O,S,N).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-b),_.push(p++)}x.push(_)}for(let C=0;C<n;C++)for(let _=0;_<s;_++){let b=x[_][C],A=x[_+1][C],z=x[_+1][C+1],L=x[_][C+1];(t>0||_!==0)&&(h.push(b,A,L),w+=3),(e>0||_!==s-1)&&(h.push(A,z,L),w+=3)}c.addGroup(m,w,0),m+=w}function y(M){let T=p,w=new at,S=new R,C=0,_=M===!0?t:e,b=M===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let A=p;for(let z=0;z<=n;z++){let U=z/n*l+o,O=Math.cos(U),N=Math.sin(U);S.x=_*N,S.y=g*b,S.z=_*O,u.push(S.x,S.y,S.z),d.push(0,b,0),w.x=O*.5+.5,w.y=N*.5*b+.5,f.push(w.x,w.y),p++}for(let z=0;z<n;z++){let L=T+z,U=A+z;M===!0?h.push(U,U+1,L):h.push(U+1,U,L),C+=3}c.addGroup(m,C,M===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gn=class r extends wn{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wo=class r extends pe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new R,M=new R,T=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],M),f(e[w+2],T),l(y,M,T,v)}function l(v,y,M,T){let w=T+1,S=[];for(let C=0;C<=w;C++){S[C]=[];let _=v.clone().lerp(M,C/w),b=y.clone().lerp(M,C/w),A=w-C;for(let z=0;z<=A;z++)z===0&&C===w?S[C][z]=_:S[C][z]=_.clone().lerp(b,z/A)}for(let C=0;C<w;C++)for(let _=0;_<2*(w-C)-1;_++){let b=Math.floor(_/2);_%2===0?(d(S[C][b+1]),d(S[C+1][b]),d(S[C][b])):(d(S[C][b+1]),d(S[C+1][b+1]),d(S[C+1][b]))}}function c(v){let y=new R;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(v),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){let v=new R;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];let M=g(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;a.push(M,1-T)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){let y=a[v+0],M=a[v+2],T=a[v+4],w=Math.max(y,M,T),S=Math.min(y,M,T);w>.9&&S<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){let M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){let v=new R,y=new R,M=new R,T=new R,w=new at,S=new at,C=new at;for(let _=0,b=0;_<s.length;_+=9,b+=6){v.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),w.set(a[b+0],a[b+1]),S.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),T.copy(v).add(y).add(M).divideScalar(3);let A=g(T);x(w,b+0,v,A),x(S,b+2,y,A),x(C,b+4,M,A)}}function x(v,y,M,T){T<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},qo=class r extends Wo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var xr=class extends Go{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Go().fromJSON(n))}return this}},Lv={triangulate:function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Fd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=Ov(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let p=e;p<n;p+=e)u=r[p],d=r[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return vr(s,a,e,o,l,f,0),a}};function Fd(r,t,e,i,n){let s,a;if(n===jv(r,t,e,i)>0)for(s=t;s<e;s+=i)a=ld(s,r[s],r[s+1],a);else for(s=e-i;s>=t;s-=i)a=ld(s,r[s],r[s+1],a);return a&&oa(a,a.next)&&(Mr(a),a=a.next),a}function Wn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(oa(e,e.next)||we(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function vr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Wv(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Uv(r,i,n,s):kv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Mr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Nv(Wn(r),t,e),vr(r,t,e,i,n,s,2)):a===2&&Fv(r,t,e,i,n,s):vr(Wn(r),t,e,i,n,s,1);break}}}function kv(r){let t=r.prev,e=r,i=r.next;if(we(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ms(n,o,s,l,a,c,p.x,p.y)&&we(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Uv(r,t,e,i){let n=r.prev,s=r,a=r.next;if(we(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Gc(f,p,t,e,i),v=Gc(x,g,t,e,i),y=r.prevZ,M=r.nextZ;for(;y&&y.z>=m&&M&&M.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==n&&y!==a&&Ms(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&Ms(o,h,l,u,c,d,M.x,M.y)&&we(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==n&&y!==a&&Ms(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&Ms(o,h,l,u,c,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nv(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!oa(n,s)&&Od(n,i,i.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Mr(i),Mr(i.next),i=r=s),i=i.next}while(i!==r);return Wn(i)}function Fv(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yv(a,o)){let l=Bd(a,o);a=Wn(a,a.next),l=Wn(l,l.next),vr(a,t,e,i,n,s,0),vr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Ov(r,t,e,i){let n=[],s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=Fd(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Xv(c));for(n.sort(Bv),s=0;s<n.length;s++)e=Hv(n[s],e);return e}function Bv(r,t){return r.x-t.x}function Hv(r,t){let e=Vv(r,t);if(!e)return t;let i=Bd(e,r);return Wn(i,i.next),Wn(e,e.next)}function Vv(r,t){let e=t,i=-1/0,n,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===s))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&Ms(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),yr(e,r)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Gv(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function Gv(r,t){return we(r.prev,r,t.prev)<0&&we(t.next,r,r.next)<0}function Wv(r,t,e,i){let n=r;do n.z===0&&(n.z=Gc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,qv(n)}function qv(r){let t,e,i,n,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(a>1);return r}function Gc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Xv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ms(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Yv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!$v(r,t)&&(yr(r,t)&&yr(t,r)&&Zv(r,t)&&(we(r.prev,r,t.prev)||we(r,t.prev,t))||oa(r,t)&&we(r.prev,r,r.next)>0&&we(t.prev,t,t.next)>0)}function we(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function oa(r,t){return r.x===t.x&&r.y===t.y}function Od(r,t,e,i){let n=vo(we(r,t,e)),s=vo(we(r,t,i)),a=vo(we(e,i,r)),o=vo(we(e,i,t));return!!(n!==s&&a!==o||n===0&&xo(r,e,t)||s===0&&xo(r,i,t)||a===0&&xo(e,r,i)||o===0&&xo(e,t,i))}function xo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function vo(r){return r>0?1:r<0?-1:0}function $v(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Od(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function yr(r,t){return we(r.prev,r,r.next)<0?we(r,t,r.next)>=0&&we(r,r.prev,t)>=0:we(r,t,r.prev)<0||we(r,r.next,t)<0}function Zv(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Bd(r,t){let e=new Wc(r.i,r.x,r.y),i=new Wc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function ld(r,t,e,i){let n=new Wc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Mr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Wc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var ur=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];cd(t),hd(i,t);let a=t.length;e.forEach(cd);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,hd(i,e[l]);let o=Lv.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function cd(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function hd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Xo=class r extends pe{constructor(t=new xr([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Kt(n,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Kv,y,M=!1,T,w,S,C;m&&(y=m.getSpacedPoints(h),M=!0,d=!1,T=m.computeFrenetFrames(h,!1),w=new R,S=new R,C=new R),d||(g=0,f=0,p=0,x=0);let _=o.extractPoints(c),b=_.shape,A=_.holes;if(!ur.isClockWise(b)){b=b.reverse();for(let it=0,ut=A.length;it<ut;it++){let k=A[it];ur.isClockWise(k)&&(A[it]=k.reverse())}}let L=ur.triangulateShape(b,A),U=b;for(let it=0,ut=A.length;it<ut;it++){let k=A[it];b=b.concat(k)}function O(it,ut,k){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ut,k)}let N=b.length,q=L.length;function F(it,ut,k){let pt,ct,xt,ft=it.x-ut.x,zt=it.y-ut.y,tt=k.x-it.x,I=k.y-it.y,E=ft*ft+zt*zt,G=ft*I-zt*tt;if(Math.abs(G)>Number.EPSILON){let J=Math.sqrt(E),st=Math.sqrt(tt*tt+I*I),Q=ut.x-zt/J,Pt=ut.y+ft/J,vt=k.x-I/st,_t=k.y+tt/st,qt=((vt-Q)*I-(_t-Pt)*tt)/(ft*I-zt*tt);pt=Q+ft*qt-it.x,ct=Pt+zt*qt-it.y;let ht=pt*pt+ct*ct;if(ht<=2)return new at(pt,ct);xt=Math.sqrt(ht/2)}else{let J=!1;ft>Number.EPSILON?tt>Number.EPSILON&&(J=!0):ft<-Number.EPSILON?tt<-Number.EPSILON&&(J=!0):Math.sign(zt)===Math.sign(I)&&(J=!0),J?(pt=-zt,ct=ft,xt=Math.sqrt(E)):(pt=ft,ct=zt,xt=Math.sqrt(E/2))}return new at(pt/xt,ct/xt)}let X=[];for(let it=0,ut=U.length,k=ut-1,pt=it+1;it<ut;it++,k++,pt++)k===ut&&(k=0),pt===ut&&(pt=0),X[it]=F(U[it],U[k],U[pt]);let j=[],lt,et=X.concat();for(let it=0,ut=A.length;it<ut;it++){let k=A[it];lt=[];for(let pt=0,ct=k.length,xt=ct-1,ft=pt+1;pt<ct;pt++,xt++,ft++)xt===ct&&(xt=0),ft===ct&&(ft=0),lt[pt]=F(k[pt],k[xt],k[ft]);j.push(lt),et=et.concat(lt)}for(let it=0;it<g;it++){let ut=it/g,k=f*Math.cos(ut*Math.PI/2),pt=p*Math.sin(ut*Math.PI/2)+x;for(let ct=0,xt=U.length;ct<xt;ct++){let ft=O(U[ct],X[ct],pt);nt(ft.x,ft.y,-k)}for(let ct=0,xt=A.length;ct<xt;ct++){let ft=A[ct];lt=j[ct];for(let zt=0,tt=ft.length;zt<tt;zt++){let I=O(ft[zt],lt[zt],pt);nt(I.x,I.y,-k)}}}let Rt=p+x;for(let it=0;it<N;it++){let ut=d?O(b[it],et[it],Rt):b[it];M?(S.copy(T.normals[0]).multiplyScalar(ut.x),w.copy(T.binormals[0]).multiplyScalar(ut.y),C.copy(y[0]).add(S).add(w),nt(C.x,C.y,C.z)):nt(ut.x,ut.y,0)}for(let it=1;it<=h;it++)for(let ut=0;ut<N;ut++){let k=d?O(b[ut],et[ut],Rt):b[ut];M?(S.copy(T.normals[it]).multiplyScalar(k.x),w.copy(T.binormals[it]).multiplyScalar(k.y),C.copy(y[it]).add(S).add(w),nt(C.x,C.y,C.z)):nt(k.x,k.y,u/h*it)}for(let it=g-1;it>=0;it--){let ut=it/g,k=f*Math.cos(ut*Math.PI/2),pt=p*Math.sin(ut*Math.PI/2)+x;for(let ct=0,xt=U.length;ct<xt;ct++){let ft=O(U[ct],X[ct],pt);nt(ft.x,ft.y,u+k)}for(let ct=0,xt=A.length;ct<xt;ct++){let ft=A[ct];lt=j[ct];for(let zt=0,tt=ft.length;zt<tt;zt++){let I=O(ft[zt],lt[zt],pt);M?nt(I.x,I.y+y[h-1].y,y[h-1].x+k):nt(I.x,I.y,u+k)}}}Y(),rt();function Y(){let it=n.length/3;if(d){let ut=0,k=N*ut;for(let pt=0;pt<q;pt++){let ct=L[pt];yt(ct[2]+k,ct[1]+k,ct[0]+k)}ut=h+g*2,k=N*ut;for(let pt=0;pt<q;pt++){let ct=L[pt];yt(ct[0]+k,ct[1]+k,ct[2]+k)}}else{for(let ut=0;ut<q;ut++){let k=L[ut];yt(k[2],k[1],k[0])}for(let ut=0;ut<q;ut++){let k=L[ut];yt(k[0]+N*h,k[1]+N*h,k[2]+N*h)}}i.addGroup(it,n.length/3-it,0)}function rt(){let it=n.length/3,ut=0;gt(U,ut),ut+=U.length;for(let k=0,pt=A.length;k<pt;k++){let ct=A[k];gt(ct,ut),ut+=ct.length}i.addGroup(it,n.length/3-it,1)}function gt(it,ut){let k=it.length;for(;--k>=0;){let pt=k,ct=k-1;ct<0&&(ct=it.length-1);for(let xt=0,ft=h+g*2;xt<ft;xt++){let zt=N*xt,tt=N*(xt+1),I=ut+pt+zt,E=ut+ct+zt,G=ut+ct+tt,J=ut+pt+tt;It(I,E,G,J)}}}function nt(it,ut,k){l.push(it),l.push(ut),l.push(k)}function yt(it,ut,k){Dt(it),Dt(ut),Dt(k);let pt=n.length/3,ct=v.generateTopUV(i,n,pt-3,pt-2,pt-1);Zt(ct[0]),Zt(ct[1]),Zt(ct[2])}function It(it,ut,k,pt){Dt(it),Dt(ut),Dt(pt),Dt(ut),Dt(k),Dt(pt);let ct=n.length/3,xt=v.generateSideWallUV(i,n,ct-6,ct-3,ct-2,ct-1);Zt(xt[0]),Zt(xt[1]),Zt(xt[3]),Zt(xt[1]),Zt(xt[2]),Zt(xt[3])}function Dt(it){n.push(l[it*3+0]),n.push(l[it*3+1]),n.push(l[it*3+2])}function Zt(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Jv(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Hc[n.type]().fromJSON(n)),new r(i,t.options)}},Kv={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new at(s,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-u),new at(d,1-p),new at(x,1-m)]:[new at(o,1-l),new at(h,1-u),new at(f,1-p),new at(g,1-m)]}};function Jv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Yo=class r extends Wo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Ls=class r extends pe{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new R,p=new at;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let v=m+g,y=v,M=v+i+1,T=v+i+2,w=v+1;o.push(y,M,w),o.push(M,T,w)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $o=class r extends pe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],y=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let w=T/e;u.x=-t*Math.cos(n+w*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(n+w*s)*Math.sin(a+y*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+M,1-y),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let y=h[m][v+1],M=h[m][v],T=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(y,M,w),(m!==i-1||l<Math.PI)&&f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zo=class extends Jt{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},de=class extends nn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var jo=class extends nn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function yo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Qv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ks=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends ks{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:s=t,o=2*e-i;break;case lu:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=t,l=2*i-e;break;case lu:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let T=0;T!==o;++T)s[T]=m*a[h+T]+v*a[c+T]+y*a[l+T]+M*a[u+T];return s}},Xc=class extends ks{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Yc=class extends ks{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},zi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo(e,this.TimeBufferType),this.values=yo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yo(t.times,Array),values:yo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case To:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Qv(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===nl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=yc;var qn=class extends zi{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=To;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends zi{};$c.prototype.ValueTypeName="color";var Zc=class extends zi{};Zc.prototype.ValueTypeName="number";var jc=class extends ks{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ie.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ko=class extends zi{InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends zi{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=To;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends zi{};Kc.prototype.ValueTypeName="vector";var Jc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},t1=new Jc,Qc=class{constructor(t){this.manager=t!==void 0?t:t1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sn=class extends Us{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zl=new Et,ud=new R,dd=new R,br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dd),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},th=class extends br{constructor(){super(new _e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=As*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Jo=class extends Us{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new th}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fd=new Et,nr=new R,Ll=new R,eh=class extends br{constructor(){super(new _e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(nr),Ll.copy(i.position),Ll.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ll),i.updateMatrixWorld(),n.makeTranslation(-nr.x,-nr.y,-nr.z),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},Qo=class extends Us{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ih=class extends br{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bi=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new ih}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _r=class extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ta=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=pd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function pd(){return performance.now()}var wh="\\[\\]\\.:\\/",e1=new RegExp("["+wh+"]","g"),Sh="[^"+wh+"]",i1="[^"+wh.replace("\\.","")+"]",n1=/((?:WC+[\/:])*)/.source.replace("WC",Sh),s1=/(WCOD+)?/.source.replace("WCOD",i1),r1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),o1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),a1=new RegExp("^"+n1+s1+r1+o1+"$"),l1=["material","materials","bones","map"],nh=class{constructor(t,e,i){let n=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ye=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(e1,"")}static parseTrackName(t){let e=a1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);l1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=nh;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);var Hd="fireline.settings.v1",Hs={low:{renderScale:.75,shadows:"off",ssao:!1,bloom:!1,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!1,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!1,grass:"off",treeWind:!1,waterReflections:!1,waterWaves:!0,particles:"low",decals:!0,debris:!1,viewDistance:500},medium:{renderScale:1,shadows:"medium",ssao:!1,bloom:!0,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!0,grass:"low",treeWind:!0,waterReflections:!1,waterWaves:!0,particles:"medium",decals:!0,debris:!0,viewDistance:700},high:{renderScale:1,shadows:"high",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"medium",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:900},ultra:{renderScale:1,shadows:"ultra",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"high",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:1200}},c1=Object.assign({preset:"high",fov:95,sensitivity:1,adsSensitivity:.85,invertY:!1,volume:.8,musicVolume:.5,showFps:!0,screenShake:!0,headBob:!0,difficulty:"veteran",crosshair:!0,nameTags:!0,enemyOutline:!0,aimAssist:"low",mouseSmoothing:0,keyLookSpeed:140,autoSprint:!1,semiAutoRepeat:!1,trackpadMode:!1,crouchMode:"toggle",adsMode:"hold",leanMode:"hold",hitmarkerSound:!0},Hs.high),Vd=[{group:"Display"},{key:"preset",label:"Quality preset",type:"select",options:["low","medium","high","ultra","custom"]},{key:"renderScale",label:"Render scale",type:"range",min:.5,max:1.5,step:.05},{key:"fov",label:"Field of view (horizontal)",type:"range",min:70,max:115,step:1},{key:"viewDistance",label:"View distance (m)",type:"range",min:300,max:1500,step:50},{key:"antialias",label:"Anti-aliasing",type:"select",options:["off","fxaa","msaa"]},{key:"showFps",label:"Show FPS",type:"bool"},{group:"Lighting"},{key:"shadows",label:"Shadows",type:"select",options:["off","low","medium","high","ultra"],hint:"high/ultra use cascaded shadow maps"},{key:"ssao",label:"Ambient occlusion (GTAO)",type:"bool"},{key:"ibl",label:"Image-based lighting",type:"bool"},{key:"atmosphere",label:"Atmospheric sky",type:"bool"},{key:"fog",label:"Fog / aerial haze",type:"bool"},{group:"Post-processing"},{key:"bloom",label:"Bloom",type:"bool"},{key:"dof",label:"Depth of field (ADS / menus)",type:"bool"},{key:"motionBlur",label:"Motion blur",type:"bool"},{key:"colorGrading",label:"Color grading",type:"bool"},{key:"filmGrain",label:"Film grain",type:"bool"},{key:"vignette",label:"Vignette",type:"bool"},{key:"chromatic",label:"Chromatic aberration",type:"bool"},{group:"World"},{key:"grass",label:"Grass",type:"select",options:["off","low","medium","high"]},{key:"treeWind",label:"Wind sway (trees & grass)",type:"bool"},{key:"waterReflections",label:"Water reflections",type:"bool"},{key:"waterWaves",label:"Water waves & foam",type:"bool"},{group:"Effects"},{key:"particles",label:"Particle quality",type:"select",options:["low","medium","high"]},{key:"decals",label:"Decals (bullet holes, scorch)",type:"bool"},{key:"debris",label:"Destruction debris physics",type:"bool"},{key:"screenShake",label:"Screen shake",type:"bool"},{key:"headBob",label:"Head bob",type:"bool"},{group:"Gameplay"},{key:"difficulty",label:"Bot difficulty",type:"select",options:["recruit","regular","veteran","elite"]},{key:"crosshair",label:"Crosshair",type:"bool"},{key:"nameTags",label:"Friendly name tags",type:"bool"},{key:"enemyOutline",label:"Red outline on visible enemies",type:"bool"},{group:"Controls & audio"},{group:"Trackpad & accessibility"},{key:"trackpadMode",label:"Trackpad mode (applies the options below)",type:"bool",hint:"aim assist high, toggle aim/crouch/lean, smoothing, auto-sprint, hold-to-fire"},{key:"aimAssist",label:"Aim assist",type:"select",options:["off","low","medium","high"],hint:"slows and nudges your aim onto enemies you can see"},{key:"mouseSmoothing",label:"Look smoothing",type:"range",min:0,max:.8,step:.05},{key:"keyLookSpeed",label:"Arrow-key look speed (\xB0/s)",type:"range",min:40,max:360,step:10},{key:"autoSprint",label:"Auto-sprint when moving forward",type:"bool"},{key:"semiAutoRepeat",label:"Hold to keep firing semi-auto weapons",type:"bool"},{group:"Mouse & keys"},{key:"sensitivity",label:"Mouse sensitivity",type:"range",min:.1,max:3,step:.05},{key:"adsSensitivity",label:"ADS sensitivity",type:"range",min:.2,max:1.5,step:.05},{key:"invertY",label:"Invert Y",type:"bool"},{key:"crouchMode",label:"Crouch key",type:"select",options:["toggle","hold"]},{key:"adsMode",label:"Aim down sights",type:"select",options:["hold","toggle"]},{key:"leanMode",label:"Lean keys",type:"select",options:["hold","toggle"]},{key:"hitmarkerSound",label:"Hitmarker sound",type:"bool"},{key:"volume",label:"Master volume",type:"range",min:0,max:1,step:.05}],Th=class{constructor(){this.values=Object.assign({},c1),this.listeners=[];try{let t=localStorage.getItem(Hd);t&&Object.assign(this.values,JSON.parse(t))}catch{}}get(t){return this.values[t]}set(t,e){this.values[t]=e,t==="preset"&&Hs[e]&&Object.assign(this.values,Hs[e]),t==="trackpadMode"&&e?Object.assign(this.values,{aimAssist:"high",adsMode:"toggle",crouchMode:"toggle",leanMode:"toggle",mouseSmoothing:.35,autoSprint:!0,semiAutoRepeat:!0,sensitivity:Math.max(this.values.sensitivity,1.3)}):t in Hs.high&&t!=="preset"&&(this.values.preset="custom"),this.save();for(let i of this.listeners)i(t,e)}onChange(t){this.listeners.push(t)}save(){try{localStorage.setItem(Hd,JSON.stringify(this.values))}catch{}}},aa=new Th;var la=class r{constructor(){this.ctx=null,this.buffers={},this.voices=0,this.volume=.8,this.listener={x:0,y:0,z:0,fx:0,fz:-1},this.loops={}}unlock(){if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e}catch{this.ctx=null;return}let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.volume,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.25,this.master.connect(this.comp),this.comp.connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(2.6,2.2),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.32,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.generate()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}makeImpulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let l=0;l<n;l++){let c=l/n;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<400?l/400:1)}}return s}buf(t,e){let i=this.ctx,n=i.sampleRate,s=Math.max(1,Math.floor(n*t)),a=i.createBuffer(1,s,n),o=a.getChannelData(0);e(o,n,s);let l=0;for(let c=0;c<s;c++)l=Math.max(l,Math.abs(o[c]));if(l>0)for(let c=0;c<s;c++)o[c]/=l;return a}static lp(t,e){let i=0;for(let n=0;n<t.length;n++)i+=e*(t[n]-i),t[n]=i}static hp(t,e){let i=0,n=0;for(let s=0;s<t.length;s++)i=e*(i+t[s]-n),n=t[s],t[s]=i}gun(t,e,i,n,s,a){return this.buf(t,(o,l,c)=>{let h=new Float32Array(c);for(let u=0;u<c;u++)h[u]=Math.random()*2-1;r.lp(h,a);for(let u=0;u<c;u++){let d=u/l,f=Math.exp(-d*e)*.8+Math.exp(-d*s)*.25,p=Math.exp(-d*300)*i*(Math.random()*2-1),x=Math.sin(2*Math.PI*n*d*(1-d*2))*Math.exp(-d*28)*.9;o[u]=h[u]*f*2.2+p+x}})}generate(){let t=this.buffers;t.rifle=this.gun(.9,30,1,85,5,.45),t.carbine=this.gun(.8,34,1,95,6,.5),t.smg=this.gun(.55,48,.8,120,9,.55),t.pistol=this.gun(.5,45,.9,140,9,.6),t.lmg=this.gun(1,26,1.1,70,4,.4),t.sniper=this.gun(1.8,16,1.3,55,2.2,.35),t.dmr=this.gun(1.3,22,1.2,65,3,.38),t.shotgun=this.gun(1.1,18,.9,60,3.5,.3),t.suppressed=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*45)*.6+Math.sin(2*Math.PI*180*u)*Math.exp(-u*60)*.5}r.lp(o,.25)}),t.far=this.buf(1.6,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*14)+Math.exp(-u*3)*.3)}r.lp(o,.06),r.lp(o,.1)}),t.explosion=this.buf(3.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*3.2)+Math.exp(-u*18)*1.5)+Math.sin(2*Math.PI*(55-u*12)*u)*Math.exp(-u*4)*1.2}r.lp(o,.08),r.lp(o,.18)}),t.explosionFar=this.buf(3.5,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*2.2)+Math.sin(2*Math.PI*40*u)*Math.exp(-u*3)}r.lp(o,.025),r.lp(o,.05)});let e=o=>this.buf(.12,(l,c,h)=>{for(let u=0;u<h;u++){let d=u/c;l[u]=(Math.random()*2-1)*Math.exp(-d*(o?70:45))*(d<.004?d/.004:1)}r.lp(l,o?.5:.18)});t.stepGrass=e(!1),t.stepHard=e(!0),t.stepWater=this.buf(.3,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*14)*(.5+.5*Math.sin(u*300))}r.lp(o,.3)});let i=(o,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.sin(2*Math.PI*o*p)*.6+(Math.random()*2-1)*.5)*Math.exp(-p*c)}});t.magOut=i(900,.15,40),t.magIn=i(1300,.12,55),t.bolt=this.buf(.3,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=u<.12?Math.exp(-u*60):Math.exp(-(u-.15)*60)*(u>.15?1:0);o[h]=(Math.sin(2*Math.PI*1500*u)*.5+(Math.random()*2-1)*.6)*d}}),t.dry=i(2400,.06,120),t.pin=i(3e3,.18,30),t.switch=i(700,.1,50),t.hit=this.buf(.07,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*2200*u)*Math.exp(-u*70)}}),t.headshot=this.buf(.35,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.sin(2*Math.PI*1760*u)+Math.sin(2*Math.PI*2640*u)*.5)*Math.exp(-u*12)}}),t.kill=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*(900+u*1200)*u)*Math.exp(-u*14)+(Math.random()*2-1)*Math.exp(-u*60)*.3}}),t.hurt=this.buf(.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*(120-u*200)*u)*Math.exp(-u*18)+(Math.random()*2-1)*Math.exp(-u*40)*.4}r.lp(o,.3)}),t.whiz=this.buf(.35,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.sin(Math.PI*u/.35);o[h]=(Math.random()*2-1)*d*d}r.hp(o,.92),r.lp(o,.4)}),t.crack=this.buf(.09,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*90)+(u<.002?1:0)}r.hp(o,.8)});let n=(o,l,c)=>this.buf(.25,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*Math.exp(-p*l)+(c?Math.sin(2*Math.PI*c*p)*Math.exp(-p*20)*.6:0)}r.lp(h,o)});t.impactDirt=n(.15,50,0),t.impactHard=n(.55,70,0),t.impactMetal=n(.7,40,2900),t.impactWood=n(.3,45,420),t.impactFlesh=n(.12,35,0),t.impactWater=this.buf(.4,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*12)*(.6+.4*Math.sin(u*900))}r.lp(o,.25)});let s=(o,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*(Math.exp(-p*6)*(.5+Math.random()*.5))+(c?Math.sin(2*Math.PI*c*p*(1+p))*Math.exp(-p*5)*.4:0)}r.lp(h,o)});t.breakWood=s(.25,.9,300),t.breakStone=s(.12,1.4,0),t.breakMetal=s(.5,1.2,1200);let a=(o,l)=>this.buf(l,(c,h,u)=>{for(let d=0;d<u;d++){let f=d/h,p=Math.min(o.length-1,Math.floor(f/l*o.length));c[d]=Math.sin(2*Math.PI*o[p]*f)*Math.min(1,(l-f)*10)*Math.min(1,f*200)*.6}});t.capture=a([660,880,1320],.5),t.lost=a([880,660,440],.5),t.beep=a([1200],.12),t.ui=a([900],.05),t.deploy=a([440,660],.3),t.heartbeat=this.buf(.8,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.exp(-((u-.05)**2)/4e-4),f=Math.exp(-((u-.28)**2)/4e-4)*.7;o[h]=Math.sin(2*Math.PI*55*u)*(d+f)}}),t.bandage=this.buf(.6,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(.4+.6*Math.abs(Math.sin(u*40)))*Math.exp(-u*3)}r.hp(o,.7)}),t.throw=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.sin(Math.PI*u/.25)}r.lp(o,.2)}),t.bounce=n(.4,60,1800),t.rocket=this.buf(1.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*25)*1.5+Math.exp(-u*2)*.5)}r.lp(o,.2)}),t.wind=this.buf(6,(o,l,c)=>{let h=0;for(let d=0;d<c;d++){h=(h+.02*(Math.random()*2-1))/1.02;let f=d/l;o[d]=h*(.6+.4*Math.sin(f*.9)*Math.sin(f*.37+1))}let u=Math.floor(l*.3);for(let d=0;d<u;d++){let f=d/u;o[d]=o[d]*f+o[c-u+d]*(1-f)}}),t.birds=this.buf(8,(o,l,c)=>{for(let h=0;h<14;h++){let u=Math.random()*7.2,d=2500+Math.random()*2500,f=2+Math.floor(Math.random()*4);for(let p=0;p<f;p++){let x=Math.floor((u+p*.13)*l),g=Math.floor(.08*l);for(let m=0;m<g&&x+m<c;m++){let v=m/l;o[x+m]+=Math.sin(2*Math.PI*(d+Math.sin(v*90)*600)*v)*Math.sin(Math.PI*m/g)*.3}}}})}setListener(t,e,i,n,s){let a=this.listener;a.x=t,a.y=e,a.z=i;let o=Math.hypot(n,s)||1;a.fx=n/o,a.fz=s/o}_out(t,e,i,n,s){let a=this.ctx,o=a.createGain();o.gain.value=t;let l=o;if(i<19e3){let h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=i,o.connect(h),l=h}let c=l;if(a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=e,l.connect(h),c=h}if(c.connect(this.master),n>0){let h=a.createGain();h.gain.value=n,c.connect(h),h.connect(this.reverb)}return o}play2d(t,e={}){if(!this.ctx||!this.buffers[t]||this.voices>60)return;let i=this.ctx.createBufferSource();i.buffer=this.buffers[t],i.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let n=this._out(e.vol??1,e.pan||0,e.cutoff||2e4,e.reverb??.05);return i.connect(n),this.voices++,i.onended=()=>{this.voices--;try{n.disconnect()}catch{}},i.start(this.ctx.currentTime+(e.delay||0)),i}play3d(t,e,i,n,s={}){if(!this.ctx)return;let a=this.listener,o=e-a.x,l=i-a.y,c=n-a.z,h=Math.sqrt(o*o+l*l+c*c),u=s.maxDist||120;if(h>u)return;let d=s.ref||6,f=(s.vol??1)*d/(d+Math.max(0,h-d)*(s.rolloff||1));if(f*=1-Math.pow(h/u,3),f<.004||this.voices>48&&f<.15)return;let p=-a.fz,x=a.fx,g=h>.5?Math.max(-1,Math.min(1,(o*p+c*x)/Math.max(1,Math.hypot(o,c))*.85)):0,m=s.occluded?Math.min(2500,2e4/(1+h*.02)):2e4/(1+h*.012),v=h>60?h/343:0;this.play2d(t,{vol:f,pan:g,cutoff:m,rate:s.rate,vary:s.vary??.08,reverb:(s.reverb??.18)*Math.min(1,.4+h/80),delay:v})}gunshot(t,e,i,n,s,a){if(!this.ctx)return;if(s){this.play3d("suppressed",e,i,n,{vol:a?.55:.6,maxDist:60,ref:4});return}if(a){this.play2d(t,{vol:.62,vary:.06,reverb:.28});return}let o=this.listener,l=Math.hypot(e-o.x,i-o.y,n-o.z);l<90&&this.play3d(t,e,i,n,{vol:.95,maxDist:160,ref:10,rolloff:.8}),l>40&&this.play3d("far",e,i,n,{vol:.55*Math.min(1,(l-40)/60),maxDist:900,ref:60,rolloff:.5,reverb:.5})}explosion(t,e,i){if(!this.ctx)return;let n=this.listener;Math.hypot(t-n.x,e-n.y,i-n.z)<150&&this.play3d("explosion",t,e,i,{vol:1.2,maxDist:250,ref:14,rolloff:.7,reverb:.4}),this.play3d("explosionFar",t,e,i,{vol:.9,maxDist:1200,ref:80,rolloff:.5,reverb:.6})}startAmbience(t,e){if(!this.ctx)return;this.stopAmbience();let i=(n,s)=>{let a=this.ctx.createBufferSource();a.buffer=this.buffers[n],a.loop=!0;let o=this.ctx.createGain();return o.gain.value=s,a.connect(o),o.connect(this.master),a.start(),{src:a,g:o}};this.loops.wind=i("wind",t==="arid"?.22:.14),!e&&t!=="arid"&&(this.loops.birds=i("birds",.06))}stopAmbience(){for(let t in this.loops)try{this.loops[t].src.stop()}catch{}this.loops={}}};var ca=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,buttons:0,pressed:new Set,released:new Set,wheel:0},this.locked=!1,this.enabled=!0,this.listeners=[];let e=(i,n,s,a)=>{i.addEventListener(n,s,a),this.listeners.push([i,n,s,a])};e(window,"keydown",i=>{this.enabled&&((["Tab","Space","KeyF","ControlLeft","AltLeft"].includes(i.code)||i.ctrlKey&&i.code==="KeyW")&&i.preventDefault(),this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code))}),e(window,"keyup",i=>{this.keys.delete(i.code),this.released.add(i.code)}),e(window,"blur",()=>{this.keys.clear(),this.mouse.buttons=0}),e(t,"mousedown",i=>{this.enabled&&(this.mouse.buttons|=1<<i.button,this.mouse.pressed.add(i.button),i.preventDefault())}),e(window,"mouseup",i=>{this.mouse.buttons&=~(1<<i.button),this.mouse.released.add(i.button)}),e(window,"mousemove",i=>{this.enabled&&(this.locked||this.allowUnlocked)&&(this.mouse.dx+=i.movementX||0,this.mouse.dy+=i.movementY||0)}),e(t,"wheel",i=>{this.mouse.wheel+=Math.sign(i.deltaY),i.preventDefault()},{passive:!1}),e(t,"contextmenu",i=>i.preventDefault()),e(document,"pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange&&this.onLockChange(this.locked)}),e(document,"pointerlockerror",()=>{this.locked=!1}),this.allowUnlocked=!1}lock(){try{let t=this.canvas.requestPointerLock&&this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}isDown(t){return t?t.startsWith("Mouse")?this.btn(Number(t.slice(5))):this.keys.has(t):!1}isHit(t){return t?t.startsWith("Mouse")?this.btnHit(Number(t.slice(5))):this.pressed.has(t):!1}isReleased(t){return t?t.startsWith("Mouse")?this.mouse.released.has(Number(t.slice(5))):this.released.has(t):!1}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}btn(t){return(this.mouse.buttons&1<<t)!==0}btnHit(t){return this.mouse.pressed.has(t)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.pressed.clear(),this.mouse.released.clear(),this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0}dispose(){for(let[t,e,i,n]of this.listeners)t.removeEventListener(e,i,n)}};var Nt=(r,t,e)=>r<t?t:r>e?e:r,Qt=(r,t,e)=>r+(t-r)*e,h1=(r,t,e)=>Nt((e-r)/(t-r),0,1),re=(r,t,e)=>{let i=h1(r,t,e);return i*i*(3-2*i)},ei=(r,t,e,i)=>Qt(r,t,1-Math.exp(-e*i)),W=(r=0,t=1)=>r+Math.random()*(t-r);var ce=Math.PI/180,Gd=Math.PI*2;function _i(r){for(;r>Math.PI;)r-=Gd;for(;r<-Math.PI;)r+=Gd;return r}function wr(r,t,e){let i=_i(t-r);return Math.abs(i)<=e?t:r+Math.sign(i)*e}function We(r){let t=r>>>0,e=()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+e()*(n-i),e.int=(i,n)=>Math.floor(i+e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e}function Li(r=1){let t=We(r),e=new Uint8Array(512),i=new Uint8Array(256);for(let l=0;l<256;l++)i[l]=l;for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1)),h=i[l];i[l]=i[c],i[c]=h}for(let l=0;l<512;l++)e[l]=i[l&255];let n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],s=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;function o(l,c){let h=(l+c)*s,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*a,p=l-(u-f),x=c-(d-f),g=p>x?1:0,m=p>x?0:1,v=p-g+a,y=x-m+a,M=p-1+2*a,T=x-1+2*a,w=u&255,S=d&255,C=0,_=0,b=0,A=.5-p*p-x*x;if(A>0){let U=n[e[w+e[S]]&7];A*=A,C=A*A*(U[0]*p+U[1]*x)}let z=.5-v*v-y*y;if(z>0){let U=n[e[w+g+e[S+m]]&7];z*=z,_=z*z*(U[0]*v+U[1]*y)}let L=.5-M*M-T*T;if(L>0){let U=n[e[w+1+e[S+1]]&7];L*=L,b=L*L*(U[0]*M+U[1]*T)}return 70*(C+_+b)}return o.fbm=(l,c,h=4,u=2,d=.5)=>{let f=1,p=1,x=0,g=0;for(let m=0;m<h;m++)x+=f*o(l*p,c*p),g+=f,f*=d,p*=u;return x/g},o.ridge=(l,c,h=4)=>{let u=1,d=1,f=0,p=0;for(let x=0;x<h;x++)f+=u*(1-Math.abs(o(l*d,c*d))),p+=u,u*=.5,d*=2;return f/p},o}function Vs(r,t,e,i,n,s){let a=n-e,o=s-i,l=r-e,c=t-i,h=a*a+o*o,u=h>0?(l*a+c*o)/h:0;u=Nt(u,0,1);let d=r-(e+a*u),f=t-(i+o*u);return d*d+f*f}function Eh(r,t,e,i,n,s,a,o,l,c){let h=r-a,u=t-o,d=e-l,f=i*i+n*n+s*s,p=h*i+u*n+d*s,x=h*h+u*u+d*d-c*c;if(x>0&&p>0)return-1;let g=p*p-f*x;if(g<0)return-1;let m=(-p-Math.sqrt(g))/f;return m<0&&(m=0),m>1?-1:m}var ha=class{constructor(t=1024){this.items=new Int32Array(t),this.keys=new Float32Array(t),this.size=0}clear(){this.size=0}push(t,e){if(this.size>=this.items.length){let a=new Int32Array(this.items.length*2);a.set(this.items),this.items=a;let o=new Float32Array(this.keys.length*2);o.set(this.keys),this.keys=o}let i=this.size++,n=this.items,s=this.keys;for(;i>0;){let a=i-1>>1;if(s[a]<=e)break;n[i]=n[a],s[i]=s[a],i=a}n[i]=t,s[i]=e}pop(){let t=this.items,e=this.keys,i=t[0],n=--this.size;if(n>0){let s=t[n],a=e[n],o=0;for(;;){let l=o*2+1;if(l>=n)break;let c=l+1;if(c<n&&e[c]<e[l]&&(l=c),e[l]>=a)break;t[o]=t[l],e[o]=e[l],o=l}t[o]=s,e[o]=a}return i}};var u1={house:[5,4],house2:[5,4],shop:[4,4],barn:[6,5],warehouse:[10,6],shed:[2,2],bunker:[3,3],church:[5,13],ruin:[4,4],pumphouse:[4,3]},Wd=r=>Math.floor(r)+.5,ua=class{constructor(t){this.def=t,this.rng=We(t.seed),this.buildings=[],this.props=[],this.flatZones=[],this.fps=[],this.roads=t.roads,this.rivers=t.rivers||[],this.bridges=[],this.noTree=[]}riverDist(t,e){let i=1e9;for(let n of this.rivers)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Vs(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}roadDist(t,e){let i=1e9;for(let n of this.roads)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Vs(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}rectRoadClear(t,e,i,n,s){for(let a=-1;a<=1;a+=.5)for(let o=-1;o<=1;o+=.5){let l=t+a*i,c=e+o*n;if(this.roadDist(l,c)<s||this.riverDist(l,c)<s+4||this.def.isWater&&this.def.isWater(l,c))return!1}return!0}overlaps(t,e,i,n,s){for(let a of this.fps)if(t-i-s<a.maxX&&t+i+s>a.minX&&e-n-s<a.maxZ&&e+n+s>a.minZ)return!0;return!1}inBounds(t,e,i,n){let s=this.def.playHalf-8;return Math.abs(t)+i<s&&Math.abs(e)+n<s}b(t,e,i,n=0,s={},a=!1){e=Wd(e),i=Wd(i);let o=u1[t],l=s.w||o[0],c=s.d||o[1],h=n&1?c:l,u=n&1?l:c;return!a&&(!this.inBounds(e,i,h,u)||this.overlaps(e,i,h,u,s.gap??2.5)||!this.rectRoadClear(e,i,h+1,u+1,s.roadGap??1.5))?!1:(this.buildings.push({type:t,x:e,z:i,rot:n,opts:s}),this.fps.push({minX:e-h,maxX:e+h,minZ:i-u,maxZ:i+u}),this.flatZones.push({x:e,z:i,hw:h+1.2,hd:u+1.2,margin:5,noGrass:!0}),!0)}p(t,e,i,n=0,s={},a=0,o=0){if(a>0){if(this.overlaps(e,i,a,o,.6))return!1;this.fps.push({minX:e-a,maxX:e+a,minZ:i-o,maxZ:i+o}),s.flat&&this.flatZones.push({x:e,z:i,hw:a+.5,hd:o+.5,margin:3,noGrass:!0})}return this.props.push({type:t,x:e,z:i,rot:n,opts:s}),!0}flat(t,e,i,n,s=6,a,o=!1,l=1){this.flatZones.push({x:t,z:e,hw:i,hd:n,margin:s,h:a,noGrass:o,strength:l})}line(t,e,i,n,s,a=2){let o=Math.abs(n-e)>=Math.abs(s-i),l=Math.abs(o?n-e:s-i),c=Math.max(1,Math.floor(l/(a*2)));for(let h=0;h<c;h++){let u=(h+.5)/c,d=Qt(e,n,u),f=Qt(i,s,u);this.roadDist(d,f)<1||this.riverDist(d,f)<1||this.props.push({type:t,x:d,z:f,rot:o?0:1,opts:{n:a}})}}scatter(t,e,i,n,s,a,o=!0,l={}){let c=0;for(let h=0;h<s*12&&c<s;h++){let u=this.rng()*Math.PI*2,d=Qt(i,n,Math.sqrt(this.rng())),f=t+Math.cos(u)*d,p=e+Math.sin(u)*d,x=a[Math.floor(this.rng()*a.length)],g=o?Math.floor(this.rng()*4):0;this.b(x,f,p,g,Object.assign({},l))&&c++}return c}hq(t){let e=this.def.hq[t];this.flat(e.x,e.z,30,22,14,void 0,!1);let i=t===0?1:-1;this.p("tent",e.x-14,e.z-6*i,0,{},2.5,3),this.p("tent",e.x+14,e.z-6*i,0,{},2.5,3),this.p("tent",e.x,e.z-10*i,1,{},3,2.5),this.p("crateStack",e.x-6,e.z+2*i,0,{},1.3,.7),this.p("crate",e.x+7,e.z+3*i,0,{},.7,.7),this.p("container",e.x+22,e.z+6*i,0,{},1.3,3.1),this.p("container",e.x-22,e.z+6*i,0,{},1.3,3.1);for(let n=-3;n<=3;n++)this.p("hesco",e.x+n*7,e.z+22*i,0,{n:3},1.7,.6);this.noTree.push({x:e.x,z:e.z,r:40})}},d1={id:"greenhollow",name:"Greenhollow",desc:"Rolling farmland and woods split by a slow river. Long sightlines over the fields, close fights in the village by the mill bridge.",size:960,cell:3,seed:1337,waterLevel:0,playHalf:440,biome:"temperate",time:"morning",terrainTextures:["grass","dirt","rock","gravel"],palette:{t0:[.55,.78,.3],t1:[1,.86,.68],t2:[.95,.95,.95],t3:[.95,.92,.85],macro:[.95,.92,.55]},mapColors:[[104,138,66],[146,124,96],[132,130,124],[158,150,132]],wallColors:[15261904,14207920,13226454,15129024,12562068,14075816],roofColors:[9058862,5917764,6975088,8079926,5200486],grassColor:[5798448,7246906,9219664],trees:{types:["pine","oak","birch"],weights:[.5,.38,.12],scatter:1/2600,bush:1/1300,rock:1/3200},hq:[{x:0,z:-420,r:45},{x:0,z:420,r:45}],flags:[{id:"A",name:"Farmstead",x:-260,z:-250,r:22},{id:"B",name:"Radio Hill",x:250,z:-230,r:20},{id:"C",name:"Mill Bridge",x:-35,z:8,r:24},{id:"D",name:"Lumber Mill",x:-280,z:232,r:22},{id:"E",name:"Chapel",x:240,z:300,r:22}],rivers:[{points:[[-500,-175],[-360,-122],[-240,-86],[-130,-40],[-40,8],[50,40],[150,80],[250,150],[340,210],[500,255]],width:22,depth:3.2,bankSlope:.32,fords:[{x:-240,z:-86,r:22,depth:.55}]}],roads:[{points:[[0,-440],[-80,-330],[-260,-250]],width:6},{points:[[0,-440],[20,-250],[-20,-120],[-35,-40],[-35,60],[-90,150],[-280,232]],width:7},{points:[[-260,-250],[-150,-180],[-20,-120]],width:5},{points:[[250,-230],[120,-330],[0,-440]],width:6},{points:[[250,-230],[265,-100],[270,60],[270,140],[270,190],[240,300]],width:6},{points:[[-35,60],[80,130],[150,250],[240,300]],width:6},{points:[[-280,232],[-150,380],[0,440]],width:6},{points:[[240,300],[120,400],[0,440]],width:6},{points:[[-260,-250],[-250,-140],[-240,-86],[-262,60],[-280,232]],width:4}],height(r,t,e,i){let n=9+6.5*e.fbm(r/320,t/320,4)+2.6*i.fbm(r/85,t/85,3);n+=26*Math.exp(-((r-250)**2+(t+230)**2)/(2*80*80)),n+=10*Math.exp(-((r+300)**2+(t-300)**2)/(2*120*120)),n+=8*Math.exp(-((r-380)**2+(t-30)**2)/(2*90*90));let s=Math.max(Math.abs(r),Math.abs(t));return n+=re(400,478,s)*(30+12*e.fbm(r/60,t/60,2)),Math.max(n,2.4+i(r/40,t/40)*.3)},splat(r,t,e,i,n,s,a,o){let l=re(.2,.38,i)+re(32,40,e)*.6,c=(1-re(9,15,s))*1.2,h=re(.42,.6,a(r/70+13,t/70-7))*(1-re(25,35,e))*.75,u=n*1.4+(o?.9:0)+h;return[Math.max(.05,1-l-c-u),u,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[0]/(o[0]+o[1]+o[2]+o[3])*(1-n)*(.55+.45*a(r/25,t/25))*1.2,0,1)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.bridges.push({x:-35.5,z:9.5,len:44,w:8},{x:270.5,z:163.5,len:52,w:7});for(let h of r.bridges)r.fps.push({minX:h.x-h.w/2-1,maxX:h.x+h.w/2+1,minZ:h.z-h.len/2,maxZ:h.z+h.len/2});let i=t[0];r.b("barn",i.x-14,i.z-8,0,{},!0),r.b("house2",i.x+15,i.z-12,1,{},!0),r.b("shed",i.x-26,i.z+12,0),r.b("shed",i.x+17,i.z+13,2),r.b("house",i.x+6,i.z+26,0),r.p("waterTower",i.x+2,i.z+13,0,{},2,2),r.p("haystack",i.x-3,i.z-1,0,{},1.3,.9),r.p("hay",i.x+5,i.z+4,1,{},.9,.7),r.p("hay",i.x-7,i.z+7,0,{},.7,.9),r.p("car",i.x+6,i.z-3,1,{},2.2,1),r.p("logs",i.x-18,i.z+4,1,{},1.3,2.6),r.line("fence",i.x-60,i.z-40,i.x-30,i.z-40),r.line("fence",i.x-60,i.z-40,i.x-60,i.z+20),r.line("fence",i.x+30,i.z+40,i.x+70,i.z+40),r.line("fence",i.x+70,i.z+40,i.x+70,i.z-10),r.line("stoneWall",i.x-40,i.z+30,i.x-10,i.z+30);let n=t[1];r.p("radioTower",n.x+8,n.z+6,0,{},3,3),r.b("bunker",n.x-8,n.z-8,0,{},!0),r.b("house",n.x-17,n.z+13,1,{cat:"concrete",flat:!0,color:12170923}),r.p("sandbagRing",n.x+2,n.z-15,0,{},2.5,2),r.p("sandbagRing",n.x-20,n.z-2,1,{},2,2.5),r.p("sandbagRing",n.x+17,n.z+19,2,{},2.5,2),r.p("container",n.x+17,n.z-6,0,{},1.3,3.1),r.p("container",n.x+22,n.z-4,0,{},1.3,3.1),r.p("sandbags",n.x-2,n.z+18,0,{n:3},1.6,.4),r.p("sandbags",n.x+12,n.z-22,0,{n:3},1.6,.4),r.p("crateStack",n.x-4,n.z+5,0,{},1.3,.7);let s=t[2];r.b("warehouse",s.x+46,s.z-22,0,{cat:"wood",w:7,d:4,H:5});let a=[[-62,-30,0],[-12,-32,1],[-68,-58,1],[-10,-62,0],[-48,-90,0],[-90,-40,1],[-70,48,2],[-5,52,3],[-60,80,0],[10,85,2],[30,62,1],[-100,60,0],[25,-60,0],[-30,-66,2]];for(let[h,u,d]of a)r.b(e()<.35?"house2":"house",s.x+h,s.z+u,d,{w:e()<.5?4:5,d:e()<.5?3:4});r.scatter(s.x,s.z,40,110,6,["shed","house","ruin"]),r.p("car",s.x-31,s.z-52,0,{},1,2.2),r.p("car",s.x-41,s.z+46,0,{},1,2.2),r.p("sandbags",s.x-32,s.z-20,0,{n:2},1.1,.4),r.p("sandbags",s.x-38,s.z+38,0,{n:2},1.1,.4),r.p("crateStack",s.x-45,s.z-18,0,{},1.3,.7),r.p("barrels",s.x-22,s.z+30,0,{},1,.4);let o=t[3];r.b("warehouse",o.x-6,o.z-12,0,{cat:"wood",w:8,d:5,H:5.5},!0),r.b("house",o.x+18,o.z+8,1),r.b("shed",o.x-22,o.z+13,0),r.b("house2",o.x-26,o.z+34,0),r.b("shed",o.x+10,o.z+26,1);for(let h=0;h<5;h++)r.p("logs",o.x-8+h*6.5,o.z+6+h%2*6,1,{},1.3,2.6);r.p("crateStack",o.x+12,o.z-6,0,{},1.3,.7),r.p("car",o.x+4,o.z-26,1,{},2.2,1),r.p("sandbags",o.x-18,o.z-2,1,{n:2},.4,1.1);let l=t[4];r.b("church",l.x-2,l.z+6,0,{},!0);for(let h=0;h<4;h++)for(let u=0;u<5;u++)r.p("grave",l.x+16+h*3,l.z-2+u*3.2,0,{},.4,.2);r.line("stoneWall",l.x+12,l.z-6,l.x+30,l.z-6),r.line("stoneWall",l.x+30,l.z-6,l.x+30,l.z+16),r.b("house",l.x-26,l.z-12,0),r.b("house2",l.x-26,l.z+22,1),r.b("shed",l.x+20,l.z-18,0),r.b("house",l.x+6,l.z+40,2),r.p("sandbagRing",l.x-4,l.z-18,0,{},2.5,2),r.p("car",l.x-12,l.z-22,0,{},1,2.2);let c=[[-100,-270],[130,-290],[380,-120],[-400,80],[-170,120],[90,200],[380,330],[-380,-200],[150,-60],[-200,360],[60,-360],[-60,330],[330,40],[-330,-20]];for(let[h,u]of c){let d=e();d<.2?r.b("ruin",h,u,Math.floor(e()*4)):d<.45?(r.b("barn",h,u,Math.floor(e()*4)),r.b("shed",h+18,u+6,0)):(r.b(e()<.4?"house2":"house",h,u,Math.floor(e()*4)),r.b("shed",h-14,u+9,1),r.p("hay",h+12,u-10,0,{},.7,.9)),e()<.5&&r.line("fence",h-30,u+22,h+20,u+22)}for(let[h,u]of[[60,-170],[-120,-60],[200,40],[-210,320],[110,-210],[-150,220]])r.b("ruin",h,u,Math.floor(e()*4));for(let h=0;h<6;h++){let u=(e()-.5)*700,d=(e()-.5)*700;r.p("sandbagRing",u,d,Math.floor(e()*4),{},2.5,2.5)}r.forests=[[-400,-20,90],[130,-20,62],[-140,300,80],[390,40,70],[-390,-360,70],[390,-390,60],[390,400,60],[-110,-340,50],[60,330,45],[-330,140,55],[330,-60,40],[-200,-150,35],[180,-150,30],[-60,180,35]];for(let h of t)r.noTree.push({x:h.x,z:h.z,r:h.r*.8})}},Sr=(r,t)=>238+16*t(r/130,3.3),f1={id:"kessar",name:"Port Kessar",desc:"A sun-baked harbor town. Dense alleys in the old town, a container depot, a ridge outpost with long sightlines and the docks on the sea.",size:720,cell:2.5,seed:4242,waterLevel:0,playHalf:330,biome:"arid",time:"afternoon",flatRoofs:!0,terrainTextures:["sand","drygrass","rock","asphalt"],palette:{t0:[1,.9,.72],t1:[1,.92,.7],t2:[1,.92,.82],t3:[1.25,1.25,1.3],macro:[1,.85,.65]},mapColors:[[200,182,140],[168,150,104],[150,136,118],[96,96,98]],wallColors:[14930864,14271642,15722194,13349770,14731686,15785152,13160656,15255720],roofColors:[11904652],grassColor:[11049562,12101736,9407050],trees:{types:["palm","acacia","shrub"],weights:[.45,.35,.2],scatter:1/4500,bush:1/1800,rock:1/1400},hq:[{x:-30,z:-316,r:42},{x:-30,z:316,r:42}],flags:[{id:"A",name:"Ridge Outpost",x:-225,z:-192,r:20},{id:"B",name:"Container Depot",x:118,z:-172,r:22},{id:"C",name:"Old Town",x:-20,z:0,r:20},{id:"D",name:"Pump Station",x:-212,z:172,r:22},{id:"E",name:"Harbor",x:182,z:168,r:22}],rivers:[],roads:[{points:[[-30,-340],[-25,-200],[-20,0],[-25,200],[-30,340]],width:10},{points:[[-230,0],[160,6]],width:9},{points:[[-25,-200],[-225,-192]],width:6},{points:[[-20,-90],[118,-172]],width:7},{points:[[-20,90],[-212,172]],width:7},{points:[[-20,60],[182,168]],width:7},{points:[[118,-172],[200,-40],[195,60],[182,168]],width:7},{points:[[-110,-60],[70,-60]],width:6},{points:[[-110,60],[70,60]],width:6},{points:[[-110,-30],[70,-30]],width:5},{points:[[-110,30],[70,30]],width:5},{points:[[-110,-60],[-110,60]],width:5},{points:[[-80,-60],[-80,60]],width:5},{points:[[-50,-60],[-50,60]],width:5},{points:[[10,-60],[10,60]],width:5},{points:[[40,-60],[40,60]],width:5},{points:[[70,-60],[70,60]],width:5}],isWater(r,t){return r>Sr(t,this._n||(e=>0))-6},height(r,t,e,i){this._n=e;let n=5+3*e.fbm(r/210,t/210,4)+1.4*i.fbm(r/55,t/55,3);n+=15*Math.exp(-((r+228)**2+(t+196)**2)/(2*50*50))*(.85+.3*i(r/18,t/18)),n+=re(-200,-335,r)*(16+8*e.fbm(r/70,t/70,3)),n+=re(285,355,Math.abs(t))*(22+8*e.fbm(r/50,t/50,2)),n+=6*Math.exp(-((r+120)**2+(t-250)**2)/(2*60*60)),n=Math.max(n,2.6);let s=Sr(t,e),a=re(s-28,s+26,r);return n=Qt(n,-8,a),n},splat(r,t,e,i,n,s,a,o){let l=re(.18,.34,i)*1.3+re(13,19,e)*.5,c=n*1.6,h=re(.15,.5,a(r/90-5,t/90+3))*.9+(o?.25:0);return[Math.max(.1,1.1-l-c-h*.6)+(e<1.2?1:0),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){let l=o[0]+o[1]+o[2]+o[3];return Nt(o[1]/l*(1-n)*1.3*(.4+.6*a(r/18,t/18)),0,.85)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);let i=[-110,-80,-50,-20,10,40,70],n=[-60,-30,0,30,60];for(let d=0;d<i.length-1;d++)for(let f=0;f<n.length-1;f++){let p=i[d]+3.5,x=i[d+1]-3.5,g=n[f]+3.5,m=n[f+1]-3.5,v=(p+x)/2,y=(g+m)/2;if(Math.hypot(v-t[2].x,y-t[2].z)<22)continue;if(e()<.12){r.p("car",v,y,Math.floor(e()*2),{},2.2,2.2),r.p("crate",v+4,y+3,0,{},.7,.7);continue}let T=[[p,g],[v+.5,g],[p,y+.5],[v+.5,y+.5]];for(let[w,S]of T){if(e()<.16)continue;let C=2+Math.floor(e()*2),_=2+Math.floor(e()*2);r.b("shop",w+C+.6,S+_+.6,Math.floor(e()*4)&2,{w:C,d:_,gap:1.4,roadGap:.4})}}let s=t[2];for(let d=0;d<6;d++){let f=d/6*Math.PI*2+.3;r.p("stall",s.x+Math.cos(f)*11,s.z+Math.sin(f)*11,d&1,{},1.7,1.3)}r.p("car",s.x+6,s.z-16,1,{},2.2,1),r.p("jersey",s.x-14,s.z+6,1,{n:2},.4,2.1),r.p("sandbags",s.x+4,s.z+14,0,{n:3},1.6,.4);let a=t[0];r.flat(a.x,a.z,22,18,10,void 0,!0,.9),r.b("bunker",a.x-6,a.z-4,0,{},!0),r.p("watchtower",a.x+14,a.z-12,0,{},2,2),r.p("watchtower",a.x-16,a.z+12,2,{},2,2),r.p("radioTower",a.x+8,a.z+10,0,{h:20},3,3);for(let d=-3;d<=3;d++)d!==0&&(r.p("hesco",a.x+d*3.6,a.z-24,0,{n:3},1.7,.6),r.p("hesco",a.x+d*3.6,a.z+24,0,{n:3},1.7,.6));for(let d=-2;d<=2;d++)d!==0&&(r.p("hesco",a.x-26,a.z+d*3.6,1,{n:3},.6,1.7),r.p("hesco",a.x+26,a.z+d*3.6,1,{n:3},.6,1.7));r.p("sandbagRing",a.x+6,a.z-14,0,{},2.5,2),r.p("container",a.x-14,a.z-10,1,{},3.1,1.3),r.p("crateStack",a.x+2,a.z+4,0,{},1.3,.7);let o=t[1];r.flat(o.x,o.z,46,34,8,void 0,!0),r.b("warehouse",o.x-22,o.z-18,0,{},!0),r.b("warehouse",o.x+26,o.z+16,1,{w:8,d:6},!0);for(let d=0;d<6;d++)for(let f=0;f<2;f++)e()<.2||r.p("container",o.x-14+d*5.2,o.z+6+f*13,0,{stack:e()<.45},1.3,3.1);r.p("crane",o.x+4,o.z-30,0,{},4.4,1.9),r.p("jersey",o.x-30,o.z+14,1,{n:3},.4,3.1),r.p("jersey",o.x+2,o.z-4,0,{n:2},2.1,.4),r.p("crateStack",o.x+6,o.z+2,0,{},1.3,.7),r.p("barrels",o.x-8,o.z-2,0,{},1,.4);let l=t[3];r.flat(l.x,l.z,32,28,8,void 0,!0),r.b("pumphouse",l.x-8,l.z-8,0,{},!0),r.b("pumphouse",l.x+14,l.z+12,1,{},!0),r.b("house",l.x-20,l.z+16,0,{flat:!0,w:4,d:3}),r.p("tank",l.x+10,l.z-12,0,{},1.7,1.7),r.p("tank",l.x+16,l.z-12,0,{},1.7,1.7),r.p("tank",l.x+22,l.z-12,0,{color:12103840},1.7,1.7),r.p("pipe",l.x+2,l.z-2,0,{len:12},6,.4),r.p("pipe",l.x-10,l.z+6,1,{len:8},.4,4),r.p("barrels",l.x+2,l.z+6,0,{},1,.4),r.p("sandbagRing",l.x-2,l.z+22,2,{},2.5,2),r.line("compoundWall",l.x-32,l.z-28,l.x-8,l.z-28),r.line("compoundWall",l.x+8,l.z-28,l.x+32,l.z-28),r.line("compoundWall",l.x-32,l.z+28,l.x-6,l.z+28),r.line("compoundWall",l.x+10,l.z+28,l.x+32,l.z+28),r.line("compoundWall",l.x-32,l.z-26,l.x-32,l.z-6),r.line("compoundWall",l.x-32,l.z+8,l.x-32,l.z+26);let c=t[4],h=Sr(c.z,r.noise||(()=>0));r.flat(c.x+10,c.z,46,40,6,2.2,!0),r.b("warehouse",c.x-12,c.z-22,0,{w:9,d:5},!0),r.b("warehouse",c.x-16,c.z+22,0,{w:8,d:5},!0);for(let d=0;d<4;d++)r.p("container",c.x+6+d*5,c.z-6,0,{stack:e()<.4},1.3,3.1);for(let d=0;d<3;d++)r.p("container",c.x+8+d*5,c.z+10,0,{},1.3,3.1);r.p("crateStack",c.x-2,c.z+2,0,{},1.3,.7),r.p("crate",c.x+2,c.z-12,0,{},.7,.7),r.p("barrels",c.x-4,c.z+8,0,{},1,.4),r.p("crane",c.x+30,c.z+28,1,{},1.9,4.4),r.piers=[{z:c.z-26},{z:c.z+2},{z:c.z+40}];let u=[[-120,-200],[40,-262],[-262,-40],[-150,132],[60,200],[-100,262],[150,-60],[200,-262],[-240,70],[100,120]];for(let[d,f]of u)r.b("house",d,f,Math.floor(e()*4),{flat:!0,w:4,d:3,gap:6})&&(r.line("compoundWall",d-14,f-12,d+14,f-12),r.line("compoundWall",d-14,f+12,d+4,f+12),r.line("compoundWall",d-14,f-10,d-14,f+10),r.p("car",d+9,f+18,0,{},1,2.2));for(let[d,f]of[[-160,-100],[120,-110],[-180,250],[80,250],[-280,120],[20,-150]])r.b("ruin",d,f,Math.floor(e()*4));r.forests=[[-300,-100,40],[-280,260,50],[120,260,40],[-140,200,30],[220,-120,30],[-60,-240,30],[200,260,25]];for(let d of t)r.noTree.push({x:d.x,z:d.z,r:d.r});r.noTree.push({x:-20,z:0,r:95})}},p1={id:"ironworks",name:"Ironworks",desc:"A shut-down foundry under grey skies. Fight through the furnace hall, a rail yard of boxcars and container lanes, the smelter courtyard and the loading docks.",size:440,cell:2,seed:9091,waterLevel:null,playHalf:196,biome:"industrial",time:"overcast",flatRoofs:!0,cqb:!0,terrainTextures:["gravel","dirt","rock","asphalt"],palette:{t0:[.72,.7,.66],t1:[.8,.7,.6],t2:[.85,.85,.85],t3:[1,1,1.05],macro:[.75,.72,.66]},mapColors:[[132,128,120],[118,104,90],[120,118,112],[88,88,92]],wallColors:[12104874,11117722,12893358,10133668,11577492],roofColors:[6975088],grassColor:[6975552,8028232,9080912],trees:{types:["birch","oak","pine"],weights:[.5,.3,.2],scatter:1/9e3,bush:1/2500,rock:1/3500},hq:[{x:0,z:-174,r:24},{x:0,z:174,r:24}],flags:[{id:"A",name:"Furnace Hall",x:-62,z:-78,r:16},{id:"B",name:"Rail Yard",x:72,z:-52,r:18},{id:"C",name:"Smelter",x:-66,z:66,r:17},{id:"D",name:"Loading Docks",x:70,z:82,r:17}],rivers:[],roads:[{points:[[0,-200],[0,200]],width:9},{points:[[-180,0],[180,0]],width:8},{points:[[-150,-130],[150,-130]],width:6},{points:[[-150,130],[150,130]],width:6},{points:[[-125,-130],[-125,130]],width:6},{points:[[125,-130],[125,130]],width:6}],height(r,t,e,i){let n=4+.8*e.fbm(r/120,t/120,3),s=Math.max(Math.abs(r),Math.abs(t));return n+=re(170,215,s)*(12+4*i.fbm(r/40,t/40,2)),n},splat(r,t,e,i,n,s,a,o){let l=re(.2,.36,i),c=n*1.6+(o?.7:0),h=re(.2,.6,a(r/40+3,t/40))*.8;return[Math.max(.2,1-l-c-h*.5),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[1]/(o[0]+o[1]+o[2]+o[3])*(1-n)*.7*(.3+.7*a(r/12,t/12)),0,.6)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);let i=t[0];r.b("warehouse",i.x,i.z,0,{w:13,d:8,H:9,gap:1},!0);for(let[l,c]of[[-12,-4],[0,4],[12,-4]])r.p("tank",i.x+l,i.z+c,0,{color:6969930},0,0);r.p("pipe",i.x,i.z-9,0,{len:18},0,0),r.p("crateStack",i.x-18,i.z+9,0,{},0,0),r.p("crateStack",i.x+18,i.z+9,0,{},0,0),r.p("chimney",i.x-34,i.z-6,0,{h:28},1.7,1.7),r.p("chimney",i.x-34,i.z+6,0,{h:24},1.7,1.7),r.b("house2",i.x+36,i.z-12,1,{cat:"concrete",flat:!0,w:4,d:4,color:11578530}),r.b("shed",i.x-30,i.z+24,0,{cat:"metal"});let n=t[1];r.p("rails",n.x-14,n.z,1,{len:140}),r.p("rails",n.x,n.z,1,{len:140}),r.p("rails",n.x+14,n.z,1,{len:140});for(let l of[-14,0,14])for(let c=-2;c<=2;c++)e()<.25||r.p("traincar",n.x+l+.5,n.z+c*16,0,{},1.5,7.2);for(let l=0;l<6;l++)r.p("container",n.x+30+l%2*6,n.z-24+Math.floor(l/2)*15,0,{stack:e()<.4},1.3,3.1);r.b("shop",n.x-34,n.z-20,0,{cat:"brick",w:3,d:3,floors:1}),r.p("jersey",n.x-24,n.z+20,1,{n:3},.4,3.1),r.p("sandbagRing",n.x+22,n.z+28,2,{},2.5,2);let s=t[2];for(let[l,c]of[[-10,-10],[10,-10],[-10,10],[10,10]])r.p("tank",s.x+l,s.z+c,0,{color:11052186},1.7,1.7);r.p("pipe",s.x,s.z-10,0,{len:16},0,0),r.p("pipe",s.x,s.z+10,0,{len:16},0,0),r.p("pipe",s.x-10,s.z,1,{len:16},0,0),r.b("pumphouse",s.x+26,s.z-4,1,{},!0),r.b("pumphouse",s.x-28,s.z+4,1,{}),r.p("chimney",s.x+2,s.z+30,0,{h:30},1.7,1.7),r.p("crane",s.x-8,s.z-30,0,{},4.4,1.9),r.p("barrels",s.x+4,s.z+2,0,{},1,.4),r.p("crateStack",s.x-3,s.z-3,0,{},1.3,.7);let a=t[3];r.b("warehouse",a.x-22,a.z-8,1,{w:8,d:5,H:6},!0),r.b("warehouse",a.x+22,a.z-8,1,{w:8,d:5,H:6},!0),r.p("platform",a.x,a.z+18,0,{len:40,w:5},20,2.5);for(let l=0;l<4;l++)r.p("crateStack",a.x-12+l*8,a.z+4,0,{},1.3,.7);r.p("car",a.x-6,a.z-6,1,{color:6974042},2.2,1),r.p("car",a.x+7,a.z-2,0,{color:9062954},1,2.2);for(let l=0;l<3;l++)r.p("container",a.x-8+l*8,a.z+34,1,{stack:l===1},3.1,1.3);let o=[[-140,-60],[-140,40],[140,-80],[140,30],[-20,-100],[30,100],[-30,40],[30,-10],[-100,-150],[100,150],[-100,150],[100,-150],[40,-90],[-40,110]];for(let[l,c]of o){let h=e();h<.35?r.b("house2",l,c,Math.floor(e()*4),{cat:"concrete",flat:!0,w:4,d:3,color:11841702}):h<.6?r.b("warehouse",l,c,Math.floor(e()*2),{w:6,d:4,H:6}):h<.8?(r.p("container",l,c,0,{stack:!0},1.3,3.1),r.p("container",l+4,c,0,{},1.3,3.1),r.p("container",l+8,c+2,0,{stack:e()<.5},1.3,3.1)):r.b("ruin",l,c,Math.floor(e()*4),{cat:"brick"})}for(let l=0;l<10;l++){let c=(e()-.5)*300,h=(e()-.5)*300;r.p(e()<.5?"hesco":"jersey",c,h,Math.floor(e()*2),{n:3},2,2)}r.line("compoundWall",-150,-40,-150,40),r.line("compoundWall",150,-40,150,40),r.scatter(0,0,25,165,26,["warehouse","shed","house2","pumphouse","shop"],!0,{w:5,d:4,cat:"metal",flat:!0,gap:3});for(let l=0;l<18;l++){let c=e()*Math.PI*2,h=30+e()*140,u=Math.cos(c)*h,d=Math.sin(c)*h;if(r.roadDist(u,d)<6)continue;let f=e()<.5?0:1;r.p("container",u,d,f,{stack:e()<.35},f?3.2:1.4,f?1.4:3.2),e()<.6&&r.p("crateStack",u+(f?0:3),d+(f?3:0),0,{},1.3,.7)}r.forests=[[-175,-170,18],[175,170,18],[175,-100,14],[-175,100,14]];for(let l of t)r.noTree.push({x:l.x,z:l.z,r:l.r*1.4})}},m1={id:"brennhof",name:"Brennhof",desc:"A tight old town split by a canal. Narrow streets and alleys, a market square, the train station, a brewery, the church and town hall. Every corner is a fight.",size:400,cell:2,seed:7171,waterLevel:0,playHalf:178,biome:"temperate",time:"dusk",cqb:!0,terrainTextures:["grass","dirt","rock","gravel"],palette:{t0:[.55,.75,.32],t1:[1,.86,.68],t2:[.95,.95,.95],t3:[1.05,1.02,.98],macro:[.95,.92,.6]},mapColors:[[104,136,70],[146,124,96],[132,130,124],[150,146,138]],wallColors:[15261904,14731432,14209216,13161680,15259832,14203040,15788248,12630184],roofColors:[9058862,8079926,5917764,6961712,5200486],grassColor:[5798448,7246906,9219664],trees:{types:["oak","birch","pine"],weights:[.6,.3,.1],scatter:1/6e3,bush:1/2200,rock:1/6e3},hq:[{x:0,z:-158,r:22},{x:0,z:158,r:22}],flags:[{id:"A",name:"Station",x:-78,z:-112,r:16},{id:"B",name:"Brewery",x:76,z:-98,r:15},{id:"C",name:"Canal Bridge",x:.5,z:5,r:15},{id:"D",name:"Church",x:-74,z:102,r:16},{id:"E",name:"Town Hall",x:76,z:108,r:15}],rivers:[{points:[[-220,5],[-80,2],[0,5],[80,8],[220,5]],width:14,depth:2.6,bankSlope:.9}],roads:[{points:[[0,-190],[0,-8]],width:8},{points:[[0,18],[0,190]],width:8},{points:[[-170,-60],[170,-60]],width:7},{points:[[-170,66],[170,66]],width:7},{points:[[-60,-170],[-60,-8]],width:6},{points:[[60,-170],[60,-8]],width:6},{points:[[-60,18],[-60,170]],width:6},{points:[[60,18],[60,170]],width:6},{points:[[-120,-170],[-120,170]],width:5},{points:[[120,-170],[120,170]],width:5},{points:[[-170,-125],[170,-125]],width:5},{points:[[-170,130],[170,130]],width:5}],height(r,t,e,i){let n=3.2+.6*e.fbm(r/140,t/140,3),s=Math.max(Math.abs(r),Math.abs(t));return n+=re(160,198,s)*(14+5*i.fbm(r/40,t/40,2)),n},splat(r,t,e,i,n,s,a,o){let l=re(.22,.4,i),c=n*1.6+(o?.6:0)+(1-re(4,8,s))*1.2,h=re(.35,.65,a(r/30,t/30))*.5;return[Math.max(.05,1-l-c-h),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[0]/(o[0]+o[1]+o[2]+o[3])*(1-n)*(.5+.5*a(r/18,t/18)),0,1)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.bridges.push({x:.5,z:5.5,len:26,w:8},{x:-89.5,z:2.5,len:24,w:6},{x:90.5,z:8.5,len:24,w:6});for(let c of r.bridges)r.fps.push({minX:c.x-c.w/2-1,maxX:c.x+c.w/2+1,minZ:c.z-c.len/2,maxZ:c.z+c.len/2});for(let c of[-1,1])for(let h=-165;h<165;h+=12)Math.abs(h)<8||Math.abs(h+90)<8||Math.abs(h-90)<8||r.p("stoneWall",h,5+c*10,0,{n:3});let i=t[0],n=t[1],s=t[3],a=t[4];r.b("warehouse",i.x,i.z-12,0,{cat:"brick",w:12,d:4,H:6,color:12089946},!0),r.p("platform",i.x,i.z+2,0,{len:44,w:5},22,2.5),r.p("rails",i.x,i.z+9,0,{len:150}),r.p("traincar",i.x-14,i.z+9,1,{},7.2,1.5),r.p("traincar",i.x+16,i.z+9,1,{},7.2,1.5),r.b("warehouse",n.x,n.z-6,1,{cat:"brick",w:8,d:6,H:7,color:11037258},!0);for(let[c,h]of[[14,8],[18,-2],[14,-12]])r.p("tank",n.x+c,n.z+h,0,{color:11569754},1.7,1.7);r.p("barrels",n.x-12,n.z+10,0,{},1,.4),r.p("crateStack",n.x-14,n.z-2,0,{},1.3,.7),r.b("church",s.x,s.z+4,0,{},!0);for(let c=0;c<3;c++)for(let h=0;h<4;h++)r.p("grave",s.x+16+c*3,s.z+h*3.2,0,{},.4,.2);r.b("house2",a.x,a.z-6,0,{cat:"brick",w:7,d:5,color:14203032},!0),r.p("fountain",a.x-2,a.z+12,0,{},4,4),r.p("fountain",-30,-40,0,{},4,4);for(let c=0;c<5;c++)r.p("stall",-14+c*7,-30,0,{},1.7,1.3);r.p("sandbags",0,-14,0,{n:3},1.6,.4),r.p("sandbags",0,24,0,{n:3},1.6,.4),r.p("car",10,-22,1,{},2.2,1),r.p("car",-12,30,0,{},1,2.2);let o=[-170,-120,-60,0,60,120,170],l=[-170,-125,-60,-8,18,66,130,170];for(let c=0;c<o.length-1;c++)for(let h=0;h<l.length-1;h++){if(l[h]===-8)continue;let u=o[c]+4,d=o[c+1]-4,f=l[h]+4,p=l[h+1]-4;if(d-u<10||p-f<10)continue;let x=Math.max(1,Math.floor((d-u)/13)),g=Math.max(1,Math.floor((p-f)/13));for(let m=0;m<x;m++)for(let v=0;v<g;v++){if(e()<.12)continue;let y=u+(m+.5)*(d-u)/x,M=f+(v+.5)*(p-f)/g,T=3+Math.floor(e()*2),w=3+Math.floor(e()*2);r.b(e()<.55?"house2":"house",y,M,Math.floor(e()*4)&2,{w:T,d:w,gap:1.6,roadGap:.6})}e()<.5&&r.p(e()<.5?"crateStack":"barrels",(u+d)/2+e()*4,(f+p)/2,0,{},1.3,.7)}r.forests=[[-150,-150,14],[150,150,14],[150,-150,12],[-150,150,12],[-30,-40,8]];for(let c of t)r.noTree.push({x:c.x,z:c.z,r:c.r*1.2})}},g1={id:"outpost",name:"Outpost Zero",desc:"A small walled desert base. Barracks rows, a comms tower and a motor pool packed inside a hesco perimeter, with guard towers on every corner.",size:260,cell:2,seed:3131,waterLevel:null,playHalf:112,biome:"arid",time:"noon",flatRoofs:!0,cqb:!0,small:!0,terrainTextures:["sand","drygrass","rock","asphalt"],palette:{t0:[1,.9,.72],t1:[1,.92,.7],t2:[1,.92,.82],t3:[1.2,1.2,1.25],macro:[1,.85,.65]},mapColors:[[200,182,140],[168,150,104],[150,136,118],[110,110,112]],wallColors:[14272420,13349770,14930864,13156520],roofColors:[11904652],grassColor:[11049562,12101736,9407050],trees:{types:["acacia","shrub","palm"],weights:[.4,.4,.2],scatter:1/5e3,bush:1/1500,rock:1/1500},hq:[{x:0,z:-98,r:16},{x:0,z:98,r:16}],flags:[{id:"A",name:"Barracks",x:-40,z:-36,r:13},{id:"B",name:"Comms Tower",x:4,z:4,r:13},{id:"C",name:"Motor Pool",x:40,z:40,r:13}],rivers:[],roads:[{points:[[0,-120],[0,120]],width:6},{points:[[-120,0],[120,0]],width:6}],height(r,t,e,i){let n=3+.5*e.fbm(r/60,t/60,3),s=Math.max(Math.abs(r),Math.abs(t));return n+=re(100,128,s)*(9+3*i.fbm(r/25,t/25,2)),n},splat(r,t,e,i,n,s,a,o){let l=re(.2,.36,i),c=n*1.6+(o?.4:0),h=re(.2,.6,a(r/30,t/30))*.7;return[Math.max(.15,1-l-c-h*.5),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[1]/(o[0]+o[1]+o[2]+o[3])*(1-n)*.8,0,.7)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);for(let o=-80;o<=80;o+=4)Math.abs(o)>8&&(r.p("hesco",o,-80,0,{n:3}),r.p("hesco",o,80,0,{n:3}),r.p("hesco",-80,o,1,{n:3}),r.p("hesco",80,o,1,{n:3}));for(let[o,l]of[[-76,-76],[76,-76],[-76,76],[76,76]])r.p("watchtower",o,l,0,{},2,2);let i=t[0];for(let o=-1;o<=1;o++)r.b("house",i.x+o*14,i.z-4,1,{cat:"concrete",flat:!0,w:6,d:2,noInterior:!0,gap:1},!0);r.p("sandbags",i.x,i.z+12,0,{n:4},2.1,.4),r.p("sandbagRing",i.x-18,i.z+14,0,{},2.5,2),r.p("crateStack",i.x+18,i.z+12,0,{},1.3,.7);let n=t[1];r.p("radioTower",n.x+7,n.z-7,0,{h:26},3,3),r.b("bunker",n.x-8,n.z+6,0,{},!0),r.p("sandbagRing",n.x+10,n.z+10,2,{},2.5,2),r.p("sandbagRing",n.x-12,n.z-10,0,{},2.5,2),r.p("container",n.x+18,n.z-2,0,{},1.3,3.1),r.p("container",n.x-20,n.z,0,{stack:!0},1.3,3.1);let s=t[2];r.b("warehouse",s.x,s.z-6,0,{w:7,d:4,H:5.5},!0);for(let o=0;o<4;o++)r.p("car",s.x-12+o*8,s.z+10,0,{color:[6974026,8024674,6187850,9080724][o]},1,2.2);r.p("tank",s.x+20,s.z-18,0,{color:12103840},1.7,1.7),r.p("barrels",s.x-18,s.z-14,0,{},1,.4);let a=[[-40,20],[40,-30],[-10,-50],[20,55],[-55,50],[55,-55],[-20,30],[25,-15],[-60,-5],[60,10]];for(let[o,l]of a){let c=e();c<.35?r.b(e()<.5?"shop":"bunker",o,l,Math.floor(e()*4),{w:3,d:3,floors:1,gap:2}):c<.65?r.p("container",o,l,Math.floor(e()*2),{stack:e()<.4},3.2,3.2):(r.p("jersey",o,l,Math.floor(e()*2),{n:2},2.2,2.2),r.p("crateStack",o+3,l+3,0,{},1.3,.7))}r.forests=[];for(let o of t)r.noTree.push({x:o.x,z:o.z,r:o.r*1.5});r.noTree.push({x:0,z:0,r:85})}},x1={id:"frostpine",name:"Frostpine",desc:"A snowed-in mountain village. A timber ski lodge, cabins among snowy pines, a frozen pond in the middle and a sawmill, all within a few hundred metres.",size:280,cell:2,seed:6262,waterLevel:null,playHalf:122,biome:"winter",time:"snow",weather:"snow",small:!0,terrainTextures:["snow","dirt","rock","ice"],palette:{t0:[1,1,1],t1:[.95,.88,.82],t2:[.92,.94,.98],t3:[1,1,1],macro:[.92,.95,1]},mapColors:[[228,232,238],[168,150,130],[150,152,158],[176,204,222]],wallColors:[9071180,8018496,10123864,7230528],roofColors:[15133936,14476522],grassColor:[6975568,8028248,9080928],trees:{types:["snowpine"],weights:[1],scatter:1/900,bush:1/1400,rock:1/2500},hq:[{x:0,z:-108,r:16},{x:0,z:108,r:16}],flags:[{id:"A",name:"Ski Lodge",x:-42,z:-40,r:14},{id:"B",name:"Frozen Pond",x:6,z:4,r:15},{id:"C",name:"Sawmill",x:44,z:44,r:14}],rivers:[],roads:[{points:[[0,-130],[-20,-60],[-42,-40],[-20,-10],[6,4],[30,25],[44,44],[20,90],[0,130]],width:5}],height(r,t,e,i){let n=7+3.5*e.fbm(r/90,t/90,3)+1.2*i.fbm(r/30,t/30,2);n-=3*Math.exp(-((r-6)**2+(t-4)**2)/(2*26*26));let s=Math.max(Math.abs(r),Math.abs(t));return n+=re(105,138,s)*(16+6*i.fbm(r/30,t/30,2)),n},splat(r,t,e,i,n,s,a,o){let l=re(.24,.42,i),c=1-re(16,20,Math.hypot(r-6,t-4)),h=n*.9+(o?.25:0);return[Math.max(.1,1.2-l-h-c*2),h,l,c*2]},grassDensity(){return 0},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.flat(6,4,20,20,8,void 0,!0,.85);let i=t[0];r.b("barn",i.x,i.z-4,0,{w:7,d:5,H:6,color:8018496},!0),r.b("house2",i.x+22,i.z+6,1,{cat:"wood",w:3,d:4}),r.b("shed",i.x-22,i.z+10,0,{color:7230528}),r.p("logs",i.x+4,i.z+14,0,{},2.6,1.3),r.line("fence",i.x-28,i.z+22,i.x+10,i.z+22);let n=t[1];r.b("shed",n.x+22,n.z-8,1,{color:7230528}),r.p("crateStack",n.x-18,n.z+6,0,{},1.3,.7),r.p("logs",n.x-8,n.z-14,1,{},1.3,2.6),r.p("logs",n.x+10,n.z+16,0,{},2.6,1.3),r.p("sandbags",n.x,n.z,0,{n:3},1.6,.4),r.p("haystack",n.x-20,n.z-18,0,{},1.3,.9);let s=t[2];r.b("warehouse",s.x-4,s.z-6,1,{cat:"wood",w:7,d:4,H:5,color:8018496},!0);for(let o=0;o<4;o++)r.p("logs",s.x+12,s.z-14+o*7,1,{},1.3,2.6);r.p("crane",s.x-18,s.z+18,0,{},4.4,1.9),r.b("shed",s.x+16,s.z+16,0,{color:7230528});let a=[[-60,10],[-30,40],[30,-40],[60,-10],[-10,60],[10,-60],[-70,-70],[70,70],[-60,60],[60,-60],[-25,-75],[25,75]];for(let[o,l]of a)r.b(e()<.4?"house2":"house",o,l,Math.floor(e()*4),{cat:"wood",w:3,d:3,gap:3});for(let o=0;o<8;o++){let l=(e()-.5)*180,c=(e()-.5)*180;r.p(e()<.5?"logs":"crateStack",l,c,Math.floor(e()*2),{},2.6,2.6)}r.forests=[[-80,20,30],[80,-20,30],[-30,80,26],[30,-80,26],[-85,-85,22],[85,85,22],[60,40,14],[-60,-30,14]];for(let o of t)r.noTree.push({x:o.x,z:o.z,r:o.r*1.3});r.noTree.push({x:6,z:4,r:24})}},da={greenhollow:d1,kessar:f1,ironworks:p1,brennhof:m1,outpost:g1,frostpine:x1};var Gs={conquest:{name:"Conquest",desc:"Capture and hold flags. Holding the majority drains enemy tickets; every death costs one.",tickets:350,time:1500},frontline:{name:"Frontline",desc:"Flags fall in order. Push the line flag by flag; only the front flags can be captured.",tickets:300,time:1500},tdm:{name:"Team Deathmatch",desc:"First team to the kill limit wins. Squad spawns keep the fight rolling.",tickets:150,time:900}},fa=class{constructor(t,e,i={}){this.game=t,this.type=e;let n=Gs[e];this.maxTickets=i.tickets||n.tickets,this.tickets=[this.maxTickets,this.maxTickets],this.kills=[0,0],this.timeLimit=i.time||n.time,this.time=0,this.over=!1,this.winner=-1,this.bleedAcc=0,this.tick=0;let s=t.world.def;if(this.flags=e==="tdm"?[]:s.flags.map((a,o)=>({id:a.id,name:a.name,x:a.x,z:a.z,r:a.r,y:t.world.terrain.heightAt(a.x,a.z),index:o,owner:-1,progress:0,counts:[0,0],contested:!1,capTeam:-1})),e==="frontline"){this.flags.sort((o,l)=>o.z-l.z),this.flags.forEach((o,l)=>{o.index=l});let a=this.flags.length;this.flags.forEach((o,l)=>{l<Math.floor(a/2)?(o.owner=0,o.progress=1):l>=a-Math.floor(a/2)&&(o.owner=1,o.progress=-1)})}}capturable(t,e){if(this.type==="conquest")return!0;if(this.type!=="frontline")return!1;if(t.owner===e)return!0;let i=t.index,n=this.flags;return e===0?i===0||n[i-1].owner===0:i===n.length-1||n[i+1].owner===1}update(t){if(!this.over){if(this.time+=t,this.tick+=t,this.tick>=.25&&(this.updateFlags(this.tick),this.tick=0),this.type==="conquest"){let e=[0,0];for(let n of this.flags)n.owner>=0&&e[n.owner]++;let i=e[0]-e[1];if(i!==0)for(this.bleedAcc+=t*Math.abs(i)/4.5;this.bleedAcc>=1;)this.bleedAcc-=1,this.tickets[i>0?1:0]=Math.max(0,this.tickets[i>0?1:0]-1)}if(this.type==="tdm"?this.kills[0]>=this.maxTickets?this.end(0):this.kills[1]>=this.maxTickets&&this.end(1):(this.tickets[0]<=0?this.end(1):this.tickets[1]<=0&&this.end(0),this.type==="frontline"&&(this.flags.every(e=>e.owner===0)?this.end(0):this.flags.every(e=>e.owner===1)&&this.end(1))),!this.over&&this.time>=this.timeLimit){let e=this.type==="tdm"?this.kills[0]:this.tickets[0],i=this.type==="tdm"?this.kills[1]:this.tickets[1];this.end(e===i?-1:e>i?0:1)}}}updateFlags(t){let e=this.game.soldiers;for(let i of this.flags){i.counts[0]=0,i.counts[1]=0;for(let c of e){if(c.state!=="alive")continue;let h=c.pos.x-i.x,u=c.pos.z-i.z;h*h+u*u<i.r*i.r&&Math.abs(c.pos.y-i.y)<14&&i.counts[c.team]++}let n=i.counts[0],s=i.counts[1];i.contested=n>0&&s>0;let a=n-s,o=i.progress,l=i.owner;if(i.capTeam=-1,a!==0){let c=a>0?0:1;if(this.capturable(i,c)){let h=.045454545454545456*Math.pow(Math.min(Math.abs(a),5),.6),u=c===0?1:-1;i.progress*u<1&&(i.capTeam=c),i.progress=Math.max(-1,Math.min(1,i.progress+u*h*t))}}else if(n===0&&s===0){let c=i.owner===0?1:i.owner===1?-1:0,h=.02*t;i.progress+=Math.max(-h,Math.min(h,c-i.progress))}i.owner===0&&i.progress<=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",1,l)),i.owner===1&&i.progress>=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",0,l)),i.owner!==0&&i.progress>=1&&(i.owner=0,this.game.onFlagEvent(i,"captured",0,l)),i.owner!==1&&i.progress<=-1&&(i.owner=1,this.game.onFlagEvent(i,"captured",1,l))}}onDeath(t){this.type!=="tdm"&&(this.tickets[t]=Math.max(0,this.tickets[t]-1))}onKill(t){this.kills[t]++}end(t){this.over||(this.over=!0,this.winner=t,this.game.onMatchEnd(t))}flagSpawns(t){return this.flags.filter(e=>e.owner===t&&e.counts[1-t]===0)}};var Ke={m4a1:{name:"M4A1",type:"carbine",dmg:26,dmgMin:19,r0:40,r1:120,rpm:800,vel:880,mag:30,mags:5,reload:2.1,reloadEmpty:2.6,modes:["auto","semi"],recoilV:.42,recoilH:.22,spreadHip:2.6,spreadAds:.12,adsTime:.2,moveMul:.97,pen:.8,sound:"carbine",look:{len:.82,color:2829099,mag:"curve",stock:"tube"}},ak74:{name:"AK-74",type:"ar",dmg:28,dmgMin:20,r0:45,r1:130,rpm:650,vel:880,mag:30,mags:5,reload:2.4,reloadEmpty:3,modes:["auto","semi"],recoilV:.5,recoilH:.3,spreadHip:2.8,spreadAds:.13,adsTime:.24,moveMul:.95,pen:.85,sound:"rifle",look:{len:.92,color:3813416,wood:8014378,mag:"curve",stock:"solid"}},aug:{name:"AUG A3",type:"ar",dmg:25,dmgMin:19,r0:45,r1:130,rpm:700,vel:920,mag:30,mags:5,reload:2.6,reloadEmpty:3.2,modes:["auto","semi"],recoilV:.36,recoilH:.18,spreadHip:2.7,spreadAds:.11,adsTime:.24,moveMul:.95,pen:.8,sound:"rifle",look:{len:.78,color:4938299,mag:"straight",stock:"bullpup"}},scarh:{name:"SCAR-H",type:"ar",dmg:36,dmgMin:27,r0:50,r1:150,rpm:600,vel:840,mag:20,mags:6,reload:2.5,reloadEmpty:3.1,modes:["auto","semi"],recoilV:.7,recoilH:.32,spreadHip:3,spreadAds:.13,adsTime:.27,moveMul:.93,pen:1.1,sound:"rifle",look:{len:.95,color:11901546,mag:"straight",stock:"solid"}},g36c:{name:"G36C",type:"carbine",dmg:24,dmgMin:18,r0:35,r1:110,rpm:750,vel:800,mag:30,mags:5,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.36,recoilH:.24,spreadHip:2.4,spreadAds:.13,adsTime:.19,moveMul:.98,pen:.75,sound:"carbine",look:{len:.72,color:3026478,mag:"straight",stock:"solid"}},mp7:{name:"MP7",type:"smg",dmg:20,dmgMin:13,r0:15,r1:55,rpm:950,vel:700,mag:40,mags:5,reload:1.9,reloadEmpty:2.3,modes:["auto","semi"],recoilV:.24,recoilH:.2,spreadHip:1.9,spreadAds:.16,adsTime:.15,moveMul:1.04,pen:.5,sound:"smg",look:{len:.55,color:2500134,mag:"straight",stock:"tube"}},ump45:{name:"UMP-45",type:"smg",dmg:27,dmgMin:17,r0:15,r1:50,rpm:620,vel:420,mag:25,mags:6,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.3,recoilH:.18,spreadHip:1.9,spreadAds:.18,adsTime:.16,moveMul:1.03,pen:.45,sound:"smg",look:{len:.6,color:3158064,mag:"straight",stock:"solid"}},p90:{name:"P90",type:"smg",dmg:19,dmgMin:13,r0:18,r1:60,rpm:900,vel:715,mag:50,mags:4,reload:2.4,reloadEmpty:2.9,modes:["auto","semi"],recoilV:.22,recoilH:.16,spreadHip:2,spreadAds:.15,adsTime:.16,moveMul:1.03,pen:.5,sound:"smg",look:{len:.52,color:3815988,mag:"top",stock:"bullpup"}},m249:{name:"M249",type:"lmg",dmg:26,dmgMin:20,r0:50,r1:150,rpm:750,vel:900,mag:100,mags:3,reload:5.2,reloadEmpty:6,modes:["auto"],recoilV:.4,recoilH:.34,spreadHip:4.5,spreadAds:.18,adsTime:.36,moveMul:.88,pen:1.2,sound:"lmg",look:{len:1,color:3092266,mag:"box",stock:"solid",bipod:!0}},pkm:{name:"PKM",type:"lmg",dmg:33,dmgMin:25,r0:55,r1:160,rpm:650,vel:825,mag:100,mags:3,reload:5.6,reloadEmpty:6.4,modes:["auto"],recoilV:.55,recoilH:.38,spreadHip:4.8,spreadAds:.2,adsTime:.4,moveMul:.86,pen:1.35,sound:"lmg",look:{len:1.1,color:2894374,wood:6962722,mag:"box",stock:"solid",bipod:!0}},mk14:{name:"MK14 EBR",type:"dmr",dmg:46,dmgMin:39,r0:70,r1:220,rpm:420,vel:850,mag:20,mags:5,reload:2.6,reloadEmpty:3.1,modes:["semi"],recoilV:1.15,recoilH:.35,spreadHip:3.4,spreadAds:.05,adsTime:.3,moveMul:.93,pen:1.5,sound:"dmr",sight:"acog",look:{len:1.05,color:4868674,mag:"straight",stock:"solid"}},svd:{name:"SVD",type:"dmr",dmg:57,dmgMin:47,r0:80,r1:250,rpm:300,vel:830,mag:10,mags:6,reload:2.7,reloadEmpty:3.3,modes:["semi"],recoilV:1.6,recoilH:.4,spreadHip:3.8,spreadAds:.04,adsTime:.33,moveMul:.92,pen:1.7,sound:"dmr",sight:"acog",look:{len:1.2,color:2762532,wood:8014378,mag:"straight",stock:"solid"}},l96:{name:"L96A1",type:"sniper",dmg:96,dmgMin:86,r0:100,r1:400,rpm:46,vel:910,mag:5,mags:6,reload:3.2,reloadEmpty:3.8,modes:["bolt"],bolt:!0,recoilV:2.6,recoilH:.5,spreadHip:5,spreadAds:0,adsTime:.38,moveMul:.92,pen:2.5,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.2,color:4872762,mag:"straight",stock:"solid"}},m200:{name:"M200",type:"sniper",dmg:112,dmgMin:100,r0:120,r1:500,rpm:38,vel:980,mag:7,mags:5,reload:3.6,reloadEmpty:4.2,modes:["bolt"],bolt:!0,recoilV:3.2,recoilH:.6,spreadHip:5.5,spreadAds:0,adsTime:.42,moveMul:.9,pen:3,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.3,color:3815990,mag:"straight",stock:"solid"}},m870:{name:"M870",type:"shotgun",dmg:14,dmgMin:5,pellets:9,r0:8,r1:32,rpm:70,vel:400,mag:6,mags:6,reload:.55,reloadEmpty:.55,shellReload:!0,modes:["pump"],pump:!0,recoilV:2.2,recoilH:.6,spreadHip:4.2,spreadAds:2.6,pelletSpread:2.6,adsTime:.2,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2763306,wood:6964264,mag:"tube",stock:"solid"}},m1014:{name:"M1014",type:"shotgun",dmg:11,dmgMin:4,pellets:9,r0:8,r1:28,rpm:260,vel:400,mag:7,mags:5,reload:.5,reloadEmpty:.5,shellReload:!0,modes:["semi"],recoilV:1.8,recoilH:.6,spreadHip:4.4,spreadAds:3,pelletSpread:3,adsTime:.22,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2500134,mag:"tube",stock:"solid"}},m9:{name:"M9",type:"pistol",dmg:24,dmgMin:15,r0:15,r1:45,rpm:420,vel:380,mag:15,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.8,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.22,color:2763306}},g18:{name:"Glock 18",type:"pistol",dmg:18,dmgMin:11,r0:12,r1:40,rpm:1100,vel:375,mag:19,mags:4,reload:1.4,reloadEmpty:1.8,modes:["auto","semi"],recoilV:.5,recoilH:.4,spreadHip:2,spreadAds:.4,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.2,color:1973790}},deagle:{name:"Desert Eagle",type:"pistol",dmg:48,dmgMin:30,r0:20,r1:55,rpm:230,vel:440,mag:7,mags:4,reload:1.8,reloadEmpty:2.2,modes:["semi"],recoilV:2,recoilH:.6,spreadHip:2.4,spreadAds:.3,adsTime:.14,moveMul:1.03,pen:.6,sound:"pistol",look:{len:.27,color:9079434}},usp:{name:"USP",type:"pistol",dmg:26,dmgMin:16,r0:15,r1:45,rpm:400,vel:370,mag:12,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.9,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.21,color:2763306}}},Ws={sight:{iron:{name:"Iron sights",zoom:1.15},reddot:{name:"Red dot",zoom:1.3,reticle:"dot"},holo:{name:"Holographic",zoom:1.3,reticle:"holo"},x2:{name:"2x Prism",zoom:2,reticle:"chevron"},acog:{name:"4x ACOG",zoom:4,reticle:"chevron",optic:!0},scope8:{name:"8x Scope",zoom:8,scope:!0,reticle:"cross"}},barrel:{none:{name:"None"},suppressor:{name:"Suppressor",suppressed:!0,velMul:.92,dmgMul:.94,recoilVMul:.95,noFlash:!0},compensator:{name:"Compensator",recoilHMul:.68},brake:{name:"Muzzle brake",recoilVMul:.8,recoilHMul:1.05},flashhider:{name:"Flash hider",noFlash:!0,recoilVMul:.96}},grip:{none:{name:"None"},vertical:{name:"Vertical grip",recoilVMul:.8},angled:{name:"Angled grip",adsMul:.72,recoilHMul:.9},stubby:{name:"Stubby grip",recoilVMul:.9,recoilHMul:.88,hipMul:.9},bipod:{name:"Bipod",bipod:!0}},rail:{none:{name:"None"},laser:{name:"Laser",hipMul:.62,laser:!0},flashlight:{name:"Flashlight",light:!0}}};function Ah(r,t){let i=Ke[r].type,n=Object.keys(Ws[t]);return i==="pistol"?t==="sight"?["iron","reddot"]:t==="barrel"?["none","suppressor"]:t==="rail"?n:["none"]:t==="sight"?i==="sniper"?["scope8","acog","x2","reddot","iron"]:i==="shotgun"?["iron","reddot","holo"]:i==="smg"?["iron","reddot","holo","x2"]:["iron","reddot","holo","x2","acog"]:t==="grip"?i==="sniper"||i==="lmg"||i==="dmr"?["none","vertical","angled","bipod"]:i==="shotgun"?["none","vertical","angled"]:["none","vertical","angled","stubby"]:t==="barrel"&&i==="shotgun"?["none","suppressor"]:n}var rn={frag:{name:"Frag grenade",count:2,kind:"throw",key:"G"},smoke:{name:"Smoke grenade",count:2,kind:"throw"},impact:{name:"Impact grenade",count:2,kind:"throw"},flash:{name:"Flashbang",count:2,kind:"throw"},m320:{name:"M320 launcher",count:4,kind:"launcher"},medkit:{name:"Medkit",count:1/0,kind:"medkit"},rpg:{name:"RPG-7",count:3,kind:"rpg"},c4:{name:"C4",count:3,kind:"c4"},ammobox:{name:"Ammo box",count:2,kind:"place"},sandbags:{name:"Sandbag kit",count:5,kind:"place"},claymore:{name:"Claymore",count:2,kind:"place"},beacon:{name:"Spawn beacon",count:1,kind:"place"},rally:{name:"Rally point",count:1,kind:"place"},binoculars:{name:"Binoculars",count:1/0,kind:"binoculars"}},di={assault:{name:"Assault",desc:"Frontline rifleman. Underbarrel grenade launcher and extra frags.",types:["ar","carbine"],gadgets:["m320","frag"],throwables:3,color:"#d9a441"},medic:{name:"Medic",desc:"Fast full-health revives. Medkit heals you and nearby squadmates.",types:["ar","carbine","smg"],gadgets:["medkit","smoke"],throwables:2,color:"#6fd36a"},engineer:{name:"Engineer",desc:"Breacher. RPG and C4 blow open walls and clear buildings.",types:["smg","shotgun","carbine"],gadgets:["rpg","c4"],throwables:2,color:"#e07a4a"},support:{name:"Support",desc:"Light machine guns, ammo boxes and sandbag fortifications.",types:["lmg","ar"],gadgets:["ammobox","sandbags"],throwables:2,color:"#4ab0e0"},recon:{name:"Recon",desc:"Marksman. Claymores and a spawn beacon for the squad.",types:["sniper","dmr"],gadgets:["claymore","beacon"],throwables:2,color:"#b48ae6"},leader:{name:"Squad Leader",desc:"Gives orders, drops a rally point and spots enemies with binoculars.",types:["ar","carbine","dmr"],gadgets:["rally","binoculars"],throwables:2,color:"#f0e070",leader:!0}},qd=["frag","smoke","impact","flash"],pa=["m9","g18","deagle","usp"];function ma(r){let t=di[r].types;return Object.keys(Ke).filter(e=>t.includes(Ke[e].type))}function Tr(r){let t=Ke[r];return{sight:t.sight||(t.type==="pistol"?"iron":"reddot"),barrel:"none",grip:"none",rail:"none"}}function ga(r,t=Math.random){let e=ma(r),i=e[Math.floor(t()*e.length)],n=Ke[i],s=Tr(i),a=c=>{let h=Ah(i,c);return h[Math.floor(t()*h.length)]};n.type!=="sniper"&&(s.sight=a("sight")),n.type==="dmr"&&t()<.6&&(s.sight="acog"),s.barrel=t()<.55?a("barrel"):"none",s.grip=t()<.6?a("grip"):"none",s.rail=t()<.3?a("rail"):"none";let o=pa[Math.floor(t()*pa.length)],l=r==="medic"||r==="leader"?t()<.6?"smoke":"frag":t()<.75?"frag":t()<.5?"impact":"smoke";return{cls:r,primary:i,att:s,secondary:o,satt:{sight:"iron",barrel:t()<.2?"suppressor":"none",grip:"none",rail:"none"},throwable:l,armor:t()<.4?"heavy":"light"}}function Xd(r,t){let e=Ke[r],i=Object.assign({},e);i.id=r,i.recoilVMul=1,i.recoilHMul=1,i.hipMul=1,i.adsMul=1,i.velMul=1,i.dmgMul=1,i.suppressed=!1,i.noFlash=!1,i.laser=!1,i.light=!1,i.bipod=!1;for(let s of["sight","barrel","grip","rail"]){let a=Ws[s][t&&t[s]]||null;if(a){for(let o of["recoilVMul","recoilHMul","hipMul","adsMul","velMul","dmgMul"])a[o]&&(i[o]*=a[o]);for(let o of["suppressed","noFlash","laser","light","bipod"])a[o]&&(i[o]=!0)}}let n=Ws.sight[t&&t.sight||"iron"]||Ws.sight.iron;return i.zoom=n.zoom,i.scope=!!n.scope,i.reticle=n.reticle||null,i.sightId=t&&t.sight||"iron",i.interval=60/i.rpm,i}function $d(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new pe,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Yd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=Yd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Yd(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new ue(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Zd=new dt,jd=new Et,Kd=new Ie,Jd=new ti,Qd=new R,tf=new R;function ii(r,t,e=0){r=r.index?r.toNonIndexed():r;let i=r.attributes.position.count,n=new Float32Array(i*3);Zd.set(t);let s=Zd.clone();for(let a=0;a<i;a+=3){let o=e?1+(Math.random()-.5)*e:1;for(let l=0;l<3;l++)n[(a+l)*3]=s.r*o,n[(a+l)*3+1]=s.g*o,n[(a+l)*3+2]=s.b*o}return r.setAttribute("color",new ue(n,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function fi(r,t=0,e=0,i=0,n=0,s=0,a=0,o=1,l=1,c=1){return Jd.set(n,s,a),Kd.setFromEuler(Jd),tf.set(t,e,i),Qd.set(o,l,c),jd.compose(tf,Kd,Qd),r.applyMatrix4(jd),r}var P={colorize(r,t){return ii(r,t)},box(r,t,e,i,n=0,s=0,a=0,o=0,l=0,c=0,h=0){return fi(ii(new ui(r,t,e),i,h),n,s,a,o,l,c)},cyl(r,t,e,i,n,s=0,a=0,o=0,l=0,c=0,h=0,u=0){return fi(ii(new wn(r,t,e,i),n,u),s,a,o,l,c,h)},tube(r,t,e,i,n=0,s=0,a=0,o=Math.PI/2,l=0,c=0){return fi(ii(new wn(r,r,t,e,1,!0),i),n,s,a,o,l,c)},ring(r,t,e,i,n=0,s=0,a=0){return fi(ii(new Ls(r,t,e),i),n,s,a)},sleeve(r,t,e,i,n,s=0,a=0,o=0){return[fi(ii(new wn(r,r,e,i,1,!0),n),s,a,o,Math.PI/2),fi(ii(new wn(t,t,e,i,1,!0),n),s,a,o,Math.PI/2),fi(ii(new Ls(t,r,i),n),s,a,o+e/2),fi(ii(new Ls(t,r,i),n),s,a,o-e/2,0,Math.PI,0)]},cone(r,t,e,i,n=0,s=0,a=0,o=0){return fi(ii(new Gn(r,t,e),i,o),n,s,a)},ico(r,t,e,i=0,n=0,s=0,a=1,o=1,l=1,c=.1,h=0){let u=new Yo(r,t);if(h){let d=u.attributes.position;for(let f=0;f<d.count;f++){let p=1+Math.sin(d.getX(f)*12.9+d.getY(f)*78.2+d.getZ(f)*37.7)*.5*h;d.setXYZ(f,d.getX(f)*p,d.getY(f)*p,d.getZ(f)*p)}}return fi(ii(u,e,c),i,n,s,0,0,0,a,o,l)},dodeca(r,t,e=0,i=0,n=0,s=1,a=1,o=1,l=.12){return fi(ii(new qo(r,0),t,l),e,i,n,0,0,0,s,a,o)},prism(r,t,e,i,n=0,s=0,a=0,o=0){let l=new xr;l.moveTo(-e/2,0),l.lineTo(e/2,0),l.lineTo(0,t),l.lineTo(-e/2,0);let c=new Xo(l,{depth:r,bevelEnabled:!1});return c.translate(0,0,-r/2),c.rotateY(Math.PI/2),fi(ii(c,i),n,s,a,0,o,0)},pyramid(r,t,e,i=0,n=0,s=0){let a=new Gn(r*.7071,t,4);return a.rotateY(Math.PI/4),fi(ii(a,e),i,n+t/2,s)},merge(r){let t=r.filter(Boolean).map(i=>(i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1"),i)),e=$d(t,!1);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var Ch=new Map;function be(r,t,{srgb:e=!0,repeat:i=!0}={}){let n=document.createElement("canvas");n.width=n.height=r;let s=n.getContext("2d");t(s,r);let a=new Vn(n);return i&&(a.wrapS=a.wrapT=Di),e&&(a.colorSpace=Ee),a.anisotropy=8,a.generateMipmaps=!0,a.minFilter=Ji,a.magFilter=Ze,a}function ni(r,t,e,i,n,s,a=4){let o=Li(s),l=r.createImageData(t,t),c=l.data;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=u/t*Math.PI*2,f=h/t*Math.PI*2,p=Math.cos(d)*n,x=Math.sin(d)*n,g=Math.cos(f)*n,m=Math.sin(f)*n,v=(o.fbm(p+g*.7,x+m*.7,a)+o.fbm(g-3.1,m+1.7,a)*.6)*.5,y=(h*t+u)*4;c[y]=Math.max(0,Math.min(255,e[0]+v*i[0])),c[y+1]=Math.max(0,Math.min(255,e[1]+v*i[1])),c[y+2]=Math.max(0,Math.min(255,e[2]+v*i[2])),c[y+3]=255}r.putImageData(l,0,0)}function wi(r,t,e,i,n,s,a,o=.5){let l=We(a);for(let c=0;c<e;c++){r.fillStyle=i[Math.floor(l()*i.length)],r.globalAlpha=o*(.4+l()*.6);let h=l()*t,u=l()*t,d=n+l()*(s-n);for(let f of[-t,0,t])for(let p of[-t,0,t])r.fillRect(h+f,u+p,d,d*(.6+l()*.8))}r.globalAlpha=1}function si(r){if(Ch.has(r))return Ch.get(r);let t;switch(r){case"grass":t=be(256,(e,i)=>{ni(e,i,[118,128,118],[40,45,30],3,11),wi(e,i,900,["#9fb07a","#5f7046","#b7c48b","#4d5c38"],1,3,2,.45)});break;case"drygrass":t=be(256,(e,i)=>{ni(e,i,[150,135,100],[40,35,25],3,12),wi(e,i,900,["#c9b68a","#8f7b55","#d8c79d","#a39064"],1,3,3,.5)});break;case"dirt":t=be(256,(e,i)=>{ni(e,i,[128,112,96],[45,40,35],4,13),wi(e,i,700,["#8a7560","#a8927a","#5e4f40","#c2ae95"],1,4,4,.5)});break;case"rock":t=be(256,(e,i)=>{ni(e,i,[130,128,124],[55,55,55],5,14,5);let n=We(9);e.strokeStyle="rgba(40,40,40,0.35)",e.lineWidth=1.2;for(let s=0;s<40;s++){e.beginPath();let a=n()*i,o=n()*i;e.moveTo(a,o);for(let l=0;l<5;l++)a+=(n()-.5)*40,o+=(n()-.5)*40,e.lineTo(a,o);e.stroke()}});break;case"sand":t=be(256,(e,i)=>{ni(e,i,[196,178,140],[30,28,22],6,15),wi(e,i,1200,["#d9c8a0","#b19a72","#e8dcb8"],1,2,6,.4)});break;case"gravel":t=be(256,(e,i)=>{ni(e,i,[140,132,118],[35,32,30],6,16),wi(e,i,1600,["#7d766a","#b5ab98","#5d564b","#cfc5b0"],1,4,7,.65)});break;case"asphalt":t=be(256,(e,i)=>{ni(e,i,[92,92,94],[24,24,24],8,17),wi(e,i,1500,["#6b6b6e","#4a4a4c","#8a8a8a"],1,2,8,.5)});break;case"plaster":t=be(256,(e,i)=>{ni(e,i,[222,220,214],[30,30,30],5,18),wi(e,i,300,["#bdb8ae","#e9e6df"],2,8,10,.25)});break;case"brick":t=be(256,(e,i)=>{e.fillStyle="#bfb6aa",e.fillRect(0,0,i,i);let n=We(21),s=i/16,a=i/8;for(let o=0;o<16;o++)for(let l=-1;l<9;l++){let c=o%2*a*.5,h=200+n()*55;e.fillStyle=`rgb(${h},${h*.92},${h*.86})`,e.fillRect(l*a+c+1,o*s+1,a-2,s-2)}wi(e,i,400,["#8d857a","#ffffff"],1,3,11,.2)});break;case"wood":t=be(256,(e,i)=>{let n=We(31),s=i/8;for(let a=0;a<8;a++){let o=190+n()*60;e.fillStyle=`rgb(${o},${o*.9},${o*.82})`,e.fillRect(0,a*s,i,s)}e.strokeStyle="rgba(60,40,25,0.5)";for(let a=0;a<=8;a++)e.beginPath(),e.moveTo(0,a*s),e.lineTo(i,a*s),e.stroke();e.strokeStyle="rgba(90,60,35,0.18)";for(let a=0;a<120;a++){let o=n()*i;e.beginPath(),e.moveTo(n()*i,o),e.lineTo(n()*i,o+(n()-.5)*4),e.stroke()}});break;case"concrete":t=be(256,(e,i)=>{ni(e,i,[196,194,188],[30,30,30],7,19),wi(e,i,500,["#a8a59e","#d9d6cf","#8c8982"],1,3,12,.35),e.strokeStyle="rgba(80,80,80,0.25)",e.strokeRect(.5,.5,i-1,i-1)});break;case"metal":t=be(256,(e,i)=>{let n=e.createLinearGradient(0,0,i/16,0);n.addColorStop(0,"#d8d8d8"),n.addColorStop(.5,"#f4f4f4"),n.addColorStop(1,"#bcbcbc"),e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<16;s++)e.fillStyle=s%2?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",e.fillRect(s*i/16,0,i/32,i);wi(e,i,260,["#8a6a4a","#6b5038"],1,5,13,.25)});break;case"sandbag":t=be(256,(e,i)=>{e.fillStyle="#bba57c",e.fillRect(0,0,i,i);let n=We(41),s=i/4,a=i/2;for(let o=0;o<4;o++)for(let l=-1;l<3;l++){let c=o%2*a*.5,h=170+n()*40;e.fillStyle=`rgb(${h},${h*.9},${h*.7})`,e.beginPath(),e.ellipse(l*a+c+a/2,o*s+s/2,a/2-3,s/2-3,0,0,Math.PI*2),e.fill()}wi(e,i,500,["#7f6d4d","#d4c29b"],1,2,14,.3)});break;case"hay":t=be(256,(e,i)=>{ni(e,i,[200,172,96],[40,35,20],9,20),e.strokeStyle="rgba(120,90,30,0.35)";let n=We(5);for(let s=0;s<300;s++){let a=n()*i,o=n()*i;e.beginPath(),e.moveTo(a,o),e.lineTo(a+(n()-.5)*20,o+(n()-.5)*6),e.stroke()}});break;case"roof":t=be(256,(e,i)=>{e.fillStyle="#c8c0b8",e.fillRect(0,0,i,i);let n=We(51);for(let s=0;s<10;s++)for(let a=-1;a<11;a++){let o=s%2*i/20,l=175+n()*60;e.fillStyle=`rgb(${l},${l*.95},${l*.92})`,e.fillRect(a*i/10+o+1,s*i/10+1,i/10-2,i/10-1),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(a*i/10+o,s*i/10+i/10-3,i/10,3)}});break;case"cloth":t=be(128,(e,i)=>{ni(e,i,[230,230,230],[20,20,20],4,22),e.fillStyle="rgba(0,0,0,0.12)";for(let n=0;n<i;n+=16)e.fillRect(n,0,8,i)});break;case"snow":t=be(256,(e,i)=>{ni(e,i,[232,236,242],[20,20,16],4,31),wi(e,i,700,["#ffffff","#dfe6ee","#cfd8e2"],1,3,32,.45)});break;case"ice":t=be(256,(e,i)=>{ni(e,i,[176,204,222],[26,22,18],3,33);let n=We(34);e.strokeStyle="rgba(255,255,255,0.45)",e.lineWidth=1;for(let s=0;s<30;s++){e.beginPath();let a=n()*i,o=n()*i;e.moveTo(a,o);for(let l=0;l<4;l++)a+=(n()-.5)*60,o+=(n()-.5)*60,e.lineTo(a,o);e.stroke()}});break;case"noise":t=be(256,(e,i)=>ni(e,i,[128,128,128],[127,127,127],2,23,5),{srgb:!1});break;case"smoke":t=be(128,(e,i)=>{let n=Li(77),s=e.createImageData(i,i),a=s.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(o-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u)*(.65+.35*n.fbm(l/22,o/22,4)),f=(o*i+l)*4;a[f]=a[f+1]=a[f+2]=255,a[f+3]=Math.max(0,Math.min(255,Math.pow(d,1.4)*255))}e.putImageData(s,0,0)},{repeat:!1,srgb:!1});break;case"spark":t=be(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.8)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1,srgb:!1});break;case"flash":t=be(128,(e,i)=>{e.translate(i/2,i/2);for(let s=0;s<7;s++){e.rotate(Math.PI*2/7+.3);let a=e.createLinearGradient(0,0,i/2,0);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(0,-6),e.lineTo(i/2,0),e.lineTo(0,6),e.fill()}let n=e.createRadialGradient(0,0,0,0,0,i/3);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(-i/2,-i/2,i,i)},{repeat:!1,srgb:!1});break;case"bullethole":t=be(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(10,10,10,1)"),n.addColorStop(.18,"rgba(20,18,16,1)"),n.addColorStop(.32,"rgba(60,55,50,0.7)"),n.addColorStop(1,"rgba(60,55,50,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1});break;case"scorch":t=be(128,(e,i)=>{let n=Li(99),s=e.createImageData(i,i),a=s.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(o-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u*(.8+.4*n.fbm(l/14,o/14,3))),f=(o*i+l)*4;a[f]=15,a[f+1]=12,a[f+2]=10,a[f+3]=Math.min(255,d*330)}e.putImageData(s,0,0)},{repeat:!1});break;default:throw new Error("unknown texture "+r)}return Ch.set(r,t),t}var Vi={uTime:{value:0},uWind:{value:1}},Er=new Set,Ar=null;function va(r){let t=r.userData.patches||[],e=r.userData.csmHook;r.onBeforeCompile=(n,s)=>{e&&e(n,s);for(let a of t)a.fn(n,s)};let i=t.map(n=>n.name).join("|")+(e?"|csm":"");r.customProgramCacheKey=()=>i,r.needsUpdate=!0}function jn(r,t,e){return r.userData.patches=r.userData.patches||[],r.userData.patches.push({name:t,fn:e}),ef(r),va(r),r}function ef(r){return Er.has(r)||(Er.add(r),Ar?nf(r,Ar):va(r)),r}function nf(r,t){t.setupMaterial(r),r.userData.csmHook=r.onBeforeCompile,va(r)}function ya(r){if(Ar!==r){for(let t of Er)t.defines&&(delete t.defines.USE_CSM,delete t.defines.CSM_CASCADES,delete t.defines.CSM_FADE),t.userData.csmHook=null;Ar=r;for(let t of Er)r?nf(t,r):va(t)}}function sf(){Er.clear(),Ar=null}function Rh(r,t,e=.5,i=1){let s={uTriMap:{value:si(t)},uTriScale:{value:e},uTriStrength:{value:i}};return jn(r,"tri_"+t,a=>{Object.assign(a.uniforms,s),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= mix(vec3(1.0), triC.rgb, uTriStrength);`)})}function Ph(r,t=.03,e=.5,i=1.4){return jn(r,`wind_${t}_${e}`,n=>{n.uniforms.uTime=Vi.uTime,n.uniforms.uWind=Vi.uWind,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        }`)})}var xa=new Map;function Sn(r="default",t={}){if(xa.has(r))return xa.get(r);let e=new de(Object.assign({vertexColors:!0,roughness:.85,metalness:0,flatShading:!1,side:r==="weapon"?Pe:Fi},t));return ef(e),xa.set(r,e),e}function rf(){xa.clear()}var Tn=new Map,qe=(r,t=.3)=>new dt(r).lerp(new dt(8026746),t).getHex();function v1(r,t,e,i=1,n=.85,s=1.05){let a=new $o(r,9,5,0,Math.PI*2,0,Math.PI*.56);return a.scale(i,n,s),a.translate(0,e,0),P.colorize(a,t)}function Cr(r,t={}){let e=r+JSON.stringify(t);if(Tn.has(e))return Tn.get(e);let i=Ke[r],n=i.look||{len:.8,color:2763306},s=qe(n.color),a=qe(n.color,.18),o=qe(1842204),l=qe(n.wood||n.color,.2),c=qe(3815994),h=[],u=[],d=[],f=.105,p,x=-.05,g=null,m=new R,v=n.len;if(i.type==="pistol"){h.push(P.box(.03,.034,v,s,0,.047,-v*.35));for(let S=0;S<4;S++)h.push(P.box(.032,.026,.004,o,0,.05,.03-S*.012));h.push(P.box(.027,.024,v*.78,o,0,.02,-v*.3)),h.push(P.box(.028,.06,.04,o,0,-.012,.012,.22)),h.push(P.box(.006,.022,.03,o,0,-.004,-.04)),h.push(P.box(.006,.012,.006,o,0,.07,-v*.8)),h.push(P.box(.02,.01,.008,o,0,.068,.02)),u.push(P.box(.024,.075,.034,qe(2500134),0,-.037,0,.22)),m.set(0,-.025,.018),p=-v*.85,f=.074,t.sight==="reddot"&&(h.push(P.box(.028,.008,.036,o,0,.068,-.03)),h.push(P.box(.004,.024,.008,o,-.012,.084,-.042),P.box(.004,.024,.008,o,.012,.084,-.042),P.box(.028,.005,.008,o,0,.098,-.042)),h.push(P.box(.026,.01,.014,o,0,.076,-.018)),d.push({type:"rect",w:.02,h:.022,y:.085,z:-.042}),f=.085,g=-.038),t.barrel==="suppressor"&&(h.push(P.cyl(.017,.017,.13,8,2236962,0,.047,p-.06,Math.PI/2)),p-=.13)}else{let S=n.stock==="bullpup",C=S?-v*.05:-v*.12,_=v*.42;h.push(P.box(.056,.045,_,s,0,.068,C)),h.push(P.box(.05,.045,_*.8,a,0,.024,C+_*.06)),h.push(P.box(.003,.018,.06,o,.029,.07,C+.02)),h.push(P.box(.02,.012,.03,o,0,.094,C+_*.5-.01)),h.push(P.box(.03,.01,_*.95,c,0,.095,C-.01));for(let et=0;et<7;et++)h.push(P.box(.034,.006,.008,o,0,.101,C-_*.42+et*_*.13));h.push(P.box(.008,.006,.07,o,0,-.01,-.03)),h.push(P.box(.006,.03,.006,o,0,-.02,0));let b=-v*.42,A=v*.27,z=n.wood&&i.type!=="lmg"?l:s;h.push(P.box(.062,.062,A,z,0,.045,b));for(let et=0;et<4;et++)h.push(P.box(.064,.012,.025,o,0,.05,b-A*.35+et*A*.23));n.wood&&h.push(P.cyl(.011,.011,A,6,c,0,.09,b,Math.PI/2));let L=b-A/2,U=-v*.68;if(h.push(P.cyl(.011,.012,Math.abs(U-L)+.02,7,o,0,.05,(L+U)/2,Math.PI/2)),h.push(P.box(.026,.03,.03,o,0,.06,L-.03)),p=U-.01,h.push(P.box(.032,.095,.044,o,0,-.04,S?-.18:.02,.3)),n.stock==="tube")h.push(P.cyl(.015,.015,v*.26,7,o,0,.055,v*.17,Math.PI/2)),h.push(P.box(.044,.05,v*.14,o,0,.045,v*.25)),h.push(P.box(.046,.12,.035,o,0,.03,v*.33));else if(n.stock==="solid"){let et=n.wood?l:s;h.push(P.box(.046,.07,v*.3,et,0,.05,v*.2,-.05)),h.push(P.box(.044,.05,v*.22,et,0,0,v*.24,.18)),h.push(P.box(.048,.13,.03,o,0,.02,v*.355))}else S&&h.push(P.box(.06,.1,v*.22,s,0,.03,v*.22));let O=S?v*.12:-.1,N=qe(2236962,.25);if(n.mag==="curve")u.push(P.box(.028,.08,.058,N,0,-.04,0,.12)),u.push(P.box(.028,.08,.056,N,0,-.11,-.025,.42)),m.set(0,0,O);else if(n.mag==="straight")u.push(P.box(.028,.13,.05,N,0,-.065,0,.1)),u.push(P.box(.032,.012,.054,o,0,-.13,.006,.1)),m.set(0,0,O);else if(n.mag==="box")u.push(P.box(.09,.1,.11,3817520,.02,-.05,0)),m.set(0,0,-.08);else if(n.mag==="top")u.push(P.box(.05,.03,v*.45,2763304,0,0,0)),m.set(0,.11,-v*.18);else if(n.mag==="tube"){h.push(P.cyl(.013,.013,v*.45,6,o,0,.012,-v*.42,Math.PI/2)),h.push(P.box(.05,.045,.13,l,0,.01,-v*.42));for(let et=0;et<3;et++)h.push(P.box(.052,.006,.01,o,0,.012,-v*.42-.04+et*.04));u.push(P.cyl(.011,.011,.05,6,11546656,0,0,0,Math.PI/2)),m.set(0,0,-.05)}n.bipod&&(h.push(P.box(.01,.01,.22,o,-.015,0,-v*.5)),h.push(P.box(.01,.01,.22,o,.015,0,-v*.5))),i.bolt&&(h.push(P.cyl(.008,.008,.06,5,c,.04,.07,0,0,0,Math.PI/2)),h.push(P.ico(.012,0,c,.07,.07,0)));let q=t.sight||"iron",F=-.04,X=qe(1579032,.22),j=qe(3815984,.2);if(q==="iron"){let et=-v*.5;h.push(P.box(.02,.024,.022,o,0,.094,et)),h.push(P.box(.004,.02,.004,X,0,.113,et)),h.push(P.box(.004,.03,.014,o,-.011,.11,et),P.box(.004,.03,.014,o,.011,.11,et)),h.push(P.box(.03,.012,.024,o,0,.1,.02)),h.push(P.box(.006,.026,.018,o,-.015,.117,.02),P.box(.006,.026,.018,o,.015,.117,.02)),h.push(...P.sleeve(.009,.0042,.006,12,X,0,.123,.02)),h.push(P.box(.022,.006,.006,o,0,.112,.02)),f=.123,x=.02}else if(q==="reddot")h.push(P.box(.022,.016,.046,o,0,.104,F),P.box(.03,.006,.05,o,0,.099,F)),h.push(...P.sleeve(.021,.0175,.052,14,X,0,.131,F)),h.push(...P.sleeve(.0235,.0175,.008,14,X,0,.131,F-.026)),h.push(...P.sleeve(.0225,.0175,.006,14,X,0,.131,F+.026)),h.push(P.cyl(.008,.008,.012,8,o,.026,.131,F,0,0,Math.PI/2),P.cyl(.008,.008,.012,8,o,0,.156,F)),h.push(P.box(.006,.006,.006,10040098,.033,.131,F)),d.push({type:"circle",r:.0175,y:.131,z:F-.024}),f=.131,x=F,g=F-.02;else if(q==="holo")h.push(P.box(.046,.016,.09,o,0,.104,F+.005)),h.push(P.box(.042,.016,.03,X,0,.112,F+.04)),h.push(P.box(.008,.005,.006,4868682,-.012,.1125,F+.057),P.box(.008,.005,.006,4868682,.012,.1125,F+.057)),h.push(P.box(.006,.046,.034,X,-.025,.136,F-.018),P.box(.006,.046,.034,X,.025,.136,F-.018)),h.push(P.box(.056,.007,.034,X,0,.16,F-.018)),h.push(P.box(.044,.004,.004,o,0,.158,F-.034),P.box(.044,.004,.004,o,0,.114,F-.034)),d.push({type:"rect",w:.044,h:.04,y:.136,z:F-.02}),f=.136,x=F,g=F-.016;else if(q==="x2")h.push(P.box(.026,.014,.06,o,0,.104,F)),h.push(...P.sleeve(.02,.0165,.07,12,X,0,.132,F)),h.push(...P.sleeve(.024,.0165,.012,12,X,0,.132,F-.038)),h.push(...P.sleeve(.022,.0165,.01,12,X,0,.132,F+.036)),h.push(P.box(.02,.012,.04,X,0,.157,F),P.cyl(.006,.006,.012,8,o,.024,.132,F+.01,0,0,Math.PI/2)),d.push({type:"circle",r:.0165,y:.132,z:F-.042},{type:"circle",r:.0165,y:.132,z:F+.04,back:!0}),f=.132,x=F,g=F-.03;else if(q==="acog")h.push(P.box(.03,.014,.07,j,0,.104,F)),h.push(P.cyl(.018,.027,.12,12,j,0,.134,F,Math.PI/2)),h.push(...P.sleeve(.029,.023,.01,12,j,0,.134,F-.062)),h.push(P.box(.012,.009,.08,2763300,0,.162,F),P.box(.006,.004,.06,10107434,0,.167,F)),h.push(P.cyl(.007,.007,.012,8,j,.026,.134,F,0,0,Math.PI/2)),d.push({type:"circle",r:.024,y:.134,z:F-.067},{type:"circle",r:.017,y:.134,z:F+.061,back:!0}),f=.134,x=F+.06;else if(q==="scope8"){let et=F-.03;h.push(P.cyl(.017,.017,.2,12,X,0,.142,et,Math.PI/2)),h.push(P.cyl(.02,.032,.07,14,X,0,.142,et-.135,Math.PI/2)),h.push(...P.sleeve(.033,.029,.01,14,X,0,.142,et-.172)),h.push(P.cyl(.025,.019,.06,12,X,0,.142,et+.13,Math.PI/2)),h.push(P.cyl(.024,.024,.014,14,qe(2763306),0,.142,et+.09,Math.PI/2)),h.push(P.cyl(.011,.011,.03,10,X,0,.17,et),P.cyl(.011,.011,.03,10,X,.03,.142,et,0,0,Math.PI/2));for(let Rt of[et-.06,et+.06])h.push(...P.sleeve(.021,.0172,.014,12,o,0,.142,Rt)),h.push(P.box(.02,.03,.014,o,0,.115,Rt));d.push({type:"circle",r:.029,y:.142,z:et-.176},{type:"circle",r:.021,y:.142,z:et+.16,back:!0}),f=.142,x=et+.16}t.barrel==="suppressor"?(h.push(P.cyl(.022,.022,.17,8,2236962,0,.05,p-.08,Math.PI/2)),p-=.17):t.barrel&&t.barrel!=="none"?(h.push(P.cyl(.018,.016,.055,6,2500134,0,.05,p-.02,Math.PI/2)),p-=.055):(h.push(P.cyl(.015,.014,.04,6,o,0,.05,p-.015,Math.PI/2)),p-=.04);let lt=-v*.42;t.grip==="vertical"?h.push(P.box(.026,.085,.03,o,0,-.03,lt)):t.grip==="angled"?h.push(P.box(.026,.04,.07,o,0,-.005,lt,-.5)):t.grip==="stubby"?h.push(P.box(.026,.045,.03,o,0,-.01,lt)):t.grip==="bipod"&&!n.bipod&&(h.push(P.box(.01,.01,.2,o,-.015,0,lt-.06)),h.push(P.box(.01,.01,.2,o,.015,0,lt-.06))),t.rail==="laser"?(h.push(P.box(.022,.024,.06,o,.042,.04,lt+.02)),h.push(P.box(.008,.008,.004,16719904,.042,.04,lt-.012))):t.rail==="flashlight"&&h.push(P.cyl(.016,.018,.08,8,o,.042,.04,lt,Math.PI/2))}let y=P.merge(h),M=u.length?P.merge(u):null,w={geo:M?P.merge([y.clone(),M.clone().translate(m.x,m.y,m.z)]):y,bodyGeo:y,magGeo:M,magPos:m,sightY:f,sightZ:x,lenses:d,reticleZ:g,muzzle:new R(0,i.type==="pistol"?.047:.05,p),len:v,pistol:i.type==="pistol"};return Tn.set(e,w),w}function Kn(r){let t="g_"+r;if(Tn.has(t))return Tn.get(t);let e;switch(r){case"frag":case"impact":e=[P.ico(.04,1,r==="impact"?8022586:4147758,0,0,0),P.box(.015,.03,.015,8947848,0,.045,0),P.box(.008,.06,.012,7829367,.02,.03,0)];break;case"smoke":case"flash":e=[P.cyl(.032,.032,.12,8,r==="flash"?2763306:6975088,0,0,0),P.box(.015,.025,.015,8947848,0,.07,0),P.cyl(.033,.033,.02,8,r==="flash"?6710886:13684944,0,.02,0)];break;case"m320":e=[P.cyl(.03,.03,.3,8,2763306,0,.04,-.15,Math.PI/2),P.box(.03,.1,.04,1842204,0,-.03,.02,.3),P.box(.04,.05,.15,3355443,0,.06,.04),P.box(.05,.1,.03,2763306,0,.03,.14)];break;case"rpg":e=[P.cyl(.035,.035,.95,8,4872762,0,.06,-.15,Math.PI/2),P.cone(.055,.2,8,5925450,0,.06,-.72),P.box(.03,.09,.04,1842204,0,-.02,0,.3),P.box(.03,.09,.04,1842204,0,-.02,-.25,.3),P.box(.03,.04,.05,2236962,-.04,.12,-.1),P.cyl(.045,.04,.1,8,6969914,0,.06,.32,Math.PI/2)];break;case"medkit":e=[P.box(.18,.12,.08,15263976,0,0,0),P.box(.06,.02,.085,13639712,0,0,0),P.box(.02,.06,.085,13639712,0,0,0),P.box(.06,.02,.02,6710886,0,.07,0)];break;case"ammobox":e=[P.box(.25,.14,.14,4872746,0,0,0),P.box(.1,.02,.06,2236962,0,.08,0),P.box(.26,.02,.15,3820066,0,.06,0)];break;case"c4":e=[P.box(.12,.05,.08,13154442,0,0,0),P.box(.03,.02,.06,2236962,.03,.035,0),P.box(.04,.09,.025,2763306,-.12,0,.02),P.box(.01,.01,.01,16719904,.03,.05,0)];break;case"claymore":e=[P.box(.18,.1,.04,4872750,0,0,0),P.box(.01,.06,.01,3355443,-.06,-.07,0),P.box(.01,.06,.01,3355443,.06,-.07,0)];break;case"beacon":e=[P.box(.14,.18,.1,3820122,0,0,0),P.box(.01,.2,.01,2236962,.04,.18,0),P.box(.03,.03,.03,3211104,.04,.29,0)];break;case"rally":e=[P.box(.16,.12,.1,4868666,0,0,0),P.box(.01,.35,.01,2236962,-.05,.22,0),P.box(.12,.08,.005,15786096,.01,.34,0)];break;case"binoculars":e=[P.cyl(.025,.025,.12,8,2763306,-.035,0,0,Math.PI/2),P.cyl(.025,.025,.12,8,2763306,.035,0,0,Math.PI/2),P.box(.04,.02,.04,2236962,0,0,0)];break;case"sandbags":e=[P.box(.3,.12,.18,12100474,0,0,0)];break;case"knife":e=[P.box(.012,.03,.14,12106944,0,0,-.1),P.box(.022,.03,.09,2763302,0,-.005,.02),P.box(.05,.012,.012,3815990,0,0,-.03)];break;case"bandage":e=[P.cyl(.035,.035,.07,8,15658734,0,0,0,0,0,Math.PI/2)];break;default:e=[P.box(.1,.1,.1,8947848)]}let i=P.merge(e);return Tn.set(t,i),i}var Xe=[{uniform:5991238,uniform2:5003834,vest:3950898,helmet:5069884,accent:4034016,pack:4608570,pants:5595967,glove:3093288,name:"NORTHWIND",css:"#4a9cf0"},{uniform:10259046,uniform2:8746322,vest:7101763,helmet:8286035,accent:14700605,pack:8022605,pants:9272411,glove:3813926,name:"IRONSIDE",css:"#f05a48"}],Dh=[14726287,13013104,9263676,15780008,11040079];function of(r,t,e,i,n,s,a,o,l){let c=i-r,h=n-t,u=s-e,d=Math.hypot(c,h,u),f=P.box(a,l||a,d,o),p=new Et().lookAt(new R(0,0,0),new R(c,h,u),new R(0,1,0));return f.applyMatrix4(p),f.translate((r+i)/2,(t+n)/2,(e+s)/2),f}var y1={R:{rifle:[[-.03,-.24,-.1],[-.15,-.14,-.33]],pistol:[[-.04,-.22,-.14],[-.17,-.12,-.42]],gadget:[[-.04,-.26,-.08],[-.12,-.2,-.3]]},L:{rifle:[[.06,-.24,-.3],[.24,-.12,-.66]],pistol:[[.08,-.24,-.16],[.22,-.14,-.4]],gadget:[[.02,-.28,-.06],[.1,-.26,-.24]]}};function af(r,t,e){let[i,n]=y1[r][t];return P.merge([P.box(.13,.12,.13,e.uniform,0,-.02,0),of(0,-.02,0,i[0],i[1],i[2],.11,e.uniform,.105),P.box(.1,.1,.1,e.uniform2,i[0],i[1],i[2]),of(i[0],i[1],i[2],n[0],n[1],n[2],.095,e.uniform2,.09),P.box(.085,.085,.1,e.glove,n[0],n[1]+.005,n[2])])}function Ma(r,t,e=0){let i=Xe[r],n=Dh[e%Dh.length],s=Sn("soldier",{roughness:.85}),a=`s2_${r}_${t}_${e%Dh.length}`,o=Tn.get(a);if(!o){o={},o.pelvis=P.merge([P.box(.34,.17,.21,i.pants,0,-.03,0),P.box(.36,.05,.23,2828836,0,.06,0),P.box(.04,.04,.03,9075280,0,.06,-.12),P.box(.07,.13,.06,2763302,.2,-.04,.02),P.box(.08,.08,.07,i.vest,-.19,0,.04)]);let T=[P.box(.31,.2,.19,i.uniform,0,.1,0),P.box(.39,.28,.23,i.uniform,0,.34,0),P.box(.35,.3,.06,i.vest,0,.29,-.125),P.box(.35,.32,.06,i.vest,0,.3,.125),P.box(.06,.22,.24,i.vest,-.19,.27,0),P.box(.06,.22,.24,i.vest,.19,.27,0),P.box(.07,.1,.05,qe(i.vest,.1),-.1,.2,-.17),P.box(.07,.1,.05,qe(i.vest,.1),0,.2,-.17),P.box(.07,.1,.05,qe(i.vest,.1),.1,.2,-.17),P.box(.06,.07,.04,2763302,.12,.36,-.165),P.box(.03,.02,.32,2763302,-.12,.47,0),P.box(.03,.02,.32,2763302,.12,.47,0),P.box(.13,.07,.13,n,0,.52,0),P.box(.09,.07,.01,i.accent,.205,.38,-.02)],w=i.pack;t==="medic"?T.push(P.box(.28,.3,.13,14211280,0,.3,.2),P.box(.1,.035,.01,13639712,0,.32,.27),P.box(.035,.1,.01,13639712,0,.32,.27)):t==="support"?T.push(P.box(.3,.32,.15,w,0,.3,.2),P.box(.24,.12,.12,3820074,0,.08,.22)):t==="engineer"?T.push(P.box(.26,.3,.13,w,0,.28,.19),P.cyl(.05,.05,.62,7,4872762,.13,.46,.22,.35)):t==="recon"?T.push(P.box(.26,.26,.12,w,0,.26,.19),P.cyl(.07,.07,.32,8,5920320,0,.46,.22,0,0,Math.PI/2)):t==="leader"?T.push(P.box(.24,.28,.12,w,0,.28,.19),P.box(.015,.4,.015,2236962,-.09,.62,.22)):T.push(P.box(.26,.24,.1,w,0,.27,.18),P.box(.12,.12,.05,qe(w,.1),0,.22,.25)),o.torso=P.merge(T);let S=[P.box(.2,.22,.21,n,0,.12,0),P.box(.04,.05,.03,qe(n,.05),0,.11,-.115),P.box(.035,.02,.01,2236962,-.05,.15,-.106),P.box(.035,.02,.01,2236962,.05,.15,-.106),P.box(.03,.06,.05,n,-.105,.12,0),P.box(.03,.06,.05,n,.105,.12,0)];t==="recon"?S.push(P.cyl(.21,.21,.02,10,i.helmet,0,.215,0),P.cyl(.12,.13,.1,10,i.helmet,0,.27,0)):t==="leader"?S.push(P.box(.23,.09,.23,i.helmet,0,.245,0),P.box(.21,.02,.09,i.helmet,0,.21,-.14),P.box(.04,.09,.08,2236962,.12,.13,0),P.box(.04,.09,.08,2236962,-.12,.13,0),P.box(.24,.015,.03,2236962,0,.21,0)):(S.push(v1(.155,i.helmet,.17),P.box(.3,.02,.3,i.helmet,0,.17,0)),S.push(P.box(.05,.04,.03,2763302,0,.25,-.15)),r===1&&S.push(P.box(.19,.04,.02,2236962,0,.2,-.155)),t==="medic"&&S.push(P.box(.05,.015,.01,13639712,0,.27,.15),P.box(.015,.05,.01,13639712,0,.27,.15))),o.head=P.merge(S),o.thigh=P.merge([P.box(.15,.44,.17,i.pants,0,-.22,0),P.box(.04,.12,.1,qe(i.pants,.08),.085,-.24,0)]),o.shin=P.merge([P.box(.13,.4,.14,i.pants,0,-.2,0),P.box(.14,.12,.05,i.vest,0,-.03,-.08),P.box(.15,.11,.27,2762274,0,-.42,-.04),P.box(.155,.03,.28,1710102,0,-.475,-.04)]);for(let C of["rifle","pistol","gadget"])o["armR_"+C]=af("R",C,i),o["armL_"+C]=af("L",C,i);Tn.set(a,o)}let l=T=>{let w=new Ot(T,s);return w.castShadow=!0,w.receiveShadow=!0,w},c=new fe,h=new fe;h.position.y=.95,c.add(h);let u=new fe;h.add(u),u.add(l(o.pelvis));let d=new fe;d.position.y=.06,h.add(d),d.add(l(o.torso));let f=new fe;f.position.y=.55,d.add(f),f.add(l(o.head));let p=new fe;p.position.set(0,.44,0),d.add(p);let x=new fe;x.position.set(.21,0,0),p.add(x);let g=new fe;g.position.set(-.21,0,0),p.add(g);let m=l(o.armR_rifle),v=l(o.armL_rifle);x.add(m),g.add(v);let y=new fe;y.position.set(.06,-.11,-.33),p.add(y);let M=[];for(let T of[-1,1]){let w=new fe;w.position.set(T*.095,-.06,0),u.add(w),w.add(l(o.thigh));let S=new fe;S.position.y=-.44,w.add(S),S.add(l(o.shin)),M.push({thigh:w,shin:S})}return{root:c,body:h,pelvis:u,spine:d,hips:h,torso:d,head:f,aim:p,armR:x,armL:g,armRMesh:m,armLMesh:v,weapon:y,legs:M,weaponMesh:null,mat:s,geos:o,pose:"rifle"}}function ba(r,t,e="rifle"){r.weaponMesh&&r.weapon.remove(r.weaponMesh);let i=new Ot(t,Sn("weapon",{roughness:.6,metalness:.25}));if(i.castShadow=!0,r.weapon.add(i),r.weaponMesh=i,e!==r.pose&&(r.pose=e,r.armRMesh.geometry=r.geos["armR_"+e],r.armLMesh.geometry=r.geos["armL_"+e],r.weapon.position.set(.06,-.11,e==="pistol"?-.42:e==="gadget"?-.3:-.33)),r.outlined&&(b1(r),r.outlines))for(let n of r.outlines)n.visible=r.outlineOn!==!1}var M1=new Jt({uniforms:{uColor:{value:new dt(1,.1,.06)},uWidth:{value:.0032}},vertexShader:`
    uniform float uWidth;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 n = normalize(normalMatrix * normal);
      float d = clamp(-mv.z, 1.2, 40.0); // constant on screen up close, thinner far away
      mv.xyz += n * uWidth * d;
      mv.z -= 0.09; // sit just behind the soldier's own parts so only the silhouette shows
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:"uniform vec3 uColor; void main() { gl_FragColor = vec4(uColor, 1.0); }",side:Fe}),Ih=new WeakMap;function lf(r){if(Ih.has(r))return Ih.get(r);let t=r.attributes.position,e=new Map,i=o=>`${Math.round(t.getX(o)*1e3)},${Math.round(t.getY(o)*1e3)},${Math.round(t.getZ(o)*1e3)}`,n=r.attributes.normal;for(let o=0;o<t.count;o++){let l=i(o),c=e.get(l)||[0,0,0];c[0]+=n.getX(o),c[1]+=n.getY(o),c[2]+=n.getZ(o),e.set(l,c)}let s=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){let l=e.get(i(o)),c=Math.hypot(l[0],l[1],l[2])||1;s[o*3]=l[0]/c,s[o*3+1]=l[1]/c,s[o*3+2]=l[2]/c}let a=new pe;return a.setAttribute("position",t),a.setAttribute("normal",new ue(s,3)),r.index&&a.setIndex(r.index),a.boundingSphere=r.boundingSphere,a.boundingBox=r.boundingBox,Ih.set(r,a),a}function cf(r,t){if(r.userData.outline){r.userData.outline.geometry=lf(r.geometry);return}let e=new Ot(lf(r.geometry),M1);e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1,e.userData.isOutline=!0,r.add(e),r.userData.outline=e,t.outlines.push(e)}function hf(r,t=!0){if(!r.outlines){r.outlines=[];let e=[];r.root.traverse(i=>{i.isMesh&&!i.userData.isOutline&&e.push(i)});for(let i of e)cf(i,r);r.outlined=!0}for(let e of r.outlines)e.visible=t}function b1(r){if(!r.outlined)return;let t=[];r.root.traverse(e=>{e.isMesh&&!e.userData.isOutline&&t.push(e)});for(let e of t)cf(e,r)}var uf="fireline.keybinds.v1",_a=[{group:"Movement"},{id:"forward",label:"Move forward",def:"KeyW"},{id:"back",label:"Move back",def:"KeyS"},{id:"left",label:"Strafe left",def:"KeyA"},{id:"right",label:"Strafe right",def:"KeyD"},{id:"sprint",label:"Sprint \xB7 hold breath when scoped",def:"ShiftLeft"},{id:"jump",label:"Jump / vault / climb",def:"Space"},{id:"crouch",label:"Crouch (slide while sprinting)",def:"KeyC"},{id:"crouchHold",label:"Crouch (always hold)",def:"ControlLeft"},{id:"prone",label:"Prone",def:"KeyZ"},{id:"leanL",label:"Lean left",def:"KeyQ"},{id:"leanR",label:"Lean right",def:"KeyE"},{group:"Combat"},{id:"fire",label:"Fire",def:"Mouse0"},{id:"ads",label:"Aim down sights \xB7 detonate C4",def:"Mouse2"},{id:"reload",label:"Reload",def:"KeyR"},{id:"firemode",label:"Fire mode",def:"KeyB"},{id:"melee",label:"Melee (knife)",def:"KeyV"},{id:"grenade",label:"Quick grenade",def:"KeyG"},{id:"slot1",label:"Primary weapon",def:"Digit1"},{id:"slot2",label:"Sidearm",def:"Digit2"},{id:"slot3",label:"Gadget 1",def:"Digit3"},{id:"slot4",label:"Gadget 2",def:"Digit4"},{id:"slot5",label:"Throwable",def:"Digit5"},{group:"Squad & utility"},{id:"interact",label:"Revive / heal (hold)",def:"KeyF"},{id:"bandage",label:"Bandage",def:"KeyX"},{id:"spot",label:"Spot enemy \xB7 squad order",def:"KeyT"},{id:"light",label:"Flashlight",def:"KeyL"},{id:"scoreboard",label:"Scoreboard",def:"Tab"},{id:"map",label:"Map",def:"KeyM"},{group:"Trackpad & accessibility"},{id:"lookLeft",label:"Look left",def:"ArrowLeft"},{id:"lookRight",label:"Look right",def:"ArrowRight"},{id:"lookUp",label:"Look up",def:"ArrowUp"},{id:"lookDown",label:"Look down",def:"ArrowDown"}],df={Mouse0:"LMB",Mouse1:"MMB",Mouse2:"RMB",Mouse3:"Mouse 4",Mouse4:"Mouse 5",Space:"Space",Tab:"Tab",Escape:"Esc",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",CapsLock:"Caps",Enter:"Enter",Backspace:"Bksp",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192"};function _1(r){return r?df[r]?df[r]:r.startsWith("Key")?r.slice(3):r.startsWith("Digit")?r.slice(5):r.startsWith("Numpad")?"Num "+r.slice(6):r:"\u2014"}var zh=class{constructor(){this.map={};for(let t of _a)t.id&&(this.map[t.id]=t.def);try{let t=localStorage.getItem(uf);t&&Object.assign(this.map,JSON.parse(t))}catch{}}code(t){return this.map[t]}name(t){return _1(this.map[t])}set(t,e){this.map[t]=e,this.save()}reset(){for(let t of _a)t.id&&(this.map[t.id]=t.def);this.save()}save(){try{localStorage.setItem(uf,JSON.stringify(this.map))}catch{}}conflicts(){let t={},e=new Set;for(let[i,n]of Object.entries(this.map))t[n]?(e.add(i),e.add(t[n])):t[n]=i;return e}down(t,e){return t.isDown(this.map[e])}hit(t,e){return t.isHit(this.map[e])}released(t,e){return t.isReleased(this.map[e])}},ve=new zh;function w1(r,t,e){return P.merge([P.cyl(.16*e,.26*e,3*e,6,5915186,r,1.5*e,t),P.cone(2.2*e,3.2*e,7,3103278,r,3.4*e,t,.12),P.cone(1.7*e,2.7*e,7,3499317,r,5.1*e,t,.12),P.cone(1.1*e,2.2*e,7,3960889,r,6.6*e,t,.12)])}var wa=class{constructor(t){this.renderer=t,this.scene=new Bi,this.scene.background=new dt(10466500),this.scene.fog=new No(10466500,30,75),this.camera=new _e(42,1,.1,200),this.t=0,this.build()}build(){let t=this.scene,e=new sn(13163760,5918784,1.2);t.add(e);let i=new bi(16773336,3.2);i.position.set(12,18,8),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);let n=i.shadow.camera;n.left=-14,n.right=14,n.top=14,n.bottom=-14,n.near=1,n.far=60,i.shadow.bias=-5e-4,i.shadow.normalBias=.03,t.add(i);let s=new zs(60,64,0,Math.PI*2);s.rotateX(-Math.PI/2);let a=s.attributes.position,o=new Float32Array(a.count*3),l=new dt(6983484),c=new dt(9074006),h=new dt;for(let x=0;x<a.count;x++){let g=a.getX(x),m=a.getZ(x),v=Math.hypot(g,m);a.setY(x,Math.sin(g*.35)*.15+Math.cos(m*.27)*.15+Math.max(0,v-18)*.12+(v>20?Math.sin(g*.2+m*.15)*1.5:0));let y=Math.max(0,1-Math.hypot(g-1,m+1)/5)+(Math.sin(g*.7)*Math.cos(m*.5)>.6?.4:0);h.copy(l).lerp(c,Math.min(1,y)),o[x*3]=h.r,o[x*3+1]=h.g,o[x*3+2]=h.b}s.setAttribute("color",new ue(o,3)),s.computeVertexNormals();let u=new Ot(s,new de({vertexColors:!0,roughness:1,map:si("grass")}));u.receiveShadow=!0,t.add(u);let d=[];for(let x=0;x<6;x++)d.push(P.box(1,.95,.6,12100474,-2.5+x*1,.47,-2.2,0,.05*(x%2)));for(let x=0;x<4;x++)d.push(P.box(1,.5,.6,11047786,-2+x*1,1.2,-2.2));d.push(P.box(1.2,1.2,1.2,10255186,4.2,.6,1.5,0,.3),P.box(1,1,1,11570527,4.6,1.7,1.4,0,.6)),d.push(P.box(2.4,2.6,6,3104651,-7,1.3,4,0,.4));for(let[x,g,m]of[[-9,-8,1.2],[8,-10,1],[11,4,1.3],[-12,2,.9],[3,-14,1.1],[-4,12,1],[14,-4,.8]])d.push(w1(x,g,m));let f=new Ot(P.merge(d),new de({vertexColors:!0,roughness:.9,flatShading:!0}));f.castShadow=!0,f.receiveShadow=!0,t.add(f),this.rigs=[];let p=(x,g,m,v,y,M,T)=>{let w=Ma(x,g,Math.floor(Math.random()*5)),S=Cr(m,{sight:"reddot"});return ba(w,S.geo,S.pistol?"pistol":"rifle"),w.root.position.set(v,0,y),w.root.rotation.y=M,w.root.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),t.add(w.root),this.rigs.push({rig:w,pose:T,phase:Math.random()*6}),w};p(0,"assault","m4a1",-.8,-1.2,.2,"kneel"),p(0,"support","m249",1.6,-1,-.15,"stand"),p(0,"medic","mp7",.2,1.6,2.6,"crouchwalk"),p(0,"recon","l96",-3.2,1,.5,"prone")}pose(t,e){let{rig:i,pose:n}=t,s=Math.sin(e*1.6+t.phase)*.01;i.body.position.y=.95+s,i.aim.rotation.x=.02+s,i.spine.rotation.x=.03;let a=i.legs;n==="kneel"?(i.body.position.y=.62+s,i.body.rotation.x=-.08,a[0].thigh.rotation.x=.25,a[0].shin.rotation.x=-1.75,a[1].thigh.rotation.x=1.1,a[1].shin.rotation.x=-1.65,i.aim.rotation.x=.05+s,i.head.rotation.y=Math.sin(e*.4)*.15):n==="prone"?(i.body.position.y=.2,i.body.rotation.x=-1.47,i.aim.rotation.x=1.47,i.head.rotation.x=1.15,a[0].thigh.rotation.z=.18,a[1].thigh.rotation.z=-.18):n==="crouchwalk"?(i.body.position.y=.66+s,i.spine.rotation.x=.08,a[0].thigh.rotation.x=.9,a[0].shin.rotation.x=-1.4,a[1].thigh.rotation.x=.6,a[1].shin.rotation.x=-1.2,i.aim.rotation.x=-.25):(i.spine.rotation.y=Math.sin(e*.3+t.phase)*.12,i.head.rotation.x=-.05,a[0].thigh.rotation.x=.08,a[1].thigh.rotation.x=-.05,a[0].thigh.rotation.z=.06,a[1].thigh.rotation.z=-.06)}render(t,e,i){this.t+=t;let n=this.t,s=n*.06+.9;this.camera.position.set(Math.cos(s)*9.5,2.6+Math.sin(n*.13)*.4,Math.sin(s)*9.5),this.camera.lookAt(-.6,.9,0),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();for(let a of this.rigs)this.pose(a,n);this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}},Sa=class{constructor(t){this.canvas=t;try{this.renderer=new Is({canvas:t,antialias:!0,alpha:!0})}catch{this.renderer=null;return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.toneMapping=Yn,this.renderer.outputColorSpace=Ee,this.scene=new Bi,this.scene.add(new sn(15265528,4208688,1.6));let e=new bi(16777215,2.4);e.position.set(2,3,2),this.scene.add(e);let i=new bi(10139903,1);i.position.set(-3,1,-2),this.scene.add(i),this.camera=new _e(30,2,.05,20),this.group=new fe,this.scene.add(this.group),this.mat=new de({vertexColors:!0,roughness:.55,metalness:.25,side:Pe}),this.t=0,this.key=null}set(t,e){if(!this.renderer)return;let i=t+JSON.stringify(e);if(i===this.key)return;this.key=i,this.group.clear();let n=Cr(t,e),s=new Ot(n.geo,this.mat);n.geo.computeBoundingBox();let a=n.geo.boundingBox,o=a.getCenter(new R);s.position.set(-o.x,-o.y,-o.z),this.group.add(s),this.size=a.getSize(new R).length()}render(t){if(!this.renderer)return;this.t+=t;let e=this.canvas.clientWidth,i=this.canvas.clientHeight;if(!e||!i)return;this.canvas.width!==Math.floor(e*this.renderer.getPixelRatio())&&this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();let n=(this.size||1)*1.05;this.camera.position.set(.15*n,.18*n,n),this.camera.lookAt(0,0,0),this.group.rotation.y=Math.PI/2+Math.sin(this.t*.6)*.5,this.group.rotation.x=Math.sin(this.t*.4)*.05,this.renderer.render(this.scene,this.camera)}};var S1={assault:'<path d="M2 13h13l3-2h4v2h-3l-1 2H9l-1 3H5l1-3H2z"/>',medic:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',engineer:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',support:'<path d="M4 8h16v11H4zM8 5h8v3H8zM7 11h2v5H7zm4 0h2v5h-2zm4 0h2v5h-2z"/>',recon:'<path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="1.5"/>',leader:'<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/>'},T1=r=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">${S1[r]||""}</svg>`;function E1(r){let t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstElementChild}var Ta=class{constructor(t){this.app=t,this.root=document.getElementById("ui"),this.screens={},this.loadout=this.loadSavedLoadout()}loadSavedLoadout(){try{let t=JSON.parse(localStorage.getItem("fireline.loadout")||"null");if(t&&t.cls&&Ke[t.primary])return t}catch{}return{cls:"assault",primary:"m4a1",att:Tr("m4a1"),secondary:"m9",satt:{sight:"iron",barrel:"none",grip:"none",rail:"none"},throwable:"frag",armor:"light"}}saveLoadout(){try{localStorage.setItem("fireline.loadout",JSON.stringify(this.loadout))}catch{}}hideAll(){for(let t in this.screens)this.screens[t].style.display="none"}screen(t,e){this.screens[t]&&this.screens[t].remove();let i=E1(`<div class="screen ${t}">${e}</div>`);return this.root.appendChild(i),this.screens[t]=i,i}click(t){t.addEventListener("click",()=>this.app.audio.play2d("ui",{vol:.3}))}showMain(){this.hideAll();let t=0;try{t=Number(localStorage.getItem("fireline.xp")||0)}catch{}let e=Math.floor(Math.sqrt(t/400))+1,i=this.screen("main",`
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
        <div><b>6</b><span>maps</span></div><div><b>3</b><span>modes</span></div><div><b>31</b><span>AI soldiers</span></div><div><b>6</b><span>classes</span></div>
      </div>
      <div class="foot">Every model, texture and sound is generated in code.</div>`);i.querySelector("[data-a=play]").onclick=()=>this.showSetup(),i.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showMain()),i.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showMain()),i.querySelectorAll("button").forEach(n=>this.click(n)),i.style.display="flex"}showSetup(){this.hideAll();let t=this.app.matchConfig,e=Object.values(da),i=this.screen("setup",`
      <div class="panel wide">
        <h2>Match setup</h2>
        <div class="mapcards">${e.map(a=>`<div class="mapcard${t.map===a.id?" on":""}" data-map="${a.id}"><div class="mc-img mc-${a.id}"></div><b>${a.name}</b><span>${a.playHalf*2}m play area \xB7 ${a.biome}</span><p>${a.desc}</p></div>`).join("")}</div>
        <div class="row3">
          <label>Mode<select data-k="mode">${Object.entries(Gs).map(([a,o])=>`<option value="${a}"${t.mode===a?" selected":""}>${o.name}</option>`).join("")}</select><small class="mdesc"></small></label>
          <label>Time of day<select data-k="time"><option value="default">Map default</option>${["morning","noon","afternoon","dusk","overcast","snow","night"].map(a=>`<option value="${a}"${t.time===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Bot difficulty<select data-k="difficulty">${["recruit","regular","veteran","elite"].map(a=>`<option value="${a}"${this.app.settings.get("difficulty")===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Your team<select data-k="team"><option value="0"${t.team===0?" selected":""}>${Xe[0].name}</option><option value="1"${t.team===1?" selected":""}>${Xe[1].name}</option></select></label>
          <label>Tickets / kill limit<select data-k="tickets"><option value="0">Mode default</option><option value="150">150</option><option value="250">250</option><option value="400">400</option><option value="600">600</option></select></label>
          <label>Callsign<input data-k="name" maxlength="14" value="${t.name}"></label>
        </div>
        <div class="note">16 vs 16 \u2014 you plus 31 AI soldiers in 8 squads of four.</div>
        <div class="btnrow"><button class="btn" data-a="back">Back</button><button class="btn primary" data-a="start">Start match</button></div>
      </div>`),n=i.querySelector(".mdesc"),s=()=>{n.textContent=Gs[i.querySelector("[data-k=mode]").value].desc};s(),i.querySelector("[data-k=mode]").onchange=s,i.querySelectorAll(".mapcard").forEach(a=>a.onclick=()=>{i.querySelectorAll(".mapcard").forEach(o=>o.classList.remove("on")),a.classList.add("on"),t.map=a.dataset.map,this.app.audio.play2d("ui",{vol:.3})}),i.querySelector("[data-a=back]").onclick=()=>this.showMain(),i.querySelector("[data-a=start]").onclick=()=>{t.mode=i.querySelector("[data-k=mode]").value,t.time=i.querySelector("[data-k=time]").value,t.team=Number(i.querySelector("[data-k=team]").value),t.tickets=Number(i.querySelector("[data-k=tickets]").value),t.name=(i.querySelector("[data-k=name]").value||"You").slice(0,14),this.app.settings.set("difficulty",i.querySelector("[data-k=difficulty]").value),this.app.startMatch()},i.querySelectorAll("button").forEach(a=>this.click(a)),i.style.display="flex"}showLoading(t,e){let i=this.screens.loading;(!i||i.style.display==="none")&&(this.hideAll(),i=this.screen("loading",'<div class="loadbox"><h2>FIRE<span>LINE</span></h2><div class="lt"></div><div class="lbar"><div></div></div><div class="tip"></div></div>'),i.style.display="flex"),i.querySelector(".lt").textContent=t,i.querySelector(".lbar div").style.width=`${Math.round(e*100)}%`;let n=["Downed teammates can be revived by anyone \u2014 medics revive to full health.","Bandage [X] to stop bleeding before it drops you.","Engineers can blow holes in walls with RPGs and C4.","Suppressors keep you off the enemy minimap.","Bots react to gunfire, footsteps and muzzle flashes. Flank them.","Squad leaders press [T] on a flag to give orders.","Spawn on your squad leader or a rally point to stay in the fight."];i.dataset.tip||(i.dataset.tip=1,i.querySelector(".tip").textContent=n[Math.floor(Math.random()*n.length)])}showDeploy(t){this.hideAll();let e=this.screen("deploy",`
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
      </div>`);this.deployEl=e,this.game=t,this.buildClassUI();let i=e.querySelector(".dmap");i.onclick=n=>{let s=i.getBoundingClientRect(),a=(n.clientX-s.left)/s.width*i.width,o=(n.clientY-s.top)/s.height*i.height,l=null,c=30;for(let h of this.spawns||[]){let u=Math.hypot(h._mx-a,h._my-o);u<c&&(c=u,l=h)}l&&(this.selectedSpawn=l,this.app.audio.play2d("ui",{vol:.3}))},e.querySelector(".dbtn").onclick=()=>this.tryDeploy(),e.style.display="flex",this.selectedSpawn=null}buildClassUI(){let t=this.deployEl,e=this.loadout;t.querySelector(".classes").innerHTML=Object.entries(di).map(([u,d])=>`<button class="cls${e.cls===u?" on":""}" data-c="${u}" style="--cc:${d.color}">${T1(u)}<b>${d.name}</b></button>`).join(""),t.querySelectorAll(".cls").forEach(u=>u.onclick=()=>{e.cls=u.dataset.c;let d=ma(e.cls);d.includes(e.primary)||(e.primary=d[0],e.att=Tr(e.primary)),(e.cls==="medic"||e.cls==="leader")&&(["smoke","frag"].includes(e.throwable)||(e.throwable="smoke")),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let i=di[e.cls];t.querySelector(".cdesc").innerHTML=`<b style="color:${i.color}">${i.name}</b> \u2014 ${i.desc}${e.cls==="leader"?"<br><i>You will lead your squad. Press [T] at a flag to order it.</i>":""}`;let n=ma(e.cls);t.querySelector(".wlist").innerHTML=n.map(u=>`<button class="wbtn${e.primary===u?" on":""}" data-w="${u}"><b>${Ke[u].name}</b><span>${Ke[u].type.toUpperCase()}</span></button>`).join(""),t.querySelectorAll(".wbtn").forEach(u=>u.onclick=()=>{e.primary=u.dataset.w,e.att=Tr(e.primary),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let s=Ke[e.primary],a=(u,d)=>`<div class="stat"><span>${u}</span><div><i style="width:${Math.max(4,Math.min(100,d))}%"></i></div></div>`;t.querySelector(".wstats").innerHTML=a("Damage",s.dmg*(s.pellets||1)/1.1)+a("Fire rate",s.rpm/11)+a("Range",s.r1/4)+a("Control",100-s.recoilV*40)+a("Mobility",(s.moveMul-.8)*400)+`<div class="wnum">${s.rpm} RPM \xB7 ${s.vel} m/s \xB7 ${s.mag} rds \xB7 ${s.modes.join("/")}</div>`,t.querySelector(".atts").innerHTML=["sight","barrel","grip","rail"].map(u=>`<label>${u[0].toUpperCase()+u.slice(1)}<select data-slot="${u}">${Ah(e.primary,u).map(d=>`<option value="${d}"${e.att[u]===d?" selected":""}>${Ws[u][d].name}</option>`).join("")}</select></label>`).join(""),t.querySelectorAll(".atts select").forEach(u=>u.onchange=()=>{e.att[u.dataset.slot]=u.value,this.saveLoadout()});let o=t.querySelector("[data-k=secondary]");o.innerHTML=pa.map(u=>`<option value="${u}"${e.secondary===u?" selected":""}>${Ke[u].name}</option>`).join(""),o.onchange=()=>{e.secondary=o.value,this.saveLoadout()};let l=t.querySelector("[data-k=throwable]");l.innerHTML=qd.map(u=>`<option value="${u}"${e.throwable===u?" selected":""}>${rn[u].name}</option>`).join(""),l.onchange=()=>{e.throwable=l.value,this.saveLoadout()};let c=t.querySelector("[data-k=armor]");c.value=e.armor||"light",c.onchange=()=>{e.armor=c.value,this.saveLoadout()};let h=t.querySelector("[data-k=sbarrel]");h.value=e.satt.barrel,h.onchange=()=>{e.satt.barrel=h.value,this.saveLoadout()},t.querySelector(".gadgets").innerHTML="<h3>Class gadgets</h3>"+i.gadgets.map((u,d)=>`<div class="gad"><i>${d+3}</i>${rn[u].name}${rn[u].count!==1/0?` \xD7${rn[u].count}`:""}</div>`).join("")+`<div class="gad"><i>5</i>${rn[e.throwable].name} \xD7${i.throwables}</div><div class="gad"><i>X</i>Bandage \xD74</div>`,this.saveLoadout()}updateDeploy(t){let e=this.deployEl;if(!e||e.style.display==="none")return;let i=t.player,n=e.querySelector(".wprev");n&&((!this.preview||this.preview.canvas!==n)&&(this.preview&&this.preview.renderer&&this.preview.renderer.dispose(),this.preview=new Sa(n)),this.preview.set(this.loadout.primary,this.loadout.att),this.preview.render(1/60)),this.spawns=t.spawnOptions(i),!this.selectedSpawn||!this.spawns.find(l=>l.key===this.selectedSpawn.key)?this.selectedSpawn=this.spawns.find(l=>l.kind==="squad")||this.spawns.find(l=>l.kind==="flag")||this.spawns[0]:this.selectedSpawn=this.spawns.find(l=>l.key===this.selectedSpawn.key),t.hud.drawMap(e.querySelector(".dmap"),!0,this.spawns,this.selectedSpawn);let s=Math.max(0,t.respawnAt-t.time),a=e.querySelector(".dbtn");a.textContent=s>0?`Deploy in ${s.toFixed(1)}s`:"Deploy [Space]",a.classList.toggle("wait",s>0),e.querySelector(".dteam").textContent=Xe[i.team].name,e.querySelector(".dteam").style.color=Xe[i.team].css,e.querySelector(".dsquad").textContent=i.squad?`${i.squad.name} squad \xB7 ${t.modeName} \xB7 ${t.world.def.name}`:"",e.querySelector(".dspawn").textContent=this.selectedSpawn?`Spawn: ${this.selectedSpawn.label}`:"";let o=t.lastDeath;e.querySelector(".dkill").innerHTML=o?`${o.killer?`Killed by <b style="color:#ff6a5a">${o.killer}</b>`:"You died"} ${o.weapon?`\xB7 ${o.weapon}`:""} ${o.dist?`\xB7 ${Math.round(o.dist)}m`:""}${o.head?" \xB7 headshot":""}`:"Choose your class, loadout and spawn point.",(t.input.hit("Space")||t.input.hit("Enter")||t.input.hit("NumpadEnter"))&&this.tryDeploy()}tryDeploy(){let t=this.game;!t||t.time<t.respawnAt||!this.selectedSpawn||(this.saveLoadout(),t.deployPlayer(JSON.parse(JSON.stringify(this.loadout)),this.selectedSpawn))}showPause(t){this.hideAll();let e=this.screen("pause",`
      <div class="panel">
        <h2>Paused</h2>
        <div class="menu-col">
          <button class="btn big primary" data-a="resume">Resume</button>
          ${t.player.state!=="dead"?'<button class="btn big" data-a="redeploy">Redeploy (change class)</button>':""}
          <button class="btn big" data-a="settings">Settings</button>
          <button class="btn big" data-a="controls">Controls</button>
          <button class="btn big" data-a="quit">Leave match</button>
        </div>
      </div>`);e.querySelector("[data-a=resume]").onclick=()=>this.app.resume();let i=e.querySelector("[data-a=redeploy]");i&&(i.onclick=()=>{t.player.die(null,"Redeploy",!1,!0),this.app.resume()}),e.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showPause(t)),e.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showPause(t)),e.querySelector("[data-a=quit]").onclick=()=>this.app.quitMatch(),e.querySelectorAll("button").forEach(n=>this.click(n)),e.style.display="flex"}showSettings(t){this.hideAll();let e=this.app.settings,i='<div class="panel wide settings"><h2>Settings</h2><div class="setgrid">';for(let s of Vd){if(s.group){i+=`<h3>${s.group}</h3>`;continue}let a=e.get(s.key);s.type==="bool"?i+=`<label class="set"><span>${s.label}</span><input type="checkbox" data-k="${s.key}"${a?" checked":""}></label>`:s.type==="select"?i+=`<label class="set"><span>${s.label}${s.hint?`<small>${s.hint}</small>`:""}</span><select data-k="${s.key}">${s.options.map(o=>`<option value="${o}"${a===o?" selected":""}>${o}</option>`).join("")}</select></label>`:i+=`<label class="set"><span>${s.label}</span><input type="range" data-k="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${a}"><em>${a}</em></label>`}i+='</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>';let n=this.screen("settings",i);n.querySelectorAll("[data-k]").forEach(s=>{let a=s.dataset.k,o=s.type==="range"?"input":"change";s.addEventListener(o,()=>{let l;if(s.type==="checkbox"?l=s.checked:s.type==="range"?(l=Number(s.value),s.nextElementSibling.textContent=l):l=s.value,e.set(a,l),a==="preset"&&Hs[l]||a==="trackpadMode"&&l)this.showSettings(t);else if(a!=="preset"){let c=n.querySelector("[data-k=preset]");c&&(c.value=e.get("preset"))}})}),n.querySelector("[data-a=back]").onclick=t,n.style.display="flex"}showControls(t){this.hideAll();let e=ve.conflicts(),i='<div class="panel wide controls"><h2>Controls</h2><p class="hint">Click a key to rebind it, then press a key or mouse button. Esc cancels. Mouse wheel always cycles weapons.</p><div class="bindgrid">';for(let h of _a){if(h.group){i+=`<h3>${h.group}</h3>`;continue}let u=e.has(h.id)&&!["sprint"].includes(h.id);i+=`<div class="bind"><span>${h.label}</span><button class="key${u?" warn":""}" data-act="${h.id}" title="${u?"Shared with another action":""}">${ve.name(h.id)}</button></div>`}i+='</div><div class="btnrow"><button class="btn" data-a="reset">Reset to defaults</button><button class="btn primary" data-a="back">Done</button></div></div>';let n=this.screen("controls",i),s=null,a=()=>{window.removeEventListener("keydown",l,!0),window.removeEventListener("mousedown",c,!0),s=null},o=h=>{s&&(ve.set(s,h),a(),this.app.audio.play2d("ui",{vol:.3}),this.showControls(t))},l=h=>{if(h.preventDefault(),h.stopPropagation(),h.code==="Escape"){a(),this.showControls(t);return}o(h.code)},c=h=>{if(h.target&&h.target.classList&&h.target.classList.contains("key")&&h.target.dataset.act===s&&h.button===0&&!this._armed){this._armed=!0;return}h.preventDefault(),h.stopPropagation(),o("Mouse"+h.button)};n.querySelectorAll(".key").forEach(h=>h.addEventListener("click",()=>{s||(s=h.dataset.act,this._armed=!0,h.textContent="Press a key\u2026",h.classList.add("listen"),setTimeout(()=>{this._armed=!1,window.addEventListener("keydown",l,!0),window.addEventListener("mousedown",c,!0)},60))})),n.addEventListener("contextmenu",h=>h.preventDefault()),n.querySelector("[data-a=reset]").onclick=()=>{ve.reset(),this.showControls(t)},n.querySelector("[data-a=back]").onclick=()=>{a(),t()},n.style.display="flex"}showEnd(t,e){this.hideAll();let i=t.player,n=e===i.team,s=t.soldiers.slice().sort((p,x)=>x.stats.score-p.stats.score),a=s[0],o=s.indexOf(i)+1,l=0;try{l=Number(localStorage.getItem("fireline.xp")||0)}catch{}let c=i.stats.score+(n?500:150),h=p=>Math.floor(Math.sqrt(p/400))+1,u=h(l);l+=c;let d=h(l);try{localStorage.setItem("fireline.xp",String(l))}catch{}let f=this.screen("end",`
      <div class="panel wide">
        <h1 class="${e===-1?"draw":n?"win":"lose"}">${e===-1?"DRAW":n?"VICTORY":"DEFEAT"}</h1>
        <div class="endsub">${t.world.def.name} \xB7 ${t.modeName} \xB7 ${Xe[0].name} ${t.mode.type==="tdm"?t.mode.kills[0]:t.mode.tickets[0]} \u2014 ${t.mode.type==="tdm"?t.mode.kills[1]:t.mode.tickets[1]} ${Xe[1].name}</div>
        <div class="endstats">
          <div><b>${i.stats.score}</b><span>Score (#${o})</span></div><div><b>${i.stats.kills}</b><span>Kills</span></div><div><b>${i.stats.deaths}</b><span>Deaths</span></div>
          <div><b>${i.stats.assists}</b><span>Assists</span></div><div><b>${i.stats.revives}</b><span>Revives</span></div><div><b>${i.stats.caps}</b><span>Captures</span></div>
        </div>
        <div class="mvp">+${c} XP \xB7 Rank ${d}${d>u?' <b style="color:#ffcc4d">RANK UP!</b>':""} (${l} XP total)</div>
        <div class="mvp">MVP: <b style="color:${Xe[a.team].css}">${a.name}</b> \u2014 ${a.stats.score} pts, ${a.stats.kills} kills</div>
        <div class="btnrow"><button class="btn" data-a="menu">Main menu</button><button class="btn primary" data-a="again">Play again</button></div>
      </div>`);f.querySelector("[data-a=menu]").onclick=()=>this.app.quitMatch(),f.querySelector("[data-a=again]").onclick=()=>this.app.startMatch(),f.querySelectorAll("button").forEach(p=>this.click(p)),f.style.display="flex"}};var Ea=class{constructor(t,e){this.def=t,this.size=t.size,this.half=t.size/2,this.cell=t.cell,this.n=Math.round(t.size/t.cell)+1,this.waterLevel=t.waterLevel,this.noise=Li(t.seed),this.noise2=Li(t.seed+101),this.layout=e,this.heights=new Float32Array(this.n*this.n),this.roadMask=new Float32Array(this.n*this.n),this.riverDist=new Float32Array(this.n*this.n).fill(1e4),this.splat=new Float32Array(this.n*this.n*4),this.grass=new Uint8Array(this.n*this.n),this.generate()}idx(t,e){return e*this.n+t}worldX(t){return-this.half+t*this.cell}generate(){let{n:t,cell:e,half:i,def:n,noise:s}=this,a=this.heights;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=-i+u*e,f=-i+h*e;a[h*t+u]=n.height(d,f,s,this.noise2)}for(let h of this.layout.rivers||[]){let u=h.points;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let p=-i+f*e,x=-i+d*e,g=1e12;for(let w=0;w<u.length-1;w++){let S=Vs(p,x,u[w][0],u[w][1],u[w+1][0],u[w+1][1]);S<g&&(g=S)}let m=Math.sqrt(g)+s(p*.03,x*.03)*2.5,v=d*t+f;m<this.riverDist[v]&&(this.riverDist[v]=m);let y=h.width/2,M=h.depth;for(let w of h.fords||[]){let S=Math.hypot(p-w.x,x-w.z);S<w.r&&(M=Qt(w.depth,M,re(w.r*.5,w.r,S)))}let T;m<y?T=this.waterLevel-M*(1-m/y*(m/y))-.3:T=this.waterLevel-.3+(m-y)*h.bankSlope,T<a[v]&&(a[v]=T)}}let o=this.blur(a,4);for(let h of this.layout.roads||[]){let u=h.points,d=h.width/2,f=Math.min(...u.map(T=>T[0]))-d-8,p=Math.max(...u.map(T=>T[0]))+d+8,x=Math.min(...u.map(T=>T[1]))-d-8,g=Math.max(...u.map(T=>T[1]))+d+8,m=Math.max(0,Math.floor((f+i)/e)),v=Math.min(t-1,Math.ceil((p+i)/e)),y=Math.max(0,Math.floor((x+i)/e)),M=Math.min(t-1,Math.ceil((g+i)/e));for(let T=y;T<=M;T++)for(let w=m;w<=v;w++){let S=-i+w*e,C=-i+T*e,_=1e12;for(let U=0;U<u.length-1;U++){let O=Vs(S,C,u[U][0],u[U][1],u[U+1][0],u[U+1][1]);O<_&&(_=O)}let b=Math.sqrt(_),A=1-re(d*.7,d+1.5,b),z=T*t+w;A>this.roadMask[z]&&(this.roadMask[z]=A);let L=1-re(d,d+7,b);this.riverDist[z]>3&&(a[z]=Qt(a[z],o[z]-.08*A,L*.85))}}for(let h of this.layout.flatZones||[]){let u=h.h!==void 0?h.h:this.sampleAvg(a,h.x,h.z,h.hw,h.hd);h.h=u;let d=h.margin||4,f=Math.max(0,Math.floor((h.x-h.hw-d+i)/e)),p=Math.min(t-1,Math.ceil((h.x+h.hw+d+i)/e)),x=Math.max(0,Math.floor((h.z-h.hd-d+i)/e)),g=Math.min(t-1,Math.ceil((h.z+h.hd+d+i)/e));for(let m=x;m<=g;m++)for(let v=f;v<=p;v++){let y=-i+v*e,M=-i+m*e,T=Math.max(0,Math.abs(y-h.x)-h.hw),w=Math.max(0,Math.abs(M-h.z)-h.hd),S=Math.sqrt(T*T+w*w),C=1-re(0,d,S),_=m*t+v;a[_]=Qt(a[_],u,C*(h.strength??1)),h.noGrass&&S<1.5&&(this.grass[_]=255)}}this.computeNormals(),this.computeSplat();let l=-1/0,c=1/0;for(let h=0;h<a.length;h++)a[h]>l&&(l=a[h]),a[h]<c&&(c=a[h]);this.maxH=l,this.minH=c}blur(t,e){let{n:i}=this,n=new Float32Array(t.length),s=new Float32Array(t.length);for(let a=0;a<i;a++){let o=0,l=0;for(let c=-e;c<=e;c++){let h=Nt(c,0,i-1);o+=t[a*i+h],l++}for(let c=0;c<i;c++){n[a*i+c]=o/l;let h=Nt(c-e,0,i-1),u=Nt(c+e+1,0,i-1);o+=t[a*i+u]-t[a*i+h]}}for(let a=0;a<i;a++){let o=0,l=0;for(let c=-e;c<=e;c++){let h=Nt(c,0,i-1);o+=n[h*i+a],l++}for(let c=0;c<i;c++){s[c*i+a]=o/l;let h=Nt(c-e,0,i-1),u=Nt(c+e+1,0,i-1);o+=n[u*i+a]-n[h*i+a]}}return s}sampleAvg(t,e,i,n,s){let a=0,o=0;for(let l=-s;l<=s;l+=Math.max(1,s/3))for(let c=-n;c<=n;c+=Math.max(1,n/3))a+=this.heightAtArr(t,e+c,i+l),o++;return a/o}heightAtArr(t,e,i){let{n,cell:s,half:a}=this,o=(e+a)/s,l=(i+a)/s;o=Nt(o,0,n-1.001),l=Nt(l,0,n-1.001);let c=Math.floor(o),h=Math.floor(l),u=o-c,d=l-h,f=t[h*n+c],p=t[h*n+c+1],x=t[(h+1)*n+c],g=t[(h+1)*n+c+1];return(f*(1-u)+p*u)*(1-d)+(x*(1-u)+g*u)*d}heightAt(t,e){return this.heightAtArr(this.heights,t,e)}computeNormals(){let{n:t,cell:e}=this,i=this.heights;this.normals=new Float32Array(t*t*3);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let a=i[n*t+Math.max(0,s-1)],o=i[n*t+Math.min(t-1,s+1)],l=i[Math.max(0,n-1)*t+s],c=i[Math.min(t-1,n+1)*t+s],h=a-o,u=2*e,d=l-c,f=Math.hypot(h,u,d),p=(n*t+s)*3;this.normals[p]=h/f,this.normals[p+1]=u/f,this.normals[p+2]=d/f}}normalAt(t,e){let{n:i,cell:n,half:s}=this,a=Nt(Math.round((t+s)/n),0,i-1),l=(Nt(Math.round((e+s)/n),0,i-1)*i+a)*3;return[this.normals[l],this.normals[l+1],this.normals[l+2]]}computeSplat(){let{n:t,cell:e,half:i,def:n}=this;for(let s=0;s<t;s++)for(let a=0;a<t;a++){let o=s*t+a,l=-i+a*e,c=-i+s*e,h=this.heights[o],u=1-this.normals[o*3+1],d=this.grass[o]===255,f=n.splat(l,c,h,u,this.roadMask[o],this.riverDist[o],this.noise,d),p=f[0]+f[1]+f[2]+f[3]||1;this.splat[o*4]=f[0]/p,this.splat[o*4+1]=f[1]/p,this.splat[o*4+2]=f[2]/p,this.splat[o*4+3]=f[3]/p;let x=n.grassDensity(l,c,h,u,this.roadMask[o],this.riverDist[o],this.noise,f);d&&(x=0),this.waterLevel!==null&&h<this.waterLevel+.3&&(x=0),this.grass[o]=Nt(Math.round(x*255),0,254)}}raycast(t,e,i,n,s,a,o){if(e>this.maxH&&s>=0)return 1/0;let l=Math.max(.5,this.cell*.5),c=0,h=0,u=e-this.heightAt(t,i);if(u<0)return 0;for(;c<o;){c=Math.min(o,c+l);let d=t+n*c,f=e+s*c,p=i+a*c;if(f>this.maxH+.1&&s>=0)return 1/0;let x=f-this.heightAt(d,p);if(x<0){let g=h,m=c;for(let v=0;v<6;v++){let y=(g+m)*.5;e+s*y-this.heightAt(t+n*y,i+a*y)<0?m=y:g=y}return g}if(h=c,u=x,c>=o)break}return 1/0}buildMesh(t){let{n:e,cell:i,half:n,def:s}=this,a=new fe;a.name="terrain";let o=s.terrainTextures.map(si),l=si("noise"),c=new de({color:16777215,roughness:.95,metalness:0}),h={uT0:{value:o[0]},uT1:{value:o[1]},uT2:{value:o[2]},uT3:{value:o[3]},uNoise:{value:l},uTint0:{value:new dt().setRGB(...s.palette.t0)},uTint1:{value:new dt().setRGB(...s.palette.t1)},uTint2:{value:new dt().setRGB(...s.palette.t2)},uTint3:{value:new dt().setRGB(...s.palette.t3)},uMacro:{value:new dt().setRGB(...s.palette.macro)}};jn(c,"terrain",p=>{Object.assign(p.uniforms,h),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= tcol;`)}),c.userData.terrainUniforms=h,this.material=c;let u=48,d=e-1;for(let p=0;p<d;p+=u)for(let x=0;x<d;x+=u){let g=Math.min(u,d-x),m=Math.min(u,d-p),v=(g+1)*(m+1),y=new Float32Array(v*3),M=new Float32Array(v*3),T=new Float32Array(v*4),w=0;for(let A=0;A<=m;A++)for(let z=0;z<=g;z++){let L=x+z,U=p+A,O=U*e+L;y[w*3]=-n+L*i,y[w*3+1]=this.heights[O],y[w*3+2]=-n+U*i,M[w*3]=this.normals[O*3],M[w*3+1]=this.normals[O*3+1],M[w*3+2]=this.normals[O*3+2],T[w*4]=this.splat[O*4],T[w*4+1]=this.splat[O*4+1],T[w*4+2]=this.splat[O*4+2],T[w*4+3]=this.splat[O*4+3],w++}let S=new Uint32Array(g*m*6),C=0;for(let A=0;A<m;A++)for(let z=0;z<g;z++){let L=A*(g+1)+z,U=L+1,O=L+(g+1),N=O+1;z+A&1?(S[C++]=L,S[C++]=O,S[C++]=U,S[C++]=U,S[C++]=O,S[C++]=N):(S[C++]=L,S[C++]=O,S[C++]=N,S[C++]=L,S[C++]=N,S[C++]=U)}let _=new pe;_.setAttribute("position",new ue(y,3)),_.setAttribute("normal",new ue(M,3)),_.setAttribute("splat",new ue(T,4)),_.setIndex(new ue(S,1)),_.computeBoundingBox(),_.computeBoundingSphere();let b=new Ot(_,c);b.receiveShadow=!0,b.castShadow=!0,a.add(b)}t.add(a),this.mesh=a;let f=new Uint16Array(e*e);for(let p=0;p<e*e;p++)f[p]=Dd.toHalfFloat(this.heights[p]);return this.heightTex=new Hi(f,e,e,Fs,Te),this.heightTex.minFilter=this.heightTex.magFilter=Ze,this.heightTex.needsUpdate=!0,this.grassTex=new Hi(this.grass,e,e,Fs,hi),this.grassTex.minFilter=this.grassTex.magFilter=Ze,this.grassTex.needsUpdate=!0,a}renderMapImage(t=512,e){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),s=n.createImageData(t,t),a=s.data,o=this.def.mapColors;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let h=-this.half+(c+.5)/t*this.size,u=-this.half+(l+.5)/t*this.size,d=this.heightAt(h,u),f=Math.round((h+this.half)/this.cell),p=Math.round((u+this.half)/this.cell),x=Nt(p,0,this.n-1)*this.n+Nt(f,0,this.n-1),g=[this.splat[x*4],this.splat[x*4+1],this.splat[x*4+2],this.splat[x*4+3]],m=0,v=0,y=0;for(let C=0;C<4;C++)m+=o[C][0]*g[C],v+=o[C][1]*g[C],y+=o[C][2]*g[C];let M=this.heightAt(h+2,u)-this.heightAt(h-2,u),T=this.heightAt(h,u+2)-this.heightAt(h,u-2),w=Nt(1-(M*.5+T*.5)*.12,.6,1.35);if(m*=w,v*=w,y*=w,this.waterLevel!==null&&d<this.waterLevel){let C=Nt((this.waterLevel-d)/4,0,1);m=Qt(90,40,C),v=Qt(130,85,C),y=Qt(150,120,C)}let S=(l*t+c)*4;a[S]=Nt(m,0,255),a[S+1]=Nt(v,0,255),a[S+2]=Nt(y,0,255),a[S+3]=255}if(n.putImageData(s,0,0),e){let l=t/this.size;for(let c of e)n.fillStyle=c.color||"rgba(70,64,58,0.9)",n.fillRect((c.minX+this.half)*l,(c.minZ+this.half)*l,Math.max(1,(c.maxX-c.minX)*l),Math.max(1,(c.maxZ-c.minZ)*l))}return i}};var Aa=class r{constructor(t){this.terrain=t,this.half=t.half,this.dim=Math.ceil(t.size/4),this.cells=new Array(this.dim*this.dim);for(let e=0;e<this.cells.length;e++)this.cells[e]=[];this.boxes=[],this.stamp=1,this.softOccluders=[],this.softGrid=null}cellIndex(t,e){let i=Math.floor((t+this.half)/4),n=Math.floor((e+this.half)/4);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}addBox(t){t.id=this.boxes.length,t.alive=!0,t._stamp=0,this.boxes.push(t);let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let o=e;o<=i;o++)this.cells[a*this.dim+o].push(t);return t}removeBox(t){if(!t.alive)return;t.alive=!1;let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let o=e;o<=i;o++){let l=this.cells[a*this.dim+o],c=l.indexOf(t);c>=0&&(l[c]=l[l.length-1],l.pop())}}query(t,e,i,n,s){let a=++this.stamp,o=Math.max(0,Math.floor((t+this.half)/4)),l=Math.min(this.dim-1,Math.floor((i+this.half)/4)),c=Math.max(0,Math.floor((e+this.half)/4)),h=Math.min(this.dim-1,Math.floor((n+this.half)/4));for(let u=c;u<=h;u++)for(let d=o;d<=l;d++){let f=this.cells[u*this.dim+d];for(let p=0;p<f.length;p++){let x=f[p];if(x._stamp!==a&&(x._stamp=a,!(x.maxX<t||x.minX>i||x.maxZ<e||x.minZ>n)&&s(x)===!1))return}}}static rayBox(t,e,i,n,s,a,o,l){let c=(o.minX-t)*n,h=(o.maxX-t)*n,u=Math.min(c,h),d=Math.max(c,h),f=0;c=(o.minY-e)*s,h=(o.maxY-e)*s;let p=Math.min(c,h),x=Math.max(c,h);return p>u&&(u=p,f=1),x<d&&(d=x),c=(o.minZ-i)*a,h=(o.maxZ-i)*a,p=Math.min(c,h),x=Math.max(c,h),p>u&&(u=p,f=2),x<d&&(d=x),d<0||u>d||u>l?null:[u,d,f]}raycast(t,e,i,n,s,a,o,l=null){let c=1/(n||1e-9),h=1/(s||1e-9),u=1/(a||1e-9),d=o,f=null,p=0,x=0,g=++this.stamp,m=l&&l.ignore,v=Math.floor((t+this.half)/4),y=Math.floor((i+this.half)/4),M=n>0?1:-1,T=a>0?1:-1,w=(v+(M>0?1:0))*4-this.half,S=(y+(T>0?1:0))*4-this.half,C=Math.abs(n)<1e-9?1/0:(w-t)/n,_=Math.abs(a)<1e-9?1/0:(S-i)/a,b=Math.abs(n)<1e-9?1/0:4/Math.abs(n),A=Math.abs(a)<1e-9?1/0:4/Math.abs(a),z=0;for(let j=0;j<2e3;j++){if(v>=0&&y>=0&&v<this.dim&&y<this.dim){let lt=this.cells[y*this.dim+v];for(let et=0;et<lt.length;et++){let Rt=lt[et];if(Rt._stamp===g||(Rt._stamp=g,m&&m(Rt)))continue;let Y=r.rayBox(t,e,i,c,h,u,Rt,d);Y&&Y[0]>=0&&Y[0]<d?(d=Y[0],f=Rt,p=Y[2],x=Y[1]):Y&&Y[0]<0&&Y[1]>0&&0<d&&!(l&&l.skipInside)&&(d=0,f=Rt,p=Y[2],x=Y[1])}}if(z=Math.min(C,_),z>d||(C<_?(C+=b,v+=M):(_+=A,y+=T),v<-1&&M<0||v>this.dim&&M>0||y<-1&&T<0||y>this.dim&&T>0))break}let L=1/0;if((!l||l.terrain!==!1)&&(L=this.terrain.raycast(t,e,i,n,s,a,d)),L<d){let j=t+n*L,lt=e+s*L,et=i+a*L,Rt=this.terrain.normalAt(j,et);return{t:L,x:j,y:lt,z:et,nx:Rt[0],ny:Rt[1],nz:Rt[2],box:null,thickness:99}}if(!f)return null;let U=t+n*d,O=e+s*d,N=i+a*d,q=0,F=0,X=0;return p===0?q=n>0?-1:1:p===1?F=s>0?-1:1:X=a>0?-1:1,{t:d,x:U,y:O,z:N,nx:q,ny:F,nz:X,box:f,thickness:x-d}}los(t,e,i,n,s,a,o){let l=n-t,c=s-e,h=a-i,u=Math.sqrt(l*l+c*c+h*h);return u<.01?!0:!this.raycast(t,e,i,l/u,c/u,h/u,u-.05,o)}addSoft(t){if(!this.softGrid){this.softDim=Math.ceil(this.terrain.size/16),this.softGrid=new Array(this.softDim*this.softDim);for(let a=0;a<this.softGrid.length;a++)this.softGrid[a]=[]}let e=Math.max(0,Math.floor((t.x-t.r+this.half)/16)),i=Math.min(this.softDim-1,Math.floor((t.x+t.r+this.half)/16)),n=Math.max(0,Math.floor((t.z-t.r+this.half)/16)),s=Math.min(this.softDim-1,Math.floor((t.z+t.r+this.half)/16));t._s=0;for(let a=n;a<=s;a++)for(let o=e;o<=i;o++)this.softGrid[a*this.softDim+o].push(t)}addDynamicSoft(t){this.softOccluders.push(t)}static _softTest(t,e,i,n,s,a,o,l,c){let h=t.x-e,u=t.y-i,d=t.z-n,f=(h*s+u*a+d*o)/l;if(f<0||f>1)return!1;let p=e+s*f-t.x,x=i+a*f-t.y,g=n+o*f-t.z,m=t.r*(t.grow?t.grow(c):1);return p*p+x*x+g*g<m*m}softVisibility(t,e,i,n,s,a,o){let l=1,c=n-t,h=s-e,u=a-i,d=c*c+h*h+u*u;if(d<1e-6)return 1;for(let m=this.softOccluders.length-1;m>=0;m--){let v=this.softOccluders[m];if(v.until&&v.until<o){this.softOccluders.splice(m,1);continue}if(r._softTest(v,t,e,i,c,h,u,d,o)&&(l*=1-v.strength,l<.02))return 0}if(!this.softGrid)return l;let f=++this.stamp,p=Math.sqrt(d),x=Math.ceil(p/8)+1,g=-1;for(let m=0;m<=x;m++){let v=m/x,y=t+c*v,M=i+u*v,T=Math.floor((y+this.half)/16),w=Math.floor((M+this.half)/16);if(T<0||w<0||T>=this.softDim||w>=this.softDim)continue;let S=w*this.softDim+T;if(S===g)continue;g=S;let C=this.softGrid[S];for(let _=0;_<C.length;_++){let b=C[_];if(b._s!==f&&(b._s=f,r._softTest(b,t,e,i,c,h,u,d,o)&&(l*=1-b.strength,l<.02)))return 0}}return l}groundAt(t,e,i,n=.25){let s=this.terrain.heightAt(t,e);return this.query(t-n,e-n,t+n,e+n,a=>{a.maxY<=i+.05&&a.maxY>s&&!a.noStand&&(s=a.maxY)}),s}move(t,e,i,n,s,a,o){o.hitWall=!1,o.ceiling=!1,o.stepped=!1;let l=o.grounded;for(let f=0;f<2;f++){let p=(f===0?e.x:e.z)*i;p!==0&&(f===0?t.x+=p:t.z+=p,this._resolveHorizontal(t,n,s,f,p,a,l,o))}t.y+=e.y*i,o.grounded=!1;let c=this.terrain.heightAt(t.x,t.z),h=c,u=1/0;this.query(t.x-n,t.z-n,t.x+n,t.z+n,f=>{f.noCollide||t.x+n<=f.minX||t.x-n>=f.maxX||t.z+n<=f.minZ||t.z-n>=f.maxZ||(f.maxY<=t.y+.35+(e.y<0?-e.y*i:0)?f.maxY>h&&(h=f.maxY):f.minY>=t.y+s*.5&&f.minY<u&&(u=f.minY))}),t.y+s>u&&e.y>0&&(t.y=u-s,e.y=0,o.ceiling=!0),t.y<=h+.001?(t.y=h,e.y<0&&(e.y=0),o.grounded=!0):l&&e.y<=0&&t.y-h<a*.9&&(t.y=h,e.y=0,o.grounded=!0),o.groundY=h,o.onTerrain=h===c;let d=this.half-2;return t.x<-d&&(t.x=-d),t.x>d&&(t.x=d),t.z<-d&&(t.z=-d),t.z>d&&(t.z=d),o}_resolveHorizontal(t,e,i,n,s,a,o,l){let c=0,h=!0;for(;h&&c++<4;){h=!1;let u=null;if(this.query(t.x-e,t.z-e,t.x+e,t.z+e,d=>{if(!d.noCollide&&!(t.x+e<=d.minX||t.x-e>=d.maxX||t.z+e<=d.minZ||t.z-e>=d.maxZ)&&!(d.maxY<=t.y+.02||d.minY>=t.y+i))return u=d,!1}),!u)break;if(o&&u.maxY-t.y<=a){let d=u.maxY;if(!this.overlapsAny(t.x,d+.01,t.z,e,i)){t.y=d,l.stepped=!0,h=!0;continue}}l.hitWall=!0,n===0?t.x=s>0?u.minX-e-.001:u.maxX+e+.001:t.z=s>0?u.minZ-e-.001:u.maxZ+e+.001,h=!0}}overlapsAny(t,e,i,n,s){let a=!1;return this.query(t-n,i-n,t+n,i+n,o=>{if(!o.noCollide&&!(t+n<=o.minX||t-n>=o.maxX||i+n<=o.minZ||i-n>=o.maxZ)&&!(o.maxY<=e||o.minY>=e+s))return a=!0,!1}),a}};var Rr={wood:{hp:70,pen:.35,tex:"wood",scale:.55,rough:.9,debris:9071176,sound:"wood"},plaster:{hp:170,pen:.8,tex:"plaster",scale:.35,rough:.95,debris:13617339,sound:"stone"},brick:{hp:280,pen:2,tex:"brick",scale:.5,rough:.92,debris:10514522,sound:"stone"},concrete:{hp:420,pen:3,tex:"concrete",scale:.25,rough:.9,debris:11118496,sound:"stone"},metal:{hp:160,pen:.55,tex:"metal",scale:.5,rough:.55,metal:.35,debris:9409430,sound:"metal"},container:{hp:3e3,pen:.9,tex:"metal",scale:.4,rough:.6,metal:.3,debris:8022618,sound:"metal"},sand:{hp:260,pen:6,tex:"sandbag",scale:1,rough:1,debris:12100474,sound:"dirt"},hay:{hp:45,pen:.6,tex:"hay",scale:.6,rough:1,debris:13808746,sound:"dirt"},cloth:{hp:25,pen:.05,tex:"cloth",scale:.8,rough:1,debris:13421772,sound:"dirt"},stone:{hp:340,pen:4,tex:"rock",scale:.45,rough:.95,debris:9407364,sound:"stone"}},A1=3,Ca=class{constructor(t){this.world=t,this.coll=t.collision,this.terrain=t.terrain,this.pieces=[],this.byCat={},this.decor=[],this.footprints=[],this.meshes={},this.rng=We(t.def.seed*7+3)}piece(t,e,i,n,s,a,o,l={}){let c=Rr[t],h={minX:Math.min(e,s),minY:Math.min(i,a),minZ:Math.min(n,o),maxX:Math.max(e,s),maxY:Math.max(i,a),maxZ:Math.max(n,o),cat:t,mat:t,color:l.color??16777215,hp:(l.hp??c.hp)*(l.hpMul||1),destructible:l.destructible!==!1,navFloor:!!l.navFloor,vault:!!l.vault,pen:c.pen,noCollide:!!l.noCollide,noStand:!!l.noStand,below:[],above:[],inst:-1,grounded:l.grounded!==!1,building:l.building||null};return h.maxHp=h.hp,this.coll.addBox(h),this.pieces.push(h),(this.byCat[t]=this.byCat[t]||[]).push(h),h}frame(t,e,i,n){let s=this,a=(o,l)=>{switch(i&3){case 0:return[t+o,e+l];case 1:return[t-l,e+o];case 2:return[t-o,e-l];default:return[t+l,e-o]}};return{tf:a,y0:n,box(o,l,c,h,u,d,f,p){let[x,g]=a(l,h),[m,v]=a(u,f);return s.piece(o,x,n+c,g,m,n+d,v,p)},decor(o,l,c,h,u=0){let[d,f]=a(l,h);o.rotateY(-(i&3)*Math.PI/2+u),o.translate(d,n+c,f),s.decor.push(o)}}}wall(t,e,i,n,s,a,o,l,c,h={}){let u=h.thick||.3,d=[],f=(m,v,y,M)=>{if(v-m<.05||M-y<.05)return null;let T;return i==="x"?T=t.box(e,m,y,n-u/2,v,M,n+u/2,{color:c,building:h.building,hpMul:h.hpMul}):T=t.box(e,n-u/2,y,m,n+u/2,M,v,{color:c,building:h.building,hpMul:h.hpMul}),T._a0=m,T._a1=v,T._y0=y,T._y1=M,d.push(T),T},p=(m,v,y,M,T=1)=>{let w=Math.max(1,Math.round((v-m)/1.5)),S=(M-y)/T;for(let C=0;C<T;C++)for(let _=0;_<w;_++)f(y+C*S,y+(C+1)*S,m+(v-m)*_/w,m+(v-m)*(_+1)/w)},x=o+l,g=s;for(let m=0;m<a.length;m++){let v=a[m],y=g,M=g+2;if(v==="solid")p(o,x,y,M,2);else if(v==="window")p(o,o+1,y,M,2),f(y,y+.4,o+1,o+2.2),f(M-.4,M,o+1,o+2.2),p(o+2.2,x,y,M,1);else if(v==="slit")p(o,o+1.25,y,M,2),f(y,y+.3,o+1.25,o+1.65),f(M-.3,M,o+1.25,o+1.65),p(o+1.65,x,y,M,1);else if(v==="door")p(o,o+2.3,y,y+.3,1),p(o,o+2.3,M-.3,M,1),p(o+2.3,x,y,M,1);else if(v==="wide"){let T=g+4,w=Math.min(l-.6,4.2);p(o,o+w,y,y+.3,1),p(o,o+w,T-.3,T,1),p(o+w,x,y,T,2),g+=4;continue}g+=2}for(let m of d){if(m._y0<=o+.01){m.grounded=!0;continue}m.grounded=!1;for(let v of d)v!==m&&Math.abs(v._y1-m._y0)<.02&&v._a1>m._a0+.05&&v._a0<m._a1-.05&&(m.below.push(v),v.above.push(m));m.below.length===0&&(m.grounded=!0)}return d}storey(t,e,i,n,s,a,o,l,c){this.wall(t,e,"x",-n,-i,l.n,s,a,o,c),this.wall(t,e,"x",n,-i,l.s,s,a,o,c),this.wall(t,e,"z",-i,-n,l.w,s,a,o,c),this.wall(t,e,"z",i,-n,l.e,s,a,o,c)}randomMods(t,e,i,n=.55,s="door"){let a=[];for(let o=0;o<t;o++)a.push(i()<n?"window":"solid");return e!=null&&e>=0&&e<t&&(a[e]=s),a}footprint(t,e,i,n,s,a){let o=i&1,l=o?s:n,c=o?n:s,h={minX:t-l,maxX:t+l,minZ:e-c,maxZ:e+c,color:a};return this.footprints.push(h),h}building(t,e,i,n=0,s={}){let a=this.rng,o=s.y??this.terrain.heightAt(e,i),l={type:t,cx:e,cz:i,rot:n};switch(t){case"house":return this.house(e,i,n,o,Object.assign({w:5,d:4,floors:1},s),l);case"house2":return this.house(e,i,n,o,Object.assign({w:5,d:4,floors:2},s),l);case"shop":return this.house(e,i,n,o,Object.assign({w:4,d:4,floors:a()<.45?2:1,flat:!0,cat:"plaster"},s),l);case"barn":return this.barn(e,i,n,o,s,l);case"warehouse":return this.warehouse(e,i,n,o,s,l);case"shed":return this.house(e,i,n,o,Object.assign({w:2,d:2,floors:1,cat:"wood",H:2.8,noInterior:!0,winP:.3,color:10518624},s),l);case"bunker":return this.house(e,i,n,o,Object.assign({w:3,d:3,floors:1,cat:"concrete",H:2.7,flat:!0,slits:!0,noInterior:!0,color:12104872},s),l);case"church":return this.church(e,i,n,o,s,l);case"ruin":return this.house(e,i,n,o,Object.assign({w:4,d:4,floors:1,ruin:!0,noRoof:!0,flat:!0},s),l);case"pumphouse":return this.house(e,i,n,o,Object.assign({w:4,d:3,floors:1,cat:"concrete",H:3.6,flat:!0,noInterior:!0,color:13091509},s),l);default:throw new Error("unknown building "+t)}}house(t,e,i,n,s,a){let o=this.rng,l=this.frame(t,e,i,n),c=s.w,h=s.d,u=c,d=h,f=s.H||A1,p=s.cat||(o()<.3?"brick":"plaster"),x=s.palette||(p==="brick"?[14203040,13213834,14731444]:this.world.def.wallColors),g=s.color??x[Math.floor(o()*x.length)],m=s.floors,v={building:a};this.footprint(t,e,i,u,d),l.box("concrete",-u,-.6,-d,u,.12,d,{destructible:!1,navFloor:!0,color:10328722});for(let y=0;y<m;y++){let M=y*f+(y>0?.12:-.15),T=y>0?f-.12:f+.15,w=y===0?Math.floor(c/2):-1,S=y===0&&o()<.6?Math.floor(o()*c):-1,C=y===0&&!s.noSideDoor&&o()<.35?Math.floor(h/2):-1,_=s.winP??.55,b={n:this.randomMods(c,w,o,_),s:this.randomMods(c,S,o,_),e:this.randomMods(h,C,o,_),w:this.randomMods(h,-1,o,_)};if(s.slits)for(let A of["n","s","e","w"])b[A]=b[A].map(z=>(z==="window"||z==="solid")&&o()<.6?"slit":z);if(this.storey(l,p,u,d,M,T,g,b,v),y===0&&m===1&&c>=4&&!s.noInterior){let A=o()<.5?2:c-2,z=[];for(let L=0;L<h;L++)z.push("solid");z[Math.floor(o()*h)]="door",this.wall(l,"plaster","z",-u+A*2,-d+.15,z,M,T,15131094,Object.assign({thick:.2},v))}}if(m>1){let T=(f+.12-.12)/12,w=-u+.3,S=d-1.25,C=d-.16;for(let b=0;b<12;b++)l.box("wood",w+b*.28,.12,S,w+(b+1)*.28,.12+T*(b+1),C,{destructible:!1,color:9136970});let _=w+12*.28+.05;for(let b=1;b<m;b++){let A=b*f;l.box("concrete",-u,A-.05,-d,u,A+.12,S-.05,{destructible:!1,color:11117722}),l.box("concrete",_,A-.05,S-.05,u,A+.12,d,{destructible:!1,color:11117722})}}if(!s.noRoof){let y=m*f;if(l.box("concrete",-u-.2,y,-d-.2,u+.2,y+.25,d+.2,{destructible:!1,color:s.flat?12169893:9341572,noStand:!1}),!s.flat&&!this.world.def.flatRoofs){let M=this.world.def.roofColors[Math.floor(o()*this.world.def.roofColors.length)],w=c>=h?P.prism(c*2+.6,Math.min(h,4)*.55,h*2+.6,M):P.prism(h*2+.6,Math.min(c,4)*.55,c*2+.6,M,0,0,0,Math.PI/2);l.decor(w,0,y+.25,0)}else l.decor(P.box(u*2+.4,.35,.2,11051153,0,.17,0),0,y+.25,-d-.1),l.decor(P.box(u*2+.4,.35,.2,11051153,0,.17,0),0,y+.25,d+.1),l.decor(P.box(.2,.35,d*2+.4,11051153,0,.17,0),-u-.1,y+.25,0),l.decor(P.box(.2,.35,d*2+.4,11051153,0,.17,0),u+.1,y+.25,0)}if(s.ruin){for(let y of this.pieces.slice(-200))y.building===a&&y.destructible&&y.minY>n+.5&&this.rng()<.45&&(y.alive=!1,this.coll.removeBox(y),y.ruined=!0);this.prop("rubble",t+1.5,e-1.5,0)}if(!s.ruin&&c>=3&&this.rng()<.7){let[y,M]=l.tf(u-1.2,-d+1.2);this.prop("crate",y,M,0,{y:n+.12,size:.9})}return a}barn(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=s.w||6,c=s.d||5,h=l,u=c,d=s.H||5.5,f=s.color??10111546;this.footprint(t,e,i,h,u),o.box("concrete",-h,-.6,-u,h,.08,u,{destructible:!1,navFloor:!0,color:9273456});let p=Math.floor(l/2)-1,x=(g,m)=>{let v=[];for(let y=0;y<g;y++)y===m?(v.push("wide"),y++):v.push(this.rng()<.2?"window":"solid");return v};this.storey(o,"wood",h,u,-.15,d+.15,f,{n:x(l,p),s:x(l,p),e:x(c,-1),w:this.randomMods(c,Math.floor(c/2),this.rng,.2)},{building:a,thick:.25}),o.box("wood",-h-.3,d,-u-.3,h+.3,d+.2,u+.3,{destructible:!1,color:7032896}),o.decor(P.prism(l*2+.8,3.2,c*2+.8,6115656),0,d+.2,0);for(let g=0;g<4;g++){let[m,v]=o.tf(-h+1.5+this.rng()*(h*2-3),(this.rng()<.5?-1:1)*(u-1.4));this.prop("hay",m,v,this.rng()<.5?0:1,{y:n+.08})}return a}warehouse(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=s.w||10,c=s.d||6,h=l,u=c,d=s.H||7,f=s.cat||"metal",p=s.color??(f==="wood"?9400916:[11121592,12037010,10135450][Math.floor(this.rng()*3)]);this.footprint(t,e,i,h,u),o.box("concrete",-h,-.6,-u,h,.1,u,{destructible:!1,navFloor:!0,color:10131343});let x=(y,M,T)=>{let w=[];for(let S=0;S<y;S++)S===M||S===T?(w.push("wide"),S++):w.push("solid");return w},g=Math.floor(c/2),m=[];for(let y=0;y<c;y++)m.push(y===g?"door":this.rng()<.25?"window":"solid");let v=m.slice();v[g]=this.rng()<.5?"door":"solid",this.storey(o,f,h,u,-.15,d+.15,p,{n:x(l,1,l-3),s:x(l,Math.floor(l/2)-1,-9),e:m,w:v},{building:a,thick:.2}),o.box("metal",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:7831428}),o.decor(P.prism(l*2+.6,1.4,c*2+.6,7305084),0,d+.25,0);for(let y=0;y<6;y++){let[M,T]=o.tf(-h+2+this.rng()*(h*2-4),-u+2.5+this.rng()*(u*2-5));this.prop(this.rng()<.4?"crateStack":"crate",M,T,0,{y:n+.1})}return a}church(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=5,c=9,h=l,u=c,d=6.5,f=14275267;this.footprint(t,e,i,h,u+4),o.box("concrete",-h,-.6,-u,h,.12,u,{destructible:!1,navFloor:!0,color:10131086});let p=[];for(let v=0;v<c;v++)p.push(v%2?"window":"solid");p[2]="door";let x=["solid","solid","door","solid","solid"];this.storey(o,"brick",h,u,-.15,d+.15,f,{n:x,s:["solid","window","solid","window","solid"],e:p,w:p.slice().reverse()},{building:a,thick:.4}),o.box("concrete",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:8220260}),o.decor(P.prism(c*2+.6,4.2,l*2+.6,7232076,0,0,0,Math.PI/2),0,d+.25,0);let g=-u-2,m=this.frame(...o.tf(0,g),i,n);return m.box("concrete",-2,-.6,-2,2,.12,2,{destructible:!1,navFloor:!0,color:10131086}),this.storey(m,"brick",2,2,-.15,14.15,f,{n:["door","solid"],s:["solid","solid"],e:["solid","solid"],w:["solid","solid"]},{building:a,thick:.4}),m.box("concrete",-2.2,14,-2.2,2.2,14.3,2.2,{destructible:!1,color:8220260}),m.decor(P.pyramid(4.6,5,5983298),0,14.3,0),m.decor(P.box(.15,1.6,.15,4473924,0,.8,0),0,19.3,0),m.decor(P.box(.8,.15,.15,4473924,0,0,0),0,20.4,0),a}prop(t,e,i,n=0,s={}){let a=this.rng,o=s.y??this.terrain.heightAt(e,i),l=this.frame(e,i,n,o);switch(t){case"crate":{let c=s.size||1.2;l.box("wood",-c/2,0,-c/2,c/2,c,c/2,{color:s.color??[11570527,10255186,8227418][Math.floor(a()*3)],hp:60});break}case"crateStack":{l.box("wood",-1.2,0,-.6,0,1.2,.6,{color:11044438}),l.box("wood",0,0,-.6,1.2,1.2,.6,{color:10255186});let c=l.box("wood",-.6,1.2,-.6,.6,2.4,.6,{color:11570527});c.grounded=!1;break}case"container":{let c=[10173231,3104651,4160074,12159534,8224125,9129775],h=s.color??c[Math.floor(a()*c.length)],u=l.box("container",-1.22,0,-3.03,1.22,2.6,3.03,{color:h,destructible:!1});if(s.stack){let d=l.box("container",-1.22,2.6,-3.03,1.22,5.2,3.03,{color:c[Math.floor(a()*c.length)],destructible:!1});d.grounded=!1}this.footprint(e,i,n,1.22,3.03,"rgba(90,80,70,0.9)");break}case"sandbags":{let c=s.n||2;for(let h=0;h<c;h++)l.box("sand",-c/2+h,0,-.3,-c/2+h+1,.95,.3,{color:16777215,vault:!0});break}case"sandbagRing":{for(let c=-2;c<2;c++)l.box("sand",c,0,-1.6,c+1,1,-1,{vault:!0});for(let c=-1;c<1;c++)l.box("sand",-2.3,0,c,-1.7,1,c+1,{vault:!0}),l.box("sand",1.7,0,c,2.3,1,c+1,{vault:!0});break}case"hesco":{let c=s.n||3;for(let h=0;h<c;h++)l.box("sand",-c*.55+h*1.1,0,-.55,-c*.55+(h+1)*1.1,1.3,.55,{color:13153418,hpMul:2.2});break}case"jersey":{let c=s.n||1;for(let h=0;h<c;h++)l.box("concrete",-c+h*2,0,-.28,-c+(h+1)*2-.05,.85,.28,{color:12894390,vault:!0});break}case"fence":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("wood",-c+h*2,u,-.05,-c+(h+1)*2,u+1.05,.05,{color:9072208,hp:30,vault:!0})}break}case"stoneWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("stone",-c+h*2,u-.2,-.3,-c+(h+1)*2,u+1,.3,{color:12433066,vault:!0})}break}case"compoundWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("plaster",-c+h*2,u-.3,-.2,-c+h*2+1,u+2.3,.2,{color:s.color??14272420}),l.box("plaster",-c+h*2+1,u-.3,-.2,-c+(h+1)*2,u+2.3,.2,{color:s.color??14272420})}break}case"hay":l.box("hay",-.6,0,-.8,.6,1.1,.8,{color:16777215});break;case"haystack":{l.box("hay",-1.2,0,-.8,0,1.1,.8,{}),l.box("hay",0,0,-.8,1.2,1.1,.8,{});let c=l.box("hay",-.6,1.1,-.8,.6,2.2,.8,{});c.grounded=!1;break}case"car":{let c=[7158322,4872810,8024674,6187850,9080724,4013376],h=s.color??c[Math.floor(a()*c.length)];l.box("metal",-.9,.25,-2.1,.9,1.05,2.1,{color:h,destructible:!1}),l.box("metal",-.8,1.05,-1,.8,1.6,.9,{color:h,destructible:!1});for(let[u,d]of[[-.85,-1.3],[.85,-1.3],[-.85,1.3],[.85,1.3]])l.decor(P.cyl(.36,.36,.25,8,1907997,0,0,0,0,0,Math.PI/2),u,.36,d);l.decor(P.box(1.5,.45,.06,2766144,0,0,0,-.5),0,1.33,-1.05),this.footprint(e,i,n,.9,2.1,"rgba(60,60,60,0.9)");break}case"waterTower":{for(let[c,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])l.box("wood",c-.15,0,h-.15,c+.15,6,h+.15,{destructible:!1,color:7035464});l.box("wood",-1.8,6,-1.8,1.8,6.25,1.8,{destructible:!1,color:7035464}),l.decor(P.cyl(1.7,1.7,3.2,10,8350293),0,7.85,0),l.decor(P.cone(1.9,1,10,5918016),0,9.95,0);break}case"radioTower":{let c=s.h||42,h=[[-2.5,-2.5],[2.5,-2.5],[-2.5,2.5],[2.5,2.5]],u=[];for(let[d,f]of h)l.box("metal",d-.2,0,f-.2,d+.2,3,f+.2,{destructible:!1,color:11549230}),u.push(P.box(.18,c,.18,12105912,d*.5,c/2,f*.5,f*.05,0,-d*.05));for(let d=4;d<c;d+=4){let f=2.5*(1-d/c*.55),p=d/4%2?12599344:15263976;u.push(P.box(f*2,.12,.12,p,0,d,-f)),u.push(P.box(f*2,.12,.12,p,0,d,f)),u.push(P.box(.12,.12,f*2,p,-f,d,0)),u.push(P.box(.12,.12,f*2,p,f,d,0))}u.push(P.box(.6,.6,.6,16724e3,0,c+.3,0)),l.decor(P.merge(u),0,0,0);break}case"stall":{let c=[12077626,3832504,14198842,4889178][Math.floor(a()*4)];for(let[h,u]of[[-1.4,-1],[1.4,-1],[-1.4,1],[1.4,1]])l.box("wood",h-.06,0,u-.06,h+.06,2.4,u+.06,{color:6967872,hp:40});l.box("cloth",-1.6,2.4,-1.2,1.6,2.5,1.2,{color:c,noStand:!0,grounded:!1}),l.box("wood",-1.3,0,-.5,1.3,.9,.3,{color:9071178,vault:!0});break}case"logs":{for(let c=0;c<3;c++)l.box("wood",-2.5,c*.5,-1.2+c*.25,2.5,(c+1)*.5,1.2-c*.25,{color:8018490,vault:c===0});break}case"tank":{l.box("metal",-1.6,0,-1.6,1.6,3.4,1.6,{color:s.color??14210248,destructible:!1,noCollide:!1}),l.decor(P.cyl(1.75,1.75,.3,12,10132122),0,3.5,0);break}case"pipe":{let c=s.len||10;l.box("metal",-c/2,.3,-.35,c/2,1,.35,{color:9080724,destructible:!1,vault:!0});break}case"pier":{let c=s.len||30,h=s.w||6,u=(s.deckY??1.6)-o;l.box("concrete",-h/2,u-.8,0,h/2,u,c,{destructible:!1,navFloor:!0,color:11578530});for(let d=4;d<c;d+=8)for(let f of[-h/2+.4,h/2-.4])l.box("concrete",f-.3,u-8,d-.3,f+.3,u-.8,d+.3,{destructible:!1,color:9407362});for(let d=3;d<c;d+=6)l.decor(P.cyl(.18,.22,.5,6,3355443),h/2-.4,u+.25,d);this.footprint(e,i,n,h/2,c/2,"rgba(150,145,135,0.9)");break}case"bridge":{let c=s.len||40,h=s.w||8,u=(s.deckY??3)-o;l.box("concrete",-h/2,u-.7,-c/2,h/2,u,c/2,{destructible:!1,navFloor:!0,color:11117979});for(let d of[-h/2+.15,h/2-.15])l.box("concrete",d-.15,u,-c/2,d+.15,u+.9,c/2,{destructible:!1,color:12236202});for(let d=-c/2+8;d<c/2-4;d+=10)l.box("concrete",-h/2+.5,u-9,d-.6,h/2-.5,u-.7,d+.6,{destructible:!1,color:9209983});break}case"tent":{let c=s.color??7040590;l.box("cloth",-2,0,-2.5,-1.9,1.6,2.5,{color:c}),l.box("cloth",1.9,0,-2.5,2,1.6,2.5,{color:c}),l.box("cloth",-2,0,2.4,2,1.6,2.5,{color:c}),l.decor(P.prism(5.2,1.3,4.2,c),0,1.6,0);break}case"grave":l.box("stone",-.3,0,-.08,.3,.75,.08,{color:11117722,vault:!0});break;case"barrels":{for(let c=0;c<(s.n||3);c++)l.box("metal",-.9+c*.65,0,-.3,-.3+c*.65,.95,.3,{color:[3824266,9058858,4876858][c%3],hp:80});break}case"watchtower":{for(let[c,h]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])l.box("wood",c-.12,0,h-.12,c+.12,5,h+.12,{destructible:!1,color:7035464});l.box("wood",-1.6,4.8,-1.6,1.6,5,1.6,{destructible:!1,color:8021584});for(let c of[-1,1])l.box("wood",-1.6,5,c*1.55-.05,1.6,6,c*1.55+.05,{color:9074272,grounded:!1}),l.box("wood",c*1.55-.05,5,-1.6,c*1.55+.05,6,1.6,{color:9074272,grounded:!1});l.decor(P.pyramid(3.6,1.2,5917242),0,7.4,0);for(let[c,h]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])l.decor(P.box(.1,1.4,.1,7035464,0,.7,0),c,6,h);for(let c=0;c<9;c++)l.box("wood",-.4,.5*c,1.7,.4,.5*c+.08,1.95,{destructible:!1,color:7035464,noCollide:!1});break}case"rubble":{for(let c=0;c<4;c++)l.decor(P.dodeca(.4+a()*.5,10787984,0,0,0,1.4,.5,1.1),(a()-.5)*3,.1,(a()-.5)*3);break}case"chimney":{let c=s.h||24;l.box("brick",-1.6,-.5,-1.6,1.6,c,1.6,{destructible:!1,color:s.color??11037266}),l.decor(P.box(3.8,.6,3.8,6965818,0,0,0),0,c+.3,0),l.decor(P.box(3.4,.4,3.4,2236962,0,0,0),0,c+.8,0);for(let h=4;h<c;h+=6)l.decor(P.box(3.5,.3,3.5,9067076,0,0,0),0,h,0);this.footprint(e,i,n,1.6,1.6,"rgba(120,80,60,0.95)");break}case"platform":{let c=s.len||30,h=s.w||5;l.box("concrete",-c/2,-.6,-h/2,c/2,.42,h/2,{destructible:!1,navFloor:!0,color:11907238}),l.decor(P.box(c,.06,.3,14204992,0,0,0),0,.45,h/2-.2);for(let u=-c/2+6;u<c/2;u+=12)l.box("metal",u-.1,.42,-.1,u+.1,3.4,.1,{destructible:!1,color:5595242});l.box("metal",-c/2,3.4,-h/2+.5,c/2,3.55,h/2-.5,{destructible:!1,color:6976636,noStand:!0}),this.footprint(e,i,n,c/2,h/2,"rgba(160,155,145,0.95)");break}case"fountain":{for(let c=0;c<8;c++){let h=c/8*Math.PI*2,u=Math.cos(h)*3.2,d=Math.sin(h)*3.2;l.box("stone",u-1.3,0,d-.35,u+1.3,.75,d+.35,{color:13156528,vault:!0})}l.box("stone",-.5,0,-.5,.5,2.2,.5,{destructible:!1,color:12432546}),l.decor(P.cyl(1.2,1,.3,10,12432546),0,2.3,0),l.decor(P.cyl(2.9,2.9,.1,16,4881034),0,.4,0);break}case"traincar":{let c=s.color??[8010282,3824234,5921354][Math.floor(a()*3)];l.box("container",-1.4,.9,-7,1.4,4,7,{color:c,destructible:!1}),l.box("metal",-1.2,.3,-6.5,1.2,.9,6.5,{color:2763306,destructible:!1});for(let h of[-5,-3.6,3.6,5])for(let u of[-.75,.75])l.decor(P.cyl(.45,.45,.2,8,1907997,0,0,0,0,0,Math.PI/2),u,.45,h);this.footprint(e,i,n,1.4,7,"rgba(110,70,60,0.95)");break}case"rails":{let c=s.len||100;l.decor(P.box(.12,.12,c,5921370,0,0,0),-.75,.06,0),l.decor(P.box(.12,.12,c,5921370,0,0,0),.75,.06,0);for(let h=-c/2;h<c/2;h+=1.2)l.decor(P.box(2.4,.08,.25,5916214,0,0,0),0,.02,h);break}case"pole":l.box("wood",-.12,0,-.12,.12,8,.12,{destructible:!1,color:5917242}),l.decor(P.box(1.8,.12,.12,5917242),0,7.4,0);break;case"crane":{for(let[c,h]of[[-4,-1.5],[4,-1.5],[-4,1.5],[4,1.5]])l.box("metal",c-.3,0,h-.3,c+.3,14,h+.3,{destructible:!1,color:14196778});l.decor(P.box(9,1.2,4,14196778,0,0,0),0,14.6,0),l.decor(P.box(26,.8,1.2,14196778,0,0,0),9,15.8,0),l.decor(P.box(.08,9,.08,2236962,0,0,0),18,11,0);break}default:throw new Error("unknown prop "+t)}}finalize(t){let e=new ui(1,1,1);e.deleteAttribute("uv");let i=new Et,n=new dt,s=new Ie,a=new R,o=new R;this.byCat.sand||(this.byCat.sand=[]);for(let l of Object.keys(this.byCat)){let c=this.byCat[l],h=Rr[l],u=new de({color:16777215,roughness:h.rough,metalness:h.metal||0});Rh(u,h.tex,h.scale,1);let d=l==="sand"?160:0,f=new yi(e,u,c.length+d);for(let p=c.length;p<c.length+d;p++)f.setMatrixAt(p,new Et().makeScale(0,0,0)),f.setColorAt(p,n.set(16777215));d&&(this.spareNext=c.length,this.spareMax=c.length+d),f.castShadow=!0,f.receiveShadow=!0;for(let p=0;p<c.length;p++){let x=c[p];x.inst=p,x.mesh=f,x.alive?(o.set((x.minX+x.maxX)/2,(x.minY+x.maxY)/2,(x.minZ+x.maxZ)/2),a.set(x.maxX-x.minX,x.maxY-x.minY,x.maxZ-x.minZ),i.compose(o,s,a)):i.makeScale(0,0,0),f.setMatrixAt(p,i),n.set(x.color),f.setColorAt(p,n)}f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.computeBoundingSphere(),t.add(f),this.meshes[l]=f}if(this.decor.length){let l=P.merge(this.decor),c=new de({vertexColors:!0,roughness:.9});Rh(c,"roof",.6,.6);let h=new Ot(l,c);h.castShadow=!0,h.receiveShadow=!0,t.add(h),this.decorMesh=h,this.decor=[]}}addSandbag(t,e,i,n){let s=this.meshes.sand;if(!s||this.spareNext+2>this.spareMax)return!1;let o=(Math.round(n/(Math.PI/2))%4+4)%4%2===0,l=new Et,c=new Ie,h=new R,u=new R;for(let d=0;d<2;d++){let f=-1+d,p=o?this.piece("sand",t+f,e-.1,i-.3,t+f+1,e+.95,i+.3,{vault:!0}):this.piece("sand",t-.3,e-.1,i+f,t+.3,e+.95,i+f+1,{vault:!0});p.inst=this.spareNext++,p.mesh=s,u.set((p.minX+p.maxX)/2,(p.minY+p.maxY)/2,(p.minZ+p.maxZ)/2),h.set(p.maxX-p.minX,p.maxY-p.minY,p.maxZ-p.minZ),l.compose(u,c,h),s.setMatrixAt(p.inst,l),this.world.nav&&this.world.nav.markDirty(p)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),!0}hidePiece(t){if(t.inst<0||!t.mesh)return;let e=new Et().makeScale(0,0,0);t.mesh.setMatrixAt(t.inst,e),t.mesh.instanceMatrix.needsUpdate=!0}damagePiece(t,e,i,n){return!t.alive||!t.destructible||(t.hp-=e,t.hp>0)?!1:(this.destroyPiece(t,i,n),!0)}destroyPiece(t,e,i,n=0){if(t.alive&&(this.coll.removeBox(t),this.hidePiece(t),e&&e.pieceDestroyed(t,i),this.world.nav&&this.world.nav.markDirty(t),n<12))for(let s of t.above)!s.alive||s.grounded||s.below.every(a=>!a.alive)&&setTimeout(()=>this.destroyPiece(s,e,"collapse",n+1),60+Math.random()*120)}explode(t,e,i,n,s,a){let o=[];this.coll.query(t-n,i-n,t+n,i+n,c=>{c.destructible&&c.alive&&o.push(c)});let l=0;for(let c of o){let h=Math.max(c.minX,Math.min(t,c.maxX)),u=Math.max(c.minY,Math.min(e,c.maxY)),d=Math.max(c.minZ,Math.min(i,c.maxZ)),f=Math.hypot(h-t,u-e,d-i);if(f>n)continue;let p=s*(1-f/n)*(1-f/n*.5);this.damagePiece(c,p,a,"explosion")&&l++}return l}};function C1(r,t){switch(r){case"pine":return P.merge([P.cyl(.16,.28,3.2,6,5915186,0,1.6,0),P.cone(2.4,3.4,7,3103278,0,3.6,0,.12),P.cone(1.85,2.9,7,3499317,0,5.4,0,.12),P.cone(1.2,2.4,7,3960889,0,7,0,.12)]);case"oak":return P.merge([P.cyl(.24,.36,3.6,6,6178356,0,1.8,0),P.ico(2.3,0,5208626,0,4.9,0,1,.85,1,.15,.15),P.ico(1.7,0,5932600,1.3,4.2,.6,1,.9,1,.15,.2),P.ico(1.6,0,4616236,-1.2,4.4,-.7,1,.9,1,.15,.2),P.ico(1.4,0,6130746,.2,6,-.4,1,.9,1,.15,.2)]);case"birch":return P.merge([P.cyl(.12,.18,5.5,5,15131350,0,2.75,0),P.ico(1.4,0,8298570,0,5.6,0,1,1.3,1,.15,.15),P.ico(1,0,9219669,.6,4.6,.3,1,1.2,1,.15,.2)]);case"palm":{let e=[],i=0,n=0;for(let s=0;s<6;s++)e.push(P.cyl(.17,.22,1.25,6,s%2?9073748:8021064,i,n+.62,0,0,0,-.06*s)),i+=.08*s,n+=1.2;for(let s=0;s<7;s++){let a=s/7*Math.PI*2,o=P.box(.5,.06,3.2,6261306,0,0,1.5,-.35,0,0);o.rotateY(a),o.translate(i,n,0),e.push(o)}return e.push(P.ico(.4,0,6967344,i,n,0)),P.merge(e)}case"acacia":return P.merge([P.cyl(.14,.24,3.4,5,6968384,0,1.7,0,0,0,.12),P.cyl(.1,.14,1.6,5,6968384,.5,3.4,0,0,0,-.5),P.ico(2.6,0,8030786,.3,4.3,0,1.2,.32,1.1,.12,.2),P.ico(1.8,0,7307323,-1.2,4,.5,1.1,.3,1,.12,.2)]);case"snowpine":return P.merge([P.cyl(.16,.28,3.2,6,4864556,0,1.6,0),P.cone(2.4,3.4,7,2770486,0,3.6,0,.1),P.cone(2,1.2,7,15659766,0,4.7,0,.04),P.cone(1.85,2.9,7,3034170,0,5.4,0,.1),P.cone(1.5,1,7,15659766,0,6.3,0,.04),P.cone(1.2,2.4,7,3297854,0,7,0,.1),P.cone(.75,1.1,7,16054266,0,7.75,0,.04)]);case"shrub":return P.merge([P.ico(1,0,8224072,0,.6,0,1.3,.75,1.2,.18,.25),P.ico(.7,0,9079376,.6,.5,.3,1,.8,1,.18,.25)])}}var R1={snowpine:.3,pine:.3,oak:.38,birch:.2,palm:.25,acacia:.25,shrub:0},P1={snowpine:[4.8,2.2],pine:[4.8,2.2],oak:[4.9,2.6],birch:[5.2,1.4],palm:[7.2,2.2],acacia:[4.2,2.4],shrub:[.7,1.1]},Ra=class{constructor(t){this.world=t,this.meshes=[]}build(t,e){let{terrain:i,collision:n,def:s}=this.world,a=We(s.seed+999),o=Li(s.seed+5),l=s.playHalf+30,c=(b,A,z=2)=>{for(let U of e.fps)if(b>U.minX-z&&b<U.maxX+z&&A>U.minZ-z&&A<U.maxZ+z)return!0;if(e.roadDist(b,A)<1.5||e.riverDist(b,A)<2)return!0;for(let U of e.noTree)if((b-U.x)**2+(A-U.z)**2<U.r*U.r)return!0;let L=i.heightAt(b,A);return i.waterLevel!==null&&L<i.waterLevel+.6||i.normalAt(b,A)[1]<.8},h=s.trees.types,u=s.trees.weights,d=()=>{let b=a(),A=0;for(let z=0;z<h.length;z++)if(A+=u[z],b<A)return h[z];return h[0]},f={};for(let b of h)f[b]=[];let p=(b,A,z)=>{let L=.75+a()*.6,U=i.heightAt(A,z)-.15;f[b].push([A,U,z,a()*Math.PI*2,L]);let O=R1[b]*L;O>0&&n.addBox({minX:A-O,maxX:A+O,minZ:z-O,maxZ:z+O,minY:U-.5,maxY:U+5*L,mat:"wood",cat:"tree",destructible:!1,pen:3,noStand:!0});let[N,q]=P1[b];n.addSoft({x:A,y:U+N*L,z,r:q*L,strength:b==="shrub"?.6:.5})};for(let[b,A,z]of e.forests||[]){let L=Math.floor(z*z*Math.PI/70);for(let U=0;U<L;U++){let O=a()*Math.PI*2,N=Math.sqrt(a())*z*(.8+.3*o(Math.cos(O)*2,Math.sin(O)*2)),q=b+Math.cos(O)*N,F=A+Math.sin(O)*N;c(q,F,2.5)||p(d(),q,F)}}let x=(l*2)**2,g=Math.floor(x*s.trees.scatter);for(let b=0;b<g;b++){let A=(a()-.5)*l*2,z=(a()-.5)*l*2;o(A/120,z/120)<-.1||c(A,z,3)||p(d(),A,z)}let m=new Et,v=new Ie,y=new R,M=new R,T=new R(0,1,0);for(let b of h){let A=f[b];if(!A.length)continue;let z=C1(b,s.biome),L=new de({vertexColors:!0,roughness:.9,flatShading:!0});Ph(L,b==="palm"?.025:.018,1.5,1.2);let U=new yi(z,L,A.length);A.forEach(([O,N,q,F,X],j)=>{v.setFromAxisAngle(T,F),y.set(O,N,q),M.set(X,X*(.9+j%5*.05),X),m.compose(y,v,M),U.setMatrixAt(j,m)}),U.castShadow=!0,U.receiveShadow=!0,U.computeBoundingSphere(),t.add(U),this.meshes.push(U),this.windMats=(this.windMats||[]).concat(L)}this.treeCount=h.reduce((b,A)=>b+f[A].length,0);let w=Math.floor(x*s.trees.bush),S=[];for(let b=0;b<w;b++){let A=(a()-.5)*l*2,z=(a()-.5)*l*2;c(A,z,1.5)||S.push([A,i.heightAt(A,z)-.1,z,a()*6.28,.7+a()*.8])}for(let[b,A,z]of e.forests||[])for(let L=0;L<z*.8;L++){let U=a()*Math.PI*2,O=b+Math.cos(U)*z*(1+a()*.2),N=A+Math.sin(U)*z*(1+a()*.2);c(O,N,1.5)||S.push([O,i.heightAt(O,N)-.1,N,a()*6.28,.8+a()*.7])}if(S.length){let b=s.biome==="arid"?[8223304,9078352]:s.biome==="winter"?[5925468,14673644]:[4616238,5603386],A=P.merge([P.ico(1,0,b[0],0,.55,0,1.3,.8,1.2,.2,.3),P.ico(.75,0,b[1],.55,.75,.25,1,.9,1,.2,.3),P.ico(.7,0,b[0],-.5,.5,-.3,1,.8,1,.2,.3)]),z=new de({vertexColors:!0,roughness:.95,flatShading:!0});Ph(z,.05,.2,1.8);let L=new yi(A,z,S.length);S.forEach(([U,O,N,q,F],X)=>{v.setFromAxisAngle(T,q),y.set(U,O,N),M.set(F,F,F),m.compose(y,v,M),L.setMatrixAt(X,m),n.addSoft({x:U,y:O+.7*F,z:N,r:1.15*F,strength:.65})}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),t.add(L),this.meshes.push(L)}let C=Math.floor(x*s.trees.rock),_=[];for(let b=0;b<C;b++){let A=(a()-.5)*l*2,z=(a()-.5)*l*2,L=!1;for(let q of e.fps)if(A>q.minX-2&&A<q.maxX+2&&z>q.minZ-2&&z<q.maxZ+2){L=!0;break}if(L||e.roadDist(A,z)<1.5)continue;let U=i.heightAt(A,z);if(i.waterLevel!==null&&U<i.waterLevel-1)continue;let O=1-i.normalAt(A,z)[1];if(a()>.35+O*3)continue;let N=.5+Math.pow(a(),2.5)*3.2;_.push([A,U-N*.3,z,a()*6.28,N])}if(_.length){let b=s.biome==="arid"?11048314:s.biome==="winter"?10133670:9276036,A=P.merge([P.dodeca(1,b,0,0,0,1.2,.75,1,.15),P.dodeca(.6,b,.7,-.1,.3,1,.8,1,.15)]),z=new de({vertexColors:!0,roughness:.95,flatShading:!0});jn(z,"rock",()=>{});let L=new yi(A,z,_.length);_.forEach(([U,O,N,q,F],X)=>{if(v.setFromAxisAngle(T,q),y.set(U,O,N),M.set(F,F,F),m.compose(y,v,M),L.setMatrixAt(X,m),F>.9){let j=F*.9;n.addBox({minX:U-j,maxX:U+j,minZ:N-j,maxZ:N+j,minY:O-F,maxY:O+F*.62+F*.3,mat:"stone",cat:"rock",destructible:!1,pen:9,vault:F*.92<1.25})}}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),t.add(L),this.meshes.push(L)}this.rockCount=_.length}setWind(t){Vi.uWind.value=t?1:0}},Pa=class{constructor(t,e){this.world=t,this.scene=e,this.mesh=null,this.level="off"}setLevel(t){if(t===this.level||(this.level=t,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null),t==="off"))return;let e={low:[120,.7],medium:[190,.52],high:[260,.42]}[t],[i,n]=e,s=this.world.terrain,a=this.world.def,o=[],l=[],c=[],h=new dt(a.grassColor[0]),u=new dt(a.grassColor[1]),d=new dt(a.grassColor[2]);for(let m=0;m<4;m++){let v=m/4*Math.PI*2+.4,y=Math.cos(v*1.7)*.12,M=Math.sin(v*1.3)*.12,T=Math.cos(v),w=Math.sin(v),S=.04,C=.24+m%2*.1,_=.09,b=-w*S,A=T*S,z=[[y-b,0,M-A],[y+b,0,M+A],[y+T*_*.4+b*.6,C*.55,M+w*_*.4+A*.6],[y-b,0,M-A],[y+T*_*.4+b*.6,C*.55,M+w*_*.4+A*.6],[y+T*_*.4-b*.6,C*.55,M+w*_*.4-A*.6],[y+T*_*.4-b*.6,C*.55,M+w*_*.4-A*.6],[y+T*_*.4+b*.6,C*.55,M+w*_*.4+A*.6],[y+T*_,C,M+w*_]],L=[h,h,u,h,u,u,u,u,d];for(let U=0;U<9;U++)o.push(...z[U]),l.push(L[U].r,L[U].g,L[U].b),c.push(0,1,0)}let f=new pe;f.setAttribute("position",new Kt(o,3)),f.setAttribute("color",new Kt(l,3)),f.setAttribute("normal",new Kt(c,3));let p=new de({vertexColors:!0,roughness:1,side:Pe}),x={uCenter:{value:new R},uCam:{value:new R},uSpacing:{value:n},uN:{value:i},uHeight:{value:s.heightTex},uMask:{value:s.grassTex},uSize:{value:s.size},uHalf:{value:s.half},uTexN:{value:s.n},uRadius:{value:i*n*.5}};this.uniforms=x,jn(p,"grass",m=>{Object.assign(m.uniforms,x),m.uniforms.uTime=Vi.uTime,m.uniforms.uWind=Vi.uWind,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
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
          transformed += vec3(wp.x, gh - 0.03, wp.y);`)});let g=new yi(f,p,i*i);g.frustumCulled=!1,g.castShadow=!1,g.receiveShadow=!0,this.mesh=g,this.scene.add(g)}update(t){if(!this.mesh)return;let e=this.uniforms.uSpacing.value;this.uniforms.uCenter.value.set(Math.round(t.x/e)*e,0,Math.round(t.z/e)*e),this.uniforms.uCam.value.copy(t)}};var qs=1,Jn=2,Qn=4,ff=8,pf=16,mf=Math.SQRT2,ts=class{constructor(t){this.world=t,this.terrain=t.terrain,this.coll=t.collision,this.size=Math.floor(this.terrain.size),this.half=this.terrain.half,this.dim=this.size;let e=this.dim*this.dim;this.flags=new Uint8Array(e),this.floor=new Float32Array(e),this.cover=new Uint8Array(e),this.g=new Float32Array(e),this.parent=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.curStamp=1,this.heap=new ha(4096),this.dirty=[],this.build()}cellOf(t,e){let i=Math.floor(t+this.half),n=Math.floor(e+this.half);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}cx(t){return t%this.dim-this.half+.5}cz(t){return Math.floor(t/this.dim)-this.half+.5}build(){let{dim:t}=this;for(let e=0;e<t;e++)for(let i=0;i<t;i++)this.evalCell(e*t+i);this.computeCover(0,0,t-1,t-1)}evalCell(t){let e=this.cx(t),i=this.cz(t),n=this.terrain,s=n.heightAt(e,i),a=s,o=0,l=.2;this.coll.query(e-.05,i-.05,e+.05,i+.05,c=>{c.navFloor&&c.maxY>a&&c.maxY<s+12&&e>c.minX&&e<c.maxX&&i>c.minZ&&i<c.maxZ&&(a=c.maxY)}),this.coll.query(e-l,i-l,e+l,i+l,c=>{c.noCollide||c.navFloor||e+l<=c.minX||e-l>=c.maxX||i+l<=c.minZ||i-l>=c.maxZ||c.maxY<=a+.45||c.minY>=a+1.75||(c.vault&&c.maxY<=a+1.25?o|=Jn:o|=qs)}),a===s&&(n.normalAt(e,i)[1]<.72&&(o|=ff),n.waterLevel!==null&&s<n.waterLevel-.4&&(o|=Qn,s<n.waterLevel-1.3&&(o|=pf))),this.flags[t]=o,this.floor[t]=a}computeCover(t,e,i,n){let{dim:s}=this,a=2;for(let o=Math.max(0,e);o<=Math.min(s-1,n);o++)for(let l=Math.max(0,t);l<=Math.min(s-1,i);l++){let c=o*s+l;if(this.flags[c]&qs){this.cover[c]=0;continue}let h=0;for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){let f=l+d,p=o+u;f<0||p<0||f>=s||p>=s||this.flags[p*s+f]&(qs|Jn)&&h++}this.cover[c]=Math.min(255,h*20)}}markDirty(t){this.dirty.push(t)}processDirty(){if(!this.dirty.length)return;let t=this.dirty;this.dirty=[];for(let e of t){let i=Math.floor(e.minX+this.half)-1,n=Math.floor(e.maxX+this.half)+1,s=Math.floor(e.minZ+this.half)-1,a=Math.floor(e.maxZ+this.half)+1;for(let o=Math.max(0,s);o<=Math.min(this.dim-1,a);o++)for(let l=Math.max(0,i);l<=Math.min(this.dim-1,n);l++)this.evalCell(o*this.dim+l);this.computeCover(i-2,s-2,n+2,a+2)}}walkable(t){return t>=0&&!(this.flags[t]&(qs|ff))}isBlocked(t){return t<0||(this.flags[t]&qs)!==0}isVault(t){return t>=0&&(this.flags[t]&Jn)!==0}isWater(t){return t>=0&&(this.flags[t]&Qn)!==0}cost(t,e){let i=this.flags[t],n=1;if(i&Jn&&(n+=4),i&Qn&&(n+=i&pf?14:4),e&&e.coverBias&&(n+=(1-this.cover[t]/255)*e.coverBias),e&&e.avoid){let s=this.cx(t),a=this.cz(t);for(let o of e.avoid){let l=s-o.x,c=a-o.z,h=l*l+c*c;h<o.r*o.r&&(n+=o.w*(1-h/(o.r*o.r)))}}return n}nearestWalkable(t,e,i=6){let n=this.cellOf(t,e);if(this.walkable(n))return n;let s=Math.floor(t+this.half),a=Math.floor(e+this.half);for(let o=1;o<=i;o++)for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){if(Math.abs(c)!==o&&Math.abs(l)!==o)continue;let h=s+c,u=a+l;if(h<0||u<0||h>=this.dim||u>=this.dim)continue;let d=u*this.dim+h;if(this.walkable(d))return d}return-1}findPath(t,e,i,n,s={}){let a=this.nearestWalkable(t,e,4),o=this.nearestWalkable(i,n,8);if(a<0||o<0)return null;if(a===o)return[[i,n]];let{dim:l}=this,c=s.maxNodes||4e4,h=s.weight||1.35,u=++this.curStamp,d=this.heap;d.clear();let f=o%l,p=Math.floor(o/l),x=A=>{let z=Math.abs(A%l-f),L=Math.abs(Math.floor(A/l)-p);return(z+L+(mf-2)*Math.min(z,L))*h};this.g[a]=0,this.stamp[a]=u,this.parent[a]=-1,d.push(a,x(a));let g=a,m=x(a),v=0,y=!1;for(;d.size;){let A=d.pop();if(this.closed[A]===u)continue;if(this.closed[A]=u,A===o){y=!0;break}if(++v>c)break;let z=A%l,L=(A-z)/l,U=this.g[A];for(let O=0;O<8;O++){let N=O<4?[1,-1,0,0][O]:[1,1,-1,-1][O-4],q=O<4?[0,0,1,-1][O]:[1,-1,1,-1][O-4],F=z+N,X=L+q;if(F<0||X<0||F>=l||X>=l)continue;let j=X*l+F;if(!this.walkable(j)||this.closed[j]===u||Math.abs(this.floor[j]-this.floor[A])>.9&&!(this.flags[j]&Jn)||O>=4&&(!this.walkable(L*l+F)||!this.walkable(X*l+z)))continue;let lt=U+(O<4?1:mf)*this.cost(j,s);if(this.stamp[j]!==u||lt<this.g[j]){this.stamp[j]=u,this.g[j]=lt,this.parent[j]=A;let et=x(j);d.push(j,lt+et),et<m&&(m=et,g=j)}}}let M=y?o:g;if(M===a)return null;let T=[],w=M,S=0;for(;w!==-1&&S++<1e5&&(T.push(w),w!==a);)w=this.parent[w];T.reverse();let C=[],_=0;C.push([this.cx(T[0]),this.cz(T[0])]);let b=1;for(;b<T.length;){let A=b;for(let z=b;z<Math.min(T.length,_+60)&&this.lineWalkable(T[_],T[z]);z++)A=z;C.push([this.cx(T[A]),this.cz(T[A])]),_=A,b=A+1}return y&&(C[C.length-1]=[i,n]),C.partial=!y,C}lineWalkable(t,e){let{dim:i}=this,n=t%i,s=Math.floor(t/i),a=e%i,o=Math.floor(e/i),l=Math.abs(a-n),c=Math.abs(o-s),h=n<a?1:-1,u=s<o?1:-1,d=l-c,f=this.floor[t];for(let p=0;p<400;p++){let x=s*i+n;if(!this.walkable(x)||this.flags[x]&(Jn|Qn)||Math.abs(this.floor[x]-f)>1.2)return!1;if(n===a&&s===o)return!0;let g=2*d;if(g>-c&&g<l&&(!this.walkable(s*i+n+h)||!this.walkable((s+u)*i+n)))return!1;g>-c&&(d-=c,n+=h),g<l&&(d+=l,s+=u)}return!1}findCover(t,e,i,n,s={}){let a=[],o=Math.ceil(n),l=Math.floor(t+this.half),c=Math.floor(e+this.half),{dim:h}=this,u=[];for(let p=-o;p<=o;p+=1)for(let x=-o;x<=o;x+=1){let g=x*x+p*p;if(g>o*o)continue;let m=l+x,v=c+p;if(m<1||v<1||m>=h-1||v>=h-1)continue;let y=v*h+m;!this.walkable(y)||this.cover[y]<30||this.flags[y]&Qn||u.push([y,g])}u.sort((p,x)=>x[0]%7-p[0]%7+(p[1]-x[1])*.02);let d=s.maxTests||28,f=0;for(let[p,x]of u){if(f++>d)break;let g=this.cx(p),m=this.cz(p),v=this.floor[p];if(!!this.coll.los(g,v+.95,m,i.x,i.y,i.z))continue;let M=this.coll.los(g,v+1.6,m,i.x,i.y,i.z),T=i.x-g,w=i.z-m,S=Math.hypot(T,w);if(s.minThreatDist&&S<s.minThreatDist)continue;let C=null;if(!M&&S>.1){let b=-w/S,A=T/S;for(let z of[1,-1]){let L=g+b*z*.6,U=m+A*z*.6;if(this.coll.los(L,v+1.5,U,i.x,i.y,i.z)&&this.coll.los(g,v+1.5,m,L,v+1.5,U)){C={x:b*z,z:A*z};break}}}let _=(M?3:C?2.7:1)-Math.sqrt(x)*.12+this.cover[p]/255;s.prefer&&(_-=Math.hypot(g-s.prefer.x,m-s.prefer.z)*.04),s.occupied&&s.occupied(g,m)&&(_-=4),a.push({x:g,z:m,y:v,peek:M,lean:C,score:_})}return a.sort((p,x)=>x.score-p.score),a}randomWalkableNear(t,e,i,n=Math.random){for(let a=0;a<20;a++){let o=n()*Math.PI*2,l=Math.sqrt(n())*i,c=this.cellOf(t+Math.cos(o)*l,e+Math.sin(o)*l);if(this.walkable(c)&&!(this.flags[c]&Qn))return[this.cx(c),this.cz(c),this.floor[c]]}let s=this.nearestWalkable(t,e,10);return s>=0?[this.cx(s),this.cz(s),this.floor[s]]:[t,e,this.terrain.heightAt(t,e)]}};ts.BLOCKED=qs;ts.VAULT=Jn;ts.WATER=Qn;var Xs=()=>new Promise(r=>setTimeout(r,0)),Da=class{constructor(t,e){this.def=t,this.scene=e}async build(t){let e=this.def,i=this.scene;e._n=Li(e.seed),t("Planning layout",.05),await Xs();let n=new ua(e);n.noise=e._n,e.layout(n),this.layout=n,t("Shaping terrain",.15),await Xs(),this.terrain=new Ea(e,n),this.terrain.buildMesh(i),this.collision=new Aa(this.terrain),t("Constructing buildings",.35),await Xs(),this.structures=new Ca(this);for(let s of n.buildings)this.structures.building(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.props)this.structures.prop(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.bridges){let a=this.terrain.heightAt(s.x,s.z-s.len/2-1),o=this.terrain.heightAt(s.x,s.z+s.len/2+1),l=Math.max(a,o,(this.terrain.waterLevel??0)+2)+.15;this.structures.prop("bridge",s.x,s.z,0,{len:s.len+4,w:s.w,deckY:l,y:l-3}),this.structures.footprints.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.len/2,maxZ:s.z+s.len/2,color:"rgba(160,155,145,0.95)"}),s.deckY=l}for(let s of n.piers||[]){let a=Sr(s.z,e._n);this.structures.prop("pier",Math.floor(a-14)+.5,Math.floor(s.z)+.5,3,{len:50,w:6,deckY:2.25,y:0})}return this.flagPoles(i),this.structures.finalize(i),t("Growing vegetation",.6),await Xs(),this.vegetation=new Ra(this),this.vegetation.build(i,n),t("Building navigation mesh",.75),await Xs(),this.nav=new ts(this),t("Drawing maps",.92),await Xs(),this.mapImage=this.terrain.renderMapImage(768,this.structures.footprints),this}flagPoles(t){let e=[];for(let n of this.def.flags){let s=this.terrain.heightAt(n.x,n.z);e.push(P.cyl(.07,.09,9,6,14211288,n.x,s+4.5,n.z)),e.push(P.cyl(.4,.5,.4,8,6974058,n.x,s+.2,n.z))}let i=new Ot(P.merge(e),Sn("poles",{roughness:.6}));i.castShadow=!0,t.add(i),this.flagCloth=this.def.flags.map(n=>{let s=this.terrain.heightAt(n.x,n.z),a=new Ot(new je(1.8,1.1,6,3),new de({color:13421772,side:Pe,roughness:.9}));return a.geometry.translate(.9,0,0),a.position.set(n.x+.08,s+8.3,n.z),a.castShadow=!0,t.add(a),a})}updateFlags(t,e){if(this.flagCloth&&(t.flags.forEach(i=>{let n=this.def.flags.findIndex(h=>h.id===i.id),s=this.flagCloth[n];if(!s)return;let a=i.owner===0?4034016:i.owner===1?14700605:13684944;s.material.color.setHex(a);let o=this.terrain.heightAt(i.x,i.z);s.position.y=o+1.8+Math.abs(i.progress)*6.5;let l=s.geometry.attributes.position;s.userData.base||(s.userData.base=l.array.slice());let c=s.userData.base;for(let h=0;h<l.count;h++){let u=c[h*3];l.array[h*3+2]=Math.sin(u*2.4-e*5+i.x)*.12*u}l.needsUpdate=!0,s.rotation.y=.6}),!t.flags.length))for(let i of this.flagCloth)i.visible=!1}};var Ys=class r extends Ot{constructor(){let t=r.SkyShader,e=new Jt({name:t.name,uniforms:Be.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Fe,depthWrite:!1});super(new ui(1,1,1),e),this.isSky=!0}};Ys.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
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

		}`};var Lh=new Et,Pr=class r{constructor(t){t=t||{},this.zNear=t.webGL===!0?-1:0,this.vertices={near:[new R,new R,new R,new R],far:[new R,new R,new R,new R]},t.projectionMatrix!==void 0&&this.setFromProjectionMatrix(t.projectionMatrix,t.maxFar||1e4)}setFromProjectionMatrix(t,e){let i=this.zNear,n=t.elements[2*4+3]===0;return Lh.copy(t).invert(),this.vertices.near[0].set(1,1,i),this.vertices.near[1].set(1,-1,i),this.vertices.near[2].set(-1,-1,i),this.vertices.near[3].set(-1,1,i),this.vertices.near.forEach(function(s){s.applyMatrix4(Lh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(s){s.applyMatrix4(Lh);let a=Math.abs(s.z);n?s.z*=Math.min(e/a,1):s.multiplyScalar(Math.min(e/a,1))}),this.vertices}split(t,e){for(;t.length>e.length;)e.push(new r);e.length=t.length;for(let i=0;i<t.length;i++){let n=e[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i-1]);if(i===t.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i])}}toSpace(t,e){for(let i=0;i<4;i++)e.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(t),e.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(t)}};var kh={lights_fragment_begin:`
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
	`+Gt.lights_pars_begin};var gf=new Et,Uh=new Pr({webGL:!0}),on=new R,Dr=new Ii,Nh=[],Fh=[],Oh=new Et,xf=new Et,D1=new R(0,1,0),Ia=class{constructor(t){this.camera=t.camera,this.parent=t.parent,this.cascades=t.cascades||3,this.maxFar=t.maxFar||1e5,this.mode=t.mode||"practical",this.shadowMapSize=t.shadowMapSize||2048,this.shadowBias=t.shadowBias||1e-6,this.lightDirection=t.lightDirection||new R(1,-1,1).normalize(),this.lightIntensity=t.lightIntensity||3,this.lightNear=t.lightNear||1,this.lightFar=t.lightFar||2e3,this.lightMargin=t.lightMargin||200,this.customSplitsCallback=t.customSplitsCallback,this.fade=!1,this.mainFrustum=new Pr({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let t=0;t<this.cascades;t++){let e=new bi(16777215,this.lightIntensity);e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,e.shadow.camera.near=this.lightNear,e.shadow.camera.far=this.lightFar,e.shadow.bias=this.shadowBias,this.parent.add(e),this.parent.add(e.target),this.lights.push(e)}}initCascades(){let t=this.camera;t.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){let t=this.frustums;for(let e=0;e<t.length;e++){let n=this.lights[e].shadow.camera,s=this.frustums[e],a=s.vertices.near,o=s.vertices.far,l=o[0],c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){let u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),p=.25*Math.pow(f,2)*(d-u.near);h+=p}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){let t=this.camera,e=Math.min(t.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,t.near,e,this.breaks);break;case"logarithmic":n(this.cascades,t.near,e,this.breaks);break;case"practical":s(this.cascades,t.near,e,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,t.near,e,this.breaks);break}function i(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function n(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function s(a,o,l,c,h){Nh.length=0,Fh.length=0,n(a,o,l,Fh),i(a,o,l,Nh);for(let u=1;u<a;u++)h.push(Cd.lerp(Nh[u-1],Fh[u-1],c));h.push(1)}}update(){let t=this.camera,e=this.frustums;Oh.lookAt(new R,this.lightDirection,D1),xf.copy(Oh).invert();for(let i=0;i<e.length;i++){let n=this.lights[i],s=n.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,o=(s.top-s.bottom)/this.shadowMapSize;gf.multiplyMatrices(xf,t.matrixWorld),e[i].toSpace(gf,Uh);let l=Uh.vertices.near,c=Uh.vertices.far;Dr.makeEmpty();for(let h=0;h<4;h++)Dr.expandByPoint(l[h]),Dr.expandByPoint(c[h]);Dr.getCenter(on),on.z=Dr.max.z+this.lightMargin,on.x=Math.floor(on.x/a)*a,on.y=Math.floor(on.y/o)*o,on.applyMatrix4(Oh),n.position.copy(on),n.target.position.copy(on),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){Gt.lights_fragment_begin=kh.lights_fragment_begin,Gt.lights_pars_begin=kh.lights_pars_begin}setupMaterial(t){t.defines=t.defines||{},t.defines.USE_CSM=1,t.defines.CSM_CASCADES=this.cascades,this.fade&&(t.defines.CSM_FADE="");let e=[],i=this,n=this.shaders;t.onBeforeCompile=function(s){let a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(e),s.uniforms.CSM_cascades={value:e},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},n.set(t,s)},n.set(t,null)}updateUniforms(){let t=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){let s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=t}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(t){for(;t.length<this.breaks.length;)t.push(new at);t.length=this.breaks.length;for(let e=0;e<this.cascades;e++){let i=this.breaks[e],n=this.breaks[e-1]||0;t[e].x=n,t[e].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let t=0;t<this.lights.length;t++)this.parent.remove(this.lights[t].target),this.parent.remove(this.lights[t])}dispose(){let t=this.shaders;t.forEach(function(e,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),i.needsUpdate=!0}),t.clear()}};var vf={morning:{elev:32,az:125,sun:[1,.93,.82],sunI:3.6,sky:[.55,.68,.92],ground:[.38,.34,.26],hemiI:.55,fog:[.62,.72,.84],fogD:.0012,turb:2.6,ray:1.2,exp:1,skyMul:.62,env:.35},noon:{elev:64,az:160,sun:[1,.98,.94],sunI:3.8,sky:[.55,.68,.94],ground:[.42,.38,.3],hemiI:.55,fog:[.66,.74,.86],fogD:.001,turb:2.4,ray:1,exp:.92,skyMul:.6,env:.35},afternoon:{elev:26,az:245,sun:[1,.86,.68],sunI:3.7,sky:[.66,.68,.78],ground:[.5,.42,.3],hemiI:.55,fog:[.8,.72,.6],fogD:.0015,turb:5,ray:1.4,exp:.98,skyMul:.62,env:.38},dusk:{elev:6,az:275,sun:[1,.6,.36],sunI:2.8,sky:[.45,.42,.58],ground:[.32,.24,.2],hemiI:.45,fog:[.58,.46,.42],fogD:.0019,turb:8,ray:2.4,exp:1.15,skyMul:.7,env:.32},overcast:{elev:48,az:150,sun:[.92,.94,1],sunI:1.7,sky:[.62,.66,.72],ground:[.36,.35,.33],hemiI:.95,fog:[.6,.63,.67],fogD:.0026,turb:10,ray:.6,exp:1.05,skyMul:.55,env:.45},snow:{elev:26,az:140,sun:[.95,.97,1],sunI:2.5,sky:[.68,.75,.86],ground:[.72,.76,.8],hemiI:.85,fog:[.8,.84,.9],fogD:.0042,turb:8,ray:.8,exp:.9,skyMul:.6,env:.45},night:{elev:38,az:200,sun:[.55,.65,1],sunI:.42,sky:[.12,.16,.28],ground:[.05,.05,.07],hemiI:.35,fog:[.03,.04,.07],fogD:.0032,turb:2,ray:.3,exp:1.25,skyMul:0,env:.12,night:!0}},za=class{constructor(t,e,i,n){this.renderer=t,this.scene=e,this.camera=i,this.settings=n,this.sunDir=new R(0,1,0),this.shadowMode=null,this.csm=null,this.hemi=new sn(16777215,4473924,.7),e.add(this.hemi),this.sun=new bi(16777215,3),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun),e.add(this.sun.target),this.sky=new Ys,this.sky.material.depthWrite=!1,this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.skyUniforms={uFogColor:{value:new dt},uHorizon:{value:1},uSkyMul:{value:1}},Object.assign(this.sky.material.uniforms,this.skyUniforms),this.sky.material.fragmentShader=this.sky.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform vec3 uFogColor; uniform float uHorizon; uniform float uSkyMul;`).replace("gl_FragColor = vec4( retColor, 1.0 );",`
        retColor *= uSkyMul;
        retColor = mix(retColor, uFogColor, smoothstep(0.16, -0.04, direction.y) * uHorizon);
        gl_FragColor = vec4( retColor, 1.0 );`),e.add(this.sky);let s=new pe,a=[];for(let o=0;o<1800;o++){let l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=Math.abs(l);a.push(Math.cos(c)*h,u,Math.sin(c)*h)}s.setAttribute("position",new Kt(a,3)),this.stars=new Fo(s,new mr({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})),this.stars.visible=!1,this.stars.frustumCulled=!1,this.stars.renderOrder=-9,e.add(this.stars),this.fog=new Uo(11189196,.0015),e.fog=this.fog,this.pmrem=new Ps(t),this.envMap=null}setTime(t){let e=vf[t]||vf.morning;this.time=e,this.timeName=t;let i=(90-e.elev)*ce,n=e.az*ce;this.sunDir.setFromSphericalCoords(1,i,n);let s=this.sky.material.uniforms;if(s.turbidity.value=e.turb,s.rayleigh.value=e.ray,s.mieCoefficient.value=.005,s.mieDirectionalG.value=.8,s.sunPosition.value.copy(this.sunDir).multiplyScalar(e.night?-1:1),this.skyUniforms.uSkyMul.value=e.skyMul,this.sun.color.setRGB(...e.sun),this.sun.intensity=e.sunI,this.hemi.color.setRGB(...e.sky),this.hemi.groundColor.setRGB(...e.ground),this.hemi.intensity=e.hemiI,this.fogColor=new dt().setRGB(...e.fog),this.fog.color.copy(this.fogColor),this.skyUniforms.uFogColor.value.copy(this.fogColor),this.stars.visible=!!e.night,this.renderer.toneMappingExposure=e.exp,this.csm)for(let a of this.csm.lights)a.color.copy(this.sun.color),a.intensity=e.sunI;this.csm&&this.csm.lightDirection.copy(this.sunDir).negate(),this.applySettings(),this.buildEnvMap()}buildEnvMap(){this.envMap&&(this.envMap.dispose(),this.envMap=null);let t=this.time,e=new Bi,i=new Ys;i.material.uniforms.turbidity.value=t.turb,i.material.uniforms.rayleigh.value=t.ray,i.material.uniforms.sunPosition.value.copy(this.sunDir),i.scale.setScalar(1e3),e.add(i),t.night&&(e.background=new dt(659488));let n=new Ot(new je(2e3,2e3),new Oi({color:new dt().setRGB(...t.ground).multiplyScalar(.6)}));n.rotation.x=-Math.PI/2,n.position.y=-5,e.add(n),this.envMap=this.pmrem.fromScene(e,0,.1,3e3).texture,i.geometry.dispose(),i.material.dispose(),this.applySettings()}applySettings(){let t=this.settings,e=this.time;e&&(this.fog.density=t.get("fog")?e.fogD*(900/Math.max(500,t.get("viewDistance")))**.5:1e-5,this.sky.visible=t.get("atmosphere"),this.scene.background=t.get("atmosphere")?null:this.fogColor,this.skyUniforms.uHorizon.value=t.get("fog")?1:.35,this.scene.environment=t.get("ibl")?this.envMap:null,this.scene.environmentIntensity=e.env,this.hemi.intensity=e.hemiI*(t.get("ibl")?.8:1.25),this.setShadows(t.get("shadows")))}setShadows(t){if(t!==this.shadowMode){if(this.shadowMode=t,this.csm&&(ya(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.sun.visible=!0,this.sun.castShadow=!1,t==="low"||t==="medium"){let e=t==="low"?1024:2048,i=t==="low"?45:75;this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=-i,n.right=i,n.top=i,n.bottom=-i,n.near=1,n.far=600,n.updateProjectionMatrix(),this.shadowExt=i}else if(t==="high"||t==="ultra"){this.sun.visible=!1,this.csm=new Ia({maxFar:t==="ultra"?520:320,cascades:t==="ultra"?4:3,mode:"practical",parent:this.scene,shadowMapSize:t==="ultra"?4096:2048,lightDirection:this.sunDir.clone().negate(),camera:this.camera,lightIntensity:this.time?this.time.sunI:3,lightNear:1,lightFar:1400,lightMargin:250,shadowBias:-2e-4});for(let e of this.csm.lights)e.shadow.normalBias=.05,this.time&&e.color.copy(this.sun.color);this.csm.fade=!0,ya(this.csm)}}}update(t){this.sky.position.copy(t);let e=this.camera.far;if(this.sky.scale.setScalar(e*1),this.stars.position.copy(t),this.stars.scale.setScalar(e*.45),this.csm)this.csm.update();else if(this.sun.castShadow){let i=this.shadowExt,n=this.sun.shadow.mapSize.x,s=i*2/n,a=t.clone();a.x=Math.round(a.x/s)*s,a.z=Math.round(a.z/s)*s,this.sun.target.position.copy(a),this.sun.position.copy(a).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld()}else this.sun.position.copy(t).addScaledVector(this.sunDir,300),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}dispose(){this.csm&&(ya(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.envMap&&this.envMap.dispose(),this.pmrem.dispose()}};var La=class{constructor(t,e,i){this.world=t,this.scene=e,this.env=i;let n=t.terrain;this.level=n.waterLevel,this.rt=new Me(512,512,{type:Te}),this.textureMatrix=new Et,this.virtualCam=new _e;let s=t.def.biome==="arid"?[.02,.12,.16]:[.03,.09,.08],a=t.def.biome==="arid"?[.12,.38,.38]:[.12,.24,.17];this.uniforms={uTime:Vi.uTime,uReflection:{value:this.rt.texture},uTexMat:{value:this.textureMatrix},uUseRefl:{value:1},uNoise:{value:si("noise")},uHeight:{value:n.heightTex},uSize:{value:n.size},uHalf:{value:n.half},uTexN:{value:n.n},uLevel:{value:this.level},uSunDir:{value:new R},uSunColor:{value:new dt},uSkyColor:{value:new dt},uFogColor:{value:new dt},uFogDensity:{value:.001},uWaves:{value:1},uDeep:{value:new dt().setRGB(...s)},uShallow:{value:new dt().setRGB(...a)}};let o=new Jt({uniforms:this.uniforms,transparent:!0,depthWrite:!0,vertexShader:`
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
        }`}),l=n.size+400,c=new je(l,l,160,160);c.rotateX(-Math.PI/2),this.mesh=new Ot(c,o),this.mesh.position.y=this.level,this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,e.add(this.mesh),this.hideList=[]}setQuality(t,e){this.reflections=t,this.uniforms.uUseRefl.value=t?1:0,this.uniforms.uWaves.value=e?1:0}update(t){let e=this.uniforms;e.uSunDir.value.copy(t.sunDir),e.uSunColor.value.copy(t.sun.color).multiplyScalar(t.time.night?.4:1),e.uSkyColor.value.setRGB(...t.time.sky),e.uFogColor.value.copy(t.fog.color),e.uFogDensity.value=t.fog.density}renderReflection(t,e,i,n,s){if(!this.reflections)return;let a=i.position;if(a.y<this.level)return;let o=Math.max(256,Math.floor(n*.5)),l=Math.max(256,Math.floor(s*.5));(this.rt.width!==o||this.rt.height!==l)&&this.rt.setSize(o,l);let c=this.virtualCam;c.copy(i,!1),c.position.set(a.x,2*this.level-a.y,a.z);let h=new R;i.getWorldDirection(h),h.y=-h.y,c.up.set(0,1,0),c.lookAt(c.position.clone().add(h)),c.updateMatrixWorld(),c.projectionMatrix.copy(i.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(c.projectionMatrix),this.textureMatrix.multiply(c.matrixWorldInverse);let u=new Pi(new R(0,1,0),-this.level);u.applyMatrix4(c.matrixWorldInverse);let d=new se(u.normal.x,u.normal.y,u.normal.z,u.constant),f=c.projectionMatrix,p=new se((Math.sign(d.x)+f.elements[8])/f.elements[0],(Math.sign(d.y)+f.elements[9])/f.elements[5],-1,(1+f.elements[10])/f.elements[14]);d.multiplyScalar(2/d.dot(p)),f.elements[2]=d.x,f.elements[6]=d.y,f.elements[10]=d.z+1-.003,f.elements[14]=d.w,this.mesh.visible=!1;let x=[];for(let v of this.hideList)v&&v.visible&&(v.visible=!1,x.push(v));let g=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;let m=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,c),t.setRenderTarget(m),t.shadowMap.autoUpdate=g;for(let v of x)v.visible=!0;this.mesh.visible=!0}};var En={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ke=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},I1=new Rs(-1,1,1,-1,0,1),Bh=class extends pe{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},z1=new Bh,Si=class{constructor(t){this._mesh=new Ot(z1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,I1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var An=class extends ke{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Jt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Be.clone(t.uniforms),this.material=new Jt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Si(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ir=class extends ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},ka=class extends ke{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ua=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Te}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new An(En),this.copyPass.material.blending=Ae,this.clock=new ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ir!==void 0&&(a instanceof Ir?i=!0:a instanceof ka&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Na=class extends ke{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var yf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var $s=class r extends ke{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(s,a,{type:Te}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Me(s,a,{type:Te});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Me(s,a,{type:Te});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=yf;this.highPassUniforms=Be.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=En;this.copyUniforms=Be.clone(h.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:en,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new Oi,this.fsQuad=new Si(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new at(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Jt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};$s.BlurDirectionX=new at(1,0);$s.BlurDirectionY=new at(0,1);var Mf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Fa=class extends ke{constructor(){super();let t=Mf;this.uniforms=Be.clone(t.uniforms),this.material=new Zo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ah?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Et},cameraProjectionMatrixInverse:{value:new Et},cameraWorldMatrix:{value:new Et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},Lr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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
		}`};function bf(r=5){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=L1(t),i=e.length,n=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=e[a],l=2*Math.PI*o/i,c=new R(Math.cos(l),Math.sin(l),0).normalize();n[a*4]=(c.x*.5+.5)*255,n[a*4+1]=(c.y*.5+.5)*255,n[a*4+2]=127,n[a*4+3]=255}let s=new Hi(n,t,t);return s.wrapS=Di,s.wrapT=Di,s.needsUpdate=!0,s}function L1(r){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,i=Array(e).fill(0),n=Math.floor(t/2),s=t-1;for(let a=1;a<=e;){if(n===-1&&s===t?(s=t-2,n=0):(s===t&&(s=0),n<0&&(n=t-1)),i[n*t+s]!==0){s-=2,n++;continue}else i[n*t+s]=a++;s++,n--}return i}var kr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Hh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraProjectionMatrixInverse:{value:new Et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Hh(r,t,e){let i=k1(r,t,e),n="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=i[s];n+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return n}function k1(r,t,e){let i=[];for(let n=0;n<r;n++){let s=2*Math.PI*t*n/r,a=Math.pow(n/(r-1),e);i.push(new R(Math.cos(s),Math.sin(s),a))}return i}var Ba=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,s){return t[0]*e+t[1]*i+t[2]*n+t[3]*s}noise(t,e){let i,n,s,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,x=e-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let v=p-g+h,y=x-m+h,M=p-1+2*h,T=x-1+2*h,w=l&255,S=c&255,C=this.perm[w+this.perm[S]]%12,_=this.perm[w+g+this.perm[S+m]]%12,b=this.perm[w+1+this.perm[S+1]]%12,A=.5-p*p-x*x;A<0?i=0:(A*=A,i=A*A*this.dot(this.grad3[C],p,x));let z=.5-v*v-y*y;z<0?n=0:(z*=z,n=z*z*this.dot(this.grad3[_],v,y));let L=.5-M*M-T*T;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[b],M,T)),70*(i+n+s)}noise3d(t,e,i){let n,s,a,o,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(i+c),f=1/6,p=(h+u+d)*f,x=h-p,g=u-p,m=d-p,v=t-x,y=e-g,M=i-m,T,w,S,C,_,b;v>=y?y>=M?(T=1,w=0,S=0,C=1,_=1,b=0):v>=M?(T=1,w=0,S=0,C=1,_=0,b=1):(T=0,w=0,S=1,C=1,_=0,b=1):y<M?(T=0,w=0,S=1,C=0,_=1,b=1):v<M?(T=0,w=1,S=0,C=0,_=1,b=1):(T=0,w=1,S=0,C=1,_=1,b=0);let A=v-T+f,z=y-w+f,L=M-S+f,U=v-C+2*f,O=y-_+2*f,N=M-b+2*f,q=v-1+3*f,F=y-1+3*f,X=M-1+3*f,j=h&255,lt=u&255,et=d&255,Rt=this.perm[j+this.perm[lt+this.perm[et]]]%12,Y=this.perm[j+T+this.perm[lt+w+this.perm[et+S]]]%12,rt=this.perm[j+C+this.perm[lt+_+this.perm[et+b]]]%12,gt=this.perm[j+1+this.perm[lt+1+this.perm[et+1]]]%12,nt=.6-v*v-y*y-M*M;nt<0?n=0:(nt*=nt,n=nt*nt*this.dot3(this.grad3[Rt],v,y,M));let yt=.6-A*A-z*z-L*L;yt<0?s=0:(yt*=yt,s=yt*yt*this.dot3(this.grad3[Y],A,z,L));let It=.6-U*U-O*O-N*N;It<0?a=0:(It*=It,a=It*It*this.dot3(this.grad3[rt],U,O,N));let Dt=.6-q*q-F*F-X*X;return Dt<0?o=0:(Dt*=Dt,o=Dt*Dt*this.dot3(this.grad3[gt],q,F,X)),32*(n+s+a+o)}noise4d(t,e,i,n){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,x=(t+e+i+n)*l,g=Math.floor(t+x),m=Math.floor(e+x),v=Math.floor(i+x),y=Math.floor(n+x),M=(g+m+v+y)*c,T=g-M,w=m-M,S=v-M,C=y-M,_=t-T,b=e-w,A=i-S,z=n-C,L=_>b?32:0,U=_>A?16:0,O=b>A?8:0,N=_>z?4:0,q=b>z?2:0,F=A>z?1:0,X=L+U+O+N+q+F,j=a[X][0]>=3?1:0,lt=a[X][1]>=3?1:0,et=a[X][2]>=3?1:0,Rt=a[X][3]>=3?1:0,Y=a[X][0]>=2?1:0,rt=a[X][1]>=2?1:0,gt=a[X][2]>=2?1:0,nt=a[X][3]>=2?1:0,yt=a[X][0]>=1?1:0,It=a[X][1]>=1?1:0,Dt=a[X][2]>=1?1:0,Zt=a[X][3]>=1?1:0,it=_-j+c,ut=b-lt+c,k=A-et+c,pt=z-Rt+c,ct=_-Y+2*c,xt=b-rt+2*c,ft=A-gt+2*c,zt=z-nt+2*c,tt=_-yt+3*c,I=b-It+3*c,E=A-Dt+3*c,G=z-Zt+3*c,J=_-1+4*c,st=b-1+4*c,Q=A-1+4*c,Pt=z-1+4*c,vt=g&255,_t=m&255,qt=v&255,ht=y&255,At=o[vt+o[_t+o[qt+o[ht]]]]%32,Bt=o[vt+j+o[_t+lt+o[qt+et+o[ht+Rt]]]]%32,Ht=o[vt+Y+o[_t+rt+o[qt+gt+o[ht+nt]]]]%32,Ct=o[vt+yt+o[_t+It+o[qt+Dt+o[ht+Zt]]]]%32,jt=o[vt+1+o[_t+1+o[qt+1+o[ht+1]]]]%32,Vt=.6-_*_-b*b-A*A-z*z;Vt<0?h=0:(Vt*=Vt,h=Vt*Vt*this.dot4(s[At],_,b,A,z));let ee=.6-it*it-ut*ut-k*k-pt*pt;ee<0?u=0:(ee*=ee,u=ee*ee*this.dot4(s[Bt],it,ut,k,pt));let B=.6-ct*ct-xt*xt-ft*ft-zt*zt;B<0?d=0:(B*=B,d=B*B*this.dot4(s[Ht],ct,xt,ft,zt));let Mt=.6-tt*tt-I*I-E*E-G*G;Mt<0?f=0:(Mt*=Mt,f=Mt*Mt*this.dot4(s[Ct],tt,I,E,G));let K=.6-J*J-st*st-Q*Q-Pt*Pt;return K<0?p=0:(K*=K,p=K*K*this.dot4(s[jt],J,st,Q,Pt)),27*(h+u+d+f+p)}};var Ur=class r extends ke{constructor(t,e,i,n,s,a,o){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=bf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Me(this.width,this.height,{type:Te}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Jt({defines:Object.assign({},zr.defines),uniforms:Be.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new jo,this.normalMaterial.blending=Ae,this.pdMaterial=new Jt({defines:Object.assign({},kr.defines),uniforms:Be.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Jt({defines:Object.assign({},Lr.defines),uniforms:Be.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,blending:Ae}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Jt({uniforms:Be.clone(En.uniforms),vertexShader:En.vertexShader,fragmentShader:En.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ia,blendDst:Ns,blendEquation:xi,blendSrcAlpha:ea,blendDstAlpha:Ns,blendEquationAlpha:xi}),this.blendMaterial=new Jt({uniforms:Be.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:oh,blendSrc:ia,blendDst:Ns,blendEquation:xi,blendSrcAlpha:ea,blendDstAlpha:Ns,blendEquationAlpha:xi}),this.fsQuad=new Si(null),this.originalClearColor=new dt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ds,this.depthTexture.format=Mn,this.depthTexture.type=yn,this.normalRenderTarget=new Me(this.width,this.height,{minFilter:De,magFilter:De,type:Te,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,s=e.clearAlpha||s,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let n=e.get(i);i.visible=n}),e.clear()}generateNoise(t=64){let e=new Ba,i=t*t*4,n=new Uint8Array(i);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;n[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,n[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,n[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,n[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new Hi(n,t,t,ci,hi);return s.wrapS=Di,s.wrapT=Di,s.needsUpdate=!0,s}};Ur.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var _f={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var Ha=class extends ke{constructor(t,e,i){super(),this.scene=t,this.camera=e;let n=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Me(1,1,{minFilter:De,magFilter:De,type:Te}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new pr,this.materialDepth.depthPacking=vh,this.materialDepth.blending=Ae;let o=_f,l=Be.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=n,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new Jt({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new Si(this.materialBokeh),this._oldClearColor=new dt}render(t,e,i){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);let n=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(n),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var wf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

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
			
		}`};var U1={uniforms:{tDiffuse:{value:null},uCurInv:{value:new Et},uPrev:{value:new Et},uStrength:{value:.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},N1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new at(1,1)},uGrade:{value:1},uGrain:{value:.04},uVignette:{value:1},uCA:{value:1},uDamage:{value:0},uSuppress:{value:0},uFlash:{value:0},uDowned:{value:0},uSat:{value:1.08},uContrast:{value:1.06},uLift:{value:new R(.01,.01,.02)},uGamma:{value:new R(1,1,1)},uGain:{value:new R(1.02,1,.97)},uTint:{value:new R(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Vh=class extends ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.clear=!1}render(t,e,i){let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(this.renderToScreen?null:i),t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=n}};function Sf(r,t){let e=r.render.bind(r);return r.render=(...i)=>{let n=t(),s=n.map(a=>a.visible);n.forEach(a=>{a.visible=!1}),e(...i),n.forEach((a,o)=>{a.visible=s[o]})},r}var Va=class{constructor(t,e,i,n,s,a){this.renderer=t,this.scene=e,this.camera=i,this.vmScene=n,this.vmCamera=s,this.settings=a,this.hidden=[],this.prevRot=new Et,this.focus=50,this.dofAmount=0,this.menuBlur=0,this.time=0,this.build()}build(){let t=this.renderer,e=t.getDrawingBufferSize(new at),i=this.settings.get("antialias"),n=new Me(e.x,e.y,{type:Te,samples:i==="msaa"?4:0});this.composer&&this.composer.dispose(),this.composer=new Ua(t,n),this.composer.setPixelRatio(1),this.composer.setSize(e.x,e.y),this.aa=i,this.renderPass=new Na(this.scene,this.camera),this.gtao=Sf(new Ur(this.scene,this.camera,e.x,e.y),()=>this.hidden),this.gtao.updateGtaoMaterial({radius:1.4,distanceExponent:1.5,thickness:2.5,scale:1.25,samples:12,distanceFallOff:1}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.gtao.blendIntensity=.85,this.bokeh=Sf(new Ha(this.scene,this.camera,{focus:50,aperture:2e-5,maxblur:.008}),()=>this.hidden),this.motion=new An(U1),this.vmPass=new Vh(this.vmScene,this.vmCamera),this.bloom=new $s(new at(e.x/2,e.y/2),.28,.45,2.2),this.output=new Fa,this.final=new An(N1),this.fxaa=new An(wf);for(let s of[this.renderPass,this.gtao,this.bokeh,this.motion,this.vmPass,this.bloom,this.output,this.final,this.fxaa])this.composer.addPass(s);this.setSize(e.x,e.y),this.applySettings()}applySettings(){let t=this.settings;if(t.get("antialias")!==this.aa){this.build();return}this.gtao.enabled=t.get("ssao"),this.bloom.enabled=t.get("bloom"),this.motion.enabled=t.get("motionBlur"),this.fxaa.enabled=t.get("antialias")==="fxaa";let e=this.final.uniforms;e.uGrade.value=t.get("colorGrading")?1:0,e.uGrain.value=t.get("filmGrain")?.045:0,e.uVignette.value=t.get("vignette")?1:0,e.uCA.value=t.get("chromatic")?1:0,this.updateDofEnabled()}setGrade(t){let e=this.final.uniforms;e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uLift.value.set(...t.lift),e.uGamma.value.set(...t.gamma),e.uGain.value.set(...t.gain),e.uTint.value.set(...t.tint||[1,1,1])}updateDofEnabled(){this.bokeh.enabled=this.settings.get("dof")&&(this.dofAmount>.02||this.menuBlur>.02)}setSize(t,e){this.composer.setSize(t,e),this.final.uniforms.uRes.value.set(t,e),this.fxaa.material.uniforms.resolution.value.set(1/t,1/e)}render(t,e){this.time+=t;let i=this.final.uniforms;if(i.uTime.value=this.time,i.uDamage.value=e.damage||0,i.uSuppress.value=e.suppress||0,i.uFlash.value=e.flash||0,i.uDowned.value=e.downed||0,this.dofAmount=e.ads||0,this.menuBlur=e.menu?1:0,this.updateDofEnabled(),this.bokeh.enabled){let n=this.bokeh.uniforms;this.focus+=((e.focus||60)-this.focus)*Math.min(1,t*8),n.focus.value=this.menuBlur?2:this.focus,n.aperture.value=this.menuBlur?.0012:4e-5*this.dofAmount,n.maxblur.value=this.menuBlur?.012:.006*this.dofAmount}if(this.motion.enabled){let n=this.camera,a=new Et().extractRotation(n.matrixWorld).clone().invert(),o=new Et().multiplyMatrices(n.projectionMatrix,a);this.motion.uniforms.uCurInv.value.copy(o).invert(),this.motion.uniforms.uPrev.value.copy(this.prevVP||o),this.motion.uniforms.uStrength.value=Math.min(1,.016/Math.max(t,.001))*.55,this.prevVP=o}else this.prevVP=null;this.composer.render(t)}};var F1=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),Tf=[0,1,2,0,2,3],Nr=class{constructor(t,e,i,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.c1=new Float32Array(e*4),this.rot=new Float32Array(e),this.rotV=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e);let s=new _r;s.setAttribute("corner",new ue(F1,2)),s.setIndex(Tf),this.aPos=new vi(new Float32Array(e*3),3).setUsage($n),this.aCol=new vi(new Float32Array(e*4),4).setUsage($n),this.aSR=new vi(new Float32Array(e*2),2).setUsage($n),s.setAttribute("iPos",this.aPos),s.setAttribute("iCol",this.aCol),s.setAttribute("iSR",this.aSR),s.instanceCount=0,this.uniforms={uTex:{value:i},uLight:{value:new dt(1,1,1)},uFogColor:{value:new dt},uFogDensity:{value:0}};let a=new Jt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:n?en:xn,vertexShader:`
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
        }`});this.mesh=new Ot(s,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?6:5,t.add(this.mesh),this.geo=s}emit(t,e,i,n,s,a,o,l,c,h,u,d=0,f=0,p=0){let x;this.n<this.max?x=this.n++:x=Math.floor(Math.random()*this.max),this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=i,this.vel[x*3]=n,this.vel[x*3+1]=s,this.vel[x*3+2]=a,this.life[x]=o,this.maxLife[x]=o,this.s0[x]=l,this.s1[x]=c;for(let g=0;g<4;g++)this.c0[x*4+g]=h[g],this.c1[x*4+g]=u[g];this.rot[x]=Math.random()*6.28,this.rotV[x]=p*(Math.random()-.5),this.drag[x]=d,this.grav[x]=f}update(t){let e=0,i=this.aPos.array,n=this.aCol.array,s=this.aSR.array;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let l=--this.n;l!==e&&(this.pos.copyWithin(e*3,l*3,l*3+3),this.vel.copyWithin(e*3,l*3,l*3+3),this.c0.copyWithin(e*4,l*4,l*4+4),this.c1.copyWithin(e*4,l*4,l*4+4),this.life[e]=this.life[l],this.maxLife[e]=this.maxLife[l],this.s0[e]=this.s0[l],this.s1[e]=this.s1[l],this.rot[e]=this.rot[l],this.rotV[e]=this.rotV[l],this.drag[e]=this.drag[l],this.grav[e]=this.grav[l]);continue}let a=Math.max(0,1-this.drag[e]*t);this.vel[e*3]*=a,this.vel[e*3+1]=this.vel[e*3+1]*a-this.grav[e]*t,this.vel[e*3+2]*=a,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.rot[e]+=this.rotV[e]*t;let o=1-this.life[e]/this.maxLife[e];i[e*3]=this.pos[e*3],i[e*3+1]=this.pos[e*3+1],i[e*3+2]=this.pos[e*3+2];for(let l=0;l<4;l++)n[e*4+l]=this.c0[e*4+l]+(this.c1[e*4+l]-this.c0[e*4+l])*o;o<.08&&(n[e*4+3]*=o/.08),s[e*2]=this.s0[e]+(this.s1[e]-this.s0[e])*Math.sqrt(o),s[e*2+1]=this.rot[e],e++}this.geo.instanceCount=this.n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSR.needsUpdate=!0,this.aPos.updateRanges=[{start:0,count:this.n*3}]}},Gh=class{constructor(t,e=400){this.max=e;let i=new _r;i.setAttribute("corner",new ue(new Float32Array([0,-1,1,-1,1,1,0,1]),2)),i.setIndex(Tf),this.aS=new vi(new Float32Array(e*3),3).setUsage($n),this.aE=new vi(new Float32Array(e*3),3).setUsage($n),this.aC=new vi(new Float32Array(e*4),4).setUsage($n),i.setAttribute("iS",this.aS),i.setAttribute("iE",this.aE),i.setAttribute("iC",this.aC),i.instanceCount=0;let n=new Jt({transparent:!0,depthWrite:!1,blending:en,vertexShader:`
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
        void main() { float a = vT * vT * (1.0 - abs(vSide)); gl_FragColor = vec4(vC.rgb * a * 2.5, a); }`});this.mesh=new Ot(i,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh),this.geo=i,this.n=0}begin(){this.n=0}add(t,e,i,n,s,a,o,l,c,h){if(this.n>=this.max)return;let u=this.n++,d=this.aS.array,f=this.aE.array,p=this.aC.array;d[u*3]=t,d[u*3+1]=e,d[u*3+2]=i,f[u*3]=n,f[u*3+1]=s,f[u*3+2]=a,p[u*4]=o,p[u*4+1]=l,p[u*4+2]=c,p[u*4+3]=h}end(){this.geo.instanceCount=this.n,this.aS.needsUpdate=this.aE.needsUpdate=this.aC.needsUpdate=!0}},Ga=class{constructor(t,e,i,n){this.max=e,this.i=0,this.owners=new Array(e).fill(null);let s=new de({map:si(i),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,roughness:1});this.mesh=new yi(new je(1,1),s,e);let a=new Et().makeScale(0,0,0);for(let o=0;o<e;o++)this.mesh.setMatrixAt(o,a);this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.receiveShadow=!0,t.add(this.mesh),this.size=n,this._m=new Et,this._q=new Ie,this._q2=new Ie,this._v=new R,this._n=new R,this._s=new R}add(t,e,i,n,s,a,o,l=1){let c=this.i;this.i=(this.i+1)%this.max,this._n.set(n,s,a),this._q.setFromUnitVectors(new R(0,0,1),this._n),this._q2.setFromAxisAngle(new R(0,0,1),Math.random()*6.28),this._q.multiply(this._q2);let h=this.size*l*(.8+Math.random()*.4);this._v.set(t+n*.012,e+s*.012,i+a*.012),this._s.set(h,h,h),this._m.compose(this._v,this._q,this._s),this.mesh.setMatrixAt(c,this._m),this.mesh.instanceMatrix.needsUpdate=!0,this.owners[c]=o||null}removeOwner(t){let e=new Et().makeScale(0,0,0),i=!1;for(let n=0;n<this.max;n++)this.owners[n]===t&&(this.mesh.setMatrixAt(n,e),this.owners[n]=null,i=!0);i&&(this.mesh.instanceMatrix.needsUpdate=!0)}},Wh=class{constructor(t,e=500){this.max=e,this.list=[];let i=new de({roughness:.9});this.mesh=new yi(new ui(1,1,1),i,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1;let n=new Et().makeScale(0,0,0);for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,n),this.mesh.setColorAt(s,new dt(1,1,1));t.add(this.mesh),this.free=[];for(let s=e-1;s>=0;s--)this.free.push(s);this._m=new Et,this._q=new Ie,this._e=new ti,this._p=new R,this._s=new R,this._c=new dt}spawn(t,e,i,n,s,a,o,l,c,h,u=8){let d;this.free.length?d=this.free.pop():d=this.list.shift().slot,this.list.push({slot:d,x:t,y:e,z:i,vx:n,vy:s,vz:a,rx:Math.random()*6,ry:Math.random()*6,rz:Math.random()*6,ax:W(-8,8),ay:W(-8,8),az:W(-8,8),sx:o,sy:l,sz:c,life:u,rest:!1}),this._c.set(h).multiplyScalar(.8+Math.random()*.35),this.mesh.setColorAt(d,this._c),this.mesh.instanceColor.needsUpdate=!0}update(t,e){if(this.list.length){for(let i=this.list.length-1;i>=0;i--){let n=this.list[i];if(n.life-=t,n.life<=0){this.mesh.setMatrixAt(n.slot,this._m.makeScale(0,0,0)),this.free.push(n.slot),this.list.splice(i,1);continue}if(!n.rest){n.vy-=18*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rx+=n.ax*t,n.ry+=n.ay*t,n.rz+=n.az*t;let a=e.groundAt(n.x,n.z,n.y+.3,.05)+Math.min(n.sx,n.sy,n.sz)*.5;n.y<a&&(n.y=a,Math.abs(n.vy)<1.5&&(n.rest=!0,n.vx=n.vz=0),n.vy=-n.vy*.3,n.vx*=.55,n.vz*=.55,n.ax*=.5,n.ay*=.5,n.az*=.5)}let s=n.life<1?n.life:1;this._e.set(n.rx,n.ry,n.rz),this._q.setFromEuler(this._e),this._p.set(n.x,n.y,n.z),this._s.set(n.sx*s,n.sy*s,n.sz*s),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(n.slot,this._m)}this.mesh.instanceMatrix.needsUpdate=!0}}},Wa=class{constructor(t){this.game=t;let e=t.scene;this.smoke=new Nr(e,3e3,si("smoke"),!1),this.glow=new Nr(e,2500,si("spark"),!0),this.flashes=new Nr(e,200,si("flash"),!0),this.tracers=new Gh(e,500),this.holes=new Ga(e,450,"bullethole",.13),this.scorch=new Ga(e,60,"scorch",4.2),this.debris=new Wh(e,500),this.lights=[];for(let i=0;i<3;i++){let n=new Qo(16755285,0,20,2);n.castShadow=!1,e.add(n),this.lights.push({light:n,t:0,dur:1,i0:0})}this.emitters=[],this.trauma=0,this.q=1,this.hidden=[this.smoke.mesh,this.glow.mesh,this.flashes.mesh,this.tracers.mesh,this.holes.mesh,this.scorch.mesh]}setQuality(t){this.q={low:.35,medium:.65,high:1}[t.get("particles")]||1,this.decalsOn=t.get("decals"),this.debrisOn=t.get("debris"),this.shakeOn=t.get("screenShake"),this.holes.mesh.visible=this.scorch.mesh.visible=this.decalsOn}count(t){return Math.max(1,Math.round(t*this.q))}flashLight(t,e,i,n,s,a,o){let l=this.lights[0];for(let c of this.lights)c.t/c.dur*c.i0<l.t/l.dur*l.i0&&(l=c);l.light.position.set(t,e,i),l.light.color.set(n),l.light.distance=a,l.i0=s,l.t=o,l.dur=o}shake(t,e,i,n){if(!this.shakeOn)return;let s=t;if(e!==void 0){let a=this.game.camera.position,o=Math.hypot(a.x-e,a.y-i,a.z-n);s=t*Math.max(0,1-o/60)}this.trauma=Math.min(1,this.trauma+s)}muzzle(t,e,i,n,s,a,o=1,l=!1,c=!1){l||(this.flashes.emit(t,e,i,0,0,0,.05,.45*o,.65*o,[1,.8,.45,1],[1,.5,.2,0],0,0),this.flashes.emit(t+n*.15,e+s*.15,i+a*.15,n*2,s*2,a*2,.04,.3*o,.5*o,[1,.9,.6,1],[1,.6,.2,0],0,0),this.flashLight(t,e,i,16756832,c?6:12,12,.06)),Math.random()<this.q&&this.smoke.emit(t+n*.2,e+s*.2,i+a*.2,n*1.5+W(-.2,.2),s*1.5+.4,a*1.5+W(-.2,.2),.8,.15,.9,[.8,.8,.8,.22],[.8,.8,.8,0],2,-.3,1)}impact(t,e,i,n,s,a,o,l){let c=this.q;switch(o){case"flesh":for(let h=0;h<this.count(6);h++)this.smoke.emit(t,e,i,n*1.5+W(-1,1),s*1.5+W(-.5,1),a*1.5+W(-1,1),.35,.08,.5,[.55,.04,.03,.85],[.4,.02,.02,0],4,3);return;case"water":for(let h=0;h<this.count(10);h++)this.smoke.emit(t,e,i,W(-1,1),W(2,5),W(-1,1),.6,.1,.5,[.9,.95,1,.7],[.9,.95,1,0],1,9);return;case"metal":case"container":for(let h=0;h<this.count(10);h++)this.glow.emit(t,e,i,n*4+W(-3,3),s*4+W(-1,4),a*4+W(-3,3),W(.15,.4),.06,.02,[1,.8,.4,1],[1,.4,.1,0],1,12);this.smoke.emit(t,e,i,n,s,a,.5,.1,.4,[.5,.5,.5,.3],[.5,.5,.5,0],2,0);break;default:{let h=this.matColor(o),u=this.count(5);for(let d=0;d<u;d++)this.smoke.emit(t+n*.05,e+s*.05,i+a*.05,n*W(1,3)+W(-.6,.6),s*W(1,3)+W(0,1.2),a*W(1,3)+W(-.6,.6),W(.5,1.1),.1,W(.5,.9),[h[0],h[1],h[2],.55],[h[0],h[1],h[2],0],3,1.2,1);if(o==="stone"||o==="concrete"||o==="brick"||o==="rock")for(let d=0;d<this.count(3);d++)this.glow.emit(t,e,i,n*3+W(-2,2),s*3+W(0,3),a*3+W(-2,2),.12,.04,.02,[1,.85,.6,1],[1,.5,.2,0],1,10);for(let d=0;d<this.count(4);d++)this.smoke.emit(t,e,i,n*3+W(-2,2),s*3+W(1,4),a*3+W(-2,2),.6,.04,.04,[h[0]*.7,h[1]*.7,h[2]*.7,1],[h[0]*.7,h[1]*.7,h[2]*.7,1],.5,14)}}this.decalsOn&&c>.2&&this.holes.add(t,e,i,n,s,a,l)}matColor(t){switch(t){case"wood":return[.55,.42,.3];case"plaster":return[.85,.82,.76];case"brick":return[.7,.48,.38];case"concrete":case"stone":case"rock":return[.68,.67,.64];case"sand":return[.78,.7,.52];case"hay":return[.85,.75,.45];case"grass":return[.45,.4,.28];case"dirt":return[.5,.42,.32];default:return[.55,.47,.36]}}explosion(t,e,i,n=1,s={}){let a=this.q;this.flashLight(t,e+1,i,16751168,60*n,30*n,.35),this.flashes.emit(t,e+.5,i,0,0,0,.12,2*n,6*n,[1,.8,.5,1],[1,.4,.1,0],0,0);for(let l=0;l<this.count(18*n);l++){let c=Math.random()*6.28,h=Math.random(),u=W(3,9)*n;this.glow.emit(t,e+.5,i,Math.cos(c)*u*(1-h),W(2,8)*n,Math.sin(c)*u*(1-h),W(.25,.6),1.6*n,3.5*n,[1,.62,.25,.9],[.8,.2,.05,0],4,-1,2)}for(let l=0;l<this.count(30*n);l++)this.glow.emit(t,e+.5,i,W(-14,14),W(4,18),W(-14,14),W(.4,1.2),.12,.05,[1,.8,.4,1],[1,.4,.1,0],.5,18);for(let l=0;l<this.count(16*n);l++){let c=W(.12,.3);this.smoke.emit(t+W(-1.5,1.5)*n,e+W(0,2)*n,i+W(-1.5,1.5)*n,W(-2,2),W(1.5,5)*n,W(-2,2),W(4,9),2.2*n,8*n,[c,c,c*.95,.75],[.35,.34,.33,0],.8,-.4,.6)}let o=s.dirt||[.45,.38,.28];for(let l=0;l<this.count(14*n);l++){let c=Math.random()*6.28;this.smoke.emit(t,e+.2,i,Math.cos(c)*W(6,12)*n,W(.2,1.5),Math.sin(c)*W(6,12)*n,W(1.5,3),1.2*n,4*n,[o[0],o[1],o[2],.55],[o[0],o[1],o[2],0],2.5,.2,.5)}for(let l=0;l<this.count(16*n);l++)this.smoke.emit(t,e+.3,i,W(-7,7)*n,W(5,14)*n,W(-7,7)*n,W(.8,1.6),.15,.15,[o[0]*.6,o[1]*.6,o[2]*.6,1],[o[0]*.6,o[1]*.6,o[2]*.6,1],.3,16);if(this.debrisOn)for(let l=0;l<Math.round(8*n*a);l++){let c=W(.08,.25);this.debris.spawn(t,e+.4,i,W(-7,7),W(5,12),W(-7,7),c,c,c,s.debrisColor||5917242,W(4,8))}this.decalsOn&&s.ground&&this.scorch.add(t,e+.02,i,s.nx??0,s.ny??1,s.nz??0,s.box,n),s.fire&&this.addFire(t,e,i,s.fire,n*.6),this.shake(.55*n,t,e,i)}pieceDestroyed(t,e){let i=Rr[t.mat]||Rr.plaster,n=(t.minX+t.maxX)/2,s=(t.minY+t.maxY)/2,a=(t.minZ+t.maxZ)/2,o=t.maxX-t.minX,l=t.maxY-t.minY,c=t.maxZ-t.minZ,h=this.matColor(t.mat),u=this.count(6);for(let d=0;d<u;d++)this.smoke.emit(n+W(-o,o)*.4,s+W(-l,l)*.4,a+W(-c,c)*.4,W(-1,1),W(0,1.5),W(-1,1),W(2.5,5),.8,3.2,[h[0],h[1],h[2],.6],[h[0],h[1],h[2],0],1.2,-.1,.5);if(this.debrisOn){let d=Math.max(2,Math.round(Math.min(8,o*l*c*14+2)*this.q));for(let f=0;f<d;f++){let p=Math.min(.45,Math.max(o,l,c)*W(.15,.35));this.debris.spawn(n+W(-o,o)*.4,s+W(-l,l)*.4,a+W(-c,c)*.4,W(-3,3),W(0,4),W(-3,3),p*W(.6,1.4),p*W(.5,1.2),p*W(.6,1.4),i.debris,W(6,12))}}this.holes.removeOwner(t),this.game.audio&&this.game.audio.play3d(i.sound==="wood"?"breakWood":i.sound==="metal"?"breakMetal":"breakStone",n,s,a,{vol:.8})}addSmokeScreen(t,e,i,n=16){let s=this.game.time,a=s,o={x:t,y:e+1.5,z:i,r:6.5,strength:.96,until:s+n,grow:l=>Math.min(1,(l-a)/2.5)*(l>a+n-3?Math.max(.2,(a+n-l)/3):1)};this.game.world.collision.addDynamicSoft(o),this.emitters.push({type:"smoke",x:t,y:e,z:i,t:n,rate:26,acc:0})}addFire(t,e,i,n=8,s=1){this.emitters.push({type:"fire",x:t,y:e,z:i,t:n,rate:22*s,acc:0,scale:s})}update(t){for(let e=this.emitters.length-1;e>=0;e--){let i=this.emitters[e];if(i.t-=t,i.t<=0){this.emitters.splice(e,1);continue}for(i.acc+=t*i.rate*this.q;i.acc>=1;)if(i.acc-=1,i.type==="smoke"){let n=W(.72,.88);this.smoke.emit(i.x+W(-.8,.8),i.y+.3,i.z+W(-.8,.8),W(-1.6,1.6),W(.4,1.5),W(-1.6,1.6),W(5,8),1.5,9,[n,n,n,.7],[n,n,n,0],.35,-.06,.3)}else if(i.type==="fire"){let n=i.scale;this.glow.emit(i.x+W(-.6,.6)*n,i.y+.2,i.z+W(-.6,.6)*n,W(-.3,.3),W(1.5,3)*n,W(-.3,.3),W(.4,.9),.9*n,.2,[1,.55,.15,.9],[.9,.2,.05,0],.5,-1,1),Math.random()<.3&&this.smoke.emit(i.x,i.y+1.5*n,i.z,W(-.4,.4),W(1,2),W(-.4,.4),W(3,6),.8*n,4*n,[.12,.11,.1,.55],[.3,.3,.3,0],.3,-.3,.4),Math.random()<.15&&this.flashLight(i.x,i.y+1,i.z,16747056,6*n,10,.25)}}this.smoke.update(t),this.glow.update(t),this.flashes.update(t),this.debris.update(t,this.game.world.collision);for(let e of this.lights)e.t>0?(e.t-=t,e.light.intensity=Math.max(0,e.t/e.dur)*e.i0):e.light.intensity=0;this.trauma=Math.max(0,this.trauma-t*1.4)}setLighting(t){let e=t.time,i=new dt().setRGB(...e.sky).multiplyScalar(e.hemiI*.8).add(new dt().setRGB(...e.sun).multiplyScalar(e.sunI*.22));this.smoke.uniforms.uLight.value.copy(i);for(let n of[this.smoke,this.glow,this.flashes])n.uniforms.uFogColor.value.copy(t.fog.color),n.uniforms.uFogDensity.value=t.fog.density}};var Fr=Math.PI/180,es=new R,qh=new R,Ef=new R,Cn=class{constructor(t){this.game=t,this.bullets=[],this.projectiles=[],this.placed=[],this.shotCounter=0}get world(){return this.game.world}fireBullet(t,e,i){let n=e.stats,s=t.eye(new R),a=t.aimDir(new R),o=t.spread();if(n.pellets&&(o=Math.max(o,n.pelletSpread||2.5)*(i===0?.3:1)),t.suppression>.2&&!t.isPlayer&&(o+=t.suppression*.8),o>0){let u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*o*.5*Fr,f=Math.abs(a.y)>.99?es.set(1,0,0):es.set(0,1,0),p=new R().crossVectors(a,f).normalize(),x=new R().crossVectors(p,a).normalize();a.addScaledVector(p,Math.cos(u)*Math.tan(d)).addScaledVector(x,Math.sin(u)*Math.tan(d)).normalize()}let l=n.vel*n.velMul,c=t.isPlayer&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new R);this.shotCounter++;let h=!n.suppressed&&(n.type==="sniper"||n.type==="lmg"||i===0&&this.shotCounter%(t.isPlayer?3:2)===0);this.bullets.push({x:s.x,y:s.y,z:s.z,vx:a.x*l,vy:a.y*l,vz:a.z*l,ox:c.x-s.x,oy:c.y-s.y,oz:c.z-s.z,shooter:t,team:t.team,s:n,dmgMul:n.dmgMul,traveled:0,life:2.6,penLeft:n.pen,penDmg:1,tracer:h,whizzed:!1,weapon:n.name})}falloff(t,e){return e<=t.r0?t.dmg:e>=t.r1?t.dmgMin:Qt(t.dmg,t.dmgMin,(e-t.r0)/(t.r1-t.r0))}updateBullets(t){let e=this.game.fx,i=this.game.soldiers,n=this.world.collision,s=this.world.terrain.waterLevel;e.tracers.begin();for(let a=this.bullets.length-1;a>=0;a--){let o=this.bullets[a];o.life-=t;let l=t,c=o.life>0,h=0;for(;c&&l>0&&h++<4;){let u=l;l=0;let d=o.vy-9.81*u,f=o.x+o.vx*u,p=o.y+(o.vy+d)*.5*u,x=o.z+o.vz*u;o.vy=d;let g=f-o.x,m=p-o.y,v=x-o.z,y=Math.sqrt(g*g+m*m+v*v);if(y<1e-6)break;let M=g/y,T=m/y,w=v/y,S=n.raycast(o.x,o.y,o.z,M,T,w,y,{skipInside:!0,ignore:z=>z.cat==="cloth"}),C=S?S.t:1/0;if(s!==null&&(o.y-s)*(p-s)<0){let z=(o.y-s)/(o.y-p)*y;if(z<C){e.impact(o.x+M*z,s,o.z+w*z,0,1,0,"water"),this.game.audio.play3d("impactWater",o.x+M*z,s,o.z+w*z,{vol:.5,maxDist:60}),c=!1;break}}let _=null,b=C,A=null;for(let z=0;z<i.length;z++){let L=i[z];if(L===o.shooter||L.state==="dead"||L.team===o.team)continue;let U=L.pos.x,O=L.pos.y+.9,N=L.pos.z,q=U-o.x,F=O-o.y,X=N-o.z,j=Nt(q*M+F*T+X*w,0,y),lt=o.x+M*j-U,et=o.y+T*j-O,Rt=o.z+w*j-N,Y=lt*lt+et*et+Rt*Rt;if(Y>1.6*1.6){Y<4.5*4.5&&j<b&&this.nearMiss(o,L,Math.sqrt(Y),o.x+M*j,o.y+T*j,o.z+w*j);continue}let rt=L.hitSpheres();for(let gt=0;gt<rt.length;gt++){let nt=rt[gt],yt=Eh(o.x,o.y,o.z,g,m,v,nt[0],nt[1],nt[2],nt[3]);yt>=0&&yt*y<b&&(b=yt*y,_=L,A=nt[4])}(!_||_!==L)&&j<b&&this.nearMiss(o,L,Math.sqrt(Y)*.5,o.x+M*j,o.y+T*j,o.z+w*j)}if(_){let z=o.x+M*b,L=o.y+T*b,U=o.z+w*b,O=o.traveled+b,N=this.falloff(o.s,O)*o.dmgMul*o.penDmg,q=A==="head"?o.s.headMul||(o.s.type==="shotgun"?1.5:1.9):A==="leg"?.78:1;N*=q;let F=new R(M,T,w),X=_.state==="alive";_.takeDamage(N,o.shooter,A,o.weapon,F,!1),e.impact(z,L,U,-M,-T,-w,"flesh"),this.game.onHit(o.shooter,_,N,A,X),c=!1,o.x=z,o.y=L,o.z=U;break}if(S){let z=S.box?S.box.mat:this.terrainMat(S.x,S.z);if(e.impact(S.x,S.y,S.z,S.nx,S.ny,S.nz,z,S.box),Math.random()<.5&&this.game.audio.play3d(this.impactSound(z),S.x,S.y,S.z,{vol:.5,maxDist:50}),S.box&&S.box.destructible){let L=this.falloff(o.s,o.traveled+S.t)*(S.box.mat==="wood"||S.box.mat==="hay"||S.box.mat==="cloth"?.25:.04)*(o.s.pen>1?1.6:1);this.world.structures.damagePiece(S.box,L,e,"bullet")}if(S.box&&S.box.alive!==!1){let L=S.box.pen*Math.min(S.thickness,1.5)*4;if(L<o.penLeft){let U=1-L/o.penLeft;o.penLeft-=L,o.penDmg*=Math.max(.2,U);let O=S.x+M*(S.thickness+.02),N=S.y+T*(S.thickness+.02),q=S.z+w*(S.thickness+.02);o.traveled+=S.t+S.thickness,o.x=O,o.y=N,o.z=q;let F=Math.sqrt(o.vx*o.vx+o.vy*o.vy+o.vz*o.vz)*.85;o.vx=M*F,o.vy=T*F,o.vz=w*F,l=u*Math.max(0,(y-S.t-S.thickness)/y),e.impact(O,N,q,M,T,w,S.box.mat,S.box);continue}}else if(S.box){o.traveled+=S.t,o.x=S.x+M*.05,o.y=S.y+T*.05,o.z=S.z+w*.05,o.penDmg*=.7,l=u*Math.max(0,(y-S.t)/y);continue}c=!1,o.x=S.x,o.y=S.y,o.z=S.z;break}o.x=f,o.y=p,o.z=x,o.traveled+=y}if((o.traveled>1400||Math.abs(o.x)>this.world.terrain.half||Math.abs(o.z)>this.world.terrain.half)&&(c=!1),o.tracer){let u=Math.hypot(o.vx,o.vy,o.vz),d=Math.min(o.traveled,u*.03),f=1-Math.min(1,o.traveled/40),p=o.x+o.ox*f,x=o.y+o.oy*f,g=o.z+o.oz*f,m=1-Math.min(1,Math.max(0,o.traveled-d)/40),v=o.x-o.vx/u*d+o.ox*m,y=o.y-o.vy/u*d+o.oy*m,M=o.z-o.vz/u*d+o.oz*m,T=o.team===0?[1,.85,.5]:[1,.7,.4];e.tracers.add(v,y,M,p,x,g,T[0],T[1],T[2],.025)}c||this.bullets.splice(a,1)}e.tracers.end()}nearMiss(t,e,i,n,s,a){if(e.state==="alive"&&(t.nm||(t.nm=[]),!t.nm.includes(e))){if(t.nm.push(e),e.suppression=Math.min(1,e.suppression+(1-i/4.5)*(t.s.type==="sniper"?.45:.16)),e.isPlayer){let o=Math.hypot(t.vx,t.vy,t.vz)>343;this.game.audio.play3d(o?"crack":"whiz",n,s,a,{vol:.65,maxDist:10,reverb:.05})}e.brain&&e.brain.onNearMiss(t.shooter)}}terrainMat(t,e){let i=this.world.terrain,n=Math.round((t+i.half)/i.cell),s=Math.round((e+i.half)/i.cell),a=(Nt(s,0,i.n-1)*i.n+Nt(n,0,i.n-1))*4,o=i.splat;return o[a+2]>.5?"rock":this.world.def.biome==="arid"?o[a+3]>.5?"concrete":"sand":o[a]>.5?"grass":"dirt"}impactSound(t){switch(t){case"metal":case"container":return"impactMetal";case"wood":case"hay":return"impactWood";case"concrete":case"brick":case"stone":case"rock":case"plaster":return"impactHard";default:return"impactDirt"}}explode(t,e,i,n){let s=this.game.fx,a=n.radius||7,o=n.damage||120,l=this.world.terrain.normalAt(t,i),c=Math.abs(e-this.world.terrain.heightAt(t,i))<.8;s.explosion(t,e,i,n.scale||1,{ground:c,nx:l[0],ny:l[1],nz:l[2],fire:n.fire,dirt:this.world.def.biome==="arid"?[.6,.52,.38]:[.42,.36,.27]}),this.game.audio.explosion(t,e,i);for(let h of this.game.soldiers){if(h.state==="dead")continue;let u=h.center(es),d=Math.hypot(u.x-t,u.y-e,u.z-i);if(n.directional){let f=u.x-t,p=u.z-i,x=Math.hypot(f,p)||1;if(f/x*n.dx+p/x*n.dz<.35)continue}if(d<a){let f=o*Math.pow(1-d/a,1.1);this.world.collision.los(t,e+.3,i,u.x,u.y,u.z)||(f*=.25),h.takeDamage(f,n.attacker,"body",n.weapon,qh.set(u.x-t,u.y-e,u.z-i).normalize().clone(),!0),n.attacker&&n.attacker!==h&&h.team!==n.attacker.team&&this.game.onHit(n.attacker,h,f,"body",!0)}d<a*3&&h.state==="alive"&&(h.suppression=Math.min(1,h.suppression+(1-d/(a*3))*.8)),h.brain&&d<80&&h.brain.onSound(t,i,n.attacker,!0)}n.power&&this.world.structures.explode(t,e,i,a*(n.structRadiusMul||.8),n.power,s);for(let h of this.placed)(h.type==="c4"||h.type==="claymore")&&!h.dead&&Math.hypot(h.x-t,h.y-e,h.z-i)<2.5&&(h.dead=!0,setTimeout(()=>this.detonatePlaced(h),80))}spawnProjectile(t,e,i,n,s={}){let a=Kn(t==="launcher"?"frag":t==="rocket"?"rpg":t),o=new Ot(t==="rocket"?new Gn(.05,.4,6).rotateX(-Math.PI/2):a,Sn("weapon"));t==="rocket"&&(o.material=new de({color:5925450})),o.castShadow=!0,this.game.scene.add(o);let l=Object.assign({type:t,owner:e,team:e.team,x:i.x,y:i.y,z:i.z,vx:n.x,vy:n.y,vz:n.z,t:0,mesh:o,bounces:0,rest:!1},s);return l.fuse={frag:3.2,smoke:1.4,flash:1.6,impact:8,launcher:8,rocket:5,c4:30}[t]??3,this.projectiles.push(l),l}throwGrenade(t,e,i){let n=t.eye(new R),s=t.aimDir(new R),a=n.clone().addScaledVector(s,.5).add(t.right(new R).multiplyScalar(.15)),o=i||s.clone().multiplyScalar(e==="c4"?9:17).add(new R(0,2.2,0)).add(new R(t.vel.x*.5,0,t.vel.z*.5));this.spawnProjectile(e,t,a,o),this.game.audio.play3d("throw",a.x,a.y,a.z,{vol:.5,maxDist:25}),e!=="c4"&&this.game.onGrenadeThrown(t,e)}updateProjectiles(t){let e=this.world.collision,i=this.game.fx;for(let n=this.projectiles.length-1;n>=0;n--){let s=this.projectiles[n];s.t+=t;let a=s.t>=s.fuse;if(!s.rest&&!a){let o=s.type==="rocket"?2.5:s.type==="launcher"?9.81:15;s.vy-=o*t;let l=s.vx*t,c=s.vy*t,h=s.vz*t,u=Math.hypot(l,c,h);if(u>1e-5){let d=l/u,f=c/u,p=h/u,x=e.raycast(s.x,s.y,s.z,d,f,p,u+.05,{skipInside:!0});if(s.type==="rocket"||s.type==="launcher"||s.type==="impact")for(let g of this.game.soldiers){if(g.state==="dead"||g===s.owner||g.team===s.team)continue;let m=g.hitSpheres();for(let v of m){let y=Eh(s.x,s.y,s.z,l,c,h,v[0],v[1],v[2],v[3]+.1);y>=0&&(!x||y*u<x.t)&&(x={t:y*u,x:s.x+l*y,y:s.y+c*y,z:s.z+h*y,nx:-d,ny:-f,nz:-p,soldier:g})}}if(x)if(s.x=x.x+x.nx*.05,s.y=x.y+x.ny*.05,s.z=x.z+x.nz*.05,s.type==="rocket"||s.type==="impact"||s.type==="launcher"&&s.t>.12)a=!0;else if(s.type==="c4"){s.rest=!0,s.stuck=!0,s.vx=s.vy=s.vz=0,this.convertToPlaced(s,x),n=Math.min(n,this.projectiles.length);continue}else{let g=s.vx*x.nx+s.vy*x.ny+s.vz*x.nz;s.vx-=1.6*g*x.nx,s.vy-=1.6*g*x.ny,s.vz-=1.6*g*x.nz,s.vx*=.45,s.vy*=.45,s.vz*=.45,Math.abs(g)>2&&s.bounces++<8&&this.game.audio.play3d("bounce",s.x,s.y,s.z,{vol:.35,maxDist:30}),Math.hypot(s.vx,s.vy,s.vz)<.6&&x.ny>.5&&(s.rest=!0,s.vx=s.vy=s.vz=0)}else s.x+=l,s.y+=c,s.z+=h}s.type==="rocket"&&(i.smoke.emit(s.x,s.y,s.z,W(-.3,.3),W(0,.4),W(-.3,.3),1.6,.25,1.4,[.8,.8,.8,.5],[.7,.7,.7,0],1,-.2,1),i.glow.emit(s.x,s.y,s.z,0,0,0,.06,.5,.2,[1,.7,.3,1],[1,.4,.1,0],0,0))}s.mesh&&(s.mesh.position.set(s.x,s.y,s.z),s.type==="rocket"?s.mesh.lookAt(s.x+s.vx,s.y+s.vy,s.z+s.vz):s.rest||(s.mesh.rotation.x+=t*8)),a&&(this.projectiles.splice(n,1),s.mesh&&this.game.scene.remove(s.mesh),this.detonateProjectile(s))}}detonateProjectile(t){switch(t.type){case"frag":this.explode(t.x,t.y+.15,t.z,{radius:8,damage:160,power:160,attacker:t.owner,weapon:"Frag grenade",scale:.9});break;case"impact":this.explode(t.x,t.y+.1,t.z,{radius:5.5,damage:120,power:110,attacker:t.owner,weapon:"Impact grenade",scale:.7});break;case"launcher":this.explode(t.x,t.y+.1,t.z,{radius:6,damage:140,power:260,attacker:t.owner,weapon:"M320",scale:.85});break;case"rocket":this.explode(t.x,t.y,t.z,{radius:6.5,damage:210,power:900,structRadiusMul:.75,attacker:t.owner,weapon:"RPG-7",scale:1.3,fire:5});break;case"smoke":this.game.fx.addSmokeScreen(t.x,t.y,t.z,18),this.game.audio.play3d("pin",t.x,t.y,t.z,{vol:.5,maxDist:30});break;case"flash":this.flashbang(t);break}}flashbang(t){let e=this.game.fx;e.flashLight(t.x,t.y+.5,t.z,16777215,120,25,.25),e.flashes.emit(t.x,t.y+.3,t.z,0,0,0,.15,2,5,[1,1,1,1],[1,1,1,0],0,0),this.game.audio.play3d("explosion",t.x,t.y,t.z,{vol:.6,maxDist:150,rate:1.6});for(let i of this.game.soldiers){if(i.state!=="alive")continue;let n=i.eye(es),s=Math.hypot(n.x-t.x,n.y-t.y,n.z-t.z);if(s>18||!this.world.collision.los(t.x,t.y+.3,t.z,n.x,n.y,n.z))continue;let a=i.aimDir(qh),o=Ef.set(t.x-n.x,t.y-n.y,t.z-n.z).normalize(),l=(a.dot(o)+1)/2;i.flashed=Math.min(1,i.flashed+(1-s/18)*(.4+l*.8))}}convertToPlaced(t,e){t.mesh&&this.game.scene.remove(t.mesh);let i=this.projectiles.indexOf(t);i>=0&&this.projectiles.splice(i,1),this.place("c4",t.owner,t.x,t.y,t.z,0)}place(t,e,i,n,s,a){if(t==="beacon"||t==="rally")for(let h of this.placed)h.type===t&&h.owner===e&&!h.dead&&this.removePlaced(h);let o=Kn(t==="sandbags"?"sandbags":t),l=new Ot(o,Sn("weapon"));l.position.set(i,n+(t==="ammobox"?.07:t==="claymore"?.09:.06),s),l.rotation.y=a,(t==="ammobox"||t==="beacon"||t==="rally")&&l.scale.setScalar(2.2),l.castShadow=!0,this.game.scene.add(l);let c={type:t,owner:e,team:e.team,squad:e.squad,x:i,y:n,z:s,yaw:a,mesh:l,t:0,dead:!1,dx:-Math.sin(a),dz:-Math.cos(a),tick:0};return this.placed.push(c),t==="c4"&&(e.c4s=e.c4s||[],e.c4s.push(c)),(t==="rally"||t==="beacon")&&this.game.onSpawnPointPlaced(c),c}removePlaced(t){t.dead=!0,t.mesh&&this.game.scene.remove(t.mesh);let e=this.placed.indexOf(t);if(e>=0&&this.placed.splice(e,1),t.type==="c4"&&t.owner.c4s){let i=t.owner.c4s.indexOf(t);i>=0&&t.owner.c4s.splice(i,1)}}detonatePlaced(t){this.removePlaced(t),t.type==="c4"?this.explode(t.x,t.y+.1,t.z,{radius:7.5,damage:240,power:1500,structRadiusMul:.7,attacker:t.owner,weapon:"C4",scale:1.4,fire:4}):t.type==="claymore"&&this.explode(t.x,t.y+.5,t.z,{radius:7,damage:180,power:60,attacker:t.owner,weapon:"Claymore",scale:.7,directional:!0,dx:t.dx,dz:t.dz})}detonateC4(t){if(!t.c4s||!t.c4s.length)return!1;let e=t.c4s.slice();return this.game.audio.play3d("beep",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.6,maxDist:20}),e.forEach((i,n)=>setTimeout(()=>{i.dead||this.detonatePlaced(i)},150+n*90)),!0}updatePlaced(t){let e=this.game.time;for(let i=this.placed.length-1;i>=0;i--){let n=this.placed[i];if(n.t+=t,!n.dead)if(n.type==="claymore"&&n.t>1.5)for(let s of this.game.soldiers){if(s.state!=="alive"||s.team===n.team)continue;let a=s.pos.x-n.x,o=s.pos.z-n.z,l=s.pos.y-n.y,c=Math.hypot(a,o);if(!(c>3.6||Math.abs(l)>2||s.stance==="prone"&&Math.hypot(s.vel.x,s.vel.z)<.8)&&!(a/c*n.dx+o/c*n.dz<.3)){this.detonatePlaced(n);break}}else if(n.type==="ammobox"){if(n.tick+=t,n.tick>1.5){n.tick=0;for(let s of this.game.soldiers)s.state!=="alive"||s.team!==n.team||Math.hypot(s.pos.x-n.x,s.pos.z-n.z)>4||Math.abs(s.pos.y-n.y)>2.5||this.resupply(s,1)&&n.owner!==s&&n.owner.state!=="dead"&&this.game.addScore(n.owner,10,"RESUPPLY")}}else n.type==="rally"&&(n.blocked=this.game.soldiers.some(s=>s.state==="alive"&&s.team!==n.team&&Math.hypot(s.pos.x-n.x,s.pos.z-n.z)<18),n.t>300&&this.removePlaced(n))}}resupply(t,e){let i=!1;for(let n=0;n<2;n++){let s=t.slots[n];s&&s.reserve<s.stats.mag*s.stats.mags&&(s.reserve=Math.min(s.stats.mag*s.stats.mags,s.reserve+Math.ceil(s.stats.mag*.5*e)),i=!0)}if(t.resupplyAcc=(t.resupplyAcc||0)+e,t.resupplyAcc>=4){t.resupplyAcc=0;for(let n=2;n<5;n++){let s=t.slots[n];if(!s||s.def.count===1/0)continue;let a=n===4?t.loadout.cls==="assault"?3:2:s.def.count;s.count<a&&!["beacon","rally","ammobox"].includes(s.id)&&(s.count++,i=!0)}t.bandages<4&&(t.bandages++,i=!0)}return i}useGadget(t,e,i){let n=t.weapon;if(!n||n.kind!=="gadget"||t.state!=="alive"||t.switchT>0||t.actionT>0)return;let s=n.def.kind;if(s==="throw")e&&n.count>0&&(n.count--,t.startAction("throw",.42,{type:n.id}),this.game.audio.play3d("pin",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.4,maxDist:15}));else if(s==="launcher"||s==="rpg"){if(e&&n.count>0&&n.loaded){n.count--,n.loaded=!1;let a=t.eye(new R),o=t.aimDir(new R),l=s==="rpg"?t.adsT>.5?.6:3:t.adsT>.5?.5:2.5;o.x+=(Math.random()-.5)*l*Fr,o.y+=(Math.random()-.5)*l*Fr,o.normalize();let c=o.clone().multiplyScalar(s==="rpg"?115:72);this.spawnProjectile(s==="rpg"?"rocket":"launcher",t,a.clone().addScaledVector(o,.8),c),this.game.audio.play3d(s==="rpg"?"rocket":"shotgun",a.x,a.y,a.z,{vol:.9,maxDist:250}),t.pitch+=(s==="rpg"?3:2)*Fr,this.game.onGadgetFired(t,s),n.count>0&&t.startAction("reloadGadget",s==="rpg"?3.4:2.2,{slot:t.active})}}else if(s==="medkit")e&&t.medkitCd<=0&&(t.hp<100||t.bleed>0)&&t.startAction("medkitSelf",1.1);else if(s==="c4")i?this.detonateC4(t):e&&n.count>0&&(n.count--,t.startAction("throwC4",.4));else if(s==="place"){if(e&&(n.count>0||n.id==="beacon"||n.id==="rally")){let a=this.placementSpot(t);a?(n.id!=="beacon"&&n.id!=="rally"&&n.count--,t.startAction("place",.6,{gid:n.id,spot:a})):t.isPlayer&&this.game.hud&&this.game.hud.toast("Cannot place here")}}else s==="binoculars"&&e&&this.spot(t,t.adsT>.5?12:6,t.adsT>.5?2.2:5)}placementSpot(t){let e=this.world.collision,i=t.forward(new R),n=t.pos.x+i.x*1.4,s=t.pos.z+i.z*1.4,a=e.raycast(n,t.pos.y+1.4,s,0,-1,0,3,{});return!a||a.ny<.6||Math.abs(a.y-t.pos.y)>1.2||!e.los(t.pos.x,t.pos.y+1,t.pos.z,n,a.y+.5,s)?null:{x:n,y:a.y,z:s,yaw:t.yaw}}finishAction(t,e){switch(e.name){case"throw":if(this.throwGrenade(t,e.data.type,t.throwVel||null),t.throwVel=null,t.weapon.kind==="gadget"&&t.weapon.count<=0&&t.switchTo(t.quickReturn??0),t.quickReturn!==void 0&&t.quickReturn!==null){let i=t.quickReturn;t.quickReturn=null,t.switchTo(i)}break;case"melee":this.meleeHit(t);break;case"throwC4":this.throwGrenade(t,"c4",t.throwVel||null),t.throwVel=null;break;case"bandage":t.bandages--,t.bleed=0,t.healT+=15;break;case"medkitSelf":t.bleed=0,t.healT+=50,t.medkitCd=5;break;case"medkitOther":e.data.target.state==="alive"&&(e.data.target.bleed=0,e.data.target.healT+=60,this.game.addScore(t,20,"HEAL"),t.stats.heals++),t.medkitCd=2.5;break;case"reloadGadget":{let i=t.slots[e.data.slot];i&&(i.loaded=!0);break}case"place":{let{gid:i,spot:n}=e.data;i==="sandbags"?this.world.structures.addSandbag(n.x,n.y,n.z,t.yaw):this.place(i,t,n.x,n.y,n.z,t.yaw),this.game.audio.play3d("switch",n.x,n.y,n.z,{vol:.6,maxDist:20});let s=t.slots.find(a=>a&&a.id===i);s&&s.count<=0&&i!=="beacon"&&i!=="rally"&&t.active>=2&&t.switchTo(0);break}}}melee(t){return t.state!=="alive"||t.actionT>0||t.switchT>0||t.vault||t.swimming?!1:(t.reloadT=0,t.startAction("melee",.34),this.game.audio.play3d("throw",t.pos.x,t.pos.y+1.4,t.pos.z,{vol:.5,maxDist:20,rate:1.4}),!0)}meleeHit(t){let e=t.eye(new R),i=t.forward(new R),n=null,s=2.4;for(let u of this.game.soldiers){if(u===t||u.team===t.team||u.state==="dead")continue;let d=u.center(es),f=d.x-e.x,p=d.z-e.z,x=Math.hypot(f,p);x>s||Math.abs(d.y-e.y)>1.8||f/x*i.x+p/x*i.z<.55||this.world.collision.los(e.x,e.y-.3,e.z,d.x,d.y,d.z)&&(s=x,n=u)}if(!n){this.game.audio.play3d("impactDirt",e.x,e.y,e.z,{vol:.15,maxDist:10});return}let a=n.forward(qh),o=a.x*i.x+a.z*i.z>.4,l=n.state==="downed"||o?250:80,c=n.state==="alive",h=n.center(es);n.takeDamage(l,t,"body","Knife",i.clone(),!1),this.game.fx.impact(h.x,h.y+.2,h.z,-i.x,0,-i.z,"flesh"),this.game.audio.play3d("impactFlesh",h.x,h.y,h.z,{vol:.8,maxDist:25}),this.game.onHit(t,n,l,"body",c),n.brain&&n.brain.onDamaged(t,i)}spot(t,e=6,i=5){let n=t.eye(new R),s=t.aimDir(new R),a=0;for(let o of this.game.soldiers){if(o.team===t.team||o.state==="dead")continue;let l=o.center(es),c=Ef.set(l.x-n.x,l.y-n.y,l.z-n.z),h=c.length();h>450||(c.divideScalar(h),Math.acos(Nt(c.dot(s),-1,1))/Fr>Math.max(i,60/Math.max(h,1)))||this.world.collision.los(n.x,n.y,n.z,l.x,l.y,l.z)&&(o.spotUntil=this.game.time+e,a++)}return a&&(this.game.audio.play2d("beep",{vol:t.isPlayer?.3:0}),t.isPlayer&&this.game.addScore(t,0,a>1?`SPOTTED ${a}`:"SPOTTED")),a}update(t){this.updateBullets(t),this.updateProjectiles(t),this.updatePlaced(t)}clear(){for(let t of this.projectiles)t.mesh&&this.game.scene.remove(t.mesh);for(let t of this.placed)t.mesh&&this.game.scene.remove(t.mesh);this.bullets=[],this.projectiles=[],this.placed=[]}static solveBallistic(t,e,i,n){let s=e.x-t.x,a=e.z-t.z,o=e.y-t.y,l=Math.hypot(s,a),c=i*i,h=c*c-n*(n*l*l+2*o*c);if(h<0)return null;let u=Math.atan2(c-Math.sqrt(h),n*l),d=Math.cos(u)*i,f=Math.sin(u)*i;return new R(s/l*d,f,a/l*d)}};var O1=[["ALPHA","BRAVO","CHARLIE","DELTA"],["ECHO","FOXTROT","GOLF","HOTEL"]],qa=class{constructor(t){this.game=t,this.list=[[],[]],this.evalT=[0,2],this.enemyHeat=[null,null]}build(t,e=4){for(let i=0;i<2;i++){this.list[i]=[];let n=t[i],s=Math.ceil(n.length/e);for(let a=0;a<s;a++){let o={id:a,team:i,name:O1[i][a]||`S${a}`,members:[],leader:null,order:null,orderT:0};this.list[i].push(o)}n.forEach((a,o)=>{let l=this.list[i][Math.floor(o/e)];l.members.push(a),a.squad=l});for(let a of this.list[i])this.pickLeader(a)}}pickLeader(t){let e=t.members.find(i=>i.isPlayer&&i.loadout&&i.loadout.cls==="leader");t.leader=e||t.members.find(i=>i.loadout&&i.loadout.cls==="leader")||t.members.find(i=>!i.isPlayer)||t.members[0]}playerIsLeader(t){return t.leader&&t.leader.isPlayer}objectiveFor(t){let e=t.squad,i=e&&e.order;if(!i){let o=this.game.world.def.hq[1-t.team];return{x:o.x*.3,z:o.z*.3,r:30,hold:!1}}if(i.type==="follow"){let o=e.leader;if(o&&o.state==="alive"){let c=e.members.indexOf(t)*1.9+.7;return{x:o.pos.x+Math.cos(c)*5,z:o.pos.z+Math.sin(c)*5,r:6,hold:!1}}}let s=e.members.indexOf(t)*1.7+e.id,a=i.flag?i.flag.r*.35:4;return{x:i.x+Math.cos(s)*a,z:i.z+Math.sin(s)*a,r:i.flag?i.flag.r:15,hold:i.type!=="move",cx:i.x,cz:i.z,type:i.type}}orderType(t){return t.squad&&t.squad.order?t.squad.order.type:"attack"}threatPoint(t,e){let i=this.enemyHeat[t];if(i&&this.game.time-i.t<20)return i;let n=this.game.mode,s=null,a=1e9;for(let l of n.flags){if(l.owner!==1-t)continue;let c=Math.hypot(l.x-e.x,l.z-e.z);c<a&&c>5&&(a=c,s=l)}if(s)return{x:s.x,y:s.y,z:s.z};let o=this.game.world.def.hq[1-t];return{x:o.x,y:this.game.world.terrain.heightAt(o.x,o.z),z:o.z}}setOrder(t,e,i,n,s){t.order={type:e,flag:i||null,x:i?i.x:n,z:i?i.z:s,t:this.game.time};for(let a of t.members)a.brain&&(a.brain.holdSpot=null,a.brain.path=null)}update(t){let e=this.game;for(let i=0;i<2;i++){let n=0,s=0,a=0;for(let o of e.teams[i])if(!(!o.brain||o.state!=="alive"))for(let[,l]of o.brain.known)e.time-l.t<5&&(n+=l.x,s+=l.z,a++);a>0&&(this.enemyHeat[i]={x:n/a,y:e.world.terrain.heightAt(n/a,s/a),z:s/a,t:e.time}),this.evalT[i]-=t,!(this.evalT[i]>0)&&(this.evalT[i]=5,this.assign(i))}}assign(t){let e=this.game,i=e.mode,n=this.list[t].filter(p=>!this.playerIsLeader(p));if(i.type==="tdm"){let p=this.enemyHeat[t],x=e.world.def.flags;for(let g of n){if(g.order&&e.time-g.order.t<25&&Math.random()<.7)continue;let m;if(p&&Math.random()<.6){let v=null,y=1e9;for(let M of x){let T=Math.hypot(M.x-p.x,M.z-p.z)+W(0,60);T<y&&(y=T,v=M)}m=v}else m=x[Math.floor(Math.random()*x.length)];this.setOrder(g,"attack",null,m.x+W(-15,15),m.z+W(-15,15)),g.order.flag={x:g.order.x,z:g.order.z,r:22}}return}let s=i.flags,a=new Map;for(let p of this.list[t])p.order&&p.order.flag&&this.playerIsLeader(p)&&a.set(p.order.flag,(a.get(p.order.flag)||0)+1);let o=[0,0];for(let p of s)p.owner>=0&&o[p.owner]++;let l=o[t]<o[1-t]||i.tickets[t]<i.tickets[1-t]-30,c=p=>p.counts[1-t]>0||p.capTeam===1-t||Math.abs(p.progress)<.85,h=(p,x)=>{let g=this.centroid(p),m=null,v=-1e9;for(let y of s){let M;if(y.owner===t){if(c(y))M=1.45;else if(x)M=.1;else continue;if(i.type==="frontline"){let S=s.some(C=>C.owner!==t&&Math.abs(C.index-y.index)===1);M+=S?.35:-.4}}else if(i.capturable(y,t))M=(y.owner===-1?1.2:1)+(l?.25:0);else continue;let T=g?Math.hypot(g.x-y.x,g.z-y.z):300;M-=T/1400;let w=a.get(y)||0;M-=w*(y.owner===t&&!c(y)?1.2:.45),p.order&&p.order.flag===y&&(M+=.25),M+=W(0,.12),M>v&&(v=M,m=y)}return m},u=0,d=[];for(let p of n){let x=h(p,!0);x&&(a.set(x,(a.get(x)||0)+1),d.push([p,x]),x.owner!==t&&u++)}let f=Math.min(n.length,l?3:2);for(let p of d){if(u>=f)break;let[x,g]=p;if(g.owner===t&&!c(g)){let m=h(x,!1);m&&m.owner!==t&&(a.set(g,a.get(g)-1),a.set(m,(a.get(m)||0)+1),p[1]=m,u++)}}for(let[p,x]of d)!p.order||p.order.flag!==x?this.setOrder(p,x.owner===t?"defend":"attack",x):p.order.type=x.owner===t?"defend":"attack",p.order.ownedByUs=x.owner===t}centroid(t){let e=0,i=0,n=0;for(let s of t.members)s.state==="alive"&&(e+=s.pos.x,i+=s.pos.z,n++);return n?{x:e/n,z:i/n}:null}};var Xa={stand:{h:1.8,eye:1.62,speed:4.3},crouch:{h:1.25,eye:1.12,speed:2.5},prone:{h:.62,eye:.42,speed:1}},B1=6.7,H1=20,V1=1,Ya=class{constructor(t,e,i,n=!1){this.game=t,this.id=V1++,this.team=e,this.name=i,this.isPlayer=n,this.squad=null,this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.lean=0,this.leanTarget=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.move={grounded:!0,hitWall:!1},this.input={mx:0,mz:0,sprint:!1,jump:!1,crouch:!1,prone:!1,fire:!1,ads:!1,lean:0},this.state="dead",this.hp=100,this.bleed=0,this.downedHp=100,this.downedTime=0,this.lastDamage=-99,this.lastAttacker=null,this.damagers=new Map,this.stats={kills:0,deaths:0,assists:0,revives:0,score:0,caps:0,heals:0},this.slots=[],this.active=0,this.prevActive=0,this.fireCd=0,this.reloadT=0,this.switchT=0,this.actionT=0,this.action=null,this.adsT=0,this.bloom=0,this.triggerHeld=!1,this.burst=0,this.boltT=0,this.recoilPitch=0,this.recoilYaw=0,this.spotUntil=0,this.lastShotTime=-99,this.lastLoudShot=-99,this.walkPhase=0,this.vault=null,this.swimming=!1,this.inWater=!1,this.fallVel=0,this.spawnProtect=0,this.reviveTarget=null,this.reviveProgress=0,this.suppression=0,this.flashed=0,this.flashlightOn=!1,this.rig=null,this.deathPose=0,this.deathDir=1,this.deadTime=0,this.stepAcc=0,this.healT=0,this.bandages=4,this.medkitCd=0,this.swayP=0,this.swayY=0,this.holdingBreath=!1}get alive(){return this.state==="alive"}get downed(){return this.state==="downed"}get cls(){return this.loadout?this.loadout.cls:"assault"}get isMedic(){return this.cls==="medic"}ensureRig(){let t=this.id*7;this.rig&&this.rigCls===this.cls||(this.rig&&this.game.scene.remove(this.rig.root),this.rig=Ma(this.team,this.cls,t),this.rigCls=this.cls,this.rig.root.visible=!this.isPlayer,this.game.scene.add(this.rig.root),(this.game.player&&this.team!==this.game.player.team||!this.game.player&&this.team!==(this.game.config.team??0))&&(this.rig.outlineOn=this.game.settings.get("enemyOutline")!==!1,hf(this.rig,this.rig.outlineOn)))}setLoadout(t){this.loadout=t;let e=(s,a)=>{let o=Xd(s,a);return{kind:"gun",id:s,att:a,stats:o,mag:o.mag,reserve:o.mag*o.mags,mode:0,model:Cr(s,a)}},i=di[t.cls],n=s=>({kind:"gadget",id:s,def:rn[s],count:rn[s].count,loaded:!0,model:Kn(s)});this.slots=[e(t.primary,t.att),e(t.secondary,t.satt),n(i.gadgets[0]),n(i.gadgets[1]),Object.assign(n(t.throwable),{count:i.throwables})],this.bandages=4,this.heavy=t.armor==="heavy",this.ensureRig()}get weapon(){return this.slots[this.active]}get gun(){let t=this.slots[this.active];return t&&t.kind==="gun"?t:null}spawn(t,e,i,n){this.pos.set(t,e,i),this.vel.set(0,0,0),this.yaw=n,this.pitch=0,this.lean=0,this.state="alive",this.hp=100,this.bleed=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.active=0,this.switchT=.4,this.reloadT=0,this.fireCd=0,this.action=null,this.actionT=0,this.adsT=0,this.bloom=0,this.recoilPitch=0,this.recoilYaw=0,this.vault=null,this.damagers.clear(),this.lastAttacker=null,this.lastDamage=-99,this.spawnProtect=2.5,this.suppression=0,this.flashed=0,this.deathPose=0,this.reviveProgress=0,this.swimming=!1,this.move.grounded=!0,this.ensureRig(),this.rig.root.visible=!this.isPlayer,this.syncWeaponModel(),this.spawnTime=this.game.time}syncWeaponModel(){let t=this.weapon;if(!this.rig||!t)return;let e=t.kind==="gun"?t.model.pistol?"pistol":"rifle":t.id==="rpg"||t.id==="m320"?"rifle":"gadget";ba(this.rig,t.kind==="gun"?t.model.geo:t.model,e)}eye(t=new R){let e=this.right();return t.set(this.pos.x+e.x*this.lean*.58,this.pos.y+this.eyeH-Math.abs(this.lean)*.1,this.pos.z+e.z*this.lean*.58),t}forward(t=new R){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(t=new R){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}aimDir(t=new R){let e=this.pitch+this.swayP,i=this.yaw+this.swayY,n=Math.cos(e);return t.set(-Math.sin(i)*n,Math.sin(e),-Math.cos(i)*n)}center(t=new R){return t.set(this.pos.x,this.pos.y+this.bodyH*.6,this.pos.z)}headPos(t=new R){let e=this.hitSpheres();return t.set(e[0][0],e[0][1],e[0][2])}hitSpheres(){if(this.rigHS&&this.state!=="dead"&&this.game.frame-this.rigHSFrame<6){let o=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),l=this.pos.x-this.rigHSPos.x,c=this.pos.y-this.rigHSPos.y,h=this.pos.z-this.rigHSPos.z,u=this.rigHS;for(let d=0;d<7;d++)o[d][0]=u[d*4]+l,o[d][1]=u[d*4+1]+c,o[d][2]=u[d*4+2]+h,o[d][3]=u[d*4+3];return o}let t=this.pos,e=this.forward(Xh),i=this.right(Af),n=this.lean*.5,s=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),a=(o,l,c,h,u)=>{s[o][0]=t.x+e.x*l+i.x*h,s[o][1]=t.y+c,s[o][2]=t.z+e.z*l+i.z*h,s[o][3]=u};if(this.state==="downed"||this.state==="dead"||this.stance==="prone"){let o=this.state==="alive"?1:-1;a(0,.78*o,.28,0,.14),a(1,.42*o,.24,0,.22),a(2,.05*o,.22,0,.21),a(3,-.4*o,.15,-.12,.13),a(4,-.4*o,.15,.12,.13),a(5,-.8*o,.13,-.12,.12),a(6,-.8*o,.13,.12,.12)}else this.stance==="crouch"?(a(0,.04,1.34,n*1.2,.15),a(1,.02,1,n,.23),a(2,0,.77,n*.5,.2),a(3,.2,.5,.1,.12),a(4,-.05,.42,-.1,.12),a(5,.38,.22,.1,.11),a(6,-.3,.12,-.1,.11)):(a(0,.02,1.69,n*1.2,.15),a(1,0,1.36,n,.23),a(2,0,1.1,n*.5,.2),a(3,0,.72,-.1,.14),a(4,0,.72,.1,.14),a(5,0,.3,-.1,.13),a(6,0,.3,.1,.13));return s}setStance(t){if(t===this.stance)return!0;let e=Xa[t].h;return e>this.bodyH+.01&&this.game.world.collision.overlapsAny(this.pos.x,this.pos.y+.05,this.pos.z,.28,e-.05)?!1:(this.stance=t,this.bodyH=e,!0)}speedTarget(){if(this.swimming)return 2.2;let t=Xa[this.stance].speed,e=this.gun,i=e?e.stats.moveMul:1.02;return this.sprinting?t=B1:this.adsT>.5&&(t=Math.min(t,this.stance==="stand"?2.7:t*.8)),this.heavy&&(t*=.94),this.bleed>0&&this.hp<30&&(t*=.85),t*i}updateMovement(t){let e=this.game.world.collision,i=this.input;if(this.vault){this.updateVault(t);return}i.prone&&this.stance!=="prone"?this.setStance("prone")&&(i.prone=!1):i.crouch&&this.stance==="stand"?this.setStance("crouch"):!i.crouch&&!i.proneHold&&this.stance==="crouch"&&!(this.slideT>0)&&this.setStance("stand");let n=Math.abs(i.mx)+Math.abs(i.mz)>.05;if(this.sprinting=i.sprint&&n&&i.mz<-.3&&this.stance!=="prone"&&!this.swimming&&this.adsT<.3&&this.actionT<=0,this.sprinting&&this.stance==="crouch"&&this.setStance("stand"),this.sprinting&&this.reloadT>0&&!this.isPlayer&&(this.sprinting=!1),i.slide&&(i.slide=!1,this.wasSprinting&&this.move.grounded&&!this.swimming)){let T=Math.hypot(this.vel.x,this.vel.z)||1,w=Math.max(T,8.4)/T;this.vel.x*=w,this.vel.z*=w,this.slideT=.85,this.stance="crouch",this.bodyH=Xa.crouch.h,this.game.onVault(this)}this.wasSprinting=this.sprinting;let s=this.slideT>0;s&&(this.slideT-=t,this.sprinting=!1,(Math.hypot(this.vel.x,this.vel.z)<2.6||!this.move.grounded)&&(this.slideT=0));let a=this.forward(Xh),o=this.right(Af),l=a.x*-i.mz+o.x*i.mx,c=a.z*-i.mz+o.z*i.mx,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let u=this.speedTarget();i.mz>.3&&!this.swimming&&(u*=.8);let d=l*u,f=c*u,p=this.move.grounded||this.swimming?n?38:26:5;if(s){let T=Math.max(0,1-1.4*t);this.vel.x=this.vel.x*T+d*.6*t,this.vel.z=this.vel.z*T+f*.6*t}else this.vel.x+=(d-this.vel.x)*Math.min(1,p*t/4),this.vel.z+=(f-this.vel.z)*Math.min(1,p*t/4);let x=this.game.world.terrain.waterLevel,g=this.game.world.terrain.heightAt(this.pos.x,this.pos.z);this.inWater=x!==null&&this.pos.y<x-.2;let m=x!==null&&g<x-1.25&&this.pos.y<x-1.1;if(m&&!this.swimming&&(this.swimming=!0,this.setStance("stand")),this.swimming&&(!m||g>x-1.2)&&(this.swimming=!1),this.swimming){let T=x-1.35;this.vel.y+=(T-this.pos.y)*6*t-this.vel.y*3*t,i.jump&&this.pos.y>T-.3&&this.tryVault(!0)}else this.vel.y-=H1*t,i.jump&&(i.jump=!1,!this.tryVault(!1)&&this.move.grounded&&(this.stance!=="stand"?this.setStance("stand"):(this.vel.y=5.4,this.move.grounded=!1)));let v=this.vel.y,y=this.move.grounded;e.move(this.pos,this.vel,t,.3,this.bodyH,this.move.grounded?.48:.1,this.move),this.move.grounded&&!y&&v<-12.5&&!this.swimming&&this.takeDamage((-v-12.5)*9,null,"fall","Fall",null,!1);let M=Math.hypot(this.vel.x,this.vel.z);if(this.move.grounded&&M>.5){this.walkPhase+=M*t*(this.sprinting?1.7:2.1),this.stepAcc+=M*t;let T=this.sprinting?1.9:1.5;this.stepAcc>T&&(this.stepAcc=0,this.game.onFootstep(this,this.sprinting?1:this.stance==="stand"?.6:.3))}}tryVault(t){if(this.stance==="prone"||this.state!=="alive")return!1;let e=this.game.world.collision,i=this.forward(Xh),n=this.pos.y,s=!1;for(let a of[.6,1,1.4]){let o=e.raycast(this.pos.x,n+a,this.pos.z,i.x,0,i.z,.9,{terrain:!0});if(o&&o.t<.85){s=!0;break}}if(!s)return!1;for(let a of[.55,.8,1.05]){let o=this.pos.x+i.x*a,l=this.pos.z+i.z*a,c=e.raycast(o,n+2.5,l,0,-1,0,2.5,{});if(!c)continue;let h=c.y-n;if(h<.45||h>(t?2.6:2.25))continue;if(e.overlapsAny(o,c.y+.05,l,.28,1.2)){let p=this.pos.x+i.x*1.6,x=this.pos.z+i.z*1.6;if(h<1.3&&!e.overlapsAny(p,n+.05,x,.28,1.2))return this.startVault(p,e.groundAt(p,x,n+1.5),x,.55,c.y),!0;continue}let u=this.pos.x+i.x*1.7,d=this.pos.z+i.z*1.7,f=e.raycast(u,n+2.5,d,0,-1,0,3.5,{});return h<1.3&&f&&f.y<c.y-.4&&!e.overlapsAny(u,f.y+.05,d,.28,1.6)?this.startVault(u,f.y,d,.5,c.y):this.startVault(o,c.y,l,h>1.3?.75:.42,c.y),!0}return!1}startVault(t,e,i,n,s){this.vault={sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,x:t,y:e,z:i,t:0,dur:n,apex:Math.max(s,e)+.25},this.vel.set(0,0,0),this.swimming=!1,this.stance!=="stand"&&this.setStance("stand"),this.game.onVault(this)}updateVault(t){let e=this.vault;e.t+=t/e.dur;let i=Math.min(1,e.t),n=Math.min(1,i/.55);this.pos.x=Qt(e.sx,e.x,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.z=Qt(e.sz,e.z,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.y=i<.55?Qt(e.sy,e.apex,Math.sin(n*Math.PI/2)):Qt(e.apex,e.y,(i-.55)/.45),i>=1&&(this.pos.set(e.x,e.y,e.z),this.vault=null,this.move.grounded=!0)}spread(){let t=this.gun;if(!t)return 2;let e=t.stats,i=Math.hypot(this.vel.x,this.vel.z),n=Math.min(1.5,i/4.3),s=e.spreadHip*e.hipMul*(1+n*.9),a=e.spreadAds*.55*(1+n*.35);this.burst<=1&&i<.5&&(a*=.35);let o=this.adsT*this.adsT*(3-2*this.adsT),l=Qt(s,a,o);return this.stance==="crouch"?l*=.8:this.stance==="prone"&&(l*=.6),this.move.grounded||(l*=2.5),l+=this.bloom*Qt(1,.18,o),Math.abs(this.lean)>.5&&this.adsT>.5&&(l*=.85),e.type==="sniper"&&this.adsT>.95&&(l=0),l}recoilFactor(){let t=1;this.stance==="crouch"&&(t*=.82),this.stance==="prone"&&(t*=.65);let e=this.gun;return e&&e.stats.bipod&&(this.stance==="prone"||this.stance==="crouch")&&(t*=.45),this.adsT<.5&&(t*=1.15),t}canFire(){return this.state==="alive"&&this.switchT<=0&&this.reloadT<=0&&this.actionT<=0&&!this.sprinting&&!this.vault&&!this.swimming&&this.boltT<=0}updateWeapon(t,e){if(this.fireCd-=t,this.boltT-=t,this.switchT>0&&(this.switchT-=t),this.medkitCd>0&&(this.medkitCd-=t),this.actionT>0&&(this.actionT-=t,this.actionT<=0&&this.finishAction()),this.reloadT>0){this.reloadT-=t;let y=this.gun;if(y&&y.stats.shellReload&&this.reloadT<=0)y.reserve>0&&y.mag<y.stats.mag&&(y.mag++,y.reserve--,this.game.onReloadSound(this,"magIn")),y.mag<y.stats.mag&&y.reserve>0&&!this.input.fire&&(this.reloadT=y.stats.reload);else if(y&&this.reloadT<=0){let M=y.stats.mag-y.mag,T=Math.min(M,y.reserve);y.mag+=T,y.reserve-=T,this.game.onReloadSound(this,"magIn")}}this.bloom=Math.max(0,this.bloom-t*6);let i=this.gun,n=this.input.ads&&this.state==="alive"&&!this.sprinting&&this.switchT<=0&&!this.swimming&&!this.vault&&(i||this.weapon&&this.weapon.id==="binoculars"),s=i?1/(i.stats.adsTime*i.stats.adsMul):6;this.adsT=Nt(this.adsT+(n?s:-s*1.4)*t,0,1);let a=Math.min(1,t*7),o=this.recoilPitch*a,l=this.recoilYaw*a;if(this.recoilPitch-=o,this.recoilYaw-=l,!this.triggerHeld||this.fireCd<-.1){let y=this.adsT>.5;this.pitch-=o*(y?.7:.55),this.yaw-=l*(y?.6:.4)}if(!i)return this.triggerHeld=this.input.fire,!1;let c=i.stats,h=c.modes[i.mode]||"auto",u=this.input.fire&&!this.triggerHeld;if(this.triggerHeld=this.input.fire,this.input.fire&&i.stats.shellReload&&this.reloadT>0&&i.mag>0&&(this.reloadT=0),!this.input.fire)return this.burst=0,!1;if(!this.canFire()||h!=="auto"&&!u&&!(this.autoRepeat&&h==="semi")||this.fireCd>0)return!1;if(i.mag<=0)return u&&this.game.onDryFire(this),i.reserve>0&&this.reload(),!1;i.mag--,this.fireCd=c.interval,(c.bolt||c.pump)&&(this.boltT=c.interval*.9),this.burst++,this.lastShotTime=e,c.suppressed||(this.lastLoudShot=e);let d=c.pellets||1;for(let y=0;y<d;y++)this.game.combat.fireBullet(this,i,y);let f=this.recoilFactor(),p=this.burst,x=c.rpm%7+c.mag*.13,g=this.adsT>.5,m=g?c.recoilV*c.recoilVMul*f*(p>1?1-Math.min(.25,p*.015):1.15)*(.92+Math.random()*.16):c.recoilV*c.recoilVMul*f*(p>1?1:1.25),v=g?(Math.sin(p*.55+x)*.75+(Math.random()-.5)*.5)*c.recoilH*c.recoilHMul*f:(Math.random()-.5)*2*c.recoilH*c.recoilHMul*f;return this.pitch+=m*Math.PI/180,this.yaw-=v*Math.PI/180,this.recoilPitch+=m*Math.PI/180,this.recoilYaw-=v*Math.PI/180,this.bloom=Math.min(c.type==="lmg"?3:2.2,this.bloom+c.recoilV*.6),this.pitch=Nt(this.pitch,-1.5,1.5),this.game.onShot(this,i),i.mag===0&&i.reserve>0&&!this.isPlayer&&this.reload(),!0}reload(){let t=this.gun;return!t||this.reloadT>0||t.mag>=t.stats.mag||t.reserve<=0||this.state!=="alive"||this.actionT>0?!1:(this.reloadT=t.stats.shellReload?t.stats.reload+.3:t.mag===0?t.stats.reloadEmpty:t.stats.reload,this.reloadTotal=this.reloadT,this.game.onReloadSound(this,"magOut"),!0)}switchTo(t){if(t===this.active||!this.slots[t]||this.state!=="alive")return;let e=this.slots[t];e.kind==="gadget"&&e.count<=0&&e.def.kind!=="medkit"&&e.def.kind!=="binoculars"&&!(e.def.kind==="c4"&&this.c4s&&this.c4s.length)||(this.prevActive=this.active,this.active=t,this.switchT=.45,this.reloadT=0,this.action=null,this.actionT=0,this.adsT=Math.min(this.adsT,.2),this.syncWeaponModel(),this.game.onSwitch(this))}cycleMode(){let t=this.gun;!t||t.stats.modes.length<2||(t.mode=(t.mode+1)%t.stats.modes.length)}startAction(t,e,i){return this.actionT>0||this.state!=="alive"?!1:(this.action={name:t,data:i},this.actionT=e,this.actionDur=e,this.reloadT=0,!0)}finishAction(){let t=this.action;this.action=null,!(!t||this.state!=="alive")&&this.game.combat.finishAction(this,t)}bandage(){return this.bandages<=0||this.bleed<=0&&this.hp>=100?!1:this.startAction("bandage",1.8)?(this.game.onBandage(this),!0):!1}takeDamage(t,e,i,n,s,a){if(this.state==="dead"||this.spawnProtect>0&&e&&e!==this||e&&e!==this&&e.team===this.team)return;let o=this.game.time;if(this.heavy&&i!=="head"&&(t*=.86),this.lastDamage=o,e&&e!==this&&(this.lastAttacker=e,this.damagers.set(e,(this.damagers.get(e)||0)+t),this.lastDamageDir=s?s.clone():null),this.state==="downed"){this.downedHp-=t*1.5,this.downedHp<=0&&this.die(e,n,i==="head",!0);return}if(this.hp-=t,t>=12&&i!=="fall"&&(this.bleed=Math.min(3.5,this.bleed+t*.012)),this.game.onDamaged(this,e,t,i,s),this.hp<=0){let l=-this.hp;l>70||i==="head"&&t>90||a&&l>40||this.swimming?this.die(e,n,i==="head",!1):this.goDown(e,n,i==="head")}}goDown(t,e,i){this.state="downed",this.hp=0,this.downedHp=100,this.downedTime=0,this.setStance("prone"),this.stance="prone",this.bodyH=.6,this.vel.x=this.vel.z=0,this.adsT=0,this.reloadT=0,this.action=null,this.actionT=0,this.vault=null,this.reviveProgress=0,this.game.onDowned(this,t,e,i)}die(t,e,i,n){if(this.state==="dead")return;let s=this.state==="downed";this.state="dead",this.deadTime=0,this.deathDir=Math.random()<.5?-1:1,this.stats.deaths++,this.game.onKilled(this,t||this.lastAttacker,e,i,s)}revive(t){this.state==="downed"&&(this.state="alive",this.hp=t&&t.isMedic?100:40,this.bleed=0,this.setStance("crouch"),this.spawnProtect=1.2,this.game.onRevived(this,t))}heal(t){this.hp=Math.min(100,this.hp+t)}updateSway(t,e){let i=this.gun,n=this.isPlayer&&i&&this.adsT>.3&&(i.stats.zoom>=3.5||i.stats.type==="sniper"||i.stats.type==="dmr"),s=0;n&&(s=(i.stats.type==="sniper"?.55:.35)*Math.PI/180,this.stance==="crouch"?s*=.6:this.stance==="prone"&&(s*=.3),i.stats.bipod&&this.stance!=="stand"&&(s*=.4),Math.abs(this.lean)>.5&&(s*=.7),Math.hypot(this.vel.x,this.vel.z)>.5&&(s*=1.8),this.holdingBreath&&(s*=.08),s*=1+this.suppression*2.5);let a=Math.sin(e*.83)*s+Math.sin(e*2.1+1)*s*.35,o=Math.sin(e*1.37+2)*s*.8+Math.sin(e*2.9)*s*.25,l=1-Math.exp(-t*6);this.swayY+=(a-this.swayY)*l,this.swayP+=(o-this.swayP)*l}updateVitals(t,e){this.updateSway(t,e),this.spawnProtect>0&&(this.spawnProtect-=t,(this.input.fire||Math.hypot(this.vel.x,this.vel.z)>2)&&(this.spawnProtect=Math.min(this.spawnProtect,.5))),this.suppression=Math.max(0,this.suppression-t*.35),this.flashed=Math.max(0,this.flashed-t*.4),this.lean=ei(this.lean,this.state==="alive"&&!this.sprinting?this.leanTarget:0,12,t);let i=this.state==="alive"?Xa[this.stance].eye:.35;if(this.eyeH=ei(this.eyeH,i,10,t),this.state==="alive"){if(this.bleed>0?(this.hp-=this.bleed*t,this.hp<=0&&(this.hp=0,this.goDown(this.lastAttacker,"Bleeding",!1))):e-this.lastDamage>7&&this.hp<60&&(this.hp=Math.min(60,this.hp+4*t)),this.healT>0){let n=Math.min(this.healT,30*t);this.healT-=n,this.heal(n)}}else this.state==="downed"?(this.downedTime+=t,this.downedHp-=t*100/28,this.downedHp<=0&&this.die(this.lastAttacker,"Bled out",!1,!0)):this.state==="dead"&&(this.deadTime+=t)}updateAnim(t,e){let i=this.rig;if(!i)return;if(this.isPlayer){i.root.visible=!1;return}if(this.state==="dead"&&this.deadTime>25){i.root.visible=!1;return}if(i.outlines){let tt=i.outlineOn!==!1&&this.state!=="dead";if(tt!==i._olv){i._olv=tt;for(let I of i.outlines)I.visible=tt}}i.root.visible=!0;let n=(this.pos.x-e.x)**2+(this.pos.z-e.z)**2;if(n>160*160&&(this.id+this.game.frame)%3!==0&&this.state==="alive"){i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;return}let a=n<90*90;a!==this._cs&&(this._cs=a,i.root.traverse(tt=>{tt.isMesh&&(tt.castShadow=a)})),i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;let o=this.anim||(this.anim={phase:0,legYaw:0,lastYaw:this.yaw,shuffle:0,throwT:0,meleeT:0,death:null}),l=this.game.time,c=-Math.sin(this.yaw),h=-Math.cos(this.yaw),u=Math.cos(this.yaw),d=-Math.sin(this.yaw),f=this.vel.x*c+this.vel.z*h,p=this.vel.x*u+this.vel.z*d,x=Math.hypot(f,p),g=f<-.4,m=_i(this.yaw-o.lastYaw)/Math.max(t,.001);o.lastYaw=this.yaw;let v=0;if(x>.5&&this.stance!=="prone"&&this.state==="alive"){let tt=Math.atan2(p,f);Math.abs(tt)>Math.PI/2&&(tt=_i(tt-Math.PI)),v=-Math.max(-1.05,Math.min(1.05,tt))}o.legYaw=ei(o.legYaw,v,9,t);let y=this.stance==="crouch"?2.7:this.sprinting?1.45:this.stance==="prone"?3.2:2.05;o.phase+=x*t*y*(g?-1:1),x<.4&&Math.abs(m)>1.2&&this.state==="alive"&&this.stance!=="prone"?(o.shuffle=Math.min(1,o.shuffle+t*6),o.phase+=t*7):o.shuffle=Math.max(0,o.shuffle-t*4);let M=Math.sin(o.phase),T=Math.cos(o.phase),w=Math.max(Math.min(1,x/(this.sprinting?6:this.stance==="crouch"?2.4:4)),o.shuffle*.35);o.amp=ei(o.amp??w,w,8,t);let S=o.amp,C=.95,_=0,b=0,A=this.lean*.12,z=this.pitch*.25,L=-o.legYaw*.85,U=-this.lean*.42,O=this.pitch*.3,N=this.pitch*.72,q=0,F=0,X=0,j=0,lt=0,et=0,Rt=0,Y=0,rt=0,gt=0,nt=0,yt=0,It=0,Dt=0;if(this.state==="dead"){o.death||(o.death={dir:this.deathDir,roll:(Math.random()-.5)*.8,arms:Math.random()}),this.deathPose=Math.min(1,this.deathPose+t*2.2);let tt=this.deathPose,I=1-Math.pow(1-tt,3),E=o.death;C=Qt(.95,.17,I),_=1.52*E.dir*I,b=E.roll*I,z=.15*I,L=0,U=E.roll*.3*I,O=(E.dir>0?-.5:.6)*I,N=Qt(this.pitch,E.dir>0?1.2:-1.3,I),X=-.6*I*E.arms,lt=.7*I,rt=.25*I,gt=-.15*I,nt=-.4*I,yt=-.15*I,It=.15*I,Dt=-.1*I,Rt=1.2*I}else if(this.state==="downed"){let tt=Math.sin(this.downedTime*2.4)*.06;C=.2,_=1.48,b=.2+tt,z=-.25,L=0,O=-.7,N=-.9+tt,q=.4,j=-.6,lt=.4,F=-.3,rt=.45+tt,nt=-.9,gt=.15,yt=-.35,It=.1,Dt=-.12,Rt=1.3}else if(this.stance==="prone"){C=.2,_=-1.47,z=0,L=0,O=1.15+this.pitch*.4,N=1.47+this.pitch*.8;let tt=M*S;rt=.05+tt*.3,gt=.05-tt*.3,nt=-.15-Math.max(0,tt)*.9,yt=-.15-Math.max(0,-tt)*.9,It=.18,Dt=-.18,b=tt*.05,j=tt*.15,F=-tt*.15}else if(this.stance==="crouch"){let tt=1-S;C=Qt(.66,.62,tt),_=-.08,rt=Qt(.9+M*.45,.25,tt),nt=Qt(-1.35-Math.max(0,T)*.5,-1.75,tt),gt=Qt(.9-M*.45,1.1,tt),yt=Qt(-1.35-Math.max(0,-T)*.5,-1.65,tt),z+=.08,N-=.08,C+=-Math.abs(M)*.02*S}else{let tt=this.sprinting?.8:.48;rt=M*tt*S,gt=-M*tt*S,nt=-(Math.max(0,T)*(this.sprinting?1.4:.95)+.06)*S,yt=-(Math.max(0,-T)*(this.sprinting?1.4:.95)+.06)*S,C=.95-Math.abs(Math.sin(o.phase))*.035*S+(this.sprinting?-.03:0),b=M*.03*S,this.sprinting?(z=-.22,N=-.75,q=.55,Rt=.9,et=.2,O=.15,F=M*.25,j=-M*.25):L+=M*.04*S,this.slideT>0&&(C=.5,_=.35,rt=1.25,nt=-.3,gt=.5,yt=-1.4,z=-.1,N=this.pitch*.7-.35),!this.move.grounded&&!this.swimming&&!this.vault&&(rt=.75,nt=-1.15,gt=.15,yt=-.6),this.vault&&(rt=1.2,nt=-1.6,gt=.8,yt=-1.2,_=-.2,N=-.5),this.swimming&&(C=.95,rt=M*.4,gt=-M*.4,nt=-.3,yt=-.3,N=-.5,F=T*.4,j=-T*.4)}if(this.state==="alive"){if(this.reloadT>0){let I=this.reloadTotal||2,E=1-this.reloadT/I,G=E<.25?E/.25:E<.65?1:E<.85?1-(E-.65)/.2:0;j=-.55*G,lt=.25*G,Rt+=.45*Math.sin(Math.min(1,E)*Math.PI),et+=.15*G,N-=.18*Math.sin(Math.min(1,E)*Math.PI)}if(this.action){let I=1-this.actionT/(this.actionDur||1);if(this.action.name==="throw"||this.action.name==="throwC4"){let E=I<.55?I/.55:1-(I-.55)/.45;F=2.6*E-.6*(1-E)*(I>.55?1:0),X=-.3*E,N=this.pitch*.7-.3,Y=.2,L+=.35*E}else if(this.action.name==="melee"){let E=Math.sin(Math.min(1,I*1.6)*Math.PI);q=-.6*E,Y=-.25*E,L+=-.4*E}else j=-.9,F=-.5,N-=.6,Rt+=.8}this.reviveProgress>0&&(N=-1.1,j=-.4,F=-.3,Rt=1);let tt=l-this.lastShotTime;tt<.08&&(Y+=.05*(1-tt/.08),N+=.04*(1-tt/.08))}let Zt=1-Math.exp(-t*(this.state==="dead"?26:16)),it=1-Math.exp(-t*(this.state==="dead"?22:10)),ut=1-Math.exp(-t*(this.state==="dead"?18:7)),k=Zt,pt=(tt,I,E)=>{tt[I]+=(E-tt[I])*k};k=ut,pt(i.body.position,"y",C),pt(i.body.position,"x",A),pt(i.body.rotation,"x",_),pt(i.body.rotation,"z",b),k=it,pt(i.pelvis.rotation,"y",o.legYaw*(this.stance==="prone"||this.state!=="alive"?0:1)),pt(i.spine.rotation,"x",z),pt(i.spine.rotation,"y",L),pt(i.spine.rotation,"z",U),pt(i.head.rotation,"x",O),k=Zt,pt(i.aim.rotation,"x",N),pt(i.aim.rotation,"y",q),pt(i.armR.rotation,"x",F),pt(i.armR.rotation,"z",X),pt(i.armL.rotation,"x",j),pt(i.armL.rotation,"z",lt),pt(i.weapon.rotation,"x",et),pt(i.weapon.rotation,"z",Rt);let ct=i.pose==="pistol"?-.42:i.pose==="gadget"?-.3:-.33;pt(i.weapon.position,"z",ct+Y);let xt=i.legs;pt(xt[0].thigh.rotation,"x",rt),pt(xt[1].thigh.rotation,"x",gt),pt(xt[0].thigh.rotation,"z",It),pt(xt[1].thigh.rotation,"z",Dt),pt(xt[0].shin.rotation,"x",nt),pt(xt[1].shin.rotation,"x",yt),this.state!=="dead"&&(o.death=null),i.root.updateMatrixWorld(!0);let ft=this.rigHS||(this.rigHS=new Float32Array(28)),zt=(tt,I,E,G,J,st)=>{Or.set(E,G,J),I.localToWorld(Or),ft[tt*4]=Or.x,ft[tt*4+1]=Or.y,ft[tt*4+2]=Or.z,ft[tt*4+3]=st};zt(0,i.head,0,.14,0,.15),zt(1,i.spine,0,.33,0,.23),zt(2,i.spine,0,.09,0,.2),zt(3,xt[0].thigh,0,-.22,0,.12),zt(4,xt[1].thigh,0,-.22,0,.12),zt(5,xt[0].shin,0,-.24,0,.11),zt(6,xt[1].shin,0,-.24,0,.11),this.rigHSPos=(this.rigHSPos||new R).copy(this.pos),this.rigHSFrame=this.game.frame}muzzleWorld(t=new R){if(this.rig&&this.rig.weaponMesh&&!this.isPlayer){let e=this.gun,i=e?e.model.muzzle:G1;return this.rig.weapon.updateWorldMatrix(!0,!1),t.copy(i).applyMatrix4(this.rig.weapon.matrixWorld)}return this.eye(t)}removeFromScene(){this.rig&&this.game.scene.remove(this.rig.root)}},Xh=new R,Af=new R,G1=new R,Or=new R;var Cf=new R,W1=r=>new dt(r).lerp(new dt(8026746),.25).getHex();function Br(r,t,e,i,n,s,a,o){let l=i-r,c=n-t,h=s-e,u=Math.hypot(l,c,h),d=P.box(a,a*.9,u,o),f=new Et().lookAt(new R,new R(l,c,h),new R(0,1,0));return d.applyMatrix4(f),d.translate((r+i)/2,(t+n)/2,(e+s)/2),d}var Yh={};function q1(r){if(Yh[r])return Yh[r];let t=256,e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),n=r==="chevron"?"#ff7a2a":"#ff3030";i.strokeStyle=i.fillStyle=n,i.shadowColor=n,i.lineCap="round";let s=(o,l)=>{i.shadowBlur=o,l(),i.shadowBlur=0,l()};r==="dot"?s(14,()=>{i.beginPath(),i.arc(128,128,9,0,7),i.fill()}):r==="holo"?s(8,()=>{i.lineWidth=3.5,i.beginPath(),i.arc(128,128,46,0,7),i.stroke();for(let[o,l]of[[0,-1],[0,1],[-1,0],[1,0]])i.beginPath(),i.moveTo(128+o*46,128+l*46),i.lineTo(128+o*58,128+l*58),i.stroke();i.beginPath(),i.arc(128,128,4.5,0,7),i.fill()}):s(8,()=>{i.lineWidth=4,i.beginPath(),i.moveTo(104,150),i.lineTo(128,124),i.lineTo(152,150),i.stroke(),i.lineWidth=3,i.beginPath(),i.arc(128,128,54,Math.PI*.15,Math.PI*.85,!0),i.stroke(),i.beginPath(),i.arc(128,124,3,0,7),i.fill()});let a=new Vn(e);return a.colorSpace=Ee,a.anisotropy=4,Yh[r]=a,a}var Hr=null;function X1(){if(Hr)return Hr;let r=128,t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),i=e.createRadialGradient(r*.5,r*.5,r*.1,r*.5,r*.5,r*.5);return i.addColorStop(0,"rgba(120,170,220,0.10)"),i.addColorStop(.8,"rgba(90,130,190,0.30)"),i.addColorStop(1,"rgba(40,60,90,0.65)"),e.fillStyle=i,e.fillRect(0,0,r,r),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=6,e.beginPath(),e.arc(r*.5,r*.5,r*.33,Math.PI*1.1,Math.PI*1.45),e.stroke(),Hr=new Vn(t),Hr.colorSpace=Ee,Hr}var $a=class{constructor(t,e){this.game=t,this.s=e,this.input=t.input,this.camera=t.camera,this.vmScene=t.vmScene,this.vmCamera=t.vmCamera,this.vmRoot=new fe,this.vmScene.add(this.vmRoot),this.vmMat=new de({vertexColors:!0,roughness:.6,metalness:.15,side:Pe}),this.vmMesh=null,this.vmArms=null,this.reticle=null,this.bobPhase=0,this.swayX=0,this.swayY=0,this.kick=0,this.lastShot=-1,this.crouchToggle=!1,this.proneToggle=!1,this.giveUpT=0,this.interactT=0,this.camRoll=0,this.landDip=0,this.prevGrounded=!0,this.vmKey=null,this.flashlight=new Jo(16773592,0,60,.42,.45,1.5),this.flashlight.castShadow=!1,this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.flashlight.position.set(.2,-.15,0),this.flashlight.target.position.set(0,0,-10),this.laserDot=null,this.breath=1,this.holding=!1,this.adsToggle=!1,this.leanToggle=0}buildViewmodel(){let t=this.s,e=t.weapon;if(!e)return;let i=t.active+":"+(e.kind==="gun"?e.id+JSON.stringify(e.att):e.id)+":"+t.team;if(i===this.vmKey)return;this.vmKey=i;for(let d of["vmMesh","vmMag","vmArmR","vmArmL","reticle","vmLenses"])this[d]&&(this[d].parent&&this[d].parent.remove(this[d]),this[d]=null);if(this.vmArmLGroup||(this.vmArmLGroup=new fe,this.vmRoot.add(this.vmArmLGroup)),!this.vmKnife){this.vmKnife=new fe;let d=new Ot(Kn("knife"),this.vmMat);d.rotation.x=-.2,this.vmKnife.add(d);let f=Xe[this.s.team],p=new Ot(P.merge([P.box(.07,.075,.09,f.glove,0,-.01,.03),P.box(.022,.03,.05,f.glove,-.035,.02,0),Br(0,-.05,.06,.08,-.2,.32,.08,f.uniform2)]),this.vmMat);this.vmKnife.add(p),this.vmKnife.visible=!1,this.vmScene.add(this.vmKnife)}let n=Xe[t.team],s,a=null,o,l=new R(0,-.035,.02);if(this.magPos=null,e.kind==="gun"){let d=e.model;s=d.bodyGeo,a=d.magGeo,this.magPos=d.magPos.clone(),o=new R(0,0,e.stats.type==="pistol"?0:-d.len*.42),e.stats.type==="pistol"&&o.set(-.02,-.04,.02),this.sightY=d.sightY,this.sightZ=d.sightZ,this.muzzle=d.muzzle.clone(),this.glassMat||(this.glassMat=new de({map:X1(),transparent:!0,depthWrite:!1,roughness:.05,metalness:.85,envMapIntensity:1.6,side:Pe})),this.vmLenses=new fe;for(let f of d.lenses||[]){let p=f.type==="rect"?new je(f.w,f.h):new zs(f.r,20),x=new Ot(p,this.glassMat);x.position.set(0,f.y,f.z),x.renderOrder=3,x.userData.back=!!f.back,this.vmLenses.add(x)}if(this.vmRoot.add(this.vmLenses),e.stats.reticle&&!e.stats.scope&&e.stats.zoom<3.5){let f=new Oi({map:q1(e.stats.reticle),transparent:!0,depthWrite:!1,depthTest:!1,blending:en,toneMapped:!1});f.color.setRGB(2.2,2.2,2.2);let p=new Ot(new je(.024,.024),f);p.position.set(0,d.sightY,d.reticleZ??d.sightZ-.03),p.renderOrder=4,this.reticle=p,this.vmRoot.add(p)}}else s=e.model,o=new R(-.1,-.02,.02),this.sightY=.1,this.sightZ=0,this.muzzle=new R(0,.05,-.6);this.gripL=o,this.vmMesh=new Ot(s,this.vmMat),this.vmRoot.add(this.vmMesh),a&&(this.vmMag=new Ot(a,this.vmMat),this.vmMag.position.copy(this.magPos),this.vmRoot.add(this.vmMag));let c=(d,f,p,x)=>[P.box(.062,.066,.085,n.glove,d,f,p),P.box(.064,.02,.03,W1(n.glove),d,f+.03,p-.035),P.box(.02,.025,.05,n.glove,d+.03*x,f+.01,p-.02)],h=[Br(.16,-.32,.32,l.x+.035,l.y-.035,l.z+.08,.075,n.uniform),Br(l.x+.06,l.y-.06,l.z+.14,l.x+.02,l.y-.02,l.z+.05,.08,n.uniform2),...c(l.x+.012,l.y,l.z,-1),P.box(.075,.03,.05,n.accent,.12,-.21,.2)],u=[Br(-.2,-.32,.14,o.x-.035,o.y-.045,o.z+.08,.075,n.uniform),Br(o.x-.06,o.y-.07,o.z+.15,o.x-.02,o.y-.035,o.z+.05,.08,n.uniform2),...c(o.x-.01,o.y-.025,o.z,1)];this.vmArmR=new Ot(P.merge(h),this.vmMat),this.vmRoot.add(this.vmArmR),this.vmArmL=new Ot(P.merge(u),this.vmMat),this.vmArmLGroup.add(this.vmArmL)}update(t){let e=this.s,i=this.input,n=this.game,s=n.settings,a=n.hud,o=n.uiBlocking(),l=!o&&e.state==="alive";if(!o&&e.state!=="dead"){let u=e.gun,d=e.adsT>.5?u?u.stats.zoom:e.weapon&&e.weapon.id==="binoculars"?6:1:1,f=.0021*s.get("sensitivity")*(e.adsT>.5?s.get("adsSensitivity")/Math.pow(d,.85):1),p=s.get("mouseSmoothing")||0;this.smx=(this.smx||0)*p+i.mouse.dx*(1-p),this.smy=(this.smy||0)*p+i.mouse.dy*(1-p);let x=e.state==="alive"?this.aimAssistTarget(t):null,g=x?x.friction:1;e.yaw-=this.smx*f*g,e.pitch-=this.smy*f*g*(s.get("invertY")?-1:1);let m=(s.get("keyLookSpeed")||140)*ce*t*(e.adsT>.5?.45:1);ve.down(i,"lookLeft")&&(e.yaw+=m),ve.down(i,"lookRight")&&(e.yaw-=m),ve.down(i,"lookUp")&&(e.pitch+=m*.7),ve.down(i,"lookDown")&&(e.pitch-=m*.7),x&&this.applyAimPull(x,t),e.pitch=Nt(e.pitch,e.state==="downed"?-.6:-1.45,e.state==="downed"?.6:1.45)}let c=e.input,h=ve;if(c.mx=0,c.mz=0,c.fire=!1,c.ads=!1,c.sprint=!1,l){h.down(i,"forward")&&(c.mz-=1),h.down(i,"back")&&(c.mz+=1),h.down(i,"left")&&(c.mx-=1),h.down(i,"right")&&(c.mx+=1);let u=h.down(i,"sprint");c.sprint=(u||s.get("autoSprint")&&c.mz<-.5&&Math.abs(c.mx)<.5)&&!(e.adsT>.5)&&!c.ads,e.autoRepeat=!!s.get("semiAutoRepeat"),h.hit(i,"jump")&&(c.jump=!0);let d=h.hit(i,"crouch"),f=h.hit(i,"crouchHold"),p=s.get("crouchMode")==="hold";(d||f)&&e.sprinting?(c.slide=!0,this.crouchToggle=!p):d&&!p&&(this.crouchToggle=!this.crouchToggle,e.stance==="prone"&&(this.crouchToggle=!0,e.setStance("crouch"))),h.hit(i,"prone")&&(e.stance==="prone"?e.setStance("crouch")&&(this.crouchToggle=!0):(c.prone=!0,this.crouchToggle=!1)),c.sprint&&c.mz<0&&e.stance==="crouch"&&this.crouchToggle&&!(e.slideT>0)&&(this.crouchToggle=!1),c.sprint&&c.mz<0&&e.stance==="prone"&&e.setStance("stand"),c.crouch=this.crouchToggle||h.down(i,"crouchHold")||p&&h.down(i,"crouch"),c.proneHold=e.stance==="prone",c.fire=h.down(i,"fire"),s.get("adsMode")==="toggle"?(h.hit(i,"ads")&&(this.adsToggle=!this.adsToggle),(e.sprinting||e.reloadT>0&&!1)&&(this.adsToggle=!1),c.ads=this.adsToggle):c.ads=h.down(i,"ads");let x=0;if(s.get("leanMode")==="toggle"?(h.hit(i,"leanL")&&(this.leanToggle=this.leanToggle===-1?0:-1),h.hit(i,"leanR")&&(this.leanToggle=this.leanToggle===1?0:1),e.sprinting&&(this.leanToggle=0),x=this.leanToggle||0):(h.down(i,"leanL")&&(x-=1),h.down(i,"leanR")&&(x+=1)),x!==0){let m=e.right(new R).multiplyScalar(x),v=n.world.collision.raycast(e.pos.x,e.pos.y+e.eyeH,e.pos.z,m.x,0,m.z,.85,{});v&&(x*=Nt((v.t-.25)/.6,0,1))}e.leanTarget=x,e.adsT>.6&&e.gun&&(e.gun.stats.zoom>=3.5||e.gun.stats.type==="sniper"||e.gun.stats.type==="dmr")&&u&&this.breath>0?(this.holding=!0,this.breath=Math.max(0,this.breath-t/5)):(this.holding=!1,this.breath=Math.min(1,this.breath+t/(u?8:3.5))),e.holdingBreath=this.holding,h.hit(i,"reload")&&e.reload(),h.hit(i,"firemode")&&(e.cycleMode(),n.audio.play2d("switch",{vol:.4})),h.hit(i,"bandage")&&e.bandage(),h.hit(i,"light")&&this.toggleLight(),h.hit(i,"melee")&&n.combat.melee(e);for(let m=0;m<5;m++)h.hit(i,"slot"+(m+1))&&e.switchTo(m);if(i.mouse.wheel){let m=e.active;for(let v=0;v<5;v++){m=(m+(i.mouse.wheel>0?1:4))%5;let y=e.slots[m];if(y&&(y.kind==="gun"||y.count>0||y.def.count===1/0))break}e.switchTo(m)}h.hit(i,"grenade")&&this.quickThrow(),h.hit(i,"spot")&&this.spotOrOrder(),e.weapon&&e.weapon.kind==="gadget"&&(n.combat.useGadget(e,h.hit(i,"fire"),h.hit(i,"ads")),c.fire=!1,e.weapon.id!=="binoculars"&&e.weapon.id!=="rpg"&&e.weapon.id!=="m320"&&(c.ads=!1)),this.interact(t,h.down(i,"interact"))}else e.leanTarget=0,c.crouch=!1,this.adsToggle=!1;e.state==="downed"&&!o&&(h.down(i,"jump")?(this.giveUpT+=t,this.giveUpT>1.5&&(this.giveUpT=0,e.die(e.lastAttacker,"Gave up",!1,!0))):this.giveUpT=0),a&&(a.giveUp=this.giveUpT/1.5)}aimAssistTarget(t){let e=this.game.settings,i=e.get("aimAssist");if(!i||i==="off")return null;let n={low:{cone:2.4,fric:.3,pull:1.4,snap:.35},medium:{cone:3.8,fric:.45,pull:2.6,snap:.55},high:{cone:5.5,fric:.6,pull:4.2,snap:.75}}[i];if(!n)return null;let s=this.s,a=this.game;if(!s.gun||s.sprinting)return null;let o=s.eye(Cf),l=Math.cos(s.pitch),c=-Math.sin(s.yaw)*l,h=Math.sin(s.pitch),u=-Math.cos(s.yaw)*l;this._aaT=(this._aaT||0)-t;let d=s.adsT>.5,f=null,p=1e9;for(let g of a.teams[1-s.team]){if(g.state!=="alive")continue;let m=g.hitSpheres(),v=m[1],y=v[0]-o.x,M=v[1]-o.y,T=v[2]-o.z,w=Math.hypot(y,M,T);if(w>(d?160:70)||w<.5)continue;let S=Math.acos(Math.max(-1,Math.min(1,(y*c+M*h+T*u)/w)))/ce,C=n.cone*Math.max(.6,Math.min(2.2,25/w))*(d?1.2:1);if(S>C*1.7)continue;let _=S/C;_<p&&(p=_,f={e:g,ang:S,cone:C,d:w,x:v[0],y:v[1],z:v[2]})}if(!f)return this.aaTarget=null,null;if(this.aaTarget!==f.e||this._aaT<=0){let g=f.e.hitSpheres(),m=a.world.collision,v=(m.los(o.x,o.y,o.z,g[1][0],g[1][1],g[1][2])||m.los(o.x,o.y,o.z,g[0][0],g[0][1],g[0][2]))&&m.softVisibility(o.x,o.y,o.z,g[1][0],g[1][1],g[1][2],a.time)>.25;this.aaVisible=v,this.aaTarget=f.e,this._aaT=.12}if(!this.aaVisible)return null;let x=f.ang<f.cone;return f.friction=x?1-n.fric*(1-f.ang/f.cone):1,f.cfg=n,f.inCone=x,f}applyAimPull(t,e){let i=this.s,n=i.eye(Cf),s=t.x-n.x,a=t.y-n.y,o=t.z-n.z,l=Math.atan2(-s,-o),c=Math.atan2(a,Math.hypot(s,o)),h=l-i.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;let u=c-i.pitch;if(i.adsT>.3&&!this.wasAds&&t.ang<t.cone*1.6&&(i.yaw+=h*t.cfg.snap,i.pitch+=u*t.cfg.snap),this.wasAds=i.adsT>.3,!t.inCone)return;let d=Math.hypot(i.vel.x-t.e.vel.x,i.vel.z-t.e.vel.z),f=1-Math.exp(-t.cfg.pull*e*(i.adsT>.5?1:.5)*(.4+Math.min(1,d/3)));i.yaw+=h*f,i.pitch+=u*f*.6}toggleLight(){let t=this.s;t.slots[0]&&(t.flashlightOn=!t.flashlightOn,this.game.audio.play2d("switch",{vol:.35}))}quickThrow(){let t=this.s,e=t.slots[4];!e||e.count<=0||t.actionT>0||t.state!=="alive"||(e.count--,t.startAction("throw",.55,{type:e.id}),this.game.audio.play2d("pin",{vol:.4}))}spotOrOrder(){let t=this.s,e=this.game;if(e.combat.spot(t,7,4)>0)return;let n=t.squad;if(!n||n.leader!==t)return;let s=t.eye(new R),a=t.aimDir(new R),o=null,l=7*ce;for(let h of e.mode.flags){let u=new R(h.x-s.x,h.y+3-s.y,h.z-s.z).normalize(),d=Math.acos(Nt(u.dot(a),-1,1));d<l&&(l=d,o=h)}if(o){e.squads.setOrder(n,o.owner===t.team?"defend":"attack",o),e.hud.toast(`Squad: ${o.owner===t.team?"DEFEND":"ATTACK"} ${o.id} \u2014 ${o.name}`),e.audio.play2d("beep",{vol:.4});return}let c=e.world.collision.raycast(s.x,s.y,s.z,a.x,a.y,a.z,350,{});c?(e.squads.setOrder(n,"move",null,c.x,c.z),n.order.flag={x:c.x,z:c.z,r:12},e.hud.toast("Squad: MOVE to marker"),e.audio.play2d("beep",{vol:.4})):(e.squads.setOrder(n,"follow",null,t.pos.x,t.pos.z),e.hud.toast("Squad: FOLLOW me"))}interact(t,e){let i=this.s,n=this.game;this.prompt=null;let s=null,a=2.2;for(let o of n.teams[i.team]){if(o===i||o.state!=="downed")continue;let l=Math.hypot(o.pos.x-i.pos.x,o.pos.z-i.pos.z);l<a&&(a=l,s=o)}if(s){this.prompt=`Hold [${ve.name("interact")}] to revive ${s.name}`,e?n.reviveTick(i,s,t):i.reviveProgress=0;return}if(i.reviveProgress=0,i.weapon&&i.weapon.id==="medkit"){let o=null;a=3;for(let l of n.teams[i.team]){if(l===i||l.state!=="alive"||l.hp>=100&&l.bleed<=0)continue;let c=Math.hypot(l.pos.x-i.pos.x,l.pos.z-i.pos.z);c<a&&(a=c,o=l)}o&&(this.prompt=`[${ve.name("interact")}] Heal ${o.name}`,ve.hit(n.input,"interact")&&i.medkitCd<=0&&i.startAction("medkitOther",.9,{target:o}))}}updateCamera(t){let e=this.s,i=this.camera,n=this.game,s=n.settings,a=e.eye(new R);e.move.grounded&&!this.prevGrounded&&e.state==="alive"&&(this.landDip=.12),this.prevGrounded=e.move.grounded,this.landDip=ei(this.landDip,0,8,t);let o=Math.hypot(e.vel.x,e.vel.z);e.move.grounded&&o>.3&&(this.bobPhase+=o*t*(e.sprinting?1.6:1.9));let l=s.get("headBob")?Math.min(1,o/5)*(e.adsT>.5?.25:1):0,c=Math.abs(Math.sin(this.bobPhase))*.045*l,h=Math.cos(this.bobPhase)*.025*l;i.position.set(a.x,a.y+c-this.landDip,a.z);let u=n.fx.trauma,d=u*u,f=n.time,p=d*.06*Math.sin(f*37.1),x=d*.05*Math.sin(f*41.7+1),g=d*.05*Math.sin(f*29.3+2);this.camRoll=ei(this.camRoll,-e.lean*.17+(e.state==="downed"?.35:0),10,t),i.rotation.order="YXZ",i.rotation.set(e.pitch+e.swayP+x,e.yaw+e.swayY+p+h*.15,this.camRoll+g);let m=e.gun,v=e.weapon&&e.weapon.id==="binoculars",y=m?m.stats.zoom:v?6:1,M=Qt(1,y,e.adsT),T=s.get("fov")*ce,w=i.aspect,S=2*Math.atan(Math.tan(T/2)/w)/ce;this.sprintFov=ei(this.sprintFov||1,e.sprinting?1.06:1,6,t),i.fov=S/M*this.sprintFov,i.updateProjectionMatrix(),i.updateMatrixWorld();let C=e.slots[0]&&e.slots[0].stats&&e.slots[0].stats.light,_=n.env.time.night;this.flashlight.intensity=e.flashlightOn&&e.state==="alive"&&(C||_)?_?26:12:0,this.updateViewmodel(t,h,c)}updateViewmodel(t,e,i){let n=this.s,s=this.game;this.buildViewmodel();let a=this.vmRoot,o=this.isScoped();if(a.visible=n.state==="alive"&&!o,!a.visible){this.updateMuzzleWorld();return}let l=n.weapon,c=l&&l.kind==="gun",h=c?n.adsT:0,u=h*h*(3-2*h),d=s.input.mouse.dx,f=s.input.mouse.dy;this.swayX=ei(this.swayX,Nt(-d*6e-4,-.05,.05),10,t),this.swayY=ei(this.swayY,Nt(f*6e-4,-.05,.05),10,t),n.lastShotTime!==this.lastShot&&(this.lastShot=n.lastShotTime,this.kick=1),this.kick=ei(this.kick,0,18,t);let p=new R(.155,-.2,-.6),x=c&&l.stats.zoom>1.2?.2:.26,g=new R(0,-this.sightY,-x-this.sightZ),m=p.clone().lerp(g,u),v=.035*(1-u),y=.04*(1-u),M=0,T=1-u*.8;m.x+=(e*.5+this.swayX)*T,m.y+=(-i*.35+this.swayY)*T;let w=s.time;m.y+=Math.sin(w*1.6)*.0025*(1-u*.7),this.sprintBlend=ei(this.sprintBlend||0,n.sprinting?1:0,9,t);let S=this.sprintBlend;S>.001&&(m.x+=.03*S,m.y-=.06*S,v-=.35*S,y+=.65*S,m.y+=Math.sin(this.bobPhase*2)*.012*S),this.crouchBlend=ei(this.crouchBlend||0,n.stance==="stand"?0:1,7,t),m.y+=.008*this.crouchBlend,M+=.04*this.crouchBlend*(1-u);let C=null,_=null;if(n.reloadT>0&&c){let O=n.reloadTotal||2,N=Math.min(1,1-n.reloadT/O),q=Math.sin(N*Math.PI);if(m.y-=.06*q,M+=.45*q,v+=.06*q,m.x-=.03*q,this.vmMag&&!l.stats.shellReload){if(N<.22)C=[0,-.35*(N/.22)**2,.05*(N/.22),.6*(N/.22)];else if(N<.42)C=[0,-.5,0,0];else if(N<.7){let et=(N-.42)/.28;C=[0,-.22*(1-et)*(1-et),.03*(1-et),.15*(1-et)]}else C=[0,0,0,0];let F=N<.15?N/.15:N<.75?1:1-(N-.75)/.25,X=this.magPos,j=this.gripL,lt=N>.42&&N<.7?C[1]:N<.42?-.18:0;if(_=[(X.x-j.x)*F,(X.y-.06-j.y+lt)*F,(X.z-j.z)*F],N>.78&&N<.95&&n.reloadTotal>l.stats.reload+.01){let et=(N-.78)/.17;m.z+=.03*Math.sin(et*Math.PI),v-=.05*Math.sin(et*Math.PI)}}else if(l.stats.shellReload){let F=s.time*3%1;_=[.02,-.08*Math.sin(F*Math.PI),.12]}}if(c&&n.boltT>0&&(l.stats.bolt||l.stats.pump)){let O=1-n.boltT/(l.stats.interval*.9),N=Math.sin(Math.min(1,O)*Math.PI);l.stats.bolt?(M-=.25*N,m.y-=.02*N,m.x+=.02*N):(_=[0,0,.09*N],m.z+=.015*N)}if(n.switchT>0){let O=n.switchT/.45;m.y-=.35*O,v-=.6*O}let b=this.vmKnife;if(b&&(b.visible=!1),n.action){let O=1-n.actionT/(n.actionDur||1);if(n.action.name==="throw"||n.action.name==="throwC4")m.y-=.1,v+=Math.sin(O*Math.PI)*.9,m.z+=.08*Math.sin(O*Math.PI);else if(n.action.name==="melee"){if(m.y-=.25*Math.sin(O*Math.PI),m.x+=.12*Math.sin(O*Math.PI),M-=.5*Math.sin(O*Math.PI),b){b.visible=!0;let N=Math.min(1,O*1.5),q=N<.25?N/.25*.2:.2+(N-.25)/.75*.8;b.position.set(.32-q*.55,-.16+Math.sin(q*Math.PI)*.08,-.45+Math.sin(q*Math.PI)*-.12),b.rotation.set(-.3,.9-q*1.6,-.6+q*1.2)}}else m.y-=.12*Math.sin(O*Math.PI),M-=.3*Math.sin(O*Math.PI)}if(this.vmMag&&this.magPos&&(C?(this.vmMag.position.set(this.magPos.x+C[0],this.magPos.y+C[1],this.magPos.z+C[2]),this.vmMag.rotation.x=C[3],this.vmMag.visible=!(C[1]<=-.49)):(this.vmMag.position.copy(this.magPos),this.vmMag.rotation.x=0,this.vmMag.visible=!0)),this.vmArmLGroup){let O=_||[0,0,0],N=this.vmArmLGroup.position,q=1-Math.exp(-t*18);N.x+=(O[0]-N.x)*q,N.y+=(O[1]-N.y)*q,N.z+=(O[2]-N.z)*q}if(n.state==="alive"&&n.vault&&(m.y-=.1,v-=.3),n.slideT>0&&(M+=.25,m.y-=.03),c){let O=(l.stats.type==="sniper"||l.stats.type==="shotgun"?.09:.035)*this.kick;m.z+=O,v+=this.kick*(l.stats.type==="sniper"?.12:.04)*(1-u*.5)}let A=1-Math.exp(-t*(u>.5?26:16)),z=1-Math.exp(-t*14);a.position.lerp(m,A);let L=M+n.lean*.06;a.rotation.x+=(v-a.rotation.x)*z,a.rotation.y+=(y-a.rotation.y)*z,a.rotation.z+=(L-a.rotation.z)*z,this.reticle&&(this.reticle.visible=u>.85);let U=s.env.sunDir.clone().transformDirection(this.camera.matrixWorldInverse);s.vmLight.position.copy(U).multiplyScalar(5),this.updateMuzzleWorld()}updateMuzzleWorld(){let t=this.s;if(!this.muzzle)return;let e=this.muzzle.clone();this.vmRoot.updateMatrixWorld(),e.applyMatrix4(this.vmRoot.matrixWorld),t.vmMuzzle=this.camera.localToWorld(e.clone())}isScoped(){let t=this.s,e=t.gun;return t.state!=="alive"?!1:!!(e&&(e.stats.scope||e.stats.zoom>=3.5)&&t.adsT>.92||t.weapon&&t.weapon.id==="binoculars"&&t.adsT>.9)}dispose(){this.vmScene.remove(this.vmRoot),this.camera.remove(this.flashlight),this.camera.remove(this.flashlight.target)}};var Rf={recruit:{react:.7,turn:150,err0:7,errTau:1.25,jitter:.95,comp:.35,head:.05,sight:.75,cover:.45,strafe:.4,nade:.25,think:.6,lead:.5,burst:.55},regular:{react:.48,turn:230,err0:4.6,errTau:.9,jitter:.62,comp:.55,head:.12,sight:.9,cover:.65,strafe:.65,nade:.45,think:.45,lead:.7,burst:.7},veteran:{react:.31,turn:340,err0:2.9,errTau:.62,jitter:.4,comp:.75,head:.22,sight:1,cover:.85,strafe:.85,nade:.65,think:.34,lead:.85,burst:.85},elite:{react:.21,turn:480,err0:1.9,errTau:.43,jitter:.25,comp:.88,head:.32,sight:1.12,cover:1,strafe:1,nade:.8,think:.27,lead:.95,burst:.95}},Y1={smg:14,shotgun:9,carbine:26,ar:34,lmg:40,dmr:75,sniper:130,pistol:12},$1={smg:75,shotgun:40,carbine:150,ar:180,lmg:190,dmr:280,sniper:420,pistol:50},Pf=new R,Za=new R,ja=new R,Ka=class{constructor(t,e){this.s=t,this.game=e,this.setDifficulty(e.settings.get("difficulty")),this.aggro=W(.35,.95),this.known=new Map,this.target=null,this.reactT=0,this.part="body",this.errY=0,this.errP=0,this.ph1=W(0,100),this.ph2=W(0,100),this.aiYaw=0,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPitch=0,this.lastYaw=0,this.state="objective",this.path=null,this.pathI=0,this.goal=null,this.pathPending=!1,this.repathT=0,this.cover=null,this.peekT=0,this.peeking=!1,this.coverSearchT=0,this.strafeDir=1,this.strafeT=0,this.nextPerceive=W(0,.2),this.nextThink=W(0,.5),this.burstLeft=0,this.holdFire=0,this.nadeCd=W(4,12),this.gadgetCd=W(5,20),this.lookYaw=0,this.glanceT=W(1,3),this.glancing=0,this.glanceYaw=0,this.stuckT=0,this.lastPos=new R,this.progressT=0,this.holdSpot=null,this.holdT=0,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.wantStance="stand"}setDifficulty(t){this.d=Rf[t]||Rf.veteran,this.diffName=t}reset(){this.known.clear(),this.target=null,this.path=null,this.goal=null,this.cover=null,this.holdSpot=null,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.state="objective",this.aiYaw=this.s.yaw,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPos.copy(this.s.pos),this.stuckT=0,this.burstLeft=0,this.pathPending=!1,this.placedClaymore=!1}inform(t,e,i,n,s,a){if(!t||t.team===this.s.team||t.state==="dead")return;let o=this.known.get(t);o?a>=o.t&&(o.x=e,o.y=i,o.z=n,o.t=a,s&&(o.seenT=a)):this.known.set(t,{x:e,y:i,z:n,t:a,seenT:s?a:-99,aw:0,vis:!1})}onDamaged(t,e){let i=this.game.time;if(t&&t!==this.s&&t.team!==this.s.team){let n=this.s.pos.distanceTo(t.pos),s=Math.min(12,n*.08);this.inform(t,t.pos.x+W(-s,s),t.pos.y,t.pos.z+W(-s,s),!1,i);let a=this.known.get(t);a&&(a.aw=Math.max(a.aw,.75)),(!this.target||this.target.state!=="alive")&&(this.target=t)}this.nextThink=Math.min(this.nextThink,.05),this.cover=null}onNearMiss(t){if(!t||t.team===this.s.team)return;let e=this.game.time,i=this.s.pos.distanceTo(t.pos),n=Math.min(20,i*.12);this.inform(t,t.pos.x+W(-n,n),t.pos.y,t.pos.z+W(-n,n),!1,e)}onSound(t,e,i,n){if(!i||i.team===this.s.team||i.state==="dead")return;let s=this.game.time,a=Math.hypot(t-this.s.pos.x,e-this.s.pos.z),o=Math.min(25,3+a*.1);this.inform(i,t+W(-o,o),i.pos.y,e+W(-o,o),!1,s),!this.target&&this.state!=="revive"&&(!this.investigate||s-this.investigate.t>4)&&(this.investigate={x:t,z:e,t:s})}perceive(t){let e=this.s,i=this.game.time,n=this.game.world.collision,s=e.eye(Za),a=this.game.env.time.night,o=(a?140:380)*this.d.sight;for(let l of this.game.teams[1-e.team]){if(l.state==="dead"){this.known.delete(l);continue}let c=this.known.get(l),h=l.pos.x-s.x,u=l.pos.z-s.z,d=Math.hypot(h,u);if(c&&(c.vis=!1),d>o*1.1){c&&(c.aw=Math.max(0,c.aw-t*.6));continue}let f=Math.atan2(-h,-u),p=Math.abs(_i(f-e.yaw))/ce,x=i-l.lastLoudShot<.7,g=d<6?140:d<30||x?105:62;if(p>g){c&&(c.aw=Math.max(0,c.aw-t*.5));continue}let m=l.hitSpheres(),v=n.los(s.x,s.y,s.z,m[0][0],m[0][1],m[0][2]),y=n.los(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2])||n.los(s.x,s.y,s.z,m[2][0],m[2][1],m[2][2]);if(!v&&!y){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}let M=Nt(1.25-d/(o*.8),.1,1);l.stance==="prone"||l.state==="downed"?M*=d>25?.35:.7:l.stance==="crouch"&&(M*=.75);let T=Math.hypot(l.vel.x,l.vel.z);if(M*=l.sprinting?1.5:T>1?1.25:.8,x&&(M*=3),a&&(M*=l.flashlightOn?2.5:x?1:.45),p>62&&(M*=.45),d>5&&(M*=n.softVisibility(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2],i)),l.spotUntil>i&&(M*=1.8),y||(M*=.45),M*=this.d.sight*(1-e.suppression*.4)*(1-e.flashed),M<.02){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}c||(c={x:l.pos.x,y:l.pos.y,z:l.pos.z,t:-99,seenT:-99,aw:0,vis:!1},this.known.set(l,c));let w=i-c.t<4;if(c.aw=Math.min(1.6,c.aw+M*t*(w?9:4.5)),c.aw>=1&&(c.vis=!0,c.x=l.pos.x,c.y=l.pos.y,c.z=l.pos.z,c.t=i,c.seenT=i,c.headOnly=!y,c.bodyOnly=!v,l.spotUntil<i&&Math.random()<t*.6&&(l.spotUntil=i+4),e.squad))for(let S of e.squad.members)S!==e&&S.brain&&S.state==="alive"&&S.pos.distanceTo(e.pos)<120&&S.brain.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i-.4)}for(let l of this.game.teams[1-e.team])l.state==="alive"&&l.spotUntil>i&&!this.known.get(l)?.vis&&Math.abs(l.pos.x-e.pos.x)<220&&Math.abs(l.pos.z-e.pos.z)<220&&this.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i);for(let[l,c]of this.known)(l.state==="dead"||i-c.t>14&&c.aw<.02)&&this.known.delete(l);this.selectTarget(i)}selectTarget(t){let e=this.s,i=null,n=-1e9;for(let[s,a]of this.known){if(!a.vis)continue;let l=120/(e.pos.distanceTo(s.pos)+5);s.state==="downed"&&(l-=30),e.lastAttacker===s&&t-e.lastDamage<3&&(l+=25);let c=s.aimDir(Pf),h=ja.subVectors(e.pos,s.pos).normalize();c.dot(h)>.97&&(l+=15),s===this.target&&(l+=12),l>n&&(n=l,i=s)}if(i&&i!==this.target)this.acquire(i,t);else if(!i&&this.target){let s=this.known.get(this.target);(!s||this.target.state==="dead"||t-s.t>10)&&(this.target=null)}}acquire(t,e){let i=this.s,n=this.target;this.target=t;let s=i.pos.distanceTo(t.pos),a=Math.atan2(-(t.pos.x-i.pos.x),-(t.pos.z-i.pos.z)),o=Math.abs(_i(a-i.yaw))/ce,l=this.d.react*W(.8,1.35)*(s>90?1.25:1)*(o>60?1.35:1);n&&n.state==="alive"&&e-(this.known.get(n)?.seenT??-99)<1&&(l*=.6),this.reactT=l;let c=this.d.err0*W(.6,1.4)*(1+s/140)*(1+Math.hypot(t.vel.x,t.vel.z)/8)*ce,h=W(0,Math.PI*2);this.errY=Math.cos(h)*c,this.errP=Math.sin(h)*c*.7;let u=i.gun&&(i.gun.stats.type==="sniper"||i.gun.stats.type==="dmr");this.part=Math.random()<this.d.head*(u?1.8:1)?"head":"body",this.burstLeft=0}update(t){let e=this.s,i=this.game.time;if(e.state!=="alive"){e.input.fire=!1;return}if(this.nextPerceive-=t,this.nextPerceive<=0){let d=.16+W(0,.05);this.perceive(d),this.nextPerceive=d}this.nextThink-=t,this.nextThink<=0&&(this.think(i),this.nextThink=this.d.think*W(.8,1.3));let n=e.input;n.fire=!1,n.jump=!1,n.sprint=!1,n.mx=0,n.mz=0,this.wantLean=0;let s=0,a=0,o=!1,l=!0,c=this.target?this.known.get(this.target):null,h=!!(c&&c.vis);switch(this.gadgetTask&&this.runGadgetTask(t,i),this.state){case"combat":[s,a,o,l]=this.combatMove(t,i,c,h);break;case"revive":[s,a,o,l]=this.reviveMove(t,i);break;case"heal":[s,a,o,l]=this.healMove(t,i);break;default:[s,a,o,l]=this.objectiveMove(t,i)}for(let d of this.game.teams[e.team]){if(d===e||d.state!=="alive")continue;let f=e.pos.x-d.pos.x,p=e.pos.z-d.pos.z,x=f*f+p*p;if(x<1.6*1.6&&x>1e-4){let g=Math.sqrt(x);s+=f/g*(1.6-g)*.9,a+=p/g*(1.6-g)*.9}}let u=Math.hypot(s,a);if(this.progressT+=t,this.progressT>1){let d=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);u>.3&&d<.35&&!e.action?this.stuckT+=this.progressT:this.stuckT=0,this.lastPos.copy(e.pos),this.progressT=0}if(this.stuckT>.9&&(n.jump=!0),this.stuckT>2.5&&(this.path=null,this.cover=null,this.holdSpot=null,this.stuckT=0,s+=W(-1,1),a+=W(-1,1),this.requestRepath()),e.move.hitWall&&u>.3&&Math.random()<t*3&&(n.jump=!0),this.path&&this.pathI<this.path.length&&u>.3){let d=this.game.world.nav,f=d.cellOf(e.pos.x+s/Math.max(u,.01)*.8,e.pos.z+a/Math.max(u,.01)*.8);d.isVault(f)&&(n.jump=!0)}if(this.updateAim(t,i,c,h,s,a,l,o),u>.01){let d=s/Math.max(u,1),f=a/Math.max(u,1),p=e.forward(Pf),x=e.right(ja);n.mz=-(d*p.x+f*p.z),n.mx=d*x.x+f*x.z,n.sprint=o&&n.mz<-.6}n.crouch=this.wantStance==="crouch",e.leanTarget=this.wantLean,this.target&&c&&c.vis&&this.target.state!=="dead"&&e.pos.distanceTo(this.target.pos)<1.9&&(!e.gun||e.gun.mag===0||e.reloadT>0||Math.random()<t*2)&&this.game.combat.melee(e),this.wantStance==="prone"&&e.stance!=="prone"&&(n.prone=!0),this.wantStance!=="prone"&&e.stance==="prone"&&!n.crouch&&e.setStance(this.wantStance==="crouch"?"crouch":"stand"),e.swimming&&(n.crouch=!1)}think(t){let e=this.s,i=this.target?this.known.get(this.target):null,n=[...this.known.values()].some(c=>c.vis);e.bleed>0&&!n&&e.actionT<=0&&e.bandages>0&&t-e.lastDamage>1.2?e.isMedic&&e.medkitCd<=0?e.startAction("medkitSelf",1.1):e.bandage():e.isMedic&&e.hp<60&&!n&&e.medkitCd<=0&&e.actionT<=0&&e.startAction("medkitSelf",1.1);let s=e.gun;if(s&&!n&&s.mag<s.stats.mag*.6&&s.reserve>0&&e.reload(),e.active===1&&e.slots[0].mag+e.slots[0].reserve>0&&!n&&e.switchTo(0),e.active>=2&&!this.gadgetTask&&e.actionT<=0&&e.switchTo(0),!n&&!this.reviveMate){let c=e.isMedic?50:26,h=null,u=1e9;for(let d of this.game.teams[e.team]){if(d.state!=="downed"||d===e)continue;let f=d.pos.distanceTo(e.pos),p=d.squad===e.squad?c*1.3:c;if(f>p||d.reviver&&d.reviver!==e&&d.reviver.state==="alive"||d.downedHp<15&&f>15)continue;let x=f*(d.squad===e.squad?.7:1)*(d.isPlayer?.6:1);x<u&&(u=x,h=d)}h&&(this.reviveMate=h,h.reviver=e,this.path=null,this.smokeThrown=!1)}if(this.reviveMate&&this.reviveMate.state!=="downed"&&(this.reviveMate.reviver===e&&(this.reviveMate.reviver=null),this.reviveMate=null,e.reviveProgress=0),e.isMedic&&!n&&!this.reviveMate&&!this.healMate&&e.medkitCd<=0){for(let c of this.game.teams[e.team])if(c!==e&&c.state==="alive"&&(c.hp<65||c.bleed>0)&&c.pos.distanceTo(e.pos)<14){this.healMate=c;break}}this.healMate&&(this.healMate.state!=="alive"||this.healMate.hp>=95&&this.healMate.bleed<=0)&&(this.healMate=null);let a=$1[s?s.stats.type:"ar"]||150,o=i?Math.hypot(i.x-e.pos.x,i.z-e.pos.z):1e9,l=i&&(i.vis&&o<a*1.15||t-i.t<7&&o<Math.min(80,a)||t-e.lastDamage<3);if(this.reviveMate&&(!n||i&&e.pos.distanceTo(this.target.pos)>60)?this.state="revive":l?this.state="combat":this.healMate?this.state="heal":this.state="objective",s&&s.mag===0&&s.reserve===0&&e.active===0&&e.switchTo(1),this.gadgetCd-=this.d.think,this.nadeCd-=this.d.think,!this.gadgetTask&&this.gadgetCd<=0&&this.considerGadgets(t,n),this.cover&&this.target){let c=this.target,h=this.cover;!this.game.world.collision.los(h.x,h.y+.95,h.z,c.pos.x,c.pos.y+1.2,c.pos.z)||(this.cover=null)}}considerGadgets(t,e){let i=this.s,n=i.cls,s=i.squad&&i.squad.order,a=s?Math.hypot(s.x-i.pos.x,s.z-i.pos.z):999;if(n==="support"&&!e&&a<40&&i.slots[2].count>0&&Math.random()<.5){let o=this.game.combat.placementSpot(i);if(o){i.slots[2].count--,i.startAction("place",.6,{gid:"ammobox",spot:o}),this.gadgetCd=40;return}}if(n==="support"&&!e&&a<25&&i.slots[3].count>0&&s&&s.type==="defend"&&Math.random()<.4){let o=this.game.combat.placementSpot(i);if(o){i.slots[3].count--,i.startAction("place",.6,{gid:"sandbags",spot:o}),this.gadgetCd=15;return}}if(n==="recon"&&!e&&a<25&&!this.placedClaymore&&i.slots[2].count>0&&s&&(s.type==="defend"||s.ownedByUs)){let o=this.game.combat.placementSpot(i);if(o){i.slots[2].count--,i.startAction("place",.6,{gid:"claymore",spot:o}),this.placedClaymore=!0,this.gadgetCd=30;return}}if((n==="recon"||n==="leader")&&!e&&a>45&&a<140){let o=n==="recon"?"beacon":"rally",l=this.game.combat.placed.find(c=>c.owner===i&&c.type===o);if(!l||Math.hypot(l.x-s.x,l.z-s.z)>160){let c=this.game.combat.placementSpot(i);if(c&&this.game.world.nav.cover[this.game.world.nav.cellOf(c.x,c.z)]>40){i.startAction("place",.6,{gid:o,spot:c}),this.gadgetCd=45;return}}}this.gadgetCd=W(3,7)}objectiveMove(t,e){let i=this.s,n=this.game.squads.objectiveFor(i);this.wantStance="stand";let s=n.x,a=n.z;this.investigate&&e-this.investigate.t<12&&Math.hypot(this.investigate.x-i.pos.x,this.investigate.z-i.pos.z)<70&&this.aggro>.45&&(s=this.investigate.x,a=this.investigate.z,Math.hypot(s-i.pos.x,a-i.pos.z)<6&&(this.investigate=null));let o=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);if(o<n.r*.85&&n.hold){if(this.holdT-=t,!this.holdSpot||this.holdT<=0){let m=this.game.squads.threatPoint(i.team,n),v=this.game.world.nav.findCover(n.x,n.z,{x:m.x,y:m.y+1.4,z:m.z},n.r*.75,{maxTests:22,occupied:(M,T)=>this.game.teams[i.team].some(w=>w!==i&&w.state==="alive"&&w.brain&&w.brain.holdSpot&&Math.hypot(w.brain.holdSpot.x-M,w.brain.holdSpot.z-T)<3)}),y=v.length?v[Math.floor(Math.random()*Math.min(3,v.length))]:null;if(y)this.holdSpot={x:y.x,z:y.z,peek:y.peek};else{let[M,T]=this.game.world.nav.randomWalkableNear(n.x,n.z,n.r*.6);this.holdSpot={x:M,z:T,peek:!0}}this.holdT=W(10,22),this.path=null}if(s=this.holdSpot.x,a=this.holdSpot.z,Math.hypot(s-i.pos.x,a-i.pos.z)<1)return this.wantStance=this.holdSpot.peek&&Math.sin(e*.4+this.ph1)>.2?"stand":"crouch",[0,0,!1,!1]}let[c,h,u]=this.followTo(s,a,t),d=Math.hypot(s-i.pos.x,a-i.pos.z),f=[...this.known.values()].some(g=>e-g.t<6&&Math.hypot(g.x-i.pos.x,g.z-i.pos.z)<80),p=this.target&&this.known.get(this.target)&&this.known.get(this.target).vis,x=d>25&&!f&&!p&&i.hp>35&&!u;return!x&&o<70&&(this.wantStance="stand"),[c,h,x,x||!f]}combatMove(t,e,i,n){let s=this.s,a=this.target;if(!a||!i)return this.state="objective",[0,0,!1,!0];let o=Math.hypot(i.x-s.pos.x,i.z-s.pos.z),l=s.gun,c=Y1[l?l.stats.type:"ar"]||30,h=this.game.world.nav;if(this.wantStance="stand",n){this.lostT=0,this.coverSearchT-=t;let f=s.suppression>.25||e-s.lastDamage<1.5;if(!this.cover&&this.coverSearchT<=0&&o>18&&Math.random()<this.d.cover){this.coverSearchT=W(1.5,3);let C={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},_=h.findCover(s.pos.x,s.pos.z,C,f?9:12,{maxTests:20,minThreatDist:10,prefer:o>c*1.5?{x:Qt(s.pos.x,a.pos.x,.25),z:Qt(s.pos.z,a.pos.z,.25)}:null,occupied:(b,A)=>this.game.teams[s.team].some(z=>z!==s&&z.brain&&z.brain.cover&&Math.hypot(z.brain.cover.x-b,z.brain.cover.z-A)<2)});_.length&&(this.cover=_[0],this.path=null,this.peekT=0)}let p=this.game.squads.objectiveFor(s),x=Math.hypot(p.x-s.pos.x,p.z-s.pos.z),g=this.game.squads.orderType(s)!=="defend";this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1?this.coverTime=(this.coverTime||0)+t:this.cover||(this.coverTime=0);let m=g?5+this.aggro*-2+W(0,4):14;if(this.cover&&this.coverTime>m&&(x>p.r*.8||!g)){let C=g?{x:Qt(s.pos.x,p.x,Math.min(1,22/Math.max(x,1))),z:Qt(s.pos.z,p.z,Math.min(1,22/Math.max(x,1)))}:{x:s.pos.x+W(-8,8),z:s.pos.z+W(-8,8)},_={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},b=h.findCover(C.x,C.z,_,10,{maxTests:18,minThreatDist:8,prefer:C});this.cover=b.length?b[0]:null,this.coverTime=0,this.path=null,!this.cover&&g&&o>25&&(this.advanceT=W(2.5,5))}if(this.advanceT>0){this.advanceT-=t;let[C,_]=this.followTo(p.x,p.z,t);return this.wantStance="stand",[C,_,!1,!1]}if(!this.cover&&g&&o>70&&x>p.r&&Math.random()<t*.5&&(this.advanceT=W(2,4)),this.cover){let C=Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z);if(C>.9){let[_,b]=this.followTo(this.cover.x,this.cover.z,t),A=f&&C>4;return this.wantStance="stand",[_,b,A,A]}if(this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?W(1.4,3.2):W(.6,1.6)+s.suppression*2,!this.peeking&&l&&l.mag<l.stats.mag*.45&&s.reload()),(s.reloadT>0||s.suppression>.75||s.actionT>0)&&(this.peeking=!1),this.cover.peek)this.wantStance=this.peeking?"stand":"crouch";else if(this.cover.lean){if(this.wantStance=this.peeking?"stand":"crouch",this.peeking){let _=s.right(ja);this.wantLean=this.cover.lean.x*_.x+this.cover.lean.z*_.z>0?1:-1}}else this.wantStance="crouch";return[0,0,!1,!1]}this.strafeT-=t,this.strafeT<=0&&(this.strafeDir=Math.random()<.5?-1:1,this.strafeT=W(.35,.95)/(.4+this.d.strafe*.6),Math.random()<.15*this.d.strafe&&o<25&&(this.crouchSpamT=.35)),this.crouchSpamT>0&&(this.crouchSpamT-=t);let v=(a.pos.x-s.pos.x)/Math.max(o,.1),y=(a.pos.z-s.pos.z)/Math.max(o,.1),M=0,T=0,w=o<60?this.d.strafe:this.d.strafe*.4;M+=-y*this.strafeDir*w,T+=v*this.strafeDir*w,o>c*1.4&&this.aggro>.5?(M+=v*.6,T+=y*.6):o<c*.5&&l&&(l.stats.type==="dmr"||l.stats.type==="sniper")&&(M-=v*.7,T-=y*.7);let S=h.cellOf(s.pos.x+M*1.2,s.pos.z+T*1.2);return(!h.walkable(S)||h.isWater(S))&&(M=-M,T=-T,this.strafeDir*=-1),o>70&&l&&["lmg","dmr","sniper"].includes(l.stats.type)&&s.suppression<.6?(this.wantStance="prone",[0,0,!1,!1]):(o>40&&Math.random()<.5&&(this.wantStance="crouch"),this.crouchSpamT>0&&(this.wantStance="crouch"),[M,T,!1,!1])}this.lostT=(this.lostT||0)+t;let u=e-i.t;if(l&&l.mag<l.stats.mag*.5&&s.reload(),this.nadeCd<=0&&u<5&&o>10&&o<34&&i.seenT>e-6&&Math.random()<this.d.nade*t*2&&this.throwGrenadeAt(i.x,i.y,i.z),!this.gadgetTask&&u<4&&o>18&&o<110&&Math.random()<t*.6*this.d.nade&&this.tryHeavyAt(i),this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1&&this.lostT<6){if(this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?W(1.2,2.4):W(.7,1.6)+s.suppression),(s.reloadT>0||s.suppression>.75)&&(this.peeking=!1),this.cover.lean&&this.peeking){let p=s.right(ja);this.wantLean=this.cover.lean.x*p.x+this.cover.lean.z*p.z>0?1:-1,this.wantStance="stand"}else this.wantStance=this.cover.peek&&this.peeking?"stand":"crouch";return[0,0,!1,!1]}if(this.lostT<1.6)return this.wantStance=Math.random()<.5?"crouch":"stand",[0,0,!1,!1];if((this.aggro>.5||this.game.squads.orderType(s)==="attack"||o<25)&&u<9){this.cover=null;let[f,p,x]=this.followTo(i.x,i.z,t);return x&&(this.known.delete(a),this.target=null),this.wantStance="stand",[f,p,!1,!1]}return this.cover=null,this.objectiveMove(t,e)}reviveMove(t,e){let i=this.s,n=this.reviveMate;if(!n||n.state!=="downed")return this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(!this.smokeThrown&&s<30&&i.slots[4].id==="smoke"&&i.slots[4].count>0&&[...this.known.values()].some(o=>e-o.t<6&&Math.hypot(o.x-n.pos.x,o.z-n.pos.z)<60)&&(this.throwGrenadeAt(n.pos.x+W(-2,2),n.pos.y,n.pos.z+W(-2,2),"smoke"),this.smokeThrown=!0),i.isMedic&&i.slots[3].id==="smoke"&&!this.smokeThrown&&s<25&&i.slots[3].count>0&&[...this.known.values()].some(o=>e-o.t<6)&&(i.slots[3].count--,this.throwGrenadeAt(n.pos.x,n.pos.y,n.pos.z,"smoke",!0),this.smokeThrown=!0),s>1.4){let[a,o]=this.followTo(n.pos.x,n.pos.z,t),l=s>6;return this.wantStance="stand",i.reviveProgress=0,[a,o,l,!0]}return this.wantStance="crouch",this.lookAt(n.pos.x,n.pos.y+.3,n.pos.z,t,300),this.game.reviveTick(i,n,t),[0,0,!1,!1]}healMove(t,e){let i=this.s,n=this.healMate;if(!n||n.state!=="alive")return this.healMate=null,this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(s>2.5){let[a,o]=this.followTo(n.pos.x,n.pos.z,t);return[a,o,s>8,!0]}return i.actionT<=0&&i.medkitCd<=0&&(i.startAction("medkitOther",1,{target:n}),this.healMate=null),[0,0,!1,!1]}requestRepath(){this.repathT=0,this.path=null}followTo(t,e,i){let n=this.s,s=Math.hypot(t-n.pos.x,e-n.pos.z);if(s<.8)return[0,0,!0];this.repathT-=i;let a=!this.goal||Math.hypot(this.goal.x-t,this.goal.z-e)>Math.max(3,s*.2);if((!this.path||a||this.repathT<=0)&&!this.pathPending&&(this.goal={x:t,z:e},this.pathPending=!0,this.game.ai.requestPath(this,t,e),this.repathT=W(6,10)),!this.path)return s<12?[(t-n.pos.x)/s,(e-n.pos.z)/s,!1]:[0,0,!1];for(;this.pathI<this.path.length;){let u=this.path[this.pathI],d=Math.hypot(u[0]-n.pos.x,u[1]-n.pos.z),f=this.pathI===this.path.length-1;if(d<(f?.7:n.sprinting?1.6:1.1))this.pathI++;else break}if(this.pathI>=this.path.length)return this.path.partial?(this.path=null,[0,0,!1]):[(t-n.pos.x)/s,(e-n.pos.z)/s,s<1.5];let o=this.path[this.pathI],l=o[0]-n.pos.x,c=o[1]-n.pos.z,h=Math.hypot(l,c)||1;return[l/h,c/h,!1]}onPath(t){this.pathPending=!1,this.path=t,this.pathI=t&&t.length>1?1:0}lookAt(t,e,i,n,s){let a=this.s.eye(Za),o=t-a.x,l=e-a.y,c=i-a.z,h=Math.atan2(-o,-c),u=Math.atan2(l,Math.hypot(o,c));this.aiYaw=wr(this.aiYaw,h,s*ce*n),this.aiPitch+=Nt(u-this.aiPitch,-s*ce*n,s*ce*n)}updateAim(t,e,i,n,s,a,o,l){let c=this.s,h=c.pitch-this.lastPitch,u=_i(c.yaw-this.lastYaw);Math.abs(h)<.2&&(this.recoilOff+=h*(1-this.d.comp)),Math.abs(u)<.2&&(this.recoilOffY+=u*(1-this.d.comp)),this.recoilOff*=Math.exp(-t*5),this.recoilOffY*=Math.exp(-t*5);let d=!1;if(this.gadgetTask&&this.gadgetTask.aimYaw!==void 0)this.aiYaw=wr(this.aiYaw,this.gadgetTask.aimYaw,this.d.turn*ce*t),this.aiPitch+=Nt(this.gadgetTask.aimPitch-this.aiPitch,-this.d.turn*ce*t,this.d.turn*ce*t);else if(n&&this.target&&this.state!=="revive"){let f=this.target,p=c.eye(Za),x=f.hitSpheres(),g=i.headOnly?"head":i.bodyOnly?"body":this.part,m=g==="head"?x[0]:x[1],v=c.gun,y=v?v.stats.vel*v.stats.velMul:800,M=Math.hypot(m[0]-p.x,m[1]-p.y,m[2]-p.z),T=M/y,w=this.d.lead,S=m[0]+f.vel.x*T*w,C=m[1]+f.vel.y*T*w*.3+.5*9.81*T*T*w,_=m[2]+f.vel.z*T*w,b=S-p.x,A=C-p.y,z=_-p.z,L=Math.atan2(-b,-z),U=Math.atan2(A,Math.hypot(b,z)),O=Math.exp(-t/this.d.errTau);this.errY*=O,this.errP*=O;let N=Math.hypot(c.vel.x,c.vel.z)>1?1.6:1,q=this.d.jitter*ce*N*(1+c.suppression*2.2+c.flashed*6),F=(Math.sin(e*2.3+this.ph1)+Math.sin(e*5.1+this.ph2)*.5)*q*.6,X=(Math.sin(e*2.9+this.ph2)+Math.sin(e*4.3+this.ph1)*.5)*q*.45,j=L+this.errY+F,lt=U+this.errP+X,et=Math.abs(_i(j-this.aiYaw))+Math.abs(lt-this.aiPitch),Rt=this.d.turn*ce*t*(.25+.75*Math.min(1,et/(12*ce)));this.aiYaw=wr(this.aiYaw,j,Rt),this.aiPitch+=Nt(lt-this.aiPitch,-Rt,Rt);let Y=this.aiYaw+this.recoilOffY,rt=this.aiPitch+this.recoilOff,gt=Math.hypot(_i(Y-L),rt-U),nt=g==="head"?.14:.3,yt=Math.max(.35*ce,Math.atan(nt/Math.max(M,1))*(M<15?2.6:1.6));this.reactT-=t,d=this.reactT<=0&&gt<yt*(this.burstLeft>0?2.2:1),f.state==="downed"&&[...this.known.values()].filter(It=>It.vis).length>1&&(d=!1),this.handleTrigger(t,d,M,e),c.input.ads=!!v&&(M>14||v.stats.type==="sniper"||v.stats.type==="dmr")&&c.reloadT<=0}else{c.input.ads=!1,this.burstLeft=0;let f=null,p=0;if(i&&!n){let x=c.eye(Za);f=Math.atan2(-(i.x-x.x),-(i.z-x.z)),p=Math.atan2(i.y+1.3-x.y,Math.hypot(i.x-x.x,i.z-x.z))}else if(o&&Math.hypot(s,a)>.2){if(f=Math.atan2(-s,-a),this.glanceT-=t,!l&&this.glanceT<=0){this.glancing=W(.6,1.2),this.glanceT=W(2.5,5);let x=this.game.squads.threatPoint(c.team,this.game.squads.objectiveFor(c));this.glanceYaw=Math.atan2(-(x.x-c.pos.x),-(x.z-c.pos.z))}this.glancing>0&&(this.glancing-=t,Math.abs(_i(this.glanceYaw-f))<1.6&&(f=this.glanceYaw))}else{let x=this.game.squads.objectiveFor(c),g=this.game.squads.threatPoint(c.team,x);f=Math.atan2(-(g.x-c.pos.x),-(g.z-c.pos.z))+Math.sin(e*.35+this.ph1)*.9,p=-.04}f!==null&&(this.aiYaw=wr(this.aiYaw,f,(l?400:220)*ce*t),this.aiPitch+=Nt(p-this.aiPitch,-2*t,2*t))}c.yaw=this.aiYaw+this.recoilOffY,c.pitch=Nt(this.aiPitch+this.recoilOff,-1.4,1.4),this.lastPitch=c.pitch,this.lastYaw=c.yaw}handleTrigger(t,e,i,n){let s=this.s,a=s.gun;if(!a||s.reloadT>0||s.actionT>0)return;if(a.mag===0){a.reserve>0&&i<14&&s.slots[1].mag>0&&Math.random()<.5?s.switchTo(1):s.reload();return}this.holdFire-=t;let o=a.stats,l=o.modes[a.mode];if(this.burstLeft>0){if(l==="auto"?(s.input.fire=!0,s.fireCd<=1e-4&&this.burstLeft--):s.fireCd<=0&&(s.input.fire=!this.prevFire,this.burstLeft-=s.input.fire?1:0),this.prevFire=s.input.fire,this.burstLeft<=0){let c=i<20?W(.05,.18):i<60?W(.18,.4):W(.3,.65);this.holdFire=c*(1.6-this.d.burst)}return}if(this.prevFire=!1,!(!e||this.holdFire>0))if(l==="auto"){let c=i<20?Math.round(W(6,14)):i<45?Math.round(W(3,7)):i<90?Math.round(W(2,4)):Math.round(W(1,2));this.burstLeft=o.type==="lmg"?c*2:c,s.input.fire=!0}else s.input.fire=!0,this.prevFire=!0,this.burstLeft=0,this.holdFire=o.interval+(i>50?W(.12,.35):W(.03,.12))*(o.bolt?.5:1)}throwGrenadeAt(t,e,i,n,s){let a=this.s,o=s?a.slots[3]:a.slots[4];if(!o||o.count<=0||a.actionT>0)return!1;if(n){if(!s&&o.id!==n)return!1}else{if(o.id!=="frag"&&o.id!=="impact")return!1;n=o.id}let l=a.eye(new R),c=new R(t,e+.3,i),h=Cn.solveBallistic(l,c,17,15);if(h||(h=Cn.solveBallistic(l,c,22,15)),!h)return!1;let u=h.length();return this.game.world.collision.los(l.x,l.y,l.z,l.x+h.x/u*3,l.y+h.y/u*3,l.z+h.z/u*3)?(s||o.count--,a.throwVel=h,a.startAction("throw",.5,{type:n}),this.aiYaw=Math.atan2(-h.x,-h.z),this.nadeCd=W(10,18)/this.d.nade,!0):!1}tryHeavyAt(t){let e=this.s,i=e.slots.findIndex((l,c)=>c>=2&&l&&(l.id==="rpg"||l.id==="m320")&&l.count>0);if(i<0)return!1;let n=e.eye(new R),s=new R(t.x,t.y+1,t.z),a=e.slots[i].id==="rpg",o=Cn.solveBallistic(n,s,a?115:72,a?2.5:9.81);return!o||Math.hypot(t.x-e.pos.x,t.z-e.pos.z)<12?!1:(this.gadgetTask={slot:i,t:0,aimYaw:Math.atan2(-o.x,-o.z),aimPitch:Math.atan2(o.y,Math.hypot(o.x,o.z)),fired:!1},e.switchTo(i),!0)}runGadgetTask(t,e){let i=this.s,n=this.gadgetTask;n.t+=t,!n.fired&&i.switchT<=0&&n.t>.55&&(Math.abs(_i(this.aiYaw-n.aimYaw))<2*ce||n.t>1.6)&&(i.input.ads=!0,i.adsT=1,this.game.combat.useGadget(i,!0,!1),n.fired=!0,n.t=0),n.fired&&n.t>.6&&(this.gadgetTask=null,i.switchTo(0)),n.t>4&&(this.gadgetTask=null,i.switchTo(0))}},Ja=class{constructor(t){this.game=t,this.queue=[]}requestPath(t,e,i){this.queue.includes(t)||this.queue.push(t),t._pathGoal=[e,i]}update(){let t=this.game.world.nav;t.processDirty();let e=3;for(;e-- >0&&this.queue.length;){let i=this.queue.shift();if(i.s.state!=="alive"){i.pathPending=!1;continue}let[n,s]=i._pathGoal,a=t.findPath(i.s.pos.x,i.s.pos.z,n,s,{coverBias:.6,maxNodes:3e4,weight:1.45});i.onPath(a)}}clear(){this.queue=[]}};var ri="#4aa8ff",an="#86e05a",pi="#ff4b3a",Rn="#c8c8c8",Vr=new R;function ne(r,t,e,i){let n=document.createElement(r);return t&&(n.className=t),i!==void 0&&(n.innerHTML=i),e&&e.appendChild(n),n}var Qa=class{constructor(t){this.game=t;let e=this.root=ne("div","hud",document.getElementById("ui"));this.markers=ne("canvas","markers",e),this.mctx=this.markers.getContext("2d"),this.top=ne("div","hud-top",e),this.ticketsEl=ne("div","tickets",this.top),this.flagsEl=ne("div","flagrow",this.top),this.compass=ne("canvas","compass",this.top),this.compass.width=520,this.compass.height=30,this.capEl=ne("div","capbar",e),this.capEl.innerHTML='<div class="caplabel"></div><div class="captrack"><div class="capfill"></div></div>',this.minimap=ne("canvas","minimap",e),this.minimap.width=this.minimap.height=220,this.feed=ne("div","killfeed",e),this.squadEl=ne("div","squadlist",e),this.vitals=ne("div","vitals",e),this.vitals.innerHTML='<div class="hpnum">100</div><div class="hpbar"><div class="hpfill"></div></div><div class="vstat"></div>',this.weaponEl=ne("div","weaponbox",e),this.crosshair=ne("div","crosshair",e),this.crosshair.innerHTML='<i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-d"></i>',this.hitmarker=ne("div","hitmarker",e),this.hitmarker.innerHTML="<i></i><i></i><i></i><i></i>",this.prompt=ne("div","prompt",e),this.progress=ne("div","progress",e),this.progress.innerHTML="<div></div>",this.toasts=ne("div","scoretoasts",e),this.msg=ne("div","hudmsg",e),this.scope=ne("canvas","scopecv",e),this.scopeCtx=this.scope.getContext("2d"),this.downedEl=ne("div","downed",e),this.oob=ne("div","oob",e),this.fps=ne("div","fps",e),this.flashEl=ne("div","flashbang",e),this.banner=ne("div","killbanner",e),this.ammoHint=ne("div","ammohint",e),this.breathEl=ne("div","breath",e),this.breathEl.innerHTML="<span>HOLD BREATH</span><div><i></i></div>",this.order=ne("div","orderline",e),this.board=ne("div","scoreboard",e),this.bigmap=ne("canvas","bigmap",e),this.bigmap.width=this.bigmap.height=760,this.dmg=[],this.hitT=0,this.hitKill=!1,this.feedItems=[],this.toastItems=[],this.giveUp=0,this.fpsAcc=0,this.fpsN=0,this.fpsT=0,this.lastWeaponKey="",this.lastFlagsKey="",this.resize()}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.markers.width=Math.floor(window.innerWidth*t),this.markers.height=Math.floor(window.innerHeight*t),this.dpr=t}setVisible(t){this.root.style.display=t?"":"none"}addKill(t,e,i,n,s){let a=t?t.team===this.game.player.team?t.squad===this.game.player.squad?an:ri:pi:Rn,o=e.team===this.game.player.team?e.squad===this.game.player.squad?an:ri:pi,l=t===this.game.player||e===this.game.player,c=ne("div","kf"+(l?" me":""),this.feed,`${t&&t!==e?`<b style="color:${a}">${t.name}</b>`:""} <span class="kfw">${s?"\u25BC ":""}${i||""}${n?" \u2738":""}</span> <b style="color:${o}">${e.name}</b>`);this.feedItems.push({row:c,t:7}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}addRevive(t,e){let i=t.team===this.game.player.team?ri:pi,n=ne("div","kf",this.feed,`<b style="color:${i}">${t.name}</b> <span class="kfw" style="color:#7fe07a">\u271A revived</span> <b style="color:${i}">${e.name}</b>`);this.feedItems.push({row:n,t:5}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}scorePopup(t,e){let i=ne("div","toast",this.toasts,e?`<b>+${e}</b> ${t}`:t);this.toastItems.push({row:i,t:2.2}),this.toastItems.length>5&&this.toastItems.shift().row.remove()}killBanner(t,e,i){this.banner.innerHTML=`<div class="kb-x">\u2715</div><div class="kb-t">${i?"ENEMY DOWN":"ENEMY KILLED"}${e?" <b>HEADSHOT</b>":""}</div><div class="kb-n">${t}</div>`,this.banner.classList.remove("show"),this.banner.offsetWidth,this.banner.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.banner.classList.remove("show"),2200)}toast(t,e=2.5){this.msg.textContent=t,this.msg.style.opacity=1,this.msgT=e}hit(t,e){this.hitT=.16,this.hitKill=t,this.hitHead=e}damageFrom(t){if(!t)return;let e=this.game.player,i=Math.atan2(-t.x,-t.z)-e.yaw+Math.PI;this.dmg.push({a:i,t:1.4})}update(t){let e=this.game,i=e.player;if(!i)return;this.fpsAcc+=t,this.fpsN++,this.fpsT-=t,this.fpsT<=0&&(this.fps.textContent=e.settings.get("showFps")?`${Math.round(this.fpsN/this.fpsAcc)} FPS`:"",this.fpsAcc=0,this.fpsN=0,this.fpsT=.5);for(let g of[this.feedItems,this.toastItems])for(let m=g.length-1;m>=0;m--)g[m].t-=t,g[m].t<=0?(g[m].row.remove(),g.splice(m,1)):g[m].t<.5&&(g[m].row.style.opacity=g[m].t/.5);this.msgT!==void 0&&(this.msgT-=t,this.msgT<=0&&(this.msg.style.opacity=0)),this.updateTop(),this.updateWeapon(),this.updateVitals(),this.updateSquad(),this.updateCrosshair(t),this.drawMinimap(),this.drawMarkers(t),this.updateCapture();let n=e.playerCtl&&e.playerCtl.isScoped();if(this.scope.style.display=n?"block":"none",n){let g=i.weapon&&i.weapon.id==="binoculars"?"binoc":i.gun&&i.gun.stats.sightId==="scope8"?"scope8":"acog";this.drawScope(g,i,t)}let s=e.playerCtl,a=n&&i.gun&&s;this.breathEl.style.display=a?"block":"none",a&&(this.breathEl.querySelector("i").style.width=`${s.breath*100}%`,this.breathEl.classList.toggle("on",!!s.holding),this.breathEl.querySelector("span").textContent=`HOLD [${ve.name("sprint")}] TO STEADY`);let o=i.gun,l="";i.state==="alive"&&o&&i.reloadT<=0&&(o.mag===0&&o.reserve===0?l='<b class="bad">NO AMMO</b> \xB7 find an ammo box or switch weapons':o.mag===0?l=`<b class="bad">RELOAD</b> [${ve.name("reload")}]`:o.mag<=Math.ceil(o.stats.mag*.25)&&o.reserve>0&&(l=`LOW AMMO \xB7 [${ve.name("reload")}]`)),l!==this._hint&&(this._hint=l,this.ammoHint.innerHTML=l),this.flashEl.style.opacity=Nt(i.flashed*1.4,0,1);let c=e.playerCtl&&e.playerCtl.prompt;this.prompt.textContent=c||"",this.prompt.style.display=c&&i.state==="alive"?"block":"none";let h=i.action&&!["throw","throwC4","reloadGadget","melee"].includes(i.action.name),u=i.reviveProgress>0?i.reviveProgress:h?1-i.actionT/i.actionDur:0;if(this.progress.style.display=u>0&&i.state==="alive"?"block":"none",this.progress.firstChild.style.width=`${u*100}%`,i.state==="downed"){this.downedEl.style.display="block";let g=i.reviver&&i.reviver.state==="alive"&&i.reviver.reviveProgress>0;this.downedEl.innerHTML=`<div class="dt">YOU ARE DOWN</div><div class="ds">${g?`${i.reviver.name} is reviving you\u2026`:"Wait for a teammate to revive you"}</div><div class="dbar"><div style="width:${Nt(i.downedHp,0,100)}%"></div></div><div class="dk">Hold [${ve.name("jump")}] to give up ${this.giveUp>0?Math.round(this.giveUp*100)+"%":""}</div>`}else this.downedEl.style.display="none";let d=e.oobTime;this.oob.style.display=d>0?"block":"none",d>0&&(this.oob.innerHTML=`RETURN TO THE BATTLEFIELD<br><b>${Math.ceil(d)}</b>`);let f=i.squad;if(f&&f.order){let g=f.order,m=g.type==="follow"?"FOLLOW SQUAD LEADER":g.type==="move"?"MOVE TO MARKER":`${g.type.toUpperCase()} ${g.flag&&g.flag.id?g.flag.id+" \xB7 "+g.flag.name:""}`;this.order.innerHTML=`<b>${f.name}</b> ${m}${f.leader===i?` <span>[${ve.name("spot")}] give orders</span>`:""}`}else this.order.textContent="";let p=ve.down(e.input,"scoreboard")&&!e.uiBlocking();this.board.style.display=p?"block":"none",p&&this.drawBoard();let x=ve.down(e.input,"map")&&!e.uiBlocking();this.bigmap.style.display=x?"block":"none",x&&this.drawMap(this.bigmap,!1)}updateTop(){let t=this.game,e=t.mode,i=t.player,n=i.team,s=1-n,a=e.type==="tdm",o=a?e.kills[n]:e.tickets[n],l=a?e.kills[s]:e.tickets[s],c=Math.max(0,e.timeLimit-e.time),h=Math.floor(c/60),u=Math.floor(c%60),d=o/e.maxTickets,f=l/e.maxTickets,p=`${o}|${l}|${h}|${u}`;p!==this.lastTicketKey&&(this.lastTicketKey=p,this.ticketsEl.innerHTML=`<div class="tk mine"><span>${Xe[n].name}</span><b>${o}</b><div class="tkbar"><div style="width:${d*100}%"></div></div></div><div class="clock">${h}:${String(u).padStart(2,"0")}</div><div class="tk theirs"><b>${l}</b><span>${Xe[s].name}</span><div class="tkbar"><div style="width:${f*100}%"></div></div></div>`);let x=e.flags.map(v=>`${v.id}${v.owner}${Math.round(v.progress*20)}${v.contested?1:0}${v.capTeam}`).join(",");x!==this.lastFlagsKey&&(this.lastFlagsKey=x,this.flagsEl.innerHTML=e.flags.map(v=>{let y=v.owner===-1?"n":v.owner===n?"f":"e",M=Math.abs(v.progress),T=v.progress>0?0:1,w=v.progress===0?Rn:T===n?ri:pi,S=e.type==="frontline"&&!e.capturable(v,n)&&v.owner!==n?" locked":"";return`<div class="flag ${y}${v.contested?" contested":""}${S}" style="--p:${M*100}%;--c:${w}"><span>${v.id}</span></div>`}).join(""));let g=this.compass.getContext("2d");g.clearRect(0,0,520,30);let m=(-i.yaw/ce%360+360)%360;g.font="600 12px Rajdhani, Bahnschrift, sans-serif",g.textAlign="center";for(let v=-100;v<=100;v+=5){let M=(Math.round(m+v)%360+360)%360,T=260+(v-(m-Math.round(m)))*2.5;if(M%15!==0)continue;g.fillStyle="rgba(255,255,255,0.75)";let w={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[M];w?(g.fillStyle=M%90===0?"#ffd76a":"#fff",g.fillText(w,T,13)):(g.fillRect(T-.5,4,1,6),g.fillStyle="rgba(255,255,255,0.5)",g.fillText(String(M),T,22))}for(let v of e.flags){let M=(Math.atan2(v.x-i.pos.x,-(v.z-i.pos.z))/ce-m+540)%360-180;if(Math.abs(M)>100)continue;let T=260+M*2.5;g.fillStyle=v.owner===-1?Rn:v.owner===n?ri:pi,g.fillText(v.id,T,29)}g.fillStyle="#ffd76a",g.fillRect(259,0,2,7)}updateWeapon(){let t=this.game.player,e=t.weapon;if(!e)return;let i="",n="",s="";e.kind==="gun"?(i=e.stats.name,n=`<b>${e.mag}</b><span>/${e.reserve}</span>`,s=e.stats.modes[e.mode].toUpperCase()):(i=e.def.name,n=e.def.count===1/0?"<b>\u221E</b>":`<b>${e.count}</b>`,e.id==="c4"&&t.c4s&&t.c4s.length&&(s=`${t.c4s.length} PLACED \xB7 RMB DETONATE`),(e.id==="rpg"||e.id==="m320")&&!e.loaded&&(s="RELOADING"));let a=t.slots.map((l,c)=>{if(!l)return"";let h=l.kind==="gun"?l.stats.name:l.def.name,u=l.kind==="gun"||l.def.count===1/0?"":`<em>${l.count}</em>`;return`<div class="slot${c===t.active?" on":""}${l.kind==="gadget"&&l.count<=0&&l.def.count!==1/0?" empty":""}"><i>${ve.name("slot"+(c+1))}</i>${h}${u}</div>`}).join(""),o=i+n+s+a+t.bandages+(t.reloadT>0);o!==this.lastWeaponKey&&(this.lastWeaponKey=o,this.weaponEl.innerHTML=`<div class="wname">${i}${t.reloadT>0?' <span class="rl">RELOADING</span>':""}</div><div class="ammo">${n}<div class="fmode">${s}</div></div><div class="slots">${a}<div class="slot"><i>${ve.name("bandage")}</i>Bandage<em>${t.bandages}</em></div></div>`)}updateVitals(){let t=this.game.player,e=t.state==="alive"?Math.max(0,Math.ceil(t.hp)):0;if(e!==this.lastHp||t.bleed>0!==this.lastBleed||t.stance!==this.lastStance){this.lastHp=e,this.lastBleed=t.bleed>0,this.lastStance=t.stance,this.vitals.querySelector(".hpnum").textContent=e;let i=this.vitals.querySelector(".hpfill");i.style.width=`${e}%`,i.style.background=e<30?"#e8443a":e<60?"#e8b23a":"#e9eef2",this.vitals.querySelector(".vstat").innerHTML=`${t.bleed>0?`<span class="bleed">BLEEDING \xB7 [${ve.name("bandage")}] bandage</span>`:""}<span class="stance">${t.stance.toUpperCase()}</span><span class="cls" style="color:${di[t.cls].color}">${di[t.cls].name.toUpperCase()}</span>`}}updateSquad(){let t=this.game.player,e=t.squad;if(!e)return;let i=e.members.map(n=>n.name+n.state+(n===e.leader)+n.cls).join("|");i!==this.lastSquadKey&&(this.lastSquadKey=i,this.squadEl.innerHTML=`<div class="sqname">${e.name} SQUAD</div>`+e.members.map(n=>`<div class="sqm ${n.state}${n===t?" me":""}"><span class="sqc" style="background:${di[n.cls].color}"></span>${n===e.leader?"\u2605 ":""}${n.name}<em>${n.state==="downed"?"DOWN":n.state==="dead"?"KIA":""}</em></div>`).join(""))}updateCrosshair(t){let e=this.game,i=e.player,n=e.settings.get("crosshair")&&i.state==="alive"&&i.adsT<.5&&!i.sprinting&&!e.uiBlocking();if(this.crosshair.style.display=n?"block":"none",n){let s=i.gun?i.spread():1.2,a=e.camera,o=Math.tan(s*.5*ce)/Math.tan(a.fov*.5*ce)*window.innerHeight*.5;this.crosshair.style.setProperty("--gap",`${Nt(o,3,140)}px`)}this.hitT-=t,this.hitmarker.style.opacity=this.hitT>0?1:0,this.hitmarker.className="hitmarker"+(this.hitKill?" kill":"")+(this.hitHead?" head":"")}updateCapture(){let t=this.game,e=t.player,i=null;if(e.state==="alive"){for(let h of t.mode.flags)if(Math.hypot(e.pos.x-h.x,e.pos.z-h.z)<h.r&&Math.abs(e.pos.y-h.y)<14){i=h;break}}if(!i){this.capEl.style.display="none";return}this.capEl.style.display="block";let n=e.team,s=this.capEl.querySelector(".caplabel"),a=i.contested?"CONTESTED":i.capTeam===n?i.owner===-1?"CAPTURING":"NEUTRALIZING":i.capTeam===1-n?"LOSING":i.owner===n?"SECURED":t.mode.capturable(i,n)?"":"LOCKED";s.innerHTML=`<b>${i.id}</b> ${i.name} <span>${a}</span> <i>${i.counts[n]} vs ${i.counts[1-n]}</i>`;let o=this.capEl.querySelector(".capfill"),l=Math.abs(i.progress),c=i.progress>=0?0:1;o.style.width=`${l*100}%`,o.style.background=i.progress===0?Rn:c===n?ri:pi}drawScope(t,e,i){let n=this.scope,s=this.dpr,a=Math.floor(window.innerWidth*s),o=Math.floor(window.innerHeight*s);(n.width!==a||n.height!==o)&&(n.width=a,n.height=o);let l=this.scopeCtx;l.clearRect(0,0,a,o);let c=a/2,h=o/2,u=Math.min(a,o)*(t==="binoc"?.36:.43),d=t==="binoc"?[[c-u*.55,h,u],[c+u*.55,h,u]]:[[c,h,u]];this._sbob=(this._sbob||0)+i*Math.hypot(e.vel.x,e.vel.z)*2.2;let f=Math.min(1,Math.hypot(e.vel.x,e.vel.z)/3),p=(e.swayY*900+Math.sin(this._sbob)*10*f)*s,x=(e.swayP*900+Math.abs(Math.cos(this._sbob))*12*f)*s;l.fillStyle="#050505",l.fillRect(0,0,a,o),l.globalCompositeOperation="destination-out";for(let[v,y,M]of d)l.beginPath(),l.arc(v,y,M,0,7),l.fill();l.globalCompositeOperation="source-over",l.save(),l.beginPath();for(let[v,y,M]of d)l.moveTo(v+M,y),l.arc(v,y,M,0,7);l.clip();for(let[v,y,M]of d){let T=l.createRadialGradient(v+p,y+x,M*.72,v+p,y+x,M*1.08);T.addColorStop(0,"rgba(0,0,0,0)"),T.addColorStop(.7,"rgba(0,0,0,0.55)"),T.addColorStop(1,"rgba(0,0,0,0.98)"),l.fillStyle=T,l.fillRect(v-M,y-M,M*2,M*2);let w=l.createRadialGradient(v,y,0,v,y,M);w.addColorStop(0,"rgba(120,160,200,0.0)"),w.addColorStop(1,"rgba(60,90,130,0.18)"),l.fillStyle=w,l.fillRect(v-M,y-M,M*2,M*2),l.strokeStyle="rgba(255,255,255,0.07)",l.lineWidth=M*.06,l.beginPath(),l.arc(v,y,M*.86,Math.PI*1.08,Math.PI*1.42),l.stroke()}l.restore();let g=s;l.save(),l.beginPath();for(let[v,y,M]of d)l.moveTo(v+M,y),l.arc(v,y,M,0,7);if(l.clip(),l.lineCap="butt",t==="scope8"){l.fillStyle=l.strokeStyle="#0a0a0a";let v=7*g,y=1.4*g,M=u*.42;l.fillRect(c-u,h-v/2,u-M,v),l.fillRect(c+M,h-v/2,u-M,v),l.fillRect(c-v/2,h+M,v,u-M),l.fillRect(c-v/2,h-u,v,u-M),l.fillRect(c-M,h-y/2,M*2,y),l.fillRect(c-y/2,h-M,y,M*2);for(let T=1;T<=5;T++){let w=T*M/5.5;for(let[S,C]of[[w,0],[-w,0],[0,w],[0,-w]])l.beginPath(),l.arc(c+S,h+C,2.4*g,0,7),l.fill()}l.fillStyle="#ff3a2a",l.shadowColor="#ff3a2a",l.shadowBlur=6*g,l.beginPath(),l.arc(c,h,1.8*g,0,7),l.fill(),l.shadowBlur=0}else if(t==="acog"){l.strokeStyle="#0a0a0a",l.lineWidth=1.6*g,l.beginPath(),l.moveTo(c-u,h),l.lineTo(c-u*.22,h),l.moveTo(c+u*.22,h),l.lineTo(c+u,h),l.stroke(),l.beginPath(),l.moveTo(c,h+u*.05),l.lineTo(c,h+u*.55),l.stroke();let v=[[.13,.08,"4"],[.22,.06,"5"],[.31,.045,"6"],[.42,.03,"8"]];l.font=`600 ${11*g}px Rajdhani, sans-serif`,l.fillStyle="#0a0a0a",l.textAlign="left";for(let[y,M,T]of v)l.beginPath(),l.moveTo(c-u*M,h+u*y),l.lineTo(c+u*M,h+u*y),l.stroke(),l.fillText(T,c+u*M+4*g,h+u*y+4*g);l.strokeStyle="#ff4a26",l.shadowColor="#ff4a26",l.shadowBlur=8*g,l.lineWidth=3*g,l.lineJoin="miter",l.beginPath(),l.moveTo(c-u*.045,h+u*.05),l.lineTo(c,h),l.lineTo(c+u*.045,h+u*.05),l.stroke(),l.shadowBlur=0}else{l.strokeStyle="rgba(10,10,10,0.85)",l.lineWidth=1.4*g,l.fillStyle="rgba(10,10,10,0.85)",l.beginPath(),l.moveTo(c-u*.6,h),l.lineTo(c+u*.6,h),l.stroke();for(let v=-6;v<=6;v++){let y=c+v*u*.1;l.beginPath(),l.moveTo(y,h-(v%2?4:9)*g),l.lineTo(y,h),l.stroke()}l.beginPath(),l.moveTo(c,h-u*.12),l.lineTo(c,h+u*.12),l.stroke(),l.font=`600 ${11*g}px Rajdhani, sans-serif`,l.textAlign="center",l.fillText("SPOT [LMB]",c,h+u*.3)}l.restore();let m=Math.min(1,Math.max(0,(e.adsT-.9)/.1));n.style.opacity=m}worldToMap(t,e,i){let n=this.game.world.terrain.half;return[(t+n)/(n*2)*i,(e+n)/(n*2)*i]}drawMinimap(){let t=this.game,e=t.player,i=this.minimap.getContext("2d"),n=220,s=110,a=t.world.mapImage,o=t.world.terrain.half,l=170,c=s/l;i.save(),i.clearRect(0,0,n,n),i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.clip(),i.fillStyle="#1a1f22",i.fillRect(0,0,n,n),i.translate(s,s),i.rotate(e.yaw);let h=a.width/(o*2);i.globalAlpha=.92,i.drawImage(a,(-o-e.pos.x)*c,(-o-e.pos.z)*c,o*2*c,o*2*c),i.globalAlpha=1;let u=(d,f)=>[(d-e.pos.x)*c,(f-e.pos.z)*c];for(let d of t.mode.flags){let[f,p]=u(d.x,d.z);i.strokeStyle=d.owner===-1?Rn:d.owner===e.team?ri:pi,i.lineWidth=2,i.globalAlpha=.5,i.beginPath(),i.arc(f,p,d.r*c,0,Math.PI*2),i.stroke(),i.globalAlpha=1}this.drawUnits(i,u,e,3.2,l),i.restore(),i.save(),i.translate(s,s);for(let d of t.mode.flags){let[f,p]=u(d.x,d.z),x=Math.cos(e.yaw),g=Math.sin(e.yaw),m=f*x-p*g,v=f*g+p*x,y=Math.hypot(m,v);y>s-12&&(m*=(s-12)/y,v*=(s-12)/y),i.fillStyle="rgba(0,0,0,0.6)",i.beginPath(),i.arc(m,v,8,0,7),i.fill(),i.fillStyle=d.owner===-1?Rn:d.owner===e.team?ri:pi,i.font="bold 11px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(d.id,m,v+1)}i.fillStyle="#ffd76a",i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore(),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=2,i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.stroke()}drawUnits(t,e,i,n,s){let a=this.game,o=a.time;for(let c of a.soldiers){if(c===i||c.state==="dead")continue;let h=c.team===i.team;if(!(h||c.spotUntil>o||o-c.lastLoudShot<1.2&&c.pos.distanceTo(i.pos)<160))continue;let[d,f]=e(c.pos.x,c.pos.z);if(!(s&&Math.hypot(d,f)>1e9)){if(t.fillStyle=h?c.squad===i.squad?an:ri:pi,c.state==="downed"){t.fillRect(d-n,f-1,n*2,2),t.fillRect(d-1,f-n,2,n*2);continue}t.save(),t.translate(d,f),t.rotate(-c.yaw),t.beginPath(),t.moveTo(0,-n*1.4),t.lineTo(n,n),t.lineTo(-n,n),t.closePath(),t.fill(),t.restore()}}for(let c of a.combat.placed){if(c.team!==i.team||c.type!=="rally"&&c.type!=="beacon"||c.squad!==i.squad)continue;let[h,u]=e(c.x,c.z);t.fillStyle=c.type==="rally"?"#f0e070":"#30ff80",t.fillRect(h-3,u-3,6,6)}let l=i.squad;if(l&&l.order&&l.order.type==="move"){let[c,h]=e(l.order.x,l.order.z);t.strokeStyle=an,t.lineWidth=2,t.beginPath(),t.arc(c,h,5,0,7),t.stroke()}}drawMap(t,e,i,n){let s=this.game,a=s.player,o=t.getContext("2d"),l=t.width;o.clearRect(0,0,l,l),o.drawImage(s.world.mapImage,0,0,l,l);let c=s.world.terrain.half,h=(g,m)=>[(g+c)/(c*2)*l,(m+c)/(c*2)*l],u=s.world.def.playHalf,[d,f]=h(-u,-u),[p,x]=h(u,u);o.strokeStyle="rgba(255,80,60,0.6)",o.setLineDash([8,6]),o.lineWidth=2,o.strokeRect(d,f,p-d,x-f),o.setLineDash([]),s.world.def.hq.forEach((g,m)=>{let[v,y]=h(g.x,g.z);o.fillStyle=m===a.team?ri:pi,o.globalAlpha=.25,o.beginPath(),o.arc(v,y,g.r/(c*2)*l,0,7),o.fill(),o.globalAlpha=1,o.font="bold 14px Rajdhani",o.textAlign="center",o.fillText("HQ",v,y+5)});for(let g of s.mode.flags){let[m,v]=h(g.x,g.z),y=g.owner===-1?Rn:g.owner===a.team?ri:pi;o.fillStyle="rgba(0,0,0,0.55)",o.beginPath(),o.arc(m,v,16,0,7),o.fill(),o.strokeStyle=y,o.lineWidth=3,o.beginPath(),o.arc(m,v,16,0,7),o.stroke(),o.fillStyle=y,o.font="bold 18px Rajdhani",o.textAlign="center",o.textBaseline="middle",o.fillText(g.id,m,v+1),o.font="600 12px Rajdhani",o.fillStyle="#fff",o.fillText(g.name,m,v+28)}if(o.textBaseline="alphabetic",(a.state!=="dead"||!e)&&this.drawUnits(o,h,a,4,0),a.state!=="dead"){let[g,m]=h(a.pos.x,a.pos.z);o.save(),o.translate(g,m),o.rotate(-a.yaw),o.fillStyle="#ffd76a",o.beginPath(),o.moveTo(0,-9),o.lineTo(6,7),o.lineTo(-6,7),o.closePath(),o.fill(),o.restore()}if(i)for(let g of i){let[m,v]=h(g.x,g.z),y=n===g;o.fillStyle=y?"#ffd76a":g.kind==="squad"?an:g.kind==="rally"?"#f0e070":g.kind==="beacon"?"#30ff80":ri,o.strokeStyle="#000",o.lineWidth=2;let M=y?11:8;o.beginPath(),o.moveTo(m,v-M),o.lineTo(m+M,v),o.lineTo(m,v+M),o.lineTo(m-M,v),o.closePath(),o.fill(),o.stroke(),(y||g.kind!=="flag")&&(o.font="bold 12px Rajdhani",o.fillStyle="#fff",o.textAlign="center",o.fillText(g.label,m,v-M-5)),g._mx=m,g._my=v}}drawMarkers(t){let e=this.game,i=e.player,n=this.mctx,s=e.camera,a=this.markers.width,o=this.markers.height,l=this.dpr;n.clearRect(0,0,a,o);for(let p=this.dmg.length-1;p>=0;p--){let x=this.dmg[p];if(x.t-=t,x.t<=0){this.dmg.splice(p,1);continue}n.save(),n.translate(a/2,o/2),n.rotate(-x.a),n.strokeStyle=`rgba(255,50,40,${Math.min(1,x.t)})`,n.lineWidth=6*l,n.beginPath(),n.arc(0,0,90*l,-Math.PI/2-.25,-Math.PI/2+.25),n.stroke(),n.restore()}if(e.uiBlocking()&&i.state==="dead")return;let c=(p,x,g)=>(Vr.set(p,x,g).applyMatrix4(s.matrixWorldInverse),Vr.z>-.2?null:(Vr.applyMatrix4(s.projectionMatrix),[(Vr.x*.5+.5)*a,(-Vr.y*.5+.5)*o])),h=(p,x)=>[Nt(p,30*l,a-30*l),Nt(x,30*l,o-30*l)];n.textAlign="center",n.textBaseline="middle";for(let p of e.mode.flags){let x=c(p.x,p.y+7,p.z),g=p.owner===-1?Rn:p.owner===i.team?ri:pi,m=Math.hypot(p.x-i.pos.x,p.z-i.pos.z);if(!x)continue;let[v,y]=h(x[0],x[1]),M=i.squad&&i.squad.order&&i.squad.order.flag===p;n.globalAlpha=m<p.r?.5:.95,n.fillStyle="rgba(0,0,0,0.5)",n.beginPath(),n.arc(v,y,13*l,0,7),n.fill(),n.strokeStyle=g,n.lineWidth=2.5*l,n.beginPath(),n.arc(v,y,13*l,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.abs(p.progress)),n.stroke(),n.fillStyle=g,n.font=`bold ${15*l}px Rajdhani, sans-serif`,n.fillText(p.id,v,y+1*l),n.font=`600 ${11*l}px Rajdhani, sans-serif`,n.fillStyle="#fff",n.fillText(`${Math.round(m)}m`,v,y+22*l),M&&(n.fillStyle=an,n.fillText(i.squad.order.type.toUpperCase(),v,y-22*l)),n.globalAlpha=1}let u=i.squad;if(u&&u.order&&u.order.type==="move"){let p=c(u.order.x,e.world.terrain.heightAt(u.order.x,u.order.z)+2,u.order.z);p&&(n.strokeStyle=an,n.lineWidth=2*l,n.beginPath(),n.arc(p[0],p[1],8*l,0,7),n.stroke(),n.fillStyle=an,n.font=`600 ${11*l}px Rajdhani`,n.fillText("MOVE",p[0],p[1]-16*l))}let d=e.time,f=e.settings.get("nameTags");for(let p of e.soldiers){if(p===i||p.state==="dead")continue;let x=p.pos.distanceTo(s.position);if(p.team===i.team){let g=p.squad===i.squad;if(p.state==="downed"&&x<90){let v=c(p.pos.x,p.pos.y+1,p.pos.z);if(v){n.fillStyle="#ff5a4a";let y=7*l;n.fillRect(v[0]-y,v[1]-y*.33,y*2,y*.66),n.fillRect(v[0]-y*.33,v[1]-y,y*.66,y*2),n.font=`600 ${10*l}px Rajdhani`,n.fillStyle="#fff",n.fillText(`${Math.round(x)}m`,v[0],v[1]+14*l)}continue}if(!f||x>(g?250:45))continue;let m=c(p.pos.x,p.pos.y+p.bodyH+.5,p.pos.z);if(!m)continue;n.fillStyle=g?an:ri,n.globalAlpha=Nt(1.3-x/(g?250:45),.35,.95),n.beginPath(),n.moveTo(m[0]-5*l,m[1]-4*l),n.lineTo(m[0]+5*l,m[1]-4*l),n.lineTo(m[0],m[1]+3*l),n.closePath(),n.fill(),x<30&&(n.font=`600 ${11*l}px Rajdhani`,n.fillText(p.name,m[0],m[1]-12*l)),n.globalAlpha=1}else if(p.spotUntil>d&&p.state==="alive"){let g=c(p.pos.x,p.pos.y+p.bodyH+.45,p.pos.z);if(!g)continue;let m=p.hitSpheres(),v=s.position,y=e.world.collision;if(!((y.los(v.x,v.y,v.z,m[0][0],m[0][1],m[0][2])||y.los(v.x,v.y,v.z,m[1][0],m[1][1],m[1][2]))&&y.softVisibility(v.x,v.y,v.z,m[1][0],m[1][1],m[1][2],d)>.1))continue;let T=5*l;n.fillStyle=pi,n.beginPath(),n.moveTo(g[0],g[1]-T),n.lineTo(g[0]+T,g[1]),n.lineTo(g[0],g[1]+T),n.lineTo(g[0]-T,g[1]),n.closePath(),n.fill()}}for(let p of e.combat.projectiles){if(!["frag","impact","launcher","flash"].includes(p.type))continue;let x=Math.hypot(p.x-i.pos.x,p.y-i.pos.y,p.z-i.pos.z);if(x>12||i.state==="dead")continue;let g=c(p.x,p.y+.3,p.z),m=.6+.4*Math.sin(d*18);if(!g){let M=Math.atan2(p.x-i.pos.x,-(p.z-i.pos.z))+i.yaw;g=[a/2+Math.sin(M)*140*l,o/2-Math.cos(M)*140*l]}let[v,y]=h(g[0],g[1]);n.globalAlpha=m,n.fillStyle="rgba(0,0,0,0.55)",n.beginPath(),n.arc(v,y,15*l,0,7),n.fill(),n.strokeStyle="#ff5a3a",n.lineWidth=2.5*l,n.beginPath(),n.arc(v,y,15*l,0,7),n.stroke(),n.fillStyle="#ff5a3a",n.beginPath(),n.arc(v,y+2*l,6*l,0,7),n.fill(),n.fillRect(v-2*l,y-9*l,4*l,6*l),n.font=`700 ${10*l}px Rajdhani, sans-serif`,n.fillText(`${x.toFixed(0)}m`,v,y+26*l),n.globalAlpha=1}for(let p of e.combat.placed){if(p.team!==i.team||p.squad!==i.squad||p.type!=="rally"&&p.type!=="beacon")continue;let x=c(p.x,p.y+1.5,p.z);x&&(n.fillStyle=p.type==="rally"?"#f0e070":"#30ff80",n.font=`bold ${11*l}px Rajdhani`,n.fillText(p.type==="rally"?"\u25B2 RALLY":"\u25B2 BEACON",x[0],x[1]))}if(i.state==="alive"&&i.gun&&i.gun.stats.laser&&i.adsT<.6){let p=i.eye(new R),x=i.aimDir(new R),g=e.world.collision.raycast(p.x,p.y,p.z,x.x,x.y,x.z,60,{});if(g){let m=c(g.x,g.y,g.z);m&&(n.fillStyle="rgba(255,40,40,0.9)",n.beginPath(),n.arc(m[0],m[1],2.5*l,0,7),n.fill())}}}drawBoard(){let t=this.game,e=t.player,i=n=>{let s=t.teams[n].slice().sort((o,l)=>l.stats.score-o.stats.score),a=t.mode.type==="tdm";return`<div class="sbteam t${n===e.team?"f":"e"}"><div class="sbh"><b>${Xe[n].name}</b><span>${a?t.mode.kills[n]+" kills":t.mode.tickets[n]+" tickets"}</span></div>
        <table><tr><th></th><th>Name</th><th>Squad</th><th>K</th><th>D</th><th>A</th><th>Rev</th><th>Score</th></tr>
        ${s.map(o=>`<tr class="${o===e?"me":""} ${o.state}"><td><i style="background:${di[o.cls].color}"></i></td><td>${o.squad&&o.squad.leader===o?"\u2605 ":""}${o.name}</td><td>${o.squad?o.squad.name:""}</td><td>${o.stats.kills}</td><td>${o.stats.deaths}</td><td>${o.stats.assists}</td><td>${o.stats.revives}</td><td>${o.stats.score}</td></tr>`).join("")}</table></div>`};this.board.innerHTML=`<div class="sbtitle">${t.world.def.name} \xB7 ${t.modeName}</div><div class="sbcols">${i(e.team)}${i(1-e.team)}</div>`}dispose(){this.root.remove()}};var Z1=["Viper","Hawk","Nomad","Rook","Bishop","Ghost","Mako","Jester","Reaper","Kodiak","Talon","Sable","Ranger","Wolf","Cobra","Bravo","Atlas","Raven","Moose","Hound","Diesel","Patch","Tank","Specter","Flint","Drifter","Saint","Gunny","Sarge","Ace","Blaze","Ox","Lynx","Falcon","Orca","Shadow","Grizzly","Rocco","Duke","Ziggy","Bear","Fox","Scout","Hammer","Ice","Kilo","Mustang","Pyro","Rex","Titan","Wasp","Yeti","Zulu","Cricket","Doc","Smokey","Tex","Chief","Boomer","Echo","Pilot","Sparks","Crow","Tusk"],Df=[["leader","medic","assault","support"],["leader","assault","engineer","medic"],["leader","support","recon","assault"],["leader","medic","engineer","assault"]],If={morning:{sat:1.1,contrast:1.06,lift:[.01,.012,.02],gamma:[1,1,1],gain:[1.03,1,.96]},noon:{sat:1.06,contrast:1.05,lift:[0,0,.01],gamma:[1,1,1],gain:[1,1,.98]},afternoon:{sat:1.04,contrast:1.07,lift:[.015,.01,0],gamma:[1,1,1],gain:[1.05,1,.9]},dusk:{sat:1.12,contrast:1.08,lift:[.02,0,.02],gamma:[1,1,1],gain:[1.08,.96,.88]},overcast:{sat:.9,contrast:1.08,lift:[.01,.012,.016],gamma:[1,1,1],gain:[.98,1,1.03]},snow:{sat:.9,contrast:1.05,lift:[0,.01,.02],gamma:[1,1,1],gain:[.98,1,1.04]},night:{sat:.85,contrast:1.05,lift:[0,.01,.03],gamma:[1,1,1.05],gain:[.92,.98,1.1]}},tl=class{constructor(t,e){this.app=t,this.config=e,this.renderer=t.renderer,this.settings=t.settings,this.audio=t.audio,this.input=t.input,this.menus=t.menus,this.time=0,this.frame=0,this.paused=!1,this.soldiers=[],this.teams=[[],[]],this.oobTime=0,this.respawnAt=0,this.lastDeath=null,this.ended=!1}async init(t){let e=this.config,i=da[e.map];this.def=i,sf(),rf();let n=this.scene=new Bi,s=window.innerWidth,a=window.innerHeight;this.camera=new _e(70,s/a,.06,this.settings.get("viewDistance")),n.add(this.camera),this.vmScene=new Bi,this.vmCamera=new _e(64,s/a,.01,10),this.vmScene.add(new sn(14543103,5261374,1.1)),this.vmLight=new bi(16777215,1.6),this.vmScene.add(this.vmLight),this.env=new za(this.renderer,n,this.camera,this.settings);let o=e.time==="default"?i.time:e.time;this.timeName=o,t("Lighting the sky",.02),this.world=new Da(i,n),await this.world.build(t),this.env.setTime(o),this.vmLight.color.copy(this.env.sun.color).multiplyScalar(this.env.time.night?.6:1),this.vmScene.environment=this.env.envMap,this.vmScene.environmentIntensity=.6,t("Spawning soldiers",.95),this.water=this.world.terrain.waterLevel!==null?new La(this.world,n,this.env):null,this.grass=new Pa(this.world,n),this.fx=new Wa(this),this.combat=new Cn(this),this.mode=new fa(this,e.mode,e.tickets?{tickets:e.tickets}:{}),this.modeName=Gs[e.mode].name,this.ai=new Ja(this),this.squads=new qa(this),this.createSoldiers(),this.post=new Va(this.renderer,n,this.camera,this.vmScene,this.vmCamera,this.settings),this.post.hidden=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]],this.water&&(this.water.hideList=[...this.fx.hidden]),this.post.setGrade(If[o]||If.morning),this.hud=new Qa(this),this.playerCtl=new $a(this,this.player),this.applySettings(),this.unsub=l=>this.applySettings(l),this.settings.onChange(this.unsub),this.audio.startAmbience(i.biome,this.env.time.night);for(let l of this.soldiers)l.isPlayer||(l.respawnAt=W(0,2.5));return this.respawnAt=0,this.player.state="dead",this.deployCam={a:0},this}createSoldiers(){let t=this.config.team??0,e=Z1.slice().sort(()=>Math.random()-.5),i=0;for(let n=0;n<2;n++)for(let s=0;s<4;s++)for(let a=0;a<4;a++){let o=n===t&&s===0&&a===3,l=Df[(s+n)%Df.length][a],c=new Ya(this,n,o?this.config.name:e[i++%e.length],o);c.setLoadout(o?JSON.parse(JSON.stringify(this.menus.loadout)):ga(l)),o||(c.brain=new Ka(c,this)),c.state="dead",c.respawnAt=0,this.soldiers.push(c),this.teams[n].push(c),o&&(this.player=c)}this.squads.build(this.teams,4);for(let n of this.squads.list[t])n.members.includes(this.player)&&(this.playerSquad=n)}applySettings(t){let e=this.settings;if(this.env.applySettings(),this.post.applySettings(),this.grass.setLevel(e.get("grass")),this.grass.mesh?this.post.hidden=[...this.fx.hidden,this.grass.mesh]:this.post.hidden=[...this.fx.hidden],this.water&&(this.water.setQuality(e.get("waterReflections"),e.get("waterWaves")),this.water.hideList=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]]),this.world.vegetation.setWind(e.get("treeWind")),this.fx.setQuality(e),this.camera.far=e.get("viewDistance"),this.camera.updateProjectionMatrix(),this.audio.setVolume(e.get("volume")),t==="difficulty")for(let i of this.soldiers)i.brain&&i.brain.setDifficulty(e.get("difficulty"));if(t==="enemyOutline"||t===void 0)for(let i of this.soldiers)i.rig&&i.rig.outlined&&(i.rig.outlineOn=e.get("enemyOutline"),i.rig._olv=null);(t==="renderScale"||t==="antialias"||t===void 0)&&this.app.resize()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.vmCamera.aspect=t/e,this.vmCamera.updateProjectionMatrix();let i=this.renderer.getDrawingBufferSize(new at);this.post.setSize(i.x,i.y),this.hud.resize()}uiBlocking(){return this.paused||this.player.state==="dead"||this.ended}spawnOptions(t){let e=[],i=t.team,n=this.def.hq[i];e.push({kind:"hq",key:"hq",label:"HQ",x:n.x,z:n.z});for(let s of this.mode.flagSpawns(i))e.push({kind:"flag",key:"flag"+s.id,label:`${s.id} \xB7 ${s.name}`,x:s.x,z:s.z,flag:s});if(t.squad){for(let s of t.squad.members)s===t||s.state!=="alive"||!this.safeToSpawnOn(s)||e.push({kind:"squad",key:"sq"+s.id,label:`${s===t.squad.leader?"\u2605 ":""}${s.name}`,x:s.pos.x,z:s.pos.z,mate:s});for(let s of this.combat.placed)(s.type==="rally"||s.type==="beacon")&&s.squad===t.squad&&!s.blocked&&e.push({kind:s.type,key:s.type+s.owner.id,label:s.type==="rally"?"Rally point":"Spawn beacon",x:s.x,z:s.z,placed:s})}return e}safeToSpawnOn(t){if(this.time-t.lastDamage<6||t.swimming||t.vault)return!1;for(let e of this.teams[1-t.team])if(e.state==="alive"&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<22)return!1;if(t.brain){for(let[,e]of t.brain.known)if(e.vis)return!1}return!0}resolveSpawn(t,e){let i=this.world.nav,n=this.teams[1-e].filter(d=>d.state==="alive"),s=(d,f)=>{let p=1e9;for(let x of n)p=Math.min(p,Math.hypot(x.pos.x-d,x.pos.z-f));return p},a,o,l,c,h=(d,f)=>Math.atan2(-(d-a),-(f-o)),u=this.mode.flags.length?this.mode.flags.reduce((d,f)=>({x:d.x+f.x/this.mode.flags.length,z:d.z+f.z/this.mode.flags.length}),{x:0,z:0}):{x:0,z:0};if(t.kind==="squad"&&t.mate&&t.mate.state==="alive"){let d=t.mate,f=d.forward(new R),p=[[d.pos.x-f.x*1.6,d.pos.z-f.z*1.6],[d.pos.x+1.2,d.pos.z],[d.pos.x-1.2,d.pos.z],[d.pos.x,d.pos.z+1.2]];for(let[x,g]of p){let m=this.world.collision.groundAt(x,g,d.pos.y+.6);if(Math.abs(m-d.pos.y)<.6&&!this.world.collision.overlapsAny(x,m+.05,g,.3,1.7)){a=x,o=g,l=m;break}}a===void 0&&(a=d.pos.x,o=d.pos.z,l=d.pos.y),c=d.yaw}else{let d=t.kind==="hq"?Math.min(20,this.def.hq[e].r*.6):t.kind==="flag"?t.flag.r*.8:4,f=null,p=-1,x=this.def.playHalf-6;for(let g=0;g<14;g++){let[m,v,y]=i.randomWalkableNear(t.x,t.z,d);if(Math.abs(m)>x||Math.abs(v)>x){if(g<13)continue;m=Math.max(-x,Math.min(x,m)),v=Math.max(-x,Math.min(x,v))}let M=s(m,v)+Math.random()*5;M>p&&(p=M,f=[m,v,y])}[a,o,l]=f,l=this.world.collision.groundAt(a,o,l+1),c=h(u.x,u.z)}return{x:a,y:l,z:o,yaw:c}}deployPlayer(t,e){let i=this.player;if(i.squad)if(t.cls==="leader"){let s=i.squad.leader;i.squad.leader=i,s&&s!==i&&s.loadout.cls==="leader"&&s.setLoadout(ga("assault")),(!i.squad.order||i.squad.order.type!=="follow")&&this.squads.setOrder(i.squad,"follow",null,0,0)}else i.squad.leader===i&&(this.squads.pickLeader(i.squad),i.squad.leader===i&&(i.squad.leader=i.squad.members.find(s=>s!==i)||i),i.squad.order&&i.squad.order.type==="follow"&&(i.squad.order=null));i.setLoadout(t);let n=this.resolveSpawn(e,i.team);i.spawn(n.x,n.y,n.z,n.yaw),this.playerCtl.vmKey=null,this.playerCtl.crouchToggle=!1,this.menus.hideAll(),this.hud.setVisible(!0),this.app.lockPointer(),this.audio.play2d("deploy",{vol:.4}),this.oobTime=0}botSpawn(t){let e=t.squad,i=[],n=e&&e.leader,s=e&&e.order;if(n&&n!==t&&n.state==="alive"&&this.safeToSpawnOn(n)&&Math.random()<.65&&i.push({kind:"squad",mate:n,x:n.pos.x,z:n.pos.z}),!i.length&&e){let o=this.combat.placed.find(l=>(l.type==="rally"||l.type==="beacon")&&l.squad===e&&!l.blocked);o&&Math.random()<.8&&i.push({kind:"rally",x:o.x,z:o.z})}if(!i.length&&e&&Math.random()<.35){let o=e.members.filter(l=>l!==t&&l.state==="alive"&&this.safeToSpawnOn(l));if(o.length){let l=o[Math.floor(Math.random()*o.length)];i.push({kind:"squad",mate:l,x:l.pos.x,z:l.pos.z})}}if(!i.length){let o=this.mode.flagSpawns(t.team);if(o.length&&s){let l=null,c=1e9;for(let u of o){let d=Math.hypot(u.x-s.x,u.z-s.z);d<c&&(c=d,l=u)}let h=this.def.hq[t.team];l&&c<Math.hypot(h.x-s.x,h.z-s.z)+30&&i.push({kind:"flag",flag:l,x:l.x,z:l.z})}}if(!i.length){let o=this.def.hq[t.team];i.push({kind:"hq",x:o.x,z:o.z})}let a=this.resolveSpawn(i[0],t.team);Math.random()<.15&&t.squad&&t.squad.leader!==t?t.setLoadout(ga(t.cls)):t.setLoadout(t.loadout),t.spawn(a.x,a.y,a.z,a.yaw),t.brain.reset()}onShot(t,e){let i=e.stats,n=t===this.player,s=n&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new R),a=t.aimDir(new R);(!n||!this.playerCtl.isScoped())&&this.fx.muzzle(s.x,s.y,s.z,a.x,a.y,a.z,i.type==="lmg"||i.type==="sniper"?1.3:i.type==="pistol"||i.type==="smg"?.7:1,i.noFlash,n),this.audio.gunshot(i.suppressed?"suppressed":i.sound,t.pos.x,t.pos.y+1.5,t.pos.z,i.suppressed,n),n&&i.bolt&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5}),350),n&&i.pump&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5,rate:.8}),250);let o=i.suppressed?25:i.type==="sniper"||i.type==="lmg"?320:220;for(let l of this.teams[1-t.team])!l.brain||l.state!=="alive"||Math.abs(l.pos.x-t.pos.x)>o||Math.abs(l.pos.z-t.pos.z)>o||l.pos.distanceTo(t.pos)<o&&l.brain.onSound(t.pos.x,t.pos.z,t,!0)}onFootstep(t,e){let i=this.audio.listener;if(Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<40){let a=t.move.onTerrain,o=t.inWater?"stepWater":a?"stepGrass":"stepHard";t.isPlayer?this.audio.play2d(o,{vol:.16*e+.05,vary:.2}):this.audio.play3d(o,t.pos.x,t.pos.y,t.pos.z,{vol:.5*e,maxDist:30,ref:3,vary:.2})}let s=9+e*10;for(let a of this.teams[1-t.team])a.brain&&a.state==="alive"&&a.pos.distanceTo(t.pos)<s&&a.brain.onSound(t.pos.x,t.pos.z,t,!1)}onVault(t){t.isPlayer&&this.audio.play2d("stepHard",{vol:.35,rate:.7})}onReloadSound(t,e){t.isPlayer?this.audio.play2d(e,{vol:.5}):this.audio.play3d(e,t.pos.x,t.pos.y+1.2,t.pos.z,{vol:.5,maxDist:18})}onDryFire(t){t.isPlayer&&this.audio.play2d("dry",{vol:.5})}onSwitch(t){t.isPlayer&&this.audio.play2d("switch",{vol:.35})}onBandage(t){t.isPlayer&&this.audio.play2d("bandage",{vol:.5})}onGrenadeThrown(){}onGadgetFired(){}onSpawnPointPlaced(t){t.squad===this.player.squad&&this.hud.toast(`${t.owner.name} placed a ${t.type==="rally"?"rally point":"spawn beacon"}`)}onDamaged(t,e,i,n,s){t.brain&&t.brain.onDamaged(e,s),t===this.player&&(this.hud.damageFrom(s),this.audio.play2d("hurt",{vol:.5}),this.dmgFlash=Math.min(1,(this.dmgFlash||0)+i/50),t.pitch+=.012*Math.min(3,i/15),this.fx.shake(Math.min(.3,i/120)))}onHit(t,e,i,n,s){if(t!==this.player)return;let a=e.state!=="alive"&&s;this.hud.hit(a,n==="head"),this.settings.get("hitmarkerSound")&&this.audio.play2d(n==="head"?"headshot":"hit",{vol:n==="head"?.35:.45})}creditKill(t,e,i,n){if(!(!t||t===e||t.team===e.team)){t.stats.kills++,this.addScore(t,100,"ENEMY DOWN"),n&&this.addScore(t,25,"HEADSHOT");for(let s of this.mode.flags)if(Math.hypot(e.pos.x-s.x,e.pos.z-s.z)<s.r*1.5){this.addScore(t,25,s.owner===t.team?"FLAG DEFEND":"FLAG ATTACK");break}for(let[s,a]of e.damagers)s!==t&&s.team!==e.team&&a>=20&&(s.stats.assists++,this.addScore(s,50,"ASSIST"));t===this.player&&(this.audio.play2d("kill",{vol:.4}),this.hud.killBanner(e.name,n,e.state==="downed"))}}onDowned(t,e,i,n){this.hud.addKill(e,t,i,n,!0),this.creditKill(e,t,i,n),t.downCredited=!0,t===this.player&&(this.playerCtl.giveUpT=0,this.audio.play2d("heartbeat",{vol:.6}))}onKilled(t,e,i,n,s){if(s?e&&t.lastAttacker&&e!==t&&i!=="Bled out"&&i!=="Gave up"&&i!=="Redeploy"&&this.hud.addKill(e,t,i,n,!1):(this.hud.addKill(e,t,i,n,!1),this.creditKill(e,t,i,n)),this.mode.onDeath(t.team),e&&e.team!==t.team&&this.mode.type==="tdm"&&this.mode.onKill(e.team),t.reviver&&(t.reviver=null),t.downCredited=!1,t.respawnAt=this.time+(t.isPlayer?7:W(7,10)),t===this.player){let a=e&&e!==t?e:null;this.lastDeath={killer:a?a.name:null,weapon:i,head:n,dist:a?a.pos.distanceTo(t.pos):0},this.respawnAt=this.time+(i==="Redeploy"?1:7),this.deathT=0,this.deathPos=t.pos.clone(),this.killerRef=a,this.app.unlockPointer(),setTimeout(()=>{this.player.state==="dead"&&!this.ended&&this.menus.showDeploy(this)},i==="Redeploy"?50:1800)}}onRevived(t,e){e&&(e.stats.revives++,this.addScore(e,75,"REVIVE"),this.hud.addRevive(e,t)),t.reviver=null,t===this.player&&this.hud.toast(`Revived by ${e?e.name:"a teammate"}`)}reviveTick(t,e,i){if(e.state!=="downed"||t.state!=="alive"){t.reviveProgress=0;return}e.reviver=t,t.reviveProgress+=i/(t.isMedic?1.8:4.5),t.reviveProgress>=1&&(t.reviveProgress=0,e.revive(t))}onFlagEvent(t,e,i,n){let s=this.player,a=i===s.team;if(e==="captured"){this.hud.toast(`${a?"We captured":"Enemy captured"} ${t.id} \xB7 ${t.name}`,3),this.audio.play2d(a?"capture":"lost",{vol:.5});for(let o of this.teams[i])o.state==="alive"&&Math.hypot(o.pos.x-t.x,o.pos.z-t.z)<t.r&&(o.stats.caps++,this.addScore(o,150,"FLAG CAPTURED"))}else if(e==="neutralized"){n===s.team&&(this.hud.toast(`We lost ${t.id} \xB7 ${t.name}`,3),this.audio.play2d("lost",{vol:.4}));for(let o of this.teams[i])o.state==="alive"&&Math.hypot(o.pos.x-t.x,o.pos.z-t.z)<t.r&&this.addScore(o,75,"FLAG NEUTRALIZED")}}onMatchEnd(t){this.ended=!0,this.app.unlockPointer(),setTimeout(()=>{this.hud.setVisible(!1),this.menus.showEnd(this,t)},2500)}addScore(t,e,i){t.stats.score+=e,t===this.player&&this.hud.scorePopup(i,e)}update(t){if(this.paused)return;this.time+=t,this.frame++,Vi.uTime.value+=t;let e=this.player;this.playerCtl.update(t);for(let i of this.soldiers){if(i.state==="dead"){!i.isPlayer&&this.time>=i.respawnAt&&!this.ended&&this.botSpawn(i),i.updateVitals(t,this.time);continue}if(i.brain&&i.brain.update(t),i.state==="alive"){let n=t>.034?2:1;for(let s=0;s<n;s++)i.updateMovement(t/n);i.updateWeapon(t,this.time)}else i.state==="downed"&&(i.vel.x*=.8,i.vel.z*=.8,i.vel.y-=20*t,this.world.collision.move(i.pos,i.vel,t,.3,.6,.3,i.move));i.updateVitals(t,this.time),this.checkBounds(i,t)}this.combat.update(t),this.mode.update(t),this.squads.update(t),this.ai.update(),this.def.weather==="snow"&&this.updateSnow(t),this.fx.update(t),this.world.updateFlags(this.mode,this.time);for(let i of this.soldiers)i.updateAnim(t,this.camera.position);this.updateCamera(t),this.dmgFlash=Math.max(0,(this.dmgFlash||0)-t*1.5),this.ended||(this.hud.update(t),e.state==="dead"&&this.menus.updateDeploy(this))}updateSnow(t){let e=this.camera.position,i=this.fx;for(this.snowAcc=(this.snowAcc||0)+t*120*i.q;this.snowAcc>=1;){this.snowAcc-=1;let n=e.x+(Math.random()-.5)*50,s=e.z+(Math.random()-.5)*50;i.smoke.emit(n,e.y+6+Math.random()*10,s,.7+Math.random()*.4,-1.6-Math.random()*.6,.3,6.5,.07,.07,[1,1,1,.9],[1,1,1,.85],0,0,1)}}simulate(t,e=1/30){let i=Math.round(t/e);for(let n=0;n<i;n++)this.update(e)}checkBounds(t,e){let i=this.def.playHalf,n=this.def.hq[1-t.team],s=Math.abs(t.pos.x)>i||Math.abs(t.pos.z)>i||Math.hypot(t.pos.x-n.x,t.pos.z-n.z)<n.r;t===this.player?s&&t.state==="alive"?(this.oobTime<=0&&(this.oobTime=10),this.oobTime-=e,this.oobTime<=.01&&(this.oobTime=0,t.die(null,"Deserted",!1,!1))):this.oobTime=0:s&&t.state==="alive"?(t.oob=(t.oob||0)+e,t.oob>12&&(t.oob=0,t.die(null,"Deserted",!1,!1))):t.oob=0}updateCamera(t){let e=this.player,i=this.camera;if(e.state!=="dead"){this.playerCtl.updateCamera(t),this.audio.setListener(i.position.x,i.position.y,i.position.z,-Math.sin(e.yaw),-Math.cos(e.yaw));return}if(this.deathT=(this.deathT||0)+t,this.deathT<1.8&&this.deathPos){let n=this.killerRef,s=n?n.pos:this.deathPos,a=this.deathPos.clone().add(new R(0,2.5+this.deathT*1.5,0));i.position.lerp(a,1-Math.exp(-t*4)),i.lookAt(s.x,s.y+1.2,s.z)}else{let n=this.menus.selectedSpawn,s=n?new R(n.x,this.world.terrain.heightAt(n.x,n.z),n.z):new R(0,0,0);this.deployCam.a+=t*.08;let a=70,o=new R(s.x+Math.cos(this.deployCam.a)*a,s.y+55,s.z+Math.sin(this.deployCam.a)*a);this.deployCamInit||(i.position.copy(o),this.deployCamInit=!0),i.position.lerp(o,1-Math.exp(-t*1.5)),i.lookAt(s)}i.fov=60,i.updateProjectionMatrix(),i.updateMatrixWorld(),this.playerCtl.vmRoot.visible=!1,this.audio.setListener(i.position.x,i.position.y,i.position.z,0,-1)}render(t){let e=this.camera;if(this.env.update(e.position),this.grass.update(e.position),this.frame%30===0&&this.fx.setLighting(this.env),this.water){this.water.update(this.env);let a=this.renderer.getDrawingBufferSize(new at);this.water.renderReflection(this.renderer,this.scene,e,a.x,a.y)}let i=this.player,n=60;if(i.state==="alive"&&i.adsT>.3){let a=i.eye(new R),o=i.aimDir(new R),l=this.world.collision.raycast(a.x,a.y,a.z,o.x,o.y,o.z,300,{});n=l?l.t:300}let s=this.playerCtl.isScoped();this.post.render(t,{damage:Nt(this.dmgFlash||0,0,1)*.8+(i.state==="alive"&&i.hp<35?(35-i.hp)/35*.5:0),suppress:i.state==="alive"?i.suppression:0,flash:i.flashed>.6?(i.flashed-.6)*2.5:0,downed:i.state==="downed"?.6+.4*(1-i.downedHp/100):0,ads:i.state==="alive"&&!s?i.adsT*(i.gun&&i.gun.stats.zoom>1.2?1:.6):0,focus:n,menu:i.state==="dead"&&this.deathT>1.8||this.paused||this.ended})}dispose(){this.audio.stopAmbience(),this.hud.dispose(),this.playerCtl.dispose(),this.env.dispose(),this.post.composer.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.settings.listeners=this.settings.listeners.filter(t=>t!==this.unsub)}};var $h=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new Is({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=Yn,this.renderer.outputColorSpace=Ee,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rh,this.settings=aa,this.audio=new la,this.input=new ca(this.canvas),this.params=new URLSearchParams(location.search),this.params.get("test")&&(this.input.allowUnlocked=!0),this.params.get("preset")&&aa.set("preset",this.params.get("preset")),this.menus=new Ta(this),this.matchConfig={map:this.params.get("map")||"greenhollow",mode:this.params.get("mode")||"conquest",time:this.params.get("time")||"default",team:0,tickets:0,name:"You"},this.game=null,this.last=performance.now(),window.addEventListener("resize",()=>this.resize());let t=()=>this.audio.unlock();window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),this.input.onLockChange=e=>{e||(this.lastUnlock=performance.now()),!e&&this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&!this.input.allowUnlocked&&this.pause()},window.addEventListener("keydown",e=>{e.code!=="Escape"||!this.game||this.game.ended||performance.now()-(this.lastUnlock||0)<400||(this.game.paused?this.resume():this.game.player.state!=="dead"&&this.pause())}),this.canvas.addEventListener("click",()=>{this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&this.lockPointer()}),this.resize(),this.menus.showMain(),requestAnimationFrame(e=>this.loop(e)),this.params.get("autostart")&&this.startMatch().then(()=>{this.params.get("autodeploy")&&setTimeout(()=>this.autoDeploy(),300)})}autoDeploy(){let t=this.game;t&&(this.menus.showDeploy(t),t.respawnAt=0,this.menus.updateDeploy(t),this.menus.tryDeploy())}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2)*aa.get("renderScale");this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.game&&this.game.resize(t,e)}lockPointer(){this.input.allowUnlocked||this.input.lock()}unlockPointer(){this.input.unlock()}async startMatch(){this.audio.unlock(),this.game&&(this.game.dispose(),this.game=null),this.menus.showLoading("Preparing",0);let t=Object.assign({},this.matchConfig),e=new tl(this,t);try{await e.init((i,n)=>this.menus.showLoading(i,n))}catch(i){throw console.error(i),this.menus.showLoading("Failed to load: "+i.message,0),i}this.game=e,window.__fireline={app:this,game:e},this.resize(),this.menus.hideAll(),this.menus.showDeploy(e),this.last=performance.now()}quitMatch(){this.game&&(this.game.dispose(),this.game=null),this.unlockPointer(),this.menus.showMain()}pause(){this.game&&(this.game.paused=!0,this.unlockPointer(),this.menus.showPause(this.game))}resume(){this.game&&(this.game.paused=!1,this.menus.hideAll(),this.game.player.state==="dead"?this.menus.showDeploy(this.game):this.lockPointer())}loop(t){if(requestAnimationFrame(n=>this.loop(n)),this.halt){this.last=t;return}let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.05);let i=this.game;if(i)try{i.update(e),i.render(e)}catch(n){console.error(n),this.showError(n)}else{if(!this.showcase)try{this.showcase=new wa(this.renderer)}catch(s){console.error(s),this.showcase=!1}let n=this.menus.screens.loading&&this.menus.screens.loading.style.display!=="none";this.showcase&&!n?this.showcase.render(e,window.innerWidth,window.innerHeight):(this.renderer.setClearColor(724498,1),this.renderer.clear())}this.input.endFrame()}showError(t){if(this.errShown)return;this.errShown=!0;let e=document.createElement("div");e.className="errbox",e.textContent="Error: "+(t&&t.message?t.message:t),document.body.appendChild(e)}};window.addEventListener("DOMContentLoaded",()=>{window.fireline=new $h});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
