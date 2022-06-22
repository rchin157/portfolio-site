import React from "react";

import headerimg from "../../data/ProjectMedia/rescheduling/nsercjobscheduler.png";
import nsercrapaper from "../../data/32dafaad-c032-4dd1-9d10-4dd607e6d179.pdf";

export default function Project() {
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <img className="img-fluid mx-auto d-block" src={headerimg} alt="Screenshot from the paper" />
                </div>
                <h1 className="mt-5">NSERC Job Rescheduling Research</h1>
                <h3 className="text-muted">C</h3>
                <p>
                    The main work I completed for this research project was practical implementations of both the proposed algorithm
                    "A tardiness-augmented approximation scheme for rejection-allowed multiprocessor rescheduling", as well as a naive solution
                    for comparison. The datastructures and implementation details were left to me so long as I used C due to performance concerns.
                    During planning a DFS tree based approach was chosen due to its relative ease of implementation and intuitive usage. Every node
                    in the tree is a job with some relevant state information and a path from root to leaf forms a viable solution.
                </p>
                <p>
                    The nature of the research inherently meant that performance of the implementation was quite important. Standard C was chosen from the
                    start for its more fine control and the resulting potential performance advantages. Custom data structures, stable and fast compilation,
                    and its low level nature were helpful in this project.
                </p>
                <p>
                    Managing memory usage in this project was a challenge due to the need to substantially cut the memory usage of the early implentations
                    and the resulting memory leaks that would sometimes pop up after particularly aggressive cuts. Valgrind and gdb in particular were indespensible
                    during this process of debugging memory usage and other errors. Some major design changes that significantly reduced memory usage were aggressive search space pruning, a form of
                    "graph colouring" which helped track and manage branches, and keeping the solution in hand as the algorithm went. When taken in combination rather than holding the whole tree in memory,
                    just the current solution and whatever branches currently under consideration reside in memory with anything else such as older/worse solutions
                    or unviable branches being immediately freed from memory. 
                </p>
                <p>
                    I was quite happy with how this project turned out and you can find its implementation and documentation
                    <a href="https://github.com/rchin157/NSERC2020-RescheduleFPTAS" target="_blank" rel="noopener noreferrer"> here</a>.
                    <br />
                    The published paper can be viewed
                    <a href={nsercrapaper} target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}