import NewCollectionImg from "../../assets/nova-colecao.png";

import "./styles.css";

const NewCollection = () => {
  return (
    <>
      <div className="new-collection">
        <div className="new-collection-text">
          <div className="new-collection-title">
            <strong>Lorem ipsum </strong>
          </div>
          <div className="new-collection-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
              dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut
              mauris integer. Nibh sagittis in lobortis sed cursus condimentum
              velit pharetra. Amet luctus ut vulputate scelerisque placerat
              consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec
              tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut
              ornare augue eget convallis volutpat aliquet. Sed sed pellentesque
              porttitor phasellus donec condimentum sit sapien.
            </p>
          </div>
        </div>
        <div className="new-collection-banner">
          <img src={NewCollectionImg} alt="" />
        </div>
      </div>
    </>
  );
};

export { NewCollection };
