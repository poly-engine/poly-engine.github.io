# Class: HDRTextureCube

HDR TextureCube

## Hierarchy

- `TextureCube`

  ↳ **`HDRTextureCube`**

### Constructors

- [constructor](HDRTextureCube.md#constructor)

### Properties

- [name](HDRTextureCube.md#name)
- [url](HDRTextureCube.md#url)
- [pid](HDRTextureCube.md#pid)
- [view](HDRTextureCube.md#view)
- [gpuSampler](HDRTextureCube.md#gpusampler)
- [gpuSampler\_comparison](HDRTextureCube.md#gpusampler_comparison)
- [format](HDRTextureCube.md#format)
- [usage](HDRTextureCube.md#usage)
- [numberLayer](HDRTextureCube.md#numberlayer)
- [viewDescriptor](HDRTextureCube.md#viewdescriptor)
- [textureDescriptor](HDRTextureCube.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](HDRTextureCube.md#sampler_comparisonbindinglayout)
- [flipY](HDRTextureCube.md#flipy)
- [isVideoTexture](HDRTextureCube.md#isvideotexture)
- [isHDRTexture](HDRTextureCube.md#ishdrtexture)
- [mipmapCount](HDRTextureCube.md#mipmapcount)
- [width](HDRTextureCube.md#width)
- [height](HDRTextureCube.md#height)
- [depthOrArrayLayers](HDRTextureCube.md#depthorarraylayers)
- [visibility](HDRTextureCube.md#visibility)
- [textureBindingLayout](HDRTextureCube.md#texturebindinglayout)
- [samplerBindingLayout](HDRTextureCube.md#samplerbindinglayout)

### Accessors

- [useMipmap](HDRTextureCube.md#usemipmap)
- [addressModeU](HDRTextureCube.md#addressmodeu)
- [addressModeV](HDRTextureCube.md#addressmodev)
- [addressModeW](HDRTextureCube.md#addressmodew)
- [magFilter](HDRTextureCube.md#magfilter)
- [minFilter](HDRTextureCube.md#minfilter)
- [mipmapFilter](HDRTextureCube.md#mipmapfilter)
- [lodMinClamp](HDRTextureCube.md#lodminclamp)
- [lodMaxClamp](HDRTextureCube.md#lodmaxclamp)
- [compare](HDRTextureCube.md#compare)
- [maxAnisotropy](HDRTextureCube.md#maxanisotropy)

### Methods

- [init](HDRTextureCube.md#init)
- [getGPUTexture](HDRTextureCube.md#getgputexture)
- [getGPUView](HDRTextureCube.md#getgpuview)
- [bindStateChange](HDRTextureCube.md#bindstatechange)
- [unBindStateChange](HDRTextureCube.md#unbindstatechange)
- [destroy](HDRTextureCube.md#destroy)
- [createFromHDRData](HDRTextureCube.md#createfromhdrdata)
- [createFromTexture](HDRTextureCube.md#createfromtexture)
- [load](HDRTextureCube.md#load)

## Constructors

### constructor

• **new HDRTextureCube**()

create a cube texture, it's high dynamic range texture

#### Overrides

TextureCube.constructor

#### Defined in

[src/textures/HDRTextureCube.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTextureCube.ts#L23)

## Properties

### name

• **name**: `string`

name of texture

#### Inherited from

TextureCube.name

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L14)

___

### url

• **url**: `string`

source url

#### Inherited from

TextureCube.url

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L19)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

TextureCube.pid

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L29)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

TextureCube.view

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L34)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

TextureCube.gpuSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L39)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

TextureCube.gpuSampler\_comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L44)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

TextureCube.format

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L49)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

TextureCube.usage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L54)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

TextureCube.numberLayer

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L74)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

TextureCube.viewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L79)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

TextureCube.textureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L84)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

TextureCube.sampler\_comparisonBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L110)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

TextureCube.flipY

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L117)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

TextureCube.isVideoTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L122)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

TextureCube.isHDRTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

TextureCube.mipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L190)

___

### width

• **width**: `number` = `4`

texture width, default value is 4

#### Inherited from

TextureCube.width

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L12)

___

### height

• **height**: `number` = `4`

texture height, default value is 4

#### Inherited from

TextureCube.height

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L16)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

depth or array layers, default value is 6

#### Inherited from

TextureCube.depthOrArrayLayers

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L20)

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

GPUShaderStage

#### Inherited from

TextureCube.visibility

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L25)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout

#### Inherited from

TextureCube.textureBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L30)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

TextureCube.samplerBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L38)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

TextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L309)

• `set` **useMipmap**(`value`): `void`

get mipmap

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

TextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L316)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:419](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L419)

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

TextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:423](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L423)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:430](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L430)

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

TextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:434](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L434)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L441)

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

TextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:445](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L445)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L452)

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

TextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:456](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L456)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:463](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L463)

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

TextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L467)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

TextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:474](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L474)

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Inherited from

TextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:478](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L478)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:485](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L485)

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:489](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L489)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:496](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L496)

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:500](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L500)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

TextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:507](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L507)

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

TextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:511](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L511)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:518](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L518)

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:522](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L522)

## Methods

### init

▸ **init**(): [`HDRTextureCube`](HDRTextureCube.md)

#### Returns

[`HDRTextureCube`](HDRTextureCube.md)

#### Inherited from

TextureCube.init

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L214)

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

create or get GPUTexture

#### Returns

`GPUTexture`

GPUTexture

#### Inherited from

TextureCube.getGPUTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L367)

___

### getGPUView

▸ **getGPUView**(`index?`): `GPUTextureView` \| `GPUExternalTexture`

create or get GPUTextureView

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`GPUTextureView` \| `GPUExternalTexture`

GPUTextureView | GPUExternalTexture

#### Inherited from

TextureCube.getGPUView

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:378](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L378)

___

### bindStateChange

▸ **bindStateChange**(`fun`, `ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | `Function` |
| `ref` | `any` |

#### Returns

`void`

#### Inherited from

TextureCube.bindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L389)

___

### unBindStateChange

▸ **unBindStateChange**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`void`

#### Inherited from

TextureCube.unBindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L393)

___

### destroy

▸ **destroy**(`force?`): `void`

release the texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

TextureCube.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:407](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L407)

___

### createFromHDRData

▸ **createFromHDRData**(`size`, `data`): [`HDRTextureCube`](HDRTextureCube.md)

fill this texture by array of numbers;the format as [red0, green0, blue0, alpha0, red1, green1, blue1, alpha1...]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | assign the cube texture size |
| `data` | `Object` | raw data of cubeTexture; the format is { width: number; height: number; array: Uint8Array } |
| `data.width` | `number` | - |
| `data.height` | `number` | - |
| `data.array` | `Uint8Array` | - |

#### Returns

[`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

[src/textures/HDRTextureCube.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTextureCube.ts#L37)

___

### createFromTexture

▸ **createFromTexture**(`size`, `texture`): [`HDRTextureCube`](HDRTextureCube.md)

fill this texture by a texture2D, which is a 360 panorama image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | assign the cube texture size |
| `texture` | [`Texture`](Texture.md) | the image texture |

#### Returns

[`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

[src/textures/HDRTextureCube.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTextureCube.ts#L52)

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`<[`HDRTextureCube`](HDRTextureCube.md)\>

load texture data from web url, which is a 360 panorama image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | web url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback function when load complete |

#### Returns

`Promise`<[`HDRTextureCube`](HDRTextureCube.md)\>

#### Defined in

[src/textures/HDRTextureCube.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTextureCube.ts#L78)