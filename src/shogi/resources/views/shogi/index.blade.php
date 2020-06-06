@extends('share.base')

@section('title', 'Main')

@section('styles')
@endsection

@section('contents')
    <div id="shogi"></div>
@endsection

@section('scripts')
    <script src="{{ asset('/js/react/shogi_index.js') }}"></script>
@endsection