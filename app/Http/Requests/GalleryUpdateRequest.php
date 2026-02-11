<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GalleryUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'src'                                                           => ['nullable', 'file', 'mimes:jpg,jpeg,png,webp', 'max:1024'],
            'alt'                                                           => ['required', 'string'],
        ];
    }

    public function messages()
    {
        return [
            'alt.required'                                                      => 'Title is required',
            'src.max'                                                           => 'Image Must not Greater then 1MB',
        ];
    }
}
