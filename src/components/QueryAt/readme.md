all vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.type" value="vegetables" component={VegetablesCard} />
    </Prismic>

red vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.tags" value={['red']} component={VegetablesCard} />
    </Prismic>
