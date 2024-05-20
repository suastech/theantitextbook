import { useState } from 'react';

export default function Example() {
  const [openDiv, setOpenDiv] = useState(null);

  function handleToggle(index) {
    setOpenDiv(openDiv === index ? null : index);
  }

  return (
    <section>
        <h2>
          Each myth will be linked to its corresponding refutation. In this example, Fix Blair takes care of the myth "productivity explains income".
        </h2>
        
        <h4>Invited Editor: Blair Fix</h4>
        <div className="field"> <h3>Information about the invited editor</h3> </div>

        <h1 style={{ margin: "30px 25px" }}>Myth: Productivity explains income</h1>

        <div
          className={`field ${openDiv === 0 ? 'open' : ''}`}
          onClick={() => handleToggle(0)}
        >
          <h3>What Textbooks say</h3>
          <p>A description of the neoclassical claim: according to mainstream economists... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div
          className={`field ${openDiv === 1 ? 'open' : ''}`}
          onClick={() => handleToggle(1)}
        >
          <h3>What evidence shows</h3>
          <p>Main article: "No, Productivity Does Not Explain Income", by Fix Blair</p>
          <p>Did you hear the joke about the economists who tested their theory by defining it to be true? Oh, I forgot. It’s not a joke. It’s standard practice among mainstream economists. They propose that productivity explains income. And then they ‘test’ this idea by defining productivity in terms of income.
              In this post, I’m going to show you this circular logic. Then I’ll show you what productivity differences look like when productivity is measure objectively. They’re far too small to explain income differences.
              Marginal productivity theory The marginal productivity theory of income distribution was born a little over a century ago. Its principle creator, John Bates Clark, was explicit that his theory was about ideology and not science. Clark wanted show that in capitalist societies, everyone got what they produced, and hence all was fair:
              It is the purpose of this work to show that the distribution of the income of society is controlled by a natural law, and that this law, if it worked without friction, would give to every agent of production the amount of wealth which that agent creates.
            (John Bates Clark in The Distribution of Wealth)
            Clark was also explicit about why his theory was needed. The stability of the capitalist order was at stake! Here’s Clark again:
            The welfare of the laboring classes depends on whether they get much or little; but their attitude toward other classes—and, therefore, the stability of the social state—depends chiefly on the question, whether the amount that they get, be it large or small, is what they produce. If they create a small amount of wealth and get the whole of it, they may not seek to revolutionize society; but if it were to appear that they produce an ample amount and get only a part of it, many of them would become revolutionists, and all would have the right to do so.
            (John Bates Clark in The Distribution of Wealth)
            So the neoclassical theory of income distribution was born as an ideological response to Marxism. According to Marx, capitalists extract a surplus from workers, and so workers get less than what they deserve. Clark’s marginal productivity theory aimed to show that this was not true. Both capitalists and workers, Clark claimed, got what they deserved.
            The message of Clark’s theory is simple: workers need to stay in their place. They already earn what they produce, so they have no right to demand more.
          </p>
          <p>...and so on</p>
        </div>

        <div className={`field ${openDiv === 2 ? 'open' : ''}`} onClick={() => handleToggle(2)} >
          <h3>Resources</h3>
          <ul> Extensive list of articles, links, files, books, multimedia resources, memes etc. that support the refutation:
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>

        <div className={`field ${openDiv === 3 ? 'open' : ''}`} onClick={() => handleToggle(3)}>
          <h3>Related refutations</h3>
          <ul>List of other related myths/refutations in this website
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>

        <div className={`field ${openDiv === 4 ? 'open' : ''}`} onClick={() => handleToggle(4)} >
          <h3>Authors working along this line</h3>
          <ul>
            <li>Author</li>
            <li>Author</li>
            <li>Author</li>
            <li>Author</li>
            <li>Author</li>
            <li>Author</li>
          </ul>
        </div>


        <div className={`field ${openDiv === 5 ? 'open' : ''}`} onClick={() => handleToggle(5)} >
          <h3>Contribute (?)</h3>
          <p> 
            Options to contribute, comment, suggest other resources...
          </p>
        </div>
      
    </section>
  );
}
