export default function About() {

    const handleSearchClick = () => {
        const searchInput = document.querySelector('.search-bar');
        const searchLink = "https://www.youtube.com/results?search_query=";
    
        if (searchInput.value.length) {
          window.location.href = searchLink + searchInput.value;
        }
      };

    return (
    <>

        <div class="search-box">
                <input type="text" class="search-bar" placeholder="search"/>
                <button class="search-btn" onClick={handleSearchClick}><img src="img/search.PNG" alt=""/></button>
        </div> 
        <div className="about-section">
            <h1>About</h1>
        </div>
    </>
    )
}