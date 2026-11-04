(()=>{var sc="170";var ld=0,qc=1,cd=2;var nu=1,rc=2,qn=3,gi=0,Ae=1,dn=2,Dn=0,fi=1,fn=2,Yc=3,$c=4,hd=5,Fi=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,xd=202,vd=203,Ha=204,Va=205,_d=206,yd=207,Md=208,bd=209,Sd=210,Ed=211,wd=212,Td=213,Ad=214,Ga=0,Wa=1,Xa=2,ys=3,qa=4,Ya=5,$a=6,Za=7,iu=0,Rd=1,Cd=2,pi=0,oc=1,ac=2,lc=3,pr=4,Pd=5,cc=6,hc=7;var su=300,Ms=301,bs=302,Ja=303,Ka=304,Po=306,xi=1e3,Bi=1001,Qa=1002,Sn=1003,Id=1004;var wr=1005;var Ln=1006,aa=1007;var ki=1008;var Kn=1009,ru=1010,ou=1011,or=1012,uc=1013,zi=1014,$n=1015,sn=1016,dc=1017,fc=1018,Ss=1020,au=35902,lu=1021,cu=1022,bn=1023,hu=1024,uu=1025,xs=1026,Es=1027,du=1028,pc=1029,fu=1030,mc=1031;var gc=1033,to=33776,eo=33777,no=33778,io=33779,ja=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,vl=37820,_l=37821,so=36492,yl=36494,Ml=36495,pu=36283,bl=36284,Sl=36285,El=36286;var ro=2300,wl=2301,la=2302,Zc=2400,Jc=2401,Kc=2402;var Ld=3200,Dd=3201;var mu=0,Ud=1,ui="",Ue="srgb",Ds="srgb-linear",Io="linear",te="srgb";var Qi=7680;var Qc=519,Nd=512,Fd=513,Od=514,gu=515,Bd=516,kd=517,zd=518,Hd=519,Tl=35044,$i=35048;var jc="300 es",Zn=2e3,oo=2001,vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ca=Math.PI/180,Al=180/Math.PI;function mi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[r&255]+Be[r>>8&255]+Be[r>>16&255]+Be[r>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function We(r,t,e){return Math.max(t,Math.min(e,r))}function Vd(r,t){return(r%t+t)%t}function ha(r,t,e){return(1-e)*r+e*t}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ht=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],S=i[4],y=i[7],R=i[2],T=i[5],P=i[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*S+l*T,s[6]=o*p+a*y+l*P,s[1]=c*x+h*_+u*R,s[4]=c*m+h*S+u*T,s[7]=c*p+h*y+u*P,s[2]=d*x+f*_+g*R,s[5]=d*m+f*S+g*T,s[8]=d*p+f*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ua=new Ut;function xu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gd(){let r=ao("canvas");return r.style.display="block",r}var th={};function ir(r){r in th||(th[r]=!0,console.warn(r))}function Wd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Xd(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qd(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ht={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?Io:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[Ds]:{primaries:eh,whitePoint:ih,transfer:Io,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:eh,whitePoint:ih,transfer:te,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var ji,Rl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=ao("canvas")),ji.width=t.width,ji.height=t.height;let n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yd=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(da(i[o].image)):s.push(da(i[o]))}else s=da(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function da(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,en=class r extends vi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Bi,i=Bi,s=Ln,o=ki,a=bn,l=Kn,c=r.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=mi(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=su;en.DEFAULT_ANISOTROPY=1;var oe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,R=(p+1)/2,T=(h+d)/4,P=(u+x)/4,C=(g+m)/4;return S>y&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=P/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=P/s,i=C/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ge=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let R=Math.sqrt(S),T=Math.atan2(R,p*_);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let y=a*_;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new v,oh=new ge,Hi=class{constructor(t=new v(1/0,1/0,1/0),e=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Ar.subVectors(this.max,$s),ts.subVectors(t.a,$s),es.subVectors(t.b,$s),ns.subVectors(t.c,$s),ri.subVectors(es,ts),oi.subVectors(ns,es),Ci.subVectors(ts,ns);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ci.z,Ci.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ci.z,0,-Ci.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ci.y,Ci.x,0];return!pa(e,ts,es,ns,Ar)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,ts,es,ns,Ar))?!1:(Rr.crossVectors(ri,oi),e=[Rr.x,Rr.y,Rr.z],pa(e,ts,es,ns,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hn=[new v,new v,new v,new v,new v,new v,new v,new v],_n=new v,Tr=new Hi,ts=new v,es=new v,ns=new v,ri=new v,oi=new v,Ci=new v,$s=new v,Ar=new v,Rr=new v,Pi=new v;function pa(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pi.fromArray(r,s);let a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zd=new Hi,Zs=new v,ma=new v,Vi=class{constructor(t=new v,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(ma)),this.expandByPoint(Zs.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new v,ga=new v,Cr=new v,ai=new v,xa=new v,Pr=new v,va=new v,ar=class{constructor(t=new v,e=new v(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ga.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(ga);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=ai.dot(this.direction),l=-ai.dot(Cr),c=ai.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ga).addScaledVector(Cr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,s){xa.subVectors(e,t),Pr.subVectors(n,t),va.crossVectors(xa,Pr);let o=this.direction.dot(va),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(Pr.crossVectors(ai,Pr));if(l<0)return null;let c=a*this.direction.dot(xa.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(va);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/is.setFromMatrixColumn(t,0).length(),s=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jd,t,Kd)}lookAt(t,e,n){let i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),li.crossVectors(n,je),li.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),li.crossVectors(n,je)),li.normalize(),Ir.crossVectors(je,li),i[0]=li.x,i[4]=Ir.x,i[8]=je.x,i[1]=li.y,i[5]=Ir.y,i[9]=je.y,i[2]=li.z,i[6]=Ir.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],S=n[7],y=n[11],R=n[15],T=i[0],P=i[4],C=i[8],w=i[12],b=i[1],I=i[5],z=i[9],k=i[13],G=i[2],Z=i[6],W=i[10],j=i[14],V=i[3],it=i[7],ut=i[11],bt=i[15];return s[0]=o*T+a*b+l*G+c*V,s[4]=o*P+a*I+l*Z+c*it,s[8]=o*C+a*z+l*W+c*ut,s[12]=o*w+a*k+l*j+c*bt,s[1]=h*T+u*b+d*G+f*V,s[5]=h*P+u*I+d*Z+f*it,s[9]=h*C+u*z+d*W+f*ut,s[13]=h*w+u*k+d*j+f*bt,s[2]=g*T+x*b+m*G+p*V,s[6]=g*P+x*I+m*Z+p*it,s[10]=g*C+x*z+m*W+p*ut,s[14]=g*w+x*k+m*j+p*bt,s[3]=_*T+S*b+y*G+R*V,s[7]=_*P+S*I+y*Z+R*it,s[11]=_*C+S*z+y*W+R*ut,s[15]=_*w+S*k+y*j+R*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,T=e*_+n*S+i*y+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return t[0]=_*P,t[1]=(x*d*s-u*m*s-x*i*f+n*m*f+u*i*p-n*d*p)*P,t[2]=(a*m*s-x*l*s+x*i*c-n*m*c-a*i*p+n*l*p)*P,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*P,t[4]=S*P,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*P,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*P,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*P,t[8]=y*P,t[9]=(g*u*s-h*x*s-g*n*f+e*x*f+h*n*p-e*u*p)*P,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*p+e*a*p)*P,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=R*P,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*P,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*P,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,x=o*h,m=o*u,p=a*u,_=l*c,S=l*h,y=l*u,R=n.x,T=n.y,P=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+y)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+S)*P,i[9]=(m-_)*P,i[10]=(1-(d+x))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=is.set(i[0],i[1],i[2]).length(),o=is.set(i[4],i[5],i[6]).length(),a=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/s,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Zn){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===Zn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===oo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Zn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h,g,x;if(a===Zn)g=(o+s)*u,x=-2*u;else if(a===oo)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new v,yn=new ne,Jd=new v(0,0,0),Kd=new v(1,1,1),li=new v,Ir=new v,je=new v,ah=new ne,lh=new ge,Fe=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fe.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qd=0,ch=new v,ss=new ge,Gn=new ne,Lr=new v,Js=new v,jd=new v,tf=new ge,hh=new v(1,0,0),uh=new v(0,1,0),dh=new v(0,0,1),fh={type:"added"},ef={type:"removed"},rs={type:"childadded",child:null},_a={type:"childremoved",child:null},De=class r extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new v,e=new Fe,n=new ge,i=new v(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ut}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Js,Lr,this.up):Gn.lookAt(Lr,Js,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Gn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ef),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};De.DEFAULT_UP=new v(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new v,Wn=new v,ya=new v,Xn=new v,os=new v,as=new v,ph=new v,Ma=new v,ba=new v,Sa=new v,Ea=new oe,wa=new oe,Ta=new oe,di=class r{constructor(t=new v,e=new v,n=new v){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Mn.subVectors(i,e),Wn.subVectors(n,e),ya.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Wn),l=Mn.dot(ya),c=Wn.dot(Wn),h=Wn.dot(ya),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ea.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ea,s.x),o.addScaledVector(wa,s.y),o.addScaledVector(Ta,s.z),o}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),Wn.subVectors(t,e),Mn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;os.subVectors(i,n),as.subVectors(s,n),Ma.subVectors(t,n);let l=os.dot(Ma),c=as.dot(Ma);if(l<=0&&c<=0)return e.copy(n);ba.subVectors(t,i);let h=os.dot(ba),u=as.dot(ba);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(os,o);Sa.subVectors(t,s);let f=os.dot(Sa),g=as.dot(Sa);if(g>=0&&f<=g)return e.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(as,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ph.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ph,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Aa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=Vd(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Aa(o,s,t+1/3),this.g=Aa(o,s,t),this.b=Aa(o,s,t-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Ht.fromWorkingColorSpace(ke.copy(this),t),Math.round(We(ke.r*255,0,255))*65536+Math.round(We(ke.g*255,0,255))*256+Math.round(We(ke.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,i=ke.g,s=ke.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ue){Ht.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,i=ke.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Dr);let n=ha(ci.h,Dr.h,e),i=ha(ci.s,Dr.s,e),s=ha(ci.l,Dr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new ot;ot.NAMES=vu;var nf=0,Un=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=mi(),this.name="",this.blending=fi,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Va,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ie=class extends Un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new v,Ur=new ht,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}};var uo=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fo=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}},sf=0,un=new ne,Ra=new De,ls=new v,tn=new Hi,Ks=new Hi,Le=new v,le=class r extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(tn.min,Ks.min),tn.expandByPoint(Le),Le.addVectors(tn.max,Ks.max),tn.expandByPoint(Le)):(tn.expandByPoint(Ks.min),tn.expandByPoint(Ks.max))}tn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Le.add(ls)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new v,l[C]=new v;let c=new v,h=new v,u=new v,d=new ht,f=new ht,g=new ht,x=new v,m=new v;function p(C,w,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(x),a[w].add(x),a[b].add(x),l[C].add(m),l[w].add(m),l[b].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,w=_.length;C<w;++C){let b=_[C],I=b.start,z=b.count;for(let k=I,G=I+z;k<G;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let S=new v,y=new v,R=new v,T=new v;function P(C){R.fromBufferAttribute(i,C),T.copy(R);let w=a[C];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(T,w);let I=y.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,I)}for(let C=0,w=_.length;C<w;++C){let b=_[C],I=b.start,z=b.count;for(let k=I,G=I+z;k<G;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new v,s=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mh=new ne,Ii=new ar,Nr=new Vi,gh=new v,Fr=new v,Or=new v,Br=new v,Ca=new v,kr=new v,xh=new v,zr=new v,mt=class extends De{constructor(t=new le,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Ca.fromBufferAttribute(u,t),o?kr.addScaledVector(Ca,h):kr.addScaledVector(Ca.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Ii.copy(t.ray).recast(t.near),!(Nr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Nr,gh)===null||Ii.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=S;y<R;y+=3){let T=a.getX(y),P=a.getX(y+1),C=a.getX(y+2);i=Hr(this,p,t,n,c,h,u,T,P,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Hr(this,o,t,n,c,h,u,_,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=S;y<R;y+=3){let T=y,P=y+1,C=y+2;i=Hr(this,p,t,n,c,h,u,T,P,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,S=m+1,y=m+2;i=Hr(this,o,t,n,c,h,u,_,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function rf(r,t,e,n,i,s,o,a){let l;if(t.side===Ae?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===gi,a),l===null)return null;zr.copy(a),zr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:r}}function Hr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Fr),r.getVertexPosition(l,Or),r.getVertexPosition(c,Br);let h=rf(r,t,e,n,Fr,Or,Br,xh);if(h){let u=new v;di.getBarycoord(xh,Fr,Or,Br,u),i&&(h.uv=di.getInterpolatedAttribute(i,a,l,c,u,new ht)),s&&(h.uv1=di.getInterpolatedAttribute(s,a,l,c,u,new ht)),o&&(h.normal=di.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new v,materialIndex:0};di.getNormal(Fr,Or,Br,d.normal),h.face=d,h.barycoord=u}return h}var Se=class r extends le{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(x,m,p,_,S,y,R,T,P,C,w){let b=y/P,I=R/C,z=y/2,k=R/2,G=T/2,Z=P+1,W=C+1,j=0,V=0,it=new v;for(let ut=0;ut<W;ut++){let bt=ut*I-k;for(let kt=0;kt<Z;kt++){let ae=kt*b-z;it[x]=ae*_,it[m]=bt*S,it[p]=G,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(kt/P),u.push(1-ut/C),j+=1}}for(let ut=0;ut<C;ut++)for(let bt=0;bt<P;bt++){let kt=d+bt+Z*ut,ae=d+bt+Z*(ut+1),q=d+(bt+1)+Z*(ut+1),tt=d+(bt+1)+Z*ut;l.push(kt,ae,tt),l.push(ae,q,tt),V+=6}a.addGroup(f,V,w),f+=V,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(r){let t={};for(let e=0;e<r.length;e++){let n=ws(r[e]);for(let i in n)t[i]=n[i]}return t}function of(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _u(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var yi={clone:ws,merge:Ge},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},po=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new v,vh=new ht,_h=new ht,ze=class extends po{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,vh,_h),e.subVectors(_h,vh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ca*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,hs=1,Il=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ze(cs,hs,t,e);i.layers=this.layers,this.add(i);let s=new ze(cs,hs,t,e);s.layers=this.layers,this.add(s);let o=new ze(cs,hs,t,e);o.layers=this.layers,this.add(o);let a=new ze(cs,hs,t,e);a.layers=this.layers,this.add(a);let l=new ze(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new ze(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},mo=class extends en{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ll=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new mo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Se(5,5,5),s=new xe({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:Dn});s.uniforms.tEquirect.value=e;let o=new mt(i,s),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=Ln),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Pa=new v,cf=new v,hf=new Ut,Yn=class{constructor(t=new v(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Pa.subVectors(n,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hf.getNormalMatrix(t),i=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new Vi,Vr=new v,lr=class{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,s=new Yn,o=new Yn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+o,d+h,m+g,y+_).normalize(),n[3].setComponents(l-o,d-h,m-g,y-_).normalize(),n[4].setComponents(l-a,d-u,m-x,y-S).normalize(),e===Zn)n[5].setComponents(l+a,d+u,m+x,y+S).normalize();else if(e===oo)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function uf(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var pn=class r extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let S=0;S<c;S++){let y=S*u-s;g.push(y,-_,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let S=_+c*p,y=_+c*(p+1),R=_+1+c*(p+1),T=_+1+c*p;f.push(S,y,T),f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Bm=`#define TOON
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
}`,km=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:xf,aomap_fragment:vf,aomap_pars_fragment:_f,batching_pars_vertex:yf,batching_vertex:Mf,begin_vertex:bf,beginnormal_vertex:Sf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:kf,emissivemap_fragment:zf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:$f,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Kf,fog_pars_fragment:Qf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:xp,map_fragment:vp,map_pars_fragment:_p,map_particle_fragment:yp,map_particle_pars_fragment:Mp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Ep,morphcolor_vertex:wp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:kp,packing:zp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Gp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:$p,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Kp,skinning_pars_vertex:Qp,skinning_vertex:jp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:xm,depth_frag:vm,distanceRGBA_vert:_m,distanceRGBA_frag:ym,equirect_vert:Mm,equirect_frag:bm,linedashed_vert:Sm,linedashed_frag:Em,meshbasic_vert:wm,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:km,points_frag:zm,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Gm,sprite_frag:Wm},et={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Pn={basic:{uniforms:Ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ge([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ge([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ge([et.points,et.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ge([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ge([et.common,et.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ge([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ge([et.sprite,et.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ge([et.common,et.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ge([et.lights,et.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Pn.physical={uniforms:Ge([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Gr={r:0,b:0,g:0},Di=new Fe,Xm=new ne;function qm(r,t,e,n,i,s,o){let a=new ot(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?e:t).get(S)),S}function x(_){let S=!1,y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,S){let y=g(S);y&&(y.isCubeTexture||y.mapping===Po)?(h===void 0&&(h=new mt(new Se(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:ws(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Di.copy(S.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Di)),h.material.toneMapped=Ht.getTransfer(y.colorSpace)!==te,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mt(new pn(2,2),new xe({name:"BackgroundMaterial",uniforms:ws(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(Gr,_u(r)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function Ym(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(b,I,z,k,G){let Z=!1,W=u(k,z,I);s!==W&&(s=W,c(s.object)),Z=f(b,k,z,G),Z&&g(b,k,z,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(b,I,z,k),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,I,z){let k=z.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let Z=G[I.id];Z===void 0&&(Z={},G[I.id]=Z);let W=Z[k];return W===void 0&&(W=d(l()),Z[k]=W),W}function d(b){let I=[],z=[],k=[];for(let G=0;G<e;G++)I[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,I,z,k){let G=s.attributes,Z=I.attributes,W=0,j=z.getAttributes();for(let V in j)if(j[V].location>=0){let ut=G[V],bt=Z[V];if(bt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(bt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(bt=b.instanceColor)),ut===void 0||ut.attribute!==bt||bt&&ut.data!==bt.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(b,I,z,k){let G={},Z=I.attributes,W=0,j=z.getAttributes();for(let V in j)if(j[V].location>=0){let ut=Z[V];ut===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor));let bt={};bt.attribute=ut,ut&&ut.data&&(bt.data=ut.data),G[V]=bt,W++}s.attributes=G,s.attributesNum=W,s.index=k}function x(){let b=s.newAttributes;for(let I=0,z=b.length;I<z;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let z=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;z[b]=1,k[b]===0&&(r.enableVertexAttribArray(b),k[b]=1),G[b]!==I&&(r.vertexAttribDivisor(b,I),G[b]=I)}function _(){let b=s.newAttributes,I=s.enabledAttributes;for(let z=0,k=I.length;z<k;z++)I[z]!==b[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function S(b,I,z,k,G,Z,W){W===!0?r.vertexAttribIPointer(b,I,z,G,Z):r.vertexAttribPointer(b,I,z,k,G,Z)}function y(b,I,z,k){x();let G=k.attributes,Z=z.getAttributes(),W=I.defaultAttributeValues;for(let j in Z){let V=Z[j];if(V.location>=0){let it=G[j];if(it===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),it!==void 0){let ut=it.normalized,bt=it.itemSize,kt=t.get(it);if(kt===void 0)continue;let ae=kt.buffer,q=kt.type,tt=kt.bytesPerElement,_t=q===r.INT||q===r.UNSIGNED_INT||it.gpuType===uc;if(it.isInterleavedBufferAttribute){let st=it.data,Tt=st.stride,It=it.offset;if(st.isInstancedInterleavedBuffer){for(let zt=0;zt<V.locationSize;zt++)p(V.location+zt,st.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let zt=0;zt<V.locationSize;zt++)m(V.location+zt);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let zt=0;zt<V.locationSize;zt++)S(V.location+zt,bt/V.locationSize,q,ut,Tt*tt,(It+bt/V.locationSize*zt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,it.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let st=0;st<V.locationSize;st++)S(V.location+st,bt/V.locationSize,q,ut,bt*tt,bt/V.locationSize*st*tt,_t)}}else if(W!==void 0){let ut=W[j];if(ut!==void 0)switch(ut.length){case 2:r.vertexAttrib2fv(V.location,ut);break;case 3:r.vertexAttrib3fv(V.location,ut);break;case 4:r.vertexAttrib4fv(V.location,ut);break;default:r.vertexAttrib1fv(V.location,ut)}}}}_()}function R(){C();for(let b in n){let I=n[b];for(let z in I){let k=I[z];for(let G in k)h(k[G].object),delete k[G];delete I[z]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let z in I){let k=I[z];for(let G in k)h(k[G].object),delete k[G];delete I[z]}delete n[b.id]}function P(b){for(let I in n){let z=n[I];if(z[b.id]===void 0)continue;let k=z[b.id];for(let G in k)h(k[G].object),delete k[G];delete z[b.id]}}function C(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function $m(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==bn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let C=P===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Kn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$n&&!C)}function l(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function Jm(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Yn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let _=s?0:n,S=_*4,y=p.clippingState||null;l.value=y,y=h(g,d,S,f);for(let R=0;R!==S;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==x;++S,y+=4)o.copy(u[S]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Km(r){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=Ms:a===Ka&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ja||a===Ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ll(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ts=class extends po{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,yh=[.125,.215,.35,.446,.526,.582],Oi=20,Ia=new Ts,Mh=new ot,La=null,Da=0,Ua=0,Na=!1,Ni=(1+Math.sqrt(5))/2,us=1/Ni,bh=[new v(-Ni,us,0),new v(Ni,us,0),new v(-us,0,Ni),new v(us,0,Ni),new v(0,Ni,-us),new v(0,Ni,us),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],As=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Da,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:sn,format:bn,colorSpace:Ds,depthBuffer:!1},i=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(s)),this._blurMaterial=jm(s,t,e)}return i}_compileMaterial(t){let e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,i){let a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mh),h.toneMapping=pi,h.autoClear=!1;let f=new ie({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new mt(new Se,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Mh),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;Wr(i,_*S,p>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ms||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bh[(i-s-1)%bh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let p=[],_=0;for(let P=0;P<Oi;++P){let C=P/x,w=Math.exp(-C*C/2);p.push(w),P===0?_+=w:P<m&&(_+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let y=this._sizeLods[i],R=3*y*(i>S-gs?i-S+gs:0),T=4*(this._cubeSize-y);Wr(e,R,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Ia)}};function Qm(r){let t=[],e=[],n=[],i=r,s=r-gs+1+yh.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-gs?l=yh[o-r+gs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let P=T%3*2/3-1,C=T>2?0:-1,w=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];_.set(w,x*g*T),S.set(d,m*g*T);let b=[T,T,T,T,T,T];y.set(b,p*g*T)}let R=new le;R.setAttribute("position",new me(_,x)),R.setAttribute("uv",new me(S,m)),R.setAttribute("faceIndex",new me(y,p)),t.push(R),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sh(r,t,e){let n=new Ne(r,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function jm(r,t,e){let n=new Float32Array(Oi),i=new v(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Eh(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function wh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function t0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ja||l===Ka,h=l===Ms||l===bs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new As(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new As(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e0(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let S=0,y=_.length;S<y;S+=3){let R=_[S+0],T=_[S+1],P=_[S+2];d.push(R,T,T,P,P,R)}}else if(g!==void 0){let _=g.array;x=g.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let R=S+0,T=S+1,P=S+2;d.push(R,T,T,P,P,R)}}else return;let m=new(xu(d)?fo:uo)(d,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r0(r,t,e){let n=new WeakMap,i=new oe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*R*4*u),P=new co(T,y,R,u);P.type=$n,P.needsUpdate=!0;let C=S*4;for(let b=0;b<u;b++){let I=m[b],z=p[b],k=_[b],G=y*R*4*b;for(let Z=0;Z<I.count;Z++){let W=Z*C;f===!0&&(i.fromBufferAttribute(I,Z),T[G+W+0]=i.x,T[G+W+1]=i.y,T[G+W+2]=i.z,T[G+W+3]=0),g===!0&&(i.fromBufferAttribute(z,Z),T[G+W+4]=i.x,T[G+W+5]=i.y,T[G+W+6]=i.z,T[G+W+7]=0),x===!0&&(i.fromBufferAttribute(k,Z),T[G+W+8]=i.x,T[G+W+9]=i.y,T[G+W+10]=i.z,T[G+W+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new ht(y,R)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function o0(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var go=class extends en{constructor(t,e,n,i,s,o,a,l,c,h=xs){if(h!==xs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=zi),n===void 0&&h===Es&&(n=Ss),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Mu=new en,Th=new go(1,1),bu=new co,Su=new Pl,Eu=new mo,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function Us(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Ah[i];if(s===void 0&&(s=new Float32Array(i),Ah[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Lo(r,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function a0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function l0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function c0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function h0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function u0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Ih.set(n),r.uniformMatrix2fv(this.addr,!1,Ih),Ie(e,n)}}function d0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Ph.set(n),r.uniformMatrix3fv(this.addr,!1,Ph),Ie(e,n)}}function f0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Ch.set(n),r.uniformMatrix4fv(this.addr,!1,Ch),Ie(e,n)}}function p0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function m0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function g0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function x0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function v0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function _0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function y0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function M0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function b0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Th.compareFunction=gu,s=Th):s=Mu,e.setTexture2D(t||s,i)}function S0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Su,i)}function E0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Eu,i)}function w0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bu,i)}function T0(r){switch(r){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return _0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function A0(r,t){r.uniform1fv(this.addr,t)}function R0(r,t){let e=Us(t,this.size,2);r.uniform2fv(this.addr,e)}function C0(r,t){let e=Us(t,this.size,3);r.uniform3fv(this.addr,e)}function P0(r,t){let e=Us(t,this.size,4);r.uniform4fv(this.addr,e)}function I0(r,t){let e=Us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function L0(r,t){let e=Us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function D0(r,t){let e=Us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function U0(r,t){r.uniform1iv(this.addr,t)}function N0(r,t){r.uniform2iv(this.addr,t)}function F0(r,t){r.uniform3iv(this.addr,t)}function O0(r,t){r.uniform4iv(this.addr,t)}function B0(r,t){r.uniform1uiv(this.addr,t)}function k0(r,t){r.uniform2uiv(this.addr,t)}function z0(r,t){r.uniform3uiv(this.addr,t)}function H0(r,t){r.uniform4uiv(this.addr,t)}function V0(r,t,e){let n=this.cache,i=t.length,s=Lo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Mu,s[o])}function G0(r,t,e){let n=this.cache,i=t.length,s=Lo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Su,s[o])}function W0(r,t,e){let n=this.cache,i=t.length,s=Lo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Eu,s[o])}function X0(r,t,e){let n=this.cache,i=t.length,s=Lo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||bu,s[o])}function q0(r){switch(r){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return k0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}var Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}},Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}},Nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Fa=/(\w+)(\])?(\[|\.)?/g;function Lh(r,t){r.seq.push(t),r.map[t.id]=t}function Y0(r,t,e){let n=r.name,i=n.length;for(Fa.lastIndex=0;;){let s=Fa.exec(n),o=Fa.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lh(e,c===void 0?new Dl(a,r,t):new Ul(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Nl(a),Lh(e,u)),e=u}}}var _s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Y0(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Dh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var $0=37297,Z0=0;function J0(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uh=new Ut;function K0(r){Ht._getMatrix(Uh,Ht.workingColorSpace,r);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(r)){case Io:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Nh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+J0(r.getShaderSource(t),o)}else return i}function Q0(r,t){let e=K0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(r,t){let e;switch(t){case oc:e="Linear";break;case ac:e="Reinhard";break;case lc:e="Cineon";break;case pr:e="ACESFilmic";break;case cc:e="AgX";break;case hc:e="Neutral";break;case Pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new v;function tg(){Ht.getLuminanceCoefficients(Xr);let r=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function ng(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ig(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function sr(r){return r!==""}function Fh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(r){return r.replace(sg,og)}var rg=new Map;function og(r,t){let e=Ft[t];if(e===void 0){let n=rg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(r){return r.replace(ag,lg)}function lg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function cg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ms:case bs:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ug(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function dg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case Rd:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function fg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pg(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cg(e),c=hg(e),h=ug(e),u=dg(e),d=fg(e),f=eg(e),g=ng(s),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==pi?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Fl(o),o=Fh(o,e),o=Oh(o,e),a=Fl(a),a=Fh(a,e),a=Oh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+m+o,y=_+p+a,R=Dh(i,i.VERTEX_SHADER,S),T=Dh(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(I){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(T).trim(),Z=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,R,T);else{let j=Nh(i,R,"vertex"),V=Nh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+j+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(W=!1);W&&(I.diagnostics={runnable:Z,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(R),i.deleteShader(T),C=new _s(i,x),w=ig(i,x)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,$0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var mg=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bl(t),e.set(t,n)),n}},Bl=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function gg(r,t,e,n,i,s,o){let a=new ho,l=new Ol,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,z,k){let G=z.fog,Z=k.geometry,W=w.isMeshStandardMaterial?z.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),V=j&&j.mapping===Po?j.image.height:null,it=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bt=ut!==void 0?ut.length:0,kt=0;Z.morphAttributes.position!==void 0&&(kt=1),Z.morphAttributes.normal!==void 0&&(kt=2),Z.morphAttributes.color!==void 0&&(kt=3);let ae,q,tt,_t;if(it){let ee=Pn[it];ae=ee.vertexShader,q=ee.fragmentShader}else ae=w.vertexShader,q=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),_t=l.getFragmentShaderID(w);let st=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,zt=k.isBatchedMesh===!0,_e=!!w.map,Yt=!!w.matcap,be=!!j,N=!!w.aoMap,cn=!!w.lightMap,Wt=!!w.bumpMap,Xt=!!w.normalMap,Et=!!w.displacementMap,de=!!w.emissiveMap,St=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,Y=w.dispersion>0,J=w.iridescence>0,X=w.sheen>0,yt=w.transmission>0,rt=M&&!!w.anisotropyMap,dt=F&&!!w.clearcoatMap,$t=F&&!!w.clearcoatNormalMap,K=F&&!!w.clearcoatRoughnessMap,ft=J&&!!w.iridescenceMap,wt=J&&!!w.iridescenceThicknessMap,Rt=X&&!!w.sheenColorMap,pt=X&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Nt=!!w.specularColorMap,ce=!!w.specularIntensityMap,L=yt&&!!w.transmissionMap,nt=yt&&!!w.thicknessMap,H=!!w.gradientMap,$=!!w.alphaMap,ct=w.alphaTest>0,at=!!w.alphaHash,Lt=!!w.extensions,ye=pi;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ye=r.toneMapping);let Oe={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:ae,fragmentShader:q,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:zt,batchingColor:zt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:_e,matcap:Yt,envMap:be,envMapMode:be&&j.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:cn,bumpMap:Wt,normalMap:Xt,displacementMap:d&&Et,emissiveMap:de,normalMapObjectSpace:Xt&&w.normalMapType===Ud,normalMapTangentSpace:Xt&&w.normalMapType===mu,metalnessMap:St,roughnessMap:A,anisotropy:M,anisotropyMap:rt,clearcoat:F,clearcoatMap:dt,clearcoatNormalMap:$t,clearcoatRoughnessMap:K,dispersion:Y,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:qt,specularColorMap:Nt,specularIntensityMap:ce,transmission:yt,transmissionMap:L,thicknessMap:nt,gradientMap:H,opaque:w.transparent===!1&&w.blending===fi&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:at,combine:w.combine,mapUv:_e&&x(w.map.channel),aoMapUv:N&&x(w.aoMap.channel),lightMapUv:cn&&x(w.lightMap.channel),bumpMapUv:Wt&&x(w.bumpMap.channel),normalMapUv:Xt&&x(w.normalMap.channel),displacementMapUv:Et&&x(w.displacementMap.channel),emissiveMapUv:de&&x(w.emissiveMap.channel),metalnessMapUv:St&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:rt&&x(w.anisotropyMap.channel),clearcoatMapUv:dt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(w.sheenRoughnessMap.channel),specularMapUv:qt&&x(w.specularMap.channel),specularColorMapUv:Nt&&x(w.specularColorMap.channel),specularIntensityMapUv:ce&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:nt&&x(w.thicknessMap.channel),alphaMapUv:$&&x(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(_e||$),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:_e&&w.map.isVideoTexture===!0&&Ht.getTransfer(w.map.colorSpace)===te,decodeVideoTextureEmissive:de&&w.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(w.emissiveMap.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===dn,flipSided:w.side===Ae,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(b,w),S(b,w),b.push(r.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let b=g[w.type],I;if(b){let z=Pn[b];I=yi.clone(z.uniforms)}else I=w.uniforms;return I}function R(w,b){let I;for(let z=0,k=h.length;z<k;z++){let G=h[z];if(G.cacheKey===b){I=G,++I.usedTimes;break}}return I===void 0&&(I=new pg(r,b,w,s),h.push(I)),I}function T(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:C}}function xg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function vg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function zh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hh(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||vg),n.length>1&&n.sort(d||zh),i.length>1&&i.sort(d||zh)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function _g(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Hh,r.set(n,[o])):i>=s.length?(o=new Hh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function yg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new v,color:new ot};break;case"SpotLight":e={position:new v,direction:new v,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new v,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new v,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new v,halfWidth:new v,halfHeight:new v};break}return r[t.id]=e,e}}}function Mg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var bg=0;function Sg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Eg(r){let t=new yg,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new v);let i=new v,s=new ne,o=new ne;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,S=0,y=0,R=0,T=0,P=0;c.sort(Sg);for(let w=0,b=c.length;w<b;w++){let I=c[w],z=I.color,k=I.intensity,G=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],k);P++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let j=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,j.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=j.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=Z,y++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let j=I.shadow,V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==S||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=S,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=P,n.version=bg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Vh(r){let t=new Eg(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wg(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Vh(r),t.set(i,[a])):s>=o.length?(a=new Vh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var kl=class extends Un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zl=class extends Un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function Rg(r,t,e){let n=new lr,i=new ht,s=new ht,o=new oe,a=new kl({depthPacking:Dd}),l=new zl,c={},h=e.maxTextureSize,u={[gi]:Ae,[Ae]:gi,[dn]:dn},d=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new le;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let p=this.type;this.render=function(T,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==qn&&this.type===qn,G=p===qn&&this.type!==qn;for(let Z=0,W=T.length;Z<W;Z++){let j=T[Z],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let it=V.getFrameExtents();if(i.multiply(it),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||k===!0||G===!0){let bt=this.type!==qn?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new Ne(i.x,i.y,bt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let ut=V.getViewportCount();for(let bt=0;bt<ut;bt++){let kt=V.getViewport(bt);o.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),z.viewport(o),V.updateMatrices(j,bt),n=V.getFrustum(),y(P,C,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&_(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,b,I)};function _(T,P){let C=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ne(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(P,null,C,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(P,null,C,f,x,null)}function S(T,P,C,w){let b=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)b=I;else if(b=C.isPointLight===!0?l:a,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let z=b.uuid,k=P.uuid,G=c[z];G===void 0&&(G={},c[z]=G);let Z=G[k];Z===void 0&&(Z=b.clone(),G[k]=Z,P.addEventListener("dispose",R)),b=Z}if(b.visible=P.visible,b.wireframe=P.wireframe,w===qn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=r.properties.get(b);z.light=C}return b}function y(T,P,C,w,b){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let k=t.update(T),G=T.material;if(Array.isArray(G)){let Z=k.groups;for(let W=0,j=Z.length;W<j;W++){let V=Z[W],it=G[V.materialIndex];if(it&&it.visible){let ut=S(T,it,w,b);T.onBeforeShadow(r,T,P,C,k,ut,V),r.renderBufferDirect(C,null,k,ut,T,V),T.onAfterShadow(r,T,P,C,k,ut,V)}}}else if(G.visible){let Z=S(T,G,w,b);T.onBeforeShadow(r,T,P,C,k,Z,null),r.renderBufferDirect(C,null,k,Z,T,null),T.onAfterShadow(r,T,P,C,k,Z,null)}}let z=T.children;for(let k=0,G=z.length;k<G;k++)y(z[k],P,C,w,b)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let w=c[C],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var Cg={[Ga]:Wa,[Xa]:$a,[qa]:Za,[ys]:Ya,[Wa]:Ga,[$a]:Xa,[Za]:qa,[Ya]:ys};function Pg(r,t){function e(){let L=!1,nt=new oe,H=null,$=new oe(0,0,0,0);return{setMask:function(ct){H!==ct&&!L&&(r.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){L=ct},setClear:function(ct,at,Lt,ye,Oe){Oe===!0&&(ct*=ye,at*=ye,Lt*=ye),nt.set(ct,at,Lt,ye),$.equals(nt)===!1&&(r.clearColor(ct,at,Lt,ye),$.copy(nt))},reset:function(){L=!1,H=null,$.set(-1,0,0,0)}}}function n(){let L=!1,nt=!1,H=null,$=null,ct=null;return{setReversed:function(at){if(nt!==at){let Lt=t.get("EXT_clip_control");nt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let ye=ct;ct=null,this.setClear(ye)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(at){H!==at&&!L&&(r.depthMask(at),H=at)},setFunc:function(at){if(nt&&(at=Cg[at]),$!==at){switch(at){case Ga:r.depthFunc(r.NEVER);break;case Wa:r.depthFunc(r.ALWAYS);break;case Xa:r.depthFunc(r.LESS);break;case ys:r.depthFunc(r.LEQUAL);break;case qa:r.depthFunc(r.EQUAL);break;case Ya:r.depthFunc(r.GEQUAL);break;case $a:r.depthFunc(r.GREATER);break;case Za:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=at}},setLocked:function(at){L=at},setClear:function(at){ct!==at&&(nt&&(at=1-at),r.clearDepth(at),ct=at)},reset:function(){L=!1,H=null,$=null,ct=null,nt=!1}}}function i(){let L=!1,nt=null,H=null,$=null,ct=null,at=null,Lt=null,ye=null,Oe=null;return{setTest:function(ee){L||(ee?st(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(ee){nt!==ee&&!L&&(r.stencilMask(ee),nt=ee)},setFunc:function(ee,xn,kn){(H!==ee||$!==xn||ct!==kn)&&(r.stencilFunc(ee,xn,kn),H=ee,$=xn,ct=kn)},setOp:function(ee,xn,kn){(at!==ee||Lt!==xn||ye!==kn)&&(r.stencilOp(ee,xn,kn),at=ee,Lt=xn,ye=kn)},setLocked:function(ee){L=ee},setClear:function(ee){Oe!==ee&&(r.clearStencil(ee),Oe=ee)},reset:function(){L=!1,nt=null,H=null,$=null,ct=null,at=null,Lt=null,ye=null,Oe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,S=null,y=null,R=null,T=null,P=new ot(0,0,0),C=0,w=!1,b=null,I=null,z=null,k=null,G=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let it=null,ut={},bt=r.getParameter(r.SCISSOR_BOX),kt=r.getParameter(r.VIEWPORT),ae=new oe().fromArray(bt),q=new oe().fromArray(kt);function tt(L,nt,H,$){let ct=new Uint8Array(4),at=r.createTexture();r.bindTexture(L,at),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<H;Lt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(nt,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(nt+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return at}let _t={};_t[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(ys),Wt(!1),Xt(qc),st(r.CULL_FACE),N(Dn);function st(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Tt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function It(L,nt){return u[L]!==nt?(r.bindFramebuffer(L,nt),u[L]=nt,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=nt),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=nt),!0):!1}function zt(L,nt){let H=f,$=!1;if(L){H=d.get(nt),H===void 0&&(H=[],d.set(nt,H));let ct=L.textures;if(H.length!==ct.length||H[0]!==r.COLOR_ATTACHMENT0){for(let at=0,Lt=ct.length;at<Lt;at++)H[at]=r.COLOR_ATTACHMENT0+at;H.length=ct.length,$=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,$=!0);$&&r.drawBuffers(H)}function _e(L){return g!==L?(r.useProgram(L),g=L,!0):!1}let Yt={[Fi]:r.FUNC_ADD,[ud]:r.FUNC_SUBTRACT,[dd]:r.FUNC_REVERSE_SUBTRACT};Yt[fd]=r.MIN,Yt[pd]=r.MAX;let be={[md]:r.ZERO,[gd]:r.ONE,[xd]:r.SRC_COLOR,[Ha]:r.SRC_ALPHA,[Sd]:r.SRC_ALPHA_SATURATE,[Md]:r.DST_COLOR,[_d]:r.DST_ALPHA,[vd]:r.ONE_MINUS_SRC_COLOR,[Va]:r.ONE_MINUS_SRC_ALPHA,[bd]:r.ONE_MINUS_DST_COLOR,[yd]:r.ONE_MINUS_DST_ALPHA,[Ed]:r.CONSTANT_COLOR,[wd]:r.ONE_MINUS_CONSTANT_COLOR,[Td]:r.CONSTANT_ALPHA,[Ad]:r.ONE_MINUS_CONSTANT_ALPHA};function N(L,nt,H,$,ct,at,Lt,ye,Oe,ee){if(L===Dn){x===!0&&(Tt(r.BLEND),x=!1);return}if(x===!1&&(st(r.BLEND),x=!0),L!==hd){if(L!==m||ee!==w){if((p!==Fi||y!==Fi)&&(r.blendEquation(r.FUNC_ADD),p=Fi,y=Fi),ee)switch(L){case fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fn:r.blendFunc(r.ONE,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $c:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $c:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,S=null,R=null,T=null,P.set(0,0,0),C=0,m=L,w=ee}return}ct=ct||nt,at=at||H,Lt=Lt||$,(nt!==p||ct!==y)&&(r.blendEquationSeparate(Yt[nt],Yt[ct]),p=nt,y=ct),(H!==_||$!==S||at!==R||Lt!==T)&&(r.blendFuncSeparate(be[H],be[$],be[at],be[Lt]),_=H,S=$,R=at,T=Lt),(ye.equals(P)===!1||Oe!==C)&&(r.blendColor(ye.r,ye.g,ye.b,Oe),P.copy(ye),C=Oe),m=L,w=!1}function cn(L,nt){L.side===dn?Tt(r.CULL_FACE):st(r.CULL_FACE);let H=L.side===Ae;nt&&(H=!H),Wt(H),L.blending===fi&&L.transparent===!1?N(Dn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),de(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){b!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),b=L)}function Xt(L){L!==ld?(st(r.CULL_FACE),L!==I&&(L===qc?r.cullFace(r.BACK):L===cd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),I=L}function Et(L){L!==z&&(W&&r.lineWidth(L),z=L)}function de(L,nt,H){L?(st(r.POLYGON_OFFSET_FILL),(k!==nt||G!==H)&&(r.polygonOffset(nt,H),k=nt,G=H)):Tt(r.POLYGON_OFFSET_FILL)}function St(L){L?st(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+Z-1),it!==L&&(r.activeTexture(L),it=L)}function M(L,nt,H){H===void 0&&(it===null?H=r.TEXTURE0+Z-1:H=it);let $=ut[H];$===void 0&&($={type:void 0,texture:void 0},ut[H]=$),($.type!==L||$.texture!==nt)&&(it!==H&&(r.activeTexture(H),it=H),r.bindTexture(L,nt||_t[L]),$.type=L,$.texture=nt)}function F(){let L=ut[it];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){ae.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function pt(L){q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function qt(L,nt){let H=c.get(nt);H===void 0&&(H=new WeakMap,c.set(nt,H));let $=H.get(L);$===void 0&&($=r.getUniformBlockIndex(nt,L.name),H.set(L,$))}function Nt(L,nt){let $=c.get(nt).get(L);l.get(nt)!==$&&(r.uniformBlockBinding(nt,$,L.__bindingPointIndex),l.set(nt,$))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},it=null,ut={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,S=null,y=null,R=null,T=null,P=new ot(0,0,0),C=0,w=!1,b=null,I=null,z=null,k=null,G=null,ae.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Tt,bindFramebuffer:It,drawBuffers:zt,useProgram:_e,setBlending:N,setMaterial:cn,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Et,setPolygonOffset:de,setScissorTest:St,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ft,texImage3D:wt,updateUBOMapping:qt,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:K,texSubImage2D:X,texSubImage3D:yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:ce}}function Gh(r,t,e,n){let i=Ig(n);switch(e){case lu:return r*t;case hu:return r*t;case uu:return r*t*2;case du:return r*t/i.components*i.byteLength;case pc:return r*t/i.components*i.byteLength;case fu:return r*t*2/i.components*i.byteLength;case mc:return r*t*2/i.components*i.byteLength;case cu:return r*t*3/i.components*i.byteLength;case bn:return r*t*4/i.components*i.byteLength;case gc:return r*t*4/i.components*i.byteLength;case to:case eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(r,16)*Math.max(t,8)/4;case ja:case el:return Math.max(r,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case so:case yl:case Ml:return Math.ceil(r/4)*Math.ceil(t/4)*16;case pu:case bl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Sl:case El:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(r){switch(r){case Kn:case ru:return{byteLength:1,components:1};case or:case ou:case sn:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case zi:case uc:case $n:return{byteLength:4,components:1};case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Lg(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):ao("canvas")}function x(A,M,F){let Y=1,J=St(A);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(Y*J.width),yt=Math.floor(Y*J.height);u===void 0&&(u=g(X,yt));let rt=M?g(X,yt):u;return rt.width=X,rt.height=yt,rt.getContext("2d").drawImage(A,0,0,X,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+yt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,M,F,Y,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=M;if(M===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),M===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),M===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),M===r.RGBA){let yt=J?Io:Ht.getTransfer(Y);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=yt===te?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(A,M){let F;return A?M===null||M===zi||M===Ss?F=r.DEPTH24_STENCIL8:M===$n?F=r.DEPTH32F_STENCIL8:M===or&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===Ss?F=r.DEPTH_COMPONENT24:M===$n?F=r.DEPTH_COMPONENT32F:M===or&&(F=r.DEPTH_COMPONENT16),F}function R(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Sn&&A.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){let M=A.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&h.delete(M)}function P(A){let M=A.target;M.removeEventListener("dispose",P),b(M)}function C(A){let M=n.get(A);if(M.__webglInit===void 0)return;let F=A.source,Y=d.get(F);if(Y){let J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(A),Object.keys(Y).length===0&&d.delete(F)}n.remove(A)}function w(A){let M=n.get(A);r.deleteTexture(M.__webglTexture);let F=A.source,Y=d.get(F);delete Y[M.__cacheKey],o.memory.textures--}function b(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=A.textures;for(let Y=0,J=F.length;Y<J;Y++){let X=n.get(F[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(A)}let I=0;function z(){I=0}function k(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function G(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Z(A,M){let F=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,A,M);return}}e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function W(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function j(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,M);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function V(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){tt(F,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}let it={[xi]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[Qa]:r.MIRRORED_REPEAT},ut={[Sn]:r.NEAREST,[Id]:r.NEAREST_MIPMAP_NEAREST,[wr]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[aa]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},bt={[Nd]:r.NEVER,[Hd]:r.ALWAYS,[Fd]:r.LESS,[gu]:r.LEQUAL,[Od]:r.EQUAL,[zd]:r.GEQUAL,[Bd]:r.GREATER,[kd]:r.NOTEQUAL};function kt(A,M){if(M.type===$n&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===aa||M.magFilter===wr||M.magFilter===ki||M.minFilter===Ln||M.minFilter===aa||M.minFilter===wr||M.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,it[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,it[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,it[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ut[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ut[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==wr&&M.minFilter!==ki||M.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));let Y=M.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let X=G(M);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[X].usedTimes++;let yt=J[A.__cacheKey];yt!==void 0&&(J[A.__cacheKey].usedTimes--,yt.usedTimes===0&&w(M)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return F}function q(A,M,F){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);let J=ae(A,M),X=M.source;e.bindTexture(Y,A.__webglTexture,r.TEXTURE0+F);let yt=n.get(X);if(X.version!==yt.__version||J===!0){e.activeTexture(r.TEXTURE0+F);let rt=Ht.getPrimaries(Ht.workingColorSpace),dt=M.colorSpace===ui?null:Ht.getPrimaries(M.colorSpace),$t=M.colorSpace===ui||rt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let K=x(M.image,!1,i.maxTextureSize);K=de(M,K);let ft=s.convert(M.format,M.colorSpace),wt=s.convert(M.type),Rt=S(M.internalFormat,ft,wt,M.colorSpace,M.isVideoTexture);kt(Y,M);let pt,qt=M.mipmaps,Nt=M.isVideoTexture!==!0,ce=yt.__version===void 0||J===!0,L=X.dataReady,nt=R(M,K);if(M.isDepthTexture)Rt=y(M.format===Es,M.type),ce&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Rt,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,Rt,K.width,K.height,0,ft,wt,null));else if(M.isDataTexture)if(qt.length>0){Nt&&ce&&e.texStorage2D(r.TEXTURE_2D,nt,Rt,qt[0].width,qt[0].height);for(let H=0,$=qt.length;H<$;H++)pt=qt[H],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(r.TEXTURE_2D,H,Rt,pt.width,pt.height,0,ft,wt,pt.data);M.generateMipmaps=!1}else Nt?(ce&&e.texStorage2D(r.TEXTURE_2D,nt,Rt,K.width,K.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,ft,wt,K.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,K.width,K.height,0,ft,wt,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,Rt,qt[0].width,qt[0].height,K.depth);for(let H=0,$=qt.length;H<$;H++)if(pt=qt[H],M.format!==bn)if(ft!==null)if(Nt){if(L)if(M.layerUpdates.size>0){let ct=Gh(pt.width,pt.height,M.format,M.type);for(let at of M.layerUpdates){let Lt=pt.data.subarray(at*ct/pt.data.BYTES_PER_ELEMENT,(at+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,at,pt.width,pt.height,1,ft,Lt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,K.depth,ft,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Rt,pt.width,pt.height,K.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,K.depth,ft,wt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,H,Rt,pt.width,pt.height,K.depth,0,ft,wt,pt.data)}else{Nt&&ce&&e.texStorage2D(r.TEXTURE_2D,nt,Rt,qt[0].width,qt[0].height);for(let H=0,$=qt.length;H<$;H++)pt=qt[H],M.format!==bn?ft!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,H,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(r.TEXTURE_2D,H,Rt,pt.width,pt.height,0,ft,wt,pt.data)}else if(M.isDataArrayTexture)if(Nt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,Rt,K.width,K.height,K.depth),L)if(M.layerUpdates.size>0){let H=Gh(K.width,K.height,M.format,M.type);for(let $ of M.layerUpdates){let ct=K.data.subarray($*H/K.data.BYTES_PER_ELEMENT,($+1)*H/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,K.width,K.height,1,ft,wt,ct)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,wt,K.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,K.width,K.height,K.depth,0,ft,wt,K.data);else if(M.isData3DTexture)Nt?(ce&&e.texStorage3D(r.TEXTURE_3D,nt,Rt,K.width,K.height,K.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,wt,K.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,K.width,K.height,K.depth,0,ft,wt,K.data);else if(M.isFramebufferTexture){if(ce)if(Nt)e.texStorage2D(r.TEXTURE_2D,nt,Rt,K.width,K.height);else{let H=K.width,$=K.height;for(let ct=0;ct<nt;ct++)e.texImage2D(r.TEXTURE_2D,ct,Rt,H,$,0,ft,wt,null),H>>=1,$>>=1}}else if(qt.length>0){if(Nt&&ce){let H=St(qt[0]);e.texStorage2D(r.TEXTURE_2D,nt,Rt,H.width,H.height)}for(let H=0,$=qt.length;H<$;H++)pt=qt[H],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,ft,wt,pt):e.texImage2D(r.TEXTURE_2D,H,Rt,ft,wt,pt);M.generateMipmaps=!1}else if(Nt){if(ce){let H=St(K);e.texStorage2D(r.TEXTURE_2D,nt,Rt,H.width,H.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,wt,K)}else e.texImage2D(r.TEXTURE_2D,0,Rt,ft,wt,K);m(M)&&p(Y),yt.__version=X.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function tt(A,M,F){if(M.image.length!==6)return;let Y=ae(A,M),J=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+F);let X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(r.TEXTURE0+F);let yt=Ht.getPrimaries(Ht.workingColorSpace),rt=M.colorSpace===ui?null:Ht.getPrimaries(M.colorSpace),dt=M.colorSpace===ui||yt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let $t=M.isCompressedTexture||M.image[0].isCompressedTexture,K=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!$t&&!K?ft[$]=x(M.image[$],!0,i.maxCubemapSize):ft[$]=K?M.image[$].image:M.image[$],ft[$]=de(M,ft[$]);let wt=ft[0],Rt=s.convert(M.format,M.colorSpace),pt=s.convert(M.type),qt=S(M.internalFormat,Rt,pt,M.colorSpace),Nt=M.isVideoTexture!==!0,ce=X.__version===void 0||Y===!0,L=J.dataReady,nt=R(M,wt);kt(r.TEXTURE_CUBE_MAP,M);let H;if($t){Nt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,qt,wt.width,wt.height);for(let $=0;$<6;$++){H=ft[$].mipmaps;for(let ct=0;ct<H.length;ct++){let at=H[ct];M.format!==bn?Rt!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,Rt,at.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,qt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,Rt,pt,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,qt,at.width,at.height,0,Rt,pt,at.data)}}}else{if(H=M.mipmaps,Nt&&ce){H.length>0&&nt++;let $=St(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,qt,$.width,$.height)}for(let $=0;$<6;$++)if(K){Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Rt,pt,ft[$].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,ft[$].width,ft[$].height,0,Rt,pt,ft[$].data);for(let ct=0;ct<H.length;ct++){let Lt=H[ct].image[$].image;Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Lt.width,Lt.height,Rt,pt,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,qt,Lt.width,Lt.height,0,Rt,pt,Lt.data)}}else{Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,pt,ft[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Rt,pt,ft[$]);for(let ct=0;ct<H.length;ct++){let at=H[ct];Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Rt,pt,at.image[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,qt,Rt,pt,at.image[$])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),X.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function _t(A,M,F,Y,J,X){let yt=s.convert(F.format,F.colorSpace),rt=s.convert(F.type),dt=S(F.internalFormat,yt,rt,F.colorSpace),$t=n.get(M),K=n.get(F);if(K.__renderTarget=M,!$t.__hasExternalTextures){let ft=Math.max(1,M.width>>X),wt=Math.max(1,M.height>>X);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,X,dt,ft,wt,M.depth,0,yt,rt,null):e.texImage2D(J,X,dt,ft,wt,0,yt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Xt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,K.__webglTexture,0,Wt(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,K.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(A,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){let Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=y(M.stencilBuffer,J),yt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=Wt(M);Xt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,X,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,X,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,A)}else{let Y=M.textures;for(let J=0;J<Y.length;J++){let X=Y[J],yt=s.convert(X.format,X.colorSpace),rt=s.convert(X.type),dt=S(X.internalFormat,yt,rt,X.colorSpace),$t=Wt(M);F&&Xt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,dt,M.width,M.height):Xt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let J=Y.__webglTexture,X=Wt(M);if(M.depthTexture.format===xs)Xt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===Es)Xt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function It(A){let M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),st(M.__webglDepthbuffer[Y],A,!1);else{let J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),st(M.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(A,M,F){let Y=n.get(A);M!==void 0&&_t(Y.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&It(A)}function _e(A){let M=A.texture,F=n.get(A),Y=n.get(M);A.addEventListener("dispose",P);let J=A.textures,X=A.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let dt=0;dt<M.mipmaps.length;dt++)F.__webglFramebuffer[rt][dt]=r.createFramebuffer()}else F.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)F.__webglFramebuffer[rt]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(yt)for(let rt=0,dt=J.length;rt<dt;rt++){let $t=n.get(J[rt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Xt(A)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){let dt=J[rt];F.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);let $t=s.convert(dt.format,dt.colorSpace),K=s.convert(dt.type),ft=S(dt.internalFormat,$t,K,dt.colorSpace,A.isXRRenderTarget===!0),wt=Wt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ft,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),st(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(r.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(F.__webglFramebuffer[rt][dt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else _t(F.__webglFramebuffer[rt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,dt=J.length;rt<dt;rt++){let $t=J[rt],K=n.get($t);e.bindTexture(r.TEXTURE_2D,K.__webglTexture),kt(r.TEXTURE_2D,$t),_t(F.__webglFramebuffer,A,$t,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),m($t)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),kt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(F.__webglFramebuffer[dt],A,M,r.COLOR_ATTACHMENT0,rt,dt);else _t(F.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,rt,0);m(M)&&p(rt),e.unbindTexture()}A.depthBuffer&&It(A)}function Yt(A){let M=A.textures;for(let F=0,Y=M.length;F<Y;F++){let J=M[F];if(m(J)){let X=_(A),yt=n.get(J).__webglTexture;e.bindTexture(X,yt),p(X),e.unbindTexture()}}}let be=[],N=[];function cn(A){if(A.samples>0){if(Xt(A)===!1){let M=A.textures,F=A.width,Y=A.height,J=r.COLOR_BUFFER_BIT,X=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(A),rt=M.length>1;if(rt)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);let $t=n.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,r.NEAREST),l===!0&&(be.length=0,N.length=0,be.push(r.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(be.push(X),N.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);let $t=n.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Wt(A){return Math.min(i.maxSamples,A.samples)}function Xt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Et(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function de(A,M){let F=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Ds&&F!==ui&&(Ht.getTransfer(F)===te?(Y!==bn||J!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=zt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Xt}function Dg(r,t){function e(n,i=ui){let s,o=Ht.getTransfer(i);if(n===Kn)return r.UNSIGNED_BYTE;if(n===dc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===au)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return r.BYTE;if(n===ou)return r.SHORT;if(n===or)return r.UNSIGNED_SHORT;if(n===uc)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===$n)return r.FLOAT;if(n===sn)return r.HALF_FLOAT;if(n===lu)return r.ALPHA;if(n===cu)return r.RGB;if(n===bn)return r.RGBA;if(n===hu)return r.LUMINANCE;if(n===uu)return r.LUMINANCE_ALPHA;if(n===xs)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===du)return r.RED;if(n===pc)return r.RED_INTEGER;if(n===fu)return r.RG;if(n===mc)return r.RG_INTEGER;if(n===gc)return r.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===tl||n===el||n===nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===il||n===sl)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ol)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===yl||n===Ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===bl||n===Sl||n===El)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===so)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Hl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
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

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new en,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends vi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Vl,m=e.getContextAttributes(),p=null,_=null,S=[],y=[],R=new ht,T=null,P=new ze;P.viewport=new oe;let C=new ze;C.viewport=new oe;let w=[P,C],b=new Hl,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=S[q];return tt===void 0&&(tt=new rr,S[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=S[q];return tt===void 0&&(tt=new rr,S[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=S[q];return tt===void 0&&(tt=new rr,S[q]=tt),tt.getHandSpace()};function k(q){let tt=y.indexOf(q.inputSource);if(tt===-1)return;let _t=S[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<S.length;q++){let tt=y[q];tt!==null&&(y[q]=null,S[q].disconnect(tt))}I=null,z=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ne(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Es:xs,_t=m.stencil?Ss:zi);let Tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ne(d.textureWidth,d.textureHeight,{format:bn,type:Kn,depthTexture:new go(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(q){for(let tt=0;tt<q.removed.length;tt++){let _t=q.removed[tt],st=y.indexOf(_t);st>=0&&(y[st]=null,S[st].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){let _t=q.added[tt],st=y.indexOf(_t);if(st===-1){for(let It=0;It<S.length;It++)if(It>=y.length){y.push(_t),st=It;break}else if(y[It]===null){y[It]=_t,st=It;break}if(st===-1)break}let Tt=S[st];Tt&&Tt.connect(_t)}}let W=new v,j=new v;function V(q,tt,_t){W.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let st=W.distanceTo(j),Tt=tt.projectionMatrix.elements,It=_t.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),_e=Tt[14]/(Tt[10]+1),Yt=(Tt[9]+1)/Tt[5],be=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],cn=(It[8]+1)/It[0],Wt=zt*N,Xt=zt*cn,Et=st/(-N+cn),de=Et*-N;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let St=zt+Et,A=_e+Et,M=Wt-de,F=Xt+(st-de),Y=Yt*_e/A*St,J=be*_e/A*St;q.projectionMatrix.makePerspective(M,F,Y,J,St,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let tt=q.near,_t=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),b.near=C.near=P.near=tt,b.far=C.far=P.far=_t,(I!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,z=b.far),P.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,b.layers.mask=P.layers.mask|C.layers.mask;let st=q.parent,Tt=b.cameras;it(b,st);for(let It=0;It<Tt.length;It++)it(Tt[It],st);Tt.length===2?V(b,P,C):b.projectionMatrix.copy(P.projectionMatrix),ut(q,b,st)};function ut(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Al*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let bt=null;function kt(q,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let st=!1;_t.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let It=0;It<_t.length;It++){let zt=_t[It],_e=null;if(f!==null)_e=f.getViewport(zt);else{let be=u.getViewSubImage(d,zt);_e=be.viewport,It===0&&(t.setRenderTargetTextures(_,be.colorTexture,d.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(_))}let Yt=w[It];Yt===void 0&&(Yt=new ze,Yt.layers.enable(It),Yt.viewport=new oe,w[It]=Yt),Yt.matrix.fromArray(zt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(zt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(_e.x,_e.y,_e.width,_e.height),It===0&&(b.matrix.copy(Yt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(Yt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let It=u.getDepthInformation(_t[0]);It&&It.isValid&&It.texture&&x.init(t,It,i.renderState)}}for(let _t=0;_t<S.length;_t++){let st=y[_t],Tt=S[_t];st!==null&&Tt!==void 0&&Tt.update(st,tt,c||o)}bt&&bt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ae=new yu;ae.setAnimationLoop(kt),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}},Ui=new Fe,Og=new ne;function Bg(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_u(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),S=_.envMap,y=_.envMapRotation;S&&(m.envMap.value=S,Ui.copy(y),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ui)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ae&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kg(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let y=S.program;n.uniformBlockBinding(_,y)}function c(_,S){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));let R=S.program;n.updateUBOMapping(_,R);let T=t.render.frame;s[_.id]!==T&&(d(_),s[_.id]=T)}function h(_){let S=u();_.__bindingPointIndex=S;let y=r.createBuffer(),R=_.__size,T=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=i[_.id],y=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,P=y.length;T<P;T++){let C=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,b=C.length;w<b;w++){let I=C[w];if(f(I,T,w,R)===!0){let z=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],G=0;for(let Z=0;Z<k.length;Z++){let W=k[Z],j=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,z+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,S,y,R){let T=_.value,P=S+"_"+y;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:R[P]=T.clone(),!0;{let C=R[P];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[P]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(_){let S=_.uniforms,y=0,R=16;for(let P=0,C=S.length;P<C;P++){let w=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,I=w.length;b<I;b++){let z=w[b],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,Z=k.length;G<Z;G++){let W=k[G],j=x(W),V=y%R,it=V%j.boundary,ut=V+it;y+=it,ut!==0&&R-ut<j.storage&&(y+=R-ut),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=j.storage}}}let T=y%R;return T>0&&(y+=R-T),_.__size=y,_.__cache={},this}function x(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){let S=_.target;S.removeEventListener("dispose",m);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var xo=class{constructor(t={}){let{canvas:e=Gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=pi,this.toneMappingExposure=1;let y=this,R=!1,T=0,P=0,C=null,w=-1,b=null,I=new oe,z=new oe,k=null,G=new ot(0),Z=0,W=e.width,j=e.height,V=1,it=null,ut=null,bt=new oe(0,0,W,j),kt=new oe(0,0,W,j),ae=!1,q=new lr,tt=!1,_t=!1,st=new ne,Tt=new ne,It=new v,zt=new oe,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function be(){return C===null?V:1}let N=n;function cn(E,D){return e.getContext(E,D)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sc}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){let D="webgl2";if(N=cn(D,E),N===null)throw cn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Wt,Xt,Et,de,St,A,M,F,Y,J,X,yt,rt,dt,$t,K,ft,wt,Rt,pt,qt,Nt,ce,L;function nt(){Wt=new e0(N),Wt.init(),Nt=new Dg(N,Wt),Xt=new Zm(N,Wt,t,Nt),Et=new Pg(N,Wt),Xt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),de=new s0(N),St=new xg,A=new Lg(N,Wt,Et,St,Xt,Nt,de),M=new Km(y),F=new t0(y),Y=new uf(N),ce=new Ym(N,Y),J=new n0(N,Y,de,ce),X=new o0(N,J,Y,de),Rt=new r0(N,Xt,A),K=new Jm(St),yt=new gg(y,M,F,Wt,Xt,ce,K),rt=new Bg(y,St),dt=new _g,$t=new wg(Wt),wt=new qm(y,M,F,Et,X,f,l),ft=new Rg(y,X,Xt),L=new kg(N,de,Xt,Et),pt=new $m(N,Wt,de),qt=new i0(N,Wt,de),de.programs=yt.programs,y.capabilities=Xt,y.extensions=Wt,y.properties=St,y.renderLists=dt,y.shadowMap=ft,y.state=Et,y.info=de}nt();let H=new Gl(y,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(W,j,!1))},this.getSize=function(E){return E.set(W,j)},this.setSize=function(E,D,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,j=D,e.width=Math.floor(E*V),e.height=Math.floor(D*V),O===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(W*V,j*V).floor()},this.setDrawingBufferSize=function(E,D,O){W=E,j=D,V=O,e.width=Math.floor(E*O),e.height=Math.floor(D*O),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(bt)},this.setViewport=function(E,D,O,B){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,D,O,B),Et.viewport(I.copy(bt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,D,O,B){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,D,O,B),Et.scissor(z.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){Et.setScissorTest(ae=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,D=!0,O=!0){let B=0;if(E){let U=!1;if(C!==null){let Q=C.texture.format;U=Q===gc||Q===mc||Q===pc}if(U){let Q=C.texture.type,lt=Q===Kn||Q===zi||Q===or||Q===Ss||Q===dc||Q===fc,gt=wt.getClearColor(),xt=wt.getClearAlpha(),Ct=gt.r,Dt=gt.g,vt=gt.b;lt?(g[0]=Ct,g[1]=Dt,g[2]=vt,g[3]=xt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Ct,x[1]=Dt,x[2]=vt,x[3]=xt,N.clearBufferiv(N.COLOR,0,x))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),dt.dispose(),$t.dispose(),St.dispose(),M.dispose(),F.dispose(),X.dispose(),ce.dispose(),L.dispose(),yt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Bc),H.removeEventListener("sessionend",kc),Ri.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=de.autoReset,D=ft.enabled,O=ft.autoUpdate,B=ft.needsUpdate,U=ft.type;nt(),de.autoReset=E,ft.enabled=D,ft.autoUpdate=O,ft.needsUpdate=B,ft.type=U}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let D=E.target;D.removeEventListener("dispose",Lt),ye(D)}function ye(E){Oe(E),St.remove(E)}function Oe(E){let D=St.get(E).programs;D!==void 0&&(D.forEach(function(O){yt.releaseProgram(O)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,O,B,U,Q){D===null&&(D=_e);let lt=U.isMesh&&U.matrixWorld.determinant()<0,gt=rd(E,D,O,B,U);Et.setMaterial(B,lt);let xt=O.index,Ct=1;if(B.wireframe===!0){if(xt=J.getWireframeAttribute(O),xt===void 0)return;Ct=2}let Dt=O.drawRange,vt=O.attributes.position,Jt=Dt.start*Ct,he=(Dt.start+Dt.count)*Ct;Q!==null&&(Jt=Math.max(Jt,Q.start*Ct),he=Math.min(he,(Q.start+Q.count)*Ct)),xt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,xt.count)):vt!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,vt.count));let fe=he-Jt;if(fe<0||fe===1/0)return;ce.setup(U,B,gt,O,xt);let Ye,Qt=pt;if(xt!==null&&(Ye=Y.get(xt),Qt=qt,Qt.setIndex(Ye)),U.isMesh)B.wireframe===!0?(Et.setLineWidth(B.wireframeLinewidth*be()),Qt.setMode(N.LINES)):Qt.setMode(N.TRIANGLES);else if(U.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*be()),U.isLineSegments?Qt.setMode(N.LINES):U.isLineLoop?Qt.setMode(N.LINE_LOOP):Qt.setMode(N.LINE_STRIP)}else U.isPoints?Qt.setMode(N.POINTS):U.isSprite&&Qt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Mt=U._multiDrawStarts,zn=U._multiDrawCounts,jt=U._multiDrawCount,vn=xt?Y.get(xt).bytesPerElement:1,Ki=St.get(B).currentProgram.getUniforms();for(let Qe=0;Qe<jt;Qe++)Ki.setValue(N,"_gl_DrawID",Qe),Qt.render(Mt[Qe]/vn,zn[Qe])}else if(U.isInstancedMesh)Qt.renderInstances(Jt,fe,U.count);else if(O.isInstancedBufferGeometry){let Mt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,zn=Math.min(O.instanceCount,Mt);Qt.renderInstances(Jt,fe,zn)}else Qt.render(Jt,fe)};function ee(E,D,O){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=Ae,E.needsUpdate=!0,Er(E,D,O),E.side=gi,E.needsUpdate=!0,Er(E,D,O),E.side=dn):Er(E,D,O)}this.compile=function(E,D,O=null){O===null&&(O=E),p=$t.get(O),p.init(D),S.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let B=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){let gt=Q[lt];ee(gt,O,U),B.add(gt)}else ee(Q,O,U),B.add(Q)}),S.pop(),p=null,B},this.compileAsync=function(E,D,O=null){let B=this.compile(E,D,O);return new Promise(U=>{function Q(){if(B.forEach(function(lt){St.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){U(E);return}setTimeout(Q,10)}Wt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let xn=null;function kn(E){xn&&xn(E)}function Bc(){Ri.stop()}function kc(){Ri.start()}let Ri=new yu;Ri.setAnimationLoop(kn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(E){xn=E,H.setAnimationLoop(E),E===null?Ri.stop():Ri.start()},H.addEventListener("sessionstart",Bc),H.addEventListener("sessionend",kc),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,D,C),p=$t.get(E,S.length),p.init(D),S.push(p),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,tt=K.init(this.clippingPlanes,_t),m=dt.get(E,_.length),m.init(),_.push(m),H.enabled===!0&&H.isPresenting===!0){let Q=y.xr.getDepthSensingMesh();Q!==null&&oa(Q,D,-1/0,y.sortObjects)}oa(E,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(it,ut),Yt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Yt&&wt.addToRenderList(m,E),this.info.render.frame++,tt===!0&&K.beginShadows();let O=p.state.shadowsArray;ft.render(O,E,D),tt===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){let Q=D.cameras;if(U.length>0)for(let lt=0,gt=Q.length;lt<gt;lt++){let xt=Q[lt];Hc(B,U,E,xt)}Yt&&wt.render(E);for(let lt=0,gt=Q.length;lt<gt;lt++){let xt=Q[lt];zc(m,E,xt,xt.viewport)}}else U.length>0&&Hc(B,U,E,D),Yt&&wt.render(E),zc(m,E,D);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,D),ce.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&K.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function oa(E,D,O,B){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){B&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);let lt=X.update(E),gt=E.material;gt.visible&&m.push(E,lt,gt,O,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let lt=X.update(E),gt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),zt.copy(lt.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(gt)){let xt=lt.groups;for(let Ct=0,Dt=xt.length;Ct<Dt;Ct++){let vt=xt[Ct],Jt=gt[vt.materialIndex];Jt&&Jt.visible&&m.push(E,lt,Jt,O,zt.z,vt)}}else gt.visible&&m.push(E,lt,gt,O,zt.z,null)}}let Q=E.children;for(let lt=0,gt=Q.length;lt<gt;lt++)oa(Q[lt],D,O,B)}function zc(E,D,O,B){let U=E.opaque,Q=E.transmissive,lt=E.transparent;p.setupLightsView(O),tt===!0&&K.setGlobalState(y.clippingPlanes,O),B&&Et.viewport(I.copy(B)),U.length>0&&Sr(U,D,O),Q.length>0&&Sr(Q,D,O),lt.length>0&&Sr(lt,D,O),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Hc(E,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ne(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?sn:Kn,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let Q=p.state.transmissionRenderTarget[B.id],lt=B.viewport||I;Q.setSize(lt.z,lt.w);let gt=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(G),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&wt.render(O);let xt=y.toneMapping;y.toneMapping=pi;let Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),tt===!0&&K.setGlobalState(y.clippingPlanes,B),Sr(E,O,B),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,Jt=D.length;vt<Jt;vt++){let he=D[vt],fe=he.object,Ye=he.geometry,Qt=he.material,Mt=he.group;if(Qt.side===dn&&fe.layers.test(B.layers)){let zn=Qt.side;Qt.side=Ae,Qt.needsUpdate=!0,Vc(fe,O,B,Ye,Qt,Mt),Qt.side=zn,Qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q))}y.setRenderTarget(gt),y.setClearColor(G,Z),Ct!==void 0&&(B.viewport=Ct),y.toneMapping=xt}function Sr(E,D,O){let B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=E.length;U<Q;U++){let lt=E[U],gt=lt.object,xt=lt.geometry,Ct=B===null?lt.material:B,Dt=lt.group;gt.layers.test(O.layers)&&Vc(gt,D,O,xt,Ct,Dt)}}function Vc(E,D,O,B,U,Q){E.onBeforeRender(y,D,O,B,U,Q),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,D,O,B,E,Q),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=Ae,U.needsUpdate=!0,y.renderBufferDirect(O,D,B,U,E,Q),U.side=gi,U.needsUpdate=!0,y.renderBufferDirect(O,D,B,U,E,Q),U.side=dn):y.renderBufferDirect(O,D,B,U,E,Q),E.onAfterRender(y,D,O,B,U,Q)}function Er(E,D,O){D.isScene!==!0&&(D=_e);let B=St.get(E),U=p.state.lights,Q=p.state.shadowsArray,lt=U.state.version,gt=yt.getParameters(E,U.state,Q,D,O),xt=yt.getProgramCacheKey(gt),Ct=B.programs;B.environment=E.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",Lt),Ct=new Map,B.programs=Ct);let Dt=Ct.get(xt);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===lt)return Wc(E,gt),Dt}else gt.uniforms=yt.getUniforms(E),E.onBeforeCompile(gt,y),Dt=yt.acquireProgram(gt,xt),Ct.set(xt,Dt),B.uniforms=gt.uniforms;let vt=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(vt.clippingPlanes=K.uniform),Wc(E,gt),B.needsLights=ad(E),B.lightsStateVersion=lt,B.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function Gc(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=_s.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Wc(E,D){let O=St.get(E);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function rd(E,D,O,B,U){D.isScene!==!0&&(D=_e),A.resetTextureUnits();let Q=D.fog,lt=B.isMeshStandardMaterial?D.environment:null,gt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ds,xt=(B.isMeshStandardMaterial?F:M).get(B.envMap||lt),Ct=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Dt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),vt=!!O.morphAttributes.position,Jt=!!O.morphAttributes.normal,he=!!O.morphAttributes.color,fe=pi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=y.toneMapping);let Ye=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qt=Ye!==void 0?Ye.length:0,Mt=St.get(B),zn=p.state.lights;if(tt===!0&&(_t===!0||E!==b)){let hn=E===b&&B.id===w;K.setState(B,E,hn)}let jt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==zn.state.version||Mt.outputColorSpace!==gt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==xt||B.fog===!0&&Mt.fog!==Q||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==K.numPlanes||Mt.numIntersection!==K.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==Dt||Mt.morphTargets!==vt||Mt.morphNormals!==Jt||Mt.morphColors!==he||Mt.toneMapping!==fe||Mt.morphTargetsCount!==Qt)&&(jt=!0):(jt=!0,Mt.__version=B.version);let vn=Mt.currentProgram;jt===!0&&(vn=Er(B,D,U));let Ki=!1,Qe=!1,qs=!1,pe=vn.getUniforms(),Cn=Mt.uniforms;if(Et.useProgram(vn.program)&&(Ki=!0,Qe=!0,qs=!0),B.id!==w&&(w=B.id,Qe=!0),Ki||b!==E){Et.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),Xd(st),qd(st),pe.setValue(N,"projectionMatrix",st)):pe.setValue(N,"projectionMatrix",E.projectionMatrix),pe.setValue(N,"viewMatrix",E.matrixWorldInverse);let ii=pe.map.cameraPosition;ii!==void 0&&ii.setValue(N,It.setFromMatrixPosition(E.matrixWorld)),Xt.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Qe=!0,qs=!0)}if(U.isSkinnedMesh){pe.setOptional(N,U,"bindMatrix"),pe.setOptional(N,U,"bindMatrixInverse");let hn=U.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),pe.setValue(N,"boneTexture",hn.boneTexture,A))}U.isBatchedMesh&&(pe.setOptional(N,U,"batchingTexture"),pe.setValue(N,"batchingTexture",U._matricesTexture,A),pe.setOptional(N,U,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",U._indirectTexture,A),pe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",U._colorsTexture,A));let Ys=O.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Rt.update(U,O,vn),(Qe||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,pe.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Cn.envMap.value=xt,Cn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Cn.envMapIntensity.value=D.environmentIntensity),Qe&&(pe.setValue(N,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&od(Cn,qs),Q&&B.fog===!0&&rt.refreshFogUniforms(Cn,Q),rt.refreshMaterialUniforms(Cn,B,V,j,p.state.transmissionRenderTarget[E.id]),_s.upload(N,Gc(Mt),Cn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(_s.upload(N,Gc(Mt),Cn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(N,"center",U.center),pe.setValue(N,"modelViewMatrix",U.modelViewMatrix),pe.setValue(N,"normalMatrix",U.normalMatrix),pe.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let hn=B.uniformsGroups;for(let ii=0,si=hn.length;ii<si;ii++){let Xc=hn[ii];L.update(Xc,vn),L.bind(Xc,vn)}}return vn}function od(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function ad(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,D,O){St.get(E.texture).__webglTexture=D,St.get(E.depthTexture).__webglTexture=O;let B=St.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){let O=St.get(E);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,O=0){C=E,T=D,P=O;let B=!0,U=null,Q=!1,lt=!1;if(E){let xt=St.get(E);if(xt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xt.__hasExternalTextures)A.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let vt=E.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&St.has(vt)&&(E.width!==vt.image.width||E.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);let Dt=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?U=Dt[D][O]:U=Dt[D],Q=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?U=St.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[O]:U=Dt,I.copy(E.viewport),z.copy(E.scissor),k=E.scissorTest}else I.copy(bt).multiplyScalar(V).floor(),z.copy(kt).multiplyScalar(V).floor(),k=ae;if(Et.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&Et.drawBuffers(E,U),Et.viewport(I),Et.scissor(z),Et.setScissorTest(k),Q){let xt=St.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,O)}else if(lt){let xt=St.get(E.texture),Ct=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,O||0,Ct)}w=-1},this.readRenderTargetPixels=function(E,D,O,B,U,Q,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Et.bindFramebuffer(N.FRAMEBUFFER,gt);try{let xt=E.texture,Ct=xt.format,Dt=xt.type;if(!Xt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-B&&O>=0&&O<=E.height-U&&N.readPixels(D,O,B,U,Nt.convert(Ct),Nt.convert(Dt),Q)}finally{let xt=C!==null?St.get(C).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,D,O,B,U,Q,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let xt=E.texture,Ct=xt.format,Dt=xt.type;if(!Xt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-B&&O>=0&&O<=E.height-U){Et.bindFramebuffer(N.FRAMEBUFFER,gt);let vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,O,B,U,Nt.convert(Ct),Nt.convert(Dt),0);let Jt=C!==null?St.get(C).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,Jt);let he=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Wd(N,he,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(vt),N.deleteSync(he),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,O=0){E.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);let B=Math.pow(2,-O),U=Math.floor(E.image.width*B),Q=Math.floor(E.image.height*B),lt=D!==null?D.x:0,gt=D!==null?D.y:0;A.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,lt,gt,U,Q),Et.unbindTexture()},this.copyTextureToTexture=function(E,D,O=null,B=null,U=0){E.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let Q,lt,gt,xt,Ct,Dt,vt,Jt,he,fe=E.isCompressedTexture?E.mipmaps[U]:E.image;O!==null?(Q=O.max.x-O.min.x,lt=O.max.y-O.min.y,gt=O.isBox3?O.max.z-O.min.z:1,xt=O.min.x,Ct=O.min.y,Dt=O.isBox3?O.min.z:0):(Q=fe.width,lt=fe.height,gt=fe.depth||1,xt=0,Ct=0,Dt=0),B!==null?(vt=B.x,Jt=B.y,he=B.z):(vt=0,Jt=0,he=0);let Ye=Nt.convert(D.format),Qt=Nt.convert(D.type),Mt;D.isData3DTexture?(A.setTexture3D(D,0),Mt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Mt=N.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let zn=N.getParameter(N.UNPACK_ROW_LENGTH),jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ki=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Dt);let qs=E.isDataArrayTexture||E.isData3DTexture,pe=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Cn=St.get(E),Ys=St.get(D),hn=St.get(Cn.__renderTarget),ii=St.get(Ys.__renderTarget);Et.bindFramebuffer(N.READ_FRAMEBUFFER,hn.__webglFramebuffer),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<gt;si++)qs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(E).__webglTexture,U,Dt+si),E.isDepthTexture?(pe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(D).__webglTexture,U,he+si),N.blitFramebuffer(xt,Ct,Q,lt,vt,Jt,Q,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):pe?N.copyTexSubImage3D(Mt,U,vt,Jt,he+si,xt,Ct,Q,lt):N.copyTexSubImage2D(Mt,U,vt,Jt,he+si,xt,Ct,Q,lt);Et.bindFramebuffer(N.READ_FRAMEBUFFER,null),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Mt,U,vt,Jt,he,Q,lt,gt,Ye,Qt,fe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,U,vt,Jt,he,Q,lt,gt,Ye,fe.data):N.texSubImage3D(Mt,U,vt,Jt,he,Q,lt,gt,Ye,Qt,fe):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,vt,Jt,Q,lt,Ye,Qt,fe.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,vt,Jt,fe.width,fe.height,Ye,fe.data):N.texSubImage2D(N.TEXTURE_2D,U,vt,Jt,Q,lt,Ye,Qt,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,zn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ki),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),U===0&&D.generateMipmaps&&N.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,D,O=null,B=null,U=0){return E.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,O,B,U)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){T=0,P=0,C=null,Et.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var Rs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fe,this.environmentIntensity=1,this.environmentRotation=new Fe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},vo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ve=new v,cr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hr=class extends Un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ds,Qs=new v,fs=new v,ps=new v,ms=new ht,js=new ht,wu=new ne,qr=new v,tr=new v,Yr=new v,Wh=new ht,Oa=new ht,Xh=new ht,_o=class extends De{constructor(t=new hr){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vo(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new cr(n,3,0,!1)),ds.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;$r(qr.set(-.5,-.5,0),ps,o,fs,i,s),$r(tr.set(.5,-.5,0),ps,o,fs,i,s),$r(Yr.set(.5,.5,0),ps,o,fs,i,s),Wh.set(0,0),Oa.set(1,0),Xh.set(1,1);let a=t.ray.intersectTriangle(qr,tr,Yr,!1,Qs);if(a===null&&($r(tr.set(-.5,.5,0),ps,o,fs,i,s),Oa.set(0,1),a=t.ray.intersectTriangle(qr,Yr,tr,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:di.getInterpolation(Qs,qr,tr,Yr,Wh,Oa,Xh,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(r,t,e,n,i,s){ms.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(js.x=s*ms.x-i*ms.y,js.y=i*ms.x+s*ms.y):js.copy(ms),r.copy(t),r.x+=js.x,r.y+=js.y,r.applyMatrix4(wu)}var Gi=class extends Un{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yo=new v,Mo=new v,qh=new ne,er=new ar,Zr=new Vi,Ba=new v,Yh=new v,Wl=class extends De{constructor(t=new le,e=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)yo.fromBufferAttribute(e,i-1),Mo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yo.distanceTo(Mo);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;qh.copy(i).invert(),er.copy(t.ray).applyMatrix4(qh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),S=Jr(this,t,er,l,p,_);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Jr(this,t,er,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Jr(this,t,er,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Jr(this,t,er,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Jr(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(yo.fromBufferAttribute(o,i),Mo.fromBufferAttribute(o,s),e.distanceSqToSegment(yo,Mo,Ba,Yh)>n)return;Ba.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Ba);if(!(l<t.near||l>t.far))return{distance:l,point:Yh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var $h=new v,Zh=new v,Cs=class extends Wl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)$h.fromBufferAttribute(e,i),Zh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$h.distanceTo(Zh);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends Un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jh=new ne,Xl=new ar,Kr=new Vi,Qr=new v,Ps=class extends De{constructor(t=new le,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=s,t.ray.intersectsSphere(Kr)===!1)return;Jh.copy(i).invert(),Xl.copy(t.ray).applyMatrix4(Jh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Qr.fromBufferAttribute(u,m),Kh(Qr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Qr.fromBufferAttribute(u,g),Kh(Qr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Kh(r,t,e,n,i,s,o){let a=Xl.distanceSqToPoint(r);if(a<e){let l=new v;Xl.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qn=class extends en{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class r extends le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new v,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class r extends le{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function _(){let y=new v,R=new v,T=0,P=(e-t)/n;for(let C=0;C<=s;C++){let w=[],b=C/s,I=b*(e-t)+t;for(let z=0;z<=i;z++){let k=z/i,G=k*l+a,Z=Math.sin(G),W=Math.cos(G);R.x=I*Z,R.y=-b*n+m,R.z=I*W,u.push(R.x,R.y,R.z),y.set(Z,P,W).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-b),w.push(g++)}x.push(w)}for(let C=0;C<i;C++)for(let w=0;w<s;w++){let b=x[w][C],I=x[w+1][C],z=x[w+1][C+1],k=x[w][C+1];(t>0||w!==0)&&(h.push(b,I,k),T+=3),(e>0||w!==s-1)&&(h.push(I,z,k),T+=3)}c.addGroup(p,T,0),p+=T}function S(y){let R=g,T=new ht,P=new v,C=0,w=y===!0?t:e,b=y===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let I=g;for(let z=0;z<=i;z++){let G=z/i*l+a,Z=Math.cos(G),W=Math.sin(G);P.x=w*W,P.y=m*b,P.z=w*Z,u.push(P.x,P.y,P.z),d.push(0,b,0),T.x=Z*.5+.5,T.y=W*.5*b+.5,f.push(T.x,T.y),g++}for(let z=0;z<i;z++){let k=R+z,G=I+z;y===!0?h.push(G,G+1,k):h.push(G+1,G,k),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Is=class r extends nn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bo=class r extends le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(s.slice(),3)),this.setAttribute("uv",new Vt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new v,y=new v,R=new v;for(let T=0;T<e.length;T+=3)f(e[T+0],S),f(e[T+1],y),f(e[T+2],R),l(S,y,R,_)}function l(_,S,y,R){let T=R+1,P=[];for(let C=0;C<=T;C++){P[C]=[];let w=_.clone().lerp(y,C/T),b=S.clone().lerp(y,C/T),I=T-C;for(let z=0;z<=I;z++)z===0&&C===T?P[C][z]=w:P[C][z]=w.clone().lerp(b,z/I)}for(let C=0;C<T;C++)for(let w=0;w<2*(T-C)-1;w++){let b=Math.floor(w/2);w%2===0?(d(P[C][b+1]),d(P[C+1][b]),d(P[C][b])):(d(P[C][b+1]),d(P[C+1][b+1]),d(P[C+1][b]))}}function c(_){let S=new v;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(_),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function h(){let _=new v;for(let S=0;S<s.length;S+=3){_.x=s[S+0],_.y=s[S+1],_.z=s[S+2];let y=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;o.push(y,1-R)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let S=o[_+0],y=o[_+2],R=o[_+4],T=Math.max(S,y,R),P=Math.min(S,y,R);T>.9&&P<.1&&(S<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,S){let y=_*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){let _=new v,S=new v,y=new v,R=new v,T=new ht,P=new ht,C=new ht;for(let w=0,b=0;w<s.length;w+=9,b+=6){_.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),T.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),R.copy(_).add(S).add(y).divideScalar(3);let I=m(R);x(T,b+0,_,I),x(P,b+2,S,I),x(C,b+4,y,I)}}function x(_,S,y,R){R<0&&_.x===1&&(o[S]=_.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var En=class r extends bo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},So=class r extends bo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Eo=class r extends le{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new v,g=new ht;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,S=_,y=_+n+1,R=_+n+2,T=_+1;a.push(S,y,T),a.push(y,R,T)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var wn=class r extends le{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,d=new v,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],S=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-S),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let S=h[p][_+1],y=h[p][_],R=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&f.push(S,y,T),(p!==n-1||l<Math.PI)&&f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wi=class r extends le{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new v,u=new v,d=new v;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var wo=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ot=class extends Un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},To=class extends Ot{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function jr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function zg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ls=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends Ls{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:s=t,a=2*e-n;break;case Kc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,l=2*n-e;break;case Kc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let R=0;R!==a;++R)s[R]=p*o[h+R]+_*o[c+R]+S*o[l+R]+y*o[u+R];return s}},Yl=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},$l=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case wl:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&zg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=wl;var Xi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ro;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Tn{};Zl.prototype.ValueTypeName="color";var Jl=class extends Tn{};Jl.prototype.ValueTypeName="number";var Kl=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ge.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ao=class extends Tn{InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Tn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ro;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends Tn{};Ql.prototype.ValueTypeName="vector";var jl=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Hg=new jl,tc=class{constructor(t){this.manager=t!==void 0?t:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},fr=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ka=new ne,Qh=new v,jh=new v,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jh),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var tu=new ne,nr=new v,za=new v,ec=class extends Ro{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}},$e=class extends dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},nc=class extends Ro{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Co=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function eu(){return performance.now()}var vc="\\[\\]\\.:\\/",Vg=new RegExp("["+vc+"]","g"),_c="[^"+vc+"]",Gg="[^"+vc.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",_c),Xg=/(WCOD+)?/.source.replace("WCOD",Gg),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),$g=new RegExp("^"+Wg+Xg+qg+Yg+"$"),Zg=["material","materials","bones","map"],ic=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let e=$g.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Zg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=ic;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);var Zt=(r,t,e)=>r<t?t:r>e?e:r;var At=(r,t)=>r+Math.random()*(t-r);var Fn=Math.PI/180;function Mi(r,t=new v){let e=Math.abs(r.x)<.9?new v(1,0,0):new v(0,1,0),n=new v().crossVectors(r,e).normalize(),i=new v().crossVectors(r,n),s=Math.random()*Math.PI*2;return t.copy(n).multiplyScalar(Math.cos(s)).addScaledVector(i,Math.sin(s))}function yc(r,t,e,n,i){let s=0,o=n,a=-1,l=0,c=[r.x,r.y,r.z],h=[t.x,t.y,t.z];for(let u=0;u<3;u++){let d=c[u],f=h[u],g=e.min[u],x=e.max[u];if(Math.abs(f)<1e-12){if(d<g||d>x)return-1;continue}let m=1/f,p=(g-d)*m,_=(x-d)*m,S=-1;if(p>_){let y=p;p=_,_=y,S=1}if(p>s&&(s=p,a=u,l=S),_<o&&(o=_),s>o)return-1}return i&&(i.n[0]=i.n[1]=i.n[2]=0,a>=0?i.n[a]=l:(i.n[0]=-t.x,i.n[1]=-t.y,i.n[2]=-t.z)),s}function On(r,t,e,n,i){let s=r.x-e.x,o=r.y-e.y,a=r.z-e.z,l=s*t.x+o*t.y+a*t.z,c=s*s+o*o+a*a-n*n;if(c<=0)return 0;if(l>0)return-1;let h=l*l-c;if(h<0)return-1;let u=-l-Math.sqrt(h);return u<=i?u:-1}function Uo(r,t,e){return e.x=Zt(r.x,t.min[0],t.max[0]),e.y=Zt(r.y,t.min[1],t.max[1]),e.z=Zt(r.z,t.min[2],t.max[2]),e}function mr(r,t,e){let n=t.dot(t)-e*e,i=2*r.dot(t),s=r.dot(r);if(Math.abs(n)<1e-6){if(Math.abs(i)<1e-9)return-1;let u=-s/i;return u>0?u:-1}let o=i*i-4*n*s;if(o<0)return-1;let a=Math.sqrt(o),l=(-i-a)/(2*n),c=(-i+a)/(2*n),h=Math.min(l,c)>0?Math.min(l,c):Math.max(l,c);return h>0?h:-1}function Jg(r,t,e,n){if(r<=n)return t*r+.5*e*r*r;let i=t+e*n;return t*n+.5*e*n*n+i*(r-n)}function No(r,t,e,n,i,s=4){let o=new v,a=h=>o.copy(r).addScaledVector(t,h).length()-Jg(h,e,n,i),l=0,c=.05;if(a(l)<=0)return 0;for(;a(c)>0;)if(c*=1.6,c>s)return-1;for(let h=0;h<30;h++){let u=(l+c)*.5;a(u)>0?l=u:c=u}return c}var Do=class{constructor(){this.a=[]}push(t,e){let n=this.a;n.push([e,t]);let i=n.length-1;for(;i>0;){let s=i-1>>1;if(n[s][0]<=n[i][0])break;[n[s],n[i]]=[n[i],n[s]],i=s}}pop(){let t=this.a,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){let s=2*i+1,o=s+1,a=i;if(s<t.length&&t[s][0]<t[a][0]&&(a=s),o<t.length&&t[o][0]<t[a][0]&&(a=o),a===i)break;[t[a],t[i]]=[t[i],t[a]],i=a}}return e[1]}get size(){return this.a.length}};function Au(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new le,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Tu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Tu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Tu(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new me(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var gr=new v;function mn(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;gr.copy(t),gr[n]=0,gr.normalize();let c=.5*o/(o+a),h=1-gr.angleTo(r)/l;return Math.sign(gr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Fo=class extends Se{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new v,l=new v,c=new v(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new v,x=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*s,h[m+1]=c.y*Math.sign(a.y)+l.y*s,h[m+2]=c.z*Math.sign(a.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=mn(g,l,"z","y",s,n),d[p+1]=1-mn(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),d[p+0]=1-mn(g,l,"z","y",s,n),d[p+1]=1-mn(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),d[p+0]=1-mn(g,l,"x","z",s,t),d[p+1]=mn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),d[p+0]=1-mn(g,l,"x","z",s,t),d[p+1]=1-mn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),d[p+0]=1-mn(g,l,"x","y",s,t),d[p+1]=1-mn(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),d[p+0]=mn(g,l,"x","y",s,t),d[p+1]=1-mn(g,l,"y","x",s,e);break}}};var Ns=new ne,xr=new ge,Kg=new Fe,bc=new v,Sc=new v,Qg=new v(0,1,0),jn=class{constructor(){this.parts=new Map}add(t,e,n=0,i=0,s=0,o=0,a=0,l=0,c=1,h=1,u=1){return Ns.compose(bc.set(n,i,s),xr.setFromEuler(Kg.set(o,a,l)),Sc.set(c,h,u)),this.addMatrix(t,e,Ns)}addMatrix(t,e,n){let i=t.index?t.toNonIndexed():t.clone();i.applyMatrix4(n);for(let s of Object.keys(i.attributes))["position","normal","uv"].includes(s)||i.deleteAttribute(s);return this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(i),this}limb(t,e,n,i,s,o=8){let a=new v().subVectors(e,t),l=a.length(),c=new nn(i,n,l,o);return xr.setFromUnitVectors(Qg,a.normalize()),Ns.compose(bc.addVectors(t,e).multiplyScalar(.5),xr,Sc.set(1,1,1)),this.addMatrix(c,s,Ns)}build(t=!0){let e=new Te;for(let[n,i]of this.parts){let s=Au(i,!1),o=new mt(s,n);o.castShadow=t,o.receiveShadow=t,n.userData&&n.userData.glow&&(o.castShadow=!1,o.userData.noOutline=!0),e.add(o)}return e}},Pt=(r,t,e,n=.02,i=2)=>new Fo(r,t,e,i,Math.min(n,r/2-.001,t/2-.001,e/2-.001)),se=(r,t,e)=>new Se(r,t,e),ue=(r,t,e,n=10)=>new nn(t,r,e,n),An=(r,t=12,e=9)=>new wn(r,t,e),Ze=(r,t,e=8,n=20)=>new Wi(r,t,e,n),Cu=(r,t,e=8)=>new Is(r,t,e),Fs={};function Os(r,t=2.2){let e=new ie({color:new ot(r).multiplyScalar(t)});return e.userData.glow=!0,e}function Pu(r){let t="team"+r;if(Fs[t])return Fs[t];let e=new ot(r);return Fs[t]={suit:new Ot({color:14672356,roughness:.82,metalness:.02}),fabric:new Ot({color:12172739,roughness:.92,metalness:0}),hard:new Ot({color:9278620,roughness:.38,metalness:.75}),dark:new Ot({color:2896183,roughness:.55,metalness:.45}),team:new Ot({color:e,roughness:.5,metalness:.2,emissive:e,emissiveIntensity:.25}),visor:new Ot({color:2366736,roughness:.06,metalness:1,emissive:e,emissiveIntensity:.12}),glow:Os(r,2.4),white:Os(14676735,1.8)}}function jg(r){let t="gun"+r;return Fs[t]?Fs[t]:Fs[t]={poly:new Ot({color:2369581,roughness:.62,metalness:.25}),metal:new Ot({color:9081240,roughness:.3,metalness:.85}),gun:new Ot({color:4870746,roughness:.45,metalness:.6}),tan:new Ot({color:8221793,roughness:.7,metalness:.15}),accent:new Ot({color:r,roughness:.45,emissive:r,emissiveIntensity:.35}),glass:new To({color:10475775,roughness:.05,metalness:0,transparent:!0,opacity:.18,depthWrite:!1}),coil:Os(10481919,2.5),red:Os(16726570,3),green:Os(5111674,3)}}function Mc(r,t,e,n,i,s=.05){r.add(se(s*.9,.018,.075),t.poly,0,e-.03,n),r.add(Pt(s,.01,.07,.004),t.poly,0,e+.026,n),r.add(Pt(.008,.05,.07,.003),t.poly,-s/2,e,n),r.add(Pt(.008,.05,.07,.003),t.poly,s/2,e,n),r.add(se(s*.8,.012,.02),t.gun,0,e-.018,n+.03);let o=new mt(new pn(s*.86,.044),t.glass);o.position.set(0,e,n-.02);let a=new Te,l=new mt(new _i(.0013,10),i);a.add(l);let c=new mt(new Eo(.0055,.0065,24),i);return a.add(c),a.position.set(0,e,n-.021),[o,a]}function Ru(r,t,e,n,i,s,o){r.add(ue(s,s,i,14),t.poly,0,e,n,Math.PI/2),r.add(ue(s*1.25,s,.03,14),t.poly,0,e,n-i/2-.012,Math.PI/2),r.add(ue(s,s*1.2,.03,14),t.poly,0,e,n+i/2+.012,Math.PI/2),r.add(se(.016,.03,.02),t.gun,0,e-s-.012,n-i*.3),r.add(se(.016,.03,.02),t.gun,0,e-s-.012,n+i*.3),r.add(ue(.006,.006,.02,8),t.gun,s+.006,e,n,0,0,Math.PI/2);let a=new mt(new _i(s*.92,16),t.glass);a.position.set(0,e,n+i/2+.026);let l=new Te;return l.add(new mt(new pn(s*1.5,7e-4),o)),l.add(new mt(new pn(7e-4,s*1.5),o)),l.add(new mt(new _i(.0012,8),o)),l.position.set(0,e,n+i/2+.025),[a,l]}function Iu(r,t,e={}){let n=jg(t),i=new jn,s=new Te,o={zoom:1.5,sight:new v,hand:new v(0,-.04,-.34),grip:new v(0,-.08,.01),muzzle:new v(0,.01,-.75)},a=[],l=null,c=new jn;if(r==="rifle"){i.add(Pt(.07,.095,.34,.012),n.gun,0,0,-.05),i.add(Pt(.072,.03,.2,.008),n.poly,0,-.055,-.02),i.add(se(.052,.014,.4),n.metal,0,.055,-.1);for(let u=0;u<12;u++)i.add(se(.056,.006,.012),n.metal,0,.064,-.28+u*.03);i.add(Pt(.078,.085,.3,.02),n.poly,0,-.004,-.37);for(let u=0;u<5;u++)i.add(se(.08,.012,.03),n.dark||n.gun,0,.012,-.29-u*.045);i.add(se(.079,.012,.22),n.accent,0,-.03,-.37),i.add(ue(.013,.013,.26,10),n.metal,0,.012,-.6,Math.PI/2),i.add(ue(.021,.021,.07,10),n.poly,0,.012,-.74,Math.PI/2);for(let u=0;u<3;u++)i.add(se(.044,.008,.01),n.gun,0,.012,-.72-u*.018);i.add(Pt(.045,.13,.062,.015),n.poly,0,-.1,.02,-.28),i.add(Ze(.028,.005,6,16),n.gun,0,-.065,-.04,0,Math.PI/2),i.add(Pt(.05,.075,.16,.015),n.poly,0,-.005,.19),i.add(Pt(.058,.11,.07,.015),n.poly,0,-.02,.3),i.add(se(.06,.12,.02),n.dark||n.gun,0,-.02,.34),i.add(se(.03,.025,.05),n.gun,.04,.02,-.02),c.add(Pt(.038,.17,.07,.01),n.poly,0,-.08,0,.18),c.add(se(.04,.02,.072),n.metal,0,-.165,-.015,.18),a=Mc(i,n,.1,-.08,n.red),o.sight.set(0,.1,-.1),o.zoom=1.6,o.magRest=new v(0,-.05,-.15)}else if(r==="shotgun"){i.add(Pt(.085,.11,.32,.015),n.gun,0,0,-.04),i.add(ue(.021,.021,.44,12),n.metal,0,.025,-.4,Math.PI/2),i.add(ue(.017,.017,.36,10),n.gun,0,-.022,-.36,Math.PI/2),i.add(ue(.026,.026,.03,12),n.poly,0,.025,-.62,Math.PI/2),i.add(Pt(.05,.14,.065,.015),n.tan,0,-.105,.03,-.25),i.add(Pt(.06,.09,.22,.02),n.tan,0,-.01,.22),i.add(se(.062,.11,.025),n.poly,0,-.015,.34),i.add(se(.086,.012,.2),n.accent,0,.04,-.05),i.add(Ze(.03,.005,6,16),n.gun,0,-.07,-.03,0,Math.PI/2);for(let u=0;u<4;u++)i.add(ue(.008,.008,.03,8),n.red,.045,0,-.1-u*.04,0,0,Math.PI/2);c.add(Pt(.06,.06,.15,.02),n.tan,0,0,0);for(let u=0;u<5;u++)c.add(se(.062,.006,.01),n.poly,0,0,-.06+u*.03);a=Mc(i,n,.092,-.05,n.green,.042),o.sight.set(0,.092,-.07),o.zoom=1.25,o.magRest=new v(0,-.022,-.4),o.hand.set(0,-.04,-.4),o.pump=!0}else if(r==="gyrojet"){i.add(ue(.052,.052,.52,16),n.metal,0,.012,-.18,Math.PI/2);for(let u=0;u<4;u++)i.add(Ze(.054,.006,6,20),n.gun,0,.012,-.04-u*.1);i.add(ue(.068,.052,.1,16),n.gun,0,.012,-.48,Math.PI/2),i.add(ue(.052,.06,.05,16),n.poly,0,.012,.1,Math.PI/2),i.add(Pt(.05,.14,.07,.015),n.poly,0,-.1,-.01,-.2),i.add(Pt(.045,.09,.07,.015),n.poly,0,-.07,-.3),i.add(Ze(.054,.008,6,20),n.accent,0,.012,-.32),c.add(Pt(.045,.1,.13,.012),n.gun,0,-.05,0),c.add(Cu(.012,.03,8),n.red,0,-.005,-.075,-Math.PI/2),a=Ru(i,n,.09,-.12,.13,.017,n.red),o.sight.set(0,.09,-.12),o.zoom=1.8,o.magRest=new v(0,-.06,-.14),o.hand.set(0,-.06,-.3)}else if(r==="recoilless"){i.add(ue(.068,.068,.9,18),n.tan,0,.02,-.2,Math.PI/2),i.add(ue(.07,.07,.06,18),n.gun,0,.02,-.64,Math.PI/2),i.add(ue(.11,.07,.2,18),n.gun,0,.02,.34,Math.PI/2);for(let u=0;u<3;u++)i.add(Ze(.07,.007,6,22),n.gun,0,.02,-.4+u*.25);i.add(Pt(.05,.14,.07,.015),n.poly,0,-.1,0,-.2),i.add(Pt(.05,.12,.07,.015),n.poly,0,-.09,-.3,.2),i.add(se(.05,.02,.4),n.accent,-.07,.02,-.2),c.add(ue(.05,.05,.16,14),n.metal,0,0,0,Math.PI/2),c.add(ue(.052,.052,.02,14),n.red,0,0,.08,Math.PI/2),a=Ru(i,n,.13,-.12,.2,.022,n.red),o.sight.set(0,.13,-.12),o.zoom=2.6,o.magRest=new v(0,.02,.52),o.hand.set(0,-.06,-.3),o.breech=!0}else{i.add(Pt(.09,.1,.46,.02),n.metal,0,0,-.1),i.add(Pt(.1,.05,.22,.015),n.gun,0,.068,-.02),i.add(ue(.026,.045,.2,12),n.gun,0,.005,-.42,Math.PI/2),i.add(ue(.03,.03,.02,12),n.coil,0,.005,-.53,Math.PI/2);for(let u=0;u<6;u++)i.add(se(.12,.06,.008),n.gun,0,0,-.08-u*.03);i.add(se(.094,.018,.28),n.coil,0,-.04,-.15),i.add(Pt(.05,.14,.07,.015),n.poly,0,-.11,.02,-.28),i.add(Pt(.06,.09,.16,.02),n.poly,0,-.01,.2),c.add(Pt(.06,.05,.1,.012),n.poly,0,0,0),c.add(se(.062,.01,.06),n.coil,0,.026,0),a=Mc(i,n,.13,-.04,n.coil,.05),o.sight.set(0,.13,-.06),o.zoom=1.6,o.magRest=new v(0,0,.08),o.cell=!0}let h=i.build(!e.noShadow);s.add(h);for(let u of a)u.userData.noOutline=!0,s.add(u);return l=c.build(!e.noShadow),l.position.copy(o.magRest),s.add(l),o.mag=l,s.userData=o,s}function Lu(r,t,e){let n=Pu(r),i=new Te,s=new jn;s.add(Pt(.5,.62,.34,.07,3),n.suit,0,.15,0),s.add(Pt(.44,.3,.07,.03),n.hard,0,.27,-.175),s.add(Pt(.36,.1,.05,.02),n.team,0,.14,-.18),s.add(se(.1,.045,.02),n.glow,.12,.34,-.215),s.add(se(.05,.045,.02),n.white,-.13,.34,-.215);for(let R=0;R<3;R++)s.add(Pt(.47,.045,.32,.018),n.fabric,0,.02-R*.055,0);s.add(Pt(.53,.1,.37,.03),n.hard,0,-.13,0),s.add(se(.08,.06,.02),n.team,0,-.13,-.19);for(let R of[-1,1])s.add(Pt(.07,.07,.07,.02),n.dark,R*.21,-.13,-.15);s.add(Ze(.17,.04,8,24),n.hard,0,.47,0,Math.PI/2);for(let R of[-1,1])s.add(Pt(.17,.08,.22,.035),n.team,R*.3,.42,0,0,0,-R*.35);s.add(Pt(.56,.72,.26,.06,3),n.hard,0,.12,.3),s.add(Pt(.5,.6,.04,.02),n.dark,0,.12,.44);for(let R of[-1,1])s.add(ue(.07,.07,.56,14),n.suit,R*.16,.12,.47),s.add(An(.07,12,8),n.suit,R*.16,.4,.47),s.add(An(.07,12,8),n.suit,R*.16,-.16,.47),s.add(Ze(.071,.01,6,16),n.team,R*.16,.25,.47,Math.PI/2);for(let R=0;R<4;R++)s.add(se(.18,.012,.03),n.dark,0,-.05-R*.035,.455);s.add(se(.57,.05,.27),n.glow,0,.42,.3),s.add(ue(.006,.006,.3,6),n.dark,-.22,.6,.38),s.add(An(.014,6,4),n.glow,-.22,.75,.38);for(let R of t){let T=R.pos;s.add(Pt(.13,.13,.15,.03),n.dark,T.x,T.y,T.z),s.limb(new v(T.x*.55,T.y,.2),new v(T.x,T.y,T.z+.06),.022,.022,n.hard,6);for(let P of e){let C=P.clone().negate();xr.setFromUnitVectors(new v(0,-1,0),C),Ns.compose(bc.copy(T).addScaledVector(C,.075),xr,Sc.set(1,1,1)),s.addMatrix(Cu(.022,.04,8),n.hard,Ns)}s.add(se(.135,.025,.03),n.glow,T.x,T.y+.075,T.z-.04)}s.add(Pt(.42,.17,.3,.06),n.suit,0,-.25,0);for(let R of[-1,1]){let T=new v(R*.14,-.27,-.02),P=new v(R*.15,-.6,-.18),C=new v(R*.14,-.94,0);s.limb(T,P,.105,.09,n.suit,10),s.limb(P,C,.088,.075,n.suit,10),s.add(An(.09,10,8),n.fabric,P.x,P.y,P.z),s.add(Pt(.15,.13,.08,.03),n.team,P.x,P.y+.01,P.z-.07,.3),s.add(Pt(.11,.2,.05,.02),n.hard,R*.145,-.78,-.13,-.38),s.add(Pt(.16,.14,.28,.04),n.hard,R*.14,-1,.05),s.add(se(.165,.03,.29),n.dark,R*.14,-1.075,.05)}let o=s.build();i.add(o);let a=new Te;a.position.set(0,.45,0),i.add(a);let l=new jn;l.add(An(.215,18,14),n.suit,0,.15,-.02),l.add(Ze(.16,.025,8,24),n.hard,0,.02,-.01,Math.PI/2),l.add(An(.2,18,12),n.visor,0,.15,-.045,0,0,0,1,.82,1),l.add(Ze(.155,.012,6,24),n.hard,0,.15,-.16,0,0,0,1.15,.85,1);for(let R of[-1,1])l.add(ue(.03,.03,.07,10),n.dark,R*.2,.2,-.04,0,0,Math.PI/2),l.add(ue(.022,.022,.01,10),n.white,R*.236,.2,-.04,0,0,Math.PI/2);l.add(se(.05,.03,.08),n.team,0,.36,0);let c=new v(.28,-.08,0),h=new v(.27,-.27,-.2),u=new v(.13,-.19,-.39);l.limb(c,h,.075,.07,n.suit,10),l.add(An(.07,10,8),n.fabric,h.x,h.y,h.z),l.limb(h,u,.066,.058,n.suit,10),l.add(Pt(.08,.09,.1,.025),n.hard,u.x,u.y,u.z),l.add(An(.085,10,8),n.hard,c.x,c.y,c.z);let d=l.build();a.add(d);let f=new Te;f.position.set(.13,-.1,-.4),a.add(f);let g=new Te,x=new v(-.28,-.08,0);g.position.copy(x),a.add(g);let m=new jn,p=new v(-.22,-.26,-.22).sub(x),_=new v(.1,-.16,-.68).sub(x);m.add(An(.085,10,8),n.hard,0,0,0),m.limb(new v,p,.075,.07,n.suit,10),m.add(An(.07,10,8),n.fabric,p.x,p.y,p.z),m.limb(p,_,.066,.058,n.suit,10);let S=p.clone().lerp(_,.45);m.add(Pt(.07,.03,.09,.01),n.dark,S.x,S.y+.06,S.z),m.add(se(.05,.005,.06),n.glow,S.x,S.y+.077,S.z),m.add(Pt(.08,.08,.1,.025),n.hard,_.x,_.y,_.z),g.add(m.build());let y=new mt(new En(.06,1),new Ot({color:3355443,emissive:r,emissiveIntensity:1.5}));return y.position.copy(_).add(new v(0,.03,-.05)),y.visible=!1,y.userData.noOutline=!0,g.add(y),{root:i,upper:a,gunMount:f,leftArm:g,nade:y,body:o,head:d}}function Ec(r){let t=Pu(r),e=new jn;return e.add(Pt(.085,.09,.11,.03),t.hard,0,0,0),e.add(Pt(.06,.03,.08,.012),t.dark,0,.052,0),e.limb(new v(0,0,.04),new v(0,0,.42),.046,.058,t.suit,12),e.add(Ze(.05,.011,6,18),t.team,0,0,.1),e.add(se(.05,.006,.07),t.glow,0,.066,.16),e.add(Pt(.06,.025,.09,.01),t.dark,0,.055,.16),e.build(!1)}function Du(){let r=new jn,t=new Ot({color:11187133,roughness:.45,metalness:.6}),e=new Ot({color:14198570,roughness:.5,metalness:.3}),n=new Ot({color:3159355,roughness:.6,metalness:.5}),i=Os(16760896,2.5);r.add(An(1.08,24,16),t),r.add(Ze(1.1,.07,8,32),e,0,0,0,Math.PI/2),r.add(Ze(1.1,.07,8,32),e,0,0,0,0,Math.PI/2);for(let s of[-1,1])r.add(ue(.32,.32,.08,16),n,0,s*1.06,0),r.add(ue(.05,.05,.02,8),i,0,s*1.11,0),r.add(Ze(.16,.025,6,12),n,s*1.08,.25,0,0,Math.PI/2),r.add(Ze(.16,.025,6,12),n,0,.25,s*1.08);return r.build()}var Me=72,Kt=36,Bt=36,ks={hangar:{name:"Hangar Bay",desc:"Enclosed 144 m hangar. Walls everywhere to push off.",enclosed:!0,bounds:[72,36,36],navStep:[6,7.5],navR:10.5,spawnX:64},yard:{name:"Derelict Yard",desc:"Open orbit, 300 m across. No walls: drift too far and your suit runs out of luck.",enclosed:!1,bounds:[150,70,70],navStep:[11,11],navR:19.5,spawnX:124}};function Nu(r,t=2.5){let e=r.width,n=r.height,i=r.getContext("2d").getImageData(0,0,e,n).data,s=document.createElement("canvas");s.width=e,s.height=n;let o=s.getContext("2d"),a=o.createImageData(e,n),l=(h,u)=>{h=(h+e)%e,u=(u+n)%n;let d=(u*e+h)*4;return(i[d]*.3+i[d+1]*.59+i[d+2]*.11)/255};for(let h=0;h<n;h++)for(let u=0;u<e;u++){let d=(l(u+1,h)-l(u-1,h))*t,f=(l(u,h+1)-l(u,h-1))*t,g=1/Math.hypot(d,f,1),x=(h*e+u)*4;a.data[x]=(-d*g*.5+.5)*255,a.data[x+1]=(f*g*.5+.5)*255,a.data[x+2]=(g*.5+.5)*255,a.data[x+3]=255}o.putImageData(a,0,0);let c=new Qn(s);return c.wrapS=c.wrapT=xi,c}function Bs(r,t,e,n,i,s){let o=tx(r,t,e,n,i);return new Ot({map:o,normalMap:Nu(o.image),normalScale:new ht(.8,.8),...s})}function tx(r,t,e,n=256,i=2){let s=document.createElement("canvas");s.width=s.height=n;let o=s.getContext("2d",{willReadFrequently:!0});o.fillStyle=r,o.fillRect(0,0,n,n);let a=o.getImageData(0,0,n,n);for(let h=0;h<a.data.length;h+=4){let u=(Math.random()-.5)*14;a.data[h]+=u,a.data[h+1]+=u,a.data[h+2]+=u}o.putImageData(a,0,0);let l=n/i;o.strokeStyle=t,o.lineWidth=3;for(let h=0;h<i;h++)for(let u=0;u<i;u++){o.strokeRect(h*l+3,u*l+3,l-6,l-6),o.fillStyle=t;for(let[d,f]of[[10,10],[l-10,10],[10,l-10],[l-10,l-10]])o.beginPath(),o.arc(h*l+d,u*l+f,2.5,0,Math.PI*2),o.fill()}e&&(o.fillStyle=e,o.fillRect(0,n*.48,n,n*.04));let c=new Qn(s);return c.wrapS=c.wrapT=xi,c.colorSpace=Ue,c.anisotropy=4,c}function ex(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d");t.fillStyle="#2a2d31",t.fillRect(0,0,128,128),t.fillStyle="#c9a227";for(let n=-128;n<256;n+=32)t.beginPath(),t.moveTo(n,0),t.lineTo(n+16,0),t.lineTo(n+16-128,128),t.lineTo(n-128,128),t.fill();let e=new Qn(r);return e.wrapS=e.wrapT=xi,e.colorSpace=Ue,e}function nx(r){let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d",{willReadFrequently:!0});e.fillStyle=r,e.fillRect(0,0,256,128);for(let i=0;i<256;i+=12)e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(i,0,4,128),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(i+5,0,2,128);e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=6,e.strokeRect(0,0,256,128);let n=new Qn(t);return n.wrapS=n.wrapT=xi,n.colorSpace=Ue,n}function Oo(r){let t=nx(r);return new Ot({map:t,normalMap:Nu(t.image,3),roughness:.7,metalness:.45})}function ix(){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d");n.fillStyle="#123a6b",n.fillRect(0,0,1024,512);for(let s=0;s<70;s++){let o=Math.random()*1024,a=512*.15+Math.random()*512*.7,l=10+Math.random()*70;n.fillStyle=Math.random()<.5?"#3d6b35":"#7a6a45",n.globalAlpha=.85,n.beginPath(),n.ellipse(o,a,l*1.6,l,Math.random()*3,0,Math.PI*2),n.fill()}n.globalAlpha=1,n.fillStyle="#e8eef5",n.fillRect(0,0,1024,512*.06),n.fillRect(0,512*.94,1024,512*.06);for(let s=0;s<220;s++){let o=Math.random()*1024,a=Math.random()*512,l=6+Math.random()*40;n.globalAlpha=.25+Math.random()*.35,n.fillStyle="#ffffff",n.beginPath(),n.ellipse(o,a,l*2.5,l*.6,0,0,Math.PI*2),n.fill()}n.globalAlpha=1;let i=new Qn(e);return i.colorSpace=Ue,i}function Uu(r,t,e,n){let i=new Se(r,t,e),s=i.attributes.uv,o=[[e,t],[e,t],[r,e],[r,e],[r,t],[r,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/n,s.getY(c)*o[a][1]/n)}return i}var vr=class{constructor(t,e="hangar"){this.scene=t,this.mapId=ks[e]?e:"hangar",this.def=ks[this.mapId],this.enclosed=this.def.enclosed;let n=this.def.bounds;this.bounds={min:[-n[0],-n[1],-n[2]],max:[n[0],n[1],n[2]]},this.boxes=[],this.spheres=[],this.pods=[],this.group=new Te,t.add(this.group),this._hit={t:0,n:new v,kind:"",obj:null},this._rb={n:[0,0,0]},this.mats={hull:Bs("#59616a","#3a4047",null,256,2,{roughness:.8,metalness:.4}),hullBlue:Bs("#3d5470","#26364a","#3f8cff",256,2,{roughness:.75,metalness:.4}),hullOrange:Bs("#6e5440","#4a3626","#ff8a2a",256,2,{roughness:.75,metalness:.4}),deck:Bs("#3e4349","#2b2f33","#c9a227",256,4,{roughness:.85,metalness:.35}),ceil:Bs("#7c848c","#5c636a",null,256,4,{roughness:.8,metalness:.35}),steel:Bs("#80878e","#5a6067",null,128,1,{roughness:.5,metalness:.7}),girder:new Ot({map:ex(),roughness:.7,metalness:.5}),cRed:Oo("#8c3a2b"),cTeal:Oo("#2b6f73"),cYel:Oo("#a88a2c"),cGrey:Oo("#5b6168"),stripW:new ie({color:new ot(13625087).multiplyScalar(1.8)}),stripB:new ie({color:new ot(4164863).multiplyScalar(1.8)}),stripO:new ie({color:new ot(16747050).multiplyScalar(1.8)}),glyphB:new ie({color:1919626}),glyphO:new ie({color:9062934})},this.enclosed?(this.buildHull(),this.buildInterior()):this.buildYard(),this.buildSpace(),this.buildPods(),this.buildNav(),this.spawns=[this.makeSpawns(-1),this.makeSpawns(1)]}dispose(){this.scene.remove(this.group)}addBox(t,e,n,i={}){let s={min:t,max:e,kind:i.kind||"box"};if(this.boxes.push(s),n){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=new mt(Uu(o,a,l,i.tile||4),n);c.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c),s.mesh=c}return s}addMirrored(t,e,n,i,s){this.addBox(t,e,n,s),this.addBox([-e[0],t[1],t[2]],[-t[0],e[1],e[2]],i||n,s)}strip(t,e,n,i,s,o,a){let l=new mt(new Se(Math.max(.05,i-t),Math.max(.05,s-e),Math.max(.05,o-n)),a);return l.position.set((t+i)/2,(e+s)/2,(n+o)/2),this.group.add(l),l}buildHull(){let e=this.group,n=(i,s,o,a,l,c,h,u=6)=>{let d=new mt(Uu(i,s,o,u),h);return d.position.set(a,l,c),d.receiveShadow=!0,e.add(d),d};n(1,2*Kt,2*Bt,-Me-1/2,0,0,this.mats.hullBlue,8),n(1,2*Kt,2*Bt,Me+1/2,0,0,this.mats.hullOrange,8),n(2*Me,1,2*Bt,0,-Kt-1/2,0,this.mats.deck,8),n(2*Me,1,2*Bt,0,Kt+1/2,0,this.mats.ceil,8);for(let i of[-1,1]){let s=i*(Bt+.5);n(2*Me,Kt-11,1,0,(Kt+11)/2,s,this.mats.hull,8),n(2*Me,Kt-11,1,0,-(Kt+11)/2,s,this.mats.hull,8),n(Me-30,22,1,-(Me+30)/2,0,s,this.mats.hull,8),n(Me-30,22,1,(Me+30)/2,0,s,this.mats.hull,8);let o=new mt(new pn(60,22),new ie({color:8956620,transparent:!0,opacity:.07,side:dn,depthWrite:!1}));o.position.set(0,0,i*Bt),e.add(o),this.strip(-30.3,11,i*Bt-.2,30.3,11.3,i*Bt+.2,this.mats.stripW),this.strip(-30.3,-11.3,i*Bt-.2,30.3,-11,i*Bt+.2,this.mats.stripW);for(let a=-30;a<=30;a+=15)this.strip(a-.25,-11,i*Bt-.3,a+.25,11,i*Bt+.3,this.mats.steel)}for(let i of[-48,-24,24,48]){let s=i-.7,o=i+.7,a=1.6,l=this.mats.steel;this.addBox([s,-Kt,-Bt],[o,-Kt+a,Bt],l,{tile:2}),this.addBox([s,Kt-a,-Bt],[o,Kt,Bt],l,{tile:2}),this.addBox([s,-Kt+a,-Bt],[o,Kt-a,-Bt+a],l,{tile:2}),this.addBox([s,-Kt+a,Bt-a],[o,Kt-a,Bt],l,{tile:2});let c=i<0?this.mats.stripB:this.mats.stripO;this.strip(i-.1,-Kt+a,-Bt+4,i+.1,-Kt+a+.06,Bt-4,c),this.strip(i-.1,Kt-a-.06,-Bt+4,i+.1,Kt-a,Bt-4,c)}for(let i of[-20,0,20])this.strip(-Me+2,-Kt+.02,i-.15,Me-2,-Kt+.08,i+.15,this.mats.stripW),this.strip(-Me+2,Kt-.08,i-.15,Me-2,Kt-.02,i+.15,this.mats.stripW);for(let i of[-1,1]){let s=i<0?this.mats.stripB:this.mats.stripO,o=i*(Me-.05);for(let a=-2;a<=2;a++)this.strip(o-.05,a*7-.12,-20,o+.05,a*7+.12,20,i<0?this.mats.glyphB:this.mats.glyphO)}}buildInterior(){let t=this.mats;this.spheres.push({c:new v(0,0,0),r:6});let e=new mt(new En(6,3),new Ot({color:6976380,roughness:.35,metalness:.85,flatShading:!0}));e.castShadow=!0,e.receiveShadow=!0,this.group.add(e);let n=new mt(new Wi(6.15,.35,8,48),new ie({color:new ot(6289151).multiplyScalar(2.2)}));n.rotation.x=Math.PI/2,this.group.add(n);let i=n.clone();i.rotation.set(0,Math.PI/2,0),this.group.add(i),this.reactorRings=[n,i];let s=new $e(6289151,60,60,1);this.group.add(s),this.addBox([-1.2,-Kt,-1.2],[1.2,-6,1.2],t.girder,{tile:2}),this.addBox([-1.2,6,-1.2],[1.2,Kt,1.2],t.girder,{tile:2});let o=11,a=.6;this.addBox([-o,-a,o-1.2],[o,a,o],t.steel,{tile:2}),this.addBox([-o,-a,-o],[o,a,-o+1.2],t.steel,{tile:2}),this.addBox([o-1.2,-a,-o+1.2],[o,a,o-1.2],t.steel,{tile:2}),this.addBox([-o,-a,-o+1.2],[-o+1.2,a,o-1.2],t.steel,{tile:2});let l=55,c=56.6,h=(m,p,_,S)=>this.addMirrored([l,m,_],[c,p,S],t.hullOrange,t.hullBlue,{tile:4});h(-Kt,-15,-Bt,Bt),h(15,Kt,-Bt,Bt),h(-15,15,-Bt,-19),h(-15,15,19,Bt),h(-4,4,-4,4),h(-15,-10,-19,19),h(10,15,-6,6),this.addMirrored([36,8,-14],[48,10.6,-11.4],t.cRed,t.cTeal,{tile:3}),this.addMirrored([30,-12,10],[32.6,0,12.6],t.cYel,t.cYel,{tile:3}),this.addMirrored([40,-22,0],[42.6,-19.4,12],t.cTeal,t.cRed,{tile:3}),this.addMirrored([20,20,18],[32,22.6,20.6],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([22,-24,-24],[24.6,-21.4,-12],t.cRed,t.cTeal,{tile:3}),this.addMirrored([44,-4,16],[50,-1.4,25],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([10,22,-8],[22,24.6,-5.4],t.cYel,t.cYel,{tile:3}),this.addMirrored([33,12,22],[35.6,24,24.6],t.cTeal,t.cRed,{tile:3}),this.addMirrored([14,-8,-30],[16.6,4,-27.4],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([24,-6,-6],[24.6,6,6],t.steel,t.steel,{tile:3}),this.addMirrored([14,12,-20],[22,12.5,-12],t.steel,t.steel,{tile:3}),this.addMirrored([12,-16,22],[18,-10,22.5],t.steel,t.steel,{tile:3}),this.addMirrored([44,18,-6],[44.5,26,6],t.steel,t.steel,{tile:3}),this.addMirrored([36,-30,-28],[44,-29.5,-20],t.steel,t.steel,{tile:3}),this.addMirrored([17.4,-28.6,-Bt],[18.6,-27.4,Bt],t.girder,t.girder,{tile:2}),this.addMirrored([37.4,25.4,-Bt],[38.6,26.6,Bt],t.girder,t.girder,{tile:2}),this.addMirrored([45.4,-Kt,-26.6],[46.6,Kt,-25.4],t.girder,t.girder,{tile:2}),this.addBox([-Me,-.6,27.4],[Me,.6,28.6],t.girder,{tile:2}),this.addBox([-Me,17.4,-28.6],[Me,18.6,-27.4],t.girder,{tile:2}),this.addBox([-6,18,-.3],[6,26,.3],t.steel,{tile:3}),this.addBox([-6,-26,-.3],[6,-18,.3],t.steel,{tile:3}),this.addBox([-.3,-6,16],[.3,6,22],t.steel,{tile:3}),this.addBox([-.3,-6,-22],[.3,6,-16],t.steel,{tile:3});let u=new fr(12571903,4866102,1.1);this.group.add(u);let d=new Yi(16773853,2.2);d.position.set(.4,.3,1),this.group.add(d),this.sun=d,this.buildHangarDetail();let f=new Yi(10336511,.6);f.position.set(-.5,-.6,-1),this.group.add(f);let g=new $e(4164863,22,50,1);g.position.set(-62,0,0),this.group.add(g);let x=new $e(16747050,22,50,1);x.position.set(62,0,0),this.group.add(x)}buildSpace(){let e=new Float32Array(9e3),n=new Float32Array(3e3*3),i=new v;for(let h=0;h<3e3;h++){i.randomDirection().multiplyScalar(3500),e.set([i.x,i.y,i.z],h*3);let u=.5+Math.random()*.5;n.set([u,u,u*(.85+Math.random()*.3)],h*3)}let s=new le;s.setAttribute("position",new me(e,3)),s.setAttribute("color",new me(n,3)),this.group.add(new Ps(s,new ur({size:2.2,sizeAttenuation:!1,vertexColors:!0,fog:!1})));let o=new mt(new wn(900,64,32),new Ot({map:ix(),roughness:1,metalness:0}));this.enclosed?o.position.set(250,-620,1700):(o.position.set(300,-1500,900),o.scale.setScalar(1.4)),o.rotation.z=.3,this.group.add(o),this.planet=o;let a=new mt(new wn(935,64,32),new xe({transparent:!0,blending:fn,depthWrite:!1,side:Ae,uniforms:{},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)),3.0); gl_FragColor = vec4(0.35,0.6,1.0,1.0)*f*1.4; }"}));a.position.copy(o.position),a.scale.copy(o.scale),this.group.add(a);let l=(()=>{let h=document.createElement("canvas");h.width=h.height=128;let u=h.getContext("2d"),d=u.createRadialGradient(64,64,4,64,64,64);return d.addColorStop(0,"rgba(255,255,240,1)"),d.addColorStop(.2,"rgba(255,240,200,0.9)"),d.addColorStop(1,"rgba(255,200,120,0)"),u.fillStyle=d,u.fillRect(0,0,128,128),new Qn(h)})(),c=new _o(new hr({map:l,blending:fn,depthWrite:!1}));c.position.set(-600,300,-2500),c.scale.set(500,500,1),this.group.add(c)}buildPods(){let t=Du();(this.enclosed?[[8,14,12],[-8,-14,-12],[30,0,-24],[-30,0,24],[50,26,10],[-50,-26,-10],[0,28,20],[0,-28,-20]]:[[20,30,20],[-20,-30,-20],[60,-15,35],[-60,15,-35],[95,25,10],[-95,-25,-10],[40,40,-40],[-40,-40,40],[0,35,-30],[0,-35,30],[75,-45,-30],[-75,45,30]]).forEach((n,i)=>{let s=t.clone();this.group.add(s);let o={pos:new v(...n),vel:new v(At(-1,1),At(-1,1),At(-1,1)).multiplyScalar(.8),r:1.1,mass:180,mesh:s,quat:new ge,angVel:new v(At(-.4,.4),At(-.4,.4),At(-.4,.4)),holders:0};s.position.copy(o.pos),this.pods.push(o)})}deco(t,e,n,i,s,o=0,a=0,l=0){let c=new mt(t,e);return c.position.set(n,i,s),c.rotation.set(o,a,l),c.castShadow=!1,c.receiveShadow=!0,this.group.add(c),c}buildHangarDetail(){let t=new Ot({color:9072458,roughness:.45,metalness:.8}),e=new Ot({color:6122360,roughness:.4,metalness:.85}),n=new Ot({color:2896183,roughness:.6,metalness:.6}),i=new ie({color:new ot(16773590).multiplyScalar(2.2)}),s=new ie({color:new ot(16724e3).multiplyScalar(2)});for(let o of[-1,1])for(let[a,l,c]of[[15,.35,t],[16.2,.22,e],[-15,.35,e],[-16.3,.25,t]]){let h=this.deco(new nn(l,l,2*Me-4,12),c,0,a,o*(Bt-.6-l),0,0,Math.PI/2);for(let u=-Me+8;u<Me-4;u+=12)this.deco(new Wi(l+.04,.06,6,14),n,u,a,o*(Bt-.6-l),0,Math.PI/2,0)}for(let o of[-1,1])for(let a=-60;a<=60;a+=20)this.deco(new Se(2.2,.5,.4),n,a,24,o*(Bt-.2)),this.deco(new Se(2,.22,.1),i,a,24,o*(Bt-.42)),this.deco(new Se(2.2,.5,.4),n,a,-24,o*(Bt-.2)),this.deco(new Se(2,.22,.1),i,a,-24,o*(Bt-.42));for(let o=-60;o<=60;o+=15)for(let a of[-Kt+.05,Kt-.05])this.deco(new Se(3,.1,1.6),n,o,a,-30),this.deco(new Se(3,.1,1.6),n,o,a,30);for(let o of[-56,56])for(let a of[-15,15])for(let l of[-19,19])this.deco(new wn(.25,10,8),s,o*1+(o>0?.8:-.8),a,l);for(let o of[-1,1])for(let a of[-24,24]){let l=this.deco(new Se(1.2,2.4,3.2),n,o*70.6,-6,a);this.deco(new pn(2.6,1.4),new ie({color:new ot(o<0?4164863:16747050).multiplyScalar(1.4)}),o*69.95,-5.6,a,0,-o*Math.PI/2,0)}}buildYardDetail(){let t=new Ot({color:10134186,roughness:.35,metalness:.85}),e=new Ot({color:2896183,roughness:.6,metalness:.6}),n=new Ot({color:14014942,roughness:.4,metalness:.4,side:dn}),i=new ie({color:new ot(4259696).multiplyScalar(2.5)}),s=new ie({color:new ot(16724e3).multiplyScalar(2.5)}),o=new ie({color:new ot(16767392).multiplyScalar(1.6)});this.deco(new nn(.15,.15,14,8),t,0,27,0),this.deco(new wn(.4,10,8),s,0,34.2,0);let a=this.deco(new wn(5,24,8,0,Math.PI*2,0,.7),n,0,-28,0,Math.PI,0,0);a.castShadow=!0,this.deco(new nn(.2,.2,6,8),t,0,-24,0);for(let l=-12;l<=12;l+=3)for(let c of[-7.02,7.02])this.deco(new pn(1.4,.8),o,l,3,c,0,c>0?0:Math.PI,0);for(let l of[-1,1])for(let c of[-20,20])for(let h of[-30,30])this.deco(new wn(.5,10,8),l<0?i:s,l*129,c,h);for(let l of[-1,1])this.deco(new nn(.12,.12,100,6),e,l*65,0,0,0,0,Math.PI/2)}raycast(t,e,n,i=!1){let s=n,o="",a=null,l=this._hit,c=this._rb,h=t.x+e.x*n,u=t.y+e.y*n,d=t.z+e.z*n,f=Math.min(t.x,h),g=Math.max(t.x,h),x=Math.min(t.y,u),m=Math.max(t.y,u),p=Math.min(t.z,d),_=Math.max(t.z,d);for(let R=0;R<this.boxes.length;R++){let T=this.boxes[R];if(T.max[0]<f||T.min[0]>g||T.max[1]<x||T.min[1]>m||T.max[2]<p||T.min[2]>_)continue;let P=yc(t,e,T,s,c);P>=0&&P<s&&(s=P,o="box",a=T,l.n.set(c.n[0],c.n[1],c.n[2]).normalize())}for(let R of this.spheres){let T=On(t,e,R.c,R.r,s);T>=0&&T<s&&(s=T,o="sphere",a=R,l.n.set(t.x+e.x*T-R.c.x,t.y+e.y*T-R.c.y,t.z+e.z*T-R.c.z).normalize())}if(!i)for(let R of this.pods){let T=On(t,e,R.pos,R.r,s);T>=0&&T<s&&(s=T,o="pod",a=R,l.n.set(t.x+e.x*T-R.pos.x,t.y+e.y*T-R.pos.y,t.z+e.z*T-R.pos.z).normalize())}let S=[t.x,t.y,t.z],y=[e.x,e.y,e.z];if(this.enclosed)for(let R=0;R<3;R++){if(Math.abs(y[R])<1e-12)continue;let P=((y[R]>0?this.bounds.max[R]:this.bounds.min[R])-S[R])/y[R];P>=0&&P<s&&(s=P,o="wall",a=null,l.n.set(0,0,0).setComponent(R,y[R]>0?-1:1))}return o?(l.t=s,l.kind=o,l.obj=a,l):null}segmentClear(t,e,n=.7,i=!0){let s=new v().subVectors(e,t),o=s.length();if(o<1e-6)return this.clearance(t)>n;s.divideScalar(o);for(let g=0;g<3;g++){let x=this.bounds.min[g]+n,m=this.bounds.max[g]-n,p=t.getComponent(g),_=e.getComponent(g);if(p<x||p>m||_<x||_>m)return!1}let a=Math.min(t.x,e.x)-n,l=Math.max(t.x,e.x)+n,c=Math.min(t.y,e.y)-n,h=Math.max(t.y,e.y)+n,u=Math.min(t.z,e.z)-n,d=Math.max(t.z,e.z)+n,f={min:[0,0,0],max:[0,0,0]};for(let g of this.boxes)if(!(g.max[0]<a||g.min[0]>l||g.max[1]<c||g.min[1]>h||g.max[2]<u||g.min[2]>d)){for(let x=0;x<3;x++)f.min[x]=g.min[x]-n,f.max[x]=g.max[x]+n;if(yc(t,s,f,o,null)>=0)return!1}for(let g of this.spheres)if(On(t,s,g.c,g.r+n,o)>=0)return!1;if(!i){for(let g of this.pods)if(On(t,s,g.pos,g.r+n,o)>=0)return!1}return!0}los(t,e,n=!1){let i=new v().subVectors(e,t),s=i.length();return s<1e-4?!0:(i.divideScalar(s),!this.raycast(t,i,s-.05,n))}clearance(t){let e=this.enclosed?Math.min(t.x-this.bounds.min[0],this.bounds.max[0]-t.x,t.y-this.bounds.min[1],this.bounds.max[1]-t.y,t.z-this.bounds.min[2],this.bounds.max[2]-t.z):1e9,n=new v;for(let i of this.boxes){Uo(t,i,n);let s=n.distanceTo(t);if(s<e&&(e=s),s===0)return-1}for(let i of this.spheres)e=Math.min(e,t.distanceTo(i.c)-i.r);return e}sphereContacts(t,e,n){let i=new v,s=new v;if(this.enclosed)for(let o=0;o<3;o++){let a=this.bounds.min[o]+e,l=this.bounds.max[o]-e,c=t.getComponent(o);c<a?(s.set(0,0,0).setComponent(o,1),n(s,a-c,"wall",null)):c>l&&(s.set(0,0,0).setComponent(o,-1),n(s,c-l,"wall",null))}for(let o of this.boxes){if(t.x+e<o.min[0]||t.x-e>o.max[0]||t.y+e<o.min[1]||t.y-e>o.max[1]||t.z+e<o.min[2]||t.z-e>o.max[2])continue;Uo(t,o,i),s.subVectors(t,i);let a=s.length();if(a<e)if(a>1e-6)s.divideScalar(a),n(s,e-a,"box",o);else{let l=0,c=1/0,h=1;for(let u=0;u<3;u++){let d=t.getComponent(u),f=d-o.min[u],g=o.max[u]-d;f<c&&(c=f,l=u,h=-1),g<c&&(c=g,l=u,h=1)}s.set(0,0,0).setComponent(l,h),n(s,c+e,"box",o)}}for(let o of this.spheres){s.subVectors(t,o.c);let a=s.length();a<e+o.r&&(s.divideScalar(Math.max(a,1e-6)),n(s,e+o.r-a,"sphere",o))}}nearestSurface(t,e){let n=null,i=e,s=new v;if(this.enclosed)for(let o=0;o<3;o++)for(let a of[-1,1]){let l=a>0?this.bounds.max[o]:this.bounds.min[o],c=Math.abs(l-t.getComponent(o));if(c<i){i=c;let h=t.clone();h.setComponent(o,l),n={point:h,normal:new v().setComponent(o,-a),kind:"wall",obj:null}}}for(let o of this.boxes){Uo(t,o,s);let a=s.distanceTo(t);a<i&&a>1e-6&&(i=a,n={point:s.clone(),normal:t.clone().sub(s).normalize(),kind:"box",obj:o})}for(let o of this.spheres){let a=t.distanceTo(o.c)-o.r;if(a<i){i=a;let l=t.clone().sub(o.c).normalize();n={point:o.c.clone().addScaledVector(l,o.r),normal:l,kind:"sphere",obj:o}}}for(let o of this.pods){let a=t.distanceTo(o.pos)-o.r;if(a<i){i=a;let l=t.clone().sub(o.pos).normalize();n={point:o.pos.clone().addScaledVector(l,o.r),normal:l,kind:"pod",obj:o}}}return n&&(n.dist=i),n}updatePods(t,e){let n=this.pods;for(let i of n){if(i.pos.addScaledVector(i.vel,t),!this.enclosed)for(let o=0;o<3;o++){let a=i.pos.getComponent(o),l=this.bounds.max[o]-4;Math.abs(a)>l&&Math.sign(i.vel.getComponent(o))===Math.sign(a)&&i.vel.setComponent(o,-i.vel.getComponent(o))}this.sphereContacts(i.pos,i.r,(o,a)=>{i.pos.addScaledVector(o,a);let l=i.vel.dot(o);l<0&&i.vel.addScaledVector(o,-1.6*l)});let s=i.angVel.length();if(s>1e-5){let o=new ge().setFromAxisAngle(i.angVel.clone().divideScalar(s),s*t);i.quat.premultiply(o)}}for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){let o=n[i],a=n[s],l=new v().subVectors(a.pos,o.pos),c=l.length();if(c<o.r+a.r&&c>1e-6){l.divideScalar(c);let h=o.r+a.r-c;o.pos.addScaledVector(l,-h/2),a.pos.addScaledVector(l,h/2);let u=new v().subVectors(a.vel,o.vel).dot(l);if(u<0){let d=-1.8*u/(1/o.mass+1/a.mass);o.vel.addScaledVector(l,-d/o.mass),a.vel.addScaledVector(l,d/a.mass)}}}this.reactorRings&&(this.reactorRings[0].rotation.z=e*.4,this.reactorRings[1].rotation.x=e*.3)}syncPodMeshes(){for(let t of this.pods)t.mesh.position.copy(t.pos),t.mesh.quaternion.copy(t.quat)}buildNav(){let t=[],e=new v,[n,i]=this.def.navStep,s=this.def.bounds,o=Math.floor((s[0]-4)/n)*n,a=Math.floor((s[1]-4)/i)*i,l=Math.floor((s[2]-4)/i)*i;for(let d=-o;d<=o;d+=n)for(let f=-a;f<=a;f+=i)for(let g=-l;g<=l;g+=i)e.set(d,f,g),this.clearance(e)>=1.6&&t.push({pos:e.clone(),surf:!1,normal:null});let c=1.15,h=(d,f)=>{this.clearance(d)>=c-.05&&t.push({pos:d.clone(),surf:!0,normal:f.clone()})};for(let d of this.boxes)for(let f=0;f<3;f++)for(let g of[-1,1]){let x=(f+1)%3,m=(f+2)%3,p=d.max[x]-d.min[x],_=d.max[m]-d.min[m];if(p<1.5&&_<1.5)continue;let S=Math.max(1,Math.round(p/5)),y=Math.max(1,Math.round(_/5)),R=new v().setComponent(f,g);for(let T=0;T<S;T++)for(let P=0;P<y;P++)e.setComponent(f,(g>0?d.max[f]:d.min[f])+g*c),e.setComponent(x,d.min[x]+p*(T+.5)/S),e.setComponent(m,d.min[m]+_*(P+.5)/y),h(e,R)}if(this.enclosed)for(let d=0;d<3;d++)for(let f of[-1,1]){let g=(d+1)%3,x=(d+2)%3,m=new v().setComponent(d,-f),p=10;for(let _=this.bounds.min[g]+6;_<this.bounds.max[g]-3;_+=p)for(let S=this.bounds.min[x]+6;S<this.bounds.max[x]-3;S+=p)e.setComponent(d,(f>0?this.bounds.max[d]:this.bounds.min[d])-f*c),e.setComponent(g,_),e.setComponent(x,S),h(e,m)}for(let d of this.spheres){let f=Math.round(10+d.r*2);for(let g=0;g<f;g++){let x=new v().randomDirection();e.copy(d.c).addScaledVector(x,d.r+c),Math.abs(e.x)<s[0]&&Math.abs(e.y)<s[1]&&Math.abs(e.z)<s[2]&&h(e,x)}}this.navCell=10,this.navHash=new Map,t.forEach((d,f)=>{d.i=f,d.nb=[],d.cost=[];let g=this.hashKey(d.pos);this.navHash.has(g)||this.navHash.set(g,[]),this.navHash.get(g).push(f)}),this.nav=t;let u=this.def.navR;for(let d of t)this.forNear(d.pos,u,f=>{if(f<=d.i)return;let g=t[f],x=d.pos.distanceTo(g.pos);x>u||this.segmentClear(d.pos,g.pos,.6)&&(d.nb.push(f),d.cost.push(x),g.nb.push(d.i),g.cost.push(x))})}hashKey(t){let e=this.navCell;return(Math.floor(t.x/e)+64)*4096+(Math.floor(t.y/e)+32)*64+(Math.floor(t.z/e)+32)}forNear(t,e,n){let i=this.navCell,s=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.y-e)/i),l=Math.floor((t.y+e)/i),c=Math.floor((t.z-e)/i),h=Math.floor((t.z+e)/i);for(let u=s;u<=o;u++)for(let d=a;d<=l;d++)for(let f=c;f<=h;f++){let g=this.navHash.get((u+64)*4096+(d+32)*64+(f+32));if(g)for(let x of g)n(x)}}nearestNode(t,e=!0){let n=-1,i=1/0;for(let s of[8,16,32])if(this.forNear(t,s,o=>{let a=this.nav[o].pos.distanceToSquared(t);a<i&&(!e||this.segmentClear(t,this.nav[o].pos,.4))&&(i=a,n=o)}),n>=0)return n;for(let s of this.nav){let o=s.pos.distanceToSquared(t);o<i&&(i=o,n=s.i)}return n}findPath(t,e,n=null){let i=this.nearestNode(t);if(i<0||e<0)return null;let s=this.nav.length,o=new Float32Array(s).fill(1/0),a=new Int32Array(s).fill(-1),l=new Uint8Array(s),c=this.nav[e].pos,h=new Do;o[i]=0,h.push(i,i===e?0:this.nav[i].pos.distanceTo(c));let u=0;for(;h.size&&u++<6e3;){let g=h.pop();if(g===e)break;if(l[g])continue;l[g]=1;let x=this.nav[g];for(let m=0;m<x.nb.length;m++){let p=x.nb[m];if(l[p])continue;let _=x.cost[m];n&&(_+=n(this.nav[p]));let S=o[g]+_;S<o[p]&&(o[p]=S,a[p]=g,h.push(p,S+this.nav[p].pos.distanceTo(c)))}}if(a[e]<0&&e!==i)return null;let d=[],f=e;for(;f>=0&&f!==i;)d.push(this.nav[f].pos.clone()),f=a[f];return d.reverse(),d.length||d.push(this.nav[e].pos.clone()),d}makeSpawns(t){let e=[],n=this.def.spawnX,i=this.enclosed?[-14,-5,5,14]:[-20,-7,7,20];for(let s of[-10,-3,4,10])for(let o of i)e.push(new v(t*n,s,o));return e}outside(t){let e=0;for(let n=0;n<3;n++)e=Math.max(e,Math.abs(t.getComponent(n))-this.bounds.max[n]);return e}buildYard(){let t=this.mats,e=this.def.bounds[0];this.addBox([-14,-7,-7],[14,7,7],t.hull,{tile:4}),this.addBox([-5,-5,7],[5,5,22],t.ceil,{tile:4}),this.addBox([-5,-5,-22],[5,5,-7],t.ceil,{tile:4}),this.addBox([-4,7,-4],[4,20,4],t.hull,{tile:4}),this.addBox([-4,-20,-4],[4,-7,4],t.hull,{tile:4}),this.addBox([-1.5,24,-26],[1.5,26,26],t.girder,{tile:2}),this.addBox([-1.5,-26,-26],[1.5,-24,26],t.girder,{tile:2}),this.addBox([-1.5,-24,24],[1.5,24,26],t.girder,{tile:2}),this.addBox([-1.5,-24,-26],[1.5,24,-24],t.girder,{tile:2}),this.strip(-14.05,-.2,-7.05,14.05,.2,7.05,this.mats.stripW);for(let x of[-3,3])for(let m of[-3,3])this.addMirrored([14,x-.5,m-.5],[116,x+.5,m+.5],t.girder,t.girder,{tile:2});for(let x of[34,58,82,104])this.addMirrored([x,-3.5,-3.5],[x+1,-2.5,3.5],t.steel,t.steel,{tile:2}),this.addMirrored([x,2.5,-3.5],[x+1,3.5,3.5],t.steel,t.steel,{tile:2});this.addMirrored([46,3.6,6],[70,4,30],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([46,-4,-30],[70,-3.6,-6],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([86,6,-.4],[98,30,.4],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([128,-20,-30],[130,20,30],t.hullOrange,t.hullBlue,{tile:6}),this.addMirrored([116,-20,-30],[130,-18,30],t.deck,t.deck,{tile:6}),this.addMirrored([116,18,-30],[130,20,30],t.deck,t.deck,{tile:6}),this.addMirrored([113,-6,-18],[115,6,-10],t.hullOrange,t.hullBlue,{tile:3}),this.addMirrored([113,-6,10],[115,6,18],t.hullOrange,t.hullBlue,{tile:3}),this.addMirrored([113,9,-4],[115,14,4],t.hullOrange,t.hullBlue,{tile:3});let n=[t.cRed,t.cYel,t.cGrey,t.cTeal];[[[30,14,18],[42,16.6,20.6]],[[36,-18,-26],[38.6,-6,-23.4]],[[52,22,-14],[54.6,24.6,-2]],[[64,-24,14],[76,-21.4,16.6]],[[78,12,30],[80.6,24,32.6]],[[96,-14,-36],[108,-11.4,-33.4]],[[22,-34,4],[24.6,-31.4,16]],[[100,30,18],[102.6,32.6,30]],[[60,40,-40],[72,42.6,-37.4]],[[88,-40,2],[90.6,-28,4.6]],[[16,30,-36],[28,32.6,-33.4]]].forEach(([x,m],p)=>this.addMirrored(x,m,n[p%4],n[(p+1)%4],{tile:3})),[[[26,-8,30],[34,0,30.6]],[[70,8,-22],[70.6,18,-12]],[[44,-30,8],[52,-29.5,18]],[[108,0,40],[108.6,10,50]]].forEach(([x,m])=>this.addMirrored(x,m,t.steel,t.steel,{tile:3}));let o=[[45,35,30,9],[75,-40,-20,12],[30,-30,45,7],[100,40,-45,10],[60,20,-52,6],[112,-38,42,8],[20,46,-28,5],[86,0,54,7],[130,50,0,9]],a=new Ot({color:7037530,roughness:.95,metalness:.05,flatShading:!0}),l=(x,m,p,_)=>{let S=new En(_,2),y=S.attributes.position,R=new v,T=Math.random()*10;for(let C=0;C<y.count;C++){R.fromBufferAttribute(y,C);let w=1+.07*Math.sin(R.x*.9+T)*Math.cos(R.y*1.1-T)+.04*Math.sin(R.z*2.3+T*2);R.multiplyScalar(w),y.setXYZ(C,R.x,R.y,R.z)}S.computeVertexNormals();let P=new mt(S,a);P.castShadow=!0,P.receiveShadow=!0,P.position.set(x,m,p),P.rotation.set(Math.random()*3,Math.random()*3,0),this.group.add(P),this.spheres.push({c:new v(x,m,p),r:_})};for(let[x,m,p,_]of o)l(x,m,p,_),l(-x,-m,-p,_);l(0,50,40,8),l(0,-50,-40,8);let c=new ie({color:16730938}),h=this.def.bounds;for(let x of[-1,1])for(let m of[-1,1])for(let p of[-1,1]){let _=new mt(new So(1.2),c);_.position.set(x*h[0],m*h[1],p*h[2]),this.group.add(_)}this.group.add(new fr(10138879,2765640,.7));let u=new Yi(16773853,3.2);u.position.set(-.3,.5,-1),this.group.add(u),this.sun=u,this.buildYardDetail();let d=new Yi(7314687,.8);d.position.set(.2,-1,.5),this.group.add(d);let f=new $e(4164863,30,60,1);f.position.set(-122,0,0),this.group.add(f);let g=new $e(16747050,30,60,1);g.position.set(122,0,0),this.group.add(g)}};var sx=`
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC;
uniform float scale;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(size * scale / max(0.1, -mv.z), 0.0, 256.0);
  vA = alpha; vC = color;
}`,rx=`
varying float vA; varying vec3 vC;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  float a = (1.0 - r);
  gl_FragColor = vec4(vC, vA * a * a);
}`,Bo=class{constructor(t,e,n){this.max=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.drag=new Float32Array(e),this.a0=new Float32Array(e),this.n=0,this.density=1;let i=new le;this.aPos=new me(this.pos,3).setUsage($i),this.aCol=new me(this.col,3).setUsage($i),this.aSize=new me(this.size,1).setUsage($i),this.aAlpha=new me(this.alpha,1).setUsage($i),i.setAttribute("position",this.aPos),i.setAttribute("color",this.aCol),i.setAttribute("size",this.aSize),i.setAttribute("alpha",this.aAlpha),i.setDrawRange(0,0),this.mat=new xe({vertexShader:sx,fragmentShader:rx,transparent:!0,depthWrite:!1,blending:n?fn:fi,uniforms:{scale:{value:600}}}),this.points=new Ps(i,this.mat),this.points.frustumCulled=!1,this.geo=i,t.add(this.points)}spawn(t,e,n,i,s,o={}){if(this.density<1&&i<.3&&Math.random()>this.density)return;let a=this.n;a>=this.max?a=Math.floor(Math.random()*this.max):this.n++,this.pos[a*3]=t.x,this.pos[a*3+1]=t.y,this.pos[a*3+2]=t.z,this.vel[a*3]=e?e.x:0,this.vel[a*3+1]=e?e.y:0,this.vel[a*3+2]=e?e.z:0;let l=n;this.col[a*3]=l.r,this.col[a*3+1]=l.g,this.col[a*3+2]=l.b,this.size0[a]=i,this.size[a]=i,this.life[a]=s,this.maxLife[a]=s,this.grow[a]=o.grow||0,this.drag[a]=o.drag||0,this.a0[a]=o.alpha!=null?o.alpha:1,this.alpha[a]=this.a0[a]}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){e--,n!==e&&this.copy(e,n),n--;continue}let i=n*3,s=this.drag[n]?Math.exp(-this.drag[n]*t):1;this.vel[i]*=s,this.vel[i+1]*=s,this.vel[i+2]*=s,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t;let o=this.life[n]/this.maxLife[n];this.alpha[n]=this.a0[n]*o,this.size[n]=this.size0[n]*(1+this.grow[n]*(1-o))}this.n=e,this.geo.setDrawRange(0,e),this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=this.aAlpha.needsUpdate=!0}copy(t,e){for(let n=0;n<3;n++)this.pos[e*3+n]=this.pos[t*3+n],this.vel[e*3+n]=this.vel[t*3+n],this.col[e*3+n]=this.col[t*3+n];this.size[e]=this.size[t],this.alpha[e]=this.alpha[t],this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.size0[e]=this.size0[t],this.grow[e]=this.grow[t],this.drag[e]=this.drag[t],this.a0[e]=this.a0[t]}},Zi=r=>new ot(r),Re={spark:Zi(16763255),white:Zi(16777215),gas:Zi(13162730),fire:Zi(16742954),smoke:Zi(5922662),blood:Zi(10491928),cyan:Zi(10479871)},ko=class{constructor(t){this.scene=t,this.add=new Bo(t,6e3,!0),this.alpha=new Bo(t,3e3,!1);let e=400;this.trPos=new Float32Array(e*6),this.trCol=new Float32Array(e*6);let n=new le;this.trA=new me(this.trPos,3).setUsage($i),this.trC=new me(this.trCol,3).setUsage($i),n.setAttribute("position",this.trA),n.setAttribute("color",this.trC),this.tracers=new Cs(n,new Gi({vertexColors:!0,transparent:!0,blending:fn,depthWrite:!1})),this.tracers.frustumCulled=!1,this.trGeo=n,this.trMax=e,t.add(this.tracers),this.lights=[0,1,2].map(()=>{let i=new $e(16755285,0,40,1.2);return t.add(i),{l:i,t:0,i0:0}}),this.decals=[],this.decalGeo=new _i(.09,6),this.decalMat=new ie({color:1118481,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.decalIdx=0,this._v=new v,this._v2=new v}set density(t){this._d=t,this.add&&(this.add.density=t,this.alpha.density=t)}get density(){return this._d}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));this.add.mat.uniforms.scale.value=n,this.alpha.mat.uniforms.scale.value=n}sparks(t,e,n,i=6,s=Re.spark){let o=this._v;for(let a=0;a<e;a++)o.randomDirection(),n&&o.dot(n)<0&&o.addScaledVector(n,-2*o.dot(n)),o.multiplyScalar(i*(.3+Math.random())),this.add.spawn(t,o,s,.05+Math.random()*.05,.25+Math.random()*.4)}impact(t,e){this.sparks(t,7,e,7),this.alpha.spawn(t,this._v2.copy(e).multiplyScalar(.8),Re.smoke,.35,.8,{grow:2,alpha:.5}),this.decal(t,e)}decal(t,e){let n;this.decals.length<160?(n=new mt(this.decalGeo,this.decalMat),this.scene.add(n),this.decals.push(n)):(n=this.decals[this.decalIdx],this.decalIdx=(this.decalIdx+1)%this.decals.length),n.position.copy(t).addScaledVector(e,.02),n.lookAt(this._v.copy(n.position).add(e))}suitHit(t,e,n){for(let i=0;i<8;i++){let s=this._v.copy(e).multiplyScalar(2+Math.random()*3).add(this._v2.randomDirection().multiplyScalar(1.5));n&&s.add(n),this.alpha.spawn(t,s,Re.gas,.18,.6,{grow:3,alpha:.55})}for(let i=0;i<5;i++){let s=this._v.copy(e).multiplyScalar(1+Math.random()*2).add(this._v2.randomDirection());n&&s.add(n),this.alpha.spawn(t,s,Re.blood,.06,1.2,{alpha:.9})}}gasJet(t,e,n,i=1){let s=this._v.copy(e).multiplyScalar(4+Math.random()*3).add(this._v2.randomDirection().multiplyScalar(.8));n&&s.add(n),this.alpha.spawn(t,s,Re.gas,.08*i,.35,{grow:4,alpha:.35})}thrusterPuff(t,e,n){let i=this._v.copy(e).multiplyScalar(6+Math.random()*4).add(this._v2.randomDirection().multiplyScalar(1.2));n&&i.add(n),this.add.spawn(t,i,Re.cyan,.09,.18,{grow:3,alpha:.25})}muzzle(t,e,n,i){let s=this._v;this.add.spawn(t,n,Re.fire,i?.6:.35,.05,{alpha:1}),this.add.spawn(t,n,Re.white,i?.3:.18,.04,{alpha:1});for(let o=0;o<(i?10:4);o++)s.copy(e).multiplyScalar(4+Math.random()*6).add(this._v2.randomDirection().multiplyScalar(2)),n&&s.add(n),this.alpha.spawn(t,s,Re.smoke,.12,.5,{grow:3,alpha:.35})}explosion(t,e){this.add.spawn(t,null,Re.white,e*.9,.12,{grow:1}),this.add.spawn(t,null,Re.fire,e*.7,.35,{grow:1.5});let n=this._v;for(let i=0;i<90;i++)n.randomDirection().multiplyScalar(e*(1+Math.random()*3)),this.add.spawn(t,n,Math.random()<.5?Re.spark:Re.fire,.08+Math.random()*.1,.5+Math.random()*.8);for(let i=0;i<26;i++)n.randomDirection().multiplyScalar(e*.5*Math.random()),this.alpha.spawn(t,n,Re.smoke,.8+Math.random()*.8,1.6+Math.random(),{grow:3,alpha:.45});this.flash(t,16755285,200)}flash(t,e,n){let i=this.lights.reduce((s,o)=>s.t<o.t?s:o);i.l.position.copy(t),i.l.color.setHex(e),i.t=.25,i.i0=n,i.l.intensity=n}update(t,e){this.add.update(t),this.alpha.update(t);for(let i of this.lights)i.t>0?(i.t-=t,i.l.intensity=Math.max(0,i.i0*i.t/.25)):i.l.intensity=0;let n=0;for(let i of e){if(n>=this.trMax)break;let s=n*6;this.trPos[s]=i.pos.x,this.trPos[s+1]=i.pos.y,this.trPos[s+2]=i.pos.z;let o=i.tail;this.trPos[s+3]=i.pos.x-i.vel.x*o,this.trPos[s+4]=i.pos.y-i.vel.y*o,this.trPos[s+5]=i.pos.z-i.vel.z*o;let a=i.color;this.trCol[s]=a.r,this.trCol[s+1]=a.g,this.trCol[s+2]=a.b,this.trCol[s+3]=a.r*.1,this.trCol[s+4]=a.g*.1,this.trCol[s+5]=a.b*.1,n++}this.trGeo.setDrawRange(0,n*2),this.trA.needsUpdate=this.trC.needsUpdate=!0}};var zo=class{constructor(){this.ctx=null,this.master=null,this.volume=.6,this.hiss=null}init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let t=this.ctx.sampleRate*1.5;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let e=this.noise.getChannelData(0);for(let o=0;o<t;o++)e[o]=Math.random()*2-1;let n=this.ctx.createBufferSource();n.buffer=this.noise,n.loop=!0;let i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=2400,i.Q.value=.6;let s=this.ctx.createGain();s.gain.value=0,n.connect(i),i.connect(s),s.connect(this.master),n.start(),this.hiss=s}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setHiss(t){this.hiss&&this.hiss.gain.setTargetAtTime(Math.min(.25,t*.06),this.ctx.currentTime,.03)}burst({freq:t=800,q:e=1,dur:n=.15,gain:i=.5,type:s="lowpass",tone:o=0,toneDur:a=.1,dist:l=0}){if(!this.ctx)return;let c=this.ctx.currentTime,h=1/(1+l*.08);if(h<.03)return;let u=l>3?Math.max(250,t*.25):t,d=this.ctx.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;let f=this.ctx.createBiquadFilter();f.type=s,f.frequency.value=u,f.Q.value=e;let g=this.ctx.createGain();if(g.gain.setValueAtTime(i*h,c),g.gain.exponentialRampToValueAtTime(.001,c+n),d.connect(f),f.connect(g),g.connect(this.master),d.start(c,Math.random()),d.stop(c+n+.05),o){let x=this.ctx.createOscillator();x.frequency.setValueAtTime(o,c),x.frequency.exponentialRampToValueAtTime(o*.4,c+a);let m=this.ctx.createGain();m.gain.setValueAtTime(i*h*.6,c),m.gain.exponentialRampToValueAtTime(.001,c+a),x.connect(m),m.connect(this.master),x.start(c),x.stop(c+a+.05)}}beep(t,e=.08,n=.15,i="square"){if(!this.ctx)return;let s=this.ctx.currentTime,o=this.ctx.createOscillator();o.type=i,o.frequency.value=t;let a=this.ctx.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.02)}play(t,e=0){switch(t){case"rifle":this.burst({freq:1800,dur:.12,gain:.35,tone:140,toneDur:.08,dist:e});break;case"shotgun":this.burst({freq:900,dur:.3,gain:.6,tone:90,toneDur:.2,dist:e});break;case"gyro":this.burst({freq:3e3,type:"highpass",dur:.5,gain:.25,dist:e});break;case"recoilless":this.burst({freq:700,dur:.6,gain:.7,tone:70,toneDur:.35,dist:e});break;case"maser":this.beep(2600+Math.random()*200,.05,e>3?.02/(1+e*.05):.05,"sawtooth");break;case"explosion":this.burst({freq:400,dur:1,gain:.9,tone:60,toneDur:.6,dist:e});break;case"hit":this.beep(1400,.05,.12,"triangle");break;case"head":this.beep(2100,.07,.15,"triangle");break;case"kill":this.beep(880,.08,.15),setTimeout(()=>this.beep(1320,.12,.15),80);break;case"hurt":this.burst({freq:300,dur:.25,gain:.5,tone:70,toneDur:.2});break;case"impact":this.burst({freq:200,dur:.3,gain:.5,tone:50,toneDur:.25,dist:e});break;case"clank":this.burst({freq:1200,q:6,type:"bandpass",dur:.15,gain:.3,dist:e});break;case"reload":this.burst({freq:2500,q:8,type:"bandpass",dur:.06,gain:.25});break;case"empty":this.beep(300,.04,.1);break;case"grab":this.burst({freq:700,q:4,type:"bandpass",dur:.12,gain:.35});break;case"push":this.burst({freq:400,dur:.18,gain:.3});break;case"warn":this.beep(660,.1,.1,"sawtooth");break;case"melee":this.burst({freq:500,dur:.2,gain:.6,tone:120,toneDur:.15,dist:e});break;case"throw":this.burst({freq:1500,dur:.1,gain:.15});break;case"bounce":this.burst({freq:2200,q:10,type:"bandpass",dur:.08,gain:.2,dist:e});break;case"mode":this.beep(1e3,.05,.1,"sine");break;case"spawn":this.beep(520,.1,.12,"sine"),setTimeout(()=>this.beep(780,.15,.12,"sine"),110);break;default:break}}};var gn={rifle:{id:"rifle",hipSpread:.0065,adsSpread:8e-4,name:"KR-7 KINETIC RIFLE",short:"KR-7",kind:"bullet",speed:400,projMass:.01,dmg:20,headMul:2.2,rpm:600,mag:30,reserve:180,reload:2.1,spread:.0016,auto:!0,mass:4.2,kick:.004,tracer:16773296,sound:"rifle"},shotgun:{id:"shotgun",hipSpread:.062,adsSpread:.036,name:"FL-12 FLECHETTE",short:"FL-12",kind:"pellets",speed:320,pellets:10,ejecta:100,dmg:11,headMul:1.5,rpm:75,mag:6,reserve:30,reload:.5,perShell:!0,spread:.045,auto:!1,mass:4.6,kick:.03,tracer:16760944,sound:"shotgun"},gyrojet:{id:"gyrojet",hipSpread:.008,adsSpread:8e-4,name:"GJ-3 GYROJET",short:"GJ-3",kind:"rocket",speed:30,accel:280,burn:1.3,dmg:72,headMul:1.3,splash:3.2,splashDmg:45,rpm:100,mag:5,reserve:15,reload:2.6,spread:.001,auto:!1,mass:5,kick:.006,ejecta:.6,tracer:16740416,sound:"gyro"},recoilless:{id:"recoilless",hipSpread:.011,adsSpread:5e-4,name:"RR-90 RECOILLESS",short:"RR-90",kind:"bullet",speed:260,projMass:.25,ejecta:0,dmg:88,headMul:1.4,rpm:40,mag:1,reserve:14,reload:2.2,spread:8e-4,auto:!1,mass:6.5,kick:.02,tracer:16754784,sound:"recoilless",backblast:{range:7,impulse:260,dmg:25}},maser:{id:"maser",hipSpread:.005,adsSpread:4e-4,name:"LM-2 MASER",short:"LM-2",kind:"beam",range:180,dmg:6,headMul:1.5,rpm:1200,mag:1,reserve:0,reload:0,heatPer:.055,coolRate:.35,spread:6e-4,auto:!0,mass:5.5,kick:6e-4,tracer:10481919,sound:"maser"}},_r=["rifle","shotgun","gyrojet","recoilless","maser"],Fu={rifle:"All-rounder. 400 m/s rounds, light recoil.",shotgun:"Close range. Each shot is a 0.75 m/s escape burn.",gyrojet:"Rockets that accelerate. Deadly on slow or anchored targets.",recoilless:"One heavy slug, no recoil. Backblast shoves anyone behind you.",maser:"Hitscan beam, no recoil, no ammo. Overheats."},Xe={fuse:3.5,speed:18,mass:.6,radius:9,dmg:115,impulse:520,restitution:.85,count:2},Bn={range:2.4,dmg:45,impulse:420,spin:4.5,cooldown:.9},Ho=class{constructor(t){this.def=t,this.mag=t.mag,this.reserve=t.reserve,this.cool=0,this.reloadT=0,this.heat=0,this.overheat=!1}};var an=[4164863,16747050],qu=["BLUE","ORANGE"],zs=["MANUAL","RATE DAMP","ATT HOLD","VEL MATCH"],Xo=["No assists. Every rotation and stop is your own counter-burn.","Rotation is damped automatically when you stop steering. Linear drift remains.","Holds your body attitude while you translate (PD controller).","Attitude hold + auto-burn to match the velocity of the station or a locked target."],Wo=110,Ou=700,bi=10,ox=112,rn=.7,ax=1.5,wc=3.2,lx=.42,cx=.5,ti=.6,Si=8,hx=2.2,on=[{sx:-1,sy:1},{sx:1,sy:1},{sx:-1,sy:-1},{sx:1,sy:-1}].map(r=>({...r,pos:new v(r.sx*lx,r.sy*cx,0)})),yr=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],Tc=[{p:new v(0,.6,-.02),r:.21,part:"head"},{p:new v(0,.22,0),r:.34,part:"chest"},{p:new v(0,-.18,0),r:.3,part:"body"},{p:new v(0,.15,.3),r:.28,part:"pack"},{p:new v(-.14,-.62,-.08),r:.17,part:"leg"},{p:new v(.14,-.62,-.08),r:.17,part:"leg"},{p:new v(-.14,-.95,.08),r:.15,part:"leg"},{p:new v(.14,-.95,.08),r:.15,part:"leg"}],Je=new v,Ji=new v,Gt=new ge,Bu=new Fe(0,0,0,"YXZ"),ku=new Map;function Ac(r,t,e={}){let n=r+":"+t+":"+!!e.noShadow,i=ku.get(n);i||(i=Iu(r,t,e),i.userData.magIndex=i.children.indexOf(i.userData.mag),ku.set(n,i));let s=i.userData;i.userData={};let o=i.clone(!0);return i.userData=s,o.userData={...s,sight:s.sight.clone(),hand:s.hand.clone(),grip:s.grip.clone(),magRest:s.magRest.clone(),mag:o.children[s.magIndex]},o}var ux=new xe({side:Ae,uniforms:{color:{value:new ot(16726831)},thick:{value:.0032}},vertexShader:`uniform float thick;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 dir = normalize(normalMatrix * normal);
      mv.xyz += dir * thick * max(1.5, -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }"});function Yu(r){let t=[];r.traverse(n=>{n.isMesh&&!n.userData.noOutline&&t.push(n)});let e=[];for(let n of t){let i=new mt(n.geometry,ux);i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),i.visible=!1,i.userData.noOutline=!0,n.parent.add(i),e.push(i)}return e}function dx(r){let t=Lu(an[r],on,yr),e=t.root,n=new Is(.055,.42,6,1,!0);n.translate(0,-.21,0);let i=new ie({color:new ot(13625599).multiplyScalar(1.6),transparent:!0,opacity:.75,blending:fn,depthWrite:!1}),s=[],o=new v(0,1,0);for(let l of on)for(let c=0;c<6;c++){let h=new mt(n,i),u=yr[c].clone().negate();h.quaternion.setFromUnitVectors(o,u.clone().negate()),h.position.copy(l.pos).addScaledVector(u,.09),h.visible=!1,h.userData.noOutline=!0,e.add(h),s.push(h)}let a=Yu(e);return{...t,flames:s,outlines:a}}var fx=1,Mr=class{constructor(t,e,n,i=!1){this.id=fx++,this.game=t,this.team=e,this.name=n,this.isPlayer=i,this.pos=new v,this.vel=new v,this.quat=new ge,this.angVel=new v,this.aimYaw=0,this.aimPitch=0,this.mode=1,this.holdQ=null,this.ctrl={move:new v,roll:0,killRot:!1,brake:!1},this.throttle=new Float32Array(24),this.kills=0,this.deaths=0,this.score=0,this.alive=!1,this.respawnT=0,this.refTarget=null,this.model=dx(e),t.scene.add(this.model.root),this.gunMeshes={};for(let s of Object.keys(gn)){let o=Ac(s,an[e]);o.visible=!1,this.model.gunMount.add(o),this.gunMeshes[s]=o;for(let a of Yu(o))this.model.outlines.push(a)}this.reset()}reset(){this.health=100,this.o2=100,this.gas=bi,this.vel.set(0,0,0),this.angVel.set(0,0,0),this.aimYaw=this.aimPitch=0,this.holdQ=null,this.grab=null,this.leaks=[],this.towers=on.map(()=>({hp:30,dead:!1})),this.weapons=(this.loadout||["rifle","shotgun"]).map(t=>new Ho(gn[t]||gn.rifle)),this.cur=0,this.switchT=0,this.grenades=Xe.count,this.grenadeCool=0,this.meleeCool=0,this.throwT=0,this.throwDir=null,this.meleeT=0,this.ads=!1,this.adsAmt=0,this.lastDamageT=-99,this.lastThrustT=-99,this.lastAttacker=null,this.spawnProtect=2,this.kick=new ht,this.pushCharge=0,this.lastFireT=-99,this.throttle.fill(0),this.impactCool=0}get weapon(){return this.weapons[this.cur]}get mass(){let t=ox+this.gas;for(let e of this.weapons)t+=e.def.mass;return t}inertia(t){let e=this.mass/125;return t.set(21*e,9*e,19*e)}get dv(){let t=this.mass,e=t-this.gas;return Ou*Math.log(t/e)}eye(t){return t.copy(Je.set(0,.6,-.05).applyQuaternion(this.quat)).add(this.pos)}aimQuat(t){return Bu.set(this.aimPitch,this.aimYaw,0,"YXZ"),t.setFromEuler(Bu).premultiply(this.quat)}aimDir(t){return t.set(0,0,-1).applyQuaternion(this.aimQuat(Gt))}forward(t){return t.set(0,0,-1).applyQuaternion(this.quat)}setAimDir(t){let e=this.forward(Ji);Gt.setFromUnitVectors(e,Je.copy(t).normalize()),this.quat.premultiply(Gt).normalize(),this.holdQ&&this.holdQ.premultiply(Gt).normalize()}rollToward(t,e){let n=this.forward(Ji),i=Je.set(0,1,0).applyQuaternion(this.quat),s=xx.copy(t).addScaledVector(n,-t.dot(n));if(s.lengthSq()<.01)return;s.normalize();let o=Math.atan2(n.dot(vx.crossVectors(i,s)),i.dot(s)),a=Math.max(-e,Math.min(e,o));Math.abs(a)<1e-4||(Gt.setFromAxisAngle(n,a),this.quat.premultiply(Gt).normalize(),this.holdQ&&this.holdQ.premultiply(Gt).normalize())}addAim(t,e){Gt.setFromAxisAngle(yx,t),Xu.setFromAxisAngle(_x,e),Gt.multiply(Xu),this.quat.multiply(Gt).normalize(),this.holdQ&&this.holdQ.multiply(Gt).normalize()}spawn(t,e){this.reset(),this.alive=!0,this.pos.copy(t),this.quat.setFromUnitVectors(new v(0,0,-1),e.clone().normalize()),this.model.root.visible=!this.isPlayer}applyImpulse(t,e,n=!0){if(n==="recoil"?!this.game.rules.recoil:n&&!this.game.rules.knockback)return;if(this.grab&&this.grab.kind!=="pod")if(t.length()>120)this.grab=null;else return;let i=this.mass;if(this.vel.addScaledVector(t,1/i),e){let s=Je.subVectors(e,this.pos),o=Ji.crossVectors(s,t).applyQuaternion(Gt.copy(this.quat).invert()),a=this.inertia(Je);this.angVel.x+=o.x/a.x,this.angVel.y+=o.y/a.y,this.angVel.z+=o.z/a.z}}flightComputer(t){let e=this.ctrl,n=this.mode,i=e.roll,s=zu.set(0,0,0),o=this.angVel,a=n===0&&!this.isBot,l=e.killRot;if(a&&!l)s.set(0,0,i),this.holdQ=null;else{let u=Vu.set(0,0,l?0:i*ax);if((n>=2||this.isBot)&&!l&&i===0){if(!this.holdQ&&o.lengthSq()<.02&&(this.holdQ=this.quat.clone()),this.holdQ){Gt.copy(this.quat).invert().multiply(this.holdQ),Gt.w<0&&(Gt.x=-Gt.x,Gt.y=-Gt.y,Gt.z=-Gt.z,Gt.w=-Gt.w);let x=Math.sqrt(1-Math.min(1,Gt.w*Gt.w)),m=2*Math.acos(Zt(Gt.w,-1,1));x>1e-5&&u.set(Gt.x/x,Gt.y/x,Gt.z/x).multiplyScalar(Math.min(1.2,m*4))}}else this.holdQ=null;let f=Je.subVectors(u,o),g=this.isBot?.02:.004;s.set(Math.abs(f.x)<g?0:Zt(f.x*wc,-1,1),Math.abs(f.y)<g?0:Zt(f.y*wc,-1,1),Math.abs(f.z)<g?0:Zt(f.z*wc,-1,1))}let c=Hu.copy(e.move);if(!a&&(e.brake||n===3&&!this.isBot)){let u=this.refTarget&&this.refTarget.alive!==!1?this.refTarget.vel:px,d=Je.subVectors(this.vel,u).applyQuaternion(Gt.copy(this.quat).invert());for(let f of["x","y","z"])if(e.brake||c[f]===0){let g=-d[f];c[f]=Math.abs(g)<.04?0:Zt(g*1.3,-1,1)}}return this.allocate(c,s,t)}allocate(t,e,n){let i=Vo.set(0,0,0),s=Gu.set(0,0,0),o=0,a=this.throttle;for(let h=0;h<4;h++){let u=on[h],d=this.towers[h],f=Zt(t.x-e.z*u.sy,-1,1),g=Zt(t.y+e.z*u.sx,-1,1),x=Zt(t.z+e.x*u.sy-e.y*u.sx,-1,1),m=h*6;if(a[m+0]=f>0?f:0,a[m+1]=f<0?-f:0,a[m+2]=g>0?g:0,a[m+3]=g<0?-g:0,a[m+4]=x>0?x:0,a[m+5]=x<0?-x:0,d.dead)for(let p=0;p<6;p++)a[m+p]=0;for(let p=0;p<6;p++)o+=a[m+p]}if(o<=0)return o;let l=o*Wo/Ou*n,c=1;if(this.game.rules.infiniteGas&&(l=0),l>this.gas&&(c=this.gas/l,l=this.gas),this.gas-=l,c<1)for(let h=0;h<24;h++)a[h]*=c;for(let h=0;h<4;h++){let u=on[h];Go.set(0,0,0);for(let d=0;d<6;d++){let f=a[h*6+d];f>0&&Go.addScaledVector(yr[d],f*Wo)}i.add(Go),s.add(Ji.crossVectors(u.pos,Go))}return o*c>.05&&(this.lastThrustT=this.game.time),o*c}step(t){let e=this.game.world,n=this.inertia(Wu),i=this.mass;if(this.alive&&this.grab){this.stepGrabbed(t);return}let s=null,o=null;this.alive?(this.flightComputer(t),s=Vo,o=Gu):this.throttle.fill(0);let a=mx.set(0,0,0),l=gx.set(0,0,0);if(s&&this.throttle.some(R=>R>0)&&(a.copy(s).applyQuaternion(this.quat),l.copy(o)),this.game.rules.breaches)for(let R of this.leaks){let T=Je.copy(R.n).multiplyScalar(-28);l.add(Ji.crossVectors(R.p,T)),a.add(T.applyQuaternion(this.quat))}this.vel.addScaledVector(a,t/i),this.pos.addScaledVector(this.vel,t);let c=this.angVel,h=Je.set(n.x*c.x,n.y*c.y,n.z*c.z),u=Ji.crossVectors(c,h);c.x+=(l.x-u.x)/n.x*t,c.y+=(l.y-u.y)/n.y*t,c.z+=(l.z-u.z)/n.z*t;let d=c.length();d>12&&c.multiplyScalar(12/d);let f=this.quat,g=f.x,x=f.y,m=f.z,p=f.w,_=c.x*t*.5,S=c.y*t*.5,y=c.z*t*.5;f.x+=p*_+x*y-m*S,f.y+=p*S+m*_-g*y,f.z+=p*y+g*S-x*_,f.w+=-g*_-x*S-m*y,f.normalize(),this.collide(t,e)}stepGrabbed(t){let e=this.grab;if(this.throttle.fill(0),Vo.set(0,0,0),e.kind==="pod"){let o=e.obj,a=Hu.copy(this.ctrl.move);if(this.ctrl.brake&&!(this.mode===0&&!this.isBot)){let l=Je.copy(o.vel).applyQuaternion(Gt.copy(this.quat).invert());for(let c of["x","y","z"])a[c]=Math.abs(l[c])<.04?0:Zt(-l[c]*1.3,-1,1)}a.lengthSq()>0&&this.allocate(a,zu.set(0,0,0),t)>0&&o.vel.addScaledVector(Vo.applyQuaternion(this.quat),t/(this.mass+o.mass)),this.pos.copy(o.pos).add(e.offset),this.vel.copy(o.vel)}else if(!this.crawl(t))return;let n=Vu.set(0,0,this.ctrl.roll*1);this.angVel.lerp(n,Math.min(1,t*8));let i=this.angVel,s=i.length();s>1e-6&&(Gt.setFromAxisAngle(Je.copy(i).divideScalar(s),s*t),this.quat.multiply(Gt).normalize())}crawl(t){let e=this.grab,n=this.game.world;this.vel.set(0,0,0);let i=Je.copy(this.ctrl.move);if(i.lengthSq()===0||!e.normal)return!0;i.applyQuaternion(this.quat).normalize();let s=i.dot(e.normal);i.addScaledVector(e.normal,-s);let o=i.length();if(o<.3&&s>0&&e.prevNormal&&(i.copy(e.prevNormal).negate().addScaledVector(e.normal,e.prevNormal.dot(e.normal)),o=i.length()),o<.001)return!0;i.multiplyScalar(hx/o),this.vel.copy(i),this.pos.addScaledVector(i,t);let a=e.dist||rn+.2,l=n.nearestSurface(this.pos,a+.7);return!l||l.kind==="pod"?(this.grab=null,this.holdQ=null,!1):(l.normal.dot(e.normal)<.97&&(e.prevNormal=e.normal.clone()),e.normal=l.normal,e.point=l.point,e.kind=l.kind,e.obj=l.obj,this.pos.copy(l.point).addScaledVector(l.normal,a),n.sphereContacts(this.pos,rn,(c,h)=>this.pos.addScaledVector(c,h)),!0)}collide(t,e){let n=this;this.impactCool-=t,e.sphereContacts(this.pos,rn,(i,s,o)=>{n.pos.addScaledVector(i,s);let a=n.vel.dot(i);if(a<0){let l=-a;n.vel.addScaledVector(i,-1.3*a);let c=Je.copy(n.vel).addScaledVector(i,-n.vel.dot(i));n.vel.addScaledVector(c,-.18);let h=n.inertia(Wu);n.game.rules.knockback||c.set(0,0,0);let u=Ji.crossVectors(i,c).multiplyScalar(-n.mass*.18*rn).applyQuaternion(Gt.copy(n.quat).invert());if(n.angVel.x+=u.x/h.x,n.angVel.y+=u.y/h.y,n.angVel.z+=u.z/h.z,l>1.2&&n.impactCool<=0){n.impactCool=.25;let d=n.pos.clone().addScaledVector(i,-rn);n.game.onImpact(n,l,d,i.clone()),l>Si&&n.alive&&(n.game.damage(n,(l-Si)*16,null,"impact",d),n.game.rules.breaches&&l>Si+2&&n.leaks.length<3&&n.leaks.push({p:Je.copy(i).negate().multiplyScalar(.3).applyQuaternion(Gt.copy(n.quat).invert()).clone(),n:i.clone().negate().applyQuaternion(Gt.copy(n.quat).invert()),t:4}))}}})}update(t){let e=this.game.time;if(!this.alive)return;if(this.spawnProtect-=t,this.grenadeCool-=t,this.meleeCool-=t,this.meleeT=Math.max(0,this.meleeT-t),this.adsAmt+=((this.ads&&!this.grab?1:0)-this.adsAmt)*Math.min(1,t*9),this.throwT>0){let i=this.throwT;this.throwT-=t,i>ti*.6&&this.throwT<=ti*.6&&this.game.combat.releaseGrenade(this),this.throwT<0&&(this.throwT=0)}for(let i of this.weapons)i.cool-=t,i.def.kind==="beam"&&(i.heat=Math.max(0,i.heat-i.def.coolRate*t),i.overheat&&i.heat<.35&&(i.overheat=!1));let n=this.weapon;if(this.switchT>0&&(this.switchT-=t),n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0))if(n.def.perShell)n.reserve>0&&n.mag<n.def.mag&&(n.mag++,n.reserve--),n.mag<n.def.mag&&n.reserve>0&&!n.cancel?n.reloadT=n.def.reload:n.reloadT=0;else{let i=Math.min(n.def.mag-n.mag,n.reserve);n.mag+=i,n.reserve-=i,n.reloadT=0}this.game.rules.infiniteGas?this.gas=bi:e-this.lastThrustT>.6&&(this.gas=Math.min(bi,this.gas+t*(this.grab?2.2:1.1))),this.game.rules.breaches||(this.leaks.length=0);for(let i of this.leaks)i.t-=t;this.leaks=this.leaks.filter(i=>i.t>0),this.leaks.length?this.o2=Math.max(0,this.o2-this.leaks.length*3*t):this.o2=Math.min(100,this.o2+4*t),this.o2<=0&&this.game.damage(this,12*t,null,"hypoxia"),e-this.lastDamageT>5&&this.health<100&&(this.health=Math.min(100,this.health+14*t)),this.kick.multiplyScalar(Math.exp(-t*10))}startReload(){let t=this.weapon;return t.def.kind==="beam"||t.reloadT>0||t.mag>=t.def.mag||t.reserve<=0?!1:(t.reloadT=t.def.reload,t.cancel=!1,!0)}switchTo(t){t===this.cur||t<0||t>=this.weapons.length||(this.weapon.reloadT=0,this.cur=t,this.switchT=.45)}animate3P(t){let e=this.weapon,n=this.game.time,i=l=>Math.sin(Math.max(0,Math.min(1,l))*Math.PI),s=t.gunMount,o=t.leftArm;if(s.position.set(.13,-.1,-.4),s.rotation.set(0,0,0),o.rotation.set(0,0,0),t.nade.visible=!1,!this.alive)return;let a=Math.max(0,1-(n-this.lastFireT)/.12);if(s.position.z+=a*.05,s.rotation.x+=a*.12,e.reloadT>0&&e.def.reload>0){let l=1-e.reloadT/e.def.reload,c=i(l);s.rotation.z=.55*c,s.rotation.x+=.35*c,s.position.y-=.05*c,o.rotation.x=.9*i(l*1.3),o.rotation.z=-.3*c}if(this.throwT>0){let l=1-this.throwT/ti;s.position.y-=.12*i(l),s.rotation.x-=.7*i(l),o.rotation.x=l<.55?1.9*(l/.55):1.9-3.6*Math.min(1,(l-.55)/.2),t.nade.visible=l>.1&&l<.65}if(this.meleeT>0){let l=1-this.meleeT/.35;s.position.z-=.25*i(l),s.rotation.y=.5*i(l),s.rotation.x-=.4*i(l)}if(this.switchT>0){let l=this.switchT/.45;s.position.y-=.2*l,s.rotation.x-=.8*l}}syncModel(t){let e=this.model;e.root.position.copy(this.pos),e.root.quaternion.copy(this.quat),this.animate3P(e);for(let s in this.gunMeshes)this.gunMeshes[s].visible=this.alive&&s===this.weapon.def.id;let n=this.game.player,i=this.alive&&!!n&&n!==this&&n.team!==this.team&&this.game.settings.outlines;if(i!==this._outlined){this._outlined=i;for(let s of e.outlines)s.visible=i}for(let s=0;s<24;s++){let o=this.throttle[s],a=e.flames[s];if(o>.03&&this.alive){a.visible=!0;let l=.4+o*.8+Math.random()*.25;a.scale.set(.7+o*.5,l,.7+o*.5)}else a.visible=!1}}},zu=new v,Hu=new v,Vu=new v,px=new v,Vo=new v,Gu=new v,Go=new v,mx=new v,gx=new v,Wu=new v,Xu=new ge,xx=new v,vx=new v,_x=new v(1,0,0),yx=new v(0,1,0);var qe=new v,Ei=new v,$u=new v,Rc=new ge,qo=new v,Yo=class{constructor(t){this.game=t,this.projectiles=[],this.grenades=[],this.beams=[];let e=new En(.12,0);this.gGeo=e,this.gMat=[4164863,16747050].map(n=>new Ot({color:3355443,emissive:n,emissiveIntensity:.9})),this.rGeo=new nn(.03,.03,.22,6).rotateX(Math.PI/2),this.rMat=new Ot({color:10066329,emissive:16733472,emissiveIntensity:.4}),this.colors={}}color(t){return this.colors[t]||(this.colors[t]=new ot(t))}spreadOf(t,e){let n=e.hipSpread!=null?e.hipSpread:e.spread*2.5,i=e.adsSpread!=null?e.adsSpread:e.spread*.4;return(n+(i-n)*(t.adsAmt||0))*(t.grab?.7:1)}muzzlePoint(t,e){return e.set(.18,-.14,-.85).applyQuaternion(t.aimQuat(Rc)).add(t.eye($u))}fire(t){let e=t.weapon,n=e.def,i=this.game;if(!t.alive||t.switchT>0||e.cool>0||t.throwT>0)return!1;if(n.kind==="beam")return this.fireBeam(t,e,n);if(e.reloadT>0)if(n.perShell&&e.mag>0)e.reloadT=0;else return!1;if(e.mag<=0)return!t.startReload()&&t.isPlayer&&i.audio.play("empty"),e.cool=.25,!1;e.mag--,e.cool=60/n.rpm,t.spawnProtect=0,t.lastFireT=i.time;let s=t.eye(new v),o=t.aimDir(new v),a=this.muzzlePoint(t,new v),l=n.kind==="pellets"?n.pellets:1;for(let h=0;h<l;h++){let u=o.clone(),d=this.spreadOf(t,n)*Math.sqrt(Math.random());d>0&&u.addScaledVector(Mi(o,qe),Math.tan(d)).normalize();let f={pos:s.clone().addScaledVector(u,.35),vel:t.vel.clone().addScaledVector(u,n.speed),dir:u,owner:t,def:n,age:0,kind:n.kind,color:this.color(n.tracer),tail:n.kind==="rocket"?.02:.012,visOff:a.clone().sub(s)};n.kind==="rocket"&&(f.mesh=new mt(this.rGeo,this.rMat),f.mesh.position.copy(f.pos),f.mesh.lookAt(qe.copy(f.pos).add(u)),i.scene.add(f.mesh)),this.projectiles.push(f)}let c=n.ejecta!=null?n.ejecta:n.projMass*n.speed;return t.applyImpulse(qe.copy(o).multiplyScalar(-c),a,"recoil"),t.kick.x+=n.kick*(.7+Math.random()*.6),t.kick.y+=n.kick*(Math.random()-.5)*.8,t.addAim(n.kick*(Math.random()-.5)*.5,n.kick*(.6+Math.random()*.5)),i.fx.muzzle(a,o,t.vel,n.kind==="pellets"),n.backblast&&this.backblast(t,o,a,n.backblast),i.onShot(t,n),e.mag===0&&e.reserve>0&&setTimeout(()=>{t.alive&&t.weapon===e&&t.startReload()},250),!0}raySoldier(t,e,n,i){let s=n,o=null,a=null;for(let l of this.game.soldiers){if(!l.alive||l===i)continue;let c=Ei.subVectors(l.pos,t),h=Math.max(0,Math.min(n,c.dot(e)));if(!(c.addScaledVector(e,-h).lengthSq()>1.8))for(let u of Tc){qo.copy(u.p).applyQuaternion(l.quat).add(l.pos);let d=On(t,e,qo,u.r,s);d>=0&&d<s&&(s=d,o=l,a=u)}}return o?{t:s,s:o,part:a}:null}fireBeam(t,e,n){let i=this.game;if(e.overheat)return t.isPlayer&&e.cool<=0&&(i.audio.play("empty"),e.cool=.3),!1;e.cool=60/n.rpm,e.heat+=n.heatPer,e.heat>=1&&(e.heat=1,e.overheat=!0,t.isPlayer&&i.hud.message("MASER OVERHEATED","#ffcc4d",1.2)),t.spawnProtect=0,t.lastFireT=i.time;let s=t.eye(new v),o=t.aimDir(new v);o.addScaledVector(Mi(o,qe),Math.tan(this.spreadOf(t,n)*Math.sqrt(Math.random()))).normalize();let a=i.world.raycast(s,o,n.range),l=a?a.t:n.range,c=this.raySoldier(s,o,l,t);c&&(l=c.t);let h=s.clone().addScaledVector(o,l),u=this.muzzlePoint(t,new v);if(this.beams.push({a:u,b:h,life:.06}),c){let d=c.s;if(d.team!==t.team&&d.spawnProtect<=0){let f=n.dmg*(c.part.part==="head"?n.headMul:c.part.part==="leg"?.75:1);if(i.rules.breaches&&c.part.part!=="leg"&&Math.random()<.04&&d.leaks.length<3){let g=h.clone().sub(d.pos).applyQuaternion(Rc.copy(d.quat).invert());d.leaks.push({p:g,n:g.clone().sub(c.part.p).normalize(),t:4})}i.damage(d,f,t,n.id,h,c.part.part)}Math.random()<.4&&i.fx.sparks(h,2,o.clone().negate(),3,Re.cyan)}else a&&Math.random()<.5&&i.fx.sparks(h,2,a.n,3,Re.cyan);return e.sndT=(e.sndT||0)-1,e.sndT<=0&&(e.sndT=3,i.onShot(t,n)),!0}backblast(t,e,n,i){let s=this.game,o=n.clone().addScaledVector(e,-1.4);s.fx.muzzle(o,e.clone().negate(),t.vel,!0);for(let a=0;a<14;a++){let l=e.clone().multiplyScalar(-(4+Math.random()*8)).add(qe.randomDirection().multiplyScalar(2)).add(t.vel);s.fx.alpha.spawn(o,l,Re.smoke,.4,1.2,{grow:3,alpha:.4})}for(let a of s.soldiers){if(a===t||!a.alive)continue;let l=qe.subVectors(a.pos,o),c=l.length();if(c>i.range||c<.001||-l.dot(e)/c<.6||!s.world.los(o,a.pos,!0))continue;let h=1-c/i.range;a.applyImpulse(e.clone().multiplyScalar(-i.impulse*h),a.pos),a.team!==t.team&&s.damage(a,i.dmg*h,t,"backblast",a.pos,"body")}}throwGrenade(t,e=null){return!t.alive||t.grenades<=0||t.grenadeCool>0||t.throwT>0?!1:(t.grenadeCool=t.isBot?6:1,t.throwT=ti,t.throwDir=e?e.clone().normalize():null,t.weapon.reloadT>0&&(t.weapon.reloadT=0),t.spawnProtect=0,!0)}releaseGrenade(t){if(!t.alive||t.grenades<=0)return!1;t.grenades--;let e=t.throwDir||t.aimDir(new v),n=t.eye(new v).addScaledVector(e,.6),i=t.vel.clone().addScaledVector(e,Xe.speed);t.applyImpulse(qe.copy(e).multiplyScalar(-Xe.mass*Xe.speed),n,"recoil");let s=new mt(this.gGeo,this.gMat[t.team]);return s.position.copy(n),this.game.scene.add(s),this.grenades.push({pos:n,vel:i,owner:t,fuse:Xe.fuse,mesh:s,spin:new v(At(-8,8),At(-8,8),At(-8,8))}),this.game.audio.play("throw",t.isPlayer?0:this.game.distToListener(n)),this.game.onThrow(t,n),!0}melee(t){if(!t.alive||t.meleeCool>0||t.throwT>0)return!1;t.meleeCool=Bn.cooldown,t.meleeT=.35,t.spawnProtect=0;let e=this.game,n=t.eye(new v),i=t.aimDir(new v),s=null,o=Bn.range+.7;for(let l of e.soldiers){if(l===t||!l.alive)continue;let c=qe.subVectors(l.pos,n),h=c.length();h<o&&c.dot(i)/h>.55&&(s=l,o=h)}if(e.audio.play("melee",t.isPlayer?0:e.distToListener(t.pos)),s){let l=i.clone().multiplyScalar(Bn.impulse),c=s.pos.clone().add(Mi(i,qe).multiplyScalar(.4));return s.applyImpulse(l,c),e.rules.knockback&&s.angVel.add(Ei.set(At(-1,1),At(-1,1),At(-1,1)).normalize().multiplyScalar(Bn.spin)),t.applyImpulse(l.clone().multiplyScalar(-.5),n,"recoil"),s.team!==t.team&&e.damage(s,Bn.dmg,t,"hammer",c,"body"),e.fx.sparks(c,14,i.clone().negate(),5),!0}let a=e.world.raycast(n,i,Bn.range);if(a){let l=i.clone().multiplyScalar(Bn.impulse*.6);a.kind==="pod"?(a.obj.vel.addScaledVector(l,1/a.obj.mass),t.applyImpulse(l.negate().multiplyScalar(.5),n,"recoil")):t.applyImpulse(l.negate(),n,"recoil"),e.fx.sparks(n.clone().addScaledVector(i,a.t),10,a.n,4),e.audio.play("clank")}return!1}step(t){let e=this.game,n=e.world,i=this.projectiles;for(let s=i.length-1;s>=0;s--){let o=i[s];o.age+=t,o.kind==="rocket"&&o.age<o.def.burn&&o.vel.addScaledVector(o.dir,o.def.accel*t);let a=o.vel.length(),l=qe.copy(o.vel).divideScalar(a),c=a*t,h=c,u=null,d=null,f=null,g=null,x=n.raycast(o.pos,l,c);x&&(h=x.t,u=x.kind,d=x.obj,g=x.n.clone());for(let m of e.soldiers){if(!m.alive||m===o.owner&&(o.kind!=="rocket"||o.age<.4))continue;let p=Ei.subVectors(m.pos,o.pos),_=Math.max(0,Math.min(c,p.dot(l)));if(!(p.addScaledVector(l,-_).lengthSq()>1.8))for(let S of Tc){qo.copy(S.p).applyQuaternion(m.quat).add(m.pos);let y=On(o.pos,l,qo,S.r,h);y>=0&&y<h&&(h=y,u="soldier",d=m,f=S)}}if(u){let m=o.pos.clone().addScaledVector(l,h);this.onHit(o,m,l.clone(),u,d,f,g),this.removeProj(s);continue}o.pos.addScaledVector(o.vel,t),o.visOff&&o.visOff.multiplyScalar(Math.exp(-t*25)),o.age>3.5&&this.removeProj(s)}for(let s of this.beams)s.life-=t;this.beams.length&&(this.beams=this.beams.filter(s=>s.life>0));for(let s=this.grenades.length-1;s>=0;s--){let o=this.grenades[s];o.fuse-=t,o.pos.addScaledVector(o.vel,t),n.sphereContacts(o.pos,.12,(a,l)=>{o.pos.addScaledVector(a,l);let c=o.vel.dot(a);c<0&&(o.vel.addScaledVector(a,-(1+Xe.restitution)*c),-c>2&&e.audio.play("bounce",e.distToListener(o.pos)))});for(let a of e.soldiers){if(!a.alive||a===o.owner&&o.fuse>Xe.fuse-.3)continue;let l=qe.subVectors(o.pos,a.pos),c=l.length();if(c<.8&&c>1e-4){l.divideScalar(c);let h=Ei.subVectors(o.vel,a.vel).dot(l);h<0&&o.vel.addScaledVector(l,-1.6*h),o.pos.copy(a.pos).addScaledVector(l,.8)}}o.fuse<=0&&(this.explode(o.pos,o.owner,Xe.radius,Xe.dmg,Xe.impulse,"grenade"),e.scene.remove(o.mesh),this.grenades.splice(s,1))}}removeProj(t){let e=this.projectiles[t];e.mesh&&this.game.scene.remove(e.mesh),this.projectiles.splice(t,1)}onHit(t,e,n,i,s,o,a){let l=this.game,c=t.def,h=c.projMass?c.projMass*c.speed:2;if(i==="soldier"){let u=s,f=qe.subVectors(t.vel,u.vel).clone().normalize().multiplyScalar(c.kind==="rocket"?60:h);if(u.applyImpulse(f,e),(u.team!==t.owner.team||u===t.owner)&&u.spawnProtect<=0){let g=c.dmg;o.part==="head"?g*=c.headMul:o.part==="leg"&&(g*=.75);let x=Ei.subVectors(e,u.pos).applyQuaternion(Rc.copy(u.quat).invert()),m=$u.subVectors(x,o.p).normalize(),p=-1,_=.42;for(let S=0;S<4;S++){let y=x.distanceTo(on[S].pos);y<_&&(_=y,p=S)}o.part==="pack"&&p<0&&(p=Math.floor(Math.random()*4)),p>=0&&l.damageTower(u,p,g*(o.part==="pack"?.6:.9)),l.rules.breaches&&o.part!=="leg"&&Math.random()<.35&&u.leaks.length<3&&u.leaks.push({p:x.clone(),n:m.clone(),t:4+Math.random()*3}),l.damage(u,g,t.owner,c.id,e,o.part)}l.fx.suitHit(e,n.clone().negate(),u.vel),c.kind==="rocket"&&this.explode(e,t.owner,c.splash,c.splashDmg,140,c.id,u)}else if(i==="pod"&&s.vel.addScaledVector(n,(c.kind==="rocket"?60:h)/s.mass),c.kind==="rocket")this.explode(e,t.owner,c.splash,c.splashDmg,140,c.id);else{l.fx.impact(e,a||n.clone().negate());let u=l.distToListener(e);u<25&&l.audio.play("clank",u)}}explode(t,e,n,i,s,o,a=null){let l=this.game;l.fx.explosion(t,n*.35),l.audio.play("explosion",l.distToListener(t)),l.onExplosion(t,e);for(let c of l.soldiers){let h=c.pos.distanceTo(t);if(h>n||!l.world.los(t,c.pos,!0))continue;let u=1-h/n,d=qe.subVectors(c.pos,t);d.lengthSq()<1e-6&&d.set(0,1,0),d.normalize();let f=c.pos.clone().addScaledVector(d,-.4).add(Mi(d,Ei).multiplyScalar(.35));c.applyImpulse(d.clone().multiplyScalar(s*u),f),!(!c.alive||c===a||c.spawnProtect>0)&&(c.team===e.team&&c!==e||(l.damage(c,i*u*(c===e?.6:1),e,o,f,"body"),Math.random()<u&&l.damageTower(c,Math.floor(Math.random()*4),25*u),l.rules.breaches&&Math.random()<.5*u&&c.leaks.length<3&&c.leaks.push({p:new v(At(-.2,.2),At(-.1,.4),At(-.15,.3)),n:new v().randomDirection(),t:5})))}for(let c of l.world.pods){let h=c.pos.distanceTo(t);h<n&&h>.001&&(c.vel.addScaledVector(qe.subVectors(c.pos,t).normalize(),s*(1-h/n)/c.mass),c.angVel.add(Ei.randomDirection().multiplyScalar(.8)))}}syncMeshes(t){for(let e of this.projectiles)if(e.mesh&&(e.mesh.position.copy(e.pos),e.mesh.lookAt(qe.copy(e.pos).add(e.vel)),e.age<e.def.burn)){let n=Ei.copy(e.vel).normalize().multiplyScalar(-.15).add(e.pos);this.game.fx.add.spawn(n,e.vel.clone().multiplyScalar(.6),Re.fire,.25,.06),this.game.fx.alpha.spawn(n,e.vel.clone().multiplyScalar(.2),Re.smoke,.2,.7,{grow:3,alpha:.3})}for(let e of this.grenades){e.mesh.position.copy(e.pos),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t;let n=e.fuse%.5<.12||e.fuse<.6;e.mesh.material.emissiveIntensity=n?2.5:.5}}tracerList(){let t=this._tl||(this._tl=[]);t.length=0;for(let n of this.projectiles){if(n.kind==="rocket")continue;let i=n._vp||(n._vp=new v);i.copy(n.pos).add(n.visOff),t.push({pos:i,vel:n.vel,color:n.color,tail:Math.min(n.tail,n.age+.004)})}let e=this.color(10481919);for(let n of this.beams)n._v=n._v||new v,n._v.subVectors(n.b,n.a),t.push({pos:n.b,vel:n._v,color:e,tail:1});return t}};var wi=new v,Cc=new v,Hs=new v,Mx=new ge,$o=r=>"#"+r.toString(16).padStart(6,"0"),Vs=$o(an[0]),Pc=$o(an[1]),Ti="#9fe8ff",He="#ffcc4d",Ee="#ff4b3a",ei="#7dff9a",Zo=class{constructor(t,e){this.game=t,this.cv=e,this.g=e.getContext("2d"),this.msgs=[],this.feed=[],this.hitT=0,this.hitHead=!1,this.hitKill=!1,this.dmgDirs=[],this.collWarnT=0,this.impactT=0,this.impactSev=0,this.cracks=[],this.font="'Rajdhani','Bahnschrift','Segoe UI',Arial,sans-serif",this.resize()}resize(){let t=Math.min(2,window.devicePixelRatio||1);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=this.W*t,this.cv.height=this.H*t,this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}message(t,e=He,n=2.2,i=!1){this.msgs=this.msgs.filter(s=>s.text!==t),this.msgs.push({text:t,color:e,t:n,dur:n,big:i}),this.msgs.length>4&&this.msgs.shift()}kill(t,e,n,i){this.feed.unshift({killer:t,victim:e,cause:n,head:i,t:6}),this.feed.length>6&&this.feed.pop()}hit(t,e){this.hitT=e?.5:.28,this.hitDur=this.hitT,this.hitHead=t,this.hitKill=e}damageNumber(t,e,n,i,s){this.nums=this.nums||[];let o=this.game.time,a=this.nums.find(l=>l.target===t&&o-l.born<.5&&!l.kill);a||(a={target:t,pos:e.clone(),amount:0,born:o,life:1.1,jitter:(Math.random()-.5)*30},this.nums.push(a)),a.amount+=n,a.head=a.head||i,a.kill=s,a.life=1.1,a.pos.copy(e),a.pop=1,this.nums.length>12&&this.nums.shift()}drawNumbers(t){if(!this.nums||!this.nums.length)return;let e=this.g;for(let n of this.nums){n.life-=t,n.pop=Math.max(0,(n.pop||0)-t*5);let i=this.project(n.pos,{});if(!i.on)continue;let s=1.1-n.life,o=Zt(n.life/.4,0,1);e.globalAlpha=o;let a=(n.kill?22:n.head?19:15)*(1+n.pop*.35),l=n.kill?Ee:n.head?He:"#ffffff";e.font=`700 ${a}px ${this.font}`,e.textAlign="center",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.6)";let c=i.x+n.jitter,h=i.y-26-s*34,u=Math.round(n.amount)+(n.kill?" \u2715":"");e.strokeText(u,c,h),e.fillStyle=l,e.fillText(u,c,h)}e.globalAlpha=1,e.lineWidth=1.5,this.nums=this.nums.filter(n=>n.life>0)}impact(t){if(this.impactT=1,this.impactSev=Math.min(1,t),t>.25){let e=this.W*(.25+Math.random()*.5),n=this.H*(.25+Math.random()*.5),i=[],s=5+Math.floor(t*6);for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=e,c=n,h=[[l,c]],u=40+Math.random()*160*t;for(let d=0;d<5;d++)a+=(Math.random()-.5)*.9,l+=Math.cos(a)*u/5,c+=Math.sin(a)*u/5,h.push([l,c]);i.push(h)}this.cracks.push({lines:i,t:2.5}),this.cracks.length>3&&this.cracks.shift()}}drawImpact(t){let e=this.g;this.impactT>0&&(this.impactT-=t*2.5,e.fillStyle=`rgba(255,${Math.round(90-60*this.impactSev)},40,${Math.max(0,this.impactT)*(.15+.35*this.impactSev)})`,e.fillRect(0,0,this.W,this.H));for(let n of this.cracks){n.t-=t,e.strokeStyle=`rgba(230,245,255,${Math.min(1,n.t/1.2)*.75})`,e.lineWidth=1.2;for(let i of n.lines){e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let[s,o]of i.slice(1))e.lineTo(s,o);e.stroke()}}this.cracks=this.cracks.filter(n=>n.t>0),e.lineWidth=1.5}damageFrom(t){t&&this.dmgDirs.push({pos:t.clone(),t:1.2})}project(t,e){let n=this.game.camera;Hs.copy(t).applyMatrix4(n.matrixWorldInverse);let i=Hs.z>0;return Hs.applyMatrix4(n.projectionMatrix),e.x=(Hs.x*.5+.5)*this.W,e.y=(-Hs.y*.5+.5)*this.H,e.behind=i,e.on=!i&&e.x>-20&&e.x<this.W+20&&e.y>-20&&e.y<this.H+20,e}text(t,e,n,i=14,s=Ti,o="left",a=600){let l=this.g;l.font=`${a} ${i}px ${this.font}`,l.textAlign=o,l.fillStyle=s,l.fillText(t,e,n)}draw(t){let e=this.g,n=this.game,i=n.player;if(e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.W,this.H),n.state==="menu")return;let s=this.W,o=this.H,a=s/2,l=o/2;e.lineWidth=1.5,e.textBaseline="middle",this.drawScore(),this.drawFeed(t),i&&(i.alive?(n.showGrid||i.angVel.length()>1.4,this.drawMarkers(),this.drawVelocityMarkers(),this.drawCrosshair(a,l,t),this.drawNumbers(t),this.drawRates(a,l),this.drawTargetInfo(a,l),this.drawCollision(a,l,t),this.drawStatus(),this.drawSuit(),this.drawWeapon(),this.drawDamage(a,l,t),this.drawHints(a,l),this.drawBounds(a,l),this.drawImpact(t)):this.drawDeath(a,l),this.drawMessages(a,t))}drawScore(){let t=this.g,e=this.game,n=this.W/2,i=e.teamScore;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(n-150,10,300,40),t.fillStyle=Vs,t.fillRect(n-150,10,4,40),t.fillStyle=Pc,t.fillRect(n+146,10,4,40),this.text(String(i[0]),n-60,31,28,Vs,"center",700),this.text(String(i[1]),n+60,31,28,Pc,"center",700);let s=Math.max(0,e.timeLimit-e.matchTime),o=Math.floor(s/60),a=Math.floor(s%60);this.text(`${o}:${a.toString().padStart(2,"0")}`,n,25,18,"#e9eef2","center",700),this.text(`FIRST TO ${e.scoreLimit}`,n,41,10,"#93a0ab","center");let l=i[0]/e.scoreLimit,c=i[1]/e.scoreLimit;t.fillStyle=Vs,t.fillRect(n-146,50,140*l,3),t.fillStyle=Pc,t.fillRect(n+6+140*(1-c),50,140*c,3)}drawFeed(t){let e=this.g,n=22;for(let i of this.feed){i.t-=t;let s=Zt(i.t,0,1);e.globalAlpha=s;let o=i.killer?$o(an[i.killer.team]):"#cccccc",a=$o(an[i.victim.team]),l=this.W-16,c=`[${i.cause.toUpperCase()}${i.head?" \u29BF":""}]`;e.font=`600 14px ${this.font}`;let h=e.measureText(i.victim.name).width,u=e.measureText(c).width;e.fillStyle="rgba(8,12,16,0.5)";let d=i.killer?e.measureText(i.killer.name).width:0;e.fillRect(l-h-u-d-24,n-10,h+u+d+30,20),this.text(i.victim.name,l,n,14,a,"right"),this.text(c,l-h-8,n,12,"#c9d3dc","right"),i.killer&&this.text(i.killer.name,l-h-u-16,n,14,o,"right"),n+=22}this.feed=this.feed.filter(i=>i.t>0),e.globalAlpha=1}drawMarkers(){let t=this.game,e=t.player,n=this.g,i=e.eye(new v),s=e.weapon.def,o={};for(let a of t.soldiers){if(a===e||!a.alive)continue;let l=wi.set(0,1,0).applyQuaternion(a.quat).add(a.pos);if(this.project(l,o),!o.on)continue;let c=a.pos.distanceTo(i);if(a.team===e.team){n.fillStyle=Vs,n.beginPath(),n.moveTo(o.x-6,o.y-10),n.lineTo(o.x+6,o.y-10),n.lineTo(o.x,o.y-2),n.fill(),c<40&&this.text(a.name,o.x,o.y-18,11,Vs,"center");continue}if(!t.world.los(i,a.pos))continue;let h=this.project(a.pos,{}),u=wi.subVectors(a.pos,i),d=Cc.subVectors(a.vel,e.vel),f=s.kind==="rocket"?No(u,d,s.speed,s.accel,s.burn):mr(u,d,s.speed);if(f>0&&d.length()>.15){let x=this.project(Hs.copy(a.pos).addScaledVector(d,f),{}),m=Math.hypot(x.x-h.x,x.y-h.y),p=Zt((m-6)/45,0,1)*.7;if(x.on&&p>.04){n.strokeStyle=`rgba(255,110,90,${p})`,n.lineWidth=1.2;let _=4;n.beginPath(),n.moveTo(x.x,x.y-_),n.lineTo(x.x+_,x.y),n.lineTo(x.x,x.y+_),n.lineTo(x.x-_,x.y),n.closePath(),n.stroke(),n.lineWidth=1.5}}let g=Zt(500/c,8,60);c<120&&this.text(`${c.toFixed(0)}m`,h.x+g*.6+4,h.y-g*.6,10,"rgba(255,120,100,0.75)")}}drawVelocityMarkers(){let t=this.game.player,e=this.g,n=t.refTarget&&t.refTarget.alive!==!1?t.refTarget.vel:null,i=Cc.copy(t.vel);n&&i.sub(n);let s=i.length();if(s<.05)return;let o=t.eye(new v),a=this.project(wi.copy(i).divideScalar(s).multiplyScalar(200).add(o),{}),l=this.project(wi.copy(i).divideScalar(-s).multiplyScalar(200).add(o),{}),c=ei;a.on&&(e.strokeStyle=c,e.lineWidth=2,e.beginPath(),e.arc(a.x,a.y,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(a.x,a.y-8),e.lineTo(a.x,a.y-15),e.moveTo(a.x-8,a.y),e.lineTo(a.x-15,a.y),e.moveTo(a.x+8,a.y),e.lineTo(a.x+15,a.y),e.stroke(),e.fillStyle=c,e.beginPath(),e.arc(a.x,a.y,2,0,Math.PI*2),e.fill(),this.text(`${s.toFixed(1)} m/s`,a.x+18,a.y+12,12,c)),l.on&&(e.strokeStyle="#d8b84a",e.lineWidth=2,e.beginPath(),e.arc(l.x,l.y,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(l.x-5,l.y-5),e.lineTo(l.x+5,l.y+5),e.moveTo(l.x+5,l.y-5),e.lineTo(l.x-5,l.y+5),e.stroke(),e.beginPath(),e.moveTo(l.x,l.y-8),e.lineTo(l.x,l.y-15),e.stroke()),e.lineWidth=1.5}drawBounds(t,e){let n=this.game,i=n.player,s=n.world;if(s.enclosed)return;let o=s.outside(i.pos),a=Math.max(...[0,1,2].map(l=>Math.abs(i.pos.getComponent(l))-s.bounds.max[l]+15));if(o>0){let l=Math.max(0,5-i.oobT);this.text("LEAVING COMBAT AREA",t,e-150,24,n.time*3%1<.6?Ee:He,"center",700),this.text(l>0?`Suit telemetry lost in ${l.toFixed(1)} s \u2013 turn back`:"SUIT FAILING \u2013 RETURN TO THE COMBAT AREA",t,e-126,13,Ee,"center")}else a>0&&this.text("approaching combat-area edge",t,e-150,12,He,"center")}drawCrosshair(t,e,n){let i=this.g,s=this.game.player,a=this.aimInfo&&this.aimInfo.soldier&&this.aimInfo.soldier.team!==s.team?Ee:"#e9f6ff",l=this.game.combat.spreadOf(s,s.weapon.def),c=4+Math.tan(l)*this.H/(2*Math.tan(this.game.camera.fov*Math.PI/360))+Math.abs(s.kick.x)*400,h=1-Zt((s.adsAmt-.35)/.3,0,1);if(h>.02){i.globalAlpha=h,i.strokeStyle="rgba(0,0,0,0.45)",i.lineWidth=4;let u=()=>{i.beginPath(),i.moveTo(t-c-8,e),i.lineTo(t-c,e),i.moveTo(t+c,e),i.lineTo(t+c+8,e),i.moveTo(t,e+c),i.lineTo(t,e+c+8),i.moveTo(t,e-c),i.lineTo(t,e-c-8),i.stroke()};u(),i.strokeStyle=a,i.lineWidth=2,u(),i.fillStyle=a,i.fillRect(t-1,e-1,2,2),i.globalAlpha=1}if(this.hitT>0){this.hitT-=n;let u=this.hitT/this.hitDur,d=1+(1-u)*.5,f=this.hitKill?Ee:this.hitHead?He:"#ffffff",g=5*d,x=(this.hitKill?17:12)*d;i.globalAlpha=Zt(u*1.6,0,1),i.lineCap="round",i.strokeStyle="rgba(0,0,0,0.55)",i.lineWidth=this.hitKill?6:5;let m=()=>{i.beginPath(),i.moveTo(t-g,e-g),i.lineTo(t-x,e-x),i.moveTo(t+g,e-g),i.lineTo(t+x,e-x),i.moveTo(t-g,e+g),i.lineTo(t-x,e+x),i.moveTo(t+g,e+g),i.lineTo(t+x,e+x),i.stroke()};m(),i.strokeStyle=f,i.lineWidth=this.hitKill?3.5:2.5,m(),this.hitKill&&(i.lineWidth=2,i.beginPath(),i.arc(t,e,x+6,0,Math.PI*2),i.stroke()),i.globalAlpha=1,i.lineCap="butt"}i.lineWidth=1.5}drawRates(t,e){let n=this.g,i=this.game.player.angVel,s=58,o=2.5,a=(l,c,h,u)=>{let d=Zt(c/o,-1,1)*(Math.PI/3);n.strokeStyle="rgba(159,232,255,0.15)",n.lineWidth=3,n.beginPath(),n.arc(t,e,s,l-Math.PI/3,l+Math.PI/3),n.stroke(),Math.abs(c)>.02&&(n.strokeStyle=Math.abs(c)>1.6?He:h,n.lineWidth=3,n.beginPath(),n.arc(t,e,s,Math.min(l,l+d),Math.max(l,l+d)),n.stroke()),n.lineWidth=1;let f=t+Math.cos(l)*(s+10),g=e+Math.sin(l)*(s+10);this.text(u,f,g,9,"rgba(159,232,255,0.6)","center")};a(-Math.PI/2,-i.y,Ti,"Y"),a(0,-i.x,Ti,"P"),a(Math.PI/2,i.z,Ti,"R")}computeAimInfo(){let t=this.game,e=t.player,n=e.eye(new v),i=e.aimDir(new v),s=t.world.raycast(n,i,400),o=s?s.t:400,a=null;for(let h of t.soldiers){if(h===e||!h.alive)continue;let u=On(n,i,h.pos,.75,o);u>=0&&u<o&&(o=u,a=h)}let l={dist:o,soldier:a,kind:a?"soldier":s?s.kind:null,obj:a||(s?s.obj:null)},c=wi.set(0,0,0);return a?c=a.vel:s&&s.kind==="pod"&&(c=s.obj.vel),l.vRel=Cc.subVectors(e.vel,c).clone(),l.closing=l.vRel.dot(i),this.aimInfo=l,l}drawTargetInfo(t,e){let n=this.computeAimInfo(),i=this.game.player,s=e+80;if(n.dist>=399)return;let o=n.soldier?n.soldier.name:n.kind==="pod"?"CARGO POD":"HULL",a=n.soldier?n.soldier.team===i.team?Vs:Ee:Ti;this.text(`${o}  ${n.dist.toFixed(1)} m`,t+70,e+34,12,a);let l=n.closing;this.text(`Vrel ${n.vRel.length().toFixed(2)}  ${l>=0?"CLOSING":"OPENING"} ${Math.abs(l).toFixed(2)} m/s`,t+70,e+50,11,"rgba(159,232,255,0.8)"),i.refTarget&&this.text(`REF LOCK: ${i.refTarget.name||"CARGO POD"}`,t+70,e+64,10,He)}drawCollision(t,e,n){let i=this.game,s=i.player;if(s.grab)return;let o=s.vel.length();if(o<1.5)return;let a=wi.copy(s.vel).divideScalar(o),l=i.world.raycast(s.pos,a,o*6,!1);if(!l)return;let c=Math.max(0,l.t-rn),h=-s.vel.dot(l.n);if(h<1.2)return;let u=c/h;if(u>4)return;let d=h>Si,f=d&&i.time*4%1<.5,g=d?Ee:He;f||this.text(`COLLISION ${u.toFixed(1)} s`,t,e-110,22,g,"center",700),this.text(d?`IMPACT ${h.toFixed(1)} m/s \u2013 BRAKE (${i.keyLabel("brake")}) OR GRAB`:`impact ${h.toFixed(1)} m/s`,t,e-88,12,g,"center"),this.collWarnT-=n,d&&this.collWarnT<=0&&(i.audio.play("warn"),this.collWarnT=.5)}bar(t,e,n,i,s,o,a="rgba(255,255,255,0.08)"){let l=this.g;l.fillStyle=a,l.fillRect(t,e,n,i),l.fillStyle=o,l.fillRect(t,e,n*Zt(s,0,1),i)}drawStatus(){let t=this.g,e=this.game.player,n=this.H,i=20,s=n-150;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(i-8,s-18,250,150);let o=e.dv,a=e.gas/bi;this.text("\u0394v",i,s,13,"#93a0ab"),this.text(this.game.rules.infiniteGas?"\u221E":`${o.toFixed(1)} m/s`,i+26,s,22,a<.2?Ee:"#e9eef2","left",700),this.text(`N\u2082 ${e.gas.toFixed(2)} kg`,i+150,s,12,"#93a0ab"),this.bar(i,s+14,230,5,a,a<.2?Ee:Ti),this.text("HP",i,s+36,13,"#93a0ab"),this.text(`${Math.ceil(e.health)}`,i+26,s+36,20,e.health<35?Ee:"#e9eef2","left",700),this.bar(i+70,s+32,160,6,e.health/100,e.health<35?Ee:ei),this.text("O\u2082",i,s+58,13,"#93a0ab"),this.text(`${Math.ceil(e.o2)}%`,i+26,s+58,16,e.o2<30?Ee:"#e9eef2","left",700),this.bar(i+70,s+55,160,5,e.o2/100,e.leaks.length?He:"#8fb8ff"),e.leaks.length&&this.text(`SUIT BREACH \xD7${e.leaks.length} \u2013 VENTING`,i+70,s+68,10,this.game.time*3%1<.6?Ee:He),this.text(`RCS: ${zs[e.mode]}`,i,s+88,14,He,"left",700),this.text(`[${this.game.keyLabel("mode")}] cycle`,i+140,s+88,10,"#93a0ab");let l=e.grab?e.grab.kind==="pod"?"HOLDING POD":"ANCHORED":e.ctrl.brake?"MATCHING VEL":e.ctrl.killRot?"KILL ROTATION":"FREE FLIGHT";this.text(l,i,s+108,12,e.grab?ei:Ti);let c=e.throttle.reduce((h,u)=>h+u,0);c>.05&&this.text(`RCS FIRING ${c.toFixed(1)}`,i+120,s+108,11,"#cfe8ff")}drawSuit(){let t=this.g,e=this.game.player,n=300,i=this.H-80,s=55;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(n-62,i-70,124,140),this.text("SUIT",n,i-58,10,"#93a0ab","center"),t.strokeStyle="rgba(159,232,255,0.5)",t.lineWidth=1.5,t.strokeRect(n-14,i-30,28,40),t.beginPath(),t.arc(n,i-40,9,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(n-8,i+10),t.lineTo(n-10,i+42),t.moveTo(n+8,i+10),t.lineTo(n+10,i+42),t.stroke(),on.forEach((o,a)=>{let l=e.towers[a],c=n+o.pos.x*s*1.6,h=i-10-o.pos.y*s*.9,u=l.hp/30,d=l.dead?"#555":u>.6?ei:u>.3?He:Ee;t.fillStyle=d,t.fillRect(c-6,h-6,12,12),l.dead&&(t.strokeStyle=Ee,t.beginPath(),t.moveTo(c-7,h-7),t.lineTo(c+7,h+7),t.moveTo(c+7,h-7),t.lineTo(c-7,h+7),t.stroke(),t.strokeStyle="rgba(159,232,255,0.5)");let f=0;for(let g=0;g<6;g++)f+=e.throttle[a*6+g];f>.05&&(t.strokeStyle="#cfe8ff",t.beginPath(),t.arc(c,h,9+f*2,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(159,232,255,0.5)")});for(let o of e.leaks){let a=n+o.p.x*s*1.6,l=i-10-o.p.y*s*.9;t.fillStyle=this.game.time*5%1<.5?Ee:"#fff",t.beginPath(),t.arc(a,l,3,0,Math.PI*2),t.fill()}t.lineWidth=1.5}drawWeapon(){let t=this.g,e=this.game.player,n=this.W,i=this.H,s=e.weapon,o=n-20,a=i-110;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(o-240,a-50,248,148),this.text(s.def.name,o,a,14,"#e9eef2","right",700),s.def.kind==="beam"?(this.text(s.overheat?"OVERHEAT":"HEAT",o-170,a+30,12,s.overheat?Ee:"#93a0ab"),this.bar(o-170,a+40,165,6,s.heat,s.overheat?Ee:s.heat>.7?He:Ti)):(this.text(`${s.mag}`,o-60,a+34,38,s.mag===0?Ee:"#e9eef2","right",700),this.text(`/ ${s.reserve}`,o,a+38,18,"#93a0ab","right")),s.reloadT>0&&(this.text("RELOADING",o-120,a+64,12,He,"center"),this.bar(o-200,a+74,160,3,1-s.reloadT/s.def.reload,He)),this.text(`GRENADES ${"\u25CF".repeat(e.grenades)}${"\u25CB".repeat(Math.max(0,2-e.grenades))}`,o,a+88,12,"#93a0ab","right"),e.weapons.map((c,h)=>`${this.game.keyLabel("weapon"+(h+1))} ${c.def.short}`).forEach((c,h)=>this.text(c,o-232+h*100,a-36,12,h===e.cur?He:"#8a96a0","left",700))}drawDamage(t,e,n){let i=this.g,s=this.game.player,o=Mx.copy(this.game.camera.quaternion).invert();for(let a of this.dmgDirs){a.t-=n;let l=wi.subVectors(a.pos,s.pos).applyQuaternion(o),c=Math.atan2(l.z-l.y,l.x);i.strokeStyle=`rgba(255,60,40,${Zt(a.t,0,1)*.9})`,i.lineWidth=5,i.beginPath(),i.arc(t,e,120,c-.25,c+.25),i.stroke()}if(this.dmgDirs=this.dmgDirs.filter(a=>a.t>0),i.lineWidth=1.5,s.health<35){let a=i.createRadialGradient(t,e,Math.min(t,e)*.6,t,e,Math.max(t,e)*1.2);a.addColorStop(0,"rgba(120,0,0,0)"),a.addColorStop(1,`rgba(140,0,0,${.5*(1-s.health/35)})`),i.fillStyle=a,i.fillRect(0,0,this.W,this.H)}}drawHints(t,e){let n=this.game,i=n.player;if(i.grab){let s=i.pushCharge;this.text(s>0?`PUSH ${(2+5*s).toFixed(1)} m/s`:`HOLD ${n.keyLabel("up")}: PUSH OFF TOWARDS AIM   ${n.keyLabel("grab")}: RELEASE`,t,e+120,13,ei,"center",700),i.grab.kind!=="pod"&&!s&&this.text("MOVE KEYS: CRAWL ALONG THE SURFACE (NO GAS)",t,e+138,11,ei,"center"),i.grab.kind==="pod"&&!s&&this.text(`MOVE KEYS: HAUL POD (${(i.mass+i.grab.obj.mass).toFixed(0)} kg combined)`,t,e+138,11,ei,"center"),s>0&&this.bar(t-80,e+132,160,4,s,ei)}else{let s=n.world.nearestSurface(i.pos,rn+.85);if(s){let o=s.kind==="pod"?s.obj.vel:null,a=o?wi.subVectors(i.vel,o).length():i.vel.length();this.text(a>4.5?`TOO FAST TO GRAB (${a.toFixed(1)} m/s)`:`[${n.keyLabel("grab")}] GRAB`,t,e+120,13,a>4.5?Ee:ei,"center",700)}}}drawMessages(t,e){let n=this.H*.3;for(let i of this.msgs)i.t-=e,this.g.globalAlpha=Zt(i.t/.4,0,1),this.text(i.text,t,n,i.big?30:18,i.color,"center",700),n+=i.big?38:26;this.g.globalAlpha=1,this.msgs=this.msgs.filter(i=>i.t>0)}drawDeath(t,e){let n=this.game,i=n.player;this.g.fillStyle="rgba(40,0,0,0.25)",this.g.fillRect(0,0,this.W,this.H),this.text("ELIMINATED",t,e-40,40,Ee,"center",700),i.killedBy?this.text(`by ${i.killedBy.name} (${i.killCause})`,t,e,18,"#e9eef2","center"):this.text(`(${i.killCause||"environment"})`,t,e,18,"#e9eef2","center"),this.text(`Redeploying in ${Math.max(0,i.respawnT).toFixed(1)} s`,t,e+34,16,"#93a0ab","center")}};var Zu={easy:{reaction:.65,err0:11,settle:.85,floor:2.2,track:130,velNoise:.45,velLag:.8,fov:55,head:0,jink:.3,grenade:.03,dodge:.05,range:110,burstPause:.6},normal:{reaction:.4,err0:7,settle:.55,floor:1.2,track:220,velNoise:.25,velLag:.45,fov:65,head:.03,jink:.6,grenade:.06,dodge:.3},hard:{reaction:.25,err0:4.5,settle:.34,floor:.6,track:360,velNoise:.12,velLag:.3,fov:78,head:.15,jink:1,grenade:.1,dodge:.65},elite:{reaction:.17,err0:3,settle:.24,floor:.33,track:520,velNoise:.06,velLag:.18,fov:85,head:.35,jink:1.2,grenade:.14,dodge:.9}},Ju=["anchor","rusher","flanker","anchor","flanker","rusher"],bx={rifle:28,shotgun:6,gyrojet:34,recoilless:26,maser:24},Ce=new v,Ke=new v,Rn=new v,Sx=new ge,Ic=new v(0,.2,0),Ex=new v(0,.6,0),Jo=class{constructor(t,e,n,i){this.game=t,this.s=e,e.isBot=!0,e.bot=this,this.skill=Zu[n]||Zu.hard,this.role=Ju[i%Ju.length],this.known=new Map,this.phase=Math.random(),this.reset()}reset(){this.state="patrol",this.target=null,this.acquireT=0,this.err=new ht,this.path=null,this.goal=null,this.goalNode=-1,this.goalT=0,this.nextPercept=0,this.nextThink=0,this.nextPull=0,this.jink=new v,this.jinkT=0,this.burst=0,this.burstPause=0,this.combatPosT=0,this.lastPos=new v,this.stuckT=0,this.velEst=new v,this.aimHead=!1,this.coast=!1,this.lookDir=new v(1,0,0),this.lookT=0,this.hitsRecent=0,this.retreatUntil=0,this.waitUntil=0,this.known.clear()}onSpawn(){this.reset(),this.lastPos.copy(this.s.pos),this.lookDir.set(this.s.team===0?1:-1,0,0)}get eye(){return this.s.eye(this._eye||(this._eye=new v))}perceive(){let t=this.game,e=this.s,n=t.time,i=this.eye,s=e.aimDir(Rn),o=Math.cos(this.skill.fov*Fn);for(let a of t.soldiers){if(a.team===e.team)continue;let l=this.known.get(a.id);if(!a.alive){l&&this.known.delete(a.id);continue}let c=Ce.subVectors(a.pos,i),h=c.length(),u=!1;h<(this.skill.range||(t.world.enclosed?170:240))&&((c.dot(s)/h>o||h<7)&&t.world.los(i,Ke.copy(Ic).applyQuaternion(a.quat).add(a.pos))&&(u=!0),!u&&h<60&&c.dot(s)/h>o-.25&&a.lastThrustT>n-.2&&t.world.los(i,a.pos)&&(u=!0)),u?(l||(l={pos:new v,vel:new v,t:0,visible:!1,first:n,e:a},this.known.set(a.id,l)),l.visible||(l.first=n),l.visible=!0,l.pos.copy(a.pos),l.vel.copy(a.vel),l.t=n,t.reportIntel(e.team,a,e)):l&&(l.visible=!1)}for(let[a,l]of t.intel[e.team]){if(n-l.t>6)continue;let c=this.known.get(a);c?!c.visible&&l.t>c.t&&(c.pos.copy(l.pos),c.vel.copy(l.vel),c.t=l.t):this.known.set(a,{pos:l.pos.clone(),vel:l.vel.clone(),t:l.t,visible:!1,first:n,e:l.e})}for(let[a,l]of this.known)(n-l.t>12||!l.e.alive)&&this.known.delete(a)}hear(t,e,n){let i=this.s;if(!i.alive||t.team===i.team)return;let s=i.pos.distanceTo(e);if(s>n)return;let o=this.known.get(t.id),a=Ce.randomDirection().multiplyScalar(s*.06);o||(o={pos:new v,vel:new v,t:0,visible:!1,first:this.game.time,e:t},this.known.set(t.id,o)),o.visible||(o.pos.copy(e).add(a),o.vel.copy(t.vel),o.t=this.game.time)}onDamaged(t){if(this.hitsRecent+=1,!t||t===this.s)return;let e=this.known.get(t.id);e||(e={pos:t.pos.clone(),vel:t.vel.clone(),t:this.game.time,visible:!1,first:this.game.time,e:t},this.known.set(t.id,e)),e.visible||(e.pos.copy(t.pos),e.vel.copy(t.vel),e.t=this.game.time),this.s.health<40&&this.game.time>this.retreatUntil&&(this.state="retreat",this.retreatUntil=this.game.time+4,this.goal=null,this.path=null)}chooseTarget(){let t=this.s,e=this.eye,n=t.aimDir(Rn),i=null,s=1/0;for(let o of this.known.values()){if(!o.visible)continue;let a=o.e,l=Ce.subVectors(a.pos,e),c=l.length(),h=Math.acos(Zt(l.dot(n)/c,-1,1))/Fn,u=c+h*.6,d=a.aimDir(Ke);-l.dot(d)/c>.97&&(u-=20),u-=(100-a.health)*.12,a===this.target&&(u-=15),u<s&&(s=u,i=a)}if(i!==this.target){let o=this.target;if(this.target=i,i){let a=Ce.subVectors(i.pos,e).normalize(),l=Math.acos(Zt(a.dot(n),-1,1))/Fn,c=this.known.get(i.id),h=!o&&this.game.time-c.first<.3;this.acquireT=this.game.time+this.skill.reaction*(h?1:.55)*At(.8,1.25);let u=this.skill.err0*Fn*(.6+Math.min(1.5,l/60)),d=Math.random()*Math.PI*2;this.err.set(Math.cos(d)*u,Math.sin(d)*u),this.velEst.copy(i.vel),this.aimHead=Math.random()<this.skill.head}}}think(){let t=this.game,e=this.s,n=t.time;this.chooseTarget();let i=e.gas/bi,s=this.target,o=this.state;if(s)this.state==="retreat"&&n<this.retreatUntil||(e.health<35&&s.health>35&&n>this.retreatUntil+3?(this.state="retreat",this.retreatUntil=n+4):this.state="engage");else{let a=null;for(let l of this.known.values())(!a||l.t>a.t)&&(a=l);i<.14?this.state="refuel":this.state==="refuel"&&i<.55&&!a?this.state="refuel":a&&n-a.t<8?(this.state="hunt",this.huntK=a):this.state="patrol"}o!==this.state&&(this.goal=null,this.path=null,this.coast=!1),this.manageWeapons(s),s&&this.considerGrenade(s),(!this.goal||n>this.goalT)&&this.planGoal(),this.hitsRecent*=.8,e.pos.distanceTo(this.lastPos)<.8&&!e.grab&&this.goal&&e.pos.distanceTo(this.goal)>3?(this.stuckT+=.3,this.stuckT>3&&(this.goal=null,this.path=null,this.stuckT=0,this.state="patrol")):this.stuckT=0,this.lastPos.copy(e.pos)}suit(t,e,n,i){let s=t.def;if(s.kind!=="beam"&&t.mag===0&&t.reserve===0)return 0;let o;switch(s.id){case"shotgun":o=e<9?1.6:e<16?.8:.08;break;case"rifle":o=e<4?.7:1;break;case"gyrojet":o=e<9?.05:n<2||i?1.35:.55;break;case"recoilless":o=e<6?.1:n<3||i?1.25:.8;break;case"maser":o=t.overheat?0:e<80?1.15-t.heat*.5:.4;break;default:o=.5}return s.kind!=="beam"&&t.mag===0&&(o*=t===this.s.weapon?.5:.35),o}manageWeapons(t){let e=this.s,n=e.weapon;if(t){let i=t.pos.distanceTo(e.pos),s=Ce.subVectors(t.vel,e.vel).length(),o=e.cur,a=-1;e.weapons.forEach((l,c)=>{let h=this.suit(l,i,s,!!t.grab)*(c===e.cur?1.15:1);h>a&&(a=h,o=c)}),o!==e.cur&&e.switchT<=0&&e.switchTo(o)}else{let i=0,s=-1;e.weapons.forEach((o,a)=>{let l=this.suit(o,25,2,!1);l>s&&(s=l,i=a)}),i!==e.cur&&e.switchT<=0&&e.switchTo(i);for(let o of e.weapons)o===n&&o.def.kind!=="beam"&&o.mag<o.def.mag*.6&&e.startReload()}e.weapon.def.kind!=="beam"&&e.weapon.mag===0&&e.startReload()}planGoal(){let t=this.game,e=this.s,n=t.world,i=t.time;this.goalT=i+3+Math.random()*2;let s=-1;if(this.state==="engage"&&this.target?s=this.pickCombatNode(this.target):this.state==="retreat"?s=this.pickCoverNode(16,!0):this.state==="refuel"?(s=this.pickCoverNode(25,!0),this.goalT=i+8):this.state==="hunt"&&this.huntK?s=this.pickHuntNode(this.huntK.pos):s=this.pickPatrolNode(),s<0)return;this.goalNode=s,this.goal=n.nav[s].pos.clone();let o=this.threatPositions();this.path=n.findPath(e.pos,s,o.length&&this.state!=="engage"?a=>this.exposure(a.pos,o)*6:null),this.coast=!1}threatPositions(){let t=[];for(let e of this.known.values())this.game.time-e.t<6&&t.push(e.pos);return t}exposure(t,e){let n=0;for(let i of e)i.distanceToSquared(t)<120*120&&this.game.world.los(t,i,!0)&&n++;return n}candidates(t,e,n=40){let i=[];this.game.world.forNear(t,e,s=>{let o=this.game.world.nav[s];o.pos.distanceToSquared(t)<e*e&&i.push(o)});for(let s=i.length-1;s>0;s--){let o=Math.random()*(s+1)|0;[i[s],i[o]]=[i[o],i[s]]}return i.length=Math.min(i.length,n),i}teammatePenalty(t){let e=0;for(let n of this.game.soldiers){if(n===this.s||n.team!==this.s.team||!n.alive)continue;let i=n.pos.distanceTo(t);i<7&&(e+=(7-i)*1.5),n.bot&&n.bot.goal&&n.bot.goal.distanceTo(t)<5&&(e+=6)}return e}pickCombatNode(t){let e=this.s,n=this.game.world,i=(bx[e.weapon.def.id]||28)*(this.role==="rusher"?.6:this.role==="anchor"?1.2:1),s=Rn.copy(Ic).applyQuaternion(t.quat).add(t.pos).clone(),o=this.threatPositions(),a=-1,l=1/0;for(let c of this.candidates(e.pos,20,36)){let h=c.pos.distanceTo(s);if(h<4||!n.los(c.pos,s,!0))continue;let u=Math.abs(h-i)*.5+c.pos.distanceTo(e.pos)*.35;c.surf&&(u-=7);let d=Ce.subVectors(c.pos,s).normalize(),f=Ke.set(0,1,0).applyQuaternion(t.quat);if(u-=Math.abs(d.dot(f))*6,u-=Math.abs(c.pos.y-e.pos.y)>5?1.5:0,u+=(this.exposure(c.pos,o)-1)*8,u+=this.teammatePenalty(c.pos),this.role==="flanker"){let g=Ce.subVectors(c.pos,s).normalize();for(let x of this.game.soldiers)if(x!==e&&x.team===e.team&&x.alive){let m=Ke.subVectors(x.pos,s).normalize();u+=Math.max(0,g.dot(m))*4}}u+=Math.random()*3,u<l&&(l=u,a=c.i)}return a}pickCoverNode(t,e){let n=this.s,i=this.game.world,s=this.threatPositions(),o=-1,a=1/0;for(let l of this.candidates(n.pos,t,40)){let c=l.pos.distanceTo(n.pos)*.4+this.exposure(l.pos,s)*25;e&&!l.surf&&(c+=12),c+=this.teammatePenalty(l.pos)*.5+Math.random()*2,c<a&&(a=c,o=l.i)}return o}pickHuntNode(t){let e=this.s,n=this.game.world,i=-1,s=1/0;for(let o of this.candidates(t,26,40)){let a=o.pos.distanceTo(t);if(a<6||!n.los(o.pos,t,!0))continue;let l=o.pos.distanceTo(e.pos)*.5+Math.abs(a-16)*.4;if(o.surf&&(l-=3),l+=this.teammatePenalty(o.pos),this.role==="flanker"){let c=Ce.subVectors(o.pos,t).normalize(),h=Ke.subVectors(e.pos,t).normalize();l-=(1-c.dot(h))*6}l+=Math.random()*4,l<s&&(s=l,i=o.i)}return i>=0?i:n.nearestNode(t,!1)}pickPatrolNode(){let t=this.s,e=this.game.world,n=t.team===0?1:-1,i=e.def.bounds,s=i[0]/72,o=i[1]/36,a,l=Math.random();this.role==="rusher"?a=n*At(5,45)*s:this.role==="anchor"?a=n*At(-25,20)*s:a=n*At(-10,40)*s;let c=new v(a,At(-31,31)*o,At(-31,31)*o);l<.15&&c.set(At(-12,12)*s,At(-20,20)*o,At(-20,20)*o);let h=-1,u=1/0;return e.forNear(c,12*Math.max(1,s*.8),d=>{let f=e.nav[d],g=f.pos.distanceTo(c)-(f.surf?6:0);g<u&&(u=g,h=d)}),h>=0?h:e.nearestNode(c,!1)}update(t){let e=this.s,n=this.game,i=n.time;e.alive&&(i>=this.nextPercept&&(this.nextPercept=i+.1,this.perceive()),i>=this.nextThink&&(this.nextThink=i+.3,this.think()),this.target&&(!this.target.alive||!this.known.get(this.target.id)||!this.known.get(this.target.id).visible)&&(this.target=null),this._dt=t,e.ads=!!this.target&&i>this.acquireT&&this.target.pos.distanceTo(e.pos)>10,this.steer(t),this.aim(t),this.roll(t),this.actions(t))}steer(t){let e=this.s,n=this.game,i=n.world,s=n.time,o=e.ctrl;o.move.set(0,0,0),o.roll=0,o.brake=!1,o.killRot=!1;let a=e.gas/bi;if(e.grab){if(this.state==="engage"&&this.target&&this.hitsRecent<1.5&&this.goal&&e.pos.distanceTo(this.goal)<3||this.state==="refuel"&&a<.6||s<this.waitUntil||!this.path||!this.path.length)return;{let p=0;for(let T=Math.min(this.path.length-1,4);T>=0;T--)if(i.segmentClear(e.pos,this.path[T],.6)){p=T;break}let _=this.path[p],S=Ce.subVectors(_,e.pos),y=S.length();S.normalize();let R=e.grab.normal||Ke.set(0,0,0);if(S.dot(R)>-.5){this.path.splice(0,p),n.pushOff(e,S,Zt(2+y*.25,3,6.5)),this.coast=!0;return}}n.releaseGrab(e)}let l=null,c=!1;this.path&&this.path.length?(s>this.nextPull&&this.path.length>1&&(this.nextPull=s+.25,i.segmentClear(e.pos,this.path[1],.65)&&this.path.shift()),l=this.path[0],e.pos.distanceTo(l)<2.2&&this.path.length>1&&(this.path.shift(),l=this.path[0]),c=this.path.length===1):this.goal&&(l=this.goal,c=!0);let h=Ke.set(0,0,0),u={engage:3,retreat:6,refuel:3.5,hunt:4.5,patrol:5}[this.state]||4.5;if(this.role==="rusher"&&this.state!=="retreat"&&(u*=1.25),a<.35&&(u*=.65),this.coast&&(u=Math.max(u,e.vel.length())),l){let m=Ce.subVectors(l,e.pos),p=m.length(),_=c?p:p+6,S=2,y=this.goalNode>=0?i.nav[this.goalNode]:null,R=c&&y&&y.surf&&this.state!=="engage"?2.5:0,T=Math.min(u,Math.sqrt(R*R+2*S*Math.max(0,_-.6)));if(p>.01&&h.copy(m).multiplyScalar(T/p),c&&p<1.8){h.multiplyScalar(.3);let P=this.goalNode>=0?i.nav[this.goalNode]:null;if(P&&P.surf&&e.vel.length()<3.8&&n.tryGrab(e)){this.coast=!1;return}p<1&&this.state!=="engage"&&(this.goal=null,this.path=null)}}if(this.state==="engage"&&this.target&&a>.45){if(s>this.jinkT){let m=Ce.subVectors(this.target.pos,e.pos).normalize();Mi(m,this.jink);let p=Rn.set(0,1,0).applyQuaternion(this.target.quat);this.jink.addScaledVector(p,(Math.random()<.5?-1:1)*.8),this.jink.addScaledVector(m,-this.jink.dot(m)).normalize().multiplyScalar(At(.8,1.9)*this.skill.jink),this.jinkT=s+At(1.2,2.6)}h.add(this.jink)}else this.jink.set(0,0,0);if(a>.2&&Math.random()<this.skill.dodge*t*4)for(let m of this.known.values()){if(!m.visible)continue;let p=m.e,_=Ce.subVectors(e.pos,p.pos),S=_.length();if(_.dot(p.aimDir(Rn))/S>.995&&s-p.lastFireT<.5){this.jinkT=0;break}}let d=e.vel.length();if(d>1){let m=Ce.copy(e.vel).divideScalar(d),p=i.raycast(e.pos,m,d*2.2+1,!0);if(p&&p.t>0){let _=-e.vel.dot(p.n);_>1.5&&h.addScaledVector(p.n,_*(1-p.t/(d*2.2+1))*1.4)}}if(!i.enclosed)for(let m=0;m<3;m++){let p=i.bounds.max[m]-10,_=e.pos.getComponent(m)+e.vel.getComponent(m)*2.5;Math.abs(_)>p&&h.setComponent(m,h.getComponent(m)-Math.sign(_)*Math.min(4,(Math.abs(_)-p)*.4+1))}for(let m of n.soldiers){if(m===e||!m.alive||m.team!==e.team)continue;let p=Ce.subVectors(e.pos,m.pos),_=p.length();_<3&&_>.01&&h.addScaledVector(p,(3-_)/_*.8)}!l&&!this.jink.lengthSq()&&h.set(0,0,0);let f=Ce.subVectors(h,e.vel).multiplyScalar(1.6),g=this.coast?.6:this.state==="engage"?.18:.3;f.length()<g?f.set(0,0,0):this.coast=!1,e.gas<.05&&f.set(0,0,0);let x=4*Wo/e.mass;f.applyQuaternion(Sx.copy(e.quat).invert()).divideScalar(x),o.move.set(Zt(f.x,-1,1),Zt(f.y,-1,1),Zt(f.z,-1,1))}desiredAimDir(t){let e=this.s,n=this.game,i=n.time,s=this.eye,o=this.target;if(o){let l=Ce.copy(this.aimHead?Ex:Ic).applyQuaternion(o.quat).add(o.pos).sub(s),c=Ke.randomDirection().multiplyScalar(o.vel.length()*this.skill.velNoise);this.velEst.lerp(Rn.copy(o.vel).add(c),Math.min(1,(this._dt||1/60)/this.skill.velLag));let h=Rn.copy(this.velEst).sub(e.vel),u=e.weapon.def,d;return u.kind==="beam"?d=0:u.kind==="rocket"?d=No(l,h,u.speed,u.accel,u.burn):d=mr(l,h,u.speed),d>0&&l.addScaledVector(h,d),t.copy(l).normalize()}if(this.state==="hunt"&&this.huntK)return t.subVectors(this.huntK.pos,s).normalize();if(this.state==="retreat"||this.state==="refuel"){let a=this.threatPositions();if(a.length)return t.subVectors(a[0],s).normalize()}if(i>this.lookT){this.lookT=i+At(1.2,2.5);let a=e.team===0?1:-1,l=e.forward(Ce);Math.random()<.18?this.lookDir.set(a*At(.4,1),At(-.5,.5),At(-.5,.5)).normalize():e.vel.lengthSq()>4&&Math.random()<.3&&e.vel.clone().normalize().dot(l)>.5?this.lookDir.copy(e.vel).normalize():this.lookDir.copy(l).addScaledVector(Mi(l,Ke),At(0,.75)).normalize()}return t.copy(this.lookDir)}aim(t){let e=this.s,n=this.skill,i=this.desiredAimDir(this._want||(this._want=new v));this.trueAim=i;let s=Math.exp(-t/n.settle);this.err.multiplyScalar(s);let o=n.floor*Fn*(1+e.angVel.length()*.8+(e.grab?-.4:0));this.err.x+=(Math.random()-.5)*o*.9,this.err.y+=(Math.random()-.5)*o*.9;let a=n.floor*Fn*1.6;if(this.target&&this.game.time>this.acquireT+n.settle*2){let m=this.err.length();m>a&&this.err.multiplyScalar(a/m)}let l=Ce.copy(i),c=Ke.crossVectors(l,Math.abs(l.y)<.95?Rn.set(0,1,0):Rn.set(1,0,0)).normalize(),h=Rn.crossVectors(c,l);if(l.addScaledVector(c,this.err.x).addScaledVector(h,this.err.y).normalize(),this.target&&this.game.time<this.acquireT)return;let u=e.aimDir(this._cur||(this._cur=new v)),d=Math.acos(Zt(u.dot(l),-1,1));if(d<1e-5)return;let f=n.track*Fn*t,g=Math.min(d,Math.max(f*.15,d*Math.min(1,t*14)),f),x=Ke.crossVectors(u,l).normalize();u.applyAxisAngle(x,g),e.setAimDir(u)}roll(t){let e=this.s,n=this.game.time,i=null,s=1.3;if(e.grab&&e.grab.normal&&e.grab.kind!=="pod")i=e.grab.normal;else{if(!this.upPref||n>this.upT){let o=this.state==="engage";this.upT=n+(o?At(1.5,3.5):At(3,7)),this.upPref=(this.upPref||new v).randomDirection(),this.rollRate=o?At(.8,2):At(.4,1)}i=this.upPref,s=this.rollRate}e.rollToward(i,s*t)}actions(t){let e=this.s,n=this.game,i=n.time,s=this.target;if(!s){this.flushGrenade();return}if(i<this.acquireT)return;let o=this.eye,a=s.pos.distanceTo(o);if(a<Bn.range&&e.meleeCool<=0){n.combat.melee(e);return}let l=e.aimDir(Ce),c=Math.acos(Zt(l.dot(this.trueAim),-1,1)),h=Math.atan(.42/a)*1.35+.15*Fn+(e.weapon.def.kind==="pellets"?2.5*Fn:0);if(c>h||e.weapon.reloadT>0||e.switchT>0)return;let u=e.weapon;if(!(u.def.kind==="beam"&&(u.heat>.85&&(this.coolUntil=i+.6),this.coolUntil>i||u.overheat))){if(u.def.backblast){for(let d of n.soldiers)if(d!==e&&d.alive&&d.team===e.team&&d.pos.distanceTo(o)<7&&Ke.subVectors(d.pos,o).dot(l)<0)return}this.lineClearOfFriends(o,l,a)&&(this.burstPause>i||n.combat.fire(e)&&(this.burst++,e.weapon.def.auto&&(a>25||this.skill.burstPause)&&this.burst>=3+(Math.random()*3|0)&&(this.burst=0,this.burstPause=i+At(.15,.32)+(this.skill.burstPause||0))))}}considerGrenade(t){let e=this.s,n=this.game;if(e.grenades<=0||e.grenadeCool>0||e.throwT>0||this.game.time<this.acquireT)return;let i=this.eye,s=t.pos.distanceTo(i);if(s<8||s>55)return;let o=Rn.subVectors(t.vel,e.vel),a=t.grab||o.length()<2,l=s<30?1:.4;if(a)l+=1.2;else if(s>30)return;for(let d of n.soldiers){if(!d.alive||d===t)continue;let f=d.pos.distanceTo(t.pos);if(d.team!==e.team&&f<7&&(l+=.8),d.team===e.team&&f<9)return}if(e.health<50&&(l+=.4),Math.random()>this.skill.grenade*2.2*l)return;let c=Ke.subVectors(t.pos,i),h=mr(c,o,Xe.speed);if(!(h>0)||h>Xe.fuse-.35)return;let u=c.addScaledVector(o,h+ti*.4).normalize();n.world.raycast(i,u,Math.min(s,6),!0)||n.combat.throwGrenade(e,u)}flushGrenade(){let t=this.s,e=this.game,n=this.huntK;if(this.state!=="hunt"||!n||t.grenades<=0||t.grenadeCool>0||e.time-n.t>3||Math.random()>this.skill.grenade*this._dt*4)return;let i=this.eye,s=n.pos.distanceTo(i);if(s<10||s>28||!e.world.los(i,n.pos,!0))return;for(let a of e.soldiers)if(a.alive&&a.team===t.team&&a.pos.distanceTo(n.pos)<10)return;let o=Ce.subVectors(n.pos,i).normalize();e.combat.throwGrenade(t,o)}lineClearOfFriends(t,e,n){for(let i of this.game.soldiers){if(i===this.s||!i.alive||i.team!==this.s.team)continue;let s=Ke.subVectors(i.pos,t),o=s.dot(e);if(!(o<0||o>n)&&s.addScaledVector(e,-o).lengthSq()<1.2)return!1}return!0}};var Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wx=new Ts(-1,1,1,-1,0,1),Lc=class extends le{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},Tx=new Lc,Ai=class{constructor(t){this._mesh=new mt(Tx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,wx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Qo=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yi.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ai(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var br=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},jo=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ta=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qo(Ko),this.copyPass.material.blending=Dn,this.clock=new Co}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}br!==void 0&&(o instanceof br?n=!0:o instanceof jo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ea=class extends ln{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Ku={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gs=class r extends ln{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(s,o,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ne(s,o,{type:sn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ne(s,o,{type:sn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Ku;this.highPassUniforms=yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ko;this.copyUniforms=yi.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new ie,this.fsQuad=new Ai(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ht(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gs.BlurDirectionX=new ht(1,0);Gs.BlurDirectionY=new ht(0,1);var Qu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var na=class extends ln{constructor(){super();let t=Qu;this.uniforms=yi.clone(t.uniforms),this.material=new wo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ia=class extends Rs{constructor(){super();let t=new Se;t.deleteAttribute("uv");let e=new Ot({side:Ae}),n=new Ot,i=new $e(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new mt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new mt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new mt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new mt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new mt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new mt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new mt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new mt(t,Ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new mt(t,Ws(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new mt(t,Ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new mt(t,Ws(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new mt(t,Ws(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new mt(t,Ws(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ws(r){let t=new ie;return t.color.setScalar(r),t}var ra={low:{scale:.6,shadows:0,bloom:!1,aa:!1,particles:.4,env:!1},medium:{scale:.85,shadows:0,bloom:!0,aa:!0,particles:.75,env:!0},high:{scale:1,shadows:2048,bloom:!0,aa:!0,particles:1,env:!0},ultra:{scale:1.5,shadows:4096,bloom:!0,aa:!0,particles:1,env:!0}},sa=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.cfg={...ra.high},this.composer=null,t.shadowMap.type=rc,this.pmrem=new As(t),this.envTex=null}apply(t,e){let n=this.cfg.shadows;this.cfg={...t};let i=this.renderer,s=Math.max(.4,Math.min(2,(window.devicePixelRatio||1)*t.scale));i.setPixelRatio(s),i.shadowMap.enabled=t.shadows>0,e&&this.setupShadows(e),n>0!=t.shadows>0&&this.scene.traverse(o=>{o.material&&[].concat(o.material).forEach(a=>{a.needsUpdate=!0})}),t.env?(this.envTex||(this.envTex=this.pmrem.fromScene(new ia,.04).texture),this.scene.environment=this.envTex,this.scene.environmentIntensity=e&&!e.enclosed?.22:.38):this.scene.environment=null,this.buildComposer()}setupShadows(t){let e=t.sun;if(this.sun=e,!e)return;let n=this.cfg.shadows>0;if(e.castShadow=n,n){e.shadow.mapSize.set(this.cfg.shadows,this.cfg.shadows),e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null);let i=e.shadow.camera,s=55;i.left=-s,i.right=s,i.top=s,i.bottom=-s,i.near=1,i.far=400,i.updateProjectionMatrix(),e.shadow.bias=-4e-4,e.shadow.normalBias=.04,e.target.parent||this.scene.add(e.target),this.sunDir=e.position.clone().normalize()}}follow(t){if(!this.sun||!this.sun.castShadow)return;let e=110/this.cfg.shadows,n=Math.round(t.x/e)*e,i=Math.round(t.y/e)*e,s=Math.round(t.z/e)*e;this.sun.target.position.set(n,i,s),this.sun.position.set(n,i,s).addScaledVector(this.sunDir,180),this.sun.target.updateMatrixWorld()}buildComposer(){if(this.composer&&(this.composer.dispose(),this.composer=null),!this.cfg.bloom&&!this.cfg.aa)return;let t=this.renderer,e=t.getDrawingBufferSize(new ht),n=new Ne(e.x,e.y,{type:sn,samples:this.cfg.aa?4:0}),i=new ta(t,n);i.addPass(new ea(this.scene,this.camera)),this.cfg.bloom&&(this.bloom=new Gs(new ht(e.x/2,e.y/2),.55,.45,.92),i.addPass(this.bloom)),i.addPass(new na),this.composer=i,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e))}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}};var Dc=1/120,Ax=["VEGA","KESTREL","NOMAD","APEX","ORBIT","HALO","RAZOR","TALON","DRIFT","NOVA","SPECTER","CINDER","ECHO","PULSAR","QUASAR","ZENITH"],sd=[["forward","Move forward","KeyW"],["back","Move back","KeyS"],["left","Move left","KeyA"],["right","Move right","KeyD"],["up","Move up / push off","Space"],["down","Move down","ShiftLeft"],["rollLeft","Roll left","KeyQ"],["rollRight","Roll right","KeyE"],["brake","Match velocity (brake)","KeyC"],["killRot","Kill rotation","KeyX"],["grab","Grab / release","KeyF"],["reload","Reload","KeyR"],["grenade","Grenade","KeyG"],["melee","Momentum hammer","KeyV"],["weapon1","Primary weapon","Digit1"],["weapon2","Secondary weapon","Digit2"],["mode","Cycle RCS mode","KeyT"],["lockRef","Lock velocity reference","KeyL"],["grid","Reference grid","KeyH"],["board","Scoreboard","Tab"]],ju=Object.fromEntries(sd.map(r=>[r[0],r[2]])),td={recoil:!0,breaches:!0,knockback:!0,thrusterDamage:!0,infiniteGas:!1},Uc={sens:1,difficulty:"hard",mode:1,teamSize:5,scoreLimit:30,volume:.6,fov:80,invertY:!1,outlines:!0,map:"hangar",loadout:["rifle","shotgun"],dmgNumbers:!0,gfx:{preset:"high",...ra.high}},ed={hangar:{rifle:1,shotgun:.95,gyrojet:.5,recoilless:.6,maser:.85},yard:{rifle:1,shotgun:.3,gyrojet:.95,recoilless:.85,maser:.9}},nd=new Set(["rifle","gyrojet","recoilless","maser"]);function id(r){return r?r.startsWith("Key")?r.slice(3):r.startsWith("Digit")?r.slice(5):r.startsWith("Numpad")?"Num"+r.slice(6):{Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Tab:"Tab",CapsLock:"Caps",Backquote:"`",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Enter",Backspace:"Bksp"}[r]||r:"\u2014"}var ni=new v,Xs=new v,Nc=new ge,Fc=class{constructor(t){this.keys=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,left:!1,right:!1,leftPressed:!1,wheel:0},this.el=t,window.addEventListener("keydown",e=>{if(this.capture){e.preventDefault();let n=this.capture;this.capture=null,n(e.code);return}(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow")&&!(e.target&&e.target.tagName==="SELECT"))&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1}),window.addEventListener("mousemove",e=>{(document.pointerLockElement===t||this.forceMouse)&&(this.mouse.dx+=e.movementX||0,this.mouse.dy+=e.movementY||0)}),t.addEventListener("mousedown",e=>{e.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),e.button===2&&(this.mouse.right=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("wheel",e=>{this.mouse.wheel+=Math.sign(e.deltaY)},{passive:!0})}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.mouse.dx=this.mouse.dy=0,this.mouse.leftPressed=!1,this.mouse.wheel=0}},Oc=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new xo({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=pr,this.renderer.toneMappingExposure=1.05,this.scene=new Rs,this.scene.background=new ot(131850),this.camera=new ze(80,window.innerWidth/window.innerHeight,.04,6e3),this.scene.add(this.camera),this.settings=this.loadSettings(),this.time=0,this.state="menu",this.world=new vr(this.scene,this.settings.map),this.gfx=new sa(this.renderer,this.scene,this.camera),this.fx=new ko(this.scene),this.audio=new zo,this.audio.setVolume(this.settings.volume),this.combat=new Yo(this),this.hud=new Zo(this,document.getElementById("hud")),this.input=new Fc(this.canvas),this.soldiers=[],this.bots=[],this.intel=[new Map,new Map],this.teamScore=[0,0],this.showGrid=!1,this.buildViewmodel(),this.buildGrid(),this.acc=0,this.last=performance.now(),this.menuCam=0,window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>this.onLockChange()),document.addEventListener("pointerlockerror",()=>{this.input.forceMouse||(this.input.forceMouse=!0,this.state==="playing"&&this.hud.message("POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES","#ffcc4d",4))}),this.setupUI(),this.applyGraphics(),this.resize(),requestAnimationFrame(t=>this.frame(t))}loadSettings(){let t={};try{t=JSON.parse(localStorage.getItem("deltav.settings")||"{}")||{}}catch{t={}}let e={...Uc,...t};return e.binds={...ju,...t.binds||{}},e.rules={...td,...t.rules||{}},ks[e.map]||(e.map="hangar"),e.gfx={...Uc.gfx,...t.gfx||{}},(!Array.isArray(e.loadout)||e.loadout.length!==2||!e.loadout.every(n=>gn[n])||e.loadout[0]===e.loadout[1])&&(e.loadout=[...Uc.loadout]),e}get rules(){return this.settings.rules}keyLabel(t){return id(this.settings.binds[t])}bound(t){return this.input.down(this.settings.binds[t])}pressedAct(t){return this.input.hit(this.settings.binds[t])}saveSettings(){try{localStorage.setItem("deltav.settings",JSON.stringify(this.settings))}catch{}}resize(){let t=window.innerWidth,e=window.innerHeight;this.gfx.resize(),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.hud.resize(),this.fx.setScale(e*this.renderer.getPixelRatio(),this.camera.fov)}applyGraphics(){let t=this.settings.gfx;this.gfx.apply(t,this.world),this.fx.density=t.particles,this.resize()}buildViewmodel(){this.vm=new Te,this.camera.add(this.vm),this.vmS=.62,this.vmHolder=new Te,this.vmHolder.scale.setScalar(this.vmS),this.vm.add(this.vmHolder),this.vmGuns={};for(let t of Object.keys(gn)){let e=Ac(t,an[0],{noShadow:!0});e.visible=!1,this.vmHolder.add(e),this.vmGuns[t]=e}this.vmArmR=Ec(an[0]),this.vmArmR.scale.setScalar(this.vmS),this.vm.add(this.vmArmR),this.vmArmL=Ec(an[0]),this.vmArmL.scale.setScalar(this.vmS),this.vm.add(this.vmArmL),this.vmNade=new mt(new En(.045,1),new Ot({color:3355443,emissive:an[0],emissiveIntensity:1.6})),this.vmNade.visible=!1,this.vm.add(this.vmNade),this.vmFlash=new $e(16755302,0,6,1.5),this.vmFlash.position.set(.1,-.05,-.6),this.vm.add(this.vmFlash),this.vmSway=new ht,this.vmMove=new v}buildGrid(){this.grid&&this.scene.remove(this.grid);let t=[],e=this.world.bounds,n=this.world.enclosed?12:24;for(let s=e.min[1];s<=e.max[1];s+=n)for(let o=e.min[2];o<=e.max[2];o+=n)t.push(e.min[0],s,o,e.max[0],s,o);for(let s=e.min[0];s<=e.max[0];s+=n)for(let o=e.min[2];o<=e.max[2];o+=n)t.push(s,e.min[1],o,s,e.max[1],o);for(let s=e.min[0];s<=e.max[0];s+=n)for(let o=e.min[1];o<=e.max[1];o+=n)t.push(s,o,e.min[2],s,o,e.max[2]);let i=new le;i.setAttribute("position",new Vt(t,3)),this.grid=new Cs(i,new Gi({color:6289151,transparent:!0,opacity:0,depthWrite:!1})),this.grid.visible=!1,this.scene.add(this.grid)}setupUI(){let t=a=>document.getElementById(a);this.ui={main:t("menu"),pause:t("pause"),end:t("end"),board:t("board"),lock:t("lockhint")};let e=this.settings,n=(a,l,c=h=>h)=>{let h=t(a);h&&(h.value=String(e[l]),h.addEventListener("change",()=>{e[l]=c(h.value),this.saveSettings(),this.applySettings()}))};n("optDiff","difficulty"),n("optTeam","teamSize",Number),n("optScore","scoreLimit",Number),n("optMode","mode",Number),n("optMap","map"),this.setupGraphicsUI(),t("mapDesc").textContent=ks[e.map].desc,t("optMap").addEventListener("change",()=>{t("mapDesc").textContent=ks[e.map].desc});let i=(a,l,c)=>{let h=t(a);h&&(h.checked=l(),h.addEventListener("change",()=>{c(h.checked),this.saveSettings()}))};for(let a of Object.keys(td))i("rule_"+a,()=>e.rules[a],l=>{e.rules[a]=l});i("optOutline",()=>e.outlines,a=>{e.outlines=a}),this.buildBindUI(),this.setupLoadoutUI();let s=(a,l,c,h)=>{let u=t(a);if(!u)return;u.value=e[l];let d=t(c);d&&(d.textContent=h(e[l])),u.addEventListener("input",()=>{e[l]=Number(u.value),d&&(d.textContent=h(e[l])),this.saveSettings(),this.applySettings()})};s("optSens","sens","optSensV",a=>a.toFixed(2)),s("optFov","fov","optFovV",a=>a.toFixed(0)+"\xB0"),s("optVol","volume","optVolV",a=>Math.round(a*100)+"%"),s("optSens2","sens","optSens2V",a=>a.toFixed(2));let o=t("optInv");o&&(o.checked=e.invertY,o.addEventListener("change",()=>{e.invertY=o.checked,this.saveSettings()})),t("modeDesc").textContent=Xo[e.mode],t("optMode").addEventListener("change",()=>{t("modeDesc").textContent=Xo[e.mode]}),t("btnDeploy").addEventListener("click",()=>{this.audio.init(),this.newMatch()}),t("btnResume").addEventListener("click",()=>this.resume()),t("btnQuit").addEventListener("click",()=>this.toMenu()),t("btnAgain").addEventListener("click",()=>this.newMatch()),t("btnMenu").addEventListener("click",()=>this.toMenu()),this.ui.lock.addEventListener("click",()=>this.lock()),this.canvas.addEventListener("click",()=>{this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.lock()})}setupGraphicsUI(){let t=s=>document.getElementById(s),e=this.settings.gfx,n=()=>{t("gPreset").value=e.preset,t("gScale").value=e.scale,t("gScaleV").textContent=Math.round(e.scale*100)+"%",t("gShadows").value=String(e.shadows),t("gBloom").checked=e.bloom,t("gAA").checked=e.aa,t("gParticles").value=String(e.particles),t("gEnv").checked=e.env,t("gDmg").checked=this.settings.dmgNumbers};if(!t("gPreset"))return;let i=(s=!0)=>{s&&(e.preset="custom"),this.saveSettings(),this.applyGraphics(),n()};t("gPreset").addEventListener("change",()=>{let s=ra[t("gPreset").value];s&&(Object.assign(e,s),e.preset=t("gPreset").value),i(!1)}),t("gScale").addEventListener("change",()=>{e.scale=Number(t("gScale").value),i()}),t("gScale").addEventListener("input",()=>{t("gScaleV").textContent=Math.round(Number(t("gScale").value)*100)+"%"}),t("gShadows").addEventListener("change",()=>{e.shadows=Number(t("gShadows").value),i()}),t("gBloom").addEventListener("change",()=>{e.bloom=t("gBloom").checked,i()}),t("gAA").addEventListener("change",()=>{e.aa=t("gAA").checked,i()}),t("gParticles").addEventListener("change",()=>{e.particles=Number(t("gParticles").value),i()}),t("gEnv").addEventListener("change",()=>{e.env=t("gEnv").checked,i()}),t("gDmg").addEventListener("change",()=>{this.settings.dmgNumbers=t("gDmg").checked,this.saveSettings()}),n()}setupLoadoutUI(){let t=this.settings,e=[["optPri","optSec"],["optPri2","optSec2"]],n=()=>{for(let[i,s]of e){let o=document.getElementById(i),a=document.getElementById(s);o&&(o.value=t.loadout[0]),a&&(a.value=t.loadout[1])}for(let i of["loadoutDesc","loadoutDesc2"]){let s=document.getElementById(i);s&&(s.textContent=t.loadout.map(o=>`${gn[o].short}: ${Fu[o]}`).join("  \xB7  ")+`  (carried mass ${t.loadout.reduce((o,a)=>o+gn[a].mass,0).toFixed(1)} kg)`)}};for(let[i,s]of e)for(let[o,a]of[[i,0],[s,1]]){let l=document.getElementById(o);l&&(l.innerHTML=_r.map(c=>`<option value="${c}">${gn[c].name}</option>`).join(""),l.addEventListener("change",()=>{let c=1-a;t.loadout[c]===l.value&&(t.loadout[c]=t.loadout[a]),t.loadout[a]=l.value,this.saveSettings(),n(),this.state==="paused"&&this.hud.message("LOADOUT CHANGES ON NEXT DEPLOY","#ffcc4d",2.5)}))}n()}botLoadout(t){let e=this.settings,n=ed[this.world.mapId]||ed.hangar,i=Object.values(this.weaponKills).reduce((d,f)=>d+f,0),s=t.bot?t.bot.role:"anchor",o={};for(let d of _r){let f=n[d];e.teamSize>=6&&(d==="gyrojet"||d==="recoilless")&&(f*=1.2),e.difficulty==="elite"&&(d==="rifle"||d==="maser")&&(f*=1.2),e.difficulty==="easy"&&d==="shotgun"&&(f*=1.2),s==="rusher"&&d==="shotgun"&&(f*=1.6),s==="anchor"&&(d==="rifle"||d==="gyrojet"||d==="recoilless")&&(f*=1.3),s==="flanker"&&(d==="maser"||d==="rifle")&&(f*=1.2),f*=1+2.5*(this.weaponKills[d]||0)/(i+6),o[d]=f}let a=(d,f)=>{let g=_r.filter(p=>p!==f),x=0;for(let p of g)x+=d[p];let m=Math.random()*x;for(let p of g)if(m-=d[p],m<=0)return p;return g[0]},l={...o};l.shotgun*=s==="rusher"?1:.35;let c=a(l,null),h={...o};for(let d of _r)h[d]*=nd.has(c)?d==="shotgun"?2.2:.6:nd.has(d)?1.4:1;let u=a(h,c);return[c,u]}buildBindUI(){let t=document.getElementById("binds");if(!t)return;let e=this.settings;t.innerHTML="";for(let[s,o]of sd){let a=document.createElement("div");a.className="bind";let l=document.createElement("span");l.textContent=o;let c=document.createElement("button");c.className="key",c.type="button",c.id="bind_"+s,c.textContent=id(e.binds[s]),c.addEventListener("click",()=>{c.textContent="press a key\u2026",c.classList.add("wait"),this.input.capture=h=>{if(c.classList.remove("wait"),h!=="Escape"){for(let u of Object.keys(e.binds))e.binds[u]===h&&u!==s&&(e.binds[u]=e.binds[s]);e.binds[s]=h,this.saveSettings()}this.buildBindUI(),this.setupLoadoutUI()}}),a.append(l,c),t.append(a)}let n=document.createElement("div");n.className="bindnote",n.textContent="Fixed: mouse = turn your body, left click = fire, right click = zoom, wheel = cycle weapons, Esc = pause.",t.append(n);let i=document.getElementById("btnResetBinds");i&&!i._wired&&(i._wired=!0,i.addEventListener("click",()=>{e.binds={...ju},this.saveSettings(),this.buildBindUI()}))}applySettings(){this.audio.setVolume(this.settings.volume),this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.player&&(this.player.mode=this.settings.mode)}lock(){let t=()=>{this.input.forceMouse||(this.input.forceMouse=!0,this.state==="playing"&&this.hud.message("POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES","#ffcc4d",4))};try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(t)}catch{t()}}onLockChange(){!(document.pointerLockElement===this.canvas)&&this.state==="playing"&&!this.input.forceMouse&&this.pause(),this.ui.lock.style.display="none"}show(t){for(let e of["main","pause","end"])this.ui[e].style.display=e===t?"flex":"none"}pause(){this.state==="playing"&&(this.state="paused",this.show("pause"))}resume(){this.state="playing",this.show(null),this.lock(),this.last=performance.now()}toMenu(){this.state="menu",this.show("main"),document.pointerLockElement&&document.exitPointerLock(),this.clearMatch()}clearMatch(){for(let t of this.soldiers)this.scene.remove(t.model.root);for(let t of this.combat.projectiles)t.mesh&&this.scene.remove(t.mesh);for(let t of this.combat.grenades)this.scene.remove(t.mesh);this.combat.projectiles.length=0,this.combat.grenades.length=0,this.soldiers=[],this.bots=[],this.player=null,this.intel=[new Map,new Map]}newMatch(){this.clearMatch();let t=this.settings;this.world.mapId!==t.map&&(this.world.dispose(),this.world=new vr(this.scene,t.map),this.buildGrid(),this.applyGraphics()),this.applySettings(),this.teamScore=[0,0],this.weaponKills={},this.scoreLimit=t.scoreLimit,this.timeLimit=10*60,this.matchTime=0;let e=Ax.slice().sort(()=>Math.random()-.5);this.player=new Mr(this,0,"YOU",!0),this.player.mode=t.mode,this.soldiers.push(this.player);let n=0;for(let i=0;i<2;i++){let s=i===0?t.teamSize-1:t.teamSize;for(let o=0;o<s;o++){let a=new Mr(this,i,e[n++%e.length]);a.mode=2,this.soldiers.push(a),this.bots.push(new Jo(this,a,t.difficulty,o+i))}}for(let i of this.soldiers)this.respawn(i,!0);this.state="playing",this.show(null),this.hud.feed=[],this.hud.msgs=[],this.hud.message("TEAM DEATHMATCH \u2013 ZERO-G","#9fe8ff",3,!0),this.hud.message(`RCS MODE: ${zs[this.player.mode]}`,"#ffcc4d",3),this.lock();try{this.renderer.compile(this.scene,this.camera)}catch{}this.gfx.setupShadows(this.world),this.last=performance.now()}respawn(t,e=!1){let n=this.world.spawns[t.team],i=n[0],s=-1/0;for(let a of n){let l=999;for(let h of this.soldiers)if(h.alive&&h!==t){let u=h.pos.distanceTo(a);h.team!==t.team?l=Math.min(l,u):u<2&&(l=Math.min(l,u*10))}let c=l+Math.random()*8;c>s&&(s=c,i=a)}let o=new v(t.team===0?1:-1,0,0);t.loadout=t.isPlayer?[...this.settings.loadout]:this.botLoadout(t),t.spawn(i,o),t.oobT=0,t.mode=t.isPlayer?this.settings.mode:2,t.killedBy=null,t.bot&&t.bot.onSpawn(),t.isPlayer&&!e&&this.audio.play("spawn")}distToListener(t){return this.camera.position.distanceTo(t)}reportIntel(t,e,n){let i=this.intel[t],s=i.get(e.id);s||(s={pos:new v,vel:new v,t:0,e},i.set(e.id,s)),s.pos.copy(e.pos),s.vel.copy(e.vel),s.t=this.time}onShot(t,e){let n=e.kind==="rocket"?70:e.kind==="pellets"?55:48;for(let i of this.bots)i.hear(t,t.pos,n);this.audio.play(e.sound,t.isPlayer?0:this.distToListener(t.pos)),t.isPlayer&&(this.vmKick=(this.vmKick||0)+(e.kind==="pellets"?.09:e.kind==="beam"?.004:e.id==="recoilless"?.12:.025)),t.isPlayer&&(this.vmFlash.intensity=6)}onThrow(t,e){for(let n of this.bots)n.hear(t,e,20)}onExplosion(t,e){for(let n of this.bots)n.hear(e,t,80)}onImpact(t,e,n,i){this.audio.play(e>5?"impact":"clank",t.isPlayer?0:this.distToListener(t.pos));let s=e>Si;if(n&&e>3&&(this.fx.sparks(n,Math.round(4+e*(s?4:1.5)),i,2+e*.6),s&&(this.fx.suitHit(n,i,t.vel),this.fx.alpha.spawn(n,null,new ot(9080985),.6,1.2,{grow:3,alpha:.4}))),t.isPlayer){e>3&&this.hud.message(`IMPACT ${e.toFixed(1)} m/s`,s?"#ff4b3a":"#ffcc4d",1.2);let o=s?.4+(e-Si)*.12:(e-1.2)*.04;this.shake=Math.max(this.shake||0,Math.min(1,o)),s&&this.hud.impact(o)}}damageTower(t,e,n){if(!this.rules.thrusterDamage)return;let i=t.towers[e];if(!(i.dead||!t.alive)&&(i.hp-=n,i.hp<=0)){i.dead=!0,i.hp=0;let s=on[e].pos.clone().applyQuaternion(t.quat).add(t.pos);this.fx.sparks(s,25,null,6),this.fx.gasJet(s,new v().randomDirection(),t.vel,3),t.applyImpulse(new v().randomDirection().multiplyScalar(25),s),t.isPlayer&&(this.hud.message(`THRUSTER QUAD ${["UL","UR","LL","LR"][e]} DESTROYED \u2013 EXPECT COUPLED SPIN`,"#ff4b3a",3),this.audio.play("warn"))}}damage(t,e,n,i,s,o){if(!t.alive||t.spawnProtect>0&&i!=="hypoxia")return;t.health-=e,t.lastDamageT=this.time,n&&n!==t&&(t.lastAttacker=n,t.lastAttackerT=this.time),t.bot&&t.bot.onDamaged(n);let a=t.health<=0;n===this.player&&t!==this.player&&e>.3&&(this.hud.hit(o==="head",a),this.settings.dmgNumbers&&this.hud.damageNumber(t,s||t.pos,e,o==="head",a),this.audio.play(a?"kill":o==="head"?"head":"hit")),t===this.player&&e>.5&&i!=="hypoxia"&&(this.hud.damageFrom(n?n.pos:s),this.audio.play("hurt")),a&&this.kill(t,n,i,o==="head")}kill(t,e,n,i){t.alive=!1,t.health=0,t.deaths++,t.respawnT=4,t.leaks=[],t.grab=null;let s=e&&e!==t?e:null;!s&&t.lastAttacker&&this.time-(t.lastAttackerT||0)<6&&(s=t.lastAttacker),s&&s.team!==t.team&&(s.kills++,s.score+=100,gn[n]&&(this.weaponKills[n]=(this.weaponKills[n]||0)+1),this.teamScore[s.team]++,s.isPlayer&&this.hud.message(`ELIMINATED ${t.name}${i?" \u2013 HEADSHOT":""}`,"#ff4b3a",1.8)),t.killedBy=s,t.killCause=n,this.hud.kill(s,t,n,i),t.bot&&(t.bot.target=null);for(let o of this.intel)o.delete(t.id);(this.teamScore[0]>=this.scoreLimit||this.teamScore[1]>=this.scoreLimit)&&setTimeout(()=>this.endMatch(),1200)}endMatch(){if(this.state!=="playing"&&this.state!=="paused")return;this.state="ended",document.pointerLockElement&&document.exitPointerLock();let t=this.teamScore[0]>this.teamScore[1]?0:this.teamScore[1]>this.teamScore[0]?1:-1;document.getElementById("endTitle").textContent=t===0?"VICTORY":t===1?"DEFEAT":"DRAW",document.getElementById("endTitle").style.color=t===0?"#3f8cff":t===1?"#ff8a2a":"#e9eef2",document.getElementById("endScore").textContent=`${this.teamScore[0]} \u2013 ${this.teamScore[1]}`,document.getElementById("endBoard").innerHTML=this.boardHTML(),this.show("end")}boardHTML(){let t="";for(let e of[0,1]){let n=this.soldiers.filter(i=>i.team===e).sort((i,s)=>s.kills-i.kills||i.deaths-s.deaths);t+=`<div class="bteam" style="--tc:${"#"+an[e].toString(16).padStart(6,"0")}"><div class="bhead"><b>${qu[e]}</b><span>${this.teamScore[e]}</span></div>`,t+="<table><tr><th>CALLSIGN</th><th>LOADOUT</th><th>K</th><th>D</th><th>\u0394v</th></tr>";for(let i of n)t+=`<tr class="${i.isPlayer?"me":""}${i.alive?"":" dead"}"><td>${i.name}</td><td class="lo">${(i.loadout||[]).map(s=>gn[s].short).join(" + ")}</td><td>${i.kills}</td><td>${i.deaths}</td><td>${i.alive?i.dv.toFixed(0):"\u2014"}</td></tr>`;t+="</table></div>"}return t}tryGrab(t){let e=this.world.nearestSurface(t.pos,rn+.85);if(!e)return!1;let n=e.kind==="pod"?e.obj.vel:ni.set(0,0,0);if(Xs.subVectors(t.vel,n).length()>4.5)return t.isPlayer&&this.hud.message("TOO FAST TO GRAB","#ff4b3a",1.2),!1;if(e.kind==="pod"){let s=e.obj,o=t.mass,a=s.mass,l=t.vel.clone().multiplyScalar(o).addScaledVector(s.vel,a).divideScalar(o+a);s.vel.copy(l),t.vel.copy(l),t.grab={kind:"pod",obj:s,offset:t.pos.clone().sub(s.pos),normal:e.normal}}else t.vel.set(0,0,0),t.grab={kind:e.kind,obj:e.obj,normal:e.normal,point:e.point,dist:Math.max(rn+.05,e.dist)};return t.angVel.multiplyScalar(.2),t.holdQ=null,(t.isPlayer||this.distToListener(t.pos)<15)&&this.audio.play("grab",t.isPlayer?0:this.distToListener(t.pos)),!0}releaseGrab(t){t.grab=null,t.holdQ=null}pushOff(t,e,n){let i=t.grab;if(!i)return;let s=e.clone().normalize(),o=i.normal;if(o&&s.dot(o)<.15&&s.addScaledVector(o,-s.dot(o)+.35).normalize(),i.kind==="pod"){let a=i.obj,l=t.mass,c=a.mass;t.vel.copy(a.vel).addScaledVector(s,n*c/(l+c)),a.vel.addScaledVector(s,-n*l/(l+c))}else t.vel.copy(s).multiplyScalar(n);t.grab=null,t.holdQ=null,t.isPlayer&&this.audio.play("push")}playerControl(t){let e=this.player,n=this.input,i=e.ctrl;if(n.hit("Escape")){this.pause();return}if(!e.alive){i.move.set(0,0,0);return}e.ads=n.mouse.right&&e.throwT<=0;let s=this.vmGuns[e.weapon.def.id].userData.zoom||1.5,o=.0022*this.settings.sens/(1+(s-1)*e.adsAmt);e.addAim(-n.mouse.dx*o,(this.settings.invertY?1:-1)*n.mouse.dy*o);let a=h=>this.bound(h)?1:0;if(i.move.set(a("right")-a("left"),(e.grab?0:a("up"))-a("down"),a("back")-a("forward")),i.roll=a("rollLeft")-a("rollRight"),i.killRot=this.bound("killRot"),i.brake=this.bound("brake"),this.pressedAct("mode")&&(e.mode=(e.mode+1)%zs.length,this.settings.mode=e.mode,this.saveSettings(),this.hud.message(`RCS MODE: ${zs[e.mode]}`,"#ffcc4d",2.5),this.hud.message(Xo[e.mode],"#9fe8ff",3),this.audio.play("mode")),this.pressedAct("grid")&&(this.showGrid=!this.showGrid,this.hud.message(this.showGrid?"REFERENCE GRID ON":"REFERENCE GRID AUTO","#9fe8ff",1.5)),this.pressedAct("lockRef")){let h=this.hud.aimInfo;h&&(h.soldier||h.kind==="pod")&&h.obj!==e.refTarget?(e.refTarget=h.obj,this.hud.message(`VELOCITY REFERENCE: ${h.soldier?h.soldier.name:"CARGO POD"}`,"#ffcc4d",2)):(e.refTarget=null,this.hud.message("VELOCITY REFERENCE: STATION","#ffcc4d",2))}e.refTarget&&e.refTarget.alive===!1&&(e.refTarget=null),this.pressedAct("grab")&&(e.grab?this.releaseGrab(e):this.tryGrab(e)),e.grab?this.bound("up")?e.pushCharge=Math.min(1,e.pushCharge+t/.6):e.pushCharge>0&&(this.pushOff(e,e.aimDir(new v),2+5*e.pushCharge),e.pushCharge=0):e.pushCharge=0;let l=e.weapons.length;for(let h=0;h<l;h++)this.pressedAct("weapon"+(h+1))&&e.switchTo(h);n.mouse.wheel&&e.switchTo((e.cur+(n.mouse.wheel>0?1:l-1))%l),this.pressedAct("reload")&&e.startReload()&&this.audio.play("reload"),this.pressedAct("grenade")&&this.combat.throwGrenade(e),this.pressedAct("melee")&&this.combat.melee(e),(e.weapon.def.auto?n.mouse.left:n.mouse.leftPressed)&&this.combat.fire(e),this.pressedAct("board")&&(this.ui.board.style.display="flex"),this.bound("board")?this.ui.board.innerHTML=this.boardHTML():this.ui.board.style.display="none"}substep(t){for(let e of this.soldiers)e.step(t);this.combat.step(t),this.world.updatePods(t,this.time),this.collideBodies()}collideBodies(){let t=this.soldiers,e=n=>n.grab&&n.grab.kind!=="pod"?0:1/n.mass;for(let n=0;n<t.length;n++){let i=t[n];for(let s=n+1;s<t.length;s++){let o=t[s],a=ni.subVectors(o.pos,i.pos),l=a.length(),c=rn*2;if(l>=c||l<1e-5)continue;a.divideScalar(l);let h=e(i),u=e(o);if(h+u===0)continue;let d=c-l;i.pos.addScaledVector(a,-d*h/(h+u)),o.pos.addScaledVector(a,d*u/(h+u));let f=Xs.subVectors(o.vel,i.vel).dot(a);if(f<0){let g=-1.3*f/(h+u);i.vel.addScaledVector(a,-g*h),o.vel.addScaledVector(a,g*u),-f>2&&this.audio.play("impact",this.distToListener(i.pos))}}for(let s of this.world.pods){if(i.grab&&i.grab.obj===s)continue;let o=ni.subVectors(s.pos,i.pos),a=o.length(),l=rn+s.r;if(a>=l||a<1e-5)continue;o.divideScalar(a);let c=e(i),h=1/s.mass,u=l-a;i.pos.addScaledVector(o,-u*c/(c+h)),s.pos.addScaledVector(o,u*h/(c+h));let d=Xs.subVectors(s.vel,i.vel).dot(o);if(d<0){let f=-1.4*d/(c+h);i.vel.addScaledVector(o,-f*c),s.vel.addScaledVector(o,f*h),-d>3&&i.alive&&this.damage(i,(-d-3)*8,null,"cargo pod",i.pos,"body")}}}}frame(t){requestAnimationFrame(n=>this.frame(n));let e=(t-this.last)/1e3;this.last=t,e>0||(e=0),e=Math.min(e,.05),this.tick(e)}tick(t){if(this.state==="playing"){this.time+=t,this.matchTime+=t,this.playerControl(t);for(let n of this.bots)n.update(t);this.acc+=t;let e=0;for(;this.acc>=Dc&&e<8;)this.substep(Dc),this.acc-=Dc,e++;e===8&&(this.acc=0);for(let n of this.soldiers)n.alive&&!this.world.enclosed&&(this.world.outside(n.pos)>0?(n.oobT=(n.oobT||0)+t,n.oobT>5&&this.damage(n,20*t,null,"out of bounds")):n.oobT=0),n.alive?n.update(t):(n.respawnT-=t,n.respawnT<=0&&this.respawn(n));this.matchTime>=this.timeLimit&&this.endMatch(),this.emitThrusterFx(t)}else this.state==="menu"&&(this.time+=t,this.world.updatePods(t,this.time));this.state!=="paused"&&(this.fx.update(t,this.combat.tracerList()),this.combat.syncMeshes(t)),this.world.syncPodMeshes();for(let e of this.soldiers)e.syncModel(t);this.updateCamera(t),this.hud.draw(this.state==="paused"?0:t),this.player?this.gfx.follow(this.camera.position):this.gfx.follow(new v),this.gfx.render(),this.input.endFrame()}animateViewmodel(t,e,n){let i=e.userData,s=t.weapon,o=s.def,a=this.vmS,l=this.time,c=(C,w,b)=>{let I=Math.max(0,Math.min(1,(b-C)/(w-C)));return I*I*(3-2*I)},h=C=>Math.sin(Math.max(0,Math.min(1,C))*Math.PI),u=t.adsAmt,d=ni.set(.17,-.16,-.34),f=new v(-i.sight.x*a,-i.sight.y*a,-.25-i.sight.z*a),g=d.lerp(f,u),x=new Fe(0,0,0,"YXZ");this.vmSway.x+=(-this.input.mouse.dx*9e-4-this.vmSway.x)*Math.min(1,n*10),this.vmSway.y+=(-this.input.mouse.dy*9e-4-this.vmSway.y)*Math.min(1,n*10),this.vmMove.lerp(Xs.copy(t.ctrl.move).multiplyScalar(-.012),Math.min(1,n*5));let m=1-u*.85;x.y+=this.vmSway.x*m,x.x+=this.vmSway.y*m,g.addScaledVector(this.vmMove,m),g.y+=Math.sin(l*1.4)*.002*m,g.x+=Math.cos(l*.7)*.0015*m,this.vmKick=(this.vmKick||0)*Math.exp(-n*16),g.z+=this.vmKick*(1-u*.5),x.x+=this.vmKick*1.6*(1-u*.6);let p=null,_=new v,S=!0,y=new v(-.12,-.5,-.22);if(s.reloadT>0&&o.reload>0){let C=1-s.reloadT/o.reload;if(o.perShell){x.z+=.35,x.x+=.12,g.y-=.02;let w=this.gunPoint(e,new v(0,-.06,-.05),g,x);p=C<.45?y.clone().lerp(w,c(.15,.45,C)):w.clone().lerp(y,c(.75,1,C)*.6)}else if(i.breech){x.x+=.45*h(C),g.y-=.04*h(C),C<.35?_.z=.35*c(.08,.35,C):C<.6?S=!1:_.z=.35*(1-c(.6,.85,C));let w=this.gunPoint(e,i.magRest.clone().add(_),g,x);p=C<.35?null:C<.6?y:C<.88?w:null}else{x.z+=.5*h(C),x.x+=.22*h(C),g.y-=.035*h(C),C>.08&&C<.32?_.y=-.35*c(.08,.32,C):C>=.32&&C<.55?S=!1:C>=.55&&C<.82&&(_.y=-.3*(1-c(.55,.82,C)));let w=this.gunPoint(e,i.magRest.clone().add(_),g,x);p=C<.1?null:C<.3?w:C<.55?y:C<.84?w.clone().add(new v(0,-.03,0)):null,C>.82&&C<.92&&(g.y+=.012)}}if(o.kind==="beam"&&s.overheat&&(x.z+=.3,x.x+=.2,_.z=.06),i.pump&&s.reloadT<=0){let C=l-t.lastFireT;_.z=.1*h((C-.12)/.35)}let R=!1;if(t.throwT>0){let C=1-t.throwT/ti;g.y-=.2*h(C*1.05),x.x-=.7*h(C*1.05),g.x+=.06*h(C);let w=new v(-.14,-.42,-.34),b=new v(-.19,0,-.34),I=new v(-.03,-.03,-.66);C<.15?p=w.clone():C<.4?p=w.clone().lerp(b,c(.15,.4,C)):C<.55?p=b.clone().lerp(I,c(.4,.52,C)):p=I.clone().lerp(w,c(.55,.85,C)),R=C>.12&&C<.4}if(t.meleeT>0){let C=1-t.meleeT/.35;g.z-=.22*h(C),x.y+=.45*h(C),x.z-=.35*h(C)}if(t.switchT>0){let C=t.switchT/.45;g.y-=.28*C,x.x-=.9*C}this.vmHolder.position.copy(g),this.vmHolder.quaternion.setFromEuler(x),i.mag.position.copy(i.magRest).add(_),i.mag.visible=S;let T=this.gunPoint(e,i.grip,g,x),P=p||this.gunPoint(e,i.pump?i.hand.clone().add(new v(0,0,_.z)):i.hand,g,x);this.placeArm(this.vmArmR,T,new v(.36,-.62,.18)),this.placeArm(this.vmArmL,P,new v(-.4,-.58,.05)),this.vmNade.visible=R,R&&this.vmNade.position.copy(P).add(new v(0,.035,-.04)),this.vmFlash.intensity*=Math.exp(-n*30)}gunPoint(t,e,n,i){return e.clone().multiplyScalar(this.vmS).applyEuler(i).add(n)}placeArm(t,e,n){t.position.copy(e),t.up.set(0,1,0).applyQuaternion(this.camera.quaternion),t.lookAt(this.vm.localToWorld(n.clone()))}emitThrusterFx(t){for(let n of this.soldiers){if(!n.alive)continue;let i=this.distToListener(n.pos)<60;for(let s=0;s<4;s++)for(let o=0;o<6;o++){let a=n.throttle[s*6+o];if(a<.15||!i||Math.random()>a*.7)continue;let l=ni.copy(on[s].pos).applyQuaternion(n.quat).add(n.pos),c=Xs.copy(yr[o]).negate().applyQuaternion(n.quat);n.isPlayer||this.fx.thrusterPuff(l,c,n.vel)}for(let s of n.leaks)if(Math.random()<.6){let o=ni.copy(s.p).applyQuaternion(n.quat).add(n.pos);this.fx.gasJet(o,Xs.copy(s.n).applyQuaternion(n.quat),n.vel)}for(let s=0;s<4;s++)n.towers[s].dead&&Math.random()<.08&&this.fx.sparks(ni.copy(on[s].pos).applyQuaternion(n.quat).add(n.pos),2,null,2)}let e=this.player;e&&this.audio.setHiss(e.alive?e.throttle.reduce((n,i)=>n+i,0):0)}updateCamera(t){let e=this.camera,n=this.player;if(this.state==="menu"||!n){this.menuCam+=t*.05;let c=this.world.enclosed?1:2.4,h=46*c;e.position.set(Math.cos(this.menuCam)*h,Math.sin(this.menuCam*.7)*10*c,Math.sin(this.menuCam)*26*c),e.lookAt(0,0,0),this.vm.visible=!1,this.grid.visible=!1;return}n.eye(e.position),this.shake=(this.shake||0)*Math.exp(-t*5);let i=this.vmGuns[n.weapon.def.id],s=i.userData;if(n.alive){if(n.aimQuat(e.quaternion),this.shake>.01){let h=this.shake*.06;e.position.add(ni.set(At(-1,1),At(-1,1),At(-1,1)).multiplyScalar(this.shake*.08)),e.quaternion.multiply(Nc.setFromEuler(new Fe(At(-h,h),At(-h,h),At(-h,h)*2)))}let c=this.settings.fov/(1+((s.zoom||1.5)-1)*n.adsAmt);e.fov+=(c-e.fov)*Math.min(1,t*16),e.updateProjectionMatrix()}else{let c=n.killedBy;if(c){let h=new ne().lookAt(e.position,c.pos,ni.set(0,1,0).applyQuaternion(e.quaternion));Nc.setFromRotationMatrix(h),e.quaternion.slerp(Nc,Math.min(1,t*2))}}e.updateMatrixWorld();for(let c in this.vmGuns)this.vmGuns[c].visible=n.alive&&c===n.weapon.def.id;this.vm.visible=n.alive,n.alive&&this.animateViewmodel(n,i,t);let o=n.alive&&n.angVel.length()>1.4,a=this.showGrid?.22:o?.16:0,l=this.grid.material;l.opacity+=(a-l.opacity)*Math.min(1,t*4),this.grid.visible=l.opacity>.01}};window.addEventListener("DOMContentLoaded",()=>{try{window.game=new Oc}catch(r){console.error(r),document.body.insertAdjacentHTML("beforeend",`<pre style="color:#f66;position:fixed;top:10px;left:10px;z-index:99">${r.stack}</pre>`)}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
