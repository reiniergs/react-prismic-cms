not vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryNot path="document.type" value="vegetables" component={ExampleCard} title="Not Vegetables" />
    </Prismic>

not green vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryNot path="document.tags" value={['green']} component={ExampleCard} title="Not Green Vegetables" />
    </Prismic>
