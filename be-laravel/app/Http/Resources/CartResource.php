<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ProductCollection;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'cart';

    public function toArray($request)
    {
        return [
            'cartId' => $this->resource->id,
            'productId' => $this->resource->productId,
            'userId' => $this->resource->userId
        ];
    }
}
