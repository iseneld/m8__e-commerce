
const Marketplace = () => {

    function importAll(r) {
        let imagesTemp = {};
        r.keys().map((item, index) => { imagesTemp[item.replace('./', '')] = r(item); });
        return imagesTemp;
    }

    const images = importAll(require.context('../Styles/css-content/posters', false, /\.(png|jpe?g|svg)$/));
    const imagesArray = Object.keys(images);

    console.log(imagesArray)
    return (
        <>

            <h1 className="user-props-title">Marketplace</h1>
            <section className="marketplace">
                <section className="furniture">
                    <h2>Properties</h2>
                    <section className="objects-section">
                        IN PROGRESS
                    </section>
                </section>
                <section className="furniture">
                    <h2>Furniture</h2>
                    <section className="objects-section">
                        IN PROGRESS
                    </section>
                </section>
                <section className="furniture">
                    <h2>Posters</h2>
                    <section className="objects-section">
                        {imagesArray.map((image) => <div className="marketplace-objects"><img src={require(`../Styles/css-content/posters/${image}`)} alt={image}></img></div>)}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Marketplace;