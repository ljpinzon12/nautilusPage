import React, {Component} from 'react';
import Board from "./Owl/Components/Board/Board";
import Stack from "./Owl/Components/Stack/Stack";
import Box from "./Owl/Components/Box/Box";
import Media from "./Owl/Components/Media/Media";
import Chip from "./Owl/Components/Chip/Chip";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board>
          <Stack width={20}>
            <Box vertical>
              <div className="box__main-title">
                Nautilus
              </div>
              <div className="box__title">
                Voyager & Navio
              </div>
            </Box>
          </Stack>
          <Stack width={40}>
            <Box>
              <div className="box__title">
                Description
              </div>
              <div className="box__text">
                Nautilus is an application which offers a fulfilling data exploration and visualization experience by
                combining two libraries called Navio and Voyager. First, Navio is a visualization widget focused in
                summarizing, exploring and navigating big datasets. In another hand, Voyager is a data exploration tool
                which show to the user multiple graphs and visualization suggestions which summarize the desired
                datasets. By combining both libraries, Nautilus is able to filter the datasets and show the selected
                data in multiple visualizations by using Voyager.
              </div>
            </Box>
            <Box>
              <div className="box__title">
                Problem
              </div>
              <div className="box__text">
                Look for insights in big datasets by exploring, navigating and visualizing them in a straightforward yet
                efficient way is not an easy task. Because of that, libraries like Navio and Voyager have being built as
                data visualization tools in order to address these issues. However, the approach followed by them has a
                downside, usually big datasets tends to have noise which reduces the effectiveness of tools like
                Voyager, where its visualizations could not result in clear and useful visualizations.
              </div>
            </Box>
            <Box>
              <div className="box__title">
                Solution
              </div>
              <div className="box__text">
                The result of the combination of Navio and Voyager will allow users to summarize, explore, navigate and
                visualize big datasets and hence solve the aforementioned problem. Navio effectively solves the noise
                problem of Voyager by providing a way of filtering and selecting the users’ desired datasets. In order
                to increase the advantages of the merge of this tools, there is the need of running usability tests,
                creating documentation and improving the proposed solution.
              </div>
            </Box>
          </Stack>
          <Stack width={40}>
            <Box>
              <div className="box__title">
                Deliverables
              </div>
              <Media src="./tesis.mp4"/>
              <div className="box__container">
                <Media src="./paper.png" info="PAPER" download="DOWNLOAD"
                       link="https://drive.google.com/uc?id=1p4iycYgfVfD7aKE0SqIiw8mPfaAt8P_t&export=download&authuser=0"/>
                <Media src="./poster.png" info="POSTER" download="DOWNLOAD"
                       link="https://drive.google.com/uc?id=1p4iycYgfVfD7aKE0SqIiw8mPfaAt8P_t&export=download&authuser=0"/>
              </div>
              <div className="box__chip-container">
                <div className="box__options-container">
                  <Button variant="outlined" href="http://ljpinzon12.github.io/nautilus" className="demo-button">
                    DEMO
                  </Button>
                  <Button variant="outlined" href="https://github.com/ljpinzon12/nautilus" className="code-button">
                    CODE
                  </Button>
                </div>
                <Chip>
                  <a href="https://github.com/ljpinzon12">
                    <Tooltip title="Lady Pinzón">
                      <img src="./LadyPinzon.jpg" className="chip__circle" alt="chip circle"/>
                    </Tooltip>
                  </a>
                </Chip>
                <Chip>
                  <a href="https://github.com/john-guerra">
                    <Tooltip title="John Guerra">
                      <img src="./JohnGuerra.jpg" className="chip__circle" alt="chip circle"/>
                    </Tooltip>
                  </a>
                </Chip>
              </div>
            </Box>
          </Stack>
        </Board>
      </div>
    );
  }
}

export default App;
