example:

    <div>
        <GlobalHeader title="Publications before november" />
        <Prismic repo="react-prismic-cms">
            <QueryMonthBefore path="document.first_publication_date" value="november" component={ExampleCard} />
        </Prismic>
    </div>