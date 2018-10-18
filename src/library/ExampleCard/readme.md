example:

    const response = {
        results: [{
            id: 'vegetable-1',
            data: {
                name: [{ text: 'Brocolli' }],
                image: { url: 'public/images/broccoli-florets.svg' },
                description: [{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }],
            }
        }]
    };

    <div>
        <GlobalHeader title="Broccoli" />
        <ExampleCard response={response} />
    </div>

