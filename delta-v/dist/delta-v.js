(()=>{var bl="170";var eu=0,Ql=1,nu=2;var ah=1,iu=2,In=3,jn=0,we=1,cn=2,Zn=0,Jn=1,xn=2,jl=3,tc=4,su=5,_i=100,ru=101,ou=102,au=103,lu=104,cu=200,hu=201,uu=202,du=203,ra=204,oa=205,fu=206,pu=207,mu=208,gu=209,xu=210,_u=211,vu=212,yu=213,Mu=214,aa=0,la=1,ca=2,os=3,ha=4,ua=5,da=6,fa=7,lh=0,Su=1,bu=2,Kn=0,Eu=1,wu=2,Tu=3,El=4,Au=5,Ru=6,Cu=7;var ch=300,as=301,ls=302,pa=303,ma=304,so=306,Si=1e3,yi=1001,ga=1002,un=1003,Pu=1004;var js=1005;var gn=1006,wo=1007;var Mi=1008;var Fn=1009,hh=1010,uh=1011,ks=1012,wl=1013,bi=1014,Dn=1015,qs=1016,Tl=1017,Al=1018,cs=1020,dh=35902,fh=1021,ph=1022,hn=1023,mh=1024,gh=1025,is=1026,hs=1027,xh=1028,Rl=1029,_h=1030,Cl=1031;var Pl=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,xa=35840,_a=35841,va=35842,ya=35843,Ma=36196,Sa=37492,ba=37496,Ea=37808,wa=37809,Ta=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,Ia=37815,La=37816,Da=37817,Ua=37818,Na=37819,Fa=37820,Oa=37821,Lr=36492,Ba=36494,ka=36495,vh=36283,za=36284,Ha=36285,Va=36286;var Dr=2300,Ga=2301,To=2302,ec=2400,nc=2401,ic=2402;var Iu=3200,Lu=3201;var yh=0,Du=1,Yn="",Re="srgb",gs="srgb-linear",ro="linear",te="srgb";var Bi=7680;var sc=519,Uu=512,Nu=513,Fu=514,Mh=515,Ou=516,Bu=517,ku=518,zu=519,Wa=35044,Ii=35048;var rc="300 es",Un=2e3,Ur=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ao=Math.PI/180,Xa=180/Math.PI;function Qn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[r&255]+Le[r>>8&255]+Le[r>>16&255]+Le[r>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function He(r,t,e){return Math.max(t,Math.min(e,r))}function Hu(r,t){return(r%t+t)%t}function Ro(r,t,e){return(1-e)*r+e*t}function mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ee(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Et=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],y=i[1],S=i[4],_=i[7],C=i[2],T=i[5],R=i[8];return s[0]=o*x+a*y+l*C,s[3]=o*m+a*S+l*T,s[6]=o*f+a*_+l*R,s[1]=c*x+h*y+u*C,s[4]=c*m+h*S+u*T,s[7]=c*f+h*_+u*R,s[2]=d*x+p*y+g*C,s[5]=d*m+p*S+g*T,s[8]=d*f+p*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Co=new Lt;function Sh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vu(){let r=Nr("canvas");return r.style.display="block",r}var oc={};function Fs(r){r in oc||(oc[r]=!0,console.warn(r))}function Gu(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Wu(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xu(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?ro:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Nn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ss(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ac=[.64,.33,.3,.6,.15,.06],lc=[.2126,.7152,.0722],cc=[.3127,.329],hc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[gs]:{primaries:ac,whitePoint:cc,transfer:ro,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:lc,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:ac,whitePoint:cc,transfer:te,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:lc,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});var ki,qa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Nr("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qu=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Po(i[o].image)):s.push(Po(i[o]))}else s=Po(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Po(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yu=0,$e=class r extends ti{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=yi,i=yi,s=gn,o=Mi,a=hn,l=Fn,c=r.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Qn(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=ch;$e.DEFAULT_ANISOTROPY=1;var ne=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(p+1)/2,C=(f+1)/2,T=(h+d)/4,R=(u+x)/4,I=(g+m)/4;return S>_&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=R/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=T/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=R/s,i=I/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new $e(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends Ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*x,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let C=Math.sqrt(S),T=Math.atan2(C,f*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let _=a*y;if(l=l*m+d*_,c=c*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new E,dc=new pe,Ei=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),er.subVectors(this.max,As),zi.subVectors(t.a,As),Hi.subVectors(t.b,As),Vi.subVectors(t.c,As),Hn.subVectors(Hi,zi),Vn.subVectors(Vi,Hi),ui.subVectors(zi,Vi);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ui.z,ui.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ui.z,0,-ui.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ui.y,ui.x,0];return!Lo(e,zi,Hi,Vi,er)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,zi,Hi,Vi,er))?!1:(nr.crossVectors(Hn,Vn),e=[nr.x,nr.y,nr.z],Lo(e,zi,Hi,Vi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Tn=[new E,new E,new E,new E,new E,new E,new E,new E],on=new E,tr=new Ei,zi=new E,Hi=new E,Vi=new E,Hn=new E,Vn=new E,ui=new E,As=new E,er=new E,nr=new E,di=new E;function Lo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){di.fromArray(r,s);let a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $u=new Ei,Rs=new E,Do=new E,wi=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Do)),this.expandByPoint(Rs.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new E,Uo=new E,ir=new E,Gn=new E,No=new E,sr=new E,Fo=new E,zs=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Uo.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Uo);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=Gn.dot(this.direction),l=-Gn.dot(ir),c=Gn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Uo).addScaledVector(ir,d),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){No.subVectors(e,t),sr.subVectors(n,t),Fo.crossVectors(No,sr);let o=this.direction.dot(Fo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);let l=a*this.direction.dot(sr.crossVectors(Gn,sr));if(l<0)return null;let c=a*this.direction.dot(No.cross(Gn));if(c<0||l+c>o)return null;let h=-a*Gn.dot(Fo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,p,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,p,g,x,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ju)}lookAt(t,e,n){let i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Wn.crossVectors(n,qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Wn.crossVectors(n,qe)),Wn.normalize(),rr.crossVectors(qe,Wn),i[0]=Wn.x,i[4]=rr.x,i[8]=qe.x,i[1]=Wn.y,i[5]=rr.y,i[9]=qe.y,i[2]=Wn.z,i[6]=rr.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],S=n[7],_=n[11],C=n[15],T=i[0],R=i[4],I=i[8],w=i[12],M=i[1],P=i[5],z=i[9],O=i[13],W=i[2],X=i[6],H=i[10],K=i[14],V=i[3],nt=i[7],ct=i[11],vt=i[15];return s[0]=o*T+a*M+l*W+c*V,s[4]=o*R+a*P+l*X+c*nt,s[8]=o*I+a*z+l*H+c*ct,s[12]=o*w+a*O+l*K+c*vt,s[1]=h*T+u*M+d*W+p*V,s[5]=h*R+u*P+d*X+p*nt,s[9]=h*I+u*z+d*H+p*ct,s[13]=h*w+u*O+d*K+p*vt,s[2]=g*T+x*M+m*W+f*V,s[6]=g*R+x*P+m*X+f*nt,s[10]=g*I+x*z+m*H+f*ct,s[14]=g*w+x*O+m*K+f*vt,s[3]=y*T+S*M+_*W+C*V,s[7]=y*R+S*P+_*X+C*nt,s[11]=y*I+S*z+_*H+C*ct,s[15]=y*w+S*O+_*K+C*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+x*(+e*l*p-e*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+m*(+e*c*u-e*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],y=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,S=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,_=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,C=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,T=e*y+n*S+i*_+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=y*R,t[1]=(x*d*s-u*m*s-x*i*p+n*m*p+u*i*f-n*d*f)*R,t[2]=(a*m*s-x*l*s+x*i*c-n*m*c-a*i*f+n*l*f)*R,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*R,t[4]=S*R,t[5]=(h*m*s-g*d*s+g*i*p-e*m*p-h*i*f+e*d*f)*R,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*f-e*l*f)*R,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*p+e*l*p)*R,t[8]=_*R,t[9]=(g*u*s-h*x*s-g*n*p+e*x*p+h*n*f-e*u*f)*R,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*f+e*a*f)*R,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=C*R,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,x=o*h,m=o*u,f=a*u,y=l*c,S=l*h,_=l*u,C=n.x,T=n.y,R=n.z;return i[0]=(1-(x+f))*C,i[1]=(p+_)*C,i[2]=(g-S)*C,i[3]=0,i[4]=(p-_)*T,i[5]=(1-(d+f))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+S)*R,i[9]=(m-y)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Gi.set(i[0],i[1],i[2]).length(),o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);let c=1/s,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Un){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(a===Un)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ur)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Un){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,p=(n+i)*h,g,x;if(a===Un)g=(o+s)*u,x=-2*u;else if(a===Ur)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new E,an=new re,Zu=new E(0,0,0),Ju=new E(1,1,1),Wn=new E,rr=new E,qe=new E,fc=new re,pc=new pe,Ve=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ve.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ku=0,mc=new E,Wi=new pe,Rn=new re,or=new E,Cs=new E,Qu=new E,ju=new pe,gc=new E(1,0,0),xc=new E(0,1,0),_c=new E(0,0,1),vc={type:"added"},td={type:"removed"},Xi={type:"childadded",child:null},Oo={type:"childremoved",child:null},Te=class r extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new E,e=new Ve,n=new pe,i=new E(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Lt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Cs,or,this.up):Rn.lookAt(or,Cs,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Te.DEFAULT_UP=new E(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new E,Cn=new E,Bo=new E,Pn=new E,qi=new E,Yi=new E,yc=new E,ko=new E,zo=new E,Ho=new E,Vo=new ne,Go=new ne,Wo=new ne,$n=class r{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),Cn.subVectors(n,e),Bo.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(Cn),l=ln.dot(Bo),c=Cn.dot(Cn),h=Cn.dot(Bo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Vo,s.x),o.addScaledVector(Go,s.y),o.addScaledVector(Wo,s.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Cn.subVectors(t,e),ln.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;qi.subVectors(i,n),Yi.subVectors(s,n),ko.subVectors(t,n);let l=qi.dot(ko),c=Yi.dot(ko);if(l<=0&&c<=0)return e.copy(n);zo.subVectors(t,i);let h=qi.dot(zo),u=Yi.dot(zo);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qi,o);Ho.subVectors(t,s);let p=qi.dot(Ho),g=Yi.dot(Ho);if(g>=0&&p<=g)return e.copy(s);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return yc.subVectors(s,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(yc,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Xo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Hu(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xo(o,s,t+1/3),this.g=Xo(o,s,t),this.b=Xo(o,s,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Wt.fromWorkingColorSpace(De.copy(this),t),Math.round(He(De.r*255,0,255))*65536+Math.round(He(De.g*255,0,255))*256+Math.round(He(De.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,i=De.g,s=De.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Re){Wt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,i=De.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(ar);let n=Ro(Xn.h,ar.h,e),i=Ro(Xn.s,ar.s,e),s=Ro(Xn.l,ar.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new wt;wt.NAMES=bh;var ed=0,_n=class extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Qn(),this.name="",this.blending=Jn,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ve=class extends _n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new E,lr=new Et,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),t}};var kr=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zr=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},nd=0,je=new re,qo=new Te,$i=new E,Ye=new Ei,Ps=new Ei,Ee=new E,ge=class r extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?zr:kr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ye.min,Ps.min),Ye.expandByPoint(Ee),Ee.addVectors(Ye.max,Ps.max),Ye.expandByPoint(Ee)):(Ye.expandByPoint(Ps.min),Ye.expandByPoint(Ps.max))}Ye.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Ee.add($i)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new E,l[I]=new E;let c=new E,h=new E,u=new E,d=new Et,p=new Et,g=new Et,x=new E,m=new E;function f(I,w,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(x),a[w].add(x),a[M].add(x),l[I].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,w=y.length;I<w;++I){let M=y[I],P=M.start,z=M.count;for(let O=P,W=P+z;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let S=new E,_=new E,C=new E,T=new E;function R(I){C.fromBufferAttribute(i,I),T.copy(C);let w=a[I];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),_.crossVectors(T,w);let P=_.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,w=y.length;I<w;++I){let M=y[I],P=M.start,z=M.count;for(let O=P,W=P+z;O<W;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new E,s=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mc=new re,fi=new zs,cr=new wi,Sc=new E,hr=new E,ur=new E,dr=new E,Yo=new E,fr=new E,bc=new E,pr=new E,Ot=class extends Te{constructor(t=new ge,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Yo.fromBufferAttribute(u,t),o?fr.addScaledVector(Yo,h):fr.addScaledVector(Yo.sub(e),h))}e.add(fr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),fi.copy(t.ray).recast(t.near),!(cr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(cr,Sc)===null||fi.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(s).invert(),fi.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=S;_<C;_+=3){let T=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);i=mr(this,f,t,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);i=mr(this,o,t,n,c,h,u,y,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=S;_<C;_+=3){let T=_,R=_+1,I=_+2;i=mr(this,f,t,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=m,S=m+1,_=m+2;i=mr(this,o,t,n,c,h,u,y,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function id(r,t,e,n,i,s,o,a){let l;if(t.side===we?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===jn,a),l===null)return null;pr.copy(a),pr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:r}}function mr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,hr),r.getVertexPosition(l,ur),r.getVertexPosition(c,dr);let h=id(r,t,e,n,hr,ur,dr,bc);if(h){let u=new E;$n.getBarycoord(bc,hr,ur,dr,u),i&&(h.uv=$n.getInterpolatedAttribute(i,a,l,c,u,new Et)),s&&(h.uv1=$n.getInterpolatedAttribute(s,a,l,c,u,new Et)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new E,materialIndex:0};$n.getNormal(hr,ur,dr,d.normal),h.face=d,h.barycoord=u}return h}var Xt=class r extends ge{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,m,f,y,S,_,C,T,R,I,w){let M=_/R,P=C/I,z=_/2,O=C/2,W=T/2,X=R+1,H=I+1,K=0,V=0,nt=new E;for(let ct=0;ct<H;ct++){let vt=ct*P-O;for(let Nt=0;Nt<X;Nt++){let se=Nt*M-z;nt[x]=se*y,nt[m]=vt*S,nt[f]=W,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[f]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Nt/R),u.push(1-ct/I),K+=1}}for(let ct=0;ct<I;ct++)for(let vt=0;vt<R;vt++){let Nt=d+vt+X*ct,se=d+vt+X*(ct+1),Y=d+(vt+1)+X*(ct+1),tt=d+(vt+1)+X*ct;l.push(Nt,se,tt),l.push(se,Y,tt),V+=6}a.addGroup(p,V,w),p+=V,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(r){let t={};for(let e=0;e<r.length;e++){let n=us(r[e]);for(let i in n)t[i]=n[i]}return t}function sd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Eh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var rd={clone:us,merge:Be},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends _n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Hr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new E,Ec=new Et,wc=new Et,Ue=class extends Hr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Ec,wc),e.subVectors(wc,Ec)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,Za=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(Zi,Ji,t,e);i.layers=this.layers,this.add(i);let s=new Ue(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let o=new Ue(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let l=new Ue(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vr=class extends $e{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ja=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Vr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xt(5,5,5),s=new Fe({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Zn});s.uniforms.tEquirect.value=e;let o=new Ot(i,s),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=gn),new Za(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},$o=new E,ld=new E,cd=new Lt,Ln=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$o.subVectors(n,e).cross(ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cd.getNormalMatrix(t),i=this.coplanarPoint($o).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new wi,gr=new E,Hs=class{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],y=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,m-p,_-f).normalize(),n[1].setComponents(l+s,d+c,m+p,_+f).normalize(),n[2].setComponents(l+o,d+h,m+g,_+y).normalize(),n[3].setComponents(l-o,d-h,m-g,_-y).normalize(),n[4].setComponents(l-a,d-u,m-x,_-S).normalize(),e===Un)n[5].setComponents(l+a,d+u,m+x,_+S).normalize();else if(e===Ur)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(gr.x=i.normal.x>0?t.max.x:t.min.x,gr.y=i.normal.y>0?t.max.y:t.min.y,gr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hd(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ds=class r extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let y=f*d-o;for(let S=0;S<c;S++){let _=S*u-s;g.push(_,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let S=y+c*f,_=y+c*(f+1),C=y+1+c*(f+1),T=y+1+c*f;p.push(S,_,T),p.push(_,C,T)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
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
#endif`,hf=`struct PhysicalMaterial {
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
}`,uf=`
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
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
}`,_p=`#if DEPTH_PACKING == 3200
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
}`,vp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,Bp=`#define TOON
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
}`,kp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Gp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:ud,alphahash_pars_fragment:dd,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:xd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:yd,begin_vertex:Md,beginnormal_vertex:Sd,bsdfs:bd,iridescence_fragment:Ed,bumpmap_pars_fragment:wd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Pd,color_pars_fragment:Id,color_pars_vertex:Ld,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Gd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:sf,envmap_vertex:Yd,fog_vertex:$d,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:jd,lights_lambert_fragment:tf,lights_lambert_pars_fragment:ef,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:df,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:xf,map_fragment:_f,map_pars_fragment:vf,map_particle_fragment:yf,map_particle_pars_fragment:Mf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Ef,morphcolor_vertex:wf,morphnormal_vertex:Tf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:If,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Hf,project_vertex:Vf,dithering_fragment:Gf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:$f,shadowmap_vertex:Zf,shadowmask_pars_fragment:Jf,skinbase_vertex:Kf,skinning_pars_vertex:Qf,skinning_vertex:jf,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:op,uv_pars_fragment:ap,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:hp,background_vert:up,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:xp,depth_frag:_p,distanceRGBA_vert:vp,distanceRGBA_frag:yp,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:bp,linedashed_frag:Ep,meshbasic_vert:wp,meshbasic_frag:Tp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Ip,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:kp,points_frag:zp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:Gp,sprite_frag:Wp},et={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},pn={basic:{uniforms:Be([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Be([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new wt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Be([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Be([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Be([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new wt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Be([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Be([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Be([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Be([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Be([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Be([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Be([et.common,et.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Be([et.lights,et.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};pn.physical={uniforms:Be([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var xr={r:0,b:0,g:0},mi=new Ve,Xp=new re;function qp(r,t,e,n,i,s,o){let a=new wt(0),l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1,_=g(y);_===null?f(a,l):_&&_.isColor&&(f(_,1),S=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){let _=g(S);_&&(_.isCubeTexture||_.mapping===so)?(h===void 0&&(h=new Ot(new Xt(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:us(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(S.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(mi)),h.material.toneMapped=Wt.getTransfer(_.colorSpace)!==te,(u!==_||d!==_.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ot(new ds(2,2),new Fe({name:"BackgroundMaterial",uniforms:us(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,S){y.getRGB(xr,Eh(r)),n.buffers.color.setClear(xr.r,xr.g,xr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function Yp(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(M,P,z,O,W){let X=!1,H=u(O,z,P);s!==H&&(s=H,c(s.object)),X=p(M,O,z,W),X&&g(M,O,z,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(M,P,z,O),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,z){let O=z.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let H=X[O];return H===void 0&&(H=d(l()),X[O]=H),H}function d(M){let P=[],z=[],O=[];for(let W=0;W<e;W++)P[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,z,O){let W=s.attributes,X=P.attributes,H=0,K=z.getAttributes();for(let V in K)if(K[V].location>=0){let ct=W[V],vt=X[V];if(vt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(M,P,z,O){let W={},X=P.attributes,H=0,K=z.getAttributes();for(let V in K)if(K[V].location>=0){let ct=X[V];ct===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),W[V]=vt,H++}s.attributes=W,s.attributesNum=H,s.index=O}function x(){let M=s.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let z=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;z[M]=1,O[M]===0&&(r.enableVertexAttribArray(M),O[M]=1),W[M]!==P&&(r.vertexAttribDivisor(M,P),W[M]=P)}function y(){let M=s.newAttributes,P=s.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==M[z]&&(r.disableVertexAttribArray(z),P[z]=0)}function S(M,P,z,O,W,X,H){H===!0?r.vertexAttribIPointer(M,P,z,W,X):r.vertexAttribPointer(M,P,z,O,W,X)}function _(M,P,z,O){x();let W=O.attributes,X=z.getAttributes(),H=P.defaultAttributeValues;for(let K in X){let V=X[K];if(V.location>=0){let nt=W[K];if(nt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){let ct=nt.normalized,vt=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;let se=Nt.buffer,Y=Nt.type,tt=Nt.bytesPerElement,gt=Y===r.INT||Y===r.UNSIGNED_INT||nt.gpuType===wl;if(nt.isInterleavedBufferAttribute){let st=nt.data,bt=st.stride,Rt=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)f(V.location+Ft,st.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Ft=0;Ft<V.locationSize;Ft++)S(V.location+Ft,vt/V.locationSize,Y,ct,bt*tt,(Rt+vt/V.locationSize*Ft)*tt,gt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)f(V.location+st,nt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);r.bindBuffer(r.ARRAY_BUFFER,se);for(let st=0;st<V.locationSize;st++)S(V.location+st,vt/V.locationSize,Y,ct,vt*tt,vt/V.locationSize*st*tt,gt)}}else if(H!==void 0){let ct=H[K];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(V.location,ct);break;case 3:r.vertexAttrib3fv(V.location,ct);break;case 4:r.vertexAttrib4fv(V.location,ct);break;default:r.vertexAttrib1fv(V.location,ct)}}}}y()}function C(){I();for(let M in n){let P=n[M];for(let z in P){let O=P[z];for(let W in O)h(O[W].object),delete O[W];delete P[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let z in P){let O=P[z];for(let W in O)h(O[W].object),delete O[W];delete P[z]}delete n[M.id]}function R(M){for(let P in n){let z=n[P];if(z[M.id]===void 0)continue;let O=z[M.id];for(let W in O)h(O[W].object),delete O[W];delete z[M.id]}}function I(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function $p(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==hn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!I)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function Jp(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ln,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let y=s?0:n,S=y*4,_=f.clippingState||null;l.value=_,_=h(g,d,S,p);for(let C=0;C!==S;++C)_[C]=e[C];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==x;++S,_+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Kp(r){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=as:a===ma&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pa||a===ma)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ja(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Gr=class extends Hr{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ns=4,Tc=[.125,.215,.35,.446,.526,.582],vi=20,Zo=new Gr,Ac=new wt,Jo=null,Ko=0,Qo=0,jo=!1,xi=(1+Math.sqrt(5))/2,Ki=1/xi,Rc=[new E(-xi,Ki,0),new E(xi,Ki,0),new E(-Ki,0,xi),new E(Ki,0,xi),new E(0,xi,-Ki),new E(0,xi,Ki),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Ko,Qo),this._renderer.xr.enabled=jo,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:qs,format:hn,colorSpace:gs,depthBuffer:!1},i=Cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(s)),this._blurMaterial=jp(s,t,e)}return i}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,i){let a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ac),h.toneMapping=Kn,h.autoClear=!1;let p=new ve({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new Ot(new Xt,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ac),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let S=this._cubeSize;_r(i,y*S,f>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===as||t.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;_r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rc[(i-s-1)%Rc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let f=[],y=0;for(let R=0;R<vi;++R){let I=R/x,w=Math.exp(-I*I/2);f.push(w),R===0?y+=w:R<m&&(y+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let _=this._sizeLods[i],C=3*_*(i>S-ns?i-S+ns:0),T=4*(this._cubeSize-_);_r(e,C,T,3*_,2*_),l.setRenderTarget(e),l.render(u,Zo)}};function Qp(r){let t=[],e=[],n=[],i=r,s=r-ns+1+Tc.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ns?l=Tc[o-r+ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*p),S=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,I=T>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(w,x*g*T),S.set(d,m*g*T);let M=[T,T,T,T,T,T];_.set(M,f*g*T)}let C=new ge;C.setAttribute("position",new fe(y,x)),C.setAttribute("uv",new fe(S,m)),C.setAttribute("faceIndex",new fe(_,f)),t.push(C),i>ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cc(r,t,e){let n=new On(r,t,e);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function jp(r,t,e){let n=new Float32Array(vi),i=new E(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Pc(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ic(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function tm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===pa||l===ma,h=l===as||l===ls;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wr(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Wr(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function em(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let S=0,_=y.length;S<_;S+=3){let C=y[S+0],T=y[S+1],R=y[S+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let C=S+0,T=S+1,R=S+2;d.push(C,T,T,R,R,C)}}else return;let m=new(Sh(d)?zr:kr)(d,1);m.version=x;let f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function im(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*x[y];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function rm(r,t,e){let n=new WeakMap,i=new ne;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*C*4*u),R=new Or(T,_,C,u);R.type=Dn,R.needsUpdate=!0;let I=S*4;for(let M=0;M<u;M++){let P=m[M],z=f[M],O=y[M],W=_*C*4*M;for(let X=0;X<P.count;X++){let H=X*I;p===!0&&(i.fromBufferAttribute(P,X),T[W+H+0]=i.x,T[W+H+1]=i.y,T[W+H+2]=i.z,T[W+H+3]=0),g===!0&&(i.fromBufferAttribute(z,X),T[W+H+4]=i.x,T[W+H+5]=i.y,T[W+H+6]=i.z,T[W+H+7]=0),x===!0&&(i.fromBufferAttribute(O,X),T[W+H+8]=i.x,T[W+H+9]=i.y,T[W+H+10]=i.z,T[W+H+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Et(_,C)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function om(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Xr=class extends $e{constructor(t,e,n,i,s,o,a,l,c,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=bi),n===void 0&&h===hs&&(n=cs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Th=new $e,Lc=new Xr(1,1),Ah=new Or,Rh=new $a,Ch=new Vr,Dc=[],Uc=[],Nc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function xs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Dc[i];if(s===void 0&&(s=new Float32Array(i),Dc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function oo(r,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function am(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function lm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2fv(this.addr,t),Me(e,t)}}function cm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;r.uniform3fv(this.addr,t),Me(e,t)}}function hm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4fv(this.addr,t),Me(e,t)}}function um(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Oc.set(n),r.uniformMatrix2fv(this.addr,!1,Oc),Me(e,n)}}function dm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Fc.set(n),r.uniformMatrix3fv(this.addr,!1,Fc),Me(e,n)}}function fm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Nc.set(n),r.uniformMatrix4fv(this.addr,!1,Nc),Me(e,n)}}function pm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function mm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2iv(this.addr,t),Me(e,t)}}function gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3iv(this.addr,t),Me(e,t)}}function xm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4iv(this.addr,t),Me(e,t)}}function _m(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function vm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2uiv(this.addr,t),Me(e,t)}}function ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3uiv(this.addr,t),Me(e,t)}}function Mm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4uiv(this.addr,t),Me(e,t)}}function Sm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Lc.compareFunction=Mh,s=Lc):s=Th,e.setTexture2D(t||s,i)}function bm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rh,i)}function Em(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ch,i)}function wm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ah,i)}function Tm(r){switch(r){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return _m;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}}function Am(r,t){r.uniform1fv(this.addr,t)}function Rm(r,t){let e=xs(t,this.size,2);r.uniform2fv(this.addr,e)}function Cm(r,t){let e=xs(t,this.size,3);r.uniform3fv(this.addr,e)}function Pm(r,t){let e=xs(t,this.size,4);r.uniform4fv(this.addr,e)}function Im(r,t){let e=xs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Lm(r,t){let e=xs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Dm(r,t){let e=xs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Um(r,t){r.uniform1iv(this.addr,t)}function Nm(r,t){r.uniform2iv(this.addr,t)}function Fm(r,t){r.uniform3iv(this.addr,t)}function Om(r,t){r.uniform4iv(this.addr,t)}function Bm(r,t){r.uniform1uiv(this.addr,t)}function km(r,t){r.uniform2uiv(this.addr,t)}function zm(r,t){r.uniform3uiv(this.addr,t)}function Hm(r,t){r.uniform4uiv(this.addr,t)}function Vm(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Th,s[o])}function Gm(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rh,s[o])}function Wm(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ch,s[o])}function Xm(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ah,s[o])}function qm(r){switch(r){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Im;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return km;case 36295:return zm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}var Ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tm(e.type)}},Qa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qm(e.type)}},ja=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ta=/(\w+)(\])?(\[|\.)?/g;function Bc(r,t){r.seq.push(t),r.map[t.id]=t}function Ym(r,t,e){let n=r.name,i=n.length;for(ta.lastIndex=0;;){let s=ta.exec(n),o=ta.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bc(e,c===void 0?new Ka(a,r,t):new Qa(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new ja(a),Bc(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ym(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function kc(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var $m=37297,Zm=0;function Jm(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zc=new Lt;function Km(r){Wt._getMatrix(zc,Wt.workingColorSpace,r);let t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(r)){case ro:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Hc(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Jm(r.getShaderSource(t),o)}else return i}function Qm(r,t){let e=Km(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jm(r,t){let e;switch(t){case Eu:e="Linear";break;case wu:e="Reinhard";break;case Tu:e="Cineon";break;case El:e="ACESFilmic";break;case Ru:e="AgX";break;case Cu:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vr=new E;function t0(){Wt.getLuminanceCoefficients(vr);let r=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function n0(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Os(r){return r!==""}function Vc(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(r){return r.replace(s0,o0)}var r0=new Map;function o0(r,t){let e=Ut[t];if(e===void 0){let n=r0.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}var a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(r){return r.replace(a0,l0)}function l0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xc(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function c0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function f0(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=c0(e),c=h0(e),h=u0(e),u=d0(e),d=f0(e),p=e0(e),g=n0(s),x=i.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),f.length>0&&(f+=`
`)):(m=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),f=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Kn?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),t0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=tl(o),o=Vc(o,e),o=Gc(o,e),a=tl(a),a=Vc(a,e),a=Gc(a,e),o=Wc(o),a=Wc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=y+m+o,_=y+f+a,C=kc(i,i.VERTEX_SHADER,S),T=kc(i,i.FRAGMENT_SHADER,_);i.attachShader(x,C),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(C).trim(),W=i.getShaderInfoLog(T).trim(),X=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,C,T);else{let K=Hc(i,C,"vertex"),V=Hc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+K+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(H=!1);H&&(P.diagnostics={runnable:X,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(C),i.deleteShader(T),I=new rs(i,x),w=i0(i,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,$m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var m0=0,el=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nl(t),e.set(t,n)),n}},nl=class{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}};function g0(r,t,e,n,i,s,o){let a=new Br,l=new el,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,z,O){let W=z.fog,X=O.geometry,H=w.isMeshStandardMaterial?z.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),V=K&&K.mapping===so?K.image.height:null,nt=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=ct!==void 0?ct.length:0,Nt=0;X.morphAttributes.position!==void 0&&(Nt=1),X.morphAttributes.normal!==void 0&&(Nt=2),X.morphAttributes.color!==void 0&&(Nt=3);let se,Y,tt,gt;if(nt){let jt=pn[nt];se=jt.vertexShader,Y=jt.fragmentShader}else se=w.vertexShader,Y=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),gt=l.getFragmentShaderID(w);let st=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Rt=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,de=!!w.map,Vt=!!w.matcap,xe=!!K,N=!!w.aoMap,Ke=!!w.lightMap,Bt=!!w.bumpMap,kt=!!w.normalMap,Mt=!!w.displacementMap,le=!!w.emissiveMap,yt=!!w.metalnessMap,A=!!w.roughnessMap,v=w.anisotropy>0,F=w.clearcoat>0,$=w.dispersion>0,J=w.iridescence>0,q=w.sheen>0,xt=w.transmission>0,rt=v&&!!w.anisotropyMap,ht=F&&!!w.clearcoatMap,Gt=F&&!!w.clearcoatNormalMap,Q=F&&!!w.clearcoatRoughnessMap,ut=J&&!!w.iridescenceMap,St=J&&!!w.iridescenceThicknessMap,Tt=q&&!!w.sheenColorMap,dt=q&&!!w.sheenRoughnessMap,zt=!!w.specularMap,Dt=!!w.specularColorMap,oe=!!w.specularIntensityMap,L=xt&&!!w.transmissionMap,it=xt&&!!w.thicknessMap,G=!!w.gradientMap,Z=!!w.alphaMap,lt=w.alphaTest>0,ot=!!w.alphaHash,Pt=!!w.extensions,me=Kn;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(me=r.toneMapping);let Ie={shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:se,fragmentShader:Y,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&O.instanceColor!==null,instancingMorph:Rt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:gs,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Vt,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Ke,bumpMap:Bt,normalMap:kt,displacementMap:d&&Mt,emissiveMap:le,normalMapObjectSpace:kt&&w.normalMapType===Du,normalMapTangentSpace:kt&&w.normalMapType===yh,metalnessMap:yt,roughnessMap:A,anisotropy:v,anisotropyMap:rt,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:ut,iridescenceThicknessMap:St,sheen:q,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:oe,transmission:xt,transmissionMap:L,thicknessMap:it,gradientMap:G,opaque:w.transparent===!1&&w.blending===Jn&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ot,combine:w.combine,mapUv:de&&x(w.map.channel),aoMapUv:N&&x(w.aoMap.channel),lightMapUv:Ke&&x(w.lightMap.channel),bumpMapUv:Bt&&x(w.bumpMap.channel),normalMapUv:kt&&x(w.normalMap.channel),displacementMapUv:Mt&&x(w.displacementMap.channel),emissiveMapUv:le&&x(w.emissiveMap.channel),metalnessMapUv:yt&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:rt&&x(w.anisotropyMap.channel),clearcoatMapUv:ht&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(w.sheenRoughnessMap.channel),specularMapUv:zt&&x(w.specularMap.channel),specularColorMapUv:Dt&&x(w.specularColorMap.channel),specularIntensityMapUv:oe&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:it&&x(w.thicknessMap.channel),alphaMapUv:Z&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(kt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(de||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===te,decodeVideoTextureEmissive:le&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===we,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),S(M,w),M.push(r.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let M=g[w.type],P;if(M){let z=pn[M];P=rd.clone(z.uniforms)}else P=w.uniforms;return P}function C(w,M){let P;for(let z=0,O=h.length;z<O;z++){let W=h[z];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new p0(r,M,w,s),h.push(P)),P}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:I}}function x0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function _0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function qc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Yc(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,x,m){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||_0),n.length>1&&n.sort(d||qc),i.length>1&&i.sort(d||qc)}function h(){for(let u=t,d=r.length;u<d;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function v0(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Yc,r.set(n,[o])):i>=s.length?(o=new Yc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function y0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new wt};break;case"SpotLight":e={position:new E,direction:new E,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new E,halfWidth:new E,halfHeight:new E};break}return r[t.id]=e,e}}}function M0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var S0=0;function b0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function E0(r){let t=new y0,e=M0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let i=new E,s=new re,o=new re;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,y=0,S=0,_=0,C=0,T=0,R=0;c.sort(b0);for(let w=0,M=c.length;w<M;w++){let P=c[w],z=P.color,O=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],O);R++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=H,p++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;let K=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=K.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=X,_++}x++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let K=P.shadow,V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=R,n.version=S0++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let S=c[f];if(S.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(S.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function $c(r){let t=new E0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function w0(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new $c(r),t.set(i,[a])):s>=o.length?(a=new $c(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var il=class extends _n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends _n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
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
}`;function R0(r,t,e){let n=new Hs,i=new Et,s=new Et,o=new ne,a=new il({depthPacking:Lu}),l=new sl,c={},h=e.maxTextureSize,u={[jn]:we,[we]:jn,[cn]:cn},d=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:T0,fragmentShader:A0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let f=this.type;this.render=function(T,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Zn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=f!==In&&this.type===In,W=f===In&&this.type!==In;for(let X=0,H=T.length;X<H;X++){let K=T[X],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let nt=V.getFrameExtents();if(i.multiply(nt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,V.mapSize.y=s.y)),V.map===null||O===!0||W===!0){let vt=this.type!==In?{minFilter:un,magFilter:un}:{};V.map!==null&&V.map.dispose(),V.map=new On(i.x,i.y,vt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let ct=V.getViewportCount();for(let vt=0;vt<ct;vt++){let Nt=V.getViewport(vt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),z.viewport(o),V.updateMatrices(K,vt),n=V.getFrustum(),_(R,I,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===In&&y(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(w,M,P)};function y(T,R){let I=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new On(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,I,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,I,p,x,null)}function S(T,R,I,w){let M=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let z=M.uuid,O=R.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let X=W[O];X===void 0&&(X=M.clone(),W[O]=X,R.addEventListener("dispose",C)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,w===In?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=r.properties.get(M);z.light=I}return M}function _(T,R,I,w,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let O=t.update(T),W=T.material;if(Array.isArray(W)){let X=O.groups;for(let H=0,K=X.length;H<K;H++){let V=X[H],nt=W[V.materialIndex];if(nt&&nt.visible){let ct=S(T,nt,w,M);T.onBeforeShadow(r,T,R,I,O,ct,V),r.renderBufferDirect(I,null,O,ct,T,V),T.onAfterShadow(r,T,R,I,O,ct,V)}}}else if(W.visible){let X=S(T,W,w,M);T.onBeforeShadow(r,T,R,I,O,X,null),r.renderBufferDirect(I,null,O,X,T,null),T.onAfterShadow(r,T,R,I,O,X,null)}}let z=T.children;for(let O=0,W=z.length;O<W;O++)_(z[O],R,I,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(let I in c){let w=c[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var C0={[aa]:la,[ca]:da,[ha]:fa,[os]:ua,[la]:aa,[da]:ca,[fa]:ha,[ua]:os};function P0(r,t){function e(){let L=!1,it=new ne,G=null,Z=new ne(0,0,0,0);return{setMask:function(lt){G!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ot,Pt,me,Ie){Ie===!0&&(lt*=me,ot*=me,Pt*=me),it.set(lt,ot,Pt,me),Z.equals(it)===!1&&(r.clearColor(lt,ot,Pt,me),Z.copy(it))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,G=null,Z=null,lt=null;return{setReversed:function(ot){if(it!==ot){let Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let me=lt;lt=null,this.setClear(me)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ot){G!==ot&&!L&&(r.depthMask(ot),G=ot)},setFunc:function(ot){if(it&&(ot=C0[ot]),Z!==ot){switch(ot){case aa:r.depthFunc(r.NEVER);break;case la:r.depthFunc(r.ALWAYS);break;case ca:r.depthFunc(r.LESS);break;case os:r.depthFunc(r.LEQUAL);break;case ha:r.depthFunc(r.EQUAL);break;case ua:r.depthFunc(r.GEQUAL);break;case da:r.depthFunc(r.GREATER);break;case fa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ot}},setLocked:function(ot){L=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),r.clearDepth(ot),lt=ot)},reset:function(){L=!1,G=null,Z=null,lt=null,it=!1}}}function i(){let L=!1,it=null,G=null,Z=null,lt=null,ot=null,Pt=null,me=null,Ie=null;return{setTest:function(jt){L||(jt?st(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(jt){it!==jt&&!L&&(r.stencilMask(jt),it=jt)},setFunc:function(jt,sn,En){(G!==jt||Z!==sn||lt!==En)&&(r.stencilFunc(jt,sn,En),G=jt,Z=sn,lt=En)},setOp:function(jt,sn,En){(ot!==jt||Pt!==sn||me!==En)&&(r.stencilOp(jt,sn,En),ot=jt,Pt=sn,me=En)},setLocked:function(jt){L=jt},setClear:function(jt){Ie!==jt&&(r.clearStencil(jt),Ie=jt)},reset:function(){L=!1,it=null,G=null,Z=null,lt=null,ot=null,Pt=null,me=null,Ie=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,S=null,_=null,C=null,T=null,R=new wt(0,0,0),I=0,w=!1,M=null,P=null,z=null,O=null,W=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=K>=2);let nt=null,ct={},vt=r.getParameter(r.SCISSOR_BOX),Nt=r.getParameter(r.VIEWPORT),se=new ne().fromArray(vt),Y=new ne().fromArray(Nt);function tt(L,it,G,Z){let lt=new Uint8Array(4),ot=r.createTexture();r.bindTexture(L,ot),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pt=0;Pt<G;Pt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(it+Pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ot}let gt={};gt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(os),Bt(!1),kt(Ql),st(r.CULL_FACE),N(Zn);function st(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function bt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Rt(L,it){return u[L]!==it?(r.bindFramebuffer(L,it),u[L]=it,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=it),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(L,it){let G=p,Z=!1;if(L){G=d.get(it),G===void 0&&(G=[],d.set(it,G));let lt=L.textures;if(G.length!==lt.length||G[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,Pt=lt.length;ot<Pt;ot++)G[ot]=r.COLOR_ATTACHMENT0+ot;G.length=lt.length,Z=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,Z=!0);Z&&r.drawBuffers(G)}function de(L){return g!==L?(r.useProgram(L),g=L,!0):!1}let Vt={[_i]:r.FUNC_ADD,[ru]:r.FUNC_SUBTRACT,[ou]:r.FUNC_REVERSE_SUBTRACT};Vt[au]=r.MIN,Vt[lu]=r.MAX;let xe={[cu]:r.ZERO,[hu]:r.ONE,[uu]:r.SRC_COLOR,[ra]:r.SRC_ALPHA,[xu]:r.SRC_ALPHA_SATURATE,[mu]:r.DST_COLOR,[fu]:r.DST_ALPHA,[du]:r.ONE_MINUS_SRC_COLOR,[oa]:r.ONE_MINUS_SRC_ALPHA,[gu]:r.ONE_MINUS_DST_COLOR,[pu]:r.ONE_MINUS_DST_ALPHA,[_u]:r.CONSTANT_COLOR,[vu]:r.ONE_MINUS_CONSTANT_COLOR,[yu]:r.CONSTANT_ALPHA,[Mu]:r.ONE_MINUS_CONSTANT_ALPHA};function N(L,it,G,Z,lt,ot,Pt,me,Ie,jt){if(L===Zn){x===!0&&(bt(r.BLEND),x=!1);return}if(x===!1&&(st(r.BLEND),x=!0),L!==su){if(L!==m||jt!==w){if((f!==_i||_!==_i)&&(r.blendEquation(r.FUNC_ADD),f=_i,_=_i),jt)switch(L){case Jn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xn:r.blendFunc(r.ONE,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,C=null,T=null,R.set(0,0,0),I=0,m=L,w=jt}return}lt=lt||it,ot=ot||G,Pt=Pt||Z,(it!==f||lt!==_)&&(r.blendEquationSeparate(Vt[it],Vt[lt]),f=it,_=lt),(G!==y||Z!==S||ot!==C||Pt!==T)&&(r.blendFuncSeparate(xe[G],xe[Z],xe[ot],xe[Pt]),y=G,S=Z,C=ot,T=Pt),(me.equals(R)===!1||Ie!==I)&&(r.blendColor(me.r,me.g,me.b,Ie),R.copy(me),I=Ie),m=L,w=!1}function Ke(L,it){L.side===cn?bt(r.CULL_FACE):st(r.CULL_FACE);let G=L.side===we;it&&(G=!G),Bt(G),L.blending===Jn&&L.transparent===!1?N(Zn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function kt(L){L!==eu?(st(r.CULL_FACE),L!==P&&(L===Ql?r.cullFace(r.BACK):L===nu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),P=L}function Mt(L){L!==z&&(H&&r.lineWidth(L),z=L)}function le(L,it,G){L?(st(r.POLYGON_OFFSET_FILL),(O!==it||W!==G)&&(r.polygonOffset(it,G),O=it,W=G)):bt(r.POLYGON_OFFSET_FILL)}function yt(L){L?st(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+X-1),nt!==L&&(r.activeTexture(L),nt=L)}function v(L,it,G){G===void 0&&(nt===null?G=r.TEXTURE0+X-1:G=nt);let Z=ct[G];Z===void 0&&(Z={type:void 0,texture:void 0},ct[G]=Z),(Z.type!==L||Z.texture!==it)&&(nt!==G&&(r.activeTexture(G),nt=G),r.bindTexture(L,it||gt[L]),Z.type=L,Z.texture=it)}function F(){let L=ct[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(L){se.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function dt(L){Y.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function zt(L,it){let G=c.get(it);G===void 0&&(G=new WeakMap,c.set(it,G));let Z=G.get(L);Z===void 0&&(Z=r.getUniformBlockIndex(it,L.name),G.set(L,Z))}function Dt(L,it){let Z=c.get(it).get(L);l.get(it)!==Z&&(r.uniformBlockBinding(it,Z,L.__bindingPointIndex),l.set(it,Z))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,ct={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,S=null,_=null,C=null,T=null,R=new wt(0,0,0),I=0,w=!1,M=null,P=null,z=null,O=null,W=null,se.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:de,setBlending:N,setMaterial:Ke,setFlipSided:Bt,setCullFace:kt,setLineWidth:Mt,setPolygonOffset:le,setScissorTest:yt,activeTexture:A,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:ut,texImage3D:St,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Tt,viewport:dt,reset:oe}}function Zc(r,t,e,n){let i=I0(n);switch(e){case fh:return r*t;case mh:return r*t;case gh:return r*t*2;case xh:return r*t/i.components*i.byteLength;case Rl:return r*t/i.components*i.byteLength;case _h:return r*t*2/i.components*i.byteLength;case Cl:return r*t*2/i.components*i.byteLength;case ph:return r*t*3/i.components*i.byteLength;case hn:return r*t*4/i.components*i.byteLength;case Pl:return r*t*4/i.components*i.byteLength;case Rr:case Cr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _a:case ya:return Math.max(r,16)*Math.max(t,8)/4;case xa:case va:return Math.max(r,8)*Math.max(t,8)/2;case Ma:case Sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Lr:case Ba:case ka:return Math.ceil(r/4)*Math.ceil(t/4)*16;case vh:case za:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ha:case Va:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I0(r){switch(r){case Fn:case hh:return{byteLength:1,components:1};case ks:case uh:case qs:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case bi:case wl:case Dn:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function L0(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):Nr("canvas")}function x(A,v,F){let $=1,J=yt(A);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor($*J.width),xt=Math.floor($*J.height);u===void 0&&(u=g(q,xt));let rt=v?g(q,xt):u;return rt.width=q,rt.height=xt,rt.getContext("2d").drawImage(A,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+xt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,v,F,$,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=v;if(v===r.RED&&(F===r.FLOAT&&(q=r.R32F),F===r.HALF_FLOAT&&(q=r.R16F),F===r.UNSIGNED_BYTE&&(q=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.R8UI),F===r.UNSIGNED_SHORT&&(q=r.R16UI),F===r.UNSIGNED_INT&&(q=r.R32UI),F===r.BYTE&&(q=r.R8I),F===r.SHORT&&(q=r.R16I),F===r.INT&&(q=r.R32I)),v===r.RG&&(F===r.FLOAT&&(q=r.RG32F),F===r.HALF_FLOAT&&(q=r.RG16F),F===r.UNSIGNED_BYTE&&(q=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.RG8UI),F===r.UNSIGNED_SHORT&&(q=r.RG16UI),F===r.UNSIGNED_INT&&(q=r.RG32UI),F===r.BYTE&&(q=r.RG8I),F===r.SHORT&&(q=r.RG16I),F===r.INT&&(q=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.RGB8UI),F===r.UNSIGNED_SHORT&&(q=r.RGB16UI),F===r.UNSIGNED_INT&&(q=r.RGB32UI),F===r.BYTE&&(q=r.RGB8I),F===r.SHORT&&(q=r.RGB16I),F===r.INT&&(q=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),F===r.UNSIGNED_INT&&(q=r.RGBA32UI),F===r.BYTE&&(q=r.RGBA8I),F===r.SHORT&&(q=r.RGBA16I),F===r.INT&&(q=r.RGBA32I)),v===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),v===r.RGBA){let xt=J?ro:Wt.getTransfer($);F===r.FLOAT&&(q=r.RGBA32F),F===r.HALF_FLOAT&&(q=r.RGBA16F),F===r.UNSIGNED_BYTE&&(q=xt===te?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(A,v){let F;return A?v===null||v===bi||v===cs?F=r.DEPTH24_STENCIL8:v===Dn?F=r.DEPTH32F_STENCIL8:v===ks&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bi||v===cs?F=r.DEPTH_COMPONENT24:v===Dn?F=r.DEPTH_COMPONENT32F:v===ks&&(F=r.DEPTH_COMPONENT16),F}function C(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){let v=A.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&h.delete(v)}function R(A){let v=A.target;v.removeEventListener("dispose",R),M(v)}function I(A){let v=n.get(A);if(v.__webglInit===void 0)return;let F=A.source,$=d.get(F);if($){let J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(A),Object.keys($).length===0&&d.delete(F)}n.remove(A)}function w(A){let v=n.get(A);r.deleteTexture(v.__webglTexture);let F=A.source,$=d.get(F);delete $[v.__cacheKey],o.memory.textures--}function M(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[$][J]);else r.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)r.deleteFramebuffer(v.__webglFramebuffer[$]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=A.textures;for(let $=0,J=F.length;$<J;$++){let q=n.get(F[$]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(A)}let P=0;function z(){P=0}function O(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function W(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function X(A,v){let F=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,v);return}}e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function H(A,v){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function K(A,v){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,v);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function V(A,v){let F=n.get(A);if(A.version>0&&F.__version!==A.version){tt(F,A,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}let nt={[Si]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[ga]:r.MIRRORED_REPEAT},ct={[un]:r.NEAREST,[Pu]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[wo]:r.LINEAR_MIPMAP_NEAREST,[Mi]:r.LINEAR_MIPMAP_LINEAR},vt={[Uu]:r.NEVER,[zu]:r.ALWAYS,[Nu]:r.LESS,[Mh]:r.LEQUAL,[Fu]:r.EQUAL,[ku]:r.GEQUAL,[Ou]:r.GREATER,[Bu]:r.NOTEQUAL};function Nt(A,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===wo||v.magFilter===js||v.magFilter===Mi||v.minFilter===gn||v.minFilter===wo||v.minFilter===js||v.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,nt[v.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,nt[v.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,nt[v.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ct[v.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,vt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==js&&v.minFilter!==Mi||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function se(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));let $=v.source,J=d.get($);J===void 0&&(J={},d.set($,J));let q=W(v);if(q!==A.__cacheKey){J[q]===void 0&&(J[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[q].usedTimes++;let xt=J[A.__cacheKey];xt!==void 0&&(J[A.__cacheKey].usedTimes--,xt.usedTimes===0&&w(v)),A.__cacheKey=q,A.__webglTexture=J[q].texture}return F}function Y(A,v,F){let $=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=r.TEXTURE_3D);let J=se(A,v),q=v.source;e.bindTexture($,A.__webglTexture,r.TEXTURE0+F);let xt=n.get(q);if(q.version!==xt.__version||J===!0){e.activeTexture(r.TEXTURE0+F);let rt=Wt.getPrimaries(Wt.workingColorSpace),ht=v.colorSpace===Yn?null:Wt.getPrimaries(v.colorSpace),Gt=v.colorSpace===Yn||rt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=x(v.image,!1,i.maxTextureSize);Q=le(v,Q);let ut=s.convert(v.format,v.colorSpace),St=s.convert(v.type),Tt=S(v.internalFormat,ut,St,v.colorSpace,v.isVideoTexture);Nt($,v);let dt,zt=v.mipmaps,Dt=v.isVideoTexture!==!0,oe=xt.__version===void 0||J===!0,L=q.dataReady,it=C(v,Q);if(v.isDepthTexture)Tt=_(v.format===hs,v.type),oe&&(Dt?e.texStorage2D(r.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Tt,Q.width,Q.height,0,ut,St,null));else if(v.isDataTexture)if(zt.length>0){Dt&&oe&&e.texStorage2D(r.TEXTURE_2D,it,Tt,zt[0].width,zt[0].height);for(let G=0,Z=zt.length;G<Z;G++)dt=zt[G],Dt?L&&e.texSubImage2D(r.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,St,dt.data):e.texImage2D(r.TEXTURE_2D,G,Tt,dt.width,dt.height,0,ut,St,dt.data);v.generateMipmaps=!1}else Dt?(oe&&e.texStorage2D(r.TEXTURE_2D,it,Tt,Q.width,Q.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ut,St,Q.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,Q.width,Q.height,0,ut,St,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,Tt,zt[0].width,zt[0].height,Q.depth);for(let G=0,Z=zt.length;G<Z;G++)if(dt=zt[G],v.format!==hn)if(ut!==null)if(Dt){if(L)if(v.layerUpdates.size>0){let lt=Zc(dt.width,dt.height,v.format,v.type);for(let ot of v.layerUpdates){let Pt=dt.data.subarray(ot*lt/dt.data.BYTES_PER_ELEMENT,(ot+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,ot,dt.width,dt.height,1,ut,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,Q.depth,ut,dt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Tt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,Q.depth,ut,St,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,G,Tt,dt.width,dt.height,Q.depth,0,ut,St,dt.data)}else{Dt&&oe&&e.texStorage2D(r.TEXTURE_2D,it,Tt,zt[0].width,zt[0].height);for(let G=0,Z=zt.length;G<Z;G++)dt=zt[G],v.format!==hn?ut!==null?Dt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,G,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(r.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,St,dt.data):e.texImage2D(r.TEXTURE_2D,G,Tt,dt.width,dt.height,0,ut,St,dt.data)}else if(v.isDataArrayTexture)if(Dt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,Tt,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){let G=Zc(Q.width,Q.height,v.format,v.type);for(let Z of v.layerUpdates){let lt=Q.data.subarray(Z*G/Q.data.BYTES_PER_ELEMENT,(Z+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ut,St,lt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,St,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,ut,St,Q.data);else if(v.isData3DTexture)Dt?(oe&&e.texStorage3D(r.TEXTURE_3D,it,Tt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,St,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,ut,St,Q.data);else if(v.isFramebufferTexture){if(oe)if(Dt)e.texStorage2D(r.TEXTURE_2D,it,Tt,Q.width,Q.height);else{let G=Q.width,Z=Q.height;for(let lt=0;lt<it;lt++)e.texImage2D(r.TEXTURE_2D,lt,Tt,G,Z,0,ut,St,null),G>>=1,Z>>=1}}else if(zt.length>0){if(Dt&&oe){let G=yt(zt[0]);e.texStorage2D(r.TEXTURE_2D,it,Tt,G.width,G.height)}for(let G=0,Z=zt.length;G<Z;G++)dt=zt[G],Dt?L&&e.texSubImage2D(r.TEXTURE_2D,G,0,0,ut,St,dt):e.texImage2D(r.TEXTURE_2D,G,Tt,ut,St,dt);v.generateMipmaps=!1}else if(Dt){if(oe){let G=yt(Q);e.texStorage2D(r.TEXTURE_2D,it,Tt,G.width,G.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,St,Q)}else e.texImage2D(r.TEXTURE_2D,0,Tt,ut,St,Q);m(v)&&f($),xt.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function tt(A,v,F){if(v.image.length!==6)return;let $=se(A,v),J=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+F);let q=n.get(J);if(J.version!==q.__version||$===!0){e.activeTexture(r.TEXTURE0+F);let xt=Wt.getPrimaries(Wt.workingColorSpace),rt=v.colorSpace===Yn?null:Wt.getPrimaries(v.colorSpace),ht=v.colorSpace===Yn||xt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Gt&&!Q?ut[Z]=x(v.image[Z],!0,i.maxCubemapSize):ut[Z]=Q?v.image[Z].image:v.image[Z],ut[Z]=le(v,ut[Z]);let St=ut[0],Tt=s.convert(v.format,v.colorSpace),dt=s.convert(v.type),zt=S(v.internalFormat,Tt,dt,v.colorSpace),Dt=v.isVideoTexture!==!0,oe=q.__version===void 0||$===!0,L=J.dataReady,it=C(v,St);Nt(r.TEXTURE_CUBE_MAP,v);let G;if(Gt){Dt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,zt,St.width,St.height);for(let Z=0;Z<6;Z++){G=ut[Z].mipmaps;for(let lt=0;lt<G.length;lt++){let ot=G[lt];v.format!==hn?Tt!==null?Dt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,zt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,Tt,dt,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,zt,ot.width,ot.height,0,Tt,dt,ot.data)}}}else{if(G=v.mipmaps,Dt&&oe){G.length>0&&it++;let Z=yt(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Dt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,Tt,dt,ut[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,ut[Z].width,ut[Z].height,0,Tt,dt,ut[Z].data);for(let lt=0;lt<G.length;lt++){let Pt=G[lt].image[Z].image;Dt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Pt.width,Pt.height,Tt,dt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,zt,Pt.width,Pt.height,0,Tt,dt,Pt.data)}}else{Dt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,dt,ut[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,Tt,dt,ut[Z]);for(let lt=0;lt<G.length;lt++){let ot=G[lt];Dt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Tt,dt,ot.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,zt,Tt,dt,ot.image[Z])}}}m(v)&&f(r.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function gt(A,v,F,$,J,q){let xt=s.convert(F.format,F.colorSpace),rt=s.convert(F.type),ht=S(F.internalFormat,xt,rt,F.colorSpace),Gt=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!Gt.__hasExternalTextures){let ut=Math.max(1,v.width>>q),St=Math.max(1,v.height>>q);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ht,ut,St,v.depth,0,xt,rt,null):e.texImage2D(J,q,ht,ut,St,0,xt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),kt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,J,Q.__webglTexture,0,Bt(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,J,Q.__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(A,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,A),v.depthBuffer){let $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=_(v.stencilBuffer,J),xt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=Bt(v);kt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,q,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,q,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,A)}else{let $=v.textures;for(let J=0;J<$.length;J++){let q=$[J],xt=s.convert(q.format,q.colorSpace),rt=s.convert(q.type),ht=S(q.internalFormat,xt,rt,q.colorSpace),Gt=Bt(v);F&&kt(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,ht,v.width,v.height):kt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,ht,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ht,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let J=$.__webglTexture,q=Bt(v);if(v.depthTexture.format===is)kt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(v.depthTexture.format===hs)kt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(A){let v=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,A)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=r.createRenderbuffer(),st(v.__webglDepthbuffer[$],A,!1);else{let J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),st(v.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(A,v,F){let $=n.get(A);v!==void 0&&gt($.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Rt(A)}function de(A){let v=A.texture,F=n.get(A),$=n.get(v);A.addEventListener("dispose",R);let J=A.textures,q=A.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=v.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)F.__webglFramebuffer[rt][ht]=r.createFramebuffer()}else F.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)F.__webglFramebuffer[rt]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(xt)for(let rt=0,ht=J.length;rt<ht;rt++){let Gt=n.get(J[rt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&kt(A)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){let ht=J[rt];F.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);let Gt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),ut=S(ht.internalFormat,Gt,Q,ht.colorSpace,A.isXRRenderTarget===!0),St=Bt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ut,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),st(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)gt(F.__webglFramebuffer[rt][ht],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else gt(F.__webglFramebuffer[rt],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,ht=J.length;rt<ht;rt++){let Gt=J[rt],Q=n.get(Gt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Nt(r.TEXTURE_2D,Gt),gt(F.__webglFramebuffer,A,Gt,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),m(Gt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),Nt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)gt(F.__webglFramebuffer[ht],A,v,r.COLOR_ATTACHMENT0,rt,ht);else gt(F.__webglFramebuffer,A,v,r.COLOR_ATTACHMENT0,rt,0);m(v)&&f(rt),e.unbindTexture()}A.depthBuffer&&Rt(A)}function Vt(A){let v=A.textures;for(let F=0,$=v.length;F<$;F++){let J=v[F];if(m(J)){let q=y(A),xt=n.get(J).__webglTexture;e.bindTexture(q,xt),f(q),e.unbindTexture()}}}let xe=[],N=[];function Ke(A){if(A.samples>0){if(kt(A)===!1){let v=A.textures,F=A.width,$=A.height,J=r.COLOR_BUFFER_BIT,q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(A),rt=v.length>1;if(rt)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);let Gt=n.get(v[ht]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,F,$,0,0,F,$,J,r.NEAREST),l===!0&&(xe.length=0,N.length=0,xe.push(r.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push(q),N.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);let Gt=n.get(v[ht]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Bt(A){return Math.min(i.maxSamples,A.samples)}function kt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function le(A,v){let F=A.colorSpace,$=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==gs&&F!==Yn&&(Wt.getTransfer(F)===te?($!==hn||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=kt}function D0(r,t){function e(n,i=Yn){let s,o=Wt.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===Tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return r.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return r.BYTE;if(n===uh)return r.SHORT;if(n===ks)return r.UNSIGNED_SHORT;if(n===wl)return r.INT;if(n===bi)return r.UNSIGNED_INT;if(n===Dn)return r.FLOAT;if(n===qs)return r.HALF_FLOAT;if(n===fh)return r.ALPHA;if(n===ph)return r.RGB;if(n===hn)return r.RGBA;if(n===mh)return r.LUMINANCE;if(n===gh)return r.LUMINANCE_ALPHA;if(n===is)return r.DEPTH_COMPONENT;if(n===hs)return r.DEPTH_STENCIL;if(n===xh)return r.RED;if(n===Rl)return r.RED_INTEGER;if(n===_h)return r.RG;if(n===Cl)return r.RG_INTEGER;if(n===Pl)return r.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Ir)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===_a||n===va||n===ya)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===Sa||n===ba)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ma||n===Sa)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ba)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ea)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Ba||n===ka)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Lr)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===za||n===Ha||n===Va)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Lr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var rl=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ne=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},U0={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new $e,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends ti{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=new ol,m=e.getContextAttributes(),f=null,y=null,S=[],_=[],C=new Et,T=null,R=new Ue;R.viewport=new ne;let I=new Ue;I.viewport=new ne;let w=[R,I],M=new rl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Bs,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Bs,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Bs,S[Y]=tt),tt.getHandSpace()};function O(Y){let tt=_.indexOf(Y.inputSource);if(tt===-1)return;let gt=S[tt];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<S.length;Y++){let tt=_[Y];tt!==null&&(_[Y]=null,S[Y].disconnect(tt))}P=null,z=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new On(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?hs:is,gt=m.stencil?cs:bi);let bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new On(d.textureWidth,d.textureHeight,{format:hn,type:Fn,depthTexture:new Xr(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let tt=0;tt<Y.removed.length;tt++){let gt=Y.removed[tt],st=_.indexOf(gt);st>=0&&(_[st]=null,S[st].disconnect(gt))}for(let tt=0;tt<Y.added.length;tt++){let gt=Y.added[tt],st=_.indexOf(gt);if(st===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=_.length){_.push(gt),st=Rt;break}else if(_[Rt]===null){_[Rt]=gt,st=Rt;break}if(st===-1)break}let bt=S[st];bt&&bt.connect(gt)}}let H=new E,K=new E;function V(Y,tt,gt){H.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);let st=H.distanceTo(K),bt=tt.projectionMatrix.elements,Rt=gt.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),de=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],xe=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],Ke=(Rt[8]+1)/Rt[0],Bt=Ft*N,kt=Ft*Ke,Mt=st/(-N+Ke),le=Mt*-N;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(le),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let yt=Ft+Mt,A=de+Mt,v=Bt-le,F=kt+(st-le),$=Vt*de/A*yt,J=xe*de/A*yt;Y.projectionMatrix.makePerspective(v,F,$,J,yt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,gt=Y.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),M.near=I.near=R.near=tt,M.far=I.far=R.far=gt,(P!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,z=M.far),R.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;let st=Y.parent,bt=M.cameras;nt(M,st);for(let Rt=0;Rt<bt.length;Rt++)nt(bt[Rt],st);bt.length===2?V(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),ct(Y,M,st)};function ct(Y,tt,gt){gt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let vt=null;function Nt(Y,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let st=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Rt=0;Rt<gt.length;Rt++){let Ft=gt[Rt],de=null;if(p!==null)de=p.getViewport(Ft);else{let xe=u.getViewSubImage(d,Ft);de=xe.viewport,Rt===0&&(t.setRenderTargetTextures(y,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(y))}let Vt=w[Rt];Vt===void 0&&(Vt=new Ue,Vt.layers.enable(Rt),Vt.viewport=new ne,w[Rt]=Vt),Vt.matrix.fromArray(Ft.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ft.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(de.x,de.y,de.width,de.height),Rt===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Vt)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Rt=u.getDepthInformation(gt[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,i.renderState)}}for(let gt=0;gt<S.length;gt++){let st=_[gt],bt=S[gt];st!==null&&bt!==void 0&&bt.update(st,tt,c||o)}vt&&vt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let se=new wh;se.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}},gi=new Ve,O0=new re;function B0(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Eh(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===we&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===we&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(gi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===we&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let _=S.program;n.uniformBlockBinding(y,_)}function c(y,S){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let C=S.program;n.updateUBOMapping(y,C);let T=t.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){let S=u();y.__bindingPointIndex=S;let _=r.createBuffer(),C=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=i[y.id],_=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,R=_.length;T<R;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,M=I.length;w<M;w++){let P=I[w];if(p(P,T,w,C)===!0){let z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],W=0;for(let X=0;X<O.length;X++){let H=O[X],K=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,z+W,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,S,_,C){let T=y.value,R=S+"_"+_;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let I=C[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let S=y.uniforms,_=0,C=16;for(let R=0,I=S.length;R<I;R++){let w=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,P=w.length;M<P;M++){let z=w[M],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,X=O.length;W<X;W++){let H=O[W],K=x(H),V=_%C,nt=V%K.boundary,ct=V+nt;_+=nt,ct!==0&&C-ct<K.storage&&(_+=C-ct),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=K.storage}}}let T=_%C;return T>0&&(_+=C-T),y.__size=_,y.__cache={},this}function x(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function f(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}var qr=class{constructor(t={}){let{canvas:e=Vu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Kn,this.toneMappingExposure=1;let _=this,C=!1,T=0,R=0,I=null,w=-1,M=null,P=new ne,z=new ne,O=null,W=new wt(0),X=0,H=e.width,K=e.height,V=1,nt=null,ct=null,vt=new ne(0,0,H,K),Nt=new ne(0,0,H,K),se=!1,Y=new Hs,tt=!1,gt=!1,st=new re,bt=new re,Rt=new E,Ft=new ne,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function xe(){return I===null?V:1}let N=n;function Ke(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){let D="webgl2";if(N=Ke(D,b),N===null)throw Ke(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,kt,Mt,le,yt,A,v,F,$,J,q,xt,rt,ht,Gt,Q,ut,St,Tt,dt,zt,Dt,oe,L;function it(){Bt=new em(N),Bt.init(),Dt=new D0(N,Bt),kt=new Zp(N,Bt,t,Dt),Mt=new P0(N,Bt),kt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),le=new sm(N),yt=new x0,A=new L0(N,Bt,Mt,yt,kt,Dt,le),v=new Kp(_),F=new tm(_),$=new hd(N),oe=new Yp(N,$),J=new nm(N,$,le,oe),q=new om(N,J,$,le),Tt=new rm(N,kt,A),Q=new Jp(yt),xt=new g0(_,v,F,Bt,kt,oe,Q),rt=new B0(_,yt),ht=new v0,Gt=new w0(Bt),St=new qp(_,v,F,Mt,q,p,l),ut=new R0(_,q,kt),L=new k0(N,le,kt,Mt),dt=new $p(N,Bt,le),zt=new im(N,Bt,le),le.programs=xt.programs,_.capabilities=kt,_.extensions=Bt,_.properties=yt,_.renderLists=ht,_.shadowMap=ut,_.state=Mt,_.info=le}it();let G=new al(_,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(H,K,!1))},this.getSize=function(b){return b.set(H,K)},this.setSize=function(b,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,K=D,e.width=Math.floor(b*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(H*V,K*V).floor()},this.setDrawingBufferSize=function(b,D,B){H=b,K=D,V=B,e.width=Math.floor(b*B),e.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,D,B,k){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,D,B,k),Mt.viewport(P.copy(vt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Nt)},this.setScissor=function(b,D,B,k){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,D,B,k),Mt.scissor(z.copy(Nt).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){Mt.setScissorTest(se=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){ct=b},this.getClearColor=function(b){return b.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(b=!0,D=!0,B=!0){let k=0;if(b){let U=!1;if(I!==null){let j=I.texture.format;U=j===Pl||j===Cl||j===Rl}if(U){let j=I.texture.type,at=j===Fn||j===bi||j===ks||j===cs||j===Tl||j===Al,ft=St.getClearColor(),pt=St.getClearAlpha(),At=ft.r,It=ft.g,mt=ft.b;at?(g[0]=At,g[1]=It,g[2]=mt,g[3]=pt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=At,x[1]=It,x[2]=mt,x[3]=pt,N.clearBufferiv(N.COLOR,0,x))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Gt.dispose(),yt.dispose(),v.dispose(),F.dispose(),q.dispose(),oe.dispose(),L.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Wl),G.removeEventListener("sessionend",Xl),hi.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=le.autoReset,D=ut.enabled,B=ut.autoUpdate,k=ut.needsUpdate,U=ut.type;it(),le.autoReset=b,ut.enabled=D,ut.autoUpdate=B,ut.needsUpdate=k,ut.type=U}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pt(b){let D=b.target;D.removeEventListener("dispose",Pt),me(D)}function me(b){Ie(b),yt.remove(b)}function Ie(b){let D=yt.get(b).programs;D!==void 0&&(D.forEach(function(B){xt.releaseProgram(B)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,k,U,j){D===null&&(D=de);let at=U.isMesh&&U.matrixWorld.determinant()<0,ft=Qh(b,D,B,k,U);Mt.setMaterial(k,at);let pt=B.index,At=1;if(k.wireframe===!0){if(pt=J.getWireframeAttribute(B),pt===void 0)return;At=2}let It=B.drawRange,mt=B.attributes.position,qt=It.start*At,ae=(It.start+It.count)*At;j!==null&&(qt=Math.max(qt,j.start*At),ae=Math.min(ae,(j.start+j.count)*At)),pt!==null?(qt=Math.max(qt,0),ae=Math.min(ae,pt.count)):mt!=null&&(qt=Math.max(qt,0),ae=Math.min(ae,mt.count));let ce=ae-qt;if(ce<0||ce===1/0)return;oe.setup(U,k,ft,B,pt);let ze,$t=dt;if(pt!==null&&(ze=$.get(pt),$t=zt,$t.setIndex(ze)),U.isMesh)k.wireframe===!0?(Mt.setLineWidth(k.wireframeLinewidth*xe()),$t.setMode(N.LINES)):$t.setMode(N.TRIANGLES);else if(U.isLine){let _t=k.linewidth;_t===void 0&&(_t=1),Mt.setLineWidth(_t*xe()),U.isLineSegments?$t.setMode(N.LINES):U.isLineLoop?$t.setMode(N.LINE_LOOP):$t.setMode(N.LINE_STRIP)}else U.isPoints?$t.setMode(N.POINTS):U.isSprite&&$t.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let _t=U._multiDrawStarts,wn=U._multiDrawCounts,Zt=U._multiDrawCount,rn=pt?$.get(pt).bytesPerElement:1,Oi=yt.get(k).currentProgram.getUniforms();for(let Xe=0;Xe<Zt;Xe++)Oi.setValue(N,"_gl_DrawID",Xe),$t.render(_t[Xe]/rn,wn[Xe])}else if(U.isInstancedMesh)$t.renderInstances(qt,ce,U.count);else if(B.isInstancedBufferGeometry){let _t=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,wn=Math.min(B.instanceCount,_t);$t.renderInstances(qt,ce,wn)}else $t.render(qt,ce)};function jt(b,D,B){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=we,b.needsUpdate=!0,Qs(b,D,B),b.side=jn,b.needsUpdate=!0,Qs(b,D,B),b.side=cn):Qs(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),f=Gt.get(B),f.init(D),S.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let at=0;at<j.length;at++){let ft=j[at];jt(ft,B,U),k.add(ft)}else jt(j,B,U),k.add(j)}),S.pop(),f=null,k},this.compileAsync=function(b,D,B=null){let k=this.compile(b,D,B);return new Promise(U=>{function j(){if(k.forEach(function(at){yt.get(at).currentProgram.isReady()&&k.delete(at)}),k.size===0){U(b);return}setTimeout(j,10)}Bt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let sn=null;function En(b){sn&&sn(b)}function Wl(){hi.stop()}function Xl(){hi.start()}let hi=new wh;hi.setAnimationLoop(En),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(b){sn=b,G.setAnimationLoop(b),b===null?hi.stop():hi.start()},G.addEventListener("sessionstart",Wl),G.addEventListener("sessionend",Xl),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,I),f=Gt.get(b,S.length),f.init(D),S.push(f),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),m=ht.get(b,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){let j=_.xr.getDepthSensingMesh();j!==null&&Eo(j,D,-1/0,_.sortObjects)}Eo(b,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,ct),Vt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Vt&&St.addToRenderList(m,b),this.info.render.frame++,tt===!0&&Q.beginShadows();let B=f.state.shadowsArray;ut.render(B,b,D),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){let j=D.cameras;if(U.length>0)for(let at=0,ft=j.length;at<ft;at++){let pt=j[at];Yl(k,U,b,pt)}Vt&&St.render(b);for(let at=0,ft=j.length;at<ft;at++){let pt=j[at];ql(m,b,pt,pt.viewport)}}else U.length>0&&Yl(k,U,b,D),Vt&&St.render(b),ql(m,b,D);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(_,b,D),oe.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],tt===!0&&Q.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Eo(b,D,B,k){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){k&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(bt);let at=q.update(b),ft=b.material;ft.visible&&m.push(b,at,ft,B,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let at=q.update(b),ft=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Ft.copy(at.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){let pt=at.groups;for(let At=0,It=pt.length;At<It;At++){let mt=pt[At],qt=ft[mt.materialIndex];qt&&qt.visible&&m.push(b,at,qt,B,Ft.z,mt)}}else ft.visible&&m.push(b,at,ft,B,Ft.z,null)}}let j=b.children;for(let at=0,ft=j.length;at<ft;at++)Eo(j[at],D,B,k)}function ql(b,D,B,k){let U=b.opaque,j=b.transmissive,at=b.transparent;f.setupLightsView(B),tt===!0&&Q.setGlobalState(_.clippingPlanes,B),k&&Mt.viewport(P.copy(k)),U.length>0&&Ks(U,D,B),j.length>0&&Ks(j,D,B),at.length>0&&Ks(at,D,B),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Yl(b,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new On(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?qs:Fn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let j=f.state.transmissionRenderTarget[k.id],at=k.viewport||P;j.setSize(at.z,at.w);let ft=_.getRenderTarget();_.setRenderTarget(j),_.getClearColor(W),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Vt&&St.render(B);let pt=_.toneMapping;_.toneMapping=Kn;let At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),tt===!0&&Q.setGlobalState(_.clippingPlanes,k),Ks(b,B,k),A.updateMultisampleRenderTarget(j),A.updateRenderTargetMipmap(j),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let mt=0,qt=D.length;mt<qt;mt++){let ae=D[mt],ce=ae.object,ze=ae.geometry,$t=ae.material,_t=ae.group;if($t.side===cn&&ce.layers.test(k.layers)){let wn=$t.side;$t.side=we,$t.needsUpdate=!0,$l(ce,B,k,ze,$t,_t),$t.side=wn,$t.needsUpdate=!0,It=!0}}It===!0&&(A.updateMultisampleRenderTarget(j),A.updateRenderTargetMipmap(j))}_.setRenderTarget(ft),_.setClearColor(W,X),At!==void 0&&(k.viewport=At),_.toneMapping=pt}function Ks(b,D,B){let k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,j=b.length;U<j;U++){let at=b[U],ft=at.object,pt=at.geometry,At=k===null?at.material:k,It=at.group;ft.layers.test(B.layers)&&$l(ft,D,B,pt,At,It)}}function $l(b,D,B,k,U,j){b.onBeforeRender(_,D,B,k,U,j),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,D,B,k,b,j),U.transparent===!0&&U.side===cn&&U.forceSinglePass===!1?(U.side=we,U.needsUpdate=!0,_.renderBufferDirect(B,D,k,U,b,j),U.side=jn,U.needsUpdate=!0,_.renderBufferDirect(B,D,k,U,b,j),U.side=cn):_.renderBufferDirect(B,D,k,U,b,j),b.onAfterRender(_,D,B,k,U,j)}function Qs(b,D,B){D.isScene!==!0&&(D=de);let k=yt.get(b),U=f.state.lights,j=f.state.shadowsArray,at=U.state.version,ft=xt.getParameters(b,U.state,j,D,B),pt=xt.getProgramCacheKey(ft),At=k.programs;k.environment=b.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(b.isMeshStandardMaterial?F:v).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",Pt),At=new Map,k.programs=At);let It=At.get(pt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===at)return Jl(b,ft),It}else ft.uniforms=xt.getUniforms(b),b.onBeforeCompile(ft,_),It=xt.acquireProgram(ft,pt),At.set(pt,It),k.uniforms=ft.uniforms;let mt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(mt.clippingPlanes=Q.uniform),Jl(b,ft),k.needsLights=tu(b),k.lightsStateVersion=at,k.needsLights&&(mt.ambientLightColor.value=U.state.ambient,mt.lightProbe.value=U.state.probe,mt.directionalLights.value=U.state.directional,mt.directionalLightShadows.value=U.state.directionalShadow,mt.spotLights.value=U.state.spot,mt.spotLightShadows.value=U.state.spotShadow,mt.rectAreaLights.value=U.state.rectArea,mt.ltc_1.value=U.state.rectAreaLTC1,mt.ltc_2.value=U.state.rectAreaLTC2,mt.pointLights.value=U.state.point,mt.pointLightShadows.value=U.state.pointShadow,mt.hemisphereLights.value=U.state.hemi,mt.directionalShadowMap.value=U.state.directionalShadowMap,mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,mt.spotShadowMap.value=U.state.spotShadowMap,mt.spotLightMatrix.value=U.state.spotLightMatrix,mt.spotLightMap.value=U.state.spotLightMap,mt.pointShadowMap.value=U.state.pointShadowMap,mt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Zl(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=rs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Jl(b,D){let B=yt.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Qh(b,D,B,k,U){D.isScene!==!0&&(D=de),A.resetTextureUnits();let j=D.fog,at=k.isMeshStandardMaterial?D.environment:null,ft=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:gs,pt=(k.isMeshStandardMaterial?F:v).get(k.envMap||at),At=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,It=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),mt=!!B.morphAttributes.position,qt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color,ce=Kn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ce=_.toneMapping);let ze=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=ze!==void 0?ze.length:0,_t=yt.get(k),wn=f.state.lights;if(tt===!0&&(gt===!0||b!==M)){let Qe=b===M&&k.id===w;Q.setState(k,b,Qe)}let Zt=!1;k.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==wn.state.version||_t.outputColorSpace!==ft||U.isBatchedMesh&&_t.batching===!1||!U.isBatchedMesh&&_t.batching===!0||U.isBatchedMesh&&_t.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_t.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_t.instancing===!1||!U.isInstancedMesh&&_t.instancing===!0||U.isSkinnedMesh&&_t.skinning===!1||!U.isSkinnedMesh&&_t.skinning===!0||U.isInstancedMesh&&_t.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_t.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_t.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_t.instancingMorph===!1&&U.morphTexture!==null||_t.envMap!==pt||k.fog===!0&&_t.fog!==j||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Q.numPlanes||_t.numIntersection!==Q.numIntersection)||_t.vertexAlphas!==At||_t.vertexTangents!==It||_t.morphTargets!==mt||_t.morphNormals!==qt||_t.morphColors!==ae||_t.toneMapping!==ce||_t.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,_t.__version=k.version);let rn=_t.currentProgram;Zt===!0&&(rn=Qs(k,D,U));let Oi=!1,Xe=!1,ws=!1,he=rn.getUniforms(),fn=_t.uniforms;if(Mt.useProgram(rn.program)&&(Oi=!0,Xe=!0,ws=!0),k.id!==w&&(w=k.id,Xe=!0),Oi||M!==b){Mt.buffers.depth.getReversed()?(st.copy(b.projectionMatrix),Wu(st),Xu(st),he.setValue(N,"projectionMatrix",st)):he.setValue(N,"projectionMatrix",b.projectionMatrix),he.setValue(N,"viewMatrix",b.matrixWorldInverse);let kn=he.map.cameraPosition;kn!==void 0&&kn.setValue(N,Rt.setFromMatrixPosition(b.matrixWorld)),kt.logarithmicDepthBuffer&&he.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Xe=!0,ws=!0)}if(U.isSkinnedMesh){he.setOptional(N,U,"bindMatrix"),he.setOptional(N,U,"bindMatrixInverse");let Qe=U.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),he.setValue(N,"boneTexture",Qe.boneTexture,A))}U.isBatchedMesh&&(he.setOptional(N,U,"batchingTexture"),he.setValue(N,"batchingTexture",U._matricesTexture,A),he.setOptional(N,U,"batchingIdTexture"),he.setValue(N,"batchingIdTexture",U._indirectTexture,A),he.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(N,"batchingColorTexture",U._colorsTexture,A));let Ts=B.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Tt.update(U,B,rn),(Xe||_t.receiveShadow!==U.receiveShadow)&&(_t.receiveShadow=U.receiveShadow,he.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(fn.envMap.value=pt,fn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),Xe&&(he.setValue(N,"toneMappingExposure",_.toneMappingExposure),_t.needsLights&&jh(fn,ws),j&&k.fog===!0&&rt.refreshFogUniforms(fn,j),rt.refreshMaterialUniforms(fn,k,V,K,f.state.transmissionRenderTarget[b.id]),rs.upload(N,Zl(_t),fn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(rs.upload(N,Zl(_t),fn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(N,"center",U.center),he.setValue(N,"modelViewMatrix",U.modelViewMatrix),he.setValue(N,"normalMatrix",U.normalMatrix),he.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Qe=k.uniformsGroups;for(let kn=0,zn=Qe.length;kn<zn;kn++){let Kl=Qe[kn];L.update(Kl,rn),L.bind(Kl,rn)}}return rn}function jh(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function tu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,D,B){yt.get(b.texture).__webglTexture=D,yt.get(b.depthTexture).__webglTexture=B;let k=yt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let B=yt.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){I=b,T=D,R=B;let k=!0,U=null,j=!1,at=!1;if(b){let pt=yt.get(b);if(pt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(pt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(pt.__hasExternalTextures)A.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let mt=b.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&yt.has(mt)&&(b.width!==mt.image.width||b.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(at=!0);let It=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[D])?U=It[D][B]:U=It[D],j=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?U=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[B]:U=It,P.copy(b.viewport),z.copy(b.scissor),O=b.scissorTest}else P.copy(vt).multiplyScalar(V).floor(),z.copy(Nt).multiplyScalar(V).floor(),O=se;if(Mt.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Mt.drawBuffers(b,U),Mt.viewport(P),Mt.scissor(z),Mt.setScissorTest(O),j){let pt=yt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,B)}else if(at){let pt=yt.get(b.texture),At=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.__webglTexture,B||0,At)}w=-1},this.readRenderTargetPixels=function(b,D,B,k,U,j,at){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){Mt.bindFramebuffer(N.FRAMEBUFFER,ft);try{let pt=b.texture,At=pt.format,It=pt.type;if(!kt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-k&&B>=0&&B<=b.height-U&&N.readPixels(D,B,k,U,Dt.convert(At),Dt.convert(It),j)}finally{let pt=I!==null?yt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(N.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(b,D,B,k,U,j,at){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){let pt=b.texture,At=pt.format,It=pt.type;if(!kt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-k&&B>=0&&B<=b.height-U){Mt.bindFramebuffer(N.FRAMEBUFFER,ft);let mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,j.byteLength,N.STREAM_READ),N.readPixels(D,B,k,U,Dt.convert(At),Dt.convert(It),0);let qt=I!==null?yt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(N.FRAMEBUFFER,qt);let ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gu(N,ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,j),N.deleteBuffer(mt),N.deleteSync(ae),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,B=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let k=Math.pow(2,-B),U=Math.floor(b.image.width*k),j=Math.floor(b.image.height*k),at=D!==null?D.x:0,ft=D!==null?D.y:0;A.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,at,ft,U,j),Mt.unbindTexture()},this.copyTextureToTexture=function(b,D,B=null,k=null,U=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let j,at,ft,pt,At,It,mt,qt,ae,ce=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(j=B.max.x-B.min.x,at=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,pt=B.min.x,At=B.min.y,It=B.isBox3?B.min.z:0):(j=ce.width,at=ce.height,ft=ce.depth||1,pt=0,At=0,It=0),k!==null?(mt=k.x,qt=k.y,ae=k.z):(mt=0,qt=0,ae=0);let ze=Dt.convert(D.format),$t=Dt.convert(D.type),_t;D.isData3DTexture?(A.setTexture3D(D,0),_t=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),_t=N.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),_t=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let wn=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Oi=N.getParameter(N.UNPACK_SKIP_ROWS),Xe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pt),N.pixelStorei(N.UNPACK_SKIP_ROWS,At),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It);let ws=b.isDataArrayTexture||b.isData3DTexture,he=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let fn=yt.get(b),Ts=yt.get(D),Qe=yt.get(fn.__renderTarget),kn=yt.get(Ts.__renderTarget);Mt.bindFramebuffer(N.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let zn=0;zn<ft;zn++)ws&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,U,It+zn),b.isDepthTexture?(he&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(D).__webglTexture,U,ae+zn),N.blitFramebuffer(pt,At,j,at,mt,qt,j,at,N.DEPTH_BUFFER_BIT,N.NEAREST)):he?N.copyTexSubImage3D(_t,U,mt,qt,ae+zn,pt,At,j,at):N.copyTexSubImage2D(_t,U,mt,qt,ae+zn,pt,At,j,at);Mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(_t,U,mt,qt,ae,j,at,ft,ze,$t,ce.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(_t,U,mt,qt,ae,j,at,ft,ze,ce.data):N.texSubImage3D(_t,U,mt,qt,ae,j,at,ft,ze,$t,ce):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,mt,qt,j,at,ze,$t,ce.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,mt,qt,ce.width,ce.height,ze,ce.data):N.texSubImage2D(N.TEXTURE_2D,U,mt,qt,j,at,ze,$t,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe),U===0&&D.generateMipmaps&&N.generateMipmap(_t),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B=null,k=null,U=0){return b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,B,k,U)},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){T=0,R=0,I=null,Mt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Yr=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ll=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Oe=new E,$r=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vs=class extends _n{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qi,Is=new E,ji=new E,ts=new E,es=new Et,Ls=new Et,Ph=new re,yr=new E,Ds=new E,Mr=new E,Jc=new Et,ea=new Et,Kc=new Et,Zr=class extends Te{constructor(t=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ll(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new $r(n,3,0,!1)),Qi.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Ph.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-ts.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Sr(yr.set(-.5,-.5,0),ts,o,ji,i,s),Sr(Ds.set(.5,-.5,0),ts,o,ji,i,s),Sr(Mr.set(.5,.5,0),ts,o,ji,i,s),Jc.set(0,0),ea.set(1,0),Kc.set(1,1);let a=t.ray.intersectTriangle(yr,Ds,Mr,!1,Is);if(a===null&&(Sr(Ds.set(-.5,.5,0),ts,o,ji,i,s),ea.set(0,1),a=t.ray.intersectTriangle(yr,Mr,Ds,!1,Is),a===null))return;let l=t.ray.origin.distanceTo(Is);l<t.near||l>t.far||e.push({distance:l,point:Is.clone(),uv:$n.getInterpolation(Is,yr,Ds,Mr,Jc,ea,Kc,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Sr(r,t,e,n,i,s){es.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ls.x=s*es.x-i*es.y,Ls.y=i*es.x+s*es.y):Ls.copy(es),r.copy(t),r.x+=Ls.x,r.y+=Ls.y,r.applyMatrix4(Ph)}var Ti=class extends _n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jr=new E,Kr=new E,Qc=new re,Us=new zs,br=new wi,na=new E,jc=new E,cl=class extends Te{constructor(t=new ge,e=new Ti){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Jr.fromBufferAttribute(e,i-1),Kr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jr.distanceTo(Kr);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=s,t.ray.intersectsSphere(br)===!1)return;Qc.copy(i).invert(),Us.copy(t.ray).applyMatrix4(Qc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=h.getX(x),y=h.getX(x+1),S=Er(this,t,Us,l,f,y);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=Er(this,t,Us,l,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=Er(this,t,Us,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=Er(this,t,Us,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Er(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(Jr.fromBufferAttribute(o,i),Kr.fromBufferAttribute(o,s),e.distanceSqToSegment(Jr,Kr,na,jc)>n)return;na.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(na);if(!(l<t.near||l>t.far))return{distance:l,point:jc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var th=new E,eh=new E,fs=class extends cl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)th.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+th.distanceTo(eh);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gs=class extends _n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nh=new re,hl=new zs,wr=new wi,Tr=new E,ps=class extends Te{constructor(t=new ge,e=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=s,t.ray.intersectsSphere(wr)===!1)return;nh.copy(i).invert(),hl.copy(t.ray).applyMatrix4(nh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);Tr.fromBufferAttribute(u,m),ih(Tr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)Tr.fromBufferAttribute(u,g),ih(Tr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ih(r,t,e,n,i,s,o){let a=hl.distanceSqToPoint(r);if(a<e){let l=new E;hl.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ei=class extends $e{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qr=class r extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new E,h=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ge=class r extends ge{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function y(){let _=new E,C=new E,T=0,R=(e-t)/n;for(let I=0;I<=s;I++){let w=[],M=I/s,P=M*(e-t)+t;for(let z=0;z<=i;z++){let O=z/i,W=O*l+a,X=Math.sin(W),H=Math.cos(W);C.x=P*X,C.y=-M*n+m,C.z=P*H,u.push(C.x,C.y,C.z),_.set(X,R,H).normalize(),d.push(_.x,_.y,_.z),p.push(O,1-M),w.push(g++)}x.push(w)}for(let I=0;I<i;I++)for(let w=0;w<s;w++){let M=x[w][I],P=x[w+1][I],z=x[w+1][I+1],O=x[w][I+1];(t>0||w!==0)&&(h.push(M,P,O),T+=3),(e>0||w!==s-1)&&(h.push(P,z,O),T+=3)}c.addGroup(f,T,0),f+=T}function S(_){let C=g,T=new Et,R=new E,I=0,w=_===!0?t:e,M=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let P=g;for(let z=0;z<=i;z++){let W=z/i*l+a,X=Math.cos(W),H=Math.sin(W);R.x=w*H,R.y=m*M,R.z=w*X,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=X*.5+.5,T.y=H*.5*M+.5,p.push(T.x,T.y),g++}for(let z=0;z<i;z++){let O=C+z,W=P+z;_===!0?h.push(W,W+1,O):h.push(W+1,W,O),I+=3}c.addGroup(f,I,_===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jr=class r extends Ge{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},to=class r extends ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new E,_=new E,C=new E;for(let T=0;T<e.length;T+=3)p(e[T+0],S),p(e[T+1],_),p(e[T+2],C),l(S,_,C,y)}function l(y,S,_,C){let T=C+1,R=[];for(let I=0;I<=T;I++){R[I]=[];let w=y.clone().lerp(_,I/T),M=S.clone().lerp(_,I/T),P=T-I;for(let z=0;z<=P;z++)z===0&&I===T?R[I][z]=w:R[I][z]=w.clone().lerp(M,z/P)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){let M=Math.floor(w/2);w%2===0?(d(R[I][M+1]),d(R[I+1][M]),d(R[I][M])):(d(R[I][M+1]),d(R[I+1][M+1]),d(R[I+1][M]))}}function c(y){let S=new E;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(y),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function h(){let y=new E;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];let _=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;o.push(_,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],C=o[y+4],T=Math.max(S,_,C),R=Math.min(S,_,C);T>.9&&R<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,S){let _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){let y=new E,S=new E,_=new E,C=new E,T=new Et,R=new Et,I=new Et;for(let w=0,M=0;w<s.length;w+=9,M+=6){y.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),C.copy(y).add(S).add(_).divideScalar(3);let P=m(C);x(T,M+0,y,P),x(R,M+2,S,P),x(I,M+4,_,P)}}function x(y,S,_,C){C<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var ni=class r extends to{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},eo=class r extends to{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var ii=class r extends ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new E,d=new E,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],S=f/n,_=0;f===0&&o===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-S),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let S=h[f][y+1],_=h[f][y],C=h[f+1][y],T=h[f+1][y+1];(f!==0||o>0)&&p.push(S,_,T),(f!==n-1||l<Math.PI)&&p.push(_,C,T)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ai=class r extends ge{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let x=g/i*s,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;o.push(x,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Jt=class extends _n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ar(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function z0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ms=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends ms{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nc:s=t,a=2*e-n;break;case ic:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:o=t,l=2*n-e;break;case ic:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let C=0;C!==a;++C)s[C]=f*o[h+C]+y*o[c+C]+S*o[l+C]+_*o[u+C];return s}},dl=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},fl=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},dn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case Ga:e=this.InterpolantFactoryMethodLinear;break;case To:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&z0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===To,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Ga;var Ri=class extends dn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Dr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends dn{};pl.prototype.ValueTypeName="color";var ml=class extends dn{};ml.prototype.ValueTypeName="number";var gl=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)pe.slerpFlat(s,0,o,c-a,o,c,l);return s}},no=class extends dn{InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends dn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Dr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends dn{};xl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},H0=new _l,vl=class{constructor(t){this.manager=t!==void 0?t:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xs=class extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ia=new re,sh=new E,rh=new E,io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var oh=new re,Ns=new E,sa=new E,yl=class extends io{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),sa.copy(n.position),sa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sa),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}},tn=class extends Ws{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ml=class extends io{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Ml}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ll="\\[\\]\\.:\\/",V0=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",G0="[^"+Ll.replace("\\.","")+"]",W0=/((?:WC+[\/:])*)/.source.replace("WC",Dl),X0=/(WCOD+)?/.source.replace("WCOD",G0),q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),$0=new RegExp("^"+W0+X0+q0+Y0+"$"),Z0=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(t){let e=$0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Z0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Sl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);var Kt=(r,t,e)=>r<t?t:r>e?e:r;var Ct=(r,t)=>r+Math.random()*(t-r);var vn=Math.PI/180;function Li(r,t=new E){let e=Math.abs(r.x)<.9?new E(1,0,0):new E(0,1,0),n=new E().crossVectors(r,e).normalize(),i=new E().crossVectors(r,n),s=Math.random()*Math.PI*2;return t.copy(n).multiplyScalar(Math.cos(s)).addScaledVector(i,Math.sin(s))}function Ul(r,t,e,n,i){let s=0,o=n,a=-1,l=0,c=[r.x,r.y,r.z],h=[t.x,t.y,t.z];for(let u=0;u<3;u++){let d=c[u],p=h[u],g=e.min[u],x=e.max[u];if(Math.abs(p)<1e-12){if(d<g||d>x)return-1;continue}let m=1/p,f=(g-d)*m,y=(x-d)*m,S=-1;if(f>y){let _=f;f=y,y=_,S=1}if(f>s&&(s=f,a=u,l=S),y<o&&(o=y),s>o)return-1}return i&&(i.n[0]=i.n[1]=i.n[2]=0,a>=0?i.n[a]=l:(i.n[0]=-t.x,i.n[1]=-t.y,i.n[2]=-t.z)),s}function Bn(r,t,e,n,i){let s=r.x-e.x,o=r.y-e.y,a=r.z-e.z,l=s*t.x+o*t.y+a*t.z,c=s*s+o*o+a*a-n*n;if(c<=0)return 0;if(l>0)return-1;let h=l*l-c;if(h<0)return-1;let u=-l-Math.sqrt(h);return u<=i?u:-1}function lo(r,t,e){return e.x=Kt(r.x,t.min[0],t.max[0]),e.y=Kt(r.y,t.min[1],t.max[1]),e.z=Kt(r.z,t.min[2],t.max[2]),e}function Ys(r,t,e){let n=t.dot(t)-e*e,i=2*r.dot(t),s=r.dot(r);if(Math.abs(n)<1e-6){if(Math.abs(i)<1e-9)return-1;let u=-s/i;return u>0?u:-1}let o=i*i-4*n*s;if(o<0)return-1;let a=Math.sqrt(o),l=(-i-a)/(2*n),c=(-i+a)/(2*n),h=Math.min(l,c)>0?Math.min(l,c):Math.max(l,c);return h>0?h:-1}function J0(r,t,e,n){if(r<=n)return t*r+.5*e*r*r;let i=t+e*n;return t*n+.5*e*n*n+i*(r-n)}function co(r,t,e,n,i,s=4){let o=new E,a=h=>o.copy(r).addScaledVector(t,h).length()-J0(h,e,n,i),l=0,c=.05;if(a(l)<=0)return 0;for(;a(c)>0;)if(c*=1.6,c>s)return-1;for(let h=0;h<30;h++){let u=(l+c)*.5;a(u)>0?l=u:c=u}return c}var ao=class{constructor(){this.a=[]}push(t,e){let n=this.a;n.push([e,t]);let i=n.length-1;for(;i>0;){let s=i-1>>1;if(n[s][0]<=n[i][0])break;[n[s],n[i]]=[n[i],n[s]],i=s}}pop(){let t=this.a,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){let s=2*i+1,o=s+1,a=i;if(s<t.length&&t[s][0]<t[a][0]&&(a=s),o<t.length&&t[o][0]<t[a][0]&&(a=o),a===i)break;[t[a],t[i]]=[t[i],t[a]],i=a}}return e[1]}get size(){return this.a.length}};var Se=72,Qt=36,Ht=36,vs={hangar:{name:"Hangar Bay",desc:"Enclosed 144 m hangar. Walls everywhere to push off.",enclosed:!0,bounds:[72,36,36],navStep:[6,7.5],navR:10.5,spawnX:64},yard:{name:"Derelict Yard",desc:"Open orbit, 300 m across. No walls: drift too far and your suit runs out of luck.",enclosed:!1,bounds:[150,70,70],navStep:[11,11],navR:19.5,spawnX:124}};function _s(r,t,e,n=256,i=2){let s=document.createElement("canvas");s.width=s.height=n;let o=s.getContext("2d");o.fillStyle=r,o.fillRect(0,0,n,n);let a=o.getImageData(0,0,n,n);for(let h=0;h<a.data.length;h+=4){let u=(Math.random()-.5)*14;a.data[h]+=u,a.data[h+1]+=u,a.data[h+2]+=u}o.putImageData(a,0,0);let l=n/i;o.strokeStyle=t,o.lineWidth=3;for(let h=0;h<i;h++)for(let u=0;u<i;u++){o.strokeRect(h*l+3,u*l+3,l-6,l-6),o.fillStyle=t;for(let[d,p]of[[10,10],[l-10,10],[10,l-10],[l-10,l-10]])o.beginPath(),o.arc(h*l+d,u*l+p,2.5,0,Math.PI*2),o.fill()}e&&(o.fillStyle=e,o.fillRect(0,n*.48,n,n*.04));let c=new ei(s);return c.wrapS=c.wrapT=Si,c.colorSpace=Re,c.anisotropy=4,c}function K0(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d");t.fillStyle="#2a2d31",t.fillRect(0,0,128,128),t.fillStyle="#c9a227";for(let n=-128;n<256;n+=32)t.beginPath(),t.moveTo(n,0),t.lineTo(n+16,0),t.lineTo(n+16-128,128),t.lineTo(n-128,128),t.fill();let e=new ei(r);return e.wrapS=e.wrapT=Si,e.colorSpace=Re,e}function ho(r){let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,256,128);for(let i=0;i<256;i+=12)e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(i,0,4,128),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(i+5,0,2,128);e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=6,e.strokeRect(0,0,256,128);let n=new ei(t);return n.wrapS=n.wrapT=Si,n.colorSpace=Re,n}function Q0(){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d");n.fillStyle="#123a6b",n.fillRect(0,0,1024,512);for(let s=0;s<70;s++){let o=Math.random()*1024,a=512*.15+Math.random()*512*.7,l=10+Math.random()*70;n.fillStyle=Math.random()<.5?"#3d6b35":"#7a6a45",n.globalAlpha=.85,n.beginPath(),n.ellipse(o,a,l*1.6,l,Math.random()*3,0,Math.PI*2),n.fill()}n.globalAlpha=1,n.fillStyle="#e8eef5",n.fillRect(0,0,1024,512*.06),n.fillRect(0,512*.94,1024,512*.06);for(let s=0;s<220;s++){let o=Math.random()*1024,a=Math.random()*512,l=6+Math.random()*40;n.globalAlpha=.25+Math.random()*.35,n.fillStyle="#ffffff",n.beginPath(),n.ellipse(o,a,l*2.5,l*.6,0,0,Math.PI*2),n.fill()}n.globalAlpha=1;let i=new ei(e);return i.colorSpace=Re,i}function Ih(r,t,e,n){let i=new Xt(r,t,e),s=i.attributes.uv,o=[[e,t],[e,t],[r,e],[r,e],[r,t],[r,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/n,s.getY(c)*o[a][1]/n)}return i}var $s=class{constructor(t,e="hangar"){this.scene=t,this.mapId=vs[e]?e:"hangar",this.def=vs[this.mapId],this.enclosed=this.def.enclosed;let n=this.def.bounds;this.bounds={min:[-n[0],-n[1],-n[2]],max:[n[0],n[1],n[2]]},this.boxes=[],this.spheres=[],this.pods=[],this.group=new Ne,t.add(this.group),this._hit={t:0,n:new E,kind:"",obj:null},this._rb={n:[0,0,0]},this.mats={hull:new Jt({map:_s("#59616a","#3a4047",null),roughness:.85,metalness:.35}),hullBlue:new Jt({map:_s("#3d5470","#26364a","#3f8cff"),roughness:.8,metalness:.35}),hullOrange:new Jt({map:_s("#6e5440","#4a3626","#ff8a2a"),roughness:.8,metalness:.35}),deck:new Jt({map:_s("#3e4349","#2b2f33","#c9a227",256,4),roughness:.9,metalness:.3}),ceil:new Jt({map:_s("#7c848c","#5c636a",null,256,4),roughness:.85,metalness:.3}),steel:new Jt({map:_s("#80878e","#5a6067",null,128,1),roughness:.6,metalness:.6}),girder:new Jt({map:K0(),roughness:.7,metalness:.5}),cRed:new Jt({map:ho("#8c3a2b"),roughness:.75,metalness:.4}),cTeal:new Jt({map:ho("#2b6f73"),roughness:.75,metalness:.4}),cYel:new Jt({map:ho("#a88a2c"),roughness:.75,metalness:.4}),cGrey:new Jt({map:ho("#5b6168"),roughness:.75,metalness:.4}),stripW:new ve({color:13625087}),stripB:new ve({color:4164863}),stripO:new ve({color:16747050}),glyphB:new ve({color:1919626}),glyphO:new ve({color:9062934})},this.enclosed?(this.buildHull(),this.buildInterior()):this.buildYard(),this.buildSpace(),this.buildPods(),this.buildNav(),this.spawns=[this.makeSpawns(-1),this.makeSpawns(1)]}dispose(){this.scene.remove(this.group)}addBox(t,e,n,i={}){let s={min:t,max:e,kind:i.kind||"box"};if(this.boxes.push(s),n){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=new Ot(Ih(o,a,l,i.tile||4),n);c.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),this.group.add(c),s.mesh=c}return s}addMirrored(t,e,n,i,s){this.addBox(t,e,n,s),this.addBox([-e[0],t[1],t[2]],[-t[0],e[1],e[2]],i||n,s)}strip(t,e,n,i,s,o,a){let l=new Ot(new Xt(Math.max(.05,i-t),Math.max(.05,s-e),Math.max(.05,o-n)),a);return l.position.set((t+i)/2,(e+s)/2,(n+o)/2),this.group.add(l),l}buildHull(){let e=this.group,n=(i,s,o,a,l,c,h,u=6)=>{let d=new Ot(Ih(i,s,o,u),h);return d.position.set(a,l,c),e.add(d),d};n(1,2*Qt,2*Ht,-Se-1/2,0,0,this.mats.hullBlue,8),n(1,2*Qt,2*Ht,Se+1/2,0,0,this.mats.hullOrange,8),n(2*Se,1,2*Ht,0,-Qt-1/2,0,this.mats.deck,8),n(2*Se,1,2*Ht,0,Qt+1/2,0,this.mats.ceil,8);for(let i of[-1,1]){let s=i*(Ht+.5);n(2*Se,Qt-11,1,0,(Qt+11)/2,s,this.mats.hull,8),n(2*Se,Qt-11,1,0,-(Qt+11)/2,s,this.mats.hull,8),n(Se-30,22,1,-(Se+30)/2,0,s,this.mats.hull,8),n(Se-30,22,1,(Se+30)/2,0,s,this.mats.hull,8);let o=new Ot(new ds(60,22),new ve({color:8956620,transparent:!0,opacity:.07,side:cn,depthWrite:!1}));o.position.set(0,0,i*Ht),e.add(o),this.strip(-30.3,11,i*Ht-.2,30.3,11.3,i*Ht+.2,this.mats.stripW),this.strip(-30.3,-11.3,i*Ht-.2,30.3,-11,i*Ht+.2,this.mats.stripW);for(let a=-30;a<=30;a+=15)this.strip(a-.25,-11,i*Ht-.3,a+.25,11,i*Ht+.3,this.mats.steel)}for(let i of[-48,-24,24,48]){let s=i-.7,o=i+.7,a=1.6,l=this.mats.steel;this.addBox([s,-Qt,-Ht],[o,-Qt+a,Ht],l,{tile:2}),this.addBox([s,Qt-a,-Ht],[o,Qt,Ht],l,{tile:2}),this.addBox([s,-Qt+a,-Ht],[o,Qt-a,-Ht+a],l,{tile:2}),this.addBox([s,-Qt+a,Ht-a],[o,Qt-a,Ht],l,{tile:2});let c=i<0?this.mats.stripB:this.mats.stripO;this.strip(i-.1,-Qt+a,-Ht+4,i+.1,-Qt+a+.06,Ht-4,c),this.strip(i-.1,Qt-a-.06,-Ht+4,i+.1,Qt-a,Ht-4,c)}for(let i of[-20,0,20])this.strip(-Se+2,-Qt+.02,i-.15,Se-2,-Qt+.08,i+.15,this.mats.stripW),this.strip(-Se+2,Qt-.08,i-.15,Se-2,Qt-.02,i+.15,this.mats.stripW);for(let i of[-1,1]){let s=i<0?this.mats.stripB:this.mats.stripO,o=i*(Se-.05);for(let a=-2;a<=2;a++)this.strip(o-.05,a*7-.12,-20,o+.05,a*7+.12,20,i<0?this.mats.glyphB:this.mats.glyphO)}}buildInterior(){let t=this.mats;this.spheres.push({c:new E(0,0,0),r:6});let e=new Ot(new ni(6,2),new Jt({color:6976380,roughness:.4,metalness:.8,flatShading:!0}));this.group.add(e);let n=new Ot(new Ai(6.15,.35,8,48),new ve({color:6289151}));n.rotation.x=Math.PI/2,this.group.add(n);let i=n.clone();i.rotation.set(0,Math.PI/2,0),this.group.add(i),this.reactorRings=[n,i];let s=new tn(6289151,60,60,1);this.group.add(s),this.addBox([-1.2,-Qt,-1.2],[1.2,-6,1.2],t.girder,{tile:2}),this.addBox([-1.2,6,-1.2],[1.2,Qt,1.2],t.girder,{tile:2});let o=11,a=.6;this.addBox([-o,-a,o-1.2],[o,a,o],t.steel,{tile:2}),this.addBox([-o,-a,-o],[o,a,-o+1.2],t.steel,{tile:2}),this.addBox([o-1.2,-a,-o+1.2],[o,a,o-1.2],t.steel,{tile:2}),this.addBox([-o,-a,-o+1.2],[-o+1.2,a,o-1.2],t.steel,{tile:2});let l=55,c=56.6,h=(m,f,y,S)=>this.addMirrored([l,m,y],[c,f,S],t.hullOrange,t.hullBlue,{tile:4});h(-Qt,-15,-Ht,Ht),h(15,Qt,-Ht,Ht),h(-15,15,-Ht,-19),h(-15,15,19,Ht),h(-4,4,-4,4),h(-15,-10,-19,19),h(10,15,-6,6),this.addMirrored([36,8,-14],[48,10.6,-11.4],t.cRed,t.cTeal,{tile:3}),this.addMirrored([30,-12,10],[32.6,0,12.6],t.cYel,t.cYel,{tile:3}),this.addMirrored([40,-22,0],[42.6,-19.4,12],t.cTeal,t.cRed,{tile:3}),this.addMirrored([20,20,18],[32,22.6,20.6],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([22,-24,-24],[24.6,-21.4,-12],t.cRed,t.cTeal,{tile:3}),this.addMirrored([44,-4,16],[50,-1.4,25],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([10,22,-8],[22,24.6,-5.4],t.cYel,t.cYel,{tile:3}),this.addMirrored([33,12,22],[35.6,24,24.6],t.cTeal,t.cRed,{tile:3}),this.addMirrored([14,-8,-30],[16.6,4,-27.4],t.cGrey,t.cGrey,{tile:3}),this.addMirrored([24,-6,-6],[24.6,6,6],t.steel,t.steel,{tile:3}),this.addMirrored([14,12,-20],[22,12.5,-12],t.steel,t.steel,{tile:3}),this.addMirrored([12,-16,22],[18,-10,22.5],t.steel,t.steel,{tile:3}),this.addMirrored([44,18,-6],[44.5,26,6],t.steel,t.steel,{tile:3}),this.addMirrored([36,-30,-28],[44,-29.5,-20],t.steel,t.steel,{tile:3}),this.addMirrored([17.4,-28.6,-Ht],[18.6,-27.4,Ht],t.girder,t.girder,{tile:2}),this.addMirrored([37.4,25.4,-Ht],[38.6,26.6,Ht],t.girder,t.girder,{tile:2}),this.addMirrored([45.4,-Qt,-26.6],[46.6,Qt,-25.4],t.girder,t.girder,{tile:2}),this.addBox([-Se,-.6,27.4],[Se,.6,28.6],t.girder,{tile:2}),this.addBox([-Se,17.4,-28.6],[Se,18.6,-27.4],t.girder,{tile:2}),this.addBox([-6,18,-.3],[6,26,.3],t.steel,{tile:3}),this.addBox([-6,-26,-.3],[6,-18,.3],t.steel,{tile:3}),this.addBox([-.3,-6,16],[.3,6,22],t.steel,{tile:3}),this.addBox([-.3,-6,-22],[.3,6,-16],t.steel,{tile:3});let u=new Xs(12571903,4866102,1.1);this.group.add(u);let d=new Pi(16773853,2.2);d.position.set(.4,.3,1),this.group.add(d);let p=new Pi(10336511,.6);p.position.set(-.5,-.6,-1),this.group.add(p);let g=new tn(4164863,22,50,1);g.position.set(-62,0,0),this.group.add(g);let x=new tn(16747050,22,50,1);x.position.set(62,0,0),this.group.add(x)}buildSpace(){let e=new Float32Array(9e3),n=new Float32Array(3e3*3),i=new E;for(let h=0;h<3e3;h++){i.randomDirection().multiplyScalar(3500),e.set([i.x,i.y,i.z],h*3);let u=.5+Math.random()*.5;n.set([u,u,u*(.85+Math.random()*.3)],h*3)}let s=new ge;s.setAttribute("position",new fe(e,3)),s.setAttribute("color",new fe(n,3)),this.group.add(new ps(s,new Gs({size:2.2,sizeAttenuation:!1,vertexColors:!0,fog:!1})));let o=new Ot(new ii(900,64,32),new Jt({map:Q0(),roughness:1,metalness:0}));this.enclosed?o.position.set(250,-620,1700):(o.position.set(300,-1500,900),o.scale.setScalar(1.4)),o.rotation.z=.3,this.group.add(o),this.planet=o;let a=new Ot(new ii(935,64,32),new Fe({transparent:!0,blending:xn,depthWrite:!1,side:we,uniforms:{},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)),3.0); gl_FragColor = vec4(0.35,0.6,1.0,1.0)*f*1.4; }"}));a.position.copy(o.position),a.scale.copy(o.scale),this.group.add(a);let l=(()=>{let h=document.createElement("canvas");h.width=h.height=128;let u=h.getContext("2d"),d=u.createRadialGradient(64,64,4,64,64,64);return d.addColorStop(0,"rgba(255,255,240,1)"),d.addColorStop(.2,"rgba(255,240,200,0.9)"),d.addColorStop(1,"rgba(255,200,120,0)"),u.fillStyle=d,u.fillRect(0,0,128,128),new ei(h)})(),c=new Zr(new Vs({map:l,blending:xn,depthWrite:!1}));c.position.set(-600,300,-2500),c.scale.set(500,500,1),this.group.add(c)}buildPods(){let t=new ni(1.1,1),e=new Ai(1.12,.12,6,20);(this.enclosed?[[8,14,12],[-8,-14,-12],[30,0,-24],[-30,0,24],[50,26,10],[-50,-26,-10],[0,28,20],[0,-28,-20]]:[[20,30,20],[-20,-30,-20],[60,-15,35],[-60,15,-35],[95,25,10],[-95,-25,-10],[40,40,-40],[-40,-40,40],[0,35,-30],[0,-35,30],[75,-45,-30],[-75,45,30]]).forEach((i,s)=>{let o=new Ne;o.add(new Ot(t,new Jt({color:s%2?12106946:10135475,roughness:.55,metalness:.5,flatShading:!0})));let a=new Ot(e,new ve({color:16765002}));o.add(a);let l=a.clone();l.rotation.y=Math.PI/2,o.add(l),this.group.add(o);let c={pos:new E(...i),vel:new E(Ct(-1,1),Ct(-1,1),Ct(-1,1)).multiplyScalar(.8),r:1.1,mass:180,mesh:o,quat:new pe,angVel:new E(Ct(-.4,.4),Ct(-.4,.4),Ct(-.4,.4)),holders:0};o.position.copy(c.pos),this.pods.push(c)})}raycast(t,e,n,i=!1){let s=n,o="",a=null,l=this._hit,c=this._rb,h=t.x+e.x*n,u=t.y+e.y*n,d=t.z+e.z*n,p=Math.min(t.x,h),g=Math.max(t.x,h),x=Math.min(t.y,u),m=Math.max(t.y,u),f=Math.min(t.z,d),y=Math.max(t.z,d);for(let C=0;C<this.boxes.length;C++){let T=this.boxes[C];if(T.max[0]<p||T.min[0]>g||T.max[1]<x||T.min[1]>m||T.max[2]<f||T.min[2]>y)continue;let R=Ul(t,e,T,s,c);R>=0&&R<s&&(s=R,o="box",a=T,l.n.set(c.n[0],c.n[1],c.n[2]).normalize())}for(let C of this.spheres){let T=Bn(t,e,C.c,C.r,s);T>=0&&T<s&&(s=T,o="sphere",a=C,l.n.set(t.x+e.x*T-C.c.x,t.y+e.y*T-C.c.y,t.z+e.z*T-C.c.z).normalize())}if(!i)for(let C of this.pods){let T=Bn(t,e,C.pos,C.r,s);T>=0&&T<s&&(s=T,o="pod",a=C,l.n.set(t.x+e.x*T-C.pos.x,t.y+e.y*T-C.pos.y,t.z+e.z*T-C.pos.z).normalize())}let S=[t.x,t.y,t.z],_=[e.x,e.y,e.z];if(this.enclosed)for(let C=0;C<3;C++){if(Math.abs(_[C])<1e-12)continue;let R=((_[C]>0?this.bounds.max[C]:this.bounds.min[C])-S[C])/_[C];R>=0&&R<s&&(s=R,o="wall",a=null,l.n.set(0,0,0).setComponent(C,_[C]>0?-1:1))}return o?(l.t=s,l.kind=o,l.obj=a,l):null}segmentClear(t,e,n=.7,i=!0){let s=new E().subVectors(e,t),o=s.length();if(o<1e-6)return this.clearance(t)>n;s.divideScalar(o);for(let g=0;g<3;g++){let x=this.bounds.min[g]+n,m=this.bounds.max[g]-n,f=t.getComponent(g),y=e.getComponent(g);if(f<x||f>m||y<x||y>m)return!1}let a=Math.min(t.x,e.x)-n,l=Math.max(t.x,e.x)+n,c=Math.min(t.y,e.y)-n,h=Math.max(t.y,e.y)+n,u=Math.min(t.z,e.z)-n,d=Math.max(t.z,e.z)+n,p={min:[0,0,0],max:[0,0,0]};for(let g of this.boxes)if(!(g.max[0]<a||g.min[0]>l||g.max[1]<c||g.min[1]>h||g.max[2]<u||g.min[2]>d)){for(let x=0;x<3;x++)p.min[x]=g.min[x]-n,p.max[x]=g.max[x]+n;if(Ul(t,s,p,o,null)>=0)return!1}for(let g of this.spheres)if(Bn(t,s,g.c,g.r+n,o)>=0)return!1;if(!i){for(let g of this.pods)if(Bn(t,s,g.pos,g.r+n,o)>=0)return!1}return!0}los(t,e,n=!1){let i=new E().subVectors(e,t),s=i.length();return s<1e-4?!0:(i.divideScalar(s),!this.raycast(t,i,s-.05,n))}clearance(t){let e=this.enclosed?Math.min(t.x-this.bounds.min[0],this.bounds.max[0]-t.x,t.y-this.bounds.min[1],this.bounds.max[1]-t.y,t.z-this.bounds.min[2],this.bounds.max[2]-t.z):1e9,n=new E;for(let i of this.boxes){lo(t,i,n);let s=n.distanceTo(t);if(s<e&&(e=s),s===0)return-1}for(let i of this.spheres)e=Math.min(e,t.distanceTo(i.c)-i.r);return e}sphereContacts(t,e,n){let i=new E,s=new E;if(this.enclosed)for(let o=0;o<3;o++){let a=this.bounds.min[o]+e,l=this.bounds.max[o]-e,c=t.getComponent(o);c<a?(s.set(0,0,0).setComponent(o,1),n(s,a-c,"wall",null)):c>l&&(s.set(0,0,0).setComponent(o,-1),n(s,c-l,"wall",null))}for(let o of this.boxes){if(t.x+e<o.min[0]||t.x-e>o.max[0]||t.y+e<o.min[1]||t.y-e>o.max[1]||t.z+e<o.min[2]||t.z-e>o.max[2])continue;lo(t,o,i),s.subVectors(t,i);let a=s.length();if(a<e)if(a>1e-6)s.divideScalar(a),n(s,e-a,"box",o);else{let l=0,c=1/0,h=1;for(let u=0;u<3;u++){let d=t.getComponent(u),p=d-o.min[u],g=o.max[u]-d;p<c&&(c=p,l=u,h=-1),g<c&&(c=g,l=u,h=1)}s.set(0,0,0).setComponent(l,h),n(s,c+e,"box",o)}}for(let o of this.spheres){s.subVectors(t,o.c);let a=s.length();a<e+o.r&&(s.divideScalar(Math.max(a,1e-6)),n(s,e+o.r-a,"sphere",o))}}nearestSurface(t,e){let n=null,i=e,s=new E;if(this.enclosed)for(let o=0;o<3;o++)for(let a of[-1,1]){let l=a>0?this.bounds.max[o]:this.bounds.min[o],c=Math.abs(l-t.getComponent(o));if(c<i){i=c;let h=t.clone();h.setComponent(o,l),n={point:h,normal:new E().setComponent(o,-a),kind:"wall",obj:null}}}for(let o of this.boxes){lo(t,o,s);let a=s.distanceTo(t);a<i&&a>1e-6&&(i=a,n={point:s.clone(),normal:t.clone().sub(s).normalize(),kind:"box",obj:o})}for(let o of this.spheres){let a=t.distanceTo(o.c)-o.r;if(a<i){i=a;let l=t.clone().sub(o.c).normalize();n={point:o.c.clone().addScaledVector(l,o.r),normal:l,kind:"sphere",obj:o}}}for(let o of this.pods){let a=t.distanceTo(o.pos)-o.r;if(a<i){i=a;let l=t.clone().sub(o.pos).normalize();n={point:o.pos.clone().addScaledVector(l,o.r),normal:l,kind:"pod",obj:o}}}return n&&(n.dist=i),n}updatePods(t,e){let n=this.pods;for(let i of n){if(i.pos.addScaledVector(i.vel,t),!this.enclosed)for(let o=0;o<3;o++){let a=i.pos.getComponent(o),l=this.bounds.max[o]-4;Math.abs(a)>l&&Math.sign(i.vel.getComponent(o))===Math.sign(a)&&i.vel.setComponent(o,-i.vel.getComponent(o))}this.sphereContacts(i.pos,i.r,(o,a)=>{i.pos.addScaledVector(o,a);let l=i.vel.dot(o);l<0&&i.vel.addScaledVector(o,-1.6*l)});let s=i.angVel.length();if(s>1e-5){let o=new pe().setFromAxisAngle(i.angVel.clone().divideScalar(s),s*t);i.quat.premultiply(o)}}for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){let o=n[i],a=n[s],l=new E().subVectors(a.pos,o.pos),c=l.length();if(c<o.r+a.r&&c>1e-6){l.divideScalar(c);let h=o.r+a.r-c;o.pos.addScaledVector(l,-h/2),a.pos.addScaledVector(l,h/2);let u=new E().subVectors(a.vel,o.vel).dot(l);if(u<0){let d=-1.8*u/(1/o.mass+1/a.mass);o.vel.addScaledVector(l,-d/o.mass),a.vel.addScaledVector(l,d/a.mass)}}}this.reactorRings&&(this.reactorRings[0].rotation.z=e*.4,this.reactorRings[1].rotation.x=e*.3)}syncPodMeshes(){for(let t of this.pods)t.mesh.position.copy(t.pos),t.mesh.quaternion.copy(t.quat)}buildNav(){let t=[],e=new E,[n,i]=this.def.navStep,s=this.def.bounds,o=Math.floor((s[0]-4)/n)*n,a=Math.floor((s[1]-4)/i)*i,l=Math.floor((s[2]-4)/i)*i;for(let d=-o;d<=o;d+=n)for(let p=-a;p<=a;p+=i)for(let g=-l;g<=l;g+=i)e.set(d,p,g),this.clearance(e)>=1.6&&t.push({pos:e.clone(),surf:!1,normal:null});let c=1.15,h=(d,p)=>{this.clearance(d)>=c-.05&&t.push({pos:d.clone(),surf:!0,normal:p.clone()})};for(let d of this.boxes)for(let p=0;p<3;p++)for(let g of[-1,1]){let x=(p+1)%3,m=(p+2)%3,f=d.max[x]-d.min[x],y=d.max[m]-d.min[m];if(f<1.5&&y<1.5)continue;let S=Math.max(1,Math.round(f/5)),_=Math.max(1,Math.round(y/5)),C=new E().setComponent(p,g);for(let T=0;T<S;T++)for(let R=0;R<_;R++)e.setComponent(p,(g>0?d.max[p]:d.min[p])+g*c),e.setComponent(x,d.min[x]+f*(T+.5)/S),e.setComponent(m,d.min[m]+y*(R+.5)/_),h(e,C)}if(this.enclosed)for(let d=0;d<3;d++)for(let p of[-1,1]){let g=(d+1)%3,x=(d+2)%3,m=new E().setComponent(d,-p),f=10;for(let y=this.bounds.min[g]+6;y<this.bounds.max[g]-3;y+=f)for(let S=this.bounds.min[x]+6;S<this.bounds.max[x]-3;S+=f)e.setComponent(d,(p>0?this.bounds.max[d]:this.bounds.min[d])-p*c),e.setComponent(g,y),e.setComponent(x,S),h(e,m)}for(let d of this.spheres){let p=Math.round(10+d.r*2);for(let g=0;g<p;g++){let x=new E().randomDirection();e.copy(d.c).addScaledVector(x,d.r+c),Math.abs(e.x)<s[0]&&Math.abs(e.y)<s[1]&&Math.abs(e.z)<s[2]&&h(e,x)}}this.navCell=10,this.navHash=new Map,t.forEach((d,p)=>{d.i=p,d.nb=[],d.cost=[];let g=this.hashKey(d.pos);this.navHash.has(g)||this.navHash.set(g,[]),this.navHash.get(g).push(p)}),this.nav=t;let u=this.def.navR;for(let d of t)this.forNear(d.pos,u,p=>{if(p<=d.i)return;let g=t[p],x=d.pos.distanceTo(g.pos);x>u||this.segmentClear(d.pos,g.pos,.6)&&(d.nb.push(p),d.cost.push(x),g.nb.push(d.i),g.cost.push(x))})}hashKey(t){let e=this.navCell;return(Math.floor(t.x/e)+64)*4096+(Math.floor(t.y/e)+32)*64+(Math.floor(t.z/e)+32)}forNear(t,e,n){let i=this.navCell,s=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.y-e)/i),l=Math.floor((t.y+e)/i),c=Math.floor((t.z-e)/i),h=Math.floor((t.z+e)/i);for(let u=s;u<=o;u++)for(let d=a;d<=l;d++)for(let p=c;p<=h;p++){let g=this.navHash.get((u+64)*4096+(d+32)*64+(p+32));if(g)for(let x of g)n(x)}}nearestNode(t,e=!0){let n=-1,i=1/0;for(let s of[8,16,32])if(this.forNear(t,s,o=>{let a=this.nav[o].pos.distanceToSquared(t);a<i&&(!e||this.segmentClear(t,this.nav[o].pos,.4))&&(i=a,n=o)}),n>=0)return n;for(let s of this.nav){let o=s.pos.distanceToSquared(t);o<i&&(i=o,n=s.i)}return n}findPath(t,e,n=null){let i=this.nearestNode(t);if(i<0||e<0)return null;let s=this.nav.length,o=new Float32Array(s).fill(1/0),a=new Int32Array(s).fill(-1),l=new Uint8Array(s),c=this.nav[e].pos,h=new ao;o[i]=0,h.push(i,i===e?0:this.nav[i].pos.distanceTo(c));let u=0;for(;h.size&&u++<6e3;){let g=h.pop();if(g===e)break;if(l[g])continue;l[g]=1;let x=this.nav[g];for(let m=0;m<x.nb.length;m++){let f=x.nb[m];if(l[f])continue;let y=x.cost[m];n&&(y+=n(this.nav[f]));let S=o[g]+y;S<o[f]&&(o[f]=S,a[f]=g,h.push(f,S+this.nav[f].pos.distanceTo(c)))}}if(a[e]<0&&e!==i)return null;let d=[],p=e;for(;p>=0&&p!==i;)d.push(this.nav[p].pos.clone()),p=a[p];return d.reverse(),d.length||d.push(this.nav[e].pos.clone()),d}makeSpawns(t){let e=[],n=this.def.spawnX,i=this.enclosed?[-14,-5,5,14]:[-20,-7,7,20];for(let s of[-10,-3,4,10])for(let o of i)e.push(new E(t*n,s,o));return e}outside(t){let e=0;for(let n=0;n<3;n++)e=Math.max(e,Math.abs(t.getComponent(n))-this.bounds.max[n]);return e}buildYard(){let t=this.mats,e=this.def.bounds[0];this.addBox([-14,-7,-7],[14,7,7],t.hull,{tile:4}),this.addBox([-5,-5,7],[5,5,22],t.ceil,{tile:4}),this.addBox([-5,-5,-22],[5,5,-7],t.ceil,{tile:4}),this.addBox([-4,7,-4],[4,20,4],t.hull,{tile:4}),this.addBox([-4,-20,-4],[4,-7,4],t.hull,{tile:4}),this.addBox([-1.5,24,-26],[1.5,26,26],t.girder,{tile:2}),this.addBox([-1.5,-26,-26],[1.5,-24,26],t.girder,{tile:2}),this.addBox([-1.5,-24,24],[1.5,24,26],t.girder,{tile:2}),this.addBox([-1.5,-24,-26],[1.5,24,-24],t.girder,{tile:2}),this.strip(-14.05,-.2,-7.05,14.05,.2,7.05,this.mats.stripW);for(let x of[-3,3])for(let m of[-3,3])this.addMirrored([14,x-.5,m-.5],[116,x+.5,m+.5],t.girder,t.girder,{tile:2});for(let x of[34,58,82,104])this.addMirrored([x,-3.5,-3.5],[x+1,-2.5,3.5],t.steel,t.steel,{tile:2}),this.addMirrored([x,2.5,-3.5],[x+1,3.5,3.5],t.steel,t.steel,{tile:2});this.addMirrored([46,3.6,6],[70,4,30],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([46,-4,-30],[70,-3.6,-6],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([86,6,-.4],[98,30,.4],t.cTeal,t.cTeal,{tile:3}),this.addMirrored([128,-20,-30],[130,20,30],t.hullOrange,t.hullBlue,{tile:6}),this.addMirrored([116,-20,-30],[130,-18,30],t.deck,t.deck,{tile:6}),this.addMirrored([116,18,-30],[130,20,30],t.deck,t.deck,{tile:6}),this.addMirrored([113,-6,-18],[115,6,-10],t.hullOrange,t.hullBlue,{tile:3}),this.addMirrored([113,-6,10],[115,6,18],t.hullOrange,t.hullBlue,{tile:3}),this.addMirrored([113,9,-4],[115,14,4],t.hullOrange,t.hullBlue,{tile:3});let n=[t.cRed,t.cYel,t.cGrey,t.cTeal];[[[30,14,18],[42,16.6,20.6]],[[36,-18,-26],[38.6,-6,-23.4]],[[52,22,-14],[54.6,24.6,-2]],[[64,-24,14],[76,-21.4,16.6]],[[78,12,30],[80.6,24,32.6]],[[96,-14,-36],[108,-11.4,-33.4]],[[22,-34,4],[24.6,-31.4,16]],[[100,30,18],[102.6,32.6,30]],[[60,40,-40],[72,42.6,-37.4]],[[88,-40,2],[90.6,-28,4.6]],[[16,30,-36],[28,32.6,-33.4]]].forEach(([x,m],f)=>this.addMirrored(x,m,n[f%4],n[(f+1)%4],{tile:3})),[[[26,-8,30],[34,0,30.6]],[[70,8,-22],[70.6,18,-12]],[[44,-30,8],[52,-29.5,18]],[[108,0,40],[108.6,10,50]]].forEach(([x,m])=>this.addMirrored(x,m,t.steel,t.steel,{tile:3}));let o=[[45,35,30,9],[75,-40,-20,12],[30,-30,45,7],[100,40,-45,10],[60,20,-52,6],[112,-38,42,8],[20,46,-28,5],[86,0,54,7],[130,50,0,9]],a=new Jt({color:7037530,roughness:1,flatShading:!0}),l=(x,m,f,y)=>{let S=new ni(y,2),_=S.attributes.position,C=new E,T=Math.random()*10;for(let I=0;I<_.count;I++){C.fromBufferAttribute(_,I);let w=1+.07*Math.sin(C.x*.9+T)*Math.cos(C.y*1.1-T)+.04*Math.sin(C.z*2.3+T*2);C.multiplyScalar(w),_.setXYZ(I,C.x,C.y,C.z)}S.computeVertexNormals();let R=new Ot(S,a);R.position.set(x,m,f),R.rotation.set(Math.random()*3,Math.random()*3,0),this.group.add(R),this.spheres.push({c:new E(x,m,f),r:y})};for(let[x,m,f,y]of o)l(x,m,f,y),l(-x,-m,-f,y);l(0,50,40,8),l(0,-50,-40,8);let c=new ve({color:16730938}),h=this.def.bounds;for(let x of[-1,1])for(let m of[-1,1])for(let f of[-1,1]){let y=new Ot(new eo(1.2),c);y.position.set(x*h[0],m*h[1],f*h[2]),this.group.add(y)}this.group.add(new Xs(10138879,2765640,.7));let u=new Pi(16773853,3.2);u.position.set(-.3,.5,-1),this.group.add(u);let d=new Pi(7314687,.8);d.position.set(.2,-1,.5),this.group.add(d);let p=new tn(4164863,30,60,1);p.position.set(-122,0,0),this.group.add(p);let g=new tn(16747050,30,60,1);g.position.set(122,0,0),this.group.add(g)}};var j0=`
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC;
uniform float scale;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(size * scale / max(0.1, -mv.z), 0.0, 256.0);
  vA = alpha; vC = color;
}`,tg=`
varying float vA; varying vec3 vC;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  float a = (1.0 - r);
  gl_FragColor = vec4(vC, vA * a * a);
}`,uo=class{constructor(t,e,n){this.max=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.drag=new Float32Array(e),this.a0=new Float32Array(e),this.n=0;let i=new ge;this.aPos=new fe(this.pos,3).setUsage(Ii),this.aCol=new fe(this.col,3).setUsage(Ii),this.aSize=new fe(this.size,1).setUsage(Ii),this.aAlpha=new fe(this.alpha,1).setUsage(Ii),i.setAttribute("position",this.aPos),i.setAttribute("color",this.aCol),i.setAttribute("size",this.aSize),i.setAttribute("alpha",this.aAlpha),i.setDrawRange(0,0),this.mat=new Fe({vertexShader:j0,fragmentShader:tg,transparent:!0,depthWrite:!1,blending:n?xn:Jn,uniforms:{scale:{value:600}}}),this.points=new ps(i,this.mat),this.points.frustumCulled=!1,this.geo=i,t.add(this.points)}spawn(t,e,n,i,s,o={}){let a=this.n;a>=this.max?a=Math.floor(Math.random()*this.max):this.n++,this.pos[a*3]=t.x,this.pos[a*3+1]=t.y,this.pos[a*3+2]=t.z,this.vel[a*3]=e?e.x:0,this.vel[a*3+1]=e?e.y:0,this.vel[a*3+2]=e?e.z:0;let l=n;this.col[a*3]=l.r,this.col[a*3+1]=l.g,this.col[a*3+2]=l.b,this.size0[a]=i,this.size[a]=i,this.life[a]=s,this.maxLife[a]=s,this.grow[a]=o.grow||0,this.drag[a]=o.drag||0,this.a0[a]=o.alpha!=null?o.alpha:1,this.alpha[a]=this.a0[a]}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){e--,n!==e&&this.copy(e,n),n--;continue}let i=n*3,s=this.drag[n]?Math.exp(-this.drag[n]*t):1;this.vel[i]*=s,this.vel[i+1]*=s,this.vel[i+2]*=s,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t;let o=this.life[n]/this.maxLife[n];this.alpha[n]=this.a0[n]*o,this.size[n]=this.size0[n]*(1+this.grow[n]*(1-o))}this.n=e,this.geo.setDrawRange(0,e),this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=this.aAlpha.needsUpdate=!0}copy(t,e){for(let n=0;n<3;n++)this.pos[e*3+n]=this.pos[t*3+n],this.vel[e*3+n]=this.vel[t*3+n],this.col[e*3+n]=this.col[t*3+n];this.size[e]=this.size[t],this.alpha[e]=this.alpha[t],this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.size0[e]=this.size0[t],this.grow[e]=this.grow[t],this.drag[e]=this.drag[t],this.a0[e]=this.a0[t]}},Di=r=>new wt(r),Ce={spark:Di(16763255),white:Di(16777215),gas:Di(13162730),fire:Di(16742954),smoke:Di(5922662),blood:Di(10491928),cyan:Di(10479871)},fo=class{constructor(t){this.scene=t,this.add=new uo(t,6e3,!0),this.alpha=new uo(t,3e3,!1);let e=400;this.trPos=new Float32Array(e*6),this.trCol=new Float32Array(e*6);let n=new ge;this.trA=new fe(this.trPos,3).setUsage(Ii),this.trC=new fe(this.trCol,3).setUsage(Ii),n.setAttribute("position",this.trA),n.setAttribute("color",this.trC),this.tracers=new fs(n,new Ti({vertexColors:!0,transparent:!0,blending:xn,depthWrite:!1})),this.tracers.frustumCulled=!1,this.trGeo=n,this.trMax=e,t.add(this.tracers),this.lights=[0,1,2].map(()=>{let i=new tn(16755285,0,40,1.2);return t.add(i),{l:i,t:0,i0:0}}),this.decals=[],this.decalGeo=new Qr(.09,6),this.decalMat=new ve({color:1118481,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.decalIdx=0,this._v=new E,this._v2=new E}setScale(t,e){let n=t/(2*Math.tan(e*Math.PI/360));this.add.mat.uniforms.scale.value=n,this.alpha.mat.uniforms.scale.value=n}sparks(t,e,n,i=6,s=Ce.spark){let o=this._v;for(let a=0;a<e;a++)o.randomDirection(),n&&o.dot(n)<0&&o.addScaledVector(n,-2*o.dot(n)),o.multiplyScalar(i*(.3+Math.random())),this.add.spawn(t,o,s,.05+Math.random()*.05,.25+Math.random()*.4)}impact(t,e){this.sparks(t,7,e,7),this.alpha.spawn(t,this._v2.copy(e).multiplyScalar(.8),Ce.smoke,.35,.8,{grow:2,alpha:.5}),this.decal(t,e)}decal(t,e){let n;this.decals.length<160?(n=new Ot(this.decalGeo,this.decalMat),this.scene.add(n),this.decals.push(n)):(n=this.decals[this.decalIdx],this.decalIdx=(this.decalIdx+1)%this.decals.length),n.position.copy(t).addScaledVector(e,.02),n.lookAt(this._v.copy(n.position).add(e))}suitHit(t,e,n){for(let i=0;i<8;i++){let s=this._v.copy(e).multiplyScalar(2+Math.random()*3).add(this._v2.randomDirection().multiplyScalar(1.5));n&&s.add(n),this.alpha.spawn(t,s,Ce.gas,.18,.6,{grow:3,alpha:.55})}for(let i=0;i<5;i++){let s=this._v.copy(e).multiplyScalar(1+Math.random()*2).add(this._v2.randomDirection());n&&s.add(n),this.alpha.spawn(t,s,Ce.blood,.06,1.2,{alpha:.9})}}gasJet(t,e,n,i=1){let s=this._v.copy(e).multiplyScalar(4+Math.random()*3).add(this._v2.randomDirection().multiplyScalar(.8));n&&s.add(n),this.alpha.spawn(t,s,Ce.gas,.08*i,.35,{grow:4,alpha:.35})}thrusterPuff(t,e,n){let i=this._v.copy(e).multiplyScalar(6+Math.random()*4).add(this._v2.randomDirection().multiplyScalar(1.2));n&&i.add(n),this.add.spawn(t,i,Ce.cyan,.09,.18,{grow:3,alpha:.25})}muzzle(t,e,n,i){let s=this._v;this.add.spawn(t,n,Ce.fire,i?.6:.35,.05,{alpha:1}),this.add.spawn(t,n,Ce.white,i?.3:.18,.04,{alpha:1});for(let o=0;o<(i?10:4);o++)s.copy(e).multiplyScalar(4+Math.random()*6).add(this._v2.randomDirection().multiplyScalar(2)),n&&s.add(n),this.alpha.spawn(t,s,Ce.smoke,.12,.5,{grow:3,alpha:.35})}explosion(t,e){this.add.spawn(t,null,Ce.white,e*.9,.12,{grow:1}),this.add.spawn(t,null,Ce.fire,e*.7,.35,{grow:1.5});let n=this._v;for(let i=0;i<90;i++)n.randomDirection().multiplyScalar(e*(1+Math.random()*3)),this.add.spawn(t,n,Math.random()<.5?Ce.spark:Ce.fire,.08+Math.random()*.1,.5+Math.random()*.8);for(let i=0;i<26;i++)n.randomDirection().multiplyScalar(e*.5*Math.random()),this.alpha.spawn(t,n,Ce.smoke,.8+Math.random()*.8,1.6+Math.random(),{grow:3,alpha:.45});this.flash(t,16755285,200)}flash(t,e,n){let i=this.lights.reduce((s,o)=>s.t<o.t?s:o);i.l.position.copy(t),i.l.color.setHex(e),i.t=.25,i.i0=n,i.l.intensity=n}update(t,e){this.add.update(t),this.alpha.update(t);for(let i of this.lights)i.t>0?(i.t-=t,i.l.intensity=Math.max(0,i.i0*i.t/.25)):i.l.intensity=0;let n=0;for(let i of e){if(n>=this.trMax)break;let s=n*6;this.trPos[s]=i.pos.x,this.trPos[s+1]=i.pos.y,this.trPos[s+2]=i.pos.z;let o=i.tail;this.trPos[s+3]=i.pos.x-i.vel.x*o,this.trPos[s+4]=i.pos.y-i.vel.y*o,this.trPos[s+5]=i.pos.z-i.vel.z*o;let a=i.color;this.trCol[s]=a.r,this.trCol[s+1]=a.g,this.trCol[s+2]=a.b,this.trCol[s+3]=a.r*.1,this.trCol[s+4]=a.g*.1,this.trCol[s+5]=a.b*.1,n++}this.trGeo.setDrawRange(0,n*2),this.trA.needsUpdate=this.trC.needsUpdate=!0}};var po=class{constructor(){this.ctx=null,this.master=null,this.volume=.6,this.hiss=null}init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let t=this.ctx.sampleRate*1.5;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let e=this.noise.getChannelData(0);for(let o=0;o<t;o++)e[o]=Math.random()*2-1;let n=this.ctx.createBufferSource();n.buffer=this.noise,n.loop=!0;let i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=2400,i.Q.value=.6;let s=this.ctx.createGain();s.gain.value=0,n.connect(i),i.connect(s),s.connect(this.master),n.start(),this.hiss=s}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setHiss(t){this.hiss&&this.hiss.gain.setTargetAtTime(Math.min(.25,t*.06),this.ctx.currentTime,.03)}burst({freq:t=800,q:e=1,dur:n=.15,gain:i=.5,type:s="lowpass",tone:o=0,toneDur:a=.1,dist:l=0}){if(!this.ctx)return;let c=this.ctx.currentTime,h=1/(1+l*.08);if(h<.03)return;let u=l>3?Math.max(250,t*.25):t,d=this.ctx.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;let p=this.ctx.createBiquadFilter();p.type=s,p.frequency.value=u,p.Q.value=e;let g=this.ctx.createGain();if(g.gain.setValueAtTime(i*h,c),g.gain.exponentialRampToValueAtTime(.001,c+n),d.connect(p),p.connect(g),g.connect(this.master),d.start(c,Math.random()),d.stop(c+n+.05),o){let x=this.ctx.createOscillator();x.frequency.setValueAtTime(o,c),x.frequency.exponentialRampToValueAtTime(o*.4,c+a);let m=this.ctx.createGain();m.gain.setValueAtTime(i*h*.6,c),m.gain.exponentialRampToValueAtTime(.001,c+a),x.connect(m),m.connect(this.master),x.start(c),x.stop(c+a+.05)}}beep(t,e=.08,n=.15,i="square"){if(!this.ctx)return;let s=this.ctx.currentTime,o=this.ctx.createOscillator();o.type=i,o.frequency.value=t;let a=this.ctx.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.02)}play(t,e=0){switch(t){case"rifle":this.burst({freq:1800,dur:.12,gain:.35,tone:140,toneDur:.08,dist:e});break;case"shotgun":this.burst({freq:900,dur:.3,gain:.6,tone:90,toneDur:.2,dist:e});break;case"gyro":this.burst({freq:3e3,type:"highpass",dur:.5,gain:.25,dist:e});break;case"explosion":this.burst({freq:400,dur:1,gain:.9,tone:60,toneDur:.6,dist:e});break;case"hit":this.beep(1400,.05,.12,"triangle");break;case"head":this.beep(2100,.07,.15,"triangle");break;case"kill":this.beep(880,.08,.15),setTimeout(()=>this.beep(1320,.12,.15),80);break;case"hurt":this.burst({freq:300,dur:.25,gain:.5,tone:70,toneDur:.2});break;case"impact":this.burst({freq:200,dur:.3,gain:.5,tone:50,toneDur:.25,dist:e});break;case"clank":this.burst({freq:1200,q:6,type:"bandpass",dur:.15,gain:.3,dist:e});break;case"reload":this.burst({freq:2500,q:8,type:"bandpass",dur:.06,gain:.25});break;case"empty":this.beep(300,.04,.1);break;case"grab":this.burst({freq:700,q:4,type:"bandpass",dur:.12,gain:.35});break;case"push":this.burst({freq:400,dur:.18,gain:.3});break;case"warn":this.beep(660,.1,.1,"sawtooth");break;case"melee":this.burst({freq:500,dur:.2,gain:.6,tone:120,toneDur:.15,dist:e});break;case"throw":this.burst({freq:1500,dur:.1,gain:.15});break;case"bounce":this.burst({freq:2200,q:10,type:"bandpass",dur:.08,gain:.2,dist:e});break;case"mode":this.beep(1e3,.05,.1,"sine");break;case"spawn":this.beep(520,.1,.12,"sine"),setTimeout(()=>this.beep(780,.15,.12,"sine"),110);break;default:break}}};var Ui={rifle:{id:"rifle",name:"KR-7 KINETIC RIFLE",short:"KR-7",kind:"bullet",speed:400,projMass:.01,dmg:20,headMul:2.2,rpm:600,mag:30,reserve:180,reload:2.1,spread:.0016,auto:!0,mass:4.2,kick:.004,tracer:16773296,sound:"rifle"},shotgun:{id:"shotgun",name:"FL-12 FLECHETTE",short:"FL-12",kind:"pellets",speed:320,pellets:10,ejecta:100,dmg:11,headMul:1.5,rpm:75,mag:6,reserve:30,reload:.5,perShell:!0,spread:.045,auto:!1,mass:4.6,kick:.03,tracer:16760944,sound:"shotgun"},gyrojet:{id:"gyrojet",name:"GJ-3 GYROJET",short:"GJ-3",kind:"rocket",speed:30,accel:280,burn:1.3,dmg:72,headMul:1.3,splash:3.2,splashDmg:45,rpm:100,mag:5,reserve:15,reload:2.6,spread:.001,auto:!1,mass:5,kick:.006,ejecta:.6,tracer:16740416,sound:"gyro"}},ke={fuse:3,speed:13,mass:.6,radius:9,dmg:115,impulse:520,restitution:.85,count:2},yn={range:2.4,dmg:45,impulse:420,spin:4.5,cooldown:.9},ys=class{constructor(t){this.def=t,this.mag=t.mag,this.reserve=t.reserve,this.cool=0,this.reloadT=0}};var Sn=[4164863,16747050],Hh=["BLUE","ORANGE"],Ss=["MANUAL","RATE DAMP","ATT HOLD","VEL MATCH"],_o=["No assists. Every rotation and stop is your own counter-burn.","Rotation is damped automatically when you stop steering. Linear drift remains.","Holds your body attitude while you translate (PD controller).","Attitude hold + auto-burn to match the velocity of the station or a locked target."],xo=110,Lh=700,ri=10,eg=112,Mn=.7,ng=1.5,Nl=3.2,ig=.42,sg=.5,oi=8,Ze=[{sx:-1,sy:1},{sx:1,sy:1},{sx:-1,sy:-1},{sx:1,sy:-1}].map(r=>({...r,pos:new E(r.sx*ig,r.sy*sg,0)})),vo=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],Vh=[{p:new E(0,.6,-.02),r:.21,part:"head"},{p:new E(0,.22,0),r:.34,part:"chest"},{p:new E(0,-.18,0),r:.3,part:"body"},{p:new E(0,.15,.3),r:.28,part:"pack"},{p:new E(-.14,-.62,-.08),r:.17,part:"leg"},{p:new E(.14,-.62,-.08),r:.17,part:"leg"},{p:new E(-.14,-.95,.08),r:.15,part:"leg"},{p:new E(.14,-.95,.08),r:.15,part:"leg"}],en=new E,Ms=new E,Yt=new pe,Dh=new Ve(0,0,0,"YXZ"),Uh={};function Pe(r,t){return Uh[r]||(Uh[r]=t())}function Fl(r,t){let e=new Ne,n=new Jt({color:2764339,roughness:.5,metalness:.6}),i=new Jt({color:9147032,roughness:.5,metalness:.5}),s=new ve({color:t}),o=(a,l,c,h,u)=>{let d=new Ot(a,l);return d.position.set(c,h,u),e.add(d),d};return r==="rifle"?(o(new Xt(.07,.09,.6),n,0,0,-.1),o(new Xt(.05,.05,.3),i,0,.015,-.52),o(new Xt(.05,.14,.07),n,0,-.1,-.08),o(new Xt(.06,.07,.2),n,0,-.02,.26),o(new Xt(.04,.05,.12),i,0,.075,-.05),o(new Xt(.075,.012,.3),s,0,.05,-.2)):r==="shotgun"?(o(new Xt(.1,.11,.5),n,0,0,-.05),o(new Ge(.035,.035,.4,8).rotateX(Math.PI/2),i,0,.02,-.48),o(new Ge(.03,.03,.34,8).rotateX(Math.PI/2),n,0,-.045,-.4),o(new Xt(.06,.15,.08),n,0,-.11,.02),o(new Xt(.105,.015,.25),s,0,.06,-.1)):(o(new Ge(.06,.06,.55,10).rotateX(Math.PI/2),i,0,.01,-.15),o(new Ge(.075,.06,.12,10).rotateX(Math.PI/2),n,0,.01,-.45),o(new Xt(.06,.15,.08),n,0,-.1,-.02),o(new Xt(.03,.06,.1),n,0,.085,-.1),o(new Ai(.062,.01,6,16),s,0,.01,-.3)),e}var rg=new Fe({side:we,uniforms:{color:{value:new wt(16726831)},thick:{value:.0032}},vertexShader:`uniform float thick;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 dir = normalize(normalMatrix * normalize(position + vec3(1e-5)));
      mv.xyz += dir * thick * max(1.5, -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }"});function og(r){let t=[];r.traverse(n=>{n.isMesh&&!n.userData.noOutline&&t.push(n)});let e=[];for(let n of t){let i=new Ot(n.geometry,rg);i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),i.visible=!1,i.userData.noOutline=!0,n.parent.add(i),e.push(i)}return e}function ag(r){let t=Sn[r],e=new Ne,n=new Jt({color:14211806,roughness:.75,metalness:.05,flatShading:!0}),i=new Jt({color:5725798,roughness:.7,metalness:.3,flatShading:!0}),s=new Jt({color:t,roughness:.6,emissive:t,emissiveIntensity:.35,flatShading:!0}),o=new ve({color:t}),a=new Jt({color:1710618,roughness:.1,metalness:1,emissive:t,emissiveIntensity:.25}),l=(X,H,K,V,nt)=>{let ct=new Ot(X,H);return ct.position.set(K,V,nt),ct},c=l(Pe("torso",()=>new Xt(.5,.62,.34)),n,0,.15,0);e.add(c),e.add(l(Pe("belt",()=>new Xt(.52,.1,.36)),s,0,-.12,0)),e.add(l(Pe("pack",()=>new Xt(.56,.72,.26)),i,0,.12,.3)),e.add(l(Pe("packStripe",()=>new Xt(.57,.06,.27)),o,0,.38,.3));let h=Pe("tower",()=>new Xt(.12,.12,.14)),u=Pe("strut",()=>new Xt(.16,.05,.05)),d=[];for(let X of Ze){let H=l(h,i,X.pos.x,X.pos.y,X.pos.z);e.add(H),d.push(H),e.add(l(u,i,X.pos.x*.8,X.pos.y,.15)),e.add(l(Pe("tlight",()=>new Xt(.13,.03,.03)),o,X.pos.x,X.pos.y+.075,-.05))}let p=Pe("thigh",()=>new Ge(.1,.09,.42,7)),g=Pe("shin",()=>new Ge(.085,.08,.4,7)),x=Pe("boot",()=>new Xt(.15,.12,.26));for(let X of[-1,1]){let H=l(p,n,X*.14,-.42,-.08);H.rotation.x=.5,e.add(H);let K=l(g,n,X*.14,-.78,-.02);K.rotation.x=-.35,e.add(K),e.add(l(x,i,X*.14,-1,.06)),e.add(l(Pe("knee",()=>new Xt(.16,.06,.14)),s,X*.14,-.6,-.17))}let m=new Ne;m.position.set(0,.45,0),e.add(m);let f=l(Pe("helmet",()=>new ii(.21,12,9)),n,0,.15,-.02);m.add(f);let y=l(Pe("visor",()=>new ii(.19,12,8,-Math.PI*.42,Math.PI*.84,Math.PI*.28,Math.PI*.4).rotateY(Math.PI)),a,0,.15,-.045);m.add(y),m.add(l(Pe("hlamp",()=>new Xt(.05,.05,.05)),o,.17,.2,-.06));let S=Pe("uarm",()=>new Ge(.075,.07,.32,6)),_=Pe("farm",()=>new Ge(.065,.06,.3,6)),C=l(S,n,.27,-.12,-.12);C.rotation.x=1.2,m.add(C);let T=l(_,n,.18,-.16,-.36);T.rotation.set(1.5,0,.5),m.add(T);let R=l(S,n,-.27,-.12,-.12);R.rotation.x=1.2,m.add(R);let I=l(_,n,-.1,-.12,-.42);I.rotation.set(1.5,0,-.9),m.add(I);let w=new Ne;w.position.set(.12,-.1,-.4),m.add(w);let M=Pe("flame",()=>{let X=new jr(.055,.42,6,1,!0);return X.translate(0,-.21,0),X}),P=new ve({color:13625599,transparent:!0,opacity:.75,blending:xn,depthWrite:!1}),z=[],O=new E(0,1,0);for(let X of Ze)for(let H=0;H<6;H++){let K=new Ot(M,P),V=vo[H].clone().negate();K.quaternion.setFromUnitVectors(O,V.clone().negate()),K.position.copy(X.pos).addScaledVector(V,.07),K.visible=!1,K.userData.noOutline=!0,e.add(K),z.push(K)}let W=og(e);return{root:e,upper:m,gunMount:w,flames:z,towerMeshes:d,outlines:W}}var lg=1,Zs=class{constructor(t,e,n,i=!1){this.id=lg++,this.game=t,this.team=e,this.name=n,this.isPlayer=i,this.pos=new E,this.vel=new E,this.quat=new pe,this.angVel=new E,this.aimYaw=0,this.aimPitch=0,this.mode=1,this.holdQ=null,this.ctrl={move:new E,roll:0,killRot:!1,brake:!1},this.throttle=new Float32Array(24),this.kills=0,this.deaths=0,this.score=0,this.alive=!1,this.respawnT=0,this.refTarget=null,this.model=ag(e),t.scene.add(this.model.root),this.gunMeshes={};for(let s of Object.keys(Ui)){let o=Fl(s,Sn[e]);o.visible=!1,this.model.gunMount.add(o),this.gunMeshes[s]=o}this.reset()}reset(){this.health=100,this.o2=100,this.gas=ri,this.vel.set(0,0,0),this.angVel.set(0,0,0),this.aimYaw=this.aimPitch=0,this.holdQ=null,this.grab=null,this.leaks=[],this.towers=Ze.map(()=>({hp:30,dead:!1})),this.weapons=[new ys(Ui.rifle),new ys(Ui.shotgun),new ys(Ui.gyrojet)],this.cur=0,this.switchT=0,this.grenades=ke.count,this.grenadeCool=0,this.meleeCool=0,this.lastDamageT=-99,this.lastThrustT=-99,this.lastAttacker=null,this.spawnProtect=2,this.kick=new Et,this.pushCharge=0,this.lastFireT=-99,this.throttle.fill(0),this.impactCool=0}get weapon(){return this.weapons[this.cur]}get mass(){let t=eg+this.gas;for(let e of this.weapons)t+=e.def.mass;return t}inertia(t){let e=this.mass/125;return t.set(21*e,9*e,19*e)}get dv(){let t=this.mass,e=t-this.gas;return Lh*Math.log(t/e)}eye(t){return t.copy(en.set(0,.6,-.05).applyQuaternion(this.quat)).add(this.pos)}aimQuat(t){return Dh.set(this.aimPitch,this.aimYaw,0,"YXZ"),t.setFromEuler(Dh).premultiply(this.quat)}aimDir(t){return t.set(0,0,-1).applyQuaternion(this.aimQuat(Yt))}forward(t){return t.set(0,0,-1).applyQuaternion(this.quat)}setAimDir(t){let e=this.forward(Ms);Yt.setFromUnitVectors(e,en.copy(t).normalize()),this.quat.premultiply(Yt).normalize(),this.holdQ&&this.holdQ.premultiply(Yt).normalize()}addAim(t,e){Yt.setFromAxisAngle(fg,t),zh.setFromAxisAngle(dg,e),Yt.multiply(zh),this.quat.multiply(Yt).normalize(),this.holdQ&&this.holdQ.multiply(Yt).normalize()}spawn(t,e){this.reset(),this.alive=!0,this.pos.copy(t),this.quat.setFromUnitVectors(new E(0,0,-1),e.clone().normalize()),this.model.root.visible=!this.isPlayer}applyImpulse(t,e,n=!0){if(n==="recoil"?!this.game.rules.recoil:n&&!this.game.rules.knockback)return;if(this.grab&&this.grab.kind!=="pod")if(t.length()>120)this.grab=null;else return;let i=this.mass;if(this.vel.addScaledVector(t,1/i),e){let s=en.subVectors(e,this.pos),o=Ms.crossVectors(s,t).applyQuaternion(Yt.copy(this.quat).invert()),a=this.inertia(en);this.angVel.x+=o.x/a.x,this.angVel.y+=o.y/a.y,this.angVel.z+=o.z/a.z}}flightComputer(t){let e=this.ctrl,n=this.mode,i=e.roll,s=Nh.set(0,0,0),o=this.angVel,a=n===0&&!this.isBot,l=e.killRot;if(a&&!l)s.set(0,0,i),this.holdQ=null;else{let u=Oh.set(0,0,l?0:i*ng);if((n>=2||this.isBot)&&!l&&i===0){if(!this.holdQ&&o.lengthSq()<.02&&(this.holdQ=this.quat.clone()),this.holdQ){Yt.copy(this.quat).invert().multiply(this.holdQ),Yt.w<0&&(Yt.x=-Yt.x,Yt.y=-Yt.y,Yt.z=-Yt.z,Yt.w=-Yt.w);let x=Math.sqrt(1-Math.min(1,Yt.w*Yt.w)),m=2*Math.acos(Kt(Yt.w,-1,1));x>1e-5&&u.set(Yt.x/x,Yt.y/x,Yt.z/x).multiplyScalar(Math.min(1.2,m*4))}}else this.holdQ=null;let p=en.subVectors(u,o),g=this.isBot?.02:.004;s.set(Math.abs(p.x)<g?0:Kt(p.x*Nl,-1,1),Math.abs(p.y)<g?0:Kt(p.y*Nl,-1,1),Math.abs(p.z)<g?0:Kt(p.z*Nl,-1,1))}let c=Fh.copy(e.move);if(!a&&(e.brake||n===3&&!this.isBot)){let u=this.refTarget&&this.refTarget.alive!==!1?this.refTarget.vel:cg,d=en.subVectors(this.vel,u).applyQuaternion(Yt.copy(this.quat).invert());for(let p of["x","y","z"])if(e.brake||c[p]===0){let g=-d[p];c[p]=Math.abs(g)<.04?0:Kt(g*1.3,-1,1)}}return this.allocate(c,s,t)}allocate(t,e,n){let i=mo.set(0,0,0),s=Bh.set(0,0,0),o=0,a=this.throttle;for(let h=0;h<4;h++){let u=Ze[h],d=this.towers[h],p=Kt(t.x-e.z*u.sy,-1,1),g=Kt(t.y+e.z*u.sx,-1,1),x=Kt(t.z+e.x*u.sy-e.y*u.sx,-1,1),m=h*6;if(a[m+0]=p>0?p:0,a[m+1]=p<0?-p:0,a[m+2]=g>0?g:0,a[m+3]=g<0?-g:0,a[m+4]=x>0?x:0,a[m+5]=x<0?-x:0,d.dead)for(let f=0;f<6;f++)a[m+f]=0;for(let f=0;f<6;f++)o+=a[m+f]}if(o<=0)return o;let l=o*xo/Lh*n,c=1;if(this.game.rules.infiniteGas&&(l=0),l>this.gas&&(c=this.gas/l,l=this.gas),this.gas-=l,c<1)for(let h=0;h<24;h++)a[h]*=c;for(let h=0;h<4;h++){let u=Ze[h];go.set(0,0,0);for(let d=0;d<6;d++){let p=a[h*6+d];p>0&&go.addScaledVector(vo[d],p*xo)}i.add(go),s.add(Ms.crossVectors(u.pos,go))}return o*c>.05&&(this.lastThrustT=this.game.time),o*c}step(t){let e=this.game.world,n=this.inertia(kh),i=this.mass;if(this.alive&&this.grab){this.stepGrabbed(t);return}let s=null,o=null;this.alive?(this.flightComputer(t),s=mo,o=Bh):this.throttle.fill(0);let a=hg.set(0,0,0),l=ug.set(0,0,0);if(s&&this.throttle.some(C=>C>0)&&(a.copy(s).applyQuaternion(this.quat),l.copy(o)),this.game.rules.breaches)for(let C of this.leaks){let T=en.copy(C.n).multiplyScalar(-28);l.add(Ms.crossVectors(C.p,T)),a.add(T.applyQuaternion(this.quat))}this.vel.addScaledVector(a,t/i),this.pos.addScaledVector(this.vel,t);let c=this.angVel,h=en.set(n.x*c.x,n.y*c.y,n.z*c.z),u=Ms.crossVectors(c,h);c.x+=(l.x-u.x)/n.x*t,c.y+=(l.y-u.y)/n.y*t,c.z+=(l.z-u.z)/n.z*t;let d=c.length();d>12&&c.multiplyScalar(12/d);let p=this.quat,g=p.x,x=p.y,m=p.z,f=p.w,y=c.x*t*.5,S=c.y*t*.5,_=c.z*t*.5;p.x+=f*y+x*_-m*S,p.y+=f*S+m*y-g*_,p.z+=f*_+g*S-x*y,p.w+=-g*y-x*S-m*_,p.normalize(),this.collide(t,e)}stepGrabbed(t){let e=this.grab;if(this.throttle.fill(0),mo.set(0,0,0),e.kind==="pod"){let o=e.obj,a=Fh.copy(this.ctrl.move);if(this.ctrl.brake&&!(this.mode===0&&!this.isBot)){let l=en.copy(o.vel).applyQuaternion(Yt.copy(this.quat).invert());for(let c of["x","y","z"])a[c]=Math.abs(l[c])<.04?0:Kt(-l[c]*1.3,-1,1)}a.lengthSq()>0&&this.allocate(a,Nh.set(0,0,0),t)>0&&o.vel.addScaledVector(mo.applyQuaternion(this.quat),t/(this.mass+o.mass)),this.pos.copy(o.pos).add(e.offset),this.vel.copy(o.vel)}else this.vel.set(0,0,0);let n=Oh.set(0,0,this.ctrl.roll*1);this.angVel.lerp(n,Math.min(1,t*8));let i=this.angVel,s=i.length();s>1e-6&&(Yt.setFromAxisAngle(en.copy(i).divideScalar(s),s*t),this.quat.multiply(Yt).normalize())}collide(t,e){let n=this;this.impactCool-=t,e.sphereContacts(this.pos,Mn,(i,s,o)=>{n.pos.addScaledVector(i,s);let a=n.vel.dot(i);if(a<0){let l=-a;n.vel.addScaledVector(i,-1.3*a);let c=en.copy(n.vel).addScaledVector(i,-n.vel.dot(i));n.vel.addScaledVector(c,-.18);let h=n.inertia(kh);n.game.rules.knockback||c.set(0,0,0);let u=Ms.crossVectors(i,c).multiplyScalar(-n.mass*.18*Mn).applyQuaternion(Yt.copy(n.quat).invert());if(n.angVel.x+=u.x/h.x,n.angVel.y+=u.y/h.y,n.angVel.z+=u.z/h.z,l>1.2&&n.impactCool<=0){n.impactCool=.25;let d=n.pos.clone().addScaledVector(i,-Mn);n.game.onImpact(n,l,d,i.clone()),l>oi&&n.alive&&(n.game.damage(n,(l-oi)*16,null,"impact",d),n.game.rules.breaches&&l>oi+2&&n.leaks.length<3&&n.leaks.push({p:en.copy(i).negate().multiplyScalar(.3).applyQuaternion(Yt.copy(n.quat).invert()).clone(),n:i.clone().negate().applyQuaternion(Yt.copy(n.quat).invert()),t:4}))}}})}update(t){let e=this.game.time;if(!this.alive)return;this.spawnProtect-=t,this.grenadeCool-=t,this.meleeCool-=t;for(let i of this.weapons)i.cool-=t;let n=this.weapon;if(this.switchT>0&&(this.switchT-=t),n.reloadT>0&&(n.reloadT-=t,n.reloadT<=0))if(n.def.perShell)n.reserve>0&&n.mag<n.def.mag&&(n.mag++,n.reserve--),n.mag<n.def.mag&&n.reserve>0&&!n.cancel?n.reloadT=n.def.reload:n.reloadT=0;else{let i=Math.min(n.def.mag-n.mag,n.reserve);n.mag+=i,n.reserve-=i,n.reloadT=0}this.game.rules.infiniteGas?this.gas=ri:e-this.lastThrustT>.6&&(this.gas=Math.min(ri,this.gas+t*(this.grab?2.2:1.1))),this.game.rules.breaches||(this.leaks.length=0);for(let i of this.leaks)i.t-=t;this.leaks=this.leaks.filter(i=>i.t>0),this.leaks.length?this.o2=Math.max(0,this.o2-this.leaks.length*3*t):this.o2=Math.min(100,this.o2+4*t),this.o2<=0&&this.game.damage(this,12*t,null,"hypoxia"),e-this.lastDamageT>5&&this.health<100&&(this.health=Math.min(100,this.health+14*t)),this.kick.multiplyScalar(Math.exp(-t*10))}startReload(){let t=this.weapon;return t.reloadT>0||t.mag>=t.def.mag||t.reserve<=0?!1:(t.reloadT=t.def.reload,t.cancel=!1,!0)}switchTo(t){t===this.cur||t<0||t>=this.weapons.length||(this.weapon.reloadT=0,this.cur=t,this.switchT=.45)}syncModel(t){let e=this.model;e.root.position.copy(this.pos),e.root.quaternion.copy(this.quat);for(let s in this.gunMeshes)this.gunMeshes[s].visible=this.alive&&s===this.weapon.def.id;let n=this.game.player,i=this.alive&&!!n&&n!==this&&n.team!==this.team&&this.game.settings.outlines;if(i!==this._outlined){this._outlined=i;for(let s of e.outlines)s.visible=i}for(let s=0;s<24;s++){let o=this.throttle[s],a=e.flames[s];if(o>.03&&this.alive){a.visible=!0;let l=.4+o*.8+Math.random()*.25;a.scale.set(.7+o*.5,l,.7+o*.5)}else a.visible=!1}}},Nh=new E,Fh=new E,Oh=new E,cg=new E,mo=new E,Bh=new E,go=new E,hg=new E,ug=new E,kh=new E,zh=new pe,dg=new E(1,0,0),fg=new E(0,1,0);var nn=new E,Ni=new E,Gh=new E,Wh=new pe,Xh=new E,yo=class{constructor(t){this.game=t,this.projectiles=[],this.grenades=[];let e=new ni(.12,0);this.gGeo=e,this.gMat=[4164863,16747050].map(n=>new Jt({color:3355443,emissive:n,emissiveIntensity:.9})),this.rGeo=new Ge(.03,.03,.22,6).rotateX(Math.PI/2),this.rMat=new Jt({color:10066329,emissive:16733472,emissiveIntensity:.4}),this.colors={}}color(t){return this.colors[t]||(this.colors[t]=new wt(t))}muzzlePoint(t,e){return e.set(.18,-.14,-.85).applyQuaternion(t.aimQuat(Wh)).add(t.eye(Gh))}fire(t){let e=t.weapon,n=e.def,i=this.game;if(!t.alive||t.switchT>0||e.cool>0)return!1;if(e.reloadT>0)if(n.perShell&&e.mag>0)e.reloadT=0;else return!1;if(e.mag<=0)return!t.startReload()&&t.isPlayer&&i.audio.play("empty"),e.cool=.25,!1;e.mag--,e.cool=60/n.rpm,t.spawnProtect=0,t.lastFireT=i.time;let s=t.eye(new E),o=t.aimDir(new E),a=this.muzzlePoint(t,new E),l=n.kind==="pellets"?n.pellets:1;for(let h=0;h<l;h++){let u=o.clone(),d=n.spread*(t.grab?.6:1)*Math.sqrt(Math.random());d>0&&u.addScaledVector(Li(o,nn),Math.tan(d)).normalize();let p={pos:s.clone().addScaledVector(u,.35),vel:t.vel.clone().addScaledVector(u,n.speed),dir:u,owner:t,def:n,age:0,kind:n.kind,color:this.color(n.tracer),tail:n.kind==="rocket"?.02:.012,visOff:a.clone().sub(s)};n.kind==="rocket"&&(p.mesh=new Ot(this.rGeo,this.rMat),p.mesh.position.copy(p.pos),p.mesh.lookAt(nn.copy(p.pos).add(u)),i.scene.add(p.mesh)),this.projectiles.push(p)}let c=n.ejecta!=null?n.ejecta:n.projMass*n.speed;return t.applyImpulse(nn.copy(o).multiplyScalar(-c),a,"recoil"),t.kick.x+=n.kick*(.7+Math.random()*.6),t.kick.y+=n.kick*(Math.random()-.5)*.8,t.addAim(n.kick*(Math.random()-.5)*.5,n.kick*(.6+Math.random()*.5)),i.fx.muzzle(a,o,t.vel,n.kind==="pellets"),i.onShot(t,n),e.mag===0&&e.reserve>0&&setTimeout(()=>{t.alive&&t.weapon===e&&t.startReload()},250),!0}throwGrenade(t){if(!t.alive||t.grenades<=0||t.grenadeCool>0)return!1;t.grenades--,t.grenadeCool=1;let e=t.aimDir(new E),n=t.eye(new E).addScaledVector(e,.6),i=t.vel.clone().addScaledVector(e,ke.speed);t.applyImpulse(nn.copy(e).multiplyScalar(-ke.mass*ke.speed),n,"recoil");let s=new Ot(this.gGeo,this.gMat[t.team]);return s.position.copy(n),this.game.scene.add(s),this.grenades.push({pos:n,vel:i,owner:t,fuse:ke.fuse,mesh:s,spin:new E(Ct(-8,8),Ct(-8,8),Ct(-8,8))}),this.game.audio.play("throw"),t.spawnProtect=0,!0}melee(t){if(!t.alive||t.meleeCool>0)return!1;t.meleeCool=yn.cooldown,t.spawnProtect=0;let e=this.game,n=t.eye(new E),i=t.aimDir(new E),s=null,o=yn.range+.7;for(let l of e.soldiers){if(l===t||!l.alive)continue;let c=nn.subVectors(l.pos,n),h=c.length();h<o&&c.dot(i)/h>.55&&(s=l,o=h)}if(e.audio.play("melee",t.isPlayer?0:e.distToListener(t.pos)),s){let l=i.clone().multiplyScalar(yn.impulse),c=s.pos.clone().add(Li(i,nn).multiplyScalar(.4));return s.applyImpulse(l,c),e.rules.knockback&&s.angVel.add(Ni.set(Ct(-1,1),Ct(-1,1),Ct(-1,1)).normalize().multiplyScalar(yn.spin)),t.applyImpulse(l.clone().multiplyScalar(-.5),n,"recoil"),s.team!==t.team&&e.damage(s,yn.dmg,t,"hammer",c,"body"),e.fx.sparks(c,14,i.clone().negate(),5),!0}let a=e.world.raycast(n,i,yn.range);if(a){let l=i.clone().multiplyScalar(yn.impulse*.6);a.kind==="pod"?(a.obj.vel.addScaledVector(l,1/a.obj.mass),t.applyImpulse(l.negate().multiplyScalar(.5),n,"recoil")):t.applyImpulse(l.negate(),n,"recoil"),e.fx.sparks(n.clone().addScaledVector(i,a.t),10,a.n,4),e.audio.play("clank")}return!1}step(t){let e=this.game,n=e.world,i=this.projectiles;for(let s=i.length-1;s>=0;s--){let o=i[s];o.age+=t,o.kind==="rocket"&&o.age<o.def.burn&&o.vel.addScaledVector(o.dir,o.def.accel*t);let a=o.vel.length(),l=nn.copy(o.vel).divideScalar(a),c=a*t,h=c,u=null,d=null,p=null,g=null,x=n.raycast(o.pos,l,c);x&&(h=x.t,u=x.kind,d=x.obj,g=x.n.clone());for(let m of e.soldiers){if(!m.alive||m===o.owner&&(o.kind!=="rocket"||o.age<.4))continue;let f=Ni.subVectors(m.pos,o.pos),y=Math.max(0,Math.min(c,f.dot(l)));if(!(f.addScaledVector(l,-y).lengthSq()>1.8))for(let S of Vh){Xh.copy(S.p).applyQuaternion(m.quat).add(m.pos);let _=Bn(o.pos,l,Xh,S.r,h);_>=0&&_<h&&(h=_,u="soldier",d=m,p=S)}}if(u){let m=o.pos.clone().addScaledVector(l,h);this.onHit(o,m,l.clone(),u,d,p,g),this.removeProj(s);continue}o.pos.addScaledVector(o.vel,t),o.visOff&&o.visOff.multiplyScalar(Math.exp(-t*25)),o.age>3.5&&this.removeProj(s)}for(let s=this.grenades.length-1;s>=0;s--){let o=this.grenades[s];o.fuse-=t,o.pos.addScaledVector(o.vel,t),n.sphereContacts(o.pos,.12,(a,l)=>{o.pos.addScaledVector(a,l);let c=o.vel.dot(a);c<0&&(o.vel.addScaledVector(a,-(1+ke.restitution)*c),-c>2&&e.audio.play("bounce",e.distToListener(o.pos)))});for(let a of e.soldiers){if(!a.alive||a===o.owner&&o.fuse>ke.fuse-.3)continue;let l=nn.subVectors(o.pos,a.pos),c=l.length();if(c<.8&&c>1e-4){l.divideScalar(c);let h=Ni.subVectors(o.vel,a.vel).dot(l);h<0&&o.vel.addScaledVector(l,-1.6*h),o.pos.copy(a.pos).addScaledVector(l,.8)}}o.fuse<=0&&(this.explode(o.pos,o.owner,ke.radius,ke.dmg,ke.impulse,"grenade"),e.scene.remove(o.mesh),this.grenades.splice(s,1))}}removeProj(t){let e=this.projectiles[t];e.mesh&&this.game.scene.remove(e.mesh),this.projectiles.splice(t,1)}onHit(t,e,n,i,s,o,a){let l=this.game,c=t.def,h=c.projMass?c.projMass*c.speed:2;if(i==="soldier"){let u=s,p=nn.subVectors(t.vel,u.vel).clone().normalize().multiplyScalar(c.kind==="rocket"?60:h);if(u.applyImpulse(p,e),(u.team!==t.owner.team||u===t.owner)&&u.spawnProtect<=0){let g=c.dmg;o.part==="head"?g*=c.headMul:o.part==="leg"&&(g*=.75);let x=Ni.subVectors(e,u.pos).applyQuaternion(Wh.copy(u.quat).invert()),m=Gh.subVectors(x,o.p).normalize(),f=-1,y=.42;for(let S=0;S<4;S++){let _=x.distanceTo(Ze[S].pos);_<y&&(y=_,f=S)}o.part==="pack"&&f<0&&(f=Math.floor(Math.random()*4)),f>=0&&l.damageTower(u,f,g*(o.part==="pack"?.6:.9)),l.rules.breaches&&o.part!=="leg"&&Math.random()<.35&&u.leaks.length<3&&u.leaks.push({p:x.clone(),n:m.clone(),t:4+Math.random()*3}),l.damage(u,g,t.owner,c.id,e,o.part)}l.fx.suitHit(e,n.clone().negate(),u.vel),c.kind==="rocket"&&this.explode(e,t.owner,c.splash,c.splashDmg,140,c.id,u)}else if(i==="pod"&&s.vel.addScaledVector(n,(c.kind==="rocket"?60:h)/s.mass),c.kind==="rocket")this.explode(e,t.owner,c.splash,c.splashDmg,140,c.id);else{l.fx.impact(e,a||n.clone().negate());let u=l.distToListener(e);u<25&&l.audio.play("clank",u)}}explode(t,e,n,i,s,o,a=null){let l=this.game;l.fx.explosion(t,n*.35),l.audio.play("explosion",l.distToListener(t)),l.onExplosion(t,e);for(let c of l.soldiers){let h=c.pos.distanceTo(t);if(h>n||!l.world.los(t,c.pos,!0))continue;let u=1-h/n,d=nn.subVectors(c.pos,t);d.lengthSq()<1e-6&&d.set(0,1,0),d.normalize();let p=c.pos.clone().addScaledVector(d,-.4).add(Li(d,Ni).multiplyScalar(.35));c.applyImpulse(d.clone().multiplyScalar(s*u),p),!(!c.alive||c===a||c.spawnProtect>0)&&(c.team===e.team&&c!==e||(l.damage(c,i*u*(c===e?.6:1),e,o,p,"body"),Math.random()<u&&l.damageTower(c,Math.floor(Math.random()*4),25*u),l.rules.breaches&&Math.random()<.5*u&&c.leaks.length<3&&c.leaks.push({p:new E(Ct(-.2,.2),Ct(-.1,.4),Ct(-.15,.3)),n:new E().randomDirection(),t:5})))}for(let c of l.world.pods){let h=c.pos.distanceTo(t);h<n&&h>.001&&(c.vel.addScaledVector(nn.subVectors(c.pos,t).normalize(),s*(1-h/n)/c.mass),c.angVel.add(Ni.randomDirection().multiplyScalar(.8)))}}syncMeshes(t){for(let e of this.projectiles)if(e.mesh&&(e.mesh.position.copy(e.pos),e.mesh.lookAt(nn.copy(e.pos).add(e.vel)),e.age<e.def.burn)){let n=Ni.copy(e.vel).normalize().multiplyScalar(-.15).add(e.pos);this.game.fx.add.spawn(n,e.vel.clone().multiplyScalar(.6),Ce.fire,.25,.06),this.game.fx.alpha.spawn(n,e.vel.clone().multiplyScalar(.2),Ce.smoke,.2,.7,{grow:3,alpha:.3})}for(let e of this.grenades){e.mesh.position.copy(e.pos),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t;let n=e.fuse%.5<.12||e.fuse<.6;e.mesh.material.emissiveIntensity=n?2.5:.5}}tracerList(){let t=this._tl||(this._tl=[]);t.length=0;for(let e of this.projectiles){if(e.kind==="rocket")continue;let n=e._vp||(e._vp=new E);n.copy(e.pos).add(e.visOff),t.push({pos:n,vel:e.vel,color:e.color,tail:Math.min(e.tail,e.age+.004)})}return t}};var ai=new E,Ol=new E,bs=new E,pg=new pe,Mo=r=>"#"+r.toString(16).padStart(6,"0"),Es=Mo(Sn[0]),Bl=Mo(Sn[1]),Fi="#9fe8ff",We="#ffcc4d",Ae="#ff4b3a",li="#7dff9a",So=class{constructor(t,e){this.game=t,this.cv=e,this.g=e.getContext("2d"),this.msgs=[],this.feed=[],this.hitT=0,this.hitHead=!1,this.hitKill=!1,this.dmgDirs=[],this.collWarnT=0,this.impactT=0,this.impactSev=0,this.cracks=[],this.font="'Rajdhani','Bahnschrift','Segoe UI',Arial,sans-serif",this.resize()}resize(){let t=Math.min(2,window.devicePixelRatio||1);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=this.W*t,this.cv.height=this.H*t,this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}message(t,e=We,n=2.2,i=!1){this.msgs=this.msgs.filter(s=>s.text!==t),this.msgs.push({text:t,color:e,t:n,dur:n,big:i}),this.msgs.length>4&&this.msgs.shift()}kill(t,e,n,i){this.feed.unshift({killer:t,victim:e,cause:n,head:i,t:6}),this.feed.length>6&&this.feed.pop()}hit(t,e){this.hitT=.22,this.hitHead=t,this.hitKill=e}impact(t){if(this.impactT=1,this.impactSev=Math.min(1,t),t>.25){let e=this.W*(.25+Math.random()*.5),n=this.H*(.25+Math.random()*.5),i=[],s=5+Math.floor(t*6);for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=e,c=n,h=[[l,c]],u=40+Math.random()*160*t;for(let d=0;d<5;d++)a+=(Math.random()-.5)*.9,l+=Math.cos(a)*u/5,c+=Math.sin(a)*u/5,h.push([l,c]);i.push(h)}this.cracks.push({lines:i,t:2.5}),this.cracks.length>3&&this.cracks.shift()}}drawImpact(t){let e=this.g;this.impactT>0&&(this.impactT-=t*2.5,e.fillStyle=`rgba(255,${Math.round(90-60*this.impactSev)},40,${Math.max(0,this.impactT)*(.15+.35*this.impactSev)})`,e.fillRect(0,0,this.W,this.H));for(let n of this.cracks){n.t-=t,e.strokeStyle=`rgba(230,245,255,${Math.min(1,n.t/1.2)*.75})`,e.lineWidth=1.2;for(let i of n.lines){e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let[s,o]of i.slice(1))e.lineTo(s,o);e.stroke()}}this.cracks=this.cracks.filter(n=>n.t>0),e.lineWidth=1.5}damageFrom(t){t&&this.dmgDirs.push({pos:t.clone(),t:1.2})}project(t,e){let n=this.game.camera;bs.copy(t).applyMatrix4(n.matrixWorldInverse);let i=bs.z>0;return bs.applyMatrix4(n.projectionMatrix),e.x=(bs.x*.5+.5)*this.W,e.y=(-bs.y*.5+.5)*this.H,e.behind=i,e.on=!i&&e.x>-20&&e.x<this.W+20&&e.y>-20&&e.y<this.H+20,e}text(t,e,n,i=14,s=Fi,o="left",a=600){let l=this.g;l.font=`${a} ${i}px ${this.font}`,l.textAlign=o,l.fillStyle=s,l.fillText(t,e,n)}draw(t){let e=this.g,n=this.game,i=n.player;if(e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.W,this.H),n.state==="menu")return;let s=this.W,o=this.H,a=s/2,l=o/2;e.lineWidth=1.5,e.textBaseline="middle",this.drawScore(),this.drawFeed(t),i&&(i.alive?(n.showGrid||i.angVel.length()>1.4,this.drawMarkers(),this.drawVelocityMarkers(),this.drawCrosshair(a,l,t),this.drawRates(a,l),this.drawTargetInfo(a,l),this.drawCollision(a,l,t),this.drawStatus(),this.drawSuit(),this.drawWeapon(),this.drawDamage(a,l,t),this.drawHints(a,l),this.drawBounds(a,l),this.drawImpact(t)):this.drawDeath(a,l),this.drawMessages(a,t))}drawScore(){let t=this.g,e=this.game,n=this.W/2,i=e.teamScore;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(n-150,10,300,40),t.fillStyle=Es,t.fillRect(n-150,10,4,40),t.fillStyle=Bl,t.fillRect(n+146,10,4,40),this.text(String(i[0]),n-60,31,28,Es,"center",700),this.text(String(i[1]),n+60,31,28,Bl,"center",700);let s=Math.max(0,e.timeLimit-e.matchTime),o=Math.floor(s/60),a=Math.floor(s%60);this.text(`${o}:${a.toString().padStart(2,"0")}`,n,25,18,"#e9eef2","center",700),this.text(`FIRST TO ${e.scoreLimit}`,n,41,10,"#93a0ab","center");let l=i[0]/e.scoreLimit,c=i[1]/e.scoreLimit;t.fillStyle=Es,t.fillRect(n-146,50,140*l,3),t.fillStyle=Bl,t.fillRect(n+6+140*(1-c),50,140*c,3)}drawFeed(t){let e=this.g,n=22;for(let i of this.feed){i.t-=t;let s=Kt(i.t,0,1);e.globalAlpha=s;let o=i.killer?Mo(Sn[i.killer.team]):"#cccccc",a=Mo(Sn[i.victim.team]),l=this.W-16,c=`[${i.cause.toUpperCase()}${i.head?" \u29BF":""}]`;e.font=`600 14px ${this.font}`;let h=e.measureText(i.victim.name).width,u=e.measureText(c).width;e.fillStyle="rgba(8,12,16,0.5)";let d=i.killer?e.measureText(i.killer.name).width:0;e.fillRect(l-h-u-d-24,n-10,h+u+d+30,20),this.text(i.victim.name,l,n,14,a,"right"),this.text(c,l-h-8,n,12,"#c9d3dc","right"),i.killer&&this.text(i.killer.name,l-h-u-16,n,14,o,"right"),n+=22}this.feed=this.feed.filter(i=>i.t>0),e.globalAlpha=1}drawMarkers(){let t=this.game,e=t.player,n=this.g,i=e.eye(new E),s=e.weapon.def,o={};for(let a of t.soldiers){if(a===e||!a.alive)continue;let l=ai.set(0,1,0).applyQuaternion(a.quat).add(a.pos);if(this.project(l,o),!o.on)continue;let c=a.pos.distanceTo(i);if(a.team===e.team){n.fillStyle=Es,n.beginPath(),n.moveTo(o.x-6,o.y-10),n.lineTo(o.x+6,o.y-10),n.lineTo(o.x,o.y-2),n.fill(),c<40&&this.text(a.name,o.x,o.y-18,11,Es,"center");continue}if(!t.world.los(i,a.pos))continue;let h=this.project(a.pos,{}),u=ai.subVectors(a.pos,i),d=Ol.subVectors(a.vel,e.vel),p=s.kind==="rocket"?co(u,d,s.speed,s.accel,s.burn):Ys(u,d,s.speed);if(p>0&&d.length()>.15){let x=this.project(bs.copy(a.pos).addScaledVector(d,p),{}),m=Math.hypot(x.x-h.x,x.y-h.y),f=Kt((m-6)/45,0,1)*.7;if(x.on&&f>.04){n.strokeStyle=`rgba(255,110,90,${f})`,n.lineWidth=1.2;let y=4;n.beginPath(),n.moveTo(x.x,x.y-y),n.lineTo(x.x+y,x.y),n.lineTo(x.x,x.y+y),n.lineTo(x.x-y,x.y),n.closePath(),n.stroke(),n.lineWidth=1.5}}let g=Kt(500/c,8,60);c<120&&this.text(`${c.toFixed(0)}m`,h.x+g*.6+4,h.y-g*.6,10,"rgba(255,120,100,0.75)")}}drawVelocityMarkers(){let t=this.game.player,e=this.g,n=t.refTarget&&t.refTarget.alive!==!1?t.refTarget.vel:null,i=Ol.copy(t.vel);n&&i.sub(n);let s=i.length();if(s<.05)return;let o=t.eye(new E),a=this.project(ai.copy(i).divideScalar(s).multiplyScalar(200).add(o),{}),l=this.project(ai.copy(i).divideScalar(-s).multiplyScalar(200).add(o),{}),c=li;a.on&&(e.strokeStyle=c,e.lineWidth=2,e.beginPath(),e.arc(a.x,a.y,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(a.x,a.y-8),e.lineTo(a.x,a.y-15),e.moveTo(a.x-8,a.y),e.lineTo(a.x-15,a.y),e.moveTo(a.x+8,a.y),e.lineTo(a.x+15,a.y),e.stroke(),e.fillStyle=c,e.beginPath(),e.arc(a.x,a.y,2,0,Math.PI*2),e.fill(),this.text(`${s.toFixed(1)} m/s`,a.x+18,a.y+12,12,c)),l.on&&(e.strokeStyle="#d8b84a",e.lineWidth=2,e.beginPath(),e.arc(l.x,l.y,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(l.x-5,l.y-5),e.lineTo(l.x+5,l.y+5),e.moveTo(l.x+5,l.y-5),e.lineTo(l.x-5,l.y+5),e.stroke(),e.beginPath(),e.moveTo(l.x,l.y-8),e.lineTo(l.x,l.y-15),e.stroke()),e.lineWidth=1.5}drawBounds(t,e){let n=this.game,i=n.player,s=n.world;if(s.enclosed)return;let o=s.outside(i.pos),a=Math.max(...[0,1,2].map(l=>Math.abs(i.pos.getComponent(l))-s.bounds.max[l]+15));if(o>0){let l=Math.max(0,5-i.oobT);this.text("LEAVING COMBAT AREA",t,e-150,24,n.time*3%1<.6?Ae:We,"center",700),this.text(l>0?`Suit telemetry lost in ${l.toFixed(1)} s \u2013 turn back`:"SUIT FAILING \u2013 RETURN TO THE COMBAT AREA",t,e-126,13,Ae,"center")}else a>0&&this.text("approaching combat-area edge",t,e-150,12,We,"center")}drawCrosshair(t,e,n){let i=this.g,s=this.game.player,a=this.aimInfo&&this.aimInfo.soldier&&this.aimInfo.soldier.team!==s.team?Ae:"#e9f6ff",l=s.weapon.def.spread,c=4+Math.tan(l)*this.H/(2*Math.tan(this.game.camera.fov*Math.PI/360))+Math.abs(s.kick.x)*400;if(i.strokeStyle=a,i.lineWidth=2,i.beginPath(),i.moveTo(t-c-8,e),i.lineTo(t-c,e),i.moveTo(t+c,e),i.lineTo(t+c+8,e),i.moveTo(t,e+c),i.lineTo(t,e+c+8),i.moveTo(t,e-c),i.lineTo(t,e-c-8),i.stroke(),i.fillStyle=a,i.fillRect(t-1,e-1,2,2),this.hitT>0){this.hitT-=n,i.strokeStyle=this.hitKill?Ae:this.hitHead?We:"#ffffff",i.lineWidth=this.hitKill?3:2;let h=6,u=13;i.beginPath(),i.moveTo(t-h,e-h),i.lineTo(t-u,e-u),i.moveTo(t+h,e-h),i.lineTo(t+u,e-u),i.moveTo(t-h,e+h),i.lineTo(t-u,e+u),i.moveTo(t+h,e+h),i.lineTo(t+u,e+u),i.stroke()}i.lineWidth=1.5}drawRates(t,e){let n=this.g,i=this.game.player.angVel,s=58,o=2.5,a=(l,c,h,u)=>{let d=Kt(c/o,-1,1)*(Math.PI/3);n.strokeStyle="rgba(159,232,255,0.15)",n.lineWidth=3,n.beginPath(),n.arc(t,e,s,l-Math.PI/3,l+Math.PI/3),n.stroke(),Math.abs(c)>.02&&(n.strokeStyle=Math.abs(c)>1.6?We:h,n.lineWidth=3,n.beginPath(),n.arc(t,e,s,Math.min(l,l+d),Math.max(l,l+d)),n.stroke()),n.lineWidth=1;let p=t+Math.cos(l)*(s+10),g=e+Math.sin(l)*(s+10);this.text(u,p,g,9,"rgba(159,232,255,0.6)","center")};a(-Math.PI/2,-i.y,Fi,"Y"),a(0,-i.x,Fi,"P"),a(Math.PI/2,i.z,Fi,"R")}computeAimInfo(){let t=this.game,e=t.player,n=e.eye(new E),i=e.aimDir(new E),s=t.world.raycast(n,i,400),o=s?s.t:400,a=null;for(let h of t.soldiers){if(h===e||!h.alive)continue;let u=Bn(n,i,h.pos,.75,o);u>=0&&u<o&&(o=u,a=h)}let l={dist:o,soldier:a,kind:a?"soldier":s?s.kind:null,obj:a||(s?s.obj:null)},c=ai.set(0,0,0);return a?c=a.vel:s&&s.kind==="pod"&&(c=s.obj.vel),l.vRel=Ol.subVectors(e.vel,c).clone(),l.closing=l.vRel.dot(i),this.aimInfo=l,l}drawTargetInfo(t,e){let n=this.computeAimInfo(),i=this.game.player,s=e+80;if(n.dist>=399)return;let o=n.soldier?n.soldier.name:n.kind==="pod"?"CARGO POD":"HULL",a=n.soldier?n.soldier.team===i.team?Es:Ae:Fi;this.text(`${o}  ${n.dist.toFixed(1)} m`,t+70,e+34,12,a);let l=n.closing;this.text(`Vrel ${n.vRel.length().toFixed(2)}  ${l>=0?"CLOSING":"OPENING"} ${Math.abs(l).toFixed(2)} m/s`,t+70,e+50,11,"rgba(159,232,255,0.8)"),i.refTarget&&this.text(`REF LOCK: ${i.refTarget.name||"CARGO POD"}`,t+70,e+64,10,We)}drawCollision(t,e,n){let i=this.game,s=i.player;if(s.grab)return;let o=s.vel.length();if(o<1.5)return;let a=ai.copy(s.vel).divideScalar(o),l=i.world.raycast(s.pos,a,o*6,!1);if(!l)return;let c=Math.max(0,l.t-Mn),h=-s.vel.dot(l.n);if(h<1.2)return;let u=c/h;if(u>4)return;let d=h>oi,p=d&&i.time*4%1<.5,g=d?Ae:We;p||this.text(`COLLISION ${u.toFixed(1)} s`,t,e-110,22,g,"center",700),this.text(d?`IMPACT ${h.toFixed(1)} m/s \u2013 BRAKE (${i.keyLabel("brake")}) OR GRAB`:`impact ${h.toFixed(1)} m/s`,t,e-88,12,g,"center"),this.collWarnT-=n,d&&this.collWarnT<=0&&(i.audio.play("warn"),this.collWarnT=.5)}bar(t,e,n,i,s,o,a="rgba(255,255,255,0.08)"){let l=this.g;l.fillStyle=a,l.fillRect(t,e,n,i),l.fillStyle=o,l.fillRect(t,e,n*Kt(s,0,1),i)}drawStatus(){let t=this.g,e=this.game.player,n=this.H,i=20,s=n-150;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(i-8,s-18,250,150);let o=e.dv,a=e.gas/ri;this.text("\u0394v",i,s,13,"#93a0ab"),this.text(this.game.rules.infiniteGas?"\u221E":`${o.toFixed(1)} m/s`,i+26,s,22,a<.2?Ae:"#e9eef2","left",700),this.text(`N\u2082 ${e.gas.toFixed(2)} kg`,i+150,s,12,"#93a0ab"),this.bar(i,s+14,230,5,a,a<.2?Ae:Fi),this.text("HP",i,s+36,13,"#93a0ab"),this.text(`${Math.ceil(e.health)}`,i+26,s+36,20,e.health<35?Ae:"#e9eef2","left",700),this.bar(i+70,s+32,160,6,e.health/100,e.health<35?Ae:li),this.text("O\u2082",i,s+58,13,"#93a0ab"),this.text(`${Math.ceil(e.o2)}%`,i+26,s+58,16,e.o2<30?Ae:"#e9eef2","left",700),this.bar(i+70,s+55,160,5,e.o2/100,e.leaks.length?We:"#8fb8ff"),e.leaks.length&&this.text(`SUIT BREACH \xD7${e.leaks.length} \u2013 VENTING`,i+70,s+68,10,this.game.time*3%1<.6?Ae:We),this.text(`RCS: ${Ss[e.mode]}`,i,s+88,14,We,"left",700),this.text(`[${this.game.keyLabel("mode")}] cycle`,i+140,s+88,10,"#93a0ab");let l=e.grab?e.grab.kind==="pod"?"HOLDING POD":"ANCHORED":e.ctrl.brake?"MATCHING VEL":e.ctrl.killRot?"KILL ROTATION":"FREE FLIGHT";this.text(l,i,s+108,12,e.grab?li:Fi);let c=e.throttle.reduce((h,u)=>h+u,0);c>.05&&this.text(`RCS FIRING ${c.toFixed(1)}`,i+120,s+108,11,"#cfe8ff")}drawSuit(){let t=this.g,e=this.game.player,n=300,i=this.H-80,s=55;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(n-62,i-70,124,140),this.text("SUIT",n,i-58,10,"#93a0ab","center"),t.strokeStyle="rgba(159,232,255,0.5)",t.lineWidth=1.5,t.strokeRect(n-14,i-30,28,40),t.beginPath(),t.arc(n,i-40,9,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(n-8,i+10),t.lineTo(n-10,i+42),t.moveTo(n+8,i+10),t.lineTo(n+10,i+42),t.stroke(),Ze.forEach((o,a)=>{let l=e.towers[a],c=n+o.pos.x*s*1.6,h=i-10-o.pos.y*s*.9,u=l.hp/30,d=l.dead?"#555":u>.6?li:u>.3?We:Ae;t.fillStyle=d,t.fillRect(c-6,h-6,12,12),l.dead&&(t.strokeStyle=Ae,t.beginPath(),t.moveTo(c-7,h-7),t.lineTo(c+7,h+7),t.moveTo(c+7,h-7),t.lineTo(c-7,h+7),t.stroke(),t.strokeStyle="rgba(159,232,255,0.5)");let p=0;for(let g=0;g<6;g++)p+=e.throttle[a*6+g];p>.05&&(t.strokeStyle="#cfe8ff",t.beginPath(),t.arc(c,h,9+p*2,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(159,232,255,0.5)")});for(let o of e.leaks){let a=n+o.p.x*s*1.6,l=i-10-o.p.y*s*.9;t.fillStyle=this.game.time*5%1<.5?Ae:"#fff",t.beginPath(),t.arc(a,l,3,0,Math.PI*2),t.fill()}t.lineWidth=1.5}drawWeapon(){let t=this.g,e=this.game.player,n=this.W,i=this.H,s=e.weapon,o=n-20,a=i-110;t.fillStyle="rgba(8,12,16,0.55)",t.fillRect(o-240,a-50,248,148),this.text(s.def.name,o,a,14,"#e9eef2","right",700),this.text(`${s.mag}`,o-60,a+34,38,s.mag===0?Ae:"#e9eef2","right",700),this.text(`/ ${s.reserve}`,o,a+38,18,"#93a0ab","right"),s.reloadT>0&&(this.text("RELOADING",o-120,a+64,12,We,"center"),this.bar(o-200,a+74,160,3,1-s.reloadT/s.def.reload,We)),this.text(`GRENADES ${"\u25CF".repeat(e.grenades)}${"\u25CB".repeat(Math.max(0,2-e.grenades))}`,o,a+88,12,"#93a0ab","right"),e.weapons.map((c,h)=>`${h+1} ${c.def.short}`).forEach((c,h)=>this.text(c,o-232+h*76,a-36,12,h===e.cur?We:"#8a96a0","left",700))}drawDamage(t,e,n){let i=this.g,s=this.game.player,o=pg.copy(this.game.camera.quaternion).invert();for(let a of this.dmgDirs){a.t-=n;let l=ai.subVectors(a.pos,s.pos).applyQuaternion(o),c=Math.atan2(l.z-l.y,l.x);i.strokeStyle=`rgba(255,60,40,${Kt(a.t,0,1)*.9})`,i.lineWidth=5,i.beginPath(),i.arc(t,e,120,c-.25,c+.25),i.stroke()}if(this.dmgDirs=this.dmgDirs.filter(a=>a.t>0),i.lineWidth=1.5,s.health<35){let a=i.createRadialGradient(t,e,Math.min(t,e)*.6,t,e,Math.max(t,e)*1.2);a.addColorStop(0,"rgba(120,0,0,0)"),a.addColorStop(1,`rgba(140,0,0,${.5*(1-s.health/35)})`),i.fillStyle=a,i.fillRect(0,0,this.W,this.H)}}drawHints(t,e){let n=this.game,i=n.player;if(i.grab){let s=i.pushCharge;this.text(s>0?`PUSH ${(2+5*s).toFixed(1)} m/s`:`HOLD ${n.keyLabel("up")}: PUSH OFF TOWARDS AIM   ${n.keyLabel("grab")}: RELEASE`,t,e+120,13,li,"center",700),i.grab.kind==="pod"&&!s&&this.text(`MOVE KEYS: HAUL POD (${(i.mass+i.grab.obj.mass).toFixed(0)} kg combined)`,t,e+138,11,li,"center"),s>0&&this.bar(t-80,e+132,160,4,s,li)}else{let s=n.world.nearestSurface(i.pos,Mn+.85);if(s){let o=s.kind==="pod"?s.obj.vel:null,a=o?ai.subVectors(i.vel,o).length():i.vel.length();this.text(a>4.5?`TOO FAST TO GRAB (${a.toFixed(1)} m/s)`:`[${n.keyLabel("grab")}] GRAB`,t,e+120,13,a>4.5?Ae:li,"center",700)}}}drawMessages(t,e){let n=this.H*.3;for(let i of this.msgs)i.t-=e,this.g.globalAlpha=Kt(i.t/.4,0,1),this.text(i.text,t,n,i.big?30:18,i.color,"center",700),n+=i.big?38:26;this.g.globalAlpha=1,this.msgs=this.msgs.filter(i=>i.t>0)}drawDeath(t,e){let n=this.game,i=n.player;this.g.fillStyle="rgba(40,0,0,0.25)",this.g.fillRect(0,0,this.W,this.H),this.text("ELIMINATED",t,e-40,40,Ae,"center",700),i.killedBy?this.text(`by ${i.killedBy.name} (${i.killCause})`,t,e,18,"#e9eef2","center"):this.text(`(${i.killCause||"environment"})`,t,e,18,"#e9eef2","center"),this.text(`Redeploying in ${Math.max(0,i.respawnT).toFixed(1)} s`,t,e+34,16,"#93a0ab","center")}};var qh={easy:{reaction:.65,err0:11,settle:.85,floor:2.2,track:130,velNoise:.45,velLag:.8,fov:55,head:0,jink:.3,grenade:.015,dodge:.05,range:110,burstPause:.6},normal:{reaction:.4,err0:7,settle:.55,floor:1.2,track:220,velNoise:.25,velLag:.45,fov:65,head:.03,jink:.6,grenade:.05,dodge:.3},hard:{reaction:.25,err0:4.5,settle:.34,floor:.6,track:360,velNoise:.12,velLag:.3,fov:78,head:.15,jink:1,grenade:.1,dodge:.65},elite:{reaction:.17,err0:3,settle:.24,floor:.33,track:520,velNoise:.06,velLag:.18,fov:85,head:.35,jink:1.2,grenade:.14,dodge:.9}},Yh=["anchor","rusher","flanker","anchor","flanker","rusher"],mg={rifle:28,shotgun:6,gyrojet:34},be=new E,Je=new E,bn=new E,gg=new pe,kl=new E(0,.2,0),xg=new E(0,.6,0),bo=class{constructor(t,e,n,i){this.game=t,this.s=e,e.isBot=!0,e.bot=this,this.skill=qh[n]||qh.hard,this.role=Yh[i%Yh.length],this.known=new Map,this.phase=Math.random(),this.reset()}reset(){this.state="patrol",this.target=null,this.acquireT=0,this.err=new Et,this.path=null,this.goal=null,this.goalNode=-1,this.goalT=0,this.nextPercept=0,this.nextThink=0,this.nextPull=0,this.jink=new E,this.jinkT=0,this.burst=0,this.burstPause=0,this.combatPosT=0,this.lastPos=new E,this.stuckT=0,this.velEst=new E,this.aimHead=!1,this.coast=!1,this.lookDir=new E(1,0,0),this.lookT=0,this.hitsRecent=0,this.retreatUntil=0,this.waitUntil=0,this.known.clear()}onSpawn(){this.reset(),this.lastPos.copy(this.s.pos),this.lookDir.set(this.s.team===0?1:-1,0,0)}get eye(){return this.s.eye(this._eye||(this._eye=new E))}perceive(){let t=this.game,e=this.s,n=t.time,i=this.eye,s=e.aimDir(bn),o=Math.cos(this.skill.fov*vn);for(let a of t.soldiers){if(a.team===e.team)continue;let l=this.known.get(a.id);if(!a.alive){l&&this.known.delete(a.id);continue}let c=be.subVectors(a.pos,i),h=c.length(),u=!1;h<(this.skill.range||(t.world.enclosed?170:240))&&((c.dot(s)/h>o||h<7)&&t.world.los(i,Je.copy(kl).applyQuaternion(a.quat).add(a.pos))&&(u=!0),!u&&h<60&&c.dot(s)/h>o-.25&&a.lastThrustT>n-.2&&t.world.los(i,a.pos)&&(u=!0)),u?(l||(l={pos:new E,vel:new E,t:0,visible:!1,first:n,e:a},this.known.set(a.id,l)),l.visible||(l.first=n),l.visible=!0,l.pos.copy(a.pos),l.vel.copy(a.vel),l.t=n,t.reportIntel(e.team,a,e)):l&&(l.visible=!1)}for(let[a,l]of t.intel[e.team]){if(n-l.t>6)continue;let c=this.known.get(a);c?!c.visible&&l.t>c.t&&(c.pos.copy(l.pos),c.vel.copy(l.vel),c.t=l.t):this.known.set(a,{pos:l.pos.clone(),vel:l.vel.clone(),t:l.t,visible:!1,first:n,e:l.e})}for(let[a,l]of this.known)(n-l.t>12||!l.e.alive)&&this.known.delete(a)}hear(t,e,n){let i=this.s;if(!i.alive||t.team===i.team)return;let s=i.pos.distanceTo(e);if(s>n)return;let o=this.known.get(t.id),a=be.randomDirection().multiplyScalar(s*.06);o||(o={pos:new E,vel:new E,t:0,visible:!1,first:this.game.time,e:t},this.known.set(t.id,o)),o.visible||(o.pos.copy(e).add(a),o.vel.copy(t.vel),o.t=this.game.time)}onDamaged(t){if(this.hitsRecent+=1,!t||t===this.s)return;let e=this.known.get(t.id);e||(e={pos:t.pos.clone(),vel:t.vel.clone(),t:this.game.time,visible:!1,first:this.game.time,e:t},this.known.set(t.id,e)),e.visible||(e.pos.copy(t.pos),e.vel.copy(t.vel),e.t=this.game.time),this.s.health<40&&this.game.time>this.retreatUntil&&(this.state="retreat",this.retreatUntil=this.game.time+4,this.goal=null,this.path=null)}chooseTarget(){let t=this.s,e=this.eye,n=t.aimDir(bn),i=null,s=1/0;for(let o of this.known.values()){if(!o.visible)continue;let a=o.e,l=be.subVectors(a.pos,e),c=l.length(),h=Math.acos(Kt(l.dot(n)/c,-1,1))/vn,u=c+h*.6,d=a.aimDir(Je);-l.dot(d)/c>.97&&(u-=20),u-=(100-a.health)*.12,a===this.target&&(u-=15),u<s&&(s=u,i=a)}if(i!==this.target){let o=this.target;if(this.target=i,i){let a=be.subVectors(i.pos,e).normalize(),l=Math.acos(Kt(a.dot(n),-1,1))/vn,c=this.known.get(i.id),h=!o&&this.game.time-c.first<.3;this.acquireT=this.game.time+this.skill.reaction*(h?1:.55)*Ct(.8,1.25);let u=this.skill.err0*vn*(.6+Math.min(1.5,l/60)),d=Math.random()*Math.PI*2;this.err.set(Math.cos(d)*u,Math.sin(d)*u),this.velEst.copy(i.vel),this.aimHead=Math.random()<this.skill.head}}}think(){let t=this.game,e=this.s,n=t.time;this.chooseTarget();let i=e.gas/ri,s=this.target,o=this.state;if(s)this.state==="retreat"&&n<this.retreatUntil||(e.health<35&&s.health>35&&n>this.retreatUntil+3?(this.state="retreat",this.retreatUntil=n+4):this.state="engage");else{let a=null;for(let l of this.known.values())(!a||l.t>a.t)&&(a=l);i<.14?this.state="refuel":this.state==="refuel"&&i<.55&&!a?this.state="refuel":a&&n-a.t<8?(this.state="hunt",this.huntK=a):this.state="patrol"}o!==this.state&&(this.goal=null,this.path=null,this.coast=!1),this.manageWeapons(s),(!this.goal||n>this.goalT)&&this.planGoal(),this.hitsRecent*=.8,e.pos.distanceTo(this.lastPos)<.8&&!e.grab&&this.goal&&e.pos.distanceTo(this.goal)>3?(this.stuckT+=.3,this.stuckT>3&&(this.goal=null,this.path=null,this.stuckT=0,this.state="patrol")):this.stuckT=0,this.lastPos.copy(e.pos)}manageWeapons(t){let e=this.s,n=e.weapon,i=t?t.pos.distanceTo(e.pos):1/0,s=e.weapons[1],o=e.weapons[2],a=e.weapons[0],l=e.cur;if(t){let c=be.subVectors(t.vel,e.vel).length();i<9&&(s.mag>0||s.reserve>0)?l=1:i>14&&i<70&&(c<1.8||t.grab)&&o.mag>0&&Math.random()<.35?l=2:(e.cur===2&&(o.mag===0||c>3)||e.cur===1&&i>14)&&(l=0),l===0&&a.mag===0&&a.reserve===0&&(l=1)}else{l=0;for(let c of e.weapons)c===n&&c.mag<c.def.mag*.6&&e.startReload()}l!==e.cur&&e.switchTo(l),e.weapon.mag===0&&(t&&i<12&&e.cur!==1&&s.mag>0?e.switchTo(1):e.startReload())}planGoal(){let t=this.game,e=this.s,n=t.world,i=t.time;this.goalT=i+3+Math.random()*2;let s=-1;if(this.state==="engage"&&this.target?s=this.pickCombatNode(this.target):this.state==="retreat"?s=this.pickCoverNode(16,!0):this.state==="refuel"?(s=this.pickCoverNode(25,!0),this.goalT=i+8):this.state==="hunt"&&this.huntK?s=this.pickHuntNode(this.huntK.pos):s=this.pickPatrolNode(),s<0)return;this.goalNode=s,this.goal=n.nav[s].pos.clone();let o=this.threatPositions();this.path=n.findPath(e.pos,s,o.length&&this.state!=="engage"?a=>this.exposure(a.pos,o)*6:null),this.coast=!1}threatPositions(){let t=[];for(let e of this.known.values())this.game.time-e.t<6&&t.push(e.pos);return t}exposure(t,e){let n=0;for(let i of e)i.distanceToSquared(t)<120*120&&this.game.world.los(t,i,!0)&&n++;return n}candidates(t,e,n=40){let i=[];this.game.world.forNear(t,e,s=>{let o=this.game.world.nav[s];o.pos.distanceToSquared(t)<e*e&&i.push(o)});for(let s=i.length-1;s>0;s--){let o=Math.random()*(s+1)|0;[i[s],i[o]]=[i[o],i[s]]}return i.length=Math.min(i.length,n),i}teammatePenalty(t){let e=0;for(let n of this.game.soldiers){if(n===this.s||n.team!==this.s.team||!n.alive)continue;let i=n.pos.distanceTo(t);i<7&&(e+=(7-i)*1.5),n.bot&&n.bot.goal&&n.bot.goal.distanceTo(t)<5&&(e+=6)}return e}pickCombatNode(t){let e=this.s,n=this.game.world,i=(mg[e.weapon.def.id]||28)*(this.role==="rusher"?.6:this.role==="anchor"?1.2:1),s=bn.copy(kl).applyQuaternion(t.quat).add(t.pos).clone(),o=this.threatPositions(),a=-1,l=1/0;for(let c of this.candidates(e.pos,20,36)){let h=c.pos.distanceTo(s);if(h<4||!n.los(c.pos,s,!0))continue;let u=Math.abs(h-i)*.5+c.pos.distanceTo(e.pos)*.35;if(c.surf&&(u-=7),u+=(this.exposure(c.pos,o)-1)*8,u+=this.teammatePenalty(c.pos),this.role==="flanker"){let d=be.subVectors(c.pos,s).normalize();for(let p of this.game.soldiers)if(p!==e&&p.team===e.team&&p.alive){let g=Je.subVectors(p.pos,s).normalize();u+=Math.max(0,d.dot(g))*4}}u+=Math.random()*3,u<l&&(l=u,a=c.i)}return a}pickCoverNode(t,e){let n=this.s,i=this.game.world,s=this.threatPositions(),o=-1,a=1/0;for(let l of this.candidates(n.pos,t,40)){let c=l.pos.distanceTo(n.pos)*.4+this.exposure(l.pos,s)*25;e&&!l.surf&&(c+=12),c+=this.teammatePenalty(l.pos)*.5+Math.random()*2,c<a&&(a=c,o=l.i)}return o}pickHuntNode(t){let e=this.s,n=this.game.world,i=-1,s=1/0;for(let o of this.candidates(t,26,40)){let a=o.pos.distanceTo(t);if(a<6||!n.los(o.pos,t,!0))continue;let l=o.pos.distanceTo(e.pos)*.5+Math.abs(a-16)*.4;if(o.surf&&(l-=3),l+=this.teammatePenalty(o.pos),this.role==="flanker"){let c=be.subVectors(o.pos,t).normalize(),h=Je.subVectors(e.pos,t).normalize();l-=(1-c.dot(h))*6}l+=Math.random()*4,l<s&&(s=l,i=o.i)}return i>=0?i:n.nearestNode(t,!1)}pickPatrolNode(){let t=this.s,e=this.game.world,n=t.team===0?1:-1,i=e.def.bounds,s=i[0]/72,o=i[1]/36,a,l=Math.random();this.role==="rusher"?a=n*Ct(5,45)*s:this.role==="anchor"?a=n*Ct(-25,20)*s:a=n*Ct(-10,40)*s;let c=new E(a,Ct(-28,28)*o,Ct(-28,28)*o);l<.15&&c.set(Ct(-12,12)*s,Ct(-20,20)*o,Ct(-20,20)*o);let h=-1,u=1/0;return e.forNear(c,12*Math.max(1,s*.8),d=>{let p=e.nav[d],g=p.pos.distanceTo(c)-(p.surf?6:0);g<u&&(u=g,h=d)}),h>=0?h:e.nearestNode(c,!1)}update(t){let e=this.s,n=this.game,i=n.time;e.alive&&(i>=this.nextPercept&&(this.nextPercept=i+.1,this.perceive()),i>=this.nextThink&&(this.nextThink=i+.3,this.think()),this.target&&(!this.target.alive||!this.known.get(this.target.id)||!this.known.get(this.target.id).visible)&&(this.target=null),this._dt=t,this.steer(t),this.aim(t),this.actions(t))}steer(t){let e=this.s,n=this.game,i=n.world,s=n.time,o=e.ctrl;o.move.set(0,0,0),o.roll=0,o.brake=!1,o.killRot=!1;let a=e.gas/ri;if(e.grab){if(this.state==="engage"&&this.target&&this.hitsRecent<1.5&&this.goal&&e.pos.distanceTo(this.goal)<3||this.state==="refuel"&&a<.6||s<this.waitUntil||!this.path||!this.path.length)return;{let f=0;for(let T=Math.min(this.path.length-1,4);T>=0;T--)if(i.segmentClear(e.pos,this.path[T],.6)){f=T;break}let y=this.path[f],S=be.subVectors(y,e.pos),_=S.length();S.normalize();let C=e.grab.normal||Je.set(0,0,0);if(S.dot(C)>-.5){this.path.splice(0,f),n.pushOff(e,S,Kt(2+_*.25,3,6.5)),this.coast=!0;return}}n.releaseGrab(e)}let l=null,c=!1;this.path&&this.path.length?(s>this.nextPull&&this.path.length>1&&(this.nextPull=s+.25,i.segmentClear(e.pos,this.path[1],.65)&&this.path.shift()),l=this.path[0],e.pos.distanceTo(l)<2.2&&this.path.length>1&&(this.path.shift(),l=this.path[0]),c=this.path.length===1):this.goal&&(l=this.goal,c=!0);let h=Je.set(0,0,0),u={engage:3,retreat:6,refuel:3.5,hunt:4.5,patrol:5}[this.state]||4.5;if(this.role==="rusher"&&this.state!=="retreat"&&(u*=1.25),a<.35&&(u*=.65),this.coast&&(u=Math.max(u,e.vel.length())),l){let m=be.subVectors(l,e.pos),f=m.length(),y=c?f:f+6,S=2,_=this.goalNode>=0?i.nav[this.goalNode]:null,C=c&&_&&_.surf&&this.state!=="engage"?2.5:0,T=Math.min(u,Math.sqrt(C*C+2*S*Math.max(0,y-.6)));if(f>.01&&h.copy(m).multiplyScalar(T/f),c&&f<1.8){h.multiplyScalar(.3);let R=this.goalNode>=0?i.nav[this.goalNode]:null;if(R&&R.surf&&e.vel.length()<3.8&&n.tryGrab(e)){this.coast=!1;return}f<1&&this.state!=="engage"&&(this.goal=null,this.path=null)}}if(this.state==="engage"&&this.target&&a>.45){if(s>this.jinkT){let m=be.subVectors(this.target.pos,e.pos).normalize();Li(m,this.jink).multiplyScalar(Ct(.8,1.9)*this.skill.jink),this.jinkT=s+Ct(1.2,2.6)}h.add(this.jink)}else this.jink.set(0,0,0);if(a>.2&&Math.random()<this.skill.dodge*t*4)for(let m of this.known.values()){if(!m.visible)continue;let f=m.e,y=be.subVectors(e.pos,f.pos),S=y.length();if(y.dot(f.aimDir(bn))/S>.995&&s-f.lastFireT<.5){this.jinkT=0;break}}let d=e.vel.length();if(d>1){let m=be.copy(e.vel).divideScalar(d),f=i.raycast(e.pos,m,d*2.2+1,!0);if(f&&f.t>0){let y=-e.vel.dot(f.n);y>1.5&&h.addScaledVector(f.n,y*(1-f.t/(d*2.2+1))*1.4)}}if(!i.enclosed)for(let m=0;m<3;m++){let f=i.bounds.max[m]-10,y=e.pos.getComponent(m)+e.vel.getComponent(m)*2.5;Math.abs(y)>f&&h.setComponent(m,h.getComponent(m)-Math.sign(y)*Math.min(4,(Math.abs(y)-f)*.4+1))}for(let m of n.soldiers){if(m===e||!m.alive||m.team!==e.team)continue;let f=be.subVectors(e.pos,m.pos),y=f.length();y<3&&y>.01&&h.addScaledVector(f,(3-y)/y*.8)}!l&&!this.jink.lengthSq()&&h.set(0,0,0);let p=be.subVectors(h,e.vel).multiplyScalar(1.6),g=this.coast?.6:this.state==="engage"?.18:.3;p.length()<g?p.set(0,0,0):this.coast=!1,e.gas<.05&&p.set(0,0,0);let x=4*xo/e.mass;p.applyQuaternion(gg.copy(e.quat).invert()).divideScalar(x),o.move.set(Kt(p.x,-1,1),Kt(p.y,-1,1),Kt(p.z,-1,1))}desiredAimDir(t){let e=this.s,n=this.game,i=n.time,s=this.eye,o=this.target;if(o){let l=be.copy(this.aimHead?xg:kl).applyQuaternion(o.quat).add(o.pos).sub(s),c=Je.randomDirection().multiplyScalar(o.vel.length()*this.skill.velNoise);this.velEst.lerp(bn.copy(o.vel).add(c),Math.min(1,(this._dt||1/60)/this.skill.velLag));let h=bn.copy(this.velEst).sub(e.vel),u=e.weapon.def,d;return u.kind==="rocket"?d=co(l,h,u.speed,u.accel,u.burn):d=Ys(l,h,u.speed),d>0&&l.addScaledVector(h,d),t.copy(l).normalize()}if(this.state==="hunt"&&this.huntK)return t.subVectors(this.huntK.pos,s).normalize();if(this.state==="retreat"||this.state==="refuel"){let a=this.threatPositions();if(a.length)return t.subVectors(a[0],s).normalize()}if(i>this.lookT){this.lookT=i+Ct(1.2,2.5);let a=e.team===0?1:-1,l=e.forward(be);Math.random()<.18?this.lookDir.set(a*Ct(.4,1),Ct(-.5,.5),Ct(-.5,.5)).normalize():e.vel.lengthSq()>4&&Math.random()<.3&&e.vel.clone().normalize().dot(l)>.5?this.lookDir.copy(e.vel).normalize():this.lookDir.copy(l).addScaledVector(Li(l,Je),Ct(0,.75)).normalize()}return t.copy(this.lookDir)}aim(t){let e=this.s,n=this.skill,i=this.desiredAimDir(this._want||(this._want=new E));this.trueAim=i;let s=Math.exp(-t/n.settle);this.err.multiplyScalar(s);let o=n.floor*vn*(1+e.angVel.length()*.8+(e.grab?-.4:0));this.err.x+=(Math.random()-.5)*o*.9,this.err.y+=(Math.random()-.5)*o*.9;let a=n.floor*vn*1.6;if(this.target&&this.game.time>this.acquireT+n.settle*2){let m=this.err.length();m>a&&this.err.multiplyScalar(a/m)}let l=be.copy(i),c=Je.crossVectors(l,Math.abs(l.y)<.95?bn.set(0,1,0):bn.set(1,0,0)).normalize(),h=bn.crossVectors(c,l);if(l.addScaledVector(c,this.err.x).addScaledVector(h,this.err.y).normalize(),this.target&&this.game.time<this.acquireT)return;let u=e.aimDir(this._cur||(this._cur=new E)),d=Math.acos(Kt(u.dot(l),-1,1));if(d<1e-5)return;let p=n.track*vn*t,g=Math.min(d,Math.max(p*.15,d*Math.min(1,t*14)),p),x=Je.crossVectors(u,l).normalize();u.applyAxisAngle(x,g),e.setAimDir(u)}actions(t){let e=this.s,n=this.game,i=n.time,s=this.target;if(!s){this.flushGrenade();return}if(i<this.acquireT)return;let o=this.eye,a=s.pos.distanceTo(o);if(a<yn.range&&e.meleeCool<=0){n.combat.melee(e);return}let l=e.aimDir(be),c=Math.acos(Kt(l.dot(this.trueAim),-1,1)),h=Math.atan(.42/a)*1.35+.15*vn+(e.weapon.def.kind==="pellets"?2.5*vn:0);if(e.grenades>0&&e.grenadeCool<=0&&a>9&&a<30&&Je.subVectors(s.vel,e.vel).length()<2.5&&Math.random()<this.skill.grenade*t*3){let u=Je.subVectors(s.pos,o),d=bn.subVectors(s.vel,e.vel),p=Ys(u,d,ke.speed);if(p>0&&p<ke.fuse-.4){let g=u.addScaledVector(d,p).normalize(),x=e.aimDir(new E);e.setAimDir(g),n.combat.throwGrenade(e),e.setAimDir(x);return}}c>h||e.weapon.reloadT>0||e.switchT>0||this.lineClearOfFriends(o,l,a)&&(this.burstPause>i||n.combat.fire(e)&&(this.burst++,e.weapon.def.auto&&(a>25||this.skill.burstPause)&&this.burst>=3+(Math.random()*3|0)&&(this.burst=0,this.burstPause=i+Ct(.15,.32)+(this.skill.burstPause||0))))}flushGrenade(){let t=this.s,e=this.game,n=this.huntK;if(this.state!=="hunt"||!n||t.grenades<=0||t.grenadeCool>0||e.time-n.t>3||Math.random()>this.skill.grenade*this._dt*4)return;let i=this.eye,s=n.pos.distanceTo(i);if(s<10||s>28||!e.world.los(i,n.pos,!0))return;for(let l of e.soldiers)if(l.alive&&l.team===t.team&&l.pos.distanceTo(n.pos)<10)return;let o=be.subVectors(n.pos,i).normalize(),a=t.aimDir(new E);t.setAimDir(o),e.combat.throwGrenade(t),t.setAimDir(a)}lineClearOfFriends(t,e,n){for(let i of this.game.soldiers){if(i===this.s||!i.alive||i.team!==this.s.team)continue;let s=Je.subVectors(i.pos,t),o=s.dot(e);if(!(o<0||o>n)&&s.addScaledVector(e,-o).lengthSq()<1.2)return!1}return!0}};var zl=1/120,_g=["VEGA","KESTREL","NOMAD","APEX","ORBIT","HALO","RAZOR","TALON","DRIFT","NOVA","SPECTER","CINDER","ECHO","PULSAR","QUASAR","ZENITH"],Kh=[["forward","Move forward","KeyW"],["back","Move back","KeyS"],["left","Move left","KeyA"],["right","Move right","KeyD"],["up","Move up / push off","Space"],["down","Move down","ShiftLeft"],["rollLeft","Roll left","KeyQ"],["rollRight","Roll right","KeyE"],["brake","Match velocity (brake)","KeyC"],["killRot","Kill rotation","KeyX"],["grab","Grab / release","KeyF"],["reload","Reload","KeyR"],["grenade","Grenade","KeyG"],["melee","Momentum hammer","KeyV"],["weapon1","Rifle","Digit1"],["weapon2","Flechette","Digit2"],["weapon3","Gyrojet","Digit3"],["mode","Cycle RCS mode","KeyT"],["lockRef","Lock velocity reference","KeyL"],["grid","Reference grid","KeyH"],["board","Scoreboard","Tab"]],$h=Object.fromEntries(Kh.map(r=>[r[0],r[2]])),Zh={recoil:!0,breaches:!0,knockback:!0,thrusterDamage:!0,infiniteGas:!1},vg={sens:1,difficulty:"hard",mode:1,teamSize:5,scoreLimit:30,volume:.6,fov:80,invertY:!1,outlines:!0,map:"hangar"};function Jh(r){return r?r.startsWith("Key")?r.slice(3):r.startsWith("Digit")?r.slice(5):r.startsWith("Numpad")?"Num"+r.slice(6):{Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Tab:"Tab",CapsLock:"Caps",Backquote:"`",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Enter",Backspace:"Bksp"}[r]||r:"\u2014"}var ci=new E,Js=new E,Hl=new pe,Vl=class{constructor(t){this.keys=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,left:!1,right:!1,leftPressed:!1,wheel:0},this.el=t,window.addEventListener("keydown",e=>{if(this.capture){e.preventDefault();let n=this.capture;this.capture=null,n(e.code);return}(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow")&&!(e.target&&e.target.tagName==="SELECT"))&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1}),window.addEventListener("mousemove",e=>{(document.pointerLockElement===t||this.forceMouse)&&(this.mouse.dx+=e.movementX||0,this.mouse.dy+=e.movementY||0)}),t.addEventListener("mousedown",e=>{e.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),e.button===2&&(this.mouse.right=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("wheel",e=>{this.mouse.wheel+=Math.sign(e.deltaY)},{passive:!0})}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.mouse.dx=this.mouse.dy=0,this.mouse.leftPressed=!1,this.mouse.wheel=0}},Gl=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new qr({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=El,this.renderer.toneMappingExposure=1.05,this.scene=new Yr,this.scene.background=new wt(131850),this.camera=new Ue(80,window.innerWidth/window.innerHeight,.04,6e3),this.scene.add(this.camera),this.settings=this.loadSettings(),this.time=0,this.state="menu",this.world=new $s(this.scene,this.settings.map),this.fx=new fo(this.scene),this.audio=new po,this.audio.setVolume(this.settings.volume),this.combat=new yo(this),this.hud=new So(this,document.getElementById("hud")),this.input=new Vl(this.canvas),this.soldiers=[],this.bots=[],this.intel=[new Map,new Map],this.teamScore=[0,0],this.showGrid=!1,this.buildViewmodel(),this.buildGrid(),this.acc=0,this.last=performance.now(),this.menuCam=0,window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>this.onLockChange()),document.addEventListener("pointerlockerror",()=>{this.input.forceMouse||(this.input.forceMouse=!0,this.state==="playing"&&this.hud.message("POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES","#ffcc4d",4))}),this.setupUI(),this.resize(),requestAnimationFrame(t=>this.frame(t))}loadSettings(){let t={};try{t=JSON.parse(localStorage.getItem("deltav.settings")||"{}")||{}}catch{t={}}let e={...vg,...t};return e.binds={...$h,...t.binds||{}},e.rules={...Zh,...t.rules||{}},vs[e.map]||(e.map="hangar"),e}get rules(){return this.settings.rules}keyLabel(t){return Jh(this.settings.binds[t])}bound(t){return this.input.down(this.settings.binds[t])}pressedAct(t){return this.input.hit(this.settings.binds[t])}saveSettings(){try{localStorage.setItem("deltav.settings",JSON.stringify(this.settings))}catch{}}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.hud.resize(),this.fx.setScale(e*Math.min(window.devicePixelRatio,1.5),this.camera.fov)}buildViewmodel(){this.vm=new Ne,this.camera.add(this.vm),this.vmGuns={};for(let i of Object.keys(Ui)){let s=Fl(i,Sn[0]);s.visible=!1,this.vm.add(s),this.vmGuns[i]=s}let t=new Jt({color:13225169,roughness:.8,flatShading:!0}),e=new Ot(new Xt(.075,.09,.11),t);e.position.set(0,-.1,-.05),this.vm.add(e);let n=new Ot(new Xt(.075,.075,.11),t);n.position.set(-.01,-.06,-.34),this.vm.add(n),this.vm.scale.setScalar(.6),this.vm.position.set(.17,-.15,-.32),this.vmFlash=new tn(16755302,0,6,1.5),this.vmFlash.position.set(0,0,-.8),this.vm.add(this.vmFlash)}buildGrid(){this.grid&&this.scene.remove(this.grid);let t=[],e=this.world.bounds,n=this.world.enclosed?12:24;for(let s=e.min[1];s<=e.max[1];s+=n)for(let o=e.min[2];o<=e.max[2];o+=n)t.push(e.min[0],s,o,e.max[0],s,o);for(let s=e.min[0];s<=e.max[0];s+=n)for(let o=e.min[2];o<=e.max[2];o+=n)t.push(s,e.min[1],o,s,e.max[1],o);for(let s=e.min[0];s<=e.max[0];s+=n)for(let o=e.min[1];o<=e.max[1];o+=n)t.push(s,o,e.min[2],s,o,e.max[2]);let i=new ge;i.setAttribute("position",new ie(t,3)),this.grid=new fs(i,new Ti({color:6289151,transparent:!0,opacity:0,depthWrite:!1})),this.grid.visible=!1,this.scene.add(this.grid)}setupUI(){let t=a=>document.getElementById(a);this.ui={main:t("menu"),pause:t("pause"),end:t("end"),board:t("board"),lock:t("lockhint")};let e=this.settings,n=(a,l,c=h=>h)=>{let h=t(a);h&&(h.value=String(e[l]),h.addEventListener("change",()=>{e[l]=c(h.value),this.saveSettings(),this.applySettings()}))};n("optDiff","difficulty"),n("optTeam","teamSize",Number),n("optScore","scoreLimit",Number),n("optMode","mode",Number),n("optMap","map"),t("mapDesc").textContent=vs[e.map].desc,t("optMap").addEventListener("change",()=>{t("mapDesc").textContent=vs[e.map].desc});let i=(a,l,c)=>{let h=t(a);h&&(h.checked=l(),h.addEventListener("change",()=>{c(h.checked),this.saveSettings()}))};for(let a of Object.keys(Zh))i("rule_"+a,()=>e.rules[a],l=>{e.rules[a]=l});i("optOutline",()=>e.outlines,a=>{e.outlines=a}),this.buildBindUI();let s=(a,l,c,h)=>{let u=t(a);if(!u)return;u.value=e[l];let d=t(c);d&&(d.textContent=h(e[l])),u.addEventListener("input",()=>{e[l]=Number(u.value),d&&(d.textContent=h(e[l])),this.saveSettings(),this.applySettings()})};s("optSens","sens","optSensV",a=>a.toFixed(2)),s("optFov","fov","optFovV",a=>a.toFixed(0)+"\xB0"),s("optVol","volume","optVolV",a=>Math.round(a*100)+"%"),s("optSens2","sens","optSens2V",a=>a.toFixed(2));let o=t("optInv");o&&(o.checked=e.invertY,o.addEventListener("change",()=>{e.invertY=o.checked,this.saveSettings()})),t("modeDesc").textContent=_o[e.mode],t("optMode").addEventListener("change",()=>{t("modeDesc").textContent=_o[e.mode]}),t("btnDeploy").addEventListener("click",()=>{this.audio.init(),this.newMatch()}),t("btnResume").addEventListener("click",()=>this.resume()),t("btnQuit").addEventListener("click",()=>this.toMenu()),t("btnAgain").addEventListener("click",()=>this.newMatch()),t("btnMenu").addEventListener("click",()=>this.toMenu()),this.ui.lock.addEventListener("click",()=>this.lock()),this.canvas.addEventListener("click",()=>{this.state==="playing"&&document.pointerLockElement!==this.canvas&&this.lock()})}buildBindUI(){let t=document.getElementById("binds");if(!t)return;let e=this.settings;t.innerHTML="";for(let[s,o]of Kh){let a=document.createElement("div");a.className="bind";let l=document.createElement("span");l.textContent=o;let c=document.createElement("button");c.className="key",c.type="button",c.id="bind_"+s,c.textContent=Jh(e.binds[s]),c.addEventListener("click",()=>{c.textContent="press a key\u2026",c.classList.add("wait"),this.input.capture=h=>{if(c.classList.remove("wait"),h!=="Escape"){for(let u of Object.keys(e.binds))e.binds[u]===h&&u!==s&&(e.binds[u]=e.binds[s]);e.binds[s]=h,this.saveSettings()}this.buildBindUI()}}),a.append(l,c),t.append(a)}let n=document.createElement("div");n.className="bindnote",n.textContent="Fixed: mouse = turn your body, left click = fire, right click = zoom, wheel = cycle weapons, Esc = pause.",t.append(n);let i=document.getElementById("btnResetBinds");i&&!i._wired&&(i._wired=!0,i.addEventListener("click",()=>{e.binds={...$h},this.saveSettings(),this.buildBindUI()}))}applySettings(){this.audio.setVolume(this.settings.volume),this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.player&&(this.player.mode=this.settings.mode)}lock(){let t=()=>{this.input.forceMouse||(this.input.forceMouse=!0,this.state==="playing"&&this.hud.message("POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES","#ffcc4d",4))};try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(t)}catch{t()}}onLockChange(){!(document.pointerLockElement===this.canvas)&&this.state==="playing"&&!this.input.forceMouse&&this.pause(),this.ui.lock.style.display="none"}show(t){for(let e of["main","pause","end"])this.ui[e].style.display=e===t?"flex":"none"}pause(){this.state==="playing"&&(this.state="paused",this.show("pause"))}resume(){this.state="playing",this.show(null),this.lock(),this.last=performance.now()}toMenu(){this.state="menu",this.show("main"),document.pointerLockElement&&document.exitPointerLock(),this.clearMatch()}clearMatch(){for(let t of this.soldiers)this.scene.remove(t.model.root);for(let t of this.combat.projectiles)t.mesh&&this.scene.remove(t.mesh);for(let t of this.combat.grenades)this.scene.remove(t.mesh);this.combat.projectiles.length=0,this.combat.grenades.length=0,this.soldiers=[],this.bots=[],this.player=null,this.intel=[new Map,new Map]}newMatch(){this.clearMatch();let t=this.settings;this.world.mapId!==t.map&&(this.world.dispose(),this.world=new $s(this.scene,t.map),this.buildGrid()),this.applySettings(),this.teamScore=[0,0],this.scoreLimit=t.scoreLimit,this.timeLimit=10*60,this.matchTime=0;let e=_g.slice().sort(()=>Math.random()-.5);this.player=new Zs(this,0,"YOU",!0),this.player.mode=t.mode,this.soldiers.push(this.player);let n=0;for(let i=0;i<2;i++){let s=i===0?t.teamSize-1:t.teamSize;for(let o=0;o<s;o++){let a=new Zs(this,i,e[n++%e.length]);a.mode=2,this.soldiers.push(a),this.bots.push(new bo(this,a,t.difficulty,o+i))}}for(let i of this.soldiers)this.respawn(i,!0);this.state="playing",this.show(null),this.hud.feed=[],this.hud.msgs=[],this.hud.message("TEAM DEATHMATCH \u2013 ZERO-G","#9fe8ff",3,!0),this.hud.message(`RCS MODE: ${Ss[this.player.mode]}`,"#ffcc4d",3),this.lock();try{this.renderer.compile(this.scene,this.camera)}catch{}this.last=performance.now()}respawn(t,e=!1){let n=this.world.spawns[t.team],i=n[0],s=-1/0;for(let a of n){let l=999;for(let h of this.soldiers)if(h.alive&&h!==t){let u=h.pos.distanceTo(a);h.team!==t.team?l=Math.min(l,u):u<2&&(l=Math.min(l,u*10))}let c=l+Math.random()*8;c>s&&(s=c,i=a)}let o=new E(t.team===0?1:-1,0,0);t.spawn(i,o),t.oobT=0,t.mode=t.isPlayer?this.settings.mode:2,t.killedBy=null,t.bot&&t.bot.onSpawn(),t.isPlayer&&!e&&this.audio.play("spawn")}distToListener(t){return this.camera.position.distanceTo(t)}reportIntel(t,e,n){let i=this.intel[t],s=i.get(e.id);s||(s={pos:new E,vel:new E,t:0,e},i.set(e.id,s)),s.pos.copy(e.pos),s.vel.copy(e.vel),s.t=this.time}onShot(t,e){let n=e.kind==="rocket"?70:e.kind==="pellets"?55:48;for(let i of this.bots)i.hear(t,t.pos,n);this.audio.play(e.sound,t.isPlayer?0:this.distToListener(t.pos)),t.isPlayer&&(this.vmKick=(this.vmKick||0)+(e.kind==="pellets"?.09:.025)),t.isPlayer&&(this.vmFlash.intensity=6)}onExplosion(t,e){for(let n of this.bots)n.hear(e,t,80)}onImpact(t,e,n,i){this.audio.play(e>5?"impact":"clank",t.isPlayer?0:this.distToListener(t.pos));let s=e>oi;if(n&&e>3&&(this.fx.sparks(n,Math.round(4+e*(s?4:1.5)),i,2+e*.6),s&&(this.fx.suitHit(n,i,t.vel),this.fx.alpha.spawn(n,null,new wt(9080985),.6,1.2,{grow:3,alpha:.4}))),t.isPlayer){e>3&&this.hud.message(`IMPACT ${e.toFixed(1)} m/s`,s?"#ff4b3a":"#ffcc4d",1.2);let o=s?.4+(e-oi)*.12:(e-1.2)*.04;this.shake=Math.max(this.shake||0,Math.min(1,o)),s&&this.hud.impact(o)}}damageTower(t,e,n){if(!this.rules.thrusterDamage)return;let i=t.towers[e];if(!(i.dead||!t.alive)&&(i.hp-=n,i.hp<=0)){i.dead=!0,i.hp=0;let s=Ze[e].pos.clone().applyQuaternion(t.quat).add(t.pos);this.fx.sparks(s,25,null,6),this.fx.gasJet(s,new E().randomDirection(),t.vel,3),t.applyImpulse(new E().randomDirection().multiplyScalar(25),s),t.isPlayer&&(this.hud.message(`THRUSTER QUAD ${["UL","UR","LL","LR"][e]} DESTROYED \u2013 EXPECT COUPLED SPIN`,"#ff4b3a",3),this.audio.play("warn"))}}damage(t,e,n,i,s,o){if(!t.alive||t.spawnProtect>0&&i!=="hypoxia")return;t.health-=e,t.lastDamageT=this.time,n&&n!==t&&(t.lastAttacker=n,t.lastAttackerT=this.time),t.bot&&t.bot.onDamaged(n);let a=t.health<=0;n===this.player&&t!==this.player&&e>.5&&(this.hud.hit(o==="head",a),this.audio.play(a?"kill":o==="head"?"head":"hit")),t===this.player&&e>.5&&i!=="hypoxia"&&(this.hud.damageFrom(n?n.pos:s),this.audio.play("hurt")),a&&this.kill(t,n,i,o==="head")}kill(t,e,n,i){t.alive=!1,t.health=0,t.deaths++,t.respawnT=4,t.leaks=[],t.grab=null;let s=e&&e!==t?e:null;!s&&t.lastAttacker&&this.time-(t.lastAttackerT||0)<6&&(s=t.lastAttacker),s&&s.team!==t.team&&(s.kills++,s.score+=100,this.teamScore[s.team]++,s.isPlayer&&this.hud.message(`ELIMINATED ${t.name}${i?" \u2013 HEADSHOT":""}`,"#ff4b3a",1.8)),t.killedBy=s,t.killCause=n,this.hud.kill(s,t,n,i),t.bot&&(t.bot.target=null);for(let o of this.intel)o.delete(t.id);(this.teamScore[0]>=this.scoreLimit||this.teamScore[1]>=this.scoreLimit)&&setTimeout(()=>this.endMatch(),1200)}endMatch(){if(this.state!=="playing"&&this.state!=="paused")return;this.state="ended",document.pointerLockElement&&document.exitPointerLock();let t=this.teamScore[0]>this.teamScore[1]?0:this.teamScore[1]>this.teamScore[0]?1:-1;document.getElementById("endTitle").textContent=t===0?"VICTORY":t===1?"DEFEAT":"DRAW",document.getElementById("endTitle").style.color=t===0?"#3f8cff":t===1?"#ff8a2a":"#e9eef2",document.getElementById("endScore").textContent=`${this.teamScore[0]} \u2013 ${this.teamScore[1]}`,document.getElementById("endBoard").innerHTML=this.boardHTML(),this.show("end")}boardHTML(){let t="";for(let e of[0,1]){let n=this.soldiers.filter(i=>i.team===e).sort((i,s)=>s.kills-i.kills||i.deaths-s.deaths);t+=`<div class="bteam" style="--tc:${"#"+Sn[e].toString(16).padStart(6,"0")}"><div class="bhead"><b>${Hh[e]}</b><span>${this.teamScore[e]}</span></div>`,t+="<table><tr><th>CALLSIGN</th><th>K</th><th>D</th><th>\u0394v</th></tr>";for(let i of n)t+=`<tr class="${i.isPlayer?"me":""}${i.alive?"":" dead"}"><td>${i.name}</td><td>${i.kills}</td><td>${i.deaths}</td><td>${i.alive?i.dv.toFixed(0):"\u2014"}</td></tr>`;t+="</table></div>"}return t}tryGrab(t){let e=this.world.nearestSurface(t.pos,Mn+.85);if(!e)return!1;let n=e.kind==="pod"?e.obj.vel:ci.set(0,0,0);if(Js.subVectors(t.vel,n).length()>4.5)return t.isPlayer&&this.hud.message("TOO FAST TO GRAB","#ff4b3a",1.2),!1;if(e.kind==="pod"){let s=e.obj,o=t.mass,a=s.mass,l=t.vel.clone().multiplyScalar(o).addScaledVector(s.vel,a).divideScalar(o+a);s.vel.copy(l),t.vel.copy(l),t.grab={kind:"pod",obj:s,offset:t.pos.clone().sub(s.pos),normal:e.normal}}else t.vel.set(0,0,0),t.grab={kind:e.kind,obj:e.obj,normal:e.normal,point:e.point};return t.angVel.multiplyScalar(.2),t.holdQ=null,(t.isPlayer||this.distToListener(t.pos)<15)&&this.audio.play("grab",t.isPlayer?0:this.distToListener(t.pos)),!0}releaseGrab(t){t.grab=null,t.holdQ=null}pushOff(t,e,n){let i=t.grab;if(!i)return;let s=e.clone().normalize(),o=i.normal;if(o&&s.dot(o)<.15&&s.addScaledVector(o,-s.dot(o)+.35).normalize(),i.kind==="pod"){let a=i.obj,l=t.mass,c=a.mass;t.vel.copy(a.vel).addScaledVector(s,n*c/(l+c)),a.vel.addScaledVector(s,-n*l/(l+c))}else t.vel.copy(s).multiplyScalar(n);t.grab=null,t.holdQ=null,t.isPlayer&&this.audio.play("push")}playerControl(t){let e=this.player,n=this.input,i=e.ctrl;if(n.hit("Escape")){this.pause();return}if(!e.alive){i.move.set(0,0,0);return}let s=.0022*this.settings.sens*(n.mouse.right?.5:1);e.addAim(-n.mouse.dx*s,(this.settings.invertY?1:-1)*n.mouse.dy*s);let o=l=>this.bound(l)?1:0;if(i.move.set(o("right")-o("left"),(e.grab?0:o("up"))-o("down"),o("back")-o("forward")),i.roll=o("rollLeft")-o("rollRight"),i.killRot=this.bound("killRot"),i.brake=this.bound("brake"),this.pressedAct("mode")&&(e.mode=(e.mode+1)%Ss.length,this.settings.mode=e.mode,this.saveSettings(),this.hud.message(`RCS MODE: ${Ss[e.mode]}`,"#ffcc4d",2.5),this.hud.message(_o[e.mode],"#9fe8ff",3),this.audio.play("mode")),this.pressedAct("grid")&&(this.showGrid=!this.showGrid,this.hud.message(this.showGrid?"REFERENCE GRID ON":"REFERENCE GRID AUTO","#9fe8ff",1.5)),this.pressedAct("lockRef")){let l=this.hud.aimInfo;l&&(l.soldier||l.kind==="pod")&&l.obj!==e.refTarget?(e.refTarget=l.obj,this.hud.message(`VELOCITY REFERENCE: ${l.soldier?l.soldier.name:"CARGO POD"}`,"#ffcc4d",2)):(e.refTarget=null,this.hud.message("VELOCITY REFERENCE: STATION","#ffcc4d",2))}e.refTarget&&e.refTarget.alive===!1&&(e.refTarget=null),this.pressedAct("grab")&&(e.grab?this.releaseGrab(e):this.tryGrab(e)),e.grab?this.bound("up")?e.pushCharge=Math.min(1,e.pushCharge+t/.6):e.pushCharge>0&&(this.pushOff(e,e.aimDir(new E),2+5*e.pushCharge),e.pushCharge=0):e.pushCharge=0;for(let l=0;l<3;l++)this.pressedAct("weapon"+(l+1))&&e.switchTo(l);n.mouse.wheel&&e.switchTo((e.cur+(n.mouse.wheel>0?1:2))%3),this.pressedAct("reload")&&e.startReload()&&this.audio.play("reload"),this.pressedAct("grenade")&&this.combat.throwGrenade(e),this.pressedAct("melee")&&this.combat.melee(e),(e.weapon.def.auto?n.mouse.left:n.mouse.leftPressed)&&this.combat.fire(e),this.pressedAct("board")&&(this.ui.board.style.display="flex"),this.bound("board")?this.ui.board.innerHTML=this.boardHTML():this.ui.board.style.display="none"}substep(t){for(let e of this.soldiers)e.step(t);this.combat.step(t),this.world.updatePods(t,this.time),this.collideBodies()}collideBodies(){let t=this.soldiers,e=n=>n.grab&&n.grab.kind!=="pod"?0:1/n.mass;for(let n=0;n<t.length;n++){let i=t[n];for(let s=n+1;s<t.length;s++){let o=t[s],a=ci.subVectors(o.pos,i.pos),l=a.length(),c=Mn*2;if(l>=c||l<1e-5)continue;a.divideScalar(l);let h=e(i),u=e(o);if(h+u===0)continue;let d=c-l;i.pos.addScaledVector(a,-d*h/(h+u)),o.pos.addScaledVector(a,d*u/(h+u));let p=Js.subVectors(o.vel,i.vel).dot(a);if(p<0){let g=-1.3*p/(h+u);i.vel.addScaledVector(a,-g*h),o.vel.addScaledVector(a,g*u),-p>2&&this.audio.play("impact",this.distToListener(i.pos))}}for(let s of this.world.pods){if(i.grab&&i.grab.obj===s)continue;let o=ci.subVectors(s.pos,i.pos),a=o.length(),l=Mn+s.r;if(a>=l||a<1e-5)continue;o.divideScalar(a);let c=e(i),h=1/s.mass,u=l-a;i.pos.addScaledVector(o,-u*c/(c+h)),s.pos.addScaledVector(o,u*h/(c+h));let d=Js.subVectors(s.vel,i.vel).dot(o);if(d<0){let p=-1.4*d/(c+h);i.vel.addScaledVector(o,-p*c),s.vel.addScaledVector(o,p*h),-d>3&&i.alive&&this.damage(i,(-d-3)*8,null,"cargo pod",i.pos,"body")}}}}frame(t){requestAnimationFrame(n=>this.frame(n));let e=(t-this.last)/1e3;this.last=t,e>0||(e=0),e=Math.min(e,.05),this.tick(e)}tick(t){if(this.state==="playing"){this.time+=t,this.matchTime+=t,this.playerControl(t);for(let n of this.bots)n.update(t);this.acc+=t;let e=0;for(;this.acc>=zl&&e<8;)this.substep(zl),this.acc-=zl,e++;e===8&&(this.acc=0);for(let n of this.soldiers)n.alive&&!this.world.enclosed&&(this.world.outside(n.pos)>0?(n.oobT=(n.oobT||0)+t,n.oobT>5&&this.damage(n,20*t,null,"out of bounds")):n.oobT=0),n.alive?n.update(t):(n.respawnT-=t,n.respawnT<=0&&this.respawn(n));this.matchTime>=this.timeLimit&&this.endMatch(),this.emitThrusterFx(t)}else this.state==="menu"&&(this.time+=t,this.world.updatePods(t,this.time));this.state!=="paused"&&(this.fx.update(t,this.combat.tracerList()),this.combat.syncMeshes(t)),this.world.syncPodMeshes();for(let e of this.soldiers)e.syncModel(t);this.updateCamera(t),this.hud.draw(this.state==="paused"?0:t),this.renderer.render(this.scene,this.camera),this.input.endFrame()}emitThrusterFx(t){for(let n of this.soldiers){if(!n.alive)continue;let i=this.distToListener(n.pos)<60;for(let s=0;s<4;s++)for(let o=0;o<6;o++){let a=n.throttle[s*6+o];if(a<.15||!i||Math.random()>a*.7)continue;let l=ci.copy(Ze[s].pos).applyQuaternion(n.quat).add(n.pos),c=Js.copy(vo[o]).negate().applyQuaternion(n.quat);n.isPlayer||this.fx.thrusterPuff(l,c,n.vel)}for(let s of n.leaks)if(Math.random()<.6){let o=ci.copy(s.p).applyQuaternion(n.quat).add(n.pos);this.fx.gasJet(o,Js.copy(s.n).applyQuaternion(n.quat),n.vel)}for(let s=0;s<4;s++)n.towers[s].dead&&Math.random()<.08&&this.fx.sparks(ci.copy(Ze[s].pos).applyQuaternion(n.quat).add(n.pos),2,null,2)}let e=this.player;e&&this.audio.setHiss(e.alive?e.throttle.reduce((n,i)=>n+i,0):0)}updateCamera(t){let e=this.camera,n=this.player;if(this.state==="menu"||!n){this.menuCam+=t*.05;let u=this.world.enclosed?1:2.4,d=46*u;e.position.set(Math.cos(this.menuCam)*d,Math.sin(this.menuCam*.7)*10*u,Math.sin(this.menuCam)*26*u),e.lookAt(0,0,0),this.vm.visible=!1,this.grid.visible=!1;return}if(n.eye(e.position),this.shake=(this.shake||0)*Math.exp(-t*5),n.alive){if(n.aimQuat(e.quaternion),this.shake>.01){let u=this.shake*.06;e.position.add(ci.set(Ct(-1,1),Ct(-1,1),Ct(-1,1)).multiplyScalar(this.shake*.08)),e.quaternion.multiply(Hl.setFromEuler(new Ve(Ct(-u,u),Ct(-u,u),Ct(-u,u)*2)))}e.fov+=((this.input.mouse.right?this.settings.fov*.55:this.settings.fov)-e.fov)*Math.min(1,t*14),e.updateProjectionMatrix()}else{let u=n.killedBy;if(u){let d=new re().lookAt(e.position,u.pos,ci.set(0,1,0).applyQuaternion(e.quaternion));Hl.setFromRotationMatrix(d),e.quaternion.slerp(Hl,Math.min(1,t*2))}}let i=n.weapon;for(let u in this.vmGuns)this.vmGuns[u].visible=n.alive&&u===i.def.id;this.vm.visible=n.alive,this.vmKick=(this.vmKick||0)*Math.exp(-t*14);let s=i.reloadT>0?Math.sin(Math.min(1,1-i.reloadT/i.def.reload)*Math.PI):0,o=n.switchT>0?n.switchT/.45:0,a=this.input.mouse.right?1:0;this.vmAds=(this.vmAds||0)+(a-(this.vmAds||0))*Math.min(1,t*12),this.vm.position.set(.17*(1-this.vmAds),-.15+.065*this.vmAds-s*.1-o*.2,-.32+this.vmKick),this.vm.rotation.set(this.vmKick*2+s*.6,0,s*.4),this.vmFlash.intensity*=Math.exp(-t*30);let l=n.alive&&n.angVel.length()>1.4,c=this.showGrid?.22:l?.16:0,h=this.grid.material;h.opacity+=(c-h.opacity)*Math.min(1,t*4),this.grid.visible=h.opacity>.01}};window.addEventListener("DOMContentLoaded",()=>{try{window.game=new Gl}catch(r){console.error(r),document.body.insertAdjacentHTML("beforeend",`<pre style="color:#f66;position:fixed;top:10px;left:10px;z-index:99">${r.stack}</pre>`)}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
