(()=>{var yc="170";var Td=0,oh=1,Ad=2;var vu=1,_c=2,Kn=3,Si=0,Se=1,$e=2,Fn=0,_i=1,Ze=2,ah=3,lh=4,Rd=5,Gi=100,Cd=101,Pd=102,Id=103,Ld=104,Dd=200,Ud=201,Nd=202,Fd=203,el=204,nl=205,kd=206,Od=207,Bd=208,zd=209,Hd=210,Vd=211,Gd=212,Wd=213,Xd=214,il=0,sl=1,rl=2,ws=3,ol=4,al=5,ll=6,cl=7,yu=0,qd=1,Yd=2,Mi=0,Mc=1,bc=2,Sc=3,_r=4,$d=5,Ec=6,wc=7;var _u=300,Ts=301,As=302,hl=303,ul=304,Ho=306,Ei=1e3,Xi=1001,dl=1002,hn=1003,Zd=1004;var Ur=1005;var Un=1006,Ma=1007;var qi=1008;var ei=1009,Mu=1010,bu=1011,ur=1012,Tc=1013,Yi=1014,Nn=1015,un=1016,Ac=1017,Rc=1018,Rs=1020,Su=35902,Eu=1021,wu=1022,Tn=1023,Tu=1024,Au=1025,bs=1026,Cs=1027,Cc=1028,Pc=1029,Ru=1030,Ic=1031;var Lc=1033,ho=33776,uo=33777,fo=33778,po=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,vl=37492,yl=37496,_l=37808,Ml=37809,bl=37810,Sl=37811,El=37812,wl=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,mo=36492,Ul=36494,Nl=36495,Cu=36283,Fl=36284,kl=36285,Ol=36286;var go=2300,Bl=2301,ba=2302,ch=2400,hh=2401,uh=2402;var Jd=3200,Kd=3201;var Pu=0,Qd=1,vi="",Be="srgb",Bs="srgb-linear",Vo="linear",se="srgb";var ns=7680;var dh=519,jd=512,tf=513,ef=514,Iu=515,nf=516,sf=517,rf=518,of=519,zl=35044,Ai=35048;var fh="300 es",jn=2e3,xo=2001,wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sa=Math.PI/180,Hl=180/Math.PI;function bi(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[o&255]+Xe[o>>8&255]+Xe[o>>16&255]+Xe[o>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function je(o,t,e){return Math.max(t,Math.min(e,o))}function af(o,t){return(o%t+t)%t}function Ea(o,t,e){return(1-e)*o+e*t}function Dn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function oe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var ht=class o{constructor(t=0,e=0){o.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class o{constructor(t,e,n,i,s,r,a,l,c){o.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],y=i[1],M=i[4],_=i[7],A=i[2],T=i[5],C=i[8];return s[0]=r*x+a*y+l*A,s[3]=r*g+a*M+l*T,s[6]=r*p+a*_+l*C,s[1]=c*x+h*y+u*A,s[4]=c*g+h*M+u*T,s[7]=c*p+h*_+u*C,s[2]=d*x+f*y+m*A,s[5]=d*g+f*M+m*T,s[8]=d*p+f*_+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new Ut;function Lu(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function vo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function lf(){let o=vo("canvas");return o.style.display="block",o}var ph={};function lr(o){o in ph||(ph[o]=!0,console.warn(o))}function cf(o,t,e){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function hf(o){let t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uf(o){let t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(o,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(o.r=ti(o.r),o.g=ti(o.g),o.b=ti(o.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(o.r=Ss(o.r),o.g=Ss(o.g),o.b=Ss(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vi?Vo:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,e){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function ti(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var mh=[.64,.33,.3,.6,.15,.06],gh=[.2126,.7152,.0722],xh=[.3127,.329],vh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Bs]:{primaries:mh,whitePoint:xh,transfer:Vo,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:gh,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:mh,whitePoint:xh,transfer:se,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:gh,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var is,Vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=vo("canvas")),is.width=t.width,is.height=t.height;let n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ti(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},df=0,yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ta(i[r].image)):s.push(Ta(i[r]))}else s=Ta(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ta(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vl.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ff=0,sn=class o extends wi{constructor(t=o.DEFAULT_IMAGE,e=o.DEFAULT_MAPPING,n=Xi,i=Xi,s=Un,r=qi,a=Tn,l=ei,c=o.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=bi(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=_u;sn.DEFAULT_ANISOTROPY=1;var ae=class o{constructor(t=0,e=0,n=0,i=1){o.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(f+1)/2,A=(p+1)/2,T=(h+d)/4,C=(u+x)/4,I=(m+g)/4;return M>_&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=C/n):_>A?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=T/i,s=I/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=I/s),this.set(n,i,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gl=class extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends Gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_o=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var he=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[r+0],f=s[r+1],m=s[r+2],x=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),T=Math.atan2(A,p*y);g=Math.sin(g*T)/A,a=Math.sin(a*T)/A}let _=a*y;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class o{constructor(t=0,e=0,n=0){o.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new v,_h=new he,ni=class{constructor(t=new v(1/0,1/0,1/0),e=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Sn):Sn.fromBufferAttribute(s,r),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Fr.subVectors(this.max,Ks),ss.subVectors(t.a,Ks),rs.subVectors(t.b,Ks),os.subVectors(t.c,Ks),di.subVectors(rs,ss),fi.subVectors(os,rs),Fi.subVectors(ss,os);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Fi.z,Fi.y,di.z,0,-di.x,fi.z,0,-fi.x,Fi.z,0,-Fi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Fi.y,Fi.x,0];return!Ra(e,ss,rs,os,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,ss,rs,os,Fr))?!1:(kr.crossVectors(di,fi),e=[kr.x,kr.y,kr.z],Ra(e,ss,rs,os,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new v,new v,new v,new v,new v,new v,new v,new v],Sn=new v,Nr=new ni,ss=new v,rs=new v,os=new v,di=new v,fi=new v,Fi=new v,Ks=new v,Fr=new v,kr=new v,ki=new v;function Ra(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ki.fromArray(o,s);let a=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pf=new ni,Qs=new v,Ca=new v,ii=class{constructor(t=new v,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Ca)),this.expandByPoint(Qs.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new v,Pa=new v,Or=new v,pi=new v,Ia=new v,Br=new v,La=new v,dr=class{constructor(t=new v,e=new v(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Pa);let s=t.distanceTo(e)*.5,r=-this.direction.dot(Or),a=pi.dot(this.direction),l=-pi.dot(Or),c=pi.lengthSq(),h=Math.abs(1-r*r),u,d,f,m;if(h>0)if(u=r*l-a,d=r*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pa).addScaledVector(Or,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){Ia.subVectors(e,t),Br.subVectors(n,t),La.crossVectors(Ia,Br);let r=this.direction.dot(La),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;pi.subVectors(this.origin,t);let l=a*this.direction.dot(Br.crossVectors(pi,Br));if(l<0)return null;let c=a*this.direction.dot(Ia.cross(pi));if(c<0||l+c>r)return null;let h=-a*pi.dot(La);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class o{constructor(t,e,n,i,s,r,a,l,c,h,u,d,f,m,x,g){o.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,i,s,r,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new o().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),s=1/as.setFromMatrixColumn(t,1).length(),r=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*h,f=r*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let d=r*h,f=r*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let d=r*l,f=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=r*l,f=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){let i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),mi.crossVectors(n,ln),mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),mi.crossVectors(n,ln)),mi.normalize(),zr.crossVectors(ln,mi),i[0]=mi.x,i[4]=zr.x,i[8]=ln.x,i[1]=mi.y,i[5]=zr.y,i[9]=ln.y,i[2]=mi.z,i[6]=zr.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],_=n[11],A=n[15],T=i[0],C=i[4],I=i[8],w=i[12],S=i[1],L=i[5],P=i[9],k=i[13],B=i[2],X=i[6],W=i[10],Q=i[14],V=i[3],it=i[7],dt=i[11],St=i[15];return s[0]=r*T+a*S+l*B+c*V,s[4]=r*C+a*L+l*X+c*it,s[8]=r*I+a*P+l*W+c*dt,s[12]=r*w+a*k+l*Q+c*St,s[1]=h*T+u*S+d*B+f*V,s[5]=h*C+u*L+d*X+f*it,s[9]=h*I+u*P+d*W+f*dt,s[13]=h*w+u*k+d*Q+f*St,s[2]=m*T+x*S+g*B+p*V,s[6]=m*C+x*L+g*X+p*it,s[10]=m*I+x*P+g*W+p*dt,s[14]=m*w+x*k+g*Q+p*St,s[3]=y*T+M*S+_*B+A*V,s[7]=y*C+M*L+_*X+A*it,s[11]=y*I+M*P+_*W+A*dt,s[15]=y*w+M*k+_*Q+A*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+g*(+e*c*u-e*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*r*u-n*r*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,M=m*d*c-h*g*c-m*l*f+r*g*f+h*l*p-r*d*p,_=h*x*c-m*u*c+m*a*f-r*x*f-h*a*p+r*u*p,A=m*u*l-h*x*l-m*a*d+r*x*d+h*a*g-r*u*g,T=e*y+n*M+i*_+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=y*C,t[1]=(x*d*s-u*g*s-x*i*f+n*g*f+u*i*p-n*d*p)*C,t[2]=(a*g*s-x*l*s+x*i*c-n*g*c-a*i*p+n*l*p)*C,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*C,t[4]=M*C,t[5]=(h*g*s-m*d*s+m*i*f-e*g*f-h*i*p+e*d*p)*C,t[6]=(m*l*s-r*g*s-m*i*c+e*g*c+r*i*p-e*l*p)*C,t[7]=(r*d*s-h*l*s+h*i*c-e*d*c-r*i*f+e*l*f)*C,t[8]=_*C,t[9]=(m*u*s-h*x*s-m*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(r*x*s-m*a*s+m*n*c-e*x*c-r*n*p+e*a*p)*C,t[11]=(h*a*s-r*u*s-h*n*c+e*u*c+r*n*f-e*a*f)*C,t[12]=A*C,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*C,t[14]=(m*a*i-r*x*i-m*n*l+e*x*l+r*n*g-e*a*g)*C,t[15]=(r*u*i-h*a*i+h*n*l-e*u*l-r*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,m=s*u,x=r*h,g=r*u,p=a*u,y=l*c,M=l*h,_=l*u,A=n.x,T=n.y,C=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+_)*A,i[2]=(m-M)*A,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(m+M)*C,i[9]=(g-y)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=as.set(i[0],i[1],i[2]).length(),r=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);let c=1/s,h=1/r,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=jn){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===jn)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===xo)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=jn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-s),d=(e+t)*c,f=(n+i)*h,m,x;if(a===jn)m=(r+s)*u,x=-2*u;else if(a===xo)m=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new v,En=new Jt,mf=new v(0,0,0),gf=new v(1,1,1),mi=new v,zr=new v,ln=new v,Mh=new Jt,bh=new he,Ne=class o{constructor(t=0,e=0,n=0,i=o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ne.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,Sh=new v,ls=new he,$n=new Jt,Hr=new v,js=new v,vf=new v,yf=new he,Eh=new v(1,0,0),wh=new v(0,1,0),Th=new v(0,0,1),Ah={type:"added"},_f={type:"removed"},cs={type:"childadded",child:null},Da={type:"childremoved",child:null},Fe=class o extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o.DEFAULT_UP.clone();let t=new v,e=new Ne,n=new he,i=new v(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ut}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=o.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Th,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(js,Hr,this.up):$n.lookAt(Hr,js,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ls.setFromRotationMatrix($n),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Fe.DEFAULT_UP=new v(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new v,Zn=new v,Ua=new v,Jn=new v,hs=new v,us=new v,Rh=new v,Na=new v,Fa=new v,ka=new v,Oa=new ae,Ba=new ae,za=new ae,yi=class o{constructor(t=new v,e=new v,n=new v){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wn.subVectors(i,e),Zn.subVectors(n,e),Ua.subVectors(t,e);let r=wn.dot(wn),a=wn.dot(Zn),l=wn.dot(Ua),c=Zn.dot(Zn),h=Zn.dot(Ua),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(r*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(r,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,r){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),za.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Oa,s.x),r.addScaledVector(Ba,s.y),r.addScaledVector(za,s.z),r}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Zn.subVectors(t,e),wn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return o.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return o.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return o.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return o.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return o.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;hs.subVectors(i,n),us.subVectors(s,n),Na.subVectors(t,n);let l=hs.dot(Na),c=us.dot(Na);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,i);let h=hs.dot(Fa),u=us.dot(Fa);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(hs,r);ka.subVectors(t,s);let f=hs.dot(ka),m=us.dot(ka);if(m>=0&&f<=m)return e.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(us,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Rh.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Rh,a);let p=1/(g+x+d);return r=x*p,a=d*p,e.copy(n).addScaledVector(hs,r).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Ha(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=af(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ha(r,s,t+1/3),this.g=Ha(r,s,t),this.b=Ha(r,s,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Wt.fromWorkingColorSpace(qe.copy(this),t),Math.round(je(qe.r*255,0,255))*65536+Math.round(je(qe.g*255,0,255))*256+Math.round(je(qe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,s=qe.b,r=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Be){Wt.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Vr);let n=Ea(gi.h,Vr.h,e),i=Ea(gi.s,Vr.s,e),s=Ea(gi.l,Vr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new et;et.NAMES=Du;var Mf=0,kn=class extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=bi(),this.name="",this.blending=_i,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=nl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let a in s){let l=s[a];delete l.metadata,r.push(l)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qt=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new v,Gr=new ht,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}};var bo=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var So=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},bf=0,xn=new Jt,Va=new Fe,ds=new v,cn=new ni,tr=new ni,Ue=new v,ue=class o extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?So:bo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(cn.min,tr.min),cn.expandByPoint(Ue),Ue.addVectors(cn.max,tr.max),cn.expandByPoint(Ue)):(cn.expandByPoint(tr.min),cn.expandByPoint(tr.max))}cn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Ue.add(ds)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new v,l[I]=new v;let c=new v,h=new v,u=new v,d=new ht,f=new ht,m=new ht,x=new v,g=new v;function p(I,w,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(x),a[w].add(x),a[S].add(x),l[I].add(g),l[w].add(g),l[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,w=y.length;I<w;++I){let S=y[I],L=S.start,P=S.count;for(let k=L,B=L+P;k<B;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new v,_=new v,A=new v,T=new v;function C(I){A.fromBufferAttribute(i,I),T.copy(A);let w=a[I];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),_.crossVectors(T,w);let L=_.dot(l[I])<0?-1:1;r.setXYZW(I,M.x,M.y,M.z,L)}for(let I=0,w=y.length;I<w;++I){let S=y[I],L=S.start,P=S.count;for(let k=L,B=L+P;k<B;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new v,s=new v,r=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new o,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ch=new Jt,Oi=new dr,Wr=new ii,Ph=new v,Xr=new v,qr=new v,Yr=new v,Ga=new v,$r=new v,Ih=new v,Zr=new v,ut=class extends Fe{constructor(t=new ue,e=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Ga.fromBufferAttribute(u,t),r?$r.addScaledVector(Ga,h):$r.addScaledVector(Ga.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Oi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Wr,Ph)===null||Oi.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ch.copy(s).invert(),Oi.copy(t.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=M;_<A;_+=3){let T=a.getX(_),C=a.getX(_+1),I=a.getX(_+2);i=Jr(this,p,t,n,c,h,u,T,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);i=Jr(this,r,t,n,c,h,u,y,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=M;_<A;_+=3){let T=_,C=_+1,I=_+2;i=Jr(this,p,t,n,c,h,u,T,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,M=g+1,_=g+2;i=Jr(this,r,t,n,c,h,u,y,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Sf(o,t,e,n,i,s,r,a){let l;if(t.side===Se?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Si,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(Zr);return c<e.near||c>e.far?null:{distance:c,point:Zr.clone(),object:o}}function Jr(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,Xr),o.getVertexPosition(l,qr),o.getVertexPosition(c,Yr);let h=Sf(o,t,e,n,Xr,qr,Yr,Ih);if(h){let u=new v;yi.getBarycoord(Ih,Xr,qr,Yr,u),i&&(h.uv=yi.getInterpolatedAttribute(i,a,l,c,u,new ht)),s&&(h.uv1=yi.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.normal=yi.getInterpolatedAttribute(r,a,l,c,u,new v),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new v,materialIndex:0};yi.getNormal(Xr,qr,Yr,d.normal),h.face=d,h.barycoord=u}return h}var ye=class o extends ue{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function m(x,g,p,y,M,_,A,T,C,I,w){let S=_/C,L=A/I,P=_/2,k=A/2,B=T/2,X=C+1,W=I+1,Q=0,V=0,it=new v;for(let dt=0;dt<W;dt++){let St=dt*L-k;for(let Ht=0;Ht<X;Ht++){let ce=Ht*S-P;it[x]=ce*y,it[g]=St*M,it[p]=B,c.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ht/C),u.push(1-dt/I),Q+=1}}for(let dt=0;dt<I;dt++)for(let St=0;St<C;St++){let Ht=d+St+X*dt,ce=d+St+X*(dt+1),Y=d+(St+1)+X*(dt+1),tt=d+(St+1)+X*dt;l.push(Ht,ce,tt),l.push(ce,Y,tt),V+=6}a.addGroup(f,V,w),f+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ps(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(o){let t={};for(let e=0;e<o.length;e++){let n=Ps(o[e]);for(let i in n)t[i]=n[i]}return t}function Ef(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Uu(o){let t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Ri={clone:Ps,merge:Qe},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Eo=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new v,Lh=new ht,Dh=new ht,Ye=class extends Eo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Dh),e.subVectors(Dh,Lh)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,Xl=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ye(fs,ps,t,e);i.layers=this.layers,this.add(i);let s=new Ye(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new Ye(fs,ps,t,e);r.layers=this.layers,this.add(r);let a=new Ye(fs,ps,t,e);a.layers=this.layers,this.add(a);let l=new Ye(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new Ye(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wo=class extends sn{constructor(t,e,n,i,s,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ql=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ye(5,5,5),s=new me({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Fn});s.uniforms.tEquirect.value=e;let r=new ut(i,s),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Un),new Xl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}},Wa=new v,Af=new v,Rf=new Ut,Qn=class{constructor(t=new v(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wa.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rf.getNormalMatrix(t),i=this.coplanarPoint(Wa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new ii,Kr=new v,fr=class{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,s=new Qn,r=new Qn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],y=i[13],M=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,g-f,_-p).normalize(),n[1].setComponents(l+s,d+c,g+f,_+p).normalize(),n[2].setComponents(l+r,d+h,g+m,_+y).normalize(),n[3].setComponents(l-r,d-h,g-m,_-y).normalize(),n[4].setComponents(l-a,d-u,g-x,_-M).normalize(),e===jn)n[5].setComponents(l+a,d+u,g+x,_+M).normalize();else if(e===xo)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Kr.x=i.normal.x>0?t.max.x:t.min.x,Kr.y=i.normal.y>0?t.max.y:t.min.y,Kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nu(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Cf(o){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}var Re=class o extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-r;for(let M=0;M<c;M++){let _=M*u-s;m.push(_,-y,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,_=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(M,_,T),f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.widthSegments,t.heightSegments)}},Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Cp=`
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
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
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,jm=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,n0=`#define TOON
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
}`,i0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
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
}`,l0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Pf,alphahash_pars_fragment:If,alphamap_fragment:Lf,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:kf,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:zf,beginnormal_vertex:Hf,bsdfs:Vf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:$f,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:Qf,common:jf,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:op,colorspace_pars_fragment:ap,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:bp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:vp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:_p,lights_pars_begin:Mp,lights_toon_fragment:Sp,lights_toon_pars_fragment:Ep,lights_phong_fragment:wp,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Rp,lights_fragment_begin:Cp,lights_fragment_maps:Pp,lights_fragment_end:Ip,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Np,map_fragment:Fp,map_pars_fragment:kp,map_particle_fragment:Op,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Vp,morphcolor_vertex:Gp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:$p,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:om,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:dm,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:_m,tonemapping_fragment:Mm,tonemapping_pars_fragment:bm,transmission_fragment:Sm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Im,backgroundCube_frag:Lm,cube_vert:Dm,cube_frag:Um,depth_vert:Nm,depth_frag:Fm,distanceRGBA_vert:km,distanceRGBA_frag:Om,equirect_vert:Bm,equirect_frag:zm,linedashed_vert:Hm,linedashed_frag:Vm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:$m,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:Qm,meshphysical_vert:jm,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:o0,sprite_vert:a0,sprite_frag:l0},nt={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ln={basic:{uniforms:Qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new et(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Qe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Qe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Qe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new et(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Qe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Qe([nt.points,nt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Qe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Qe([nt.common,nt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Qe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Qe([nt.sprite,nt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Qe([nt.common,nt.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Qe([nt.lights,nt.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ln.physical={uniforms:Qe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Qr={r:0,b:0,g:0},zi=new Ne,c0=new Jt;function h0(o,t,e,n,i,s,r){let a=new et(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1,_=m(y);_===null?p(a,l):_&&_.isColor&&(p(_,1),M=!0);let A=o.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(y,M){let _=m(M);_&&(_.isCubeTexture||_.mapping===Ho)?(h===void 0&&(h=new ut(new ye(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:Ps(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(M.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(zi)),h.material.toneMapped=Wt.getTransfer(_.colorSpace)!==se,(u!==_||d!==_.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ut(new Re(2,2),new me({name:"BackgroundMaterial",uniforms:Ps(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Qr,Uu(o)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g}}function u0(o,t){let e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,r=!1;function a(S,L,P,k,B){let X=!1,W=u(k,P,L);s!==W&&(s=W,c(s.object)),X=f(S,k,P,B),X&&m(S,k,P,B),B!==null&&t.update(B,o.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,_(S,L,P,k),B!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return o.createVertexArray()}function c(S){return o.bindVertexArray(S)}function h(S){return o.deleteVertexArray(S)}function u(S,L,P){let k=P.wireframe===!0,B=n[S.id];B===void 0&&(B={},n[S.id]=B);let X=B[L.id];X===void 0&&(X={},B[L.id]=X);let W=X[k];return W===void 0&&(W=d(l()),X[k]=W),W}function d(S){let L=[],P=[],k=[];for(let B=0;B<e;B++)L[B]=0,P[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,L,P,k){let B=s.attributes,X=L.attributes,W=0,Q=P.getAttributes();for(let V in Q)if(Q[V].location>=0){let dt=B[V],St=X[V];if(St===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function m(S,L,P,k){let B={},X=L.attributes,W=0,Q=P.getAttributes();for(let V in Q)if(Q[V].location>=0){let dt=X[V];dt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));let St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),B[V]=St,W++}s.attributes=B,s.attributesNum=W,s.index=k}function x(){let S=s.newAttributes;for(let L=0,P=S.length;L<P;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){let P=s.newAttributes,k=s.enabledAttributes,B=s.attributeDivisors;P[S]=1,k[S]===0&&(o.enableVertexAttribArray(S),k[S]=1),B[S]!==L&&(o.vertexAttribDivisor(S,L),B[S]=L)}function y(){let S=s.newAttributes,L=s.enabledAttributes;for(let P=0,k=L.length;P<k;P++)L[P]!==S[P]&&(o.disableVertexAttribArray(P),L[P]=0)}function M(S,L,P,k,B,X,W){W===!0?o.vertexAttribIPointer(S,L,P,B,X):o.vertexAttribPointer(S,L,P,k,B,X)}function _(S,L,P,k){x();let B=k.attributes,X=P.getAttributes(),W=L.defaultAttributeValues;for(let Q in X){let V=X[Q];if(V.location>=0){let it=B[Q];if(it===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){let dt=it.normalized,St=it.itemSize,Ht=t.get(it);if(Ht===void 0)continue;let ce=Ht.buffer,Y=Ht.type,tt=Ht.bytesPerElement,_t=Y===o.INT||Y===o.UNSIGNED_INT||it.gpuType===Tc;if(it.isInterleavedBufferAttribute){let rt=it.data,Rt=rt.stride,It=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<V.locationSize;Vt++)p(V.location+Vt,rt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Vt=0;Vt<V.locationSize;Vt++)g(V.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,ce);for(let Vt=0;Vt<V.locationSize;Vt++)M(V.location+Vt,St/V.locationSize,Y,dt,Rt*tt,(It+St/V.locationSize*Vt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,it.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<V.locationSize;rt++)g(V.location+rt);o.bindBuffer(o.ARRAY_BUFFER,ce);for(let rt=0;rt<V.locationSize;rt++)M(V.location+rt,St/V.locationSize,Y,dt,St*tt,St/V.locationSize*rt*tt,_t)}}else if(W!==void 0){let dt=W[Q];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(V.location,dt);break;case 3:o.vertexAttrib3fv(V.location,dt);break;case 4:o.vertexAttrib4fv(V.location,dt);break;default:o.vertexAttrib1fv(V.location,dt)}}}}y()}function A(){I();for(let S in n){let L=n[S];for(let P in L){let k=L[P];for(let B in k)h(k[B].object),delete k[B];delete L[P]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let P in L){let k=L[P];for(let B in k)h(k[B].object),delete k[B];delete L[P]}delete n[S.id]}function C(S){for(let L in n){let P=n[L];if(P[S.id]===void 0)continue;let k=P[S.id];for(let B in k)h(k[B].object),delete k[B];delete P[S.id]}}function I(){w(),r=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function d0(o,t,e){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(o.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function f0(o,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==Tn&&n.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ei&&n.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!I)}function l(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),M=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function p0(o){let t=this,e=null,n=0,i=!1,s=!1,r=new Qn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=o.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{let y=s?0:n,M=y*4,_=p.clippingState||null;l.value=_,_=h(m,d,M,f);for(let A=0;A!==M;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)r.copy(u[M]).applyMatrix4(y,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function m0(o){let t=new WeakMap;function e(r,a){return a===hl?r.mapping=Ts:a===ul&&(r.mapping=As),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===hl||a===ul)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new ql(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Is=class extends Eo{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,Uh=[.125,.215,.35,.446,.526,.582],Wi=20,Xa=new Is,Nh=new et,qa=null,Ya=0,$a=0,Za=!1,Vi=(1+Math.sqrt(5))/2,ms=1/Vi,Fh=[new v(-Vi,ms,0),new v(Vi,ms,0),new v(-ms,0,Vi),new v(ms,0,Vi),new v(0,Vi,-ms),new v(0,Vi,ms),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,$a),this._renderer.xr.enabled=Za,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:un,format:Tn,colorSpace:Bs,depthBuffer:!1},i=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(s)),this._blurMaterial=x0(s,t,e)}return i}_compileMaterial(t){let e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,i){let a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Nh),h.toneMapping=Mi,h.autoClear=!1;let f=new qt({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),m=new ut(new ye,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Nh),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;jr(i,y*M,p>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ts||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());let s=i?this._cubemapMaterial:this._equirectMaterial,r=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fh[(i-s-1)%Fh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):Wi;g>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);let p=[],y=0;for(let C=0;C<Wi;++C){let I=C/x,w=Math.exp(-I*I/2);p.push(w),C===0?y+=w:C<g&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let _=this._sizeLods[i],A=3*_*(i>M-Ms?i-M+Ms:0),T=4*(this._cubeSize-_);jr(e,A,T,3*_,2*_),l.setRenderTarget(e),l.render(u,Xa)}};function g0(o){let t=[],e=[],n=[],i=o,s=o-Ms+1+Uh.length;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Ms?l=Uh[r-o+Ms-1]:r===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*f),M=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,I=T>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(w,x*m*T),M.set(d,g*m*T);let S=[T,T,T,T,T,T];_.set(S,p*m*T)}let A=new ue;A.setAttribute("position",new pe(y,x)),A.setAttribute("uv",new pe(M,g)),A.setAttribute("faceIndex",new pe(_,p)),t.push(A),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(o,t,e){let n=new ze(o,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function x0(o,t,e){let n=new Float32Array(Wi),i=new v(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Oh(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Bh(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function v0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hl||l===ul,h=l===Ts||l===As;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ls(o)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ls(o)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function y0(o){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(o,t,e,n){let i={},s=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",r),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],o.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],o.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){let A=y[M+0],T=y[M+1],C=y[M+2];d.push(A,T,T,C,C,A)}}else if(m!==void 0){let y=m.array;x=m.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let A=M+0,T=M+1,C=M+2;d.push(A,T,T,C,C,A)}}else return;let g=new(Lu(d)?So:bo)(d,1);g.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function M0(o,t,e){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*r),e.update(f,n,1)}function c(d,f,m){m!==0&&(o.drawElementsInstanced(n,f,s,d*r,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b0(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function S0(o,t,e){let n=new WeakMap,i=new ae;function s(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*A*4*u),C=new _o(T,_,A,u);C.type=Nn,C.needsUpdate=!0;let I=M*4;for(let S=0;S<u;S++){let L=g[S],P=p[S],k=y[S],B=_*A*4*S;for(let X=0;X<L.count;X++){let W=X*I;f===!0&&(i.fromBufferAttribute(L,X),T[B+W+0]=i.x,T[B+W+1]=i.y,T[B+W+2]=i.z,T[B+W+3]=0),m===!0&&(i.fromBufferAttribute(P,X),T[B+W+4]=i.x,T[B+W+5]=i.y,T[B+W+6]=i.z,T[B+W+7]=0),x===!0&&(i.fromBufferAttribute(k,X),T[B+W+8]=i.x,T[B+W+9]=i.y,T[B+W+10]=i.z,T[B+W+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ht(_,A)},n.set(a,d),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(o,"morphTargetBaseInfluence",m),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function E0(o,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}var To=class extends sn{constructor(t,e,n,i,s,r,a,l,c,h=bs){if(h!==bs&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=Yi),n===void 0&&h===Cs&&(n=Rs),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fu=new sn,zh=new To(1,1),ku=new _o,Ou=new Wl,Bu=new wo,Hh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function zs(o,t,e){let n=o[0];if(n<=0||n>0)return o;let i=t*e,s=Hh[i];if(s===void 0&&(s=new Float32Array(i),Hh[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Le(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function De(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Go(o,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function w0(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function T0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;o.uniform2fv(this.addr,t),De(e,t)}}function A0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;o.uniform3fv(this.addr,t),De(e,t)}}function R0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;o.uniform4fv(this.addr,t),De(e,t)}}function C0(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Xh.set(n),o.uniformMatrix2fv(this.addr,!1,Xh),De(e,n)}}function P0(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Wh.set(n),o.uniformMatrix3fv(this.addr,!1,Wh),De(e,n)}}function I0(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Gh.set(n),o.uniformMatrix4fv(this.addr,!1,Gh),De(e,n)}}function L0(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function D0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;o.uniform2iv(this.addr,t),De(e,t)}}function U0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;o.uniform3iv(this.addr,t),De(e,t)}}function N0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;o.uniform4iv(this.addr,t),De(e,t)}}function F0(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function k0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;o.uniform2uiv(this.addr,t),De(e,t)}}function O0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;o.uniform3uiv(this.addr,t),De(e,t)}}function B0(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;o.uniform4uiv(this.addr,t),De(e,t)}}function z0(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(zh.compareFunction=Iu,s=zh):s=Fu,e.setTexture2D(t||s,i)}function H0(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ou,i)}function V0(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bu,i)}function G0(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ku,i)}function W0(o){switch(o){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return k0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function X0(o,t){o.uniform1fv(this.addr,t)}function q0(o,t){let e=zs(t,this.size,2);o.uniform2fv(this.addr,e)}function Y0(o,t){let e=zs(t,this.size,3);o.uniform3fv(this.addr,e)}function $0(o,t){let e=zs(t,this.size,4);o.uniform4fv(this.addr,e)}function Z0(o,t){let e=zs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function J0(o,t){let e=zs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function K0(o,t){let e=zs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Q0(o,t){o.uniform1iv(this.addr,t)}function j0(o,t){o.uniform2iv(this.addr,t)}function tg(o,t){o.uniform3iv(this.addr,t)}function eg(o,t){o.uniform4iv(this.addr,t)}function ng(o,t){o.uniform1uiv(this.addr,t)}function ig(o,t){o.uniform2uiv(this.addr,t)}function sg(o,t){o.uniform3uiv(this.addr,t)}function rg(o,t){o.uniform4uiv(this.addr,t)}function og(o,t,e){let n=this.cache,i=t.length,s=Go(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),De(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Fu,s[r])}function ag(o,t,e){let n=this.cache,i=t.length,s=Go(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),De(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Ou,s[r])}function lg(o,t,e){let n=this.cache,i=t.length,s=Go(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),De(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Bu,s[r])}function cg(o,t,e){let n=this.cache,i=t.length,s=Go(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),De(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||ku,s[r])}function hg(o){switch(o){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return Q0;case 35667:case 35671:return j0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W0(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function qh(o,t){o.seq.push(t),o.map[t.id]=t}function ug(o,t,e){let n=o.name,i=n.length;for(Ja.lastIndex=0;;){let s=Ja.exec(n),r=Ja.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){qh(e,c===void 0?new Yl(a,o,t):new $l(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new Zl(a),qh(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);ug(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function Yh(o,t,e){let n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}var dg=37297,fg=0;function pg(o,t){let e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var $h=new Ut;function mg(o){Wt._getMatrix($h,Wt.workingColorSpace,o);let t=`mat3( ${$h.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(o)){case Vo:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Zh(o,t,e){let n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+pg(o.getShaderSource(t),r)}else return i}function gg(o,t){let e=mg(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(o,t){let e;switch(t){case Mc:e="Linear";break;case bc:e="Reinhard";break;case Sc:e="Cineon";break;case _r:e="ACESFilmic";break;case Ec:e="AgX";break;case wc:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var to=new v;function vg(){Wt.getLuminanceCoefficients(to);let o=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function _g(o){let t=[];for(let e in o){let n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(o,t){let e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=o.getActiveAttrib(t,i),r=s.name,a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function cr(o){return o!==""}function Jh(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(o){return o.replace(bg,Eg)}var Sg=new Map;function Eg(o,t){let e=kt[t];if(e===void 0){let n=Sg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}var wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(o){return o.replace(wg,Tg)}function Tg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jh(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Ag(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Pg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yu:t="ENVMAP_BLENDING_MULTIPLY";break;case qd:t="ENVMAP_BLENDING_MIX";break;case Yd:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lg(o,t,e,n){let i=o.getContext(),s=e.defines,r=e.vertexShader,a=e.fragmentShader,l=Ag(e),c=Rg(e),h=Cg(e),u=Pg(e),d=Ig(e),f=yg(e),m=_g(s),x=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(g=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?kt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),r=Jl(r),r=Jh(r,e),r=Kh(r,e),a=Jl(a),a=Jh(a,e),a=Kh(a,e),r=Qh(r),a=Qh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+g+r,_=y+p+a,A=Yh(i,i.VERTEX_SHADER,M),T=Yh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,A),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(L){if(o.debug.checkShaderErrors){let P=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(T).trim(),X=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,x,A,T);else{let Q=Zh(i,A,"vertex"),V=Zh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+Q+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(k===""||B==="")&&(W=!1);W&&(L.diagnostics={runnable:X,programLog:P,vertexShader:{log:k,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(A),i.deleteShader(T),I=new Es(i,x),w=Mg(i,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,dg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}var Dg=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}};function Ug(o,t,e,n,i,s,r){let a=new Mo,l=new Kl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,L,P,k){let B=P.fog,X=k.geometry,W=w.isMeshStandardMaterial?P.environment:null,Q=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),V=Q&&Q.mapping===Ho?Q.image.height:null,it=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=dt!==void 0?dt.length:0,Ht=0;X.morphAttributes.position!==void 0&&(Ht=1),X.morphAttributes.normal!==void 0&&(Ht=2),X.morphAttributes.color!==void 0&&(Ht=3);let ce,Y,tt,_t;if(it){let re=Ln[it];ce=re.vertexShader,Y=re.fragmentShader}else ce=w.vertexShader,Y=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),_t=l.getFragmentShaderID(w);let rt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,Me=!!w.map,Kt=!!w.matcap,Te=!!Q,F=!!w.aoMap,mn=!!w.lightMap,Yt=!!w.bumpMap,$t=!!w.normalMap,Tt=!!w.displacementMap,ge=!!w.emissiveMap,wt=!!w.metalnessMap,R=!!w.roughnessMap,b=w.anisotropy>0,O=w.clearcoat>0,$=w.dispersion>0,J=w.iridescence>0,q=w.sheen>0,Mt=w.transmission>0,ot=b&&!!w.anisotropyMap,ft=O&&!!w.clearcoatMap,Qt=O&&!!w.clearcoatNormalMap,K=O&&!!w.clearcoatRoughnessMap,pt=J&&!!w.iridescenceMap,At=J&&!!w.iridescenceThicknessMap,Ct=q&&!!w.sheenColorMap,mt=q&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,Ft=!!w.specularColorMap,de=!!w.specularIntensityMap,D=Mt&&!!w.transmissionMap,st=Mt&&!!w.thicknessMap,G=!!w.gradientMap,Z=!!w.alphaMap,ct=w.alphaTest>0,at=!!w.alphaHash,Lt=!!w.extensions,be=Mi;w.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(be=o.toneMapping);let We={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:ce,fragmentShader:Y,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?o.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bs,alphaToCoverage:!!w.alphaToCoverage,map:Me,matcap:Kt,envMap:Te,envMapMode:Te&&Q.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:mn,bumpMap:Yt,normalMap:$t,displacementMap:d&&Tt,emissiveMap:ge,normalMapObjectSpace:$t&&w.normalMapType===Qd,normalMapTangentSpace:$t&&w.normalMapType===Pu,metalnessMap:wt,roughnessMap:R,anisotropy:b,anisotropyMap:ot,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Qt,clearcoatRoughnessMap:K,dispersion:$,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Zt,specularColorMap:Ft,specularIntensityMap:de,transmission:Mt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:w.transparent===!1&&w.blending===_i&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:at,combine:w.combine,mapUv:Me&&x(w.map.channel),aoMapUv:F&&x(w.aoMap.channel),lightMapUv:mn&&x(w.lightMap.channel),bumpMapUv:Yt&&x(w.bumpMap.channel),normalMapUv:$t&&x(w.normalMap.channel),displacementMapUv:Tt&&x(w.displacementMap.channel),emissiveMapUv:ge&&x(w.emissiveMap.channel),metalnessMapUv:wt&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:ot&&x(w.anisotropyMap.channel),clearcoatMapUv:ft&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(w.sheenRoughnessMap.channel),specularMapUv:Zt&&x(w.specularMap.channel),specularColorMapUv:Ft&&x(w.specularColorMap.channel),specularIntensityMapUv:de&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:st&&x(w.thicknessMap.channel),alphaMapUv:Z&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($t||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Me||Z),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ht,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:be,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===se,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$e,flipSided:w.side===Se,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(S,w),M(S,w),S.push(o.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let S=m[w.type],L;if(S){let P=Ln[S];L=Ri.clone(P.uniforms)}else L=w.uniforms;return L}function A(w,S){let L;for(let P=0,k=h.length;P<k;P++){let B=h[P];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Lg(o,S,w,s),h.push(L)),L}function T(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:I}}function Ng(){let o=new WeakMap;function t(r){return o.has(r)}function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Fg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function tu(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function eu(){let o=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,m,x,g){let p=o[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},o[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=r(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,x,g){let p=r(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Fg),n.length>1&&n.sort(d||tu),i.length>1&&i.sort(d||tu)}function h(){for(let u=t,d=o.length;u<d;u++){let f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function kg(){let o=new WeakMap;function t(n,i){let s=o.get(n),r;return s===void 0?(r=new eu,o.set(n,[r])):i>=s.length?(r=new eu,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function Og(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new v,color:new et};break;case"SpotLight":e={position:new v,direction:new v,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new v,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new v,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new v,halfWidth:new v,halfHeight:new v};break}return o[t.id]=e,e}}}function Bg(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var zg=0;function Hg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Vg(o){let t=new Og,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new v);let i=new v,s=new Jt,r=new Jt;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,M=0,_=0,A=0,T=0,C=0;c.sort(Hg);for(let w=0,S=c.length;w<S;w++){let L=c[w],P=L.color,k=L.intensity,B=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=P.r*k,u+=P.g*k,d+=P.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],k);C++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,V=e.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=W,f++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(P).multiplyScalar(k),W.distance=B,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[x]=W;let Q=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,Q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=Q.matrix,L.castShadow){let V=e.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=X,_++}x++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(P).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=W,g++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let Q=L.shadow,V=e.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=L.shadow.matrix,M++}n.point[m]=W,m++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}g>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=C,n.version=zg++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let M=c[p];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(M.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),r.identity(),s.copy(M.matrixWorld),s.premultiply(g),r.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function nu(o){let t=new Vg(o),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Gg(o){let t=new WeakMap;function e(i,s=0){let r=t.get(i),a;return r===void 0?(a=new nu(o),t.set(i,[a])):s>=r.length?(a=new nu(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var jl=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`;function qg(o,t,e){let n=new fr,i=new ht,s=new ht,r=new ae,a=new jl({depthPacking:Kd}),l=new tc,c={},h=e.maxTextureSize,u={[Si]:Se,[Se]:Si,[$e]:$e},d=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let p=this.type;this.render=function(T,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=o.getRenderTarget(),S=o.getActiveCubeFace(),L=o.getActiveMipmapLevel(),P=o.state;P.setBlending(Fn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let k=p!==Kn&&this.type===Kn,B=p===Kn&&this.type!==Kn;for(let X=0,W=T.length;X<W;X++){let Q=T[X],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let it=V.getFrameExtents();if(i.multiply(it),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||k===!0||B===!0){let St=this.type!==Kn?{minFilter:hn,magFilter:hn}:{};V.map!==null&&V.map.dispose(),V.map=new ze(i.x,i.y,St),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();let dt=V.getViewportCount();for(let St=0;St<dt;St++){let Ht=V.getViewport(St);r.set(s.x*Ht.x,s.y*Ht.y,s.x*Ht.z,s.y*Ht.w),P.viewport(r),V.updateMatrices(Q,St),n=V.getFrustum(),_(C,I,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Kn&&y(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(w,S,L)};function y(T,C){let I=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ze(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,o.setRenderTarget(T.mapPass),o.clear(),o.renderBufferDirect(C,null,I,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,o.setRenderTarget(T.map),o.clear(),o.renderBufferDirect(C,null,I,f,x,null)}function M(T,C,I,w){let S=null,L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?l:a,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let P=S.uuid,k=C.uuid,B=c[P];B===void 0&&(B={},c[P]=B);let X=B[k];X===void 0&&(X=S.clone(),B[k]=X,C.addEventListener("dispose",A)),S=X}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Kn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let P=o.properties.get(S);P.light=I}return S}function _(T,C,I,w,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let k=t.update(T),B=T.material;if(Array.isArray(B)){let X=k.groups;for(let W=0,Q=X.length;W<Q;W++){let V=X[W],it=B[V.materialIndex];if(it&&it.visible){let dt=M(T,it,w,S);T.onBeforeShadow(o,T,C,I,k,dt,V),o.renderBufferDirect(I,null,k,dt,T,V),T.onAfterShadow(o,T,C,I,k,dt,V)}}}else if(B.visible){let X=M(T,B,w,S);T.onBeforeShadow(o,T,C,I,k,X,null),o.renderBufferDirect(I,null,k,X,T,null),T.onAfterShadow(o,T,C,I,k,X,null)}}let P=T.children;for(let k=0,B=P.length;k<B;k++)_(P[k],C,I,w,S)}function A(T){T.target.removeEventListener("dispose",A);for(let I in c){let w=c[I],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var Yg={[il]:sl,[rl]:ll,[ol]:cl,[ws]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:ws};function $g(o,t){function e(){let D=!1,st=new ae,G=null,Z=new ae(0,0,0,0);return{setMask:function(ct){G!==ct&&!D&&(o.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){D=ct},setClear:function(ct,at,Lt,be,We){We===!0&&(ct*=be,at*=be,Lt*=be),st.set(ct,at,Lt,be),Z.equals(st)===!1&&(o.clearColor(ct,at,Lt,be),Z.copy(st))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,G=null,Z=null,ct=null;return{setReversed:function(at){if(st!==at){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let be=ct;ct=null,this.setClear(be)}st=at},getReversed:function(){return st},setTest:function(at){at?rt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(at){G!==at&&!D&&(o.depthMask(at),G=at)},setFunc:function(at){if(st&&(at=Yg[at]),Z!==at){switch(at){case il:o.depthFunc(o.NEVER);break;case sl:o.depthFunc(o.ALWAYS);break;case rl:o.depthFunc(o.LESS);break;case ws:o.depthFunc(o.LEQUAL);break;case ol:o.depthFunc(o.EQUAL);break;case al:o.depthFunc(o.GEQUAL);break;case ll:o.depthFunc(o.GREATER);break;case cl:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Z=at}},setLocked:function(at){D=at},setClear:function(at){ct!==at&&(st&&(at=1-at),o.clearDepth(at),ct=at)},reset:function(){D=!1,G=null,Z=null,ct=null,st=!1}}}function i(){let D=!1,st=null,G=null,Z=null,ct=null,at=null,Lt=null,be=null,We=null;return{setTest:function(re){D||(re?rt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(re){st!==re&&!D&&(o.stencilMask(re),st=re)},setFunc:function(re,Mn,Wn){(G!==re||Z!==Mn||ct!==Wn)&&(o.stencilFunc(re,Mn,Wn),G=re,Z=Mn,ct=Wn)},setOp:function(re,Mn,Wn){(at!==re||Lt!==Mn||be!==Wn)&&(o.stencilOp(re,Mn,Wn),at=re,Lt=Mn,be=Wn)},setLocked:function(re){D=re},setClear:function(re){We!==re&&(o.clearStencil(re),We=re)},reset:function(){D=!1,st=null,G=null,Z=null,ct=null,at=null,Lt=null,be=null,We=null}}}let s=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,M=null,_=null,A=null,T=null,C=new et(0,0,0),I=0,w=!1,S=null,L=null,P=null,k=null,B=null,X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let it=null,dt={},St=o.getParameter(o.SCISSOR_BOX),Ht=o.getParameter(o.VIEWPORT),ce=new ae().fromArray(St),Y=new ae().fromArray(Ht);function tt(D,st,G,Z){let ct=new Uint8Array(4),at=o.createTexture();o.bindTexture(D,at),o.texParameteri(D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(D,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Lt=0;Lt<G;Lt++)D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY?o.texImage3D(st,0,o.RGBA,1,1,Z,0,o.RGBA,o.UNSIGNED_BYTE,ct):o.texImage2D(st+Lt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ct);return at}let _t={};_t[o.TEXTURE_2D]=tt(o.TEXTURE_2D,o.TEXTURE_2D,1),_t[o.TEXTURE_CUBE_MAP]=tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[o.TEXTURE_2D_ARRAY]=tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_t[o.TEXTURE_3D]=tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),rt(o.DEPTH_TEST),r.setFunc(ws),Yt(!1),$t(oh),rt(o.CULL_FACE),F(Fn);function rt(D){h[D]!==!0&&(o.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(o.disable(D),h[D]=!1)}function It(D,st){return u[D]!==st?(o.bindFramebuffer(D,st),u[D]=st,D===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=st),D===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=st),!0):!1}function Vt(D,st){let G=f,Z=!1;if(D){G=d.get(st),G===void 0&&(G=[],d.set(st,G));let ct=D.textures;if(G.length!==ct.length||G[0]!==o.COLOR_ATTACHMENT0){for(let at=0,Lt=ct.length;at<Lt;at++)G[at]=o.COLOR_ATTACHMENT0+at;G.length=ct.length,Z=!0}}else G[0]!==o.BACK&&(G[0]=o.BACK,Z=!0);Z&&o.drawBuffers(G)}function Me(D){return m!==D?(o.useProgram(D),m=D,!0):!1}let Kt={[Gi]:o.FUNC_ADD,[Cd]:o.FUNC_SUBTRACT,[Pd]:o.FUNC_REVERSE_SUBTRACT};Kt[Id]=o.MIN,Kt[Ld]=o.MAX;let Te={[Dd]:o.ZERO,[Ud]:o.ONE,[Nd]:o.SRC_COLOR,[el]:o.SRC_ALPHA,[Hd]:o.SRC_ALPHA_SATURATE,[Bd]:o.DST_COLOR,[kd]:o.DST_ALPHA,[Fd]:o.ONE_MINUS_SRC_COLOR,[nl]:o.ONE_MINUS_SRC_ALPHA,[zd]:o.ONE_MINUS_DST_COLOR,[Od]:o.ONE_MINUS_DST_ALPHA,[Vd]:o.CONSTANT_COLOR,[Gd]:o.ONE_MINUS_CONSTANT_COLOR,[Wd]:o.CONSTANT_ALPHA,[Xd]:o.ONE_MINUS_CONSTANT_ALPHA};function F(D,st,G,Z,ct,at,Lt,be,We,re){if(D===Fn){x===!0&&(Rt(o.BLEND),x=!1);return}if(x===!1&&(rt(o.BLEND),x=!0),D!==Rd){if(D!==g||re!==w){if((p!==Gi||_!==Gi)&&(o.blendEquation(o.FUNC_ADD),p=Gi,_=Gi),re)switch(D){case _i:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ze:o.blendFunc(o.ONE,o.ONE);break;case ah:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _i:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ze:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ah:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,A=null,T=null,C.set(0,0,0),I=0,g=D,w=re}return}ct=ct||st,at=at||G,Lt=Lt||Z,(st!==p||ct!==_)&&(o.blendEquationSeparate(Kt[st],Kt[ct]),p=st,_=ct),(G!==y||Z!==M||at!==A||Lt!==T)&&(o.blendFuncSeparate(Te[G],Te[Z],Te[at],Te[Lt]),y=G,M=Z,A=at,T=Lt),(be.equals(C)===!1||We!==I)&&(o.blendColor(be.r,be.g,be.b,We),C.copy(be),I=We),g=D,w=!1}function mn(D,st){D.side===$e?Rt(o.CULL_FACE):rt(o.CULL_FACE);let G=D.side===Se;st&&(G=!G),Yt(G),D.blending===_i&&D.transparent===!1?F(Fn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(D){S!==D&&(D?o.frontFace(o.CW):o.frontFace(o.CCW),S=D)}function $t(D){D!==Td?(rt(o.CULL_FACE),D!==L&&(D===oh?o.cullFace(o.BACK):D===Ad?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),L=D}function Tt(D){D!==P&&(W&&o.lineWidth(D),P=D)}function ge(D,st,G){D?(rt(o.POLYGON_OFFSET_FILL),(k!==st||B!==G)&&(o.polygonOffset(st,G),k=st,B=G)):Rt(o.POLYGON_OFFSET_FILL)}function wt(D){D?rt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function R(D){D===void 0&&(D=o.TEXTURE0+X-1),it!==D&&(o.activeTexture(D),it=D)}function b(D,st,G){G===void 0&&(it===null?G=o.TEXTURE0+X-1:G=it);let Z=dt[G];Z===void 0&&(Z={type:void 0,texture:void 0},dt[G]=Z),(Z.type!==D||Z.texture!==st)&&(it!==G&&(o.activeTexture(G),it=G),o.bindTexture(D,st||_t[D]),Z.type=D,Z.texture=st)}function O(){let D=dt[it];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){ce.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function mt(D){Y.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Zt(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let Z=G.get(D);Z===void 0&&(Z=o.getUniformBlockIndex(st,D.name),G.set(D,Z))}function Ft(D,st){let Z=c.get(st).get(D);l.get(st)!==Z&&(o.uniformBlockBinding(st,Z,D.__bindingPointIndex),l.set(st,Z))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},it=null,dt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,M=null,_=null,A=null,T=null,C=new et(0,0,0),I=0,w=!1,S=null,L=null,P=null,k=null,B=null,ce.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:rt,disable:Rt,bindFramebuffer:It,drawBuffers:Vt,useProgram:Me,setBlending:F,setMaterial:mn,setFlipSided:Yt,setCullFace:$t,setLineWidth:Tt,setPolygonOffset:ge,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:pt,texImage3D:At,updateUBOMapping:Zt,uniformBlockBinding:Ft,texStorage2D:Qt,texStorage3D:K,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:de}}function iu(o,t,e,n){let i=Zg(n);switch(e){case Eu:return o*t;case Tu:return o*t;case Au:return o*t*2;case Cc:return o*t/i.components*i.byteLength;case Pc:return o*t/i.components*i.byteLength;case Ru:return o*t*2/i.components*i.byteLength;case Ic:return o*t*2/i.components*i.byteLength;case wu:return o*t*3/i.components*i.byteLength;case Tn:return o*t*4/i.components*i.byteLength;case Lc:return o*t*4/i.components*i.byteLength;case ho:case uo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(o,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(o,8)*Math.max(t,8)/2;case xl:case vl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case mo:case Ul:case Nl:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Cu:case Fl:return Math.ceil(o/4)*Math.ceil(t/4)*8;case kl:case Ol:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(o){switch(o){case ei:case Mu:return{byteLength:1,components:1};case ur:case bu:case un:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case Yi:case Tc:case Nn:return{byteLength:4,components:1};case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Jg(o,t,e,n,i,s,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):vo("canvas")}function x(R,b,O){let $=1,J=wt(R);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor($*J.width),Mt=Math.floor($*J.height);u===void 0&&(u=m(q,Mt));let ot=b?m(q,Mt):u;return ot.width=q,ot.height=Mt,ot.getContext("2d").drawImage(R,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Mt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){o.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?o.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function M(R,b,O,$,J=!1){if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=b;if(b===o.RED&&(O===o.FLOAT&&(q=o.R32F),O===o.HALF_FLOAT&&(q=o.R16F),O===o.UNSIGNED_BYTE&&(q=o.R8)),b===o.RED_INTEGER&&(O===o.UNSIGNED_BYTE&&(q=o.R8UI),O===o.UNSIGNED_SHORT&&(q=o.R16UI),O===o.UNSIGNED_INT&&(q=o.R32UI),O===o.BYTE&&(q=o.R8I),O===o.SHORT&&(q=o.R16I),O===o.INT&&(q=o.R32I)),b===o.RG&&(O===o.FLOAT&&(q=o.RG32F),O===o.HALF_FLOAT&&(q=o.RG16F),O===o.UNSIGNED_BYTE&&(q=o.RG8)),b===o.RG_INTEGER&&(O===o.UNSIGNED_BYTE&&(q=o.RG8UI),O===o.UNSIGNED_SHORT&&(q=o.RG16UI),O===o.UNSIGNED_INT&&(q=o.RG32UI),O===o.BYTE&&(q=o.RG8I),O===o.SHORT&&(q=o.RG16I),O===o.INT&&(q=o.RG32I)),b===o.RGB_INTEGER&&(O===o.UNSIGNED_BYTE&&(q=o.RGB8UI),O===o.UNSIGNED_SHORT&&(q=o.RGB16UI),O===o.UNSIGNED_INT&&(q=o.RGB32UI),O===o.BYTE&&(q=o.RGB8I),O===o.SHORT&&(q=o.RGB16I),O===o.INT&&(q=o.RGB32I)),b===o.RGBA_INTEGER&&(O===o.UNSIGNED_BYTE&&(q=o.RGBA8UI),O===o.UNSIGNED_SHORT&&(q=o.RGBA16UI),O===o.UNSIGNED_INT&&(q=o.RGBA32UI),O===o.BYTE&&(q=o.RGBA8I),O===o.SHORT&&(q=o.RGBA16I),O===o.INT&&(q=o.RGBA32I)),b===o.RGB&&O===o.UNSIGNED_INT_5_9_9_9_REV&&(q=o.RGB9_E5),b===o.RGBA){let Mt=J?Vo:Wt.getTransfer($);O===o.FLOAT&&(q=o.RGBA32F),O===o.HALF_FLOAT&&(q=o.RGBA16F),O===o.UNSIGNED_BYTE&&(q=Mt===se?o.SRGB8_ALPHA8:o.RGBA8),O===o.UNSIGNED_SHORT_4_4_4_4&&(q=o.RGBA4),O===o.UNSIGNED_SHORT_5_5_5_1&&(q=o.RGB5_A1)}return(q===o.R16F||q===o.R32F||q===o.RG16F||q===o.RG32F||q===o.RGBA16F||q===o.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(R,b){let O;return R?b===null||b===Yi||b===Rs?O=o.DEPTH24_STENCIL8:b===Nn?O=o.DEPTH32F_STENCIL8:b===ur&&(O=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Rs?O=o.DEPTH_COMPONENT24:b===Nn?O=o.DEPTH_COMPONENT32F:b===ur&&(O=o.DEPTH_COMPONENT16),O}function A(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){let b=R.target;b.removeEventListener("dispose",T),I(b),b.isVideoTexture&&h.delete(b)}function C(R){let b=R.target;b.removeEventListener("dispose",C),S(b)}function I(R){let b=n.get(R);if(b.__webglInit===void 0)return;let O=R.source,$=d.get(O);if($){let J=$[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys($).length===0&&d.delete(O)}n.remove(R)}function w(R){let b=n.get(R);o.deleteTexture(b.__webglTexture);let O=R.source,$=d.get(O);delete $[b.__cacheKey],r.memory.textures--}function S(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let J=0;J<b.__webglFramebuffer[$].length;J++)o.deleteFramebuffer(b.__webglFramebuffer[$][J]);else o.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)o.deleteFramebuffer(b.__webglFramebuffer[$]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=R.textures;for(let $=0,J=O.length;$<J;$++){let q=n.get(O[$]);q.__webglTexture&&(o.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(O[$])}n.remove(R)}let L=0;function P(){L=0}function k(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function B(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function X(R,b){let O=n.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,R,b);return}}e.bindTexture(o.TEXTURE_2D,O.__webglTexture,o.TEXTURE0+b)}function W(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,b);return}e.bindTexture(o.TEXTURE_2D_ARRAY,O.__webglTexture,o.TEXTURE0+b)}function Q(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,b);return}e.bindTexture(o.TEXTURE_3D,O.__webglTexture,o.TEXTURE0+b)}function V(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){tt(O,R,b);return}e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+b)}let it={[Ei]:o.REPEAT,[Xi]:o.CLAMP_TO_EDGE,[dl]:o.MIRRORED_REPEAT},dt={[hn]:o.NEAREST,[Zd]:o.NEAREST_MIPMAP_NEAREST,[Ur]:o.NEAREST_MIPMAP_LINEAR,[Un]:o.LINEAR,[Ma]:o.LINEAR_MIPMAP_NEAREST,[qi]:o.LINEAR_MIPMAP_LINEAR},St={[jd]:o.NEVER,[of]:o.ALWAYS,[tf]:o.LESS,[Iu]:o.LEQUAL,[ef]:o.EQUAL,[rf]:o.GEQUAL,[nf]:o.GREATER,[sf]:o.NOTEQUAL};function Ht(R,b){if(b.type===Nn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===Ma||b.magFilter===Ur||b.magFilter===qi||b.minFilter===Un||b.minFilter===Ma||b.minFilter===Ur||b.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(R,o.TEXTURE_WRAP_S,it[b.wrapS]),o.texParameteri(R,o.TEXTURE_WRAP_T,it[b.wrapT]),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,it[b.wrapR]),o.texParameteri(R,o.TEXTURE_MAG_FILTER,dt[b.magFilter]),o.texParameteri(R,o.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(o.texParameteri(R,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(R,o.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==Ur&&b.minFilter!==qi||b.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");o.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ce(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let $=b.source,J=d.get($);J===void 0&&(J={},d.set($,J));let q=B(b);if(q!==R.__cacheKey){J[q]===void 0&&(J[q]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,O=!0),J[q].usedTimes++;let Mt=J[R.__cacheKey];Mt!==void 0&&(J[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(b)),R.__cacheKey=q,R.__webglTexture=J[q].texture}return O}function Y(R,b,O){let $=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=o.TEXTURE_3D);let J=ce(R,b),q=b.source;e.bindTexture($,R.__webglTexture,o.TEXTURE0+O);let Mt=n.get(q);if(q.version!==Mt.__version||J===!0){e.activeTexture(o.TEXTURE0+O);let ot=Wt.getPrimaries(Wt.workingColorSpace),ft=b.colorSpace===vi?null:Wt.getPrimaries(b.colorSpace),Qt=b.colorSpace===vi||ot===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let K=x(b.image,!1,i.maxTextureSize);K=ge(b,K);let pt=s.convert(b.format,b.colorSpace),At=s.convert(b.type),Ct=M(b.internalFormat,pt,At,b.colorSpace,b.isVideoTexture);Ht($,b);let mt,Zt=b.mipmaps,Ft=b.isVideoTexture!==!0,de=Mt.__version===void 0||J===!0,D=q.dataReady,st=A(b,K);if(b.isDepthTexture)Ct=_(b.format===Cs,b.type),de&&(Ft?e.texStorage2D(o.TEXTURE_2D,1,Ct,K.width,K.height):e.texImage2D(o.TEXTURE_2D,0,Ct,K.width,K.height,0,pt,At,null));else if(b.isDataTexture)if(Zt.length>0){Ft&&de&&e.texStorage2D(o.TEXTURE_2D,st,Ct,Zt[0].width,Zt[0].height);for(let G=0,Z=Zt.length;G<Z;G++)mt=Zt[G],Ft?D&&e.texSubImage2D(o.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(o.TEXTURE_2D,G,Ct,mt.width,mt.height,0,pt,At,mt.data);b.generateMipmaps=!1}else Ft?(de&&e.texStorage2D(o.TEXTURE_2D,st,Ct,K.width,K.height),D&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,K.width,K.height,pt,At,K.data)):e.texImage2D(o.TEXTURE_2D,0,Ct,K.width,K.height,0,pt,At,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&de&&e.texStorage3D(o.TEXTURE_2D_ARRAY,st,Ct,Zt[0].width,Zt[0].height,K.depth);for(let G=0,Z=Zt.length;G<Z;G++)if(mt=Zt[G],b.format!==Tn)if(pt!==null)if(Ft){if(D)if(b.layerUpdates.size>0){let ct=iu(mt.width,mt.height,b.format,b.type);for(let at of b.layerUpdates){let Lt=mt.data.subarray(at*ct/mt.data.BYTES_PER_ELEMENT,(at+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,G,0,0,at,mt.width,mt.height,1,pt,Lt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,K.depth,pt,mt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,G,Ct,mt.width,mt.height,K.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,K.depth,pt,At,mt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,G,Ct,mt.width,mt.height,K.depth,0,pt,At,mt.data)}else{Ft&&de&&e.texStorage2D(o.TEXTURE_2D,st,Ct,Zt[0].width,Zt[0].height);for(let G=0,Z=Zt.length;G<Z;G++)mt=Zt[G],b.format!==Tn?pt!==null?Ft?D&&e.compressedTexSubImage2D(o.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(o.TEXTURE_2D,G,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(o.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(o.TEXTURE_2D,G,Ct,mt.width,mt.height,0,pt,At,mt.data)}else if(b.isDataArrayTexture)if(Ft){if(de&&e.texStorage3D(o.TEXTURE_2D_ARRAY,st,Ct,K.width,K.height,K.depth),D)if(b.layerUpdates.size>0){let G=iu(K.width,K.height,b.format,b.type);for(let Z of b.layerUpdates){let ct=K.data.subarray(Z*G/K.data.BYTES_PER_ELEMENT,(Z+1)*G/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Z,K.width,K.height,1,pt,At,ct)}b.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,pt,At,K.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Ct,K.width,K.height,K.depth,0,pt,At,K.data);else if(b.isData3DTexture)Ft?(de&&e.texStorage3D(o.TEXTURE_3D,st,Ct,K.width,K.height,K.depth),D&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,pt,At,K.data)):e.texImage3D(o.TEXTURE_3D,0,Ct,K.width,K.height,K.depth,0,pt,At,K.data);else if(b.isFramebufferTexture){if(de)if(Ft)e.texStorage2D(o.TEXTURE_2D,st,Ct,K.width,K.height);else{let G=K.width,Z=K.height;for(let ct=0;ct<st;ct++)e.texImage2D(o.TEXTURE_2D,ct,Ct,G,Z,0,pt,At,null),G>>=1,Z>>=1}}else if(Zt.length>0){if(Ft&&de){let G=wt(Zt[0]);e.texStorage2D(o.TEXTURE_2D,st,Ct,G.width,G.height)}for(let G=0,Z=Zt.length;G<Z;G++)mt=Zt[G],Ft?D&&e.texSubImage2D(o.TEXTURE_2D,G,0,0,pt,At,mt):e.texImage2D(o.TEXTURE_2D,G,Ct,pt,At,mt);b.generateMipmaps=!1}else if(Ft){if(de){let G=wt(K);e.texStorage2D(o.TEXTURE_2D,st,Ct,G.width,G.height)}D&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,pt,At,K)}else e.texImage2D(o.TEXTURE_2D,0,Ct,pt,At,K);g(b)&&p($),Mt.__version=q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function tt(R,b,O){if(b.image.length!==6)return;let $=ce(R,b),J=b.source;e.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+O);let q=n.get(J);if(J.version!==q.__version||$===!0){e.activeTexture(o.TEXTURE0+O);let Mt=Wt.getPrimaries(Wt.workingColorSpace),ot=b.colorSpace===vi?null:Wt.getPrimaries(b.colorSpace),ft=b.colorSpace===vi||Mt===ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,K=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Qt&&!K?pt[Z]=x(b.image[Z],!0,i.maxCubemapSize):pt[Z]=K?b.image[Z].image:b.image[Z],pt[Z]=ge(b,pt[Z]);let At=pt[0],Ct=s.convert(b.format,b.colorSpace),mt=s.convert(b.type),Zt=M(b.internalFormat,Ct,mt,b.colorSpace),Ft=b.isVideoTexture!==!0,de=q.__version===void 0||$===!0,D=J.dataReady,st=A(b,At);Ht(o.TEXTURE_CUBE_MAP,b);let G;if(Qt){Ft&&de&&e.texStorage2D(o.TEXTURE_CUBE_MAP,st,Zt,At.width,At.height);for(let Z=0;Z<6;Z++){G=pt[Z].mipmaps;for(let ct=0;ct<G.length;ct++){let at=G[ct];b.format!==Tn?Ct!==null?Ft?D&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,at.width,at.height,Ct,at.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,at.width,at.height,Ct,mt,at.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Zt,at.width,at.height,0,Ct,mt,at.data)}}}else{if(G=b.mipmaps,Ft&&de){G.length>0&&st++;let Z=wt(pt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,st,Zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(K){Ft?D&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ct,mt,pt[Z].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,pt[Z].width,pt[Z].height,0,Ct,mt,pt[Z].data);for(let ct=0;ct<G.length;ct++){let Lt=G[ct].image[Z].image;Ft?D&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Lt.width,Lt.height,Ct,mt,Lt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Zt,Lt.width,Lt.height,0,Ct,mt,Lt.data)}}else{Ft?D&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,mt,pt[Z]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Ct,mt,pt[Z]);for(let ct=0;ct<G.length;ct++){let at=G[ct];Ft?D&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Ct,mt,at.image[Z]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Zt,Ct,mt,at.image[Z])}}}g(b)&&p(o.TEXTURE_CUBE_MAP),q.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _t(R,b,O,$,J,q){let Mt=s.convert(O.format,O.colorSpace),ot=s.convert(O.type),ft=M(O.internalFormat,Mt,ot,O.colorSpace),Qt=n.get(b),K=n.get(O);if(K.__renderTarget=b,!Qt.__hasExternalTextures){let pt=Math.max(1,b.width>>q),At=Math.max(1,b.height>>q);J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ft,pt,At,b.depth,0,Mt,ot,null):e.texImage2D(J,q,ft,pt,At,0,Mt,ot,null)}e.bindFramebuffer(o.FRAMEBUFFER,R),$t(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$,J,K.__webglTexture,0,Yt(b)):(J===o.TEXTURE_2D||J>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,$,J,K.__webglTexture,q),e.bindFramebuffer(o.FRAMEBUFFER,null)}function rt(R,b,O){if(o.bindRenderbuffer(o.RENDERBUFFER,R),b.depthBuffer){let $=b.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=_(b.stencilBuffer,J),Mt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=Yt(b);$t(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ot,q,b.width,b.height):O?o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,q,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,q,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,R)}else{let $=b.textures;for(let J=0;J<$.length;J++){let q=$[J],Mt=s.convert(q.format,q.colorSpace),ot=s.convert(q.type),ft=M(q.internalFormat,Mt,ot,q.colorSpace),Qt=Yt(b);O&&$t(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,ft,b.width,b.height):$t(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let J=$.__webglTexture,q=Yt(b);if(b.depthTexture.format===bs)$t(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,J,0,q):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,J,0);else if(b.depthTexture.format===Cs)$t(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,J,0,q):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function It(R){let b=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(b.__webglFramebuffer,R)}else if(O){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=o.createRenderbuffer(),rt(b.__webglDepthbuffer[$],R,!1);else{let J=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[$];o.bindRenderbuffer(o.RENDERBUFFER,q),o.framebufferRenderbuffer(o.FRAMEBUFFER,J,o.RENDERBUFFER,q)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),rt(b.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,J),o.framebufferRenderbuffer(o.FRAMEBUFFER,$,o.RENDERBUFFER,J)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(R,b,O){let $=n.get(R);b!==void 0&&_t($.__webglFramebuffer,R,R.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),O!==void 0&&It(R)}function Me(R){let b=R.texture,O=n.get(R),$=n.get(b);R.addEventListener("dispose",C);let J=R.textures,q=R.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=b.version,r.memory.textures++),q){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ft=0;ft<b.mipmaps.length;ft++)O.__webglFramebuffer[ot][ft]=o.createFramebuffer()}else O.__webglFramebuffer[ot]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)O.__webglFramebuffer[ot]=o.createFramebuffer()}else O.__webglFramebuffer=o.createFramebuffer();if(Mt)for(let ot=0,ft=J.length;ot<ft;ot++){let Qt=n.get(J[ot]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),r.memory.textures++)}if(R.samples>0&&$t(R)===!1){O.__webglMultisampledFramebuffer=o.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){let ft=J[ot];O.__webglColorRenderbuffer[ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);let Qt=s.convert(ft.format,ft.colorSpace),K=s.convert(ft.type),pt=M(ft.internalFormat,Qt,K,ft.colorSpace,R.isXRRenderTarget===!0),At=Yt(R);o.renderbufferStorageMultisample(o.RENDERBUFFER,At,pt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ot,o.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=o.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(q){e.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(o.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)_t(O.__webglFramebuffer[ot][ft],R,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else _t(O.__webglFramebuffer[ot],R,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(b)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,ft=J.length;ot<ft;ot++){let Qt=J[ot],K=n.get(Qt);e.bindTexture(o.TEXTURE_2D,K.__webglTexture),Ht(o.TEXTURE_2D,Qt),_t(O.__webglFramebuffer,R,Qt,o.COLOR_ATTACHMENT0+ot,o.TEXTURE_2D,0),g(Qt)&&p(o.TEXTURE_2D)}e.unbindTexture()}else{let ot=o.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Ht(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)_t(O.__webglFramebuffer[ft],R,b,o.COLOR_ATTACHMENT0,ot,ft);else _t(O.__webglFramebuffer,R,b,o.COLOR_ATTACHMENT0,ot,0);g(b)&&p(ot),e.unbindTexture()}R.depthBuffer&&It(R)}function Kt(R){let b=R.textures;for(let O=0,$=b.length;O<$;O++){let J=b[O];if(g(J)){let q=y(R),Mt=n.get(J).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}let Te=[],F=[];function mn(R){if(R.samples>0){if($t(R)===!1){let b=R.textures,O=R.width,$=R.height,J=o.COLOR_BUFFER_BIT,q=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=n.get(R),ot=b.length>1;if(ot)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=o.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=o.STENCIL_BUFFER_BIT)),ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Qt=n.get(b[ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Qt,0)}o.blitFramebuffer(0,0,O,$,0,0,O,$,J,o.NEAREST),l===!0&&(Te.length=0,F.length=0,Te.push(o.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Te.push(q),F.push(q),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Qt=n.get(b[ft]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,Qt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Yt(R){return Math.min(i.maxSamples,R.samples)}function $t(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(R){let b=r.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ge(R,b){let O=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Bs&&O!==vi&&(Wt.getTransfer(O)===se?($!==Tn||J!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$t}function Kg(o,t){function e(n,i=vi){let s,r=Wt.getTransfer(i);if(n===ei)return o.UNSIGNED_BYTE;if(n===Ac)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return o.BYTE;if(n===bu)return o.SHORT;if(n===ur)return o.UNSIGNED_SHORT;if(n===Tc)return o.INT;if(n===Yi)return o.UNSIGNED_INT;if(n===Nn)return o.FLOAT;if(n===un)return o.HALF_FLOAT;if(n===Eu)return o.ALPHA;if(n===wu)return o.RGB;if(n===Tn)return o.RGBA;if(n===Tu)return o.LUMINANCE;if(n===Au)return o.LUMINANCE_ALPHA;if(n===bs)return o.DEPTH_COMPONENT;if(n===Cs)return o.DEPTH_STENCIL;if(n===Cc)return o.RED;if(n===Pc)return o.RED_INTEGER;if(n===Ru)return o.RG;if(n===Ic)return o.RG_INTEGER;if(n===Lc)return o.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(r===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===vl||n===yl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xl||n===vl)return r===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_l||n===Ml||n===bl||n===Sl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_l)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return r===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===Ul||n===Nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===mo)return r===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cu||n===Fl||n===kl||n===Ol)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}var ec=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ae=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qg={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new me({vertexShader:jg,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ic=class extends wi{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=new nc,g=e.getContextAttributes(),p=null,y=null,M=[],_=[],A=new ht,T=null,C=new Ye;C.viewport=new ae;let I=new Ye;I.viewport=new ae;let w=[C,I],S=new ec,L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=M[Y];return tt===void 0&&(tt=new hr,M[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=M[Y];return tt===void 0&&(tt=new hr,M[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=M[Y];return tt===void 0&&(tt=new hr,M[Y]=tt),tt.getHandSpace()};function k(Y){let tt=_.indexOf(Y.inputSource);if(tt===-1)return;let _t=M[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||r),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<M.length;Y++){let tt=_[Y];tt!==null&&(_[Y]=null,M[Y].disconnect(tt))}L=null,P=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ze(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,_t=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Cs:bs,_t=g.stencil?Rs:Yi);let Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ze(d.textureWidth,d.textureHeight,{format:Tn,type:ei,depthTexture:new To(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let tt=0;tt<Y.removed.length;tt++){let _t=Y.removed[tt],rt=_.indexOf(_t);rt>=0&&(_[rt]=null,M[rt].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){let _t=Y.added[tt],rt=_.indexOf(_t);if(rt===-1){for(let It=0;It<M.length;It++)if(It>=_.length){_.push(_t),rt=It;break}else if(_[It]===null){_[It]=_t,rt=It;break}if(rt===-1)break}let Rt=M[rt];Rt&&Rt.connect(_t)}}let W=new v,Q=new v;function V(Y,tt,_t){W.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let rt=W.distanceTo(Q),Rt=tt.projectionMatrix.elements,It=_t.projectionMatrix.elements,Vt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),Kt=(Rt[9]+1)/Rt[5],Te=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],mn=(It[8]+1)/It[0],Yt=Vt*F,$t=Vt*mn,Tt=rt/(-F+mn),ge=Tt*-F;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ge),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let wt=Vt+Tt,R=Me+Tt,b=Yt-ge,O=$t+(rt-ge),$=Kt*Me/R*wt,J=Te*Me/R*wt;Y.projectionMatrix.makePerspective(b,O,$,J,wt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,_t=Y.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),S.near=I.near=C.near=tt,S.far=I.far=C.far=_t,(L!==S.near||P!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,P=S.far),C.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,S.layers.mask=C.layers.mask|I.layers.mask;let rt=Y.parent,Rt=S.cameras;it(S,rt);for(let It=0;It<Rt.length;It++)it(Rt[It],rt);Rt.length===2?V(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),dt(Y,S,rt)};function dt(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let St=null;function Ht(Y,tt){if(h=tt.getViewerPose(c||r),m=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;_t.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let It=0;It<_t.length;It++){let Vt=_t[It],Me=null;if(f!==null)Me=f.getViewport(Vt);else{let Te=u.getViewSubImage(d,Vt);Me=Te.viewport,It===0&&(t.setRenderTargetTextures(y,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(y))}let Kt=w[It];Kt===void 0&&(Kt=new Ye,Kt.layers.enable(It),Kt.viewport=new ae,w[It]=Kt),Kt.matrix.fromArray(Vt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Vt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Me.x,Me.y,Me.width,Me.height),It===0&&(S.matrix.copy(Kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Kt)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let It=u.getDepthInformation(_t[0]);It&&It.isValid&&It.texture&&x.init(t,It,i.renderState)}}for(let _t=0;_t<M.length;_t++){let rt=_[_t],Rt=M[_t];rt!==null&&Rt!==void 0&&Rt.update(rt,tt,c||r)}St&&St(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let ce=new Nu;ce.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},Hi=new Ne,ex=new Jt;function nx(o,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uu(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Se&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Se&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(g.envMap.value=M,Hi.copy(_),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),g.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(Hi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Se&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ix(o,t,e,n){let i={},s={},r=[],a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let _=M.program;n.uniformBlockBinding(y,_)}function c(y,M){let _=i[y.id];_===void 0&&(m(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",g));let A=M.program;n.updateUBOMapping(y,A);let T=t.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){let M=u();y.__bindingPointIndex=M;let _=o.createBuffer(),A=y.__size,T=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,A,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=i[y.id],_=y.uniforms,A=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let T=0,C=_.length;T<C;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,S=I.length;w<S;w++){let L=I[w];if(f(L,T,w,A)===!0){let P=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],B=0;for(let X=0;X<k.length;X++){let W=k[X],Q=x(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,P+B,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,P,L.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(y,M,_,A){let T=y.value,C=M+"_"+_;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{let I=A[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(y){let M=y.uniforms,_=0,A=16;for(let C=0,I=M.length;C<I;C++){let w=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,L=w.length;S<L;S++){let P=w[S],k=Array.isArray(P.value)?P.value:[P.value];for(let B=0,X=k.length;B<X;B++){let W=k[B],Q=x(W),V=_%A,it=V%Q.boundary,dt=V+it;_+=it,dt!==0&&A-dt<Q.storage&&(_+=A-dt),P.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=Q.storage}}}let T=_%A;return T>0&&(_+=A-T),y.__size=_,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){let M=y.target;M.removeEventListener("dispose",g);let _=r.indexOf(M.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(let y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Ao=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Mi,this.toneMappingExposure=1;let _=this,A=!1,T=0,C=0,I=null,w=-1,S=null,L=new ae,P=new ae,k=null,B=new et(0),X=0,W=e.width,Q=e.height,V=1,it=null,dt=null,St=new ae(0,0,W,Q),Ht=new ae(0,0,W,Q),ce=!1,Y=new fr,tt=!1,_t=!1,rt=new Jt,Rt=new Jt,It=new v,Vt=new ae,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function Te(){return I===null?V:1}let F=n;function mn(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),F===null){let U="webgl2";if(F=mn(U,E),F===null)throw mn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Yt,$t,Tt,ge,wt,R,b,O,$,J,q,Mt,ot,ft,Qt,K,pt,At,Ct,mt,Zt,Ft,de,D;function st(){Yt=new y0(F),Yt.init(),Ft=new Kg(F,Yt),$t=new f0(F,Yt,t,Ft),Tt=new $g(F,Yt),$t.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ge=new b0(F),wt=new Ng,R=new Jg(F,Yt,Tt,wt,$t,Ft,ge),b=new m0(_),O=new v0(_),$=new Cf(F),de=new u0(F,$),J=new _0(F,$,ge,de),q=new E0(F,J,$,ge),Ct=new S0(F,$t,R),K=new p0(wt),Mt=new Ug(_,b,O,Yt,$t,de,K),ot=new nx(_,wt),ft=new kg,Qt=new Gg(Yt),At=new h0(_,b,O,Tt,q,f,l),pt=new qg(_,q,$t),D=new ix(F,ge,$t,Tt),mt=new d0(F,Yt,ge),Zt=new M0(F,Yt,ge),ge.programs=Mt.programs,_.capabilities=$t,_.extensions=Yt,_.properties=wt,_.renderLists=ft,_.shadowMap=pt,_.state=Tt,_.info=ge}st();let G=new ic(_,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(W,Q,!1))},this.getSize=function(E){return E.set(W,Q)},this.setSize=function(E,U,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Q=U,e.width=Math.floor(E*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(E,U,z){W=E,Q=U,V=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,U,z,H){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,U,z,H),Tt.viewport(L.copy(St).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,U,z,H){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,U,z,H),Tt.scissor(P.copy(Ht).multiplyScalar(V).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Tt.setScissorTest(ce=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,U=!0,z=!0){let H=0;if(E){let N=!1;if(I!==null){let j=I.texture.format;N=j===Lc||j===Ic||j===Pc}if(N){let j=I.texture.type,lt=j===ei||j===Yi||j===ur||j===Rs||j===Ac||j===Rc,gt=At.getClearColor(),xt=At.getClearAlpha(),Pt=gt.r,Dt=gt.g,vt=gt.b;lt?(m[0]=Pt,m[1]=Dt,m[2]=vt,m[3]=xt,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Pt,x[1]=Dt,x[2]=vt,x[3]=xt,F.clearBufferiv(F.COLOR,0,x))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ft.dispose(),Qt.dispose(),wt.dispose(),b.dispose(),O.dispose(),q.dispose(),de.dispose(),D.dispose(),Mt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Qc),G.removeEventListener("sessionend",jc),Ni.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=ge.autoReset,U=pt.enabled,z=pt.autoUpdate,H=pt.needsUpdate,N=pt.type;st(),ge.autoReset=E,pt.enabled=U,pt.autoUpdate=z,pt.needsUpdate=H,pt.type=N}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let U=E.target;U.removeEventListener("dispose",Lt),be(U)}function be(E){We(E),wt.remove(E)}function We(E){let U=wt.get(E).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,H,N,j){U===null&&(U=Me);let lt=N.isMesh&&N.matrixWorld.determinant()<0,gt=Sd(E,U,z,H,N);Tt.setMaterial(H,lt);let xt=z.index,Pt=1;if(H.wireframe===!0){if(xt=J.getWireframeAttribute(z),xt===void 0)return;Pt=2}let Dt=z.drawRange,vt=z.attributes.position,jt=Dt.start*Pt,fe=(Dt.start+Dt.count)*Pt;j!==null&&(jt=Math.max(jt,j.start*Pt),fe=Math.min(fe,(j.start+j.count)*Pt)),xt!==null?(jt=Math.max(jt,0),fe=Math.min(fe,xt.count)):vt!=null&&(jt=Math.max(jt,0),fe=Math.min(fe,vt.count));let xe=fe-jt;if(xe<0||xe===1/0)return;de.setup(N,H,gt,z,xt);let nn,ne=mt;if(xt!==null&&(nn=$.get(xt),ne=Zt,ne.setIndex(nn)),N.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*Te()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(N.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*Te()),N.isLineSegments?ne.setMode(F.LINES):N.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else N.isPoints?ne.setMode(F.POINTS):N.isSprite&&ne.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let bt=N._multiDrawStarts,Xn=N._multiDrawCounts,ie=N._multiDrawCount,bn=xt?$.get(xt).bytesPerElement:1,es=wt.get(H).currentProgram.getUniforms();for(let an=0;an<ie;an++)es.setValue(F,"_gl_DrawID",an),ne.render(bt[an]/bn,Xn[an])}else if(N.isInstancedMesh)ne.renderInstances(jt,xe,N.count);else if(z.isInstancedBufferGeometry){let bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Xn=Math.min(z.instanceCount,bt);ne.renderInstances(jt,xe,Xn)}else ne.render(jt,xe)};function re(E,U,z){E.transparent===!0&&E.side===$e&&E.forceSinglePass===!1?(E.side=Se,E.needsUpdate=!0,Dr(E,U,z),E.side=Si,E.needsUpdate=!0,Dr(E,U,z),E.side=$e):Dr(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=Qt.get(z),p.init(U),M.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let j=N.material;if(j)if(Array.isArray(j))for(let lt=0;lt<j.length;lt++){let gt=j[lt];re(gt,z,N),H.add(gt)}else re(j,z,N),H.add(j)}),M.pop(),p=null,H},this.compileAsync=function(E,U,z=null){let H=this.compile(E,U,z);return new Promise(N=>{function j(){if(H.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){N(E);return}setTimeout(j,10)}Yt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Mn=null;function Wn(E){Mn&&Mn(E)}function Qc(){Ni.stop()}function jc(){Ni.start()}let Ni=new Nu;Ni.setAnimationLoop(Wn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(E){Mn=E,G.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},G.addEventListener("sessionstart",Qc),G.addEventListener("sessionend",jc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,I),p=Qt.get(E,M.length),p.init(U),M.push(p),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),_t=this.localClippingEnabled,tt=K.init(this.clippingPlanes,_t),g=ft.get(E,y.length),g.init(),y.push(g),G.enabled===!0&&G.isPresenting===!0){let j=_.xr.getDepthSensingMesh();j!==null&&_a(j,U,-1/0,_.sortObjects)}_a(E,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(it,dt),Kt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Kt&&At.addToRenderList(g,E),this.info.render.frame++,tt===!0&&K.beginShadows();let z=p.state.shadowsArray;pt.render(z,E,U),tt===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let j=U.cameras;if(N.length>0)for(let lt=0,gt=j.length;lt<gt;lt++){let xt=j[lt];eh(H,N,E,xt)}Kt&&At.render(E);for(let lt=0,gt=j.length;lt<gt;lt++){let xt=j[lt];th(g,E,xt,xt.viewport)}}else N.length>0&&eh(H,N,E,U),Kt&&At.render(E),th(g,E,U);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(_,E,U),de.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],tt===!0&&K.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function _a(E,U,z,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){H&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);let lt=q.update(E),gt=E.material;gt.visible&&g.push(E,lt,gt,z,Vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let lt=q.update(E),gt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Vt.copy(lt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(gt)){let xt=lt.groups;for(let Pt=0,Dt=xt.length;Pt<Dt;Pt++){let vt=xt[Pt],jt=gt[vt.materialIndex];jt&&jt.visible&&g.push(E,lt,jt,z,Vt.z,vt)}}else gt.visible&&g.push(E,lt,gt,z,Vt.z,null)}}let j=E.children;for(let lt=0,gt=j.length;lt<gt;lt++)_a(j[lt],U,z,H)}function th(E,U,z,H){let N=E.opaque,j=E.transmissive,lt=E.transparent;p.setupLightsView(z),tt===!0&&K.setGlobalState(_.clippingPlanes,z),H&&Tt.viewport(L.copy(H)),N.length>0&&Lr(N,U,z),j.length>0&&Lr(j,U,z),lt.length>0&&Lr(lt,U,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function eh(E,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ze(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?un:ei,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let j=p.state.transmissionRenderTarget[H.id],lt=H.viewport||L;j.setSize(lt.z,lt.w);let gt=_.getRenderTarget();_.setRenderTarget(j),_.getClearColor(B),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Kt&&At.render(z);let xt=_.toneMapping;_.toneMapping=Mi;let Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),tt===!0&&K.setGlobalState(_.clippingPlanes,H),Lr(E,z,H),R.updateMultisampleRenderTarget(j),R.updateRenderTargetMipmap(j),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,jt=U.length;vt<jt;vt++){let fe=U[vt],xe=fe.object,nn=fe.geometry,ne=fe.material,bt=fe.group;if(ne.side===$e&&xe.layers.test(H.layers)){let Xn=ne.side;ne.side=Se,ne.needsUpdate=!0,nh(xe,z,H,nn,ne,bt),ne.side=Xn,ne.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(j),R.updateRenderTargetMipmap(j))}_.setRenderTarget(gt),_.setClearColor(B,X),Pt!==void 0&&(H.viewport=Pt),_.toneMapping=xt}function Lr(E,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,j=E.length;N<j;N++){let lt=E[N],gt=lt.object,xt=lt.geometry,Pt=H===null?lt.material:H,Dt=lt.group;gt.layers.test(z.layers)&&nh(gt,U,z,xt,Pt,Dt)}}function nh(E,U,z,H,N,j){E.onBeforeRender(_,U,z,H,N,j),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(_,U,z,H,E,j),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=Se,N.needsUpdate=!0,_.renderBufferDirect(z,U,H,N,E,j),N.side=Si,N.needsUpdate=!0,_.renderBufferDirect(z,U,H,N,E,j),N.side=$e):_.renderBufferDirect(z,U,H,N,E,j),E.onAfterRender(_,U,z,H,N,j)}function Dr(E,U,z){U.isScene!==!0&&(U=Me);let H=wt.get(E),N=p.state.lights,j=p.state.shadowsArray,lt=N.state.version,gt=Mt.getParameters(E,N.state,j,U,z),xt=Mt.getProgramCacheKey(gt),Pt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?O:b).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Lt),Pt=new Map,H.programs=Pt);let Dt=Pt.get(xt);if(Dt!==void 0){if(H.currentProgram===Dt&&H.lightsStateVersion===lt)return sh(E,gt),Dt}else gt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(gt,_),Dt=Mt.acquireProgram(gt,xt),Pt.set(xt,Dt),H.uniforms=gt.uniforms;let vt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(vt.clippingPlanes=K.uniform),sh(E,gt),H.needsLights=wd(E),H.lightsStateVersion=lt,H.needsLights&&(vt.ambientLightColor.value=N.state.ambient,vt.lightProbe.value=N.state.probe,vt.directionalLights.value=N.state.directional,vt.directionalLightShadows.value=N.state.directionalShadow,vt.spotLights.value=N.state.spot,vt.spotLightShadows.value=N.state.spotShadow,vt.rectAreaLights.value=N.state.rectArea,vt.ltc_1.value=N.state.rectAreaLTC1,vt.ltc_2.value=N.state.rectAreaLTC2,vt.pointLights.value=N.state.point,vt.pointLightShadows.value=N.state.pointShadow,vt.hemisphereLights.value=N.state.hemi,vt.directionalShadowMap.value=N.state.directionalShadowMap,vt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,vt.spotShadowMap.value=N.state.spotShadowMap,vt.spotLightMatrix.value=N.state.spotLightMatrix,vt.spotLightMap.value=N.state.spotLightMap,vt.pointShadowMap.value=N.state.pointShadowMap,vt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Dt,H.uniformsList=null,Dt}function ih(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Es.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function sh(E,U){let z=wt.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Sd(E,U,z,H,N){U.isScene!==!0&&(U=Me),R.resetTextureUnits();let j=U.fog,lt=H.isMeshStandardMaterial?U.environment:null,gt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bs,xt=(H.isMeshStandardMaterial?O:b).get(H.envMap||lt),Pt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),vt=!!z.morphAttributes.position,jt=!!z.morphAttributes.normal,fe=!!z.morphAttributes.color,xe=Mi;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=_.toneMapping);let nn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=nn!==void 0?nn.length:0,bt=wt.get(H),Xn=p.state.lights;if(tt===!0&&(_t===!0||E!==S)){let gn=E===S&&H.id===w;K.setState(H,E,gn)}let ie=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Xn.state.version||bt.outputColorSpace!==gt||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==xt||H.fog===!0&&bt.fog!==j||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==K.numPlanes||bt.numIntersection!==K.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==Dt||bt.morphTargets!==vt||bt.morphNormals!==jt||bt.morphColors!==fe||bt.toneMapping!==xe||bt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,bt.__version=H.version);let bn=bt.currentProgram;ie===!0&&(bn=Dr(H,U,N));let es=!1,an=!1,Zs=!1,ve=bn.getUniforms(),In=bt.uniforms;if(Tt.useProgram(bn.program)&&(es=!0,an=!0,Zs=!0),H.id!==w&&(w=H.id,an=!0),es||S!==E){Tt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),hf(rt),uf(rt),ve.setValue(F,"projectionMatrix",rt)):ve.setValue(F,"projectionMatrix",E.projectionMatrix),ve.setValue(F,"viewMatrix",E.matrixWorldInverse);let hi=ve.map.cameraPosition;hi!==void 0&&hi.setValue(F,It.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,an=!0,Zs=!0)}if(N.isSkinnedMesh){ve.setOptional(F,N,"bindMatrix"),ve.setOptional(F,N,"bindMatrixInverse");let gn=N.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),ve.setValue(F,"boneTexture",gn.boneTexture,R))}N.isBatchedMesh&&(ve.setOptional(F,N,"batchingTexture"),ve.setValue(F,"batchingTexture",N._matricesTexture,R),ve.setOptional(F,N,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",N._indirectTexture,R),ve.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",N._colorsTexture,R));let Js=z.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Ct.update(N,z,bn),(an||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,ve.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(In.envMap.value=xt,In.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(In.envMapIntensity.value=U.environmentIntensity),an&&(ve.setValue(F,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&Ed(In,Zs),j&&H.fog===!0&&ot.refreshFogUniforms(In,j),ot.refreshMaterialUniforms(In,H,V,Q,p.state.transmissionRenderTarget[E.id]),Es.upload(F,ih(bt),In,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Es.upload(F,ih(bt),In,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(F,"center",N.center),ve.setValue(F,"modelViewMatrix",N.modelViewMatrix),ve.setValue(F,"normalMatrix",N.normalMatrix),ve.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let gn=H.uniformsGroups;for(let hi=0,ui=gn.length;hi<ui;hi++){let rh=gn[hi];D.update(rh,bn),D.bind(rh,bn)}}return bn}function Ed(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function wd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,U,z){wt.get(E.texture).__webglTexture=U,wt.get(E.depthTexture).__webglTexture=z;let H=wt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let z=wt.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){I=E,T=U,C=z;let H=!0,N=null,j=!1,lt=!1;if(E){let xt=wt.get(E);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(xt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(xt.__hasExternalTextures)R.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let vt=E.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&wt.has(vt)&&(E.width!==vt.image.width||E.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);let Dt=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][z]:N=Dt[U],j=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[z]:N=Dt,L.copy(E.viewport),P.copy(E.scissor),k=E.scissorTest}else L.copy(St).multiplyScalar(V).floor(),P.copy(Ht).multiplyScalar(V).floor(),k=ce;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&Tt.drawBuffers(E,N),Tt.viewport(L),Tt.scissor(P),Tt.setScissorTest(k),j){let xt=wt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,z)}else if(lt){let xt=wt.get(E.texture),Pt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Pt)}w=-1},this.readRenderTargetPixels=function(E,U,z,H,N,j,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Tt.bindFramebuffer(F.FRAMEBUFFER,gt);try{let xt=E.texture,Pt=xt.format,Dt=xt.type;if(!$t.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&z>=0&&z<=E.height-N&&F.readPixels(U,z,H,N,Ft.convert(Pt),Ft.convert(Dt),j)}finally{let xt=I!==null?wt.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,H,N,j,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let xt=E.texture,Pt=xt.format,Dt=xt.type;if(!$t.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&z>=0&&z<=E.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,gt);let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,j.byteLength,F.STREAM_READ),F.readPixels(U,z,H,N,Ft.convert(Pt),Ft.convert(Dt),0);let jt=I!==null?wt.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,jt);let fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cf(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,j),F.deleteBuffer(vt),F.deleteSync(fe),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-z),N=Math.floor(E.image.width*H),j=Math.floor(E.image.height*H),lt=U!==null?U.x:0,gt=U!==null?U.y:0;R.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,lt,gt,N,j),Tt.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,H=null,N=0){E.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let j,lt,gt,xt,Pt,Dt,vt,jt,fe,xe=E.isCompressedTexture?E.mipmaps[N]:E.image;z!==null?(j=z.max.x-z.min.x,lt=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Pt=z.min.y,Dt=z.isBox3?z.min.z:0):(j=xe.width,lt=xe.height,gt=xe.depth||1,xt=0,Pt=0,Dt=0),H!==null?(vt=H.x,jt=H.y,fe=H.z):(vt=0,jt=0,fe=0);let nn=Ft.convert(U.format),ne=Ft.convert(U.type),bt;U.isData3DTexture?(R.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Xn=F.getParameter(F.UNPACK_ROW_LENGTH),ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bn=F.getParameter(F.UNPACK_SKIP_PIXELS),es=F.getParameter(F.UNPACK_SKIP_ROWS),an=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt);let Zs=E.isDataArrayTexture||E.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let In=wt.get(E),Js=wt.get(U),gn=wt.get(In.__renderTarget),hi=wt.get(Js.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,gn.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<gt;ui++)Zs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(E).__webglTexture,N,Dt+ui),E.isDepthTexture?(ve&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,N,fe+ui),F.blitFramebuffer(xt,Pt,j,lt,vt,jt,j,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ve?F.copyTexSubImage3D(bt,N,vt,jt,fe+ui,xt,Pt,j,lt):F.copyTexSubImage2D(bt,N,vt,jt,fe+ui,xt,Pt,j,lt);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(bt,N,vt,jt,fe,j,lt,gt,nn,ne,xe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,vt,jt,fe,j,lt,gt,nn,xe.data):F.texSubImage3D(bt,N,vt,jt,fe,j,lt,gt,nn,ne,xe):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,vt,jt,j,lt,nn,ne,xe.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,vt,jt,xe.width,xe.height,nn,xe.data):F.texSubImage2D(F.TEXTURE_2D,N,vt,jt,j,lt,nn,ne,xe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bn),F.pixelStorei(F.UNPACK_SKIP_ROWS,es),F.pixelStorei(F.UNPACK_SKIP_IMAGES,an),N===0&&U.generateMipmaps&&F.generateMipmap(bt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,H=null,N=0){return E.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,H,N)},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,Tt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Ds=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ro=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zl,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new v,pr=class o{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new o(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mr=class extends kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,er=new v,xs=new v,vs=new v,ys=new ht,nr=new ht,zu=new Jt,eo=new v,ir=new v,no=new v,su=new ht,Ka=new ht,ru=new ht,Co=class extends Fe{constructor(t=new mr){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ro(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new pr(n,3,0,!1)),gs.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let r=this.center;io(eo.set(-.5,-.5,0),vs,r,xs,i,s),io(ir.set(.5,-.5,0),vs,r,xs,i,s),io(no.set(.5,.5,0),vs,r,xs,i,s),su.set(0,0),Ka.set(1,0),ru.set(1,1);let a=t.ray.intersectTriangle(eo,ir,no,!1,er);if(a===null&&(io(ir.set(-.5,.5,0),vs,r,xs,i,s),Ka.set(0,1),a=t.ray.intersectTriangle(eo,no,ir,!1,er),a===null))return;let l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:yi.getInterpolation(er,eo,ir,no,su,Ka,ru,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function io(o,t,e,n,i,s){ys.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(nr.x=s*ys.x-i*ys.y,nr.y=i*ys.x+s*ys.y):nr.copy(ys),o.copy(t),o.x+=nr.x,o.y+=nr.y,o.applyMatrix4(zu)}var sc=class extends sn{constructor(t=null,e=1,n=1,i,s,r,a,l,c=hn,h=hn,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gr=class extends pe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new Jt,ou=new Jt,so=[],au=new ni,sx=new Jt,sr=new ut,rr=new ii,Po=class extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),au.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(au)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),rr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_s),ou.multiplyMatrices(n,_s),sr.matrixWorld=ou,sr.raycast(t,so);for(let r=0,a=so.length;r<a;r++){let l=so[r];l.instanceId=s,l.object=this,e.push(l)}so.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sc(new Float32Array(i*this.count),i,this.count,Cc,Nn));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var $i=class extends kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Io=new v,Lo=new v,lu=new Jt,or=new dr,ro=new ii,Qa=new v,cu=new v,rc=class extends Fe{constructor(t=new ue,e=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Io.fromBufferAttribute(e,i-1),Lo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Io.distanceTo(Lo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=s,t.ray.intersectsSphere(ro)===!1)return;lu.copy(i).invert(),or.copy(t.ray).applyMatrix4(lu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),M=oo(this,t,or,l,p,y);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=oo(this,t,or,l,x,g);p&&e.push(p)}}else{let f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let x=f,g=m-1;x<g;x+=c){let p=oo(this,t,or,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=oo(this,t,or,l,m-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function oo(o,t,e,n,i,s){let r=o.geometry.attributes.position;if(Io.fromBufferAttribute(r,i),Lo.fromBufferAttribute(r,s),e.distanceSqToSegment(Io,Lo,Qa,cu)>n)return;Qa.applyMatrix4(o.matrixWorld);let l=t.ray.origin.distanceTo(Qa);if(!(l<t.near||l>t.far))return{distance:l,point:cu.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}var hu=new v,uu=new v,Us=class extends rc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)hu.fromBufferAttribute(e,i),uu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hu.distanceTo(uu);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xr=class extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},du=new Jt,oc=new dr,ao=new ii,lo=new v,Ns=class extends Fe{constructor(t=new ue,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=s,t.ray.intersectsSphere(ao)===!1)return;du.copy(i).invert(),oc.copy(t.ray).applyMatrix4(du);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);lo.fromBufferAttribute(u,g),fu(lo,g,l,i,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,x=f;m<x;m++)lo.fromBufferAttribute(u,m),fu(lo,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function fu(o,t,e,n,i,s,r){let a=oc.distanceSqToPoint(o);if(a<e){let l=new v;oc.closestPointToPoint(o,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var si=class extends sn{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class o extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],l=[],c=new v,h=new ht;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ke=class o extends ue{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function y(){let _=new v,A=new v,T=0,C=(e-t)/n;for(let I=0;I<=s;I++){let w=[],S=I/s,L=S*(e-t)+t;for(let P=0;P<=i;P++){let k=P/i,B=k*l+a,X=Math.sin(B),W=Math.cos(B);A.x=L*X,A.y=-S*n+g,A.z=L*W,u.push(A.x,A.y,A.z),_.set(X,C,W).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-S),w.push(m++)}x.push(w)}for(let I=0;I<i;I++)for(let w=0;w<s;w++){let S=x[w][I],L=x[w+1][I],P=x[w+1][I+1],k=x[w][I+1];(t>0||w!==0)&&(h.push(S,L,k),T+=3),(e>0||w!==s-1)&&(h.push(L,P,k),T+=3)}c.addGroup(p,T,0),p+=T}function M(_){let A=m,T=new ht,C=new v,I=0,w=_===!0?t:e,S=_===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;let L=m;for(let P=0;P<=i;P++){let B=P/i*l+a,X=Math.cos(B),W=Math.sin(B);C.x=w*W,C.y=g*S,C.z=w*X,u.push(C.x,C.y,C.z),d.push(0,S,0),T.x=X*.5+.5,T.y=W*.5*S+.5,f.push(T.x,T.y),m++}for(let P=0;P<i;P++){let k=A+P,B=L+P;_===!0?h.push(B,B+1,k):h.push(B+1,B,k),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fs=class o extends ke{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new o(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Do=class o extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(s.slice(),3)),this.setAttribute("uv",new Xt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new v,_=new v,A=new v;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],_),f(e[T+2],A),l(M,_,A,y)}function l(y,M,_,A){let T=A+1,C=[];for(let I=0;I<=T;I++){C[I]=[];let w=y.clone().lerp(_,I/T),S=M.clone().lerp(_,I/T),L=T-I;for(let P=0;P<=L;P++)P===0&&I===T?C[I][P]=w:C[I][P]=w.clone().lerp(S,P/L)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){let S=Math.floor(w/2);w%2===0?(d(C[I][S+1]),d(C[I+1][S]),d(C[I][S])):(d(C[I][S+1]),d(C[I+1][S+1]),d(C[I+1][S]))}}function c(y){let M=new v;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(y),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){let y=new v;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];let _=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;r.push(_,1-A)}m(),u()}function u(){for(let y=0;y<r.length;y+=6){let M=r[y+0],_=r[y+2],A=r[y+4],T=Math.max(M,_,A),C=Math.min(M,_,A);T>.9&&C<.1&&(M<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),A<.2&&(r[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,M){let _=y*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function m(){let y=new v,M=new v,_=new v,A=new v,T=new ht,C=new ht,I=new ht;for(let w=0,S=0;w<s.length;w+=9,S+=6){y.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),T.set(r[S+0],r[S+1]),C.set(r[S+2],r[S+3]),I.set(r[S+4],r[S+5]),A.copy(y).add(M).add(_).divideScalar(3);let L=g(A);x(T,S+0,y,L),x(C,S+2,M,L),x(I,S+4,_,L)}}function x(y,M,_,A){A<0&&y.x===1&&(r[M]=y.x-1),_.x===0&&_.z===0&&(r[M]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.vertices,t.indices,t.radius,t.details)}};var vr=class o extends Do{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new o(t.radius,t.detail)}},Uo=class o extends Do{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new o(t.radius,t.detail)}},No=class o extends ue{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new v,m=new ht;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=s+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,M=y,_=y+n+1,A=y+n+2,T=y+1;a.push(M,_,T),a.push(_,A,T)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var vn=class o extends ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(r+a,Math.PI),c=0,h=[],u=new v,d=new v,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],M=p/n,_=0;p===0&&r===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(i+T*s)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(i+T*s)*Math.sin(r+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=h[p][y+1],_=h[p][y],A=h[p+1][y],T=h[p+1][y+1];(p!==0||r>0)&&f.push(M,_,T),(p!==n-1||l<Math.PI)&&f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yn=class o extends ue{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let r=[],a=[],l=[],c=[],h=new v,u=new v,d=new v;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*s,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;r.push(x,g,y),r.push(g,p,y)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fo=class extends me{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Nt=class extends kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ko=class extends Nt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function co(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function rx(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ac=class extends ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case hh:s=t,a=2*e-n;break;case uh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:r=t,l=2*n-e;break;case uh:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let A=0;A!==a;++A)s[A]=p*r[h+A]+y*r[c+A]+M*r[l+A]+_*r[u+A];return s}},lc=class extends ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}},cc=class extends ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ac(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case Bl:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&rx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ba,s=t.length-1,r=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Bl;var Zi=class extends An{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=go;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends An{};hc.prototype.ValueTypeName="color";var uc=class extends An{};uc.prototype.ValueTypeName="number";var dc=class extends ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)he.slerpFlat(s,0,r,c-a,r,c,l);return s}},Oo=class extends An{InterpolantFactoryMethodLinear(t){return new dc(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends An{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=go;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends An{};fc.prototype.ValueTypeName="vector";var pc=class{constructor(t,e,n){let i=this,s=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},ox=new pc,mc=class{constructor(t){this.manager=t!==void 0?t:ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Os=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ja=new Jt,pu=new v,mu=new v,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gu=new Jt,ar=new v,tl=new v,gc=class extends Bo{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),tl.copy(n.position),tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tl),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}},He=class extends yr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},xc=class extends Bo{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ti=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function xu(){return performance.now()}var Uc="\\[\\]\\.:\\/",ax=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",lx="[^"+Uc.replace("\\.","")+"]",cx=/((?:WC+[\/:])*)/.source.replace("WC",Nc),hx=/(WCOD+)?/.source.replace("WCOD",lx),ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),fx=new RegExp("^"+cx+hx+ux+dx+"$"),px=["material","materials","bones","map"],vc=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class o{constructor(t,e,n){this.path=e,this.parsedPath=n||o.parseTrackName(e),this.node=o.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new o.Composite(t,e,n):new o(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(t){let e=fx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);px.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=o.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[i];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=vc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);var zt=(o,t,e)=>o<t?t:o>e?e:o;var Et=(o,t)=>o+Math.random()*(t-o);var Bn=Math.PI/180;function Ki(o,t=new v){let e=Math.abs(o.x)<.9?new v(1,0,0):new v(0,1,0),n=new v().crossVectors(o,e).normalize(),i=new v().crossVectors(o,n),s=Math.random()*Math.PI*2;return t.copy(n).multiplyScalar(Math.cos(s)).addScaledVector(i,Math.sin(s))}function Fc(o,t,e,n,i){let s=0,r=n,a=-1,l=0,c=[o.x,o.y,o.z],h=[t.x,t.y,t.z];for(let u=0;u<3;u++){let d=c[u],f=h[u],m=e.min[u],x=e.max[u];if(Math.abs(f)<1e-12){if(d<m||d>x)return-1;continue}let g=1/f,p=(m-d)*g,y=(x-d)*g,M=-1;if(p>y){let _=p;p=y,y=_,M=1}if(p>s&&(s=p,a=u,l=M),y<r&&(r=y),s>r)return-1}return i&&(i.n[0]=i.n[1]=i.n[2]=0,a>=0?i.n[a]=l:(i.n[0]=-t.x,i.n[1]=-t.y,i.n[2]=-t.z)),s}function zn(o,t,e,n,i){let s=o.x-e.x,r=o.y-e.y,a=o.z-e.z,l=s*t.x+r*t.y+a*t.z,c=s*s+r*r+a*a-n*n;if(c<=0)return 0;if(l>0)return-1;let h=l*l-c;if(h<0)return-1;let u=-l-Math.sqrt(h);return u<=i?u:-1}function Xo(o,t,e){return e.x=zt(o.x,t.min[0],t.max[0]),e.y=zt(o.y,t.min[1],t.max[1]),e.z=zt(o.z,t.min[2],t.max[2]),e}function Qi(o,t,e){let n=t.dot(t)-e*e,i=2*o.dot(t),s=o.dot(o);if(Math.abs(n)<1e-6){if(Math.abs(i)<1e-9)return-1;let u=-s/i;return u>0?u:-1}let r=i*i-4*n*s;if(r<0)return-1;let a=Math.sqrt(r),l=(-i-a)/(2*n),c=(-i+a)/(2*n),h=Math.min(l,c)>0?Math.min(l,c):Math.max(l,c);return h>0?h:-1}function mx(o,t,e,n){if(o<=n)return t*o+.5*e*o*o;let i=t+e*n;return t*n+.5*e*n*n+i*(o-n)}function qo(o,t,e,n,i,s=4){let r=new v,a=h=>r.copy(o).addScaledVector(t,h).length()-mx(h,e,n,i),l=0,c=.05;if(a(l)<=0)return 0;for(;a(c)>0;)if(c*=1.6,c>s)return-1;for(let h=0;h<30;h++){let u=(l+c)*.5;a(u)>0?l=u:c=u}return c}var Wo=class{constructor(){this.a=[]}push(t,e){let n=this.a;n.push([e,t]);let i=n.length-1;for(;i>0;){let s=i-1>>1;if(n[s][0]<=n[i][0])break;[n[s],n[i]]=[n[i],n[s]],i=s}}pop(){let t=this.a,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){let s=2*i+1,r=s+1,a=i;if(s<t.length&&t[s][0]<t[a][0]&&(a=s),r<t.length&&t[r][0]<t[a][0]&&(a=r),a===i)break;[t[a],t[i]]=[t[i],t[a]],i=a}}return e[1]}get size(){return this.a.length}};function Vu(o,t=!1){let e=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<o.length;++h){let u=o[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<o.length;++d){let f=o[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=o[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Hu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][d]);let m=Hu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Hu(o){let t,e,n,i=-1,s=0;for(let c=0;c<o.length;++c){let h=o[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let r=new t(s),a=new pe(r,e,n),l=0;for(let c=0;c<o.length;++c){let h=o[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Mr=new v;function _n(o,t,e,n,i,s){let r=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Mr.copy(t),Mr[n]=0,Mr.normalize();let c=.5*r/(r+a),h=1-Mr.angleTo(o)/l;return Math.sign(Mr[e])===1?h*c:a/(r+a)+c+c*(1-h)}var Yo=class extends ye{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;let a=new v,l=new v,c=new v(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new v,x=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*s,h[g+1]=c.y*Math.sign(a.y)+l.y*s,h[g+2]=c.z*Math.sign(a.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=_n(m,l,"z","y",s,n),d[p+1]=1-_n(m,l,"y","z",s,e);break;case 1:m.set(-1,0,0),d[p+0]=1-_n(m,l,"z","y",s,n),d[p+1]=1-_n(m,l,"y","z",s,e);break;case 2:m.set(0,1,0),d[p+0]=1-_n(m,l,"x","z",s,t),d[p+1]=_n(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[p+0]=1-_n(m,l,"x","z",s,t),d[p+1]=1-_n(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[p+0]=1-_n(m,l,"x","y",s,t),d[p+1]=1-_n(m,l,"y","x",s,e);break;case 5:m.set(0,0,-1),d[p+0]=_n(m,l,"x","y",s,t),d[p+1]=1-_n(m,l,"y","x",s,e);break}}};var Hs=new Jt,br=new he,gx=new Ne,Oc=new v,Bc=new v,xx=new v(0,1,0),Hn=class{constructor(){this.parts=new Map}add(t,e,n=0,i=0,s=0,r=0,a=0,l=0,c=1,h=1,u=1){return Hs.compose(Oc.set(n,i,s),br.setFromEuler(gx.set(r,a,l)),Bc.set(c,h,u)),this.addMatrix(t,e,Hs)}addMatrix(t,e,n){let i=t.index?t.toNonIndexed():t.clone();i.applyMatrix4(n);for(let s of Object.keys(i.attributes))["position","normal","uv"].includes(s)||i.deleteAttribute(s);return this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(i),this}limb(t,e,n,i,s,r=8){let a=new v().subVectors(e,t),l=a.length(),c=new ke(i,n,l,r);return br.setFromUnitVectors(xx,a.normalize()),Hs.compose(Oc.addVectors(t,e).multiplyScalar(.5),br,Bc.set(1,1,1)),this.addMatrix(c,s,Hs)}build(t=!0){let e=new Ae;for(let[n,i]of this.parts){let s=Vu(i,!1),r=new ut(s,n);r.castShadow=t,r.receiveShadow=t,n.userData&&n.userData.glow&&(r.castShadow=!1,r.userData.noOutline=!0),e.add(r)}return e}},yt=(o,t,e,n=.02,i=2)=>new Yo(o,t,e,i,Math.min(n,o/2-.001,t/2-.001,e/2-.001)),Gt=(o,t,e)=>new ye(o,t,e),te=(o,t,e,n=10)=>new ke(t,o,e,n),Rn=(o,t=12,e=9)=>new vn(o,t,e),Oe=(o,t,e=8,n=20)=>new yn(o,t,e,n),vx=(o,t,e=8)=>new Fs(o,t,e),Vs={};function oi(o,t=2.2){let e=new qt({color:new et(o).multiplyScalar(t)});return e.userData.glow=!0,e}function zc(o){let t="team"+o;if(Vs[t])return Vs[t];let e=new et(o);return Vs[t]={suit:new Nt({color:14672356,roughness:.82,metalness:.02}),fabric:new Nt({color:12172739,roughness:.92,metalness:0}),hard:new Nt({color:9278620,roughness:.38,metalness:.75}),dark:new Nt({color:2896183,roughness:.55,metalness:.45}),team:new Nt({color:e,roughness:.5,metalness:.2,emissive:e,emissiveIntensity:.25}),visor:new Nt({color:2366736,roughness:.06,metalness:1,emissive:e,emissiveIntensity:.12}),glow:oi(o,2.4),white:oi(14676735,1.8)}}function yx(o){let t="gun"+o;return Vs[t]?Vs[t]:Vs[t]={poly:new Nt({color:2369581,roughness:.62,metalness:.25}),metal:new Nt({color:9081240,roughness:.3,metalness:.85}),gun:new Nt({color:4870746,roughness:.45,metalness:.6}),tan:new Nt({color:8221793,roughness:.7,metalness:.15}),accent:new Nt({color:o,roughness:.45,emissive:o,emissiveIntensity:.35}),glass:new ko({color:8378623,roughness:.05,metalness:0,transparent:!0,opacity:.14,depthWrite:!1,side:$e}),coil:oi(10481919,2.5),red:oi(16726570,1.6),green:oi(5111674,1.6),orange:oi(16747050,1.8),yellow:oi(16765498,2.4),yellowDim:oi(16761402,1.2),yellowPaint:new Nt({color:14725152,roughness:.4,metalness:.3,emissive:3811840,emissiveIntensity:.4})}}function Hc(o,t,e=1){let n=new Ae,i=(r,a=0,l=0,c=0)=>{let h=new ut(r,t);h.position.set(a,l,0),h.rotation.z=c,n.add(h)},s=e;if(i(new ri(.0011*s,12)),o==="ticks")i(new Re(6e-4*s,.0026*s),0,.0042*s),i(new Re(.0026*s,6e-4*s),-.0042*s,0),i(new Re(.0026*s,6e-4*s),.0042*s,0);else if(o==="ring")for(let r=0;r<4;r++)i(new No(.0058*s,.0066*s,16,1,r*Math.PI/2+.25,Math.PI/2-.5));else if(o==="chevron")i(new Re(.0036*s,6e-4*s),-.0013*s,-.0028*s,.6),i(new Re(.0036*s,6e-4*s),.0013*s,-.0028*s,-.6);else if(o==="bars")i(new Re(.0034*s,6e-4*s),-.0042*s,0),i(new Re(.0034*s,6e-4*s),.0042*s,0);else if(o==="cross")for(let[r,a,l,c]of[[.006,0,.007,5e-4],[-.006,0,.007,5e-4],[0,.006,5e-4,.007],[0,-.006,5e-4,.007]])i(new Re(l*s,c*s),r*s,a*s);return n}function _x(o,t,e,n,i,s=.05,r="ticks",a=null){o.add(yt(s*.7,.016,.085,.005),t.poly,0,e-.042/2-.012,n+.005),o.add(yt(s*.5,.012,.03,.004),t.gun,0,e-.042/2-.022,n+.03);for(let d of[-1,1])o.add(yt(.007,.042+.014,.06,.003),t.poly,d*(s/2+.002),e+.002,n,-.18,0,0),o.add(Gt(.0025,.042*.7,.004),a||t.coil,d*(s/2+.006),e,n-.06/2+.006);o.add(yt(s+.012,.007,.06*.75,.003),t.poly,0,e+.042/2+.008,n+.006),o.add(Gt(s*.8,.003,.006),a||t.coil,0,e-.042/2-.004,n-.06/2+.004),o.add(te(.005,.005,.012,8),a||t.coil,0,e-.042/2-.006,n+.06/2-.004,Math.PI/2);let h=new ut(new Re(s,.042),t.glass);h.position.set(0,e,n-.01);let u=Hc(r,i);return u.position.set(0,e,n-.011),[h,u]}function kc(o,t,e,n,i,s,r){o.add(yt(.03,.016,.05,.005),t.poly,0,e-.03,n+.02),o.add(yt(.024,.01,.028,.004),t.gun,0,e-.019,n+.03,-.35),o.add(Gt(.016,.003,.004),r||i,0,e-.014,n+.017);let a=new ut(new Re(.03,.026),new qt({color:i.color,transparent:!0,opacity:.05,depthWrite:!1,blending:Ze}));a.position.set(0,e,n-.01);let l=Hc(s,i);return l.position.set(0,e,n-.011),[a,l]}function Mx(o,t,e,n,i,s,r,a=null){let l=s*2.3,c=s*.28,h=(f,m,x,g)=>{let p=l*x;o.add(yt(p,c*1.3,m,c*.5),g,0,e+p/2-c*.65,f),o.add(yt(p,c*1.3,m,c*.5),g,0,e-p/2+c*.65,f),o.add(yt(c*1.3,p-c*2.4,m,c*.5),g,p/2-c*.65,e,f),o.add(yt(c*1.3,p-c*2.4,m,c*.5),g,-p/2+c*.65,e,f)};h(n,i,1,t.poly),h(n-i/2-.012,.028,1.18,t.gun),h(n+i/2+.01,.024,1.08,t.gun),o.add(Oe(s*1.02,.0022,6,24),a||t.coil,0,e,n-i/2-.027),o.add(Gt(.016,.026,.024),t.gun,0,e-l/2-.012,n-i*.28),o.add(Gt(.016,.026,.024),t.gun,0,e-l/2-.012,n+i*.28),o.add(yt(.016,.022,i*.45,.004),t.poly,l/2+.009,e+s*.3,n),o.add(Gt(.002,.008,i*.3),a||t.coil,l/2+.018,e+s*.3,n),o.add(Gt(l*.7,.002,.004),a||t.coil,0,e+l/2+.0012,n+i*.2);let u=new ut(new Re(l-c*2.6,l-c*2.6),t.glass);u.position.set(0,e,n+i/2-.004);let d=Hc("cross",r,.85);return d.position.set(0,e,n+i/2-.005),[u,d]}function Gu(o,t,e={}){let n=yx(t),i=new Hn,s=new Ae,r={zoom:1.5,sight:new v,hand:new v(0,-.04,-.34),grip:new v(0,-.08,.01),muzzle:new v(0,.01,-.75)},a=[],l=null,c=new Hn;if(o==="rifle"){i.add(yt(.07,.095,.34,.012),n.gun,0,0,-.05),i.add(yt(.072,.03,.2,.008),n.poly,0,-.055,-.02),i.add(Gt(.052,.014,.4),n.metal,0,.055,-.1);for(let u=0;u<12;u++)i.add(Gt(.056,.006,.012),n.metal,0,.064,-.28+u*.03);i.add(yt(.078,.085,.3,.02),n.poly,0,-.004,-.37);for(let u=0;u<5;u++)i.add(Gt(.08,.012,.03),n.dark||n.gun,0,.012,-.29-u*.045);i.add(Gt(.079,.012,.22),n.accent,0,-.03,-.37),i.add(te(.013,.013,.26,10),n.metal,0,.012,-.6,Math.PI/2),i.add(te(.021,.021,.07,10),n.poly,0,.012,-.74,Math.PI/2);for(let u=0;u<3;u++)i.add(Gt(.044,.008,.01),n.gun,0,.012,-.72-u*.018);i.add(yt(.045,.13,.062,.015),n.poly,0,-.1,.02,-.28),i.add(Oe(.028,.005,6,16),n.gun,0,-.065,-.04,0,Math.PI/2),i.add(yt(.05,.075,.16,.015),n.poly,0,-.005,.19),i.add(yt(.058,.11,.07,.015),n.poly,0,-.02,.3),i.add(Gt(.06,.12,.02),n.dark||n.gun,0,-.02,.34),i.add(Gt(.03,.025,.05),n.gun,.04,.02,-.02),c.add(yt(.038,.17,.07,.01),n.poly,0,-.08,0,.18),c.add(Gt(.04,.02,.072),n.metal,0,-.165,-.015,.18),a=kc(i,n,.1,-.08,n.red,"ticks"),r.sight.set(0,.1,-.1),r.zoom=1.6,r.magRest=new v(0,-.05,-.15),r.muzzle.set(0,.012,-.78)}else if(o==="shotgun"){i.add(yt(.085,.11,.32,.015),n.gun,0,0,-.04),i.add(te(.021,.021,.44,12),n.metal,0,.025,-.4,Math.PI/2),i.add(te(.017,.017,.36,10),n.gun,0,-.022,-.36,Math.PI/2),i.add(te(.026,.026,.03,12),n.poly,0,.025,-.62,Math.PI/2),i.add(yt(.05,.14,.065,.015),n.tan,0,-.105,.03,-.25),i.add(yt(.06,.09,.22,.02),n.tan,0,-.01,.22),i.add(Gt(.062,.11,.025),n.poly,0,-.015,.34),i.add(Gt(.086,.012,.2),n.accent,0,.04,-.05),i.add(Oe(.03,.005,6,16),n.gun,0,-.07,-.03,0,Math.PI/2);for(let u=0;u<4;u++)i.add(te(.008,.008,.03,8),n.red,.045,0,-.1-u*.04,0,0,Math.PI/2);c.add(yt(.06,.06,.15,.02),n.tan,0,0,0);for(let u=0;u<5;u++)c.add(Gt(.062,.006,.01),n.poly,0,0,-.06+u*.03);a=kc(i,n,.092,-.05,n.green,"ring",n.green),r.sight.set(0,.092,-.07),r.zoom=1.25,r.muzzle.set(0,.025,-.64),r.magRest=new v(0,-.022,-.4),r.hand.set(0,-.04,-.4),r.pump=!0}else if(o==="gyrojet"){i.add(yt(.085,.11,.3,.018),n.gun,0,0,-.06),i.add(yt(.09,.03,.22,.01),n.poly,0,.065,-.06),i.add(Gt(.092,.012,.18),n.accent,0,-.02,-.08);for(let u=0;u<3;u++){let d=u*Math.PI*2/3+Math.PI/2,f=Math.cos(d)*.024,m=Math.sin(d)*.024+.012;i.add(te(.016,.016,.3,10),n.metal,f,m,-.36,Math.PI/2),i.add(te(.019,.016,.03,10),n.poly,f,m,-.52,Math.PI/2)}i.add(te(.05,.05,.02,14),n.gun,0,.012,-.28,Math.PI/2),i.add(te(.05,.05,.02,14),n.gun,0,.012,-.47,Math.PI/2),i.add(Oe(.05,.006,6,20),n.orange,0,.012,-.49);for(let u of[-1,1])for(let d=0;d<3;d++)i.add(Gt(.006,.05,.018),n.poly,u*.045,0,-.02-d*.04);i.add(yt(.048,.14,.065,.015),n.poly,0,-.105,.02,-.26),i.add(Oe(.03,.005,6,16),n.gun,0,-.07,-.04,0,Math.PI/2),i.limb(new v(0,.03,.08),new v(0,0,.3),.01,.01,n.metal,6),i.limb(new v(0,-.05,.08),new v(0,-.04,.3),.01,.01,n.metal,6),i.add(yt(.05,.11,.025,.008),n.poly,0,-.02,.31),c.add(te(.062,.062,.07,18),n.gun,0,0,0,0,0,Math.PI/2),c.add(te(.064,.064,.012,18),n.orange,0,0,0,0,0,Math.PI/2),c.add(te(.02,.02,.075,10),n.poly,0,0,0,0,0,Math.PI/2),a=_x(i,n,.115,-.07,n.orange,.046,"chevron",n.orange),r.sight.set(0,.115,-.08),r.zoom=1.7,r.magRest=new v(0,-.085,-.13),r.hand.set(0,-.03,-.36),r.drum=!0,r.muzzle.set(0,.012,-.54)}else if(o==="recoilless"){i.add(te(.068,.068,.9,18),n.tan,0,.02,-.2,Math.PI/2),i.add(te(.07,.07,.06,18),n.gun,0,.02,-.64,Math.PI/2),i.add(te(.11,.07,.2,18),n.gun,0,.02,.34,Math.PI/2);for(let u=0;u<3;u++)i.add(Oe(.07,.007,6,22),n.gun,0,.02,-.4+u*.25);i.add(yt(.05,.14,.07,.015),n.poly,0,-.1,0,-.2),i.add(yt(.05,.12,.07,.015),n.poly,0,-.09,-.3,.2),i.add(Gt(.05,.02,.4),n.accent,-.07,.02,-.2),c.add(te(.05,.05,.16,14),n.metal,0,0,0,Math.PI/2),c.add(te(.052,.052,.02,14),n.red,0,0,.08,Math.PI/2),a=Mx(i,n,.13,-.12,.2,.022,n.red),r.sight.set(0,.13,-.12),r.zoom=2.6,r.eyeRelief=.2,r.scope=!0,r.muzzle.set(0,.02,-.67),r.magRest=new v(0,.02,.52),r.hand.set(0,-.06,-.3),r.breech=!0}else{i.add(yt(.085,.1,.36,.02),n.gun,0,0,-.05),i.add(yt(.07,.035,.3,.012),n.poly,0,.06,-.06),i.add(Gt(.008,.004,.26),n.yellowDim,0,.079,-.06);for(let u of[-1,1])i.add(yt(.01,.05,.2,.004),n.poly,u*.046,-.005,-.08),i.add(Gt(.004,.012,.16),n.yellow,u*.0515,-.005,-.08),i.add(yt(.016,.03,.34,.006),n.gun,u*.024,.006,-.38),i.add(yt(.02,.02,.05,.006),n.metal,u*.024,.006,-.55);i.add(te(.008,.008,.26,10),n.yellow,0,.006,-.4,Math.PI/2);for(let u=0;u<3;u++)i.add(Oe(.032,.004,6,18),n.yellowDim,0,.006,-.3-u*.08);for(let u=0;u<5;u++)i.add(Gt(.1,.03,.007),n.poly,0,.09,0+u*.022);i.add(yt(.05,.14,.07,.015),n.poly,0,-.11,.03,-.28),i.add(yt(.06,.08,.17,.02),n.poly,0,-.015,.21),i.add(Gt(.063,.004,.012),n.yellowDim,0,0,.25),c.add(yt(.03,.06,.12,.008),n.gun,0,0,0),c.add(Gt(.032,.03,.08),n.yellow,0,0,0),a=kc(i,n,.135,-.05,n.yellow,"bars",n.yellow),r.sight.set(0,.135,-.06),r.zoom=1.6,r.magRest=new v(-.06,-.005,-.07),r.cell=!0,r.muzzle.set(0,.006,-.56)}let h=i.build(!e.noShadow);s.add(h);for(let u of a)u.userData.noOutline=!0,s.add(u);return l=c.build(!e.noShadow),l.position.copy(r.magRest),s.add(l),r.mag=l,s.userData=r,s}function Wu(o,t,e){let n=zc(o),i=new Ae,s=new Hn;s.add(yt(.5,.62,.34,.07,3),n.suit,0,.15,0),s.add(yt(.44,.3,.07,.03),n.hard,0,.27,-.175),s.add(yt(.36,.1,.05,.02),n.team,0,.14,-.18),s.add(Gt(.1,.045,.02),n.glow,.12,.34,-.215),s.add(Gt(.05,.045,.02),n.white,-.13,.34,-.215);for(let A=0;A<3;A++)s.add(yt(.47,.045,.32,.018),n.fabric,0,.02-A*.055,0);s.add(yt(.53,.1,.37,.03),n.hard,0,-.13,0),s.add(Gt(.08,.06,.02),n.team,0,-.13,-.19);for(let A of[-1,1])s.add(yt(.07,.07,.07,.02),n.dark,A*.21,-.13,-.15);s.add(Oe(.17,.04,8,24),n.hard,0,.47,0,Math.PI/2);for(let A of[-1,1])s.add(yt(.17,.08,.22,.035),n.team,A*.3,.42,0,0,0,-A*.35);s.add(yt(.56,.72,.26,.06,3),n.hard,0,.12,.3),s.add(yt(.5,.6,.04,.02),n.dark,0,.12,.44);for(let A of[-1,1])s.add(te(.07,.07,.56,14),n.suit,A*.16,.12,.47),s.add(Rn(.07,12,8),n.suit,A*.16,.4,.47),s.add(Rn(.07,12,8),n.suit,A*.16,-.16,.47),s.add(Oe(.071,.01,6,16),n.team,A*.16,.25,.47,Math.PI/2);for(let A=0;A<4;A++)s.add(Gt(.18,.012,.03),n.dark,0,-.05-A*.035,.455);s.add(Gt(.57,.05,.27),n.glow,0,.42,.3),s.add(te(.006,.006,.3,6),n.dark,-.22,.6,.38),s.add(Rn(.014,6,4),n.glow,-.22,.75,.38);for(let A of t){let T=A.pos;s.add(yt(.13,.13,.15,.03),n.dark,T.x,T.y,T.z),s.limb(new v(T.x*.55,T.y,.2),new v(T.x,T.y,T.z+.06),.022,.022,n.hard,6);for(let C of e){let I=C.clone().negate();br.setFromUnitVectors(new v(0,-1,0),I),Hs.compose(Oc.copy(T).addScaledVector(I,.075),br,Bc.set(1,1,1)),s.addMatrix(vx(.022,.04,8),n.hard,Hs)}s.add(Gt(.135,.025,.03),n.glow,T.x,T.y+.075,T.z-.04)}s.add(yt(.42,.17,.3,.06),n.suit,0,-.25,0);for(let A of[-1,1]){let T=new v(A*.14,-.27,-.02),C=new v(A*.15,-.6,-.18),I=new v(A*.14,-.94,0);s.limb(T,C,.105,.09,n.suit,10),s.limb(C,I,.088,.075,n.suit,10),s.add(Rn(.09,10,8),n.fabric,C.x,C.y,C.z),s.add(yt(.15,.13,.08,.03),n.team,C.x,C.y+.01,C.z-.07,.3),s.add(yt(.11,.2,.05,.02),n.hard,A*.145,-.78,-.13,-.38),s.add(yt(.16,.14,.28,.04),n.hard,A*.14,-1,.05),s.add(Gt(.165,.03,.29),n.dark,A*.14,-1.075,.05)}let r=s.build();i.add(r);let a=new Ae;a.position.set(0,.45,0),i.add(a);let l=new Hn;l.add(Rn(.215,18,14),n.suit,0,.15,-.02),l.add(Oe(.16,.025,8,24),n.hard,0,.02,-.01,Math.PI/2),l.add(Rn(.2,18,12),n.visor,0,.15,-.045,0,0,0,1,.82,1),l.add(Oe(.155,.012,6,24),n.hard,0,.15,-.16,0,0,0,1.15,.85,1);for(let A of[-1,1])l.add(te(.03,.03,.07,10),n.dark,A*.2,.2,-.04,0,0,Math.PI/2),l.add(te(.022,.022,.01,10),n.white,A*.236,.2,-.04,0,0,Math.PI/2);l.add(Gt(.05,.03,.08),n.team,0,.36,0);let c=new v(.28,-.08,0),h=new v(.27,-.27,-.2),u=new v(.13,-.19,-.39);l.limb(c,h,.075,.07,n.suit,10),l.add(Rn(.07,10,8),n.fabric,h.x,h.y,h.z),l.limb(h,u,.066,.058,n.suit,10),l.add(yt(.08,.09,.1,.025),n.hard,u.x,u.y,u.z),l.add(Rn(.085,10,8),n.hard,c.x,c.y,c.z);let d=l.build();a.add(d);let f=new Ae;f.position.set(.13,-.1,-.4),a.add(f);let m=new Ae,x=new v(-.28,-.08,0);m.position.copy(x),a.add(m);let g=new Hn,p=new v(-.22,-.26,-.22).sub(x),y=new v(.1,-.16,-.68).sub(x);g.add(Rn(.085,10,8),n.hard,0,0,0),g.limb(new v,p,.075,.07,n.suit,10),g.add(Rn(.07,10,8),n.fabric,p.x,p.y,p.z),g.limb(p,y,.066,.058,n.suit,10);let M=p.clone().lerp(y,.45);g.add(yt(.07,.03,.09,.01),n.dark,M.x,M.y+.06,M.z),g.add(Gt(.05,.005,.06),n.glow,M.x,M.y+.077,M.z),g.add(yt(.08,.08,.1,.025),n.hard,y.x,y.y,y.z),m.add(g.build());let _=Sr(o);return _.scale.setScalar(1.15),_.position.copy(y).add(new v(0,.03,-.05)),_.visible=!1,_.userData.noOutline=!0,m.add(_),{root:i,upper:a,gunMount:f,leftArm:m,nade:_,body:r,head:d}}function Vc(o){let t=zc(o),e=new Hn;return e.add(yt(.085,.09,.11,.03),t.hard,0,0,0),e.add(yt(.06,.03,.08,.012),t.dark,0,.052,0),e.limb(new v(0,0,.04),new v(0,0,.42),.046,.058,t.suit,12),e.add(Oe(.05,.011,6,18),t.team,0,0,.1),e.add(Gt(.05,.006,.07),t.glow,0,.066,.16),e.add(yt(.06,.025,.09,.01),t.dark,0,.055,.16),e.build(!1)}function Sr(o){let t=zc(o),e=new Hn,n=new Nt({color:3818057,roughness:.45,metalness:.7});e.add(te(.04,.04,.085,18),n,0,0,0);for(let a of[-.03,-.012,.012,.03])e.add(Oe(.0405,.0035,6,22),t.dark,0,a,0,Math.PI/2);e.add(te(.0415,.0415,.012,18),t.glow,0,0,0),e.add(te(.04,.03,.018,18),n,0,.051,0),e.add(te(.03,.04,.018,18),n,0,-.051,0),e.add(te(.026,.026,.006,6),t.dark,0,-.062,0),e.add(te(.019,.023,.026,12),t.hard,0,.072,0),e.add(yt(.014,.075,.006,.002),t.hard,0,.045,.043,.12),e.add(yt(.014,.012,.02,.002),t.hard,0,.082,.034),e.add(Oe(.013,.0022,6,16),t.hard,.024,.078,0,0,Math.PI/2);let i=e.build(),s=new qt({color:new et(o).multiplyScalar(2.5)}),r=new ut(new vn(.008,8,6),s);return r.position.set(0,.088,0),r.userData.noOutline=!0,i.add(r),i.userData.lamp=r,i}function Xu(){let o=new Hn,t=new Nt({color:11187133,roughness:.45,metalness:.6}),e=new Nt({color:14198570,roughness:.5,metalness:.3}),n=new Nt({color:3159355,roughness:.6,metalness:.5}),i=oi(16760896,2.5);o.add(Rn(1.08,24,16),t),o.add(Oe(1.1,.07,8,32),e,0,0,0,Math.PI/2),o.add(Oe(1.1,.07,8,32),e,0,0,0,0,Math.PI/2);for(let s of[-1,1])o.add(te(.32,.32,.08,16),n,0,s*1.06,0),o.add(te(.05,.05,.02,8),i,0,s*1.11,0),o.add(Oe(.16,.025,6,12),n,s*1.08,.25,0,0,Math.PI/2),o.add(Oe(.16,.025,6,12),n,0,.25,s*1.08);return o.build()}var Ee=72,ee=36,Ot=36,Ci={hangar:{name:"Hangar Bay",desc:"Enclosed 144 m hangar. Walls everywhere to push off.",enclosed:!0,bounds:[72,36,36],navStep:[6,7.5],navR:10.5,spawnX:64},spin:{name:"Spin Drum",desc:"Rotating drum station: 0.5 g on the rim, zero-g at the axis. Walk the floor, fly the core.",enclosed:!0,drum:36,omega:.3727,bounds:[70,36,36],navStep:[6,7],navR:10.5,spawnX:64},yard:{name:"Derelict Yard",desc:"Open orbit, 300 m across. No walls: drift too far and your suit runs out of luck.",enclosed:!1,bounds:[150,70,70],navStep:[11,11],navR:19.5,spawnX:124}};function Yu(o,t=2.5){let e=o.width,n=o.height,i=o.getContext("2d").getImageData(0,0,e,n).data,s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d"),a=r.createImageData(e,n),l=(h,u)=>{h=(h+e)%e,u=(u+n)%n;let d=(u*e+h)*4;return(i[d]*.3+i[d+1]*.59+i[d+2]*.11)/255};for(let h=0;h<n;h++)for(let u=0;u<e;u++){let d=(l(u+1,h)-l(u-1,h))*t,f=(l(u,h+1)-l(u,h-1))*t,m=1/Math.hypot(d,f,1),x=(h*e+u)*4;a.data[x]=(-d*m*.5+.5)*255,a.data[x+1]=(f*m*.5+.5)*255,a.data[x+2]=(m*.5+.5)*255,a.data[x+3]=255}r.putImageData(a,0,0);let c=new si(s);return c.wrapS=c.wrapT=Ei,c}function Gs(o,t,e,n,i,s){let r=bx(o,t,e,n,i);return new Nt({map:r,normalMap:Yu(r.image),normalScale:new ht(.8,.8),...s})}function bx(o,t,e,n=256,i=2){let s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d",{willReadFrequently:!0});r.fillStyle=o,r.fillRect(0,0,n,n);let a=r.getImageData(0,0,n,n);for(let h=0;h<a.data.length;h+=4){let u=(Math.random()-.5)*14;a.data[h]+=u,a.data[h+1]+=u,a.data[h+2]+=u}r.putImageData(a,0,0);let l=n/i;r.strokeStyle=t,r.lineWidth=3;for(let h=0;h<i;h++)for(let u=0;u<i;u++){r.strokeRect(h*l+3,u*l+3,l-6,l-6),r.fillStyle=t;for(let[d,f]of[[10,10],[l-10,10],[10,l-10],[l-10,l-10]])r.beginPath(),r.arc(h*l+d,u*l+f,2.5,0,Math.PI*2),r.fill()}e&&(r.fillStyle=e,r.fillRect(0,n*.48,n,n*.04));let c=new si(s);return c.wrapS=c.wrapT=Ei,c.colorSpace=Be,c.anisotropy=4,c}function Sx(){let o=document.createElement("canvas");o.width=o.height=128;let t=o.getContext("2d");t.fillStyle="#2a2d31",t.fillRect(0,0,128,128),t.fillStyle="#c9a227";for(let n=-128;n<256;n+=32)t.beginPath(),t.moveTo(n,0),t.lineTo(n+16,0),t.lineTo(n+16-128,128),t.lineTo(n-128,128),t.fill();let e=new si(o);return e.wrapS=e.wrapT=Ei,e.colorSpace=Be,e}function Ex(o){let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d",{willReadFrequently:!0});e.fillStyle=o,e.fillRect(0,0,256,128);for(let i=0;i<256;i+=12)e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(i,0,4,128),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(i+5,0,2,128);e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=6,e.strokeRect(0,0,256,128);let n=new si(t);return n.wrapS=n.wrapT=Ei,n.colorSpace=Be,n}function $o(o){let t=Ex(o);return new Nt({map:t,normalMap:Yu(t.image,3),roughness:.7,metalness:.45})}function wx(){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d");n.fillStyle="#123a6b",n.fillRect(0,0,1024,512);for(let s=0;s<70;s++){let r=Math.random()*1024,a=512*.15+Math.random()*512*.7,l=10+Math.random()*70;n.fillStyle=Math.random()<.5?"#3d6b35":"#7a6a45",n.globalAlpha=.85,n.beginPath(),n.ellipse(r,a,l*1.6,l,Math.random()*3,0,Math.PI*2),n.fill()}n.globalAlpha=1,n.fillStyle="#e8eef5",n.fillRect(0,0,1024,512*.06),n.fillRect(0,512*.94,1024,512*.06);for(let s=0;s<220;s++){let r=Math.random()*1024,a=Math.random()*512,l=6+Math.random()*40;n.globalAlpha=.25+Math.random()*.35,n.fillStyle="#ffffff",n.beginPath(),n.ellipse(r,a,l*2.5,l*.6,0,0,Math.PI*2),n.fill()}n.globalAlpha=1;let i=new si(e);return i.colorSpace=Be,i}function qu(o,t,e,n){let i=new ye(o,t,e),s=i.attributes.uv,r=[[e,t],[e,t],[o,e],[o,e],[o,t],[o,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;s.setXY(c,s.getX(c)*r[a][0]/n,s.getY(c)*r[a][1]/n)}return i}var Er=class{constructor(t,e="hangar"){this.scene=t,this.mapId=Ci[e]?e:"hangar",this.def=Ci[this.mapId],this.enclosed=this.def.enclosed,this.drum=this.def.drum||0,this.omega=this.def.omega||0;let n=this.def.bounds;this.bounds={min:[-n[0],-n[1],-n[2]],max:[n[0],n[1],n[2]]},this.boxes=[],this.spheres=[],this.pods=[],this.group=new Ae,t.add(this.group),this._hit={t:0,n:new v,kind:"",obj:null},this._rb={n:[0,0,0]},this.mats={hull:Gs("#59616a","#3a4047",null,256,2,{roughness:.8,metalness:.4}),hullBlue:Gs("#3d5470","#26364a","#3f8cff",256,2,{roughness:.75,metalness:.4}),hullOrange:Gs("#6e5440","#4a3626","#ff8a2a",256,2,{roughness:.75,metalness:.4}),deck:Gs("#3e4349","#2b2f33","#c9a227",256,4,{roughness:.85,metalness:.35}),ceil:Gs("#7c848c","#5c636a",null,256,4,{roughness:.8,metalness:.35}),steel:Gs("#80878e","#5a6067",null,128,1,{roughness:.5,metalness:.7}),girder:new Nt({map:Sx(),roughness:.7,metalness:.5}),cRed:$o("#8c3a2b"),cTeal:$o("#2b6f73"),cYel:$o("#a88a2c"),cGrey:$o("#5b6168"),stripW:new qt({color:new et(13625087).multiplyScalar(1.8)}),stripB:new qt({color:new et(4164863).multiplyScalar(1.8)}),stripO:new qt({color:new et(16747050).multiplyScalar(1.8)}),glyphB:new qt({color:1919626}),glyphO:new qt({color:9062934})},this.drum?this.buildDrum():this.enclosed?(this.buildHull(),this.buildInterior()):this.buildYard(),this.buildSpace(),this.buildPods(),this.buildNav(),this.spawns=[this.makeSpawns(-1),this.makeSpawns(1)],this.buildBarriers(),this.pickupSpots=this.makePickupSpots()}gravityAt(t,e){if(!this.omega)return e.set(0,0,0);let n=this.omega*this.omega;return e.set(0,t.y*n,t.z*n)}coriolis(t,e){return this.omega?e.set(0,2*this.omega*t.z,-2*this.omega*t.y):e.set(0,0,0)}upAt(t,e){let n=Math.hypot(t.y,t.z);return n>1e-6?e.set(0,-t.y/n,-t.z/n):e.set(0,1,0)}buildDrum(){let t=this.mats,e=this.drum,n=this.def.bounds[0],i=(h,u,d,f=!1)=>{let m=new ke(e,e,u-h,72,1,!0);m.rotateZ(Math.PI/2);let x=m.attributes.uv;for(let p=0;p<x.count;p++)x.setXY(p,x.getX(p)*(2*Math.PI*e)/8,x.getY(p)*(u-h)/8);let g=new ut(m,f?new qt({color:8956620,transparent:!0,opacity:.06,side:Se,depthWrite:!1}):d);f||(g.material=d.clone(),g.material.side=Se,g.receiveShadow=!0),g.position.x=(h+u)/2,this.group.add(g)};i(-n,-34,t.deck),i(-34,-26,null,!0),i(-26,26,t.deck),i(26,34,null,!0),i(34,n,t.deck);for(let h of[-34,-26,26,34]){let u=new ut(new yn(e-.2,.35,8,96),t.steel);u.rotation.y=Math.PI/2,u.position.x=h,this.group.add(u)}for(let h of[-56,-45,-12,0,12,45,56]){let u=new ut(new yn(e-.1,.18,6,96),t.steel);u.rotation.y=Math.PI/2,u.position.x=h,this.group.add(u)}for(let h of[-1,1]){let u=new ut(new ri(e,72),(h<0?t.hullBlue:t.hullOrange).clone());u.material.side=$e,u.rotation.y=h<0?Math.PI/2:-Math.PI/2,u.position.x=h*n,u.receiveShadow=!0,this.group.add(u);let d=new ut(new yn(e*.6,.25,6,64),h<0?t.stripB:t.stripO);d.rotation.y=Math.PI/2,d.position.x=h*(n-.2),this.group.add(d)}for(let h=0;h<8;h++){let u=h/8*Math.PI*2,d=new ut(new ye(2*n-10,.08,.25),h%2?t.stripW:h<4?t.stripB:t.stripO);d.position.set(0,Math.cos(u)*(e-.05),Math.sin(u)*(e-.05)),d.rotation.x=u,this.group.add(d)}let s=(h,u,d,f,m,x,g)=>{let p=h<2?1:2,y=h%2===0?-1:1,M=p===1?2:1,_=[u,0,0],A=[d,0,0],T=y*e,C=y*(e-x);_[p]=Math.min(T+y*1.5,C),A[p]=Math.max(T+y*1.5,C),_[M]=f-m/2,A[M]=f+m/2,this.addBox(_,A,g,{tile:3})},r=[t.cRed,t.cTeal,t.cYel,t.cGrey];for(let h=0;h<4;h++)for(let u of[-1,1]){let d=(f,m)=>u>0?[f,m]:[-m,-f];s(h,...d(10,11),0,7,1.5,t.steel),s(h,...d(18,20.5),5,2.5,2.5,r[h]),s(h,...d(19,21.5),-6,2.5,2.5,r[(h+1)%4]),s(h,...d(30,31),h%2?4:-4,6,1.6,t.steel),s(h,...d(38,48),h%2?-5:5,7,5,t.hull),s(h,...d(50,51.2),0,10,2.2,t.steel)}this.addBox([-5,-4,-4],[5,4,4],t.hull,{tile:4}),this.addBox([-1,-1,-1],[1,1,1],null);for(let h of[-24,24])this.addBox([h-.6,4,-.6],[h+.6,e+1,.6],t.girder,{tile:2}),this.addBox([h-.6,-e-1,-.6],[h+.6,-4,.6],t.girder,{tile:2}),this.addBox([h-.6,-.6,4],[h+.6,.6,e+1],t.girder,{tile:2}),this.addBox([h-.6,-.6,-e-1],[h+.6,.6,-4],t.girder,{tile:2}),this.addBox([h-3,-3,-3],[h+3,3,3],t.steel,{tile:3});this.addBox([-1.2,-1.2,-1.2],[1.2,1.2,1.2],null),this.addMirrored([5,-.5,-.5],[21,.5,.5],t.girder,t.girder,{tile:2}),this.addMirrored([27,-.5,-.5],[44,.5,.5],t.girder,t.girder,{tile:2}),this.addMirrored([6,-11.4,-5],[16,-11,5],t.steel,t.steel,{tile:3}),this.addMirrored([6,11,-5],[16,11.4,5],t.steel,t.steel,{tile:3}),this.addMirrored([30,-5,-12.4],[40,5,-12],t.steel,t.steel,{tile:3}),this.addMirrored([30,-5,12],[40,5,12.4],t.steel,t.steel,{tile:3}),this.addMirrored([12,5,7],[14.6,7.6,9.6],t.cYel,t.cTeal,{tile:3}),this.addMirrored([34,-9,-8],[36.6,-6.4,-5.4],t.cRed,t.cGrey,{tile:3});for(let h of[-1,1]){let u=h>0?[55,56.6]:[-56.6,-55];for(let d=0;d<8;d++){let f=(d+.5)/8*Math.PI*2,m=Math.cos(f)*26,x=Math.sin(f)*26;this.addBox([u[0],m-4,x-4],[u[1],m+4,x+4],h>0?t.hullOrange:t.hullBlue,{tile:3})}}this.group.add(new Os(13162751,3814960,1));let a=new Ti(16773341,1.6);a.position.set(.3,1,.4),this.group.add(a),this.sun=a;for(let h of[-40,0,40]){let u=new He(15266047,70,70,1);u.position.set(h,0,0),this.group.add(u)}let l=new He(4164863,30,40,1);l.position.set(-62,0,0),this.group.add(l);let c=new He(16747050,30,40,1);c.position.set(62,0,0),this.group.add(c)}buildBarriers(){this.barrierX=this.drum||this.enclosed?55.8:112;let t=this.def.bounds;this.barriers=[];for(let e of[0,1]){let n=new et(e===0?4164863:16747050),i=new me({transparent:!0,depthWrite:!1,side:$e,blending:Ze,uniforms:{time:{value:0},color:{value:n},flash:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 color; uniform float flash; varying vec2 vUv; varying vec3 vW;
          float hex(vec2 p){ p.x *= 1.1547; p.y += mod(floor(p.x), 2.0)*0.5; p = abs(fract(p) - 0.5); return abs(max(p.x*1.5 + p.y, p.y*2.0) - 1.0); }
          void main(){
            vec2 p = vW.zy * 0.45;
            float h = smoothstep(0.08, 0.0, hex(p));
            float scan = 0.5 + 0.5*sin(vW.y*0.6 - time*2.0);
            float edge = smoothstep(0.0, 0.04, vUv.x) * smoothstep(0.0, 0.04, 1.0 - vUv.x) * smoothstep(0.0, 0.04, vUv.y) * smoothstep(0.0, 0.04, 1.0 - vUv.y);
            float a = (0.035 + h*0.16*(0.6 + 0.4*scan) + flash*0.25) * edge;
            gl_FragColor = vec4(color*1.6, a);
          }`}),s=new ut(this.drum?new ri(this.drum,64):new Re(2*t[2],2*t[1]),i);s.rotation.y=Math.PI/2,s.position.set((e===0?-1:1)*this.barrierX,0,0),s.renderOrder=5,this.group.add(s),this.barriers.push({mesh:s,mat:i,team:e})}}inSpawn(t,e){return e===0?t.x<-this.barrierX:t.x>this.barrierX}barrierCross(t,e,n){let i=n===0?-this.barrierX:this.barrierX,s=t.x-i,r=e.x-i,a=l=>n===0?l<0:l>0;return a(s)||!a(r)?-1:s/(s-r)}updateBarriers(t){for(let e of this.barriers)e.mat.uniforms.time.value=t,e.mat.uniforms.flash.value*=.9}makePickupSpots(){let t=this.def.bounds[0]/72,e=this.def.bounds[1]/36,n=this.drum?[[24,0,-9],[15,-33,0],[42,0,33]]:this.enclosed?[[30,18,2],[12,-16,26],[40,-6,-22]]:[[60,12,14],[40,30,-30],[90,-22,24]],i=[];for(let[s,r,a]of n)i.push([s,r,a],[-s,-r,-a]);return i.push(this.drum?[0,0,9]:this.enclosed?[0,26,-14]:[0,40,12],this.drum?[0,33,0]:this.enclosed?[0,-26,14]:[0,-40,-12]),i.map(([s,r,a])=>{let l=this.nearestNode(new v(s,r,a),!1);return this.nav[l].pos.clone()})}dispose(){this.scene.remove(this.group)}addBox(t,e,n,i={}){let s={min:t,max:e,kind:i.kind||"box"};if(this.boxes.push(s),n){let r=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=new ut(qu(r,a,l,i.tile||4),n);c.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c),s.mesh=c}return s}addMirrored(t,e,n,i,s){this.addBox(t,e,n,s),this.addBox([-e[0],t[1],t[2]],[-t[0],e[1],e[2]],i||n,s)}strip(t,e,n,i,s,r,a){let l=new ut(new ye(Math.max(.05,i-t),Math.max(.05,s-e),Math.max(.05,r-n)),a);return l.position.set((t+i)/2,(e+s)/2,(n+r)/2),this.group.add(l),l}buildHull(){let e=this.group,n=(i,s,r,a,l,c,h,u=6)=>{let d=new ut(qu(i,s,r,u),h);return d.position.set(a,l,c),d.receiveShadow=!0,e.add(d),d};n(1,2*ee,2*Ot,-Ee-1/2,0,0,this.mats.hullBlue,8),n(1,2*ee,2*Ot,Ee+1/2,0,0,this.mats.hullOrange,8),n(2*Ee,1,2*Ot,0,-ee-1/2,0,this.mats.deck,8),n(2*Ee,1,2*Ot,0,ee+1/2,0,this.mats.ceil,8);for(let i of[-1,1]){let s=i*(Ot+.5);n(2*Ee,ee-11,1,0,(ee+11)/2,s,this.mats.hull,8),n(2*Ee,ee-11,1,0,-(ee+11)/2,s,this.mats.hull,8),n(Ee-30,22,1,-(Ee+30)/2,0,s,this.mats.hull,8),n(Ee-30,22,1,(Ee+30)/2,0,s,this.mats.hull,8);let r=new ut(new Re(60,22),new qt({color:8956620,transparent:!0,opacity:.07,side:$e,depthWrite:!1}));r.position.set(0,0,i*Ot),e.add(r),this.strip(-30.3,11,i*Ot-.2,30.3,11.3,i*Ot+.2,this.mats.stripW),this.strip(-30.3,-11.3,i*Ot-.2,30.3,-11,i*Ot+.2,this.mats.stripW);for(let a=-30;a<=30;a+=15)this.strip(a-.25,-11,i*Ot-.3,a+.25,11,i*Ot+.3,this.mats.steel)}for(let i of[-48,-24,24,48]){let s=i-.7,r=i+.7,a=1.6,l=this.mats.steel;this.addBox([s,-ee,-Ot],[r,-ee+a,Ot],l,{tile:2}),this.addBox([s,ee-a,-Ot],[r,ee,Ot],l,{tile:2}),this.addBox([s,-ee+a,-Ot],[r,ee-a,-Ot+a],l,{tile:2}),this.addBox([s,-ee+a,Ot-a],[r,ee-a,Ot],l,{tile:2});let c=i<0?this.mats.stripB:this.mats.stripO;this.strip(i-.1,-ee+a,-Ot+4,i+.1,-ee+a+.06,Ot-4,c),this.strip(i-.1,ee-a-.06,-Ot+4,i+.1,ee-a,Ot-4,c)}for(let i of[-20,0,20])this.strip(-Ee+2,-ee+.02,i-.15,Ee-2,-ee+.08,i+.15,this.mats.stripW),this.strip(-Ee+2,ee-.08,i-.15,Ee-2,ee-.02,i+.15,this.mats.stripW);for(let i of[-1,1]){let s=i<0?this.mats.stripB:this.mats.stripO,r=i*(Ee-.05);for(let a=-2;a<=2;a++)this.strip(r-.05,a*7-.12,-20,r+.05,a*7+.12,20,i<0?this.mats.glyphB:this.mats.glyphO)}}buildInterior(){let t=this.mats;this.spheres.push({c:new v(0,0,0),r:6});let e=new ut(new vr(6,3),new Nt({color:6976380,roughness:.35,metalness:.85,flatShading:!0}));e.castShadow=!0,e.receiveShadow=!0,this.group.add(e);let n=new ut(new yn(6.15,.35,8,48),new qt({color:new et(6289151).multiplyScalar(2.2)}));n.rotation.x=Math.PI/2,this.group.add(n);let i=n.clone();i.rotation.set(0,Math.PI/2,0),this.group.add(i),this.reactorRings=[n,i];let s=new He(6289151,60,60,1);this.group.add(s),this.addBox([-1.2,-ee,-1.2],[1.2,-6,1.2],t.girder,{tile:2}),this.addBox([-1.2,6,-1.2],[1.2,ee,1.2],t.girder,{tile:2});let r=11,a=.6;this.addBox([-r,-a,r-1.2],[r,a,r],t.steel,{tile:2}),this.addBox([-r,-a,-r],[r,a,-r+1.2],t.steel,{tile:2}),this.addBox([r-1.2,-a,-r+1.2],[r,a,r-1.2],t.steel,{tile:2}),this.addBox([-r,-a,-r+1.2],[-r+1.2,a,r-1.2],t.steel,{tile:2});let l=55,c=56.6,h=(g,p,y,M)=>this.addMirrored([l,g,y],[c,p,M],t.hullOrange,t.hullBlue,{tile:4});h(-ee,-15,-Ot,Ot),h(15,ee,-Ot,Ot),h(-15,15,-Ot,-19),h(-15,15,19,Ot),h(-4,4,-4,4),h(-15,-10,-19,19),h(10,15,-6,6),this.addMirrored([36,8,-14],[48,10.6,-11.4],t.cRed,t.cTeal,{tile:3}),this.addMirrored([30,-12,10],[32.6,0,12.6],t.cYel,t.cYel,{tile:3}),this.addMirrored([40,-22,0],[42.6,-19.4,12],t.cTeal,t.cRed,{tile:3}),this.addMirrored([20,20,18],[32,22.6,20.6],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([22,-24,-24],[24.6,-21.4,-12],t.cRed,t.cTeal,{tile:3}),this.addMirrored([44,-4,16],[50,-1.4,25],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([10,22,-8],[22,24.6,-5.4],t.cYel,t.cYel,{tile:3}),this.addMirrored([33,12,22],[35.6,24,24.6],t.cTeal,t.cRed,{tile:3}),this.addMirrored([14,-8,-30],[16.6,4,-27.4],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([24,-6,-6],[24.6,6,6],t.steel,t.steel,{tile:3}),this.addMirrored([14,12,-20],[22,12.5,-12],t.steel,t.steel,{tile:3}),this.addMirrored([12,-16,22],[18,-10,22.5],t.steel,t.steel,{tile:3}),this.addMirrored([44,18,-6],[44.5,26,6],t.steel,t.steel,{tile:3}),this.addMirrored([36,-30,-28],[44,-29.5,-20],t.steel,t.steel,{tile:3}),this.addMirrored([17.4,-28.6,-Ot],[18.6,-27.4,Ot],t.girder,t.girder,{tile:2}),this.addMirrored([37.4,25.4,-Ot],[38.6,26.6,Ot],t.girder,t.girder,{tile:2}),this.addMirrored([45.4,-ee,-26.6],[46.6,ee,-25.4],t.girder,t.girder,{tile:2}),this.addBox([-Ee,-.6,27.4],[Ee,.6,28.6],t.girder,{tile:2}),this.addBox([-Ee,17.4,-28.6],[Ee,18.6,-27.4],t.girder,{tile:2}),this.addBox([-6,18,-.3],[6,26,.3],t.steel,{tile:3}),this.addBox([-6,-26,-.3],[6,-18,.3],t.steel,{tile:3}),this.addBox([-.3,-6,16],[.3,6,22],t.steel,{tile:3}),this.addBox([-.3,-6,-22],[.3,6,-16],t.steel,{tile:3});let u=new Os(12571903,4866102,1.1);this.group.add(u);let d=new Ti(16773853,2.2);d.position.set(.4,.3,1),this.group.add(d),this.sun=d,this.buildHangarDetail();let f=new Ti(10336511,.6);f.position.set(-.5,-.6,-1),this.group.add(f);let m=new He(4164863,22,50,1);m.position.set(-62,0,0),this.group.add(m);let x=new He(16747050,22,50,1);x.position.set(62,0,0),this.group.add(x)}buildSpace(){this.space=new Ae,this.group.add(this.space);let t=3e3,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new v;for(let h=0;h<t;h++){i.randomDirection().multiplyScalar(3500),e.set([i.x,i.y,i.z],h*3);let u=.5+Math.random()*.5;n.set([u,u,u*(.85+Math.random()*.3)],h*3)}let s=new ue;s.setAttribute("position",new pe(e,3)),s.setAttribute("color",new pe(n,3)),this.space.add(new Ns(s,new xr({size:2.2,sizeAttenuation:!1,vertexColors:!0,fog:!1})));let r=new ut(new vn(900,64,32),new Nt({map:wx(),roughness:1,metalness:0}));this.enclosed?r.position.set(250,-620,1700):(r.position.set(300,-1500,900),r.scale.setScalar(1.4)),r.rotation.z=.3,this.space.add(r),this.planet=r;let a=new ut(new vn(935,64,32),new me({transparent:!0,blending:Ze,depthWrite:!1,side:Se,uniforms:{},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)),3.0); gl_FragColor = vec4(0.35,0.6,1.0,1.0)*f*1.4; }"}));a.position.copy(r.position),a.scale.copy(r.scale),this.space.add(a);let l=(()=>{let h=document.createElement("canvas");h.width=h.height=128;let u=h.getContext("2d"),d=u.createRadialGradient(64,64,4,64,64,64);return d.addColorStop(0,"rgba(255,255,240,1)"),d.addColorStop(.2,"rgba(255,240,200,0.9)"),d.addColorStop(1,"rgba(255,200,120,0)"),u.fillStyle=d,u.fillRect(0,0,128,128),new si(h)})(),c=new Co(new mr({map:l,blending:Ze,depthWrite:!1}));c.position.set(-600,300,-2500),c.scale.set(500,500,1),this.space.add(c)}buildPods(){let t=Xu();(this.drum?[]:this.enclosed?[[8,14,12],[-8,-14,-12],[30,0,-24],[-30,0,24],[50,26,10],[-50,-26,-10],[0,28,20],[0,-28,-20]]:[[20,30,20],[-20,-30,-20],[60,-15,35],[-60,15,-35],[95,25,10],[-95,-25,-10],[40,40,-40],[-40,-40,40],[0,35,-30],[0,-35,30],[75,-45,-30],[-75,45,30]]).forEach((n,i)=>{let s=t.clone();this.group.add(s);let r={pos:new v(...n),vel:new v(Et(-1,1),Et(-1,1),Et(-1,1)).multiplyScalar(.8),r:1.1,mass:180,mesh:s,quat:new he,angVel:new v(Et(-.4,.4),Et(-.4,.4),Et(-.4,.4)),holders:0};s.position.copy(r.pos),this.pods.push(r)})}deco(t,e,n,i,s,r=0,a=0,l=0){let c=new ut(t,e);return c.position.set(n,i,s),c.rotation.set(r,a,l),c.castShadow=!1,c.receiveShadow=!0,this.group.add(c),c}buildHangarDetail(){let t=new Nt({color:9072458,roughness:.45,metalness:.8}),e=new Nt({color:6122360,roughness:.4,metalness:.85}),n=new Nt({color:2896183,roughness:.6,metalness:.6}),i=new qt({color:new et(16773590).multiplyScalar(2.2)}),s=new qt({color:new et(16724e3).multiplyScalar(2)});for(let r of[-1,1])for(let[a,l,c]of[[15,.35,t],[16.2,.22,e],[-15,.35,e],[-16.3,.25,t]]){let h=this.deco(new ke(l,l,2*Ee-4,12),c,0,a,r*(Ot-.6-l),0,0,Math.PI/2);for(let u=-Ee+8;u<Ee-4;u+=12)this.deco(new yn(l+.04,.06,6,14),n,u,a,r*(Ot-.6-l),0,Math.PI/2,0)}for(let r of[-1,1])for(let a=-60;a<=60;a+=20)this.deco(new ye(2.2,.5,.4),n,a,24,r*(Ot-.2)),this.deco(new ye(2,.22,.1),i,a,24,r*(Ot-.42)),this.deco(new ye(2.2,.5,.4),n,a,-24,r*(Ot-.2)),this.deco(new ye(2,.22,.1),i,a,-24,r*(Ot-.42));for(let r=-60;r<=60;r+=15)for(let a of[-ee+.05,ee-.05])this.deco(new ye(3,.1,1.6),n,r,a,-30),this.deco(new ye(3,.1,1.6),n,r,a,30);for(let r of[-56,56])for(let a of[-15,15])for(let l of[-19,19])this.deco(new vn(.25,10,8),s,r*1+(r>0?.8:-.8),a,l);for(let r of[-1,1])for(let a of[-24,24]){let l=this.deco(new ye(1.2,2.4,3.2),n,r*70.6,-6,a);this.deco(new Re(2.6,1.4),new qt({color:new et(r<0?4164863:16747050).multiplyScalar(1.4)}),r*69.95,-5.6,a,0,-r*Math.PI/2,0)}}buildYardDetail(){let t=new Nt({color:10134186,roughness:.35,metalness:.85}),e=new Nt({color:2896183,roughness:.6,metalness:.6}),n=new Nt({color:14014942,roughness:.4,metalness:.4,side:$e}),i=new qt({color:new et(4259696).multiplyScalar(2.5)}),s=new qt({color:new et(16724e3).multiplyScalar(2.5)}),r=new qt({color:new et(16767392).multiplyScalar(1.6)});this.deco(new ke(.15,.15,14,8),t,0,27,0),this.deco(new vn(.4,10,8),s,0,34.2,0);let a=this.deco(new vn(5,24,8,0,Math.PI*2,0,.7),n,0,-28,0,Math.PI,0,0);a.castShadow=!0,this.deco(new ke(.2,.2,6,8),t,0,-24,0);for(let l=-12;l<=12;l+=3)for(let c of[-7.02,7.02])this.deco(new Re(1.4,.8),r,l,3,c,0,c>0?0:Math.PI,0);for(let l of[-1,1])for(let c of[-20,20])for(let h of[-30,30])this.deco(new vn(.5,10,8),l<0?i:s,l*129,c,h);for(let l of[-1,1])this.deco(new ke(.12,.12,100,6),e,l*65,0,0,0,0,Math.PI/2)}raycast(t,e,n,i=!1){let s=n,r="",a=null,l=this._hit,c=this._rb,h=t.x+e.x*n,u=t.y+e.y*n,d=t.z+e.z*n,f=Math.min(t.x,h),m=Math.max(t.x,h),x=Math.min(t.y,u),g=Math.max(t.y,u),p=Math.min(t.z,d),y=Math.max(t.z,d);for(let A=0;A<this.boxes.length;A++){let T=this.boxes[A];if(T.max[0]<f||T.min[0]>m||T.max[1]<x||T.min[1]>g||T.max[2]<p||T.min[2]>y)continue;let C=Fc(t,e,T,s,c);C>=0&&C<s&&(s=C,r="box",a=T,l.n.set(c.n[0],c.n[1],c.n[2]).normalize())}for(let A of this.spheres){let T=zn(t,e,A.c,A.r,s);T>=0&&T<s&&(s=T,r="sphere",a=A,l.n.set(t.x+e.x*T-A.c.x,t.y+e.y*T-A.c.y,t.z+e.z*T-A.c.z).normalize())}if(!i)for(let A of this.pods){let T=zn(t,e,A.pos,A.r,s);T>=0&&T<s&&(s=T,r="pod",a=A,l.n.set(t.x+e.x*T-A.pos.x,t.y+e.y*T-A.pos.y,t.z+e.z*T-A.pos.z).normalize())}let M=[t.x,t.y,t.z],_=[e.x,e.y,e.z];if(this.drum){let A=e.y*e.y+e.z*e.z;if(A>1e-12){let T=2*(t.y*e.y+t.z*e.z),C=t.y*t.y+t.z*t.z-this.drum*this.drum,I=T*T-4*A*C;if(I>=0){let w=(-T+Math.sqrt(I))/(2*A);w>=0&&w<s&&(s=w,r="wall",a=null,l.n.set(0,-(t.y+e.y*w),-(t.z+e.z*w)).normalize())}}}if(this.enclosed)for(let A=0;A<(this.drum?1:3);A++){if(Math.abs(_[A])<1e-12)continue;let C=((_[A]>0?this.bounds.max[A]:this.bounds.min[A])-M[A])/_[A];C>=0&&C<s&&(s=C,r="wall",a=null,l.n.set(0,0,0).setComponent(A,_[A]>0?-1:1))}return r?(l.t=s,l.kind=r,l.obj=a,l):null}segmentClear(t,e,n=.7,i=!0){let s=new v().subVectors(e,t),r=s.length();if(r<1e-6)return this.clearance(t)>n;s.divideScalar(r);for(let m=0;m<3;m++){let x=this.bounds.min[m]+n,g=this.bounds.max[m]-n,p=t.getComponent(m),y=e.getComponent(m);if(p<x||p>g||y<x||y>g)return!1}if(this.drum){let m=(this.drum-n)*(this.drum-n);if(t.y*t.y+t.z*t.z>m||e.y*e.y+e.z*e.z>m)return!1}let a=Math.min(t.x,e.x)-n,l=Math.max(t.x,e.x)+n,c=Math.min(t.y,e.y)-n,h=Math.max(t.y,e.y)+n,u=Math.min(t.z,e.z)-n,d=Math.max(t.z,e.z)+n,f={min:[0,0,0],max:[0,0,0]};for(let m of this.boxes)if(!(m.max[0]<a||m.min[0]>l||m.max[1]<c||m.min[1]>h||m.max[2]<u||m.min[2]>d)){for(let x=0;x<3;x++)f.min[x]=m.min[x]-n,f.max[x]=m.max[x]+n;if(Fc(t,s,f,r,null)>=0)return!1}for(let m of this.spheres)if(zn(t,s,m.c,m.r+n,r)>=0)return!1;if(!i){for(let m of this.pods)if(zn(t,s,m.pos,m.r+n,r)>=0)return!1}return!0}los(t,e,n=!1){let i=new v().subVectors(e,t),s=i.length();return s<1e-4?!0:(i.divideScalar(s),!this.raycast(t,i,s-.05,n))}clearance(t){let e=this.drum?Math.min(t.x-this.bounds.min[0],this.bounds.max[0]-t.x,this.drum-Math.hypot(t.y,t.z)):this.enclosed?Math.min(t.x-this.bounds.min[0],this.bounds.max[0]-t.x,t.y-this.bounds.min[1],this.bounds.max[1]-t.y,t.z-this.bounds.min[2],this.bounds.max[2]-t.z):1e9,n=new v;for(let i of this.boxes){Xo(t,i,n);let s=n.distanceTo(t);if(s<e&&(e=s),s===0)return-1}for(let i of this.spheres)e=Math.min(e,t.distanceTo(i.c)-i.r);return e}sphereContacts(t,e,n){let i=new v,s=new v;if(this.drum){let r=Math.hypot(t.y,t.z),a=this.drum-e;r>a&&r>1e-6&&(s.set(0,-t.y/r,-t.z/r),n(s,r-a,"wall",null))}if(this.enclosed)for(let r=0;r<(this.drum?1:3);r++){let a=this.bounds.min[r]+e,l=this.bounds.max[r]-e,c=t.getComponent(r);c<a?(s.set(0,0,0).setComponent(r,1),n(s,a-c,"wall",null)):c>l&&(s.set(0,0,0).setComponent(r,-1),n(s,c-l,"wall",null))}for(let r of this.boxes){if(t.x+e<r.min[0]||t.x-e>r.max[0]||t.y+e<r.min[1]||t.y-e>r.max[1]||t.z+e<r.min[2]||t.z-e>r.max[2])continue;Xo(t,r,i),s.subVectors(t,i);let a=s.length();if(a<e)if(a>1e-6)s.divideScalar(a),n(s,e-a,"box",r);else{let l=0,c=1/0,h=1;for(let u=0;u<3;u++){let d=t.getComponent(u),f=d-r.min[u],m=r.max[u]-d;f<c&&(c=f,l=u,h=-1),m<c&&(c=m,l=u,h=1)}s.set(0,0,0).setComponent(l,h),n(s,c+e,"box",r)}}for(let r of this.spheres){s.subVectors(t,r.c);let a=s.length();a<e+r.r&&(s.divideScalar(Math.max(a,1e-6)),n(s,e+r.r-a,"sphere",r))}}nearestSurface(t,e){let n=null,i=e,s=new v;if(this.drum){let r=Math.hypot(t.y,t.z),a=this.drum-r;a<i&&r>1e-6&&(i=a,n={point:new v(t.x,t.y/r*this.drum,t.z/r*this.drum),normal:new v(0,-t.y/r,-t.z/r),kind:"wall",obj:null})}if(this.enclosed)for(let r=0;r<(this.drum?1:3);r++)for(let a of[-1,1]){let l=a>0?this.bounds.max[r]:this.bounds.min[r],c=Math.abs(l-t.getComponent(r));if(c<i){i=c;let h=t.clone();h.setComponent(r,l),n={point:h,normal:new v().setComponent(r,-a),kind:"wall",obj:null}}}for(let r of this.boxes){Xo(t,r,s);let a=s.distanceTo(t);a<i&&a>1e-6&&(i=a,n={point:s.clone(),normal:t.clone().sub(s).normalize(),kind:"box",obj:r})}for(let r of this.spheres){let a=t.distanceTo(r.c)-r.r;if(a<i){i=a;let l=t.clone().sub(r.c).normalize();n={point:r.c.clone().addScaledVector(l,r.r),normal:l,kind:"sphere",obj:r}}}for(let r of this.pods){let a=t.distanceTo(r.pos)-r.r;if(a<i){i=a;let l=t.clone().sub(r.pos).normalize();n={point:r.pos.clone().addScaledVector(l,r.r),normal:l,kind:"pod",obj:r}}}return n&&(n.dist=i),n}updatePods(t,e){let n=this.pods;for(let i of n){if(i.pos.addScaledVector(i.vel,t),!this.enclosed)for(let r=0;r<3;r++){let a=i.pos.getComponent(r),l=this.bounds.max[r]-4;Math.abs(a)>l&&Math.sign(i.vel.getComponent(r))===Math.sign(a)&&i.vel.setComponent(r,-i.vel.getComponent(r))}this.sphereContacts(i.pos,i.r,(r,a)=>{i.pos.addScaledVector(r,a);let l=i.vel.dot(r);l<0&&i.vel.addScaledVector(r,-1.6*l)});let s=i.angVel.length();if(s>1e-5){let r=new he().setFromAxisAngle(i.angVel.clone().divideScalar(s),s*t);i.quat.premultiply(r)}}for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){let r=n[i],a=n[s],l=new v().subVectors(a.pos,r.pos),c=l.length();if(c<r.r+a.r&&c>1e-6){l.divideScalar(c);let h=r.r+a.r-c;r.pos.addScaledVector(l,-h/2),a.pos.addScaledVector(l,h/2);let u=new v().subVectors(a.vel,r.vel).dot(l);if(u<0){let d=-1.8*u/(1/r.mass+1/a.mass);r.vel.addScaledVector(l,-d/r.mass),a.vel.addScaledVector(l,d/a.mass)}}}this.reactorRings&&(this.reactorRings[0].rotation.z=e*.4,this.reactorRings[1].rotation.x=e*.3)}syncPodMeshes(){for(let t of this.pods)t.mesh.position.copy(t.pos),t.mesh.quaternion.copy(t.quat)}buildNav(){let t=[],e=new v,[n,i]=this.def.navStep,s=this.def.bounds,r=Math.floor((s[0]-4)/n)*n,a=Math.floor((s[1]-4)/i)*i,l=Math.floor((s[2]-4)/i)*i;for(let d=-r;d<=r;d+=n)for(let f=-a;f<=a;f+=i)for(let m=-l;m<=l;m+=i)e.set(d,f,m),this.clearance(e)>=1.6&&t.push({pos:e.clone(),surf:!1,normal:null});let c=1.15,h=(d,f)=>{this.clearance(d)>=c-.05&&t.push({pos:d.clone(),surf:!0,normal:f.clone()})};for(let d of this.boxes)for(let f=0;f<3;f++)for(let m of[-1,1]){let x=(f+1)%3,g=(f+2)%3,p=d.max[x]-d.min[x],y=d.max[g]-d.min[g];if(p<1.5&&y<1.5)continue;let M=Math.max(1,Math.round(p/5)),_=Math.max(1,Math.round(y/5)),A=new v().setComponent(f,m);for(let T=0;T<M;T++)for(let C=0;C<_;C++)e.setComponent(f,(m>0?d.max[f]:d.min[f])+m*c),e.setComponent(x,d.min[x]+p*(T+.5)/M),e.setComponent(g,d.min[g]+y*(C+.5)/_),h(e,A)}if(this.drum)for(let d=-this.bounds.max[0]+6;d<this.bounds.max[0]-3;d+=7)for(let f=0;f<28;f++){let m=f/28*Math.PI*2,x=new v(0,-Math.cos(m),-Math.sin(m));e.set(d,Math.cos(m)*(this.drum-c),Math.sin(m)*(this.drum-c)),h(e,x)}if(this.enclosed)for(let d=0;d<(this.drum?1:3);d++)for(let f of[-1,1]){let m=(d+1)%3,x=(d+2)%3,g=new v().setComponent(d,-f),p=10;for(let y=this.bounds.min[m]+6;y<this.bounds.max[m]-3;y+=p)for(let M=this.bounds.min[x]+6;M<this.bounds.max[x]-3;M+=p)e.setComponent(d,(f>0?this.bounds.max[d]:this.bounds.min[d])-f*c),e.setComponent(m,y),e.setComponent(x,M),h(e,g)}for(let d of this.spheres){let f=Math.round(10+d.r*2);for(let m=0;m<f;m++){let x=new v().randomDirection();e.copy(d.c).addScaledVector(x,d.r+c),Math.abs(e.x)<s[0]&&Math.abs(e.y)<s[1]&&Math.abs(e.z)<s[2]&&h(e,x)}}this.navCell=10,this.navHash=new Map,t.forEach((d,f)=>{d.i=f,d.nb=[],d.cost=[];let m=this.hashKey(d.pos);this.navHash.has(m)||this.navHash.set(m,[]),this.navHash.get(m).push(f)}),this.nav=t;let u=this.def.navR;for(let d of t)this.forNear(d.pos,u,f=>{if(f<=d.i)return;let m=t[f],x=d.pos.distanceTo(m.pos);x>u||this.segmentClear(d.pos,m.pos,.6)&&(d.nb.push(f),d.cost.push(x),m.nb.push(d.i),m.cost.push(x))})}hashKey(t){let e=this.navCell;return(Math.floor(t.x/e)+64)*4096+(Math.floor(t.y/e)+32)*64+(Math.floor(t.z/e)+32)}forNear(t,e,n){let i=this.navCell,s=Math.floor((t.x-e)/i),r=Math.floor((t.x+e)/i),a=Math.floor((t.y-e)/i),l=Math.floor((t.y+e)/i),c=Math.floor((t.z-e)/i),h=Math.floor((t.z+e)/i);for(let u=s;u<=r;u++)for(let d=a;d<=l;d++)for(let f=c;f<=h;f++){let m=this.navHash.get((u+64)*4096+(d+32)*64+(f+32));if(m)for(let x of m)n(x)}}nearestNode(t,e=!0){let n=-1,i=1/0;for(let s of[8,16,32])if(this.forNear(t,s,r=>{let a=this.nav[r].pos.distanceToSquared(t);a<i&&(!e||this.segmentClear(t,this.nav[r].pos,.4))&&(i=a,n=r)}),n>=0)return n;for(let s of this.nav){let r=s.pos.distanceToSquared(t);r<i&&(i=r,n=s.i)}return n}findPath(t,e,n=null){let i=this.nearestNode(t);if(i<0||e<0)return null;let s=this.nav.length,r=new Float32Array(s).fill(1/0),a=new Int32Array(s).fill(-1),l=new Uint8Array(s),c=this.nav[e].pos,h=new Wo;r[i]=0,h.push(i,i===e?0:this.nav[i].pos.distanceTo(c));let u=0;for(;h.size&&u++<6e3;){let m=h.pop();if(m===e)break;if(l[m])continue;l[m]=1;let x=this.nav[m];for(let g=0;g<x.nb.length;g++){let p=x.nb[g];if(l[p])continue;let y=x.cost[g];n&&(y+=n(this.nav[p]));let M=r[m]+y;M<r[p]&&(r[p]=M,a[p]=m,h.push(p,M+this.nav[p].pos.distanceTo(c)))}}if(a[e]<0&&e!==i)return null;let d=[],f=e;for(;f>=0&&f!==i;)d.push(this.nav[f].pos.clone()),f=a[f];return d.reverse(),d.length||d.push(this.nav[e].pos.clone()),d}makeSpawns(t){let e=[],n=this.def.spawnX,i=this.enclosed?[-14,-5,5,14]:[-20,-7,7,20];for(let s of[-10,-3,4,10])for(let r of i)e.push(new v(t*n,s,r));return e}outside(t){let e=0;for(let n=0;n<3;n++)e=Math.max(e,Math.abs(t.getComponent(n))-this.bounds.max[n]);return e}buildYard(){let t=this.mats,e=this.def.bounds[0];this.addBox([-14,-7,-7],[14,7,7],t.hull,{tile:4}),this.addBox([-5,-5,7],[5,5,22],t.ceil,{tile:4}),this.addBox([-5,-5,-22],[5,5,-7],t.ceil,{tile:4}),this.addBox([-4,7,-4],[4,20,4],t.hull,{tile:4}),this.addBox([-4,-20,-4],[4,-7,4],t.hull,{tile:4}),this.addBox([-1.5,24,-26],[1.5,26,26],t.girder,{tile:2}),this.addBox([-1.5,-26,-26],[1.5,-24,26],t.girder,{tile:2}),this.addBox([-1.5,-24,24],[1.5,24,26],t.girder,{tile:2}),this.addBox([-1.5,-24,-26],[1.5,24,-24],t.girder,{tile:2}),this.strip(-14.05,-.2,-7.05,14.05,.2,7.05,this.mats.stripW);for(let x of[-3,3])for(let g of[-3,3])this.addMirrored([14,x-.5,g-.5],[116,x+.5,g+.5],t.girder,t.girder,{tile:2});for(let x of[34,58,82,104])this.addMirrored([x,-3.5,-3.5],[x+1,-2.5,3.5],t.steel,t.steel,{tile:2}),this.addMirrored([x,2.5,-3.5],[x+1,3.5,3.5],t.steel,t.steel,{tile:2});this.addMirrored([46,3.6,6],[70,4,30],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([46,-4,-30],[70,-3.6,-6],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([86,6,-.4],[98,30,.4],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([128,-20,-30],[130,20,30],t.hullOrange,t.hullBlue,{tile:6}),this.addMirrored([116,-20,-30],[130,-18,30],t.deck,t.deck,{tile:6}),this.addMirrored([116,18,-30],[130,20,30],t.deck,t.deck,{tile:6}),this.addMirrored([113,-6,-18],[115,6,-10],t.hullOrange,t.hullBlue,{tile:3}),this.addMirrored([113,-6,10],[115,6,18],t.hullOrange,t.hullBlue,{tile:3}),this.addMirrored([113,9,-4],[115,14,4],t.hullOrange,t.hullBlue,{tile:3});let n=[t.cRed,t.cYel,t.cGrey,t.cTeal];[[[30,14,18],[42,16.6,20.6]],[[36,-18,-26],[38.6,-6,-23.4]],[[52,22,-14],[54.6,24.6,-2]],[[64,-24,14],[76,-21.4,16.6]],[[78,12,30],[80.6,24,32.6]],[[96,-14,-36],[108,-11.4,-33.4]],[[22,-34,4],[24.6,-31.4,16]],[[100,30,18],[102.6,32.6,30]],[[60,40,-40],[72,42.6,-37.4]],[[88,-40,2],[90.6,-28,4.6]],[[16,30,-36],[28,32.6,-33.4]]].forEach(([x,g],p)=>this.addMirrored(x,g,n[p%4],n[(p+1)%4],{tile:3})),[[[26,-8,30],[34,0,30.6]],[[70,8,-22],[70.6,18,-12]],[[44,-30,8],[52,-29.5,18]],[[108,0,40],[108.6,10,50]]].forEach(([x,g])=>this.addMirrored(x,g,t.steel,t.steel,{tile:3}));let r=[[45,35,30,9],[75,-40,-20,12],[30,-30,45,7],[100,40,-45,10],[60,20,-52,6],[112,-38,42,8],[20,46,-28,5],[86,0,54,7],[130,50,0,9]],a=new Nt({color:7037530,roughness:.95,metalness:.05,flatShading:!0}),l=(x,g,p,y)=>{let M=new vr(y,2),_=M.attributes.position,A=new v,T=Math.random()*10;for(let I=0;I<_.count;I++){A.fromBufferAttribute(_,I);let w=1+.07*Math.sin(A.x*.9+T)*Math.cos(A.y*1.1-T)+.04*Math.sin(A.z*2.3+T*2);A.multiplyScalar(w),_.setXYZ(I,A.x,A.y,A.z)}M.computeVertexNormals();let C=new ut(M,a);C.castShadow=!0,C.receiveShadow=!0,C.position.set(x,g,p),C.rotation.set(Math.random()*3,Math.random()*3,0),this.group.add(C),this.spheres.push({c:new v(x,g,p),r:y})};for(let[x,g,p,y]of r)l(x,g,p,y),l(-x,-g,-p,y);l(0,50,40,8),l(0,-50,-40,8);let c=new qt({color:16730938}),h=this.def.bounds;for(let x of[-1,1])for(let g of[-1,1])for(let p of[-1,1]){let y=new ut(new Uo(1.2),c);y.position.set(x*h[0],g*h[1],p*h[2]),this.group.add(y)}this.group.add(new Os(10138879,2765640,.7));let u=new Ti(16773853,3.2);u.position.set(-.3,.5,-1),this.group.add(u),this.sun=u,this.buildYardDetail();let d=new Ti(7314687,.8);d.position.set(.2,-1,.5),this.group.add(d);let f=new He(4164863,30,60,1);f.position.set(-122,0,0),this.group.add(f);let m=new He(16747050,30,60,1);m.position.set(122,0,0),this.group.add(m)}};var Tx=`
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC;
uniform float scale;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(size * scale / max(0.1, -mv.z), 0.0, 256.0);
  vA = alpha; vC = color;
}`,Ax=`
varying float vA; varying vec3 vC;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  float a = (1.0 - r);
  gl_FragColor = vec4(vC, vA * a * a);
}`,Zo=class{constructor(t,e,n){this.max=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.drag=new Float32Array(e),this.a0=new Float32Array(e),this.n=0,this.density=1;let i=new ue;this.aPos=new pe(this.pos,3).setUsage(Ai),this.aCol=new pe(this.col,3).setUsage(Ai),this.aSize=new pe(this.size,1).setUsage(Ai),this.aAlpha=new pe(this.alpha,1).setUsage(Ai),i.setAttribute("position",this.aPos),i.setAttribute("color",this.aCol),i.setAttribute("size",this.aSize),i.setAttribute("alpha",this.aAlpha),i.setDrawRange(0,0),this.mat=new me({vertexShader:Tx,fragmentShader:Ax,transparent:!0,depthWrite:!1,blending:n?Ze:_i,uniforms:{scale:{value:600}}}),this.points=new Ns(i,this.mat),this.points.frustumCulled=!1,this.geo=i,t.add(this.points)}spawn(t,e,n,i,s,r={}){if(this.density<1&&i<.3&&Math.random()>this.density)return;let a=this.n;a>=this.max?a=Math.floor(Math.random()*this.max):this.n++,this.pos[a*3]=t.x,this.pos[a*3+1]=t.y,this.pos[a*3+2]=t.z,this.vel[a*3]=e?e.x:0,this.vel[a*3+1]=e?e.y:0,this.vel[a*3+2]=e?e.z:0;let l=n;this.col[a*3]=l.r,this.col[a*3+1]=l.g,this.col[a*3+2]=l.b,this.size0[a]=i,this.size[a]=i,this.life[a]=s,this.maxLife[a]=s,this.grow[a]=r.grow||0,this.drag[a]=r.drag||0,this.a0[a]=r.alpha!=null?r.alpha:1,this.alpha[a]=this.a0[a]}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){e--,n!==e&&this.copy(e,n),n--;continue}let i=n*3,s=this.drag[n]?Math.exp(-this.drag[n]*t):1;this.vel[i]*=s,this.vel[i+1]*=s,this.vel[i+2]*=s,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t;let r=this.life[n]/this.maxLife[n];this.alpha[n]=this.a0[n]*r,this.size[n]=this.size0[n]*(1+this.grow[n]*(1-r))}this.n=e,this.geo.setDrawRange(0,e),this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=this.aAlpha.needsUpdate=!0}copy(t,e){for(let n=0;n<3;n++)this.pos[e*3+n]=this.pos[t*3+n],this.vel[e*3+n]=this.vel[t*3+n],this.col[e*3+n]=this.col[t*3+n];this.size[e]=this.size[t],this.alpha[e]=this.alpha[t],this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.size0[e]=this.size0[t],this.grow[e]=this.grow[t],this.drag[e]=this.drag[t],this.a0[e]=this.a0[t]}},Pi=o=>new et(o),Pe={beam:Pi(16765498),spark:Pi(16763255),white:Pi(16777215),gas:Pi(13162730),fire:Pi(16742954),smoke:Pi(5922662),blood:Pi(10491928),cyan:Pi(10479871)},Jo=class{constructor(t){this.scene=t,this.add=new Zo(t,6e3,!0),this.alpha=new Zo(t,3e3,!1);let e=400;this.trPos=new Float32Array(e*6),this.trCol=new Float32Array(e*6);let n=new ue;this.trA=new pe(this.trPos,3).setUsage(Ai),this.trC=new pe(this.trCol,3).setUsage(Ai),n.setAttribute("position",this.trA),n.setAttribute("color",this.trC),this.tracers=new Us(n,new $i({vertexColors:!0,transparent:!0,blending:Ze,depthWrite:!1})),this.tracers.frustumCulled=!1,this.trGeo=n,this.trMax=e,t.add(this.tracers);let i=320,s=new ke(.5,.5,1,6,1,!0).rotateX(Math.PI/2);this.streakMat=new qt({color:16777215,transparent:!0,opacity:.9,blending:Ze,depthWrite:!1}),this.streaks=new Po(s,this.streakMat,i),this.streaks.instanceMatrix.setUsage(Ai),this.streaks.setColorAt(0,new et),this.streaks.frustumCulled=!1,this.streaks.count=0,t.add(this.streaks),this.streakMax=i,this._m4=new Jt,this._q4=new he,this._s4=new v,this._c4=new et,this._z=new v(0,0,1),this.lights=[0,1,2].map(()=>{let r=new He(16755285,0,40,1.2);return t.add(r),{l:r,t:0,i0:0}}),this.decals=[],this.decalGeo=new ri(.09,6),this.decalMat=new qt({color:1118481,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.decalIdx=0,this._v=new v,this._v2=new v}set density(t){this._d=t,this.add&&(this.add.density=t,this.alpha.density=t)}get density(){return this._d}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));this.add.mat.uniforms.scale.value=n,this.alpha.mat.uniforms.scale.value=n}sparks(t,e,n,i=6,s=Pe.spark){let r=this._v;for(let a=0;a<e;a++)r.randomDirection(),n&&r.dot(n)<0&&r.addScaledVector(n,-2*r.dot(n)),r.multiplyScalar(i*(.3+Math.random())),this.add.spawn(t,r,s,.05+Math.random()*.05,.25+Math.random()*.4)}impact(t,e){this.sparks(t,7,e,7),this.alpha.spawn(t,this._v2.copy(e).multiplyScalar(.8),Pe.smoke,.35,.8,{grow:2,alpha:.5}),this.decal(t,e)}decal(t,e){let n;this.decals.length<160?(n=new ut(this.decalGeo,this.decalMat),this.scene.add(n),this.decals.push(n)):(n=this.decals[this.decalIdx],this.decalIdx=(this.decalIdx+1)%this.decals.length),n.position.copy(t).addScaledVector(e,.02),n.lookAt(this._v.copy(n.position).add(e))}suitHit(t,e,n){for(let i=0;i<8;i++){let s=this._v.copy(e).multiplyScalar(2+Math.random()*3).add(this._v2.randomDirection().multiplyScalar(1.5));n&&s.add(n),this.alpha.spawn(t,s,Pe.gas,.18,.6,{grow:3,alpha:.55})}for(let i=0;i<5;i++){let s=this._v.copy(e).multiplyScalar(1+Math.random()*2).add(this._v2.randomDirection());n&&s.add(n),this.alpha.spawn(t,s,Pe.blood,.06,1.2,{alpha:.9})}}gasJet(t,e,n,i=1){let s=this._v.copy(e).multiplyScalar(4+Math.random()*3).add(this._v2.randomDirection().multiplyScalar(.8));n&&s.add(n),this.alpha.spawn(t,s,Pe.gas,.08*i,.35,{grow:4,alpha:.35})}thrusterPuff(t,e,n){let i=this._v.copy(e).multiplyScalar(6+Math.random()*4).add(this._v2.randomDirection().multiplyScalar(1.2));n&&i.add(n),this.add.spawn(t,i,Pe.cyan,.09,.18,{grow:3,alpha:.25})}muzzle(t,e,n,i){let s=this._v;this.add.spawn(t,n,Pe.fire,i?.6:.35,.05,{alpha:1}),this.add.spawn(t,n,Pe.white,i?.3:.18,.04,{alpha:1});for(let r=0;r<(i?10:4);r++)s.copy(e).multiplyScalar(4+Math.random()*6).add(this._v2.randomDirection().multiplyScalar(2)),n&&s.add(n),this.alpha.spawn(t,s,Pe.smoke,.12,.5,{grow:3,alpha:.35})}explosion(t,e){this.add.spawn(t,null,Pe.white,e*.9,.12,{grow:1}),this.add.spawn(t,null,Pe.fire,e*.7,.35,{grow:1.5});let n=this._v;for(let i=0;i<90;i++)n.randomDirection().multiplyScalar(e*(1+Math.random()*3)),this.add.spawn(t,n,Math.random()<.5?Pe.spark:Pe.fire,.08+Math.random()*.1,.5+Math.random()*.8);for(let i=0;i<26;i++)n.randomDirection().multiplyScalar(e*.5*Math.random()),this.alpha.spawn(t,n,Pe.smoke,.8+Math.random()*.8,1.6+Math.random(),{grow:3,alpha:.45});this.flash(t,16755285,200)}flash(t,e,n){let i=this.lights.reduce((s,r)=>s.t<r.t?s:r);i.l.position.copy(t),i.l.color.setHex(e),i.t=.25,i.i0=n,i.l.intensity=n}debris(t,e,n,i){if(this.debrisList=this.debrisList||[],t.traverse(s=>{s.castShadow=!1}),this.scene.add(t),this.debrisList.push({mesh:t,vel:e,spin:n,life:i,max:i,s0:t.scale.x}),this.debrisList.length>24){let s=this.debrisList.shift();this.scene.remove(s.mesh)}}update(t,e){if(this.debrisList){for(let l of this.debrisList)l.life-=t,l.mesh.position.addScaledVector(l.vel,t),l.mesh.rotation.x+=l.spin.x*t,l.mesh.rotation.y+=l.spin.y*t,l.mesh.rotation.z+=l.spin.z*t,l.life<1&&l.mesh.scale.setScalar(l.s0*Math.max(.01,l.life)),l.life<=0&&this.scene.remove(l.mesh);this.debrisList=this.debrisList.filter(l=>l.life>0)}this.add.update(t),this.alpha.update(t);for(let l of this.lights)l.t>0?(l.t-=t,l.l.intensity=Math.max(0,l.i0*l.t/.25)):l.l.intensity=0;let n=0;for(let l of e){if(n>=this.trMax)break;let c=n*6;this.trPos[c]=l.pos.x,this.trPos[c+1]=l.pos.y,this.trPos[c+2]=l.pos.z;let h=l.tail;this.trPos[c+3]=l.pos.x-l.vel.x*h,this.trPos[c+4]=l.pos.y-l.vel.y*h,this.trPos[c+5]=l.pos.z-l.vel.z*h;let u=l.color;this.trCol[c]=u.r,this.trCol[c+1]=u.g,this.trCol[c+2]=u.b,this.trCol[c+3]=u.r*.1,this.trCol[c+4]=u.g*.1,this.trCol[c+5]=u.b*.1,n++}this.trGeo.setDrawRange(0,n*2),this.trA.needsUpdate=this.trC.needsUpdate=!0;let i=0,s=(l,c,h,u,d,f)=>{i>=this.streakMax||(this._q4.setFromUnitVectors(this._z,c),this._m4.compose(l,this._q4,this._s4.set(u,u,h)),this.streaks.setMatrixAt(i,this._m4),this.streaks.setColorAt(i,this._c4.copy(d).multiplyScalar(f)),i++)},r=this._v,a=this._v2;for(let l of e){let c=l.vel.length()*l.tail;c<.05||(a.copy(l.vel).normalize(),r.copy(l.pos).addScaledVector(a,-c/2),l.beam?(s(r,a,c,l.width*.6,this._white||(this._white=new et(1,.97,.85)),2.2),s(r,a,c,l.width*1.6,l.color,1.6),s(r,a,c,l.width*5,l.color,.28)):s(r,a,c,l.width,l.color,2.4))}this.streaks.count=i,this.streaks.instanceMatrix.needsUpdate=!0,this.streaks.instanceColor&&(this.streaks.instanceColor.needsUpdate=!0)}};var Ko=class{constructor(){this.ctx=null,this.master=null,this.volume=.6,this.hiss=null}init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let t=this.ctx.sampleRate*1.5;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let e=this.noise.getChannelData(0);for(let r=0;r<t;r++)e[r]=Math.random()*2-1;let n=this.ctx.createBufferSource();n.buffer=this.noise,n.loop=!0;let i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=2400,i.Q.value=.6;let s=this.ctx.createGain();s.gain.value=0,n.connect(i),i.connect(s),s.connect(this.master),n.start(),this.hiss=s}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setHiss(t){this.hiss&&this.hiss.gain.setTargetAtTime(Math.min(.25,t*.06),this.ctx.currentTime,.03)}burst({freq:t=800,q:e=1,dur:n=.15,gain:i=.5,type:s="lowpass",tone:r=0,toneDur:a=.1,dist:l=0}){if(!this.ctx)return;let c=this.ctx.currentTime,h=1/(1+l*.08);if(h<.03)return;let u=l>3?Math.max(250,t*.25):t,d=this.ctx.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;let f=this.ctx.createBiquadFilter();f.type=s,f.frequency.value=u,f.Q.value=e;let m=this.ctx.createGain();if(m.gain.setValueAtTime(i*h,c),m.gain.exponentialRampToValueAtTime(.001,c+n),d.connect(f),f.connect(m),m.connect(this.master),d.start(c,Math.random()),d.stop(c+n+.05),r){let x=this.ctx.createOscillator();x.frequency.setValueAtTime(r,c),x.frequency.exponentialRampToValueAtTime(r*.4,c+a);let g=this.ctx.createGain();g.gain.setValueAtTime(i*h*.6,c),g.gain.exponentialRampToValueAtTime(.001,c+a),x.connect(g),g.connect(this.master),x.start(c),x.stop(c+a+.05)}}beep(t,e=.08,n=.15,i="square"){if(!this.ctx)return;let s=this.ctx.currentTime,r=this.ctx.createOscillator();r.type=i,r.frequency.value=t;let a=this.ctx.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(a),a.connect(this.master),r.start(s),r.stop(s+e+.02)}play(t,e=0){switch(t){case"rifle":this.burst({freq:1800,dur:.12,gain:.35,tone:140,toneDur:.08,dist:e});break;case"shotgun":this.burst({freq:900,dur:.3,gain:.6,tone:90,toneDur:.2,dist:e});break;case"gyro":this.burst({freq:3e3,type:"highpass",dur:.5,gain:.25,dist:e});break;case"recoilless":this.burst({freq:700,dur:.6,gain:.7,tone:70,toneDur:.35,dist:e});break;case"maser":this.beep(2600+Math.random()*200,.05,e>3?.02/(1+e*.05):.05,"sawtooth");break;case"explosion":this.burst({freq:400,dur:1,gain:.9,tone:60,toneDur:.6,dist:e});break;case"hit":this.beep(1400,.05,.12,"triangle");break;case"head":this.beep(2100,.07,.15,"triangle");break;case"kill":this.beep(880,.08,.15),setTimeout(()=>this.beep(1320,.12,.15),80);break;case"hurt":this.burst({freq:300,dur:.25,gain:.5,tone:70,toneDur:.2});break;case"impact":this.burst({freq:200,dur:.3,gain:.5,tone:50,toneDur:.25,dist:e});break;case"clank":this.burst({freq:1200,q:6,type:"bandpass",dur:.15,gain:.3,dist:e});break;case"reload":this.burst({freq:2500,q:8,type:"bandpass",dur:.06,gain:.25});break;case"magout":this.burst({freq:1800,q:9,type:"bandpass",dur:.05,gain:.3});break;case"magin":this.burst({freq:900,q:6,type:"bandpass",dur:.08,gain:.45}),setTimeout(()=>this.burst({freq:2600,q:10,type:"bandpass",dur:.03,gain:.25}),60);break;case"rack":this.burst({freq:1400,q:7,type:"bandpass",dur:.06,gain:.35}),setTimeout(()=>this.burst({freq:1100,q:7,type:"bandpass",dur:.07,gain:.4}),110);break;case"shell":this.burst({freq:2e3,q:8,type:"bandpass",dur:.04,gain:.25});break;case"empty":this.beep(300,.04,.1);break;case"grab":this.burst({freq:700,q:4,type:"bandpass",dur:.12,gain:.35});break;case"push":this.burst({freq:400,dur:.18,gain:.3});break;case"warn":this.beep(660,.1,.1,"sawtooth");break;case"melee":this.burst({freq:500,dur:.2,gain:.6,tone:120,toneDur:.15,dist:e});break;case"throw":this.burst({freq:1500,dur:.1,gain:.15});break;case"bounce":this.burst({freq:2200,q:10,type:"bandpass",dur:.08,gain:.2,dist:e});break;case"mode":this.beep(1e3,.05,.1,"sine");break;case"spawn":this.beep(520,.1,.12,"sine"),setTimeout(()=>this.beep(780,.15,.12,"sine"),110);break;default:break}}};var tn={rifle:{id:"rifle",hipSpread:.0065,adsSpread:8e-4,name:"KR-7 KINETIC RIFLE",short:"KR-7",kind:"bullet",speed:400,projMass:.01,dmg:20,headMul:2.2,rpm:600,mag:30,reserve:180,reload:2.1,spread:.0016,auto:!0,mass:4.2,kick:.004,tracer:16770720,tracerW:.03,tracerLen:5,sound:"rifle"},shotgun:{id:"shotgun",hipSpread:.062,adsSpread:.036,name:"FL-12 FLECHETTE",short:"FL-12",kind:"pellets",speed:320,pellets:10,ejecta:100,dmg:11,headMul:1.5,rpm:75,mag:6,reserve:30,reload:.5,perShell:!0,spread:.045,auto:!1,mass:4.6,kick:.03,tracer:16758880,tracerW:.018,tracerLen:3,sound:"shotgun"},gyrojet:{id:"gyrojet",hipSpread:.008,adsSpread:8e-4,name:"GJ-3 GYROJET",short:"GJ-3",kind:"rocket",speed:30,accel:280,burn:1.3,dmg:72,headMul:1.3,splash:3.2,splashDmg:45,projRadius:.3,rpm:100,mag:5,reserve:30,reload:2.6,spread:.001,auto:!1,mass:5,kick:.006,ejecta:.6,tracer:16740416,sound:"gyro"},recoilless:{id:"recoilless",hipSpread:.011,adsSpread:5e-4,name:"RR-90 RECOILLESS",short:"RR-90",kind:"bullet",speed:260,projMass:.25,ejecta:0,dmg:88,headMul:1.4,rpm:40,mag:1,reserve:14,reload:2.2,spread:8e-4,auto:!1,mass:6.5,kick:.02,tracer:16747072,tracerW:.07,tracerLen:4,sound:"recoilless",backblast:{range:7,impulse:260,dmg:25},splash:4,splashDmg:30,splashImpulse:180,homing:{cone:.122,accel:90}},maser:{id:"maser",hipSpread:.005,adsSpread:4e-4,name:"LM-2 MASER",short:"LM-2",kind:"beam",range:180,dps:80,dmg:0,headMul:1.5,rpm:3600,mag:1,reserve:0,reload:0,heatRate:.5,coolRate:.35,spread:4e-4,auto:!0,mass:5.5,kick:0,tracer:16765498,sound:"maser"}},Ws=["rifle","shotgun","gyrojet","recoilless","maser"],Gc={rifle:"All-rounder. 400 m/s rounds, light recoil.",shotgun:"Close range. Each shot is a 0.75 m/s escape burn.",gyrojet:"Rockets that accelerate. Deadly on slow or anchored targets.",recoilless:"Slightly guided HE slug with a 4 m blast. No recoil; backblast shoves anyone behind you.",maser:"Continuous yellow beam: steady damage while held, no recoil, no ammo. Overheats."},Je={fuse:3.5,speed:18,mass:.6,radius:9,dmg:115,impulse:520,restitution:.85,count:2},Vn={range:2.4,dmg:45,impulse:420,spin:4.5,cooldown:.9},Qo=class{constructor(t){this.def=t,this.mag=t.mag,this.reserve=t.reserve,this.cool=0,this.reloadT=0,this.heat=0,this.overheat=!1}};var fn=[4164863,16747050],sa=["BLUE","ORANGE"],Xs=["MANUAL","RATE DAMP","ATT HOLD","VEL MATCH"],Ar=["No assists. Every rotation and stop is your own counter-burn.","Rotation is damped automatically when you stop steering. Linear drift remains.","Holds your body attitude while you translate (PD controller).","Attitude hold + auto-burn to match the velocity of the station or a locked target."],ia=110,$u=700,Ii=10,Rx=112,rn=.7,Cx=1.5,Wc=3.2,Px=.42,Ix=.5,ai=.6,Li=8,Lx=2.2,dn=[{sx:-1,sy:1},{sx:1,sy:1},{sx:-1,sy:-1},{sx:1,sy:-1}].map(o=>({...o,pos:new v(o.sx*Px,o.sy*Ix,0)})),wr=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],Xc=[{p:new v(0,.6,-.02),r:.21,part:"head"},{p:new v(0,.22,0),r:.34,part:"chest"},{p:new v(0,-.18,0),r:.3,part:"body"},{p:new v(0,.15,.3),r:.28,part:"pack"},{p:new v(-.14,-.62,-.08),r:.17,part:"leg"},{p:new v(.14,-.62,-.08),r:.17,part:"leg"},{p:new v(-.14,-.95,.08),r:.15,part:"leg"},{p:new v(.14,-.95,.08),r:.15,part:"leg"}],Ve=new v,Gn=new v,Bt=new he,Zu=new Ne(0,0,0,"YXZ"),Ju=new Map;function qc(o,t,e={}){let n=o+":"+t+":"+!!e.noShadow,i=Ju.get(n);i||(i=Gu(o,t,e),i.userData.magIndex=i.children.indexOf(i.userData.mag),Ju.set(n,i));let s=i.userData;i.userData={};let r=i.clone(!0);return i.userData=s,r.userData={...s,sight:s.sight.clone(),hand:s.hand.clone(),grip:s.grip.clone(),magRest:s.magRest.clone(),mag:r.children[s.magIndex]},r}var Dx=new me({side:Se,uniforms:{color:{value:new et(16726831)},thick:{value:.0032}},vertexShader:`uniform float thick;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 dir = normalize(normalMatrix * normal);
      mv.xyz += dir * thick * max(1.5, -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }"});function cd(o){let t=[];o.traverse(n=>{n.isMesh&&!n.userData.noOutline&&t.push(n)});let e=[];for(let n of t){let i=new ut(n.geometry,Dx);i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),i.visible=!1,i.userData.noOutline=!0,n.parent.add(i),e.push(i)}return e}function Ux(o){let t=Wu(fn[o],dn,wr),e=t.root,n=new Fs(.055,.42,6,1,!0);n.translate(0,-.21,0);let i=new qt({color:new et(13625599).multiplyScalar(1.6),transparent:!0,opacity:.75,blending:Ze,depthWrite:!1}),s=[],r=new v(0,1,0);for(let l of dn)for(let c=0;c<6;c++){let h=new ut(n,i),u=wr[c].clone().negate();h.quaternion.setFromUnitVectors(r,u.clone().negate()),h.position.copy(l.pos).addScaledVector(u,.09),h.visible=!1,h.userData.noOutline=!0,e.add(h),s.push(h)}let a=cd(e);return{...t,flames:s,outlines:a}}var Nx=1,Tr=class{constructor(t,e,n,i=!1){this.id=Nx++,this.game=t,this.team=e,this.name=n,this.isPlayer=i,this.pos=new v,this.vel=new v,this.quat=new he,this.angVel=new v,this.aimYaw=0,this.aimPitch=0,this.mode=1,this.holdQ=null,this.ctrl={move:new v,roll:0,killRot:!1,brake:!1},this.throttle=new Float32Array(24),this.kills=0,this.deaths=0,this.score=0,this.alive=!1,this.respawnT=0,this.refTarget=null,this.model=Ux(e),t.scene.add(this.model.root),this.gunMeshes={};for(let s of Object.keys(tn)){let r=qc(s,fn[e]);r.visible=!1,this.model.gunMount.add(r),this.gunMeshes[s]=r;for(let a of cd(r))this.model.outlines.push(a)}this.reset()}reset(){this.health=100,this.o2=100,this.gas=Ii,this.vel.set(0,0,0),this.angVel.set(0,0,0),this.aimYaw=this.aimPitch=0,this.holdQ=null,this.grab=null,this.leaks=[],this.towers=dn.map(()=>({hp:30,dead:!1})),this.weapons=(this.loadout||["rifle","shotgun"]).map(t=>new Qo(tn[t]||tn.rifle)),this.cur=0,this.switchT=0,this.grenades=Je.count,this.grenadeCool=0,this.meleeCool=0,this.throwT=0,this.throwDir=null,this.meleeT=0,this.ads=!1,this.adsAmt=0,this.walking=!1,this.jumpGrace=0,this.walkTarget=null,this.lastDamageT=-99,this.lastThrustT=-99,this.lastAttacker=null,this.spawnProtect=2,this.kick=new ht,this.pushCharge=0,this.lastFireT=-99,this.throttle.fill(0),this.impactCool=0}get weapon(){return this.weapons[this.cur]}get mass(){let t=Rx+this.gas;for(let e of this.weapons)t+=e.def.mass;return t}inertia(t){let e=this.mass/125;return t.set(21*e,9*e,19*e)}get dv(){let t=this.mass,e=t-this.gas;return $u*Math.log(t/e)}eye(t){return t.copy(Ve.set(0,.6,-.05).applyQuaternion(this.quat)).add(this.pos)}aimQuat(t){return Zu.set(this.aimPitch,this.aimYaw,0,"YXZ"),t.setFromEuler(Zu).premultiply(this.quat)}aimDir(t){return t.set(0,0,-1).applyQuaternion(this.aimQuat(Bt))}forward(t){return t.set(0,0,-1).applyQuaternion(this.quat)}setAimDir(t){if(this.walking){let n=na.set(0,1,0).applyQuaternion(this.quat),i=Ve.copy(t).addScaledVector(n,-t.dot(n));if(i.lengthSq()>1e-6){i.normalize();let s=this.forward(Gn);s.addScaledVector(n,-s.dot(n)).normalize();let r=Math.atan2(n.dot(od.crossVectors(s,i)),s.dot(i));this.quat.premultiply(Bt.setFromAxisAngle(n,r)).normalize()}this.aimPitch=Math.asin(zt(t.dot(n)/t.length(),-1,1)),this.aimPitch=zt(this.aimPitch,-1.45,1.45);return}let e=this.forward(Gn);Bt.setFromUnitVectors(e,Ve.copy(t).normalize()),this.quat.premultiply(Bt).normalize(),this.holdQ&&this.holdQ.premultiply(Bt).normalize()}rollToward(t,e){let n=this.forward(Gn),i=Ve.set(0,1,0).applyQuaternion(this.quat),s=od.copy(t).addScaledVector(n,-t.dot(n));if(s.lengthSq()<.01)return;s.normalize();let r=Math.atan2(n.dot(na.crossVectors(i,s)),i.dot(s)),a=Math.max(-e,Math.min(e,r));Math.abs(a)<1e-4||(Bt.setFromAxisAngle(n,a),this.quat.premultiply(Bt).normalize(),this.holdQ&&this.holdQ.premultiply(Bt).normalize())}addAim(t,e){if(this.walking){this.quat.multiply(Bt.setFromAxisAngle(ld,t)).normalize(),this.aimPitch=zt(this.aimPitch+e,-1.45,1.45);return}Bt.setFromAxisAngle(ld,t),nd.setFromAxisAngle(ad,e),Bt.multiply(nd),this.quat.multiply(Bt).normalize(),this.holdQ&&this.holdQ.multiply(Bt).normalize()}spawn(t,e){this.reset(),this.alive=!0,this.pos.copy(t),this.quat.setFromUnitVectors(new v(0,0,-1),e.clone().normalize()),this.model.root.visible=!this.isPlayer,this.walking=!1,this.aimPitch=0,this.aimYaw=0}applyImpulse(t,e,n=!0){if(n==="recoil"?!this.game.rules.recoil:n&&!this.game.rules.knockback)return;if(this.grab&&this.grab.kind!=="pod")if(t.length()>120)this.grab=null;else return;let i=this.mass;if(this.vel.addScaledVector(t,1/i),e){let s=Ve.subVectors(e,this.pos),r=Gn.crossVectors(s,t).applyQuaternion(Bt.copy(this.quat).invert()),a=this.inertia(Ve);this.angVel.x+=r.x/a.x,this.angVel.y+=r.y/a.y,this.angVel.z+=r.z/a.z}}flightComputer(t){let e=this.ctrl,n=this.mode,i=e.roll,s=Ku.set(0,0,0),r=this.angVel,a=n===0&&!this.isBot,l=e.killRot;if(a&&!l)s.set(0,0,i),this.holdQ=null;else{let u=ju.set(0,0,l?0:i*Cx);if((n>=2||this.isBot)&&!l&&i===0){if(!this.holdQ&&r.lengthSq()<.02&&(this.holdQ=this.quat.clone()),this.holdQ){Bt.copy(this.quat).invert().multiply(this.holdQ),Bt.w<0&&(Bt.x=-Bt.x,Bt.y=-Bt.y,Bt.z=-Bt.z,Bt.w=-Bt.w);let x=Math.sqrt(1-Math.min(1,Bt.w*Bt.w)),g=2*Math.acos(zt(Bt.w,-1,1));x>1e-5&&u.set(Bt.x/x,Bt.y/x,Bt.z/x).multiplyScalar(Math.min(1.2,g*4))}}else this.holdQ=null;let f=Ve.subVectors(u,r),m=this.isBot?.02:.004;s.set(Math.abs(f.x)<m?0:zt(f.x*Wc,-1,1),Math.abs(f.y)<m?0:zt(f.y*Wc,-1,1),Math.abs(f.z)<m?0:zt(f.z*Wc,-1,1))}let c=Qu.copy(e.move);if(!a&&(e.brake||n===3&&!this.isBot)){let u=this.refTarget&&this.refTarget.alive!==!1?this.refTarget.vel:Fx,d=Ve.subVectors(this.vel,u).applyQuaternion(Bt.copy(this.quat).invert());for(let f of["x","y","z"])if(e.brake||c[f]===0){let m=-d[f];c[f]=Math.abs(m)<.04?0:zt(m*1.3,-1,1)}}return this.allocate(c,s,t)}allocate(t,e,n){let i=jo.set(0,0,0),s=td.set(0,0,0),r=0,a=this.throttle;for(let h=0;h<4;h++){let u=dn[h],d=this.towers[h],f=zt(t.x-e.z*u.sy,-1,1),m=zt(t.y+e.z*u.sx,-1,1),x=zt(t.z+e.x*u.sy-e.y*u.sx,-1,1),g=h*6;if(a[g+0]=f>0?f:0,a[g+1]=f<0?-f:0,a[g+2]=m>0?m:0,a[g+3]=m<0?-m:0,a[g+4]=x>0?x:0,a[g+5]=x<0?-x:0,d.dead)for(let p=0;p<6;p++)a[g+p]=0;for(let p=0;p<6;p++)r+=a[g+p]}if(r<=0)return r;let l=r*ia/$u*n,c=1;if(this.game.rules.infiniteGas&&(l=0),l>this.gas&&(c=this.gas/l,l=this.gas),this.gas-=l,c<1)for(let h=0;h<24;h++)a[h]*=c;for(let h=0;h<4;h++){let u=dn[h];ta.set(0,0,0);for(let d=0;d<6;d++){let f=a[h*6+d];f>0&&ta.addScaledVector(wr[d],f*ia)}i.add(ta),s.add(Gn.crossVectors(u.pos,ta))}return r*c>.05&&(this.lastThrustT=this.game.time),r*c}step(t){let e=this.game.world,n=this.inertia(ed),i=this.mass;if(this.alive&&this.grab){this.stepGrabbed(t);return}if(this.alive&&this.walking){this.stepWalk(t,e);return}let s=null,r=null;this.alive?(this.flightComputer(t),s=jo,r=td):this.throttle.fill(0);let a=kx.set(0,0,0),l=Ox.set(0,0,0);if(s&&this.throttle.some(A=>A>0)&&(a.copy(s).applyQuaternion(this.quat),l.copy(r)),e.omega&&!this.grab&&(a.addScaledVector(e.gravityAt(this.pos,ea),i),a.addScaledVector(e.coriolis(this.vel,ea),i)),this.game.rules.breaches)for(let A of this.leaks){let T=Ve.copy(A.n).multiplyScalar(-28);l.add(Gn.crossVectors(A.p,T)),a.add(T.applyQuaternion(this.quat))}this.vel.addScaledVector(a,t/i),this.pos.addScaledVector(this.vel,t);let c=this.angVel,h=Ve.set(n.x*c.x,n.y*c.y,n.z*c.z),u=Gn.crossVectors(c,h);c.x+=(l.x-u.x)/n.x*t,c.y+=(l.y-u.y)/n.y*t,c.z+=(l.z-u.z)/n.z*t;let d=c.length();d>12&&c.multiplyScalar(12/d);let f=this.quat,m=f.x,x=f.y,g=f.z,p=f.w,y=c.x*t*.5,M=c.y*t*.5,_=c.z*t*.5;f.x+=p*y+x*_-g*M,f.y+=p*M+g*y-m*_,f.z+=p*_+m*M-x*y,f.w+=-m*y-x*M-g*_,f.normalize(),this.collide(t,e),this.alive&&e.omega&&this.tryLand(e)}stepGrabbed(t){let e=this.grab;if(this.throttle.fill(0),jo.set(0,0,0),e.kind==="pod"){let r=e.obj,a=Qu.copy(this.ctrl.move);if(this.ctrl.brake&&!(this.mode===0&&!this.isBot)){let l=Ve.copy(r.vel).applyQuaternion(Bt.copy(this.quat).invert());for(let c of["x","y","z"])a[c]=Math.abs(l[c])<.04?0:zt(-l[c]*1.3,-1,1)}a.lengthSq()>0&&this.allocate(a,Ku.set(0,0,0),t)>0&&r.vel.addScaledVector(jo.applyQuaternion(this.quat),t/(this.mass+r.mass)),this.pos.copy(r.pos).add(e.offset),this.vel.copy(r.vel)}else if(!this.crawl(t))return;let n=ju.set(0,0,this.ctrl.roll*1);this.angVel.lerp(n,Math.min(1,t*8));let i=this.angVel,s=i.length();s>1e-6&&(Bt.setFromAxisAngle(Ve.copy(i).divideScalar(s),s*t),this.quat.multiply(Bt).normalize())}tryLand(t){if(this.jumpGrace>0)return;let e=t.upAt(this.pos,id);if(t.gravityAt(this.pos,ea).length()<.8)return;let i=t.raycast(this.pos,sd.copy(e).negate(),1.3,!0);if(!i||i.n.dot(e)<.7)return;let s=na.set(0,1,0).applyQuaternion(this.quat);if(s.dot(e)<.35)return;let r=-this.vel.dot(e);r>11&&this.game.damage(this,(r-11)*16,null,"landing",this.pos.clone().addScaledVector(e,-1)),r>2&&this.game.onImpact(this,r,this.pos.clone().addScaledVector(e,-1.05),e.clone());let a=this.aimDir(rd).clone();this.quat.premultiply(Bt.setFromUnitVectors(s,e)).normalize(),this.aimPitch=0,this.aimYaw=0,this.walking=!0,this.holdQ=null,this.angVel.set(0,0,0),this.vel.addScaledVector(e,-this.vel.dot(e)),this.setAimDir(a)}leaveWalk(){this.walking=!1,this.quat.multiply(Bt.setFromAxisAngle(ad,this.aimPitch)).normalize(),this.aimPitch=0,this.aimYaw=0,this.jumpGrace=.35}stepWalk(t,e){this.throttle.fill(0);let n=e.upAt(this.pos,id),i=e.raycast(this.pos,sd.copy(n).negate(),1.6,!0),s=e.gravityAt(this.pos,ea);if(!i||i.n.dot(n)<.6||s.length()<.5){this.leaveWalk();return}let r=na.set(0,1,0).applyQuaternion(this.quat);this.quat.premultiply(Bt.setFromUnitVectors(r,n)).normalize(),this.angVel.set(0,0,0);let a=rd.set(0,0,0);if(this.walkTarget)a.copy(this.walkTarget);else{let d=this.forward(Ve).addScaledVector(n,-this.forward(Gn).dot(n)).normalize(),f=Gn.crossVectors(d,n).normalize();a.addScaledVector(f,this.ctrl.move.x).addScaledVector(d,-this.ctrl.move.z),a.lengthSq()>1&&a.normalize(),a.multiplyScalar(5.2)}a.addScaledVector(n,-a.dot(n)),a.length()>6&&a.setLength(6);let l=Ve.copy(this.vel).addScaledVector(n,-this.vel.dot(n));l.lerp(a,Math.min(1,t*10));let c=this.vel.dot(n);if((this.walkTarget?this.walkJump:this.ctrl.move.y>.5)&&this.jumpGrace<=0&&(c=5,this.walkJump=!1),this.vel.copy(l).addScaledVector(n,c),c>1.5){this.pos.addScaledVector(this.vel,t),this.leaveWalk();return}this.pos.addScaledVector(l,t).addScaledVector(i.n,(1.05-i.t)*Math.min(1,t*20)),this.vel.addScaledVector(n,-this.vel.dot(n)),e.sphereContacts(this.pos,rn,(d,f)=>{if(d.dot(n)>.7)return;this.pos.addScaledVector(d,f);let m=this.vel.dot(d);m<0&&this.vel.addScaledVector(d,-m)})}crawl(t){let e=this.grab,n=this.game.world;this.vel.set(0,0,0);let i=Ve.copy(this.ctrl.move);if(i.lengthSq()===0||!e.normal)return!0;i.applyQuaternion(this.quat).normalize();let s=i.dot(e.normal);i.addScaledVector(e.normal,-s);let r=i.length();if(r<.3&&s>0&&e.prevNormal&&(i.copy(e.prevNormal).negate().addScaledVector(e.normal,e.prevNormal.dot(e.normal)),r=i.length()),r<.001)return!0;i.multiplyScalar(Lx/r),this.vel.copy(i),this.pos.addScaledVector(i,t);let a=e.dist||rn+.2,l=n.nearestSurface(this.pos,a+.7);return!l||l.kind==="pod"?(this.grab=null,this.holdQ=null,!1):(l.normal.dot(e.normal)<.97&&(e.prevNormal=e.normal.clone()),e.normal=l.normal,e.point=l.point,e.kind=l.kind,e.obj=l.obj,this.pos.copy(l.point).addScaledVector(l.normal,a),n.sphereContacts(this.pos,rn,(c,h)=>this.pos.addScaledVector(c,h)),!0)}collide(t,e){let n=this;this.impactCool-=t,e.sphereContacts(this.pos,rn,(i,s,r)=>{n.pos.addScaledVector(i,s);let a=n.vel.dot(i);if(a<0){let l=-a;n.vel.addScaledVector(i,-1.3*a);let c=Ve.copy(n.vel).addScaledVector(i,-n.vel.dot(i));n.vel.addScaledVector(c,-.18);let h=n.inertia(ed);n.game.rules.knockback||c.set(0,0,0);let u=Gn.crossVectors(i,c).multiplyScalar(-n.mass*.18*rn).applyQuaternion(Bt.copy(n.quat).invert());if(n.angVel.x+=u.x/h.x,n.angVel.y+=u.y/h.y,n.angVel.z+=u.z/h.z,l>1.2&&n.impactCool<=0){n.impactCool=.25;let d=n.pos.clone().addScaledVector(i,-rn);n.game.onImpact(n,l,d,i.clone()),l>Li&&n.alive&&(n.game.damage(n,(l-Li)*16,null,"impact",d),n.game.rules.breaches&&l>Li+2&&n.leaks.length<3&&n.leaks.push({p:Ve.copy(i).negate().multiplyScalar(.3).applyQuaternion(Bt.copy(n.quat).invert()).clone(),n:i.clone().negate().applyQuaternion(Bt.copy(n.quat).invert()),t:4}))}}})}update(t){let e=this.game.time;if(!this.alive)return;if(this.spawnProtect-=t,this.grenadeCool-=t,this.meleeCool-=t,this.meleeT=Math.max(0,this.meleeT-t),this.jumpGrace=Math.max(0,this.jumpGrace-t),this.adsAmt+=((this.ads&&!this.grab?1:0)-this.adsAmt)*Math.min(1,t*9),this.throwT>0){let i=this.throwT;this.throwT-=t,i>ai*.6&&this.throwT<=ai*.6&&this.game.combat.releaseGrenade(this),this.throwT<0&&(this.throwT=0)}for(let i of this.weapons)i.cool-=t,i.def.kind==="beam"&&(i.heat=Math.max(0,i.heat-i.def.coolRate*t),i.overheat&&i.heat<.35&&(i.overheat=!1));let n=this.weapon;if(this.switchT>0&&(this.switchT-=t),n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0))if(n.def.perShell)n.reserve>0&&n.mag<n.def.mag&&(n.mag++,n.reserve--),n.mag<n.def.mag&&n.reserve>0&&!n.cancel?n.reloadT=n.def.reload:(n.reloadT=0,n.emptyReload&&(n.rackT=this.game.time,n.rackSnd=!1));else{let i=Math.min(n.def.mag-n.mag,n.reserve);n.mag+=i,n.reserve-=i,n.reloadT=0}this.game.rules.infiniteGas?this.gas=Ii:e-this.lastThrustT>.6&&(this.gas=Math.min(Ii,this.gas+t*(this.grab?2.2:1.1))),this.game.rules.breaches||(this.leaks.length=0);for(let i of this.leaks)i.t-=t;this.leaks=this.leaks.filter(i=>i.t>0),this.leaks.length?this.o2=Math.max(0,this.o2-this.leaks.length*3*t):this.o2=Math.min(100,this.o2+4*t),this.o2<=0&&this.game.damage(this,12*t,null,"hypoxia"),e-this.lastDamageT>5&&this.health<100&&(this.health=Math.min(100,this.health+14*t)),this.kick.multiplyScalar(Math.exp(-t*10))}startReload(){let t=this.weapon;return t.def.kind==="beam"||t.reloadT>0||t.mag>=t.def.mag||t.reserve<=0?!1:(t.reloadT=t.def.reload,t.cancel=!1,t.emptyReload=t.mag===0,!this.isPlayer&&!t.def.perShell&&this.game.dropMag(this,t),!0)}switchTo(t){t===this.cur||t<0||t>=this.weapons.length||(this.weapon.reloadT=0,this.lastCur=this.cur,this.cur=t,this.switchT=.45)}animate3P(t){let e=this.weapon,n=this.game.time,i=l=>Math.sin(Math.max(0,Math.min(1,l))*Math.PI),s=t.gunMount,r=t.leftArm;if(s.position.set(.13,-.1,-.4),s.rotation.set(0,0,0),r.rotation.set(0,0,0),t.nade.visible=!1,!this.alive)return;let a=Math.max(0,1-(n-this.lastFireT)/.12);if(s.position.z+=a*.05,s.rotation.x+=a*.12,e.reloadT>0&&e.def.reload>0){let l=1-e.reloadT/e.def.reload,c=i(l);s.rotation.z=.55*c,s.rotation.x+=.35*c,s.position.y-=.05*c,r.rotation.x=.9*i(l*1.3),r.rotation.z=-.3*c}if(this.throwT>0){let l=1-this.throwT/ai;s.position.y-=.12*i(l),s.rotation.x-=.7*i(l),r.rotation.x=l<.55?1.9*(l/.55):1.9-3.6*Math.min(1,(l-.55)/.2),t.nade.visible=l>.1&&l<.65}if(this.meleeT>0){let l=1-this.meleeT/.35;s.position.z-=.25*i(l),s.rotation.y=.5*i(l),s.rotation.x-=.4*i(l)}if(this.switchT>0){let l=this.switchT/.45;s.position.y-=.2*l,s.rotation.x-=.8*l}}syncModel(t){let e=this.model;e.root.position.copy(this.pos),e.root.quaternion.copy(this.quat),this.animate3P(e);for(let s in this.gunMeshes)this.gunMeshes[s].visible=this.alive&&s===this.weapon.def.id;let n=this.game.player,i=this.alive&&!!n&&n!==this&&n.team!==this.team&&this.game.settings.outlines;if(i!==this._outlined){this._outlined=i;for(let s of e.outlines)s.visible=i}for(let s=0;s<24;s++){let r=this.throttle[s],a=e.flames[s];if(r>.03&&this.alive){a.visible=!0;let l=.4+r*.8+Math.random()*.25;a.scale.set(.7+r*.5,l,.7+r*.5)}else a.visible=!1}}},Ku=new v,Qu=new v,ju=new v,Fx=new v,jo=new v,td=new v,ta=new v,kx=new v,Ox=new v,ed=new v,nd=new he,ea=new v,id=new v,sd=new v,rd=new v,od=new v,na=new v,ad=new v(1,0,0),ld=new v(0,1,0);var Ge=new v,Cn=new v,ra=new v,hd=new he,oa=new v,aa=class{constructor(t){this.game=t,this.projectiles=[],this.grenades=[],this.beams=[],this.gProto=[4164863,16747050].map(e=>Sr(e)),this.rGeo=new ke(.03,.03,.22,6).rotateX(Math.PI/2),this.rMat=new Nt({color:10066329,emissive:16733472,emissiveIntensity:.4}),this.colors={}}color(t){return this.colors[t]||(this.colors[t]=new et(t))}spreadOf(t,e){let n=e.hipSpread!=null?e.hipSpread:e.spread*2.5,i=e.adsSpread!=null?e.adsSpread:e.spread*.4;return(n+(i-n)*(t.adsAmt||0))*(t.grab?.7:1)}muzzlePoint(t,e){let n=this.game;if(t.isPlayer&&n.vmMuzzleCam&&n.vm&&n.vm.visible)return n.camera.localToWorld(e.copy(n.vmMuzzleCam));let i=t.gunMeshes&&t.gunMeshes[t.weapon.def.id],s=i&&i.userData.muzzle;return e.set(.13+(s?s.x:0),.35+(s?s.y:0),-.4+(s?s.z:-.75)),e.applyQuaternion(t.quat).add(t.pos)}aimPoint(t,e,n,i){let s=this.game.world.raycast(e,n,400),r=s?s.t:400,a=this.raySoldier(e,n,r,t);return a&&(r=a.t),i.copy(e).addScaledVector(n,Math.max(2,r))}fire(t){let e=t.weapon,n=e.def,i=this.game;if(!t.alive||t.switchT>0||e.cool>0||t.throwT>0)return!1;if(n.kind==="beam")return this.fireBeam(t,e,n);if(e.reloadT>0)if(n.perShell&&e.mag>0)e.reloadT=0;else return!1;if(e.mag<=0)return!t.startReload()&&t.isPlayer&&i.audio.play("empty"),e.cool=.25,!1;e.mag--,e.cool=60/n.rpm,t.spawnProtect=0,t.lastFireT=i.time;let s=t.eye(new v),r=t.aimDir(new v),a=this.muzzlePoint(t,new v),l=Cn.subVectors(a,s),c=l.length(),u=c>.001&&this.game.world.raycast(s,l.divideScalar(c),c+.05)?s.clone().addScaledVector(r,.3):a.clone(),f=this.aimPoint(t,s,r,new v).sub(u).normalize(),m=n.kind==="pellets"?n.pellets:1,x=n.homing?this.homingTarget(t,s,r,n.homing.cone):null;for(let p=0;p<m;p++){let y=f.clone(),M=this.spreadOf(t,n)*Math.sqrt(Math.random());M>0&&y.addScaledVector(Ki(f,Ge),Math.tan(M)).normalize();let _={pos:u.clone(),vel:t.vel.clone().addScaledVector(y,n.speed),start:u.clone(),dir:y,owner:t,def:n,age:0,kind:n.kind,color:this.color(n.tracer),tail:n.kind==="rocket"?.02:(n.tracerLen||4)/n.speed};x&&(_.homing=x),n.kind==="rocket"&&(_.mesh=new ut(this.rGeo,this.rMat),_.mesh.position.copy(_.pos),_.mesh.lookAt(Ge.copy(_.pos).add(y)),i.scene.add(_.mesh)),this.projectiles.push(_)}let g=n.ejecta!=null?n.ejecta:n.projMass*n.speed;return t.applyImpulse(Ge.copy(r).multiplyScalar(-g),a,"recoil"),t.kick.x+=n.kick*(.7+Math.random()*.6),t.kick.y+=n.kick*(Math.random()-.5)*.8,t.addAim(n.kick*(Math.random()-.5)*.5,n.kick*(.6+Math.random()*.5)),i.fx.muzzle(a,r,t.vel,n.kind==="pellets"),n.backblast&&this.backblast(t,r,a,n.backblast),i.onShot(t,n),e.mag===0&&e.reserve>0&&setTimeout(()=>{t.alive&&t.weapon===e&&t.startReload()},250),!0}homingTarget(t,e,n,i){let s=null,r=i;for(let a of this.game.soldiers){if(!a.alive||a.team===t.team)continue;let l=Ge.subVectors(a.pos,e),c=l.length(),h=Math.acos(Math.max(-1,Math.min(1,l.dot(n)/c)));h<r&&c<250&&this.game.world.los(e,a.pos)&&(r=h,s=a)}return s}guide(t,e){let n=t.homing;if(!n.alive||t.age>2.5){t.homing=null;return}let i=t.vel.length(),s=Ge.copy(t.vel).divideScalar(i),r=Cn.subVectors(n.pos,t.pos),a=Qi(r,n.vel,i);a>0&&r.addScaledVector(n.vel,a);let l=r.normalize();if(l.dot(s)<.85){t.homing=null;return}let c=l.addScaledVector(s,-l.dot(s)),h=c.length();if(h<1e-6)return;let u=Math.min(t.def.homing.accel,h*i*25);t.vel.addScaledVector(c,u*e/h).setLength(i)}raySoldier(t,e,n,i){let s=n,r=null,a=null;for(let l of this.game.soldiers){if(!l.alive||l===i)continue;let c=Cn.subVectors(l.pos,t),h=Math.max(0,Math.min(n,c.dot(e)));if(!(c.addScaledVector(e,-h).lengthSq()>1.8))for(let u of Xc){oa.copy(u.p).applyQuaternion(l.quat).add(l.pos);let d=zn(t,e,oa,u.r,s);d>=0&&d<s&&(s=d,r=l,a=u)}}return r?{t:s,s:r,part:a}:null}fireBeam(t,e,n){let i=this.game;if(e.overheat)return t.isPlayer&&e.cool<=0&&(i.audio.play("empty"),e.cool=.3),!1;let s=Math.min(.05,i.frameDt||1/60);e.heat+=n.heatRate*s,e.heat>=1&&(e.heat=1,e.overheat=!0,t.isPlayer&&i.hud.message("MASER OVERHEATED \u2013 VENTING","#ffcc4d",1.2)),t.spawnProtect=0,t.lastFireT=i.time;let r=t.eye(new v),a=t.aimDir(new v),l=i.world.raycast(r,a,n.range),c=l?l.t:n.range,h=i.world.barrierCross(r,ra.copy(r).addScaledVector(a,c),1-t.team);h>=0&&(c*=h,i.world.barriers[1-t.team].mat.uniforms.flash.value=1);let u=this.raySoldier(r,a,c,t);u&&(c=u.t);let d=r.clone().addScaledVector(a,c),f=this.muzzlePoint(t,new v);if((!t.beam||t.beam.life<=0)&&(t.beam={a:new v,b:new v,life:0},this.beams.push(t.beam)),t.beam.life>0?t.beam.b.lerp(d,Math.min(1,s*30)):t.beam.b.copy(d),t.beam.a.copy(f),t.beam.life=.14,u){let m=u.s;if(m.team!==t.team&&m.spawnProtect<=0){let x=n.dps*s*(u.part.part==="head"?n.headMul:u.part.part==="leg"?.75:1);if(i.rules.breaches&&u.part.part!=="leg"&&Math.random()<.2*s&&m.leaks.length<3){let g=d.clone().sub(m.pos).applyQuaternion(hd.copy(m.quat).invert());m.leaks.push({p:g,n:g.clone().sub(u.part.p).normalize(),t:4})}i.damage(m,x,t,n.id,d,u.part.part)}}for(e.sparkAcc=(e.sparkAcc||0)+s*40;e.sparkAcc>=1;)e.sparkAcc-=1,i.fx.sparks(d,1,u?a.clone().negate():l?l.n:a.clone().negate(),2.5,Pe.beam);return i.fx.add.spawn(d,null,Pe.beam,.32,.05,{alpha:.8}),e.sndT=(e.sndT||0)-s,e.sndT<=0&&(e.sndT=.12,i.onShot(t,n)),!0}backblast(t,e,n,i){let s=this.game,r=n.clone().addScaledVector(e,-1.4);s.fx.muzzle(r,e.clone().negate(),t.vel,!0);for(let a=0;a<14;a++){let l=e.clone().multiplyScalar(-(4+Math.random()*8)).add(Ge.randomDirection().multiplyScalar(2)).add(t.vel);s.fx.alpha.spawn(r,l,Pe.smoke,.4,1.2,{grow:3,alpha:.4})}for(let a of s.soldiers){if(a===t||!a.alive)continue;let l=Ge.subVectors(a.pos,r),c=l.length();if(c>i.range||c<.001||-l.dot(e)/c<.6||!s.world.los(r,a.pos,!0))continue;let h=1-c/i.range;a.applyImpulse(e.clone().multiplyScalar(-i.impulse*h),a.pos),a.team!==t.team&&s.damage(a,i.dmg*h,t,"backblast",a.pos,"body")}}throwGrenade(t,e=null){return!t.alive||t.grenades<=0||t.grenadeCool>0||t.throwT>0?!1:(t.grenadeCool=t.isBot?6:1,t.throwT=ai,t.throwDir=e?e.clone().normalize():null,t.weapon.reloadT>0&&(t.weapon.reloadT=0),t.spawnProtect=0,!0)}releaseGrenade(t){if(!t.alive||t.grenades<=0)return!1;t.grenades--;let e=t.throwDir||t.aimDir(new v),n=t.eye(new v).addScaledVector(e,.6),i=t.vel.clone().addScaledVector(e,Je.speed);t.applyImpulse(Ge.copy(e).multiplyScalar(-Je.mass*Je.speed),n,"recoil");let s=this.gProto[t.team].clone(!0);s.scale.setScalar(1.4);let r=s.children.find(a=>a.geometry&&a.geometry.type==="SphereGeometry");return r&&(r.material=r.material.clone(),s.userData.lamp=r,s.userData.lampColor=r.material.color.clone()),s.position.copy(n),this.game.scene.add(s),this.grenades.push({pos:n,vel:i,owner:t,fuse:Je.fuse,mesh:s,spin:new v(Et(-8,8),Et(-8,8),Et(-8,8))}),this.game.audio.play("throw",t.isPlayer?0:this.game.distToListener(n)),this.game.onThrow(t,n),!0}melee(t){if(!t.alive||t.meleeCool>0||t.throwT>0)return!1;t.meleeCool=Vn.cooldown,t.meleeT=.35,t.spawnProtect=0;let e=this.game,n=t.eye(new v),i=t.aimDir(new v),s=null,r=Vn.range+.7;for(let l of e.soldiers){if(l===t||!l.alive)continue;let c=Ge.subVectors(l.pos,n),h=c.length();h<r&&c.dot(i)/h>.55&&(s=l,r=h)}if(e.audio.play("melee",t.isPlayer?0:e.distToListener(t.pos)),s){let l=i.clone().multiplyScalar(Vn.impulse),c=s.pos.clone().add(Ki(i,Ge).multiplyScalar(.4));return s.applyImpulse(l,c),e.rules.knockback&&s.angVel.add(Cn.set(Et(-1,1),Et(-1,1),Et(-1,1)).normalize().multiplyScalar(Vn.spin)),t.applyImpulse(l.clone().multiplyScalar(-.5),n,"recoil"),s.team!==t.team&&e.damage(s,Vn.dmg,t,"hammer",c,"body"),e.fx.sparks(c,14,i.clone().negate(),5),!0}let a=e.world.raycast(n,i,Vn.range);if(a){let l=i.clone().multiplyScalar(Vn.impulse*.6);a.kind==="pod"?(a.obj.vel.addScaledVector(l,1/a.obj.mass),t.applyImpulse(l.negate().multiplyScalar(.5),n,"recoil")):t.applyImpulse(l.negate(),n,"recoil"),e.fx.sparks(n.clone().addScaledVector(i,a.t),10,a.n,4),e.audio.play("clank")}return!1}step(t){let e=this.game,n=e.world,i=this.projectiles;for(let s=i.length-1;s>=0;s--){let r=i[s];r.age+=t,r.kind==="rocket"&&r.age<r.def.burn&&r.vel.addScaledVector(r.dir,r.def.accel*t),r.homing&&this.guide(r,t);let a=r.vel.length(),l=Ge.copy(r.vel).divideScalar(a),c=a*t,h=c,u=null,d=null,f=null,m=null,x=n.raycast(r.pos,l,c);x&&(h=x.t,u=x.kind,d=x.obj,m=x.n.clone());let g=n.barrierCross(r.pos,ra.copy(r.pos).addScaledVector(l,c),1-r.owner.team);g>=0&&g*c<h&&(h=g*c,u="barrier",d=n.barriers[1-r.owner.team],m=new v(r.owner.team===0?-1:1,0,0));for(let p of e.soldiers){if(!p.alive||p===r.owner&&(r.kind!=="rocket"||r.age<.4))continue;let y=Cn.subVectors(p.pos,r.pos),M=Math.max(0,Math.min(c,y.dot(l)));if(!(y.addScaledVector(l,-M).lengthSq()>1.8+(r.def.projRadius||0)*3))for(let _ of Xc){oa.copy(_.p).applyQuaternion(p.quat).add(p.pos);let A=zn(r.pos,l,oa,_.r+(r.def.projRadius||0),h);A>=0&&A<h&&(h=A,u="soldier",d=p,f=_)}}if(u){let p=r.pos.clone().addScaledVector(l,h);this.onHit(r,p,l.clone(),u,d,f,m),this.removeProj(s);continue}r.pos.addScaledVector(r.vel,t),r.age>3.5&&this.removeProj(s)}for(let s of this.beams)s.life-=t;this.beams.length&&(this.beams=this.beams.filter(s=>s.life>0));for(let s=this.grenades.length-1;s>=0;s--){let r=this.grenades[s];r.fuse-=t,n.omega&&(r.vel.addScaledVector(n.gravityAt(r.pos,Ge),t),r.vel.addScaledVector(n.coriolis(r.vel,Cn),t));let a=ra.copy(r.pos);r.pos.addScaledVector(r.vel,t),n.barrierCross(a,r.pos,1-r.owner.team)>=0&&(r.pos.copy(a),r.vel.x*=-Je.restitution,n.barriers[1-r.owner.team].mat.uniforms.flash.value=1),n.sphereContacts(r.pos,.12,(l,c)=>{r.pos.addScaledVector(l,c);let h=r.vel.dot(l);h<0&&(r.vel.addScaledVector(l,-(1+Je.restitution)*h),-h>2&&e.audio.play("bounce",e.distToListener(r.pos)))});for(let l of e.soldiers){if(!l.alive||l===r.owner&&r.fuse>Je.fuse-.3)continue;let c=Ge.subVectors(r.pos,l.pos),h=c.length();if(h<.8&&h>1e-4){c.divideScalar(h);let u=Cn.subVectors(r.vel,l.vel).dot(c);u<0&&r.vel.addScaledVector(c,-1.6*u),r.pos.copy(l.pos).addScaledVector(c,.8)}}r.fuse<=0&&(this.explode(r.pos,r.owner,Je.radius,Je.dmg,Je.impulse,"grenade"),e.scene.remove(r.mesh),this.grenades.splice(s,1))}}removeProj(t){let e=this.projectiles[t];e.mesh&&this.game.scene.remove(e.mesh),this.projectiles.splice(t,1)}onHit(t,e,n,i,s,r,a){let l=this.game,c=t.def;if(i==="barrier"){s.mat.uniforms.flash.value=1,l.fx.sparks(e,10,a,4,s.mat.uniforms.color.value);return}let h=c.projMass?c.projMass*c.speed:2;if(i==="soldier"){let u=s,f=Ge.subVectors(t.vel,u.vel).clone().normalize().multiplyScalar(c.kind==="rocket"?60:h);if(u.applyImpulse(f,e),(u.team!==t.owner.team||u===t.owner)&&u.spawnProtect<=0){let m=c.dmg;r.part==="head"?m*=c.headMul:r.part==="leg"&&(m*=.75);let x=Cn.subVectors(e,u.pos).applyQuaternion(hd.copy(u.quat).invert()),g=ra.subVectors(x,r.p).normalize(),p=-1,y=.42;for(let M=0;M<4;M++){let _=x.distanceTo(dn[M].pos);_<y&&(y=_,p=M)}r.part==="pack"&&p<0&&(p=Math.floor(Math.random()*4)),p>=0&&l.damageTower(u,p,m*(r.part==="pack"?.6:.9)),l.rules.breaches&&r.part!=="leg"&&Math.random()<.35&&u.leaks.length<3&&u.leaks.push({p:x.clone(),n:g.clone(),t:4+Math.random()*3}),l.damage(u,m,t.owner,c.id,e,r.part)}l.fx.suitHit(e,n.clone().negate(),u.vel),c.splash&&this.explode(e,t.owner,c.splash,c.splashDmg,c.splashImpulse||140,c.id,u)}else if(i==="pod"&&s.vel.addScaledVector(n,(c.kind==="rocket"?60:h)/s.mass),c.splash)this.explode(e,t.owner,c.splash,c.splashDmg,c.splashImpulse||140,c.id);else{l.fx.impact(e,a||n.clone().negate());let u=l.distToListener(e);u<25&&l.audio.play("clank",u)}}explode(t,e,n,i,s,r,a=null){let l=this.game;l.fx.explosion(t,n*.35),l.audio.play("explosion",l.distToListener(t)),l.onExplosion(t,e);for(let c of l.soldiers){let h=c.pos.distanceTo(t);if(h>n||c.team!==e.team&&l.world.inSpawn(c.pos,c.team)||!l.world.los(t,c.pos,!0))continue;let u=1-h/n,d=Ge.subVectors(c.pos,t);d.lengthSq()<1e-6&&d.set(0,1,0),d.normalize();let f=c.pos.clone().addScaledVector(d,-.4).add(Ki(d,Cn).multiplyScalar(.35));c.applyImpulse(d.clone().multiplyScalar(s*u),f),!(!c.alive||c===a||c.spawnProtect>0)&&(c.team===e.team&&c!==e||(l.damage(c,i*u*(c===e?.6:1),e,r,f,"body"),Math.random()<u&&l.damageTower(c,Math.floor(Math.random()*4),25*u),l.rules.breaches&&Math.random()<.5*u&&c.leaks.length<3&&c.leaks.push({p:new v(Et(-.2,.2),Et(-.1,.4),Et(-.15,.3)),n:new v().randomDirection(),t:5})))}for(let c of l.world.pods){let h=c.pos.distanceTo(t);h<n&&h>.001&&(c.vel.addScaledVector(Ge.subVectors(c.pos,t).normalize(),s*(1-h/n)/c.mass),c.angVel.add(Cn.randomDirection().multiplyScalar(.8)))}}syncMeshes(t){for(let e of this.projectiles)if(e.mesh&&(e.mesh.position.copy(e.pos),e.mesh.lookAt(Ge.copy(e.pos).add(e.vel)),e.age<e.def.burn)){let n=Cn.copy(e.vel).normalize().multiplyScalar(-.15).add(e.pos);this.game.fx.add.spawn(n,e.vel.clone().multiplyScalar(.6),Pe.fire,.25,.06),this.game.fx.alpha.spawn(n,e.vel.clone().multiplyScalar(.2),Pe.smoke,.2,.7,{grow:3,alpha:.3})}for(let e of this.grenades){e.mesh.position.copy(e.pos),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t;let n=e.fuse<1?.15:.5,i=e.fuse%n<n*.35,s=e.mesh.userData.lamp;s&&s.material.color.copy(e.mesh.userData.lampColor).multiplyScalar(i?1.6:.15)}}tracerList(){let t=this._tl||(this._tl=[]);t.length=0;for(let n of this.projectiles){if(n.kind==="rocket")continue;let i=n.pos.distanceTo(n.start),s=n.vel.length();t.push({pos:n.pos,vel:n.vel,color:n.color,tail:Math.min(n.tail,i/Math.max(1,s)),width:n.def.tracerW||.03})}let e=this.color(16765498);for(let n of this.beams)n._v=n._v||new v,n._v.subVectors(n.b,n.a),t.push({pos:n.b,vel:n._v,color:e,tail:1,width:.035,beam:!0});return t}};var li=new v,la=new v,ji=new v,Bx=new he,ca=o=>"#"+o.toString(16).padStart(6,"0"),Rr=ca(fn[0]),ud=ca(fn[1]),Di="#9fe8ff",le="#ffcc4d",we="#ff4b3a",ci="#7dff9a",ha=class{constructor(t,e){this.game=t,this.cv=e,this.g=e.getContext("2d"),this.msgs=[],this.feed=[],this.hitT=0,this.hitHead=!1,this.hitKill=!1,this.dmgDirs=[],this.collWarnT=0,this.impactT=0,this.impactSev=0,this.cracks=[],this.font="'Rajdhani','Bahnschrift','Segoe UI',Arial,sans-serif",this.disp="'Orbitron','Rajdhani','Bahnschrift',sans-serif",this.resize()}setQuality(t){this.glow=(t.bloom||0)>0}plate(t,e,n,i,s=8,r="rgba(6,10,16,0.62)",a="rgba(159,232,255,0.18)"){let l=this.g;l.beginPath(),l.moveTo(t+s,e),l.lineTo(t+n,e),l.lineTo(t+n,e+i-s),l.lineTo(t+n-s,e+i),l.lineTo(t,e+i),l.lineTo(t,e+s),l.closePath(),r&&(l.fillStyle=r,l.fill()),a&&(l.strokeStyle=a,l.lineWidth=1,l.stroke())}spaced(t,e,n,i,s,r="left",a=700,l=2,c=null){let h=this.g;h.font=`${a} ${i}px ${c||this.font}`,"letterSpacing"in h&&(h.letterSpacing=l+"px"),h.textAlign=r,h.fillStyle=s,h.fillText(t,e,n),"letterSpacing"in h&&(h.letterSpacing="0px")}num(t,e,n,i,s,r="left"){let a=this.g;this.glow&&(a.shadowColor=s,a.shadowBlur=8),this.spaced(t,e,n,i,s,r,800,1,this.disp),a.shadowBlur=0}resize(){let t=Math.min(2,window.devicePixelRatio||1);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=this.W*t,this.cv.height=this.H*t,this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}message(t,e=le,n=2.2,i=!1){this.msgs=this.msgs.filter(s=>s.text!==t),this.msgs.push({text:t,color:e,t:n,dur:n,big:i}),this.msgs.length>4&&this.msgs.shift()}kill(t,e,n,i){this.feed.unshift({killer:t,victim:e,cause:n,head:i,t:6}),this.feed.length>6&&this.feed.pop()}hit(t,e){this.hitT=e?.5:.28,this.hitDur=this.hitT,this.hitHead=t,this.hitKill=e}damageNumber(t,e,n,i,s){this.nums=this.nums||[];let r=this.game.time,a=this.nums.find(l=>l.target===t&&r-l.born<.5&&!l.kill);a||(a={target:t,pos:e.clone(),amount:0,born:r,life:1.1,jitter:(Math.random()-.5)*30},this.nums.push(a)),a.amount+=n,a.head=a.head||i,a.kill=s,a.life=1.1,a.pos.copy(e),a.pop=1,this.nums.length>12&&this.nums.shift()}drawNumbers(t){if(!this.nums||!this.nums.length)return;let e=this.g;for(let n of this.nums){n.life-=t,n.pop=Math.max(0,(n.pop||0)-t*5);let i=this.project(n.pos,{});if(!i.on)continue;let s=1.1-n.life,r=zt(n.life/.4,0,1);e.globalAlpha=r;let a=(n.kill?22:n.head?19:15)*(1+n.pop*.35),l=n.kill?we:n.head?le:"#ffffff";e.font=`700 ${a}px ${this.font}`,e.textAlign="center",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.6)";let c=i.x+n.jitter,h=i.y-26-s*34,u=Math.round(n.amount)+(n.kill?" \u2715":"");e.strokeText(u,c,h),e.fillStyle=l,e.fillText(u,c,h)}e.globalAlpha=1,e.lineWidth=1.5,this.nums=this.nums.filter(n=>n.life>0)}impact(t){if(this.impactT=1,this.impactSev=Math.min(1,t),t>.25){let e=this.W*(.25+Math.random()*.5),n=this.H*(.25+Math.random()*.5),i=[],s=5+Math.floor(t*6);for(let r=0;r<s;r++){let a=Math.random()*Math.PI*2,l=e,c=n,h=[[l,c]],u=40+Math.random()*160*t;for(let d=0;d<5;d++)a+=(Math.random()-.5)*.9,l+=Math.cos(a)*u/5,c+=Math.sin(a)*u/5,h.push([l,c]);i.push(h)}this.cracks.push({lines:i,t:2.5}),this.cracks.length>3&&this.cracks.shift()}}drawImpact(t){let e=this.g;this.impactT>0&&(this.impactT-=t*2.5,e.fillStyle=`rgba(255,${Math.round(90-60*this.impactSev)},40,${Math.max(0,this.impactT)*(.15+.35*this.impactSev)})`,e.fillRect(0,0,this.W,this.H));for(let n of this.cracks){n.t-=t,e.strokeStyle=`rgba(230,245,255,${Math.min(1,n.t/1.2)*.75})`,e.lineWidth=1.2;for(let i of n.lines){e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let[s,r]of i.slice(1))e.lineTo(s,r);e.stroke()}}this.cracks=this.cracks.filter(n=>n.t>0),e.lineWidth=1.5}damageFrom(t){t&&this.dmgDirs.push({pos:t.clone(),t:1.2})}project(t,e){let n=this.game.camera;ji.copy(t).applyMatrix4(n.matrixWorldInverse);let i=ji.z>0;return ji.applyMatrix4(n.projectionMatrix),e.x=(ji.x*.5+.5)*this.W,e.y=(-ji.y*.5+.5)*this.H,e.behind=i,e.on=!i&&e.x>-20&&e.x<this.W+20&&e.y>-20&&e.y<this.H+20,e}text(t,e,n,i=14,s=Di,r="left",a=600){let l=this.g;l.font=`${a} ${i}px ${this.font}`,l.textAlign=r,l.fillStyle=s,l.fillText(t,e,n)}draw(t){let e=this.g,n=this.game,i=n.player;if(e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.W,this.H),n.state==="menu")return;let s=this.W,r=this.H,a=s/2,l=r/2;e.lineWidth=1.5,e.textBaseline="middle",this.drawScore(),this.drawFeed(t),i&&(i.alive?(n.showGrid||i.angVel.length()>1.4,n.scoped&&this.drawScope(a,l),this.drawMarkers(),this.drawVelocityMarkers(),this.drawCrosshair(a,l,t),this.drawNumbers(t),this.drawRates(a,l),this.drawTargetInfo(a,l),this.drawCollision(a,l,t),this.drawStatus(),this.drawSuit(),this.drawWeapon(),this.drawDamage(a,l,t),this.drawHints(a,l),this.drawBounds(a,l),this.drawImpact(t)):this.drawDeath(a,l),this.drawMessages(a,t),n.state==="ending"&&this.drawEnding(a,l))}drawScore(){let t=this.g,e=this.game,n=this.W/2,i=e.teamScore,s=e.scoreLimit,r=14,a=40;for(let[u,d]of[[0,-1],[1,1]]){let f=u===0?Rr:ud,m=d<0?n-70-120:n+70;this.plate(m,r,120,a,8,"rgba(6,10,16,0.6)",null),t.fillStyle=f,t.globalAlpha=.85,t.fillRect(d<0?m:m+116,r,4,a),t.globalAlpha=1,this.spaced(sa[u],d<0?m+12:m+108,r+12,8,"rgba(233,238,242,0.65)",d<0?"left":"right",700,3),this.num(String(i[u]),d<0?m+106:m+14,r+25,22,f,d<0?"right":"left");let x=zt(i[u]/s,0,1);t.fillStyle="rgba(255,255,255,0.08)",t.fillRect(m,r+a+4,120,3),t.fillStyle=f,t.fillRect(d<0?m+120*(1-x):m,r+a+4,120*x,3)}this.plate(n-64,r-2,128,a+4,10,"rgba(10,16,24,0.78)","rgba(159,232,255,0.28)");let l=Math.max(0,e.timeLimit-e.matchTime),c=Math.floor(l/60),h=Math.floor(l%60);this.num(`${c}:${h.toString().padStart(2,"0")}`,n,r+16,18,l<60?le:"#e9eef2","center"),this.spaced(`FIRST TO ${s}`,n,r+33,9,"#8996a1","center",700,3)}drawFeed(t){let e=this.g,n=74;for(let i of this.feed){i.t-=t,e.globalAlpha=zt(i.t,0,1);let s=i.killer?ca(fn[i.killer.team]):"#c9d3dc",r=ca(fn[i.victim.team]),a=i.cause.toUpperCase();e.font=`700 14px ${this.font}`;let l=e.measureText(i.victim.name).width,c=i.killer?e.measureText(i.killer.name).width:0;e.font=`700 10px ${this.font}`;let h=e.measureText(a).width+14+(i.head?14:0),u=l+c+h+34,d=this.W-18-u,f=i.killer&&i.killer.isPlayer||i.victim.isPlayer;this.plate(d,n-11,u,22,6,f?"rgba(255,204,77,0.14)":"rgba(6,10,16,0.6)",f?"rgba(255,204,77,0.45)":null);let m=d+10;i.killer&&(this.spaced(i.killer.name,m,n+1,14,s,"left",700,.5),m+=c+8),e.fillStyle="rgba(233,238,242,0.12)",e.fillRect(m,n-7,h,14),this.spaced(a,m+7,n+1,10,"#dfe6ec","left",700,1.5),i.head&&(e.strokeStyle=le,e.lineWidth=1.5,e.beginPath(),e.arc(m+h-9,n,4,0,Math.PI*2),e.stroke(),e.fillStyle=le,e.fillRect(m+h-10,n-1,2,2)),m+=h+8,this.spaced(i.victim.name,m,n+1,14,r,"left",700,.5),n+=26}this.feed=this.feed.filter(i=>i.t>0),e.globalAlpha=1}drawMarkers(){let t=this.game,e=t.player,n=this.g,i=e.eye(new v),s=e.weapon.def,r={};for(let a of t.soldiers){if(a===e||!a.alive)continue;let l=li.set(0,1,0).applyQuaternion(a.quat).add(a.pos);if(this.project(l,r),!r.on)continue;let c=a.pos.distanceTo(i);if(a.team===e.team){n.fillStyle=Rr,n.beginPath(),n.moveTo(r.x-6,r.y-10),n.lineTo(r.x+6,r.y-10),n.lineTo(r.x,r.y-2),n.fill(),c<40&&this.text(a.name,r.x,r.y-18,11,Rr,"center");continue}if(!t.world.los(i,a.pos))continue;let h=this.project(a.pos,{}),u=li.subVectors(a.pos,i),d=la.subVectors(a.vel,e.vel),f=s.kind==="rocket"?qo(u,d,s.speed,s.accel,s.burn):Qi(u,d,s.speed);if(f>0&&d.length()>.15){let x=this.project(ji.copy(a.pos).addScaledVector(d,f),{}),g=.75;if(x.on){n.strokeStyle=`rgba(255,110,90,${g})`,n.lineWidth=1.2;let p=4;n.beginPath(),n.moveTo(x.x,x.y-p),n.lineTo(x.x+p,x.y),n.lineTo(x.x,x.y+p),n.lineTo(x.x-p,x.y),n.closePath(),n.stroke(),n.lineWidth=1.5}}let m=zt(500/c,8,60);if(s.homing){let x=e.aimDir(la),g=ji.subVectors(a.pos,i).normalize();if(Math.acos(zt(x.dot(g),-1,1))<s.homing.cone){let p=m*.9+6;n.strokeStyle=le,n.lineWidth=1.5;for(let[y,M]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.beginPath(),n.moveTo(h.x+y*p,h.y+M*(p-6)),n.lineTo(h.x+y*p,h.y+M*p),n.lineTo(h.x+y*(p-6),h.y+M*p),n.stroke();this.spaced("TRACK",h.x,h.y+p+12,9,le,"center",700,2)}}c<120&&this.text(`${c.toFixed(0)}m`,h.x+m*.6+4,h.y-m*.6,10,"rgba(255,120,100,0.75)")}}drawVelocityMarkers(){let t=this.game.player,e=this.g,n=t.refTarget&&t.refTarget.alive!==!1?t.refTarget.vel:null,i=la.copy(t.vel);n&&i.sub(n);let s=i.length();if(s<.05)return;let r=t.eye(new v),a=this.project(li.copy(i).divideScalar(s).multiplyScalar(200).add(r),{}),l=this.project(li.copy(i).divideScalar(-s).multiplyScalar(200).add(r),{}),c=ci;a.on&&(e.strokeStyle=c,e.lineWidth=2,e.beginPath(),e.arc(a.x,a.y,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(a.x,a.y-8),e.lineTo(a.x,a.y-15),e.moveTo(a.x-8,a.y),e.lineTo(a.x-15,a.y),e.moveTo(a.x+8,a.y),e.lineTo(a.x+15,a.y),e.stroke(),e.fillStyle=c,e.beginPath(),e.arc(a.x,a.y,2,0,Math.PI*2),e.fill(),this.text(`${s.toFixed(1)} m/s`,a.x+18,a.y+12,12,c)),l.on&&(e.strokeStyle="#d8b84a",e.lineWidth=2,e.beginPath(),e.arc(l.x,l.y,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(l.x-5,l.y-5),e.lineTo(l.x+5,l.y+5),e.moveTo(l.x+5,l.y-5),e.lineTo(l.x-5,l.y+5),e.stroke(),e.beginPath(),e.moveTo(l.x,l.y-8),e.lineTo(l.x,l.y-15),e.stroke()),e.lineWidth=1.5}drawScope(t,e){let n=this.g,i=this.game.player,s=this.W,r=this.H,a=Math.min(s,r)*.86,l=a*.12,c=t-a/2,h=e-a/2,u=(y,M,_,A,T)=>{n.moveTo(y+T,M),n.arcTo(y+_,M,y+_,M+A,T),n.arcTo(y+_,M+A,y,M+A,T),n.arcTo(y,M+A,y,M,T),n.arcTo(y,M,y+_,M,T),n.closePath()};n.beginPath(),n.rect(0,0,s,r),u(c,h,a,a,l),n.fillStyle="rgba(2,4,8,0.94)",n.fill("evenodd");let d=n.createRadialGradient(t,e,a*.3,t,e,a*.72);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,10,20,0.55)"),n.save(),n.beginPath(),u(c,h,a,a,l),n.clip(),n.fillStyle=d,n.fillRect(c,h,a,a),n.restore(),n.strokeStyle="rgba(159,232,255,0.55)",n.lineWidth=2,n.beginPath(),u(c,h,a,a,l),n.stroke(),n.strokeStyle="rgba(159,232,255,0.25)",n.lineWidth=1,n.beginPath(),u(c+10,h+10,a-20,a-20,l*.85),n.stroke();let f="rgba(255,70,50,0.95)",m=14,x=a*.42;n.strokeStyle=f,n.lineWidth=1.2,n.beginPath(),n.moveTo(t-x,e),n.lineTo(t-m,e),n.moveTo(t+m,e),n.lineTo(t+x,e),n.moveTo(t,e-x),n.lineTo(t,e-m),n.moveTo(t,e+m),n.lineTo(t,e+x),n.stroke(),n.lineWidth=3,n.beginPath(),n.moveTo(t-x,e),n.lineTo(t-x*.7,e),n.moveTo(t+x*.7,e),n.lineTo(t+x,e),n.moveTo(t,e+x*.7),n.lineTo(t,e+x),n.stroke(),n.fillStyle=f,n.beginPath(),n.arc(t,e,1.8,0,Math.PI*2),n.fill();let g=this.aimInfo,p=this.game.vmGuns[i.weapon.def.id].userData;this.spaced(`${(p.zoom||1).toFixed(1)}\xD7`,c+28,h+a-26,13,"#9fe8ff","left",700,2,this.disp),g&&g.dist<399&&this.spaced(`${g.dist.toFixed(0)} m`,c+a-28,h+a-26,13,"#9fe8ff","right",700,2,this.disp),i.weapon.def.homing&&this.spaced("GUIDED HE",t,h+a-26,11,le,"center",700,3)}drawBounds(t,e){let n=this.game,i=n.player,s=n.world;if(s.enclosed)return;let r=s.outside(i.pos),a=Math.max(...[0,1,2].map(l=>Math.abs(i.pos.getComponent(l))-s.bounds.max[l]+15));if(r>0){let l=Math.max(0,5-i.oobT);this.text("LEAVING COMBAT AREA",t,e-150,24,n.time*3%1<.6?we:le,"center",700),this.text(l>0?`Suit telemetry lost in ${l.toFixed(1)} s \u2013 turn back`:"SUIT FAILING \u2013 RETURN TO THE COMBAT AREA",t,e-126,13,we,"center")}else a>0&&this.text("approaching combat-area edge",t,e-150,12,le,"center")}drawCrosshair(t,e,n){let i=this.g,s=this.game.player,a=this.aimInfo&&this.aimInfo.soldier&&this.aimInfo.soldier.team!==s.team?we:"#e9f6ff",l=this.game.combat.spreadOf(s,s.weapon.def),c=4+Math.tan(l)*this.H/(2*Math.tan(this.game.camera.fov*Math.PI/360))+Math.abs(s.kick.x)*400,h=1-zt((s.adsAmt-.35)/.3,0,1);if(h>.02){i.globalAlpha=h,i.strokeStyle="rgba(0,0,0,0.45)",i.lineWidth=4;let u=()=>{i.beginPath(),i.moveTo(t-c-8,e),i.lineTo(t-c,e),i.moveTo(t+c,e),i.lineTo(t+c+8,e),i.moveTo(t,e+c),i.lineTo(t,e+c+8),i.moveTo(t,e-c),i.lineTo(t,e-c-8),i.stroke()};u(),i.strokeStyle=a,i.lineWidth=2,u(),i.fillStyle=a,i.fillRect(t-1,e-1,2,2),i.globalAlpha=1}if(this.hitT>0){this.hitT-=n;let u=this.hitT/this.hitDur,d=1+(1-u)*.5,f=this.hitKill?we:this.hitHead?le:"#ffffff",m=5*d,x=(this.hitKill?17:12)*d;i.globalAlpha=zt(u*1.6,0,1),i.lineCap="round",i.strokeStyle="rgba(0,0,0,0.55)",i.lineWidth=this.hitKill?6:5;let g=()=>{i.beginPath(),i.moveTo(t-m,e-m),i.lineTo(t-x,e-x),i.moveTo(t+m,e-m),i.lineTo(t+x,e-x),i.moveTo(t-m,e+m),i.lineTo(t-x,e+x),i.moveTo(t+m,e+m),i.lineTo(t+x,e+x),i.stroke()};g(),i.strokeStyle=f,i.lineWidth=this.hitKill?3.5:2.5,g(),this.hitKill&&(i.lineWidth=2,i.beginPath(),i.arc(t,e,x+6,0,Math.PI*2),i.stroke()),i.globalAlpha=1,i.lineCap="butt"}i.lineWidth=1.5}drawRates(t,e){let n=this.g,i=this.game.player.angVel,s=58,r=2.5,a=(l,c,h,u)=>{let d=zt(c/r,-1,1)*(Math.PI/3);n.strokeStyle="rgba(159,232,255,0.15)",n.lineWidth=3,n.beginPath(),n.arc(t,e,s,l-Math.PI/3,l+Math.PI/3),n.stroke(),Math.abs(c)>.02&&(n.strokeStyle=Math.abs(c)>1.6?le:h,n.lineWidth=3,n.beginPath(),n.arc(t,e,s,Math.min(l,l+d),Math.max(l,l+d)),n.stroke()),n.lineWidth=1;let f=t+Math.cos(l)*(s+10),m=e+Math.sin(l)*(s+10);this.text(u,f,m,9,"rgba(159,232,255,0.6)","center")};a(-Math.PI/2,-i.y,Di,"Y"),a(0,-i.x,Di,"P"),a(Math.PI/2,i.z,Di,"R")}computeAimInfo(){let t=this.game,e=t.player,n=e.eye(new v),i=e.aimDir(new v),s=t.world.raycast(n,i,400),r=s?s.t:400,a=null;for(let h of t.soldiers){if(h===e||!h.alive)continue;let u=zn(n,i,h.pos,.75,r);u>=0&&u<r&&(r=u,a=h)}let l={dist:r,soldier:a,kind:a?"soldier":s?s.kind:null,obj:a||(s?s.obj:null)},c=li.set(0,0,0);return a?c=a.vel:s&&s.kind==="pod"&&(c=s.obj.vel),l.vRel=la.subVectors(e.vel,c).clone(),l.closing=l.vRel.dot(i),this.aimInfo=l,l}drawTargetInfo(t,e){let n=this.computeAimInfo(),i=this.game.player,s=e+80;if(n.dist>=399)return;let r=n.soldier?n.soldier.name:n.kind==="pod"?"CARGO POD":"HULL",a=n.soldier?n.soldier.team===i.team?Rr:we:Di;this.text(`${r}  ${n.dist.toFixed(1)} m`,t+70,e+34,12,a);let l=n.closing;this.text(`Vrel ${n.vRel.length().toFixed(2)}  ${l>=0?"CLOSING":"OPENING"} ${Math.abs(l).toFixed(2)} m/s`,t+70,e+50,11,"rgba(159,232,255,0.8)"),i.refTarget&&this.text(`REF LOCK: ${i.refTarget.name||"CARGO POD"}`,t+70,e+64,10,le)}drawCollision(t,e,n){let i=this.game,s=i.player;if(s.grab||s.walking)return;let r=s.vel.length();if(r<1.5)return;let a=li.copy(s.vel).divideScalar(r),l=i.world.raycast(s.pos,a,r*6,!1);if(!l)return;let c=Math.max(0,l.t-rn),h=-s.vel.dot(l.n);if(h<1.2)return;let u=c/h;if(u>4)return;let d=h>Li,f=d&&i.time*4%1<.5,m=d?we:le;f||this.text(`COLLISION ${u.toFixed(1)} s`,t,e-110,22,m,"center",700),this.text(d?`IMPACT ${h.toFixed(1)} m/s \u2013 BRAKE (${i.keyLabel("brake")}) OR GRAB`:`impact ${h.toFixed(1)} m/s`,t,e-88,12,m,"center"),this.collWarnT-=n,d&&this.collWarnT<=0&&(i.audio.play("warn"),this.collWarnT=.5)}bar(t,e,n,i,s,r,a="rgba(255,255,255,0.08)"){let l=this.g;l.fillStyle=a,l.fillRect(t,e,n,i),l.fillStyle=r,l.fillRect(t,e,n*zt(s,0,1),i)}drawStatus(){let t=this.g,e=this.game.player,n=this.H,i=this.game,s=22,r=n-128;this.plate(s,r,420,106,12);let c=s+52,h=r+54,u=34,d=e.gas/Ii;t.lineWidth=6,t.strokeStyle="rgba(255,255,255,0.08)",t.beginPath(),t.arc(c,h,u,Math.PI*.75,Math.PI*2.25),t.stroke();let f=i.rules.infiniteGas?Di:d<.2?we:d<.4?le:Di;t.strokeStyle=f,this.glow&&(t.shadowColor=f,t.shadowBlur=10),t.beginPath(),t.arc(c,h,u,Math.PI*.75,Math.PI*(.75+1.5*(i.rules.infiniteGas?1:d))),t.stroke(),t.shadowBlur=0,this.num(i.rules.infiniteGas?"\u221E":e.dv.toFixed(0),c,h-2,20,"#e9eef2","center"),this.spaced("\u0394v m/s",c,h+16,9,"#8996a1","center",700,1.5),this.spaced(`N\u2082 ${e.gas.toFixed(1)}`,c,h+36,9,"#8996a1","center",700,1);let m=s+104,x=e.health<35?we:e.health<60?le:"#e9eef2";this.num(String(Math.ceil(e.health)),m,r+30,28,x),this.spaced("HEALTH",m+62,r+24,9,"#8996a1","left",700,3);for(let M=0;M<10;M++){let _=e.health>M*10+.5;t.fillStyle=_?e.health<35?we:ci:"rgba(255,255,255,0.08)",t.fillRect(m+M*15,r+48,12,6)}if(this.spaced("O\u2082",m,r+72,10,"#8996a1","left",700,2),this.bar(m+24,r+68,100,4,e.o2/100,e.leaks.length?le:"#8fb8ff"),this.spaced(`${Math.ceil(e.o2)}%`,m+150,r+72,11,e.o2<30?we:"#c9d3dc","right",700,1),e.leaks.length)this.spaced(`BREACH \xD7${e.leaks.length}`,m,r+90,10,i.time*3%1<.6?we:le,"left",700,2);else{let M=e.walking?"WALKING \xB7 RCS OFF":e.grab?e.grab.kind==="pod"?"HOLDING POD":"ANCHORED":e.ctrl.brake?"MATCHING VEL":e.ctrl.killRot?"KILL ROTATION":"FREE FLIGHT";if(this.spaced(M,m,r+90,10,e.grab||e.walking?ci:"rgba(159,232,255,0.75)","left",700,2),i.world.omega){let _=i.world.gravityAt(e.pos,li).length()/9.81;this.spaced(`${_.toFixed(2)} g`,m+150,r+90,10,"#9fe8ff","right",700,1.5)}}let g=`RCS \xB7 ${Xs[e.mode]}`;t.font=`700 11px ${this.font}`;let p=t.measureText(g).width+40;this.plate(s,r-28,p,22,6,"rgba(255,204,77,0.12)","rgba(255,204,77,0.4)"),this.spaced(g,s+10,r-16,11,le,"left",700,2),this.spaced(this.game.keyLabel("mode"),s+p-8,r-16,9,"rgba(255,204,77,0.7)","right",700,1);let y=e.throttle.reduce((M,_)=>M+_,0);y>.05&&(this.plate(s+p+6,r-28,92,22,6,"rgba(159,232,255,0.1)","rgba(159,232,255,0.3)"),this.spaced(`RCS ${y.toFixed(1)}`,s+p+16,r-16,11,"#cfe8ff","left",700,2))}drawSuit(){let t=this.g,e=this.game.player,n=this.game.time,i=372,s=this.H-74,r=46,a=(g,p)=>[i+g*r,s-p*r],l="rgba(159,232,255,0.55)",c="rgba(159,232,255,0.18)";t.lineWidth=1.2,t.strokeStyle=c,t.setLineDash([3,3]);let[h,u]=a(-.3,.5);t.strokeRect(h,u,.6*r,.75*r),t.setLineDash([]),t.strokeStyle=l,t.fillStyle="rgba(159,232,255,0.06)",[h,u]=a(-.25,.46),t.beginPath(),t.roundRect?t.roundRect(h,u,.5*r,.62*r,6):t.rect(h,u,.5*r,.62*r),t.fill(),t.stroke(),[h,u]=a(-.26,-.08),t.strokeRect(h,u,.52*r,.1*r),[h,u]=a(0,.62),t.beginPath(),t.arc(h,u,.2*r,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(255,204,77,0.25)",t.beginPath(),t.ellipse(h,u+1,.14*r,.09*r,0,0,Math.PI*2),t.fill(),t.strokeStyle=l,t.lineWidth=3,t.lineCap="round";let d=(g,p)=>{let[y,M]=a(g[0],g[1]),[_,A]=a(p[0],p[1]);t.beginPath(),t.moveTo(y,M),t.lineTo(_,A),t.stroke()};d([-.29,.4],[-.36,.08]),d([-.36,.08],[-.3,-.18]),d([.29,.4],[.36,.08]),d([.36,.08],[.3,-.18]),d([-.14,-.2],[-.16,-.62]),d([-.16,-.62],[-.14,-.98]),d([.14,-.2],[.16,-.62]),d([.16,-.62],[.14,-.98]),t.lineWidth=1.2,t.lineCap="butt";let f=0,m=0;dn.forEach((g,p)=>{let y=e.towers[p];f+=y.hp;let[M,_]=a(g.pos.x*1.25,g.pos.y*.95),A=y.hp/30,T=y.dead?"#4a4f55":A>.6?ci:A>.3?le:we;if(t.fillStyle="rgba(6,10,16,0.9)",t.fillRect(M-7,_-7,14,14),t.strokeStyle=T,t.lineWidth=1.5,t.strokeRect(M-7,_-7,14,14),t.fillStyle=T,t.globalAlpha=.25,t.fillRect(M-7,_+7-14*A,14,14*A),t.globalAlpha=1,y.dead){t.strokeStyle=we,t.beginPath(),t.moveTo(M-6,_-6),t.lineTo(M+6,_+6),t.moveTo(M+6,_-6),t.lineTo(M-6,_+6),t.stroke();return}let C=L=>e.throttle[p*6+L],I=(L,P,k)=>{let B=M-L*10,X=_+P*10;t.fillStyle=k>.03?`rgba(207,232,255,${.35+.65*k})`:"rgba(159,232,255,0.12)",t.beginPath(),L?(t.moveTo(B,X),t.lineTo(B-L*5,X-4),t.lineTo(B-L*5,X+4)):(t.moveTo(B,X),t.lineTo(B-4,X+P*5),t.lineTo(B+4,X+P*5)),t.closePath(),t.fill(),m+=k};I(1,0,C(0)),I(-1,0,C(1)),I(0,1,C(2)),I(0,-1,C(3));let w=C(5),S=C(4);m+=w+S,w>.03&&(t.strokeStyle=`rgba(207,232,255,${.4+.6*w})`,t.beginPath(),t.arc(M,_,3.5,0,Math.PI*2),t.stroke()),S>.03&&(t.fillStyle=`rgba(207,232,255,${.4+.6*S})`,t.beginPath(),t.arc(M,_,2,0,Math.PI*2),t.fill())});for(let g of e.leaks){let[p,y]=a(g.p.x*1.25,g.p.y*.95),M=.5+.5*Math.sin(n*12);t.fillStyle=we,t.beginPath(),t.arc(p,y,2.5+M*1.5,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(255,255,255,${.3+.5*M})`,t.beginPath(),t.moveTo(p,y),t.lineTo(p+g.n.x*12,y-g.n.y*12),t.stroke()}let x=Math.round(f/120*100);this.spaced("SUIT / RCS",i,s-56,9,"#8996a1","center",700,3),this.spaced(`QUADS ${x}%`,i-50,s+52,9,x>60?"#8996a1":le,"left",700,1.5),this.spaced(`RCS ${Math.round(Math.min(1,m/8)*100)}%`,i+50,s+52,9,m>.1?"#cfe8ff":"#8996a1","right",700,1.5),t.lineWidth=1.5}drawEnding(t,e){let n=this.game,i=this.g,s=n.endT||0,r=n.endWon,a=r===0?"VICTORY":r===1?"DEFEAT":"DRAW",l=r===0?Rr:r===1?ud:"#e9eef2";i.fillStyle=`rgba(2,4,9,${Math.min(.75,s*.3)})`,i.fillRect(0,0,this.W,this.H);let c=zt((s-.3)/.5,0,1),h=this.W*Math.min(1,s*.8);i.fillStyle="rgba(6,10,16,0.75)",i.fillRect(t-h/2,e-60,h,120),i.fillStyle=l,i.fillRect(t-h/2,e-60,h,2),i.fillRect(t-h/2,e+58,h,2),i.globalAlpha=c;let u=30-18*c;this.glow&&(i.shadowColor=l,i.shadowBlur=24),this.spaced(a,t,e-6,64,l,"center",800,u,this.disp),i.shadowBlur=0,this.spaced(`BLUE ${n.teamScore[0]}  \u2014  ${n.teamScore[1]} ORANGE`,t,e+38,15,"#e9eef2","center",700,4),i.globalAlpha=1}drawWeapon(){let t=this.g,e=this.game.player,n=this.W,i=this.H,s=e.weapon,r=s.def,a=300,l=106,c=n-22-a,h=i-128;if(this.plate(c,h,a,l,12),e.weapons.forEach((u,d)=>{let f=d===e.cur,m=c+a-(e.weapons.length-d)*112;this.plate(m,h-28,106,22,6,f?"rgba(159,232,255,0.16)":"rgba(6,10,16,0.5)",f?"rgba(159,232,255,0.5)":null),this.spaced(this.game.keyLabel("weapon"+(d+1)),m+10,h-16,10,f?le:"#8996a1","left",700,1),this.spaced(u.def.short,m+96,h-16,12,f?"#e9eef2":"#8996a1","right",700,2)}),this.spaced(r.name,c+a-16,h+20,12,"#c9d3dc","right",700,3),r.kind==="beam"){this.spaced(s.overheat?"OVERHEAT":"HEAT",c+18,h+48,11,s.overheat?we:"#8996a1","left",700,3);let u=20;for(let d=0;d<u;d++){let f=s.heat>d/u;t.fillStyle=f?s.overheat?we:d/u>.7?le:Di:"rgba(255,255,255,0.08)",t.fillRect(c+18+d*13,h+58,10,10)}}else{this.num(String(s.mag),c+a-92,h+56,34,s.mag===0?we:s.mag<=Math.ceil(r.mag*.25)?le:"#e9eef2","right"),this.spaced(`/ ${s.reserve}`,c+a-16,h+60,16,"#8996a1","right",700,1);let u=r.mag,d=a-175,f=Math.max(2,Math.min(8,Math.floor(d/u)-2));for(let m=0;m<u;m++)t.fillStyle=m<s.mag?"rgba(233,238,242,0.85)":"rgba(255,255,255,0.1)",t.fillRect(c+18+m*(f+2),h+48,f,14)}if(s.reloadT>0&&r.reload>0){let u=(r.perShell,1-s.reloadT/r.reload);this.spaced("RELOADING",c+18,h+84,10,le,"left",700,3),this.bar(c+110,h+80,a-128,3,u,le)}else{this.spaced("GRENADES",c+18,h+86,9,"#8996a1","left",700,3);for(let u=0;u<2;u++){let d=c+100+u*20,f=h+83;t.beginPath();for(let m=0;m<6;m++){let x=Math.PI/6+m*Math.PI/3;t[m?"lineTo":"moveTo"](d+Math.cos(x)*6,f+Math.sin(x)*6)}t.closePath(),u<e.grenades?(t.fillStyle=le,t.fill()):(t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1,t.stroke())}}}drawDamage(t,e,n){let i=this.g,s=this.game.player,r=Bx.copy(this.game.camera.quaternion).invert();for(let a of this.dmgDirs){a.t-=n;let l=li.subVectors(a.pos,s.pos).applyQuaternion(r),c=Math.atan2(l.z-l.y,l.x);i.strokeStyle=`rgba(255,60,40,${zt(a.t,0,1)*.9})`,i.lineWidth=5,i.beginPath(),i.arc(t,e,120,c-.25,c+.25),i.stroke()}if(this.dmgDirs=this.dmgDirs.filter(a=>a.t>0),i.lineWidth=1.5,s.health<35){let a=i.createRadialGradient(t,e,Math.min(t,e)*.6,t,e,Math.max(t,e)*1.2);a.addColorStop(0,"rgba(120,0,0,0)"),a.addColorStop(1,`rgba(140,0,0,${.5*(1-s.health/35)})`),i.fillStyle=a,i.fillRect(0,0,this.W,this.H)}}drawHints(t,e){let n=this.game,i=n.player;if(i.grab){let s=i.pushCharge,r=n.settings.binds.pushOff;this.text(s>0?`PUSH ${(2+5*s).toFixed(1)} m/s`:r?`HOLD ${n.keyLabel("pushOff")}: PUSH OFF TOWARDS AIM   ${n.keyLabel("grab")}: RELEASE`:`PUSH OFF IS UNBOUND: SET IT IN CONTROLS   ${n.keyLabel("grab")}: RELEASE`,t,e+120,13,r||s>0?ci:le,"center",700),i.grab.kind!=="pod"&&!s&&this.text("MOVE KEYS: CRAWL ALONG THE SURFACE (NO GAS)",t,e+138,11,ci,"center"),i.grab.kind==="pod"&&!s&&this.text(`MOVE KEYS: HAUL POD (${(i.mass+i.grab.obj.mass).toFixed(0)} kg combined)`,t,e+138,11,ci,"center"),s>0&&this.bar(t-80,e+132,160,4,s,ci)}else{let s=n.world.nearestSurface(i.pos,rn+.85);if(s){let r=s.kind==="pod"?s.obj.vel:null,a=r?li.subVectors(i.vel,r).length():i.vel.length();this.text(a>4.5?`TOO FAST TO GRAB (${a.toFixed(1)} m/s)`:`[${n.keyLabel("grab")}] GRAB`,t,e+120,13,a>4.5?we:ci,"center",700)}}}drawMessages(t,e){let n=this.H*.28,i=this.g;for(let s of this.msgs){s.t-=e,i.globalAlpha=zt(s.t/.4,0,1);let r=s.big?26:15;i.font=`700 ${r}px ${this.font}`;let a=i.measureText(s.text).width+60,l=i.createLinearGradient(t-a/2-80,0,t+a/2+80,0);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.2,"rgba(6,10,16,0.55)"),l.addColorStop(.8,"rgba(6,10,16,0.55)"),l.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=l,i.fillRect(t-a/2-80,n-r*.8,a+160,r*1.6),i.fillStyle=s.color,i.globalAlpha*=.7,i.fillRect(t-a/2-40,n-r*.8,a+80,1),i.fillRect(t-a/2-40,n+r*.8,a+80,1),i.globalAlpha=zt(s.t/.4,0,1),this.spaced(s.text,t,n+1,r,s.color,"center",700,s.big?5:2.5),n+=s.big?46:32}i.globalAlpha=1,this.msgs=this.msgs.filter(s=>s.t>0)}drawDeath(t,e){let n=this.game,i=n.player,s=this.g,r=s.createRadialGradient(t,e,50,t,e,Math.max(t,e));r.addColorStop(0,"rgba(60,0,0,0.15)"),r.addColorStop(1,"rgba(40,0,0,0.6)"),s.fillStyle=r,s.fillRect(0,0,this.W,this.H);let a=420,l=150;this.plate(t-a/2,e-l/2,a,l,14,"rgba(10,6,8,0.75)","rgba(255,75,58,0.5)"),s.fillStyle=we,s.fillRect(t-a/2,e-l/2,a,3),this.spaced("ELIMINATED",t,e-34,30,we,"center",800,8,this.disp);let c=i.killedBy?`by ${i.killedBy.name}`:"by the environment";this.spaced(`${c}  \xB7  ${(i.killCause||"").toUpperCase()}`,t,e+4,15,"#e9eef2","center",700,2);let h=1-Math.max(0,i.respawnT)/4;this.spaced(`REDEPLOYING IN ${Math.max(0,i.respawnT).toFixed(1)} s`,t,e+36,11,"#8996a1","center",700,3),this.bar(t-150,e+50,300,3,h,we)}};var dd={easy:{reaction:.65,err0:11,settle:.85,floor:2.2,track:130,velNoise:.45,velLag:.8,fov:55,head:0,jink:.3,grenade:.03,dodge:.05,range:110,burstPause:.6},normal:{reaction:.4,err0:7,settle:.55,floor:1.2,track:220,velNoise:.25,velLag:.45,fov:65,head:.03,jink:.6,grenade:.06,dodge:.3},hard:{reaction:.25,err0:4.5,settle:.34,floor:.6,track:360,velNoise:.12,velLag:.3,fov:78,head:.15,jink:1,grenade:.1,dodge:.65},elite:{reaction:.17,err0:3,settle:.24,floor:.33,track:520,velNoise:.06,velLag:.18,fov:85,head:.35,jink:1.2,grenade:.14,dodge:.9}},fd=["anchor","rusher","flanker","anchor","flanker","rusher"],zx={rifle:28,shotgun:6,gyrojet:34,recoilless:26,maser:24},Ie=new v,on=new v,en=new v,Hx=new he,Yc=new v(0,.2,0),Vx=new v(0,.6,0),ua=class{constructor(t,e,n,i){this.game=t,this.s=e,e.isBot=!0,e.bot=this,this.skill=dd[n]||dd.hard,this.role=fd[i%fd.length],this.known=new Map,this.phase=Math.random(),this.reset()}reset(){this.state="patrol",this.target=null,this.acquireT=0,this.err=new ht,this.path=null,this.goal=null,this.goalNode=-1,this.goalT=0,this.nextPercept=0,this.nextThink=0,this.nextPull=0,this.jink=new v,this.jinkT=0,this.burst=0,this.burstPause=0,this.combatPosT=0,this.lastPos=new v,this.stuckT=0,this.velEst=new v,this.aimHead=!1,this.coast=!1,this.lookDir=new v(1,0,0),this.lookT=0,this.hitsRecent=0,this.retreatUntil=0,this.waitUntil=0,this.known.clear()}onSpawn(){this.reset(),this.lastPos.copy(this.s.pos),this.lookDir.set(this.s.team===0?1:-1,0,0)}get eye(){return this.s.eye(this._eye||(this._eye=new v))}perceive(){let t=this.game,e=this.s,n=t.time,i=this.eye,s=e.aimDir(en),r=Math.cos(this.skill.fov*Bn);for(let a of t.soldiers){if(a.team===e.team)continue;let l=this.known.get(a.id);if(!a.alive){l&&this.known.delete(a.id);continue}let c=Ie.subVectors(a.pos,i),h=c.length(),u=!1;h<(this.skill.range||(t.world.enclosed?170:240))&&((c.dot(s)/h>r||h<7)&&t.world.los(i,on.copy(Yc).applyQuaternion(a.quat).add(a.pos))&&(u=!0),!u&&h<60&&c.dot(s)/h>r-.25&&a.lastThrustT>n-.2&&t.world.los(i,a.pos)&&(u=!0)),u?(l||(l={pos:new v,vel:new v,t:0,visible:!1,first:n,e:a},this.known.set(a.id,l)),l.visible||(l.first=n),l.visible=!0,l.pos.copy(a.pos),l.vel.copy(a.vel),l.t=n,t.reportIntel(e.team,a,e)):l&&(l.visible=!1)}for(let[a,l]of t.intel[e.team]){if(n-l.t>6)continue;let c=this.known.get(a);c?!c.visible&&l.t>c.t&&(c.pos.copy(l.pos),c.vel.copy(l.vel),c.t=l.t):this.known.set(a,{pos:l.pos.clone(),vel:l.vel.clone(),t:l.t,visible:!1,first:n,e:l.e})}for(let[a,l]of this.known)(n-l.t>12||!l.e.alive)&&this.known.delete(a)}hear(t,e,n){let i=this.s;if(!i.alive||t.team===i.team)return;let s=i.pos.distanceTo(e);if(s>n)return;let r=this.known.get(t.id),a=Ie.randomDirection().multiplyScalar(s*.06);r||(r={pos:new v,vel:new v,t:0,visible:!1,first:this.game.time,e:t},this.known.set(t.id,r)),r.visible||(r.pos.copy(e).add(a),r.vel.copy(t.vel),r.t=this.game.time)}onDamaged(t){if(this.hitsRecent+=1,!t||t===this.s)return;let e=this.known.get(t.id);e||(e={pos:t.pos.clone(),vel:t.vel.clone(),t:this.game.time,visible:!1,first:this.game.time,e:t},this.known.set(t.id,e)),e.visible||(e.pos.copy(t.pos),e.vel.copy(t.vel),e.t=this.game.time),this.s.health<40&&this.game.time>this.retreatUntil&&(this.state="retreat",this.retreatUntil=this.game.time+4,this.goal=null,this.path=null)}chooseTarget(){let t=this.s,e=this.eye,n=t.aimDir(en),i=null,s=1/0;for(let r of this.known.values()){if(!r.visible)continue;let a=r.e,l=Ie.subVectors(a.pos,e),c=l.length(),h=Math.acos(zt(l.dot(n)/c,-1,1))/Bn,u=c+h*.6+(this.game.world.inSpawn(a.pos,a.team)?200:0),d=a.aimDir(on);-l.dot(d)/c>.97&&(u-=20),u-=(100-a.health)*.12,a===this.target&&(u-=15),u<s&&(s=u,i=a)}if(i!==this.target){let r=this.target;if(this.target=i,i){let a=Ie.subVectors(i.pos,e).normalize(),l=Math.acos(zt(a.dot(n),-1,1))/Bn,c=this.known.get(i.id),h=!r&&this.game.time-c.first<.3;this.acquireT=this.game.time+this.skill.reaction*(h?1:.55)*Et(.8,1.25);let u=this.skill.err0*Bn*(.6+Math.min(1.5,l/60)),d=Math.random()*Math.PI*2;this.err.set(Math.cos(d)*u,Math.sin(d)*u),this.velEst.copy(i.vel),this.aimHead=Math.random()<this.skill.head}}}think(){let t=this.game,e=this.s,n=t.time;this.chooseTarget();let i=e.gas/Ii,s=this.target,r=this.state;if(s)this.state==="retreat"&&n<this.retreatUntil||(e.health<35&&s.health>35&&n>this.retreatUntil+3?(this.state="retreat",this.retreatUntil=n+4):this.state="engage");else{let a=null;for(let c of this.known.values())(!a||c.t>a.t)&&(a=c);let l=this.needAmmo()&&this.nearestPickup();l?(this.state="resupply",this.pickup=l):i<.14?this.state="refuel":this.state==="refuel"&&i<.55&&!a?this.state="refuel":a&&n-a.t<8?(this.state="hunt",this.huntK=a):this.state="patrol"}r!==this.state&&(this.goal=null,this.path=null,this.coast=!1),this.manageWeapons(s),s&&this.considerGrenade(s),(!this.goal||n>this.goalT)&&this.planGoal(),this.hitsRecent*=.8,e.pos.distanceTo(this.lastPos)<.8&&!e.grab&&this.goal&&e.pos.distanceTo(this.goal)>3?(this.stuckT+=.3,this.stuckT>3&&(this.goal=null,this.path=null,this.stuckT=0,this.state="patrol")):this.stuckT=0,this.lastPos.copy(e.pos)}suit(t,e,n,i){let s=t.def;if(s.kind!=="beam"&&t.mag===0&&t.reserve===0)return 0;let r;switch(s.id){case"shotgun":r=e<9?1.6:e<16?.8:.08;break;case"rifle":r=e<4?.7:1;break;case"gyrojet":r=e<9?.05:n<2||i?1.35:.55;break;case"recoilless":r=e<6?.1:n<3||i?1.25:.8;break;case"maser":r=t.overheat?0:e<80?1.15-t.heat*.5:.4;break;default:r=.5}return s.kind!=="beam"&&t.mag===0&&(r*=t===this.s.weapon?.5:.35),r}manageWeapons(t){let e=this.s,n=e.weapon;if(t){let i=t.pos.distanceTo(e.pos),s=Ie.subVectors(t.vel,e.vel).length(),r=e.cur,a=-1;e.weapons.forEach((l,c)=>{let h=this.suit(l,i,s,!!t.grab)*(c===e.cur?1.15:1);h>a&&(a=h,r=c)}),r!==e.cur&&e.switchT<=0&&e.switchTo(r)}else{let i=0,s=-1;e.weapons.forEach((r,a)=>{let l=this.suit(r,25,2,!1);l>s&&(s=l,i=a)}),i!==e.cur&&e.switchT<=0&&e.switchTo(i);for(let r of e.weapons)r===n&&r.def.kind!=="beam"&&r.mag<r.def.mag*.6&&e.startReload()}e.weapon.def.kind!=="beam"&&e.weapon.mag===0&&e.startReload()}needAmmo(){let t=this.s.weapons.filter(n=>n.def.kind!=="beam");if(!t.length)return!1;let e=t.reduce((n,i)=>n+(i.mag+i.reserve)/(i.def.mag+i.def.reserve),0)/t.length;return e<.3||this.s.grenades===0&&e<.6}nearestPickup(){let t=null,e=1/0;for(let n of this.game.pickups||[]){if(n.cool>0||this.game.world.inSpawn(n.pos,1-this.s.team))continue;let i=n.pos.distanceTo(this.s.pos);i<e&&(e=i,t=n)}return t}planGoal(){let t=this.game,e=this.s,n=t.world,i=t.time;this.goalT=i+3+Math.random()*2;let s=-1;if(this.state==="engage"&&this.target?s=this.pickCombatNode(this.target):this.state==="retreat"?s=this.pickCoverNode(16,!0):this.state==="refuel"?(s=this.pickCoverNode(25,!0),this.goalT=i+8):this.state==="hunt"&&this.huntK?s=this.pickHuntNode(this.huntK.pos):this.state==="resupply"&&this.pickup?(s=n.nearestNode(this.pickup.pos,!1),this.goalT=i+10):s=this.pickPatrolNode(),s<0)return;this.goalNode=s,this.goal=n.nav[s].pos.clone();let r=this.threatPositions(),a=1-e.team,l=r.length&&this.state!=="engage";this.path=n.findPath(e.pos,s,c=>(n.inSpawn(c.pos,a)?400:0)+(l?this.exposure(c.pos,r)*6:0)),this.coast=!1}threatPositions(){let t=[];for(let e of this.known.values())this.game.time-e.t<6&&t.push(e.pos);return t}exposure(t,e){let n=0;for(let i of e)i.distanceToSquared(t)<120*120&&this.game.world.los(t,i,!0)&&n++;return n}candidates(t,e,n=40){let i=[];this.game.world.forNear(t,e,s=>{let r=this.game.world.nav[s];r.pos.distanceToSquared(t)<e*e&&!this.game.world.inSpawn(r.pos,1-this.s.team)&&i.push(r)});for(let s=i.length-1;s>0;s--){let r=Math.random()*(s+1)|0;[i[s],i[r]]=[i[r],i[s]]}return i.length=Math.min(i.length,n),i}teammatePenalty(t){let e=0;for(let n of this.game.soldiers){if(n===this.s||n.team!==this.s.team||!n.alive)continue;let i=n.pos.distanceTo(t);i<7&&(e+=(7-i)*1.5),n.bot&&n.bot.goal&&n.bot.goal.distanceTo(t)<5&&(e+=6)}return e}pickCombatNode(t){let e=this.s,n=this.game.world,i=(zx[e.weapon.def.id]||28)*(this.role==="rusher"?.6:this.role==="anchor"?1.2:1),s=en.copy(Yc).applyQuaternion(t.quat).add(t.pos).clone(),r=this.threatPositions(),a=-1,l=1/0,c=this.role!=="anchor";for(let h of this.candidates(e.pos,c?30:20,c?44:36)){let u=h.pos.distanceTo(s);if(u<4||!n.los(h.pos,s,!0))continue;let d=Math.abs(u-i)*(c?.85:.5)+h.pos.distanceTo(e.pos)*.3;h.surf&&(d-=7);let f=Ie.subVectors(h.pos,s).normalize(),m=on.set(0,1,0).applyQuaternion(t.quat);if(d-=Math.abs(f.dot(m))*6,d-=Math.abs(h.pos.y-e.pos.y)>5?1.5:0,d+=(this.exposure(h.pos,r)-1)*8,d+=this.teammatePenalty(h.pos),this.role==="flanker"){let x=Ie.subVectors(h.pos,s).normalize();for(let g of this.game.soldiers)if(g!==e&&g.team===e.team&&g.alive){let p=on.subVectors(g.pos,s).normalize();d+=Math.max(0,x.dot(p))*4}}d+=Math.random()*3,d<l&&(l=d,a=h.i)}return a}pickCoverNode(t,e){let n=this.s,i=this.game.world,s=this.threatPositions(),r=-1,a=1/0;for(let l of this.candidates(n.pos,t,40)){let c=l.pos.distanceTo(n.pos)*.4+this.exposure(l.pos,s)*25;e&&!l.surf&&(c+=12),c+=this.teammatePenalty(l.pos)*.5+Math.random()*2,c<a&&(a=c,r=l.i)}return r}pickHuntNode(t){let e=this.s,n=this.game.world,i=-1,s=1/0;for(let r of this.candidates(t,26,40)){let a=r.pos.distanceTo(t);if(a<6||!n.los(r.pos,t,!0))continue;let l=r.pos.distanceTo(e.pos)*.5+Math.abs(a-16)*.4;if(r.surf&&(l-=3),l+=this.teammatePenalty(r.pos),this.role==="flanker"){let c=Ie.subVectors(r.pos,t).normalize(),h=on.subVectors(e.pos,t).normalize();l-=(1-c.dot(h))*6}l+=Math.random()*4,l<s&&(s=l,i=r.i)}return i>=0?i:n.nearestNode(t,!1)}pickPatrolNode(){let t=this.s,e=this.game.world,n=t.team===0?1:-1,i=e.def.bounds,s=i[0]/72,r=i[1]/36,a,l=Math.random();this.role==="rusher"?a=n*Et(5,45)*s:this.role==="anchor"?a=n*Et(-25,20)*s:a=n*Et(-10,40)*s;let c=new v(a,Et(-31,31)*r,Et(-31,31)*r);l<.15&&c.set(Et(-12,12)*s,Et(-20,20)*r,Et(-20,20)*r);let h=-1,u=1/0;return e.forNear(c,12*Math.max(1,s*.8),d=>{let f=e.nav[d],m=f.pos.distanceTo(c)-(f.surf?6:0);m<u&&(u=m,h=d)}),h>=0?h:e.nearestNode(c,!1)}update(t){let e=this.s,n=this.game,i=n.time;e.alive&&(i>=this.nextPercept&&(this.nextPercept=i+.1,this.perceive()),i>=this.nextThink&&(this.nextThink=i+.3,this.think()),this.target&&(!this.target.alive||!this.known.get(this.target.id)||!this.known.get(this.target.id).visible)&&(this.target=null),this._dt=t,e.ads=!!this.target&&i>this.acquireT&&this.target.pos.distanceTo(e.pos)>10,this.steer(t),this.aim(t),this.roll(t),this.actions(t))}steer(t){let e=this.s,n=this.game,i=n.world,s=n.time,r=e.ctrl;r.move.set(0,0,0),r.roll=0,r.brake=!1,r.killRot=!1;let a=e.gas/Ii;if(e.grab){if(this.state==="engage"&&this.target&&this.hitsRecent<1.5&&this.goal&&e.pos.distanceTo(this.goal)<3||this.state==="refuel"&&a<.6||s<this.waitUntil||!this.path||!this.path.length)return;{let p=0;for(let T=Math.min(this.path.length-1,4);T>=0;T--)if(i.segmentClear(e.pos,this.path[T],.6)){p=T;break}let y=this.path[p],M=Ie.subVectors(y,e.pos),_=M.length();M.normalize();let A=e.grab.normal||on.set(0,0,0);if(M.dot(A)>-.5){this.path.splice(0,p),n.pushOff(e,M,zt(2+_*.25,3,6.5)),this.coast=!0;return}}n.releaseGrab(e)}let l=null,c=!1;this.path&&this.path.length?(s>this.nextPull&&this.path.length>1&&(this.nextPull=s+.25,i.segmentClear(e.pos,this.path[1],.65)&&this.path.shift()),l=this.path[0],e.pos.distanceTo(l)<2.2&&this.path.length>1&&(this.path.shift(),l=this.path[0]),c=this.path.length===1):this.goal&&(l=this.goal,c=!0);let h=on.set(0,0,0),u={engage:3,retreat:6,refuel:3.5,hunt:4.5,patrol:5,resupply:5.5}[this.state]||4.5;if(this.role==="rusher"&&this.state!=="retreat"&&(u*=1.25),a<.35&&(u*=.65),this.coast&&(u=Math.max(u,e.vel.length())),l){let g=Ie.subVectors(l,e.pos),p=g.length(),y=c?p:p+6,M=2,_=this.goalNode>=0?i.nav[this.goalNode]:null,A=c&&_&&_.surf&&this.state!=="engage"?2.5:0,T=Math.min(u,Math.sqrt(A*A+2*M*Math.max(0,y-.6)));if(p>.01&&h.copy(g).multiplyScalar(T/p),c&&p<1.8){h.multiplyScalar(.3);let C=this.goalNode>=0?i.nav[this.goalNode]:null;if(C&&C.surf&&!e.walking&&!(i.omega&&C.normal&&i.upAt(C.pos,en).dot(C.normal)>.7)&&e.vel.length()<3.8&&n.tryGrab(e)){this.coast=!1;return}p<1&&this.state!=="engage"&&(this.goal=null,this.path=null)}}if(this.state==="engage"&&this.target&&a>.45){if(s>this.jinkT){let g=Ie.subVectors(this.target.pos,e.pos).normalize();Ki(g,this.jink);let p=en.set(0,1,0).applyQuaternion(this.target.quat);this.jink.addScaledVector(p,(Math.random()<.5?-1:1)*.8),this.jink.addScaledVector(g,-this.jink.dot(g)).normalize().multiplyScalar(Et(.8,1.9)*this.skill.jink),this.jinkT=s+Et(1.2,2.6)}h.add(this.jink)}else this.jink.set(0,0,0);if(a>.2&&Math.random()<this.skill.dodge*t*4)for(let g of this.known.values()){if(!g.visible)continue;let p=g.e,y=Ie.subVectors(e.pos,p.pos),M=y.length();if(y.dot(p.aimDir(en))/M>.995&&s-p.lastFireT<.5){this.jinkT=0;break}}let d=e.vel.length();if(d>1){let g=Ie.copy(e.vel).divideScalar(d),p=i.raycast(e.pos,g,d*2.2+1,!0);if(p&&p.t>0){let y=-e.vel.dot(p.n);y>1.5&&h.addScaledVector(p.n,y*(1-p.t/(d*2.2+1))*1.4)}}if(!i.enclosed)for(let g=0;g<3;g++){let p=i.bounds.max[g]-10,y=e.pos.getComponent(g)+e.vel.getComponent(g)*2.5;Math.abs(y)>p&&h.setComponent(g,h.getComponent(g)-Math.sign(y)*Math.min(4,(Math.abs(y)-p)*.4+1))}for(let g of n.soldiers){if(g===e||!g.alive||g.team!==e.team)continue;let p=Ie.subVectors(e.pos,g.pos),y=p.length();y<3&&y>.01&&h.addScaledVector(p,(3-y)/y*.8)}if(!l&&!this.jink.lengthSq()&&h.set(0,0,0),e.walking){e.walkTarget=(e.walkTarget||new v).copy(h),e.walkJump=h.dot(i.upAt(e.pos,en))>2.2;return}e.walkTarget=null;let f=Ie.subVectors(h,e.vel).multiplyScalar(1.6),m=this.coast?.6:this.state==="engage"?.18:.3;f.length()<m?f.set(0,0,0):this.coast=!1,i.omega&&f.sub(i.gravityAt(e.pos,en)).sub(i.coriolis(e.vel,en)),e.gas<.05&&f.set(0,0,0);let x=4*ia/e.mass;f.applyQuaternion(Hx.copy(e.quat).invert()).divideScalar(x),r.move.set(zt(f.x,-1,1),zt(f.y,-1,1),zt(f.z,-1,1))}desiredAimDir(t){let e=this.s,n=this.game,i=n.time,s=this.eye,r=this.target;if(r){let l=Ie.copy(this.aimHead?Vx:Yc).applyQuaternion(r.quat).add(r.pos).sub(s),c=on.randomDirection().multiplyScalar(r.vel.length()*this.skill.velNoise);this.velEst.lerp(en.copy(r.vel).add(c),Math.min(1,(this._dt||1/60)/this.skill.velLag));let h=en.copy(this.velEst).sub(e.vel),u=e.weapon.def,d;return u.kind==="beam"?d=0:u.kind==="rocket"?d=qo(l,h,u.speed,u.accel,u.burn):d=Qi(l,h,u.speed),d>0&&l.addScaledVector(h,d),t.copy(l).normalize()}if(this.state==="hunt"&&this.huntK)return t.subVectors(this.huntK.pos,s).normalize();if(this.state==="retreat"||this.state==="refuel"){let a=this.threatPositions();if(a.length)return t.subVectors(a[0],s).normalize()}if(i>this.lookT){this.lookT=i+Et(1.2,2.5);let a=e.team===0?1:-1,l=e.forward(Ie);Math.random()<.18?this.lookDir.set(a*Et(.4,1),Et(-.5,.5),Et(-.5,.5)).normalize():e.vel.lengthSq()>4&&Math.random()<.3&&e.vel.clone().normalize().dot(l)>.5?this.lookDir.copy(e.vel).normalize():this.lookDir.copy(l).addScaledVector(Ki(l,on),Et(0,.75)).normalize()}return t.copy(this.lookDir)}aim(t){let e=this.s,n=this.skill,i=this.desiredAimDir(this._want||(this._want=new v));this.trueAim=i;let s=Math.exp(-t/n.settle);this.err.multiplyScalar(s);let r=n.floor*Bn*(1+e.angVel.length()*.8+(e.grab?-.4:0));this.err.x+=(Math.random()-.5)*r*.9,this.err.y+=(Math.random()-.5)*r*.9;let a=n.floor*Bn*1.6;if(this.target&&this.game.time>this.acquireT+n.settle*2){let g=this.err.length();g>a&&this.err.multiplyScalar(a/g)}let l=Ie.copy(i),c=on.crossVectors(l,Math.abs(l.y)<.95?en.set(0,1,0):en.set(1,0,0)).normalize(),h=en.crossVectors(c,l);if(l.addScaledVector(c,this.err.x).addScaledVector(h,this.err.y).normalize(),this.target&&this.game.time<this.acquireT)return;let u=e.aimDir(this._cur||(this._cur=new v)),d=Math.acos(zt(u.dot(l),-1,1));if(d<1e-5)return;let f=n.track*Bn*t,m=Math.min(d,Math.max(f*.15,d*Math.min(1,t*14)),f),x=on.crossVectors(u,l).normalize();u.applyAxisAngle(x,m),e.setAimDir(u)}roll(t){let e=this.s,n=this.game.time,i=null,s=1.3;if(e.grab&&e.grab.normal&&e.grab.kind!=="pod")i=e.grab.normal;else{if(!this.upPref||n>this.upT){let r=this.state==="engage";this.upT=n+(r?Et(1.5,3.5):Et(3,7)),this.upPref=(this.upPref||new v).randomDirection(),this.rollRate=r?Et(.8,2):Et(.4,1)}i=this.upPref,s=this.rollRate}e.rollToward(i,s*t)}actions(t){let e=this.s,n=this.game,i=n.time,s=this.target;if(!s){this.flushGrenade();return}if(i<this.acquireT||n.world.inSpawn(s.pos,s.team))return;let r=this.eye,a=s.pos.distanceTo(r);if(a<Vn.range&&e.meleeCool<=0){n.combat.melee(e);return}let l=e.aimDir(Ie),c=Math.acos(zt(l.dot(this.trueAim),-1,1)),h=Math.atan(.42/a)*1.35+.15*Bn+(e.weapon.def.kind==="pellets"?2.5*Bn:0),u=e.weapon.def.kind==="beam"&&e.beam&&e.beam.life>0?2.2:1;if(c>h*u||e.weapon.reloadT>0||e.switchT>0)return;let d=e.weapon;if(!(d.def.kind==="beam"&&(d.heat>.85&&(this.coolUntil=i+.6),this.coolUntil>i||d.overheat))){if(d.def.backblast){for(let f of n.soldiers)if(f!==e&&f.alive&&f.team===e.team&&f.pos.distanceTo(r)<7&&on.subVectors(f.pos,r).dot(l)<0)return}this.lineClearOfFriends(r,l,a)&&(this.burstPause>i||n.combat.fire(e)&&(this.burst++,e.weapon.def.auto&&(a>25||this.skill.burstPause)&&this.burst>=3+(Math.random()*3|0)&&(this.burst=0,this.burstPause=i+Et(.15,.32)+(this.skill.burstPause||0))))}}considerGrenade(t){let e=this.s,n=this.game;if(e.grenades<=0||e.grenadeCool>0||e.throwT>0||this.game.time<this.acquireT)return;let i=this.eye,s=t.pos.distanceTo(i);if(s<8||s>55)return;let r=en.subVectors(t.vel,e.vel),a=t.grab||r.length()<2,l=s<30?1:.4;if(a)l+=1.2;else if(s>30)return;for(let d of n.soldiers){if(!d.alive||d===t)continue;let f=d.pos.distanceTo(t.pos);if(d.team!==e.team&&f<7&&(l+=.8),d.team===e.team&&f<9)return}if(e.health<50&&(l+=.4),Math.random()>this.skill.grenade*2.2*l)return;let c=on.subVectors(t.pos,i),h=Qi(c,r,Je.speed);if(!(h>0)||h>Je.fuse-.35)return;let u=c.addScaledVector(r,h+ai*.4).normalize();n.world.raycast(i,u,Math.min(s,6),!0)||n.combat.throwGrenade(e,u)}flushGrenade(){let t=this.s,e=this.game,n=this.huntK;if(this.state!=="hunt"||!n||t.grenades<=0||t.grenadeCool>0||e.time-n.t>3||Math.random()>this.skill.grenade*this._dt*4)return;let i=this.eye,s=n.pos.distanceTo(i);if(s<10||s>28||!e.world.los(i,n.pos,!0))return;for(let a of e.soldiers)if(a.alive&&a.team===t.team&&a.pos.distanceTo(n.pos)<10)return;let r=Ie.subVectors(n.pos,i).normalize();e.combat.throwGrenade(t,r)}lineClearOfFriends(t,e,n){for(let i of this.game.soldiers){if(i===this.s||!i.alive||i.team!==this.s.team)continue;let s=on.subVectors(i.pos,t),r=s.dot(e);if(!(r<0||r>n)&&s.addScaledVector(e,-r).lengthSq()<1.2)return!1}return!0}};var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Gx=new Is(-1,1,1,-1,0,1),$c=class extends ue{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Wx=new $c,Ui=class{constructor(t){this._mesh=new ut(Wx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var fa=class extends pn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ri.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ui(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cr=class extends pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},pa=class extends pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fa(da),this.copyPass.material.blending=Fn,this.clock=new zo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cr!==void 0&&(r instanceof Cr?n=!0:r instanceof pa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ga=class extends pn{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}};var pd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qs=class o extends pn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(s,r,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ze(s,r,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ze(s,r,{type:un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}let a=pd;this.highPassUniforms=Ri.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=da;this.copyUniforms=Ri.clone(h.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ze,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new qt,this.fsQuad=new Ui(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ht(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};qs.BlurDirectionX=new ht(1,0);qs.BlurDirectionY=new ht(0,1);var md={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var xa=class extends pn{constructor(){super();let t=md;this.uniforms=Ri.clone(t.uniforms),this.material=new Fo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var va=class extends Ds{constructor(){super();let t=new ye;t.deleteAttribute("uv");let e=new Nt({side:Se}),n=new Nt,i=new He(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new ut(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new ut(t,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);let a=new ut(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ut(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ut(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ut(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ut(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ut(t,Ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new ut(t,Ys(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new ut(t,Ys(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new ut(t,Ys(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new ut(t,Ys(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new ut(t,Ys(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ys(o){let t=new qt;return t.color.setScalar(o),t}var Pr={low:{scale:.6,shadows:0,bloom:0,aa:0,particles:.4,env:0,exposure:1.05},medium:{scale:.85,shadows:1024,bloom:.8,aa:2,particles:.7,env:.8,exposure:1.05},high:{scale:1,shadows:2048,bloom:1,aa:4,particles:1,env:1,exposure:1.05},ultra:{scale:1.5,shadows:4096,bloom:1.1,aa:8,particles:1,env:1.2,exposure:1.05}};function gd(o){let t={...Pr.high,...o};t.bloom===!0&&(t.bloom=1),t.bloom===!1&&(t.bloom=0),t.aa===!0&&(t.aa=4),t.aa===!1&&(t.aa=0),t.env===!0&&(t.env=1),t.env===!1&&(t.env=0);for(let e of["scale","shadows","bloom","aa","particles","env","exposure"])t[e]=Number(t[e])||0;return t.exposure||(t.exposure=1.05),t}var ya=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.cfg={...Pr.high},this.compKey="",this.composer=null,t.shadowMap.type=_c,this.pmrem=new Ls(t),this.envTex=null}apply(t,e){let n=this.cfg.shadows;this.cfg={...t};let i=this.renderer,s=Math.max(.4,Math.min(2,(window.devicePixelRatio||1)*t.scale));i.setPixelRatio(s),i.shadowMap.enabled=t.shadows>0,e&&this.setupShadows(e),n>0!=t.shadows>0&&this.scene.traverse(a=>{a.material&&[].concat(a.material).forEach(l=>{l.needsUpdate=!0})}),t.env>0?(this.envTex||(this.envTex=this.pmrem.fromScene(new va,.04).texture),this.scene.environment=this.envTex,this.scene.environmentIntensity=(e&&!e.enclosed?.22:.38)*t.env):this.scene.environment=null,i.toneMappingExposure=t.exposure||1.05;let r=`${t.bloom>0}|${t.aa}|${t.scale}`;r!==this.compKey&&(this.compKey=r,this.buildComposer()),this.bloom&&(this.bloom.strength=.55*t.bloom)}setupShadows(t){let e=t.sun;if(this.sun=e,!e)return;let n=this.cfg.shadows>0;if(e.castShadow=n,n){e.shadow.mapSize.set(this.cfg.shadows,this.cfg.shadows),e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null);let i=e.shadow.camera,s=55;i.left=-s,i.right=s,i.top=s,i.bottom=-s,i.near=1,i.far=400,i.updateProjectionMatrix(),e.shadow.bias=-4e-4,e.shadow.normalBias=.04,e.target.parent||this.scene.add(e.target),this.sunDir=e.position.clone().normalize()}}follow(t){if(!this.sun||!this.sun.castShadow)return;let e=110/this.cfg.shadows,n=Math.round(t.x/e)*e,i=Math.round(t.y/e)*e,s=Math.round(t.z/e)*e;this.sun.target.position.set(n,i,s),this.sun.position.set(n,i,s).addScaledVector(this.sunDir,180),this.sun.target.updateMatrixWorld()}buildComposer(){if(this.composer&&(this.composer.dispose(),this.composer=null),this.bloom=null,!(this.cfg.bloom>0)&&!(this.cfg.aa>0))return;let t=this.renderer,e=t.getDrawingBufferSize(new ht),n=new ze(e.x,e.y,{type:un,samples:this.cfg.aa||0}),i=new ma(t,n);i.addPass(new ga(this.scene,this.camera)),this.cfg.bloom>0&&(this.bloom=new qs(new ht(e.x/2,e.y/2),.55*this.cfg.bloom,.45,.92),i.addPass(this.bloom)),i.addPass(new xa),this.composer=i,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e))}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}};var $s=1/120,Xx=["VEGA","KESTREL","NOMAD","APEX","ORBIT","HALO","RAZOR","TALON","DRIFT","NOVA","SPECTER","CINDER","ECHO","PULSAR","QUASAR","ZENITH"],bd=[["forward","Move forward","KeyW"],["back","Move back","KeyS"],["left","Move left","KeyA"],["right","Move right","KeyD"],["fire","Fire","Mouse0"],["ads","Aim down sights (hold)","Mouse2"],["up","Move up","Space"],["down","Move down","ShiftLeft"],["rollLeft","Roll left","KeyQ"],["rollRight","Roll right","KeyE"],["brake","Match velocity (brake)","KeyC"],["killRot","Kill rotation","KeyX"],["grab","Grab / release","KeyF"],["reload","Reload","KeyR"],["grenade","Grenade","KeyG"],["melee","Momentum hammer","KeyV"],["weapon1","Primary weapon","Digit1"],["weapon2","Secondary weapon","Digit2"],["nextWeapon","Next weapon","WheelDown"],["prevWeapon","Previous weapon","WheelUp"],["mode","Cycle RCS mode","KeyT"],["lockRef","Lock velocity reference","KeyL"],["grid","Reference grid","KeyH"],["board","Scoreboard","Tab"],["pushOff","Push off (hold while holding on)",""],["adsToggle","Aim down sights (toggle)",""],["lastWeapon","Last used weapon",""],["fullStop","Full stop (brake + kill rotation)",""]],xd=Object.fromEntries(bd.map(o=>[o[0],o[2]])),vd={recoil:!0,breaches:!0,knockback:!0,thrusterDamage:!0,infiniteGas:!1},Zc={sens:1,difficulty:"hard",mode:1,teamSize:5,scoreLimit:30,volume:.6,fov:80,invertY:!1,outlines:!0,map:"hangar",loadout:["rifle","shotgun"],dmgNumbers:!0,gfx:{preset:"high",...Pr.high}},yd={spin:{rifle:1,shotgun:.8,gyrojet:.7,recoilless:.75,maser:.9},hangar:{rifle:1,shotgun:.95,gyrojet:.5,recoilless:.6,maser:.85},yard:{rifle:1,shotgun:.3,gyrojet:.95,recoilless:.85,maser:.9}},_d=new Set(["rifle","gyrojet","recoilless","maser"]);function Md(o){if(!o)return"\u2014";if(o.startsWith("Key"))return o.slice(3);if(o.startsWith("Digit"))return o.slice(5);if(o.startsWith("Numpad"))return"Num"+o.slice(6);let t={Mouse0:"LMB",Mouse1:"MMB",Mouse2:"RMB",Mouse3:"Mouse 4",Mouse4:"Mouse 5",WheelUp:"Wheel \u2191",WheelDown:"Wheel \u2193"};return t[o]?t[o]:{Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Tab:"Tab",CapsLock:"Caps",Backquote:"`",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Enter",Backspace:"Bksp"}[o]||o}var Pn=new v,ts=new v,Ir=new he,Jc=class{constructor(t){this.keys=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0},this.el=t;let e=(n,i)=>{if(!this.capture)return!1;i.preventDefault(),i.stopPropagation();let s=this.capture;return this.capture=null,s(n),!0};window.addEventListener("keydown",n=>{e(n.code,n)||((n.code==="Tab"||n.code==="Space"||n.code.startsWith("Arrow")&&!(n.target&&n.target.tagName==="SELECT"))&&n.preventDefault(),this.keys.has(n.code)||this.pressed.add(n.code),this.keys.add(n.code))}),window.addEventListener("keyup",n=>{this.keys.delete(n.code)}),window.addEventListener("blur",()=>{this.keys.clear()}),window.addEventListener("mousemove",n=>{(document.pointerLockElement===t||this.forceMouse)&&(this.mouse.dx+=n.movementX||0,this.mouse.dy+=n.movementY||0)}),window.addEventListener("mousedown",n=>{e("Mouse"+n.button,n)},!0),t.addEventListener("mousedown",n=>{let i="Mouse"+n.button;this.keys.has(i)||this.pressed.add(i),this.keys.add(i),n.button===1&&n.preventDefault()}),window.addEventListener("mouseup",n=>{this.keys.delete("Mouse"+n.button)}),t.addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("wheel",n=>{if(!n.deltaY)return;let i=n.deltaY>0?"WheelDown":"WheelUp";if(this.capture){let s=this.capture;this.capture=null,s(i);return}this.pressed.add(i)},{passive:!0})}down(t){return!!t&&this.keys.has(t)}hit(t){return!!t&&this.pressed.has(t)}endFrame(){this.pressed.clear(),this.mouse.dx=this.mouse.dy=0}},Kc=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new Ao({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=_r,this.renderer.toneMappingExposure=1.05,this.scene=new Ds,this.scene.background=new et(131850),this.camera=new Ye(80,window.innerWidth/window.innerHeight,.04,6e3),this.scene.add(this.camera),this.settings=this.loadSettings(),this.time=0,this.state="menu",this.world=new Er(this.scene,this.settings.map),this.gfx=new ya(this.renderer,this.scene,this.camera),this.fx=new Jo(this.scene),this.audio=new Ko,this.audio.setVolume(this.settings.volume),this.combat=new aa(this),this.hud=new ha(this,document.getElementById("hud")),this.input=new Jc(this.canvas),this.soldiers=[],this.bots=[],this.intel=[new Map,new Map],this.teamScore=[0,0],this.showGrid=!1,this.buildViewmodel(),this.buildGrid(),this.acc=0,this.last=performance.now(),this.menuCam=0,window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>this.onLockChange()),document.addEventListener("pointerlockerror",()=>{this.input.forceMouse||(this.input.forceMouse=!0,this.state==="playing"&&this.hud.message("POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES","#ffcc4d",4))}),this.setupUI(),this.applyGraphics(),this.resize(),requestAnimationFrame(t=>this.frame(t))}loadSettings(){let t={};try{t=JSON.parse(localStorage.getItem("deltav.settings")||"{}")||{}}catch{t={}}let e={...Zc,...t};return e.binds={...xd,...t.binds||{}},e.rules={...vd,...t.rules||{}},Ci[e.map]||(e.map="hangar"),e.gfx=gd({...Zc.gfx,...t.gfx||{}}),(!Array.isArray(e.loadout)||e.loadout.length!==2||!e.loadout.every(n=>tn[n])||e.loadout[0]===e.loadout[1])&&(e.loadout=[...Zc.loadout]),e}get rules(){return this.settings.rules}keyLabel(t){return Md(this.settings.binds[t])}bound(t){return this.input.down(this.settings.binds[t])}pressedAct(t){return this.input.hit(this.settings.binds[t])}saveSettings(){try{localStorage.setItem("deltav.settings",JSON.stringify(this.settings))}catch{}}resize(){let t=window.innerWidth,e=window.innerHeight;this.gfx.resize(),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.hud.resize(),this.fx.setScale(e*this.renderer.getPixelRatio(),this.camera.fov)}applyGraphics(){let t=this.settings.gfx;this.gfx.apply(t,this.world),this.fx.density=t.particles,this.hud.setQuality(t),this.resize()}buildViewmodel(){this.vm=new Ae,this.camera.add(this.vm),this.vmS=.62,this.vmHolder=new Ae,this.vmHolder.scale.setScalar(this.vmS),this.vm.add(this.vmHolder),this.vmGuns={};for(let t of Object.keys(tn)){let e=qc(t,fn[0],{noShadow:!0});e.visible=!1,this.vmHolder.add(e),this.vmGuns[t]=e}this.vmArmR=Vc(fn[0]),this.vmArmR.scale.setScalar(this.vmS),this.vm.add(this.vmArmR),this.vmArmL=Vc(fn[0]),this.vmArmL.scale.setScalar(this.vmS),this.vm.add(this.vmArmL),this.vmNade=Sr(fn[0]),this.vmNade.scale.setScalar(.85),this.vmNade.traverse(t=>{t.castShadow=!1}),this.vmNade.visible=!1,this.vm.add(this.vmNade),this.vmFlash=new He(16755302,0,6,1.5),this.vmFlash.position.set(.1,-.05,-.6),this.vm.add(this.vmFlash),this.vmSway=new ht,this.vmMove=new v,this.vmShell=new ut(new ke(.011,.011,.045,10).rotateX(Math.PI/2),new Nt({color:12071466,roughness:.5,metalness:.3})),this.vmShell.visible=!1,this.vm.add(this.vmShell)}buildGrid(){this.grid&&this.scene.remove(this.grid);let t=[],e=this.world.bounds,n=this.world.enclosed?12:24;for(let s=e.min[1];s<=e.max[1];s+=n)for(let r=e.min[2];r<=e.max[2];r+=n)t.push(e.min[0],s,r,e.max[0],s,r);for(let s=e.min[0];s<=e.max[0];s+=n)for(let r=e.min[2];r<=e.max[2];r+=n)t.push(s,e.min[1],r,s,e.max[1],r);for(let s=e.min[0];s<=e.max[0];s+=n)for(let r=e.min[1];r<=e.max[1];r+=n)t.push(s,r,e.min[2],s,r,e.max[2]);let i=new ue;i.setAttribute("position",new Xt(t,3)),this.grid=new Us(i,new $i({color:6289151,transparent:!0,opacity:0,depthWrite:!1})),this.grid.visible=!1,this.scene.add(this.grid)}setupUI(){let t=a=>document.getElementById(a);this.ui={main:t("menu"),pause:t("pause"),end:t("end"),board:t("board"),lock:t("lockhint")};let e=this.settings,n=(a,l,c=h=>h)=>{let h=t(a);h&&(h.value=String(e[l]),h.addEventListener("change",()=>{e[l]=c(h.value),this.saveSettings(),this.applySettings()}))};n("optDiff","difficulty"),n("optTeam","teamSize",Number),n("optScore","scoreLimit",Number),n("optMode","mode",Number),n("optMap","map"),this.setupGraphicsUI(),t("mapDesc").textContent=Ci[e.map].desc,t("optMap").addEventListener("change",()=>{t("mapDesc").textContent=Ci[e.map].desc});let i=(a,l,c)=>{let h=t(a);h&&(h.checked=l(),h.addEventListener("change",()=>{c(h.checked),this.saveSettings()}))};for(let a of Object.keys(vd))i("rule_"+a,()=>e.rules[a],l=>{e.rules[a]=l});i("optOutline",()=>e.outlines,a=>{e.outlines=a}),this.buildBindUI(),this.setupLoadoutUI(),this.setupMenuChrome();let s=(a,l,c,h)=>{let u=t(a);if(!u)return;u.value=e[l];let d=t(c);d&&(d.textContent=h(e[l])),u.addEventListener("input",()=>{e[l]=Number(u.value),d&&(d.textContent=h(e[l])),this.saveSettings(),this.applySettings()})};s("optSens","sens","optSensV",a=>a.toFixed(2)),s("optFov","fov","optFovV",a=>a.toFixed(0)+"\xB0"),s("optVol","volume","optVolV",a=>Math.round(a*100)+"%"),s("optSens2","sens","optSens2V",a=>a.toFixed(2));let r=t("optInv");r&&(r.checked=e.invertY,r.addEventListener("change",()=>{e.invertY=r.checked,this.saveSettings()})),t("modeDesc").textContent=Ar[e.mode],t("optMode").addEventListener("change",()=>{t("modeDesc").textContent=Ar[e.mode]}),t("btnDeploy").addEventListener("click",()=>{this.audio.init(),this.newMatch()}),t("btnResume").addEventListener("click",()=>this.resume()),t("btnQuit").addEventListener("click",()=>this.toMenu()),t("btnAgain").addEventListener("click",()=>this.newMatch()),t("btnMenu").addEventListener("click",()=>this.toMenu()),this.ui.lock.addEventListener("click",()=>this.lock()),this.canvas.addEventListener("click",()=>{this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.lock()})}setupGraphicsUI(){let t=a=>document.getElementById(a),e=this.settings.gfx;if(!t("gPreset"))return;let n=a=>Math.round(a*100)+"%",i=[["gScale","scale",n],["gBloom","bloom",a=>a>0?n(a):"Off"],["gEnv","env",a=>a>0?n(a):"Off"],["gParticles","particles",n],["gExposure","exposure",a=>a.toFixed(2)]],s=()=>{t("gPreset").value=e.preset,t("gShadows").value=String(e.shadows),t("gAA").value=String(e.aa);for(let[a,l,c]of i){t(a).value=e[l];let h=t(a+"V");h&&(h.textContent=c(e[l]))}t("gDmg").checked=this.settings.dmgNumbers;for(let a of["gPreset","gShadows","gAA"])t(a).refreshSeg&&t(a).refreshSeg()},r=(a=!0)=>{a&&(e.preset="custom"),this.saveSettings(),this.applyGraphics(),s()};t("gPreset").addEventListener("change",()=>{let a=Pr[t("gPreset").value];a&&(Object.assign(e,a),e.preset=t("gPreset").value),r(!1)}),t("gShadows").addEventListener("change",()=>{e.shadows=Number(t("gShadows").value),r()}),t("gAA").addEventListener("change",()=>{e.aa=Number(t("gAA").value),r()});for(let[a,l,c]of i)t(a).addEventListener("input",()=>{let h=Number(t(a).value),u=t(a+"V");u&&(u.textContent=c(h)),(l==="bloom"||l==="exposure"||l==="env")&&(e[l]=h,e.preset="custom",this.applyGraphics())}),t(a).addEventListener("change",()=>{e[l]=Number(t(a).value),r()});t("gDmg").addEventListener("change",()=>{this.settings.dmgNumbers=t("gDmg").checked,this.saveSettings()}),this.syncGraphicsUI=s,s()}segmentify(t,e){let n=t.dataset.seg,i=document.createElement("div");i.className="seg"+(n==="map"||n==="mode"?" cards "+n:""),i.setAttribute("role","radiogroup");let s=[...t.options].map(a=>{let l=document.createElement("button");l.type="button",l.setAttribute("role","radio");let c=e&&e(a.value);return c?l.innerHTML=`<b>${a.textContent}</b><span>${c}</span>`:l.textContent=a.textContent,n==="map"&&a.value==="spin"?l.style.backgroundImage="linear-gradient(180deg, rgba(4,8,16,0.2), rgba(4,8,16,0.92)), radial-gradient(circle at 50% 50%, transparent 0 34%, rgba(159,232,255,0.25) 35% 37%, transparent 38% 60%, rgba(159,232,255,0.12) 61% 63%, transparent 64%), linear-gradient(135deg, #141c26, #0b1018)":n==="map"&&(l.style.backgroundImage=a.value==="yard"?"linear-gradient(180deg, rgba(4,8,16,0.2), rgba(4,8,16,0.92)), radial-gradient(circle at 75% 120%, #3b6fb0 0 30%, transparent 31%), radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 60% 20%, #fff, transparent), radial-gradient(1px 1px at 40% 60%, #cde, transparent), linear-gradient(135deg, #070b14, #0c1424)":"linear-gradient(180deg, rgba(4,8,16,0.2), rgba(4,8,16,0.92)), repeating-linear-gradient(90deg, rgba(159,232,255,0.08) 0 2px, transparent 2px 38px), repeating-linear-gradient(0deg, rgba(159,232,255,0.06) 0 2px, transparent 2px 38px), linear-gradient(135deg, #1a2430, #0d141c)"),l.addEventListener("click",()=>{t.value=a.value,t.dispatchEvent(new Event("change")),r()}),i.append(l),l}),r=()=>s.forEach((a,l)=>{let c=t.options[l].value===t.value;a.classList.toggle("on",c),a.setAttribute("aria-checked",c)});t.refreshSeg=r,t.classList.add("hidden-select"),t.after(i),r()}setupMenuChrome(){let t=r=>document.getElementById(r),e=[...document.querySelectorAll(".tab")];e.forEach(r=>r.addEventListener("click",()=>{e.forEach(a=>a.classList.toggle("active",a===r)),document.querySelectorAll(".pane").forEach(a=>a.classList.toggle("active",a.dataset.pane===r.dataset.tab)),this.audio.init(),this.audio.play("mode")}));let n={optMap:r=>Ci[r].desc,optMode:r=>Ar[Number(r)]};document.querySelectorAll("select[data-seg]").forEach(r=>this.segmentify(r,n[r.id]));let i=this.settings,s=()=>{let r=t("matchSummary");r&&(r.innerHTML=`<span>MAP <b>${Ci[i.map].name.toUpperCase()}</b></span><span>BOTS <b>${i.difficulty.toUpperCase()}</b></span><span><b>${i.teamSize}V${i.teamSize}</b></span><span>FIRST TO <b>${i.scoreLimit}</b></span><span>LOADOUT <b>${i.loadout.map(a=>tn[a].short).join(" + ")}</b></span>`)};for(let r of["optMap","optDiff","optTeam","optScore","optPri","optSec"]){let a=t(r);a&&a.addEventListener("change",s)}this.refreshSummary=s,s(),window.addEventListener("keydown",r=>{(r.code==="Enter"||r.code==="NumpadEnter")&&this.state==="menu"&&!this.input.capture&&(r.preventDefault(),this.audio.init(),this.newMatch())})}setupLoadoutUI(){let t=this.settings,e=[["optPri","optSec"],["optPri2","optSec2"]],n=()=>{for(let[i,s]of e){let r=document.getElementById(i),a=document.getElementById(s);r&&(r.value=t.loadout[0]),a&&(a.value=t.loadout[1])}for(let i of["loadoutDesc","loadoutDesc2"]){let s=document.getElementById(i),r=t.loadout.reduce((a,l)=>a+tn[l].mass,0).toFixed(1);s&&(s.textContent=i==="loadoutDesc"?`Carried weapon mass ${r} kg. Heavier loadouts accelerate a little slower on the same thrusters. Pick a slot, then a weapon.`:t.loadout.map(a=>`${tn[a].short}: ${Gc[a]}`).join("  \xB7  ")+`  (${r} kg)`)}};for(let[i,s]of e)for(let[r,a]of[[i,0],[s,1]]){let l=document.getElementById(r);l&&(l.innerHTML=Ws.map(c=>`<option value="${c}">${tn[c].name}</option>`).join(""),l.addEventListener("change",()=>{let c=1-a;t.loadout[c]===l.value&&(t.loadout[c]=t.loadout[a]),t.loadout[a]=l.value,this.saveSettings(),n(),this.state==="paused"&&this.hud.message("LOADOUT CHANGES ON NEXT DEPLOY","#ffcc4d",2.5)}))}n(),this.buildWeaponCards(n)}buildWeaponCards(t){let e=document.getElementById("wgrid");if(!e)return;let n=this.settings;this.activeSlot=this.activeSlot||0;let i=r=>{let a=r.kind==="pellets"?r.dmg*r.pellets:r.kind==="beam"?r.dps*1.2:r.dmg,l=r.rpm,c=r.kind==="beam"?1:r.kind==="rocket"?.55:Math.min(1,r.speed/420),h=r.ejecta!=null?r.ejecta:r.projMass?r.projMass*r.speed:0;return[["DAMAGE",Math.min(1,a/110)],["FIRE RATE",Math.min(1,l/1200)],["VELOCITY",c],["RECOIL",Math.min(1,h/100)],["MASS",Math.min(1,r.mass/7)]]},s=()=>{e.innerHTML="";for(let r of Ws){let a=tn[r],l=n.loadout.indexOf(r),c=document.createElement("button");c.type="button",c.className="wcard"+(l>=0?" eq":""),c.innerHTML=`<span class="badge${l>=0?"":" none"}">${l===0?"PRIMARY":l===1?"SECONDARY":"\u2014"}</span><span class="wn">${a.name}</span><span class="wb">${Gc[r]}</span>`+i(a).map(([h,u])=>`<span class="stat">${h}<i style="--v:${Math.round(u*100)}%"></i></span>`).join(""),c.addEventListener("click",()=>{let h=this.activeSlot,u=1-h;n.loadout[u]===r&&(n.loadout[u]=n.loadout[h]),n.loadout[h]=r,this.saveSettings();for(let d of["optPri","optSec","optPri2","optSec2"]){let f=document.getElementById(d);f&&(f.value=n.loadout[d.startsWith("optPri")?0:1])}t(),s(),this.refreshSummary&&this.refreshSummary(),this.audio.init(),this.audio.play("reload")}),e.append(c)}for(let r of[0,1]){let a=document.getElementById("slot"+r),l=document.getElementById("slot"+r+"n");l&&(l.textContent=tn[n.loadout[r]].name),a&&a.classList.toggle("on",this.activeSlot===r)}};for(let r of[0,1]){let a=document.getElementById("slot"+r);a&&a.addEventListener("click",()=>{this.activeSlot=r,s()})}s()}botLoadout(t){let e=this.settings,n=yd[this.world.mapId]||yd.hangar,i=Object.values(this.weaponKills).reduce((d,f)=>d+f,0),s=t.bot?t.bot.role:"anchor",r={};for(let d of Ws){let f=n[d];e.teamSize>=6&&(d==="gyrojet"||d==="recoilless")&&(f*=1.2),e.difficulty==="elite"&&(d==="rifle"||d==="maser")&&(f*=1.2),e.difficulty==="easy"&&d==="shotgun"&&(f*=1.2),s==="rusher"&&d==="shotgun"&&(f*=1.6),s==="anchor"&&(d==="rifle"||d==="gyrojet"||d==="recoilless")&&(f*=1.3),s==="flanker"&&(d==="maser"||d==="rifle")&&(f*=1.2),f*=1+2.5*(this.weaponKills[d]||0)/(i+6),r[d]=f}let a=(d,f)=>{let m=Ws.filter(p=>p!==f),x=0;for(let p of m)x+=d[p];let g=Math.random()*x;for(let p of m)if(g-=d[p],g<=0)return p;return m[0]},l={...r};l.shotgun*=s==="rusher"?1:.35;let c=a(l,null),h={...r};for(let d of Ws)h[d]*=_d.has(c)?d==="shotgun"?2.2:.6:_d.has(d)?1.4:1;let u=a(h,c);return[c,u]}buildBindUI(){let t=document.getElementById("binds");if(!t)return;let e=this.settings;t.innerHTML="";for(let[s,r]of bd){let a=document.createElement("div");a.className="bind";let l=document.createElement("span");l.textContent=r;let c=document.createElement("button");c.className="key",c.type="button",c.id="bind_"+s,c.textContent=e.binds[s]?Md(e.binds[s]):"unbound",e.binds[s]||c.classList.add("unbound"),c.addEventListener("click",()=>{c.textContent="press key / button\u2026",c.classList.add("wait"),this.input.capture=h=>{if(c.classList.remove("wait"),h==="Backspace"||h==="Delete")e.binds[s]="",this.saveSettings();else if(h!=="Escape"){for(let u of Object.keys(e.binds))e.binds[u]===h&&u!==s&&(e.binds[u]=e.binds[s]);e.binds[s]=h,this.saveSettings()}this.buildBindUI(),this.setupLoadoutUI(),this.setupMenuChrome()}}),a.append(l,c),t.append(a)}let n=document.createElement("div");n.className="bindnote",n.textContent="Click a binding, then press a key, mouse button or scroll the wheel. Backspace clears it, Esc cancels. Fixed: mouse movement turns your body, Esc pauses.",t.append(n);let i=document.getElementById("btnResetBinds");i&&!i._wired&&(i._wired=!0,i.addEventListener("click",()=>{e.binds={...xd},this.saveSettings(),this.buildBindUI()}))}applySettings(){this.audio.setVolume(this.settings.volume),this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.player&&(this.player.mode=this.settings.mode)}lock(){let t=()=>{this.input.forceMouse||(this.input.forceMouse=!0,this.state==="playing"&&this.hud.message("POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES","#ffcc4d",4))};try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(t)}catch{t()}}onLockChange(){!(document.pointerLockElement===this.canvas)&&this.state==="playing"&&!this.input.forceMouse&&this.pause(),this.ui.lock.style.display="none"}show(t){for(let e of["main","pause","end"])this.ui[e].style.display=e===t?"flex":"none"}pause(){this.state==="playing"&&(this.state="paused",this.show("pause"))}resume(){this.state="playing",this.show(null),this.lock(),this.last=performance.now()}toMenu(){this.state="menu",this.show("main"),document.pointerLockElement&&document.exitPointerLock(),this.clearMatch()}clearMatch(){for(let t of this.soldiers)this.scene.remove(t.model.root);for(let t of this.combat.projectiles)t.mesh&&this.scene.remove(t.mesh);for(let t of this.combat.grenades)this.scene.remove(t.mesh);this.combat.projectiles.length=0,this.combat.grenades.length=0,this.soldiers=[],this.bots=[],this.player=null,this.intel=[new Map,new Map]}newMatch(){this.clearMatch();let t=this.settings;this.world.mapId!==t.map&&(this.world.dispose(),this.world=new Er(this.scene,t.map),this.buildGrid(),this.applyGraphics()),this.applySettings(),this.teamScore=[0,0],this.weaponKills={},this.buildPickups(),this.endT=0,this.scoreLimit=t.scoreLimit,this.timeLimit=10*60,this.matchTime=0;let e=Xx.slice().sort(()=>Math.random()-.5);this.player=new Tr(this,0,"YOU",!0),this.player.mode=t.mode,this.adsToggled=!1,this.soldiers.push(this.player);let n=0;for(let i=0;i<2;i++){let s=i===0?t.teamSize-1:t.teamSize;for(let r=0;r<s;r++){let a=new Tr(this,i,e[n++%e.length]);a.mode=2,this.soldiers.push(a),this.bots.push(new ua(this,a,t.difficulty,r+i))}}for(let i of this.soldiers)this.respawn(i,!0);this.state="playing",this.show(null),this.hud.feed=[],this.hud.msgs=[],this.hud.message("TEAM DEATHMATCH \u2013 ZERO-G","#9fe8ff",3,!0),this.hud.message(`RCS MODE: ${Xs[this.player.mode]}`,"#ffcc4d",3),this.lock();try{this.renderer.compile(this.scene,this.camera)}catch{}this.gfx.setupShadows(this.world),this.last=performance.now()}buildPickups(){if(this.pickups)for(let n of this.pickups)this.scene.remove(n.mesh);let t=new Nt({color:3949644,roughness:.5,metalness:.7}),e=new qt({color:new et(8257434).multiplyScalar(2)});this.pickups=this.world.pickupSpots.map(n=>{let i=new Ae,s=new ut(new ye(.7,.45,.45),t);i.add(s);for(let a of[-.25,.25]){let l=new ut(new ye(.06,.47,.47),e);l.position.x=a,i.add(l)}let r=new ut(new yn(.75,.02,6,32),e);return r.rotation.x=Math.PI/2,i.add(r),i.position.copy(n),this.scene.add(i),{pos:n,mesh:i,ring:r,cool:0}})}updatePickups(t){for(let e of this.pickups){e.cool=Math.max(0,e.cool-t);let n=e.cool<=0;if(e.mesh.rotation.y+=t*.8,e.mesh.scale.setScalar(n?1+Math.sin(this.time*3)*.04:.55),e.ring.visible=n,!!n){for(let i of this.soldiers)if(!(!i.alive||i.pos.distanceTo(e.pos)>1.9||!(i.weapons.some(r=>r.def.kind!=="beam"&&r.reserve<r.def.reserve)||i.grenades<2))){for(let r of i.weapons)r.reserve=Math.max(r.reserve,r.def.reserve);i.grenades=2,e.cool=20,i.isPlayer&&(this.hud.message("AMMO RESUPPLIED","#7dff9a",1.6),this.audio.play("reload")),this.fx.sparks(e.pos,12,null,3,new et(8257434));break}}}}updateSpawnShields(t){let e=this.world;for(let n of this.soldiers){if(!n.alive)continue;let i=1-n.team;if(!e.inSpawn(n.pos,i)){n.isPlayer&&(this.inEnemySpawn=!1);continue}let s=i===0?1:-1;n.vel.x+=s*14*t,n.vel.x*s<2&&(n.vel.x=s*2),n.grab&&this.releaseGrab(n),this.damage(n,35*t,null,"spawn shield"),e.barriers[i].mat.uniforms.flash.value=1,n.isPlayer&&!this.inEnemySpawn&&(this.inEnemySpawn=!0,this.hud.message("ENEMY SPAWN SHIELD \u2013 GET OUT","#ff4b3a",1.5))}}respawn(t,e=!1){let n=this.world.spawns[t.team],i=n[0],s=-1/0;for(let a of n){let l=999;for(let h of this.soldiers)if(h.alive&&h!==t){let u=h.pos.distanceTo(a);h.team!==t.team?l=Math.min(l,u):u<2&&(l=Math.min(l,u*10))}let c=l+Math.random()*8;c>s&&(s=c,i=a)}let r=new v(t.team===0?1:-1,0,0);t.loadout=t.isPlayer?[...this.settings.loadout]:this.botLoadout(t),t.spawn(i,r),t.oobT=0,t.mode=t.isPlayer?this.settings.mode:2,t.killedBy=null,t.bot&&t.bot.onSpawn(),t.isPlayer&&!e&&this.audio.play("spawn")}distToListener(t){return this.camera.position.distanceTo(t)}reportIntel(t,e,n){let i=this.intel[t],s=i.get(e.id);s||(s={pos:new v,vel:new v,t:0,e},i.set(e.id,s)),s.pos.copy(e.pos),s.vel.copy(e.vel),s.t=this.time}onShot(t,e){let n=e.kind==="rocket"?70:e.kind==="pellets"?55:48;for(let i of this.bots)i.hear(t,t.pos,n);this.audio.play(e.sound,t.isPlayer?0:this.distToListener(t.pos)),t.isPlayer&&(this.vmKick=(this.vmKick||0)+(e.kind==="pellets"?.09:e.kind==="beam"?0:e.id==="recoilless"?.12:.025)),t.isPlayer&&(this.vmFlash.intensity=6)}onThrow(t,e){for(let n of this.bots)n.hear(t,e,20)}onExplosion(t,e){for(let n of this.bots)n.hear(e,t,80)}onImpact(t,e,n,i){this.audio.play(e>5?"impact":"clank",t.isPlayer?0:this.distToListener(t.pos));let s=e>Li;if(n&&e>3&&(this.fx.sparks(n,Math.round(4+e*(s?4:1.5)),i,2+e*.6),s&&(this.fx.suitHit(n,i,t.vel),this.fx.alpha.spawn(n,null,new et(9080985),.6,1.2,{grow:3,alpha:.4}))),t.isPlayer){e>3&&this.hud.message(`IMPACT ${e.toFixed(1)} m/s`,s?"#ff4b3a":"#ffcc4d",1.2);let r=s?.4+(e-Li)*.12:(e-1.2)*.04;this.shake=Math.max(this.shake||0,Math.min(1,r)),s&&this.hud.impact(r)}}damageTower(t,e,n){if(!this.rules.thrusterDamage)return;let i=t.towers[e];if(!(i.dead||!t.alive)&&(i.hp-=n,i.hp<=0)){i.dead=!0,i.hp=0;let s=dn[e].pos.clone().applyQuaternion(t.quat).add(t.pos);this.fx.sparks(s,25,null,6),this.fx.gasJet(s,new v().randomDirection(),t.vel,3),t.applyImpulse(new v().randomDirection().multiplyScalar(25),s),t.isPlayer&&(this.hud.message(`THRUSTER QUAD ${["UL","UR","LL","LR"][e]} DESTROYED \u2013 EXPECT COUPLED SPIN`,"#ff4b3a",3),this.audio.play("warn"))}}damage(t,e,n,i,s,r){if(!t.alive||t.spawnProtect>0&&i!=="hypoxia"||n&&n.team!==t.team&&this.world.inSpawn(t.pos,t.team))return;t.health-=e,t.lastDamageT=this.time,n&&n!==t&&(t.lastAttacker=n,t.lastAttackerT=this.time),t.bot&&t.bot.onDamaged(n);let a=t.health<=0;n===this.player&&t!==this.player&&e>.3&&(this.hud.hit(r==="head",a),this.settings.dmgNumbers&&this.hud.damageNumber(t,s||t.pos,e,r==="head",a),this.audio.play(a?"kill":r==="head"?"head":"hit")),t===this.player&&e>.5&&i!=="hypoxia"&&(this.hud.damageFrom(n?n.pos:s),this.audio.play("hurt")),a&&this.kill(t,n,i,r==="head")}kill(t,e,n,i){t.alive=!1,t.health=0,t.deaths++,t.respawnT=4,t.leaks=[],t.grab=null;let s=e&&e!==t?e:null;!s&&t.lastAttacker&&this.time-(t.lastAttackerT||0)<6&&(s=t.lastAttacker),s&&s.team!==t.team&&(s.kills++,s.score+=100,tn[n]&&(this.weaponKills[n]=(this.weaponKills[n]||0)+1),this.teamScore[s.team]++,s.isPlayer&&this.hud.message(`ELIMINATED ${t.name}${i?" \u2013 HEADSHOT":""}`,"#ff4b3a",1.8)),t.killedBy=s,t.killCause=n,this.hud.kill(s,t,n,i),t.bot&&(t.bot.target=null);for(let r of this.intel)r.delete(t.id);(this.teamScore[0]>=this.scoreLimit||this.teamScore[1]>=this.scoreLimit)&&setTimeout(()=>this.endMatch(),1200)}endMatch(){this.state!=="playing"&&this.state!=="paused"||(this.state="ending",this.endT=0,this.show(null),this.endWon=this.teamScore[0]>this.teamScore[1]?0:this.teamScore[1]>this.teamScore[0]?1:-1,this.audio.play(this.endWon===0?"kill":"warn"))}tickEnding(t){this.endT+=t;let e=t*Math.max(.12,1-this.endT*.6);this.time+=e;for(let i of this.bots)i.update(e);this.acc+=e;let n=0;for(;this.acc>=$s&&n<4;)this.substep($s),this.acc-=$s,n++;for(let i of this.soldiers)i.alive&&i.update(e);this.endT>3.2&&this.finishMatch()}finishMatch(){this.state="ended",document.pointerLockElement&&document.exitPointerLock();let t=this.endWon;document.getElementById("endTitle").textContent=t===0?"VICTORY":t===1?"DEFEAT":"DRAW",document.getElementById("endTitle").style.color=t===0?"#3f8cff":t===1?"#ff8a2a":"#e9eef2",document.getElementById("endScore").textContent=`${this.teamScore[0]} \u2013 ${this.teamScore[1]}`,document.getElementById("endBoard").innerHTML=this.boardHTML(),this.show("end");let e=this.ui.end;e.classList.remove("reveal"),e.offsetWidth,e.classList.add("reveal"),e.querySelectorAll("tr").forEach((n,i)=>{n.style.animationDelay=.5+i*.05+"s"})}boardHTML(){let t="";for(let e of[0,1]){let n=this.soldiers.filter(i=>i.team===e).sort((i,s)=>s.kills-i.kills||i.deaths-s.deaths);t+=`<div class="bteam" style="--tc:${"#"+fn[e].toString(16).padStart(6,"0")}"><div class="bhead"><b>${sa[e]}</b><span>${this.teamScore[e]}</span></div>`,t+="<table><tr><th>CALLSIGN</th><th>LOADOUT</th><th>K</th><th>D</th><th>\u0394v</th></tr>";for(let i of n)t+=`<tr class="${i.isPlayer?"me":""}${i.alive?"":" dead"}"><td>${i.name}</td><td class="lo">${(i.loadout||[]).map(s=>tn[s].short).join(" + ")}</td><td>${i.kills}</td><td>${i.deaths}</td><td>${i.alive?i.dv.toFixed(0):"\u2014"}</td></tr>`;t+="</table></div>"}return t}tryGrab(t){let e=this.world.nearestSurface(t.pos,rn+.85);if(!e)return!1;t.walking&&t.leaveWalk();let n=e.kind==="pod"?e.obj.vel:Pn.set(0,0,0);if(ts.subVectors(t.vel,n).length()>4.5)return t.isPlayer&&this.hud.message("TOO FAST TO GRAB","#ff4b3a",1.2),!1;if(e.kind==="pod"){let s=e.obj,r=t.mass,a=s.mass,l=t.vel.clone().multiplyScalar(r).addScaledVector(s.vel,a).divideScalar(r+a);s.vel.copy(l),t.vel.copy(l),t.grab={kind:"pod",obj:s,offset:t.pos.clone().sub(s.pos),normal:e.normal}}else t.vel.set(0,0,0),t.grab={kind:e.kind,obj:e.obj,normal:e.normal,point:e.point,dist:Math.max(rn+.05,e.dist)};return t.angVel.multiplyScalar(.2),t.holdQ=null,(t.isPlayer||this.distToListener(t.pos)<15)&&this.audio.play("grab",t.isPlayer?0:this.distToListener(t.pos)),!0}releaseGrab(t){t.grab=null,t.holdQ=null}pushOff(t,e,n){let i=t.grab;if(!i)return;let s=e.clone().normalize(),r=i.normal;if(r&&s.dot(r)<.15&&s.addScaledVector(r,-s.dot(r)+.35).normalize(),i.kind==="pod"){let a=i.obj,l=t.mass,c=a.mass;t.vel.copy(a.vel).addScaledVector(s,n*c/(l+c)),a.vel.addScaledVector(s,-n*l/(l+c))}else t.vel.copy(s).multiplyScalar(n);t.grab=null,t.holdQ=null,t.isPlayer&&this.audio.play("push")}playerControl(t){let e=this.player,n=this.input,i=e.ctrl;if(n.hit("Escape")){this.pause();return}if(!e.alive){i.move.set(0,0,0);return}this.pressedAct("adsToggle")&&(this.adsToggled=!this.adsToggled),this.bound("ads")&&(this.adsToggled=!1),e.ads=(this.bound("ads")||this.adsToggled)&&e.throwT<=0;let s=this.vmGuns[e.weapon.def.id].userData.zoom||1.5,r=.0022*this.settings.sens/(1+(s-1)*e.adsAmt);e.addAim(-n.mouse.dx*r,(this.settings.invertY?1:-1)*n.mouse.dy*r);let a=h=>this.bound(h)?1:0;if(i.move.set(a("right")-a("left"),a("up")-a("down"),a("back")-a("forward")),i.roll=a("rollLeft")-a("rollRight"),i.killRot=this.bound("killRot")||this.bound("fullStop"),i.brake=this.bound("brake")||this.bound("fullStop"),this.pressedAct("mode")&&(e.mode=(e.mode+1)%Xs.length,this.settings.mode=e.mode,this.saveSettings(),this.hud.message(`RCS MODE: ${Xs[e.mode]}`,"#ffcc4d",2.5),this.hud.message(Ar[e.mode],"#9fe8ff",3),this.audio.play("mode")),this.pressedAct("grid")&&(this.showGrid=!this.showGrid,this.hud.message(this.showGrid?"REFERENCE GRID ON":"REFERENCE GRID AUTO","#9fe8ff",1.5)),this.pressedAct("lockRef")){let h=this.hud.aimInfo;h&&(h.soldier||h.kind==="pod")&&h.obj!==e.refTarget?(e.refTarget=h.obj,this.hud.message(`VELOCITY REFERENCE: ${h.soldier?h.soldier.name:"CARGO POD"}`,"#ffcc4d",2)):(e.refTarget=null,this.hud.message("VELOCITY REFERENCE: STATION","#ffcc4d",2))}e.refTarget&&e.refTarget.alive===!1&&(e.refTarget=null),this.pressedAct("grab")&&(e.grab?this.releaseGrab(e):this.tryGrab(e)),e.grab?this.bound("pushOff")?e.pushCharge=Math.min(1,e.pushCharge+t/.6):e.pushCharge>0&&(this.pushOff(e,e.aimDir(new v),2+5*e.pushCharge),e.pushCharge=0):e.pushCharge=0;let l=e.weapons.length;for(let h=0;h<l;h++)this.pressedAct("weapon"+(h+1))&&e.switchTo(h);this.pressedAct("nextWeapon")&&e.switchTo((e.cur+1)%l),this.pressedAct("prevWeapon")&&e.switchTo((e.cur+l-1)%l),this.pressedAct("lastWeapon")&&e.lastCur!=null&&e.switchTo(e.lastCur),this.pressedAct("reload")&&e.startReload()&&this.audio.play("reload"),this.pressedAct("grenade")&&this.combat.throwGrenade(e),this.pressedAct("melee")&&this.combat.melee(e),(e.weapon.def.auto?this.bound("fire"):this.pressedAct("fire"))&&this.combat.fire(e),this.pressedAct("board")&&(this.ui.board.style.display="flex"),this.bound("board")?this.ui.board.innerHTML=this.boardHTML():this.ui.board.style.display="none"}substep(t){for(let e of this.soldiers)e.step(t);this.combat.step(t),this.world.updatePods(t,this.time),this.collideBodies()}collideBodies(){let t=this.soldiers,e=n=>n.grab&&n.grab.kind!=="pod"?0:1/n.mass;for(let n=0;n<t.length;n++){let i=t[n];for(let s=n+1;s<t.length;s++){let r=t[s],a=Pn.subVectors(r.pos,i.pos),l=a.length(),c=rn*2;if(l>=c||l<1e-5)continue;a.divideScalar(l);let h=e(i),u=e(r);if(h+u===0)continue;let d=c-l;i.pos.addScaledVector(a,-d*h/(h+u)),r.pos.addScaledVector(a,d*u/(h+u));let f=ts.subVectors(r.vel,i.vel).dot(a);if(f<0){let m=-1.3*f/(h+u);i.vel.addScaledVector(a,-m*h),r.vel.addScaledVector(a,m*u),-f>2&&this.audio.play("impact",this.distToListener(i.pos))}}for(let s of this.world.pods){if(i.grab&&i.grab.obj===s)continue;let r=Pn.subVectors(s.pos,i.pos),a=r.length(),l=rn+s.r;if(a>=l||a<1e-5)continue;r.divideScalar(a);let c=e(i),h=1/s.mass,u=l-a;i.pos.addScaledVector(r,-u*c/(c+h)),s.pos.addScaledVector(r,u*h/(c+h));let d=ts.subVectors(s.vel,i.vel).dot(r);if(d<0){let f=-1.4*d/(c+h);i.vel.addScaledVector(r,-f*c),s.vel.addScaledVector(r,f*h),-d>3&&i.alive&&this.damage(i,(-d-3)*8,null,"cargo pod",i.pos,"body")}}}}frame(t){requestAnimationFrame(n=>this.frame(n));let e=(t-this.last)/1e3;this.last=t,e>0||(e=0),e=Math.min(e,.05),this.tick(e)}tick(t){if(this.frameDt=t,this.state==="playing"){this.time+=t,this.matchTime+=t,this.playerControl(t);for(let n of this.bots)n.update(t);this.acc+=t;let e=0;for(;this.acc>=$s&&e<8;)this.substep($s),this.acc-=$s,e++;e===8&&(this.acc=0);for(let n of this.soldiers)n.alive&&!this.world.enclosed&&(this.world.outside(n.pos)>0?(n.oobT=(n.oobT||0)+t,n.oobT>5&&this.damage(n,20*t,null,"out of bounds")):n.oobT=0),n.alive?n.update(t):(n.respawnT-=t,n.respawnT<=0&&this.respawn(n));this.matchTime>=this.timeLimit&&this.endMatch(),this.updatePickups(t),this.updateSpawnShields(t),this.emitThrusterFx(t)}else this.state==="menu"&&(this.time+=t,this.world.updatePods(t,this.time));this.state==="ending"&&this.tickEnding(t),this.world.updateBarriers(this.time),this.world.omega&&this.world.space&&(this.world.space.rotation.x=-this.world.omega*this.time),this.state!=="paused"&&(this.fx.update(t,this.combat.tracerList()),this.combat.syncMeshes(t)),this.world.syncPodMeshes();for(let e of this.soldiers)e.syncModel(t);this.updateCamera(t),this.hud.draw(this.state==="paused"?0:t),this.player?this.gfx.follow(this.camera.position):this.gfx.follow(new v),this.gfx.render(),this.input.endFrame()}animateViewmodel(t,e,n){let i=e.userData,s=t.weapon,r=s.def,a=this.vmS,l=this.time,c=(P,k,B)=>{let X=Math.max(0,Math.min(1,(B-P)/(k-P)));return X*X*(3-2*X)},h=P=>Math.sin(Math.max(0,Math.min(1,P))*Math.PI),u=t.adsAmt,d=Pn.set(.17,-.16,-.34),f=new v(-i.sight.x*a,-i.sight.y*a,-(i.eyeRelief||.25)-i.sight.z*a),m=d.lerp(f,u),x=new Ne(0,0,0,"YXZ");this.vmSway.x+=(-this.input.mouse.dx*9e-4-this.vmSway.x)*Math.min(1,n*10),this.vmSway.y+=(-this.input.mouse.dy*9e-4-this.vmSway.y)*Math.min(1,n*10),this.vmMove.lerp(ts.copy(t.ctrl.move).multiplyScalar(-.012),Math.min(1,n*5));let g=1-u*.85;x.y+=this.vmSway.x*g,x.x+=this.vmSway.y*g,m.addScaledVector(this.vmMove,g),m.y+=Math.sin(l*1.4)*.002*g,m.x+=Math.cos(l*.7)*.0015*g,this.vmKick=(this.vmKick||0)*Math.exp(-n*16),m.z+=this.vmKick*(1-u*.5),x.x+=this.vmKick*1.6*(1-u*.6);let p=null,y=new v,M=!0,_=new v(-.12,-.5,-.22),A=!1,T=0,C=!1;if(s.reloadT>0&&r.reload>0){let P=1-s.reloadT/r.reload;if(r.perShell){x.z+=.38,x.x+=.14,m.y-=.02;let B=this.gunPoint(e,new v(0,-.06,-.05),m,x);p=P<.45?_.clone().lerp(B,c(.12,.45,P)):P<.7?B.clone().add(new v(0,.012*h((P-.45)/.25),-.02*c(.45,.6,P))):B.clone().lerp(_,c(.72,1,P)*.7),A=P>.12&&P<.55,m.y-=.006*h((P-.5)/.15)}else if(i.breech){x.x+=.5*h(P),m.y-=.05*h(P),x.z+=.15*h(P),P<.3?y.z=.3*c(.08,.3,P):P<.55?M=!1:y.z=.36*(1-c(.55,.85,P)),this.prevReloadR!=null&&this.prevReloadR<.3&&P>=.3&&this.ejectDebris(e,i,m,x,y,t,new v(0,.3,1.4));let B=this.gunPoint(e,i.magRest.clone().add(y),m,x);p=P<.3?null:P<.55?_.clone().lerp(B,c(.42,.55,P)):P<.88?B:null}else{let B=!!i.drum;x.z+=(B?.75:.5)*h(P),x.x+=.22*h(P),m.y-=.035*h(P),P>.08&&P<.26?y.y=-.12*c(.08,.26,P):P>=.26&&P<.55?M=!1:P>=.55&&P<.8&&(y.y=-.3*(1-c(.55,.8,P))),this.prevReloadR!=null&&this.prevReloadR<.26&&P>=.26&&this.ejectDebris(e,i,m,x,y,t,new v(0,-1.2,.2)),B&&P>.8&&P<.95&&(T=c(.8,.95,P)*Math.PI*2);let X=this.gunPoint(e,i.magRest.clone().add(y),m,x),W=_.clone().add(new v(.04,.06,-.04)),Q=this.gunPoint(e,i.magRest.clone().add(new v(0,-.3,0)),m,x);if(p=P<.08?null:P<.26?X:P<.4?X.clone().lerp(W,c(.26,.4,P)):P<.55?W.clone().lerp(Q,c(.42,.55,P)):P<.82?X.clone().add(new v(0,-.03,0)):null,C=P>.4&&P<.55,P>.8&&P<.88&&(m.y+=.014*h((P-.8)/.08)),s.emptyReload&&P>.86){let V=c(.86,.93,P)-c(.95,1,P);p=this.gunPoint(e,new v(-.05,.04,.02+.08*V),m,x),x.y+=.12*V,m.x+=.02*V}}let k=B=>this.prevReloadR!=null&&this.prevReloadR<B&&P>=B;!r.perShell&&!i.breech&&(k(.22)&&this.audio.play("magout"),k(.76)&&this.audio.play("magin"),s.emptyReload&&k(.9)&&this.audio.play("rack")),i.breech&&(k(.3)&&this.audio.play("magout"),k(.82)&&this.audio.play("magin")),r.perShell&&k(.5)&&this.audio.play("shell"),this.prevReloadR=P,this.settleT=l}else this.prevReloadR=null;let I=l-(this.settleT||-9);if(I>0&&I<.6&&s.reloadT<=0&&(x.x+=.04*Math.sin(I*18)*Math.exp(-I*7)),r.kind==="beam"&&s.overheat&&(x.z+=.35,x.x+=.22,y.x=-.035,y.z=.02,Math.random()<.5)){let P=this.camera.localToWorld(this.gunPoint(e,new v(-.06,.05,-.1),m,x));this.fx.gasJet(P,Pn.set(-1,.5,0).applyQuaternion(this.camera.quaternion),t.vel,1.5)}if(i.pump&&s.reloadT<=0){let P=l-Math.max(t.lastFireT,s.rackT||-9);y.z=.1*h((P-.12)/.35),s.rackT&&Math.abs(l-s.rackT-.2)<.02&&!s.rackSnd&&(s.rackSnd=!0,this.audio.play("rack"))}let w=!1;if(t.throwT>0){let P=1-t.throwT/ai;m.y-=.2*h(P*1.05),x.x-=.7*h(P*1.05),m.x+=.06*h(P);let k=new v(-.14,-.42,-.34),B=new v(-.19,0,-.34),X=new v(-.03,-.03,-.66);P<.15?p=k.clone():P<.4?p=k.clone().lerp(B,c(.15,.4,P)):P<.55?p=B.clone().lerp(X,c(.4,.52,P)):p=X.clone().lerp(k,c(.55,.85,P)),w=P>.12&&P<.4}if(t.meleeT>0){let P=1-t.meleeT/.35;m.z-=.22*h(P),x.y+=.45*h(P),x.z-=.35*h(P)}if(t.switchT>0){let P=t.switchT/.45;m.y-=.28*P,x.x-=.9*P}this.vmHolder.position.copy(m),this.vmHolder.quaternion.setFromEuler(x),i.mag.position.copy(i.magRest).add(y),i.mag.rotation.x=T,i.mag.visible=M,this.vmMuzzleCam=this.gunPoint(e,i.muzzle,m,x);let S=this.gunPoint(e,i.grip,m,x),L=p||this.gunPoint(e,i.pump?i.hand.clone().add(new v(0,0,y.z)):i.hand,m,x);this.placeArm(this.vmArmR,S,new v(.36,-.62,.18)),this.placeArm(this.vmArmL,L,new v(-.4,-.58,.05)),this.vmNade.visible=w,this.vmShell.visible=A,(!this.vmCarry||this.vmCarry.userData.id!==r.id)&&(this.vmCarry&&this.vm.remove(this.vmCarry),this.vmCarry=i.mag.clone(!0),this.vmCarry.userData.id=r.id,this.vmCarry.scale.setScalar(this.vmS),this.vm.add(this.vmCarry)),this.vmCarry.visible=C,C&&(this.vmCarry.position.copy(L).add(new v(0,.04,-.02)),this.vmCarry.quaternion.setFromEuler(x).multiply(Ir.setFromEuler(new Ne(.4,0,.3)))),A&&this.vmShell.position.copy(L).add(new v(.01,.03,-.03)),w&&this.vmNade.position.copy(L).add(new v(0,.035,-.04)),this.vmFlash.intensity*=Math.exp(-n*30)}dropMag(t,e){let n=t.gunMeshes[e.def.id];if(!n||this.distToListener(t.pos)>60)return;let i=n.userData.mag.clone(!0);i.visible=!0,i.position.copy(Pn.set(.13,.25,-.5).applyQuaternion(t.quat).add(t.pos)),i.quaternion.copy(t.quat);let s=ts.set(Et(-.3,.3),-1,.3).applyQuaternion(t.quat).add(t.vel);this.fx.debris(i,s.clone(),new v(Et(-4,4),Et(-4,4),Et(-4,4)),6)}ejectDebris(t,e,n,i,s,r,a){let l=this.gunPoint(t,e.magRest.clone().add(s),n,i),c=this.camera.localToWorld(l.clone()),h=e.mag.clone(!0);h.visible=!0,h.scale.setScalar(this.vmS),h.position.copy(c),h.quaternion.copy(this.camera.quaternion).multiply(Ir.setFromEuler(i));let u=a.clone().applyQuaternion(this.camera.quaternion).add(r.vel);this.fx.debris(h,u,new v(Et(-4,4),Et(-4,4),Et(-4,4)),6)}gunPoint(t,e,n,i){return e.clone().multiplyScalar(this.vmS).applyEuler(i).add(n)}placeArm(t,e,n){t.position.copy(e),t.up.set(0,1,0).applyQuaternion(this.camera.quaternion),t.lookAt(this.vm.localToWorld(n.clone()))}emitThrusterFx(t){for(let n of this.soldiers){if(!n.alive)continue;let i=this.distToListener(n.pos)<60;for(let s=0;s<4;s++)for(let r=0;r<6;r++){let a=n.throttle[s*6+r];if(a<.15||!i||Math.random()>a*.7)continue;let l=Pn.copy(dn[s].pos).applyQuaternion(n.quat).add(n.pos),c=ts.copy(wr[r]).negate().applyQuaternion(n.quat);n.isPlayer||this.fx.thrusterPuff(l,c,n.vel)}for(let s of n.leaks)if(Math.random()<.6){let r=Pn.copy(s.p).applyQuaternion(n.quat).add(n.pos);this.fx.gasJet(r,ts.copy(s.n).applyQuaternion(n.quat),n.vel)}for(let s=0;s<4;s++)n.towers[s].dead&&Math.random()<.08&&this.fx.sparks(Pn.copy(dn[s].pos).applyQuaternion(n.quat).add(n.pos),2,null,2)}let e=this.player;e&&this.audio.setHiss(e.alive?e.throttle.reduce((n,i)=>n+i,0):0)}updateCamera(t){let e=this.camera,n=this.player;if(this.state==="menu"||!n){this.menuCam+=t*.05;let c=this.world.enclosed?1:2.4,h=46*c;e.position.set(Math.cos(this.menuCam)*h,Math.sin(this.menuCam*.7)*10*c,Math.sin(this.menuCam)*26*c),e.lookAt(0,0,0),this.vm.visible=!1,this.grid.visible=!1;return}n.eye(e.position),this.shake=(this.shake||0)*Math.exp(-t*5);let i=this.vmGuns[n.weapon.def.id],s=i.userData;if(n.alive){if(n.aimQuat(e.quaternion),this.shake>.01){let h=this.shake*.06;e.position.add(Pn.set(Et(-1,1),Et(-1,1),Et(-1,1)).multiplyScalar(this.shake*.08)),e.quaternion.multiply(Ir.setFromEuler(new Ne(Et(-h,h),Et(-h,h),Et(-h,h)*2)))}let c=this.settings.fov/(1+((s.zoom||1.5)-1)*n.adsAmt);e.fov+=(c-e.fov)*Math.min(1,t*16),e.updateProjectionMatrix()}else{let c=n.killedBy;if(c){let h=new Jt().lookAt(e.position,c.pos,Pn.set(0,1,0).applyQuaternion(e.quaternion));Ir.setFromRotationMatrix(h),e.quaternion.slerp(Ir,Math.min(1,t*2))}}e.updateMatrixWorld();for(let c in this.vmGuns)this.vmGuns[c].visible=n.alive&&c===n.weapon.def.id;this.scoped=n.alive&&!!s.scope&&n.adsAmt>.9,this.vm.visible=n.alive&&!this.scoped,n.alive&&this.animateViewmodel(n,i,t);let r=n.alive&&n.angVel.length()>1.4,a=this.showGrid?.22:r?.16:0,l=this.grid.material;l.opacity+=(a-l.opacity)*Math.min(1,t*4),this.grid.visible=l.opacity>.01}};window.addEventListener("DOMContentLoaded",()=>{try{window.game=new Kc}catch(o){console.error(o),document.body.insertAdjacentHTML("beforeend",`<pre style="color:#f66;position:fixed;top:10px;left:10px;z-index:99">${o.stack}</pre>`)}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
