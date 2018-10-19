vegetables and fruit:

    <div>
        <GlobalHeader title="vegetables and fruit" />
        <Prismic repo="react-prismic-cms">
            <QueryAny path="document.type" value={['vegetables', 'fruits']} component={ExampleCard} />
        </Prismic>
    </div>
