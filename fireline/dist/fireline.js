(()=>{var oh="170";var Ff=0,ru=1,Of=2;var xd=1,ah=2,ji=3,Oi=0,Fe=1,Pe=2,Ae=0,xn=1,en=2,ou=3,au=4,lh=5,xi=100,Bf=101,Hf=102,Vf=103,Gf=104,Fs=200,Wf=201,qf=202,Xf=203,Nl=204,Fl=205,ia=206,Yf=207,na=208,$f=209,Zf=210,jf=211,Kf=212,Jf=213,Qf=214,Ol=0,Bl=1,Hl=2,Ts=3,Vl=4,Gl=5,Wl=6,ql=7,vd=0,t0=1,e0=2,vn=0,ch=1,hh=2,uh=3,Yn=4,i0=5,dh=6,fh=7;var yd=300,Es=301,As=302,Xl=303,Yl=304,sa=306,Di=1e3,Bn=1001,$l=1002,De=1003,n0=1004;var Xr=1005;var je=1006,sl=1007;var Ji=1008;var hi=1009,Md=1010,bd=1011,fr=1012,ph=1013,Hn=1014,Fi=1015,Te=1016,mh=1017,gh=1018,yn=1020,_d=35902,wd=1021,Sd=1022,ci=1023,Td=1024,Ed=1025,_s=1026,Mn=1027,Os=1028,xh=1029,Ad=1030,vh=1031;var yh=1033,bo=33776,_o=33777,wo=33778,So=33779,Zl=35840,jl=35841,Kl=35842,Jl=35843,Ql=36196,tc=37492,ec=37496,ic=37808,nc=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,To=36492,gc=36494,xc=36495,Cd=36283,vc=36284,yc=36285,Mc=36286;var Eo=2300,bc=2301,rl=2302,lu=2400,cu=2401,hu=2402;var s0=3200,Mh=3201;var bh=0,r0=1,gn="",Ee="srgb",Bs="srgb-linear",ra="linear",ce="srgb";var ss=7680;var uu=519,o0=512,a0=513,l0=514,Rd=515,c0=516,h0=517,u0=518,d0=519,du=35044,$n=35048;var fu="300 es",Qi=2e3,Ao=2001,bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pu=1234567,ar=Math.PI/180,Cs=180/Math.PI;function Zn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function _h(r,t){return(r%t+t)%t}function f0(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function p0(r,t,e){return r!==t?(e-r)/(t-r):0}function lr(r,t,e){return(1-e)*r+e*t}function m0(r,t,e,i){return lr(r,t,1-Math.exp(-e*i))}function g0(r,t=1){return t-Math.abs(_h(r,t*2)-t)}function x0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function v0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function y0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function M0(r,t){return r+Math.random()*(t-r)}function b0(r){return r*(.5-Math.random())}function _0(r){r!==void 0&&(pu=r);let t=pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w0(r){return r*ar}function S0(r){return r*Cs}function T0(r){return(r&r-1)===0&&r!==0}function E0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function A0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function C0(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ys(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $e(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Pd={DEG2RAD:ar,RAD2DEG:Cs,generateUUID:Zn,clamp:Ne,euclideanModulo:_h,mapLinear:f0,inverseLerp:p0,lerp:lr,damp:m0,pingpong:g0,smoothstep:x0,smootherstep:v0,randInt:y0,randFloat:M0,randFloatSpread:b0,seededRandom:_0,degToRad:w0,radToDeg:S0,isPowerOfTwo:T0,ceilPowerOfTwo:E0,floorPowerOfTwo:A0,setQuaternionFromProperEuler:C0,normalize:$e,denormalize:ys},lt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],y=n[4],M=n[7],S=n[2],w=n[5],T=n[8];return s[0]=a*x+o*v+l*S,s[3]=a*g+o*y+l*w,s[6]=a*m+o*M+l*T,s[1]=c*x+h*v+u*S,s[4]=c*g+h*y+u*w,s[7]=c*m+h*M+u*T,s[2]=d*x+f*v+p*S,s[5]=d*g+f*y+p*w,s[8]=d*m+f*M+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ol=new Zt;function Dd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Co(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function R0(){let r=Co("canvas");return r.style.display="block",r}var mu={};function rr(r){r in mu||(mu[r]=!0,console.warn(r))}function P0(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function D0(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function I0(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(r.r=tn(r.r),r.g=tn(r.g),r.b=tn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gn?ra:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var gu=[.64,.33,.3,.6,.15,.06],xu=[.2126,.7152,.0722],vu=[.3127,.329],yu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Bs]:{primaries:gu,whitePoint:vu,transfer:ra,toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:xu,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:gu,whitePoint:vu,transfer:ce,toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:xu,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});var rs,_c=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Co("canvas")),rs.width=t.width,rs.height=t.height;let i=rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=tn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tn(e[i]/255)*255):e[i]=tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},z0=0,Ro=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(al(n[a].image)):s.push(al(n[a]))}else s=al(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var L0=0,ti=class r extends bn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Bn,n=Bn,s=je,a=Ji,o=ci,l=hi,c=r.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Zn(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=yd;ti.DEFAULT_ANISOTROPY=1;var re=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(f+1)/2,S=(m+1)/2,w=(h+d)/4,T=(u+x)/4,E=(p+g)/4;return y>M&&y>S?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=w/i,s=T/i):M>S?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=w/n,s=E/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=T/s,n=E/s),this.set(i,n,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends bn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends wc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Po=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sc=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=De,this.minFilter=De,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let S=Math.sqrt(y),w=Math.atan2(S,m*v);g=Math.sin(g*w)/S,o=Math.sin(o*w)/S}let M=o*v;if(l=l*g+d*M,c=c*g+f*M,h=h*g+p*M,u=u*g+x*M,g===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new R,bu=new Ie,Ii=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),$r.subVectors(this.max,Js),os.subVectors(t.a,Js),as.subVectors(t.b,Js),ls.subVectors(t.c,Js),hn.subVectors(as,os),un.subVectors(ls,as),Dn.subVectors(os,ls);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Dn.z,Dn.y,hn.z,0,-hn.x,un.z,0,-un.x,Dn.z,0,-Dn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Dn.y,Dn.x,0];return!cl(e,os,as,ls,$r)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,os,as,ls,$r))?!1:(Zr.crossVectors(hn,un),e=[Zr.x,Zr.y,Zr.z],cl(e,os,as,ls,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new R,new R,new R,new R,new R,new R,new R,new R],Ai=new R,Yr=new Ii,os=new R,as=new R,ls=new R,hn=new R,un=new R,Dn=new R,Js=new R,$r=new R,Zr=new R,In=new R;function cl(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){In.fromArray(r,s);let o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var k0=new Ii,Qs=new R,hl=new R,_n=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):k0.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Qs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(hl)),this.expandByPoint(Qs.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new R,ul=new R,jr=new R,dn=new R,dl=new R,Kr=new R,fl=new R,Do=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ul.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(ul);let s=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=dn.dot(this.direction),l=-dn.dot(jr),c=dn.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ul).addScaledVector(jr,d),f}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,n,s){dl.subVectors(e,t),Kr.subVectors(i,t),fl.crossVectors(dl,Kr);let a=this.direction.dot(fl),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,t);let l=o*this.direction.dot(Kr.crossVectors(dn,Kr));if(l<0)return null;let c=o*this.direction.dot(dl.cross(dn));if(c<0||l+c>a)return null;let h=-o*dn.dot(fl);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U0,t,N0)}lookAt(t,e,i){let n=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),fn.crossVectors(i,ai),fn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),fn.crossVectors(i,ai)),fn.normalize(),Jr.crossVectors(ai,fn),n[0]=fn.x,n[4]=Jr.x,n[8]=ai.x,n[1]=fn.y,n[5]=Jr.y,n[9]=ai.y,n[2]=fn.z,n[6]=Jr.z,n[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],y=i[7],M=i[11],S=i[15],w=n[0],T=n[4],E=n[8],_=n[12],b=n[1],C=n[5],z=n[9],L=n[13],N=n[2],O=n[6],U=n[10],X=n[14],F=n[3],B=n[7],j=n[11],rt=n[15];return s[0]=a*w+o*b+l*N+c*F,s[4]=a*T+o*C+l*O+c*B,s[8]=a*E+o*z+l*U+c*j,s[12]=a*_+o*L+l*X+c*rt,s[1]=h*w+u*b+d*N+f*F,s[5]=h*T+u*C+d*O+f*B,s[9]=h*E+u*z+d*U+f*j,s[13]=h*_+u*L+d*X+f*rt,s[2]=p*w+x*b+g*N+m*F,s[6]=p*T+x*C+g*O+m*B,s[10]=p*E+x*z+g*U+m*j,s[14]=p*_+x*L+g*X+m*rt,s[3]=v*w+y*b+M*N+S*F,s[7]=v*T+y*C+M*O+S*B,s[11]=v*E+y*z+M*U+S*j,s[15]=v*_+y*L+M*X+S*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=u*g*c-x*d*c+x*l*f-o*g*f-u*l*m+o*d*m,y=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,M=h*x*c-p*u*c+p*o*f-a*x*f-h*o*m+a*u*m,S=p*u*l-h*x*l-p*o*d+a*x*d+h*o*g-a*u*g,w=e*v+i*y+n*M+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*m-i*d*m)*T,t[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*m+i*l*m)*T,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*T,t[4]=y*T,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*T,t[6]=(p*l*s-a*g*s-p*n*c+e*g*c+a*n*m-e*l*m)*T,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*T,t[8]=M*T,t[9]=(p*u*s-h*x*s-p*i*f+e*x*f+h*i*m-e*u*m)*T,t[10]=(a*x*s-p*o*s+p*i*c-e*x*c-a*i*m+e*o*m)*T,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*T,t[12]=S*T,t[13]=(h*x*n-p*u*n+p*i*d-e*x*d-h*i*g+e*u*g)*T,t[14]=(p*o*n-a*x*n-p*i*l+e*x*l+a*i*g-e*o*g)*T,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,x=a*h,g=a*u,m=o*u,v=l*c,y=l*h,M=l*u,S=i.x,w=i.y,T=i.z;return n[0]=(1-(x+m))*S,n[1]=(f+M)*S,n[2]=(p-y)*S,n[3]=0,n[4]=(f-M)*w,n[5]=(1-(d+m))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(p+y)*T,n[9]=(g-v)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=cs.set(n[0],n[1],n[2]).length(),a=cs.set(n[4],n[5],n[6]).length(),o=cs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ci.copy(this);let c=1/s,h=1/a,u=1/o;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Qi){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(o===Qi)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Ao)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Qi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,p,x;if(o===Qi)p=(a+s)*u,x=-2*u;else if(o===Ao)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},cs=new R,Ci=new Rt,U0=new R(0,0,0),N0=new R(1,1,1),fn=new R,Jr=new R,ai=new R,_u=new Rt,wu=new Ie,We=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};We.DEFAULT_ORDER="XYZ";var Io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},F0=0,Su=new R,hs=new Ie,Yi=new Rt,Qr=new R,tr=new R,O0=new R,B0=new Ie,Tu=new R(1,0,0),Eu=new R(0,1,0),Au=new R(0,0,1),Cu={type:"added"},H0={type:"removed"},us={type:"childadded",child:null},pl={type:"childremoved",child:null},Oe=class r extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new We,i=new Ie,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Zt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qr.copy(t):Qr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(tr,Qr,this.up):Yi.lookAt(Qr,tr,this.up),this.quaternion.setFromRotationMatrix(Yi),n&&(Yi.extractRotation(n.matrixWorld),hs.setFromRotationMatrix(Yi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(H0),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,O0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,B0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Oe.DEFAULT_UP=new R(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new R,$i=new R,ml=new R,Zi=new R,ds=new R,fs=new R,Ru=new R,gl=new R,xl=new R,vl=new R,yl=new re,Ml=new re,bl=new re,Fn=class r{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ri.subVectors(n,e),$i.subVectors(i,e),ml.subVectors(t,e);let a=Ri.dot(Ri),o=Ri.dot($i),l=Ri.dot(ml),c=$i.dot($i),h=$i.dot(ml),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return yl.setScalar(0),Ml.setScalar(0),bl.setScalar(0),yl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(Ml,s.y),a.addScaledVector(bl,s.z),a}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),$i.subVectors(t,e),Ri.cross($i).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ri.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ds.subVectors(n,i),fs.subVectors(s,i),gl.subVectors(t,i);let l=ds.dot(gl),c=fs.dot(gl);if(l<=0&&c<=0)return e.copy(i);xl.subVectors(t,n);let h=ds.dot(xl),u=fs.dot(xl);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ds,a);vl.subVectors(t,s);let f=ds.dot(vl),p=fs.dot(vl);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(fs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Ru.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Ru,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},to={h:0,s:0,l:0};function _l(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=_h(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=_l(a,s,t+1/3),this.g=_l(a,s,t),this.b=_l(a,s,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Ee){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=Id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return te.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ne(Ge.r*255,0,255))*65536+Math.round(Ne(Ge.g*255,0,255))*256+Math.round(Ne(Ge.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ge.copy(this),e);let i=Ge.r,n=Ge.g,s=Ge.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ee){te.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,i=Ge.g,n=Ge.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(to);let i=lr(pn.h,to.h,e),n=lr(pn.s,to.s,e),s=lr(pn.l,to.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new dt;dt.NAMES=Id;var V0=0,nn=class extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Zn(),this.name="",this.blending=xn,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xn&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zi=class extends nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ki=G0();function G0(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function W0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ne(r,-65504,65504),Ki.floatView[0]=r;let t=Ki.uint32View[0],e=t>>23&511;return Ki.baseTable[e]+((t&8388607)>>Ki.shiftTable[e])}function q0(r){let t=r>>10;return Ki.uint32View[0]=Ki.mantissaTable[Ki.offsetTable[t]+(r&1023)]+Ki.exponentTable[t],Ki.floatView[0]}var zd={toHalfFloat:W0,fromHalfFloat:q0},Re=new R,eo=new lt,ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==du&&(t.usage=this.usage),t}};var zo=class extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Lo=class extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jt=class extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},X0=0,gi=new Rt,wl=new Oe,ps=new R,li=new Ii,er=new Ii,Ue=new R,fe=class r extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?Lo:zo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(li.min,er.min),li.expandByPoint(Ue),Ue.addVectors(li.max,er.max),li.expandByPoint(Ue)):(li.expandByPoint(er.min),li.expandByPoint(er.max))}li.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(t,c),Ue.add(ps)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<i.count;E++)o[E]=new R,l[E]=new R;let c=new R,h=new R,u=new R,d=new lt,f=new lt,p=new lt,x=new R,g=new R;function m(E,_,b){c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[E].add(x),o[_].add(x),o[b].add(x),l[E].add(g),l[_].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,_=v.length;E<_;++E){let b=v[E],C=b.start,z=b.count;for(let L=C,N=C+z;L<N;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new R,M=new R,S=new R,w=new R;function T(E){S.fromBufferAttribute(n,E),w.copy(S);let _=o[E];y.copy(_),y.sub(S.multiplyScalar(S.dot(_))).normalize(),M.crossVectors(w,_);let C=M.dot(l[E])<0?-1:1;a.setXYZW(E,y.x,y.y,y.z,C)}for(let E=0,_=v.length;E<_;++E){let b=v[E],C=b.start,z=b.count;for(let L=C,N=C+z;L<N;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pu=new Rt,zn=new Do,io=new _n,Du=new R,no=new R,so=new R,ro=new R,Sl=new R,oo=new R,Iu=new R,ao=new R,Ot=class extends Oe{constructor(t=new fe,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Sl.fromBufferAttribute(u,t),a?oo.addScaledVector(Sl,h):oo.addScaledVector(Sl.sub(e),h))}e.add(oo)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),zn.copy(t.ray).recast(t.near),!(io.containsPoint(zn.origin)===!1&&(zn.intersectSphere(io,Du)===null||zn.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Pu.copy(s).invert(),zn.copy(t.ray).applyMatrix4(Pu),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=y;M<S;M+=3){let w=o.getX(M),T=o.getX(M+1),E=o.getX(M+2);n=lo(this,m,t,i,c,h,u,w,T,E),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);n=lo(this,a,t,i,c,h,u,v,y,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,S=y;M<S;M+=3){let w=M,T=M+1,E=M+2;n=lo(this,m,t,i,c,h,u,w,T,E),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,y=g+1,M=g+2;n=lo(this,a,t,i,c,h,u,v,y,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Y0(r,t,e,i,n,s,a,o){let l;if(t.side===Fe?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Oi,o),l===null)return null;ao.copy(o),ao.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ao);return c<e.near||c>e.far?null:{distance:c,point:ao.clone(),object:r}}function lo(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,no),r.getVertexPosition(l,so),r.getVertexPosition(c,ro);let h=Y0(r,t,e,i,no,so,ro,Iu);if(h){let u=new R;Fn.getBarycoord(Iu,no,so,ro,u),n&&(h.uv=Fn.getInterpolatedAttribute(n,o,l,c,u,new lt)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,c,u,new lt)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Fn.getNormal(no,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var ui=class r extends fe{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function p(x,g,m,v,y,M,S,w,T,E,_){let b=M/T,C=S/E,z=M/2,L=S/2,N=w/2,O=T+1,U=E+1,X=0,F=0,B=new R;for(let j=0;j<U;j++){let rt=j*C-L;for(let st=0;st<O;st++){let _t=st*b-z;B[x]=_t*v,B[g]=rt*y,B[m]=N,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=w>0?1:-1,h.push(B.x,B.y,B.z),u.push(st/T),u.push(1-j/E),X+=1}}for(let j=0;j<E;j++)for(let rt=0;rt<T;rt++){let st=d+rt+O*j,_t=d+rt+O*(j+1),Y=d+(rt+1)+O*(j+1),J=d+(rt+1)+O*j;l.push(st,_t,J),l.push(_t,Y,J),F+=6}o.addGroup(f,F,_),f+=F,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ze(r){let t={};for(let e=0;e<r.length;e++){let i=Rs(r[e]);for(let n in i)t[n]=i[n]}return t}function $0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ld(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Be={clone:Rs,merge:Ze},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ko=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=new R,zu=new lt,Lu=new lt,_e=class extends ko{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Lu),e.subVectors(Lu,zu)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,Tc=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new _e(ms,gs,t,e);n.layers=this.layers,this.add(n);let s=new _e(ms,gs,t,e);s.layers=this.layers,this.add(s);let a=new _e(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new _e(ms,gs,t,e);o.layers=this.layers,this.add(o);let l=new _e(ms,gs,t,e);l.layers=this.layers,this.add(l);let c=new _e(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Uo=class extends ti{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ec=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Uo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ui(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Ae});s.uniforms.tEquirect.value=e;let a=new Ot(n,s),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=je),new Tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Tl=new R,K0=new R,J0=new Zt,Pi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Tl.subVectors(i,e).cross(K0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Tl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||J0.getNormalMatrix(t),n=this.coplanarPoint(Tl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ln=new _n,co=new R,pr=class{constructor(t=new Pi,e=new Pi,i=new Pi,n=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],x=n[10],g=n[11],m=n[12],v=n[13],y=n[14],M=n[15];if(i[0].setComponents(l-s,d-c,g-f,M-m).normalize(),i[1].setComponents(l+s,d+c,g+f,M+m).normalize(),i[2].setComponents(l+a,d+h,g+p,M+v).normalize(),i[3].setComponents(l-a,d-h,g-p,M-v).normalize(),i[4].setComponents(l-o,d-u,g-x,M-y).normalize(),e===Qi)i[5].setComponents(l+o,d+u,g+x,M+y).normalize();else if(e===Ao)i[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(co.x=n.normal.x>0?t.max.x:t.min.x,co.y=n.normal.y>0?t.max.y:t.min.y,co.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kd(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Q0(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Ke=class r extends fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*d-a;for(let y=0;y<c;y++){let M=y*u-s;p.push(M,-v,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let y=v+c*m,M=v+c*(m+1),S=v+1+c*(m+1),w=v+1+c*m;f.push(y,M,w),f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,Qp=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,ag=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,xg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Sg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Eg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:ip,alphamap_pars_fragment:np,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:op,aomap_pars_fragment:ap,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:vp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:bp,color_vertex:_p,common:wp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Ap,emissivemap_fragment:Cp,emissivemap_pars_fragment:Rp,colorspace_fragment:Pp,colorspace_pars_fragment:Dp,envmap_fragment:Ip,envmap_common_pars_fragment:zp,envmap_pars_fragment:Lp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Np,fog_pars_vertex:Fp,fog_fragment:Op,fog_pars_fragment:Bp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Wp,lights_pars_begin:qp,lights_toon_fragment:Yp,lights_toon_pars_fragment:$p,lights_phong_fragment:Zp,lights_phong_pars_fragment:jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Jp,lights_fragment_begin:Qp,lights_fragment_maps:tm,lights_fragment_end:em,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:om,map_pars_fragment:am,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:xm,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:bm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Em,opaque_fragment:Am,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Dm,dithering_pars_fragment:Im,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Um,shadowmap_vertex:Nm,shadowmask_pars_fragment:Fm,skinbase_vertex:Om,skinning_pars_vertex:Bm,skinning_vertex:Hm,skinnormal_vertex:Vm,specularmap_fragment:Gm,specularmap_pars_fragment:Wm,tonemapping_fragment:qm,tonemapping_pars_fragment:Xm,transmission_fragment:Ym,transmission_pars_fragment:$m,uv_pars_fragment:Zm,uv_pars_vertex:jm,uv_vertex:Km,worldpos_vertex:Jm,background_vert:Qm,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ig,cube_vert:ng,cube_frag:sg,depth_vert:rg,depth_frag:og,distanceRGBA_vert:ag,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:xg,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:bg,meshphong_frag:_g,meshphysical_vert:wg,meshphysical_frag:Sg,meshtoon_vert:Tg,meshtoon_frag:Eg,points_vert:Ag,points_frag:Cg,shadow_vert:Rg,shadow_frag:Pg,sprite_vert:Dg,sprite_frag:Ig},wt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ni={basic:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ze([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ze([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ze([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ze([wt.points,wt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ze([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ze([wt.common,wt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ze([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ze([wt.sprite,wt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ze([wt.common,wt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ze([wt.lights,wt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Ni.physical={uniforms:Ze([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var ho={r:0,b:0,g:0},kn=new We,zg=new Rt;function Lg(r,t,e,i,n,s,a){let o=new dt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,M=p(v);M===null?m(o,l):M&&M.isColor&&(m(M,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,y){let M=p(y);M&&(M.isCubeTexture||M.mapping===sa)?(h===void 0&&(h=new Ot(new ui(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Rs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),kn.copy(y.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(kn)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==ce,(u!==M||d!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ot(new Ke(2,2),new Qt({name:"BackgroundMaterial",uniforms:Rs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(ho,Ld(r)),i.buffers.color.setClear(ho.r,ho.g,ho.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:x,addToRenderList:g}}function kg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(b,C,z,L,N){let O=!1,U=u(L,z,C);s!==U&&(s=U,c(s.object)),O=f(b,L,z,N),O&&p(b,L,z,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(b,C,z,L),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,C,z){let L=z.wireframe===!0,N=i[b.id];N===void 0&&(N={},i[b.id]=N);let O=N[C.id];O===void 0&&(O={},N[C.id]=O);let U=O[L];return U===void 0&&(U=d(l()),O[L]=U),U}function d(b){let C=[],z=[],L=[];for(let N=0;N<e;N++)C[N]=0,z[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,C,z,L){let N=s.attributes,O=C.attributes,U=0,X=z.getAttributes();for(let F in X)if(X[F].location>=0){let j=N[F],rt=O[F];if(rt===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),j===void 0||j.attribute!==rt||rt&&j.data!==rt.data)return!0;U++}return s.attributesNum!==U||s.index!==L}function p(b,C,z,L){let N={},O=C.attributes,U=0,X=z.getAttributes();for(let F in X)if(X[F].location>=0){let j=O[F];j===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(j=b.instanceColor));let rt={};rt.attribute=j,j&&j.data&&(rt.data=j.data),N[F]=rt,U++}s.attributes=N,s.attributesNum=U,s.index=L}function x(){let b=s.newAttributes;for(let C=0,z=b.length;C<z;C++)b[C]=0}function g(b){m(b,0)}function m(b,C){let z=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;z[b]=1,L[b]===0&&(r.enableVertexAttribArray(b),L[b]=1),N[b]!==C&&(r.vertexAttribDivisor(b,C),N[b]=C)}function v(){let b=s.newAttributes,C=s.enabledAttributes;for(let z=0,L=C.length;z<L;z++)C[z]!==b[z]&&(r.disableVertexAttribArray(z),C[z]=0)}function y(b,C,z,L,N,O,U){U===!0?r.vertexAttribIPointer(b,C,z,N,O):r.vertexAttribPointer(b,C,z,L,N,O)}function M(b,C,z,L){x();let N=L.attributes,O=z.getAttributes(),U=C.defaultAttributeValues;for(let X in O){let F=O[X];if(F.location>=0){let B=N[X];if(B===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(B=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(B=b.instanceColor)),B!==void 0){let j=B.normalized,rt=B.itemSize,st=t.get(B);if(st===void 0)continue;let _t=st.buffer,Y=st.type,J=st.bytesPerElement,gt=Y===r.INT||Y===r.UNSIGNED_INT||B.gpuType===ph;if(B.isInterleavedBufferAttribute){let it=B.data,xt=it.stride,St=B.offset;if(it.isInstancedInterleavedBuffer){for(let vt=0;vt<F.locationSize;vt++)m(F.location+vt,it.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let vt=0;vt<F.locationSize;vt++)g(F.location+vt);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let vt=0;vt<F.locationSize;vt++)y(F.location+vt,rt/F.locationSize,Y,j,xt*J,(St+rt/F.locationSize*vt)*J,gt)}else{if(B.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)m(F.location+it,B.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let it=0;it<F.locationSize;it++)g(F.location+it);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let it=0;it<F.locationSize;it++)y(F.location+it,rt/F.locationSize,Y,j,rt*J,rt/F.locationSize*it*J,gt)}}else if(U!==void 0){let j=U[X];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(F.location,j);break;case 3:r.vertexAttrib3fv(F.location,j);break;case 4:r.vertexAttrib4fv(F.location,j);break;default:r.vertexAttrib1fv(F.location,j)}}}}v()}function S(){E();for(let b in i){let C=i[b];for(let z in C){let L=C[z];for(let N in L)h(L[N].object),delete L[N];delete C[z]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let C=i[b.id];for(let z in C){let L=C[z];for(let N in L)h(L[N].object),delete L[N];delete C[z]}delete i[b.id]}function T(b){for(let C in i){let z=i[C];if(z[b.id]===void 0)continue;let L=z[b.id];for(let N in L)h(L[N].object),delete L[N];delete z[b.id]}}function E(){_(),a=!0,s!==n&&(s=n,c(s.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Ug(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ng(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==ci&&i.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let E=T===Te&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==hi&&i.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!E)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:w}}function Fg(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Pi,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let v=s?0:i,y=v*4,M=m.clippingState||null;l.value=M,M=h(p,d,y,f);for(let S=0;S!==y;++S)M[S]=e[S];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Og(r){let t=new WeakMap;function e(a,o){return o===Xl?a.mapping=Es:o===Yl&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xl||o===Yl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ec(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ps=class extends ko{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,ku=[.125,.215,.35,.446,.526,.582],On=20,El=new Ps,Uu=new dt,Al=null,Cl=0,Rl=0,Pl=!1,Nn=(1+Math.sqrt(5))/2,xs=1/Nn,Nu=[new R(-Nn,xs,0),new R(Nn,xs,0),new R(-xs,0,Nn),new R(xs,0,Nn),new R(0,Nn,-xs),new R(0,Nn,xs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Cl,Rl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:Te,format:ci,colorSpace:Bs,depthBuffer:!1},n=Fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(s)),this._blurMaterial=Hg(s,t,e)}return n}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,i,n){let o=new _e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uu),h.toneMapping=vn,h.autoClear=!1;let f=new zi({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),p=new Ot(new ui,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Uu),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;uo(n,v*y,m>2?y:0,y,y),h.setRenderTarget(n),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Es||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;uo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,El)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nu[(n-s-1)%Nu.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*On-1),x=s/p,g=isFinite(s)?1+Math.floor(h*x):On;g>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${On}`);let m=[],v=0;for(let T=0;T<On;++T){let E=T/x,_=Math.exp(-E*E/2);m.push(_),T===0?v+=_:T<g&&(v+=2*_)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-i;let M=this._sizeLods[n],S=3*M*(n>y-Ms?n-y+Ms:0),w=4*(this._cubeSize-M);uo(e,S,w,3*M,2*M),l.setRenderTarget(e),l.render(u,El)}};function Bg(r){let t=[],e=[],i=[],n=r,s=r-Ms+1+ku.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-Ms?l=ku[a-r+Ms-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*f),y=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,E=w>2?0:-1,_=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];v.set(_,x*p*w),y.set(d,g*p*w);let b=[w,w,w,w,w,w];M.set(b,m*p*w)}let S=new fe;S.setAttribute("position",new ue(v,x)),S.setAttribute("uv",new ue(y,g)),S.setAttribute("faceIndex",new ue(M,m)),t.push(S),n>Ms&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fu(r,t,e){let i=new Me(r,t,e);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Hg(r,t,e){let i=new Float32Array(On),n=new R(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Ou(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Bu(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function Vg(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xl||l===Yl,h=l===Es||l===As;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ds(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Ds(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Gg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Wg(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,M=v.length;y<M;y+=3){let S=v[y+0],w=v[y+1],T=v[y+2];d.push(S,w,w,T,T,S)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let S=y+0,w=y+1,T=y+2;d.push(S,w,w,T,T,S)}}else return;let g=new(Dd(d)?Lo:zo)(d,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qg(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(i,f,s,d*a,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*x[v];e.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Yg(r,t,e){let i=new WeakMap,n=new re;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let _=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*S*4*u),T=new Po(w,M,S,u);T.type=Fi,T.needsUpdate=!0;let E=y*4;for(let b=0;b<u;b++){let C=g[b],z=m[b],L=v[b],N=M*S*4*b;for(let O=0;O<C.count;O++){let U=O*E;f===!0&&(n.fromBufferAttribute(C,O),w[N+U+0]=n.x,w[N+U+1]=n.y,w[N+U+2]=n.z,w[N+U+3]=0),p===!0&&(n.fromBufferAttribute(z,O),w[N+U+4]=n.x,w[N+U+5]=n.y,w[N+U+6]=n.z,w[N+U+7]=0),x===!0&&(n.fromBufferAttribute(L,O),w[N+U+8]=n.x,w[N+U+9]=n.y,w[N+U+10]=n.z,w[N+U+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:T,size:new lt(M,S)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function $g(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Is=class extends ti{constructor(t,e,i,n,s,a,o,l,c,h=_s){if(h!==_s&&h!==Mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=Hn),i===void 0&&h===Mn&&(i=yn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ud=new ti,Hu=new Is(1,1),Nd=new Po,Fd=new Sc,Od=new Uo,Vu=[],Gu=[],Wu=new Float32Array(16),qu=new Float32Array(9),Xu=new Float32Array(4);function Hs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Vu[n];if(s===void 0&&(s=new Float32Array(n),Vu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Le(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function oa(r,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Zg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function jg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),Le(e,t)}}function Kg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),Le(e,t)}}function Jg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),Le(e,t)}}function Qg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;Xu.set(i),r.uniformMatrix2fv(this.addr,!1,Xu),Le(e,i)}}function tx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;qu.set(i),r.uniformMatrix3fv(this.addr,!1,qu),Le(e,i)}}function ex(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;Wu.set(i),r.uniformMatrix4fv(this.addr,!1,Wu),Le(e,i)}}function ix(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function nx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),Le(e,t)}}function sx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),Le(e,t)}}function rx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),Le(e,t)}}function ox(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ax(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),Le(e,t)}}function lx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),Le(e,t)}}function cx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),Le(e,t)}}function hx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Hu.compareFunction=Rd,s=Hu):s=Ud,e.setTexture2D(t||s,n)}function ux(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Fd,n)}function dx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Od,n)}function fx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Nd,n)}function px(r){switch(r){case 5126:return Zg;case 35664:return jg;case 35665:return Kg;case 35666:return Jg;case 35674:return Qg;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return ix;case 35667:case 35671:return nx;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(r,t){r.uniform1fv(this.addr,t)}function gx(r,t){let e=Hs(t,this.size,2);r.uniform2fv(this.addr,e)}function xx(r,t){let e=Hs(t,this.size,3);r.uniform3fv(this.addr,e)}function vx(r,t){let e=Hs(t,this.size,4);r.uniform4fv(this.addr,e)}function yx(r,t){let e=Hs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Mx(r,t){let e=Hs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function bx(r,t){let e=Hs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _x(r,t){r.uniform1iv(this.addr,t)}function wx(r,t){r.uniform2iv(this.addr,t)}function Sx(r,t){r.uniform3iv(this.addr,t)}function Tx(r,t){r.uniform4iv(this.addr,t)}function Ex(r,t){r.uniform1uiv(this.addr,t)}function Ax(r,t){r.uniform2uiv(this.addr,t)}function Cx(r,t){r.uniform3uiv(this.addr,t)}function Rx(r,t){r.uniform4uiv(this.addr,t)}function Px(r,t,e){let i=this.cache,n=t.length,s=oa(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Ud,s[a])}function Dx(r,t,e){let i=this.cache,n=t.length,s=oa(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Fd,s[a])}function Ix(r,t,e){let i=this.cache,n=t.length,s=oa(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Od,s[a])}function zx(r,t,e){let i=this.cache,n=t.length,s=oa(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Nd,s[a])}function Lx(r){switch(r){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return _x;case 35667:case 35671:return wx;case 35668:case 35672:return Sx;case 35669:case 35673:return Tx;case 5125:return Ex;case 36294:return Ax;case 36295:return Cx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return zx}}var Ac=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=px(e.type)}},Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lx(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function Yu(r,t){r.seq.push(t),r.map[t.id]=t}function kx(r,t,e){let i=r.name,n=i.length;for(Dl.lastIndex=0;;){let s=Dl.exec(i),a=Dl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yu(e,c===void 0?new Ac(o,r,t):new Cc(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Rc(o),Yu(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);kx(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function $u(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Ux=37297,Nx=0;function Fx(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Zu=new Zt;function Ox(r){te._getMatrix(Zu,te.workingColorSpace,r);let t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(r)){case ra:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ju(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Fx(r.getShaderSource(t),a)}else return n}function Bx(r,t){let e=Ox(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hx(r,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case uh:e="Cineon";break;case Yn:e="ACESFilmic";break;case dh:e="AgX";break;case fh:e="Neutral";break;case i0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fo=new R;function Vx(){te.getLuminanceCoefficients(fo);let r=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Wx(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qx(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function or(r){return r!==""}function Ku(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(r){return r.replace(Xx,$x)}var Yx=new Map;function $x(r,t){let e=Wt[t];if(e===void 0){let i=Yx.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(r){return r.replace(Zx,jx)}function jx(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function td(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Kx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Jx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case As:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function tv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vd:t="ENVMAP_BLENDING_MULTIPLY";break;case t0:t="ENVMAP_BLENDING_MIX";break;case e0:t="ENVMAP_BLENDING_ADD";break}return t}function ev(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function iv(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Kx(e),c=Jx(e),h=Qx(e),u=tv(e),d=ev(e),f=Gx(e),p=Wx(s),x=n.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(or).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(or).join(`
`),m.length>0&&(m+=`
`)):(g=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==vn?Hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Bx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=Pc(a),a=Ku(a,e),a=Ju(a,e),o=Pc(o),o=Ku(o,e),o=Ju(o,e),a=Qu(a),o=Qu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+a,M=v+m+o,S=$u(n,n.VERTEX_SHADER,y),w=$u(n,n.FRAGMENT_SHADER,M);n.attachShader(x,S),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function T(C){if(r.debug.checkShaderErrors){let z=n.getProgramInfoLog(x).trim(),L=n.getShaderInfoLog(S).trim(),N=n.getShaderInfoLog(w).trim(),O=!0,U=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,S,w);else{let X=ju(n,S,"vertex"),F=ju(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+X+`
`+F)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||N==="")&&(U=!1);U&&(C.diagnostics={runnable:O,programLog:z,vertexShader:{log:L,prefix:g},fragmentShader:{log:N,prefix:m}})}n.deleteShader(S),n.deleteShader(w),E=new Ss(n,x),_=qx(n,x)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,Ux)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var nv=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ic(t),e.set(t,i)),i}},Ic=class{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}};function sv(r,t,e,i,n,s,a){let o=new Io,l=new Dc,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,C,z,L){let N=z.fog,O=L.geometry,U=_.isMeshStandardMaterial?z.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||U),F=X&&X.mapping===sa?X.image.height:null,B=p[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=j!==void 0?j.length:0,st=0;O.morphAttributes.position!==void 0&&(st=1),O.morphAttributes.normal!==void 0&&(st=2),O.morphAttributes.color!==void 0&&(st=3);let _t,Y,J,gt;if(B){let he=Ni[B];_t=he.vertexShader,Y=he.fragmentShader}else _t=_.vertexShader,Y=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),gt=l.getFragmentShaderID(_);let it=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),St=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Gt=!!_.map,nt=!!_.matcap,ut=!!X,k=!!_.aoMap,pt=!!_.lightMap,ct=!!_.bumpMap,yt=!!_.normalMap,ft=!!_.displacementMap,zt=!!_.emissiveMap,et=!!_.metalnessMap,I=!!_.roughnessMap,A=_.anisotropy>0,W=_.clearcoat>0,Q=_.dispersion>0,ot=_.iridescence>0,tt=_.sheen>0,It=_.transmission>0,Mt=A&&!!_.anisotropyMap,Tt=W&&!!_.clearcoatMap,Xt=W&&!!_.clearcoatNormalMap,ht=W&&!!_.clearcoatRoughnessMap,Pt=ot&&!!_.iridescenceMap,Bt=ot&&!!_.iridescenceThicknessMap,Ht=tt&&!!_.sheenColorMap,Dt=tt&&!!_.sheenRoughnessMap,Kt=!!_.specularMap,Vt=!!_.specularColorMap,ee=!!_.specularIntensityMap,H=It&&!!_.transmissionMap,bt=It&&!!_.thicknessMap,K=!!_.gradientMap,at=!!_.alphaMap,Ct=_.alphaTest>0,Et=!!_.alphaHash,Yt=!!_.extensions,Se=vn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Se=r.toneMapping);let He={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:Y,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:St,instancingColor:St&&L.instanceColor!==null,instancingMorph:St&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Bs,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:nt,envMap:ut,envMapMode:ut&&X.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:pt,bumpMap:ct,normalMap:yt,displacementMap:d&&ft,emissiveMap:zt,normalMapObjectSpace:yt&&_.normalMapType===r0,normalMapTangentSpace:yt&&_.normalMapType===bh,metalnessMap:et,roughnessMap:I,anisotropy:A,anisotropyMap:Mt,clearcoat:W,clearcoatMap:Tt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ht,dispersion:Q,iridescence:ot,iridescenceMap:Pt,iridescenceThicknessMap:Bt,sheen:tt,sheenColorMap:Ht,sheenRoughnessMap:Dt,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:ee,transmission:It,transmissionMap:H,thicknessMap:bt,gradientMap:K,opaque:_.transparent===!1&&_.blending===xn&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:Ct,alphaHash:Et,combine:_.combine,mapUv:Gt&&x(_.map.channel),aoMapUv:k&&x(_.aoMap.channel),lightMapUv:pt&&x(_.lightMap.channel),bumpMapUv:ct&&x(_.bumpMap.channel),normalMapUv:yt&&x(_.normalMap.channel),displacementMapUv:ft&&x(_.displacementMap.channel),emissiveMapUv:zt&&x(_.emissiveMap.channel),metalnessMapUv:et&&x(_.metalnessMap.channel),roughnessMapUv:I&&x(_.roughnessMap.channel),anisotropyMapUv:Mt&&x(_.anisotropyMap.channel),clearcoatMapUv:Tt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(_.sheenRoughnessMap.channel),specularMapUv:Kt&&x(_.specularMap.channel),specularColorMapUv:Vt&&x(_.specularColorMap.channel),specularIntensityMapUv:ee&&x(_.specularIntensityMap.channel),transmissionMapUv:H&&x(_.transmissionMap.channel),thicknessMapUv:bt&&x(_.thicknessMap.channel),alphaMapUv:at&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(yt||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Gt||at),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(v(b,_),y(b,_),b.push(r.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function v(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){let b=p[_.type],C;if(b){let z=Ni[b];C=Be.clone(z.uniforms)}else C=_.uniforms;return C}function S(_,b){let C;for(let z=0,L=h.length;z<L;z++){let N=h[z];if(N.cacheKey===b){C=N,++C.usedTimes;break}}return C===void 0&&(C=new iv(r,b,_,s),h.push(C)),C}function w(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function T(_){l.remove(_)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:E}}function rv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function ov(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ed(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function id(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,p,x,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||ov),i.length>1&&i.sort(d||ed),n.length>1&&n.sort(d||ed)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function av(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new id,r.set(i,[a])):n>=s.length?(a=new id,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function lv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new dt};break;case"SpotLight":e={position:new R,direction:new R,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function cv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var hv=0;function uv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function dv(r){let t=new lv,e=cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new Rt,a=new Rt;function o(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,y=0,M=0,S=0,w=0,T=0;c.sort(uv);for(let _=0,b=c.length;_<b;_++){let C=c[_],z=C.color,L=C.intensity,N=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*L,u+=z.g*L,d+=z.b*L;else if(C.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(C.sh.coefficients[U],L);T++}else if(C.isDirectionalLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,F=e.get(C);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=C.shadow.matrix,v++}i.directional[f]=U,f++}else if(C.isSpotLight){let U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(z).multiplyScalar(L),U.distance=N,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,i.spot[x]=U;let X=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,X.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[x]=X.matrix,C.castShadow){let F=e.get(C);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=O,M++}x++}else if(C.isRectAreaLight){let U=t.get(C);U.color.copy(z).multiplyScalar(L),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=U,g++}else if(C.isPointLight){let U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let X=C.shadow,F=e.get(C);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=C.shadow.matrix,y++}i.point[p]=U,p++}else if(C.isHemisphereLight){let U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(L),U.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[m]=U,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let E=i.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==x||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==v||E.numPointShadows!==y||E.numSpotShadows!==M||E.numSpotMaps!==S||E.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,E.directionalLength=f,E.pointLength=p,E.spotLength=x,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=v,E.numPointShadows=y,E.numSpotShadows=M,E.numSpotMaps=S,E.numLightProbes=T,i.version=hv++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),u++}else if(y.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function nd(r){let t=new dv(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fv(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new nd(r),t.set(n,[o])):s>=a.length?(o=new nd(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var mr=class extends nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zc=class extends nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`;function gv(r,t,e){let i=new pr,n=new lt,s=new lt,a=new re,o=new mr({depthPacking:Mh}),l=new zc,c={},h=e.maxTextureSize,u={[Oi]:Fe,[Fe]:Oi,[Pe]:Pe},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new fe;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let m=this.type;this.render=function(w,T,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let _=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ae),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let L=m!==ji&&this.type===ji,N=m===ji&&this.type!==ji;for(let O=0,U=w.length;O<U;O++){let X=w[O],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let B=F.getFrameExtents();if(n.multiply(B),s.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/B.x),n.x=s.x*B.x,F.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/B.y),n.y=s.y*B.y,F.mapSize.y=s.y)),F.map===null||L===!0||N===!0){let rt=this.type!==ji?{minFilter:De,magFilter:De}:{};F.map!==null&&F.map.dispose(),F.map=new Me(n.x,n.y,rt),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let j=F.getViewportCount();for(let rt=0;rt<j;rt++){let st=F.getViewport(rt);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),z.viewport(a),F.updateMatrices(X,rt),i=F.getFrustum(),M(T,E,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===ji&&v(F,E),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(_,b,C)};function v(w,T){let E=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Me(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,E,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,E,f,x,null)}function y(w,T,E,_){let b=null,C=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=E.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=b.uuid,L=T.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let O=N[L];O===void 0&&(O=b.clone(),N[L]=O,T.addEventListener("dispose",S)),b=O}if(b.visible=T.visible,b.wireframe=T.wireframe,_===ji?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=r.properties.get(b);z.light=E}return b}function M(w,T,E,_,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ji)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let L=t.update(w),N=w.material;if(Array.isArray(N)){let O=L.groups;for(let U=0,X=O.length;U<X;U++){let F=O[U],B=N[F.materialIndex];if(B&&B.visible){let j=y(w,B,_,b);w.onBeforeShadow(r,w,T,E,L,j,F),r.renderBufferDirect(E,null,L,j,w,F),w.onAfterShadow(r,w,T,E,L,j,F)}}}else if(N.visible){let O=y(w,N,_,b);w.onBeforeShadow(r,w,T,E,L,O,null),r.renderBufferDirect(E,null,L,O,w,null),w.onAfterShadow(r,w,T,E,L,O,null)}}let z=w.children;for(let L=0,N=z.length;L<N;L++)M(z[L],T,E,_,b)}function S(w){w.target.removeEventListener("dispose",S);for(let E in c){let _=c[E],b=w.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var xv={[Ol]:Bl,[Hl]:Wl,[Vl]:ql,[Ts]:Gl,[Bl]:Ol,[Wl]:Hl,[ql]:Vl,[Gl]:Ts};function vv(r,t){function e(){let H=!1,bt=new re,K=null,at=new re(0,0,0,0);return{setMask:function(Ct){K!==Ct&&!H&&(r.colorMask(Ct,Ct,Ct,Ct),K=Ct)},setLocked:function(Ct){H=Ct},setClear:function(Ct,Et,Yt,Se,He){He===!0&&(Ct*=Se,Et*=Se,Yt*=Se),bt.set(Ct,Et,Yt,Se),at.equals(bt)===!1&&(r.clearColor(Ct,Et,Yt,Se),at.copy(bt))},reset:function(){H=!1,K=null,at.set(-1,0,0,0)}}}function i(){let H=!1,bt=!1,K=null,at=null,Ct=null;return{setReversed:function(Et){if(bt!==Et){let Yt=t.get("EXT_clip_control");bt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Se=Ct;Ct=null,this.setClear(Se)}bt=Et},getReversed:function(){return bt},setTest:function(Et){Et?it(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(Et){K!==Et&&!H&&(r.depthMask(Et),K=Et)},setFunc:function(Et){if(bt&&(Et=xv[Et]),at!==Et){switch(Et){case Ol:r.depthFunc(r.NEVER);break;case Bl:r.depthFunc(r.ALWAYS);break;case Hl:r.depthFunc(r.LESS);break;case Ts:r.depthFunc(r.LEQUAL);break;case Vl:r.depthFunc(r.EQUAL);break;case Gl:r.depthFunc(r.GEQUAL);break;case Wl:r.depthFunc(r.GREATER);break;case ql:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}at=Et}},setLocked:function(Et){H=Et},setClear:function(Et){Ct!==Et&&(bt&&(Et=1-Et),r.clearDepth(Et),Ct=Et)},reset:function(){H=!1,K=null,at=null,Ct=null,bt=!1}}}function n(){let H=!1,bt=null,K=null,at=null,Ct=null,Et=null,Yt=null,Se=null,He=null;return{setTest:function(he){H||(he?it(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(he){bt!==he&&!H&&(r.stencilMask(he),bt=he)},setFunc:function(he,Ti,Gi){(K!==he||at!==Ti||Ct!==Gi)&&(r.stencilFunc(he,Ti,Gi),K=he,at=Ti,Ct=Gi)},setOp:function(he,Ti,Gi){(Et!==he||Yt!==Ti||Se!==Gi)&&(r.stencilOp(he,Ti,Gi),Et=he,Yt=Ti,Se=Gi)},setLocked:function(he){H=he},setClear:function(he){He!==he&&(r.clearStencil(he),He=he)},reset:function(){H=!1,bt=null,K=null,at=null,Ct=null,Et=null,Yt=null,Se=null,He=null}}}let s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,M=null,S=null,w=null,T=new dt(0,0,0),E=0,_=!1,b=null,C=null,z=null,L=null,N=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,X=0,F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=X>=2);let B=null,j={},rt=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),_t=new re().fromArray(rt),Y=new re().fromArray(st);function J(H,bt,K,at){let Ct=new Uint8Array(4),Et=r.createTexture();r.bindTexture(H,Et),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<K;Yt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,at,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(bt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Et}let gt={};gt[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Ts),ct(!1),yt(ru),it(r.CULL_FACE),k(Ae);function it(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function xt(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function St(H,bt){return u[H]!==bt?(r.bindFramebuffer(H,bt),u[H]=bt,H===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=bt),H===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function vt(H,bt){let K=f,at=!1;if(H){K=d.get(bt),K===void 0&&(K=[],d.set(bt,K));let Ct=H.textures;if(K.length!==Ct.length||K[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,Yt=Ct.length;Et<Yt;Et++)K[Et]=r.COLOR_ATTACHMENT0+Et;K.length=Ct.length,at=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,at=!0);at&&r.drawBuffers(K)}function Gt(H){return p!==H?(r.useProgram(H),p=H,!0):!1}let nt={[xi]:r.FUNC_ADD,[Bf]:r.FUNC_SUBTRACT,[Hf]:r.FUNC_REVERSE_SUBTRACT};nt[Vf]=r.MIN,nt[Gf]=r.MAX;let ut={[Fs]:r.ZERO,[Wf]:r.ONE,[qf]:r.SRC_COLOR,[Nl]:r.SRC_ALPHA,[Zf]:r.SRC_ALPHA_SATURATE,[na]:r.DST_COLOR,[ia]:r.DST_ALPHA,[Xf]:r.ONE_MINUS_SRC_COLOR,[Fl]:r.ONE_MINUS_SRC_ALPHA,[$f]:r.ONE_MINUS_DST_COLOR,[Yf]:r.ONE_MINUS_DST_ALPHA,[jf]:r.CONSTANT_COLOR,[Kf]:r.ONE_MINUS_CONSTANT_COLOR,[Jf]:r.CONSTANT_ALPHA,[Qf]:r.ONE_MINUS_CONSTANT_ALPHA};function k(H,bt,K,at,Ct,Et,Yt,Se,He,he){if(H===Ae){x===!0&&(xt(r.BLEND),x=!1);return}if(x===!1&&(it(r.BLEND),x=!0),H!==lh){if(H!==g||he!==_){if((m!==xi||M!==xi)&&(r.blendEquation(r.FUNC_ADD),m=xi,M=xi),he)switch(H){case xn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case en:r.blendFunc(r.ONE,r.ONE);break;case ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case au:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case en:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case au:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,y=null,S=null,w=null,T.set(0,0,0),E=0,g=H,_=he}return}Ct=Ct||bt,Et=Et||K,Yt=Yt||at,(bt!==m||Ct!==M)&&(r.blendEquationSeparate(nt[bt],nt[Ct]),m=bt,M=Ct),(K!==v||at!==y||Et!==S||Yt!==w)&&(r.blendFuncSeparate(ut[K],ut[at],ut[Et],ut[Yt]),v=K,y=at,S=Et,w=Yt),(Se.equals(T)===!1||He!==E)&&(r.blendColor(Se.r,Se.g,Se.b,He),T.copy(Se),E=He),g=H,_=!1}function pt(H,bt){H.side===Pe?xt(r.CULL_FACE):it(r.CULL_FACE);let K=H.side===Fe;bt&&(K=!K),ct(K),H.blending===xn&&H.transparent===!1?k(Ae):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);let at=H.stencilWrite;o.setTest(at),at&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),zt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){b!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),b=H)}function yt(H){H!==Ff?(it(r.CULL_FACE),H!==C&&(H===ru?r.cullFace(r.BACK):H===Of?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),C=H}function ft(H){H!==z&&(U&&r.lineWidth(H),z=H)}function zt(H,bt,K){H?(it(r.POLYGON_OFFSET_FILL),(L!==bt||N!==K)&&(r.polygonOffset(bt,K),L=bt,N=K)):xt(r.POLYGON_OFFSET_FILL)}function et(H){H?it(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function I(H){H===void 0&&(H=r.TEXTURE0+O-1),B!==H&&(r.activeTexture(H),B=H)}function A(H,bt,K){K===void 0&&(B===null?K=r.TEXTURE0+O-1:K=B);let at=j[K];at===void 0&&(at={type:void 0,texture:void 0},j[K]=at),(at.type!==H||at.texture!==bt)&&(B!==K&&(r.activeTexture(K),B=K),r.bindTexture(H,bt||gt[H]),at.type=H,at.texture=bt)}function W(){let H=j[B];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Bt(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ht(H){_t.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function Dt(H){Y.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Y.copy(H))}function Kt(H,bt){let K=c.get(bt);K===void 0&&(K=new WeakMap,c.set(bt,K));let at=K.get(H);at===void 0&&(at=r.getUniformBlockIndex(bt,H.name),K.set(H,at))}function Vt(H,bt){let at=c.get(bt).get(H);l.get(bt)!==at&&(r.uniformBlockBinding(bt,at,H.__bindingPointIndex),l.set(bt,at))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},B=null,j={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,y=null,M=null,S=null,w=null,T=new dt(0,0,0),E=0,_=!1,b=null,C=null,z=null,L=null,N=null,_t.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:xt,bindFramebuffer:St,drawBuffers:vt,useProgram:Gt,setBlending:k,setMaterial:pt,setFlipSided:ct,setCullFace:yt,setLineWidth:ft,setPolygonOffset:zt,setScissorTest:et,activeTexture:I,bindTexture:A,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:Pt,texImage3D:Bt,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:ht,texSubImage2D:tt,texSubImage3D:It,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Tt,scissor:Ht,viewport:Dt,reset:ee}}function sd(r,t,e,i){let n=yv(i);switch(e){case wd:return r*t;case Td:return r*t;case Ed:return r*t*2;case Os:return r*t/n.components*n.byteLength;case xh:return r*t/n.components*n.byteLength;case Ad:return r*t*2/n.components*n.byteLength;case vh:return r*t*2/n.components*n.byteLength;case Sd:return r*t*3/n.components*n.byteLength;case ci:return r*t*4/n.components*n.byteLength;case yh:return r*t*4/n.components*n.byteLength;case bo:case _o:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wo:case So:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jl:case Jl:return Math.max(r,16)*Math.max(t,8)/4;case Zl:case Kl:return Math.max(r,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case To:case gc:case xc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Cd:case vc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yc:case Mc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yv(r){switch(r){case hi:case Md:return{byteLength:1,components:1};case fr:case bd:case Te:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Hn:case ph:case Fi:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Mv(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,A){return f?new OffscreenCanvas(I,A):Co("canvas")}function x(I,A,W){let Q=1,ot=et(I);if((ot.width>W||ot.height>W)&&(Q=W/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let tt=Math.floor(Q*ot.width),It=Math.floor(Q*ot.height);u===void 0&&(u=p(tt,It));let Mt=A?p(tt,It):u;return Mt.width=tt,Mt.height=It,Mt.getContext("2d").drawImage(I,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+It+")."),Mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,A,W,Q,ot=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let tt=A;if(A===r.RED&&(W===r.FLOAT&&(tt=r.R32F),W===r.HALF_FLOAT&&(tt=r.R16F),W===r.UNSIGNED_BYTE&&(tt=r.R8)),A===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(tt=r.R8UI),W===r.UNSIGNED_SHORT&&(tt=r.R16UI),W===r.UNSIGNED_INT&&(tt=r.R32UI),W===r.BYTE&&(tt=r.R8I),W===r.SHORT&&(tt=r.R16I),W===r.INT&&(tt=r.R32I)),A===r.RG&&(W===r.FLOAT&&(tt=r.RG32F),W===r.HALF_FLOAT&&(tt=r.RG16F),W===r.UNSIGNED_BYTE&&(tt=r.RG8)),A===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(tt=r.RG8UI),W===r.UNSIGNED_SHORT&&(tt=r.RG16UI),W===r.UNSIGNED_INT&&(tt=r.RG32UI),W===r.BYTE&&(tt=r.RG8I),W===r.SHORT&&(tt=r.RG16I),W===r.INT&&(tt=r.RG32I)),A===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),W===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),W===r.UNSIGNED_INT&&(tt=r.RGB32UI),W===r.BYTE&&(tt=r.RGB8I),W===r.SHORT&&(tt=r.RGB16I),W===r.INT&&(tt=r.RGB32I)),A===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),W===r.UNSIGNED_INT&&(tt=r.RGBA32UI),W===r.BYTE&&(tt=r.RGBA8I),W===r.SHORT&&(tt=r.RGBA16I),W===r.INT&&(tt=r.RGBA32I)),A===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),A===r.RGBA){let It=ot?ra:te.getTransfer(Q);W===r.FLOAT&&(tt=r.RGBA32F),W===r.HALF_FLOAT&&(tt=r.RGBA16F),W===r.UNSIGNED_BYTE&&(tt=It===ce?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(I,A){let W;return I?A===null||A===Hn||A===yn?W=r.DEPTH24_STENCIL8:A===Fi?W=r.DEPTH32F_STENCIL8:A===fr&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Hn||A===yn?W=r.DEPTH_COMPONENT24:A===Fi?W=r.DEPTH_COMPONENT32F:A===fr&&(W=r.DEPTH_COMPONENT16),W}function S(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==De&&I.minFilter!==je?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){let A=I.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&h.delete(A)}function T(I){let A=I.target;A.removeEventListener("dispose",T),b(A)}function E(I){let A=i.get(I);if(A.__webglInit===void 0)return;let W=I.source,Q=d.get(W);if(Q){let ot=Q[A.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&_(I),Object.keys(Q).length===0&&d.delete(W)}i.remove(I)}function _(I){let A=i.get(I);r.deleteTexture(A.__webglTexture);let W=I.source,Q=d.get(W);delete Q[A.__cacheKey],a.memory.textures--}function b(I){let A=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let ot=0;ot<A.__webglFramebuffer[Q].length;ot++)r.deleteFramebuffer(A.__webglFramebuffer[Q][ot]);else r.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)r.deleteFramebuffer(A.__webglFramebuffer[Q]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let W=I.textures;for(let Q=0,ot=W.length;Q<ot;Q++){let tt=i.get(W[Q]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),i.remove(W[Q])}i.remove(I)}let C=0;function z(){C=0}function L(){let I=C;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),C+=1,I}function N(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function O(I,A){let W=i.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){let Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,I,A);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+A)}function U(I,A){let W=i.get(I);if(I.version>0&&W.__version!==I.version){Y(W,I,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+A)}function X(I,A){let W=i.get(I);if(I.version>0&&W.__version!==I.version){Y(W,I,A);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+A)}function F(I,A){let W=i.get(I);if(I.version>0&&W.__version!==I.version){J(W,I,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+A)}let B={[Di]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[$l]:r.MIRRORED_REPEAT},j={[De]:r.NEAREST,[n0]:r.NEAREST_MIPMAP_NEAREST,[Xr]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[sl]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},rt={[o0]:r.NEVER,[d0]:r.ALWAYS,[a0]:r.LESS,[Rd]:r.LEQUAL,[l0]:r.EQUAL,[u0]:r.GEQUAL,[c0]:r.GREATER,[h0]:r.NOTEQUAL};function st(I,A){if(A.type===Fi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===je||A.magFilter===sl||A.magFilter===Xr||A.magFilter===Ji||A.minFilter===je||A.minFilter===sl||A.minFilter===Xr||A.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,B[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,B[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,B[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,j[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===De||A.minFilter!==Xr&&A.minFilter!==Ji||A.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function _t(I,A){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",w));let Q=A.source,ot=d.get(Q);ot===void 0&&(ot={},d.set(Q,ot));let tt=N(A);if(tt!==I.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ot[tt].usedTimes++;let It=ot[I.__cacheKey];It!==void 0&&(ot[I.__cacheKey].usedTimes--,It.usedTimes===0&&_(A)),I.__cacheKey=tt,I.__webglTexture=ot[tt].texture}return W}function Y(I,A,W){let Q=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=r.TEXTURE_3D);let ot=_t(I,A),tt=A.source;e.bindTexture(Q,I.__webglTexture,r.TEXTURE0+W);let It=i.get(tt);if(tt.version!==It.__version||ot===!0){e.activeTexture(r.TEXTURE0+W);let Mt=te.getPrimaries(te.workingColorSpace),Tt=A.colorSpace===gn?null:te.getPrimaries(A.colorSpace),Xt=A.colorSpace===gn||Mt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ht=x(A.image,!1,n.maxTextureSize);ht=zt(A,ht);let Pt=s.convert(A.format,A.colorSpace),Bt=s.convert(A.type),Ht=y(A.internalFormat,Pt,Bt,A.colorSpace,A.isVideoTexture);st(Q,A);let Dt,Kt=A.mipmaps,Vt=A.isVideoTexture!==!0,ee=It.__version===void 0||ot===!0,H=tt.dataReady,bt=S(A,ht);if(A.isDepthTexture)Ht=M(A.format===Mn,A.type),ee&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Ht,ht.width,ht.height):e.texImage2D(r.TEXTURE_2D,0,Ht,ht.width,ht.height,0,Pt,Bt,null));else if(A.isDataTexture)if(Kt.length>0){Vt&&ee&&e.texStorage2D(r.TEXTURE_2D,bt,Ht,Kt[0].width,Kt[0].height);for(let K=0,at=Kt.length;K<at;K++)Dt=Kt[K],Vt?H&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Bt,Dt.data):e.texImage2D(r.TEXTURE_2D,K,Ht,Dt.width,Dt.height,0,Pt,Bt,Dt.data);A.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(r.TEXTURE_2D,bt,Ht,ht.width,ht.height),H&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht.width,ht.height,Pt,Bt,ht.data)):e.texImage2D(r.TEXTURE_2D,0,Ht,ht.width,ht.height,0,Pt,Bt,ht.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Ht,Kt[0].width,Kt[0].height,ht.depth);for(let K=0,at=Kt.length;K<at;K++)if(Dt=Kt[K],A.format!==ci)if(Pt!==null)if(Vt){if(H)if(A.layerUpdates.size>0){let Ct=sd(Dt.width,Dt.height,A.format,A.type);for(let Et of A.layerUpdates){let Yt=Dt.data.subarray(Et*Ct/Dt.data.BYTES_PER_ELEMENT,(Et+1)*Ct/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,Et,Dt.width,Dt.height,1,Pt,Yt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Pt,Dt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Ht,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Pt,Bt,Dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Ht,Dt.width,Dt.height,ht.depth,0,Pt,Bt,Dt.data)}else{Vt&&ee&&e.texStorage2D(r.TEXTURE_2D,bt,Ht,Kt[0].width,Kt[0].height);for(let K=0,at=Kt.length;K<at;K++)Dt=Kt[K],A.format!==ci?Pt!==null?Vt?H&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Dt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Ht,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Bt,Dt.data):e.texImage2D(r.TEXTURE_2D,K,Ht,Dt.width,Dt.height,0,Pt,Bt,Dt.data)}else if(A.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Ht,ht.width,ht.height,ht.depth),H)if(A.layerUpdates.size>0){let K=sd(ht.width,ht.height,A.format,A.type);for(let at of A.layerUpdates){let Ct=ht.data.subarray(at*K/ht.data.BYTES_PER_ELEMENT,(at+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,Pt,Bt,Ct)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Pt,Bt,ht.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,ht.width,ht.height,ht.depth,0,Pt,Bt,ht.data);else if(A.isData3DTexture)Vt?(ee&&e.texStorage3D(r.TEXTURE_3D,bt,Ht,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Pt,Bt,ht.data)):e.texImage3D(r.TEXTURE_3D,0,Ht,ht.width,ht.height,ht.depth,0,Pt,Bt,ht.data);else if(A.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(r.TEXTURE_2D,bt,Ht,ht.width,ht.height);else{let K=ht.width,at=ht.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(r.TEXTURE_2D,Ct,Ht,K,at,0,Pt,Bt,null),K>>=1,at>>=1}}else if(Kt.length>0){if(Vt&&ee){let K=et(Kt[0]);e.texStorage2D(r.TEXTURE_2D,bt,Ht,K.width,K.height)}for(let K=0,at=Kt.length;K<at;K++)Dt=Kt[K],Vt?H&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Pt,Bt,Dt):e.texImage2D(r.TEXTURE_2D,K,Ht,Pt,Bt,Dt);A.generateMipmaps=!1}else if(Vt){if(ee){let K=et(ht);e.texStorage2D(r.TEXTURE_2D,bt,Ht,K.width,K.height)}H&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,Bt,ht)}else e.texImage2D(r.TEXTURE_2D,0,Ht,Pt,Bt,ht);g(A)&&m(Q),It.__version=tt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function J(I,A,W){if(A.image.length!==6)return;let Q=_t(I,A),ot=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+W);let tt=i.get(ot);if(ot.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+W);let It=te.getPrimaries(te.workingColorSpace),Mt=A.colorSpace===gn?null:te.getPrimaries(A.colorSpace),Tt=A.colorSpace===gn||It===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,ht=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let at=0;at<6;at++)!Xt&&!ht?Pt[at]=x(A.image[at],!0,n.maxCubemapSize):Pt[at]=ht?A.image[at].image:A.image[at],Pt[at]=zt(A,Pt[at]);let Bt=Pt[0],Ht=s.convert(A.format,A.colorSpace),Dt=s.convert(A.type),Kt=y(A.internalFormat,Ht,Dt,A.colorSpace),Vt=A.isVideoTexture!==!0,ee=tt.__version===void 0||Q===!0,H=ot.dataReady,bt=S(A,Bt);st(r.TEXTURE_CUBE_MAP,A);let K;if(Xt){Vt&&ee&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,Kt,Bt.width,Bt.height);for(let at=0;at<6;at++){K=Pt[at].mipmaps;for(let Ct=0;Ct<K.length;Ct++){let Et=K[Ct];A.format!==ci?Ht!==null?Vt?H&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,0,0,Et.width,Et.height,Ht,Et.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,Kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,0,0,Et.width,Et.height,Ht,Dt,Et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct,Kt,Et.width,Et.height,0,Ht,Dt,Et.data)}}}else{if(K=A.mipmaps,Vt&&ee){K.length>0&&bt++;let at=et(Pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,Kt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){Vt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Pt[at].width,Pt[at].height,Ht,Dt,Pt[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,Pt[at].width,Pt[at].height,0,Ht,Dt,Pt[at].data);for(let Ct=0;Ct<K.length;Ct++){let Yt=K[Ct].image[at].image;Vt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,0,0,Yt.width,Yt.height,Ht,Dt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,Kt,Yt.width,Yt.height,0,Ht,Dt,Yt.data)}}else{Vt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ht,Dt,Pt[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,Ht,Dt,Pt[at]);for(let Ct=0;Ct<K.length;Ct++){let Et=K[Ct];Vt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,0,0,Ht,Dt,Et.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ct+1,Kt,Ht,Dt,Et.image[at])}}}g(A)&&m(r.TEXTURE_CUBE_MAP),tt.__version=ot.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function gt(I,A,W,Q,ot,tt){let It=s.convert(W.format,W.colorSpace),Mt=s.convert(W.type),Tt=y(W.internalFormat,It,Mt,W.colorSpace),Xt=i.get(A),ht=i.get(W);if(ht.__renderTarget=A,!Xt.__hasExternalTextures){let Pt=Math.max(1,A.width>>tt),Bt=Math.max(1,A.height>>tt);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,Tt,Pt,Bt,A.depth,0,It,Mt,null):e.texImage2D(ot,tt,Tt,Pt,Bt,0,It,Mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),yt(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ot,ht.__webglTexture,0,ct(A)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ot,ht.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(I,A,W){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){let Q=A.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,tt=M(A.stencilBuffer,ot),It=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=ct(A);yt(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,tt,A.width,A.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,tt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,tt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,It,r.RENDERBUFFER,I)}else{let Q=A.textures;for(let ot=0;ot<Q.length;ot++){let tt=Q[ot],It=s.convert(tt.format,tt.colorSpace),Mt=s.convert(tt.type),Tt=y(tt.internalFormat,It,Mt,tt.colorSpace),Xt=ct(A);W&&yt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Tt,A.width,A.height):yt(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,Tt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);let ot=Q.__webglTexture,tt=ct(A);if(A.depthTexture.format===_s)yt(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(A.depthTexture.format===Mn)yt(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function St(I){let A=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){let ot=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),A.__depthDisposeCallback=ot}A.__boundDepthTexture=Q}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");xt(A.__webglFramebuffer,I)}else if(W){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=r.createRenderbuffer(),it(A.__webglDepthbuffer[Q],I,!1);else{let ot=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=A.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),it(A.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ot)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(I,A,W){let Q=i.get(I);A!==void 0&&gt(Q.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&St(I)}function Gt(I){let A=I.texture,W=i.get(I),Q=i.get(A);I.addEventListener("dispose",T);let ot=I.textures,tt=I.isWebGLCubeRenderTarget===!0,It=ot.length>1;if(It||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=A.version,a.memory.textures++),tt){W.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[Mt]=[];for(let Tt=0;Tt<A.mipmaps.length;Tt++)W.__webglFramebuffer[Mt][Tt]=r.createFramebuffer()}else W.__webglFramebuffer[Mt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let Mt=0;Mt<A.mipmaps.length;Mt++)W.__webglFramebuffer[Mt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(It)for(let Mt=0,Tt=ot.length;Mt<Tt;Mt++){let Xt=i.get(ot[Mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&yt(I)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ot.length;Mt++){let Tt=ot[Mt];W.__webglColorRenderbuffer[Mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Mt]);let Xt=s.convert(Tt.format,Tt.colorSpace),ht=s.convert(Tt.type),Pt=y(Tt.internalFormat,Xt,ht,Tt.colorSpace,I.isXRRenderTarget===!0),Bt=ct(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,Pt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,W.__webglColorRenderbuffer[Mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),it(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),st(r.TEXTURE_CUBE_MAP,A);for(let Mt=0;Mt<6;Mt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Tt=0;Tt<A.mipmaps.length;Tt++)gt(W.__webglFramebuffer[Mt][Tt],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Tt);else gt(W.__webglFramebuffer[Mt],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(A)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Mt=0,Tt=ot.length;Mt<Tt;Mt++){let Xt=ot[Mt],ht=i.get(Xt);e.bindTexture(r.TEXTURE_2D,ht.__webglTexture),st(r.TEXTURE_2D,Xt),gt(W.__webglFramebuffer,I,Xt,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,0),g(Xt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let Mt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Mt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Q.__webglTexture),st(Mt,A),A.mipmaps&&A.mipmaps.length>0)for(let Tt=0;Tt<A.mipmaps.length;Tt++)gt(W.__webglFramebuffer[Tt],I,A,r.COLOR_ATTACHMENT0,Mt,Tt);else gt(W.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,Mt,0);g(A)&&m(Mt),e.unbindTexture()}I.depthBuffer&&St(I)}function nt(I){let A=I.textures;for(let W=0,Q=A.length;W<Q;W++){let ot=A[W];if(g(ot)){let tt=v(I),It=i.get(ot).__webglTexture;e.bindTexture(tt,It),m(tt),e.unbindTexture()}}}let ut=[],k=[];function pt(I){if(I.samples>0){if(yt(I)===!1){let A=I.textures,W=I.width,Q=I.height,ot=r.COLOR_BUFFER_BIT,tt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=i.get(I),Mt=A.length>1;if(Mt)for(let Tt=0;Tt<A.length;Tt++)e.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<A.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),Mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let Xt=i.get(A[Tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,W,Q,0,0,W,Q,ot,r.NEAREST),l===!0&&(ut.length=0,k.length=0,ut.push(r.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(tt),k.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let Tt=0;Tt<A.length;Tt++){e.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let Xt=i.get(A[Tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ct(I){return Math.min(n.maxSamples,I.samples)}function yt(I){let A=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ft(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function zt(I,A){let W=I.colorSpace,Q=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Bs&&W!==gn&&(te.getTransfer(W)===ce?(Q!==ci||ot!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}function et(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=F,this.rebindTextures=vt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=yt}function bv(r,t){function e(i,n=gn){let s,a=te.getTransfer(n);if(i===hi)return r.UNSIGNED_BYTE;if(i===mh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===gh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===_d)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return r.BYTE;if(i===bd)return r.SHORT;if(i===fr)return r.UNSIGNED_SHORT;if(i===ph)return r.INT;if(i===Hn)return r.UNSIGNED_INT;if(i===Fi)return r.FLOAT;if(i===Te)return r.HALF_FLOAT;if(i===wd)return r.ALPHA;if(i===Sd)return r.RGB;if(i===ci)return r.RGBA;if(i===Td)return r.LUMINANCE;if(i===Ed)return r.LUMINANCE_ALPHA;if(i===_s)return r.DEPTH_COMPONENT;if(i===Mn)return r.DEPTH_STENCIL;if(i===Os)return r.RED;if(i===xh)return r.RED_INTEGER;if(i===Ad)return r.RG;if(i===vh)return r.RG_INTEGER;if(i===yh)return r.RGBA_INTEGER;if(i===bo||i===_o||i===wo||i===So)if(a===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===jl||i===Kl||i===Jl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===tc||i===ec)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ql||i===tc)return a===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ec)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===nc||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ic)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===gc||i===xc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===To)return a===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===vc||i===yc||i===Mc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===To)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Lc=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},de=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},_v={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new de;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ti,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qt({vertexShader:wv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ke(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends bn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new kc,g=e.getContextAttributes(),m=null,v=null,y=[],M=[],S=new lt,w=null,T=new _e;T.viewport=new re;let E=new _e;E.viewport=new re;let _=[T,E],b=new Lc,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=y[Y];return J===void 0&&(J=new cr,y[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=y[Y];return J===void 0&&(J=new cr,y[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=y[Y];return J===void 0&&(J=new cr,y[Y]=J),J.getHandSpace()};function L(Y){let J=M.indexOf(Y.inputSource);if(J===-1)return;let gt=y[J];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",O);for(let Y=0;Y<y.length;Y++){let J=M[Y];J!==null&&(M[Y]=null,y[Y].disconnect(J))}C=null,z=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,v=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",N),n.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),n.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,J),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Me(f.framebufferWidth,f.framebufferHeight,{format:ci,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,gt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?Mn:_s,gt=g.stencil?yn:Hn);let xt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(xt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Me(d.textureWidth,d.textureHeight,{format:ci,type:hi,depthTexture:new Is(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),_t.setContext(n),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Y){for(let J=0;J<Y.removed.length;J++){let gt=Y.removed[J],it=M.indexOf(gt);it>=0&&(M[it]=null,y[it].disconnect(gt))}for(let J=0;J<Y.added.length;J++){let gt=Y.added[J],it=M.indexOf(gt);if(it===-1){for(let St=0;St<y.length;St++)if(St>=M.length){M.push(gt),it=St;break}else if(M[St]===null){M[St]=gt,it=St;break}if(it===-1)break}let xt=y[it];xt&&xt.connect(gt)}}let U=new R,X=new R;function F(Y,J,gt){U.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(gt.matrixWorld);let it=U.distanceTo(X),xt=J.projectionMatrix.elements,St=gt.projectionMatrix.elements,vt=xt[14]/(xt[10]-1),Gt=xt[14]/(xt[10]+1),nt=(xt[9]+1)/xt[5],ut=(xt[9]-1)/xt[5],k=(xt[8]-1)/xt[0],pt=(St[8]+1)/St[0],ct=vt*k,yt=vt*pt,ft=it/(-k+pt),zt=ft*-k;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let et=vt+ft,I=Gt+ft,A=ct-zt,W=yt+(it-zt),Q=nt*Gt/I*et,ot=ut*Gt/I*et;Y.projectionMatrix.makePerspective(A,W,Q,ot,et,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function B(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let J=Y.near,gt=Y.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),b.near=E.near=T.near=J,b.far=E.far=T.far=gt,(C!==b.near||z!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,z=b.far),T.layers.mask=Y.layers.mask|2,E.layers.mask=Y.layers.mask|4,b.layers.mask=T.layers.mask|E.layers.mask;let it=Y.parent,xt=b.cameras;B(b,it);for(let St=0;St<xt.length;St++)B(xt[St],it);xt.length===2?F(b,T,E):b.projectionMatrix.copy(T.projectionMatrix),j(Y,b,it)};function j(Y,J,gt){gt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let rt=null;function st(Y,J){if(h=J.getViewerPose(c||a),p=J,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let it=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let St=0;St<gt.length;St++){let vt=gt[St],Gt=null;if(f!==null)Gt=f.getViewport(vt);else{let ut=u.getViewSubImage(d,vt);Gt=ut.viewport,St===0&&(t.setRenderTargetTextures(v,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(v))}let nt=_[St];nt===void 0&&(nt=new _e,nt.layers.enable(St),nt.viewport=new re,_[St]=nt),nt.matrix.fromArray(vt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(vt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),St===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(nt)}let xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")){let St=u.getDepthInformation(gt[0]);St&&St.isValid&&St.texture&&x.init(t,St,n.renderState)}}for(let gt=0;gt<y.length;gt++){let it=M[gt],xt=y[gt];it!==null&&xt!==void 0&&xt.update(it,J,c||a)}rt&&rt(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),p=null}let _t=new kd;_t.setAnimationLoop(st),this.setAnimationLoop=function(Y){rt=Y},this.dispose=function(){}}},Un=new We,Tv=new Rt;function Ev(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ld(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,Un.copy(M),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),g.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Un)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Av(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;i.uniformBlockBinding(v,M)}function c(v,y){let M=n[v.id];M===void 0&&(p(v),M=h(v),n[v.id]=M,v.addEventListener("dispose",g));let S=y.program;i.updateUBOMapping(v,S);let w=t.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let M=r.createBuffer(),S=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,S,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=n[v.id],M=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,T=M.length;w<T;w++){let E=Array.isArray(M[w])?M[w]:[M[w]];for(let _=0,b=E.length;_<b;_++){let C=E[_];if(f(C,w,_,S)===!0){let z=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],N=0;for(let O=0;O<L.length;O++){let U=L[O],X=x(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,z+N,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,M,S){let w=v.value,T=y+"_"+M;if(S[T]===void 0)return typeof w=="number"||typeof w=="boolean"?S[T]=w:S[T]=w.clone(),!0;{let E=S[T];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[T]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function p(v){let y=v.uniforms,M=0,S=16;for(let T=0,E=y.length;T<E;T++){let _=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,C=_.length;b<C;b++){let z=_[b],L=Array.isArray(z.value)?z.value:[z.value];for(let N=0,O=L.length;N<O;N++){let U=L[N],X=x(U),F=M%S,B=F%X.boundary,j=F+B;M+=B,j!==0&&S-j<X.storage&&(M+=S-j),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=X.storage}}}let w=M%S;return w>0&&(M+=S-w),v.__size=M,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function m(){for(let v in n)r.deleteBuffer(n[v]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var zs=class{constructor(t={}){let{canvas:e=R0(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=vn,this.toneMappingExposure=1;let M=this,S=!1,w=0,T=0,E=null,_=-1,b=null,C=new re,z=new re,L=null,N=new dt(0),O=0,U=e.width,X=e.height,F=1,B=null,j=null,rt=new re(0,0,U,X),st=new re(0,0,U,X),_t=!1,Y=new pr,J=!1,gt=!1,it=new Rt,xt=new Rt,St=new R,vt=new re,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ut(){return E===null?F:1}let k=i;function pt(D,V){return e.getContext(D,V)}try{let D={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oh}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Et,!1),k===null){let V="webgl2";if(k=pt(V,D),k===null)throw pt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ct,yt,ft,zt,et,I,A,W,Q,ot,tt,It,Mt,Tt,Xt,ht,Pt,Bt,Ht,Dt,Kt,Vt,ee,H;function bt(){ct=new Gg(k),ct.init(),Vt=new bv(k,ct),yt=new Ng(k,ct,t,Vt),ft=new vv(k,ct),yt.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),zt=new Xg(k),et=new rv,I=new Mv(k,ct,ft,et,yt,Vt,zt),A=new Og(M),W=new Vg(M),Q=new Q0(k),ee=new kg(k,Q),ot=new Wg(k,Q,zt,ee),tt=new $g(k,ot,Q,zt),Ht=new Yg(k,yt,I),ht=new Fg(et),It=new sv(M,A,W,ct,yt,ee,ht),Mt=new Ev(M,et),Tt=new av,Xt=new fv(ct),Bt=new Lg(M,A,W,ft,tt,f,l),Pt=new gv(M,tt,yt),H=new Av(k,zt,yt,ft),Dt=new Ug(k,ct,zt),Kt=new qg(k,ct,zt),zt.programs=It.programs,M.capabilities=yt,M.extensions=ct,M.properties=et,M.renderLists=Tt,M.shadowMap=Pt,M.state=ft,M.info=zt}bt();let K=new Uc(M,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let D=ct.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ct.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(D){D!==void 0&&(F=D,this.setSize(U,X,!1))},this.getSize=function(D){return D.set(U,X)},this.setSize=function(D,V,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=D,X=V,e.width=Math.floor(D*F),e.height=Math.floor(V*F),$===!0&&(e.style.width=D+"px",e.style.height=V+"px"),this.setViewport(0,0,D,V)},this.getDrawingBufferSize=function(D){return D.set(U*F,X*F).floor()},this.setDrawingBufferSize=function(D,V,$){U=D,X=V,F=$,e.width=Math.floor(D*$),e.height=Math.floor(V*$),this.setViewport(0,0,D,V)},this.getCurrentViewport=function(D){return D.copy(C)},this.getViewport=function(D){return D.copy(rt)},this.setViewport=function(D,V,$,Z){D.isVector4?rt.set(D.x,D.y,D.z,D.w):rt.set(D,V,$,Z),ft.viewport(C.copy(rt).multiplyScalar(F).round())},this.getScissor=function(D){return D.copy(st)},this.setScissor=function(D,V,$,Z){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,V,$,Z),ft.scissor(z.copy(st).multiplyScalar(F).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(D){ft.setScissorTest(_t=D)},this.setOpaqueSort=function(D){B=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(D=!0,V=!0,$=!0){let Z=0;if(D){let G=!1;if(E!==null){let mt=E.texture.format;G=mt===yh||mt===vh||mt===xh}if(G){let mt=E.texture.type,At=mt===hi||mt===Hn||mt===fr||mt===yn||mt===mh||mt===gh,Lt=Bt.getClearColor(),kt=Bt.getClearAlpha(),qt=Lt.r,$t=Lt.g,Ut=Lt.b;At?(p[0]=qt,p[1]=$t,p[2]=Ut,p[3]=kt,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=qt,x[1]=$t,x[2]=Ut,x[3]=kt,k.clearBufferiv(k.COLOR,0,x))}else Z|=k.COLOR_BUFFER_BIT}V&&(Z|=k.DEPTH_BUFFER_BIT),$&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Tt.dispose(),Xt.dispose(),et.dispose(),A.dispose(),W.dispose(),tt.dispose(),ee.dispose(),H.dispose(),It.dispose(),K.dispose(),K.removeEventListener("sessionstart",Kh),K.removeEventListener("sessionend",Jh),Pn.stop()};function at(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let D=zt.autoReset,V=Pt.enabled,$=Pt.autoUpdate,Z=Pt.needsUpdate,G=Pt.type;bt(),zt.autoReset=D,Pt.enabled=V,Pt.autoUpdate=$,Pt.needsUpdate=Z,Pt.type=G}function Et(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Yt(D){let V=D.target;V.removeEventListener("dispose",Yt),Se(V)}function Se(D){He(D),et.remove(D)}function He(D){let V=et.get(D).programs;V!==void 0&&(V.forEach(function($){It.releaseProgram($)}),D.isShaderMaterial&&It.releaseShaderCache(D))}this.renderBufferDirect=function(D,V,$,Z,G,mt){V===null&&(V=Gt);let At=G.isMesh&&G.matrixWorld.determinant()<0,Lt=kf(D,V,$,Z,G);ft.setMaterial(Z,At);let kt=$.index,qt=1;if(Z.wireframe===!0){if(kt=ot.getWireframeAttribute($),kt===void 0)return;qt=2}let $t=$.drawRange,Ut=$.attributes.position,ie=$t.start*qt,ge=($t.start+$t.count)*qt;mt!==null&&(ie=Math.max(ie,mt.start*qt),ge=Math.min(ge,(mt.start+mt.count)*qt)),kt!==null?(ie=Math.max(ie,0),ge=Math.min(ge,kt.count)):Ut!=null&&(ie=Math.max(ie,0),ge=Math.min(ge,Ut.count));let xe=ge-ie;if(xe<0||xe===1/0)return;ee.setup(G,Z,Lt,$,kt);let Qe,ae=Dt;if(kt!==null&&(Qe=Q.get(kt),ae=Kt,ae.setIndex(Qe)),G.isMesh)Z.wireframe===!0?(ft.setLineWidth(Z.wireframeLinewidth*ut()),ae.setMode(k.LINES)):ae.setMode(k.TRIANGLES);else if(G.isLine){let Ft=Z.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*ut()),G.isLineSegments?ae.setMode(k.LINES):G.isLineLoop?ae.setMode(k.LINE_LOOP):ae.setMode(k.LINE_STRIP)}else G.isPoints?ae.setMode(k.POINTS):G.isSprite&&ae.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ae.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ft=G._multiDrawStarts,Wi=G._multiDrawCounts,le=G._multiDrawCount,Ei=kt?Q.get(kt).bytesPerElement:1,ns=et.get(Z).currentProgram.getUniforms();for(let oi=0;oi<le;oi++)ns.setValue(k,"_gl_DrawID",oi),ae.render(Ft[oi]/Ei,Wi[oi])}else if(G.isInstancedMesh)ae.renderInstances(ie,xe,G.count);else if($.isInstancedBufferGeometry){let Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wi=Math.min($.instanceCount,Ft);ae.renderInstances(ie,xe,Wi)}else ae.render(ie,xe)};function he(D,V,$){D.transparent===!0&&D.side===Pe&&D.forceSinglePass===!1?(D.side=Fe,D.needsUpdate=!0,qr(D,V,$),D.side=Oi,D.needsUpdate=!0,qr(D,V,$),D.side=Pe):qr(D,V,$)}this.compile=function(D,V,$=null){$===null&&($=D),m=Xt.get($),m.init(V),y.push(m),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),D!==$&&D.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let Z=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let mt=G.material;if(mt)if(Array.isArray(mt))for(let At=0;At<mt.length;At++){let Lt=mt[At];he(Lt,$,G),Z.add(Lt)}else he(mt,$,G),Z.add(mt)}),y.pop(),m=null,Z},this.compileAsync=function(D,V,$=null){let Z=this.compile(D,V,$);return new Promise(G=>{function mt(){if(Z.forEach(function(At){et.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){G(D);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ti=null;function Gi(D){Ti&&Ti(D)}function Kh(){Pn.stop()}function Jh(){Pn.start()}let Pn=new kd;Pn.setAnimationLoop(Gi),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(D){Ti=D,K.setAnimationLoop(D),D===null?Pn.stop():Pn.start()},K.addEventListener("sessionstart",Kh),K.addEventListener("sessionend",Jh),this.render=function(D,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(V),V=K.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,V,E),m=Xt.get(D,y.length),m.init(V),y.push(m),xt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(xt),gt=this.localClippingEnabled,J=ht.init(this.clippingPlanes,gt),g=Tt.get(D,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){let mt=M.xr.getDepthSensingMesh();mt!==null&&nl(mt,V,-1/0,M.sortObjects)}nl(D,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(B,j),nt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,nt&&Bt.addToRenderList(g,D),this.info.render.frame++,J===!0&&ht.beginShadows();let $=m.state.shadowsArray;Pt.render($,D,V),J===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,G=g.transmissive;if(m.setupLights(),V.isArrayCamera){let mt=V.cameras;if(G.length>0)for(let At=0,Lt=mt.length;At<Lt;At++){let kt=mt[At];tu(Z,G,D,kt)}nt&&Bt.render(D);for(let At=0,Lt=mt.length;At<Lt;At++){let kt=mt[At];Qh(g,D,kt,kt.viewport)}}else G.length>0&&tu(Z,G,D,V),nt&&Bt.render(D),Qh(g,D,V);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),D.isScene===!0&&D.onAfterRender(M,D,V),ee.resetDefaultState(),_=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],J===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function nl(D,V,$,Z){if(D.visible===!1)return;if(D.layers.test(V.layers)){if(D.isGroup)$=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(V);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Y.intersectsSprite(D)){Z&&vt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(xt);let At=tt.update(D),Lt=D.material;Lt.visible&&g.push(D,At,Lt,$,vt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Y.intersectsObject(D))){let At=tt.update(D),Lt=D.material;if(Z&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),vt.copy(D.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),vt.copy(At.boundingSphere.center)),vt.applyMatrix4(D.matrixWorld).applyMatrix4(xt)),Array.isArray(Lt)){let kt=At.groups;for(let qt=0,$t=kt.length;qt<$t;qt++){let Ut=kt[qt],ie=Lt[Ut.materialIndex];ie&&ie.visible&&g.push(D,At,ie,$,vt.z,Ut)}}else Lt.visible&&g.push(D,At,Lt,$,vt.z,null)}}let mt=D.children;for(let At=0,Lt=mt.length;At<Lt;At++)nl(mt[At],V,$,Z)}function Qh(D,V,$,Z){let G=D.opaque,mt=D.transmissive,At=D.transparent;m.setupLightsView($),J===!0&&ht.setGlobalState(M.clippingPlanes,$),Z&&ft.viewport(C.copy(Z)),G.length>0&&Wr(G,V,$),mt.length>0&&Wr(mt,V,$),At.length>0&&Wr(At,V,$),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function tu(D,V,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Me(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Te:hi,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let mt=m.state.transmissionRenderTarget[Z.id],At=Z.viewport||C;mt.setSize(At.z,At.w);let Lt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(N),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),nt&&Bt.render($);let kt=M.toneMapping;M.toneMapping=vn;let qt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),J===!0&&ht.setGlobalState(M.clippingPlanes,Z),Wr(D,$,Z),I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,ie=V.length;Ut<ie;Ut++){let ge=V[Ut],xe=ge.object,Qe=ge.geometry,ae=ge.material,Ft=ge.group;if(ae.side===Pe&&xe.layers.test(Z.layers)){let Wi=ae.side;ae.side=Fe,ae.needsUpdate=!0,eu(xe,$,Z,Qe,ae,Ft),ae.side=Wi,ae.needsUpdate=!0,$t=!0}}$t===!0&&(I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt))}M.setRenderTarget(Lt),M.setClearColor(N,O),qt!==void 0&&(Z.viewport=qt),M.toneMapping=kt}function Wr(D,V,$){let Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,mt=D.length;G<mt;G++){let At=D[G],Lt=At.object,kt=At.geometry,qt=Z===null?At.material:Z,$t=At.group;Lt.layers.test($.layers)&&eu(Lt,V,$,kt,qt,$t)}}function eu(D,V,$,Z,G,mt){D.onBeforeRender(M,V,$,Z,G,mt),D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(M,V,$,Z,D,mt),G.transparent===!0&&G.side===Pe&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,M.renderBufferDirect($,V,Z,G,D,mt),G.side=Oi,G.needsUpdate=!0,M.renderBufferDirect($,V,Z,G,D,mt),G.side=Pe):M.renderBufferDirect($,V,Z,G,D,mt),D.onAfterRender(M,V,$,Z,G,mt)}function qr(D,V,$){V.isScene!==!0&&(V=Gt);let Z=et.get(D),G=m.state.lights,mt=m.state.shadowsArray,At=G.state.version,Lt=It.getParameters(D,G.state,mt,V,$),kt=It.getProgramCacheKey(Lt),qt=Z.programs;Z.environment=D.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(D.isMeshStandardMaterial?W:A).get(D.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&D.envMap===null?V.environmentRotation:D.envMapRotation,qt===void 0&&(D.addEventListener("dispose",Yt),qt=new Map,Z.programs=qt);let $t=qt.get(kt);if($t!==void 0){if(Z.currentProgram===$t&&Z.lightsStateVersion===At)return nu(D,Lt),$t}else Lt.uniforms=It.getUniforms(D),D.onBeforeCompile(Lt,M),$t=It.acquireProgram(Lt,kt),qt.set(kt,$t),Z.uniforms=Lt.uniforms;let Ut=Z.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),nu(D,Lt),Z.needsLights=Nf(D),Z.lightsStateVersion=At,Z.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=$t,Z.uniformsList=null,$t}function iu(D){if(D.uniformsList===null){let V=D.currentProgram.getUniforms();D.uniformsList=Ss.seqWithValue(V.seq,D.uniforms)}return D.uniformsList}function nu(D,V){let $=et.get(D);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function kf(D,V,$,Z,G){V.isScene!==!0&&(V=Gt),I.resetTextureUnits();let mt=V.fog,At=Z.isMeshStandardMaterial?V.environment:null,Lt=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Bs,kt=(Z.isMeshStandardMaterial?W:A).get(Z.envMap||At),qt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$t=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,ge=!!$.morphAttributes.color,xe=vn;Z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xe=M.toneMapping);let Qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ae=Qe!==void 0?Qe.length:0,Ft=et.get(Z),Wi=m.state.lights;if(J===!0&&(gt===!0||D!==b)){let mi=D===b&&Z.id===_;ht.setState(Z,D,mi)}let le=!1;Z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Wi.state.version||Ft.outputColorSpace!==Lt||G.isBatchedMesh&&Ft.batching===!1||!G.isBatchedMesh&&Ft.batching===!0||G.isBatchedMesh&&Ft.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ft.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ft.instancing===!1||!G.isInstancedMesh&&Ft.instancing===!0||G.isSkinnedMesh&&Ft.skinning===!1||!G.isSkinnedMesh&&Ft.skinning===!0||G.isInstancedMesh&&Ft.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ft.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ft.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ft.instancingMorph===!1&&G.morphTexture!==null||Ft.envMap!==kt||Z.fog===!0&&Ft.fog!==mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==qt||Ft.vertexTangents!==$t||Ft.morphTargets!==Ut||Ft.morphNormals!==ie||Ft.morphColors!==ge||Ft.toneMapping!==xe||Ft.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ft.__version=Z.version);let Ei=Ft.currentProgram;le===!0&&(Ei=qr(Z,V,G));let ns=!1,oi=!1,js=!1,ve=Ei.getUniforms(),Ui=Ft.uniforms;if(ft.useProgram(Ei.program)&&(ns=!0,oi=!0,js=!0),Z.id!==_&&(_=Z.id,oi=!0),ns||b!==D){ft.buffers.depth.getReversed()?(it.copy(D.projectionMatrix),D0(it),I0(it),ve.setValue(k,"projectionMatrix",it)):ve.setValue(k,"projectionMatrix",D.projectionMatrix),ve.setValue(k,"viewMatrix",D.matrixWorldInverse);let ln=ve.map.cameraPosition;ln!==void 0&&ln.setValue(k,St.setFromMatrixPosition(D.matrixWorld)),yt.logarithmicDepthBuffer&&ve.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,oi=!0,js=!0)}if(G.isSkinnedMesh){ve.setOptional(k,G,"bindMatrix"),ve.setOptional(k,G,"bindMatrixInverse");let mi=G.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),ve.setValue(k,"boneTexture",mi.boneTexture,I))}G.isBatchedMesh&&(ve.setOptional(k,G,"batchingTexture"),ve.setValue(k,"batchingTexture",G._matricesTexture,I),ve.setOptional(k,G,"batchingIdTexture"),ve.setValue(k,"batchingIdTexture",G._indirectTexture,I),ve.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&ve.setValue(k,"batchingColorTexture",G._colorsTexture,I));let Ks=$.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Ht.update(G,$,Ei),(oi||Ft.receiveShadow!==G.receiveShadow)&&(Ft.receiveShadow=G.receiveShadow,ve.setValue(k,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ui.envMap.value=kt,Ui.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Ui.envMapIntensity.value=V.environmentIntensity),oi&&(ve.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&Uf(Ui,js),mt&&Z.fog===!0&&Mt.refreshFogUniforms(Ui,mt),Mt.refreshMaterialUniforms(Ui,Z,F,X,m.state.transmissionRenderTarget[D.id]),Ss.upload(k,iu(Ft),Ui,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ss.upload(k,iu(Ft),Ui,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(k,"center",G.center),ve.setValue(k,"modelViewMatrix",G.modelViewMatrix),ve.setValue(k,"normalMatrix",G.normalMatrix),ve.setValue(k,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let mi=Z.uniformsGroups;for(let ln=0,cn=mi.length;ln<cn;ln++){let su=mi[ln];H.update(su,Ei),H.bind(su,Ei)}}return Ei}function Uf(D,V){D.ambientLightColor.needsUpdate=V,D.lightProbe.needsUpdate=V,D.directionalLights.needsUpdate=V,D.directionalLightShadows.needsUpdate=V,D.pointLights.needsUpdate=V,D.pointLightShadows.needsUpdate=V,D.spotLights.needsUpdate=V,D.spotLightShadows.needsUpdate=V,D.rectAreaLights.needsUpdate=V,D.hemisphereLights.needsUpdate=V}function Nf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(D,V,$){et.get(D.texture).__webglTexture=V,et.get(D.depthTexture).__webglTexture=$;let Z=et.get(D);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,V){let $=et.get(D);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(D,V=0,$=0){E=D,w=V,T=$;let Z=!0,G=null,mt=!1,At=!1;if(D){let kt=et.get(D);if(kt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(kt.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(kt.__hasExternalTextures)I.rebindTextures(D,et.get(D.texture).__webglTexture,et.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Ut=D.depthTexture;if(kt.__boundDepthTexture!==Ut){if(Ut!==null&&et.has(Ut)&&(D.width!==Ut.image.width||D.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}let qt=D.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let $t=et.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[V])?G=$t[V][$]:G=$t[V],mt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?G=et.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?G=$t[$]:G=$t,C.copy(D.viewport),z.copy(D.scissor),L=D.scissorTest}else C.copy(rt).multiplyScalar(F).floor(),z.copy(st).multiplyScalar(F).floor(),L=_t;if(ft.bindFramebuffer(k.FRAMEBUFFER,G)&&Z&&ft.drawBuffers(D,G),ft.viewport(C),ft.scissor(z),ft.setScissorTest(L),mt){let kt=et.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,kt.__webglTexture,$)}else if(At){let kt=et.get(D.texture),qt=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,kt.__webglTexture,$||0,qt)}_=-1},this.readRenderTargetPixels=function(D,V,$,Z,G,mt,At){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=et.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){ft.bindFramebuffer(k.FRAMEBUFFER,Lt);try{let kt=D.texture,qt=kt.format,$t=kt.type;if(!yt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=D.width-Z&&$>=0&&$<=D.height-G&&k.readPixels(V,$,Z,G,Vt.convert(qt),Vt.convert($t),mt)}finally{let kt=E!==null?et.get(E).__webglFramebuffer:null;ft.bindFramebuffer(k.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(D,V,$,Z,G,mt,At){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=et.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){let kt=D.texture,qt=kt.format,$t=kt.type;if(!yt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=D.width-Z&&$>=0&&$<=D.height-G){ft.bindFramebuffer(k.FRAMEBUFFER,Lt);let Ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ut),k.bufferData(k.PIXEL_PACK_BUFFER,mt.byteLength,k.STREAM_READ),k.readPixels(V,$,Z,G,Vt.convert(qt),Vt.convert($t),0);let ie=E!==null?et.get(E).__webglFramebuffer:null;ft.bindFramebuffer(k.FRAMEBUFFER,ie);let ge=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await P0(k,ge,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,mt),k.deleteBuffer(Ut),k.deleteSync(ge),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,V=null,$=0){D.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,D=arguments[1]);let Z=Math.pow(2,-$),G=Math.floor(D.image.width*Z),mt=Math.floor(D.image.height*Z),At=V!==null?V.x:0,Lt=V!==null?V.y:0;I.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,At,Lt,G,mt),ft.unbindTexture()},this.copyTextureToTexture=function(D,V,$=null,Z=null,G=0){D.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let mt,At,Lt,kt,qt,$t,Ut,ie,ge,xe=D.isCompressedTexture?D.mipmaps[G]:D.image;$!==null?(mt=$.max.x-$.min.x,At=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,kt=$.min.x,qt=$.min.y,$t=$.isBox3?$.min.z:0):(mt=xe.width,At=xe.height,Lt=xe.depth||1,kt=0,qt=0,$t=0),Z!==null?(Ut=Z.x,ie=Z.y,ge=Z.z):(Ut=0,ie=0,ge=0);let Qe=Vt.convert(V.format),ae=Vt.convert(V.type),Ft;V.isData3DTexture?(I.setTexture3D(V,0),Ft=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Ft=k.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Ft=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let Wi=k.getParameter(k.UNPACK_ROW_LENGTH),le=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ei=k.getParameter(k.UNPACK_SKIP_PIXELS),ns=k.getParameter(k.UNPACK_SKIP_ROWS),oi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,qt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$t);let js=D.isDataArrayTexture||D.isData3DTexture,ve=V.isDataArrayTexture||V.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Ui=et.get(D),Ks=et.get(V),mi=et.get(Ui.__renderTarget),ln=et.get(Ks.__renderTarget);ft.bindFramebuffer(k.READ_FRAMEBUFFER,mi.__webglFramebuffer),ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let cn=0;cn<Lt;cn++)js&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.get(D).__webglTexture,G,$t+cn),D.isDepthTexture?(ve&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.get(V).__webglTexture,G,ge+cn),k.blitFramebuffer(kt,qt,mt,At,Ut,ie,mt,At,k.DEPTH_BUFFER_BIT,k.NEAREST)):ve?k.copyTexSubImage3D(Ft,G,Ut,ie,ge+cn,kt,qt,mt,At):k.copyTexSubImage2D(Ft,G,Ut,ie,ge+cn,kt,qt,mt,At);ft.bindFramebuffer(k.READ_FRAMEBUFFER,null),ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ve?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Ft,G,Ut,ie,ge,mt,At,Lt,Qe,ae,xe.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Ft,G,Ut,ie,ge,mt,At,Lt,Qe,xe.data):k.texSubImage3D(Ft,G,Ut,ie,ge,mt,At,Lt,Qe,ae,xe):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,Ut,ie,mt,At,Qe,ae,xe.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,Ut,ie,xe.width,xe.height,Qe,xe.data):k.texSubImage2D(k.TEXTURE_2D,G,Ut,ie,mt,At,Qe,ae,xe);k.pixelStorei(k.UNPACK_ROW_LENGTH,Wi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,le),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ei),k.pixelStorei(k.UNPACK_SKIP_ROWS,ns),k.pixelStorei(k.UNPACK_SKIP_IMAGES,oi),G===0&&V.generateMipmaps&&k.generateMipmap(Ft),ft.unbindTexture()},this.copyTextureToTexture3D=function(D,V,$=null,Z=null,G=0){return D.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,D=arguments[2],V=arguments[3],G=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,V,$,Z,G)},this.initRenderTarget=function(D){et.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),ft.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,ft.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}},No=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Fo=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Hi=class extends ti{constructor(t=null,e=1,i=1,n,s,a,o,l,c=De,h=De,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class extends ue{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new Rt,rd=new Rt,po=[],od=new Ii,Cv=new Rt,ir=new Ot,nr=new _n,yi=class extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Cv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),od.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(od)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),nr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),t.ray.intersectsSphere(nr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,vs),rd.multiplyMatrices(i,vs),ir.matrixWorld=rd,ir.raycast(t,po);for(let a=0,o=po.length;a<o;a++){let l=po[a];l.instanceId=s,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(n*this.count),n,this.count,Os,Fi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gr=class extends nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ad=new Rt,Nc=new Do,mo=new _n,go=new R,Oo=class extends Oe{constructor(t=new fe,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(n),mo.radius+=s,t.ray.intersectsSphere(mo)===!1)return;ad.copy(n).invert(),Nc.copy(t.ray).applyMatrix4(ad);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);go.fromBufferAttribute(u,g),ld(go,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)go.fromBufferAttribute(u,p),ld(go,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ld(r,t,e,i,n,s,a){let o=Nc.distanceSqToPoint(r);if(o<e){let l=new R;Nc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vn=class extends ti{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new lt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,n=[],s=[],a=[],o=new R,l=new Rt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ne(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ne(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends Mi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fc=class extends xr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var xo=new R,Il=new Sh,zl=new Sh,Ll=new Sh,Oc=class extends Mi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(xo.subVectors(n[0],n[1]).add(n[0]),c=xo);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(xo.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),zl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),Ll.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ll.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Il.calc(l),zl.calc(l),Ll.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cd(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Rv(r,t){let e=1-r;return e*e*t}function Pv(r,t){return 2*(1-r)*r*t}function Dv(r,t){return r*r*t}function hr(r,t,e,i){return Rv(r,t)+Pv(r,e)+Dv(r,i)}function Iv(r,t){let e=1-r;return e*e*e*t}function zv(r,t){let e=1-r;return 3*e*e*r*t}function Lv(r,t){return 3*(1-r)*r*r*t}function kv(r,t){return r*r*r*t}function ur(r,t,e,i,n){return Iv(r,t)+zv(r,e)+Lv(r,i)+kv(r,n)}var Bo=class extends Mi{constructor(t=new lt,e=new lt,i=new lt,n=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new lt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,n.x,s.x,a.x,o.x),ur(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bc=class extends Mi{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,n.x,s.x,a.x,o.x),ur(t,n.y,s.y,a.y,o.y),ur(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Mi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends Mi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Mi{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(hr(t,n.x,s.x,a.x),hr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends Mi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(hr(t,n.x,s.x,a.x),hr(t,n.y,s.y,a.y),hr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(cd(o,l.x,c.x,h.x,u.x),cd(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new lt().fromArray(n))}return this}},Gc=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:Oc,CubicBezierCurve:Bo,CubicBezierCurve3:Bc,EllipseCurve:xr,LineCurve:Ho,LineCurve3:Hc,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Vc,SplineCurve:Go}),Wc=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Gc[n.type]().fromJSON(n))}return this}},Wo=class extends Wc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ho(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Vo(this.currentPoint.clone(),new lt(t,e),new lt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Bo(this.currentPoint.clone(),new lt(t,e),new lt(i,n),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Go(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new xr(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ls=class r extends fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new R,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wn=class r extends fe{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){let M=new R,S=new R,w=0,T=(e-t)/i;for(let E=0;E<=s;E++){let _=[],b=E/s,C=b*(e-t)+t;for(let z=0;z<=n;z++){let L=z/n,N=L*l+o,O=Math.sin(N),U=Math.cos(N);S.x=C*O,S.y=-b*i+g,S.z=C*U,u.push(S.x,S.y,S.z),M.set(O,T,U).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-b),_.push(p++)}x.push(_)}for(let E=0;E<n;E++)for(let _=0;_<s;_++){let b=x[_][E],C=x[_+1][E],z=x[_+1][E+1],L=x[_][E+1];(t>0||_!==0)&&(h.push(b,C,L),w+=3),(e>0||_!==s-1)&&(h.push(C,z,L),w+=3)}c.addGroup(m,w,0),m+=w}function y(M){let S=p,w=new lt,T=new R,E=0,_=M===!0?t:e,b=M===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let C=p;for(let z=0;z<=n;z++){let N=z/n*l+o,O=Math.cos(N),U=Math.sin(N);T.x=_*U,T.y=g*b,T.z=_*O,u.push(T.x,T.y,T.z),d.push(0,b,0),w.x=O*.5+.5,w.y=U*.5*b+.5,f.push(w.x,w.y),p++}for(let z=0;z<n;z++){let L=S+z,N=C+z;M===!0?h.push(N,N+1,L):h.push(N+1,N,L),E+=3}c.addGroup(m,E,M===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gn=class r extends wn{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qo=class r extends fe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new R,M=new R,S=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],M),f(e[w+2],S),l(y,M,S,v)}function l(v,y,M,S){let w=S+1,T=[];for(let E=0;E<=w;E++){T[E]=[];let _=v.clone().lerp(M,E/w),b=y.clone().lerp(M,E/w),C=w-E;for(let z=0;z<=C;z++)z===0&&E===w?T[E][z]=_:T[E][z]=_.clone().lerp(b,z/C)}for(let E=0;E<w;E++)for(let _=0;_<2*(w-E)-1;_++){let b=Math.floor(_/2);_%2===0?(d(T[E][b+1]),d(T[E+1][b]),d(T[E][b])):(d(T[E][b+1]),d(T[E+1][b+1]),d(T[E+1][b]))}}function c(v){let y=new R;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(v),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){let v=new R;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];let M=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(M,1-S)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){let y=a[v+0],M=a[v+2],S=a[v+4],w=Math.max(y,M,S),T=Math.min(y,M,S);w>.9&&T<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){let M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){let v=new R,y=new R,M=new R,S=new R,w=new lt,T=new lt,E=new lt;for(let _=0,b=0;_<s.length;_+=9,b+=6){v.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),w.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),E.set(a[b+4],a[b+5]),S.copy(v).add(y).add(M).divideScalar(3);let C=g(S);x(w,b+0,v,C),x(T,b+2,y,C),x(E,b+4,M,C)}}function x(v,y,M,S){S<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},Xo=class r extends qo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var vr=class extends Wo{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Wo().fromJSON(n))}return this}},Uv={triangulate:function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Bd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=Hv(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let p=e;p<n;p+=e)u=r[p],d=r[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return yr(s,a,e,o,l,f,0),a}};function Bd(r,t,e,i,n){let s,a;if(n===Jv(r,t,e,i)>0)for(s=t;s<e;s+=i)a=hd(s,r[s],r[s+1],a);else for(s=e-i;s>=t;s-=i)a=hd(s,r[s],r[s+1],a);return a&&aa(a,a.next)&&(br(a),a=a.next),a}function Wn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(aa(e,e.next)||we(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Xv(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Fv(r,i,n,s):Nv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),br(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Ov(Wn(r),t,e),yr(r,t,e,i,n,s,2)):a===2&&Bv(r,t,e,i,n,s):yr(Wn(r),t,e,i,n,s,1);break}}}function Nv(r){let t=r.prev,e=r,i=r.next;if(we(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&bs(n,o,s,l,a,c,p.x,p.y)&&we(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fv(r,t,e,i){let n=r.prev,s=r,a=r.next;if(we(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=qc(f,p,t,e,i),v=qc(x,g,t,e,i),y=r.prevZ,M=r.nextZ;for(;y&&y.z>=m&&M&&M.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==n&&y!==a&&bs(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&bs(o,h,l,u,c,d,M.x,M.y)&&we(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==n&&y!==a&&bs(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&bs(o,h,l,u,c,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ov(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!aa(n,s)&&Hd(n,i,i.next,s)&&Mr(n,s)&&Mr(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),br(i),br(i.next),i=r=s),i=i.next}while(i!==r);return Wn(i)}function Bv(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zv(a,o)){let l=Vd(a,o);a=Wn(a,a.next),l=Wn(l,l.next),yr(a,t,e,i,n,s,0),yr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Hv(r,t,e,i){let n=[],s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=Bd(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push($v(c));for(n.sort(Vv),s=0;s<n.length;s++)e=Gv(n[s],e);return e}function Vv(r,t){return r.x-t.x}function Gv(r,t){let e=Wv(r,t);if(!e)return t;let i=Vd(e,r);return Wn(i,i.next),Wn(e,e.next)}function Wv(r,t){let e=t,i=-1/0,n,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===s))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&bs(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),Mr(e,r)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&qv(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function qv(r,t){return we(r.prev,r,t.prev)<0&&we(t.next,r,r.next)<0}function Xv(r,t,e,i){let n=r;do n.z===0&&(n.z=qc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Yv(n)}function Yv(r){let t,e,i,n,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(a>1);return r}function qc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function $v(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function bs(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Zv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!jv(r,t)&&(Mr(r,t)&&Mr(t,r)&&Kv(r,t)&&(we(r.prev,r,t.prev)||we(r,t.prev,t))||aa(r,t)&&we(r.prev,r,r.next)>0&&we(t.prev,t,t.next)>0)}function we(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function aa(r,t){return r.x===t.x&&r.y===t.y}function Hd(r,t,e,i){let n=yo(we(r,t,e)),s=yo(we(r,t,i)),a=yo(we(e,i,r)),o=yo(we(e,i,t));return!!(n!==s&&a!==o||n===0&&vo(r,e,t)||s===0&&vo(r,i,t)||a===0&&vo(e,r,i)||o===0&&vo(e,t,i))}function vo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function yo(r){return r>0?1:r<0?-1:0}function jv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Hd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Mr(r,t){return we(r.prev,r,r.next)<0?we(r,t,r.next)>=0&&we(r,r.prev,t)>=0:we(r,t,r.prev)<0||we(r,r.next,t)<0}function Kv(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Vd(r,t){let e=new Xc(r.i,r.x,r.y),i=new Xc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function hd(r,t,e,i){let n=new Xc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function br(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Xc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jv(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var dr=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];ud(t),dd(i,t);let a=t.length;e.forEach(ud);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,dd(i,e[l]);let o=Uv.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ud(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function dd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Yo=class r extends fe{constructor(t=new vr([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Jt(n,3)),this.setAttribute("uv",new Jt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Qv,y,M=!1,S,w,T,E;m&&(y=m.getSpacedPoints(h),M=!0,d=!1,S=m.computeFrenetFrames(h,!1),w=new R,T=new R,E=new R),d||(g=0,f=0,p=0,x=0);let _=o.extractPoints(c),b=_.shape,C=_.holes;if(!dr.isClockWise(b)){b=b.reverse();for(let nt=0,ut=C.length;nt<ut;nt++){let k=C[nt];dr.isClockWise(k)&&(C[nt]=k.reverse())}}let L=dr.triangulateShape(b,C),N=b;for(let nt=0,ut=C.length;nt<ut;nt++){let k=C[nt];b=b.concat(k)}function O(nt,ut,k){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ut,k)}let U=b.length,X=L.length;function F(nt,ut,k){let pt,ct,yt,ft=nt.x-ut.x,zt=nt.y-ut.y,et=k.x-nt.x,I=k.y-nt.y,A=ft*ft+zt*zt,W=ft*I-zt*et;if(Math.abs(W)>Number.EPSILON){let Q=Math.sqrt(A),ot=Math.sqrt(et*et+I*I),tt=ut.x-zt/Q,It=ut.y+ft/Q,Mt=k.x-I/ot,Tt=k.y+et/ot,Xt=((Mt-tt)*I-(Tt-It)*et)/(ft*I-zt*et);pt=tt+ft*Xt-nt.x,ct=It+zt*Xt-nt.y;let ht=pt*pt+ct*ct;if(ht<=2)return new lt(pt,ct);yt=Math.sqrt(ht/2)}else{let Q=!1;ft>Number.EPSILON?et>Number.EPSILON&&(Q=!0):ft<-Number.EPSILON?et<-Number.EPSILON&&(Q=!0):Math.sign(zt)===Math.sign(I)&&(Q=!0),Q?(pt=-zt,ct=ft,yt=Math.sqrt(A)):(pt=ft,ct=zt,yt=Math.sqrt(A/2))}return new lt(pt/yt,ct/yt)}let B=[];for(let nt=0,ut=N.length,k=ut-1,pt=nt+1;nt<ut;nt++,k++,pt++)k===ut&&(k=0),pt===ut&&(pt=0),B[nt]=F(N[nt],N[k],N[pt]);let j=[],rt,st=B.concat();for(let nt=0,ut=C.length;nt<ut;nt++){let k=C[nt];rt=[];for(let pt=0,ct=k.length,yt=ct-1,ft=pt+1;pt<ct;pt++,yt++,ft++)yt===ct&&(yt=0),ft===ct&&(ft=0),rt[pt]=F(k[pt],k[yt],k[ft]);j.push(rt),st=st.concat(rt)}for(let nt=0;nt<g;nt++){let ut=nt/g,k=f*Math.cos(ut*Math.PI/2),pt=p*Math.sin(ut*Math.PI/2)+x;for(let ct=0,yt=N.length;ct<yt;ct++){let ft=O(N[ct],B[ct],pt);it(ft.x,ft.y,-k)}for(let ct=0,yt=C.length;ct<yt;ct++){let ft=C[ct];rt=j[ct];for(let zt=0,et=ft.length;zt<et;zt++){let I=O(ft[zt],rt[zt],pt);it(I.x,I.y,-k)}}}let _t=p+x;for(let nt=0;nt<U;nt++){let ut=d?O(b[nt],st[nt],_t):b[nt];M?(T.copy(S.normals[0]).multiplyScalar(ut.x),w.copy(S.binormals[0]).multiplyScalar(ut.y),E.copy(y[0]).add(T).add(w),it(E.x,E.y,E.z)):it(ut.x,ut.y,0)}for(let nt=1;nt<=h;nt++)for(let ut=0;ut<U;ut++){let k=d?O(b[ut],st[ut],_t):b[ut];M?(T.copy(S.normals[nt]).multiplyScalar(k.x),w.copy(S.binormals[nt]).multiplyScalar(k.y),E.copy(y[nt]).add(T).add(w),it(E.x,E.y,E.z)):it(k.x,k.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){let ut=nt/g,k=f*Math.cos(ut*Math.PI/2),pt=p*Math.sin(ut*Math.PI/2)+x;for(let ct=0,yt=N.length;ct<yt;ct++){let ft=O(N[ct],B[ct],pt);it(ft.x,ft.y,u+k)}for(let ct=0,yt=C.length;ct<yt;ct++){let ft=C[ct];rt=j[ct];for(let zt=0,et=ft.length;zt<et;zt++){let I=O(ft[zt],rt[zt],pt);M?it(I.x,I.y+y[h-1].y,y[h-1].x+k):it(I.x,I.y,u+k)}}}Y(),J();function Y(){let nt=n.length/3;if(d){let ut=0,k=U*ut;for(let pt=0;pt<X;pt++){let ct=L[pt];xt(ct[2]+k,ct[1]+k,ct[0]+k)}ut=h+g*2,k=U*ut;for(let pt=0;pt<X;pt++){let ct=L[pt];xt(ct[0]+k,ct[1]+k,ct[2]+k)}}else{for(let ut=0;ut<X;ut++){let k=L[ut];xt(k[2],k[1],k[0])}for(let ut=0;ut<X;ut++){let k=L[ut];xt(k[0]+U*h,k[1]+U*h,k[2]+U*h)}}i.addGroup(nt,n.length/3-nt,0)}function J(){let nt=n.length/3,ut=0;gt(N,ut),ut+=N.length;for(let k=0,pt=C.length;k<pt;k++){let ct=C[k];gt(ct,ut),ut+=ct.length}i.addGroup(nt,n.length/3-nt,1)}function gt(nt,ut){let k=nt.length;for(;--k>=0;){let pt=k,ct=k-1;ct<0&&(ct=nt.length-1);for(let yt=0,ft=h+g*2;yt<ft;yt++){let zt=U*yt,et=U*(yt+1),I=ut+pt+zt,A=ut+ct+zt,W=ut+ct+et,Q=ut+pt+et;St(I,A,W,Q)}}}function it(nt,ut,k){l.push(nt),l.push(ut),l.push(k)}function xt(nt,ut,k){vt(nt),vt(ut),vt(k);let pt=n.length/3,ct=v.generateTopUV(i,n,pt-3,pt-2,pt-1);Gt(ct[0]),Gt(ct[1]),Gt(ct[2])}function St(nt,ut,k,pt){vt(nt),vt(ut),vt(pt),vt(ut),vt(k),vt(pt);let ct=n.length/3,yt=v.generateSideWallUV(i,n,ct-6,ct-3,ct-2,ct-1);Gt(yt[0]),Gt(yt[1]),Gt(yt[3]),Gt(yt[1]),Gt(yt[2]),Gt(yt[3])}function vt(nt){n.push(l[nt*3+0]),n.push(l[nt*3+1]),n.push(l[nt*3+2])}function Gt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return t1(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Gc[n.type]().fromJSON(n)),new r(i,t.options)}},Qv={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new lt(s,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(d,1-p),new lt(x,1-m)]:[new lt(o,1-l),new lt(h,1-u),new lt(f,1-p),new lt(g,1-m)]}};function t1(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $o=class r extends qo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var ks=class r extends fe{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new R,p=new lt;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let v=m+g,y=v,M=v+i+1,S=v+i+2,w=v+1;o.push(y,M,w),o.push(M,S,w)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zo=class r extends fe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],y=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){let w=S/e;u.x=-t*Math.cos(n+w*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(n+w*s)*Math.sin(a+y*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+M,1-y),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let y=h[m][v+1],M=h[m][v],S=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(y,M,w),(m!==i-1||l<Math.PI)&&f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jo=class extends Qt{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},pe=class extends nn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ko=class extends nn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function Mo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function e1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Us=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Us{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case cu:s=t,o=2*e-i;break;case hu:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:a=t,l=2*i-e;break;case hu:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+v*a[c+S]+y*a[l+S]+M*a[u+S];return s}},$c=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Zc=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Li=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mo(e,this.TimeBufferType),this.values=Mo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Mo(t.times,Array),values:Mo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Eo:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&e1(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===rl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=bc;var qn=class extends Li{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Eo;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Li{};jc.prototype.ValueTypeName="color";var Kc=class extends Li{};Kc.prototype.ValueTypeName="number";var Jc=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ie.slerpFlat(s,0,a,c-o,a,c,l);return s}},Jo=class extends Li{InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Li{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Eo;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Li{};Qc.prototype.ValueTypeName="vector";var th=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},i1=new th,eh=class{constructor(t){this.manager=t!==void 0?t:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sn=class extends Ns{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},kl=new Rt,fd=new R,pd=new R,_r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ih=class extends _r{constructor(){super(new _e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Cs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Qo=class extends Ns{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},md=new Rt,sr=new R,Ul=new R,nh=class extends _r{constructor(){super(new _e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),i.position.copy(sr),Ul.copy(i.position),Ul.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ul),i.updateMatrixWorld(),n.makeTranslation(-sr.x,-sr.y,-sr.z),md.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md)}},ta=class extends Ns{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},sh=class extends _r{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bi=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wr=class extends fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ea=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gd(){return performance.now()}var Th="\\[\\]\\.:\\/",n1=new RegExp("["+Th+"]","g"),Eh="[^"+Th+"]",s1="[^"+Th.replace("\\.","")+"]",r1=/((?:WC+[\/:])*)/.source.replace("WC",Eh),o1=/(WCOD+)?/.source.replace("WCOD",s1),a1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),l1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),c1=new RegExp("^"+r1+o1+a1+l1+"$"),h1=["material","materials","bones","map"],rh=class{constructor(t,e,i){let n=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ye=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n1,"")}static parseTrackName(t){let e=c1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);h1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=rh;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);var Gd="fireline.settings.v1",Vs={low:{renderScale:.75,shadows:"off",ssao:!1,bloom:!1,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!1,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!1,grass:"off",treeWind:!1,waterReflections:!1,waterWaves:!0,particles:"low",decals:!0,debris:!1,viewDistance:500},medium:{renderScale:1,shadows:"medium",ssao:!1,bloom:!0,dof:!1,motionBlur:!1,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!1,antialias:"fxaa",fog:!0,atmosphere:!0,ibl:!0,grass:"low",treeWind:!0,waterReflections:!1,waterWaves:!0,particles:"medium",decals:!0,debris:!0,viewDistance:700},high:{renderScale:1,shadows:"high",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"medium",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:900},ultra:{renderScale:1,shadows:"ultra",ssao:!0,bloom:!0,dof:!0,motionBlur:!0,colorGrading:!0,filmGrain:!0,vignette:!0,chromatic:!0,antialias:"msaa",fog:!0,atmosphere:!0,ibl:!0,grass:"high",treeWind:!0,waterReflections:!0,waterWaves:!0,particles:"high",decals:!0,debris:!0,viewDistance:1200}},u1=Object.assign({preset:"high",fov:95,sensitivity:1,adsSensitivity:.85,invertY:!1,volume:.8,musicVolume:.5,showFps:!0,screenShake:!0,headBob:!0,difficulty:"veteran",crosshair:!0,nameTags:!0,enemyOutline:!0,aimAssist:"low",mouseSmoothing:0,keyLookSpeed:140,autoSprint:!1,semiAutoRepeat:!1,trackpadMode:!1,crouchMode:"toggle",adsMode:"hold",leanMode:"hold",sprintMode:"hold",scoreboardMode:"hold",mapMode:"hold",hitmarkerSound:!0},Vs.high),Wd=[{group:"Display"},{key:"preset",label:"Quality preset",type:"select",options:["low","medium","high","ultra","custom"]},{key:"renderScale",label:"Render scale",type:"range",min:.5,max:1.5,step:.05},{key:"fov",label:"Field of view (horizontal)",type:"range",min:70,max:115,step:1},{key:"viewDistance",label:"View distance (m)",type:"range",min:300,max:1500,step:50},{key:"antialias",label:"Anti-aliasing",type:"select",options:["off","fxaa","msaa"]},{key:"showFps",label:"Show FPS",type:"bool"},{group:"Lighting"},{key:"shadows",label:"Shadows",type:"select",options:["off","low","medium","high","ultra"],hint:"high/ultra use cascaded shadow maps"},{key:"ssao",label:"Ambient occlusion (GTAO)",type:"bool"},{key:"ibl",label:"Image-based lighting",type:"bool"},{key:"atmosphere",label:"Atmospheric sky",type:"bool"},{key:"fog",label:"Fog / aerial haze",type:"bool"},{group:"Post-processing"},{key:"bloom",label:"Bloom",type:"bool"},{key:"dof",label:"Depth of field (ADS / menus)",type:"bool"},{key:"motionBlur",label:"Motion blur",type:"bool"},{key:"colorGrading",label:"Color grading",type:"bool"},{key:"filmGrain",label:"Film grain",type:"bool"},{key:"vignette",label:"Vignette",type:"bool"},{key:"chromatic",label:"Chromatic aberration",type:"bool"},{group:"World"},{key:"grass",label:"Grass",type:"select",options:["off","low","medium","high"]},{key:"treeWind",label:"Wind sway (trees & grass)",type:"bool"},{key:"waterReflections",label:"Water reflections",type:"bool"},{key:"waterWaves",label:"Water waves & foam",type:"bool"},{group:"Effects"},{key:"particles",label:"Particle quality",type:"select",options:["low","medium","high"]},{key:"decals",label:"Decals (bullet holes, scorch)",type:"bool"},{key:"debris",label:"Destruction debris physics",type:"bool"},{key:"screenShake",label:"Screen shake",type:"bool"},{key:"headBob",label:"Head bob",type:"bool"},{group:"Gameplay"},{key:"difficulty",label:"Bot difficulty",type:"select",options:["recruit","regular","veteran","elite"]},{key:"crosshair",label:"Crosshair",type:"bool"},{key:"nameTags",label:"Friendly name tags",type:"bool"},{key:"enemyOutline",label:"Red outline on visible enemies",type:"bool"},{group:"Controls & audio"},{group:"Trackpad & accessibility"},{key:"trackpadMode",label:"Trackpad mode (applies the options below)",type:"bool",hint:"aim assist high, toggle aim/crouch/lean/sprint, smoothing, auto-sprint, hold-to-fire"},{key:"aimAssist",label:"Aim assist",type:"select",options:["off","low","medium","high"],hint:"slows and nudges your aim onto enemies you can see"},{key:"mouseSmoothing",label:"Look smoothing",type:"range",min:0,max:.8,step:.05},{key:"keyLookSpeed",label:"Arrow-key look speed (\xB0/s)",type:"range",min:40,max:360,step:10},{key:"autoSprint",label:"Auto-sprint when moving forward",type:"bool"},{key:"semiAutoRepeat",label:"Hold to keep firing semi-auto weapons",type:"bool"},{group:"Mouse & keys"},{key:"sensitivity",label:"Mouse sensitivity",type:"range",min:.1,max:3,step:.05},{key:"adsSensitivity",label:"ADS sensitivity",type:"range",min:.2,max:1.5,step:.05},{key:"invertY",label:"Invert Y",type:"bool"},{key:"crouchMode",label:"Crouch key",type:"select",options:["toggle","hold"]},{key:"adsMode",label:"Aim down sights",type:"select",options:["hold","toggle"]},{key:"leanMode",label:"Lean keys",type:"select",options:["hold","toggle"]},{key:"sprintMode",label:"Sprint key",type:"select",options:["hold","toggle"]},{key:"scoreboardMode",label:"Scoreboard key",type:"select",options:["hold","toggle"]},{key:"mapMode",label:"Map key",type:"select",options:["hold","toggle"]},{key:"hitmarkerSound",label:"Hitmarker sound",type:"bool"},{key:"volume",label:"Master volume",type:"range",min:0,max:1,step:.05}],Ah=class{constructor(){this.values=Object.assign({},u1),this.listeners=[];try{let t=localStorage.getItem(Gd);t&&Object.assign(this.values,JSON.parse(t))}catch{}}get(t){return this.values[t]}set(t,e){this.values[t]=e,t==="preset"&&Vs[e]&&Object.assign(this.values,Vs[e]),t==="trackpadMode"&&e?Object.assign(this.values,{aimAssist:"high",adsMode:"toggle",crouchMode:"toggle",leanMode:"toggle",sprintMode:"toggle",mouseSmoothing:.35,autoSprint:!0,semiAutoRepeat:!0,sensitivity:Math.max(this.values.sensitivity,1.3)}):t in Vs.high&&t!=="preset"&&(this.values.preset="custom"),this.save();for(let i of this.listeners)i(t,e)}onChange(t){this.listeners.push(t)}save(){try{localStorage.setItem(Gd,JSON.stringify(this.values))}catch{}}},la=new Ah;var ca=class r{constructor(){this.ctx=null,this.buffers={},this.voices=0,this.volume=.8,this.listener={x:0,y:0,z:0,fx:0,fz:-1},this.loops={}}unlock(){if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e}catch{this.ctx=null;return}let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.volume,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.25,this.master.connect(this.comp),this.comp.connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(2.6,2.2),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.32,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.generate()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}makeImpulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let l=0;l<n;l++){let c=l/n;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<400?l/400:1)}}return s}buf(t,e){let i=this.ctx,n=i.sampleRate,s=Math.max(1,Math.floor(n*t)),a=i.createBuffer(1,s,n),o=a.getChannelData(0);e(o,n,s);let l=0;for(let c=0;c<s;c++)l=Math.max(l,Math.abs(o[c]));if(l>0)for(let c=0;c<s;c++)o[c]/=l;return a}static lp(t,e){let i=0;for(let n=0;n<t.length;n++)i+=e*(t[n]-i),t[n]=i}static hp(t,e){let i=0,n=0;for(let s=0;s<t.length;s++)i=e*(i+t[s]-n),n=t[s],t[s]=i}gun(t,e,i,n,s,a){return this.buf(t,(o,l,c)=>{let h=new Float32Array(c);for(let u=0;u<c;u++)h[u]=Math.random()*2-1;r.lp(h,a);for(let u=0;u<c;u++){let d=u/l,f=Math.exp(-d*e)*.8+Math.exp(-d*s)*.25,p=Math.exp(-d*300)*i*(Math.random()*2-1),x=Math.sin(2*Math.PI*n*d*(1-d*2))*Math.exp(-d*28)*.9;o[u]=h[u]*f*2.2+p+x}})}generate(){let t=this.buffers;t.rifle=this.gun(.9,30,1,85,5,.45),t.carbine=this.gun(.8,34,1,95,6,.5),t.smg=this.gun(.55,48,.8,120,9,.55),t.pistol=this.gun(.5,45,.9,140,9,.6),t.lmg=this.gun(1,26,1.1,70,4,.4),t.sniper=this.gun(1.8,16,1.3,55,2.2,.35),t.dmr=this.gun(1.3,22,1.2,65,3,.38),t.shotgun=this.gun(1.1,18,.9,60,3.5,.3),t.suppressed=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*45)*.6+Math.sin(2*Math.PI*180*u)*Math.exp(-u*60)*.5}r.lp(o,.25)}),t.far=this.buf(1.6,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*14)+Math.exp(-u*3)*.3)}r.lp(o,.06),r.lp(o,.1)}),t.explosion=this.buf(3.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*3.2)+Math.exp(-u*18)*1.5)+Math.sin(2*Math.PI*(55-u*12)*u)*Math.exp(-u*4)*1.2}r.lp(o,.08),r.lp(o,.18)}),t.explosionFar=this.buf(3.5,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*2.2)+Math.sin(2*Math.PI*40*u)*Math.exp(-u*3)}r.lp(o,.025),r.lp(o,.05)});let e=o=>this.buf(.12,(l,c,h)=>{for(let u=0;u<h;u++){let d=u/c;l[u]=(Math.random()*2-1)*Math.exp(-d*(o?70:45))*(d<.004?d/.004:1)}r.lp(l,o?.5:.18)});t.stepGrass=e(!1),t.stepHard=e(!0),t.stepWater=this.buf(.3,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*14)*(.5+.5*Math.sin(u*300))}r.lp(o,.3)});let i=(o,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.sin(2*Math.PI*o*p)*.6+(Math.random()*2-1)*.5)*Math.exp(-p*c)}});t.magOut=i(900,.15,40),t.magIn=i(1300,.12,55),t.bolt=this.buf(.3,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=u<.12?Math.exp(-u*60):Math.exp(-(u-.15)*60)*(u>.15?1:0);o[h]=(Math.sin(2*Math.PI*1500*u)*.5+(Math.random()*2-1)*.6)*d}}),t.dry=i(2400,.06,120),t.pin=i(3e3,.18,30),t.switch=i(700,.1,50),t.hit=this.buf(.07,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*2200*u)*Math.exp(-u*70)}}),t.headshot=this.buf(.35,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.sin(2*Math.PI*1760*u)+Math.sin(2*Math.PI*2640*u)*.5)*Math.exp(-u*12)}}),t.kill=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*(900+u*1200)*u)*Math.exp(-u*14)+(Math.random()*2-1)*Math.exp(-u*60)*.3}}),t.hurt=this.buf(.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=Math.sin(2*Math.PI*(120-u*200)*u)*Math.exp(-u*18)+(Math.random()*2-1)*Math.exp(-u*40)*.4}r.lp(o,.3)}),t.whiz=this.buf(.35,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.sin(Math.PI*u/.35);o[h]=(Math.random()*2-1)*d*d}r.hp(o,.92),r.lp(o,.4)}),t.crack=this.buf(.09,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*90)+(u<.002?1:0)}r.hp(o,.8)});let n=(o,l,c)=>this.buf(.25,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*Math.exp(-p*l)+(c?Math.sin(2*Math.PI*c*p)*Math.exp(-p*20)*.6:0)}r.lp(h,o)});t.impactDirt=n(.15,50,0),t.impactHard=n(.55,70,0),t.impactMetal=n(.7,40,2900),t.impactWood=n(.3,45,420),t.impactFlesh=n(.12,35,0),t.impactWater=this.buf(.4,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.exp(-u*12)*(.6+.4*Math.sin(u*900))}r.lp(o,.25)});let s=(o,l,c)=>this.buf(l,(h,u,d)=>{for(let f=0;f<d;f++){let p=f/u;h[f]=(Math.random()*2-1)*(Math.exp(-p*6)*(.5+Math.random()*.5))+(c?Math.sin(2*Math.PI*c*p*(1+p))*Math.exp(-p*5)*.4:0)}r.lp(h,o)});t.breakWood=s(.25,.9,300),t.breakStone=s(.12,1.4,0),t.breakMetal=s(.5,1.2,1200);let a=(o,l)=>this.buf(l,(c,h,u)=>{for(let d=0;d<u;d++){let f=d/h,p=Math.min(o.length-1,Math.floor(f/l*o.length));c[d]=Math.sin(2*Math.PI*o[p]*f)*Math.min(1,(l-f)*10)*Math.min(1,f*200)*.6}});t.capture=a([660,880,1320],.5),t.lost=a([880,660,440],.5),t.beep=a([1200],.12),t.ui=a([900],.05),t.deploy=a([440,660],.3),t.heartbeat=this.buf(.8,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l,d=Math.exp(-((u-.05)**2)/4e-4),f=Math.exp(-((u-.28)**2)/4e-4)*.7;o[h]=Math.sin(2*Math.PI*55*u)*(d+f)}}),t.bandage=this.buf(.6,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(.4+.6*Math.abs(Math.sin(u*40)))*Math.exp(-u*3)}r.hp(o,.7)}),t.throw=this.buf(.25,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*Math.sin(Math.PI*u/.25)}r.lp(o,.2)}),t.bounce=n(.4,60,1800),t.rocket=this.buf(1.2,(o,l,c)=>{for(let h=0;h<c;h++){let u=h/l;o[h]=(Math.random()*2-1)*(Math.exp(-u*25)*1.5+Math.exp(-u*2)*.5)}r.lp(o,.2)}),t.wind=this.buf(6,(o,l,c)=>{let h=0;for(let d=0;d<c;d++){h=(h+.02*(Math.random()*2-1))/1.02;let f=d/l;o[d]=h*(.6+.4*Math.sin(f*.9)*Math.sin(f*.37+1))}let u=Math.floor(l*.3);for(let d=0;d<u;d++){let f=d/u;o[d]=o[d]*f+o[c-u+d]*(1-f)}}),t.birds=this.buf(8,(o,l,c)=>{for(let h=0;h<14;h++){let u=Math.random()*7.2,d=2500+Math.random()*2500,f=2+Math.floor(Math.random()*4);for(let p=0;p<f;p++){let x=Math.floor((u+p*.13)*l),g=Math.floor(.08*l);for(let m=0;m<g&&x+m<c;m++){let v=m/l;o[x+m]+=Math.sin(2*Math.PI*(d+Math.sin(v*90)*600)*v)*Math.sin(Math.PI*m/g)*.3}}}})}setListener(t,e,i,n,s){let a=this.listener;a.x=t,a.y=e,a.z=i;let o=Math.hypot(n,s)||1;a.fx=n/o,a.fz=s/o}_out(t,e,i,n,s){let a=this.ctx,o=a.createGain();o.gain.value=t;let l=o;if(i<19e3){let h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=i,o.connect(h),l=h}let c=l;if(a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=e,l.connect(h),c=h}if(c.connect(this.master),n>0){let h=a.createGain();h.gain.value=n,c.connect(h),h.connect(this.reverb)}return o}play2d(t,e={}){if(!this.ctx||!this.buffers[t]||this.voices>60)return;let i=this.ctx.createBufferSource();i.buffer=this.buffers[t],i.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let n=this._out(e.vol??1,e.pan||0,e.cutoff||2e4,e.reverb??.05);return i.connect(n),this.voices++,i.onended=()=>{this.voices--;try{n.disconnect()}catch{}},i.start(this.ctx.currentTime+(e.delay||0)),i}play3d(t,e,i,n,s={}){if(!this.ctx)return;let a=this.listener,o=e-a.x,l=i-a.y,c=n-a.z,h=Math.sqrt(o*o+l*l+c*c),u=s.maxDist||120;if(h>u)return;let d=s.ref||6,f=(s.vol??1)*d/(d+Math.max(0,h-d)*(s.rolloff||1));if(f*=1-Math.pow(h/u,3),f<.004||this.voices>48&&f<.15)return;let p=-a.fz,x=a.fx,g=h>.5?Math.max(-1,Math.min(1,(o*p+c*x)/Math.max(1,Math.hypot(o,c))*.85)):0,m=s.occluded?Math.min(2500,2e4/(1+h*.02)):2e4/(1+h*.012),v=h>60?h/343:0;this.play2d(t,{vol:f,pan:g,cutoff:m,rate:s.rate,vary:s.vary??.08,reverb:(s.reverb??.18)*Math.min(1,.4+h/80),delay:v})}gunshot(t,e,i,n,s,a){if(!this.ctx)return;if(s){this.play3d("suppressed",e,i,n,{vol:a?.55:.6,maxDist:60,ref:4});return}if(a){this.play2d(t,{vol:.62,vary:.06,reverb:.28});return}let o=this.listener,l=Math.hypot(e-o.x,i-o.y,n-o.z);l<90&&this.play3d(t,e,i,n,{vol:.95,maxDist:160,ref:10,rolloff:.8}),l>40&&this.play3d("far",e,i,n,{vol:.55*Math.min(1,(l-40)/60),maxDist:900,ref:60,rolloff:.5,reverb:.5})}explosion(t,e,i){if(!this.ctx)return;let n=this.listener;Math.hypot(t-n.x,e-n.y,i-n.z)<150&&this.play3d("explosion",t,e,i,{vol:1.2,maxDist:250,ref:14,rolloff:.7,reverb:.4}),this.play3d("explosionFar",t,e,i,{vol:.9,maxDist:1200,ref:80,rolloff:.5,reverb:.6})}startAmbience(t,e){if(!this.ctx)return;this.stopAmbience();let i=(n,s)=>{let a=this.ctx.createBufferSource();a.buffer=this.buffers[n],a.loop=!0;let o=this.ctx.createGain();return o.gain.value=s,a.connect(o),o.connect(this.master),a.start(),{src:a,g:o}};this.loops.wind=i("wind",t==="arid"?.22:.14),!e&&t!=="arid"&&(this.loops.birds=i("birds",.06))}stopAmbience(){for(let t in this.loops)try{this.loops[t].src.stop()}catch{}this.loops={}}};var ha=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,buttons:0,pressed:new Set,released:new Set,wheel:0},this.locked=!1,this.enabled=!0,this.listeners=[];let e=(i,n,s,a)=>{i.addEventListener(n,s,a),this.listeners.push([i,n,s,a])};e(window,"keydown",i=>{this.enabled&&((["Tab","Space","KeyF","ControlLeft","AltLeft"].includes(i.code)||i.ctrlKey&&i.code==="KeyW")&&i.preventDefault(),this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code))}),e(window,"keyup",i=>{this.keys.delete(i.code),this.released.add(i.code)}),e(window,"blur",()=>{this.keys.clear(),this.mouse.buttons=0}),e(t,"mousedown",i=>{this.enabled&&(this.mouse.buttons|=1<<i.button,this.mouse.pressed.add(i.button),i.preventDefault())}),e(window,"mouseup",i=>{this.mouse.buttons&=~(1<<i.button),this.mouse.released.add(i.button)}),e(window,"mousemove",i=>{this.enabled&&(this.locked||this.allowUnlocked)&&(this.mouse.dx+=i.movementX||0,this.mouse.dy+=i.movementY||0)}),e(t,"wheel",i=>{this.mouse.wheel+=Math.sign(i.deltaY),i.preventDefault()},{passive:!1}),e(t,"contextmenu",i=>i.preventDefault()),e(document,"pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange&&this.onLockChange(this.locked)}),e(document,"pointerlockerror",()=>{this.locked=!1}),this.allowUnlocked=!1}lock(){try{let t=this.canvas.requestPointerLock&&this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}isDown(t){return t?t.startsWith("Mouse")?this.btn(Number(t.slice(5))):this.keys.has(t):!1}isHit(t){return t?t.startsWith("Mouse")?this.btnHit(Number(t.slice(5))):this.pressed.has(t):!1}isReleased(t){return t?t.startsWith("Mouse")?this.mouse.released.has(Number(t.slice(5))):this.released.has(t):!1}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}btn(t){return(this.mouse.buttons&1<<t)!==0}btnHit(t){return this.mouse.pressed.has(t)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.pressed.clear(),this.mouse.released.clear(),this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0}dispose(){for(let[t,e,i,n]of this.listeners)t.removeEventListener(e,i,n)}};var Nt=(r,t,e)=>r<t?t:r>e?e:r,jt=(r,t,e)=>r+(t-r)*e,d1=(r,t,e)=>Nt((e-r)/(t-r),0,1),oe=(r,t,e)=>{let i=d1(r,t,e);return i*i*(3-2*i)},ei=(r,t,e,i)=>jt(r,t,1-Math.exp(-e*i)),q=(r=0,t=1)=>r+Math.random()*(t-r);var ne=Math.PI/180,qd=Math.PI*2;function _i(r){for(;r>Math.PI;)r-=qd;for(;r<-Math.PI;)r+=qd;return r}function Sr(r,t,e){let i=_i(t-r);return Math.abs(i)<=e?t:r+Math.sign(i)*e}function qe(r){let t=r>>>0,e=()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+e()*(n-i),e.int=(i,n)=>Math.floor(i+e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e}function ki(r=1){let t=qe(r),e=new Uint8Array(512),i=new Uint8Array(256);for(let l=0;l<256;l++)i[l]=l;for(let l=255;l>0;l--){let c=Math.floor(t()*(l+1)),h=i[l];i[l]=i[c],i[c]=h}for(let l=0;l<512;l++)e[l]=i[l&255];let n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],s=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;function o(l,c){let h=(l+c)*s,u=Math.floor(l+h),d=Math.floor(c+h),f=(u+d)*a,p=l-(u-f),x=c-(d-f),g=p>x?1:0,m=p>x?0:1,v=p-g+a,y=x-m+a,M=p-1+2*a,S=x-1+2*a,w=u&255,T=d&255,E=0,_=0,b=0,C=.5-p*p-x*x;if(C>0){let N=n[e[w+e[T]]&7];C*=C,E=C*C*(N[0]*p+N[1]*x)}let z=.5-v*v-y*y;if(z>0){let N=n[e[w+g+e[T+m]]&7];z*=z,_=z*z*(N[0]*v+N[1]*y)}let L=.5-M*M-S*S;if(L>0){let N=n[e[w+1+e[T+1]]&7];L*=L,b=L*L*(N[0]*M+N[1]*S)}return 70*(E+_+b)}return o.fbm=(l,c,h=4,u=2,d=.5)=>{let f=1,p=1,x=0,g=0;for(let m=0;m<h;m++)x+=f*o(l*p,c*p),g+=f,f*=d,p*=u;return x/g},o.ridge=(l,c,h=4)=>{let u=1,d=1,f=0,p=0;for(let x=0;x<h;x++)f+=u*(1-Math.abs(o(l*d,c*d))),p+=u,u*=.5,d*=2;return f/p},o}function Gs(r,t,e,i,n,s){let a=n-e,o=s-i,l=r-e,c=t-i,h=a*a+o*o,u=h>0?(l*a+c*o)/h:0;u=Nt(u,0,1);let d=r-(e+a*u),f=t-(i+o*u);return d*d+f*f}function Ch(r,t,e,i,n,s,a,o,l,c){let h=r-a,u=t-o,d=e-l,f=i*i+n*n+s*s,p=h*i+u*n+d*s,x=h*h+u*u+d*d-c*c;if(x>0&&p>0)return-1;let g=p*p-f*x;if(g<0)return-1;let m=(-p-Math.sqrt(g))/f;return m<0&&(m=0),m>1?-1:m}var ua=class{constructor(t=1024){this.items=new Int32Array(t),this.keys=new Float32Array(t),this.size=0}clear(){this.size=0}push(t,e){if(this.size>=this.items.length){let a=new Int32Array(this.items.length*2);a.set(this.items),this.items=a;let o=new Float32Array(this.keys.length*2);o.set(this.keys),this.keys=o}let i=this.size++,n=this.items,s=this.keys;for(;i>0;){let a=i-1>>1;if(s[a]<=e)break;n[i]=n[a],s[i]=s[a],i=a}n[i]=t,s[i]=e}pop(){let t=this.items,e=this.keys,i=t[0],n=--this.size;if(n>0){let s=t[n],a=e[n],o=0;for(;;){let l=o*2+1;if(l>=n)break;let c=l+1;if(c<n&&e[c]<e[l]&&(l=c),e[l]>=a)break;t[o]=t[l],e[o]=e[l],o=l}t[o]=s,e[o]=a}return i}};var f1={house:[5,4],house2:[5,4],shop:[4,4],barn:[6,5],warehouse:[10,6],shed:[2,2],bunker:[3,3],church:[5,13],ruin:[4,4],pumphouse:[4,3]},Xd=r=>Math.floor(r)+.5,da=class{constructor(t){this.def=t,this.rng=qe(t.seed),this.buildings=[],this.props=[],this.flatZones=[],this.fps=[],this.roads=t.roads,this.rivers=t.rivers||[],this.bridges=[],this.noTree=[]}riverDist(t,e){let i=1e9;for(let n of this.rivers)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Gs(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}roadDist(t,e){let i=1e9;for(let n of this.roads)for(let s=0;s<n.points.length-1;s++){let a=Math.sqrt(Gs(t,e,n.points[s][0],n.points[s][1],n.points[s+1][0],n.points[s+1][1]))-n.width/2;a<i&&(i=a)}return i}rectRoadClear(t,e,i,n,s){for(let a=-1;a<=1;a+=.5)for(let o=-1;o<=1;o+=.5){let l=t+a*i,c=e+o*n;if(this.roadDist(l,c)<s||this.riverDist(l,c)<s+4||this.def.isWater&&this.def.isWater(l,c))return!1}return!0}overlaps(t,e,i,n,s){for(let a of this.fps)if(t-i-s<a.maxX&&t+i+s>a.minX&&e-n-s<a.maxZ&&e+n+s>a.minZ)return!0;return!1}inBounds(t,e,i,n){let s=this.def.playHalf-8;return Math.abs(t)+i<s&&Math.abs(e)+n<s}b(t,e,i,n=0,s={},a=!1){e=Xd(e),i=Xd(i);let o=f1[t],l=s.w||o[0],c=s.d||o[1],h=n&1?c:l,u=n&1?l:c;return!a&&(!this.inBounds(e,i,h,u)||this.overlaps(e,i,h,u,s.gap??2.5)||!this.rectRoadClear(e,i,h+1,u+1,s.roadGap??1.5))?!1:(this.buildings.push({type:t,x:e,z:i,rot:n,opts:s}),this.fps.push({minX:e-h,maxX:e+h,minZ:i-u,maxZ:i+u}),this.flatZones.push({x:e,z:i,hw:h+1.2,hd:u+1.2,margin:5,noGrass:!0}),!0)}p(t,e,i,n=0,s={},a=0,o=0){if(a>0){if(this.overlaps(e,i,a,o,.6))return!1;this.fps.push({minX:e-a,maxX:e+a,minZ:i-o,maxZ:i+o}),s.flat&&this.flatZones.push({x:e,z:i,hw:a+.5,hd:o+.5,margin:3,noGrass:!0})}return this.props.push({type:t,x:e,z:i,rot:n,opts:s}),!0}flat(t,e,i,n,s=6,a,o=!1,l=1){this.flatZones.push({x:t,z:e,hw:i,hd:n,margin:s,h:a,noGrass:o,strength:l})}line(t,e,i,n,s,a=2){let o=Math.abs(n-e)>=Math.abs(s-i),l=Math.abs(o?n-e:s-i),c=Math.max(1,Math.floor(l/(a*2)));for(let h=0;h<c;h++){let u=(h+.5)/c,d=jt(e,n,u),f=jt(i,s,u);this.roadDist(d,f)<1||this.riverDist(d,f)<1||this.props.push({type:t,x:d,z:f,rot:o?0:1,opts:{n:a}})}}scatter(t,e,i,n,s,a,o=!0,l={}){let c=0;for(let h=0;h<s*12&&c<s;h++){let u=this.rng()*Math.PI*2,d=jt(i,n,Math.sqrt(this.rng())),f=t+Math.cos(u)*d,p=e+Math.sin(u)*d,x=a[Math.floor(this.rng()*a.length)],g=o?Math.floor(this.rng()*4):0;this.b(x,f,p,g,Object.assign({},l))&&c++}return c}hq(t){let e=this.def.hq[t];this.flat(e.x,e.z,30,22,14,void 0,!1);let i=t===0?1:-1;this.p("tent",e.x-14,e.z-6*i,0,{},2.5,3),this.p("tent",e.x+14,e.z-6*i,0,{},2.5,3),this.p("tent",e.x,e.z-10*i,1,{},3,2.5),this.p("crateStack",e.x-6,e.z+2*i,0,{},1.3,.7),this.p("crate",e.x+7,e.z+3*i,0,{},.7,.7),this.p("container",e.x+22,e.z+6*i,0,{},1.3,3.1),this.p("container",e.x-22,e.z+6*i,0,{},1.3,3.1);for(let n=-3;n<=3;n++)this.p("hesco",e.x+n*7,e.z+22*i,0,{n:3},1.7,.6);this.noTree.push({x:e.x,z:e.z,r:40})}},p1={id:"greenhollow",name:"Greenhollow",desc:"Rolling farmland and woods split by a slow river. Long sightlines over the fields, close fights in the village by the mill bridge.",size:960,cell:3,seed:1337,waterLevel:0,playHalf:440,biome:"temperate",time:"morning",terrainTextures:["grass","dirt","rock","gravel"],palette:{t0:[.55,.78,.3],t1:[1,.86,.68],t2:[.95,.95,.95],t3:[.95,.92,.85],macro:[.95,.92,.55]},mapColors:[[104,138,66],[146,124,96],[132,130,124],[158,150,132]],wallColors:[15261904,14207920,13226454,15129024,12562068,14075816],roofColors:[9058862,5917764,6975088,8079926,5200486],grassColor:[5798448,7246906,9219664],trees:{types:["pine","oak","birch"],weights:[.5,.38,.12],scatter:1/2600,bush:1/1300,rock:1/3200},hq:[{x:0,z:-420,r:45},{x:0,z:420,r:45}],flags:[{id:"A",name:"Farmstead",x:-260,z:-250,r:22},{id:"B",name:"Radio Hill",x:250,z:-230,r:20},{id:"C",name:"Mill Bridge",x:-35,z:8,r:24},{id:"D",name:"Lumber Mill",x:-280,z:232,r:22},{id:"E",name:"Chapel",x:240,z:300,r:22}],rivers:[{points:[[-500,-175],[-360,-122],[-240,-86],[-130,-40],[-40,8],[50,40],[150,80],[250,150],[340,210],[500,255]],width:22,depth:3.2,bankSlope:.32,fords:[{x:-240,z:-86,r:22,depth:.55}]}],roads:[{points:[[0,-440],[-80,-330],[-260,-250]],width:6},{points:[[0,-440],[20,-250],[-20,-120],[-35,-40],[-35,60],[-90,150],[-280,232]],width:7},{points:[[-260,-250],[-150,-180],[-20,-120]],width:5},{points:[[250,-230],[120,-330],[0,-440]],width:6},{points:[[250,-230],[265,-100],[270,60],[270,140],[270,190],[240,300]],width:6},{points:[[-35,60],[80,130],[150,250],[240,300]],width:6},{points:[[-280,232],[-150,380],[0,440]],width:6},{points:[[240,300],[120,400],[0,440]],width:6},{points:[[-260,-250],[-250,-140],[-240,-86],[-262,60],[-280,232]],width:4}],height(r,t,e,i){let n=9+6.5*e.fbm(r/320,t/320,4)+2.6*i.fbm(r/85,t/85,3);n+=26*Math.exp(-((r-250)**2+(t+230)**2)/(2*80*80)),n+=10*Math.exp(-((r+300)**2+(t-300)**2)/(2*120*120)),n+=8*Math.exp(-((r-380)**2+(t-30)**2)/(2*90*90));let s=Math.max(Math.abs(r),Math.abs(t));return n+=oe(400,478,s)*(30+12*e.fbm(r/60,t/60,2)),Math.max(n,2.4+i(r/40,t/40)*.3)},splat(r,t,e,i,n,s,a,o){let l=oe(.2,.38,i)+oe(32,40,e)*.6,c=(1-oe(9,15,s))*1.2,h=oe(.42,.6,a(r/70+13,t/70-7))*(1-oe(25,35,e))*.75,u=n*1.4+(o?.9:0)+h;return[Math.max(.05,1-l-c-u),u,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[0]/(o[0]+o[1]+o[2]+o[3])*(1-n)*(.55+.45*a(r/25,t/25))*1.2,0,1)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.bridges.push({x:-35.5,z:9.5,len:44,w:8},{x:270.5,z:163.5,len:52,w:7});for(let h of r.bridges)r.fps.push({minX:h.x-h.w/2-1,maxX:h.x+h.w/2+1,minZ:h.z-h.len/2,maxZ:h.z+h.len/2});let i=t[0];r.b("barn",i.x-14,i.z-8,0,{},!0),r.b("house2",i.x+15,i.z-12,1,{},!0),r.b("shed",i.x-26,i.z+12,0),r.b("shed",i.x+17,i.z+13,2),r.b("house",i.x+6,i.z+26,0),r.p("waterTower",i.x+2,i.z+13,0,{},2,2),r.p("haystack",i.x-3,i.z-1,0,{},1.3,.9),r.p("hay",i.x+5,i.z+4,1,{},.9,.7),r.p("hay",i.x-7,i.z+7,0,{},.7,.9),r.p("car",i.x+6,i.z-3,1,{},2.2,1),r.p("logs",i.x-18,i.z+4,1,{},1.3,2.6),r.line("fence",i.x-60,i.z-40,i.x-30,i.z-40),r.line("fence",i.x-60,i.z-40,i.x-60,i.z+20),r.line("fence",i.x+30,i.z+40,i.x+70,i.z+40),r.line("fence",i.x+70,i.z+40,i.x+70,i.z-10),r.line("stoneWall",i.x-40,i.z+30,i.x-10,i.z+30);let n=t[1];r.p("radioTower",n.x+8,n.z+6,0,{},3,3),r.b("bunker",n.x-8,n.z-8,0,{},!0),r.b("house",n.x-17,n.z+13,1,{cat:"concrete",flat:!0,color:12170923}),r.p("sandbagRing",n.x+2,n.z-15,0,{},2.5,2),r.p("sandbagRing",n.x-20,n.z-2,1,{},2,2.5),r.p("sandbagRing",n.x+17,n.z+19,2,{},2.5,2),r.p("container",n.x+17,n.z-6,0,{},1.3,3.1),r.p("container",n.x+22,n.z-4,0,{},1.3,3.1),r.p("sandbags",n.x-2,n.z+18,0,{n:3},1.6,.4),r.p("sandbags",n.x+12,n.z-22,0,{n:3},1.6,.4),r.p("crateStack",n.x-4,n.z+5,0,{},1.3,.7);let s=t[2];r.b("warehouse",s.x+46,s.z-22,0,{cat:"wood",w:7,d:4,H:5});let a=[[-62,-30,0],[-12,-32,1],[-68,-58,1],[-10,-62,0],[-48,-90,0],[-90,-40,1],[-70,48,2],[-5,52,3],[-60,80,0],[10,85,2],[30,62,1],[-100,60,0],[25,-60,0],[-30,-66,2]];for(let[h,u,d]of a)r.b(e()<.35?"house2":"house",s.x+h,s.z+u,d,{w:e()<.5?4:5,d:e()<.5?3:4});r.scatter(s.x,s.z,40,110,6,["shed","house","ruin"]),r.p("car",s.x-31,s.z-52,0,{},1,2.2),r.p("car",s.x-41,s.z+46,0,{},1,2.2),r.p("sandbags",s.x-32,s.z-20,0,{n:2},1.1,.4),r.p("sandbags",s.x-38,s.z+38,0,{n:2},1.1,.4),r.p("crateStack",s.x-45,s.z-18,0,{},1.3,.7),r.p("barrels",s.x-22,s.z+30,0,{},1,.4);let o=t[3];r.b("warehouse",o.x-6,o.z-12,0,{cat:"wood",w:8,d:5,H:5.5},!0),r.b("house",o.x+18,o.z+8,1),r.b("shed",o.x-22,o.z+13,0),r.b("house2",o.x-26,o.z+34,0),r.b("shed",o.x+10,o.z+26,1);for(let h=0;h<5;h++)r.p("logs",o.x-8+h*6.5,o.z+6+h%2*6,1,{},1.3,2.6);r.p("crateStack",o.x+12,o.z-6,0,{},1.3,.7),r.p("car",o.x+4,o.z-26,1,{},2.2,1),r.p("sandbags",o.x-18,o.z-2,1,{n:2},.4,1.1);let l=t[4];r.b("church",l.x-2,l.z+6,0,{},!0);for(let h=0;h<4;h++)for(let u=0;u<5;u++)r.p("grave",l.x+16+h*3,l.z-2+u*3.2,0,{},.4,.2);r.line("stoneWall",l.x+12,l.z-6,l.x+30,l.z-6),r.line("stoneWall",l.x+30,l.z-6,l.x+30,l.z+16),r.b("house",l.x-26,l.z-12,0),r.b("house2",l.x-26,l.z+22,1),r.b("shed",l.x+20,l.z-18,0),r.b("house",l.x+6,l.z+40,2),r.p("sandbagRing",l.x-4,l.z-18,0,{},2.5,2),r.p("car",l.x-12,l.z-22,0,{},1,2.2);let c=[[-100,-270],[130,-290],[380,-120],[-400,80],[-170,120],[90,200],[380,330],[-380,-200],[150,-60],[-200,360],[60,-360],[-60,330],[330,40],[-330,-20]];for(let[h,u]of c){let d=e();d<.2?r.b("ruin",h,u,Math.floor(e()*4)):d<.45?(r.b("barn",h,u,Math.floor(e()*4)),r.b("shed",h+18,u+6,0)):(r.b(e()<.4?"house2":"house",h,u,Math.floor(e()*4)),r.b("shed",h-14,u+9,1),r.p("hay",h+12,u-10,0,{},.7,.9)),e()<.5&&r.line("fence",h-30,u+22,h+20,u+22)}for(let[h,u]of[[60,-170],[-120,-60],[200,40],[-210,320],[110,-210],[-150,220]])r.b("ruin",h,u,Math.floor(e()*4));for(let h=0;h<6;h++){let u=(e()-.5)*700,d=(e()-.5)*700;r.p("sandbagRing",u,d,Math.floor(e()*4),{},2.5,2.5)}r.forests=[[-400,-20,90],[130,-20,62],[-140,300,80],[390,40,70],[-390,-360,70],[390,-390,60],[390,400,60],[-110,-340,50],[60,330,45],[-330,140,55],[330,-60,40],[-200,-150,35],[180,-150,30],[-60,180,35]];for(let h of t)r.noTree.push({x:h.x,z:h.z,r:h.r*.8})}},Tr=(r,t)=>238+16*t(r/130,3.3),m1={id:"kessar",name:"Port Kessar",desc:"A sun-baked harbor town. Dense alleys in the old town, a container depot, a ridge outpost with long sightlines and the docks on the sea.",size:720,cell:2.5,seed:4242,waterLevel:0,playHalf:330,biome:"arid",time:"afternoon",flatRoofs:!0,terrainTextures:["sand","drygrass","rock","asphalt"],palette:{t0:[1,.9,.72],t1:[1,.92,.7],t2:[1,.92,.82],t3:[1.25,1.25,1.3],macro:[1,.85,.65]},mapColors:[[200,182,140],[168,150,104],[150,136,118],[96,96,98]],wallColors:[14930864,14271642,15722194,13349770,14731686,15785152,13160656,15255720],roofColors:[11904652],grassColor:[11049562,12101736,9407050],trees:{types:["palm","acacia","shrub"],weights:[.45,.35,.2],scatter:1/4500,bush:1/1800,rock:1/1400},hq:[{x:-30,z:-316,r:42},{x:-30,z:316,r:42}],flags:[{id:"A",name:"Ridge Outpost",x:-225,z:-192,r:20},{id:"B",name:"Container Depot",x:118,z:-172,r:22},{id:"C",name:"Old Town",x:-20,z:0,r:20},{id:"D",name:"Pump Station",x:-212,z:172,r:22},{id:"E",name:"Harbor",x:182,z:168,r:22}],rivers:[],roads:[{points:[[-30,-340],[-25,-200],[-20,0],[-25,200],[-30,340]],width:10},{points:[[-230,0],[160,6]],width:9},{points:[[-25,-200],[-225,-192]],width:6},{points:[[-20,-90],[118,-172]],width:7},{points:[[-20,90],[-212,172]],width:7},{points:[[-20,60],[182,168]],width:7},{points:[[118,-172],[200,-40],[195,60],[182,168]],width:7},{points:[[-110,-60],[70,-60]],width:6},{points:[[-110,60],[70,60]],width:6},{points:[[-110,-30],[70,-30]],width:5},{points:[[-110,30],[70,30]],width:5},{points:[[-110,-60],[-110,60]],width:5},{points:[[-80,-60],[-80,60]],width:5},{points:[[-50,-60],[-50,60]],width:5},{points:[[10,-60],[10,60]],width:5},{points:[[40,-60],[40,60]],width:5},{points:[[70,-60],[70,60]],width:5}],isWater(r,t){return r>Tr(t,this._n||(e=>0))-6},height(r,t,e,i){this._n=e;let n=5+3*e.fbm(r/210,t/210,4)+1.4*i.fbm(r/55,t/55,3);n+=15*Math.exp(-((r+228)**2+(t+196)**2)/(2*50*50))*(.85+.3*i(r/18,t/18)),n+=oe(-200,-335,r)*(16+8*e.fbm(r/70,t/70,3)),n+=oe(285,355,Math.abs(t))*(22+8*e.fbm(r/50,t/50,2)),n+=6*Math.exp(-((r+120)**2+(t-250)**2)/(2*60*60)),n=Math.max(n,2.6);let s=Tr(t,e),a=oe(s-28,s+26,r);return n=jt(n,-8,a),n},splat(r,t,e,i,n,s,a,o){let l=oe(.18,.34,i)*1.3+oe(13,19,e)*.5,c=n*1.6,h=oe(.15,.5,a(r/90-5,t/90+3))*.9+(o?.25:0);return[Math.max(.1,1.1-l-c-h*.6)+(e<1.2?1:0),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){let l=o[0]+o[1]+o[2]+o[3];return Nt(o[1]/l*(1-n)*1.3*(.4+.6*a(r/18,t/18)),0,.85)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);let i=[-110,-80,-50,-20,10,40,70],n=[-60,-30,0,30,60];for(let d=0;d<i.length-1;d++)for(let f=0;f<n.length-1;f++){let p=i[d]+3.5,x=i[d+1]-3.5,g=n[f]+3.5,m=n[f+1]-3.5,v=(p+x)/2,y=(g+m)/2;if(Math.hypot(v-t[2].x,y-t[2].z)<22)continue;if(e()<.12){r.p("car",v,y,Math.floor(e()*2),{},2.2,2.2),r.p("crate",v+4,y+3,0,{},.7,.7);continue}let S=[[p,g],[v+.5,g],[p,y+.5],[v+.5,y+.5]];for(let[w,T]of S){if(e()<.16)continue;let E=2+Math.floor(e()*2),_=2+Math.floor(e()*2);r.b("shop",w+E+.6,T+_+.6,Math.floor(e()*4)&2,{w:E,d:_,gap:1.4,roadGap:.4})}}let s=t[2];for(let d=0;d<6;d++){let f=d/6*Math.PI*2+.3;r.p("stall",s.x+Math.cos(f)*11,s.z+Math.sin(f)*11,d&1,{},1.7,1.3)}r.p("car",s.x+6,s.z-16,1,{},2.2,1),r.p("jersey",s.x-14,s.z+6,1,{n:2},.4,2.1),r.p("sandbags",s.x+4,s.z+14,0,{n:3},1.6,.4);let a=t[0];r.flat(a.x,a.z,22,18,10,void 0,!0,.9),r.b("bunker",a.x-6,a.z-4,0,{},!0),r.p("watchtower",a.x+14,a.z-12,0,{},2,2),r.p("watchtower",a.x-16,a.z+12,2,{},2,2),r.p("radioTower",a.x+8,a.z+10,0,{h:20},3,3);for(let d=-3;d<=3;d++)d!==0&&(r.p("hesco",a.x+d*3.6,a.z-24,0,{n:3},1.7,.6),r.p("hesco",a.x+d*3.6,a.z+24,0,{n:3},1.7,.6));for(let d=-2;d<=2;d++)d!==0&&(r.p("hesco",a.x-26,a.z+d*3.6,1,{n:3},.6,1.7),r.p("hesco",a.x+26,a.z+d*3.6,1,{n:3},.6,1.7));r.p("sandbagRing",a.x+6,a.z-14,0,{},2.5,2),r.p("container",a.x-14,a.z-10,1,{},3.1,1.3),r.p("crateStack",a.x+2,a.z+4,0,{},1.3,.7);let o=t[1];r.flat(o.x,o.z,46,34,8,void 0,!0),r.b("warehouse",o.x-22,o.z-18,0,{},!0),r.b("warehouse",o.x+26,o.z+16,1,{w:8,d:6},!0);for(let d=0;d<6;d++)for(let f=0;f<2;f++)e()<.2||r.p("container",o.x-14+d*5.2,o.z+6+f*13,0,{stack:e()<.45},1.3,3.1);r.p("crane",o.x+4,o.z-30,0,{},4.4,1.9),r.p("jersey",o.x-30,o.z+14,1,{n:3},.4,3.1),r.p("jersey",o.x+2,o.z-4,0,{n:2},2.1,.4),r.p("crateStack",o.x+6,o.z+2,0,{},1.3,.7),r.p("barrels",o.x-8,o.z-2,0,{},1,.4);let l=t[3];r.flat(l.x,l.z,32,28,8,void 0,!0),r.b("pumphouse",l.x-8,l.z-8,0,{},!0),r.b("pumphouse",l.x+14,l.z+12,1,{},!0),r.b("house",l.x-20,l.z+16,0,{flat:!0,w:4,d:3}),r.p("tank",l.x+10,l.z-12,0,{},1.7,1.7),r.p("tank",l.x+16,l.z-12,0,{},1.7,1.7),r.p("tank",l.x+22,l.z-12,0,{color:12103840},1.7,1.7),r.p("pipe",l.x+2,l.z-2,0,{len:12},6,.4),r.p("pipe",l.x-10,l.z+6,1,{len:8},.4,4),r.p("barrels",l.x+2,l.z+6,0,{},1,.4),r.p("sandbagRing",l.x-2,l.z+22,2,{},2.5,2),r.line("compoundWall",l.x-32,l.z-28,l.x-8,l.z-28),r.line("compoundWall",l.x+8,l.z-28,l.x+32,l.z-28),r.line("compoundWall",l.x-32,l.z+28,l.x-6,l.z+28),r.line("compoundWall",l.x+10,l.z+28,l.x+32,l.z+28),r.line("compoundWall",l.x-32,l.z-26,l.x-32,l.z-6),r.line("compoundWall",l.x-32,l.z+8,l.x-32,l.z+26);let c=t[4],h=Tr(c.z,r.noise||(()=>0));r.flat(c.x+10,c.z,46,40,6,2.2,!0),r.b("warehouse",c.x-12,c.z-22,0,{w:9,d:5},!0),r.b("warehouse",c.x-16,c.z+22,0,{w:8,d:5},!0);for(let d=0;d<4;d++)r.p("container",c.x+6+d*5,c.z-6,0,{stack:e()<.4},1.3,3.1);for(let d=0;d<3;d++)r.p("container",c.x+8+d*5,c.z+10,0,{},1.3,3.1);r.p("crateStack",c.x-2,c.z+2,0,{},1.3,.7),r.p("crate",c.x+2,c.z-12,0,{},.7,.7),r.p("barrels",c.x-4,c.z+8,0,{},1,.4),r.p("crane",c.x+30,c.z+28,1,{},1.9,4.4),r.piers=[{z:c.z-26},{z:c.z+2},{z:c.z+40}];let u=[[-120,-200],[40,-262],[-262,-40],[-150,132],[60,200],[-100,262],[150,-60],[200,-262],[-240,70],[100,120]];for(let[d,f]of u)r.b("house",d,f,Math.floor(e()*4),{flat:!0,w:4,d:3,gap:6})&&(r.line("compoundWall",d-14,f-12,d+14,f-12),r.line("compoundWall",d-14,f+12,d+4,f+12),r.line("compoundWall",d-14,f-10,d-14,f+10),r.p("car",d+9,f+18,0,{},1,2.2));for(let[d,f]of[[-160,-100],[120,-110],[-180,250],[80,250],[-280,120],[20,-150]])r.b("ruin",d,f,Math.floor(e()*4));r.forests=[[-300,-100,40],[-280,260,50],[120,260,40],[-140,200,30],[220,-120,30],[-60,-240,30],[200,260,25]];for(let d of t)r.noTree.push({x:d.x,z:d.z,r:d.r});r.noTree.push({x:-20,z:0,r:95})}},g1={id:"ironworks",name:"Ironworks",desc:"A shut-down foundry under grey skies. Fight through the furnace hall, a rail yard of boxcars and container lanes, the smelter courtyard and the loading docks.",size:440,cell:2,seed:9091,waterLevel:null,playHalf:196,biome:"industrial",time:"overcast",flatRoofs:!0,cqb:!0,terrainTextures:["gravel","dirt","rock","asphalt"],palette:{t0:[.72,.7,.66],t1:[.8,.7,.6],t2:[.85,.85,.85],t3:[1,1,1.05],macro:[.75,.72,.66]},mapColors:[[132,128,120],[118,104,90],[120,118,112],[88,88,92]],wallColors:[12104874,11117722,12893358,10133668,11577492],roofColors:[6975088],grassColor:[6975552,8028232,9080912],trees:{types:["birch","oak","pine"],weights:[.5,.3,.2],scatter:1/9e3,bush:1/2500,rock:1/3500},hq:[{x:0,z:-174,r:24},{x:0,z:174,r:24}],flags:[{id:"A",name:"Furnace Hall",x:-62,z:-78,r:16},{id:"B",name:"Rail Yard",x:72,z:-52,r:18},{id:"C",name:"Smelter",x:-66,z:66,r:17},{id:"D",name:"Loading Docks",x:70,z:82,r:17}],rivers:[],roads:[{points:[[0,-200],[0,200]],width:9},{points:[[-180,0],[180,0]],width:8},{points:[[-150,-130],[150,-130]],width:6},{points:[[-150,130],[150,130]],width:6},{points:[[-125,-130],[-125,130]],width:6},{points:[[125,-130],[125,130]],width:6}],height(r,t,e,i){let n=4+.8*e.fbm(r/120,t/120,3),s=Math.max(Math.abs(r),Math.abs(t));return n+=oe(170,215,s)*(12+4*i.fbm(r/40,t/40,2)),n},splat(r,t,e,i,n,s,a,o){let l=oe(.2,.36,i),c=n*1.6+(o?.7:0),h=oe(.2,.6,a(r/40+3,t/40))*.8;return[Math.max(.2,1-l-c-h*.5),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[1]/(o[0]+o[1]+o[2]+o[3])*(1-n)*.7*(.3+.7*a(r/12,t/12)),0,.6)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);let i=t[0];r.b("warehouse",i.x,i.z,0,{w:13,d:8,H:9,gap:1},!0);for(let[l,c]of[[-12,-4],[0,4],[12,-4]])r.p("tank",i.x+l,i.z+c,0,{color:6969930},0,0);r.p("pipe",i.x,i.z-9,0,{len:18},0,0),r.p("crateStack",i.x-18,i.z+9,0,{},0,0),r.p("crateStack",i.x+18,i.z+9,0,{},0,0),r.p("chimney",i.x-34,i.z-6,0,{h:28},1.7,1.7),r.p("chimney",i.x-34,i.z+6,0,{h:24},1.7,1.7),r.b("house2",i.x+36,i.z-12,1,{cat:"concrete",flat:!0,w:4,d:4,color:11578530}),r.b("shed",i.x-30,i.z+24,0,{cat:"metal"});let n=t[1];r.p("rails",n.x-14,n.z,1,{len:140}),r.p("rails",n.x,n.z,1,{len:140}),r.p("rails",n.x+14,n.z,1,{len:140});for(let l of[-14,0,14])for(let c=-2;c<=2;c++)e()<.25||r.p("traincar",n.x+l+.5,n.z+c*16,0,{},1.5,7.2);for(let l=0;l<6;l++)r.p("container",n.x+30+l%2*6,n.z-24+Math.floor(l/2)*15,0,{stack:e()<.4},1.3,3.1);r.b("shop",n.x-34,n.z-20,0,{cat:"brick",w:3,d:3,floors:1}),r.p("jersey",n.x-24,n.z+20,1,{n:3},.4,3.1),r.p("sandbagRing",n.x+22,n.z+28,2,{},2.5,2);let s=t[2];for(let[l,c]of[[-10,-10],[10,-10],[-10,10],[10,10]])r.p("tank",s.x+l,s.z+c,0,{color:11052186},1.7,1.7);r.p("pipe",s.x,s.z-10,0,{len:16},0,0),r.p("pipe",s.x,s.z+10,0,{len:16},0,0),r.p("pipe",s.x-10,s.z,1,{len:16},0,0),r.b("pumphouse",s.x+26,s.z-4,1,{},!0),r.b("pumphouse",s.x-28,s.z+4,1,{}),r.p("chimney",s.x+2,s.z+30,0,{h:30},1.7,1.7),r.p("crane",s.x-8,s.z-30,0,{},4.4,1.9),r.p("barrels",s.x+4,s.z+2,0,{},1,.4),r.p("crateStack",s.x-3,s.z-3,0,{},1.3,.7);let a=t[3];r.b("warehouse",a.x-22,a.z-8,1,{w:8,d:5,H:6},!0),r.b("warehouse",a.x+22,a.z-8,1,{w:8,d:5,H:6},!0),r.p("platform",a.x,a.z+18,0,{len:40,w:5},20,2.5);for(let l=0;l<4;l++)r.p("crateStack",a.x-12+l*8,a.z+4,0,{},1.3,.7);r.p("car",a.x-6,a.z-6,1,{color:6974042},2.2,1),r.p("car",a.x+7,a.z-2,0,{color:9062954},1,2.2);for(let l=0;l<3;l++)r.p("container",a.x-8+l*8,a.z+34,1,{stack:l===1},3.1,1.3);let o=[[-140,-60],[-140,40],[140,-80],[140,30],[-20,-100],[30,100],[-30,40],[30,-10],[-100,-150],[100,150],[-100,150],[100,-150],[40,-90],[-40,110]];for(let[l,c]of o){let h=e();h<.35?r.b("house2",l,c,Math.floor(e()*4),{cat:"concrete",flat:!0,w:4,d:3,color:11841702}):h<.6?r.b("warehouse",l,c,Math.floor(e()*2),{w:6,d:4,H:6}):h<.8?(r.p("container",l,c,0,{stack:!0},1.3,3.1),r.p("container",l+4,c,0,{},1.3,3.1),r.p("container",l+8,c+2,0,{stack:e()<.5},1.3,3.1)):r.b("ruin",l,c,Math.floor(e()*4),{cat:"brick"})}for(let l=0;l<10;l++){let c=(e()-.5)*300,h=(e()-.5)*300;r.p(e()<.5?"hesco":"jersey",c,h,Math.floor(e()*2),{n:3},2,2)}r.line("compoundWall",-150,-40,-150,40),r.line("compoundWall",150,-40,150,40),r.scatter(0,0,25,165,26,["warehouse","shed","house2","pumphouse","shop"],!0,{w:5,d:4,cat:"metal",flat:!0,gap:3});for(let l=0;l<18;l++){let c=e()*Math.PI*2,h=30+e()*140,u=Math.cos(c)*h,d=Math.sin(c)*h;if(r.roadDist(u,d)<6)continue;let f=e()<.5?0:1;r.p("container",u,d,f,{stack:e()<.35},f?3.2:1.4,f?1.4:3.2),e()<.6&&r.p("crateStack",u+(f?0:3),d+(f?3:0),0,{},1.3,.7)}r.forests=[[-175,-170,18],[175,170,18],[175,-100,14],[-175,100,14]];for(let l of t)r.noTree.push({x:l.x,z:l.z,r:l.r*1.4})}},x1={id:"brennhof",name:"Brennhof",desc:"A tight old town split by a canal. Narrow streets and alleys, a market square, the train station, a brewery, the church and town hall. Every corner is a fight.",size:400,cell:2,seed:7171,waterLevel:0,playHalf:178,biome:"temperate",time:"dusk",cqb:!0,terrainTextures:["grass","dirt","rock","gravel"],palette:{t0:[.55,.75,.32],t1:[1,.86,.68],t2:[.95,.95,.95],t3:[1.05,1.02,.98],macro:[.95,.92,.6]},mapColors:[[104,136,70],[146,124,96],[132,130,124],[150,146,138]],wallColors:[15261904,14731432,14209216,13161680,15259832,14203040,15788248,12630184],roofColors:[9058862,8079926,5917764,6961712,5200486],grassColor:[5798448,7246906,9219664],trees:{types:["oak","birch","pine"],weights:[.6,.3,.1],scatter:1/6e3,bush:1/2200,rock:1/6e3},hq:[{x:0,z:-158,r:22},{x:0,z:158,r:22}],flags:[{id:"A",name:"Station",x:-78,z:-112,r:16},{id:"B",name:"Brewery",x:76,z:-98,r:15},{id:"C",name:"Canal Bridge",x:.5,z:5,r:15},{id:"D",name:"Church",x:-74,z:102,r:16},{id:"E",name:"Town Hall",x:76,z:108,r:15}],rivers:[{points:[[-220,5],[-80,2],[0,5],[80,8],[220,5]],width:14,depth:2.6,bankSlope:.9}],roads:[{points:[[0,-190],[0,-8]],width:8},{points:[[0,18],[0,190]],width:8},{points:[[-170,-60],[170,-60]],width:7},{points:[[-170,66],[170,66]],width:7},{points:[[-60,-170],[-60,-8]],width:6},{points:[[60,-170],[60,-8]],width:6},{points:[[-60,18],[-60,170]],width:6},{points:[[60,18],[60,170]],width:6},{points:[[-120,-170],[-120,170]],width:5},{points:[[120,-170],[120,170]],width:5},{points:[[-170,-125],[170,-125]],width:5},{points:[[-170,130],[170,130]],width:5}],height(r,t,e,i){let n=3.2+.6*e.fbm(r/140,t/140,3),s=Math.max(Math.abs(r),Math.abs(t));return n+=oe(160,198,s)*(14+5*i.fbm(r/40,t/40,2)),n},splat(r,t,e,i,n,s,a,o){let l=oe(.22,.4,i),c=n*1.6+(o?.6:0)+(1-oe(4,8,s))*1.2,h=oe(.35,.65,a(r/30,t/30))*.5;return[Math.max(.05,1-l-c-h),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[0]/(o[0]+o[1]+o[2]+o[3])*(1-n)*(.5+.5*a(r/18,t/18)),0,1)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.bridges.push({x:.5,z:5.5,len:26,w:8},{x:-89.5,z:2.5,len:24,w:6},{x:90.5,z:8.5,len:24,w:6});for(let c of r.bridges)r.fps.push({minX:c.x-c.w/2-1,maxX:c.x+c.w/2+1,minZ:c.z-c.len/2,maxZ:c.z+c.len/2});for(let c of[-1,1])for(let h=-165;h<165;h+=12)Math.abs(h)<8||Math.abs(h+90)<8||Math.abs(h-90)<8||r.p("stoneWall",h,5+c*10,0,{n:3});let i=t[0],n=t[1],s=t[3],a=t[4];r.b("warehouse",i.x,i.z-12,0,{cat:"brick",w:12,d:4,H:6,color:12089946},!0),r.p("platform",i.x,i.z+2,0,{len:44,w:5},22,2.5),r.p("rails",i.x,i.z+9,0,{len:150}),r.p("traincar",i.x-14,i.z+9,1,{},7.2,1.5),r.p("traincar",i.x+16,i.z+9,1,{},7.2,1.5),r.b("warehouse",n.x,n.z-6,1,{cat:"brick",w:8,d:6,H:7,color:11037258},!0);for(let[c,h]of[[14,8],[18,-2],[14,-12]])r.p("tank",n.x+c,n.z+h,0,{color:11569754},1.7,1.7);r.p("barrels",n.x-12,n.z+10,0,{},1,.4),r.p("crateStack",n.x-14,n.z-2,0,{},1.3,.7),r.b("church",s.x,s.z+4,0,{},!0);for(let c=0;c<3;c++)for(let h=0;h<4;h++)r.p("grave",s.x+16+c*3,s.z+h*3.2,0,{},.4,.2);r.b("house2",a.x,a.z-6,0,{cat:"brick",w:7,d:5,color:14203032},!0),r.p("fountain",a.x-2,a.z+12,0,{},4,4),r.p("fountain",-30,-40,0,{},4,4);for(let c=0;c<5;c++)r.p("stall",-14+c*7,-30,0,{},1.7,1.3);r.p("sandbags",0,-14,0,{n:3},1.6,.4),r.p("sandbags",0,24,0,{n:3},1.6,.4),r.p("car",10,-22,1,{},2.2,1),r.p("car",-12,30,0,{},1,2.2);let o=[-170,-120,-60,0,60,120,170],l=[-170,-125,-60,-8,18,66,130,170];for(let c=0;c<o.length-1;c++)for(let h=0;h<l.length-1;h++){if(l[h]===-8)continue;let u=o[c]+4,d=o[c+1]-4,f=l[h]+4,p=l[h+1]-4;if(d-u<10||p-f<10)continue;let x=Math.max(1,Math.floor((d-u)/13)),g=Math.max(1,Math.floor((p-f)/13));for(let m=0;m<x;m++)for(let v=0;v<g;v++){if(e()<.12)continue;let y=u+(m+.5)*(d-u)/x,M=f+(v+.5)*(p-f)/g,S=3+Math.floor(e()*2),w=3+Math.floor(e()*2);r.b(e()<.55?"house2":"house",y,M,Math.floor(e()*4)&2,{w:S,d:w,gap:1.6,roadGap:.6})}e()<.5&&r.p(e()<.5?"crateStack":"barrels",(u+d)/2+e()*4,(f+p)/2,0,{},1.3,.7)}r.forests=[[-150,-150,14],[150,150,14],[150,-150,12],[-150,150,12],[-30,-40,8]];for(let c of t)r.noTree.push({x:c.x,z:c.z,r:c.r*1.2})}},v1={id:"outpost",name:"Outpost Zero",desc:"A small walled desert base. Barracks rows, a comms tower and a motor pool packed inside a hesco perimeter, with guard towers on every corner.",size:260,cell:2,seed:3131,waterLevel:null,playHalf:112,biome:"arid",time:"noon",flatRoofs:!0,cqb:!0,small:!0,terrainTextures:["sand","drygrass","rock","asphalt"],palette:{t0:[1,.9,.72],t1:[1,.92,.7],t2:[1,.92,.82],t3:[1.2,1.2,1.25],macro:[1,.85,.65]},mapColors:[[200,182,140],[168,150,104],[150,136,118],[110,110,112]],wallColors:[14272420,13349770,14930864,13156520],roofColors:[11904652],grassColor:[11049562,12101736,9407050],trees:{types:["acacia","shrub","palm"],weights:[.4,.4,.2],scatter:1/5e3,bush:1/1500,rock:1/1500},hq:[{x:0,z:-98,r:16},{x:0,z:98,r:16}],flags:[{id:"A",name:"Barracks",x:-40,z:-36,r:13},{id:"B",name:"Comms Tower",x:4,z:4,r:13},{id:"C",name:"Motor Pool",x:40,z:40,r:13}],rivers:[],roads:[{points:[[0,-120],[0,120]],width:6},{points:[[-120,0],[120,0]],width:6}],height(r,t,e,i){let n=3+.5*e.fbm(r/60,t/60,3),s=Math.max(Math.abs(r),Math.abs(t));return n+=oe(100,128,s)*(9+3*i.fbm(r/25,t/25,2)),n},splat(r,t,e,i,n,s,a,o){let l=oe(.2,.36,i),c=n*1.6+(o?.4:0),h=oe(.2,.6,a(r/30,t/30))*.7;return[Math.max(.15,1-l-c-h*.5),h,l,c]},grassDensity(r,t,e,i,n,s,a,o){return Nt(o[1]/(o[0]+o[1]+o[2]+o[3])*(1-n)*.8,0,.7)},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1);for(let o=-80;o<=80;o+=4)Math.abs(o)>8&&(r.p("hesco",o,-80,0,{n:3}),r.p("hesco",o,80,0,{n:3}),r.p("hesco",-80,o,1,{n:3}),r.p("hesco",80,o,1,{n:3}));for(let[o,l]of[[-76,-76],[76,-76],[-76,76],[76,76]])r.p("watchtower",o,l,0,{},2,2);let i=t[0];for(let o=-1;o<=1;o++)r.b("house",i.x+o*14,i.z-4,1,{cat:"concrete",flat:!0,w:6,d:2,noInterior:!0,gap:1},!0);r.p("sandbags",i.x,i.z+12,0,{n:4},2.1,.4),r.p("sandbagRing",i.x-18,i.z+14,0,{},2.5,2),r.p("crateStack",i.x+18,i.z+12,0,{},1.3,.7);let n=t[1];r.p("radioTower",n.x+7,n.z-7,0,{h:26},3,3),r.b("bunker",n.x-8,n.z+6,0,{},!0),r.p("sandbagRing",n.x+10,n.z+10,2,{},2.5,2),r.p("sandbagRing",n.x-12,n.z-10,0,{},2.5,2),r.p("container",n.x+18,n.z-2,0,{},1.3,3.1),r.p("container",n.x-20,n.z,0,{stack:!0},1.3,3.1);let s=t[2];r.b("warehouse",s.x,s.z-6,0,{w:7,d:4,H:5.5},!0);for(let o=0;o<4;o++)r.p("car",s.x-12+o*8,s.z+10,0,{color:[6974026,8024674,6187850,9080724][o]},1,2.2);r.p("tank",s.x+20,s.z-18,0,{color:12103840},1.7,1.7),r.p("barrels",s.x-18,s.z-14,0,{},1,.4);let a=[[-40,20],[40,-30],[-10,-50],[20,55],[-55,50],[55,-55],[-20,30],[25,-15],[-60,-5],[60,10]];for(let[o,l]of a){let c=e();c<.35?r.b(e()<.5?"shop":"bunker",o,l,Math.floor(e()*4),{w:3,d:3,floors:1,gap:2}):c<.65?r.p("container",o,l,Math.floor(e()*2),{stack:e()<.4},3.2,3.2):(r.p("jersey",o,l,Math.floor(e()*2),{n:2},2.2,2.2),r.p("crateStack",o+3,l+3,0,{},1.3,.7))}r.forests=[];for(let o of t)r.noTree.push({x:o.x,z:o.z,r:o.r*1.5});r.noTree.push({x:0,z:0,r:85})}},y1={id:"frostpine",name:"Frostpine",desc:"A snowed-in mountain village. A timber ski lodge, cabins among snowy pines, a frozen pond in the middle and a sawmill, all within a few hundred metres.",size:280,cell:2,seed:6262,waterLevel:null,playHalf:122,biome:"winter",time:"snow",weather:"snow",small:!0,terrainTextures:["snow","dirt","rock","ice"],palette:{t0:[1,1,1],t1:[.95,.88,.82],t2:[.92,.94,.98],t3:[1,1,1],macro:[.92,.95,1]},mapColors:[[228,232,238],[168,150,130],[150,152,158],[176,204,222]],wallColors:[9071180,8018496,10123864,7230528],roofColors:[15133936,14476522],grassColor:[6975568,8028248,9080928],trees:{types:["snowpine"],weights:[1],scatter:1/900,bush:1/1400,rock:1/2500},hq:[{x:0,z:-108,r:16},{x:0,z:108,r:16}],flags:[{id:"A",name:"Ski Lodge",x:-42,z:-40,r:14},{id:"B",name:"Frozen Pond",x:6,z:4,r:15},{id:"C",name:"Sawmill",x:44,z:44,r:14}],rivers:[],roads:[{points:[[0,-130],[-20,-60],[-42,-40],[-20,-10],[6,4],[30,25],[44,44],[20,90],[0,130]],width:5}],height(r,t,e,i){let n=7+3.5*e.fbm(r/90,t/90,3)+1.2*i.fbm(r/30,t/30,2);n-=3*Math.exp(-((r-6)**2+(t-4)**2)/(2*26*26));let s=Math.max(Math.abs(r),Math.abs(t));return n+=oe(105,138,s)*(16+6*i.fbm(r/30,t/30,2)),n},splat(r,t,e,i,n,s,a,o){let l=oe(.24,.42,i),c=1-oe(16,20,Math.hypot(r-6,t-4)),h=n*.9+(o?.25:0);return[Math.max(.1,1.2-l-h-c*2),h,l,c*2]},grassDensity(){return 0},layout(r){let t=this.flags,e=r.rng;r.hq(0),r.hq(1),r.flat(6,4,20,20,8,void 0,!0,.85);let i=t[0];r.b("barn",i.x,i.z-4,0,{w:7,d:5,H:6,color:8018496},!0),r.b("house2",i.x+22,i.z+6,1,{cat:"wood",w:3,d:4}),r.b("shed",i.x-22,i.z+10,0,{color:7230528}),r.p("logs",i.x+4,i.z+14,0,{},2.6,1.3),r.line("fence",i.x-28,i.z+22,i.x+10,i.z+22);let n=t[1];r.b("shed",n.x+22,n.z-8,1,{color:7230528}),r.p("crateStack",n.x-18,n.z+6,0,{},1.3,.7),r.p("logs",n.x-8,n.z-14,1,{},1.3,2.6),r.p("logs",n.x+10,n.z+16,0,{},2.6,1.3),r.p("sandbags",n.x,n.z,0,{n:3},1.6,.4),r.p("haystack",n.x-20,n.z-18,0,{},1.3,.9);let s=t[2];r.b("warehouse",s.x-4,s.z-6,1,{cat:"wood",w:7,d:4,H:5,color:8018496},!0);for(let o=0;o<4;o++)r.p("logs",s.x+12,s.z-14+o*7,1,{},1.3,2.6);r.p("crane",s.x-18,s.z+18,0,{},4.4,1.9),r.b("shed",s.x+16,s.z+16,0,{color:7230528});let a=[[-60,10],[-30,40],[30,-40],[60,-10],[-10,60],[10,-60],[-70,-70],[70,70],[-60,60],[60,-60],[-25,-75],[25,75]];for(let[o,l]of a)r.b(e()<.4?"house2":"house",o,l,Math.floor(e()*4),{cat:"wood",w:3,d:3,gap:3});for(let o=0;o<8;o++){let l=(e()-.5)*180,c=(e()-.5)*180;r.p(e()<.5?"logs":"crateStack",l,c,Math.floor(e()*2),{},2.6,2.6)}r.forests=[[-80,20,30],[80,-20,30],[-30,80,26],[30,-80,26],[-85,-85,22],[85,85,22],[60,40,14],[-60,-30,14]];for(let o of t)r.noTree.push({x:o.x,z:o.z,r:o.r*1.3});r.noTree.push({x:6,z:4,r:24})}},fa={greenhollow:p1,kessar:m1,ironworks:g1,brennhof:x1,outpost:v1,frostpine:y1};var Ws={conquest:{name:"Conquest",desc:"Capture and hold flags. Holding the majority drains enemy tickets; every death costs one.",tickets:350,time:1500},frontline:{name:"Frontline",desc:"Flags fall in order. Push the line flag by flag; only the front flags can be captured.",tickets:300,time:1500},tdm:{name:"Team Deathmatch",desc:"First team to the kill limit wins. Squad spawns keep the fight rolling.",tickets:150,time:900}},pa=class{constructor(t,e,i={}){this.game=t,this.type=e;let n=Ws[e];this.maxTickets=i.tickets||n.tickets,this.tickets=[this.maxTickets,this.maxTickets],this.kills=[0,0],this.timeLimit=i.time||n.time,this.time=0,this.over=!1,this.winner=-1,this.bleedAcc=0,this.tick=0;let s=t.world.def;if(this.flags=e==="tdm"?[]:s.flags.map((a,o)=>({id:a.id,name:a.name,x:a.x,z:a.z,r:a.r,y:t.world.terrain.heightAt(a.x,a.z),index:o,owner:-1,progress:0,counts:[0,0],contested:!1,capTeam:-1})),e==="frontline"){this.flags.sort((o,l)=>o.z-l.z),this.flags.forEach((o,l)=>{o.index=l});let a=this.flags.length;this.flags.forEach((o,l)=>{l<Math.floor(a/2)?(o.owner=0,o.progress=1):l>=a-Math.floor(a/2)&&(o.owner=1,o.progress=-1)})}}capturable(t,e){if(this.type==="conquest")return!0;if(this.type!=="frontline")return!1;if(t.owner===e)return!0;let i=t.index,n=this.flags;return e===0?i===0||n[i-1].owner===0:i===n.length-1||n[i+1].owner===1}update(t){if(!this.over){if(this.time+=t,this.tick+=t,this.tick>=.25&&(this.updateFlags(this.tick),this.tick=0),this.type==="conquest"){let e=[0,0];for(let n of this.flags)n.owner>=0&&e[n.owner]++;let i=e[0]-e[1];if(i!==0)for(this.bleedAcc+=t*Math.abs(i)/4.5;this.bleedAcc>=1;)this.bleedAcc-=1,this.tickets[i>0?1:0]=Math.max(0,this.tickets[i>0?1:0]-1)}if(this.type==="tdm"?this.kills[0]>=this.maxTickets?this.end(0):this.kills[1]>=this.maxTickets&&this.end(1):(this.tickets[0]<=0?this.end(1):this.tickets[1]<=0&&this.end(0),this.type==="frontline"&&(this.flags.every(e=>e.owner===0)?this.end(0):this.flags.every(e=>e.owner===1)&&this.end(1))),!this.over&&this.time>=this.timeLimit){let e=this.type==="tdm"?this.kills[0]:this.tickets[0],i=this.type==="tdm"?this.kills[1]:this.tickets[1];this.end(e===i?-1:e>i?0:1)}}}updateFlags(t){let e=this.game.soldiers;for(let i of this.flags){i.counts[0]=0,i.counts[1]=0;for(let c of e){if(c.state!=="alive")continue;let h=c.pos.x-i.x,u=c.pos.z-i.z;h*h+u*u<i.r*i.r&&Math.abs(c.pos.y-i.y)<14&&i.counts[c.team]++}let n=i.counts[0],s=i.counts[1];i.contested=n>0&&s>0;let a=n-s,o=i.progress,l=i.owner;if(i.capTeam=-1,a!==0){let c=a>0?0:1;if(this.capturable(i,c)){let h=.045454545454545456*Math.pow(Math.min(Math.abs(a),5),.6),u=c===0?1:-1;i.progress*u<1&&(i.capTeam=c),i.progress=Math.max(-1,Math.min(1,i.progress+u*h*t))}}else if(n===0&&s===0){let c=i.owner===0?1:i.owner===1?-1:0,h=.02*t;i.progress+=Math.max(-h,Math.min(h,c-i.progress))}i.owner===0&&i.progress<=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",1,l)),i.owner===1&&i.progress>=0&&(i.owner=-1,this.game.onFlagEvent(i,"neutralized",0,l)),i.owner!==0&&i.progress>=1&&(i.owner=0,this.game.onFlagEvent(i,"captured",0,l)),i.owner!==1&&i.progress<=-1&&(i.owner=1,this.game.onFlagEvent(i,"captured",1,l))}}onDeath(t){this.type!=="tdm"&&(this.tickets[t]=Math.max(0,this.tickets[t]-1))}onKill(t){this.kills[t]++}end(t){this.over||(this.over=!0,this.winner=t,this.game.onMatchEnd(t))}flagSpawns(t){return this.flags.filter(e=>e.owner===t&&e.counts[1-t]===0)}};var Je={m4a1:{name:"M4A1",type:"carbine",dmg:26,dmgMin:19,r0:40,r1:120,rpm:800,vel:880,mag:30,mags:5,reload:2.1,reloadEmpty:2.6,modes:["auto","semi"],recoilV:.42,recoilH:.22,spreadHip:2.6,spreadAds:.12,adsTime:.2,moveMul:.97,pen:.8,sound:"carbine",look:{len:.82,color:2829099,mag:"curve",stock:"tube"}},ak74:{name:"AK-74",type:"ar",dmg:28,dmgMin:20,r0:45,r1:130,rpm:650,vel:880,mag:30,mags:5,reload:2.4,reloadEmpty:3,modes:["auto","semi"],recoilV:.5,recoilH:.3,spreadHip:2.8,spreadAds:.13,adsTime:.24,moveMul:.95,pen:.85,sound:"rifle",look:{len:.92,color:3813416,wood:8014378,mag:"curve",stock:"solid"}},aug:{name:"AUG A3",type:"ar",dmg:25,dmgMin:19,r0:45,r1:130,rpm:700,vel:920,mag:30,mags:5,reload:2.6,reloadEmpty:3.2,modes:["auto","semi"],recoilV:.36,recoilH:.18,spreadHip:2.7,spreadAds:.11,adsTime:.24,moveMul:.95,pen:.8,sound:"rifle",look:{len:.78,color:4938299,mag:"straight",stock:"bullpup"}},scarh:{name:"SCAR-H",type:"ar",dmg:36,dmgMin:27,r0:50,r1:150,rpm:600,vel:840,mag:20,mags:6,reload:2.5,reloadEmpty:3.1,modes:["auto","semi"],recoilV:.7,recoilH:.32,spreadHip:3,spreadAds:.13,adsTime:.27,moveMul:.93,pen:1.1,sound:"rifle",look:{len:.95,color:11901546,mag:"straight",stock:"solid"}},g36c:{name:"G36C",type:"carbine",dmg:24,dmgMin:18,r0:35,r1:110,rpm:750,vel:800,mag:30,mags:5,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.36,recoilH:.24,spreadHip:2.4,spreadAds:.13,adsTime:.19,moveMul:.98,pen:.75,sound:"carbine",look:{len:.72,color:3026478,mag:"straight",stock:"solid"}},mp7:{name:"MP7",type:"smg",dmg:20,dmgMin:13,r0:15,r1:55,rpm:950,vel:700,mag:40,mags:5,reload:1.9,reloadEmpty:2.3,modes:["auto","semi"],recoilV:.24,recoilH:.2,spreadHip:1.9,spreadAds:.16,adsTime:.15,moveMul:1.04,pen:.5,sound:"smg",look:{len:.55,color:2500134,mag:"straight",stock:"tube"}},ump45:{name:"UMP-45",type:"smg",dmg:27,dmgMin:17,r0:15,r1:50,rpm:620,vel:420,mag:25,mags:6,reload:2,reloadEmpty:2.5,modes:["auto","semi"],recoilV:.3,recoilH:.18,spreadHip:1.9,spreadAds:.18,adsTime:.16,moveMul:1.03,pen:.45,sound:"smg",look:{len:.6,color:3158064,mag:"straight",stock:"solid"}},p90:{name:"P90",type:"smg",dmg:19,dmgMin:13,r0:18,r1:60,rpm:900,vel:715,mag:50,mags:4,reload:2.4,reloadEmpty:2.9,modes:["auto","semi"],recoilV:.22,recoilH:.16,spreadHip:2,spreadAds:.15,adsTime:.16,moveMul:1.03,pen:.5,sound:"smg",look:{len:.52,color:3815988,mag:"top",stock:"bullpup"}},m249:{name:"M249",type:"lmg",dmg:26,dmgMin:20,r0:50,r1:150,rpm:750,vel:900,mag:100,mags:3,reload:5.2,reloadEmpty:6,modes:["auto"],recoilV:.4,recoilH:.34,spreadHip:4.5,spreadAds:.18,adsTime:.36,moveMul:.88,pen:1.2,sound:"lmg",look:{len:1,color:3092266,mag:"box",stock:"solid",bipod:!0}},pkm:{name:"PKM",type:"lmg",dmg:33,dmgMin:25,r0:55,r1:160,rpm:650,vel:825,mag:100,mags:3,reload:5.6,reloadEmpty:6.4,modes:["auto"],recoilV:.55,recoilH:.38,spreadHip:4.8,spreadAds:.2,adsTime:.4,moveMul:.86,pen:1.35,sound:"lmg",look:{len:1.1,color:2894374,wood:6962722,mag:"box",stock:"solid",bipod:!0}},mk14:{name:"MK14 EBR",type:"dmr",dmg:46,dmgMin:39,r0:70,r1:220,rpm:420,vel:850,mag:20,mags:5,reload:2.6,reloadEmpty:3.1,modes:["semi"],recoilV:1.15,recoilH:.35,spreadHip:3.4,spreadAds:.05,adsTime:.3,moveMul:.93,pen:1.5,sound:"dmr",sight:"acog",look:{len:1.05,color:4868674,mag:"straight",stock:"solid"}},svd:{name:"SVD",type:"dmr",dmg:57,dmgMin:47,r0:80,r1:250,rpm:300,vel:830,mag:10,mags:6,reload:2.7,reloadEmpty:3.3,modes:["semi"],recoilV:1.6,recoilH:.4,spreadHip:3.8,spreadAds:.04,adsTime:.33,moveMul:.92,pen:1.7,sound:"dmr",sight:"acog",look:{len:1.2,color:2762532,wood:8014378,mag:"straight",stock:"solid"}},l96:{name:"L96A1",type:"sniper",dmg:96,dmgMin:86,r0:100,r1:400,rpm:46,vel:910,mag:5,mags:6,reload:3.2,reloadEmpty:3.8,modes:["bolt"],bolt:!0,recoilV:2.6,recoilH:.5,spreadHip:5,spreadAds:0,adsTime:.38,moveMul:.92,pen:2.5,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.2,color:4872762,mag:"straight",stock:"solid"}},m200:{name:"M200",type:"sniper",dmg:112,dmgMin:100,r0:120,r1:500,rpm:38,vel:980,mag:7,mags:5,reload:3.6,reloadEmpty:4.2,modes:["bolt"],bolt:!0,recoilV:3.2,recoilH:.6,spreadHip:5.5,spreadAds:0,adsTime:.42,moveMul:.9,pen:3,headMul:3,sound:"sniper",sight:"scope8",look:{len:1.3,color:3815990,mag:"straight",stock:"solid"}},m870:{name:"M870",type:"shotgun",dmg:14,dmgMin:5,pellets:9,r0:8,r1:32,rpm:70,vel:400,mag:6,mags:6,reload:.55,reloadEmpty:.55,shellReload:!0,modes:["pump"],pump:!0,recoilV:2.2,recoilH:.6,spreadHip:4.2,spreadAds:2.6,pelletSpread:2.6,adsTime:.2,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2763306,wood:6964264,mag:"tube",stock:"solid"}},m1014:{name:"M1014",type:"shotgun",dmg:11,dmgMin:4,pellets:9,r0:8,r1:28,rpm:260,vel:400,mag:7,mags:5,reload:.5,reloadEmpty:.5,shellReload:!0,modes:["semi"],recoilV:1.8,recoilH:.6,spreadHip:4.4,spreadAds:3,pelletSpread:3,adsTime:.22,moveMul:1,pen:.3,sound:"shotgun",look:{len:.95,color:2500134,mag:"tube",stock:"solid"}},m9:{name:"M9",type:"pistol",dmg:24,dmgMin:15,r0:15,r1:45,rpm:420,vel:380,mag:15,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.8,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.22,color:2763306}},g18:{name:"Glock 18",type:"pistol",dmg:18,dmgMin:11,r0:12,r1:40,rpm:1100,vel:375,mag:19,mags:4,reload:1.4,reloadEmpty:1.8,modes:["auto","semi"],recoilV:.5,recoilH:.4,spreadHip:2,spreadAds:.4,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.2,color:1973790}},deagle:{name:"Desert Eagle",type:"pistol",dmg:48,dmgMin:30,r0:20,r1:55,rpm:230,vel:440,mag:7,mags:4,reload:1.8,reloadEmpty:2.2,modes:["semi"],recoilV:2,recoilH:.6,spreadHip:2.4,spreadAds:.3,adsTime:.14,moveMul:1.03,pen:.6,sound:"pistol",look:{len:.27,color:9079434}},usp:{name:"USP",type:"pistol",dmg:26,dmgMin:16,r0:15,r1:45,rpm:400,vel:370,mag:12,mags:4,reload:1.5,reloadEmpty:1.9,modes:["semi"],recoilV:.9,recoilH:.3,spreadHip:1.6,spreadAds:.25,adsTime:.12,moveMul:1.05,pen:.3,sound:"pistol",look:{len:.21,color:2763306}}},qs={sight:{iron:{name:"Iron sights",zoom:1.15},reddot:{name:"Red dot",zoom:1.3,reticle:"dot"},holo:{name:"Holographic",zoom:1.3,reticle:"holo"},x2:{name:"2x Prism",zoom:2,reticle:"chevron"},acog:{name:"4x ACOG",zoom:4,reticle:"chevron",optic:!0},scope8:{name:"8x Scope",zoom:8,scope:!0,reticle:"cross"}},barrel:{none:{name:"None"},suppressor:{name:"Suppressor",suppressed:!0,velMul:.92,dmgMul:.94,recoilVMul:.95,noFlash:!0},compensator:{name:"Compensator",recoilHMul:.68},brake:{name:"Muzzle brake",recoilVMul:.8,recoilHMul:1.05},flashhider:{name:"Flash hider",noFlash:!0,recoilVMul:.96}},grip:{none:{name:"None"},vertical:{name:"Vertical grip",recoilVMul:.8},angled:{name:"Angled grip",adsMul:.72,recoilHMul:.9},stubby:{name:"Stubby grip",recoilVMul:.9,recoilHMul:.88,hipMul:.9},bipod:{name:"Bipod",bipod:!0}},rail:{none:{name:"None"},laser:{name:"Laser",hipMul:.62,laser:!0},flashlight:{name:"Flashlight",light:!0}}};function Rh(r,t){let i=Je[r].type,n=Object.keys(qs[t]);return i==="pistol"?t==="sight"?["iron","reddot"]:t==="barrel"?["none","suppressor"]:t==="rail"?n:["none"]:t==="sight"?i==="sniper"?["scope8","acog","x2","reddot","iron"]:i==="shotgun"?["iron","reddot","holo"]:i==="smg"?["iron","reddot","holo","x2"]:["iron","reddot","holo","x2","acog"]:t==="grip"?i==="sniper"||i==="lmg"||i==="dmr"?["none","vertical","angled","bipod"]:i==="shotgun"?["none","vertical","angled"]:["none","vertical","angled","stubby"]:t==="barrel"&&i==="shotgun"?["none","suppressor"]:n}var rn={frag:{name:"Frag grenade",count:2,kind:"throw",key:"G"},smoke:{name:"Smoke grenade",count:2,kind:"throw"},impact:{name:"Impact grenade",count:2,kind:"throw"},flash:{name:"Flashbang",count:2,kind:"throw"},m320:{name:"M320 launcher",count:4,kind:"launcher"},medkit:{name:"Medkit",count:1/0,kind:"medkit"},rpg:{name:"RPG-7",count:3,kind:"rpg"},c4:{name:"C4",count:3,kind:"c4"},ammobox:{name:"Ammo box",count:2,kind:"place"},sandbags:{name:"Sandbag kit",count:5,kind:"place"},claymore:{name:"Claymore",count:2,kind:"place"},beacon:{name:"Spawn beacon",count:1,kind:"place"},rally:{name:"Rally point",count:1,kind:"place"},binoculars:{name:"Binoculars",count:1/0,kind:"binoculars"}},di={assault:{name:"Assault",desc:"Frontline rifleman. Underbarrel grenade launcher and extra frags.",types:["ar","carbine"],gadgets:["m320","frag"],throwables:3,color:"#d9a441"},medic:{name:"Medic",desc:"Fast full-health revives. Medkit heals you and nearby squadmates.",types:["ar","carbine","smg"],gadgets:["medkit","smoke"],throwables:2,color:"#6fd36a"},engineer:{name:"Engineer",desc:"Breacher. RPG and C4 blow open walls and clear buildings.",types:["smg","shotgun","carbine"],gadgets:["rpg","c4"],throwables:2,color:"#e07a4a"},support:{name:"Support",desc:"Light machine guns, ammo boxes and sandbag fortifications.",types:["lmg","ar"],gadgets:["ammobox","sandbags"],throwables:2,color:"#4ab0e0"},recon:{name:"Recon",desc:"Marksman. Claymores and a spawn beacon for the squad.",types:["sniper","dmr"],gadgets:["claymore","beacon"],throwables:2,color:"#b48ae6"},leader:{name:"Squad Leader",desc:"Gives orders, drops a rally point and spots enemies with binoculars.",types:["ar","carbine","dmr"],gadgets:["rally","binoculars"],throwables:2,color:"#f0e070",leader:!0}},Yd=["frag","smoke","impact","flash"],ma=["m9","g18","deagle","usp"];function ga(r){let t=di[r].types;return Object.keys(Je).filter(e=>t.includes(Je[e].type))}function Er(r){let t=Je[r];return{sight:t.sight||(t.type==="pistol"?"iron":"reddot"),barrel:"none",grip:"none",rail:"none"}}function xa(r,t=Math.random){let e=ga(r),i=e[Math.floor(t()*e.length)],n=Je[i],s=Er(i),a=c=>{let h=Rh(i,c);return h[Math.floor(t()*h.length)]};n.type!=="sniper"&&(s.sight=a("sight")),n.type==="dmr"&&t()<.6&&(s.sight="acog"),s.barrel=t()<.55?a("barrel"):"none",s.grip=t()<.6?a("grip"):"none",s.rail=t()<.3?a("rail"):"none";let o=ma[Math.floor(t()*ma.length)],l=r==="medic"||r==="leader"?t()<.6?"smoke":"frag":t()<.75?"frag":t()<.5?"impact":"smoke";return{cls:r,primary:i,att:s,secondary:o,satt:{sight:"iron",barrel:t()<.2?"suppressor":"none",grip:"none",rail:"none"},throwable:l,armor:t()<.4?"heavy":"light"}}function $d(r,t){let e=Je[r],i=Object.assign({},e);i.id=r,i.recoilVMul=1,i.recoilHMul=1,i.hipMul=1,i.adsMul=1,i.velMul=1,i.dmgMul=1,i.suppressed=!1,i.noFlash=!1,i.laser=!1,i.light=!1,i.bipod=!1;for(let s of["sight","barrel","grip","rail"]){let a=qs[s][t&&t[s]]||null;if(a){for(let o of["recoilVMul","recoilHMul","hipMul","adsMul","velMul","dmgMul"])a[o]&&(i[o]*=a[o]);for(let o of["suppressed","noFlash","laser","light","bipod"])a[o]&&(i[o]=!0)}}let n=qs.sight[t&&t.sight||"iron"]||qs.sight.iron;return i.zoom=n.zoom,i.scope=!!n.scope,i.reticle=n.reticle||null,i.sightId=t&&t.sight||"iron",i.interval=60/i.rpm,i}function jd(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new fe,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Zd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=Zd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Zd(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new ue(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Kd=new dt,Jd=new Rt,Qd=new Ie,tf=new We,ef=new R,nf=new R;function ii(r,t,e=0){r=r.index?r.toNonIndexed():r;let i=r.attributes.position.count,n=new Float32Array(i*3);Kd.set(t);let s=Kd.clone();for(let a=0;a<i;a+=3){let o=e?1+(Math.random()-.5)*e:1;for(let l=0;l<3;l++)n[(a+l)*3]=s.r*o,n[(a+l)*3+1]=s.g*o,n[(a+l)*3+2]=s.b*o}return r.setAttribute("color",new ue(n,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function fi(r,t=0,e=0,i=0,n=0,s=0,a=0,o=1,l=1,c=1){return tf.set(n,s,a),Qd.setFromEuler(tf),nf.set(t,e,i),ef.set(o,l,c),Jd.compose(nf,Qd,ef),r.applyMatrix4(Jd),r}var P={colorize(r,t){return ii(r,t)},box(r,t,e,i,n=0,s=0,a=0,o=0,l=0,c=0,h=0){return fi(ii(new ui(r,t,e),i,h),n,s,a,o,l,c)},cyl(r,t,e,i,n,s=0,a=0,o=0,l=0,c=0,h=0,u=0){return fi(ii(new wn(r,t,e,i),n,u),s,a,o,l,c,h)},tube(r,t,e,i,n=0,s=0,a=0,o=Math.PI/2,l=0,c=0){return fi(ii(new wn(r,r,t,e,1,!0),i),n,s,a,o,l,c)},ring(r,t,e,i,n=0,s=0,a=0){return fi(ii(new ks(r,t,e),i),n,s,a)},sleeve(r,t,e,i,n,s=0,a=0,o=0){return[fi(ii(new wn(r,r,e,i,1,!0),n),s,a,o,Math.PI/2),fi(ii(new wn(t,t,e,i,1,!0),n),s,a,o,Math.PI/2),fi(ii(new ks(t,r,i),n),s,a,o+e/2),fi(ii(new ks(t,r,i),n),s,a,o-e/2,0,Math.PI,0)]},cone(r,t,e,i,n=0,s=0,a=0,o=0){return fi(ii(new Gn(r,t,e),i,o),n,s,a)},ico(r,t,e,i=0,n=0,s=0,a=1,o=1,l=1,c=.1,h=0){let u=new $o(r,t);if(h){let d=u.attributes.position;for(let f=0;f<d.count;f++){let p=1+Math.sin(d.getX(f)*12.9+d.getY(f)*78.2+d.getZ(f)*37.7)*.5*h;d.setXYZ(f,d.getX(f)*p,d.getY(f)*p,d.getZ(f)*p)}}return fi(ii(u,e,c),i,n,s,0,0,0,a,o,l)},dodeca(r,t,e=0,i=0,n=0,s=1,a=1,o=1,l=.12){return fi(ii(new Xo(r,0),t,l),e,i,n,0,0,0,s,a,o)},prism(r,t,e,i,n=0,s=0,a=0,o=0){let l=new vr;l.moveTo(-e/2,0),l.lineTo(e/2,0),l.lineTo(0,t),l.lineTo(-e/2,0);let c=new Yo(l,{depth:r,bevelEnabled:!1});return c.translate(0,0,-r/2),c.rotateY(Math.PI/2),fi(ii(c,i),n,s,a,0,o,0)},pyramid(r,t,e,i=0,n=0,s=0){let a=new Gn(r*.7071,t,4);return a.rotateY(Math.PI/4),fi(ii(a,e),i,n+t/2,s)},merge(r){let t=r.filter(Boolean).map(i=>(i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1"),i)),e=jd(t,!1);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var Ph=new Map;function be(r,t,{srgb:e=!0,repeat:i=!0}={}){let n=document.createElement("canvas");n.width=n.height=r;let s=n.getContext("2d");t(s,r);let a=new Vn(n);return i&&(a.wrapS=a.wrapT=Di),e&&(a.colorSpace=Ee),a.anisotropy=8,a.generateMipmaps=!0,a.minFilter=Ji,a.magFilter=je,a}function ni(r,t,e,i,n,s,a=4){let o=ki(s),l=r.createImageData(t,t),c=l.data;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=u/t*Math.PI*2,f=h/t*Math.PI*2,p=Math.cos(d)*n,x=Math.sin(d)*n,g=Math.cos(f)*n,m=Math.sin(f)*n,v=(o.fbm(p+g*.7,x+m*.7,a)+o.fbm(g-3.1,m+1.7,a)*.6)*.5,y=(h*t+u)*4;c[y]=Math.max(0,Math.min(255,e[0]+v*i[0])),c[y+1]=Math.max(0,Math.min(255,e[1]+v*i[1])),c[y+2]=Math.max(0,Math.min(255,e[2]+v*i[2])),c[y+3]=255}r.putImageData(l,0,0)}function wi(r,t,e,i,n,s,a,o=.5){let l=qe(a);for(let c=0;c<e;c++){r.fillStyle=i[Math.floor(l()*i.length)],r.globalAlpha=o*(.4+l()*.6);let h=l()*t,u=l()*t,d=n+l()*(s-n);for(let f of[-t,0,t])for(let p of[-t,0,t])r.fillRect(h+f,u+p,d,d*(.6+l()*.8))}r.globalAlpha=1}function si(r){if(Ph.has(r))return Ph.get(r);let t;switch(r){case"grass":t=be(256,(e,i)=>{ni(e,i,[118,128,118],[40,45,30],3,11),wi(e,i,900,["#9fb07a","#5f7046","#b7c48b","#4d5c38"],1,3,2,.45)});break;case"drygrass":t=be(256,(e,i)=>{ni(e,i,[150,135,100],[40,35,25],3,12),wi(e,i,900,["#c9b68a","#8f7b55","#d8c79d","#a39064"],1,3,3,.5)});break;case"dirt":t=be(256,(e,i)=>{ni(e,i,[128,112,96],[45,40,35],4,13),wi(e,i,700,["#8a7560","#a8927a","#5e4f40","#c2ae95"],1,4,4,.5)});break;case"rock":t=be(256,(e,i)=>{ni(e,i,[130,128,124],[55,55,55],5,14,5);let n=qe(9);e.strokeStyle="rgba(40,40,40,0.35)",e.lineWidth=1.2;for(let s=0;s<40;s++){e.beginPath();let a=n()*i,o=n()*i;e.moveTo(a,o);for(let l=0;l<5;l++)a+=(n()-.5)*40,o+=(n()-.5)*40,e.lineTo(a,o);e.stroke()}});break;case"sand":t=be(256,(e,i)=>{ni(e,i,[196,178,140],[30,28,22],6,15),wi(e,i,1200,["#d9c8a0","#b19a72","#e8dcb8"],1,2,6,.4)});break;case"gravel":t=be(256,(e,i)=>{ni(e,i,[140,132,118],[35,32,30],6,16),wi(e,i,1600,["#7d766a","#b5ab98","#5d564b","#cfc5b0"],1,4,7,.65)});break;case"asphalt":t=be(256,(e,i)=>{ni(e,i,[92,92,94],[24,24,24],8,17),wi(e,i,1500,["#6b6b6e","#4a4a4c","#8a8a8a"],1,2,8,.5)});break;case"plaster":t=be(256,(e,i)=>{ni(e,i,[222,220,214],[30,30,30],5,18),wi(e,i,300,["#bdb8ae","#e9e6df"],2,8,10,.25)});break;case"brick":t=be(256,(e,i)=>{e.fillStyle="#bfb6aa",e.fillRect(0,0,i,i);let n=qe(21),s=i/16,a=i/8;for(let o=0;o<16;o++)for(let l=-1;l<9;l++){let c=o%2*a*.5,h=200+n()*55;e.fillStyle=`rgb(${h},${h*.92},${h*.86})`,e.fillRect(l*a+c+1,o*s+1,a-2,s-2)}wi(e,i,400,["#8d857a","#ffffff"],1,3,11,.2)});break;case"wood":t=be(256,(e,i)=>{let n=qe(31),s=i/8;for(let a=0;a<8;a++){let o=190+n()*60;e.fillStyle=`rgb(${o},${o*.9},${o*.82})`,e.fillRect(0,a*s,i,s)}e.strokeStyle="rgba(60,40,25,0.5)";for(let a=0;a<=8;a++)e.beginPath(),e.moveTo(0,a*s),e.lineTo(i,a*s),e.stroke();e.strokeStyle="rgba(90,60,35,0.18)";for(let a=0;a<120;a++){let o=n()*i;e.beginPath(),e.moveTo(n()*i,o),e.lineTo(n()*i,o+(n()-.5)*4),e.stroke()}});break;case"concrete":t=be(256,(e,i)=>{ni(e,i,[196,194,188],[30,30,30],7,19),wi(e,i,500,["#a8a59e","#d9d6cf","#8c8982"],1,3,12,.35),e.strokeStyle="rgba(80,80,80,0.25)",e.strokeRect(.5,.5,i-1,i-1)});break;case"metal":t=be(256,(e,i)=>{let n=e.createLinearGradient(0,0,i/16,0);n.addColorStop(0,"#d8d8d8"),n.addColorStop(.5,"#f4f4f4"),n.addColorStop(1,"#bcbcbc"),e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<16;s++)e.fillStyle=s%2?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",e.fillRect(s*i/16,0,i/32,i);wi(e,i,260,["#8a6a4a","#6b5038"],1,5,13,.25)});break;case"sandbag":t=be(256,(e,i)=>{e.fillStyle="#bba57c",e.fillRect(0,0,i,i);let n=qe(41),s=i/4,a=i/2;for(let o=0;o<4;o++)for(let l=-1;l<3;l++){let c=o%2*a*.5,h=170+n()*40;e.fillStyle=`rgb(${h},${h*.9},${h*.7})`,e.beginPath(),e.ellipse(l*a+c+a/2,o*s+s/2,a/2-3,s/2-3,0,0,Math.PI*2),e.fill()}wi(e,i,500,["#7f6d4d","#d4c29b"],1,2,14,.3)});break;case"hay":t=be(256,(e,i)=>{ni(e,i,[200,172,96],[40,35,20],9,20),e.strokeStyle="rgba(120,90,30,0.35)";let n=qe(5);for(let s=0;s<300;s++){let a=n()*i,o=n()*i;e.beginPath(),e.moveTo(a,o),e.lineTo(a+(n()-.5)*20,o+(n()-.5)*6),e.stroke()}});break;case"roof":t=be(256,(e,i)=>{e.fillStyle="#c8c0b8",e.fillRect(0,0,i,i);let n=qe(51);for(let s=0;s<10;s++)for(let a=-1;a<11;a++){let o=s%2*i/20,l=175+n()*60;e.fillStyle=`rgb(${l},${l*.95},${l*.92})`,e.fillRect(a*i/10+o+1,s*i/10+1,i/10-2,i/10-1),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(a*i/10+o,s*i/10+i/10-3,i/10,3)}});break;case"cloth":t=be(128,(e,i)=>{ni(e,i,[230,230,230],[20,20,20],4,22),e.fillStyle="rgba(0,0,0,0.12)";for(let n=0;n<i;n+=16)e.fillRect(n,0,8,i)});break;case"snow":t=be(256,(e,i)=>{ni(e,i,[232,236,242],[20,20,16],4,31),wi(e,i,700,["#ffffff","#dfe6ee","#cfd8e2"],1,3,32,.45)});break;case"ice":t=be(256,(e,i)=>{ni(e,i,[176,204,222],[26,22,18],3,33);let n=qe(34);e.strokeStyle="rgba(255,255,255,0.45)",e.lineWidth=1;for(let s=0;s<30;s++){e.beginPath();let a=n()*i,o=n()*i;e.moveTo(a,o);for(let l=0;l<4;l++)a+=(n()-.5)*60,o+=(n()-.5)*60,e.lineTo(a,o);e.stroke()}});break;case"noise":t=be(256,(e,i)=>ni(e,i,[128,128,128],[127,127,127],2,23,5),{srgb:!1});break;case"smoke":t=be(128,(e,i)=>{let n=ki(77),s=e.createImageData(i,i),a=s.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(o-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u)*(.65+.35*n.fbm(l/22,o/22,4)),f=(o*i+l)*4;a[f]=a[f+1]=a[f+2]=255,a[f+3]=Math.max(0,Math.min(255,Math.pow(d,1.4)*255))}e.putImageData(s,0,0)},{repeat:!1,srgb:!1});break;case"spark":t=be(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.8)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1,srgb:!1});break;case"flash":t=be(128,(e,i)=>{e.translate(i/2,i/2);for(let s=0;s<7;s++){e.rotate(Math.PI*2/7+.3);let a=e.createLinearGradient(0,0,i/2,0);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(0,-6),e.lineTo(i/2,0),e.lineTo(0,6),e.fill()}let n=e.createRadialGradient(0,0,0,0,0,i/3);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(-i/2,-i/2,i,i)},{repeat:!1,srgb:!1});break;case"bullethole":t=be(64,(e,i)=>{let n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(10,10,10,1)"),n.addColorStop(.18,"rgba(20,18,16,1)"),n.addColorStop(.32,"rgba(60,55,50,0.7)"),n.addColorStop(1,"rgba(60,55,50,0)"),e.fillStyle=n,e.fillRect(0,0,i,i)},{repeat:!1});break;case"scorch":t=be(128,(e,i)=>{let n=ki(99),s=e.createImageData(i,i),a=s.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){let c=(l-i/2)/(i/2),h=(o-i/2)/(i/2),u=Math.sqrt(c*c+h*h),d=Math.max(0,1-u*(.8+.4*n.fbm(l/14,o/14,3))),f=(o*i+l)*4;a[f]=15,a[f+1]=12,a[f+2]=10,a[f+3]=Math.min(255,d*330)}e.putImageData(s,0,0)},{repeat:!1});break;default:throw new Error("unknown texture "+r)}return Ph.set(r,t),t}var Vi={uTime:{value:0},uWind:{value:1}},Ar=new Set,Cr=null;function ya(r){let t=r.userData.patches||[],e=r.userData.csmHook;r.onBeforeCompile=(n,s)=>{e&&e(n,s);for(let a of t)a.fn(n,s)};let i=t.map(n=>n.name).join("|")+(e?"|csm":"");r.customProgramCacheKey=()=>i,r.needsUpdate=!0}function jn(r,t,e){return r.userData.patches=r.userData.patches||[],r.userData.patches.push({name:t,fn:e}),sf(r),ya(r),r}function sf(r){return Ar.has(r)||(Ar.add(r),Cr?rf(r,Cr):ya(r)),r}function rf(r,t){t.setupMaterial(r),r.userData.csmHook=r.onBeforeCompile,ya(r)}function Ma(r){if(Cr!==r){for(let t of Ar)t.defines&&(delete t.defines.USE_CSM,delete t.defines.CSM_CASCADES,delete t.defines.CSM_FADE),t.userData.csmHook=null;Cr=r;for(let t of Ar)r?rf(t,r):ya(t)}}function of(){Ar.clear(),Cr=null}function Dh(r,t,e=.5,i=1){let s={uTriMap:{value:si(t)},uTriScale:{value:e},uTriStrength:{value:i}};return jn(r,"tri_"+t,a=>{Object.assign(a.uniforms,s),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= mix(vec3(1.0), triC.rgb, uTriStrength);`)})}function Ih(r,t=.03,e=.5,i=1.4){return jn(r,`wind_${t}_${e}`,n=>{n.uniforms.uTime=Vi.uTime,n.uniforms.uWind=Vi.uWind,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        }`)})}var va=new Map;function Sn(r="default",t={}){if(va.has(r))return va.get(r);let e=new pe(Object.assign({vertexColors:!0,roughness:.85,metalness:0,flatShading:!1,side:r==="weapon"?Pe:Oi},t));return sf(e),va.set(r,e),e}function af(){va.clear()}var Tn=new Map,Xe=(r,t=.3)=>new dt(r).lerp(new dt(8026746),t).getHex();function M1(r,t,e,i=1,n=.85,s=1.05){let a=new Zo(r,9,5,0,Math.PI*2,0,Math.PI*.56);return a.scale(i,n,s),a.translate(0,e,0),P.colorize(a,t)}function Rr(r,t={}){let e=r+JSON.stringify(t);if(Tn.has(e))return Tn.get(e);let i=Je[r],n=i.look||{len:.8,color:2763306},s=Xe(n.color),a=Xe(n.color,.18),o=Xe(1842204),l=Xe(n.wood||n.color,.2),c=Xe(3815994),h=[],u=[],d=[],f=.105,p,x=-.05,g=null,m=new R,v=n.len;if(i.type==="pistol"){h.push(P.box(.03,.034,v,s,0,.047,-v*.35));for(let T=0;T<4;T++)h.push(P.box(.032,.026,.004,o,0,.05,.03-T*.012));h.push(P.box(.027,.024,v*.78,o,0,.02,-v*.3)),h.push(P.box(.028,.06,.04,o,0,-.012,.012,.22)),h.push(P.box(.006,.022,.03,o,0,-.004,-.04)),h.push(P.box(.006,.012,.006,o,0,.07,-v*.8)),h.push(P.box(.02,.01,.008,o,0,.068,.02)),u.push(P.box(.024,.075,.034,Xe(2500134),0,-.037,0,.22)),m.set(0,-.025,.018),p=-v*.85,f=.074,t.sight==="reddot"&&(h.push(P.box(.028,.008,.036,o,0,.068,-.03)),h.push(P.box(.004,.024,.008,o,-.012,.084,-.042),P.box(.004,.024,.008,o,.012,.084,-.042),P.box(.028,.005,.008,o,0,.098,-.042)),h.push(P.box(.026,.01,.014,o,0,.076,-.018)),d.push({type:"rect",w:.02,h:.022,y:.085,z:-.042}),f=.085,g=-.038),t.barrel==="suppressor"&&(h.push(P.cyl(.017,.017,.13,8,2236962,0,.047,p-.06,Math.PI/2)),p-=.13)}else{let T=n.stock==="bullpup",E=T?-v*.05:-v*.12,_=v*.42;h.push(P.box(.056,.045,_,s,0,.068,E)),h.push(P.box(.05,.045,_*.8,a,0,.024,E+_*.06)),h.push(P.box(.003,.018,.06,o,.029,.07,E+.02)),h.push(P.box(.02,.012,.03,o,0,.094,E+_*.5-.01)),h.push(P.box(.03,.01,_*.95,c,0,.095,E-.01));for(let st=0;st<7;st++)h.push(P.box(.034,.006,.008,o,0,.101,E-_*.42+st*_*.13));h.push(P.box(.008,.006,.07,o,0,-.01,-.03)),h.push(P.box(.006,.03,.006,o,0,-.02,0));let b=-v*.42,C=v*.27,z=n.wood&&i.type!=="lmg"?l:s;h.push(P.box(.062,.062,C,z,0,.045,b));for(let st=0;st<4;st++)h.push(P.box(.064,.012,.025,o,0,.05,b-C*.35+st*C*.23));n.wood&&h.push(P.cyl(.011,.011,C,6,c,0,.09,b,Math.PI/2));let L=b-C/2,N=-v*.68;if(h.push(P.cyl(.011,.012,Math.abs(N-L)+.02,7,o,0,.05,(L+N)/2,Math.PI/2)),h.push(P.box(.026,.03,.03,o,0,.06,L-.03)),p=N-.01,h.push(P.box(.032,.095,.044,o,0,-.04,T?-.18:.02,.3)),n.stock==="tube")h.push(P.cyl(.015,.015,v*.26,7,o,0,.055,v*.17,Math.PI/2)),h.push(P.box(.044,.05,v*.14,o,0,.045,v*.25)),h.push(P.box(.046,.12,.035,o,0,.03,v*.33));else if(n.stock==="solid"){let st=n.wood?l:s;h.push(P.box(.046,.07,v*.3,st,0,.05,v*.2,-.05)),h.push(P.box(.044,.05,v*.22,st,0,0,v*.24,.18)),h.push(P.box(.048,.13,.03,o,0,.02,v*.355))}else T&&h.push(P.box(.06,.1,v*.22,s,0,.03,v*.22));let O=T?v*.12:-.1,U=Xe(2236962,.25);if(n.mag==="curve")u.push(P.box(.028,.08,.058,U,0,-.04,0,.12)),u.push(P.box(.028,.08,.056,U,0,-.11,-.025,.42)),m.set(0,0,O);else if(n.mag==="straight")u.push(P.box(.028,.13,.05,U,0,-.065,0,.1)),u.push(P.box(.032,.012,.054,o,0,-.13,.006,.1)),m.set(0,0,O);else if(n.mag==="box")u.push(P.box(.09,.1,.11,3817520,.02,-.05,0)),m.set(0,0,-.08);else if(n.mag==="top")u.push(P.box(.05,.03,v*.45,2763304,0,0,0)),m.set(0,.11,-v*.18);else if(n.mag==="tube"){h.push(P.cyl(.013,.013,v*.45,6,o,0,.012,-v*.42,Math.PI/2)),h.push(P.box(.05,.045,.13,l,0,.01,-v*.42));for(let st=0;st<3;st++)h.push(P.box(.052,.006,.01,o,0,.012,-v*.42-.04+st*.04));u.push(P.cyl(.011,.011,.05,6,11546656,0,0,0,Math.PI/2)),m.set(0,0,-.05)}n.bipod&&(h.push(P.box(.01,.01,.22,o,-.015,0,-v*.5)),h.push(P.box(.01,.01,.22,o,.015,0,-v*.5))),i.bolt&&(h.push(P.cyl(.008,.008,.06,5,c,.04,.07,0,0,0,Math.PI/2)),h.push(P.ico(.012,0,c,.07,.07,0)));let X=t.sight||"iron",F=-.04,B=Xe(1579032,.22),j=Xe(3815984,.2);if(X==="iron"){let st=-v*.5;h.push(P.box(.02,.024,.022,o,0,.094,st)),h.push(P.box(.004,.02,.004,B,0,.113,st)),h.push(P.box(.004,.03,.014,o,-.011,.11,st),P.box(.004,.03,.014,o,.011,.11,st)),h.push(P.box(.03,.012,.024,o,0,.1,.02)),h.push(P.box(.006,.026,.018,o,-.015,.117,.02),P.box(.006,.026,.018,o,.015,.117,.02)),h.push(...P.sleeve(.009,.0042,.006,12,B,0,.123,.02)),h.push(P.box(.022,.006,.006,o,0,.112,.02)),f=.123,x=.02}else if(X==="reddot")h.push(P.box(.022,.016,.046,o,0,.104,F),P.box(.03,.006,.05,o,0,.099,F)),h.push(...P.sleeve(.021,.0175,.052,14,B,0,.131,F)),h.push(...P.sleeve(.0235,.0175,.008,14,B,0,.131,F-.026)),h.push(...P.sleeve(.0225,.0175,.006,14,B,0,.131,F+.026)),h.push(P.cyl(.008,.008,.012,8,o,.026,.131,F,0,0,Math.PI/2),P.cyl(.008,.008,.012,8,o,0,.156,F)),h.push(P.box(.006,.006,.006,10040098,.033,.131,F)),d.push({type:"circle",r:.0175,y:.131,z:F-.024}),f=.131,x=F,g=F-.02;else if(X==="holo")h.push(P.box(.046,.016,.09,o,0,.104,F+.005)),h.push(P.box(.042,.016,.03,B,0,.112,F+.04)),h.push(P.box(.008,.005,.006,4868682,-.012,.1125,F+.057),P.box(.008,.005,.006,4868682,.012,.1125,F+.057)),h.push(P.box(.006,.046,.034,B,-.025,.136,F-.018),P.box(.006,.046,.034,B,.025,.136,F-.018)),h.push(P.box(.056,.007,.034,B,0,.16,F-.018)),h.push(P.box(.044,.004,.004,o,0,.158,F-.034),P.box(.044,.004,.004,o,0,.114,F-.034)),d.push({type:"rect",w:.044,h:.04,y:.136,z:F-.02}),f=.136,x=F,g=F-.016;else if(X==="x2")h.push(P.box(.026,.014,.06,o,0,.104,F)),h.push(...P.sleeve(.02,.0165,.07,12,B,0,.132,F)),h.push(...P.sleeve(.024,.0165,.012,12,B,0,.132,F-.038)),h.push(...P.sleeve(.022,.0165,.01,12,B,0,.132,F+.036)),h.push(P.box(.02,.012,.04,B,0,.157,F),P.cyl(.006,.006,.012,8,o,.024,.132,F+.01,0,0,Math.PI/2)),d.push({type:"circle",r:.0165,y:.132,z:F-.042},{type:"circle",r:.0165,y:.132,z:F+.04,back:!0}),f=.132,x=F,g=F-.03;else if(X==="acog")h.push(P.box(.03,.014,.07,j,0,.104,F)),h.push(P.cyl(.018,.027,.12,12,j,0,.134,F,Math.PI/2)),h.push(...P.sleeve(.029,.023,.01,12,j,0,.134,F-.062)),h.push(P.box(.012,.009,.08,2763300,0,.162,F),P.box(.006,.004,.06,10107434,0,.167,F)),h.push(P.cyl(.007,.007,.012,8,j,.026,.134,F,0,0,Math.PI/2)),d.push({type:"circle",r:.024,y:.134,z:F-.067},{type:"circle",r:.017,y:.134,z:F+.061,back:!0}),f=.134,x=F+.06;else if(X==="scope8"){let st=F-.03;h.push(P.cyl(.017,.017,.2,12,B,0,.142,st,Math.PI/2)),h.push(P.cyl(.02,.032,.07,14,B,0,.142,st-.135,Math.PI/2)),h.push(...P.sleeve(.033,.029,.01,14,B,0,.142,st-.172)),h.push(P.cyl(.025,.019,.06,12,B,0,.142,st+.13,Math.PI/2)),h.push(P.cyl(.024,.024,.014,14,Xe(2763306),0,.142,st+.09,Math.PI/2)),h.push(P.cyl(.011,.011,.03,10,B,0,.17,st),P.cyl(.011,.011,.03,10,B,.03,.142,st,0,0,Math.PI/2));for(let _t of[st-.06,st+.06])h.push(...P.sleeve(.021,.0172,.014,12,o,0,.142,_t)),h.push(P.box(.02,.03,.014,o,0,.115,_t));d.push({type:"circle",r:.029,y:.142,z:st-.176},{type:"circle",r:.021,y:.142,z:st+.16,back:!0}),f=.142,x=st+.16}t.barrel==="suppressor"?(h.push(P.cyl(.022,.022,.17,8,2236962,0,.05,p-.08,Math.PI/2)),p-=.17):t.barrel&&t.barrel!=="none"?(h.push(P.cyl(.018,.016,.055,6,2500134,0,.05,p-.02,Math.PI/2)),p-=.055):(h.push(P.cyl(.015,.014,.04,6,o,0,.05,p-.015,Math.PI/2)),p-=.04);let rt=-v*.42;t.grip==="vertical"?h.push(P.box(.026,.085,.03,o,0,-.03,rt)):t.grip==="angled"?h.push(P.box(.026,.04,.07,o,0,-.005,rt,-.5)):t.grip==="stubby"?h.push(P.box(.026,.045,.03,o,0,-.01,rt)):t.grip==="bipod"&&!n.bipod&&(h.push(P.box(.01,.01,.2,o,-.015,0,rt-.06)),h.push(P.box(.01,.01,.2,o,.015,0,rt-.06))),t.rail==="laser"?(h.push(P.box(.022,.024,.06,o,.042,.04,rt+.02)),h.push(P.box(.008,.008,.004,16719904,.042,.04,rt-.012))):t.rail==="flashlight"&&h.push(P.cyl(.016,.018,.08,8,o,.042,.04,rt,Math.PI/2))}let y=P.merge(h),M=u.length?P.merge(u):null,w={geo:M?P.merge([y.clone(),M.clone().translate(m.x,m.y,m.z)]):y,bodyGeo:y,magGeo:M,magPos:m,sightY:f,sightZ:x,lenses:d,reticleZ:g,muzzle:new R(0,i.type==="pistol"?.047:.05,p),len:v,pistol:i.type==="pistol"};return Tn.set(e,w),w}function Kn(r){let t="g_"+r;if(Tn.has(t))return Tn.get(t);let e;switch(r){case"frag":case"impact":e=[P.ico(.04,1,r==="impact"?8022586:4147758,0,0,0),P.box(.015,.03,.015,8947848,0,.045,0),P.box(.008,.06,.012,7829367,.02,.03,0)];break;case"smoke":case"flash":e=[P.cyl(.032,.032,.12,8,r==="flash"?2763306:6975088,0,0,0),P.box(.015,.025,.015,8947848,0,.07,0),P.cyl(.033,.033,.02,8,r==="flash"?6710886:13684944,0,.02,0)];break;case"m320":e=[P.cyl(.03,.03,.3,8,2763306,0,.04,-.15,Math.PI/2),P.box(.03,.1,.04,1842204,0,-.03,.02,.3),P.box(.04,.05,.15,3355443,0,.06,.04),P.box(.05,.1,.03,2763306,0,.03,.14)];break;case"rpg":e=[P.cyl(.035,.035,.95,8,4872762,0,.06,-.15,Math.PI/2),P.cone(.055,.2,8,5925450,0,.06,-.72),P.box(.03,.09,.04,1842204,0,-.02,0,.3),P.box(.03,.09,.04,1842204,0,-.02,-.25,.3),P.box(.03,.04,.05,2236962,-.04,.12,-.1),P.cyl(.045,.04,.1,8,6969914,0,.06,.32,Math.PI/2)];break;case"medkit":e=[P.box(.18,.12,.08,15263976,0,0,0),P.box(.06,.02,.085,13639712,0,0,0),P.box(.02,.06,.085,13639712,0,0,0),P.box(.06,.02,.02,6710886,0,.07,0)];break;case"ammobox":e=[P.box(.25,.14,.14,4872746,0,0,0),P.box(.1,.02,.06,2236962,0,.08,0),P.box(.26,.02,.15,3820066,0,.06,0)];break;case"c4":e=[P.box(.12,.05,.08,13154442,0,0,0),P.box(.03,.02,.06,2236962,.03,.035,0),P.box(.04,.09,.025,2763306,-.12,0,.02),P.box(.01,.01,.01,16719904,.03,.05,0)];break;case"claymore":e=[P.box(.18,.1,.04,4872750,0,0,0),P.box(.01,.06,.01,3355443,-.06,-.07,0),P.box(.01,.06,.01,3355443,.06,-.07,0)];break;case"beacon":e=[P.box(.14,.18,.1,3820122,0,0,0),P.box(.01,.2,.01,2236962,.04,.18,0),P.box(.03,.03,.03,3211104,.04,.29,0)];break;case"rally":e=[P.box(.16,.12,.1,4868666,0,0,0),P.box(.01,.35,.01,2236962,-.05,.22,0),P.box(.12,.08,.005,15786096,.01,.34,0)];break;case"binoculars":e=[P.cyl(.025,.025,.12,8,2763306,-.035,0,0,Math.PI/2),P.cyl(.025,.025,.12,8,2763306,.035,0,0,Math.PI/2),P.box(.04,.02,.04,2236962,0,0,0)];break;case"sandbags":e=[P.box(.3,.12,.18,12100474,0,0,0)];break;case"knife":e=[P.box(.012,.03,.14,12106944,0,0,-.1),P.box(.022,.03,.09,2763302,0,-.005,.02),P.box(.05,.012,.012,3815990,0,0,-.03)];break;case"bandage":e=[P.cyl(.035,.035,.07,8,15658734,0,0,0,0,0,Math.PI/2)];break;default:e=[P.box(.1,.1,.1,8947848)]}let i=P.merge(e);return Tn.set(t,i),i}var Ye=[{uniform:5991238,uniform2:5003834,vest:3950898,helmet:5069884,accent:4034016,pack:4608570,pants:5595967,glove:3093288,name:"NORTHWIND",css:"#4a9cf0"},{uniform:10259046,uniform2:8746322,vest:7101763,helmet:8286035,accent:14700605,pack:8022605,pants:9272411,glove:3813926,name:"IRONSIDE",css:"#f05a48"}],zh=[14726287,13013104,9263676,15780008,11040079];function lf(r,t,e,i,n,s,a,o,l){let c=i-r,h=n-t,u=s-e,d=Math.hypot(c,h,u),f=P.box(a,l||a,d,o),p=new Rt().lookAt(new R(0,0,0),new R(c,h,u),new R(0,1,0));return f.applyMatrix4(p),f.translate((r+i)/2,(t+n)/2,(e+s)/2),f}var b1={R:{rifle:[[-.03,-.24,-.1],[-.15,-.14,-.33]],pistol:[[-.04,-.22,-.14],[-.17,-.12,-.42]],gadget:[[-.04,-.26,-.08],[-.12,-.2,-.3]]},L:{rifle:[[.06,-.24,-.3],[.24,-.12,-.66]],pistol:[[.08,-.24,-.16],[.22,-.14,-.4]],gadget:[[.02,-.28,-.06],[.1,-.26,-.24]]}};function cf(r,t,e){let[i,n]=b1[r][t];return P.merge([P.box(.13,.12,.13,e.uniform,0,-.02,0),lf(0,-.02,0,i[0],i[1],i[2],.11,e.uniform,.105),P.box(.1,.1,.1,e.uniform2,i[0],i[1],i[2]),lf(i[0],i[1],i[2],n[0],n[1],n[2],.095,e.uniform2,.09),P.box(.085,.085,.1,e.glove,n[0],n[1]+.005,n[2])])}function ba(r,t,e=0){let i=Ye[r],n=zh[e%zh.length],s=Sn("soldier",{roughness:.85}),a=`s2_${r}_${t}_${e%zh.length}`,o=Tn.get(a);if(!o){o={},o.pelvis=P.merge([P.box(.34,.17,.21,i.pants,0,-.03,0),P.box(.36,.05,.23,2828836,0,.06,0),P.box(.04,.04,.03,9075280,0,.06,-.12),P.box(.07,.13,.06,2763302,.2,-.04,.02),P.box(.08,.08,.07,i.vest,-.19,0,.04)]);let S=[P.box(.31,.2,.19,i.uniform,0,.1,0),P.box(.39,.28,.23,i.uniform,0,.34,0),P.box(.35,.3,.06,i.vest,0,.29,-.125),P.box(.35,.32,.06,i.vest,0,.3,.125),P.box(.06,.22,.24,i.vest,-.19,.27,0),P.box(.06,.22,.24,i.vest,.19,.27,0),P.box(.07,.1,.05,Xe(i.vest,.1),-.1,.2,-.17),P.box(.07,.1,.05,Xe(i.vest,.1),0,.2,-.17),P.box(.07,.1,.05,Xe(i.vest,.1),.1,.2,-.17),P.box(.06,.07,.04,2763302,.12,.36,-.165),P.box(.03,.02,.32,2763302,-.12,.47,0),P.box(.03,.02,.32,2763302,.12,.47,0),P.box(.13,.07,.13,n,0,.52,0),P.box(.09,.07,.01,i.accent,.205,.38,-.02)],w=i.pack;t==="medic"?S.push(P.box(.28,.3,.13,14211280,0,.3,.2),P.box(.1,.035,.01,13639712,0,.32,.27),P.box(.035,.1,.01,13639712,0,.32,.27)):t==="support"?S.push(P.box(.3,.32,.15,w,0,.3,.2),P.box(.24,.12,.12,3820074,0,.08,.22)):t==="engineer"?S.push(P.box(.26,.3,.13,w,0,.28,.19),P.cyl(.05,.05,.62,7,4872762,.13,.46,.22,.35)):t==="recon"?S.push(P.box(.26,.26,.12,w,0,.26,.19),P.cyl(.07,.07,.32,8,5920320,0,.46,.22,0,0,Math.PI/2)):t==="leader"?S.push(P.box(.24,.28,.12,w,0,.28,.19),P.box(.015,.4,.015,2236962,-.09,.62,.22)):S.push(P.box(.26,.24,.1,w,0,.27,.18),P.box(.12,.12,.05,Xe(w,.1),0,.22,.25)),o.torso=P.merge(S);let T=[P.box(.2,.22,.21,n,0,.12,0),P.box(.04,.05,.03,Xe(n,.05),0,.11,-.115),P.box(.035,.02,.01,2236962,-.05,.15,-.106),P.box(.035,.02,.01,2236962,.05,.15,-.106),P.box(.03,.06,.05,n,-.105,.12,0),P.box(.03,.06,.05,n,.105,.12,0)];t==="recon"?T.push(P.cyl(.21,.21,.02,10,i.helmet,0,.215,0),P.cyl(.12,.13,.1,10,i.helmet,0,.27,0)):t==="leader"?T.push(P.box(.23,.09,.23,i.helmet,0,.245,0),P.box(.21,.02,.09,i.helmet,0,.21,-.14),P.box(.04,.09,.08,2236962,.12,.13,0),P.box(.04,.09,.08,2236962,-.12,.13,0),P.box(.24,.015,.03,2236962,0,.21,0)):(T.push(M1(.155,i.helmet,.17),P.box(.3,.02,.3,i.helmet,0,.17,0)),T.push(P.box(.05,.04,.03,2763302,0,.25,-.15)),r===1&&T.push(P.box(.19,.04,.02,2236962,0,.2,-.155)),t==="medic"&&T.push(P.box(.05,.015,.01,13639712,0,.27,.15),P.box(.015,.05,.01,13639712,0,.27,.15))),o.head=P.merge(T),o.thigh=P.merge([P.box(.15,.44,.17,i.pants,0,-.22,0),P.box(.04,.12,.1,Xe(i.pants,.08),.085,-.24,0)]),o.shin=P.merge([P.box(.13,.4,.14,i.pants,0,-.2,0),P.box(.14,.12,.05,i.vest,0,-.03,-.08),P.box(.15,.11,.27,2762274,0,-.42,-.04),P.box(.155,.03,.28,1710102,0,-.475,-.04)]);for(let E of["rifle","pistol","gadget"])o["armR_"+E]=cf("R",E,i),o["armL_"+E]=cf("L",E,i);Tn.set(a,o)}let l=S=>{let w=new Ot(S,s);return w.castShadow=!0,w.receiveShadow=!0,w},c=new de,h=new de;h.position.y=.95,c.add(h);let u=new de;h.add(u),u.add(l(o.pelvis));let d=new de;d.position.y=.06,h.add(d),d.add(l(o.torso));let f=new de;f.position.y=.55,d.add(f),f.add(l(o.head));let p=new de;p.position.set(0,.44,0),d.add(p);let x=new de;x.position.set(.21,0,0),p.add(x);let g=new de;g.position.set(-.21,0,0),p.add(g);let m=l(o.armR_rifle),v=l(o.armL_rifle);x.add(m),g.add(v);let y=new de;y.position.set(.06,-.11,-.33),p.add(y);let M=[];for(let S of[-1,1]){let w=new de;w.position.set(S*.095,-.06,0),u.add(w),w.add(l(o.thigh));let T=new de;T.position.y=-.44,w.add(T),T.add(l(o.shin)),M.push({thigh:w,shin:T})}return{root:c,body:h,pelvis:u,spine:d,hips:h,torso:d,head:f,aim:p,armR:x,armL:g,armRMesh:m,armLMesh:v,weapon:y,legs:M,weaponMesh:null,mat:s,geos:o,pose:"rifle"}}function _a(r,t,e="rifle"){r.weaponMesh&&r.weapon.remove(r.weaponMesh);let i=new Ot(t,Sn("weapon",{roughness:.6,metalness:.25}));if(i.castShadow=!0,r.weapon.add(i),r.weaponMesh=i,e!==r.pose&&(r.pose=e,r.armRMesh.geometry=r.geos["armR_"+e],r.armLMesh.geometry=r.geos["armL_"+e],r.weapon.position.set(.06,-.11,e==="pistol"?-.42:e==="gadget"?-.3:-.33)),r.outlined&&(w1(r),r.outlines))for(let n of r.outlines)n.visible=r.outlineOn!==!1}var _1=new Qt({uniforms:{uColor:{value:new dt(1,.1,.06)},uWidth:{value:.0032}},vertexShader:`
    uniform float uWidth;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 n = normalize(normalMatrix * normal);
      float d = clamp(-mv.z, 1.2, 40.0); // constant on screen up close, thinner far away
      mv.xyz += n * uWidth * d;
      mv.z -= 0.09; // sit just behind the soldier's own parts so only the silhouette shows
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:"uniform vec3 uColor; void main() { gl_FragColor = vec4(uColor, 1.0); }",side:Fe}),Lh=new WeakMap;function hf(r){if(Lh.has(r))return Lh.get(r);let t=r.attributes.position,e=new Map,i=o=>`${Math.round(t.getX(o)*1e3)},${Math.round(t.getY(o)*1e3)},${Math.round(t.getZ(o)*1e3)}`,n=r.attributes.normal;for(let o=0;o<t.count;o++){let l=i(o),c=e.get(l)||[0,0,0];c[0]+=n.getX(o),c[1]+=n.getY(o),c[2]+=n.getZ(o),e.set(l,c)}let s=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){let l=e.get(i(o)),c=Math.hypot(l[0],l[1],l[2])||1;s[o*3]=l[0]/c,s[o*3+1]=l[1]/c,s[o*3+2]=l[2]/c}let a=new fe;return a.setAttribute("position",t),a.setAttribute("normal",new ue(s,3)),r.index&&a.setIndex(r.index),a.boundingSphere=r.boundingSphere,a.boundingBox=r.boundingBox,Lh.set(r,a),a}function uf(r,t){if(r.userData.outline){r.userData.outline.geometry=hf(r.geometry);return}let e=new Ot(hf(r.geometry),_1);e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1,e.userData.isOutline=!0,r.add(e),r.userData.outline=e,t.outlines.push(e)}function df(r,t=!0){if(!r.outlines){r.outlines=[];let e=[];r.root.traverse(i=>{i.isMesh&&!i.userData.isOutline&&e.push(i)});for(let i of e)uf(i,r);r.outlined=!0}for(let e of r.outlines)e.visible=t}function w1(r){if(!r.outlined)return;let t=[];r.root.traverse(e=>{e.isMesh&&!e.userData.isOutline&&t.push(e)});for(let e of t)uf(e,r)}var ff="fireline.keybinds.v1",wa=[{group:"Movement"},{id:"forward",label:"Move forward",def:"KeyW"},{id:"back",label:"Move back",def:"KeyS"},{id:"left",label:"Strafe left",def:"KeyA"},{id:"right",label:"Strafe right",def:"KeyD"},{id:"sprint",label:"Sprint \xB7 hold breath when scoped",def:"ShiftLeft"},{id:"jump",label:"Jump / vault / climb",def:"Space"},{id:"crouch",label:"Crouch (slide while sprinting)",def:"KeyC"},{id:"crouchHold",label:"Crouch (always hold)",def:"ControlLeft"},{id:"prone",label:"Prone",def:"KeyZ"},{id:"leanL",label:"Lean left",def:"KeyQ"},{id:"leanR",label:"Lean right",def:"KeyE"},{group:"Combat"},{id:"fire",label:"Fire",def:"Mouse0"},{id:"ads",label:"Aim down sights \xB7 detonate C4",def:"Mouse2"},{id:"reload",label:"Reload",def:"KeyR"},{id:"firemode",label:"Fire mode",def:"KeyB"},{id:"melee",label:"Melee (knife)",def:"KeyV"},{id:"grenade",label:"Quick grenade",def:"KeyG"},{id:"slot1",label:"Primary weapon",def:"Digit1"},{id:"slot2",label:"Sidearm",def:"Digit2"},{id:"slot3",label:"Gadget 1",def:"Digit3"},{id:"slot4",label:"Gadget 2",def:"Digit4"},{id:"slot5",label:"Throwable",def:"Digit5"},{group:"Squad & utility"},{id:"interact",label:"Revive / heal (hold)",def:"KeyF"},{id:"bandage",label:"Bandage",def:"KeyX"},{id:"spot",label:"Spot enemy \xB7 squad order",def:"KeyT"},{id:"light",label:"Flashlight",def:"KeyL"},{id:"scoreboard",label:"Scoreboard",def:"Tab"},{id:"map",label:"Map",def:"KeyM"},{group:"Trackpad & accessibility"},{id:"lookLeft",label:"Look left",def:"ArrowLeft"},{id:"lookRight",label:"Look right",def:"ArrowRight"},{id:"lookUp",label:"Look up",def:"ArrowUp"},{id:"lookDown",label:"Look down",def:"ArrowDown"}],pf={Mouse0:"LMB",Mouse1:"MMB",Mouse2:"RMB",Mouse3:"Mouse 4",Mouse4:"Mouse 5",Space:"Space",Tab:"Tab",Escape:"Esc",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",CapsLock:"Caps",Enter:"Enter",Backspace:"Bksp",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192"};function S1(r){return r?pf[r]?pf[r]:r.startsWith("Key")?r.slice(3):r.startsWith("Digit")?r.slice(5):r.startsWith("Numpad")?"Num "+r.slice(6):r:"\u2014"}var kh=class{constructor(){this.map={};for(let t of wa)t.id&&(this.map[t.id]=t.def);try{let t=localStorage.getItem(ff);t&&Object.assign(this.map,JSON.parse(t))}catch{}}code(t){return this.map[t]}name(t){return S1(this.map[t])}set(t,e){this.map[t]=e,this.save()}reset(){for(let t of wa)t.id&&(this.map[t.id]=t.def);this.save()}save(){try{localStorage.setItem(ff,JSON.stringify(this.map))}catch{}}conflicts(){let t={},e=new Set;for(let[i,n]of Object.entries(this.map))t[n]?(e.add(i),e.add(t[n])):t[n]=i;return e}down(t,e){return t.isDown(this.map[e])}hit(t,e){return t.isHit(this.map[e])}released(t,e){return t.isReleased(this.map[e])}},me=new kh;function T1(r,t,e){return P.merge([P.cyl(.16*e,.26*e,3*e,6,5915186,r,1.5*e,t),P.cone(2.2*e,3.2*e,7,3103278,r,3.4*e,t,.12),P.cone(1.7*e,2.7*e,7,3499317,r,5.1*e,t,.12),P.cone(1.1*e,2.2*e,7,3960889,r,6.6*e,t,.12)])}var Sa=class{constructor(t){this.renderer=t,this.scene=new Bi,this.scene.background=new dt(10466500),this.scene.fog=new Fo(10466500,30,75),this.camera=new _e(42,1,.1,200),this.t=0,this.build()}build(){let t=this.scene,e=new sn(13163760,5918784,1.2);t.add(e);let i=new bi(16773336,3.2);i.position.set(12,18,8),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);let n=i.shadow.camera;n.left=-14,n.right=14,n.top=14,n.bottom=-14,n.near=1,n.far=60,i.shadow.bias=-5e-4,i.shadow.normalBias=.03,t.add(i);let s=new Ls(60,64,0,Math.PI*2);s.rotateX(-Math.PI/2);let a=s.attributes.position,o=new Float32Array(a.count*3),l=new dt(6983484),c=new dt(9074006),h=new dt;for(let x=0;x<a.count;x++){let g=a.getX(x),m=a.getZ(x),v=Math.hypot(g,m);a.setY(x,Math.sin(g*.35)*.15+Math.cos(m*.27)*.15+Math.max(0,v-18)*.12+(v>20?Math.sin(g*.2+m*.15)*1.5:0));let y=Math.max(0,1-Math.hypot(g-1,m+1)/5)+(Math.sin(g*.7)*Math.cos(m*.5)>.6?.4:0);h.copy(l).lerp(c,Math.min(1,y)),o[x*3]=h.r,o[x*3+1]=h.g,o[x*3+2]=h.b}s.setAttribute("color",new ue(o,3)),s.computeVertexNormals();let u=new Ot(s,new pe({vertexColors:!0,roughness:1,map:si("grass")}));u.receiveShadow=!0,t.add(u);let d=[];for(let x=0;x<6;x++)d.push(P.box(1,.95,.6,12100474,-2.5+x*1,.47,-2.2,0,.05*(x%2)));for(let x=0;x<4;x++)d.push(P.box(1,.5,.6,11047786,-2+x*1,1.2,-2.2));d.push(P.box(1.2,1.2,1.2,10255186,4.2,.6,1.5,0,.3),P.box(1,1,1,11570527,4.6,1.7,1.4,0,.6)),d.push(P.box(2.4,2.6,6,3104651,-7,1.3,4,0,.4));for(let[x,g,m]of[[-9,-8,1.2],[8,-10,1],[11,4,1.3],[-12,2,.9],[3,-14,1.1],[-4,12,1],[14,-4,.8]])d.push(T1(x,g,m));let f=new Ot(P.merge(d),new pe({vertexColors:!0,roughness:.9,flatShading:!0}));f.castShadow=!0,f.receiveShadow=!0,t.add(f),this.rigs=[];let p=(x,g,m,v,y,M,S)=>{let w=ba(x,g,Math.floor(Math.random()*5)),T=Rr(m,{sight:"reddot"});return _a(w,T.geo,T.pistol?"pistol":"rifle"),w.root.position.set(v,0,y),w.root.rotation.y=M,w.root.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),t.add(w.root),this.rigs.push({rig:w,pose:S,phase:Math.random()*6}),w};p(0,"assault","m4a1",-.8,-1.2,.2,"kneel"),p(0,"support","m249",1.6,-1,-.15,"stand"),p(0,"medic","mp7",.2,1.6,2.6,"crouchwalk"),p(0,"recon","l96",-3.2,1,.5,"prone")}pose(t,e){let{rig:i,pose:n}=t,s=Math.sin(e*1.6+t.phase)*.01;i.body.position.y=.95+s,i.aim.rotation.x=.02+s,i.spine.rotation.x=.03;let a=i.legs;n==="kneel"?(i.body.position.y=.62+s,i.body.rotation.x=-.08,a[0].thigh.rotation.x=.25,a[0].shin.rotation.x=-1.75,a[1].thigh.rotation.x=1.1,a[1].shin.rotation.x=-1.65,i.aim.rotation.x=.05+s,i.head.rotation.y=Math.sin(e*.4)*.15):n==="prone"?(i.body.position.y=.2,i.body.rotation.x=-1.47,i.aim.rotation.x=1.47,i.head.rotation.x=1.15,a[0].thigh.rotation.z=.18,a[1].thigh.rotation.z=-.18):n==="crouchwalk"?(i.body.position.y=.66+s,i.spine.rotation.x=.08,a[0].thigh.rotation.x=.9,a[0].shin.rotation.x=-1.4,a[1].thigh.rotation.x=.6,a[1].shin.rotation.x=-1.2,i.aim.rotation.x=-.25):(i.spine.rotation.y=Math.sin(e*.3+t.phase)*.12,i.head.rotation.x=-.05,a[0].thigh.rotation.x=.08,a[1].thigh.rotation.x=-.05,a[0].thigh.rotation.z=.06,a[1].thigh.rotation.z=-.06)}render(t,e,i){this.t+=t;let n=this.t,s=n*.06+.9;this.camera.position.set(Math.cos(s)*9.5,2.6+Math.sin(n*.13)*.4,Math.sin(s)*9.5),this.camera.lookAt(-.6,.9,0),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();for(let a of this.rigs)this.pose(a,n);this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}},Ta=class{constructor(t){this.canvas=t;try{this.renderer=new zs({canvas:t,antialias:!0,alpha:!0})}catch{this.renderer=null;return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.toneMapping=Yn,this.renderer.outputColorSpace=Ee,this.scene=new Bi,this.scene.add(new sn(15265528,4208688,1.6));let e=new bi(16777215,2.4);e.position.set(2,3,2),this.scene.add(e);let i=new bi(10139903,1);i.position.set(-3,1,-2),this.scene.add(i),this.camera=new _e(30,2,.05,20),this.group=new de,this.scene.add(this.group),this.mat=new pe({vertexColors:!0,roughness:.55,metalness:.25,side:Pe}),this.t=0,this.key=null}set(t,e){if(!this.renderer)return;let i=t+JSON.stringify(e);if(i===this.key)return;this.key=i,this.group.clear();let n=Rr(t,e),s=new Ot(n.geo,this.mat);n.geo.computeBoundingBox();let a=n.geo.boundingBox,o=a.getCenter(new R);s.position.set(-o.x,-o.y,-o.z),this.group.add(s),this.size=a.getSize(new R).length()}render(t){if(!this.renderer)return;this.t+=t;let e=this.canvas.clientWidth,i=this.canvas.clientHeight;if(!e||!i)return;this.canvas.width!==Math.floor(e*this.renderer.getPixelRatio())&&this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix();let n=(this.size||1)*1.05;this.camera.position.set(.15*n,.18*n,n),this.camera.lookAt(0,0,0),this.group.rotation.y=Math.PI/2+Math.sin(this.t*.6)*.5,this.group.rotation.x=Math.sin(this.t*.4)*.05,this.renderer.render(this.scene,this.camera)}};var E1={assault:'<path d="M2 13h13l3-2h4v2h-3l-1 2H9l-1 3H5l1-3H2z"/>',medic:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',engineer:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',support:'<path d="M4 8h16v11H4zM8 5h8v3H8zM7 11h2v5H7zm4 0h2v5h-2zm4 0h2v5h-2z"/>',recon:'<path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="1.5"/>',leader:'<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/>'},A1=r=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">${E1[r]||""}</svg>`;function C1(r){let t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstElementChild}var Ea=class{constructor(t){this.app=t,this.root=document.getElementById("ui"),this.screens={},this.loadout=this.loadSavedLoadout()}loadSavedLoadout(){try{let t=JSON.parse(localStorage.getItem("fireline.loadout")||"null");if(t&&t.cls&&Je[t.primary])return t}catch{}return{cls:"assault",primary:"m4a1",att:Er("m4a1"),secondary:"m9",satt:{sight:"iron",barrel:"none",grip:"none",rail:"none"},throwable:"frag",armor:"light"}}saveLoadout(){try{localStorage.setItem("fireline.loadout",JSON.stringify(this.loadout))}catch{}}hideAll(){for(let t in this.screens)this.screens[t].style.display="none"}screen(t,e){this.screens[t]&&this.screens[t].remove();let i=C1(`<div class="screen ${t}">${e}</div>`);return this.root.appendChild(i),this.screens[t]=i,i}click(t){t.addEventListener("click",()=>this.app.audio.play2d("ui",{vol:.3}))}showMain(){this.hideAll();let t=0;try{t=Number(localStorage.getItem("fireline.xp")||0)}catch{}let e=Math.floor(Math.sqrt(t/400))+1,i=this.screen("main",`
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
      <div class="foot">Every model, texture and sound is generated in code.</div>`);i.querySelector("[data-a=play]").onclick=()=>this.showSetup(),i.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showMain()),i.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showMain()),i.querySelectorAll("button").forEach(n=>this.click(n)),i.style.display="flex"}showSetup(){this.hideAll();let t=this.app.matchConfig,e=Object.values(fa),i=this.screen("setup",`
      <div class="panel wide">
        <h2>Match setup</h2>
        <div class="mapcards">${e.map(a=>`<div class="mapcard${t.map===a.id?" on":""}" data-map="${a.id}"><div class="mc-img mc-${a.id}"></div><b>${a.name}</b><span>${a.playHalf*2}m play area \xB7 ${a.biome}</span><p>${a.desc}</p></div>`).join("")}</div>
        <div class="row3">
          <label>Mode<select data-k="mode">${Object.entries(Ws).map(([a,o])=>`<option value="${a}"${t.mode===a?" selected":""}>${o.name}</option>`).join("")}</select><small class="mdesc"></small></label>
          <label>Time of day<select data-k="time"><option value="default">Map default</option>${["morning","noon","afternoon","dusk","overcast","snow","night"].map(a=>`<option value="${a}"${t.time===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Bot difficulty<select data-k="difficulty">${["recruit","regular","veteran","elite"].map(a=>`<option value="${a}"${this.app.settings.get("difficulty")===a?" selected":""}>${a[0].toUpperCase()+a.slice(1)}</option>`).join("")}</select></label>
          <label>Your team<select data-k="team"><option value="0"${t.team===0?" selected":""}>${Ye[0].name}</option><option value="1"${t.team===1?" selected":""}>${Ye[1].name}</option></select></label>
          <label>Tickets / kill limit<select data-k="tickets"><option value="0">Mode default</option><option value="150">150</option><option value="250">250</option><option value="400">400</option><option value="600">600</option></select></label>
          <label>Callsign<input data-k="name" maxlength="14" value="${t.name}"></label>
        </div>
        <div class="note">16 vs 16 \u2014 you plus 31 AI soldiers in 8 squads of four.</div>
        <div class="btnrow"><button class="btn" data-a="back">Back</button><button class="btn primary" data-a="start">Start match</button></div>
      </div>`),n=i.querySelector(".mdesc"),s=()=>{n.textContent=Ws[i.querySelector("[data-k=mode]").value].desc};s(),i.querySelector("[data-k=mode]").onchange=s,i.querySelectorAll(".mapcard").forEach(a=>a.onclick=()=>{i.querySelectorAll(".mapcard").forEach(o=>o.classList.remove("on")),a.classList.add("on"),t.map=a.dataset.map,this.app.audio.play2d("ui",{vol:.3})}),i.querySelector("[data-a=back]").onclick=()=>this.showMain(),i.querySelector("[data-a=start]").onclick=()=>{t.mode=i.querySelector("[data-k=mode]").value,t.time=i.querySelector("[data-k=time]").value,t.team=Number(i.querySelector("[data-k=team]").value),t.tickets=Number(i.querySelector("[data-k=tickets]").value),t.name=(i.querySelector("[data-k=name]").value||"You").slice(0,14),this.app.settings.set("difficulty",i.querySelector("[data-k=difficulty]").value),this.app.startMatch()},i.querySelectorAll("button").forEach(a=>this.click(a)),i.style.display="flex"}showLoading(t,e){let i=this.screens.loading;(!i||i.style.display==="none")&&(this.hideAll(),i=this.screen("loading",'<div class="loadbox"><h2>FIRE<span>LINE</span></h2><div class="lt"></div><div class="lbar"><div></div></div><div class="tip"></div></div>'),i.style.display="flex"),i.querySelector(".lt").textContent=t,i.querySelector(".lbar div").style.width=`${Math.round(e*100)}%`;let n=["Downed teammates can be revived by anyone \u2014 medics revive to full health.","Bandage [X] to stop bleeding before it drops you.","Engineers can blow holes in walls with RPGs and C4.","Suppressors keep you off the enemy minimap.","Bots react to gunfire, footsteps and muzzle flashes. Flank them.","Squad leaders press [T] on a flag to give orders.","Spawn on your squad leader or a rally point to stay in the fight."];i.dataset.tip||(i.dataset.tip=1,i.querySelector(".tip").textContent=n[Math.floor(Math.random()*n.length)])}showDeploy(t){this.hideAll();let e=this.screen("deploy",`
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
      </div>`);this.deployEl=e,this.game=t,this.buildClassUI();let i=e.querySelector(".dmap");i.onclick=n=>{let s=i.getBoundingClientRect(),a=(n.clientX-s.left)/s.width*i.width,o=(n.clientY-s.top)/s.height*i.height,l=null,c=30;for(let h of this.spawns||[]){let u=Math.hypot(h._mx-a,h._my-o);u<c&&(c=u,l=h)}l&&(this.selectedSpawn=l,this.app.audio.play2d("ui",{vol:.3}))},e.querySelector(".dbtn").onclick=()=>this.tryDeploy(),e.style.display="flex",this.selectedSpawn=null}buildClassUI(){let t=this.deployEl,e=this.loadout;t.querySelector(".classes").innerHTML=Object.entries(di).map(([u,d])=>`<button class="cls${e.cls===u?" on":""}" data-c="${u}" style="--cc:${d.color}">${A1(u)}<b>${d.name}</b></button>`).join(""),t.querySelectorAll(".cls").forEach(u=>u.onclick=()=>{e.cls=u.dataset.c;let d=ga(e.cls);d.includes(e.primary)||(e.primary=d[0],e.att=Er(e.primary)),(e.cls==="medic"||e.cls==="leader")&&(["smoke","frag"].includes(e.throwable)||(e.throwable="smoke")),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let i=di[e.cls];t.querySelector(".cdesc").innerHTML=`<b style="color:${i.color}">${i.name}</b> \u2014 ${i.desc}${e.cls==="leader"?"<br><i>You will lead your squad. Press [T] at a flag to order it.</i>":""}`;let n=ga(e.cls);t.querySelector(".wlist").innerHTML=n.map(u=>`<button class="wbtn${e.primary===u?" on":""}" data-w="${u}"><b>${Je[u].name}</b><span>${Je[u].type.toUpperCase()}</span></button>`).join(""),t.querySelectorAll(".wbtn").forEach(u=>u.onclick=()=>{e.primary=u.dataset.w,e.att=Er(e.primary),this.app.audio.play2d("ui",{vol:.3}),this.buildClassUI()});let s=Je[e.primary],a=(u,d)=>`<div class="stat"><span>${u}</span><div><i style="width:${Math.max(4,Math.min(100,d))}%"></i></div></div>`;t.querySelector(".wstats").innerHTML=a("Damage",s.dmg*(s.pellets||1)/1.1)+a("Fire rate",s.rpm/11)+a("Range",s.r1/4)+a("Control",100-s.recoilV*40)+a("Mobility",(s.moveMul-.8)*400)+`<div class="wnum">${s.rpm} RPM \xB7 ${s.vel} m/s \xB7 ${s.mag} rds \xB7 ${s.modes.join("/")}</div>`,t.querySelector(".atts").innerHTML=["sight","barrel","grip","rail"].map(u=>`<label>${u[0].toUpperCase()+u.slice(1)}<select data-slot="${u}">${Rh(e.primary,u).map(d=>`<option value="${d}"${e.att[u]===d?" selected":""}>${qs[u][d].name}</option>`).join("")}</select></label>`).join(""),t.querySelectorAll(".atts select").forEach(u=>u.onchange=()=>{e.att[u.dataset.slot]=u.value,this.saveLoadout()});let o=t.querySelector("[data-k=secondary]");o.innerHTML=ma.map(u=>`<option value="${u}"${e.secondary===u?" selected":""}>${Je[u].name}</option>`).join(""),o.onchange=()=>{e.secondary=o.value,this.saveLoadout()};let l=t.querySelector("[data-k=throwable]");l.innerHTML=Yd.map(u=>`<option value="${u}"${e.throwable===u?" selected":""}>${rn[u].name}</option>`).join(""),l.onchange=()=>{e.throwable=l.value,this.saveLoadout()};let c=t.querySelector("[data-k=armor]");c.value=e.armor||"light",c.onchange=()=>{e.armor=c.value,this.saveLoadout()};let h=t.querySelector("[data-k=sbarrel]");h.value=e.satt.barrel,h.onchange=()=>{e.satt.barrel=h.value,this.saveLoadout()},t.querySelector(".gadgets").innerHTML="<h3>Class gadgets</h3>"+i.gadgets.map((u,d)=>`<div class="gad"><i>${d+3}</i>${rn[u].name}${rn[u].count!==1/0?` \xD7${rn[u].count}`:""}</div>`).join("")+`<div class="gad"><i>5</i>${rn[e.throwable].name} \xD7${i.throwables}</div><div class="gad"><i>X</i>Bandage \xD74</div>`,this.saveLoadout()}updateDeploy(t){let e=this.deployEl;if(!e||e.style.display==="none")return;let i=t.player,n=e.querySelector(".wprev");n&&((!this.preview||this.preview.canvas!==n)&&(this.preview&&this.preview.renderer&&this.preview.renderer.dispose(),this.preview=new Ta(n)),this.preview.set(this.loadout.primary,this.loadout.att),this.preview.render(1/60)),this.spawns=t.spawnOptions(i),!this.selectedSpawn||!this.spawns.find(l=>l.key===this.selectedSpawn.key)?this.selectedSpawn=this.spawns.find(l=>l.kind==="squad")||this.spawns.find(l=>l.kind==="flag")||this.spawns[0]:this.selectedSpawn=this.spawns.find(l=>l.key===this.selectedSpawn.key),t.hud.drawMap(e.querySelector(".dmap"),!0,this.spawns,this.selectedSpawn);let s=Math.max(0,t.respawnAt-t.time),a=e.querySelector(".dbtn");a.textContent=s>0?`Deploy in ${s.toFixed(1)}s`:"Deploy [Space]",a.classList.toggle("wait",s>0),e.querySelector(".dteam").textContent=Ye[i.team].name,e.querySelector(".dteam").style.color=Ye[i.team].css,e.querySelector(".dsquad").textContent=i.squad?`${i.squad.name} squad \xB7 ${t.modeName} \xB7 ${t.world.def.name}`:"",e.querySelector(".dspawn").textContent=this.selectedSpawn?`Spawn: ${this.selectedSpawn.label}`:"";let o=t.lastDeath;e.querySelector(".dkill").innerHTML=o?`${o.killer?`Killed by <b style="color:#ff6a5a">${o.killer}</b>`:"You died"} ${o.weapon?`\xB7 ${o.weapon}`:""} ${o.dist?`\xB7 ${Math.round(o.dist)}m`:""}${o.head?" \xB7 headshot":""}`:"Choose your class, loadout and spawn point.",(t.input.hit("Space")||t.input.hit("Enter")||t.input.hit("NumpadEnter"))&&this.tryDeploy()}tryDeploy(){let t=this.game;!t||t.time<t.respawnAt||!this.selectedSpawn||(this.saveLoadout(),t.deployPlayer(JSON.parse(JSON.stringify(this.loadout)),this.selectedSpawn))}showPause(t){this.hideAll();let e=this.screen("pause",`
      <div class="panel">
        <h2>Paused</h2>
        <div class="menu-col">
          <button class="btn big primary" data-a="resume">Resume</button>
          ${t.player.state!=="dead"?'<button class="btn big" data-a="redeploy">Redeploy (change class)</button>':""}
          <button class="btn big" data-a="settings">Settings</button>
          <button class="btn big" data-a="controls">Controls</button>
          <button class="btn big" data-a="quit">Leave match</button>
        </div>
      </div>`);e.querySelector("[data-a=resume]").onclick=()=>this.app.resume();let i=e.querySelector("[data-a=redeploy]");i&&(i.onclick=()=>{t.player.die(null,"Redeploy",!1,!0),this.app.resume()}),e.querySelector("[data-a=settings]").onclick=()=>this.showSettings(()=>this.showPause(t)),e.querySelector("[data-a=controls]").onclick=()=>this.showControls(()=>this.showPause(t)),e.querySelector("[data-a=quit]").onclick=()=>this.app.quitMatch(),e.querySelectorAll("button").forEach(n=>this.click(n)),e.style.display="flex"}showSettings(t){this.hideAll();let e=this.app.settings,i='<div class="panel wide settings"><h2>Settings</h2><div class="setgrid">';for(let s of Wd){if(s.group){i+=`<h3>${s.group}</h3>`;continue}let a=e.get(s.key);s.type==="bool"?i+=`<label class="set"><span>${s.label}</span><input type="checkbox" data-k="${s.key}"${a?" checked":""}></label>`:s.type==="select"?i+=`<label class="set"><span>${s.label}${s.hint?`<small>${s.hint}</small>`:""}</span><select data-k="${s.key}">${s.options.map(o=>`<option value="${o}"${a===o?" selected":""}>${o}</option>`).join("")}</select></label>`:i+=`<label class="set"><span>${s.label}</span><input type="range" data-k="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${a}"><em>${a}</em></label>`}i+='</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>';let n=this.screen("settings",i);n.querySelectorAll("[data-k]").forEach(s=>{let a=s.dataset.k,o=s.type==="range"?"input":"change";s.addEventListener(o,()=>{let l;if(s.type==="checkbox"?l=s.checked:s.type==="range"?(l=Number(s.value),s.nextElementSibling.textContent=l):l=s.value,e.set(a,l),a==="preset"&&Vs[l]||a==="trackpadMode"&&l)this.showSettings(t);else if(a!=="preset"){let c=n.querySelector("[data-k=preset]");c&&(c.value=e.get("preset"))}})}),n.querySelector("[data-a=back]").onclick=t,n.style.display="flex"}showControls(t){this.hideAll();let e=me.conflicts(),i='<div class="panel wide controls"><h2>Controls</h2><p class="hint">Click a key to rebind it, then press a key or mouse button. Esc cancels. Mouse wheel always cycles weapons.</p><div class="bindgrid">';for(let h of wa){if(h.group){i+=`<h3>${h.group}</h3>`;continue}let u=e.has(h.id)&&!["sprint"].includes(h.id);i+=`<div class="bind"><span>${h.label}</span><button class="key${u?" warn":""}" data-act="${h.id}" title="${u?"Shared with another action":""}">${me.name(h.id)}</button></div>`}i+='</div><div class="btnrow"><button class="btn" data-a="reset">Reset to defaults</button><button class="btn primary" data-a="back">Done</button></div></div>';let n=this.screen("controls",i),s=null,a=()=>{window.removeEventListener("keydown",l,!0),window.removeEventListener("mousedown",c,!0),s=null},o=h=>{s&&(me.set(s,h),a(),this.app.audio.play2d("ui",{vol:.3}),this.showControls(t))},l=h=>{if(h.preventDefault(),h.stopPropagation(),h.code==="Escape"){a(),this.showControls(t);return}o(h.code)},c=h=>{if(h.target&&h.target.classList&&h.target.classList.contains("key")&&h.target.dataset.act===s&&h.button===0&&!this._armed){this._armed=!0;return}h.preventDefault(),h.stopPropagation(),o("Mouse"+h.button)};n.querySelectorAll(".key").forEach(h=>h.addEventListener("click",()=>{s||(s=h.dataset.act,this._armed=!0,h.textContent="Press a key\u2026",h.classList.add("listen"),setTimeout(()=>{this._armed=!1,window.addEventListener("keydown",l,!0),window.addEventListener("mousedown",c,!0)},60))})),n.addEventListener("contextmenu",h=>h.preventDefault()),n.querySelector("[data-a=reset]").onclick=()=>{me.reset(),this.showControls(t)},n.querySelector("[data-a=back]").onclick=()=>{a(),t()},n.style.display="flex"}showEnd(t,e){this.hideAll();let i=t.player,n=e===i.team,s=t.soldiers.slice().sort((p,x)=>x.stats.score-p.stats.score),a=s[0],o=s.indexOf(i)+1,l=0;try{l=Number(localStorage.getItem("fireline.xp")||0)}catch{}let c=i.stats.score+(n?500:150),h=p=>Math.floor(Math.sqrt(p/400))+1,u=h(l);l+=c;let d=h(l);try{localStorage.setItem("fireline.xp",String(l))}catch{}let f=this.screen("end",`
      <div class="panel wide">
        <h1 class="${e===-1?"draw":n?"win":"lose"}">${e===-1?"DRAW":n?"VICTORY":"DEFEAT"}</h1>
        <div class="endsub">${t.world.def.name} \xB7 ${t.modeName} \xB7 ${Ye[0].name} ${t.mode.type==="tdm"?t.mode.kills[0]:t.mode.tickets[0]} \u2014 ${t.mode.type==="tdm"?t.mode.kills[1]:t.mode.tickets[1]} ${Ye[1].name}</div>
        <div class="endstats">
          <div><b>${i.stats.score}</b><span>Score (#${o})</span></div><div><b>${i.stats.kills}</b><span>Kills</span></div><div><b>${i.stats.deaths}</b><span>Deaths</span></div>
          <div><b>${i.stats.assists}</b><span>Assists</span></div><div><b>${i.stats.revives}</b><span>Revives</span></div><div><b>${i.stats.caps}</b><span>Captures</span></div>
        </div>
        <div class="mvp">+${c} XP \xB7 Rank ${d}${d>u?' <b style="color:#ffcc4d">RANK UP!</b>':""} (${l} XP total)</div>
        <div class="mvp">MVP: <b style="color:${Ye[a.team].css}">${a.name}</b> \u2014 ${a.stats.score} pts, ${a.stats.kills} kills</div>
        <div class="btnrow"><button class="btn" data-a="menu">Main menu</button><button class="btn primary" data-a="again">Play again</button></div>
      </div>`);f.querySelector("[data-a=menu]").onclick=()=>this.app.quitMatch(),f.querySelector("[data-a=again]").onclick=()=>this.app.startMatch(),f.querySelectorAll("button").forEach(p=>this.click(p)),f.style.display="flex"}};var Aa=class{constructor(t,e){this.def=t,this.size=t.size,this.half=t.size/2,this.cell=t.cell,this.n=Math.round(t.size/t.cell)+1,this.waterLevel=t.waterLevel,this.noise=ki(t.seed),this.noise2=ki(t.seed+101),this.layout=e,this.heights=new Float32Array(this.n*this.n),this.roadMask=new Float32Array(this.n*this.n),this.riverDist=new Float32Array(this.n*this.n).fill(1e4),this.splat=new Float32Array(this.n*this.n*4),this.grass=new Uint8Array(this.n*this.n),this.generate()}idx(t,e){return e*this.n+t}worldX(t){return-this.half+t*this.cell}generate(){let{n:t,cell:e,half:i,def:n,noise:s}=this,a=this.heights;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=-i+u*e,f=-i+h*e;a[h*t+u]=n.height(d,f,s,this.noise2)}for(let h of this.layout.rivers||[]){let u=h.points;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let p=-i+f*e,x=-i+d*e,g=1e12;for(let w=0;w<u.length-1;w++){let T=Gs(p,x,u[w][0],u[w][1],u[w+1][0],u[w+1][1]);T<g&&(g=T)}let m=Math.sqrt(g)+s(p*.03,x*.03)*2.5,v=d*t+f;m<this.riverDist[v]&&(this.riverDist[v]=m);let y=h.width/2,M=h.depth;for(let w of h.fords||[]){let T=Math.hypot(p-w.x,x-w.z);T<w.r&&(M=jt(w.depth,M,oe(w.r*.5,w.r,T)))}let S;m<y?S=this.waterLevel-M*(1-m/y*(m/y))-.3:S=this.waterLevel-.3+(m-y)*h.bankSlope,S<a[v]&&(a[v]=S)}}let o=this.blur(a,4);for(let h of this.layout.roads||[]){let u=h.points,d=h.width/2,f=Math.min(...u.map(S=>S[0]))-d-8,p=Math.max(...u.map(S=>S[0]))+d+8,x=Math.min(...u.map(S=>S[1]))-d-8,g=Math.max(...u.map(S=>S[1]))+d+8,m=Math.max(0,Math.floor((f+i)/e)),v=Math.min(t-1,Math.ceil((p+i)/e)),y=Math.max(0,Math.floor((x+i)/e)),M=Math.min(t-1,Math.ceil((g+i)/e));for(let S=y;S<=M;S++)for(let w=m;w<=v;w++){let T=-i+w*e,E=-i+S*e,_=1e12;for(let N=0;N<u.length-1;N++){let O=Gs(T,E,u[N][0],u[N][1],u[N+1][0],u[N+1][1]);O<_&&(_=O)}let b=Math.sqrt(_),C=1-oe(d*.7,d+1.5,b),z=S*t+w;C>this.roadMask[z]&&(this.roadMask[z]=C);let L=1-oe(d,d+7,b);this.riverDist[z]>3&&(a[z]=jt(a[z],o[z]-.08*C,L*.85))}}for(let h of this.layout.flatZones||[]){let u=h.h!==void 0?h.h:this.sampleAvg(a,h.x,h.z,h.hw,h.hd);h.h=u;let d=h.margin||4,f=Math.max(0,Math.floor((h.x-h.hw-d+i)/e)),p=Math.min(t-1,Math.ceil((h.x+h.hw+d+i)/e)),x=Math.max(0,Math.floor((h.z-h.hd-d+i)/e)),g=Math.min(t-1,Math.ceil((h.z+h.hd+d+i)/e));for(let m=x;m<=g;m++)for(let v=f;v<=p;v++){let y=-i+v*e,M=-i+m*e,S=Math.max(0,Math.abs(y-h.x)-h.hw),w=Math.max(0,Math.abs(M-h.z)-h.hd),T=Math.sqrt(S*S+w*w),E=1-oe(0,d,T),_=m*t+v;a[_]=jt(a[_],u,E*(h.strength??1)),h.noGrass&&T<1.5&&(this.grass[_]=255)}}this.computeNormals(),this.computeSplat();let l=-1/0,c=1/0;for(let h=0;h<a.length;h++)a[h]>l&&(l=a[h]),a[h]<c&&(c=a[h]);this.maxH=l,this.minH=c}blur(t,e){let{n:i}=this,n=new Float32Array(t.length),s=new Float32Array(t.length);for(let a=0;a<i;a++){let o=0,l=0;for(let c=-e;c<=e;c++){let h=Nt(c,0,i-1);o+=t[a*i+h],l++}for(let c=0;c<i;c++){n[a*i+c]=o/l;let h=Nt(c-e,0,i-1),u=Nt(c+e+1,0,i-1);o+=t[a*i+u]-t[a*i+h]}}for(let a=0;a<i;a++){let o=0,l=0;for(let c=-e;c<=e;c++){let h=Nt(c,0,i-1);o+=n[h*i+a],l++}for(let c=0;c<i;c++){s[c*i+a]=o/l;let h=Nt(c-e,0,i-1),u=Nt(c+e+1,0,i-1);o+=n[u*i+a]-n[h*i+a]}}return s}sampleAvg(t,e,i,n,s){let a=0,o=0;for(let l=-s;l<=s;l+=Math.max(1,s/3))for(let c=-n;c<=n;c+=Math.max(1,n/3))a+=this.heightAtArr(t,e+c,i+l),o++;return a/o}heightAtArr(t,e,i){let{n,cell:s,half:a}=this,o=(e+a)/s,l=(i+a)/s;o=Nt(o,0,n-1.001),l=Nt(l,0,n-1.001);let c=Math.floor(o),h=Math.floor(l),u=o-c,d=l-h,f=t[h*n+c],p=t[h*n+c+1],x=t[(h+1)*n+c],g=t[(h+1)*n+c+1];return(f*(1-u)+p*u)*(1-d)+(x*(1-u)+g*u)*d}heightAt(t,e){return this.heightAtArr(this.heights,t,e)}computeNormals(){let{n:t,cell:e}=this,i=this.heights;this.normals=new Float32Array(t*t*3);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let a=i[n*t+Math.max(0,s-1)],o=i[n*t+Math.min(t-1,s+1)],l=i[Math.max(0,n-1)*t+s],c=i[Math.min(t-1,n+1)*t+s],h=a-o,u=2*e,d=l-c,f=Math.hypot(h,u,d),p=(n*t+s)*3;this.normals[p]=h/f,this.normals[p+1]=u/f,this.normals[p+2]=d/f}}normalAt(t,e){let{n:i,cell:n,half:s}=this,a=Nt(Math.round((t+s)/n),0,i-1),l=(Nt(Math.round((e+s)/n),0,i-1)*i+a)*3;return[this.normals[l],this.normals[l+1],this.normals[l+2]]}computeSplat(){let{n:t,cell:e,half:i,def:n}=this;for(let s=0;s<t;s++)for(let a=0;a<t;a++){let o=s*t+a,l=-i+a*e,c=-i+s*e,h=this.heights[o],u=1-this.normals[o*3+1],d=this.grass[o]===255,f=n.splat(l,c,h,u,this.roadMask[o],this.riverDist[o],this.noise,d),p=f[0]+f[1]+f[2]+f[3]||1;this.splat[o*4]=f[0]/p,this.splat[o*4+1]=f[1]/p,this.splat[o*4+2]=f[2]/p,this.splat[o*4+3]=f[3]/p;let x=n.grassDensity(l,c,h,u,this.roadMask[o],this.riverDist[o],this.noise,f);d&&(x=0),this.waterLevel!==null&&h<this.waterLevel+.3&&(x=0),this.grass[o]=Nt(Math.round(x*255),0,254)}}raycast(t,e,i,n,s,a,o){if(e>this.maxH&&s>=0)return 1/0;let l=Math.max(.5,this.cell*.5),c=0,h=0,u=e-this.heightAt(t,i);if(u<0)return 0;for(;c<o;){c=Math.min(o,c+l);let d=t+n*c,f=e+s*c,p=i+a*c;if(f>this.maxH+.1&&s>=0)return 1/0;let x=f-this.heightAt(d,p);if(x<0){let g=h,m=c;for(let v=0;v<6;v++){let y=(g+m)*.5;e+s*y-this.heightAt(t+n*y,i+a*y)<0?m=y:g=y}return g}if(h=c,u=x,c>=o)break}return 1/0}buildMesh(t){let{n:e,cell:i,half:n,def:s}=this,a=new de;a.name="terrain";let o=s.terrainTextures.map(si),l=si("noise"),c=new pe({color:16777215,roughness:.95,metalness:0}),h={uT0:{value:o[0]},uT1:{value:o[1]},uT2:{value:o[2]},uT3:{value:o[3]},uNoise:{value:l},uTint0:{value:new dt().setRGB(...s.palette.t0)},uTint1:{value:new dt().setRGB(...s.palette.t1)},uTint2:{value:new dt().setRGB(...s.palette.t2)},uTint3:{value:new dt().setRGB(...s.palette.t3)},uMacro:{value:new dt().setRGB(...s.palette.macro)}};jn(c,"terrain",p=>{Object.assign(p.uniforms,h),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= tcol;`)}),c.userData.terrainUniforms=h,this.material=c;let u=48,d=e-1;for(let p=0;p<d;p+=u)for(let x=0;x<d;x+=u){let g=Math.min(u,d-x),m=Math.min(u,d-p),v=(g+1)*(m+1),y=new Float32Array(v*3),M=new Float32Array(v*3),S=new Float32Array(v*4),w=0;for(let C=0;C<=m;C++)for(let z=0;z<=g;z++){let L=x+z,N=p+C,O=N*e+L;y[w*3]=-n+L*i,y[w*3+1]=this.heights[O],y[w*3+2]=-n+N*i,M[w*3]=this.normals[O*3],M[w*3+1]=this.normals[O*3+1],M[w*3+2]=this.normals[O*3+2],S[w*4]=this.splat[O*4],S[w*4+1]=this.splat[O*4+1],S[w*4+2]=this.splat[O*4+2],S[w*4+3]=this.splat[O*4+3],w++}let T=new Uint32Array(g*m*6),E=0;for(let C=0;C<m;C++)for(let z=0;z<g;z++){let L=C*(g+1)+z,N=L+1,O=L+(g+1),U=O+1;z+C&1?(T[E++]=L,T[E++]=O,T[E++]=N,T[E++]=N,T[E++]=O,T[E++]=U):(T[E++]=L,T[E++]=O,T[E++]=U,T[E++]=L,T[E++]=U,T[E++]=N)}let _=new fe;_.setAttribute("position",new ue(y,3)),_.setAttribute("normal",new ue(M,3)),_.setAttribute("splat",new ue(S,4)),_.setIndex(new ue(T,1)),_.computeBoundingBox(),_.computeBoundingSphere();let b=new Ot(_,c);b.receiveShadow=!0,b.castShadow=!0,a.add(b)}t.add(a),this.mesh=a;let f=new Uint16Array(e*e);for(let p=0;p<e*e;p++)f[p]=zd.toHalfFloat(this.heights[p]);return this.heightTex=new Hi(f,e,e,Os,Te),this.heightTex.minFilter=this.heightTex.magFilter=je,this.heightTex.needsUpdate=!0,this.grassTex=new Hi(this.grass,e,e,Os,hi),this.grassTex.minFilter=this.grassTex.magFilter=je,this.grassTex.needsUpdate=!0,a}renderMapImage(t=512,e){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),s=n.createImageData(t,t),a=s.data,o=this.def.mapColors;for(let l=0;l<t;l++)for(let c=0;c<t;c++){let h=-this.half+(c+.5)/t*this.size,u=-this.half+(l+.5)/t*this.size,d=this.heightAt(h,u),f=Math.round((h+this.half)/this.cell),p=Math.round((u+this.half)/this.cell),x=Nt(p,0,this.n-1)*this.n+Nt(f,0,this.n-1),g=[this.splat[x*4],this.splat[x*4+1],this.splat[x*4+2],this.splat[x*4+3]],m=0,v=0,y=0;for(let E=0;E<4;E++)m+=o[E][0]*g[E],v+=o[E][1]*g[E],y+=o[E][2]*g[E];let M=this.heightAt(h+2,u)-this.heightAt(h-2,u),S=this.heightAt(h,u+2)-this.heightAt(h,u-2),w=Nt(1-(M*.5+S*.5)*.12,.6,1.35);if(m*=w,v*=w,y*=w,this.waterLevel!==null&&d<this.waterLevel){let E=Nt((this.waterLevel-d)/4,0,1);m=jt(90,40,E),v=jt(130,85,E),y=jt(150,120,E)}let T=(l*t+c)*4;a[T]=Nt(m,0,255),a[T+1]=Nt(v,0,255),a[T+2]=Nt(y,0,255),a[T+3]=255}if(n.putImageData(s,0,0),e){let l=t/this.size;for(let c of e)n.fillStyle=c.color||"rgba(70,64,58,0.9)",n.fillRect((c.minX+this.half)*l,(c.minZ+this.half)*l,Math.max(1,(c.maxX-c.minX)*l),Math.max(1,(c.maxZ-c.minZ)*l))}return i}};var Ca=class r{constructor(t){this.terrain=t,this.half=t.half,this.dim=Math.ceil(t.size/4),this.cells=new Array(this.dim*this.dim);for(let e=0;e<this.cells.length;e++)this.cells[e]=[];this.boxes=[],this.stamp=1,this.softOccluders=[],this.softGrid=null}cellIndex(t,e){let i=Math.floor((t+this.half)/4),n=Math.floor((e+this.half)/4);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}addBox(t){t.id=this.boxes.length,t.alive=!0,t._stamp=0,this.boxes.push(t);let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let o=e;o<=i;o++)this.cells[a*this.dim+o].push(t);return t}removeBox(t){if(!t.alive)return;t.alive=!1;let e=Math.max(0,Math.floor((t.minX+this.half)/4)),i=Math.min(this.dim-1,Math.floor((t.maxX+this.half)/4)),n=Math.max(0,Math.floor((t.minZ+this.half)/4)),s=Math.min(this.dim-1,Math.floor((t.maxZ+this.half)/4));for(let a=n;a<=s;a++)for(let o=e;o<=i;o++){let l=this.cells[a*this.dim+o],c=l.indexOf(t);c>=0&&(l[c]=l[l.length-1],l.pop())}}query(t,e,i,n,s){let a=++this.stamp,o=Math.max(0,Math.floor((t+this.half)/4)),l=Math.min(this.dim-1,Math.floor((i+this.half)/4)),c=Math.max(0,Math.floor((e+this.half)/4)),h=Math.min(this.dim-1,Math.floor((n+this.half)/4));for(let u=c;u<=h;u++)for(let d=o;d<=l;d++){let f=this.cells[u*this.dim+d];for(let p=0;p<f.length;p++){let x=f[p];if(x._stamp!==a&&(x._stamp=a,!(x.maxX<t||x.minX>i||x.maxZ<e||x.minZ>n)&&s(x)===!1))return}}}static rayBox(t,e,i,n,s,a,o,l){let c=(o.minX-t)*n,h=(o.maxX-t)*n,u=Math.min(c,h),d=Math.max(c,h),f=0;c=(o.minY-e)*s,h=(o.maxY-e)*s;let p=Math.min(c,h),x=Math.max(c,h);return p>u&&(u=p,f=1),x<d&&(d=x),c=(o.minZ-i)*a,h=(o.maxZ-i)*a,p=Math.min(c,h),x=Math.max(c,h),p>u&&(u=p,f=2),x<d&&(d=x),d<0||u>d||u>l?null:[u,d,f]}raycast(t,e,i,n,s,a,o,l=null){let c=1/(n||1e-9),h=1/(s||1e-9),u=1/(a||1e-9),d=o,f=null,p=0,x=0,g=++this.stamp,m=l&&l.ignore,v=Math.floor((t+this.half)/4),y=Math.floor((i+this.half)/4),M=n>0?1:-1,S=a>0?1:-1,w=(v+(M>0?1:0))*4-this.half,T=(y+(S>0?1:0))*4-this.half,E=Math.abs(n)<1e-9?1/0:(w-t)/n,_=Math.abs(a)<1e-9?1/0:(T-i)/a,b=Math.abs(n)<1e-9?1/0:4/Math.abs(n),C=Math.abs(a)<1e-9?1/0:4/Math.abs(a),z=0;for(let j=0;j<2e3;j++){if(v>=0&&y>=0&&v<this.dim&&y<this.dim){let rt=this.cells[y*this.dim+v];for(let st=0;st<rt.length;st++){let _t=rt[st];if(_t._stamp===g||(_t._stamp=g,m&&m(_t)))continue;let Y=r.rayBox(t,e,i,c,h,u,_t,d);Y&&Y[0]>=0&&Y[0]<d?(d=Y[0],f=_t,p=Y[2],x=Y[1]):Y&&Y[0]<0&&Y[1]>0&&0<d&&!(l&&l.skipInside)&&(d=0,f=_t,p=Y[2],x=Y[1])}}if(z=Math.min(E,_),z>d||(E<_?(E+=b,v+=M):(_+=C,y+=S),v<-1&&M<0||v>this.dim&&M>0||y<-1&&S<0||y>this.dim&&S>0))break}let L=1/0;if((!l||l.terrain!==!1)&&(L=this.terrain.raycast(t,e,i,n,s,a,d)),L<d){let j=t+n*L,rt=e+s*L,st=i+a*L,_t=this.terrain.normalAt(j,st);return{t:L,x:j,y:rt,z:st,nx:_t[0],ny:_t[1],nz:_t[2],box:null,thickness:99}}if(!f)return null;let N=t+n*d,O=e+s*d,U=i+a*d,X=0,F=0,B=0;return p===0?X=n>0?-1:1:p===1?F=s>0?-1:1:B=a>0?-1:1,{t:d,x:N,y:O,z:U,nx:X,ny:F,nz:B,box:f,thickness:x-d}}los(t,e,i,n,s,a,o){let l=n-t,c=s-e,h=a-i,u=Math.sqrt(l*l+c*c+h*h);return u<.01?!0:!this.raycast(t,e,i,l/u,c/u,h/u,u-.05,o)}addSoft(t){if(!this.softGrid){this.softDim=Math.ceil(this.terrain.size/16),this.softGrid=new Array(this.softDim*this.softDim);for(let a=0;a<this.softGrid.length;a++)this.softGrid[a]=[]}let e=Math.max(0,Math.floor((t.x-t.r+this.half)/16)),i=Math.min(this.softDim-1,Math.floor((t.x+t.r+this.half)/16)),n=Math.max(0,Math.floor((t.z-t.r+this.half)/16)),s=Math.min(this.softDim-1,Math.floor((t.z+t.r+this.half)/16));t._s=0;for(let a=n;a<=s;a++)for(let o=e;o<=i;o++)this.softGrid[a*this.softDim+o].push(t)}addDynamicSoft(t){this.softOccluders.push(t)}static _softTest(t,e,i,n,s,a,o,l,c){let h=t.x-e,u=t.y-i,d=t.z-n,f=(h*s+u*a+d*o)/l;if(f<0||f>1)return!1;let p=e+s*f-t.x,x=i+a*f-t.y,g=n+o*f-t.z,m=t.r*(t.grow?t.grow(c):1);return p*p+x*x+g*g<m*m}softVisibility(t,e,i,n,s,a,o){let l=1,c=n-t,h=s-e,u=a-i,d=c*c+h*h+u*u;if(d<1e-6)return 1;for(let m=this.softOccluders.length-1;m>=0;m--){let v=this.softOccluders[m];if(v.until&&v.until<o){this.softOccluders.splice(m,1);continue}if(r._softTest(v,t,e,i,c,h,u,d,o)&&(l*=1-v.strength,l<.02))return 0}if(!this.softGrid)return l;let f=++this.stamp,p=Math.sqrt(d),x=Math.ceil(p/8)+1,g=-1;for(let m=0;m<=x;m++){let v=m/x,y=t+c*v,M=i+u*v,S=Math.floor((y+this.half)/16),w=Math.floor((M+this.half)/16);if(S<0||w<0||S>=this.softDim||w>=this.softDim)continue;let T=w*this.softDim+S;if(T===g)continue;g=T;let E=this.softGrid[T];for(let _=0;_<E.length;_++){let b=E[_];if(b._s!==f&&(b._s=f,r._softTest(b,t,e,i,c,h,u,d,o)&&(l*=1-b.strength,l<.02)))return 0}}return l}groundAt(t,e,i,n=.25){let s=this.terrain.heightAt(t,e);return this.query(t-n,e-n,t+n,e+n,a=>{a.maxY<=i+.05&&a.maxY>s&&!a.noStand&&(s=a.maxY)}),s}move(t,e,i,n,s,a,o){o.hitWall=!1,o.ceiling=!1,o.stepped=!1;let l=o.grounded;for(let f=0;f<2;f++){let p=(f===0?e.x:e.z)*i;p!==0&&(f===0?t.x+=p:t.z+=p,this._resolveHorizontal(t,n,s,f,p,a,l,o))}t.y+=e.y*i,o.grounded=!1;let c=this.terrain.heightAt(t.x,t.z),h=c,u=1/0;this.query(t.x-n,t.z-n,t.x+n,t.z+n,f=>{f.noCollide||t.x+n<=f.minX||t.x-n>=f.maxX||t.z+n<=f.minZ||t.z-n>=f.maxZ||(f.maxY<=t.y+.35+(e.y<0?-e.y*i:0)?f.maxY>h&&(h=f.maxY):f.minY>=t.y+s*.5&&f.minY<u&&(u=f.minY))}),t.y+s>u&&e.y>0&&(t.y=u-s,e.y=0,o.ceiling=!0),t.y<=h+.001?(t.y=h,e.y<0&&(e.y=0),o.grounded=!0):l&&e.y<=0&&t.y-h<a*.9&&(t.y=h,e.y=0,o.grounded=!0),o.groundY=h,o.onTerrain=h===c;let d=this.half-2;return t.x<-d&&(t.x=-d),t.x>d&&(t.x=d),t.z<-d&&(t.z=-d),t.z>d&&(t.z=d),o}_resolveHorizontal(t,e,i,n,s,a,o,l){let c=0,h=!0;for(;h&&c++<4;){h=!1;let u=null;if(this.query(t.x-e,t.z-e,t.x+e,t.z+e,d=>{if(!d.noCollide&&!(t.x+e<=d.minX||t.x-e>=d.maxX||t.z+e<=d.minZ||t.z-e>=d.maxZ)&&!(d.maxY<=t.y+.02||d.minY>=t.y+i))return u=d,!1}),!u)break;if(o&&u.maxY-t.y<=a){let d=u.maxY;if(!this.overlapsAny(t.x,d+.01,t.z,e,i)){t.y=d,l.stepped=!0,h=!0;continue}}l.hitWall=!0,n===0?t.x=s>0?u.minX-e-.001:u.maxX+e+.001:t.z=s>0?u.minZ-e-.001:u.maxZ+e+.001,h=!0}}overlapsAny(t,e,i,n,s){let a=!1;return this.query(t-n,i-n,t+n,i+n,o=>{if(!o.noCollide&&!(t+n<=o.minX||t-n>=o.maxX||i+n<=o.minZ||i-n>=o.maxZ)&&!(o.maxY<=e||o.minY>=e+s))return a=!0,!1}),a}};var Pr={wood:{hp:70,pen:.35,tex:"wood",scale:.55,rough:.9,debris:9071176,sound:"wood"},plaster:{hp:170,pen:.8,tex:"plaster",scale:.35,rough:.95,debris:13617339,sound:"stone"},brick:{hp:280,pen:2,tex:"brick",scale:.5,rough:.92,debris:10514522,sound:"stone"},concrete:{hp:420,pen:3,tex:"concrete",scale:.25,rough:.9,debris:11118496,sound:"stone"},metal:{hp:160,pen:.55,tex:"metal",scale:.5,rough:.55,metal:.35,debris:9409430,sound:"metal"},container:{hp:3e3,pen:.9,tex:"metal",scale:.4,rough:.6,metal:.3,debris:8022618,sound:"metal"},sand:{hp:260,pen:6,tex:"sandbag",scale:1,rough:1,debris:12100474,sound:"dirt"},hay:{hp:45,pen:.6,tex:"hay",scale:.6,rough:1,debris:13808746,sound:"dirt"},cloth:{hp:25,pen:.05,tex:"cloth",scale:.8,rough:1,debris:13421772,sound:"dirt"},stone:{hp:340,pen:4,tex:"rock",scale:.45,rough:.95,debris:9407364,sound:"stone"}},R1=3,Ra=class{constructor(t){this.world=t,this.coll=t.collision,this.terrain=t.terrain,this.pieces=[],this.byCat={},this.decor=[],this.footprints=[],this.meshes={},this.rng=qe(t.def.seed*7+3)}piece(t,e,i,n,s,a,o,l={}){let c=Pr[t],h={minX:Math.min(e,s),minY:Math.min(i,a),minZ:Math.min(n,o),maxX:Math.max(e,s),maxY:Math.max(i,a),maxZ:Math.max(n,o),cat:t,mat:t,color:l.color??16777215,hp:(l.hp??c.hp)*(l.hpMul||1),destructible:l.destructible!==!1,navFloor:!!l.navFloor,vault:!!l.vault,pen:c.pen,noCollide:!!l.noCollide,noStand:!!l.noStand,below:[],above:[],inst:-1,grounded:l.grounded!==!1,building:l.building||null};return h.maxHp=h.hp,this.coll.addBox(h),this.pieces.push(h),(this.byCat[t]=this.byCat[t]||[]).push(h),h}frame(t,e,i,n){let s=this,a=(o,l)=>{switch(i&3){case 0:return[t+o,e+l];case 1:return[t-l,e+o];case 2:return[t-o,e-l];default:return[t+l,e-o]}};return{tf:a,y0:n,box(o,l,c,h,u,d,f,p){let[x,g]=a(l,h),[m,v]=a(u,f);return s.piece(o,x,n+c,g,m,n+d,v,p)},decor(o,l,c,h,u=0){let[d,f]=a(l,h);o.rotateY(-(i&3)*Math.PI/2+u),o.translate(d,n+c,f),s.decor.push(o)}}}wall(t,e,i,n,s,a,o,l,c,h={}){let u=h.thick||.3,d=[],f=(m,v,y,M)=>{if(v-m<.05||M-y<.05)return null;let S;return i==="x"?S=t.box(e,m,y,n-u/2,v,M,n+u/2,{color:c,building:h.building,hpMul:h.hpMul}):S=t.box(e,n-u/2,y,m,n+u/2,M,v,{color:c,building:h.building,hpMul:h.hpMul}),S._a0=m,S._a1=v,S._y0=y,S._y1=M,d.push(S),S},p=(m,v,y,M,S=1)=>{let w=Math.max(1,Math.round((v-m)/1.5)),T=(M-y)/S;for(let E=0;E<S;E++)for(let _=0;_<w;_++)f(y+E*T,y+(E+1)*T,m+(v-m)*_/w,m+(v-m)*(_+1)/w)},x=o+l,g=s;for(let m=0;m<a.length;m++){let v=a[m],y=g,M=g+2;if(v==="solid")p(o,x,y,M,2);else if(v==="window")p(o,o+1,y,M,2),f(y,y+.4,o+1,o+2.2),f(M-.4,M,o+1,o+2.2),p(o+2.2,x,y,M,1);else if(v==="slit")p(o,o+1.25,y,M,2),f(y,y+.3,o+1.25,o+1.65),f(M-.3,M,o+1.25,o+1.65),p(o+1.65,x,y,M,1);else if(v==="door")p(o,o+2.3,y,y+.3,1),p(o,o+2.3,M-.3,M,1),p(o+2.3,x,y,M,1);else if(v==="wide"){let S=g+4,w=Math.min(l-.6,4.2);p(o,o+w,y,y+.3,1),p(o,o+w,S-.3,S,1),p(o+w,x,y,S,2),g+=4;continue}g+=2}for(let m of d){if(m._y0<=o+.01){m.grounded=!0;continue}m.grounded=!1;for(let v of d)v!==m&&Math.abs(v._y1-m._y0)<.02&&v._a1>m._a0+.05&&v._a0<m._a1-.05&&(m.below.push(v),v.above.push(m));m.below.length===0&&(m.grounded=!0)}return d}storey(t,e,i,n,s,a,o,l,c){this.wall(t,e,"x",-n,-i,l.n,s,a,o,c),this.wall(t,e,"x",n,-i,l.s,s,a,o,c),this.wall(t,e,"z",-i,-n,l.w,s,a,o,c),this.wall(t,e,"z",i,-n,l.e,s,a,o,c)}randomMods(t,e,i,n=.55,s="door"){let a=[];for(let o=0;o<t;o++)a.push(i()<n?"window":"solid");return e!=null&&e>=0&&e<t&&(a[e]=s),a}footprint(t,e,i,n,s,a){let o=i&1,l=o?s:n,c=o?n:s,h={minX:t-l,maxX:t+l,minZ:e-c,maxZ:e+c,color:a};return this.footprints.push(h),h}building(t,e,i,n=0,s={}){let a=this.rng,o=s.y??this.terrain.heightAt(e,i),l={type:t,cx:e,cz:i,rot:n};switch(t){case"house":return this.house(e,i,n,o,Object.assign({w:5,d:4,floors:1},s),l);case"house2":return this.house(e,i,n,o,Object.assign({w:5,d:4,floors:2},s),l);case"shop":return this.house(e,i,n,o,Object.assign({w:4,d:4,floors:a()<.45?2:1,flat:!0,cat:"plaster"},s),l);case"barn":return this.barn(e,i,n,o,s,l);case"warehouse":return this.warehouse(e,i,n,o,s,l);case"shed":return this.house(e,i,n,o,Object.assign({w:2,d:2,floors:1,cat:"wood",H:2.8,noInterior:!0,winP:.3,color:10518624},s),l);case"bunker":return this.house(e,i,n,o,Object.assign({w:3,d:3,floors:1,cat:"concrete",H:2.7,flat:!0,slits:!0,noInterior:!0,color:12104872},s),l);case"church":return this.church(e,i,n,o,s,l);case"ruin":return this.house(e,i,n,o,Object.assign({w:4,d:4,floors:1,ruin:!0,noRoof:!0,flat:!0},s),l);case"pumphouse":return this.house(e,i,n,o,Object.assign({w:4,d:3,floors:1,cat:"concrete",H:3.6,flat:!0,noInterior:!0,color:13091509},s),l);default:throw new Error("unknown building "+t)}}house(t,e,i,n,s,a){let o=this.rng,l=this.frame(t,e,i,n),c=s.w,h=s.d,u=c,d=h,f=s.H||R1,p=s.cat||(o()<.3?"brick":"plaster"),x=s.palette||(p==="brick"?[14203040,13213834,14731444]:this.world.def.wallColors),g=s.color??x[Math.floor(o()*x.length)],m=s.floors,v={building:a};this.footprint(t,e,i,u,d),l.box("concrete",-u,-.6,-d,u,.12,d,{destructible:!1,navFloor:!0,color:10328722});for(let y=0;y<m;y++){let M=y*f+(y>0?.12:-.15),S=y>0?f-.12:f+.15,w=y===0?Math.floor(c/2):-1,T=y===0&&o()<.6?Math.floor(o()*c):-1,E=y===0&&!s.noSideDoor&&o()<.35?Math.floor(h/2):-1,_=s.winP??.55,b={n:this.randomMods(c,w,o,_),s:this.randomMods(c,T,o,_),e:this.randomMods(h,E,o,_),w:this.randomMods(h,-1,o,_)};if(s.slits)for(let C of["n","s","e","w"])b[C]=b[C].map(z=>(z==="window"||z==="solid")&&o()<.6?"slit":z);if(this.storey(l,p,u,d,M,S,g,b,v),y===0&&m===1&&c>=4&&!s.noInterior){let C=o()<.5?2:c-2,z=[];for(let L=0;L<h;L++)z.push("solid");z[Math.floor(o()*h)]="door",this.wall(l,"plaster","z",-u+C*2,-d+.15,z,M,S,15131094,Object.assign({thick:.2},v))}}if(m>1){let S=(f+.12-.12)/12,w=-u+.3,T=d-1.25,E=d-.16;for(let b=0;b<12;b++)l.box("wood",w+b*.28,.12,T,w+(b+1)*.28,.12+S*(b+1),E,{destructible:!1,color:9136970});let _=w+12*.28+.05;for(let b=1;b<m;b++){let C=b*f;l.box("concrete",-u,C-.05,-d,u,C+.12,T-.05,{destructible:!1,color:11117722}),l.box("concrete",_,C-.05,T-.05,u,C+.12,d,{destructible:!1,color:11117722})}}if(!s.noRoof){let y=m*f;if(l.box("concrete",-u-.2,y,-d-.2,u+.2,y+.25,d+.2,{destructible:!1,color:s.flat?12169893:9341572,noStand:!1}),!s.flat&&!this.world.def.flatRoofs){let M=this.world.def.roofColors[Math.floor(o()*this.world.def.roofColors.length)],w=c>=h?P.prism(c*2+.6,Math.min(h,4)*.55,h*2+.6,M):P.prism(h*2+.6,Math.min(c,4)*.55,c*2+.6,M,0,0,0,Math.PI/2);l.decor(w,0,y+.25,0)}else l.decor(P.box(u*2+.4,.35,.2,11051153,0,.17,0),0,y+.25,-d-.1),l.decor(P.box(u*2+.4,.35,.2,11051153,0,.17,0),0,y+.25,d+.1),l.decor(P.box(.2,.35,d*2+.4,11051153,0,.17,0),-u-.1,y+.25,0),l.decor(P.box(.2,.35,d*2+.4,11051153,0,.17,0),u+.1,y+.25,0)}if(s.ruin){for(let y of this.pieces.slice(-200))y.building===a&&y.destructible&&y.minY>n+.5&&this.rng()<.45&&(y.alive=!1,this.coll.removeBox(y),y.ruined=!0);this.prop("rubble",t+1.5,e-1.5,0)}if(!s.ruin&&c>=3&&this.rng()<.7){let[y,M]=l.tf(u-1.2,-d+1.2);this.prop("crate",y,M,0,{y:n+.12,size:.9})}return a}barn(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=s.w||6,c=s.d||5,h=l,u=c,d=s.H||5.5,f=s.color??10111546;this.footprint(t,e,i,h,u),o.box("concrete",-h,-.6,-u,h,.08,u,{destructible:!1,navFloor:!0,color:9273456});let p=Math.floor(l/2)-1,x=(g,m)=>{let v=[];for(let y=0;y<g;y++)y===m?(v.push("wide"),y++):v.push(this.rng()<.2?"window":"solid");return v};this.storey(o,"wood",h,u,-.15,d+.15,f,{n:x(l,p),s:x(l,p),e:x(c,-1),w:this.randomMods(c,Math.floor(c/2),this.rng,.2)},{building:a,thick:.25}),o.box("wood",-h-.3,d,-u-.3,h+.3,d+.2,u+.3,{destructible:!1,color:7032896}),o.decor(P.prism(l*2+.8,3.2,c*2+.8,6115656),0,d+.2,0);for(let g=0;g<4;g++){let[m,v]=o.tf(-h+1.5+this.rng()*(h*2-3),(this.rng()<.5?-1:1)*(u-1.4));this.prop("hay",m,v,this.rng()<.5?0:1,{y:n+.08})}return a}warehouse(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=s.w||10,c=s.d||6,h=l,u=c,d=s.H||7,f=s.cat||"metal",p=s.color??(f==="wood"?9400916:[11121592,12037010,10135450][Math.floor(this.rng()*3)]);this.footprint(t,e,i,h,u),o.box("concrete",-h,-.6,-u,h,.1,u,{destructible:!1,navFloor:!0,color:10131343});let x=(y,M,S)=>{let w=[];for(let T=0;T<y;T++)T===M||T===S?(w.push("wide"),T++):w.push("solid");return w},g=Math.floor(c/2),m=[];for(let y=0;y<c;y++)m.push(y===g?"door":this.rng()<.25?"window":"solid");let v=m.slice();v[g]=this.rng()<.5?"door":"solid",this.storey(o,f,h,u,-.15,d+.15,p,{n:x(l,1,l-3),s:x(l,Math.floor(l/2)-1,-9),e:m,w:v},{building:a,thick:.2}),o.box("metal",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:7831428}),o.decor(P.prism(l*2+.6,1.4,c*2+.6,7305084),0,d+.25,0);for(let y=0;y<6;y++){let[M,S]=o.tf(-h+2+this.rng()*(h*2-4),-u+2.5+this.rng()*(u*2-5));this.prop(this.rng()<.4?"crateStack":"crate",M,S,0,{y:n+.1})}return a}church(t,e,i,n,s,a){let o=this.frame(t,e,i,n),l=5,c=9,h=l,u=c,d=6.5,f=14275267;this.footprint(t,e,i,h,u+4),o.box("concrete",-h,-.6,-u,h,.12,u,{destructible:!1,navFloor:!0,color:10131086});let p=[];for(let v=0;v<c;v++)p.push(v%2?"window":"solid");p[2]="door";let x=["solid","solid","door","solid","solid"];this.storey(o,"brick",h,u,-.15,d+.15,f,{n:x,s:["solid","window","solid","window","solid"],e:p,w:p.slice().reverse()},{building:a,thick:.4}),o.box("concrete",-h-.3,d,-u-.3,h+.3,d+.25,u+.3,{destructible:!1,color:8220260}),o.decor(P.prism(c*2+.6,4.2,l*2+.6,7232076,0,0,0,Math.PI/2),0,d+.25,0);let g=-u-2,m=this.frame(...o.tf(0,g),i,n);return m.box("concrete",-2,-.6,-2,2,.12,2,{destructible:!1,navFloor:!0,color:10131086}),this.storey(m,"brick",2,2,-.15,14.15,f,{n:["door","solid"],s:["solid","solid"],e:["solid","solid"],w:["solid","solid"]},{building:a,thick:.4}),m.box("concrete",-2.2,14,-2.2,2.2,14.3,2.2,{destructible:!1,color:8220260}),m.decor(P.pyramid(4.6,5,5983298),0,14.3,0),m.decor(P.box(.15,1.6,.15,4473924,0,.8,0),0,19.3,0),m.decor(P.box(.8,.15,.15,4473924,0,0,0),0,20.4,0),a}prop(t,e,i,n=0,s={}){let a=this.rng,o=s.y??this.terrain.heightAt(e,i),l=this.frame(e,i,n,o);switch(t){case"crate":{let c=s.size||1.2;l.box("wood",-c/2,0,-c/2,c/2,c,c/2,{color:s.color??[11570527,10255186,8227418][Math.floor(a()*3)],hp:60});break}case"crateStack":{l.box("wood",-1.2,0,-.6,0,1.2,.6,{color:11044438}),l.box("wood",0,0,-.6,1.2,1.2,.6,{color:10255186});let c=l.box("wood",-.6,1.2,-.6,.6,2.4,.6,{color:11570527});c.grounded=!1;break}case"container":{let c=[10173231,3104651,4160074,12159534,8224125,9129775],h=s.color??c[Math.floor(a()*c.length)],u=l.box("container",-1.22,0,-3.03,1.22,2.6,3.03,{color:h,destructible:!1});if(s.stack){let d=l.box("container",-1.22,2.6,-3.03,1.22,5.2,3.03,{color:c[Math.floor(a()*c.length)],destructible:!1});d.grounded=!1}this.footprint(e,i,n,1.22,3.03,"rgba(90,80,70,0.9)");break}case"sandbags":{let c=s.n||2;for(let h=0;h<c;h++)l.box("sand",-c/2+h,0,-.3,-c/2+h+1,.95,.3,{color:16777215,vault:!0});break}case"sandbagRing":{for(let c=-2;c<2;c++)l.box("sand",c,0,-1.6,c+1,1,-1,{vault:!0});for(let c=-1;c<1;c++)l.box("sand",-2.3,0,c,-1.7,1,c+1,{vault:!0}),l.box("sand",1.7,0,c,2.3,1,c+1,{vault:!0});break}case"hesco":{let c=s.n||3;for(let h=0;h<c;h++)l.box("sand",-c*.55+h*1.1,0,-.55,-c*.55+(h+1)*1.1,1.3,.55,{color:13153418,hpMul:2.2});break}case"jersey":{let c=s.n||1;for(let h=0;h<c;h++)l.box("concrete",-c+h*2,0,-.28,-c+(h+1)*2-.05,.85,.28,{color:12894390,vault:!0});break}case"fence":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("wood",-c+h*2,u,-.05,-c+(h+1)*2,u+1.05,.05,{color:9072208,hp:30,vault:!0})}break}case"stoneWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("stone",-c+h*2,u-.2,-.3,-c+(h+1)*2,u+1,.3,{color:12433066,vault:!0})}break}case"compoundWall":{let c=s.n||4;for(let h=0;h<c;h++){let u=this.terrain.heightAt(...l.tf(-c+h*2+1,0))-o;l.box("plaster",-c+h*2,u-.3,-.2,-c+h*2+1,u+2.3,.2,{color:s.color??14272420}),l.box("plaster",-c+h*2+1,u-.3,-.2,-c+(h+1)*2,u+2.3,.2,{color:s.color??14272420})}break}case"hay":l.box("hay",-.6,0,-.8,.6,1.1,.8,{color:16777215});break;case"haystack":{l.box("hay",-1.2,0,-.8,0,1.1,.8,{}),l.box("hay",0,0,-.8,1.2,1.1,.8,{});let c=l.box("hay",-.6,1.1,-.8,.6,2.2,.8,{});c.grounded=!1;break}case"car":{let c=[7158322,4872810,8024674,6187850,9080724,4013376],h=s.color??c[Math.floor(a()*c.length)];l.box("metal",-.9,.25,-2.1,.9,1.05,2.1,{color:h,destructible:!1}),l.box("metal",-.8,1.05,-1,.8,1.6,.9,{color:h,destructible:!1});for(let[u,d]of[[-.85,-1.3],[.85,-1.3],[-.85,1.3],[.85,1.3]])l.decor(P.cyl(.36,.36,.25,8,1907997,0,0,0,0,0,Math.PI/2),u,.36,d);l.decor(P.box(1.5,.45,.06,2766144,0,0,0,-.5),0,1.33,-1.05),this.footprint(e,i,n,.9,2.1,"rgba(60,60,60,0.9)");break}case"waterTower":{for(let[c,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])l.box("wood",c-.15,0,h-.15,c+.15,6,h+.15,{destructible:!1,color:7035464});l.box("wood",-1.8,6,-1.8,1.8,6.25,1.8,{destructible:!1,color:7035464}),l.decor(P.cyl(1.7,1.7,3.2,10,8350293),0,7.85,0),l.decor(P.cone(1.9,1,10,5918016),0,9.95,0);break}case"radioTower":{let c=s.h||42,h=[[-2.5,-2.5],[2.5,-2.5],[-2.5,2.5],[2.5,2.5]],u=[];for(let[d,f]of h)l.box("metal",d-.2,0,f-.2,d+.2,3,f+.2,{destructible:!1,color:11549230}),u.push(P.box(.18,c,.18,12105912,d*.5,c/2,f*.5,f*.05,0,-d*.05));for(let d=4;d<c;d+=4){let f=2.5*(1-d/c*.55),p=d/4%2?12599344:15263976;u.push(P.box(f*2,.12,.12,p,0,d,-f)),u.push(P.box(f*2,.12,.12,p,0,d,f)),u.push(P.box(.12,.12,f*2,p,-f,d,0)),u.push(P.box(.12,.12,f*2,p,f,d,0))}u.push(P.box(.6,.6,.6,16724e3,0,c+.3,0)),l.decor(P.merge(u),0,0,0);break}case"stall":{let c=[12077626,3832504,14198842,4889178][Math.floor(a()*4)];for(let[h,u]of[[-1.4,-1],[1.4,-1],[-1.4,1],[1.4,1]])l.box("wood",h-.06,0,u-.06,h+.06,2.4,u+.06,{color:6967872,hp:40});l.box("cloth",-1.6,2.4,-1.2,1.6,2.5,1.2,{color:c,noStand:!0,grounded:!1}),l.box("wood",-1.3,0,-.5,1.3,.9,.3,{color:9071178,vault:!0});break}case"logs":{for(let c=0;c<3;c++)l.box("wood",-2.5,c*.5,-1.2+c*.25,2.5,(c+1)*.5,1.2-c*.25,{color:8018490,vault:c===0});break}case"tank":{l.box("metal",-1.6,0,-1.6,1.6,3.4,1.6,{color:s.color??14210248,destructible:!1,noCollide:!1}),l.decor(P.cyl(1.75,1.75,.3,12,10132122),0,3.5,0);break}case"pipe":{let c=s.len||10;l.box("metal",-c/2,.3,-.35,c/2,1,.35,{color:9080724,destructible:!1,vault:!0});break}case"pier":{let c=s.len||30,h=s.w||6,u=(s.deckY??1.6)-o;l.box("concrete",-h/2,u-.8,0,h/2,u,c,{destructible:!1,navFloor:!0,color:11578530});for(let d=4;d<c;d+=8)for(let f of[-h/2+.4,h/2-.4])l.box("concrete",f-.3,u-8,d-.3,f+.3,u-.8,d+.3,{destructible:!1,color:9407362});for(let d=3;d<c;d+=6)l.decor(P.cyl(.18,.22,.5,6,3355443),h/2-.4,u+.25,d);this.footprint(e,i,n,h/2,c/2,"rgba(150,145,135,0.9)");break}case"bridge":{let c=s.len||40,h=s.w||8,u=(s.deckY??3)-o;l.box("concrete",-h/2,u-.7,-c/2,h/2,u,c/2,{destructible:!1,navFloor:!0,color:11117979});for(let d of[-h/2+.15,h/2-.15])l.box("concrete",d-.15,u,-c/2,d+.15,u+.9,c/2,{destructible:!1,color:12236202});for(let d=-c/2+8;d<c/2-4;d+=10)l.box("concrete",-h/2+.5,u-9,d-.6,h/2-.5,u-.7,d+.6,{destructible:!1,color:9209983});break}case"tent":{let c=s.color??7040590;l.box("cloth",-2,0,-2.5,-1.9,1.6,2.5,{color:c}),l.box("cloth",1.9,0,-2.5,2,1.6,2.5,{color:c}),l.box("cloth",-2,0,2.4,2,1.6,2.5,{color:c}),l.decor(P.prism(5.2,1.3,4.2,c),0,1.6,0);break}case"grave":l.box("stone",-.3,0,-.08,.3,.75,.08,{color:11117722,vault:!0});break;case"barrels":{for(let c=0;c<(s.n||3);c++)l.box("metal",-.9+c*.65,0,-.3,-.3+c*.65,.95,.3,{color:[3824266,9058858,4876858][c%3],hp:80});break}case"watchtower":{for(let[c,h]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])l.box("wood",c-.12,0,h-.12,c+.12,5,h+.12,{destructible:!1,color:7035464});l.box("wood",-1.6,4.8,-1.6,1.6,5,1.6,{destructible:!1,color:8021584});for(let c of[-1,1])l.box("wood",-1.6,5,c*1.55-.05,1.6,6,c*1.55+.05,{color:9074272,grounded:!1}),l.box("wood",c*1.55-.05,5,-1.6,c*1.55+.05,6,1.6,{color:9074272,grounded:!1});l.decor(P.pyramid(3.6,1.2,5917242),0,7.4,0);for(let[c,h]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])l.decor(P.box(.1,1.4,.1,7035464,0,.7,0),c,6,h);for(let c=0;c<9;c++)l.box("wood",-.4,.5*c,1.7,.4,.5*c+.08,1.95,{destructible:!1,color:7035464,noCollide:!1});break}case"rubble":{for(let c=0;c<4;c++)l.decor(P.dodeca(.4+a()*.5,10787984,0,0,0,1.4,.5,1.1),(a()-.5)*3,.1,(a()-.5)*3);break}case"chimney":{let c=s.h||24;l.box("brick",-1.6,-.5,-1.6,1.6,c,1.6,{destructible:!1,color:s.color??11037266}),l.decor(P.box(3.8,.6,3.8,6965818,0,0,0),0,c+.3,0),l.decor(P.box(3.4,.4,3.4,2236962,0,0,0),0,c+.8,0);for(let h=4;h<c;h+=6)l.decor(P.box(3.5,.3,3.5,9067076,0,0,0),0,h,0);this.footprint(e,i,n,1.6,1.6,"rgba(120,80,60,0.95)");break}case"platform":{let c=s.len||30,h=s.w||5;l.box("concrete",-c/2,-.6,-h/2,c/2,.42,h/2,{destructible:!1,navFloor:!0,color:11907238}),l.decor(P.box(c,.06,.3,14204992,0,0,0),0,.45,h/2-.2);for(let u=-c/2+6;u<c/2;u+=12)l.box("metal",u-.1,.42,-.1,u+.1,3.4,.1,{destructible:!1,color:5595242});l.box("metal",-c/2,3.4,-h/2+.5,c/2,3.55,h/2-.5,{destructible:!1,color:6976636,noStand:!0}),this.footprint(e,i,n,c/2,h/2,"rgba(160,155,145,0.95)");break}case"fountain":{for(let c=0;c<8;c++){let h=c/8*Math.PI*2,u=Math.cos(h)*3.2,d=Math.sin(h)*3.2;l.box("stone",u-1.3,0,d-.35,u+1.3,.75,d+.35,{color:13156528,vault:!0})}l.box("stone",-.5,0,-.5,.5,2.2,.5,{destructible:!1,color:12432546}),l.decor(P.cyl(1.2,1,.3,10,12432546),0,2.3,0),l.decor(P.cyl(2.9,2.9,.1,16,4881034),0,.4,0);break}case"traincar":{let c=s.color??[8010282,3824234,5921354][Math.floor(a()*3)];l.box("container",-1.4,.9,-7,1.4,4,7,{color:c,destructible:!1}),l.box("metal",-1.2,.3,-6.5,1.2,.9,6.5,{color:2763306,destructible:!1});for(let h of[-5,-3.6,3.6,5])for(let u of[-.75,.75])l.decor(P.cyl(.45,.45,.2,8,1907997,0,0,0,0,0,Math.PI/2),u,.45,h);this.footprint(e,i,n,1.4,7,"rgba(110,70,60,0.95)");break}case"rails":{let c=s.len||100;l.decor(P.box(.12,.12,c,5921370,0,0,0),-.75,.06,0),l.decor(P.box(.12,.12,c,5921370,0,0,0),.75,.06,0);for(let h=-c/2;h<c/2;h+=1.2)l.decor(P.box(2.4,.08,.25,5916214,0,0,0),0,.02,h);break}case"pole":l.box("wood",-.12,0,-.12,.12,8,.12,{destructible:!1,color:5917242}),l.decor(P.box(1.8,.12,.12,5917242),0,7.4,0);break;case"crane":{for(let[c,h]of[[-4,-1.5],[4,-1.5],[-4,1.5],[4,1.5]])l.box("metal",c-.3,0,h-.3,c+.3,14,h+.3,{destructible:!1,color:14196778});l.decor(P.box(9,1.2,4,14196778,0,0,0),0,14.6,0),l.decor(P.box(26,.8,1.2,14196778,0,0,0),9,15.8,0),l.decor(P.box(.08,9,.08,2236962,0,0,0),18,11,0);break}default:throw new Error("unknown prop "+t)}}finalize(t){let e=new ui(1,1,1);e.deleteAttribute("uv");let i=new Rt,n=new dt,s=new Ie,a=new R,o=new R;this.byCat.sand||(this.byCat.sand=[]);for(let l of Object.keys(this.byCat)){let c=this.byCat[l],h=Pr[l],u=new pe({color:16777215,roughness:h.rough,metalness:h.metal||0});Dh(u,h.tex,h.scale,1);let d=l==="sand"?160:0,f=new yi(e,u,c.length+d);for(let p=c.length;p<c.length+d;p++)f.setMatrixAt(p,new Rt().makeScale(0,0,0)),f.setColorAt(p,n.set(16777215));d&&(this.spareNext=c.length,this.spareMax=c.length+d),f.castShadow=!0,f.receiveShadow=!0;for(let p=0;p<c.length;p++){let x=c[p];x.inst=p,x.mesh=f,x.alive?(o.set((x.minX+x.maxX)/2,(x.minY+x.maxY)/2,(x.minZ+x.maxZ)/2),a.set(x.maxX-x.minX,x.maxY-x.minY,x.maxZ-x.minZ),i.compose(o,s,a)):i.makeScale(0,0,0),f.setMatrixAt(p,i),n.set(x.color),f.setColorAt(p,n)}f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.computeBoundingSphere(),t.add(f),this.meshes[l]=f}if(this.decor.length){let l=P.merge(this.decor),c=new pe({vertexColors:!0,roughness:.9});Dh(c,"roof",.6,.6);let h=new Ot(l,c);h.castShadow=!0,h.receiveShadow=!0,t.add(h),this.decorMesh=h,this.decor=[]}}addSandbag(t,e,i,n){let s=this.meshes.sand;if(!s||this.spareNext+2>this.spareMax)return!1;let o=(Math.round(n/(Math.PI/2))%4+4)%4%2===0,l=new Rt,c=new Ie,h=new R,u=new R;for(let d=0;d<2;d++){let f=-1+d,p=o?this.piece("sand",t+f,e-.1,i-.3,t+f+1,e+.95,i+.3,{vault:!0}):this.piece("sand",t-.3,e-.1,i+f,t+.3,e+.95,i+f+1,{vault:!0});p.inst=this.spareNext++,p.mesh=s,u.set((p.minX+p.maxX)/2,(p.minY+p.maxY)/2,(p.minZ+p.maxZ)/2),h.set(p.maxX-p.minX,p.maxY-p.minY,p.maxZ-p.minZ),l.compose(u,c,h),s.setMatrixAt(p.inst,l),this.world.nav&&this.world.nav.markDirty(p)}return s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere(),!0}hidePiece(t){if(t.inst<0||!t.mesh)return;let e=new Rt().makeScale(0,0,0);t.mesh.setMatrixAt(t.inst,e),t.mesh.instanceMatrix.needsUpdate=!0}damagePiece(t,e,i,n){return!t.alive||!t.destructible||(t.hp-=e,t.hp>0)?!1:(this.destroyPiece(t,i,n),!0)}destroyPiece(t,e,i,n=0){if(t.alive&&(this.coll.removeBox(t),this.hidePiece(t),e&&e.pieceDestroyed(t,i),this.world.nav&&this.world.nav.markDirty(t),n<12))for(let s of t.above)!s.alive||s.grounded||s.below.every(a=>!a.alive)&&setTimeout(()=>this.destroyPiece(s,e,"collapse",n+1),60+Math.random()*120)}explode(t,e,i,n,s,a){let o=[];this.coll.query(t-n,i-n,t+n,i+n,c=>{c.destructible&&c.alive&&o.push(c)});let l=0;for(let c of o){let h=Math.max(c.minX,Math.min(t,c.maxX)),u=Math.max(c.minY,Math.min(e,c.maxY)),d=Math.max(c.minZ,Math.min(i,c.maxZ)),f=Math.hypot(h-t,u-e,d-i);if(f>n)continue;let p=s*(1-f/n)*(1-f/n*.5);this.damagePiece(c,p,a,"explosion")&&l++}return l}};function P1(r,t){switch(r){case"pine":return P.merge([P.cyl(.16,.28,3.2,6,5915186,0,1.6,0),P.cone(2.4,3.4,7,3103278,0,3.6,0,.12),P.cone(1.85,2.9,7,3499317,0,5.4,0,.12),P.cone(1.2,2.4,7,3960889,0,7,0,.12)]);case"oak":return P.merge([P.cyl(.24,.36,3.6,6,6178356,0,1.8,0),P.ico(2.3,0,5208626,0,4.9,0,1,.85,1,.15,.15),P.ico(1.7,0,5932600,1.3,4.2,.6,1,.9,1,.15,.2),P.ico(1.6,0,4616236,-1.2,4.4,-.7,1,.9,1,.15,.2),P.ico(1.4,0,6130746,.2,6,-.4,1,.9,1,.15,.2)]);case"birch":return P.merge([P.cyl(.12,.18,5.5,5,15131350,0,2.75,0),P.ico(1.4,0,8298570,0,5.6,0,1,1.3,1,.15,.15),P.ico(1,0,9219669,.6,4.6,.3,1,1.2,1,.15,.2)]);case"palm":{let e=[],i=0,n=0;for(let s=0;s<6;s++)e.push(P.cyl(.17,.22,1.25,6,s%2?9073748:8021064,i,n+.62,0,0,0,-.06*s)),i+=.08*s,n+=1.2;for(let s=0;s<7;s++){let a=s/7*Math.PI*2,o=P.box(.5,.06,3.2,6261306,0,0,1.5,-.35,0,0);o.rotateY(a),o.translate(i,n,0),e.push(o)}return e.push(P.ico(.4,0,6967344,i,n,0)),P.merge(e)}case"acacia":return P.merge([P.cyl(.14,.24,3.4,5,6968384,0,1.7,0,0,0,.12),P.cyl(.1,.14,1.6,5,6968384,.5,3.4,0,0,0,-.5),P.ico(2.6,0,8030786,.3,4.3,0,1.2,.32,1.1,.12,.2),P.ico(1.8,0,7307323,-1.2,4,.5,1.1,.3,1,.12,.2)]);case"snowpine":return P.merge([P.cyl(.16,.28,3.2,6,4864556,0,1.6,0),P.cone(2.4,3.4,7,2770486,0,3.6,0,.1),P.cone(2,1.2,7,15659766,0,4.7,0,.04),P.cone(1.85,2.9,7,3034170,0,5.4,0,.1),P.cone(1.5,1,7,15659766,0,6.3,0,.04),P.cone(1.2,2.4,7,3297854,0,7,0,.1),P.cone(.75,1.1,7,16054266,0,7.75,0,.04)]);case"shrub":return P.merge([P.ico(1,0,8224072,0,.6,0,1.3,.75,1.2,.18,.25),P.ico(.7,0,9079376,.6,.5,.3,1,.8,1,.18,.25)])}}var D1={snowpine:.3,pine:.3,oak:.38,birch:.2,palm:.25,acacia:.25,shrub:0},I1={snowpine:[4.8,2.2],pine:[4.8,2.2],oak:[4.9,2.6],birch:[5.2,1.4],palm:[7.2,2.2],acacia:[4.2,2.4],shrub:[.7,1.1]},Pa=class{constructor(t){this.world=t,this.meshes=[]}build(t,e){let{terrain:i,collision:n,def:s}=this.world,a=qe(s.seed+999),o=ki(s.seed+5),l=s.playHalf+30,c=(b,C,z=2)=>{for(let N of e.fps)if(b>N.minX-z&&b<N.maxX+z&&C>N.minZ-z&&C<N.maxZ+z)return!0;if(e.roadDist(b,C)<1.5||e.riverDist(b,C)<2)return!0;for(let N of e.noTree)if((b-N.x)**2+(C-N.z)**2<N.r*N.r)return!0;let L=i.heightAt(b,C);return i.waterLevel!==null&&L<i.waterLevel+.6||i.normalAt(b,C)[1]<.8},h=s.trees.types,u=s.trees.weights,d=()=>{let b=a(),C=0;for(let z=0;z<h.length;z++)if(C+=u[z],b<C)return h[z];return h[0]},f={};for(let b of h)f[b]=[];let p=(b,C,z)=>{let L=.75+a()*.6,N=i.heightAt(C,z)-.15;f[b].push([C,N,z,a()*Math.PI*2,L]);let O=D1[b]*L;O>0&&n.addBox({minX:C-O,maxX:C+O,minZ:z-O,maxZ:z+O,minY:N-.5,maxY:N+5*L,mat:"wood",cat:"tree",destructible:!1,pen:3,noStand:!0});let[U,X]=I1[b];n.addSoft({x:C,y:N+U*L,z,r:X*L,strength:b==="shrub"?.6:.5})};for(let[b,C,z]of e.forests||[]){let L=Math.floor(z*z*Math.PI/70);for(let N=0;N<L;N++){let O=a()*Math.PI*2,U=Math.sqrt(a())*z*(.8+.3*o(Math.cos(O)*2,Math.sin(O)*2)),X=b+Math.cos(O)*U,F=C+Math.sin(O)*U;c(X,F,2.5)||p(d(),X,F)}}let x=(l*2)**2,g=Math.floor(x*s.trees.scatter);for(let b=0;b<g;b++){let C=(a()-.5)*l*2,z=(a()-.5)*l*2;o(C/120,z/120)<-.1||c(C,z,3)||p(d(),C,z)}let m=new Rt,v=new Ie,y=new R,M=new R,S=new R(0,1,0);for(let b of h){let C=f[b];if(!C.length)continue;let z=P1(b,s.biome),L=new pe({vertexColors:!0,roughness:.9,flatShading:!0});Ih(L,b==="palm"?.025:.018,1.5,1.2);let N=new yi(z,L,C.length);C.forEach(([O,U,X,F,B],j)=>{v.setFromAxisAngle(S,F),y.set(O,U,X),M.set(B,B*(.9+j%5*.05),B),m.compose(y,v,M),N.setMatrixAt(j,m)}),N.castShadow=!0,N.receiveShadow=!0,N.computeBoundingSphere(),t.add(N),this.meshes.push(N),this.windMats=(this.windMats||[]).concat(L)}this.treeCount=h.reduce((b,C)=>b+f[C].length,0);let w=Math.floor(x*s.trees.bush),T=[];for(let b=0;b<w;b++){let C=(a()-.5)*l*2,z=(a()-.5)*l*2;c(C,z,1.5)||T.push([C,i.heightAt(C,z)-.1,z,a()*6.28,.7+a()*.8])}for(let[b,C,z]of e.forests||[])for(let L=0;L<z*.8;L++){let N=a()*Math.PI*2,O=b+Math.cos(N)*z*(1+a()*.2),U=C+Math.sin(N)*z*(1+a()*.2);c(O,U,1.5)||T.push([O,i.heightAt(O,U)-.1,U,a()*6.28,.8+a()*.7])}if(T.length){let b=s.biome==="arid"?[8223304,9078352]:s.biome==="winter"?[5925468,14673644]:[4616238,5603386],C=P.merge([P.ico(1,0,b[0],0,.55,0,1.3,.8,1.2,.2,.3),P.ico(.75,0,b[1],.55,.75,.25,1,.9,1,.2,.3),P.ico(.7,0,b[0],-.5,.5,-.3,1,.8,1,.2,.3)]),z=new pe({vertexColors:!0,roughness:.95,flatShading:!0});Ih(z,.05,.2,1.8);let L=new yi(C,z,T.length);T.forEach(([N,O,U,X,F],B)=>{v.setFromAxisAngle(S,X),y.set(N,O,U),M.set(F,F,F),m.compose(y,v,M),L.setMatrixAt(B,m),n.addSoft({x:N,y:O+.7*F,z:U,r:1.15*F,strength:.65})}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),t.add(L),this.meshes.push(L)}let E=Math.floor(x*s.trees.rock),_=[];for(let b=0;b<E;b++){let C=(a()-.5)*l*2,z=(a()-.5)*l*2,L=!1;for(let X of e.fps)if(C>X.minX-2&&C<X.maxX+2&&z>X.minZ-2&&z<X.maxZ+2){L=!0;break}if(L||e.roadDist(C,z)<1.5)continue;let N=i.heightAt(C,z);if(i.waterLevel!==null&&N<i.waterLevel-1)continue;let O=1-i.normalAt(C,z)[1];if(a()>.35+O*3)continue;let U=.5+Math.pow(a(),2.5)*3.2;_.push([C,N-U*.3,z,a()*6.28,U])}if(_.length){let b=s.biome==="arid"?11048314:s.biome==="winter"?10133670:9276036,C=P.merge([P.dodeca(1,b,0,0,0,1.2,.75,1,.15),P.dodeca(.6,b,.7,-.1,.3,1,.8,1,.15)]),z=new pe({vertexColors:!0,roughness:.95,flatShading:!0});jn(z,"rock",()=>{});let L=new yi(C,z,_.length);_.forEach(([N,O,U,X,F],B)=>{if(v.setFromAxisAngle(S,X),y.set(N,O,U),M.set(F,F,F),m.compose(y,v,M),L.setMatrixAt(B,m),F>.9){let j=F*.9;n.addBox({minX:N-j,maxX:N+j,minZ:U-j,maxZ:U+j,minY:O-F,maxY:O+F*.62+F*.3,mat:"stone",cat:"rock",destructible:!1,pen:9,vault:F*.92<1.25})}}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),t.add(L),this.meshes.push(L)}this.rockCount=_.length}setWind(t){Vi.uWind.value=t?1:0}},Da=class{constructor(t,e){this.world=t,this.scene=e,this.mesh=null,this.level="off"}setLevel(t){if(t===this.level||(this.level=t,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null),t==="off"))return;let e={low:[120,.7],medium:[190,.52],high:[260,.42]}[t],[i,n]=e,s=this.world.terrain,a=this.world.def,o=[],l=[],c=[],h=new dt(a.grassColor[0]),u=new dt(a.grassColor[1]),d=new dt(a.grassColor[2]);for(let m=0;m<4;m++){let v=m/4*Math.PI*2+.4,y=Math.cos(v*1.7)*.12,M=Math.sin(v*1.3)*.12,S=Math.cos(v),w=Math.sin(v),T=.04,E=.24+m%2*.1,_=.09,b=-w*T,C=S*T,z=[[y-b,0,M-C],[y+b,0,M+C],[y+S*_*.4+b*.6,E*.55,M+w*_*.4+C*.6],[y-b,0,M-C],[y+S*_*.4+b*.6,E*.55,M+w*_*.4+C*.6],[y+S*_*.4-b*.6,E*.55,M+w*_*.4-C*.6],[y+S*_*.4-b*.6,E*.55,M+w*_*.4-C*.6],[y+S*_*.4+b*.6,E*.55,M+w*_*.4+C*.6],[y+S*_,E,M+w*_]],L=[h,h,u,h,u,u,u,u,d];for(let N=0;N<9;N++)o.push(...z[N]),l.push(L[N].r,L[N].g,L[N].b),c.push(0,1,0)}let f=new fe;f.setAttribute("position",new Jt(o,3)),f.setAttribute("color",new Jt(l,3)),f.setAttribute("normal",new Jt(c,3));let p=new pe({vertexColors:!0,roughness:1,side:Pe}),x={uCenter:{value:new R},uCam:{value:new R},uSpacing:{value:n},uN:{value:i},uHeight:{value:s.heightTex},uMask:{value:s.grassTex},uSize:{value:s.size},uHalf:{value:s.half},uTexN:{value:s.n},uRadius:{value:i*n*.5}};this.uniforms=x,jn(p,"grass",m=>{Object.assign(m.uniforms,x),m.uniforms.uTime=Vi.uTime,m.uniforms.uWind=Vi.uWind,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
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
          transformed += vec3(wp.x, gh - 0.03, wp.y);`)});let g=new yi(f,p,i*i);g.frustumCulled=!1,g.castShadow=!1,g.receiveShadow=!0,this.mesh=g,this.scene.add(g)}update(t){if(!this.mesh)return;let e=this.uniforms.uSpacing.value;this.uniforms.uCenter.value.set(Math.round(t.x/e)*e,0,Math.round(t.z/e)*e),this.uniforms.uCam.value.copy(t)}};var Xs=1,Jn=2,Qn=4,mf=8,gf=16,xf=Math.SQRT2,ts=class{constructor(t){this.world=t,this.terrain=t.terrain,this.coll=t.collision,this.size=Math.floor(this.terrain.size),this.half=this.terrain.half,this.dim=this.size;let e=this.dim*this.dim;this.flags=new Uint8Array(e),this.floor=new Float32Array(e),this.cover=new Uint8Array(e),this.g=new Float32Array(e),this.parent=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.curStamp=1,this.heap=new ua(4096),this.dirty=[],this.build()}cellOf(t,e){let i=Math.floor(t+this.half),n=Math.floor(e+this.half);return i<0||n<0||i>=this.dim||n>=this.dim?-1:n*this.dim+i}cx(t){return t%this.dim-this.half+.5}cz(t){return Math.floor(t/this.dim)-this.half+.5}build(){let{dim:t}=this;for(let e=0;e<t;e++)for(let i=0;i<t;i++)this.evalCell(e*t+i);this.computeCover(0,0,t-1,t-1)}evalCell(t){let e=this.cx(t),i=this.cz(t),n=this.terrain,s=n.heightAt(e,i),a=s,o=0,l=.2;this.coll.query(e-.05,i-.05,e+.05,i+.05,c=>{c.navFloor&&c.maxY>a&&c.maxY<s+12&&e>c.minX&&e<c.maxX&&i>c.minZ&&i<c.maxZ&&(a=c.maxY)}),this.coll.query(e-l,i-l,e+l,i+l,c=>{c.noCollide||c.navFloor||e+l<=c.minX||e-l>=c.maxX||i+l<=c.minZ||i-l>=c.maxZ||c.maxY<=a+.45||c.minY>=a+1.75||(c.vault&&c.maxY<=a+1.25?o|=Jn:o|=Xs)}),a===s&&(n.normalAt(e,i)[1]<.72&&(o|=mf),n.waterLevel!==null&&s<n.waterLevel-.4&&(o|=Qn,s<n.waterLevel-1.3&&(o|=gf))),this.flags[t]=o,this.floor[t]=a}computeCover(t,e,i,n){let{dim:s}=this,a=2;for(let o=Math.max(0,e);o<=Math.min(s-1,n);o++)for(let l=Math.max(0,t);l<=Math.min(s-1,i);l++){let c=o*s+l;if(this.flags[c]&Xs){this.cover[c]=0;continue}let h=0;for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){let f=l+d,p=o+u;f<0||p<0||f>=s||p>=s||this.flags[p*s+f]&(Xs|Jn)&&h++}this.cover[c]=Math.min(255,h*20)}}markDirty(t){this.dirty.push(t)}processDirty(){if(!this.dirty.length)return;let t=this.dirty;this.dirty=[];for(let e of t){let i=Math.floor(e.minX+this.half)-1,n=Math.floor(e.maxX+this.half)+1,s=Math.floor(e.minZ+this.half)-1,a=Math.floor(e.maxZ+this.half)+1;for(let o=Math.max(0,s);o<=Math.min(this.dim-1,a);o++)for(let l=Math.max(0,i);l<=Math.min(this.dim-1,n);l++)this.evalCell(o*this.dim+l);this.computeCover(i-2,s-2,n+2,a+2)}}walkable(t){return t>=0&&!(this.flags[t]&(Xs|mf))}isBlocked(t){return t<0||(this.flags[t]&Xs)!==0}isVault(t){return t>=0&&(this.flags[t]&Jn)!==0}isWater(t){return t>=0&&(this.flags[t]&Qn)!==0}cost(t,e){let i=this.flags[t],n=1;if(i&Jn&&(n+=4),i&Qn&&(n+=i&gf?14:4),e&&e.coverBias&&(n+=(1-this.cover[t]/255)*e.coverBias),e&&e.avoid){let s=this.cx(t),a=this.cz(t);for(let o of e.avoid){let l=s-o.x,c=a-o.z,h=l*l+c*c;h<o.r*o.r&&(n+=o.w*(1-h/(o.r*o.r)))}}return n}nearestWalkable(t,e,i=6){let n=this.cellOf(t,e);if(this.walkable(n))return n;let s=Math.floor(t+this.half),a=Math.floor(e+this.half);for(let o=1;o<=i;o++)for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){if(Math.abs(c)!==o&&Math.abs(l)!==o)continue;let h=s+c,u=a+l;if(h<0||u<0||h>=this.dim||u>=this.dim)continue;let d=u*this.dim+h;if(this.walkable(d))return d}return-1}findPath(t,e,i,n,s={}){let a=this.nearestWalkable(t,e,4),o=this.nearestWalkable(i,n,8);if(a<0||o<0)return null;if(a===o)return[[i,n]];let{dim:l}=this,c=s.maxNodes||4e4,h=s.weight||1.35,u=++this.curStamp,d=this.heap;d.clear();let f=o%l,p=Math.floor(o/l),x=C=>{let z=Math.abs(C%l-f),L=Math.abs(Math.floor(C/l)-p);return(z+L+(xf-2)*Math.min(z,L))*h};this.g[a]=0,this.stamp[a]=u,this.parent[a]=-1,d.push(a,x(a));let g=a,m=x(a),v=0,y=!1;for(;d.size;){let C=d.pop();if(this.closed[C]===u)continue;if(this.closed[C]=u,C===o){y=!0;break}if(++v>c)break;let z=C%l,L=(C-z)/l,N=this.g[C];for(let O=0;O<8;O++){let U=O<4?[1,-1,0,0][O]:[1,1,-1,-1][O-4],X=O<4?[0,0,1,-1][O]:[1,-1,1,-1][O-4],F=z+U,B=L+X;if(F<0||B<0||F>=l||B>=l)continue;let j=B*l+F;if(!this.walkable(j)||this.closed[j]===u||Math.abs(this.floor[j]-this.floor[C])>.9&&!(this.flags[j]&Jn)||O>=4&&(!this.walkable(L*l+F)||!this.walkable(B*l+z)))continue;let rt=N+(O<4?1:xf)*this.cost(j,s);if(this.stamp[j]!==u||rt<this.g[j]){this.stamp[j]=u,this.g[j]=rt,this.parent[j]=C;let st=x(j);d.push(j,rt+st),st<m&&(m=st,g=j)}}}let M=y?o:g;if(M===a)return null;let S=[],w=M,T=0;for(;w!==-1&&T++<1e5&&(S.push(w),w!==a);)w=this.parent[w];S.reverse();let E=[],_=0;E.push([this.cx(S[0]),this.cz(S[0])]);let b=1;for(;b<S.length;){let C=b;for(let z=b;z<Math.min(S.length,_+60)&&this.lineWalkable(S[_],S[z]);z++)C=z;E.push([this.cx(S[C]),this.cz(S[C])]),_=C,b=C+1}return y&&(E[E.length-1]=[i,n]),E.partial=!y,E}lineWalkable(t,e){let{dim:i}=this,n=t%i,s=Math.floor(t/i),a=e%i,o=Math.floor(e/i),l=Math.abs(a-n),c=Math.abs(o-s),h=n<a?1:-1,u=s<o?1:-1,d=l-c,f=this.floor[t];for(let p=0;p<400;p++){let x=s*i+n;if(!this.walkable(x)||this.flags[x]&(Jn|Qn)||Math.abs(this.floor[x]-f)>1.2)return!1;if(n===a&&s===o)return!0;let g=2*d;if(g>-c&&g<l&&(!this.walkable(s*i+n+h)||!this.walkable((s+u)*i+n)))return!1;g>-c&&(d-=c,n+=h),g<l&&(d+=l,s+=u)}return!1}findCover(t,e,i,n,s={}){let a=[],o=Math.ceil(n),l=Math.floor(t+this.half),c=Math.floor(e+this.half),{dim:h}=this,u=[];for(let p=-o;p<=o;p+=1)for(let x=-o;x<=o;x+=1){let g=x*x+p*p;if(g>o*o)continue;let m=l+x,v=c+p;if(m<1||v<1||m>=h-1||v>=h-1)continue;let y=v*h+m;!this.walkable(y)||this.cover[y]<30||this.flags[y]&Qn||u.push([y,g])}u.sort((p,x)=>x[0]%7-p[0]%7+(p[1]-x[1])*.02);let d=s.maxTests||28,f=0;for(let[p,x]of u){if(f++>d)break;let g=this.cx(p),m=this.cz(p),v=this.floor[p];if(!!this.coll.los(g,v+.95,m,i.x,i.y,i.z))continue;let M=this.coll.los(g,v+1.6,m,i.x,i.y,i.z),S=i.x-g,w=i.z-m,T=Math.hypot(S,w);if(s.minThreatDist&&T<s.minThreatDist)continue;let E=null;if(!M&&T>.1){let b=-w/T,C=S/T;for(let z of[1,-1]){let L=g+b*z*.6,N=m+C*z*.6;if(this.coll.los(L,v+1.5,N,i.x,i.y,i.z)&&this.coll.los(g,v+1.5,m,L,v+1.5,N)){E={x:b*z,z:C*z};break}}}let _=(M?3:E?2.7:1)-Math.sqrt(x)*.12+this.cover[p]/255;s.prefer&&(_-=Math.hypot(g-s.prefer.x,m-s.prefer.z)*.04),s.occupied&&s.occupied(g,m)&&(_-=4),a.push({x:g,z:m,y:v,peek:M,lean:E,score:_})}return a.sort((p,x)=>x.score-p.score),a}randomWalkableNear(t,e,i,n=Math.random){for(let a=0;a<20;a++){let o=n()*Math.PI*2,l=Math.sqrt(n())*i,c=this.cellOf(t+Math.cos(o)*l,e+Math.sin(o)*l);if(this.walkable(c)&&!(this.flags[c]&Qn))return[this.cx(c),this.cz(c),this.floor[c]]}let s=this.nearestWalkable(t,e,10);return s>=0?[this.cx(s),this.cz(s),this.floor[s]]:[t,e,this.terrain.heightAt(t,e)]}};ts.BLOCKED=Xs;ts.VAULT=Jn;ts.WATER=Qn;var Ys=()=>new Promise(r=>setTimeout(r,0)),Ia=class{constructor(t,e){this.def=t,this.scene=e}async build(t){let e=this.def,i=this.scene;e._n=ki(e.seed),t("Planning layout",.05),await Ys();let n=new da(e);n.noise=e._n,e.layout(n),this.layout=n,t("Shaping terrain",.15),await Ys(),this.terrain=new Aa(e,n),this.terrain.buildMesh(i),this.collision=new Ca(this.terrain),t("Constructing buildings",.35),await Ys(),this.structures=new Ra(this);for(let s of n.buildings)this.structures.building(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.props)this.structures.prop(s.type,s.x,s.z,s.rot,s.opts);for(let s of n.bridges){let a=this.terrain.heightAt(s.x,s.z-s.len/2-1),o=this.terrain.heightAt(s.x,s.z+s.len/2+1),l=Math.max(a,o,(this.terrain.waterLevel??0)+2)+.15;this.structures.prop("bridge",s.x,s.z,0,{len:s.len+4,w:s.w,deckY:l,y:l-3}),this.structures.footprints.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.len/2,maxZ:s.z+s.len/2,color:"rgba(160,155,145,0.95)"}),s.deckY=l}for(let s of n.piers||[]){let a=Tr(s.z,e._n);this.structures.prop("pier",Math.floor(a-14)+.5,Math.floor(s.z)+.5,3,{len:50,w:6,deckY:2.25,y:0})}return this.flagPoles(i),this.structures.finalize(i),t("Growing vegetation",.6),await Ys(),this.vegetation=new Pa(this),this.vegetation.build(i,n),t("Building navigation mesh",.75),await Ys(),this.nav=new ts(this),t("Drawing maps",.92),await Ys(),this.mapImage=this.terrain.renderMapImage(768,this.structures.footprints),this}flagPoles(t){let e=[];for(let n of this.def.flags){let s=this.terrain.heightAt(n.x,n.z);e.push(P.cyl(.07,.09,9,6,14211288,n.x,s+4.5,n.z)),e.push(P.cyl(.4,.5,.4,8,6974058,n.x,s+.2,n.z))}let i=new Ot(P.merge(e),Sn("poles",{roughness:.6}));i.castShadow=!0,t.add(i),this.flagCloth=this.def.flags.map(n=>{let s=this.terrain.heightAt(n.x,n.z),a=new Ot(new Ke(1.8,1.1,6,3),new pe({color:13421772,side:Pe,roughness:.9}));return a.geometry.translate(.9,0,0),a.position.set(n.x+.08,s+8.3,n.z),a.castShadow=!0,t.add(a),a})}updateFlags(t,e){if(this.flagCloth&&(t.flags.forEach(i=>{let n=this.def.flags.findIndex(h=>h.id===i.id),s=this.flagCloth[n];if(!s)return;let a=i.owner===0?4034016:i.owner===1?14700605:13684944;s.material.color.setHex(a);let o=this.terrain.heightAt(i.x,i.z);s.position.y=o+1.8+Math.abs(i.progress)*6.5;let l=s.geometry.attributes.position;s.userData.base||(s.userData.base=l.array.slice());let c=s.userData.base;for(let h=0;h<l.count;h++){let u=c[h*3];l.array[h*3+2]=Math.sin(u*2.4-e*5+i.x)*.12*u}l.needsUpdate=!0,s.rotation.y=.6}),!t.flags.length))for(let i of this.flagCloth)i.visible=!1}};var $s=class r extends Ot{constructor(){let t=r.SkyShader,e=new Qt({name:t.name,uniforms:Be.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Fe,depthWrite:!1});super(new ui(1,1,1),e),this.isSky=!0}};$s.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
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

		}`};var Uh=new Rt,Dr=class r{constructor(t){t=t||{},this.zNear=t.webGL===!0?-1:0,this.vertices={near:[new R,new R,new R,new R],far:[new R,new R,new R,new R]},t.projectionMatrix!==void 0&&this.setFromProjectionMatrix(t.projectionMatrix,t.maxFar||1e4)}setFromProjectionMatrix(t,e){let i=this.zNear,n=t.elements[2*4+3]===0;return Uh.copy(t).invert(),this.vertices.near[0].set(1,1,i),this.vertices.near[1].set(1,-1,i),this.vertices.near[2].set(-1,-1,i),this.vertices.near[3].set(-1,1,i),this.vertices.near.forEach(function(s){s.applyMatrix4(Uh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(s){s.applyMatrix4(Uh);let a=Math.abs(s.z);n?s.z*=Math.min(e/a,1):s.multiplyScalar(Math.min(e/a,1))}),this.vertices}split(t,e){for(;t.length>e.length;)e.push(new r);e.length=t.length;for(let i=0;i<t.length;i++){let n=e[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i-1]);if(i===t.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],t[i])}}toSpace(t,e){for(let i=0;i<4;i++)e.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(t),e.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(t)}};var Nh={lights_fragment_begin:`
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
	`+Wt.lights_pars_begin};var vf=new Rt,Fh=new Dr({webGL:!0}),on=new R,Ir=new Ii,Oh=[],Bh=[],Hh=new Rt,yf=new Rt,z1=new R(0,1,0),za=class{constructor(t){this.camera=t.camera,this.parent=t.parent,this.cascades=t.cascades||3,this.maxFar=t.maxFar||1e5,this.mode=t.mode||"practical",this.shadowMapSize=t.shadowMapSize||2048,this.shadowBias=t.shadowBias||1e-6,this.lightDirection=t.lightDirection||new R(1,-1,1).normalize(),this.lightIntensity=t.lightIntensity||3,this.lightNear=t.lightNear||1,this.lightFar=t.lightFar||2e3,this.lightMargin=t.lightMargin||200,this.customSplitsCallback=t.customSplitsCallback,this.fade=!1,this.mainFrustum=new Dr({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let t=0;t<this.cascades;t++){let e=new bi(16777215,this.lightIntensity);e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,e.shadow.camera.near=this.lightNear,e.shadow.camera.far=this.lightFar,e.shadow.bias=this.shadowBias,this.parent.add(e),this.parent.add(e.target),this.lights.push(e)}}initCascades(){let t=this.camera;t.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){let t=this.frustums;for(let e=0;e<t.length;e++){let n=this.lights[e].shadow.camera,s=this.frustums[e],a=s.vertices.near,o=s.vertices.far,l=o[0],c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){let u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),p=.25*Math.pow(f,2)*(d-u.near);h+=p}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){let t=this.camera,e=Math.min(t.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,t.near,e,this.breaks);break;case"logarithmic":n(this.cascades,t.near,e,this.breaks);break;case"practical":s(this.cascades,t.near,e,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,t.near,e,this.breaks);break}function i(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function n(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function s(a,o,l,c,h){Oh.length=0,Bh.length=0,n(a,o,l,Bh),i(a,o,l,Oh);for(let u=1;u<a;u++)h.push(Pd.lerp(Oh[u-1],Bh[u-1],c));h.push(1)}}update(){let t=this.camera,e=this.frustums;Hh.lookAt(new R,this.lightDirection,z1),yf.copy(Hh).invert();for(let i=0;i<e.length;i++){let n=this.lights[i],s=n.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,o=(s.top-s.bottom)/this.shadowMapSize;vf.multiplyMatrices(yf,t.matrixWorld),e[i].toSpace(vf,Fh);let l=Fh.vertices.near,c=Fh.vertices.far;Ir.makeEmpty();for(let h=0;h<4;h++)Ir.expandByPoint(l[h]),Ir.expandByPoint(c[h]);Ir.getCenter(on),on.z=Ir.max.z+this.lightMargin,on.x=Math.floor(on.x/a)*a,on.y=Math.floor(on.y/o)*o,on.applyMatrix4(Hh),n.position.copy(on),n.target.position.copy(on),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){Wt.lights_fragment_begin=Nh.lights_fragment_begin,Wt.lights_pars_begin=Nh.lights_pars_begin}setupMaterial(t){t.defines=t.defines||{},t.defines.USE_CSM=1,t.defines.CSM_CASCADES=this.cascades,this.fade&&(t.defines.CSM_FADE="");let e=[],i=this,n=this.shaders;t.onBeforeCompile=function(s){let a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(e),s.uniforms.CSM_cascades={value:e},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},n.set(t,s)},n.set(t,null)}updateUniforms(){let t=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){let s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=t}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(t){for(;t.length<this.breaks.length;)t.push(new lt);t.length=this.breaks.length;for(let e=0;e<this.cascades;e++){let i=this.breaks[e],n=this.breaks[e-1]||0;t[e].x=n,t[e].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let t=0;t<this.lights.length;t++)this.parent.remove(this.lights[t].target),this.parent.remove(this.lights[t])}dispose(){let t=this.shaders;t.forEach(function(e,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),i.needsUpdate=!0}),t.clear()}};var Mf={morning:{elev:32,az:125,sun:[1,.93,.82],sunI:3.6,sky:[.55,.68,.92],ground:[.38,.34,.26],hemiI:.55,fog:[.62,.72,.84],fogD:.0012,turb:2.6,ray:1.2,exp:1,skyMul:.62,env:.35},noon:{elev:64,az:160,sun:[1,.98,.94],sunI:3.8,sky:[.55,.68,.94],ground:[.42,.38,.3],hemiI:.55,fog:[.66,.74,.86],fogD:.001,turb:2.4,ray:1,exp:.92,skyMul:.6,env:.35},afternoon:{elev:26,az:245,sun:[1,.86,.68],sunI:3.7,sky:[.66,.68,.78],ground:[.5,.42,.3],hemiI:.55,fog:[.8,.72,.6],fogD:.0015,turb:5,ray:1.4,exp:.98,skyMul:.62,env:.38},dusk:{elev:6,az:275,sun:[1,.6,.36],sunI:2.8,sky:[.45,.42,.58],ground:[.32,.24,.2],hemiI:.45,fog:[.58,.46,.42],fogD:.0019,turb:8,ray:2.4,exp:1.15,skyMul:.7,env:.32},overcast:{elev:48,az:150,sun:[.92,.94,1],sunI:1.7,sky:[.62,.66,.72],ground:[.36,.35,.33],hemiI:.95,fog:[.6,.63,.67],fogD:.0026,turb:10,ray:.6,exp:1.05,skyMul:.55,env:.45},snow:{elev:26,az:140,sun:[.95,.97,1],sunI:2.5,sky:[.68,.75,.86],ground:[.72,.76,.8],hemiI:.85,fog:[.8,.84,.9],fogD:.0042,turb:8,ray:.8,exp:.9,skyMul:.6,env:.45},night:{elev:38,az:200,sun:[.55,.65,1],sunI:.42,sky:[.12,.16,.28],ground:[.05,.05,.07],hemiI:.35,fog:[.03,.04,.07],fogD:.0032,turb:2,ray:.3,exp:1.25,skyMul:0,env:.12,night:!0}},La=class{constructor(t,e,i,n){this.renderer=t,this.scene=e,this.camera=i,this.settings=n,this.sunDir=new R(0,1,0),this.shadowMode=null,this.csm=null,this.hemi=new sn(16777215,4473924,.7),e.add(this.hemi),this.sun=new bi(16777215,3),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,e.add(this.sun),e.add(this.sun.target),this.sky=new $s,this.sky.material.depthWrite=!1,this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.skyUniforms={uFogColor:{value:new dt},uHorizon:{value:1},uSkyMul:{value:1}},Object.assign(this.sky.material.uniforms,this.skyUniforms),this.sky.material.fragmentShader=this.sky.material.fragmentShader.replace("uniform vec3 up;",`uniform vec3 up;
uniform vec3 uFogColor; uniform float uHorizon; uniform float uSkyMul;`).replace("gl_FragColor = vec4( retColor, 1.0 );",`
        retColor *= uSkyMul;
        retColor = mix(retColor, uFogColor, smoothstep(0.16, -0.04, direction.y) * uHorizon);
        gl_FragColor = vec4( retColor, 1.0 );`),e.add(this.sky);let s=new fe,a=[];for(let o=0;o<1800;o++){let l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=Math.abs(l);a.push(Math.cos(c)*h,u,Math.sin(c)*h)}s.setAttribute("position",new Jt(a,3)),this.stars=new Oo(s,new gr({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1})),this.stars.visible=!1,this.stars.frustumCulled=!1,this.stars.renderOrder=-9,e.add(this.stars),this.fog=new No(11189196,.0015),e.fog=this.fog,this.pmrem=new Ds(t),this.envMap=null}setTime(t){let e=Mf[t]||Mf.morning;this.time=e,this.timeName=t;let i=(90-e.elev)*ne,n=e.az*ne;this.sunDir.setFromSphericalCoords(1,i,n);let s=this.sky.material.uniforms;if(s.turbidity.value=e.turb,s.rayleigh.value=e.ray,s.mieCoefficient.value=.005,s.mieDirectionalG.value=.8,s.sunPosition.value.copy(this.sunDir).multiplyScalar(e.night?-1:1),this.skyUniforms.uSkyMul.value=e.skyMul,this.sun.color.setRGB(...e.sun),this.sun.intensity=e.sunI,this.hemi.color.setRGB(...e.sky),this.hemi.groundColor.setRGB(...e.ground),this.hemi.intensity=e.hemiI,this.fogColor=new dt().setRGB(...e.fog),this.fog.color.copy(this.fogColor),this.skyUniforms.uFogColor.value.copy(this.fogColor),this.stars.visible=!!e.night,this.renderer.toneMappingExposure=e.exp,this.csm)for(let a of this.csm.lights)a.color.copy(this.sun.color),a.intensity=e.sunI;this.csm&&this.csm.lightDirection.copy(this.sunDir).negate(),this.applySettings(),this.buildEnvMap()}buildEnvMap(){this.envMap&&(this.envMap.dispose(),this.envMap=null);let t=this.time,e=new Bi,i=new $s;i.material.uniforms.turbidity.value=t.turb,i.material.uniforms.rayleigh.value=t.ray,i.material.uniforms.sunPosition.value.copy(this.sunDir),i.scale.setScalar(1e3),e.add(i),t.night&&(e.background=new dt(659488));let n=new Ot(new Ke(2e3,2e3),new zi({color:new dt().setRGB(...t.ground).multiplyScalar(.6)}));n.rotation.x=-Math.PI/2,n.position.y=-5,e.add(n),this.envMap=this.pmrem.fromScene(e,0,.1,3e3).texture,i.geometry.dispose(),i.material.dispose(),this.applySettings()}applySettings(){let t=this.settings,e=this.time;e&&(this.fog.density=t.get("fog")?e.fogD*(900/Math.max(500,t.get("viewDistance")))**.5:1e-5,this.sky.visible=t.get("atmosphere"),this.scene.background=t.get("atmosphere")?null:this.fogColor,this.skyUniforms.uHorizon.value=t.get("fog")?1:.35,this.scene.environment=t.get("ibl")?this.envMap:null,this.scene.environmentIntensity=e.env,this.hemi.intensity=e.hemiI*(t.get("ibl")?.8:1.25),this.setShadows(t.get("shadows")))}setShadows(t){if(t!==this.shadowMode){if(this.shadowMode=t,this.csm&&(Ma(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.sun.visible=!0,this.sun.castShadow=!1,t==="low"||t==="medium"){let e=t==="low"?1024:2048,i=t==="low"?45:75;this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=-i,n.right=i,n.top=i,n.bottom=-i,n.near=1,n.far=600,n.updateProjectionMatrix(),this.shadowExt=i}else if(t==="high"||t==="ultra"){this.sun.visible=!1,this.csm=new za({maxFar:t==="ultra"?520:320,cascades:t==="ultra"?4:3,mode:"practical",parent:this.scene,shadowMapSize:t==="ultra"?4096:2048,lightDirection:this.sunDir.clone().negate(),camera:this.camera,lightIntensity:this.time?this.time.sunI:3,lightNear:1,lightFar:1400,lightMargin:250,shadowBias:-2e-4});for(let e of this.csm.lights)e.shadow.normalBias=.05,this.time&&e.color.copy(this.sun.color);this.csm.fade=!0,Ma(this.csm)}}}update(t){this.sky.position.copy(t);let e=this.camera.far;if(this.sky.scale.setScalar(e*1),this.stars.position.copy(t),this.stars.scale.setScalar(e*.45),this.csm)this.csm.update();else if(this.sun.castShadow){let i=this.shadowExt,n=this.sun.shadow.mapSize.x,s=i*2/n,a=t.clone();a.x=Math.round(a.x/s)*s,a.z=Math.round(a.z/s)*s,this.sun.target.position.copy(a),this.sun.position.copy(a).addScaledVector(this.sunDir,300),this.sun.target.updateMatrixWorld()}else this.sun.position.copy(t).addScaledVector(this.sunDir,300),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}dispose(){this.csm&&(Ma(null),this.csm.remove(),this.csm.dispose(),this.csm=null),this.envMap&&this.envMap.dispose(),this.pmrem.dispose()}};var ka=class{constructor(t,e,i){this.world=t,this.scene=e,this.env=i;let n=t.terrain;this.level=n.waterLevel,this.rt=new Me(512,512,{type:Te}),this.textureMatrix=new Rt,this.virtualCam=new _e;let s=t.def.biome==="arid"?[.02,.12,.16]:[.03,.09,.08],a=t.def.biome==="arid"?[.12,.38,.38]:[.12,.24,.17];this.uniforms={uTime:Vi.uTime,uReflection:{value:this.rt.texture},uTexMat:{value:this.textureMatrix},uUseRefl:{value:1},uNoise:{value:si("noise")},uHeight:{value:n.heightTex},uSize:{value:n.size},uHalf:{value:n.half},uTexN:{value:n.n},uLevel:{value:this.level},uSunDir:{value:new R},uSunColor:{value:new dt},uSkyColor:{value:new dt},uFogColor:{value:new dt},uFogDensity:{value:.001},uWaves:{value:1},uDeep:{value:new dt().setRGB(...s)},uShallow:{value:new dt().setRGB(...a)}};let o=new Qt({uniforms:this.uniforms,transparent:!0,depthWrite:!0,vertexShader:`
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
        }`}),l=n.size+400,c=new Ke(l,l,160,160);c.rotateX(-Math.PI/2),this.mesh=new Ot(c,o),this.mesh.position.y=this.level,this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,e.add(this.mesh),this.hideList=[]}setQuality(t,e){this.reflections=t,this.uniforms.uUseRefl.value=t?1:0,this.uniforms.uWaves.value=e?1:0}update(t){let e=this.uniforms;e.uSunDir.value.copy(t.sunDir),e.uSunColor.value.copy(t.sun.color).multiplyScalar(t.time.night?.4:1),e.uSkyColor.value.setRGB(...t.time.sky),e.uFogColor.value.copy(t.fog.color),e.uFogDensity.value=t.fog.density}renderReflection(t,e,i,n,s){if(!this.reflections)return;let a=i.position;if(a.y<this.level)return;let o=Math.max(256,Math.floor(n*.5)),l=Math.max(256,Math.floor(s*.5));(this.rt.width!==o||this.rt.height!==l)&&this.rt.setSize(o,l);let c=this.virtualCam;c.copy(i,!1),c.position.set(a.x,2*this.level-a.y,a.z);let h=new R;i.getWorldDirection(h),h.y=-h.y,c.up.set(0,1,0),c.lookAt(c.position.clone().add(h)),c.updateMatrixWorld(),c.projectionMatrix.copy(i.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(c.projectionMatrix),this.textureMatrix.multiply(c.matrixWorldInverse);let u=new Pi(new R(0,1,0),-this.level);u.applyMatrix4(c.matrixWorldInverse);let d=new re(u.normal.x,u.normal.y,u.normal.z,u.constant),f=c.projectionMatrix,p=new re((Math.sign(d.x)+f.elements[8])/f.elements[0],(Math.sign(d.y)+f.elements[9])/f.elements[5],-1,(1+f.elements[10])/f.elements[14]);d.multiplyScalar(2/d.dot(p)),f.elements[2]=d.x,f.elements[6]=d.y,f.elements[10]=d.z+1-.003,f.elements[14]=d.w,this.mesh.visible=!1;let x=[];for(let v of this.hideList)v&&v.visible&&(v.visible=!1,x.push(v));let g=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;let m=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,c),t.setRenderTarget(m),t.shadowMap.autoUpdate=g;for(let v of x)v.visible=!0;this.mesh.visible=!0}};var En={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ke=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},L1=new Ps(-1,1,1,-1,0,1),Vh=class extends fe{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}},k1=new Vh,Si=class{constructor(t){this._mesh=new Ot(k1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,L1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var An=class extends ke{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Qt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Be.clone(t.uniforms),this.material=new Qt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Si(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zr=class extends ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Ua=class extends ke{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Na=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Te}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new An(En),this.copyPass.material.blending=Ae,this.clock=new ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zr!==void 0&&(a instanceof zr?i=!0:a instanceof Ua&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fa=class extends ke{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var bf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zs=class r extends ke{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(s,a,{type:Te}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Me(s,a,{type:Te});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Me(s,a,{type:Te});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=bf;this.highPassUniforms=Be.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=En;this.copyUniforms=Be.clone(h.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:en,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new zi,this.fsQuad=new Si(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new lt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Qt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Qt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Zs.BlurDirectionX=new lt(1,0);Zs.BlurDirectionY=new lt(0,1);var _f={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Oa=class extends ke{constructor(){super();let t=_f;this.uniforms=Be.clone(t.uniforms),this.material=new jo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Rt},cameraProjectionMatrixInverse:{value:new Rt},cameraWorldMatrix:{value:new Rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},kr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ba={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function wf(r=5){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=U1(t),i=e.length,n=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=e[a],l=2*Math.PI*o/i,c=new R(Math.cos(l),Math.sin(l),0).normalize();n[a*4]=(c.x*.5+.5)*255,n[a*4+1]=(c.y*.5+.5)*255,n[a*4+2]=127,n[a*4+3]=255}let s=new Hi(n,t,t);return s.wrapS=Di,s.wrapT=Di,s.needsUpdate=!0,s}function U1(r){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,i=Array(e).fill(0),n=Math.floor(t/2),s=t-1;for(let a=1;a<=e;){if(n===-1&&s===t?(s=t-2,n=0):(s===t&&(s=0),n<0&&(n=t-1)),i[n*t+s]!==0){s-=2,n++;continue}else i[n*t+s]=a++;s++,n--}return i}var Ur={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraProjectionMatrixInverse:{value:new Rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Gh(r,t,e){let i=N1(r,t,e),n="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=i[s];n+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return n}function N1(r,t,e){let i=[];for(let n=0;n<r;n++){let s=2*Math.PI*t*n/r,a=Math.pow(n/(r-1),e);i.push(new R(Math.cos(s),Math.sin(s),a))}return i}var Ha=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,n){return t[0]*e+t[1]*i+t[2]*n}dot4(t,e,i,n,s){return t[0]*e+t[1]*i+t[2]*n+t[3]*s}noise(t,e){let i,n,s,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,x=e-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let v=p-g+h,y=x-m+h,M=p-1+2*h,S=x-1+2*h,w=l&255,T=c&255,E=this.perm[w+this.perm[T]]%12,_=this.perm[w+g+this.perm[T+m]]%12,b=this.perm[w+1+this.perm[T+1]]%12,C=.5-p*p-x*x;C<0?i=0:(C*=C,i=C*C*this.dot(this.grad3[E],p,x));let z=.5-v*v-y*y;z<0?n=0:(z*=z,n=z*z*this.dot(this.grad3[_],v,y));let L=.5-M*M-S*S;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[b],M,S)),70*(i+n+s)}noise3d(t,e,i){let n,s,a,o,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(i+c),f=1/6,p=(h+u+d)*f,x=h-p,g=u-p,m=d-p,v=t-x,y=e-g,M=i-m,S,w,T,E,_,b;v>=y?y>=M?(S=1,w=0,T=0,E=1,_=1,b=0):v>=M?(S=1,w=0,T=0,E=1,_=0,b=1):(S=0,w=0,T=1,E=1,_=0,b=1):y<M?(S=0,w=0,T=1,E=0,_=1,b=1):v<M?(S=0,w=1,T=0,E=0,_=1,b=1):(S=0,w=1,T=0,E=1,_=1,b=0);let C=v-S+f,z=y-w+f,L=M-T+f,N=v-E+2*f,O=y-_+2*f,U=M-b+2*f,X=v-1+3*f,F=y-1+3*f,B=M-1+3*f,j=h&255,rt=u&255,st=d&255,_t=this.perm[j+this.perm[rt+this.perm[st]]]%12,Y=this.perm[j+S+this.perm[rt+w+this.perm[st+T]]]%12,J=this.perm[j+E+this.perm[rt+_+this.perm[st+b]]]%12,gt=this.perm[j+1+this.perm[rt+1+this.perm[st+1]]]%12,it=.6-v*v-y*y-M*M;it<0?n=0:(it*=it,n=it*it*this.dot3(this.grad3[_t],v,y,M));let xt=.6-C*C-z*z-L*L;xt<0?s=0:(xt*=xt,s=xt*xt*this.dot3(this.grad3[Y],C,z,L));let St=.6-N*N-O*O-U*U;St<0?a=0:(St*=St,a=St*St*this.dot3(this.grad3[J],N,O,U));let vt=.6-X*X-F*F-B*B;return vt<0?o=0:(vt*=vt,o=vt*vt*this.dot3(this.grad3[gt],X,F,B)),32*(n+s+a+o)}noise4d(t,e,i,n){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,x=(t+e+i+n)*l,g=Math.floor(t+x),m=Math.floor(e+x),v=Math.floor(i+x),y=Math.floor(n+x),M=(g+m+v+y)*c,S=g-M,w=m-M,T=v-M,E=y-M,_=t-S,b=e-w,C=i-T,z=n-E,L=_>b?32:0,N=_>C?16:0,O=b>C?8:0,U=_>z?4:0,X=b>z?2:0,F=C>z?1:0,B=L+N+O+U+X+F,j=a[B][0]>=3?1:0,rt=a[B][1]>=3?1:0,st=a[B][2]>=3?1:0,_t=a[B][3]>=3?1:0,Y=a[B][0]>=2?1:0,J=a[B][1]>=2?1:0,gt=a[B][2]>=2?1:0,it=a[B][3]>=2?1:0,xt=a[B][0]>=1?1:0,St=a[B][1]>=1?1:0,vt=a[B][2]>=1?1:0,Gt=a[B][3]>=1?1:0,nt=_-j+c,ut=b-rt+c,k=C-st+c,pt=z-_t+c,ct=_-Y+2*c,yt=b-J+2*c,ft=C-gt+2*c,zt=z-it+2*c,et=_-xt+3*c,I=b-St+3*c,A=C-vt+3*c,W=z-Gt+3*c,Q=_-1+4*c,ot=b-1+4*c,tt=C-1+4*c,It=z-1+4*c,Mt=g&255,Tt=m&255,Xt=v&255,ht=y&255,Pt=o[Mt+o[Tt+o[Xt+o[ht]]]]%32,Bt=o[Mt+j+o[Tt+rt+o[Xt+st+o[ht+_t]]]]%32,Ht=o[Mt+Y+o[Tt+J+o[Xt+gt+o[ht+it]]]]%32,Dt=o[Mt+xt+o[Tt+St+o[Xt+vt+o[ht+Gt]]]]%32,Kt=o[Mt+1+o[Tt+1+o[Xt+1+o[ht+1]]]]%32,Vt=.6-_*_-b*b-C*C-z*z;Vt<0?h=0:(Vt*=Vt,h=Vt*Vt*this.dot4(s[Pt],_,b,C,z));let ee=.6-nt*nt-ut*ut-k*k-pt*pt;ee<0?u=0:(ee*=ee,u=ee*ee*this.dot4(s[Bt],nt,ut,k,pt));let H=.6-ct*ct-yt*yt-ft*ft-zt*zt;H<0?d=0:(H*=H,d=H*H*this.dot4(s[Ht],ct,yt,ft,zt));let bt=.6-et*et-I*I-A*A-W*W;bt<0?f=0:(bt*=bt,f=bt*bt*this.dot4(s[Dt],et,I,A,W));let K=.6-Q*Q-ot*ot-tt*tt-It*It;return K<0?p=0:(K*=K,p=K*K*this.dot4(s[Kt],Q,ot,tt,It)),27*(h+u+d+f+p)}};var Nr=class r extends ke{constructor(t,e,i,n,s,a,o){super(),this.width=i!==void 0?i:512,this.height=n!==void 0?n:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=wf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Me(this.width,this.height,{type:Te}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Qt({defines:Object.assign({},Lr.defines),uniforms:Be.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ko,this.normalMaterial.blending=Ae,this.pdMaterial=new Qt({defines:Object.assign({},Ur.defines),uniforms:Be.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Qt({defines:Object.assign({},kr.defines),uniforms:Be.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,blending:Ae}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Qt({uniforms:Be.clone(En.uniforms),vertexShader:En.vertexShader,fragmentShader:En.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:na,blendDst:Fs,blendEquation:xi,blendSrcAlpha:ia,blendDstAlpha:Fs,blendEquationAlpha:xi}),this.blendMaterial=new Qt({uniforms:Be.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:lh,blendSrc:na,blendDst:Fs,blendEquation:xi,blendSrcAlpha:ia,blendDstAlpha:Fs,blendEquationAlpha:xi}),this.fsQuad=new Si(null),this.originalClearColor=new dt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Is,this.depthTexture.format=Mn,this.depthTexture.type=yn,this.normalRenderTarget=new Me(this.width,this.height,{minFilter:De,magFilter:De,type:Te,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,n,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,n=e.clearColor||n,s=e.clearAlpha||s,n!=null&&(t.setClearColor(n),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){let n=e.get(i);i.visible=n}),e.clear()}generateNoise(t=64){let e=new Ha,i=t*t*4,n=new Uint8Array(i);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;n[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,n[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,n[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,n[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new Hi(n,t,t,ci,hi);return s.wrapS=Di,s.wrapT=Di,s.needsUpdate=!0,s}};Nr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Sf={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var Va=class extends ke{constructor(t,e,i){super(),this.scene=t,this.camera=e;let n=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Me(1,1,{minFilter:De,magFilter:De,type:Te}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new mr,this.materialDepth.depthPacking=Mh,this.materialDepth.blending=Ae;let o=Sf,l=Be.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=n,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new Qt({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new Si(this.materialBokeh),this._oldClearColor=new dt}render(t,e,i){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);let n=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(n),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var Tf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new lt(1/1024,1/512)}},vertexShader:`

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
			
		}`};var F1={uniforms:{tDiffuse:{value:null},uCurInv:{value:new Rt},uPrev:{value:new Rt},uStrength:{value:.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},O1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new lt(1,1)},uGrade:{value:1},uGrain:{value:.04},uVignette:{value:1},uCA:{value:1},uDamage:{value:0},uSuppress:{value:0},uFlash:{value:0},uDowned:{value:0},uSat:{value:1.08},uContrast:{value:1.06},uLift:{value:new R(.01,.01,.02)},uGamma:{value:new R(1,1,1)},uGain:{value:new R(1.02,1,.97)},uTint:{value:new R(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Wh=class extends ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.clear=!1}render(t,e,i){let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(this.renderToScreen?null:i),t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=n}};function Ef(r,t){let e=r.render.bind(r);return r.render=(...i)=>{let n=t(),s=n.map(a=>a.visible);n.forEach(a=>{a.visible=!1}),e(...i),n.forEach((a,o)=>{a.visible=s[o]})},r}var Ga=class{constructor(t,e,i,n,s,a){this.renderer=t,this.scene=e,this.camera=i,this.vmScene=n,this.vmCamera=s,this.settings=a,this.hidden=[],this.prevRot=new Rt,this.focus=50,this.dofAmount=0,this.menuBlur=0,this.time=0,this.build()}build(){let t=this.renderer,e=t.getDrawingBufferSize(new lt),i=this.settings.get("antialias"),n=new Me(e.x,e.y,{type:Te,samples:i==="msaa"?4:0});this.composer&&this.composer.dispose(),this.composer=new Na(t,n),this.composer.setPixelRatio(1),this.composer.setSize(e.x,e.y),this.aa=i,this.renderPass=new Fa(this.scene,this.camera),this.gtao=Ef(new Nr(this.scene,this.camera,e.x,e.y),()=>this.hidden),this.gtao.updateGtaoMaterial({radius:1.4,distanceExponent:1.5,thickness:2.5,scale:1.25,samples:12,distanceFallOff:1}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.gtao.blendIntensity=.85,this.bokeh=Ef(new Va(this.scene,this.camera,{focus:50,aperture:2e-5,maxblur:.008}),()=>this.hidden),this.motion=new An(F1),this.vmPass=new Wh(this.vmScene,this.vmCamera),this.bloom=new Zs(new lt(e.x/2,e.y/2),.28,.45,2.2),this.output=new Oa,this.final=new An(O1),this.fxaa=new An(Tf);for(let s of[this.renderPass,this.gtao,this.bokeh,this.motion,this.vmPass,this.bloom,this.output,this.final,this.fxaa])this.composer.addPass(s);this.setSize(e.x,e.y),this.applySettings()}applySettings(){let t=this.settings;if(t.get("antialias")!==this.aa){this.build();return}this.gtao.enabled=t.get("ssao"),this.bloom.enabled=t.get("bloom"),this.motion.enabled=t.get("motionBlur"),this.fxaa.enabled=t.get("antialias")==="fxaa";let e=this.final.uniforms;e.uGrade.value=t.get("colorGrading")?1:0,e.uGrain.value=t.get("filmGrain")?.045:0,e.uVignette.value=t.get("vignette")?1:0,e.uCA.value=t.get("chromatic")?1:0,this.updateDofEnabled()}setGrade(t){let e=this.final.uniforms;e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uLift.value.set(...t.lift),e.uGamma.value.set(...t.gamma),e.uGain.value.set(...t.gain),e.uTint.value.set(...t.tint||[1,1,1])}updateDofEnabled(){this.bokeh.enabled=this.settings.get("dof")&&(this.dofAmount>.02||this.menuBlur>.02)}setSize(t,e){this.composer.setSize(t,e),this.final.uniforms.uRes.value.set(t,e),this.fxaa.material.uniforms.resolution.value.set(1/t,1/e)}render(t,e){this.time+=t;let i=this.final.uniforms;if(i.uTime.value=this.time,i.uDamage.value=e.damage||0,i.uSuppress.value=e.suppress||0,i.uFlash.value=e.flash||0,i.uDowned.value=e.downed||0,this.dofAmount=e.ads||0,this.menuBlur=e.menu?1:0,this.updateDofEnabled(),this.bokeh.enabled){let n=this.bokeh.uniforms;this.focus+=((e.focus||60)-this.focus)*Math.min(1,t*8),n.focus.value=this.menuBlur?2:this.focus,n.aperture.value=this.menuBlur?.0012:4e-5*this.dofAmount,n.maxblur.value=this.menuBlur?.012:.006*this.dofAmount}if(this.motion.enabled){let n=this.camera,a=new Rt().extractRotation(n.matrixWorld).clone().invert(),o=new Rt().multiplyMatrices(n.projectionMatrix,a);this.motion.uniforms.uCurInv.value.copy(o).invert(),this.motion.uniforms.uPrev.value.copy(this.prevVP||o),this.motion.uniforms.uStrength.value=Math.min(1,.016/Math.max(t,.001))*.55,this.prevVP=o}else this.prevVP=null;this.composer.render(t)}};var B1=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),Af=[0,1,2,0,2,3],Fr=class{constructor(t,e,i,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*4),this.c1=new Float32Array(e*4),this.rot=new Float32Array(e),this.rotV=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e);let s=new wr;s.setAttribute("corner",new ue(B1,2)),s.setIndex(Af),this.aPos=new vi(new Float32Array(e*3),3).setUsage($n),this.aCol=new vi(new Float32Array(e*4),4).setUsage($n),this.aSR=new vi(new Float32Array(e*2),2).setUsage($n),s.setAttribute("iPos",this.aPos),s.setAttribute("iCol",this.aCol),s.setAttribute("iSR",this.aSR),s.instanceCount=0,this.uniforms={uTex:{value:i},uLight:{value:new dt(1,1,1)},uFogColor:{value:new dt},uFogDensity:{value:0}};let a=new Qt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:n?en:xn,vertexShader:`
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
        }`});this.mesh=new Ot(s,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?6:5,t.add(this.mesh),this.geo=s}emit(t,e,i,n,s,a,o,l,c,h,u,d=0,f=0,p=0){let x;this.n<this.max?x=this.n++:x=Math.floor(Math.random()*this.max),this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=i,this.vel[x*3]=n,this.vel[x*3+1]=s,this.vel[x*3+2]=a,this.life[x]=o,this.maxLife[x]=o,this.s0[x]=l,this.s1[x]=c;for(let g=0;g<4;g++)this.c0[x*4+g]=h[g],this.c1[x*4+g]=u[g];this.rot[x]=Math.random()*6.28,this.rotV[x]=p*(Math.random()-.5),this.drag[x]=d,this.grav[x]=f}update(t){let e=0,i=this.aPos.array,n=this.aCol.array,s=this.aSR.array;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let l=--this.n;l!==e&&(this.pos.copyWithin(e*3,l*3,l*3+3),this.vel.copyWithin(e*3,l*3,l*3+3),this.c0.copyWithin(e*4,l*4,l*4+4),this.c1.copyWithin(e*4,l*4,l*4+4),this.life[e]=this.life[l],this.maxLife[e]=this.maxLife[l],this.s0[e]=this.s0[l],this.s1[e]=this.s1[l],this.rot[e]=this.rot[l],this.rotV[e]=this.rotV[l],this.drag[e]=this.drag[l],this.grav[e]=this.grav[l]);continue}let a=Math.max(0,1-this.drag[e]*t);this.vel[e*3]*=a,this.vel[e*3+1]=this.vel[e*3+1]*a-this.grav[e]*t,this.vel[e*3+2]*=a,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.rot[e]+=this.rotV[e]*t;let o=1-this.life[e]/this.maxLife[e];i[e*3]=this.pos[e*3],i[e*3+1]=this.pos[e*3+1],i[e*3+2]=this.pos[e*3+2];for(let l=0;l<4;l++)n[e*4+l]=this.c0[e*4+l]+(this.c1[e*4+l]-this.c0[e*4+l])*o;o<.08&&(n[e*4+3]*=o/.08),s[e*2]=this.s0[e]+(this.s1[e]-this.s0[e])*Math.sqrt(o),s[e*2+1]=this.rot[e],e++}this.geo.instanceCount=this.n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSR.needsUpdate=!0,this.aPos.updateRanges=[{start:0,count:this.n*3}]}},qh=class{constructor(t,e=400){this.max=e;let i=new wr;i.setAttribute("corner",new ue(new Float32Array([0,-1,1,-1,1,1,0,1]),2)),i.setIndex(Af),this.aS=new vi(new Float32Array(e*3),3).setUsage($n),this.aE=new vi(new Float32Array(e*3),3).setUsage($n),this.aC=new vi(new Float32Array(e*4),4).setUsage($n),i.setAttribute("iS",this.aS),i.setAttribute("iE",this.aE),i.setAttribute("iC",this.aC),i.instanceCount=0;let n=new Qt({transparent:!0,depthWrite:!1,blending:en,vertexShader:`
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
        void main() { float a = vT * vT * (1.0 - abs(vSide)); gl_FragColor = vec4(vC.rgb * a * 2.5, a); }`});this.mesh=new Ot(i,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh),this.geo=i,this.n=0}begin(){this.n=0}add(t,e,i,n,s,a,o,l,c,h){if(this.n>=this.max)return;let u=this.n++,d=this.aS.array,f=this.aE.array,p=this.aC.array;d[u*3]=t,d[u*3+1]=e,d[u*3+2]=i,f[u*3]=n,f[u*3+1]=s,f[u*3+2]=a,p[u*4]=o,p[u*4+1]=l,p[u*4+2]=c,p[u*4+3]=h}end(){this.geo.instanceCount=this.n,this.aS.needsUpdate=this.aE.needsUpdate=this.aC.needsUpdate=!0}},Wa=class{constructor(t,e,i,n){this.max=e,this.i=0,this.owners=new Array(e).fill(null);let s=new pe({map:si(i),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,roughness:1});this.mesh=new yi(new Ke(1,1),s,e);let a=new Rt().makeScale(0,0,0);for(let o=0;o<e;o++)this.mesh.setMatrixAt(o,a);this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.receiveShadow=!0,t.add(this.mesh),this.size=n,this._m=new Rt,this._q=new Ie,this._q2=new Ie,this._v=new R,this._n=new R,this._s=new R}add(t,e,i,n,s,a,o,l=1){let c=this.i;this.i=(this.i+1)%this.max,this._n.set(n,s,a),this._q.setFromUnitVectors(new R(0,0,1),this._n),this._q2.setFromAxisAngle(new R(0,0,1),Math.random()*6.28),this._q.multiply(this._q2);let h=this.size*l*(.8+Math.random()*.4);this._v.set(t+n*.012,e+s*.012,i+a*.012),this._s.set(h,h,h),this._m.compose(this._v,this._q,this._s),this.mesh.setMatrixAt(c,this._m),this.mesh.instanceMatrix.needsUpdate=!0,this.owners[c]=o||null}removeOwner(t){let e=new Rt().makeScale(0,0,0),i=!1;for(let n=0;n<this.max;n++)this.owners[n]===t&&(this.mesh.setMatrixAt(n,e),this.owners[n]=null,i=!0);i&&(this.mesh.instanceMatrix.needsUpdate=!0)}},Xh=class{constructor(t,e=500){this.max=e,this.list=[];let i=new pe({roughness:.9});this.mesh=new yi(new ui(1,1,1),i,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1;let n=new Rt().makeScale(0,0,0);for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,n),this.mesh.setColorAt(s,new dt(1,1,1));t.add(this.mesh),this.free=[];for(let s=e-1;s>=0;s--)this.free.push(s);this._m=new Rt,this._q=new Ie,this._e=new We,this._p=new R,this._s=new R,this._c=new dt}spawn(t,e,i,n,s,a,o,l,c,h,u=8){let d;this.free.length?d=this.free.pop():d=this.list.shift().slot,this.list.push({slot:d,x:t,y:e,z:i,vx:n,vy:s,vz:a,rx:Math.random()*6,ry:Math.random()*6,rz:Math.random()*6,ax:q(-8,8),ay:q(-8,8),az:q(-8,8),sx:o,sy:l,sz:c,life:u,rest:!1}),this._c.set(h).multiplyScalar(.8+Math.random()*.35),this.mesh.setColorAt(d,this._c),this.mesh.instanceColor.needsUpdate=!0}update(t,e){if(this.list.length){for(let i=this.list.length-1;i>=0;i--){let n=this.list[i];if(n.life-=t,n.life<=0){this.mesh.setMatrixAt(n.slot,this._m.makeScale(0,0,0)),this.free.push(n.slot),this.list.splice(i,1);continue}if(!n.rest){n.vy-=18*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rx+=n.ax*t,n.ry+=n.ay*t,n.rz+=n.az*t;let a=e.groundAt(n.x,n.z,n.y+.3,.05)+Math.min(n.sx,n.sy,n.sz)*.5;n.y<a&&(n.y=a,Math.abs(n.vy)<1.5&&(n.rest=!0,n.vx=n.vz=0),n.vy=-n.vy*.3,n.vx*=.55,n.vz*=.55,n.ax*=.5,n.ay*=.5,n.az*=.5)}let s=n.life<1?n.life:1;this._e.set(n.rx,n.ry,n.rz),this._q.setFromEuler(this._e),this._p.set(n.x,n.y,n.z),this._s.set(n.sx*s,n.sy*s,n.sz*s),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(n.slot,this._m)}this.mesh.instanceMatrix.needsUpdate=!0}}},qa=class{constructor(t){this.game=t;let e=t.scene;this.smoke=new Fr(e,3e3,si("smoke"),!1),this.glow=new Fr(e,2500,si("spark"),!0),this.flashes=new Fr(e,200,si("flash"),!0),this.tracers=new qh(e,1400),this.holes=new Wa(e,450,"bullethole",.13),this.scorch=new Wa(e,60,"scorch",4.2),this.debris=new Xh(e,500),this.lights=[];for(let i=0;i<3;i++){let n=new ta(16755285,0,20,2);n.castShadow=!1,e.add(n),this.lights.push({light:n,t:0,dur:1,i0:0})}this.emitters=[],this.trauma=0,this.q=1,this.hidden=[this.smoke.mesh,this.glow.mesh,this.flashes.mesh,this.tracers.mesh,this.holes.mesh,this.scorch.mesh]}setQuality(t){this.q={low:.35,medium:.65,high:1}[t.get("particles")]||1,this.decalsOn=t.get("decals"),this.debrisOn=t.get("debris"),this.shakeOn=t.get("screenShake"),this.holes.mesh.visible=this.scorch.mesh.visible=this.decalsOn}count(t){return Math.max(1,Math.round(t*this.q))}flashLight(t,e,i,n,s,a,o){let l=this.lights[0];for(let c of this.lights)c.t/c.dur*c.i0<l.t/l.dur*l.i0&&(l=c);l.light.position.set(t,e,i),l.light.color.set(n),l.light.distance=a,l.i0=s,l.t=o,l.dur=o}shake(t,e,i,n){if(!this.shakeOn)return;let s=t;if(e!==void 0){let a=this.game.camera.position,o=Math.hypot(a.x-e,a.y-i,a.z-n);s=t*Math.max(0,1-o/60)}this.trauma=Math.min(1,this.trauma+s)}muzzle(t,e,i,n,s,a,o=1,l=!1,c=!1){l||(this.flashes.emit(t,e,i,0,0,0,.05,.45*o,.65*o,[1,.8,.45,1],[1,.5,.2,0],0,0),this.flashes.emit(t+n*.15,e+s*.15,i+a*.15,n*2,s*2,a*2,.04,.3*o,.5*o,[1,.9,.6,1],[1,.6,.2,0],0,0),this.flashLight(t,e,i,16756832,c?6:12,12,.06)),Math.random()<this.q&&this.smoke.emit(t+n*.2,e+s*.2,i+a*.2,n*1.5+q(-.2,.2),s*1.5+.4,a*1.5+q(-.2,.2),.8,.15,.9,[.8,.8,.8,.22],[.8,.8,.8,0],2,-.3,1)}impact(t,e,i,n,s,a,o,l){let c=this.q;switch(o){case"flesh":for(let h=0;h<this.count(6);h++)this.smoke.emit(t,e,i,n*1.5+q(-1,1),s*1.5+q(-.5,1),a*1.5+q(-1,1),.35,.08,.5,[.55,.04,.03,.85],[.4,.02,.02,0],4,3);return;case"water":for(let h=0;h<this.count(10);h++)this.smoke.emit(t,e,i,q(-1,1),q(2,5),q(-1,1),.6,.1,.5,[.9,.95,1,.7],[.9,.95,1,0],1,9);return;case"metal":case"container":for(let h=0;h<this.count(10);h++)this.glow.emit(t,e,i,n*4+q(-3,3),s*4+q(-1,4),a*4+q(-3,3),q(.15,.4),.06,.02,[1,.8,.4,1],[1,.4,.1,0],1,12);this.smoke.emit(t,e,i,n,s,a,.5,.1,.4,[.5,.5,.5,.3],[.5,.5,.5,0],2,0);break;default:{let h=this.matColor(o),u=this.count(5);for(let d=0;d<u;d++)this.smoke.emit(t+n*.05,e+s*.05,i+a*.05,n*q(1,3)+q(-.6,.6),s*q(1,3)+q(0,1.2),a*q(1,3)+q(-.6,.6),q(.5,1.1),.1,q(.5,.9),[h[0],h[1],h[2],.55],[h[0],h[1],h[2],0],3,1.2,1);if(o==="stone"||o==="concrete"||o==="brick"||o==="rock")for(let d=0;d<this.count(3);d++)this.glow.emit(t,e,i,n*3+q(-2,2),s*3+q(0,3),a*3+q(-2,2),.12,.04,.02,[1,.85,.6,1],[1,.5,.2,0],1,10);for(let d=0;d<this.count(4);d++)this.smoke.emit(t,e,i,n*3+q(-2,2),s*3+q(1,4),a*3+q(-2,2),.6,.04,.04,[h[0]*.7,h[1]*.7,h[2]*.7,1],[h[0]*.7,h[1]*.7,h[2]*.7,1],.5,14)}}this.decalsOn&&c>.2&&this.holes.add(t,e,i,n,s,a,l)}matColor(t){switch(t){case"wood":return[.55,.42,.3];case"plaster":return[.85,.82,.76];case"brick":return[.7,.48,.38];case"concrete":case"stone":case"rock":return[.68,.67,.64];case"sand":return[.78,.7,.52];case"hay":return[.85,.75,.45];case"grass":return[.45,.4,.28];case"dirt":return[.5,.42,.32];default:return[.55,.47,.36]}}explosion(t,e,i,n=1,s={}){let a=this.q;this.flashLight(t,e+1,i,16751168,60*n,30*n,.35),this.flashes.emit(t,e+.5,i,0,0,0,.12,2*n,6*n,[1,.8,.5,1],[1,.4,.1,0],0,0);for(let l=0;l<this.count(18*n);l++){let c=Math.random()*6.28,h=Math.random(),u=q(3,9)*n;this.glow.emit(t,e+.5,i,Math.cos(c)*u*(1-h),q(2,8)*n,Math.sin(c)*u*(1-h),q(.25,.6),1.6*n,3.5*n,[1,.62,.25,.9],[.8,.2,.05,0],4,-1,2)}for(let l=0;l<this.count(30*n);l++)this.glow.emit(t,e+.5,i,q(-14,14),q(4,18),q(-14,14),q(.4,1.2),.12,.05,[1,.8,.4,1],[1,.4,.1,0],.5,18);for(let l=0;l<this.count(16*n);l++){let c=q(.12,.3);this.smoke.emit(t+q(-1.5,1.5)*n,e+q(0,2)*n,i+q(-1.5,1.5)*n,q(-2,2),q(1.5,5)*n,q(-2,2),q(4,9),2.2*n,8*n,[c,c,c*.95,.75],[.35,.34,.33,0],.8,-.4,.6)}let o=s.dirt||[.45,.38,.28];for(let l=0;l<this.count(14*n);l++){let c=Math.random()*6.28;this.smoke.emit(t,e+.2,i,Math.cos(c)*q(6,12)*n,q(.2,1.5),Math.sin(c)*q(6,12)*n,q(1.5,3),1.2*n,4*n,[o[0],o[1],o[2],.55],[o[0],o[1],o[2],0],2.5,.2,.5)}for(let l=0;l<this.count(16*n);l++)this.smoke.emit(t,e+.3,i,q(-7,7)*n,q(5,14)*n,q(-7,7)*n,q(.8,1.6),.15,.15,[o[0]*.6,o[1]*.6,o[2]*.6,1],[o[0]*.6,o[1]*.6,o[2]*.6,1],.3,16);if(this.debrisOn)for(let l=0;l<Math.round(8*n*a);l++){let c=q(.08,.25);this.debris.spawn(t,e+.4,i,q(-7,7),q(5,12),q(-7,7),c,c,c,s.debrisColor||5917242,q(4,8))}this.decalsOn&&s.ground&&this.scorch.add(t,e+.02,i,s.nx??0,s.ny??1,s.nz??0,s.box,n),s.fire&&this.addFire(t,e,i,s.fire,n*.6),this.shake(.55*n,t,e,i)}pieceDestroyed(t,e){let i=Pr[t.mat]||Pr.plaster,n=(t.minX+t.maxX)/2,s=(t.minY+t.maxY)/2,a=(t.minZ+t.maxZ)/2,o=t.maxX-t.minX,l=t.maxY-t.minY,c=t.maxZ-t.minZ,h=this.matColor(t.mat),u=this.count(6);for(let d=0;d<u;d++)this.smoke.emit(n+q(-o,o)*.4,s+q(-l,l)*.4,a+q(-c,c)*.4,q(-1,1),q(0,1.5),q(-1,1),q(2.5,5),.8,3.2,[h[0],h[1],h[2],.6],[h[0],h[1],h[2],0],1.2,-.1,.5);if(this.debrisOn){let d=Math.max(2,Math.round(Math.min(8,o*l*c*14+2)*this.q));for(let f=0;f<d;f++){let p=Math.min(.45,Math.max(o,l,c)*q(.15,.35));this.debris.spawn(n+q(-o,o)*.4,s+q(-l,l)*.4,a+q(-c,c)*.4,q(-3,3),q(0,4),q(-3,3),p*q(.6,1.4),p*q(.5,1.2),p*q(.6,1.4),i.debris,q(6,12))}}this.holes.removeOwner(t),this.game.audio&&this.game.audio.play3d(i.sound==="wood"?"breakWood":i.sound==="metal"?"breakMetal":"breakStone",n,s,a,{vol:.8})}addSmokeScreen(t,e,i,n=16){let s=this.game.time,a=s,o={x:t,y:e+1.5,z:i,r:6.5,strength:.96,until:s+n,grow:l=>Math.min(1,(l-a)/2.5)*(l>a+n-3?Math.max(.2,(a+n-l)/3):1)};this.game.world.collision.addDynamicSoft(o),this.emitters.push({type:"smoke",x:t,y:e,z:i,t:n,rate:26,acc:0})}addFire(t,e,i,n=8,s=1){this.emitters.push({type:"fire",x:t,y:e,z:i,t:n,rate:22*s,acc:0,scale:s})}update(t){for(let e=this.emitters.length-1;e>=0;e--){let i=this.emitters[e];if(i.t-=t,i.t<=0){this.emitters.splice(e,1);continue}for(i.acc+=t*i.rate*this.q;i.acc>=1;)if(i.acc-=1,i.type==="smoke"){let n=q(.72,.88);this.smoke.emit(i.x+q(-.8,.8),i.y+.3,i.z+q(-.8,.8),q(-1.6,1.6),q(.4,1.5),q(-1.6,1.6),q(5,8),1.5,9,[n,n,n,.7],[n,n,n,0],.35,-.06,.3)}else if(i.type==="fire"){let n=i.scale;this.glow.emit(i.x+q(-.6,.6)*n,i.y+.2,i.z+q(-.6,.6)*n,q(-.3,.3),q(1.5,3)*n,q(-.3,.3),q(.4,.9),.9*n,.2,[1,.55,.15,.9],[.9,.2,.05,0],.5,-1,1),Math.random()<.3&&this.smoke.emit(i.x,i.y+1.5*n,i.z,q(-.4,.4),q(1,2),q(-.4,.4),q(3,6),.8*n,4*n,[.12,.11,.1,.55],[.3,.3,.3,0],.3,-.3,.4),Math.random()<.15&&this.flashLight(i.x,i.y+1,i.z,16747056,6*n,10,.25)}}this.smoke.update(t),this.glow.update(t),this.flashes.update(t),this.debris.update(t,this.game.world.collision);for(let e of this.lights)e.t>0?(e.t-=t,e.light.intensity=Math.max(0,e.t/e.dur)*e.i0):e.light.intensity=0;this.trauma=Math.max(0,this.trauma-t*1.4)}setLighting(t){let e=t.time,i=new dt().setRGB(...e.sky).multiplyScalar(e.hemiI*.8).add(new dt().setRGB(...e.sun).multiplyScalar(e.sunI*.22));this.smoke.uniforms.uLight.value.copy(i);for(let n of[this.smoke,this.glow,this.flashes])n.uniforms.uFogColor.value.copy(t.fog.color),n.uniforms.uFogDensity.value=t.fog.density}};var Or=Math.PI/180,es=new R,Yh=new R,Cf=new R,Cn=class{constructor(t){this.game=t,this.bullets=[],this.projectiles=[],this.placed=[],this.shotCounter=0}get world(){return this.game.world}fireBullet(t,e,i){let n=e.stats,s=new R,a=new R;t.isPlayer&&this.game.playerCtl?this.game.playerCtl.aimRay(s,a):(t.eye(s),t.aimDir(a));let o=t.spread();if(n.pellets&&(o=Math.max(o,n.pelletSpread||2.5)*(i===0?.3:1)),t.suppression>.2&&!t.isPlayer&&(o+=t.suppression*.8),o>0){let u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*o*.5*Or,f=Math.abs(a.y)>.99?es.set(1,0,0):es.set(0,1,0),p=new R().crossVectors(a,f).normalize(),x=new R().crossVectors(p,a).normalize();a.addScaledVector(p,Math.cos(u)*Math.tan(d)).addScaledVector(x,Math.sin(u)*Math.tan(d)).normalize()}let l=n.vel*n.velMul,c=t.isPlayer&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new R);this.shotCounter++;let h=!n.suppressed&&(n.type==="sniper"||n.type==="lmg"||i===0&&this.shotCounter%(t.isPlayer?3:2)===0);this.bullets.push({x:s.x,y:s.y,z:s.z,vx:a.x*l,vy:a.y*l,vz:a.z*l,ox:c.x-s.x,oy:c.y-s.y,oz:c.z-s.z,shooter:t,team:t.team,s:n,dmgMul:n.dmgMul,traveled:0,life:2.6,penLeft:n.pen,penDmg:1,tracer:h,whizzed:!1,weapon:n.name})}falloff(t,e){return e<=t.r0?t.dmg:e>=t.r1?t.dmgMin:jt(t.dmg,t.dmgMin,(e-t.r0)/(t.r1-t.r0))}updateBullets(t){let e=this.game.fx,i=this.game.soldiers,n=this.world.collision,s=this.world.terrain.waterLevel;e.tracers.begin();for(let a=this.bullets.length-1;a>=0;a--){let o=this.bullets[a];o.life-=t;let l=t,c=o.life>0,h=o.x,u=o.y,d=o.z,f=0;for(;c&&l>0&&f++<4;){let p=l;l=0;let x=o.vy-9.81*p,g=o.x+o.vx*p,m=o.y+(o.vy+x)*.5*p,v=o.z+o.vz*p;o.vy=x;let y=g-o.x,M=m-o.y,S=v-o.z,w=Math.sqrt(y*y+M*M+S*S);if(w<1e-6)break;let T=y/w,E=M/w,_=S/w,b=n.raycast(o.x,o.y,o.z,T,E,_,w,{skipInside:!0,ignore:O=>O.cat==="cloth"}),C=b?b.t:1/0;if(s!==null&&(o.y-s)*(m-s)<0){let O=(o.y-s)/(o.y-m)*w;if(O<C){e.impact(o.x+T*O,s,o.z+_*O,0,1,0,"water"),this.game.audio.play3d("impactWater",o.x+T*O,s,o.z+_*O,{vol:.5,maxDist:60}),c=!1;break}}let z=null,L=C,N=null;for(let O=0;O<i.length;O++){let U=i[O];if(U===o.shooter||U.state==="dead"||U.team===o.team)continue;let X=U.pos.x,F=U.pos.y+.9,B=U.pos.z,j=X-o.x,rt=F-o.y,st=B-o.z,_t=Nt(j*T+rt*E+st*_,0,w),Y=o.x+T*_t-X,J=o.y+E*_t-F,gt=o.z+_*_t-B,it=Y*Y+J*J+gt*gt;if(it>1.6*1.6){it<4.5*4.5&&_t<L&&this.nearMiss(o,U,Math.sqrt(it),o.x+T*_t,o.y+E*_t,o.z+_*_t);continue}let xt=U.hitSpheres();for(let St=0;St<xt.length;St++){let vt=xt[St],Gt=Ch(o.x,o.y,o.z,y,M,S,vt[0],vt[1],vt[2],vt[3]);Gt>=0&&Gt*w<L&&(L=Gt*w,z=U,N=vt[4])}(!z||z!==U)&&_t<L&&this.nearMiss(o,U,Math.sqrt(it)*.5,o.x+T*_t,o.y+E*_t,o.z+_*_t)}if(z){let O=o.x+T*L,U=o.y+E*L,X=o.z+_*L,F=o.traveled+L,B=this.falloff(o.s,F)*o.dmgMul*o.penDmg,j=N==="head"?o.s.headMul||(o.s.type==="shotgun"?1.5:1.9):N==="leg"?.78:1;B*=j;let rt=new R(T,E,_),st=z.state==="alive";z.takeDamage(B,o.shooter,N,o.weapon,rt,!1),e.impact(O,U,X,-T,-E,-_,"flesh"),this.game.onHit(o.shooter,z,B,N,st),c=!1,o.x=O,o.y=U,o.z=X;break}if(b){let O=b.box?b.box.mat:this.terrainMat(b.x,b.z);if(e.impact(b.x,b.y,b.z,b.nx,b.ny,b.nz,O,b.box),Math.random()<.5&&this.game.audio.play3d(this.impactSound(O),b.x,b.y,b.z,{vol:.5,maxDist:50}),b.box&&b.box.destructible){let U=this.falloff(o.s,o.traveled+b.t)*(b.box.mat==="wood"||b.box.mat==="hay"||b.box.mat==="cloth"?.25:.04)*(o.s.pen>1?1.6:1);this.world.structures.damagePiece(b.box,U,e,"bullet")}if(b.box&&b.box.alive!==!1){let U=b.box.pen*Math.min(b.thickness,1.5)*4;if(U<o.penLeft){let X=1-U/o.penLeft;o.penLeft-=U,o.penDmg*=Math.max(.2,X);let F=b.x+T*(b.thickness+.02),B=b.y+E*(b.thickness+.02),j=b.z+_*(b.thickness+.02);o.traveled+=b.t+b.thickness,o.x=F,o.y=B,o.z=j;let rt=Math.sqrt(o.vx*o.vx+o.vy*o.vy+o.vz*o.vz)*.85;o.vx=T*rt,o.vy=E*rt,o.vz=_*rt,l=p*Math.max(0,(w-b.t-b.thickness)/w),e.impact(F,B,j,T,E,_,b.box.mat,b.box);continue}}else if(b.box){o.traveled+=b.t,o.x=b.x+T*.05,o.y=b.y+E*.05,o.z=b.z+_*.05,o.penDmg*=.7,l=p*Math.max(0,(w-b.t)/w);continue}c=!1,o.x=b.x,o.y=b.y,o.z=b.z;break}o.x=g,o.y=m,o.z=v,o.traveled+=w}if((o.traveled>1400||Math.abs(o.x)>this.world.terrain.half||Math.abs(o.z)>this.world.terrain.half)&&(c=!1),o.s.type==="sniper"||o.s.type==="dmr"){let p=Math.hypot(o.x-h,o.y-u,o.z-d),x=Math.min(26,Math.ceil(p/(o.s.type==="sniper"?1.4:2.6)*e.q)),g=o.s.type==="sniper"?.36:.18;for(let m=0;m<x;m++){let v=(m+Math.random())/x;e.smoke.emit(h+(o.x-h)*v,u+(o.y-u)*v,d+(o.z-d)*v,(Math.random()-.5)*.15,.06,(Math.random()-.5)*.15,o.s.type==="sniper"?1.8:1.1,.04,.32,[.88,.88,.9,g],[.88,.88,.9,0],1.2,-.03,0)}}{let p=Math.hypot(o.vx,o.vy,o.vz)||1,x=Math.min(o.traveled,p*(o.tracer?.035:.028)),g=1-Math.min(1,o.traveled/40),m=o.x+o.ox*g,v=o.y+o.oy*g,y=o.z+o.oz*g,M=1-Math.min(1,Math.max(0,o.traveled-x)/40),S=o.x-o.vx/p*x+o.ox*M,w=o.y-o.vy/p*x+o.oy*M,T=o.z-o.vz/p*x+o.oz*M;if(o.tracer){let E=o.team===0?[1,.85,.5]:[1,.7,.4];e.tracers.add(S,w,T,m,v,y,E[0],E[1],E[2],o.s.type==="sniper"?.032:.025)}else o.s.suppressed?e.tracers.add(S,w,T,m,v,y,.22,.21,.19,.01):e.tracers.add(S,w,T,m,v,y,.62,.56,.44,.013)}c||this.bullets.splice(a,1)}e.tracers.end()}nearMiss(t,e,i,n,s,a){if(e.state==="alive"&&(t.nm||(t.nm=[]),!t.nm.includes(e))){if(t.nm.push(e),e.suppression=Math.min(1,e.suppression+(1-i/4.5)*(t.s.type==="sniper"?.45:.16)),e.isPlayer){let o=Math.hypot(t.vx,t.vy,t.vz)>343;this.game.audio.play3d(o?"crack":"whiz",n,s,a,{vol:.65,maxDist:10,reverb:.05})}e.brain&&e.brain.onNearMiss(t.shooter)}}terrainMat(t,e){let i=this.world.terrain,n=Math.round((t+i.half)/i.cell),s=Math.round((e+i.half)/i.cell),a=(Nt(s,0,i.n-1)*i.n+Nt(n,0,i.n-1))*4,o=i.splat;return o[a+2]>.5?"rock":this.world.def.biome==="arid"?o[a+3]>.5?"concrete":"sand":o[a]>.5?"grass":"dirt"}impactSound(t){switch(t){case"metal":case"container":return"impactMetal";case"wood":case"hay":return"impactWood";case"concrete":case"brick":case"stone":case"rock":case"plaster":return"impactHard";default:return"impactDirt"}}explode(t,e,i,n){let s=this.game.fx,a=n.radius||7,o=n.damage||120,l=this.world.terrain.normalAt(t,i),c=Math.abs(e-this.world.terrain.heightAt(t,i))<.8;s.explosion(t,e,i,n.scale||1,{ground:c,nx:l[0],ny:l[1],nz:l[2],fire:n.fire,dirt:this.world.def.biome==="arid"?[.6,.52,.38]:[.42,.36,.27]}),this.game.audio.explosion(t,e,i);for(let h of this.game.soldiers){if(h.state==="dead")continue;let u=h.center(es),d=Math.hypot(u.x-t,u.y-e,u.z-i);if(n.directional){let f=u.x-t,p=u.z-i,x=Math.hypot(f,p)||1;if(f/x*n.dx+p/x*n.dz<.35)continue}if(d<a){let f=o*Math.pow(1-d/a,1.1);this.world.collision.los(t,e+.3,i,u.x,u.y,u.z)||(f*=.25),h.takeDamage(f,n.attacker,"body",n.weapon,Yh.set(u.x-t,u.y-e,u.z-i).normalize().clone(),!0),n.attacker&&n.attacker!==h&&h.team!==n.attacker.team&&this.game.onHit(n.attacker,h,f,"body",!0)}d<a*3&&h.state==="alive"&&(h.suppression=Math.min(1,h.suppression+(1-d/(a*3))*.8)),h.brain&&d<80&&h.brain.onSound(t,i,n.attacker,!0)}n.power&&this.world.structures.explode(t,e,i,a*(n.structRadiusMul||.8),n.power,s);for(let h of this.placed)(h.type==="c4"||h.type==="claymore")&&!h.dead&&Math.hypot(h.x-t,h.y-e,h.z-i)<2.5&&(h.dead=!0,setTimeout(()=>this.detonatePlaced(h),80))}spawnProjectile(t,e,i,n,s={}){let a=Kn(t==="launcher"?"frag":t==="rocket"?"rpg":t),o=new Ot(t==="rocket"?new Gn(.05,.4,6).rotateX(-Math.PI/2):a,Sn("weapon"));t==="rocket"&&(o.material=new pe({color:5925450})),o.castShadow=!0,this.game.scene.add(o);let l=Object.assign({type:t,owner:e,team:e.team,x:i.x,y:i.y,z:i.z,vx:n.x,vy:n.y,vz:n.z,t:0,mesh:o,bounces:0,rest:!1},s);return l.fuse={frag:3.2,smoke:1.4,flash:1.6,impact:8,launcher:8,rocket:5,c4:30}[t]??3,this.projectiles.push(l),l}throwGrenade(t,e,i){let n=t.eye(new R),s=t.aimDir(new R),a=n.clone().addScaledVector(s,.5).add(t.right(new R).multiplyScalar(.15)),o=i||s.clone().multiplyScalar(e==="c4"?9:17).add(new R(0,2.2,0)).add(new R(t.vel.x*.5,0,t.vel.z*.5));this.spawnProjectile(e,t,a,o),this.game.audio.play3d("throw",a.x,a.y,a.z,{vol:.5,maxDist:25}),e!=="c4"&&this.game.onGrenadeThrown(t,e)}updateProjectiles(t){let e=this.world.collision,i=this.game.fx;for(let n=this.projectiles.length-1;n>=0;n--){let s=this.projectiles[n];s.t+=t;let a=s.t>=s.fuse;if(!s.rest&&!a){let o=s.type==="rocket"?2.5:s.type==="launcher"?9.81:15;s.vy-=o*t;let l=s.vx*t,c=s.vy*t,h=s.vz*t,u=Math.hypot(l,c,h);if(u>1e-5){let d=l/u,f=c/u,p=h/u,x=e.raycast(s.x,s.y,s.z,d,f,p,u+.05,{skipInside:!0});if(s.type==="rocket"||s.type==="launcher"||s.type==="impact")for(let g of this.game.soldiers){if(g.state==="dead"||g===s.owner||g.team===s.team)continue;let m=g.hitSpheres();for(let v of m){let y=Ch(s.x,s.y,s.z,l,c,h,v[0],v[1],v[2],v[3]+.1);y>=0&&(!x||y*u<x.t)&&(x={t:y*u,x:s.x+l*y,y:s.y+c*y,z:s.z+h*y,nx:-d,ny:-f,nz:-p,soldier:g})}}if(x)if(s.x=x.x+x.nx*.05,s.y=x.y+x.ny*.05,s.z=x.z+x.nz*.05,s.type==="rocket"||s.type==="impact"||s.type==="launcher"&&s.t>.12)a=!0;else if(s.type==="c4"){s.rest=!0,s.stuck=!0,s.vx=s.vy=s.vz=0,this.convertToPlaced(s,x),n=Math.min(n,this.projectiles.length);continue}else{let g=s.vx*x.nx+s.vy*x.ny+s.vz*x.nz;s.vx-=1.6*g*x.nx,s.vy-=1.6*g*x.ny,s.vz-=1.6*g*x.nz,s.vx*=.45,s.vy*=.45,s.vz*=.45,Math.abs(g)>2&&s.bounces++<8&&this.game.audio.play3d("bounce",s.x,s.y,s.z,{vol:.35,maxDist:30}),Math.hypot(s.vx,s.vy,s.vz)<.6&&x.ny>.5&&(s.rest=!0,s.vx=s.vy=s.vz=0)}else s.x+=l,s.y+=c,s.z+=h}s.type==="rocket"&&(i.smoke.emit(s.x,s.y,s.z,q(-.3,.3),q(0,.4),q(-.3,.3),1.6,.25,1.4,[.8,.8,.8,.5],[.7,.7,.7,0],1,-.2,1),i.glow.emit(s.x,s.y,s.z,0,0,0,.06,.5,.2,[1,.7,.3,1],[1,.4,.1,0],0,0))}s.mesh&&(s.mesh.position.set(s.x,s.y,s.z),s.type==="rocket"?s.mesh.lookAt(s.x+s.vx,s.y+s.vy,s.z+s.vz):s.rest||(s.mesh.rotation.x+=t*8)),a&&(this.projectiles.splice(n,1),s.mesh&&this.game.scene.remove(s.mesh),this.detonateProjectile(s))}}detonateProjectile(t){switch(t.type){case"frag":this.explode(t.x,t.y+.15,t.z,{radius:8,damage:160,power:160,attacker:t.owner,weapon:"Frag grenade",scale:.9});break;case"impact":this.explode(t.x,t.y+.1,t.z,{radius:5.5,damage:120,power:110,attacker:t.owner,weapon:"Impact grenade",scale:.7});break;case"launcher":this.explode(t.x,t.y+.1,t.z,{radius:6,damage:140,power:260,attacker:t.owner,weapon:"M320",scale:.85});break;case"rocket":this.explode(t.x,t.y,t.z,{radius:6.5,damage:210,power:900,structRadiusMul:.75,attacker:t.owner,weapon:"RPG-7",scale:1.3,fire:5});break;case"smoke":this.game.fx.addSmokeScreen(t.x,t.y,t.z,18),this.game.audio.play3d("pin",t.x,t.y,t.z,{vol:.5,maxDist:30});break;case"flash":this.flashbang(t);break}}flashbang(t){let e=this.game.fx;e.flashLight(t.x,t.y+.5,t.z,16777215,120,25,.25),e.flashes.emit(t.x,t.y+.3,t.z,0,0,0,.15,2,5,[1,1,1,1],[1,1,1,0],0,0),this.game.audio.play3d("explosion",t.x,t.y,t.z,{vol:.6,maxDist:150,rate:1.6});for(let i of this.game.soldiers){if(i.state!=="alive")continue;let n=i.eye(es),s=Math.hypot(n.x-t.x,n.y-t.y,n.z-t.z);if(s>18||!this.world.collision.los(t.x,t.y+.3,t.z,n.x,n.y,n.z))continue;let a=i.aimDir(Yh),o=Cf.set(t.x-n.x,t.y-n.y,t.z-n.z).normalize(),l=(a.dot(o)+1)/2;i.flashed=Math.min(1,i.flashed+(1-s/18)*(.4+l*.8))}}convertToPlaced(t,e){t.mesh&&this.game.scene.remove(t.mesh);let i=this.projectiles.indexOf(t);i>=0&&this.projectiles.splice(i,1),this.place("c4",t.owner,t.x,t.y,t.z,0)}place(t,e,i,n,s,a){if(t==="beacon"||t==="rally")for(let h of this.placed)h.type===t&&h.owner===e&&!h.dead&&this.removePlaced(h);let o=Kn(t==="sandbags"?"sandbags":t),l=new Ot(o,Sn("weapon"));l.position.set(i,n+(t==="ammobox"?.07:t==="claymore"?.09:.06),s),l.rotation.y=a,(t==="ammobox"||t==="beacon"||t==="rally")&&l.scale.setScalar(2.2),l.castShadow=!0,this.game.scene.add(l);let c={type:t,owner:e,team:e.team,squad:e.squad,x:i,y:n,z:s,yaw:a,mesh:l,t:0,dead:!1,dx:-Math.sin(a),dz:-Math.cos(a),tick:0};return this.placed.push(c),t==="c4"&&(e.c4s=e.c4s||[],e.c4s.push(c)),(t==="rally"||t==="beacon")&&this.game.onSpawnPointPlaced(c),c}removePlaced(t){t.dead=!0,t.mesh&&this.game.scene.remove(t.mesh);let e=this.placed.indexOf(t);if(e>=0&&this.placed.splice(e,1),t.type==="c4"&&t.owner.c4s){let i=t.owner.c4s.indexOf(t);i>=0&&t.owner.c4s.splice(i,1)}}detonatePlaced(t){this.removePlaced(t),t.type==="c4"?this.explode(t.x,t.y+.1,t.z,{radius:7.5,damage:240,power:1500,structRadiusMul:.7,attacker:t.owner,weapon:"C4",scale:1.4,fire:4}):t.type==="claymore"&&this.explode(t.x,t.y+.5,t.z,{radius:7,damage:180,power:60,attacker:t.owner,weapon:"Claymore",scale:.7,directional:!0,dx:t.dx,dz:t.dz})}detonateC4(t){if(!t.c4s||!t.c4s.length)return!1;let e=t.c4s.slice();return this.game.audio.play3d("beep",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.6,maxDist:20}),e.forEach((i,n)=>setTimeout(()=>{i.dead||this.detonatePlaced(i)},150+n*90)),!0}updatePlaced(t){let e=this.game.time;for(let i=this.placed.length-1;i>=0;i--){let n=this.placed[i];if(n.t+=t,!n.dead)if(n.type==="claymore"&&n.t>1.5)for(let s of this.game.soldiers){if(s.state!=="alive"||s.team===n.team)continue;let a=s.pos.x-n.x,o=s.pos.z-n.z,l=s.pos.y-n.y,c=Math.hypot(a,o);if(!(c>3.6||Math.abs(l)>2||s.stance==="prone"&&Math.hypot(s.vel.x,s.vel.z)<.8)&&!(a/c*n.dx+o/c*n.dz<.3)){this.detonatePlaced(n);break}}else if(n.type==="ammobox"){if(n.tick+=t,n.tick>1.5){n.tick=0;for(let s of this.game.soldiers)s.state!=="alive"||s.team!==n.team||Math.hypot(s.pos.x-n.x,s.pos.z-n.z)>4||Math.abs(s.pos.y-n.y)>2.5||this.resupply(s,1)&&n.owner!==s&&n.owner.state!=="dead"&&this.game.addScore(n.owner,10,"RESUPPLY")}}else n.type==="rally"&&(n.blocked=this.game.soldiers.some(s=>s.state==="alive"&&s.team!==n.team&&Math.hypot(s.pos.x-n.x,s.pos.z-n.z)<18),n.t>300&&this.removePlaced(n))}}resupply(t,e){let i=!1;for(let n=0;n<2;n++){let s=t.slots[n];s&&s.reserve<s.stats.mag*s.stats.mags&&(s.reserve=Math.min(s.stats.mag*s.stats.mags,s.reserve+Math.ceil(s.stats.mag*.5*e)),i=!0)}if(t.resupplyAcc=(t.resupplyAcc||0)+e,t.resupplyAcc>=4){t.resupplyAcc=0;for(let n=2;n<5;n++){let s=t.slots[n];if(!s||s.def.count===1/0)continue;let a=n===4?t.loadout.cls==="assault"?3:2:s.def.count;s.count<a&&!["beacon","rally","ammobox"].includes(s.id)&&(s.count++,i=!0)}t.bandages<4&&(t.bandages++,i=!0)}return i}useGadget(t,e,i){let n=t.weapon;if(!n||n.kind!=="gadget"||t.state!=="alive"||t.switchT>0||t.actionT>0)return;let s=n.def.kind;if(s==="throw")e&&n.count>0&&(n.count--,t.startAction("throw",.42,{type:n.id}),this.game.audio.play3d("pin",t.pos.x,t.pos.y+1.5,t.pos.z,{vol:.4,maxDist:15}));else if(s==="launcher"||s==="rpg"){if(e&&n.count>0&&n.loaded){n.count--,n.loaded=!1;let a=t.eye(new R),o=t.aimDir(new R),l=s==="rpg"?t.adsT>.5?.6:3:t.adsT>.5?.5:2.5;o.x+=(Math.random()-.5)*l*Or,o.y+=(Math.random()-.5)*l*Or,o.normalize();let c=o.clone().multiplyScalar(s==="rpg"?115:72);this.spawnProjectile(s==="rpg"?"rocket":"launcher",t,a.clone().addScaledVector(o,.8),c),this.game.audio.play3d(s==="rpg"?"rocket":"shotgun",a.x,a.y,a.z,{vol:.9,maxDist:250}),t.pitch+=(s==="rpg"?3:2)*Or,this.game.onGadgetFired(t,s),n.count>0&&t.startAction("reloadGadget",s==="rpg"?3.4:2.2,{slot:t.active})}}else if(s==="medkit")e&&t.medkitCd<=0&&(t.hp<100||t.bleed>0)&&t.startAction("medkitSelf",1.1);else if(s==="c4")i?this.detonateC4(t):e&&n.count>0&&(n.count--,t.startAction("throwC4",.4));else if(s==="place"){if(e&&(n.count>0||n.id==="beacon"||n.id==="rally")){let a=this.placementSpot(t);a?(n.id!=="beacon"&&n.id!=="rally"&&n.count--,t.startAction("place",.6,{gid:n.id,spot:a})):t.isPlayer&&this.game.hud&&this.game.hud.toast("Cannot place here")}}else s==="binoculars"&&e&&this.spot(t,t.adsT>.5?12:6,t.adsT>.5?2.2:5)}placementSpot(t){let e=this.world.collision,i=t.forward(new R),n=t.pos.x+i.x*1.4,s=t.pos.z+i.z*1.4,a=e.raycast(n,t.pos.y+1.4,s,0,-1,0,3,{});return!a||a.ny<.6||Math.abs(a.y-t.pos.y)>1.2||!e.los(t.pos.x,t.pos.y+1,t.pos.z,n,a.y+.5,s)?null:{x:n,y:a.y,z:s,yaw:t.yaw}}finishAction(t,e){switch(e.name){case"throw":if(this.throwGrenade(t,e.data.type,t.throwVel||null),t.throwVel=null,t.weapon.kind==="gadget"&&t.weapon.count<=0&&t.switchTo(t.quickReturn??0),t.quickReturn!==void 0&&t.quickReturn!==null){let i=t.quickReturn;t.quickReturn=null,t.switchTo(i)}break;case"melee":this.meleeHit(t);break;case"throwC4":this.throwGrenade(t,"c4",t.throwVel||null),t.throwVel=null;break;case"bandage":t.bandages--,t.bleed=0,t.healT+=15;break;case"medkitSelf":t.bleed=0,t.healT+=50,t.medkitCd=5;break;case"medkitOther":e.data.target.state==="alive"&&(e.data.target.bleed=0,e.data.target.healT+=60,this.game.addScore(t,20,"HEAL"),t.stats.heals++),t.medkitCd=2.5;break;case"reloadGadget":{let i=t.slots[e.data.slot];i&&(i.loaded=!0);break}case"place":{let{gid:i,spot:n}=e.data;i==="sandbags"?this.world.structures.addSandbag(n.x,n.y,n.z,t.yaw):this.place(i,t,n.x,n.y,n.z,t.yaw),this.game.audio.play3d("switch",n.x,n.y,n.z,{vol:.6,maxDist:20});let s=t.slots.find(a=>a&&a.id===i);s&&s.count<=0&&i!=="beacon"&&i!=="rally"&&t.active>=2&&t.switchTo(0);break}}}melee(t){return t.state!=="alive"||t.actionT>0||t.switchT>0||t.vault||t.swimming?!1:(t.reloadT=0,t.startAction("melee",.34),this.game.audio.play3d("throw",t.pos.x,t.pos.y+1.4,t.pos.z,{vol:.5,maxDist:20,rate:1.4}),!0)}meleeHit(t){let e=t.eye(new R),i=t.forward(new R),n=null,s=2.4;for(let u of this.game.soldiers){if(u===t||u.team===t.team||u.state==="dead")continue;let d=u.center(es),f=d.x-e.x,p=d.z-e.z,x=Math.hypot(f,p);x>s||Math.abs(d.y-e.y)>1.8||f/x*i.x+p/x*i.z<.55||this.world.collision.los(e.x,e.y-.3,e.z,d.x,d.y,d.z)&&(s=x,n=u)}if(!n){this.game.audio.play3d("impactDirt",e.x,e.y,e.z,{vol:.15,maxDist:10});return}let a=n.forward(Yh),o=a.x*i.x+a.z*i.z>.4,l=n.state==="downed"||o?250:80,c=n.state==="alive",h=n.center(es);n.takeDamage(l,t,"body","Knife",i.clone(),!1),this.game.fx.impact(h.x,h.y+.2,h.z,-i.x,0,-i.z,"flesh"),this.game.audio.play3d("impactFlesh",h.x,h.y,h.z,{vol:.8,maxDist:25}),this.game.onHit(t,n,l,"body",c),n.brain&&n.brain.onDamaged(t,i)}spotRange(t){if(!t.isPlayer)return 100;let e=t.weapon;if(e&&e.id==="binoculars")return t.adsT>.5?400:150;let i=t.gun&&t.adsT>.5?t.gun.stats.zoom:1;return i>=6?320:i>=3.5?240:i>=1.9?170:120}spot(t,e=6,i=5){let n=new R,s=new R;t.isPlayer&&this.game.playerCtl?this.game.playerCtl.aimRay(n,s):(t.eye(n),t.aimDir(s));let a=this.spotRange(t),o=0,l=0;for(let c of this.game.soldiers){if(c.team===t.team||c.state==="dead")continue;let h=c.center(es),u=Cf.set(h.x-n.x,h.y-n.y,h.z-n.z),d=u.length();if(!(d>500||(u.divideScalar(d),Math.acos(Nt(u.dot(s),-1,1))/Or>Math.max(i,60/Math.max(d,1))))&&this.world.collision.los(n.x,n.y,n.z,h.x,h.y,h.z)){if(d>a){l++;continue}c.spotUntil=this.game.time+e,o++}}return o?t.isPlayer&&(this.game.audio.play2d("beep",{vol:.3}),this.game.addScore(t,0,o>1?`SPOTTED ${o}`:"SPOTTED")):l&&t.isPlayer&&this.game.hud.toast(`Too far to spot \xB7 ${a}m max${t.adsT>.5?"":" (aim or use binoculars for more)"}`,1.8),o}update(t){this.updateBullets(t),this.updateProjectiles(t),this.updatePlaced(t)}clear(){for(let t of this.projectiles)t.mesh&&this.game.scene.remove(t.mesh);for(let t of this.placed)t.mesh&&this.game.scene.remove(t.mesh);this.bullets=[],this.projectiles=[],this.placed=[]}static solveBallistic(t,e,i,n){let s=e.x-t.x,a=e.z-t.z,o=e.y-t.y,l=Math.hypot(s,a),c=i*i,h=c*c-n*(n*l*l+2*o*c);if(h<0)return null;let u=Math.atan2(c-Math.sqrt(h),n*l),d=Math.cos(u)*i,f=Math.sin(u)*i;return new R(s/l*d,f,a/l*d)}};var H1=[["ALPHA","BRAVO","CHARLIE","DELTA"],["ECHO","FOXTROT","GOLF","HOTEL"]],Xa=class{constructor(t){this.game=t,this.list=[[],[]],this.evalT=[0,2],this.enemyHeat=[null,null]}build(t,e=4){for(let i=0;i<2;i++){this.list[i]=[];let n=t[i],s=Math.ceil(n.length/e);for(let a=0;a<s;a++){let o={id:a,team:i,name:H1[i][a]||`S${a}`,members:[],leader:null,order:null,orderT:0};this.list[i].push(o)}n.forEach((a,o)=>{let l=this.list[i][Math.floor(o/e)];l.members.push(a),a.squad=l});for(let a of this.list[i])this.pickLeader(a)}}pickLeader(t){let e=t.members.find(i=>i.isPlayer&&i.loadout&&i.loadout.cls==="leader");t.leader=e||t.members.find(i=>i.loadout&&i.loadout.cls==="leader")||t.members.find(i=>!i.isPlayer)||t.members[0]}playerIsLeader(t){return t.leader&&t.leader.isPlayer}objectiveFor(t){let e=t.squad,i=e&&e.order;if(!i){let o=this.game.world.def.hq[1-t.team];return{x:o.x*.3,z:o.z*.3,r:30,hold:!1}}if(i.type==="follow"){let o=e.leader;if(o&&o.state==="alive"){let c=e.members.indexOf(t)*1.9+.7;return{x:o.pos.x+Math.cos(c)*5,z:o.pos.z+Math.sin(c)*5,r:6,hold:!1}}}let s=e.members.indexOf(t)*1.7+e.id,a=i.flag?i.flag.r*.35:4;return{x:i.x+Math.cos(s)*a,z:i.z+Math.sin(s)*a,r:i.flag?i.flag.r:15,hold:i.type!=="move",cx:i.x,cz:i.z,type:i.type}}orderType(t){return t.squad&&t.squad.order?t.squad.order.type:"attack"}threatPoint(t,e){let i=this.enemyHeat[t];if(i&&this.game.time-i.t<20)return i;let n=this.game.mode,s=null,a=1e9;for(let l of n.flags){if(l.owner!==1-t)continue;let c=Math.hypot(l.x-e.x,l.z-e.z);c<a&&c>5&&(a=c,s=l)}if(s)return{x:s.x,y:s.y,z:s.z};let o=this.game.world.def.hq[1-t];return{x:o.x,y:this.game.world.terrain.heightAt(o.x,o.z),z:o.z}}setOrder(t,e,i,n,s){t.order={type:e,flag:i||null,x:i?i.x:n,z:i?i.z:s,t:this.game.time};for(let a of t.members)a.brain&&(a.brain.holdSpot=null,a.brain.path=null)}update(t){let e=this.game;for(let i=0;i<2;i++){let n=0,s=0,a=0;for(let o of e.teams[i])if(!(!o.brain||o.state!=="alive"))for(let[,l]of o.brain.known)e.time-l.t<5&&(n+=l.x,s+=l.z,a++);a>0&&(this.enemyHeat[i]={x:n/a,y:e.world.terrain.heightAt(n/a,s/a),z:s/a,t:e.time}),this.evalT[i]-=t,!(this.evalT[i]>0)&&(this.evalT[i]=5,this.assign(i))}}assign(t){let e=this.game,i=e.mode,n=this.list[t].filter(p=>!this.playerIsLeader(p));if(i.type==="tdm"){let p=this.enemyHeat[t],x=e.world.def.flags;for(let g of n){if(g.order&&e.time-g.order.t<25&&Math.random()<.7)continue;let m;if(p&&Math.random()<.6){let v=null,y=1e9;for(let M of x){let S=Math.hypot(M.x-p.x,M.z-p.z)+q(0,60);S<y&&(y=S,v=M)}m=v}else m=x[Math.floor(Math.random()*x.length)];this.setOrder(g,"attack",null,m.x+q(-15,15),m.z+q(-15,15)),g.order.flag={x:g.order.x,z:g.order.z,r:22}}return}let s=i.flags,a=new Map;for(let p of this.list[t])p.order&&p.order.flag&&this.playerIsLeader(p)&&a.set(p.order.flag,(a.get(p.order.flag)||0)+1);let o=[0,0];for(let p of s)p.owner>=0&&o[p.owner]++;let l=o[t]<o[1-t]||i.tickets[t]<i.tickets[1-t]-30,c=p=>p.counts[1-t]>0||p.capTeam===1-t||Math.abs(p.progress)<.85,h=(p,x)=>{let g=this.centroid(p),m=null,v=-1e9;for(let y of s){let M;if(y.owner===t){if(c(y))M=1.45;else if(x)M=.1;else continue;if(i.type==="frontline"){let T=s.some(E=>E.owner!==t&&Math.abs(E.index-y.index)===1);M+=T?.35:-.4}}else if(i.capturable(y,t))M=(y.owner===-1?1.2:1)+(l?.25:0);else continue;let S=g?Math.hypot(g.x-y.x,g.z-y.z):300;M-=S/1400;let w=a.get(y)||0;M-=w*(y.owner===t&&!c(y)?1.2:.45),p.order&&p.order.flag===y&&(M+=.25),M+=q(0,.12),M>v&&(v=M,m=y)}return m},u=0,d=[];for(let p of n){let x=h(p,!0);x&&(a.set(x,(a.get(x)||0)+1),d.push([p,x]),x.owner!==t&&u++)}let f=Math.min(n.length,l?3:2);for(let p of d){if(u>=f)break;let[x,g]=p;if(g.owner===t&&!c(g)){let m=h(x,!1);m&&m.owner!==t&&(a.set(g,a.get(g)-1),a.set(m,(a.get(m)||0)+1),p[1]=m,u++)}}for(let[p,x]of d)!p.order||p.order.flag!==x?this.setOrder(p,x.owner===t?"defend":"attack",x):p.order.type=x.owner===t?"defend":"attack",p.order.ownedByUs=x.owner===t}centroid(t){let e=0,i=0,n=0;for(let s of t.members)s.state==="alive"&&(e+=s.pos.x,i+=s.pos.z,n++);return n?{x:e/n,z:i/n}:null}};var Ya={stand:{h:1.8,eye:1.62,speed:4.3},crouch:{h:1.25,eye:1.12,speed:2.5},prone:{h:.62,eye:.42,speed:1}},V1=6.7,G1=20,W1=1,$a=class{constructor(t,e,i,n=!1){this.game=t,this.id=W1++,this.team=e,this.name=i,this.isPlayer=n,this.squad=null,this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.lean=0,this.leanTarget=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.move={grounded:!0,hitWall:!1},this.input={mx:0,mz:0,sprint:!1,jump:!1,crouch:!1,prone:!1,fire:!1,ads:!1,lean:0},this.state="dead",this.hp=100,this.bleed=0,this.downedHp=100,this.downedTime=0,this.lastDamage=-99,this.lastAttacker=null,this.damagers=new Map,this.stats={kills:0,deaths:0,assists:0,revives:0,score:0,caps:0,heals:0},this.slots=[],this.active=0,this.prevActive=0,this.fireCd=0,this.reloadT=0,this.switchT=0,this.actionT=0,this.action=null,this.adsT=0,this.bloom=0,this.triggerHeld=!1,this.burst=0,this.boltT=0,this.recoilPitch=0,this.recoilYaw=0,this.spotUntil=0,this.lastShotTime=-99,this.lastLoudShot=-99,this.walkPhase=0,this.vault=null,this.swimming=!1,this.inWater=!1,this.fallVel=0,this.spawnProtect=0,this.reviveTarget=null,this.reviveProgress=0,this.suppression=0,this.flashed=0,this.flashlightOn=!1,this.rig=null,this.deathPose=0,this.deathDir=1,this.deadTime=0,this.stepAcc=0,this.healT=0,this.bandages=4,this.medkitCd=0,this.swayP=0,this.swayY=0,this.holdingBreath=!1}get alive(){return this.state==="alive"}get downed(){return this.state==="downed"}get cls(){return this.loadout?this.loadout.cls:"assault"}get isMedic(){return this.cls==="medic"}ensureRig(){let t=this.id*7;this.rig&&this.rigCls===this.cls||(this.rig&&this.game.scene.remove(this.rig.root),this.rig=ba(this.team,this.cls,t),this.rigCls=this.cls,this.rig.root.visible=!this.isPlayer,this.game.scene.add(this.rig.root),(this.game.player&&this.team!==this.game.player.team||!this.game.player&&this.team!==(this.game.config.team??0))&&(this.rig.outlineOn=this.game.settings.get("enemyOutline")!==!1,df(this.rig,this.rig.outlineOn)))}setLoadout(t){this.loadout=t;let e=(s,a)=>{let o=$d(s,a);return{kind:"gun",id:s,att:a,stats:o,mag:o.mag,reserve:o.mag*o.mags,mode:0,model:Rr(s,a)}},i=di[t.cls],n=s=>({kind:"gadget",id:s,def:rn[s],count:rn[s].count,loaded:!0,model:Kn(s)});this.slots=[e(t.primary,t.att),e(t.secondary,t.satt),n(i.gadgets[0]),n(i.gadgets[1]),Object.assign(n(t.throwable),{count:i.throwables})],this.bandages=4,this.heavy=t.armor==="heavy",this.ensureRig()}get weapon(){return this.slots[this.active]}get gun(){let t=this.slots[this.active];return t&&t.kind==="gun"?t:null}spawn(t,e,i,n){this.pos.set(t,e,i),this.vel.set(0,0,0),this.yaw=n,this.pitch=0,this.lean=0,this.state="alive",this.hp=100,this.bleed=0,this.stance="stand",this.eyeH=1.62,this.bodyH=1.8,this.active=0,this.switchT=.4,this.reloadT=0,this.fireCd=0,this.action=null,this.actionT=0,this.adsT=0,this.bloom=0,this.recoilPitch=0,this.recoilYaw=0,this.vault=null,this.damagers.clear(),this.lastAttacker=null,this.lastDamage=-99,this.spawnProtect=2.5,this.suppression=0,this.flashed=0,this.deathPose=0,this.reviveProgress=0,this.swimming=!1,this.move.grounded=!0,this.ensureRig(),this.rig.root.visible=!this.isPlayer,this.syncWeaponModel(),this.spawnTime=this.game.time}syncWeaponModel(){let t=this.weapon;if(!this.rig||!t)return;let e=t.kind==="gun"?t.model.pistol?"pistol":"rifle":t.id==="rpg"||t.id==="m320"?"rifle":"gadget";_a(this.rig,t.kind==="gun"?t.model.geo:t.model,e)}eye(t=new R){let e=this.right();return t.set(this.pos.x+e.x*this.lean*.58,this.pos.y+this.eyeH-Math.abs(this.lean)*.1,this.pos.z+e.z*this.lean*.58),t}forward(t=new R){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(t=new R){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}aimDir(t=new R){let e=this.pitch+this.swayP,i=this.yaw+this.swayY,n=Math.cos(e);return t.set(-Math.sin(i)*n,Math.sin(e),-Math.cos(i)*n)}center(t=new R){return t.set(this.pos.x,this.pos.y+this.bodyH*.6,this.pos.z)}headPos(t=new R){let e=this.hitSpheres();return t.set(e[0][0],e[0][1],e[0][2])}hitSpheres(){if(this.rigHS&&this.state!=="dead"&&this.game.frame-this.rigHSFrame<6){let o=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),l=this.pos.x-this.rigHSPos.x,c=this.pos.y-this.rigHSPos.y,h=this.pos.z-this.rigHSPos.z,u=this.rigHS;for(let d=0;d<7;d++)o[d][0]=u[d*4]+l,o[d][1]=u[d*4+1]+c,o[d][2]=u[d*4+2]+h,o[d][3]=u[d*4+3];return o}let t=this.pos,e=this.forward($h),i=this.right(Rf),n=this.lean*.5,s=this._hs||(this._hs=[[0,0,0,0,"head"],[0,0,0,0,"body"],[0,0,0,0,"body"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"],[0,0,0,0,"leg"]]),a=(o,l,c,h,u)=>{s[o][0]=t.x+e.x*l+i.x*h,s[o][1]=t.y+c,s[o][2]=t.z+e.z*l+i.z*h,s[o][3]=u};if(this.state==="downed"||this.state==="dead"||this.stance==="prone"){let o=this.state==="alive"?1:-1;a(0,.78*o,.28,0,.14),a(1,.42*o,.24,0,.22),a(2,.05*o,.22,0,.21),a(3,-.4*o,.15,-.12,.13),a(4,-.4*o,.15,.12,.13),a(5,-.8*o,.13,-.12,.12),a(6,-.8*o,.13,.12,.12)}else this.stance==="crouch"?(a(0,.04,1.34,n*1.2,.15),a(1,.02,1,n,.23),a(2,0,.77,n*.5,.2),a(3,.2,.5,.1,.12),a(4,-.05,.42,-.1,.12),a(5,.38,.22,.1,.11),a(6,-.3,.12,-.1,.11)):(a(0,.02,1.69,n*1.2,.15),a(1,0,1.36,n,.23),a(2,0,1.1,n*.5,.2),a(3,0,.72,-.1,.14),a(4,0,.72,.1,.14),a(5,0,.3,-.1,.13),a(6,0,.3,.1,.13));return s}setStance(t){if(t===this.stance)return!0;let e=Ya[t].h;return e>this.bodyH+.01&&this.game.world.collision.overlapsAny(this.pos.x,this.pos.y+.05,this.pos.z,.28,e-.05)?!1:(this.stance=t,this.bodyH=e,!0)}speedTarget(){if(this.swimming)return 2.2;let t=Ya[this.stance].speed,e=this.gun,i=e?e.stats.moveMul:1.02;return this.sprinting?t=V1:this.adsT>.5&&(t=Math.min(t,this.stance==="stand"?2.7:t*.8)),this.heavy&&(t*=.94),this.bleed>0&&this.hp<30&&(t*=.85),t*i}updateMovement(t){let e=this.game.world.collision,i=this.input;if(this.vault){this.updateVault(t);return}i.prone&&this.stance!=="prone"?this.setStance("prone")&&(i.prone=!1):i.crouch&&this.stance==="stand"?this.setStance("crouch"):!i.crouch&&!i.proneHold&&this.stance==="crouch"&&!(this.slideT>0)&&this.setStance("stand");let n=Math.abs(i.mx)+Math.abs(i.mz)>.05;if(this.sprinting=i.sprint&&n&&i.mz<-.3&&this.stance!=="prone"&&!this.swimming&&this.adsT<.3&&this.actionT<=0,this.sprinting&&this.stance==="crouch"&&this.setStance("stand"),this.sprinting&&this.reloadT>0&&!this.isPlayer&&(this.sprinting=!1),i.slide&&(i.slide=!1,this.wasSprinting&&this.move.grounded&&!this.swimming)){let S=Math.hypot(this.vel.x,this.vel.z)||1,w=Math.max(S,8.4)/S;this.vel.x*=w,this.vel.z*=w,this.slideT=.85,this.stance="crouch",this.bodyH=Ya.crouch.h,this.game.onVault(this)}this.wasSprinting=this.sprinting;let s=this.slideT>0;s&&(this.slideT-=t,this.sprinting=!1,(Math.hypot(this.vel.x,this.vel.z)<2.6||!this.move.grounded)&&(this.slideT=0));let a=this.forward($h),o=this.right(Rf),l=a.x*-i.mz+o.x*i.mx,c=a.z*-i.mz+o.z*i.mx,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let u=this.speedTarget();i.mz>.3&&!this.swimming&&(u*=.8);let d=l*u,f=c*u,p=this.move.grounded||this.swimming?n?38:26:5;if(s){let S=Math.max(0,1-1.4*t);this.vel.x=this.vel.x*S+d*.6*t,this.vel.z=this.vel.z*S+f*.6*t}else this.vel.x+=(d-this.vel.x)*Math.min(1,p*t/4),this.vel.z+=(f-this.vel.z)*Math.min(1,p*t/4);let x=this.game.world.terrain.waterLevel,g=this.game.world.terrain.heightAt(this.pos.x,this.pos.z);this.inWater=x!==null&&this.pos.y<x-.2;let m=x!==null&&g<x-1.25&&this.pos.y<x-1.1;if(m&&!this.swimming&&(this.swimming=!0,this.setStance("stand")),this.swimming&&(!m||g>x-1.2)&&(this.swimming=!1),this.swimming){let S=x-1.35;this.vel.y+=(S-this.pos.y)*6*t-this.vel.y*3*t,i.jump&&this.pos.y>S-.3&&this.tryVault(!0)}else this.vel.y-=G1*t,i.jump&&(i.jump=!1,!this.tryVault(!1)&&this.move.grounded&&(this.stance!=="stand"?this.setStance("stand"):(this.vel.y=5.4,this.move.grounded=!1)));let v=this.vel.y,y=this.move.grounded;e.move(this.pos,this.vel,t,.3,this.bodyH,this.move.grounded?.48:.1,this.move),this.move.grounded&&!y&&v<-12.5&&!this.swimming&&this.takeDamage((-v-12.5)*9,null,"fall","Fall",null,!1);let M=Math.hypot(this.vel.x,this.vel.z);if(this.move.grounded&&M>.5){this.walkPhase+=M*t*(this.sprinting?1.7:2.1),this.stepAcc+=M*t;let S=this.sprinting?1.9:1.5;this.stepAcc>S&&(this.stepAcc=0,this.game.onFootstep(this,this.sprinting?1:this.stance==="stand"?.6:.3))}}tryVault(t){if(this.stance==="prone"||this.state!=="alive")return!1;let e=this.game.world.collision,i=this.forward($h),n=this.pos.y,s=!1;for(let a of[.6,1,1.4]){let o=e.raycast(this.pos.x,n+a,this.pos.z,i.x,0,i.z,.9,{terrain:!0});if(o&&o.t<.85){s=!0;break}}if(!s)return!1;for(let a of[.55,.8,1.05]){let o=this.pos.x+i.x*a,l=this.pos.z+i.z*a,c=e.raycast(o,n+2.5,l,0,-1,0,2.5,{});if(!c)continue;let h=c.y-n;if(h<.45||h>(t?2.6:2.25))continue;if(e.overlapsAny(o,c.y+.05,l,.28,1.2)){let p=this.pos.x+i.x*1.6,x=this.pos.z+i.z*1.6;if(h<1.3&&!e.overlapsAny(p,n+.05,x,.28,1.2))return this.startVault(p,e.groundAt(p,x,n+1.5),x,.55,c.y),!0;continue}let u=this.pos.x+i.x*1.7,d=this.pos.z+i.z*1.7,f=e.raycast(u,n+2.5,d,0,-1,0,3.5,{});return h<1.3&&f&&f.y<c.y-.4&&!e.overlapsAny(u,f.y+.05,d,.28,1.6)?this.startVault(u,f.y,d,.5,c.y):this.startVault(o,c.y,l,h>1.3?.75:.42,c.y),!0}return!1}startVault(t,e,i,n,s){this.vault={sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,x:t,y:e,z:i,t:0,dur:n,apex:Math.max(s,e)+.25},this.vel.set(0,0,0),this.swimming=!1,this.stance!=="stand"&&this.setStance("stand"),this.game.onVault(this)}updateVault(t){let e=this.vault;e.t+=t/e.dur;let i=Math.min(1,e.t),n=Math.min(1,i/.55);this.pos.x=jt(e.sx,e.x,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.z=jt(e.sz,e.z,i<.4?i*.3:.12+(i-.4)/.6*.88),this.pos.y=i<.55?jt(e.sy,e.apex,Math.sin(n*Math.PI/2)):jt(e.apex,e.y,(i-.55)/.45),i>=1&&(this.pos.set(e.x,e.y,e.z),this.vault=null,this.move.grounded=!0)}spread(){let t=this.gun;if(!t)return 2;let e=t.stats,i=Math.hypot(this.vel.x,this.vel.z),n=Math.min(1.5,i/4.3),s=e.spreadHip*e.hipMul*(1+n*.9),a=e.spreadAds*.55*(1+n*.35);this.burst<=1&&i<.5&&(a*=.35);let o=this.adsT*this.adsT*(3-2*this.adsT),l=jt(s,a,o);return this.stance==="crouch"?l*=.8:this.stance==="prone"&&(l*=.6),this.move.grounded||(l*=2.5),l+=this.bloom*jt(1,.18,o),Math.abs(this.lean)>.5&&this.adsT>.5&&(l*=.85),e.type==="sniper"&&this.adsT>.95&&(l=0),l}recoilFactor(){let t=1;this.stance==="crouch"&&(t*=.82),this.stance==="prone"&&(t*=.65);let e=this.gun;return e&&e.stats.bipod&&(this.stance==="prone"||this.stance==="crouch")&&(t*=.45),this.adsT<.5&&(t*=1.15),t}canFire(){return this.state==="alive"&&this.switchT<=0&&this.reloadT<=0&&this.actionT<=0&&!this.sprinting&&!this.vault&&!this.swimming&&this.boltT<=0}updateWeapon(t,e){if(this.fireCd-=t,this.boltT-=t,this.switchT>0&&(this.switchT-=t),this.medkitCd>0&&(this.medkitCd-=t),this.actionT>0&&(this.actionT-=t,this.actionT<=0&&this.finishAction()),this.reloadT>0){this.reloadT-=t;let y=this.gun;if(y&&y.stats.shellReload&&this.reloadT<=0)y.reserve>0&&y.mag<y.stats.mag&&(y.mag++,y.reserve--,this.game.onReloadSound(this,"magIn")),y.mag<y.stats.mag&&y.reserve>0&&!this.input.fire&&(this.reloadT=y.stats.reload);else if(y&&this.reloadT<=0){let M=y.stats.mag-y.mag,S=Math.min(M,y.reserve);y.mag+=S,y.reserve-=S,this.isPlayer||this.game.onReloadSound(this,"magIn")}}this.bloom=Math.max(0,this.bloom-t*6);let i=this.gun,n=this.input.ads&&this.state==="alive"&&!this.sprinting&&this.switchT<=0&&!this.swimming&&!this.vault&&(i||this.weapon&&this.weapon.id==="binoculars"),s=i?1/(i.stats.adsTime*i.stats.adsMul):6;this.adsT=Nt(this.adsT+(n?s:-s*1.4)*t,0,1);let a=Math.min(1,t*7),o=this.recoilPitch*a,l=this.recoilYaw*a;if(this.recoilPitch-=o,this.recoilYaw-=l,!this.triggerHeld||this.fireCd<-.1){let y=this.adsT>.5;this.pitch-=o*(y?.7:.55),this.yaw-=l*(y?.6:.4)}if(!i)return this.triggerHeld=this.input.fire,!1;let c=i.stats,h=c.modes[i.mode]||"auto",u=this.input.fire&&!this.triggerHeld;if(this.triggerHeld=this.input.fire,this.input.fire&&i.stats.shellReload&&this.reloadT>0&&i.mag>0&&(this.reloadT=0),!this.input.fire)return this.burst=0,!1;if(!this.canFire()||h!=="auto"&&!u&&!(this.autoRepeat&&h==="semi")||this.fireCd>0)return!1;if(i.mag<=0)return u&&this.game.onDryFire(this),i.reserve>0&&this.reload(),!1;i.mag--,this.fireCd=c.interval,(c.bolt||c.pump)&&(this.boltT=c.interval*.9),this.burst++,this.lastShotTime=e,c.suppressed||(this.lastLoudShot=e);let d=c.pellets||1;for(let y=0;y<d;y++)this.game.combat.fireBullet(this,i,y);let f=this.recoilFactor(),p=this.burst,x=c.rpm%7+c.mag*.13,g=this.adsT>.5,m=g?c.recoilV*c.recoilVMul*f*(p>1?1-Math.min(.25,p*.015):1.15)*(.92+Math.random()*.16):c.recoilV*c.recoilVMul*f*(p>1?1:1.25),v=g?(Math.sin(p*.55+x)*.75+(Math.random()-.5)*.5)*c.recoilH*c.recoilHMul*f:(Math.random()-.5)*2*c.recoilH*c.recoilHMul*f;return this.pitch+=m*Math.PI/180,this.yaw-=v*Math.PI/180,this.recoilPitch+=m*Math.PI/180,this.recoilYaw-=v*Math.PI/180,this.bloom=Math.min(c.type==="lmg"?3:2.2,this.bloom+c.recoilV*.6),this.pitch=Nt(this.pitch,-1.5,1.5),this.game.onShot(this,i),i.mag===0&&i.reserve>0&&!this.isPlayer&&this.reload(),!0}reload(){let t=this.gun;return!t||this.reloadT>0||t.mag>=t.stats.mag||t.reserve<=0||this.state!=="alive"||this.actionT>0?!1:(this.reloadEmpty=t.mag===0,this.reloadT=t.stats.shellReload?t.stats.reload+.3:t.mag===0?t.stats.reloadEmpty:t.stats.reload,this.reloadTotal=this.reloadT,this.reloadStart=(this.reloadStart||0)+1,(!this.isPlayer||t.stats.shellReload)&&this.game.onReloadSound(this,"magOut"),!0)}switchTo(t){if(t===this.active||!this.slots[t]||this.state!=="alive")return;let e=this.slots[t];e.kind==="gadget"&&e.count<=0&&e.def.kind!=="medkit"&&e.def.kind!=="binoculars"&&!(e.def.kind==="c4"&&this.c4s&&this.c4s.length)||(this.prevActive=this.active,this.active=t,this.switchT=.45,this.reloadT=0,this.action=null,this.actionT=0,this.adsT=Math.min(this.adsT,.2),this.syncWeaponModel(),this.game.onSwitch(this))}cycleMode(){let t=this.gun;!t||t.stats.modes.length<2||(t.mode=(t.mode+1)%t.stats.modes.length)}startAction(t,e,i){return this.actionT>0||this.state!=="alive"?!1:(this.action={name:t,data:i},this.actionT=e,this.actionDur=e,this.reloadT=0,!0)}finishAction(){let t=this.action;this.action=null,!(!t||this.state!=="alive")&&this.game.combat.finishAction(this,t)}bandage(){return this.bandages<=0||this.bleed<=0&&this.hp>=100?!1:this.startAction("bandage",1.8)?(this.game.onBandage(this),!0):!1}takeDamage(t,e,i,n,s,a){if(this.state==="dead"||this.spawnProtect>0&&e&&e!==this||e&&e!==this&&e.team===this.team)return;let o=this.game.time;if(this.heavy&&i!=="head"&&(t*=.86),this.lastDamage=o,e&&e!==this&&(this.lastAttacker=e,this.damagers.set(e,(this.damagers.get(e)||0)+t),this.lastDamageDir=s?s.clone():null),this.state==="downed"){this.downedHp-=t*1.5,this.downedHp<=0&&this.die(e,n,i==="head",!0);return}if(this.hp-=t,t>=12&&i!=="fall"&&(this.bleed=Math.min(3.5,this.bleed+t*.012)),this.game.onDamaged(this,e,t,i,s),this.hp<=0){let l=-this.hp;l>70||i==="head"&&t>90||a&&l>40||this.swimming?this.die(e,n,i==="head",!1):this.goDown(e,n,i==="head")}}goDown(t,e,i){this.state="downed",this.hp=0,this.downedHp=100,this.downedTime=0,this.setStance("prone"),this.stance="prone",this.bodyH=.6,this.vel.x=this.vel.z=0,this.adsT=0,this.reloadT=0,this.action=null,this.actionT=0,this.vault=null,this.reviveProgress=0,this.game.onDowned(this,t,e,i)}die(t,e,i,n){if(this.state==="dead")return;let s=this.state==="downed";this.state="dead",this.deadTime=0,this.deathDir=Math.random()<.5?-1:1,this.stats.deaths++,this.game.onKilled(this,t||this.lastAttacker,e,i,s)}revive(t){this.state==="downed"&&(this.state="alive",this.hp=t&&t.isMedic?100:40,this.bleed=0,this.setStance("crouch"),this.spawnProtect=1.2,this.game.onRevived(this,t))}heal(t){this.hp=Math.min(100,this.hp+t)}updateSway(t,e){let i=this.gun,n=this.isPlayer&&i&&this.adsT>.3&&(i.stats.zoom>=3.5||i.stats.type==="sniper"||i.stats.type==="dmr"),s=0;n&&(s=(i.stats.type==="sniper"?.55:.35)*Math.PI/180,this.stance==="crouch"?s*=.6:this.stance==="prone"&&(s*=.3),i.stats.bipod&&this.stance!=="stand"&&(s*=.4),Math.abs(this.lean)>.5&&(s*=.7),Math.hypot(this.vel.x,this.vel.z)>.5&&(s*=1.8),this.holdingBreath&&(s*=.08),s*=1+this.suppression*2.5);let a=Math.sin(e*.83)*s+Math.sin(e*2.1+1)*s*.35,o=Math.sin(e*1.37+2)*s*.8+Math.sin(e*2.9)*s*.25,l=1-Math.exp(-t*6);this.swayY+=(a-this.swayY)*l,this.swayP+=(o-this.swayP)*l}updateVitals(t,e){this.updateSway(t,e),this.spawnProtect>0&&(this.spawnProtect-=t,(this.input.fire||Math.hypot(this.vel.x,this.vel.z)>2)&&(this.spawnProtect=Math.min(this.spawnProtect,.5))),this.suppression=Math.max(0,this.suppression-t*.35),this.flashed=Math.max(0,this.flashed-t*.4),this.lean=ei(this.lean,this.state==="alive"&&!this.sprinting?this.leanTarget:0,12,t);let i=this.state==="alive"?Ya[this.stance].eye:.35;if(this.eyeH=ei(this.eyeH,i,10,t),this.state==="alive"){if(this.bleed>0?(this.hp-=this.bleed*t,this.hp<=0&&(this.hp=0,this.goDown(this.lastAttacker,"Bleeding",!1))):e-this.lastDamage>7&&this.hp<60&&(this.hp=Math.min(60,this.hp+4*t)),this.healT>0){let n=Math.min(this.healT,30*t);this.healT-=n,this.heal(n)}}else this.state==="downed"?(this.downedTime+=t,this.downedHp-=t*100/(this.isPlayer?40:28),this.downedHp<=0&&this.die(this.lastAttacker,"Bled out",!1,!0)):this.state==="dead"&&(this.deadTime+=t)}updateAnim(t,e){let i=this.rig;if(!i)return;if(this.isPlayer){i.root.visible=!1;return}if(this.state==="dead"&&this.deadTime>25){i.root.visible=!1;return}if(i.outlines){let et=i.outlineOn!==!1&&this.state!=="dead";if(et!==i._olv){i._olv=et;for(let I of i.outlines)I.visible=et}}i.root.visible=!0;let n=(this.pos.x-e.x)**2+(this.pos.z-e.z)**2;if(n>160*160&&(this.id+this.game.frame)%3!==0&&this.state==="alive"){i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;return}let a=n<90*90;a!==this._cs&&(this._cs=a,i.root.traverse(et=>{et.isMesh&&(et.castShadow=a)})),i.root.position.copy(this.pos),i.root.rotation.y=this.yaw;let o=this.anim||(this.anim={phase:0,legYaw:0,lastYaw:this.yaw,shuffle:0,throwT:0,meleeT:0,death:null}),l=this.game.time,c=-Math.sin(this.yaw),h=-Math.cos(this.yaw),u=Math.cos(this.yaw),d=-Math.sin(this.yaw),f=this.vel.x*c+this.vel.z*h,p=this.vel.x*u+this.vel.z*d,x=Math.hypot(f,p),g=f<-.4,m=_i(this.yaw-o.lastYaw)/Math.max(t,.001);o.lastYaw=this.yaw;let v=0;if(x>.5&&this.stance!=="prone"&&this.state==="alive"){let et=Math.atan2(p,f);Math.abs(et)>Math.PI/2&&(et=_i(et-Math.PI)),v=-Math.max(-1.05,Math.min(1.05,et))}o.legYaw=ei(o.legYaw,v,9,t);let y=this.stance==="crouch"?2.7:this.sprinting?1.45:this.stance==="prone"?3.2:2.05;o.phase+=x*t*y*(g?-1:1),x<.4&&Math.abs(m)>1.2&&this.state==="alive"&&this.stance!=="prone"?(o.shuffle=Math.min(1,o.shuffle+t*6),o.phase+=t*7):o.shuffle=Math.max(0,o.shuffle-t*4);let M=Math.sin(o.phase),S=Math.cos(o.phase),w=Math.max(Math.min(1,x/(this.sprinting?6:this.stance==="crouch"?2.4:4)),o.shuffle*.35);o.amp=ei(o.amp??w,w,8,t);let T=o.amp,E=.95,_=0,b=0,C=this.lean*.12,z=this.pitch*.25,L=-o.legYaw*.85,N=-this.lean*.42,O=this.pitch*.3,U=this.pitch*.72,X=0,F=0,B=0,j=0,rt=0,st=0,_t=0,Y=0,J=0,gt=0,it=0,xt=0,St=0,vt=0;if(this.state==="dead"){o.death||(o.death={dir:this.deathDir,roll:(Math.random()-.5)*.8,arms:Math.random()}),this.deathPose=Math.min(1,this.deathPose+t*2.2);let et=this.deathPose,I=1-Math.pow(1-et,3),A=o.death;E=jt(.95,.17,I),_=1.52*A.dir*I,b=A.roll*I,z=.15*I,L=0,N=A.roll*.3*I,O=(A.dir>0?-.5:.6)*I,U=jt(this.pitch,A.dir>0?1.2:-1.3,I),B=-.6*I*A.arms,rt=.7*I,J=.25*I,gt=-.15*I,it=-.4*I,xt=-.15*I,St=.15*I,vt=-.1*I,_t=1.2*I}else if(this.state==="downed"){let et=Math.sin(this.downedTime*2.4)*.06;E=.2,_=1.48,b=.2+et,z=-.25,L=0,O=-.7,U=-.9+et,X=.4,j=-.6,rt=.4,F=-.3,J=.45+et,it=-.9,gt=.15,xt=-.35,St=.1,vt=-.12,_t=1.3}else if(this.stance==="prone"){E=.2,_=-1.47,z=0,L=0,O=1.15+this.pitch*.4,U=1.47+this.pitch*.8;let et=M*T;J=.05+et*.3,gt=.05-et*.3,it=-.15-Math.max(0,et)*.9,xt=-.15-Math.max(0,-et)*.9,St=.18,vt=-.18,b=et*.05,j=et*.15,F=-et*.15}else if(this.stance==="crouch"){let et=1-T;E=jt(.66,.62,et),_=-.08,J=jt(.9+M*.45,.25,et),it=jt(-1.35-Math.max(0,S)*.5,-1.75,et),gt=jt(.9-M*.45,1.1,et),xt=jt(-1.35-Math.max(0,-S)*.5,-1.65,et),z+=.08,U-=.08,E+=-Math.abs(M)*.02*T}else{let et=this.sprinting?.8:.48;J=M*et*T,gt=-M*et*T,it=-(Math.max(0,S)*(this.sprinting?1.4:.95)+.06)*T,xt=-(Math.max(0,-S)*(this.sprinting?1.4:.95)+.06)*T,E=.95-Math.abs(Math.sin(o.phase))*.035*T+(this.sprinting?-.03:0),b=M*.03*T,this.sprinting?(z=-.22,U=-.75,X=.55,_t=.9,st=.2,O=.15,F=M*.25,j=-M*.25):L+=M*.04*T,this.slideT>0&&(E=.5,_=.35,J=1.25,it=-.3,gt=.5,xt=-1.4,z=-.1,U=this.pitch*.7-.35),!this.move.grounded&&!this.swimming&&!this.vault&&(J=.75,it=-1.15,gt=.15,xt=-.6),this.vault&&(J=1.2,it=-1.6,gt=.8,xt=-1.2,_=-.2,U=-.5),this.swimming&&(E=.95,J=M*.4,gt=-M*.4,it=-.3,xt=-.3,U=-.5,F=S*.4,j=-S*.4)}if(this.state==="alive"){if(this.reloadT>0){let I=this.reloadTotal||2,A=1-this.reloadT/I,W=A<.25?A/.25:A<.65?1:A<.85?1-(A-.65)/.2:0;j=-.55*W,rt=.25*W,_t+=.45*Math.sin(Math.min(1,A)*Math.PI),st+=.15*W,U-=.18*Math.sin(Math.min(1,A)*Math.PI)}if(this.action){let I=1-this.actionT/(this.actionDur||1);if(this.action.name==="throw"||this.action.name==="throwC4"){let A=I<.55?I/.55:1-(I-.55)/.45;F=2.6*A-.6*(1-A)*(I>.55?1:0),B=-.3*A,U=this.pitch*.7-.3,Y=.2,L+=.35*A}else if(this.action.name==="melee"){let A=Math.sin(Math.min(1,I*1.6)*Math.PI);X=-.6*A,Y=-.25*A,L+=-.4*A}else j=-.9,F=-.5,U-=.6,_t+=.8}this.reviveProgress>0&&(U=-1.1,j=-.4,F=-.3,_t=1);let et=l-this.lastShotTime;et<.08&&(Y+=.05*(1-et/.08),U+=.04*(1-et/.08))}let Gt=1-Math.exp(-t*(this.state==="dead"?26:16)),nt=1-Math.exp(-t*(this.state==="dead"?22:10)),ut=1-Math.exp(-t*(this.state==="dead"?18:7)),k=Gt,pt=(et,I,A)=>{et[I]+=(A-et[I])*k};k=ut,pt(i.body.position,"y",E),pt(i.body.position,"x",C),pt(i.body.rotation,"x",_),pt(i.body.rotation,"z",b),k=nt,pt(i.pelvis.rotation,"y",o.legYaw*(this.stance==="prone"||this.state!=="alive"?0:1)),pt(i.spine.rotation,"x",z),pt(i.spine.rotation,"y",L),pt(i.spine.rotation,"z",N),pt(i.head.rotation,"x",O),k=Gt,pt(i.aim.rotation,"x",U),pt(i.aim.rotation,"y",X),pt(i.armR.rotation,"x",F),pt(i.armR.rotation,"z",B),pt(i.armL.rotation,"x",j),pt(i.armL.rotation,"z",rt),pt(i.weapon.rotation,"x",st),pt(i.weapon.rotation,"z",_t);let ct=i.pose==="pistol"?-.42:i.pose==="gadget"?-.3:-.33;pt(i.weapon.position,"z",ct+Y);let yt=i.legs;pt(yt[0].thigh.rotation,"x",J),pt(yt[1].thigh.rotation,"x",gt),pt(yt[0].thigh.rotation,"z",St),pt(yt[1].thigh.rotation,"z",vt),pt(yt[0].shin.rotation,"x",it),pt(yt[1].shin.rotation,"x",xt),this.state!=="dead"&&(o.death=null),i.root.updateMatrixWorld(!0);let ft=this.rigHS||(this.rigHS=new Float32Array(28)),zt=(et,I,A,W,Q,ot)=>{Br.set(A,W,Q),I.localToWorld(Br),ft[et*4]=Br.x,ft[et*4+1]=Br.y,ft[et*4+2]=Br.z,ft[et*4+3]=ot};zt(0,i.head,0,.14,0,.15),zt(1,i.spine,0,.33,0,.23),zt(2,i.spine,0,.09,0,.2),zt(3,yt[0].thigh,0,-.22,0,.12),zt(4,yt[1].thigh,0,-.22,0,.12),zt(5,yt[0].shin,0,-.24,0,.11),zt(6,yt[1].shin,0,-.24,0,.11),this.rigHSPos=(this.rigHSPos||new R).copy(this.pos),this.rigHSFrame=this.game.frame}muzzleWorld(t=new R){if(this.rig&&this.rig.weaponMesh&&!this.isPlayer){let e=this.gun,i=e?e.model.muzzle:q1;return this.rig.weapon.updateWorldMatrix(!0,!1),t.copy(i).applyMatrix4(this.rig.weapon.matrixWorld)}return this.eye(t)}removeFromScene(){this.rig&&this.game.scene.remove(this.rig.root)}},$h=new R,Rf=new R,q1=new R,Br=new R;var Pf=new R;function is(r,t){if(t<=r[0][0])return r[0][1];for(let e=1;e<r.length;e++){let[i,n]=r[e];if(t<=i){let[s,a]=r[e-1],o=i>s?(t-s)/(i-s):1;return o=o*o*(3-2*o),Array.isArray(a)?a.map((l,c)=>l+(n[c]-l)*o):a+(n-a)*o}}return r[r.length-1][1]}var X1=r=>new dt(r).lerp(new dt(8026746),.25).getHex();function Hr(r,t,e,i,n,s,a,o){let l=i-r,c=n-t,h=s-e,u=Math.hypot(l,c,h),d=P.box(a,a*.9,u,o),f=new Rt().lookAt(new R,new R(l,c,h),new R(0,1,0));return d.applyMatrix4(f),d.translate((r+i)/2,(t+n)/2,(e+s)/2),d}var Zh={};function Y1(r){if(Zh[r])return Zh[r];let t=256,e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),n=r==="chevron"?"#ff7a2a":"#ff3030";i.strokeStyle=i.fillStyle=n,i.shadowColor=n,i.lineCap="round";let s=(o,l)=>{i.shadowBlur=o,l(),i.shadowBlur=0,l()};r==="dot"?s(14,()=>{i.beginPath(),i.arc(128,128,9,0,7),i.fill()}):r==="holo"?s(8,()=>{i.lineWidth=3.5,i.beginPath(),i.arc(128,128,46,0,7),i.stroke();for(let[o,l]of[[0,-1],[0,1],[-1,0],[1,0]])i.beginPath(),i.moveTo(128+o*46,128+l*46),i.lineTo(128+o*58,128+l*58),i.stroke();i.beginPath(),i.arc(128,128,4.5,0,7),i.fill()}):s(8,()=>{i.lineWidth=4,i.beginPath(),i.moveTo(104,150),i.lineTo(128,124),i.lineTo(152,150),i.stroke(),i.lineWidth=3,i.beginPath(),i.arc(128,128,54,Math.PI*.15,Math.PI*.85,!0),i.stroke(),i.beginPath(),i.arc(128,124,3,0,7),i.fill()});let a=new Vn(e);return a.colorSpace=Ee,a.anisotropy=4,Zh[r]=a,a}var Vr=null;function $1(){if(Vr)return Vr;let r=128,t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),i=e.createRadialGradient(r*.5,r*.5,r*.1,r*.5,r*.5,r*.5);return i.addColorStop(0,"rgba(150,190,230,0.05)"),i.addColorStop(.75,"rgba(120,160,210,0.12)"),i.addColorStop(1,"rgba(50,70,100,0.45)"),e.fillStyle=i,e.fillRect(0,0,r,r),e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=5,e.beginPath(),e.arc(r*.5,r*.5,r*.36,Math.PI*1.1,Math.PI*1.4),e.stroke(),Vr=new Vn(t),Vr.colorSpace=Ee,Vr}var Za=class{constructor(t,e){this.game=t,this.s=e,this.input=t.input,this.camera=t.camera,this.vmScene=t.vmScene,this.vmCamera=t.vmCamera,this.vmRoot=new de,this.vmScene.add(this.vmRoot),this.vmMat=new pe({vertexColors:!0,roughness:.6,metalness:.15,side:Pe}),this.vmMesh=null,this.vmArms=null,this.reticle=null,this.bobPhase=0,this.swayX=0,this.swayY=0,this.kick=0,this.lastShot=-1,this.crouchToggle=!1,this.proneToggle=!1,this.giveUpT=0,this.interactT=0,this.camRoll=0,this.landDip=0,this.prevGrounded=!0,this.vmKey=null,this.flashlight=new Qo(16773592,0,60,.42,.45,1.5),this.flashlight.castShadow=!1,this.camera.add(this.flashlight),this.camera.add(this.flashlight.target),this.flashlight.position.set(.2,-.15,0),this.flashlight.target.position.set(0,0,-10),this.laserDot=null,this.breath=1,this.holding=!1,this.adsToggle=!1,this.leanToggle=0}buildViewmodel(){let t=this.s,e=t.weapon;if(!e)return;let i=t.active+":"+(e.kind==="gun"?e.id+JSON.stringify(e.att):e.id)+":"+t.team;if(i===this.vmKey)return;this.vmKey=i;for(let d of["vmMesh","vmMag","vmArmR","vmArmL","reticle","vmLenses"])this[d]&&(this[d].parent&&this[d].parent.remove(this[d]),this[d]=null);if(this.vmArmLGroup||(this.vmArmLGroup=new de,this.vmRoot.add(this.vmArmLGroup)),!this.vmKnife){this.vmKnife=new de;let d=new Ot(Kn("knife"),this.vmMat);d.rotation.x=-.2,this.vmKnife.add(d);let f=Ye[this.s.team],p=new Ot(P.merge([P.box(.07,.075,.09,f.glove,0,-.01,.03),P.box(.022,.03,.05,f.glove,-.035,.02,0),Hr(0,-.05,.06,.08,-.2,.32,.08,f.uniform2)]),this.vmMat);this.vmKnife.add(p),this.vmKnife.visible=!1,this.vmScene.add(this.vmKnife)}let n=Ye[t.team],s,a=null,o,l=new R(0,-.035,.02);if(this.magPos=null,e.kind==="gun"){let d=e.model;s=d.bodyGeo,a=d.magGeo,this.magPos=d.magPos.clone(),o=new R(0,0,e.stats.type==="pistol"?0:-d.len*.42),e.stats.type==="pistol"&&o.set(-.02,-.04,.02),this.sightY=d.sightY,this.sightZ=d.sightZ,this.muzzle=d.muzzle.clone(),this.glassMat||(this.glassMat=new zi({map:$1(),transparent:!0,depthWrite:!1,side:Pe,toneMapped:!1})),this.vmLenses=new de;for(let f of d.lenses||[]){let p=f.type==="rect"?new Ke(f.w,f.h):new Ls(f.r,20),x=new Ot(p,this.glassMat);x.position.set(0,f.y,f.z),x.renderOrder=3,x.userData.back=!!f.back,this.vmLenses.add(x)}if(this.vmRoot.add(this.vmLenses),e.stats.reticle&&!e.stats.scope&&e.stats.zoom<3.5){let f=new zi({map:Y1(e.stats.reticle),transparent:!0,depthWrite:!1,depthTest:!1,blending:en,toneMapped:!1});f.color.setRGB(2.2,2.2,2.2);let p=new Ot(new Ke(.024,.024),f);p.position.set(0,d.sightY,d.reticleZ??d.sightZ-.03),p.renderOrder=4,this.reticle=p,this.vmRoot.add(p)}}else s=e.model,o=new R(-.1,-.02,.02),this.sightY=.1,this.sightZ=0,this.muzzle=new R(0,.05,-.6);this.gripL=o,this.vmMesh=new Ot(s,this.vmMat),this.vmRoot.add(this.vmMesh),a&&(this.vmMag=new Ot(a,this.vmMat),this.vmMag.position.copy(this.magPos),this.vmRoot.add(this.vmMag));let c=(d,f,p,x)=>[P.box(.062,.066,.085,n.glove,d,f,p),P.box(.064,.02,.03,X1(n.glove),d,f+.03,p-.035),P.box(.02,.025,.05,n.glove,d+.03*x,f+.01,p-.02)],h=[Hr(.16,-.32,.32,l.x+.035,l.y-.035,l.z+.08,.075,n.uniform),Hr(l.x+.06,l.y-.06,l.z+.14,l.x+.02,l.y-.02,l.z+.05,.08,n.uniform2),...c(l.x+.012,l.y,l.z,-1),P.box(.075,.03,.05,n.accent,.12,-.21,.2)],u=[Hr(-.2,-.32,.14,o.x-.035,o.y-.045,o.z+.08,.075,n.uniform),Hr(o.x-.06,o.y-.07,o.z+.15,o.x-.02,o.y-.035,o.z+.05,.08,n.uniform2),...c(o.x-.01,o.y-.025,o.z,1)];this.vmArmR=new Ot(P.merge(h),this.vmMat),this.vmRoot.add(this.vmArmR),this.vmArmL=new Ot(P.merge(u),this.vmMat),this.vmArmLGroup.add(this.vmArmL)}update(t){let e=this.s,i=this.input,n=this.game,s=n.settings,a=n.hud,o=n.uiBlocking(),l=!o&&e.state==="alive";if(!o&&e.state!=="dead"){let u=e.gun,d=e.adsT>.5?u?u.stats.zoom:e.weapon&&e.weapon.id==="binoculars"?6:1:1,f=.0021*s.get("sensitivity")*(e.adsT>.5?s.get("adsSensitivity")/Math.pow(d,.85):1),p=s.get("mouseSmoothing")||0;this.smx=(this.smx||0)*p+i.mouse.dx*(1-p),this.smy=(this.smy||0)*p+i.mouse.dy*(1-p);let x=e.state==="alive"?this.aimAssistTarget(t):null,g=x?x.friction:1;e.yaw-=this.smx*f*g,e.pitch-=this.smy*f*g*(s.get("invertY")?-1:1);let m=(s.get("keyLookSpeed")||140)*ne*t*(e.adsT>.5?.45:1);me.down(i,"lookLeft")&&(e.yaw+=m),me.down(i,"lookRight")&&(e.yaw-=m),me.down(i,"lookUp")&&(e.pitch+=m*.7),me.down(i,"lookDown")&&(e.pitch-=m*.7),x&&this.applyAimPull(x,t),e.pitch=Nt(e.pitch,e.state==="downed"?-.6:-1.45,e.state==="downed"?.6:1.45)}let c=e.input,h=me;if(c.mx=0,c.mz=0,c.fire=!1,c.ads=!1,c.sprint=!1,l){h.down(i,"forward")&&(c.mz-=1),h.down(i,"back")&&(c.mz+=1),h.down(i,"left")&&(c.mx-=1),h.down(i,"right")&&(c.mx+=1);let u=h.down(i,"sprint");s.get("sprintMode")==="toggle"&&(h.hit(i,"sprint")&&!(e.adsT>.5)&&(this.sprintToggle=!this.sprintToggle),(c.mz>-.3||e.adsT>.5||e.stance==="prone")&&(this.sprintToggle=!1),u=!!this.sprintToggle||e.adsT>.5&&h.down(i,"sprint")),c.sprint=(u||s.get("autoSprint")&&c.mz<-.5&&Math.abs(c.mx)<.5)&&!(e.adsT>.5)&&!c.ads,e.autoRepeat=!!s.get("semiAutoRepeat"),h.hit(i,"jump")&&(c.jump=!0);let d=h.hit(i,"crouch"),f=h.hit(i,"crouchHold"),p=s.get("crouchMode")==="hold";(d||f)&&e.sprinting?(c.slide=!0,this.crouchToggle=!p):d&&!p&&(this.crouchToggle=!this.crouchToggle,e.stance==="prone"&&(this.crouchToggle=!0,e.setStance("crouch"))),h.hit(i,"prone")&&(e.stance==="prone"?e.setStance("crouch")&&(this.crouchToggle=!0):(c.prone=!0,this.crouchToggle=!1)),c.sprint&&c.mz<0&&e.stance==="crouch"&&this.crouchToggle&&!(e.slideT>0)&&(this.crouchToggle=!1),c.sprint&&c.mz<0&&e.stance==="prone"&&e.setStance("stand"),c.crouch=this.crouchToggle||h.down(i,"crouchHold")||p&&h.down(i,"crouch"),c.proneHold=e.stance==="prone",c.fire=h.down(i,"fire"),s.get("adsMode")==="toggle"?(h.hit(i,"ads")&&(this.adsToggle=!this.adsToggle),(e.sprinting||e.reloadT>0&&!1)&&(this.adsToggle=!1),c.ads=this.adsToggle):c.ads=h.down(i,"ads");let x=0;if(s.get("leanMode")==="toggle"?(h.hit(i,"leanL")&&(this.leanToggle=this.leanToggle===-1?0:-1),h.hit(i,"leanR")&&(this.leanToggle=this.leanToggle===1?0:1),e.sprinting&&(this.leanToggle=0),x=this.leanToggle||0):(h.down(i,"leanL")&&(x-=1),h.down(i,"leanR")&&(x+=1)),x!==0){let m=e.right(new R).multiplyScalar(x),v=n.world.collision.raycast(e.pos.x,e.pos.y+e.eyeH,e.pos.z,m.x,0,m.z,.85,{});v&&(x*=Nt((v.t-.25)/.6,0,1))}e.leanTarget=x,e.adsT>.6&&e.gun&&(e.gun.stats.zoom>=3.5||e.gun.stats.type==="sniper"||e.gun.stats.type==="dmr")&&u&&this.breath>0?(this.holding=!0,this.breath=Math.max(0,this.breath-t/5)):(this.holding=!1,this.breath=Math.min(1,this.breath+t/(u?8:3.5))),e.holdingBreath=this.holding,h.hit(i,"reload")&&e.reload(),h.hit(i,"firemode")&&(e.cycleMode(),n.audio.play2d("switch",{vol:.4})),h.hit(i,"bandage")&&e.bandage(),h.hit(i,"light")&&this.toggleLight(),h.hit(i,"melee")&&n.combat.melee(e);for(let m=0;m<5;m++)h.hit(i,"slot"+(m+1))&&e.switchTo(m);if(i.mouse.wheel){let m=e.active;for(let v=0;v<5;v++){m=(m+(i.mouse.wheel>0?1:4))%5;let y=e.slots[m];if(y&&(y.kind==="gun"||y.count>0||y.def.count===1/0))break}e.switchTo(m)}h.hit(i,"grenade")&&this.quickThrow(),h.hit(i,"spot")&&this.spotOrOrder(),e.weapon&&e.weapon.kind==="gadget"&&(n.combat.useGadget(e,h.hit(i,"fire"),h.hit(i,"ads")),c.fire=!1,e.weapon.id!=="binoculars"&&e.weapon.id!=="rpg"&&e.weapon.id!=="m320"&&(c.ads=!1)),this.interact(t,h.down(i,"interact"))}else e.leanTarget=0,c.crouch=!1,this.adsToggle=!1;e.state==="downed"&&!o&&(h.down(i,"jump")?(this.giveUpT+=t,this.giveUpT>1.5&&(this.giveUpT=0,e.die(e.lastAttacker,"Gave up",!1,!0))):this.giveUpT=0),a&&(a.giveUp=this.giveUpT/1.5)}aimAssistTarget(t){let e=this.game.settings,i=e.get("aimAssist");if(!i||i==="off")return this.aaTarget=null,null;let n={low:{cone:2.6,fric:.32,pull:1.6,snap:.4,track:.35},medium:{cone:4,fric:.48,pull:2.8,snap:.6,track:.55},high:{cone:5.8,fric:.62,pull:4.4,snap:.8,track:.75}}[i],s=this.s,a=this.game;if(!n||!s.gun||s.sprinting||s.state!=="alive")return this.aaTarget=null,null;let o=s.eye(Pf),l=Math.cos(s.pitch),c=-Math.sin(s.yaw)*l,h=Math.sin(s.pitch),u=-Math.cos(s.yaw)*l,d=s.adsT>.5,f=a.world.collision,p=a.time;this.aaVis=this.aaVis||new Map;let x=null,g=1e9;for(let y of a.teams[1-s.team]){if(y.state!=="alive")continue;let M=y.hitSpheres(),S=M[1],w=S[0]-o.x,T=S[1]-o.y,E=S[2]-o.z,_=Math.hypot(w,T,E);if(_>(d?170:75)||_<.5)continue;let b=Math.acos(Math.max(-1,Math.min(1,(w*c+T*h+E*u)/_)))/ne,C=n.cone*Math.max(.6,Math.min(2.4,25/_))*(d?1.2:1);if(b>C*1.8)continue;let z=this.aaVis.get(y);if(!z||p-z.t>.05){let O=f.los(o.x,o.y,o.z,S[0],S[1],S[2])&&f.softVisibility(o.x,o.y,o.z,S[0],S[1],S[2],p)>.35,U=f.los(o.x,o.y,o.z,M[0][0],M[0][1],M[0][2])&&f.softVisibility(o.x,o.y,o.z,M[0][0],M[0][1],M[0][2],p)>.35;z={t:p,body:O,head:U},this.aaVis.set(y,z)}if(!z.body&&!z.head)continue;let L=z.body?S:M[0],N=b/C*(y===this.aaTarget?.65:1)+_*.002;N<g&&(g=N,x={e:y,ang:b,cone:C,d:_,x:L[0],y:L[1],z:L[2]})}if(!x)return this.aaTarget=null,null;x.e!==this.aaTarget&&(this.aaTarget=x.e,this.aaPrev=null);let m=x.ang<x.cone,v=m?1-x.ang/x.cone:0;return x.friction=1-n.fric*v*v*(3-2*v),x.cfg=n,x.inCone=m,x}applyAimPull(t,e){let i=this.s,n=i.eye(Pf),s=t.x-n.x,a=t.y-n.y,o=t.z-n.z,l=Math.atan2(-s,-o),c=Math.atan2(a,Math.hypot(s,o)),h=l-i.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;let u=c-i.pitch;if(i.adsT>.3&&!this.wasAds&&t.ang<t.cone*1.6&&(i.yaw+=h*t.cfg.snap,i.pitch+=u*t.cfg.snap),this.wasAds=i.adsT>.3,this.aaPrev&&t.inCone&&e>0){let f=l-this.aaPrev.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;let p=c-this.aaPrev.p;Math.abs(f)<.2&&Math.abs(p)<.2&&(i.yaw+=f*t.cfg.track,i.pitch+=p*t.cfg.track*.6)}if(this.aaPrev={y:l,p:c},!t.inCone)return;let d=1-Math.exp(-t.cfg.pull*e*(i.adsT>.5?1:.55));i.yaw+=h*d,i.pitch+=u*d*.6}toggleLight(){let t=this.s;t.slots[0]&&(t.flashlightOn=!t.flashlightOn,this.game.audio.play2d("switch",{vol:.35}))}quickThrow(){let t=this.s,e=t.slots[4];!e||e.count<=0||t.actionT>0||t.state!=="alive"||(e.count--,t.startAction("throw",.55,{type:e.id}),this.game.audio.play2d("pin",{vol:.4}))}spotOrOrder(){let t=this.s,e=this.game;if(e.combat.spot(t,7,4)>0)return;let n=t.squad;if(!n||n.leader!==t)return;let s=t.eye(new R),a=t.aimDir(new R),o=null,l=7*ne;for(let h of e.mode.flags){let u=new R(h.x-s.x,h.y+3-s.y,h.z-s.z).normalize(),d=Math.acos(Nt(u.dot(a),-1,1));d<l&&(l=d,o=h)}if(o){e.squads.setOrder(n,o.owner===t.team?"defend":"attack",o),e.hud.toast(`Squad: ${o.owner===t.team?"DEFEND":"ATTACK"} ${o.id} \u2014 ${o.name}`),e.audio.play2d("beep",{vol:.4});return}let c=e.world.collision.raycast(s.x,s.y,s.z,a.x,a.y,a.z,350,{});c?(e.squads.setOrder(n,"move",null,c.x,c.z),n.order.flag={x:c.x,z:c.z,r:12},e.hud.toast("Squad: MOVE to marker"),e.audio.play2d("beep",{vol:.4})):(e.squads.setOrder(n,"follow",null,t.pos.x,t.pos.z),e.hud.toast("Squad: FOLLOW me"))}interact(t,e){let i=this.s,n=this.game;this.prompt=null;let s=null,a=2.2;for(let o of n.teams[i.team]){if(o===i||o.state!=="downed")continue;let l=Math.hypot(o.pos.x-i.pos.x,o.pos.z-i.pos.z);l<a&&(a=l,s=o)}if(s){this.prompt=`Hold [${me.name("interact")}] to revive ${s.name}`,e?n.reviveTick(i,s,t):i.reviveProgress=0;return}if(i.reviveProgress=0,i.weapon&&i.weapon.id==="medkit"){let o=null;a=3;for(let l of n.teams[i.team]){if(l===i||l.state!=="alive"||l.hp>=100&&l.bleed<=0)continue;let c=Math.hypot(l.pos.x-i.pos.x,l.pos.z-i.pos.z);c<a&&(a=c,o=l)}o&&(this.prompt=`[${me.name("interact")}] Heal ${o.name}`,me.hit(n.input,"interact")&&i.medkitCd<=0&&i.startAction("medkitOther",.9,{target:o}))}}updateCamera(t){let e=this.s,i=this.camera,n=this.game,s=n.settings,a=e.eye(new R);e.move.grounded&&!this.prevGrounded&&e.state==="alive"&&(this.landDip=.12),this.prevGrounded=e.move.grounded,this.landDip=ei(this.landDip,0,8,t);let o=Math.hypot(e.vel.x,e.vel.z);e.move.grounded&&o>.3&&(this.bobPhase+=o*t*(e.sprinting?1.6:1.9));let l=s.get("headBob")?Math.min(1,o/5)*(e.adsT>.5?.25:1):0,c=Math.abs(Math.sin(this.bobPhase))*.045*l,h=Math.cos(this.bobPhase)*.025*l;i.position.set(a.x,a.y+c-this.landDip,a.z);let u=n.fx.trauma,d=u*u,f=n.time,p=d*.06*Math.sin(f*37.1),x=d*.05*Math.sin(f*41.7+1),g=d*.05*Math.sin(f*29.3+2);this.camRoll=ei(this.camRoll,-e.lean*.17+(e.state==="downed"?.35:0),10,t),i.rotation.order="YXZ",i.rotation.set(e.pitch+e.swayP+x,e.yaw+e.swayY+p+h*.15,this.camRoll+g),this.camOff={p:x,y:p+h*.15,r:this.camRoll+g,dy:c-this.landDip};let m=e.gun,v=e.weapon&&e.weapon.id==="binoculars",y=m?m.stats.zoom:v?6:1,M=jt(1,y,e.adsT),S=s.get("fov")*ne,w=i.aspect,T=2*Math.atan(Math.tan(S/2)/w)/ne;this.sprintFov=ei(this.sprintFov||1,e.sprinting?1.06:1,6,t),i.fov=T/M*this.sprintFov,i.updateProjectionMatrix(),i.updateMatrixWorld();let E=e.slots[0]&&e.slots[0].stats&&e.slots[0].stats.light,_=n.env.time.night;this.flashlight.intensity=e.flashlightOn&&e.state==="alive"&&(E||_)?_?26:12:0,this.updateViewmodel(t,h,c)}updateViewmodel(t,e,i){let n=this.s,s=this.game;this.buildViewmodel();let a=this.vmRoot,o=this.isScoped();if(a.visible=n.state==="alive"&&!o,!a.visible){this.updateMuzzleWorld();return}let l=n.weapon,c=l&&l.kind==="gun",h=c?n.adsT:0,u=h*h*(3-2*h),d=s.input.mouse.dx,f=s.input.mouse.dy;this.swayX=ei(this.swayX,Nt(-d*6e-4,-.05,.05),10,t),this.swayY=ei(this.swayY,Nt(f*6e-4,-.05,.05),10,t),n.lastShotTime!==this.lastShot&&(this.lastShot=n.lastShotTime,this.kick=1),this.kick=ei(this.kick,0,18,t);let p=new R(.155,-.2,-.6),x=c&&l.stats.zoom>1.2?.2:.26,g=new R(0,-this.sightY,-x-this.sightZ),m=p.clone().lerp(g,u),v=.035*(1-u),y=.04*(1-u),M=0,S=1-u*.8;m.x+=(e*.5+this.swayX)*S,m.y+=(-i*.35+this.swayY)*S;let w=s.time;m.y+=Math.sin(w*1.6)*.0025*(1-u*.7),this.sprintBlend=ei(this.sprintBlend||0,n.sprinting?1:0,9,t);let T=this.sprintBlend;T>.001&&(m.x+=.03*T,m.y-=.06*T,v-=.35*T,y+=.65*T,m.y+=Math.sin(this.bobPhase*2)*.012*T),this.crouchBlend=ei(this.crouchBlend||0,n.stance==="stand"?0:1,7,t),m.y+=.008*this.crouchBlend,M+=.04*this.crouchBlend*(1-u);let E=null,_=null;if(this.magFall=this.magFall||null,n.reloadT>0&&c){let O=n.reloadTotal||2,U=Math.min(1,1-n.reloadT/O),X=!!n.reloadEmpty;this._reloadId!==n.reloadStart&&(this._reloadId=n.reloadStart,this._rlSnd={},this.magFall=null);let F=(B,j,rt,st)=>{U>=j&&!this._rlSnd[B]&&(this._rlSnd[B]=!0,s.audio.play2d(rt,st||{vol:.5}))};if(l.stats.shellReload){let B=is([[0,0],[.12,1],[.88,1],[1,0]],U);M+=.5*B,m.y-=.03*B,m.x-=.02*B,y-=.12*B;let j=(O-n.reloadT)/(l.stats.reload||.55)%1;_=[.03*B,(-.12+.12*Math.sin(j*Math.PI))*B,(.16+.04*Math.sin(j*Math.PI))*B]}else{let B=X?{present:.1,release:.18,out:.28,gone:.38,up:.5,seat:.6,rack0:.7,rack1:.8,done:.92}:{present:.12,release:.2,out:.3,gone:.4,up:.54,seat:.66,rack0:.7,rack1:.7,done:.88},j=is([[0,0],[B.present,1],[B.seat,1],[B.seat+.03,.88],[B.rack0,.9],[B.done,0],[1,0]],U),rt=is([[0,0],[B.present,1],[B.seat+.02,1],[B.done,0]],U),st=is([[0,0],[B.seat-.015,0],[B.seat,1],[B.seat+.05,0],[1,0]],U);if(M+=.5*j,y-=.2*rt,v+=.07*j+.05*st,m.y-=.035*j-.018*st,m.x-=.03*j,m.z+=.02*rt,X){let St=is([[0,0],[B.rack0,0],[B.rack0+.04,1],[B.rack1,1],[B.rack1+.03,0],[1,0]],U);M-=.65*St,v+=.06*St;let vt=is([[0,0],[B.rack1-.04,0],[B.rack1,1],[B.rack1+.04,0],[1,0]],U);m.z+=.035*vt}let _t=this.magPos||new R,Y=this.gripL,J=[_t.x-Y.x-.01,_t.y-Y.y-.05,_t.z-Y.z+.01],gt=[J[0]-.08,J[1]-.34,J[2]+.12],it=[.02-Y.x,.09-Y.y,.02-Y.z+.06],xt=[[0,[0,0,0]],[B.present,J],[B.release,J],[B.out,[J[0],J[1]-.08,J[2]]],[B.gone,gt],[B.up-.06,gt],[B.up,[J[0],J[1]-.1,J[2]+.02]],[B.seat,J],[B.seat+.04,J]];if(X?xt.push([B.rack0,it],[B.rack1,[it[0],it[1],it[2]+.06]],[B.done,[0,0,0]]):xt.push([B.done,[0,0,0]]),xt.push([1,[0,0,0]]),_=is(xt,U),this.vmMag){let St=[_[0]-J[0],_[1]-J[1],_[2]-J[2]];if(U<B.release)E=[0,0,0,0];else if(U<B.out){let vt=(U-B.release)/(B.out-B.release);E=[0,-.08*vt*vt,0,0]}else if(U<B.up-.06)if(X){this.magFall||(this.magFall={t:0}),this.magFall.t+=t;let vt=this.magFall.t;E=[.02*vt,-.08-4.5*vt*vt,.12*vt,3*vt]}else E=[St[0],-.08+St[1],St[2],.3];else U<B.seat?E=[St[0],St[1],St[2],.25*(1-(U-(B.up-.06))/(B.seat-B.up+.06))]:E=[0,0,0,0]}F("out",B.release,"magOut",{vol:.55}),X&&F("drop",B.out+.08,"impactMetal",{vol:.12,rate:1.4}),F("in",B.seat,"magIn",{vol:.6}),X&&F("rack",B.rack1,"bolt",{vol:.55})}}if(c&&n.boltT>0&&(l.stats.bolt||l.stats.pump)){let O=1-n.boltT/(l.stats.interval*.9),U=Math.sin(Math.min(1,O)*Math.PI);l.stats.bolt?(M-=.25*U,m.y-=.02*U,m.x+=.02*U):(_=[0,0,.09*U],m.z+=.015*U)}if(n.switchT>0){let O=n.switchT/.45;m.y-=.35*O,v-=.6*O}let b=this.vmKnife;if(b&&(b.visible=!1),n.action){let O=1-n.actionT/(n.actionDur||1);if(n.action.name==="throw"||n.action.name==="throwC4")m.y-=.1,v+=Math.sin(O*Math.PI)*.9,m.z+=.08*Math.sin(O*Math.PI);else if(n.action.name==="melee"){if(m.y-=.25*Math.sin(O*Math.PI),m.x+=.12*Math.sin(O*Math.PI),M-=.5*Math.sin(O*Math.PI),b){b.visible=!0;let U=Math.min(1,O*1.5),X=U<.25?U/.25*.2:.2+(U-.25)/.75*.8;b.position.set(.32-X*.55,-.16+Math.sin(X*Math.PI)*.08,-.45+Math.sin(X*Math.PI)*-.12),b.rotation.set(-.3,.9-X*1.6,-.6+X*1.2)}}else m.y-=.12*Math.sin(O*Math.PI),M-=.3*Math.sin(O*Math.PI)}if(this.vmMag&&this.magPos&&(E?(this.vmMag.position.set(this.magPos.x+E[0],this.magPos.y+E[1],this.magPos.z+E[2]),this.vmMag.rotation.x=E[3],this.vmMag.visible=E[1]>-.6):(this.vmMag.position.copy(this.magPos),this.vmMag.rotation.x=0,this.vmMag.visible=!0)),this.vmArmLGroup){let O=_||[0,0,0],U=this.vmArmLGroup.position,X=1-Math.exp(-t*18);U.x+=(O[0]-U.x)*X,U.y+=(O[1]-U.y)*X,U.z+=(O[2]-U.z)*X}if(n.state==="alive"&&n.vault&&(m.y-=.1,v-=.3),n.slideT>0&&(M+=.25,m.y-=.03),c){let O=(l.stats.type==="sniper"||l.stats.type==="shotgun"?.09:.035)*this.kick;m.z+=O,v+=this.kick*(l.stats.type==="sniper"?.12:.04)*(1-u*.5)}let C=1-Math.exp(-t*(u>.5?26:16)),z=1-Math.exp(-t*14);a.position.lerp(m,C);let L=M+n.lean*.06;a.rotation.x+=(v-a.rotation.x)*z,a.rotation.y+=(y-a.rotation.y)*z,a.rotation.z+=(L-a.rotation.z)*z,this.reticle&&(this.reticle.visible=u>.85);let N=s.env.sunDir.clone().transformDirection(this.camera.matrixWorldInverse);s.vmLight.position.copy(N).multiplyScalar(5),this.updateMuzzleWorld()}updateReticleAim(){let t=this.s,e=t.weapon;if(this.retAx=0,this.retAy=0,!this.vmRoot.visible||!e||e.kind!=="gun"||t.adsT<.5||this.sightY===void 0)return;let i=new R(0,this.sightY,this.reticle?this.reticle.position.z:this.sightZ-.35);if(!this.reticle&&e.model&&!e.model.pistol&&(i.z=-e.model.len*.5),i.applyMatrix4(this.vmRoot.matrixWorld),i.z>-.01)return;let n=this.vmCamera,s=this.camera,a=Math.tan(n.fov*ne/2),o=Math.tan(s.fov*ne/2),l=i.x/-i.z/(a*n.aspect),c=i.y/-i.z/a;this.retAx=Math.atan(l*o*s.aspect),this.retAy=Math.atan(c*o)}aimRay(t,e){let i=this.s,n=this.camOff||{p:0,y:0,r:0,dy:0};i.eye(t),t.y+=n.dy;let s=new We(i.pitch+i.swayP+n.p,i.yaw+i.swayY+n.y,n.r,"YXZ");return e.set(Math.tan(this.retAx||0),Math.tan(this.retAy||0),-1).normalize().applyEuler(s),e}updateMuzzleWorld(){let t=this.s;if(this.vmRoot.updateMatrixWorld(),this.updateReticleAim(),!this.muzzle)return;let e=this.muzzle.clone();this.vmRoot.updateMatrixWorld(),e.applyMatrix4(this.vmRoot.matrixWorld),t.vmMuzzle=this.camera.localToWorld(e.clone())}isScoped(){let t=this.s,e=t.gun;return t.state!=="alive"?!1:!!(e&&(e.stats.scope||e.stats.zoom>=3.5)&&t.adsT>.92||t.weapon&&t.weapon.id==="binoculars"&&t.adsT>.9)}dispose(){this.vmScene.remove(this.vmRoot),this.camera.remove(this.flashlight),this.camera.remove(this.flashlight.target)}};var Df={recruit:{react:.7,turn:150,err0:7,errTau:1.25,jitter:.95,comp:.35,head:.05,sight:.75,cover:.45,strafe:.4,nade:.25,think:.6,lead:.5,burst:.55},regular:{react:.48,turn:230,err0:4.6,errTau:.9,jitter:.62,comp:.55,head:.12,sight:.9,cover:.65,strafe:.65,nade:.45,think:.45,lead:.7,burst:.7},veteran:{react:.31,turn:340,err0:2.9,errTau:.62,jitter:.4,comp:.75,head:.22,sight:1,cover:.85,strafe:.85,nade:.65,think:.34,lead:.85,burst:.85},elite:{react:.21,turn:480,err0:1.9,errTau:.43,jitter:.25,comp:.88,head:.32,sight:1.12,cover:1,strafe:1,nade:.8,think:.27,lead:.95,burst:.95}},Z1={smg:14,shotgun:9,carbine:26,ar:34,lmg:40,dmr:75,sniper:130,pistol:12},j1={smg:70,shotgun:36,carbine:135,ar:160,lmg:180,dmr:300,sniper:450,pistol:45};function ja(r){if(!r)return 40;let t=j1[r.stats.type]||140;return r.stats.zoom>=3.5?t*=1.3:r.stats.zoom>=1.9&&(t*=1.12),t}var If=new R,Ka=new R,Ja=new R,Qa=class{constructor(t,e){this.s=t,this.game=e,this.setDifficulty(e.settings.get("difficulty")),this.aggro=q(.35,.95),this.known=new Map,this.target=null,this.reactT=0,this.part="body",this.errY=0,this.errP=0,this.ph1=q(0,100),this.ph2=q(0,100),this.aiYaw=0,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPitch=0,this.lastYaw=0,this.state="objective",this.path=null,this.pathI=0,this.goal=null,this.pathPending=!1,this.repathT=0,this.cover=null,this.peekT=0,this.peeking=!1,this.coverSearchT=0,this.strafeDir=1,this.strafeT=0,this.nextPerceive=q(0,.2),this.nextThink=q(0,.5),this.burstLeft=0,this.holdFire=0,this.nadeCd=q(4,12),this.gadgetCd=q(5,20),this.lookYaw=0,this.glanceT=q(1,3),this.glancing=0,this.glanceYaw=0,this.stuckT=0,this.lastPos=new R,this.progressT=0,this.holdSpot=null,this.holdT=0,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.wantStance="stand"}setDifficulty(t){this.d=Df[t]||Df.veteran,this.diffName=t}reset(){this.known.clear(),this.target=null,this.path=null,this.goal=null,this.cover=null,this.holdSpot=null,this.reviveMate=null,this.healMate=null,this.gadgetTask=null,this.investigate=null,this.state="objective",this.aiYaw=this.s.yaw,this.aiPitch=0,this.recoilOff=0,this.recoilOffY=0,this.lastPos.copy(this.s.pos),this.stuckT=0,this.burstLeft=0,this.pathPending=!1,this.placedClaymore=!1}inform(t,e,i,n,s,a){if(!t||t.team===this.s.team||t.state==="dead")return;let o=this.known.get(t);o?a>=o.t&&(o.x=e,o.y=i,o.z=n,o.t=a,s&&(o.seenT=a)):this.known.set(t,{x:e,y:i,z:n,t:a,seenT:s?a:-99,aw:0,vis:!1})}onDamaged(t,e){let i=this.game.time;if(t&&t!==this.s&&t.team!==this.s.team){let n=this.s.pos.distanceTo(t.pos),s=Math.min(12,n*.08);this.inform(t,t.pos.x+q(-s,s),t.pos.y,t.pos.z+q(-s,s),!1,i);let a=this.known.get(t);a&&(a.aw=Math.max(a.aw,.75)),(!this.target||this.target.state!=="alive")&&(this.target=t)}this.nextThink=Math.min(this.nextThink,.05),this.cover=null}onNearMiss(t){if(!t||t.team===this.s.team)return;let e=this.game.time,i=this.s.pos.distanceTo(t.pos),n=Math.min(20,i*.12);this.inform(t,t.pos.x+q(-n,n),t.pos.y,t.pos.z+q(-n,n),!1,e)}onSound(t,e,i,n){if(!i||i.team===this.s.team||i.state==="dead")return;let s=this.game.time,a=Math.hypot(t-this.s.pos.x,e-this.s.pos.z),o=Math.min(25,3+a*.1);this.inform(i,t+q(-o,o),i.pos.y,e+q(-o,o),!1,s),!this.target&&this.state!=="revive"&&(!this.investigate||s-this.investigate.t>4)&&(this.investigate={x:t,z:e,t:s})}perceive(t){let e=this.s,i=this.game.time,n=this.game.world.collision,s=e.eye(Ka),a=this.game.env.time.night,o=(a?140:380)*this.d.sight;for(let l of this.game.teams[1-e.team]){if(l.state==="dead"){this.known.delete(l);continue}let c=this.known.get(l),h=l.pos.x-s.x,u=l.pos.z-s.z,d=Math.hypot(h,u);if(c&&(c.vis=!1),d>o*1.1){c&&(c.aw=Math.max(0,c.aw-t*.6));continue}let f=Math.atan2(-h,-u),p=Math.abs(_i(f-e.yaw))/ne,x=i-l.lastLoudShot<.7,g=d<6?140:d<30||x?105:62;if(p>g){c&&(c.aw=Math.max(0,c.aw-t*.5));continue}let m=l.hitSpheres(),v=n.los(s.x,s.y,s.z,m[0][0],m[0][1],m[0][2]),y=n.los(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2])||n.los(s.x,s.y,s.z,m[2][0],m[2][1],m[2][2]);if(!v&&!y){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}let M=Nt(1.25-d/(o*.8),.1,1);l.stance==="prone"||l.state==="downed"?M*=d>25?.35:.7:l.stance==="crouch"&&(M*=.75);let S=Math.hypot(l.vel.x,l.vel.z);if(M*=l.sprinting?1.5:S>1?1.25:.8,x&&(M*=3),a&&(M*=l.flashlightOn?2.5:x?1:.45),p>62&&(M*=.45),d>5&&(M*=n.softVisibility(s.x,s.y,s.z,m[1][0],m[1][1],m[1][2],i)),l.spotUntil>i&&(M*=1.8),y||(M*=.45),M*=this.d.sight*(1-e.suppression*.4)*(1-e.flashed),M<.02){c&&(c.aw=Math.max(0,c.aw-t*.4));continue}c||(c={x:l.pos.x,y:l.pos.y,z:l.pos.z,t:-99,seenT:-99,aw:0,vis:!1},this.known.set(l,c));let w=i-c.t<4;if(c.aw=Math.min(1.6,c.aw+M*t*(w?9:4.5)),c.aw>=1&&(c.vis=!0,c.x=l.pos.x,c.y=l.pos.y,c.z=l.pos.z,c.t=i,c.seenT=i,c.headOnly=!y,c.bodyOnly=!v,l.spotUntil<i&&d<110&&Math.random()<t*.6&&(l.spotUntil=i+4),e.squad))for(let T of e.squad.members)T!==e&&T.brain&&T.state==="alive"&&T.pos.distanceTo(e.pos)<120&&T.brain.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i-.4)}for(let l of this.game.teams[1-e.team])l.state==="alive"&&l.spotUntil>i&&!this.known.get(l)?.vis&&Math.abs(l.pos.x-e.pos.x)<220&&Math.abs(l.pos.z-e.pos.z)<220&&this.inform(l,l.pos.x,l.pos.y,l.pos.z,!1,i);for(let[l,c]of this.known)(l.state==="dead"||i-c.t>14&&c.aw<.02)&&this.known.delete(l);this.selectTarget(i)}selectTarget(t){let e=this.s,i=null,n=-1e9;for(let[s,a]of this.known){if(!a.vis)continue;let l=120/(e.pos.distanceTo(s.pos)+5);s.state==="downed"&&(l-=30),e.lastAttacker===s&&t-e.lastDamage<3&&(l+=25);let c=s.aimDir(If),h=Ja.subVectors(e.pos,s.pos).normalize();c.dot(h)>.97&&(l+=15),s===this.target&&(l+=12),l>n&&(n=l,i=s)}if(i&&i!==this.target)this.acquire(i,t);else if(!i&&this.target){let s=this.known.get(this.target);(!s||this.target.state==="dead"||t-s.t>10)&&(this.target=null)}}acquire(t,e){let i=this.s,n=this.target;this.target=t;let s=i.pos.distanceTo(t.pos),a=Math.atan2(-(t.pos.x-i.pos.x),-(t.pos.z-i.pos.z)),o=Math.abs(_i(a-i.yaw))/ne,l=this.d.react*q(.8,1.35)*(s>90?1.25:1)*(o>60?1.35:1);n&&n.state==="alive"&&e-(this.known.get(n)?.seenT??-99)<1&&(l*=.6),this.reactT=l;let c=i.gun?Math.max(1,i.gun.stats.zoom):1,h=this.d.err0*q(.6,1.4)*(1+s/(c>=3.5?220:120))*(1+Math.hypot(t.vel.x,t.vel.z)/8)*ne,u=q(0,Math.PI*2);this.errY=Math.cos(u)*h,this.errP=Math.sin(u)*h*.7;let d=i.gun&&(i.gun.stats.type==="sniper"||i.gun.stats.type==="dmr");this.part=Math.random()<this.d.head*(d?1.8:1)?"head":"body",this.burstLeft=0}update(t){let e=this.s,i=this.game.time;if(e.state!=="alive"){e.input.fire=!1;return}if(this.nextPerceive-=t,this.nextPerceive<=0){let d=.16+q(0,.05);this.perceive(d),this.nextPerceive=d}this.nextThink-=t,this.nextThink<=0&&(this.think(i),this.nextThink=this.d.think*q(.8,1.3));let n=e.input;n.fire=!1,n.jump=!1,n.sprint=!1,n.mx=0,n.mz=0,this.wantLean=0;let s=0,a=0,o=!1,l=!0,c=this.target?this.known.get(this.target):null,h=!!(c&&c.vis);switch(this.gadgetTask&&this.runGadgetTask(t,i),this.state){case"combat":[s,a,o,l]=this.combatMove(t,i,c,h);break;case"revive":[s,a,o,l]=this.reviveMove(t,i);break;case"heal":[s,a,o,l]=this.healMove(t,i);break;default:[s,a,o,l]=this.objectiveMove(t,i)}for(let d of this.game.teams[e.team]){if(d===e||d.state!=="alive")continue;let f=e.pos.x-d.pos.x,p=e.pos.z-d.pos.z,x=f*f+p*p;if(x<1.6*1.6&&x>1e-4){let g=Math.sqrt(x);s+=f/g*(1.6-g)*.9,a+=p/g*(1.6-g)*.9}}let u=Math.hypot(s,a);if(this.progressT+=t,this.progressT>1){let d=Math.hypot(e.pos.x-this.lastPos.x,e.pos.z-this.lastPos.z);u>.3&&d<.35&&!e.action?this.stuckT+=this.progressT:this.stuckT=0,this.lastPos.copy(e.pos),this.progressT=0}if(this.stuckT>.9&&(n.jump=!0),this.stuckT>2.5&&(this.path=null,this.cover=null,this.holdSpot=null,this.stuckT=0,s+=q(-1,1),a+=q(-1,1),this.requestRepath()),e.move.hitWall&&u>.3&&Math.random()<t*3&&(n.jump=!0),this.path&&this.pathI<this.path.length&&u>.3){let d=this.game.world.nav,f=d.cellOf(e.pos.x+s/Math.max(u,.01)*.8,e.pos.z+a/Math.max(u,.01)*.8);d.isVault(f)&&(n.jump=!0)}if(this.updateAim(t,i,c,h,s,a,l,o),u>.01){let d=s/Math.max(u,1),f=a/Math.max(u,1),p=e.forward(If),x=e.right(Ja);n.mz=-(d*p.x+f*p.z),n.mx=d*x.x+f*x.z,n.sprint=o&&n.mz<-.6}n.crouch=this.wantStance==="crouch",e.leanTarget=this.wantLean,this.target&&c&&c.vis&&this.target.state!=="dead"&&e.pos.distanceTo(this.target.pos)<1.9&&(!e.gun||e.gun.mag===0||e.reloadT>0||Math.random()<t*2)&&this.game.combat.melee(e),this.wantStance==="prone"&&e.stance!=="prone"&&(n.prone=!0),this.wantStance!=="prone"&&e.stance==="prone"&&!n.crouch&&e.setStance(this.wantStance==="crouch"?"crouch":"stand"),e.swimming&&(n.crouch=!1)}think(t){let e=this.s,i=this.target?this.known.get(this.target):null,n=[...this.known.values()].some(h=>h.vis);e.bleed>0&&!n&&e.actionT<=0&&e.bandages>0&&t-e.lastDamage>1.2?e.isMedic&&e.medkitCd<=0?e.startAction("medkitSelf",1.1):e.bandage():e.isMedic&&e.hp<60&&!n&&e.medkitCd<=0&&e.actionT<=0&&e.startAction("medkitSelf",1.1);let s=e.gun;s&&!n&&s.mag<s.stats.mag*.6&&s.reserve>0&&e.reload(),e.active===1&&e.slots[0].mag+e.slots[0].reserve>0&&!n&&e.switchTo(0),e.active>=2&&!this.gadgetTask&&e.actionT<=0&&e.switchTo(0);let a=t-e.lastDamage<2.5;if(!this.reviveMate&&!a){let h=e.isMedic?50:26,u=null,d=1e9;for(let f of this.game.teams[e.team]){if(f.state!=="downed"||f===e||n&&!f.isPlayer)continue;let p=f.pos.distanceTo(e.pos),x=f.squad===e.squad?h*1.3:h;if(f.isPlayer&&(x=(e.isMedic?95:60)*(f.squad===e.squad?1.3:1)),p>x||f.reviver&&f.reviver!==e&&f.reviver.state==="alive"||f.downedHp<15&&p>15)continue;let g=p*(f.squad===e.squad?.7:1)*(f.isPlayer?.3:1);g<d&&(d=g,u=f)}u&&(this.reviveMate=u,u.reviver=e,this.path=null,this.smokeThrown=!1)}if(this.reviveMate&&this.reviveMate.state!=="downed"&&(this.reviveMate.reviver===e&&(this.reviveMate.reviver=null),this.reviveMate=null,e.reviveProgress=0),e.isMedic&&!n&&!this.reviveMate&&!this.healMate&&e.medkitCd<=0){for(let h of this.game.teams[e.team])if(h!==e&&h.state==="alive"&&(h.hp<65||h.bleed>0)&&h.pos.distanceTo(e.pos)<14){this.healMate=h;break}}this.healMate&&(this.healMate.state!=="alive"||this.healMate.hp>=95&&this.healMate.bleed<=0)&&(this.healMate=null);let o=ja(s),l=i?Math.hypot(i.x-e.pos.x,i.z-e.pos.z):1e9,c=i&&(i.vis&&l<o*1.15||t-i.t<7&&l<Math.min(80,o)||t-e.lastDamage<3);if(this.reviveMate&&(!n||i&&e.pos.distanceTo(this.target.pos)>(this.reviveMate.isPlayer?22:60))?this.state="revive":c?this.state="combat":this.healMate?this.state="heal":this.state="objective",s&&s.mag===0&&s.reserve===0&&e.active===0&&e.switchTo(1),this.gadgetCd-=this.d.think,this.nadeCd-=this.d.think,!this.gadgetTask&&this.gadgetCd<=0&&this.considerGadgets(t,n),this.cover&&this.target){let h=this.target,u=this.cover;!this.game.world.collision.los(u.x,u.y+.95,u.z,h.pos.x,h.pos.y+1.2,h.pos.z)||(this.cover=null)}}considerGadgets(t,e){let i=this.s,n=i.cls,s=i.squad&&i.squad.order,a=s?Math.hypot(s.x-i.pos.x,s.z-i.pos.z):999;if(n==="support"&&!e&&a<40&&i.slots[2].count>0&&Math.random()<.5){let o=this.game.combat.placementSpot(i);if(o){i.slots[2].count--,i.startAction("place",.6,{gid:"ammobox",spot:o}),this.gadgetCd=40;return}}if(n==="support"&&!e&&a<25&&i.slots[3].count>0&&s&&s.type==="defend"&&Math.random()<.4){let o=this.game.combat.placementSpot(i);if(o){i.slots[3].count--,i.startAction("place",.6,{gid:"sandbags",spot:o}),this.gadgetCd=15;return}}if(n==="recon"&&!e&&a<25&&!this.placedClaymore&&i.slots[2].count>0&&s&&(s.type==="defend"||s.ownedByUs)){let o=this.game.combat.placementSpot(i);if(o){i.slots[2].count--,i.startAction("place",.6,{gid:"claymore",spot:o}),this.placedClaymore=!0,this.gadgetCd=30;return}}if((n==="recon"||n==="leader")&&!e&&a>45&&a<140){let o=n==="recon"?"beacon":"rally",l=this.game.combat.placed.find(c=>c.owner===i&&c.type===o);if(!l||Math.hypot(l.x-s.x,l.z-s.z)>160){let c=this.game.combat.placementSpot(i);if(c&&this.game.world.nav.cover[this.game.world.nav.cellOf(c.x,c.z)]>40){i.startAction("place",.6,{gid:o,spot:c}),this.gadgetCd=45;return}}}this.gadgetCd=q(3,7)}objectiveMove(t,e){let i=this.s,n=this.game.squads.objectiveFor(i);this.wantStance="stand";let s=n.x,a=n.z;this.investigate&&e-this.investigate.t<12&&Math.hypot(this.investigate.x-i.pos.x,this.investigate.z-i.pos.z)<70&&this.aggro>.45&&(s=this.investigate.x,a=this.investigate.z,Math.hypot(s-i.pos.x,a-i.pos.z)<6&&(this.investigate=null));let o=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);if(o<n.r*.85&&n.hold){if(this.holdT-=t,!this.holdSpot||this.holdT<=0){let m=this.game.squads.threatPoint(i.team,n),v=this.game.world.nav.findCover(n.x,n.z,{x:m.x,y:m.y+1.4,z:m.z},n.r*.75,{maxTests:22,occupied:(M,S)=>this.game.teams[i.team].some(w=>w!==i&&w.state==="alive"&&w.brain&&w.brain.holdSpot&&Math.hypot(w.brain.holdSpot.x-M,w.brain.holdSpot.z-S)<3)}),y=v.length?v[Math.floor(Math.random()*Math.min(3,v.length))]:null;if(y)this.holdSpot={x:y.x,z:y.z,peek:y.peek};else{let[M,S]=this.game.world.nav.randomWalkableNear(n.x,n.z,n.r*.6);this.holdSpot={x:M,z:S,peek:!0}}this.holdT=q(10,22),this.path=null}if(s=this.holdSpot.x,a=this.holdSpot.z,Math.hypot(s-i.pos.x,a-i.pos.z)<1)return this.wantStance=this.holdSpot.peek&&Math.sin(e*.4+this.ph1)>.2?"stand":"crouch",[0,0,!1,!1]}let[c,h,u]=this.followTo(s,a,t),d=Math.hypot(s-i.pos.x,a-i.pos.z),f=[...this.known.values()].some(g=>e-g.t<6&&Math.hypot(g.x-i.pos.x,g.z-i.pos.z)<80),p=this.target&&this.known.get(this.target)&&this.known.get(this.target).vis,x=d>25&&!f&&!p&&i.hp>35&&!u;return!x&&o<70&&(this.wantStance="stand"),[c,h,x,x||!f]}combatMove(t,e,i,n){let s=this.s,a=this.target;if(!a||!i)return this.state="objective",[0,0,!1,!0];let o=Math.hypot(i.x-s.pos.x,i.z-s.pos.z),l=s.gun,c=Z1[l?l.stats.type:"ar"]||30,h=this.game.world.nav;if(this.wantStance="stand",n){if(this.lostT=0,o>ja(l)*.95){if(this.game.squads.orderType(s)!=="defend"||o<ja(l)*1.5){let E=this.game.squads.objectiveFor(s),_=Math.hypot(E.x-s.pos.x,E.z-s.pos.z),b=_>E.r?E.x:a.pos.x,C=_>E.r?E.z:a.pos.z,[z,L]=this.followTo(b,C,t);return this.wantStance="stand",[z,L,!1,!1]}return this.wantStance="crouch",[0,0,!1,!1]}this.coverSearchT-=t;let f=s.suppression>.25||e-s.lastDamage<1.5;if(!this.cover&&this.coverSearchT<=0&&o>18&&Math.random()<this.d.cover){this.coverSearchT=q(1.5,3);let E={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},_=h.findCover(s.pos.x,s.pos.z,E,f?9:12,{maxTests:20,minThreatDist:10,prefer:o>c*1.5?{x:jt(s.pos.x,a.pos.x,.25),z:jt(s.pos.z,a.pos.z,.25)}:null,occupied:(b,C)=>this.game.teams[s.team].some(z=>z!==s&&z.brain&&z.brain.cover&&Math.hypot(z.brain.cover.x-b,z.brain.cover.z-C)<2)});_.length&&(this.cover=_[0],this.path=null,this.peekT=0)}let p=this.game.squads.objectiveFor(s),x=Math.hypot(p.x-s.pos.x,p.z-s.pos.z),g=this.game.squads.orderType(s)!=="defend";this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1?this.coverTime=(this.coverTime||0)+t:this.cover||(this.coverTime=0);let m=g?5+this.aggro*-2+q(0,4):14;if(this.cover&&this.coverTime>m&&(x>p.r*.8||!g)){let E=g?{x:jt(s.pos.x,p.x,Math.min(1,22/Math.max(x,1))),z:jt(s.pos.z,p.z,Math.min(1,22/Math.max(x,1)))}:{x:s.pos.x+q(-8,8),z:s.pos.z+q(-8,8)},_={x:a.pos.x,y:a.pos.y+1.3,z:a.pos.z},b=h.findCover(E.x,E.z,_,10,{maxTests:18,minThreatDist:8,prefer:E});this.cover=b.length?b[0]:null,this.coverTime=0,this.path=null,!this.cover&&g&&o>25&&(this.advanceT=q(2.5,5))}if(this.advanceT>0){this.advanceT-=t;let[E,_]=this.followTo(p.x,p.z,t);return this.wantStance="stand",[E,_,!1,!1]}if(!this.cover&&g&&o>70&&x>p.r&&Math.random()<t*.5&&(this.advanceT=q(2,4)),this.cover){let E=Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z);if(E>.9){let[_,b]=this.followTo(this.cover.x,this.cover.z,t),C=f&&E>4;return this.wantStance="stand",[_,b,C,C]}if(this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?q(1.4,3.2):q(.6,1.6)+s.suppression*2,!this.peeking&&l&&l.mag<l.stats.mag*.45&&s.reload()),(s.reloadT>0||s.suppression>.75||s.actionT>0)&&(this.peeking=!1),this.cover.peek)this.wantStance=this.peeking?"stand":"crouch";else if(this.cover.lean){if(this.wantStance=this.peeking?"stand":"crouch",this.peeking){let _=s.right(Ja);this.wantLean=this.cover.lean.x*_.x+this.cover.lean.z*_.z>0?1:-1}}else this.wantStance="crouch";return[0,0,!1,!1]}this.strafeT-=t,this.strafeT<=0&&(this.strafeDir=Math.random()<.5?-1:1,this.strafeT=q(.35,.95)/(.4+this.d.strafe*.6),Math.random()<.15*this.d.strafe&&o<25&&(this.crouchSpamT=.35)),this.crouchSpamT>0&&(this.crouchSpamT-=t);let v=(a.pos.x-s.pos.x)/Math.max(o,.1),y=(a.pos.z-s.pos.z)/Math.max(o,.1),M=0,S=0,w=o<60?this.d.strafe:this.d.strafe*.4;M+=-y*this.strafeDir*w,S+=v*this.strafeDir*w,o>c*1.4&&this.aggro>.5?(M+=v*.6,S+=y*.6):o<c*.5&&l&&(l.stats.type==="dmr"||l.stats.type==="sniper")&&(M-=v*.7,S-=y*.7);let T=h.cellOf(s.pos.x+M*1.2,s.pos.z+S*1.2);if((!h.walkable(T)||h.isWater(T))&&(M=-M,S=-S,this.strafeDir*=-1),o>70&&l&&["lmg","dmr","sniper"].includes(l.stats.type)&&s.suppression<.6){let E=a.hitSpheres(),_=this.game.world.collision;return _.los(s.pos.x,s.pos.y+.45,s.pos.z,E[1][0],E[1][1],E[1][2])||_.los(s.pos.x,s.pos.y+.45,s.pos.z,E[0][0],E[0][1],E[0][2])?(this.wantStance="prone",[0,0,!1,!1]):_.los(s.pos.x,s.pos.y+1.1,s.pos.z,E[1][0],E[1][1],E[1][2])?(this.wantStance="crouch",[0,0,!1,!1]):(this.wantStance="stand",[0,0,!1,!1])}return o>40&&Math.random()<.5&&(this.wantStance="crouch"),this.crouchSpamT>0&&(this.wantStance="crouch"),[M,S,!1,!1]}this.lostT=(this.lostT||0)+t;let u=e-i.t;if(l&&l.mag<l.stats.mag*.5&&s.reload(),this.nadeCd<=0&&u<5&&o>10&&o<34&&i.seenT>e-6&&Math.random()<this.d.nade*t*2&&this.throwGrenadeAt(i.x,i.y,i.z),!this.gadgetTask&&u<4&&o>18&&o<110&&Math.random()<t*.6*this.d.nade&&this.tryHeavyAt(i),this.cover&&Math.hypot(this.cover.x-s.pos.x,this.cover.z-s.pos.z)<1&&this.lostT<6){if(this.peekT-=t,this.peekT<=0&&(this.peeking=!this.peeking,this.peekT=this.peeking?q(1.2,2.4):q(.7,1.6)+s.suppression),(s.reloadT>0||s.suppression>.75)&&(this.peeking=!1),this.cover.lean&&this.peeking){let p=s.right(Ja);this.wantLean=this.cover.lean.x*p.x+this.cover.lean.z*p.z>0?1:-1,this.wantStance="stand"}else this.wantStance=this.cover.peek&&this.peeking?"stand":"crouch";return[0,0,!1,!1]}if(this.lostT<1.6)return this.wantStance=Math.random()<.5?"crouch":"stand",[0,0,!1,!1];if((this.aggro>.5||this.game.squads.orderType(s)==="attack"||o<25)&&u<9){this.cover=null;let[f,p,x]=this.followTo(i.x,i.z,t);return x&&(this.known.delete(a),this.target=null),this.wantStance="stand",[f,p,!1,!1]}return this.cover=null,this.objectiveMove(t,e)}reviveMove(t,e){let i=this.s,n=this.reviveMate;if(!n||n.state!=="downed")return this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(!this.smokeThrown&&s<30&&i.slots[4].id==="smoke"&&i.slots[4].count>0&&[...this.known.values()].some(o=>e-o.t<6&&Math.hypot(o.x-n.pos.x,o.z-n.pos.z)<60)&&(this.throwGrenadeAt(n.pos.x+q(-2,2),n.pos.y,n.pos.z+q(-2,2),"smoke"),this.smokeThrown=!0),i.isMedic&&i.slots[3].id==="smoke"&&!this.smokeThrown&&s<25&&i.slots[3].count>0&&[...this.known.values()].some(o=>e-o.t<6)&&(i.slots[3].count--,this.throwGrenadeAt(n.pos.x,n.pos.y,n.pos.z,"smoke",!0),this.smokeThrown=!0),s>1.4){let[a,o]=this.followTo(n.pos.x,n.pos.z,t),l=s>6;return this.wantStance="stand",i.reviveProgress=0,[a,o,l,!0]}return this.wantStance="crouch",this.lookAt(n.pos.x,n.pos.y+.3,n.pos.z,t,300),this.game.reviveTick(i,n,t),[0,0,!1,!1]}healMove(t,e){let i=this.s,n=this.healMate;if(!n||n.state!=="alive")return this.healMate=null,this.state="objective",[0,0,!1,!0];let s=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z);if(s>2.5){let[a,o]=this.followTo(n.pos.x,n.pos.z,t);return[a,o,s>8,!0]}return i.actionT<=0&&i.medkitCd<=0&&(i.startAction("medkitOther",1,{target:n}),this.healMate=null),[0,0,!1,!1]}requestRepath(){this.repathT=0,this.path=null}followTo(t,e,i){let n=this.s,s=Math.hypot(t-n.pos.x,e-n.pos.z);if(s<.8)return[0,0,!0];this.repathT-=i;let a=!this.goal||Math.hypot(this.goal.x-t,this.goal.z-e)>Math.max(3,s*.2);if((!this.path||a||this.repathT<=0)&&!this.pathPending&&(this.goal={x:t,z:e},this.pathPending=!0,this.game.ai.requestPath(this,t,e),this.repathT=q(6,10)),!this.path)return s<12?[(t-n.pos.x)/s,(e-n.pos.z)/s,!1]:[0,0,!1];for(;this.pathI<this.path.length;){let u=this.path[this.pathI],d=Math.hypot(u[0]-n.pos.x,u[1]-n.pos.z),f=this.pathI===this.path.length-1;if(d<(f?.7:n.sprinting?1.6:1.1))this.pathI++;else break}if(this.pathI>=this.path.length)return this.path.partial?(this.path=null,[0,0,!1]):[(t-n.pos.x)/s,(e-n.pos.z)/s,s<1.5];let o=this.path[this.pathI],l=o[0]-n.pos.x,c=o[1]-n.pos.z,h=Math.hypot(l,c)||1;return[l/h,c/h,!1]}onPath(t){this.pathPending=!1,this.path=t,this.pathI=t&&t.length>1?1:0}lookAt(t,e,i,n,s){let a=this.s.eye(Ka),o=t-a.x,l=e-a.y,c=i-a.z,h=Math.atan2(-o,-c),u=Math.atan2(l,Math.hypot(o,c));this.aiYaw=Sr(this.aiYaw,h,s*ne*n),this.aiPitch+=Nt(u-this.aiPitch,-s*ne*n,s*ne*n)}updateAim(t,e,i,n,s,a,o,l){let c=this.s,h=c.pitch-this.lastPitch,u=_i(c.yaw-this.lastYaw);Math.abs(h)<.2&&(this.recoilOff+=h*(1-this.d.comp)),Math.abs(u)<.2&&(this.recoilOffY+=u*(1-this.d.comp)),this.recoilOff*=Math.exp(-t*5),this.recoilOffY*=Math.exp(-t*5);let d=!1;if(this.gadgetTask&&this.gadgetTask.aimYaw!==void 0)this.aiYaw=Sr(this.aiYaw,this.gadgetTask.aimYaw,this.d.turn*ne*t),this.aiPitch+=Nt(this.gadgetTask.aimPitch-this.aiPitch,-this.d.turn*ne*t,this.d.turn*ne*t);else if(n&&this.target&&this.state!=="revive"){let f=this.target,p=c.eye(Ka),x=f.hitSpheres(),g=i.headOnly?"head":i.bodyOnly?"body":this.part,m=g==="head"?x[0]:x[1],v=c.gun,y=v?v.stats.vel*v.stats.velMul:800,M=Math.hypot(m[0]-p.x,m[1]-p.y,m[2]-p.z),S=M/y,w=this.d.lead,T=m[0]+f.vel.x*S*w,E=m[1]+f.vel.y*S*w*.3+.5*9.81*S*S*w,_=m[2]+f.vel.z*S*w,b=T-p.x,C=E-p.y,z=_-p.z,L=Math.atan2(-b,-z),N=Math.atan2(C,Math.hypot(b,z)),O=Math.exp(-t/(this.d.errTau*(v&&v.stats.zoom>=3.5?.7:1)));this.errY*=O,this.errP*=O;let U=Math.hypot(c.vel.x,c.vel.z)>1?1.6:1,X=v?Math.sqrt(Math.max(1,v.stats.zoom)):1,F=this.d.jitter*ne*U*(1+c.suppression*2.2+c.flashed*6)*(1+M/260)/Math.pow(v?Math.max(1,v.stats.zoom):1,.8),B=(Math.sin(e*2.3+this.ph1)+Math.sin(e*5.1+this.ph2)*.5)*F*.6,j=(Math.sin(e*2.9+this.ph2)+Math.sin(e*4.3+this.ph1)*.5)*F*.45,rt=L+this.errY+B,st=N+this.errP+j,_t=Math.abs(_i(rt-this.aiYaw))+Math.abs(st-this.aiPitch),Y=this.d.turn*ne*t*(.25+.75*Math.min(1,_t/(12*ne)));this.aiYaw=Sr(this.aiYaw,rt,Y),this.aiPitch+=Nt(st-this.aiPitch,-Y,Y);let J=this.aiYaw+this.recoilOffY,gt=this.aiPitch+this.recoilOff,it=Math.hypot(_i(J-L),gt-N),xt=g==="head"?.14:.3,vt=v&&v.stats.zoom>=3.5?.07:jt(.35,.13,Nt(M/150,0,1)),Gt=Math.max(vt*ne,Math.atan(xt/Math.max(M,1))*(M<15?2.6:1.5));this.reactT-=t,d=this.reactT<=0&&it<Gt*(this.burstLeft>0?2.2:1)&&M<=ja(v),f.state==="downed"&&[...this.known.values()].filter(nt=>nt.vis).length>1&&(d=!1),this.handleTrigger(t,d,M,e),c.input.ads=!!v&&(M>14||v.stats.type==="sniper"||v.stats.type==="dmr")&&c.reloadT<=0}else{c.input.ads=!1,this.burstLeft=0;let f=null,p=0;if(i&&!n){let x=c.eye(Ka);f=Math.atan2(-(i.x-x.x),-(i.z-x.z)),p=Math.atan2(i.y+1.3-x.y,Math.hypot(i.x-x.x,i.z-x.z))}else if(o&&Math.hypot(s,a)>.2){if(f=Math.atan2(-s,-a),this.glanceT-=t,!l&&this.glanceT<=0){this.glancing=q(.6,1.2),this.glanceT=q(2.5,5);let x=this.game.squads.threatPoint(c.team,this.game.squads.objectiveFor(c));this.glanceYaw=Math.atan2(-(x.x-c.pos.x),-(x.z-c.pos.z))}this.glancing>0&&(this.glancing-=t,Math.abs(_i(this.glanceYaw-f))<1.6&&(f=this.glanceYaw))}else{let x=this.game.squads.objectiveFor(c),g=this.game.squads.threatPoint(c.team,x);f=Math.atan2(-(g.x-c.pos.x),-(g.z-c.pos.z))+Math.sin(e*.35+this.ph1)*.9,p=-.04}f!==null&&(this.aiYaw=Sr(this.aiYaw,f,(l?400:220)*ne*t),this.aiPitch+=Nt(p-this.aiPitch,-2*t,2*t))}c.yaw=this.aiYaw+this.recoilOffY,c.pitch=Nt(this.aiPitch+this.recoilOff,-1.4,1.4),this.lastPitch=c.pitch,this.lastYaw=c.yaw}handleTrigger(t,e,i,n){let s=this.s,a=s.gun;if(!a||s.reloadT>0||s.actionT>0)return;if(a.mag===0){a.reserve>0&&i<14&&s.slots[1].mag>0&&Math.random()<.5?s.switchTo(1):s.reload();return}this.holdFire-=t;let o=a.stats,l=o.modes[a.mode];if(this.burstLeft>0){if(l==="auto"?(s.input.fire=!0,s.fireCd<=1e-4&&this.burstLeft--):s.fireCd<=0&&(s.input.fire=!this.prevFire,this.burstLeft-=s.input.fire?1:0),this.prevFire=s.input.fire,this.burstLeft<=0){let c=i<20?q(.05,.18):i<60?q(.18,.4):q(.3,.65);this.holdFire=c*(1.6-this.d.burst)}return}if(this.prevFire=!1,!(!e||this.holdFire>0))if(l==="auto"){let c=i<20?Math.round(q(6,14)):i<45?Math.round(q(3,7)):i<90?Math.round(q(2,4)):Math.round(q(1,2));this.burstLeft=o.type==="lmg"?c*2:c,s.input.fire=!0}else s.input.fire=!0,this.prevFire=!0,this.burstLeft=0,this.holdFire=o.interval+(i>50?q(.12,.35):q(.03,.12))*(o.bolt?.5:1)}throwGrenadeAt(t,e,i,n,s){let a=this.s,o=s?a.slots[3]:a.slots[4];if(!o||o.count<=0||a.actionT>0)return!1;if(n){if(!s&&o.id!==n)return!1}else{if(o.id!=="frag"&&o.id!=="impact")return!1;n=o.id}let l=a.eye(new R),c=new R(t,e+.3,i),h=Cn.solveBallistic(l,c,17,15);if(h||(h=Cn.solveBallistic(l,c,22,15)),!h)return!1;let u=h.length();return this.game.world.collision.los(l.x,l.y,l.z,l.x+h.x/u*3,l.y+h.y/u*3,l.z+h.z/u*3)?(s||o.count--,a.throwVel=h,a.startAction("throw",.5,{type:n}),this.aiYaw=Math.atan2(-h.x,-h.z),this.nadeCd=q(10,18)/this.d.nade,!0):!1}tryHeavyAt(t){let e=this.s,i=e.slots.findIndex((l,c)=>c>=2&&l&&(l.id==="rpg"||l.id==="m320")&&l.count>0);if(i<0)return!1;let n=e.eye(new R),s=new R(t.x,t.y+1,t.z),a=e.slots[i].id==="rpg",o=Cn.solveBallistic(n,s,a?115:72,a?2.5:9.81);return!o||Math.hypot(t.x-e.pos.x,t.z-e.pos.z)<12?!1:(this.gadgetTask={slot:i,t:0,aimYaw:Math.atan2(-o.x,-o.z),aimPitch:Math.atan2(o.y,Math.hypot(o.x,o.z)),fired:!1},e.switchTo(i),!0)}runGadgetTask(t,e){let i=this.s,n=this.gadgetTask;n.t+=t,!n.fired&&i.switchT<=0&&n.t>.55&&(Math.abs(_i(this.aiYaw-n.aimYaw))<2*ne||n.t>1.6)&&(i.input.ads=!0,i.adsT=1,this.game.combat.useGadget(i,!0,!1),n.fired=!0,n.t=0),n.fired&&n.t>.6&&(this.gadgetTask=null,i.switchTo(0)),n.t>4&&(this.gadgetTask=null,i.switchTo(0))}},tl=class{constructor(t){this.game=t,this.queue=[]}requestPath(t,e,i){this.queue.includes(t)||this.queue.push(t),t._pathGoal=[e,i]}update(){let t=this.game.world.nav;t.processDirty();let e=3;for(;e-- >0&&this.queue.length;){let i=this.queue.shift();if(i.s.state!=="alive"){i.pathPending=!1;continue}let[n,s]=i._pathGoal,a=t.findPath(i.s.pos.x,i.s.pos.z,n,s,{coverBias:.6,maxNodes:3e4,weight:1.45});i.onPath(a)}}clear(){this.queue=[]}};var ri="#4aa8ff",an="#86e05a",pi="#ff4b3a",Rn="#c8c8c8",Gr=new R;function se(r,t,e,i){let n=document.createElement(r);return t&&(n.className=t),i!==void 0&&(n.innerHTML=i),e&&e.appendChild(n),n}var el=class{constructor(t){this.game=t;let e=this.root=se("div","hud",document.getElementById("ui"));this.markers=se("canvas","markers",e),this.mctx=this.markers.getContext("2d"),this.top=se("div","hud-top",e),this.ticketsEl=se("div","tickets",this.top),this.flagsEl=se("div","flagrow",this.top),this.compass=se("canvas","compass",this.top),this.compass.width=520,this.compass.height=30,this.capEl=se("div","capbar",e),this.capEl.innerHTML='<div class="caplabel"></div><div class="captrack"><div class="capfill"></div></div>',this.minimap=se("canvas","minimap",e),this.minimap.width=this.minimap.height=220,this.feed=se("div","killfeed",e),this.squadEl=se("div","squadlist",e),this.vitals=se("div","vitals",e),this.vitals.innerHTML='<div class="hpnum">100</div><div class="hpbar"><div class="hpfill"></div></div><div class="vstat"></div>',this.weaponEl=se("div","weaponbox",e),this.crosshair=se("div","crosshair",e),this.crosshair.innerHTML='<i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-d"></i>',this.hitmarker=se("div","hitmarker",e),this.hitmarker.innerHTML="<i></i><i></i><i></i><i></i>",this.prompt=se("div","prompt",e),this.progress=se("div","progress",e),this.progress.innerHTML="<div></div>",this.toasts=se("div","scoretoasts",e),this.msg=se("div","hudmsg",e),this.scope=se("canvas","scopecv",e),this.scopeCtx=this.scope.getContext("2d"),this.downedEl=se("div","downed",e),this.oob=se("div","oob",e),this.fps=se("div","fps",e),this.flashEl=se("div","flashbang",e),this.banner=se("div","killbanner",e),this.ammoHint=se("div","ammohint",e),this.breathEl=se("div","breath",e),this.breathEl.innerHTML="<span>HOLD BREATH</span><div><i></i></div>",this.order=se("div","orderline",e),this.board=se("div","scoreboard",e),this.bigmap=se("canvas","bigmap",e),this.bigmap.width=this.bigmap.height=760,this.dmg=[],this.hitT=0,this.hitKill=!1,this.feedItems=[],this.toastItems=[],this.giveUp=0,this.fpsAcc=0,this.fpsN=0,this.fpsT=0,this.lastWeaponKey="",this.lastFlagsKey="",this.resize()}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.markers.width=Math.floor(window.innerWidth*t),this.markers.height=Math.floor(window.innerHeight*t),this.dpr=t}setVisible(t){this.root.style.display=t?"":"none"}addKill(t,e,i,n,s){let a=t?t.team===this.game.player.team?t.squad===this.game.player.squad?an:ri:pi:Rn,o=e.team===this.game.player.team?e.squad===this.game.player.squad?an:ri:pi,l=t===this.game.player||e===this.game.player,c=se("div","kf"+(l?" me":""),this.feed,`${t&&t!==e?`<b style="color:${a}">${t.name}</b>`:""} <span class="kfw">${s?"\u25BC ":""}${i||""}${n?" \u2738":""}</span> <b style="color:${o}">${e.name}</b>`);this.feedItems.push({row:c,t:7}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}addRevive(t,e){let i=t.team===this.game.player.team?ri:pi,n=se("div","kf",this.feed,`<b style="color:${i}">${t.name}</b> <span class="kfw" style="color:#7fe07a">\u271A revived</span> <b style="color:${i}">${e.name}</b>`);this.feedItems.push({row:n,t:5}),this.feedItems.length>7&&this.feedItems.shift().row.remove()}scorePopup(t,e){let i=se("div","toast",this.toasts,e?`<b>+${e}</b> ${t}`:t);this.toastItems.push({row:i,t:2.2}),this.toastItems.length>5&&this.toastItems.shift().row.remove()}killBanner(t,e,i){this.banner.innerHTML=`<div class="kb-x">\u2715</div><div class="kb-t">${i?"ENEMY DOWN":"ENEMY KILLED"}${e?" <b>HEADSHOT</b>":""}</div><div class="kb-n">${t}</div>`,this.banner.classList.remove("show"),this.banner.offsetWidth,this.banner.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.banner.classList.remove("show"),2200)}toast(t,e=2.5){this.msg.textContent=t,this.msg.style.opacity=1,this.msgT=e}hit(t,e){this.hitT=.16,this.hitKill=t,this.hitHead=e}damageFrom(t){if(!t)return;let e=this.game.player,i=Math.atan2(-t.x,-t.z)-e.yaw+Math.PI;this.dmg.push({a:i,t:1.4})}update(t){let e=this.game,i=e.player;if(!i)return;this.fpsAcc+=t,this.fpsN++,this.fpsT-=t,this.fpsT<=0&&(this.fps.textContent=e.settings.get("showFps")?`${Math.round(this.fpsN/this.fpsAcc)} FPS`:"",this.fpsAcc=0,this.fpsN=0,this.fpsT=.5);for(let g of[this.feedItems,this.toastItems])for(let m=g.length-1;m>=0;m--)g[m].t-=t,g[m].t<=0?(g[m].row.remove(),g.splice(m,1)):g[m].t<.5&&(g[m].row.style.opacity=g[m].t/.5);this.msgT!==void 0&&(this.msgT-=t,this.msgT<=0&&(this.msg.style.opacity=0)),this.updateTop(),this.updateWeapon(),this.updateVitals(),this.updateSquad(),this.updateCrosshair(t),this.drawMinimap(),this.drawMarkers(t),this.updateCapture();let n=e.playerCtl&&e.playerCtl.isScoped();if(this.scope.style.display=n?"block":"none",n){let g=i.weapon&&i.weapon.id==="binoculars"?"binoc":i.gun&&i.gun.stats.sightId==="scope8"?"scope8":"acog";this.drawScope(g,i,t)}let s=e.playerCtl,a=n&&i.gun&&s;this.breathEl.style.display=a?"block":"none",a&&(this.breathEl.querySelector("i").style.width=`${s.breath*100}%`,this.breathEl.classList.toggle("on",!!s.holding),this.breathEl.querySelector("span").textContent=`HOLD [${me.name("sprint")}] TO STEADY`);let o=i.gun,l="";i.state==="alive"&&o&&i.reloadT<=0&&(o.mag===0&&o.reserve===0?l='<b class="bad">NO AMMO</b> \xB7 find an ammo box or switch weapons':o.mag===0?l=`<b class="bad">RELOAD</b> [${me.name("reload")}]`:o.mag<=Math.ceil(o.stats.mag*.25)&&o.reserve>0&&(l=`LOW AMMO \xB7 [${me.name("reload")}]`)),l!==this._hint&&(this._hint=l,this.ammoHint.innerHTML=l),this.flashEl.style.opacity=Nt(i.flashed*1.4,0,1);let c=e.playerCtl&&e.playerCtl.prompt;this.prompt.textContent=c||"",this.prompt.style.display=c&&i.state==="alive"?"block":"none";let h=i.action&&!["throw","throwC4","reloadGadget","melee"].includes(i.action.name),u=i.reviveProgress>0?i.reviveProgress:h?1-i.actionT/i.actionDur:0;if(this.progress.style.display=u>0&&i.state==="alive"?"block":"none",this.progress.firstChild.style.width=`${u*100}%`,i.state==="downed"){this.downedEl.style.display="block";let g=i.reviver&&i.reviver.state==="alive"&&i.reviver.reviveProgress>0;this.downedEl.innerHTML=`<div class="dt">YOU ARE DOWN</div><div class="ds">${g?`${i.reviver.name} is reviving you\u2026`:"Wait for a teammate to revive you"}</div><div class="dbar"><div style="width:${Nt(i.downedHp,0,100)}%"></div></div><div class="dk">Hold [${me.name("jump")}] to give up ${this.giveUp>0?Math.round(this.giveUp*100)+"%":""}</div>`}else this.downedEl.style.display="none";let d=e.oobTime;this.oob.style.display=d>0?"block":"none",d>0&&(this.oob.innerHTML=`RETURN TO THE BATTLEFIELD<br><b>${Math.ceil(d)}</b>`);let f=i.squad;if(f&&f.order){let g=f.order,m=g.type==="follow"?"FOLLOW SQUAD LEADER":g.type==="move"?"MOVE TO MARKER":`${g.type.toUpperCase()} ${g.flag&&g.flag.id?g.flag.id+" \xB7 "+g.flag.name:""}`;this.order.innerHTML=`<b>${f.name}</b> ${m}${f.leader===i?` <span>[${me.name("spot")}] give orders</span>`:""}`}else this.order.textContent="";e.settings.get("scoreboardMode")==="toggle"?me.hit(e.input,"scoreboard")&&(this.boardOpen=!this.boardOpen):this.boardOpen=me.down(e.input,"scoreboard");let p=this.boardOpen&&!e.uiBlocking();this.board.style.display=p?"block":"none",p&&this.drawBoard(),e.settings.get("mapMode")==="toggle"?me.hit(e.input,"map")&&(this.mapOpen=!this.mapOpen):this.mapOpen=me.down(e.input,"map");let x=this.mapOpen&&!e.uiBlocking();this.bigmap.style.display=x?"block":"none",x&&this.drawMap(this.bigmap,!1)}updateTop(){let t=this.game,e=t.mode,i=t.player,n=i.team,s=1-n,a=e.type==="tdm",o=a?e.kills[n]:e.tickets[n],l=a?e.kills[s]:e.tickets[s],c=Math.max(0,e.timeLimit-e.time),h=Math.floor(c/60),u=Math.floor(c%60),d=o/e.maxTickets,f=l/e.maxTickets,p=`${o}|${l}|${h}|${u}`;p!==this.lastTicketKey&&(this.lastTicketKey=p,this.ticketsEl.innerHTML=`<div class="tk mine"><span>${Ye[n].name}</span><b>${o}</b><div class="tkbar"><div style="width:${d*100}%"></div></div></div><div class="clock">${h}:${String(u).padStart(2,"0")}</div><div class="tk theirs"><b>${l}</b><span>${Ye[s].name}</span><div class="tkbar"><div style="width:${f*100}%"></div></div></div>`);let x=e.flags.map(v=>`${v.id}${v.owner}${Math.round(v.progress*20)}${v.contested?1:0}${v.capTeam}`).join(",");x!==this.lastFlagsKey&&(this.lastFlagsKey=x,this.flagsEl.innerHTML=e.flags.map(v=>{let y=v.owner===-1?"n":v.owner===n?"f":"e",M=Math.abs(v.progress),S=v.progress>0?0:1,w=v.progress===0?Rn:S===n?ri:pi,T=e.type==="frontline"&&!e.capturable(v,n)&&v.owner!==n?" locked":"";return`<div class="flag ${y}${v.contested?" contested":""}${T}" style="--p:${M*100}%;--c:${w}"><span>${v.id}</span></div>`}).join(""));let g=this.compass.getContext("2d");g.clearRect(0,0,520,30);let m=(-i.yaw/ne%360+360)%360;g.font="600 12px Rajdhani, Bahnschrift, sans-serif",g.textAlign="center";for(let v=-100;v<=100;v+=5){let M=(Math.round(m+v)%360+360)%360,S=260+(v-(m-Math.round(m)))*2.5;if(M%15!==0)continue;g.fillStyle="rgba(255,255,255,0.75)";let w={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[M];w?(g.fillStyle=M%90===0?"#ffd76a":"#fff",g.fillText(w,S,13)):(g.fillRect(S-.5,4,1,6),g.fillStyle="rgba(255,255,255,0.5)",g.fillText(String(M),S,22))}for(let v of e.flags){let M=(Math.atan2(v.x-i.pos.x,-(v.z-i.pos.z))/ne-m+540)%360-180;if(Math.abs(M)>100)continue;let S=260+M*2.5;g.fillStyle=v.owner===-1?Rn:v.owner===n?ri:pi,g.fillText(v.id,S,29)}g.fillStyle="#ffd76a",g.fillRect(259,0,2,7)}updateWeapon(){let t=this.game.player,e=t.weapon;if(!e)return;let i="",n="",s="";e.kind==="gun"?(i=e.stats.name,n=`<b>${e.mag}</b><span>/${e.reserve}</span>`,s=e.stats.modes[e.mode].toUpperCase()):(i=e.def.name,n=e.def.count===1/0?"<b>\u221E</b>":`<b>${e.count}</b>`,e.id==="c4"&&t.c4s&&t.c4s.length&&(s=`${t.c4s.length} PLACED \xB7 RMB DETONATE`),(e.id==="rpg"||e.id==="m320")&&!e.loaded&&(s="RELOADING"));let a=t.slots.map((l,c)=>{if(!l)return"";let h=l.kind==="gun"?l.stats.name:l.def.name,u=l.kind==="gun"||l.def.count===1/0?"":`<em>${l.count}</em>`;return`<div class="slot${c===t.active?" on":""}${l.kind==="gadget"&&l.count<=0&&l.def.count!==1/0?" empty":""}"><i>${me.name("slot"+(c+1))}</i>${h}${u}</div>`}).join(""),o=i+n+s+a+t.bandages+(t.reloadT>0);o!==this.lastWeaponKey&&(this.lastWeaponKey=o,this.weaponEl.innerHTML=`<div class="wname">${i}${t.reloadT>0?' <span class="rl">RELOADING</span>':""}</div><div class="ammo">${n}<div class="fmode">${s}</div></div><div class="slots">${a}<div class="slot"><i>${me.name("bandage")}</i>Bandage<em>${t.bandages}</em></div></div>`)}updateVitals(){let t=this.game.player,e=t.state==="alive"?Math.max(0,Math.ceil(t.hp)):0;if(e!==this.lastHp||t.bleed>0!==this.lastBleed||t.stance!==this.lastStance){this.lastHp=e,this.lastBleed=t.bleed>0,this.lastStance=t.stance,this.vitals.querySelector(".hpnum").textContent=e;let i=this.vitals.querySelector(".hpfill");i.style.width=`${e}%`,i.style.background=e<30?"#e8443a":e<60?"#e8b23a":"#e9eef2",this.vitals.querySelector(".vstat").innerHTML=`${t.bleed>0?`<span class="bleed">BLEEDING \xB7 [${me.name("bandage")}] bandage</span>`:""}<span class="stance">${t.stance.toUpperCase()}</span><span class="cls" style="color:${di[t.cls].color}">${di[t.cls].name.toUpperCase()}</span>`}}updateSquad(){let t=this.game.player,e=t.squad;if(!e)return;let i=e.members.map(n=>n.name+n.state+(n===e.leader)+n.cls).join("|");i!==this.lastSquadKey&&(this.lastSquadKey=i,this.squadEl.innerHTML=`<div class="sqname">${e.name} SQUAD</div>`+e.members.map(n=>`<div class="sqm ${n.state}${n===t?" me":""}"><span class="sqc" style="background:${di[n.cls].color}"></span>${n===e.leader?"\u2605 ":""}${n.name}<em>${n.state==="downed"?"DOWN":n.state==="dead"?"KIA":""}</em></div>`).join(""))}updateCrosshair(t){let e=this.game,i=e.player,n=e.settings.get("crosshair")&&i.state==="alive"&&i.adsT<.5&&!i.sprinting&&!e.uiBlocking();if(this.crosshair.style.display=n?"block":"none",n){let s=i.gun?i.spread():1.2,a=e.camera,o=Math.tan(s*.5*ne)/Math.tan(a.fov*.5*ne)*window.innerHeight*.5;this.crosshair.style.setProperty("--gap",`${Nt(o,3,140)}px`)}this.hitT-=t,this.hitmarker.style.opacity=this.hitT>0?1:0,this.hitmarker.className="hitmarker"+(this.hitKill?" kill":"")+(this.hitHead?" head":"")}updateCapture(){let t=this.game,e=t.player,i=null;if(e.state==="alive"){for(let h of t.mode.flags)if(Math.hypot(e.pos.x-h.x,e.pos.z-h.z)<h.r&&Math.abs(e.pos.y-h.y)<14){i=h;break}}if(!i){this.capEl.style.display="none";return}this.capEl.style.display="block";let n=e.team,s=this.capEl.querySelector(".caplabel"),a=i.contested?"CONTESTED":i.capTeam===n?i.owner===-1?"CAPTURING":"NEUTRALIZING":i.capTeam===1-n?"LOSING":i.owner===n?"SECURED":t.mode.capturable(i,n)?"":"LOCKED";s.innerHTML=`<b>${i.id}</b> ${i.name} <span>${a}</span> <i>${i.counts[n]} vs ${i.counts[1-n]}</i>`;let o=this.capEl.querySelector(".capfill"),l=Math.abs(i.progress),c=i.progress>=0?0:1;o.style.width=`${l*100}%`,o.style.background=i.progress===0?Rn:c===n?ri:pi}drawScope(t,e,i){let n=this.scope,s=this.dpr,a=Math.floor(window.innerWidth*s),o=Math.floor(window.innerHeight*s);(n.width!==a||n.height!==o)&&(n.width=a,n.height=o);let l=this.scopeCtx;l.clearRect(0,0,a,o);let c=a/2,h=o/2,u=Math.min(a,o)*(t==="binoc"?.36:.43),d=t==="binoc"?[[c-u*.55,h,u],[c+u*.55,h,u]]:[[c,h,u]];this._sbob=(this._sbob||0)+i*Math.hypot(e.vel.x,e.vel.z)*2.2;let f=Math.min(1,Math.hypot(e.vel.x,e.vel.z)/3),p=(e.swayY*900+Math.sin(this._sbob)*10*f)*s,x=(e.swayP*900+Math.abs(Math.cos(this._sbob))*12*f)*s;l.fillStyle="#050505",l.fillRect(0,0,a,o),l.globalCompositeOperation="destination-out";for(let[v,y,M]of d)l.beginPath(),l.arc(v,y,M,0,7),l.fill();l.globalCompositeOperation="source-over",l.save(),l.beginPath();for(let[v,y,M]of d)l.moveTo(v+M,y),l.arc(v,y,M,0,7);l.clip();for(let[v,y,M]of d){let S=l.createRadialGradient(v+p,y+x,M*.72,v+p,y+x,M*1.08);S.addColorStop(0,"rgba(0,0,0,0)"),S.addColorStop(.7,"rgba(0,0,0,0.55)"),S.addColorStop(1,"rgba(0,0,0,0.98)"),l.fillStyle=S,l.fillRect(v-M,y-M,M*2,M*2);let w=l.createRadialGradient(v,y,0,v,y,M);w.addColorStop(0,"rgba(120,160,200,0.0)"),w.addColorStop(1,"rgba(60,90,130,0.18)"),l.fillStyle=w,l.fillRect(v-M,y-M,M*2,M*2),l.strokeStyle="rgba(255,255,255,0.07)",l.lineWidth=M*.06,l.beginPath(),l.arc(v,y,M*.86,Math.PI*1.08,Math.PI*1.42),l.stroke()}l.restore();let g=s;l.save(),l.beginPath();for(let[v,y,M]of d)l.moveTo(v+M,y),l.arc(v,y,M,0,7);if(l.clip(),l.lineCap="butt",t==="scope8"){l.fillStyle=l.strokeStyle="#0a0a0a";let v=7*g,y=1.4*g,M=u*.42;l.fillRect(c-u,h-v/2,u-M,v),l.fillRect(c+M,h-v/2,u-M,v),l.fillRect(c-v/2,h+M,v,u-M),l.fillRect(c-v/2,h-u,v,u-M),l.fillRect(c-M,h-y/2,M*2,y),l.fillRect(c-y/2,h-M,y,M*2);for(let S=1;S<=5;S++){let w=S*M/5.5;for(let[T,E]of[[w,0],[-w,0],[0,w],[0,-w]])l.beginPath(),l.arc(c+T,h+E,2.4*g,0,7),l.fill()}l.fillStyle="#ff3a2a",l.shadowColor="#ff3a2a",l.shadowBlur=6*g,l.beginPath(),l.arc(c,h,1.8*g,0,7),l.fill(),l.shadowBlur=0}else if(t==="acog"){l.strokeStyle="#0a0a0a",l.lineWidth=1.6*g,l.beginPath(),l.moveTo(c-u,h),l.lineTo(c-u*.22,h),l.moveTo(c+u*.22,h),l.lineTo(c+u,h),l.stroke(),l.beginPath(),l.moveTo(c,h+u*.05),l.lineTo(c,h+u*.55),l.stroke();let v=[[.13,.08,"4"],[.22,.06,"5"],[.31,.045,"6"],[.42,.03,"8"]];l.font=`600 ${11*g}px Rajdhani, sans-serif`,l.fillStyle="#0a0a0a",l.textAlign="left";for(let[y,M,S]of v)l.beginPath(),l.moveTo(c-u*M,h+u*y),l.lineTo(c+u*M,h+u*y),l.stroke(),l.fillText(S,c+u*M+4*g,h+u*y+4*g);l.strokeStyle="#ff4a26",l.shadowColor="#ff4a26",l.shadowBlur=8*g,l.lineWidth=3*g,l.lineJoin="miter",l.beginPath(),l.moveTo(c-u*.045,h+u*.05),l.lineTo(c,h),l.lineTo(c+u*.045,h+u*.05),l.stroke(),l.shadowBlur=0}else{l.strokeStyle="rgba(10,10,10,0.85)",l.lineWidth=1.4*g,l.fillStyle="rgba(10,10,10,0.85)",l.beginPath(),l.moveTo(c-u*.6,h),l.lineTo(c+u*.6,h),l.stroke();for(let v=-6;v<=6;v++){let y=c+v*u*.1;l.beginPath(),l.moveTo(y,h-(v%2?4:9)*g),l.lineTo(y,h),l.stroke()}l.beginPath(),l.moveTo(c,h-u*.12),l.lineTo(c,h+u*.12),l.stroke(),l.font=`600 ${11*g}px Rajdhani, sans-serif`,l.textAlign="center",l.fillText("SPOT [LMB]",c,h+u*.3)}l.restore();let m=Math.min(1,Math.max(0,(e.adsT-.9)/.1));n.style.opacity=m}worldToMap(t,e,i){let n=this.game.world.terrain.half;return[(t+n)/(n*2)*i,(e+n)/(n*2)*i]}drawMinimap(){let t=this.game,e=t.player,i=this.minimap.getContext("2d"),n=220,s=110,a=t.world.mapImage,o=t.world.terrain.half,l=170,c=s/l;i.save(),i.clearRect(0,0,n,n),i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.clip(),i.fillStyle="#1a1f22",i.fillRect(0,0,n,n),i.translate(s,s),i.rotate(e.yaw);let h=a.width/(o*2);i.globalAlpha=.92,i.drawImage(a,(-o-e.pos.x)*c,(-o-e.pos.z)*c,o*2*c,o*2*c),i.globalAlpha=1;let u=(d,f)=>[(d-e.pos.x)*c,(f-e.pos.z)*c];for(let d of t.mode.flags){let[f,p]=u(d.x,d.z);i.strokeStyle=d.owner===-1?Rn:d.owner===e.team?ri:pi,i.lineWidth=2,i.globalAlpha=.5,i.beginPath(),i.arc(f,p,d.r*c,0,Math.PI*2),i.stroke(),i.globalAlpha=1}this.drawUnits(i,u,e,3.2,l),i.restore(),i.save(),i.translate(s,s);for(let d of t.mode.flags){let[f,p]=u(d.x,d.z),x=Math.cos(e.yaw),g=Math.sin(e.yaw),m=f*x-p*g,v=f*g+p*x,y=Math.hypot(m,v);y>s-12&&(m*=(s-12)/y,v*=(s-12)/y),i.fillStyle="rgba(0,0,0,0.6)",i.beginPath(),i.arc(m,v,8,0,7),i.fill(),i.fillStyle=d.owner===-1?Rn:d.owner===e.team?ri:pi,i.font="bold 11px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(d.id,m,v+1)}i.fillStyle="#ffd76a",i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(0,3),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore(),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=2,i.beginPath(),i.arc(s,s,s-2,0,Math.PI*2),i.stroke()}drawUnits(t,e,i,n,s){let a=this.game,o=a.time;for(let c of a.soldiers){if(c===i||c.state==="dead")continue;let h=c.team===i.team;if(!(h||c.spotUntil>o||o-c.lastLoudShot<1.2&&c.pos.distanceTo(i.pos)<160))continue;let[d,f]=e(c.pos.x,c.pos.z);if(!(s&&Math.hypot(d,f)>1e9)){if(t.fillStyle=h?c.squad===i.squad?an:ri:pi,c.state==="downed"){t.fillRect(d-n,f-1,n*2,2),t.fillRect(d-1,f-n,2,n*2);continue}t.save(),t.translate(d,f),t.rotate(-c.yaw),t.beginPath(),t.moveTo(0,-n*1.4),t.lineTo(n,n),t.lineTo(-n,n),t.closePath(),t.fill(),t.restore()}}for(let c of a.combat.placed){if(c.team!==i.team||c.type!=="rally"&&c.type!=="beacon"||c.squad!==i.squad)continue;let[h,u]=e(c.x,c.z);t.fillStyle=c.type==="rally"?"#f0e070":"#30ff80",t.fillRect(h-3,u-3,6,6)}let l=i.squad;if(l&&l.order&&l.order.type==="move"){let[c,h]=e(l.order.x,l.order.z);t.strokeStyle=an,t.lineWidth=2,t.beginPath(),t.arc(c,h,5,0,7),t.stroke()}}drawMap(t,e,i,n){let s=this.game,a=s.player,o=t.getContext("2d"),l=t.width;o.clearRect(0,0,l,l),o.drawImage(s.world.mapImage,0,0,l,l);let c=s.world.terrain.half,h=(g,m)=>[(g+c)/(c*2)*l,(m+c)/(c*2)*l],u=s.world.def.playHalf,[d,f]=h(-u,-u),[p,x]=h(u,u);o.strokeStyle="rgba(255,80,60,0.6)",o.setLineDash([8,6]),o.lineWidth=2,o.strokeRect(d,f,p-d,x-f),o.setLineDash([]),s.world.def.hq.forEach((g,m)=>{let[v,y]=h(g.x,g.z);o.fillStyle=m===a.team?ri:pi,o.globalAlpha=.25,o.beginPath(),o.arc(v,y,g.r/(c*2)*l,0,7),o.fill(),o.globalAlpha=1,o.font="bold 14px Rajdhani",o.textAlign="center",o.fillText("HQ",v,y+5)});for(let g of s.mode.flags){let[m,v]=h(g.x,g.z),y=g.owner===-1?Rn:g.owner===a.team?ri:pi;o.fillStyle="rgba(0,0,0,0.55)",o.beginPath(),o.arc(m,v,16,0,7),o.fill(),o.strokeStyle=y,o.lineWidth=3,o.beginPath(),o.arc(m,v,16,0,7),o.stroke(),o.fillStyle=y,o.font="bold 18px Rajdhani",o.textAlign="center",o.textBaseline="middle",o.fillText(g.id,m,v+1),o.font="600 12px Rajdhani",o.fillStyle="#fff",o.fillText(g.name,m,v+28)}if(o.textBaseline="alphabetic",(a.state!=="dead"||!e)&&this.drawUnits(o,h,a,4,0),a.state!=="dead"){let[g,m]=h(a.pos.x,a.pos.z);o.save(),o.translate(g,m),o.rotate(-a.yaw),o.fillStyle="#ffd76a",o.beginPath(),o.moveTo(0,-9),o.lineTo(6,7),o.lineTo(-6,7),o.closePath(),o.fill(),o.restore()}if(i)for(let g of i){let[m,v]=h(g.x,g.z),y=n===g;o.fillStyle=y?"#ffd76a":g.kind==="squad"?an:g.kind==="rally"?"#f0e070":g.kind==="beacon"?"#30ff80":ri,o.strokeStyle="#000",o.lineWidth=2;let M=y?11:8;o.beginPath(),o.moveTo(m,v-M),o.lineTo(m+M,v),o.lineTo(m,v+M),o.lineTo(m-M,v),o.closePath(),o.fill(),o.stroke(),(y||g.kind!=="flag")&&(o.font="bold 12px Rajdhani",o.fillStyle="#fff",o.textAlign="center",o.fillText(g.label,m,v-M-5)),g._mx=m,g._my=v}}drawMarkers(t){let e=this.game,i=e.player,n=this.mctx,s=e.camera,a=this.markers.width,o=this.markers.height,l=this.dpr;n.clearRect(0,0,a,o);for(let p=this.dmg.length-1;p>=0;p--){let x=this.dmg[p];if(x.t-=t,x.t<=0){this.dmg.splice(p,1);continue}n.save(),n.translate(a/2,o/2),n.rotate(-x.a),n.strokeStyle=`rgba(255,50,40,${Math.min(1,x.t)})`,n.lineWidth=6*l,n.beginPath(),n.arc(0,0,90*l,-Math.PI/2-.25,-Math.PI/2+.25),n.stroke(),n.restore()}if(e.uiBlocking()&&i.state==="dead")return;let c=(p,x,g)=>(Gr.set(p,x,g).applyMatrix4(s.matrixWorldInverse),Gr.z>-.2?null:(Gr.applyMatrix4(s.projectionMatrix),[(Gr.x*.5+.5)*a,(-Gr.y*.5+.5)*o])),h=(p,x)=>[Nt(p,30*l,a-30*l),Nt(x,30*l,o-30*l)];n.textAlign="center",n.textBaseline="middle";for(let p of e.mode.flags){let x=c(p.x,p.y+7,p.z),g=p.owner===-1?Rn:p.owner===i.team?ri:pi,m=Math.hypot(p.x-i.pos.x,p.z-i.pos.z);if(!x)continue;let[v,y]=h(x[0],x[1]),M=i.squad&&i.squad.order&&i.squad.order.flag===p;n.globalAlpha=m<p.r?.5:.95,n.fillStyle="rgba(0,0,0,0.5)",n.beginPath(),n.arc(v,y,13*l,0,7),n.fill(),n.strokeStyle=g,n.lineWidth=2.5*l,n.beginPath(),n.arc(v,y,13*l,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.abs(p.progress)),n.stroke(),n.fillStyle=g,n.font=`bold ${15*l}px Rajdhani, sans-serif`,n.fillText(p.id,v,y+1*l),n.font=`600 ${11*l}px Rajdhani, sans-serif`,n.fillStyle="#fff",n.fillText(`${Math.round(m)}m`,v,y+22*l),M&&(n.fillStyle=an,n.fillText(i.squad.order.type.toUpperCase(),v,y-22*l)),n.globalAlpha=1}let u=i.squad;if(u&&u.order&&u.order.type==="move"){let p=c(u.order.x,e.world.terrain.heightAt(u.order.x,u.order.z)+2,u.order.z);p&&(n.strokeStyle=an,n.lineWidth=2*l,n.beginPath(),n.arc(p[0],p[1],8*l,0,7),n.stroke(),n.fillStyle=an,n.font=`600 ${11*l}px Rajdhani`,n.fillText("MOVE",p[0],p[1]-16*l))}let d=e.time,f=e.settings.get("nameTags");for(let p of e.soldiers){if(p===i||p.state==="dead")continue;let x=p.pos.distanceTo(s.position);if(p.team===i.team){let g=p.squad===i.squad;if(p.state==="downed"&&x<90){let v=c(p.pos.x,p.pos.y+1,p.pos.z);if(v){n.fillStyle="#ff5a4a";let y=7*l;n.fillRect(v[0]-y,v[1]-y*.33,y*2,y*.66),n.fillRect(v[0]-y*.33,v[1]-y,y*.66,y*2),n.font=`600 ${10*l}px Rajdhani`,n.fillStyle="#fff",n.fillText(`${Math.round(x)}m`,v[0],v[1]+14*l)}continue}if(!f||x>(g?250:45))continue;let m=c(p.pos.x,p.pos.y+p.bodyH+.5,p.pos.z);if(!m)continue;n.fillStyle=g?an:ri,n.globalAlpha=Nt(1.3-x/(g?250:45),.35,.95),n.beginPath(),n.moveTo(m[0]-5*l,m[1]-4*l),n.lineTo(m[0]+5*l,m[1]-4*l),n.lineTo(m[0],m[1]+3*l),n.closePath(),n.fill(),x<30&&(n.font=`600 ${11*l}px Rajdhani`,n.fillText(p.name,m[0],m[1]-12*l)),n.globalAlpha=1}else if(p.spotUntil>d&&p.state==="alive"){let g=c(p.pos.x,p.pos.y+p.bodyH+.45,p.pos.z);if(!g)continue;let m=5*l;n.fillStyle=pi,n.beginPath(),n.moveTo(g[0],g[1]-m),n.lineTo(g[0]+m,g[1]),n.lineTo(g[0],g[1]+m),n.lineTo(g[0]-m,g[1]),n.closePath(),n.fill()}}for(let p of e.combat.projectiles){if(!["frag","impact","launcher","flash"].includes(p.type))continue;let x=Math.hypot(p.x-i.pos.x,p.y-i.pos.y,p.z-i.pos.z);if(x>12||i.state==="dead")continue;let g=c(p.x,p.y+.3,p.z),m=.6+.4*Math.sin(d*18);if(!g){let M=Math.atan2(p.x-i.pos.x,-(p.z-i.pos.z))+i.yaw;g=[a/2+Math.sin(M)*140*l,o/2-Math.cos(M)*140*l]}let[v,y]=h(g[0],g[1]);n.globalAlpha=m,n.fillStyle="rgba(0,0,0,0.55)",n.beginPath(),n.arc(v,y,15*l,0,7),n.fill(),n.strokeStyle="#ff5a3a",n.lineWidth=2.5*l,n.beginPath(),n.arc(v,y,15*l,0,7),n.stroke(),n.fillStyle="#ff5a3a",n.beginPath(),n.arc(v,y+2*l,6*l,0,7),n.fill(),n.fillRect(v-2*l,y-9*l,4*l,6*l),n.font=`700 ${10*l}px Rajdhani, sans-serif`,n.fillText(`${x.toFixed(0)}m`,v,y+26*l),n.globalAlpha=1}for(let p of e.combat.placed){if(p.team!==i.team||p.squad!==i.squad||p.type!=="rally"&&p.type!=="beacon")continue;let x=c(p.x,p.y+1.5,p.z);x&&(n.fillStyle=p.type==="rally"?"#f0e070":"#30ff80",n.font=`bold ${11*l}px Rajdhani`,n.fillText(p.type==="rally"?"\u25B2 RALLY":"\u25B2 BEACON",x[0],x[1]))}if(i.state==="alive"&&i.gun&&i.gun.stats.laser&&i.adsT<.6){let p=i.eye(new R),x=i.aimDir(new R),g=e.world.collision.raycast(p.x,p.y,p.z,x.x,x.y,x.z,60,{});if(g){let m=c(g.x,g.y,g.z);m&&(n.fillStyle="rgba(255,40,40,0.9)",n.beginPath(),n.arc(m[0],m[1],2.5*l,0,7),n.fill())}}}drawBoard(){let t=this.game,e=t.player,i=n=>{let s=t.teams[n].slice().sort((o,l)=>l.stats.score-o.stats.score),a=t.mode.type==="tdm";return`<div class="sbteam t${n===e.team?"f":"e"}"><div class="sbh"><b>${Ye[n].name}</b><span>${a?t.mode.kills[n]+" kills":t.mode.tickets[n]+" tickets"}</span></div>
        <table><tr><th></th><th>Name</th><th>Squad</th><th>K</th><th>D</th><th>A</th><th>Rev</th><th>Score</th></tr>
        ${s.map(o=>`<tr class="${o===e?"me":""} ${o.state}"><td><i style="background:${di[o.cls].color}"></i></td><td>${o.squad&&o.squad.leader===o?"\u2605 ":""}${o.name}</td><td>${o.squad?o.squad.name:""}</td><td>${o.stats.kills}</td><td>${o.stats.deaths}</td><td>${o.stats.assists}</td><td>${o.stats.revives}</td><td>${o.stats.score}</td></tr>`).join("")}</table></div>`};this.board.innerHTML=`<div class="sbtitle">${t.world.def.name} \xB7 ${t.modeName}</div><div class="sbcols">${i(e.team)}${i(1-e.team)}</div>`}dispose(){this.root.remove()}};var K1=["Viper","Hawk","Nomad","Rook","Bishop","Ghost","Mako","Jester","Reaper","Kodiak","Talon","Sable","Ranger","Wolf","Cobra","Bravo","Atlas","Raven","Moose","Hound","Diesel","Patch","Tank","Specter","Flint","Drifter","Saint","Gunny","Sarge","Ace","Blaze","Ox","Lynx","Falcon","Orca","Shadow","Grizzly","Rocco","Duke","Ziggy","Bear","Fox","Scout","Hammer","Ice","Kilo","Mustang","Pyro","Rex","Titan","Wasp","Yeti","Zulu","Cricket","Doc","Smokey","Tex","Chief","Boomer","Echo","Pilot","Sparks","Crow","Tusk"],zf=[["leader","medic","assault","support"],["leader","assault","engineer","medic"],["leader","support","recon","assault"],["leader","medic","engineer","assault"]],Lf={morning:{sat:1.1,contrast:1.06,lift:[.01,.012,.02],gamma:[1,1,1],gain:[1.03,1,.96]},noon:{sat:1.06,contrast:1.05,lift:[0,0,.01],gamma:[1,1,1],gain:[1,1,.98]},afternoon:{sat:1.04,contrast:1.07,lift:[.015,.01,0],gamma:[1,1,1],gain:[1.05,1,.9]},dusk:{sat:1.12,contrast:1.08,lift:[.02,0,.02],gamma:[1,1,1],gain:[1.08,.96,.88]},overcast:{sat:.9,contrast:1.08,lift:[.01,.012,.016],gamma:[1,1,1],gain:[.98,1,1.03]},snow:{sat:.9,contrast:1.05,lift:[0,.01,.02],gamma:[1,1,1],gain:[.98,1,1.04]},night:{sat:.85,contrast:1.05,lift:[0,.01,.03],gamma:[1,1,1.05],gain:[.92,.98,1.1]}},il=class{constructor(t,e){this.app=t,this.config=e,this.renderer=t.renderer,this.settings=t.settings,this.audio=t.audio,this.input=t.input,this.menus=t.menus,this.time=0,this.frame=0,this.paused=!1,this.soldiers=[],this.teams=[[],[]],this.oobTime=0,this.respawnAt=0,this.lastDeath=null,this.ended=!1}async init(t){let e=this.config,i=fa[e.map];this.def=i,of(),af();let n=this.scene=new Bi,s=window.innerWidth,a=window.innerHeight;this.camera=new _e(70,s/a,.06,this.settings.get("viewDistance")),n.add(this.camera),this.vmScene=new Bi,this.vmCamera=new _e(64,s/a,.01,10),this.vmScene.add(new sn(14543103,5261374,1.1)),this.vmLight=new bi(16777215,1.6),this.vmScene.add(this.vmLight),this.env=new La(this.renderer,n,this.camera,this.settings);let o=e.time==="default"?i.time:e.time;this.timeName=o,t("Lighting the sky",.02),this.world=new Ia(i,n),await this.world.build(t),this.env.setTime(o),this.vmLight.color.copy(this.env.sun.color).multiplyScalar(this.env.time.night?.6:1),this.vmScene.environment=this.env.envMap,this.vmScene.environmentIntensity=.6,t("Spawning soldiers",.95),this.water=this.world.terrain.waterLevel!==null?new ka(this.world,n,this.env):null,this.grass=new Da(this.world,n),this.fx=new qa(this),this.combat=new Cn(this),this.mode=new pa(this,e.mode,e.tickets?{tickets:e.tickets}:{}),this.modeName=Ws[e.mode].name,this.ai=new tl(this),this.squads=new Xa(this),this.createSoldiers(),this.post=new Ga(this.renderer,n,this.camera,this.vmScene,this.vmCamera,this.settings),this.post.hidden=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]],this.water&&(this.water.hideList=[...this.fx.hidden]),this.post.setGrade(Lf[o]||Lf.morning),this.hud=new el(this),this.playerCtl=new Za(this,this.player),this.applySettings(),this.unsub=l=>this.applySettings(l),this.settings.onChange(this.unsub),this.audio.startAmbience(i.biome,this.env.time.night);for(let l of this.soldiers)l.isPlayer||(l.respawnAt=q(0,2.5));return this.respawnAt=0,this.player.state="dead",this.deployCam={a:0},this}createSoldiers(){let t=this.config.team??0,e=K1.slice().sort(()=>Math.random()-.5),i=0;for(let n=0;n<2;n++)for(let s=0;s<4;s++)for(let a=0;a<4;a++){let o=n===t&&s===0&&a===3,l=zf[(s+n)%zf.length][a],c=new $a(this,n,o?this.config.name:e[i++%e.length],o);c.setLoadout(o?JSON.parse(JSON.stringify(this.menus.loadout)):xa(l)),o||(c.brain=new Qa(c,this)),c.state="dead",c.respawnAt=0,this.soldiers.push(c),this.teams[n].push(c),o&&(this.player=c)}this.squads.build(this.teams,4);for(let n of this.squads.list[t])n.members.includes(this.player)&&(this.playerSquad=n)}applySettings(t){let e=this.settings;if(this.env.applySettings(),this.post.applySettings(),this.grass.setLevel(e.get("grass")),this.grass.mesh?this.post.hidden=[...this.fx.hidden,this.grass.mesh]:this.post.hidden=[...this.fx.hidden],this.water&&(this.water.setQuality(e.get("waterReflections"),e.get("waterWaves")),this.water.hideList=[...this.fx.hidden,...this.grass.mesh?[this.grass.mesh]:[]]),this.world.vegetation.setWind(e.get("treeWind")),this.fx.setQuality(e),this.camera.far=e.get("viewDistance"),this.camera.updateProjectionMatrix(),this.audio.setVolume(e.get("volume")),t==="difficulty")for(let i of this.soldiers)i.brain&&i.brain.setDifficulty(e.get("difficulty"));if(t==="enemyOutline"||t===void 0)for(let i of this.soldiers)i.rig&&i.rig.outlined&&(i.rig.outlineOn=e.get("enemyOutline"),i.rig._olv=null);(t==="renderScale"||t==="antialias"||t===void 0)&&this.app.resize()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.vmCamera.aspect=t/e,this.vmCamera.updateProjectionMatrix();let i=this.renderer.getDrawingBufferSize(new lt);this.post.setSize(i.x,i.y),this.hud.resize()}uiBlocking(){return this.paused||this.player.state==="dead"||this.ended}spawnOptions(t){let e=[],i=t.team,n=this.def.hq[i];e.push({kind:"hq",key:"hq",label:"HQ",x:n.x,z:n.z});for(let s of this.mode.flagSpawns(i))e.push({kind:"flag",key:"flag"+s.id,label:`${s.id} \xB7 ${s.name}`,x:s.x,z:s.z,flag:s});if(t.squad){for(let s of t.squad.members)s===t||s.state!=="alive"||!this.safeToSpawnOn(s)||e.push({kind:"squad",key:"sq"+s.id,label:`${s===t.squad.leader?"\u2605 ":""}${s.name}`,x:s.pos.x,z:s.pos.z,mate:s});for(let s of this.combat.placed)(s.type==="rally"||s.type==="beacon")&&s.squad===t.squad&&!s.blocked&&e.push({kind:s.type,key:s.type+s.owner.id,label:s.type==="rally"?"Rally point":"Spawn beacon",x:s.x,z:s.z,placed:s})}return e}safeToSpawnOn(t){if(this.time-t.lastDamage<6||t.swimming||t.vault)return!1;for(let e of this.teams[1-t.team])if(e.state==="alive"&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<22)return!1;if(t.brain){for(let[,e]of t.brain.known)if(e.vis)return!1}return!0}resolveSpawn(t,e){let i=this.world.nav,n=this.teams[1-e].filter(d=>d.state==="alive"),s=(d,f)=>{let p=1e9;for(let x of n)p=Math.min(p,Math.hypot(x.pos.x-d,x.pos.z-f));return p},a,o,l,c,h=(d,f)=>Math.atan2(-(d-a),-(f-o)),u=this.mode.flags.length?this.mode.flags.reduce((d,f)=>({x:d.x+f.x/this.mode.flags.length,z:d.z+f.z/this.mode.flags.length}),{x:0,z:0}):{x:0,z:0};if(t.kind==="squad"&&t.mate&&t.mate.state==="alive"){let d=t.mate,f=d.forward(new R),p=[[d.pos.x-f.x*1.6,d.pos.z-f.z*1.6],[d.pos.x+1.2,d.pos.z],[d.pos.x-1.2,d.pos.z],[d.pos.x,d.pos.z+1.2]];for(let[x,g]of p){let m=this.world.collision.groundAt(x,g,d.pos.y+.6);if(Math.abs(m-d.pos.y)<.6&&!this.world.collision.overlapsAny(x,m+.05,g,.3,1.7)){a=x,o=g,l=m;break}}a===void 0&&(a=d.pos.x,o=d.pos.z,l=d.pos.y),c=d.yaw}else{let d=t.kind==="hq"?Math.min(20,this.def.hq[e].r*.6):t.kind==="flag"?t.flag.r*.8:4,f=null,p=-1,x=this.def.playHalf-6;for(let g=0;g<14;g++){let[m,v,y]=i.randomWalkableNear(t.x,t.z,d);if(Math.abs(m)>x||Math.abs(v)>x){if(g<13)continue;m=Math.max(-x,Math.min(x,m)),v=Math.max(-x,Math.min(x,v))}let M=s(m,v)+Math.random()*5;M>p&&(p=M,f=[m,v,y])}[a,o,l]=f,l=this.world.collision.groundAt(a,o,l+1),c=h(u.x,u.z)}return{x:a,y:l,z:o,yaw:c}}deployPlayer(t,e){let i=this.player;if(i.squad)if(t.cls==="leader"){let s=i.squad.leader;i.squad.leader=i,s&&s!==i&&s.loadout.cls==="leader"&&s.setLoadout(xa("assault")),(!i.squad.order||i.squad.order.type!=="follow")&&this.squads.setOrder(i.squad,"follow",null,0,0)}else i.squad.leader===i&&(this.squads.pickLeader(i.squad),i.squad.leader===i&&(i.squad.leader=i.squad.members.find(s=>s!==i)||i),i.squad.order&&i.squad.order.type==="follow"&&(i.squad.order=null));i.setLoadout(t);let n=this.resolveSpawn(e,i.team);i.spawn(n.x,n.y,n.z,n.yaw),this.playerCtl.vmKey=null,this.playerCtl.crouchToggle=!1,this.menus.hideAll(),this.hud.setVisible(!0),this.app.lockPointer(),this.audio.play2d("deploy",{vol:.4}),this.oobTime=0}botSpawn(t){let e=t.squad,i=[],n=e&&e.leader,s=e&&e.order;if(n&&n!==t&&n.state==="alive"&&this.safeToSpawnOn(n)&&Math.random()<.65&&i.push({kind:"squad",mate:n,x:n.pos.x,z:n.pos.z}),!i.length&&e){let o=this.combat.placed.find(l=>(l.type==="rally"||l.type==="beacon")&&l.squad===e&&!l.blocked);o&&Math.random()<.8&&i.push({kind:"rally",x:o.x,z:o.z})}if(!i.length&&e&&Math.random()<.35){let o=e.members.filter(l=>l!==t&&l.state==="alive"&&this.safeToSpawnOn(l));if(o.length){let l=o[Math.floor(Math.random()*o.length)];i.push({kind:"squad",mate:l,x:l.pos.x,z:l.pos.z})}}if(!i.length){let o=this.mode.flagSpawns(t.team);if(o.length&&s){let l=null,c=1e9;for(let u of o){let d=Math.hypot(u.x-s.x,u.z-s.z);d<c&&(c=d,l=u)}let h=this.def.hq[t.team];l&&c<Math.hypot(h.x-s.x,h.z-s.z)+30&&i.push({kind:"flag",flag:l,x:l.x,z:l.z})}}if(!i.length){let o=this.def.hq[t.team];i.push({kind:"hq",x:o.x,z:o.z})}let a=this.resolveSpawn(i[0],t.team);Math.random()<.15&&t.squad&&t.squad.leader!==t?t.setLoadout(xa(t.cls)):t.setLoadout(t.loadout),t.spawn(a.x,a.y,a.z,a.yaw),t.brain.reset()}onShot(t,e){let i=e.stats,n=t===this.player,s=n&&t.vmMuzzle?t.vmMuzzle:t.muzzleWorld(new R),a=t.aimDir(new R);(!n||!this.playerCtl.isScoped())&&this.fx.muzzle(s.x,s.y,s.z,a.x,a.y,a.z,i.type==="lmg"||i.type==="sniper"?1.3:i.type==="pistol"||i.type==="smg"?.7:1,i.noFlash,n),this.audio.gunshot(i.suppressed?"suppressed":i.sound,t.pos.x,t.pos.y+1.5,t.pos.z,i.suppressed,n),n&&i.bolt&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5}),350),n&&i.pump&&setTimeout(()=>this.audio.play2d("bolt",{vol:.5,rate:.8}),250);let o=i.suppressed?25:i.type==="sniper"||i.type==="lmg"?320:220;for(let l of this.teams[1-t.team])!l.brain||l.state!=="alive"||Math.abs(l.pos.x-t.pos.x)>o||Math.abs(l.pos.z-t.pos.z)>o||l.pos.distanceTo(t.pos)<o&&l.brain.onSound(t.pos.x,t.pos.z,t,!0)}onFootstep(t,e){let i=this.audio.listener;if(Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<40){let a=t.move.onTerrain,o=t.inWater?"stepWater":a?"stepGrass":"stepHard";t.isPlayer?this.audio.play2d(o,{vol:.16*e+.05,vary:.2}):this.audio.play3d(o,t.pos.x,t.pos.y,t.pos.z,{vol:.5*e,maxDist:30,ref:3,vary:.2})}let s=9+e*10;for(let a of this.teams[1-t.team])a.brain&&a.state==="alive"&&a.pos.distanceTo(t.pos)<s&&a.brain.onSound(t.pos.x,t.pos.z,t,!1)}onVault(t){t.isPlayer&&this.audio.play2d("stepHard",{vol:.35,rate:.7})}onReloadSound(t,e){t.isPlayer?this.audio.play2d(e,{vol:.5}):this.audio.play3d(e,t.pos.x,t.pos.y+1.2,t.pos.z,{vol:.5,maxDist:18})}onDryFire(t){t.isPlayer&&this.audio.play2d("dry",{vol:.5})}onSwitch(t){t.isPlayer&&this.audio.play2d("switch",{vol:.35})}onBandage(t){t.isPlayer&&this.audio.play2d("bandage",{vol:.5})}onGrenadeThrown(){}onGadgetFired(){}onSpawnPointPlaced(t){t.squad===this.player.squad&&this.hud.toast(`${t.owner.name} placed a ${t.type==="rally"?"rally point":"spawn beacon"}`)}onDamaged(t,e,i,n,s){t.brain&&t.brain.onDamaged(e,s),t===this.player&&(this.hud.damageFrom(s),this.audio.play2d("hurt",{vol:.5}),this.dmgFlash=Math.min(1,(this.dmgFlash||0)+i/50),t.pitch+=.012*Math.min(3,i/15),this.fx.shake(Math.min(.3,i/120)))}onHit(t,e,i,n,s){if(t!==this.player)return;let a=e.state!=="alive"&&s;this.hud.hit(a,n==="head"),this.settings.get("hitmarkerSound")&&this.audio.play2d(n==="head"?"headshot":"hit",{vol:n==="head"?.35:.45})}creditKill(t,e,i,n){if(!(!t||t===e||t.team===e.team)){t.stats.kills++,this.addScore(t,100,"ENEMY DOWN"),n&&this.addScore(t,25,"HEADSHOT");for(let s of this.mode.flags)if(Math.hypot(e.pos.x-s.x,e.pos.z-s.z)<s.r*1.5){this.addScore(t,25,s.owner===t.team?"FLAG DEFEND":"FLAG ATTACK");break}for(let[s,a]of e.damagers)s!==t&&s.team!==e.team&&a>=20&&(s.stats.assists++,this.addScore(s,50,"ASSIST"));t===this.player&&(this.audio.play2d("kill",{vol:.4}),this.hud.killBanner(e.name,n,e.state==="downed"))}}onDowned(t,e,i,n){this.hud.addKill(e,t,i,n,!0),this.creditKill(e,t,i,n),t.downCredited=!0,t===this.player&&(this.playerCtl.giveUpT=0,this.audio.play2d("heartbeat",{vol:.6}))}onKilled(t,e,i,n,s){if(s?e&&t.lastAttacker&&e!==t&&i!=="Bled out"&&i!=="Gave up"&&i!=="Redeploy"&&this.hud.addKill(e,t,i,n,!1):(this.hud.addKill(e,t,i,n,!1),this.creditKill(e,t,i,n)),this.mode.onDeath(t.team),e&&e.team!==t.team&&this.mode.type==="tdm"&&this.mode.onKill(e.team),t.reviver&&(t.reviver=null),t.downCredited=!1,t.respawnAt=this.time+(t.isPlayer?7:q(7,10)),t===this.player){let a=e&&e!==t?e:null;this.lastDeath={killer:a?a.name:null,weapon:i,head:n,dist:a?a.pos.distanceTo(t.pos):0},this.respawnAt=this.time+(i==="Redeploy"?1:7),this.deathT=0,this.deathPos=t.pos.clone(),this.killerRef=a,this.app.unlockPointer(),setTimeout(()=>{this.player.state==="dead"&&!this.ended&&this.menus.showDeploy(this)},i==="Redeploy"?50:1800)}}onRevived(t,e){e&&(e.stats.revives++,this.addScore(e,75,"REVIVE"),this.hud.addRevive(e,t)),t.reviver=null,t===this.player&&this.hud.toast(`Revived by ${e?e.name:"a teammate"}`)}reviveTick(t,e,i){if(e.state!=="downed"||t.state!=="alive"){t.reviveProgress=0;return}e.reviver=t,t.reviveProgress+=i/(t.isMedic?1.8:4.5),t.reviveProgress>=1&&(t.reviveProgress=0,e.revive(t))}onFlagEvent(t,e,i,n){let s=this.player,a=i===s.team;if(e==="captured"){this.hud.toast(`${a?"We captured":"Enemy captured"} ${t.id} \xB7 ${t.name}`,3),this.audio.play2d(a?"capture":"lost",{vol:.5});for(let o of this.teams[i])o.state==="alive"&&Math.hypot(o.pos.x-t.x,o.pos.z-t.z)<t.r&&(o.stats.caps++,this.addScore(o,150,"FLAG CAPTURED"))}else if(e==="neutralized"){n===s.team&&(this.hud.toast(`We lost ${t.id} \xB7 ${t.name}`,3),this.audio.play2d("lost",{vol:.4}));for(let o of this.teams[i])o.state==="alive"&&Math.hypot(o.pos.x-t.x,o.pos.z-t.z)<t.r&&this.addScore(o,75,"FLAG NEUTRALIZED")}}onMatchEnd(t){this.ended=!0,this.app.unlockPointer(),setTimeout(()=>{this.hud.setVisible(!1),this.menus.showEnd(this,t)},2500)}addScore(t,e,i){t.stats.score+=e,t===this.player&&this.hud.scorePopup(i,e)}update(t){if(this.paused)return;this.time+=t,this.frame++,Vi.uTime.value+=t;let e=this.player;this.playerCtl.update(t);for(let i of this.soldiers){if(i.state==="dead"){!i.isPlayer&&this.time>=i.respawnAt&&!this.ended&&this.botSpawn(i),i.updateVitals(t,this.time);continue}if(i.brain&&i.brain.update(t),i.state==="alive"){let n=t>.034?2:1;for(let s=0;s<n;s++)i.updateMovement(t/n);i.updateWeapon(t,this.time)}else i.state==="downed"&&(i.vel.x*=.8,i.vel.z*=.8,i.vel.y-=20*t,this.world.collision.move(i.pos,i.vel,t,.3,.6,.3,i.move));i.updateVitals(t,this.time),this.checkBounds(i,t)}this.combat.update(t),this.mode.update(t),this.squads.update(t),this.ai.update(),this.def.weather==="snow"&&this.updateSnow(t),this.fx.update(t),this.world.updateFlags(this.mode,this.time);for(let i of this.soldiers)i.updateAnim(t,this.camera.position);this.updateCamera(t),this.dmgFlash=Math.max(0,(this.dmgFlash||0)-t*1.5),this.ended||(this.hud.update(t),e.state==="dead"&&this.menus.updateDeploy(this))}updateSnow(t){let e=this.camera.position,i=this.fx;for(this.snowAcc=(this.snowAcc||0)+t*120*i.q;this.snowAcc>=1;){this.snowAcc-=1;let n=e.x+(Math.random()-.5)*50,s=e.z+(Math.random()-.5)*50;i.smoke.emit(n,e.y+6+Math.random()*10,s,.7+Math.random()*.4,-1.6-Math.random()*.6,.3,6.5,.07,.07,[1,1,1,.9],[1,1,1,.85],0,0,1)}}simulate(t,e=1/30){let i=Math.round(t/e);for(let n=0;n<i;n++)this.update(e)}checkBounds(t,e){let i=this.def.playHalf,n=this.def.hq[1-t.team],s=Math.abs(t.pos.x)>i||Math.abs(t.pos.z)>i||Math.hypot(t.pos.x-n.x,t.pos.z-n.z)<n.r;t===this.player?s&&t.state==="alive"?(this.oobTime<=0&&(this.oobTime=10),this.oobTime-=e,this.oobTime<=.01&&(this.oobTime=0,t.die(null,"Deserted",!1,!1))):this.oobTime=0:s&&t.state==="alive"?(t.oob=(t.oob||0)+e,t.oob>12&&(t.oob=0,t.die(null,"Deserted",!1,!1))):t.oob=0}updateCamera(t){let e=this.player,i=this.camera;if(e.state!=="dead"){this.playerCtl.updateCamera(t),this.audio.setListener(i.position.x,i.position.y,i.position.z,-Math.sin(e.yaw),-Math.cos(e.yaw));return}if(this.deathT=(this.deathT||0)+t,this.deathT<1.8&&this.deathPos){let n=this.killerRef,s=n?n.pos:this.deathPos,a=this.deathPos.clone().add(new R(0,2.5+this.deathT*1.5,0));i.position.lerp(a,1-Math.exp(-t*4)),i.lookAt(s.x,s.y+1.2,s.z)}else{let n=this.menus.selectedSpawn,s=n?new R(n.x,this.world.terrain.heightAt(n.x,n.z),n.z):new R(0,0,0);this.deployCam.a+=t*.08;let a=70,o=new R(s.x+Math.cos(this.deployCam.a)*a,s.y+55,s.z+Math.sin(this.deployCam.a)*a);this.deployCamInit||(i.position.copy(o),this.deployCamInit=!0),i.position.lerp(o,1-Math.exp(-t*1.5)),i.lookAt(s)}i.fov=60,i.updateProjectionMatrix(),i.updateMatrixWorld(),this.playerCtl.vmRoot.visible=!1,this.audio.setListener(i.position.x,i.position.y,i.position.z,0,-1)}render(t){let e=this.camera;if(this.env.update(e.position),this.grass.update(e.position),this.frame%30===0&&this.fx.setLighting(this.env),this.water){this.water.update(this.env);let a=this.renderer.getDrawingBufferSize(new lt);this.water.renderReflection(this.renderer,this.scene,e,a.x,a.y)}let i=this.player,n=60;if(i.state==="alive"&&i.adsT>.3){let a=i.eye(new R),o=i.aimDir(new R),l=this.world.collision.raycast(a.x,a.y,a.z,o.x,o.y,o.z,300,{});n=l?l.t:300}let s=this.playerCtl.isScoped();this.post.render(t,{damage:Nt(this.dmgFlash||0,0,1)*.8+(i.state==="alive"&&i.hp<35?(35-i.hp)/35*.5:0),suppress:i.state==="alive"?i.suppression:0,flash:i.flashed>.6?(i.flashed-.6)*2.5:0,downed:i.state==="downed"?.6+.4*(1-i.downedHp/100):0,ads:i.state==="alive"&&!s?i.adsT*(i.gun&&i.gun.stats.zoom>1.2?1:.6):0,focus:n,menu:i.state==="dead"&&this.deathT>1.8||this.paused||this.ended})}dispose(){this.audio.stopAmbience(),this.hud.dispose(),this.playerCtl.dispose(),this.env.dispose(),this.post.composer.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.settings.listeners=this.settings.listeners.filter(t=>t!==this.unsub)}};var jh=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new zs({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=Yn,this.renderer.outputColorSpace=Ee,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ah,this.settings=la,this.audio=new ca,this.input=new ha(this.canvas),this.params=new URLSearchParams(location.search),this.params.get("test")&&(this.input.allowUnlocked=!0),this.params.get("preset")&&la.set("preset",this.params.get("preset")),this.menus=new Ea(this),this.matchConfig={map:this.params.get("map")||"greenhollow",mode:this.params.get("mode")||"conquest",time:this.params.get("time")||"default",team:0,tickets:0,name:"You"},this.game=null,this.last=performance.now(),window.addEventListener("resize",()=>this.resize());let t=()=>this.audio.unlock();window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),this.input.onLockChange=e=>{e||(this.lastUnlock=performance.now()),!e&&this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&!this.input.allowUnlocked&&this.pause()},window.addEventListener("keydown",e=>{e.code!=="Escape"||!this.game||this.game.ended||performance.now()-(this.lastUnlock||0)<400||(this.game.paused?this.resume():this.game.player.state!=="dead"&&this.pause())}),this.canvas.addEventListener("click",()=>{this.game&&!this.game.paused&&!this.game.ended&&this.game.player.state!=="dead"&&this.lockPointer()}),this.resize(),this.menus.showMain(),requestAnimationFrame(e=>this.loop(e)),this.params.get("autostart")&&this.startMatch().then(()=>{this.params.get("autodeploy")&&setTimeout(()=>this.autoDeploy(),300)})}autoDeploy(){let t=this.game;t&&(this.menus.showDeploy(t),t.respawnAt=0,this.menus.updateDeploy(t),this.menus.tryDeploy())}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2)*la.get("renderScale");this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.game&&this.game.resize(t,e)}lockPointer(){this.input.allowUnlocked||this.input.lock()}unlockPointer(){this.input.unlock()}async startMatch(){this.audio.unlock(),this.game&&(this.game.dispose(),this.game=null),this.menus.showLoading("Preparing",0);let t=Object.assign({},this.matchConfig),e=new il(this,t);try{await e.init((i,n)=>this.menus.showLoading(i,n))}catch(i){throw console.error(i),this.menus.showLoading("Failed to load: "+i.message,0),i}this.game=e,window.__fireline={app:this,game:e},this.resize(),this.menus.hideAll(),this.menus.showDeploy(e),this.last=performance.now()}quitMatch(){this.game&&(this.game.dispose(),this.game=null),this.unlockPointer(),this.menus.showMain()}pause(){this.game&&(this.game.paused=!0,this.unlockPointer(),this.menus.showPause(this.game))}resume(){this.game&&(this.game.paused=!1,this.menus.hideAll(),this.game.player.state==="dead"?this.menus.showDeploy(this.game):this.lockPointer())}loop(t){if(requestAnimationFrame(n=>this.loop(n)),this.halt){this.last=t;return}let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.05);let i=this.game;if(i)try{i.update(e),i.render(e)}catch(n){console.error(n),this.showError(n)}else{if(!this.showcase)try{this.showcase=new Sa(this.renderer)}catch(s){console.error(s),this.showcase=!1}let n=this.menus.screens.loading&&this.menus.screens.loading.style.display!=="none";this.showcase&&!n?this.showcase.render(e,window.innerWidth,window.innerHeight):(this.renderer.setClearColor(724498,1),this.renderer.clear())}this.input.endFrame()}showError(t){if(this.errShown)return;this.errShown=!0;let e=document.createElement("div");e.className="errbox",e.textContent="Error: "+(t&&t.message?t.message:t),document.body.appendChild(e)}};window.addEventListener("DOMContentLoaded",()=>{window.fireline=new jh});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
