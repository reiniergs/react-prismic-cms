vegetables:

    <GlobalHeader title="vegetables" />
    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.type" value="vegetables" component={ExampleCard} />
    </Prismic>

red vegetables:

    <GlobalHeader title="red vegetables" />
    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.tags" value={['red']} component={ExampleCard} />
    </Prismic>
