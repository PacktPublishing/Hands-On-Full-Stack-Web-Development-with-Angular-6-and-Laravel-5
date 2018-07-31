@foreach ($bands as $band)
    <h1>Band id: {{ $band->id }}</h1>
    <h2>Band name: {{ $band->name }}</h2>
    <p>Band Description: {{ $band->description }}</p>
@endforeach