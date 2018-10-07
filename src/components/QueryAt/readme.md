example:
    
    
    <Prismic repo="react-rainbow-prismic">
        <QueryAt path="document.type" value="vestable" component={
            (props) => {
                if (props.response.results) {
                    return (
                            <div>
                                <h1>{props.response.results[0].data.name[0].text}</h1>
                                <img src={props.response.results[0].data.image.url} />
                                <p>{props.response.results[0].data.description[0].text}</p>
                            </div>               
                        )
                }
                return null;
            }    
        } />
    </Prismic>
    
        
    
                 
