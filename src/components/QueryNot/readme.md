not vegetables:

    <GlobalHeader title="not vegetables" />
    <Prismic repo="react-prismic-cms">
        <QueryNot path="document.type" value="vegetables" component={ExampleCard} />
    </Prismic>

not green vegetables:

    <GlobalHeader title="not green vegetables" />
    <Prismic repo="react-prismic-cms">
        <QueryNot path="document.tags" value={['green']} component={ExampleCard} />
    </Prismic>
