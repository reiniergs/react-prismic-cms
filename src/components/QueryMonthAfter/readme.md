example:

    <div>
        <GlobalHeader title="Publications after september" />
        <Prismic repo="react-prismic-cms">
            <QueryMonthAfter path="document.first_publication_date" value={9} component={ExampleCard} />
        </Prismic>
    </div>