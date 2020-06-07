<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ asset('/css/share/bootstrap.min.css') }}">
        @section('styles')
        <title>@yield('title') | Shogi</title>
    </head>
    <body>
        <div id="header"></div>
        @auth
            <div id="username" type="hidden" style="display: none">{{ Auth::user()->name }}</div>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        @endauth
        
        <div id="contents">
            @yield('contents')
        </div>

        <script src="{{ asset('/js/react/share_header.js') }}"></script>
        @yield('scripts')
    </body>
</html>