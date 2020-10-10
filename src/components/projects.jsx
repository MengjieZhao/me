import React, {Component} from "react";

export default class Projects extends Component {
  render() {
    return(
    <div>
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Projects</span>
              <h2 className="colorlib-heading animate-box">Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                           aria-controls="collapseOne">Non-intrusive ROM with Manifold Learning
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                         aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <p>Reduced order modelling for aerodynamic applications is known to be challenging because of
                              the inherent nonlinearities in the flow problem. The objective of this thesis is to construct a
                              non-intrusive parametric ROM capable of solving fluid problems with strong nonlinearities, in
                              particular, for steady transonic flow problems to resolve the shock gradients better. The proposed
                              ROM does not require any knowledge of the governing equations.</p>
                          </div>
                          <div className="col-md-6">
                            <p>Manifold learning methods are applied to extract low dimensional information from the flow solu-
                              tion manifold. Three manifold learning methods are applied, including a global property preserv-
                              ing method Isomap and two local property preserving methods Laplacian eigenmaps and Hessian
                              eigenmaps. To utilise the low-dimensional information, manifold learning methods are combined
                              with an interpolation scheme and a proper back-mapping method to predict flow solutions under
                              new parameter configuration, which is not included in the pre-computed solution database.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                           aria-expanded="false" aria-controls="collapseTwo">Time averaged large eddy simulations
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <p>The aim of this work is to derive the <strong>time-averaged</strong> solution of the incompressible Navier-Stokes equations and accelerate
                          the convergence to steady state solution with Variational Multiscale Method (VMS) technique. From a numerical point of view,
                          accurate solutions are required, preferably with little computational effort, and the numerical results must lead to the understanding
                          of the main features of the flow. The guidelines of an integrated framework are presented in this paper, starting with the description
                          of the numerical methods with time averaging formulation for solving general incompressible flows, up to a hands-on example
                          on a 1D non-linear oscillator. Several results are presented concerning analytical benchmarks, simulation of flows in laminar,
                          transitional and turbulent regimes with and without an inherently steady solutions.</p>
                        <ul>
                          <li>Time averaging</li>
                          <li>ariational Multiscale Method</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                           aria-expanded="false" aria-controls="collapseThree">Accelerated Sensitivity Analysis via
                          Machine Learning
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingThree">
                      <div className="panel-body">
                        <p>This Project is conducted in coorperation with Siemens</p>
                        <p>The goals of the project are:
                          <li>Neural network training using TensorFlow</li>
                          <li>Goal: Drag sensitivity prediction</li>
                          <li>Database: 2D CFD simulation with ajoint methods with randomly generated geometries</li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}