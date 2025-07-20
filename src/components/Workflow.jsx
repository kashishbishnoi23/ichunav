import React, { useState, useEffect } from 'react';

// Pure React Icons (SVG components)
const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);






// Pure React Components
const Button = ({ children, onClick, disabled, variant = 'primary', size = 'md', className = '' }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-amber-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-amber-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg'
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-amber-100 text-amber-800',
    secondary: 'bg-gray-100 text-gray-800'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Animation hook for smooth transitions
const useAnimation = (isVisible, duration = 300) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [opacity, setOpacity] = useState(isVisible ? 1 : 0);
  
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setTimeout(() => setOpacity(1), 10);
    } else {
      setOpacity(0);
      setTimeout(() => setShouldRender(false), duration);
    }
  }, [isVisible, duration]);
  
  return { shouldRender, opacity };
};

const defaultSteps = [
  {
    id: "setup",
    title: "Secure Voter Registration",
    description: "Sign up with your government ID and mobile number. Quick and secure — no hassle!",

    image: "/public/encrypted.jpg",
    status: "completed"
  },
  {
    id: "team",
    title: "Election is Announced",
    description: "As soon as the election starts, you'll see the list of candidates and voting details - all verified and official",
    image: "/public/announcement.jpg",
    status: "active"
  },
  {
    id: "automation",
    title: "Cast your vote online",
    description: "Pick your candidate with a single tap. No need to stand in long queues - vote from everywhere.",
    image: "/public/castvote.jpg",
    status: "pending"
  },
  {
    id: "optimization",
    title: "Your Vote is Locked Securely",
    description: "Once submitted, your vote is safely stored using powerful blockchain technology. It can't be changed or tampered with.",
    image: "/public/safevote.jpg",
    status: "pending"
  },
  {
    id: "analytics",
    title: "Transparent & Anonymous",
    description: "Your vote stays private, but the process is 100% transparent for everyone to see.",
    image: "/public/transparency.jpg",
    status: "pending"
  },
  {
    id: "launch",
    title: "Live Results You Can Trust",
    description: "When voting ends, results are shown instantly — accurate, tamper-proof, and fully fair.",
    image: "/public/results.jpg",
    status: "pending"
  }
];

const WorkflowComponent = ({
  title = "How to Get Started",
  subtitle = "Follow these simple steps to set up your workflow and start maximizing productivity",
  steps = defaultSteps,
  autoPlay = false,
  autoPlayInterval = 3000,
  showProgress = true,
  variant = "default"
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [fadeKey, setFadeKey] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setFadeKey(prev => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, steps.length]);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    setIsPlaying(false);
    setFadeKey(prev => prev + 1);
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setFadeKey(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setFadeKey(prev => prev + 1);
  };

  const getStepStatus = (index) => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "pending";
  };

  if (variant === "compact") {
    return (
      <div className="w-full  max-w-4xl mx-auto p-6 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {/* <p className="text-gray-600">{subtitle}</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.slice(0, 3).map((step, index) => (
            <Card 
              key={step.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentStep ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${
                  getStepStatus(index) === 'completed' ? 'bg-green-100 text-green-600' :
                  getStepStatus(index) === 'active' ? 'bg-amber-100 text-amber-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {/* {getStepStatus(index) === 'completed' ? <CheckCircleIcon /> : step.icon} */}
                </div>
                <Badge variant={getStepStatus(index) === 'active' ? 'default' : 'secondary'}>
                  Step {index + 1}
                </Badge>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              {/* <p className="text-sm text-gray-600">{step.description}</p> */}
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Progress</span>
            <span className="text-sm text-gray-600">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-amber-500 h-2 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Step Navigation */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentStep 
                  ? 'bg-amber-50 border-l-4 border-amber-500' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                getStepStatus(index) === 'completed' 
                  ? 'bg-green-100 text-green-600' 
                  : getStepStatus(index) === 'active'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {getStepStatus(index) === 'completed' ? (
                  <CheckCircleIcon />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold mb-1 ${
                  index === currentStep ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {step.title}
                </h3>
                {/* <p className="text-sm text-gray-600">{step.description}</p> */}
              </div>
              {index === currentStep && (
                <ArrowRightIcon className="text-amber-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Step Details */}
        <div className="lg:pl-8">
          <div
            key={fadeKey}
            className="transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                  {steps[currentStep].icon}
                </div> */}
                <div>
                  <Badge className="mb-2">Step {currentStep + 1}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[currentStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {steps[currentStep].description}
              </p>

               <div className="space-y-3 flex justify-center">
                <img className='h-50' src={steps[currentStep].image}></img>
              </div> 

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <PlayIcon className={isPlaying ? 'text-amber-600' : ''} />
                    <span className="ml-2">{isPlaying ? 'Pause' : 'Auto Play'}</span>
                  </Button>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                >
                  Next
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-amber-600 transform scale-125'
                  : index < currentStep
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleStepClick(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Usage Example
function Workflow() {
  return (
    <div className="min-h-screen mt-10 bg-gray-50">
      <WorkflowComponent
        title="Voting made easy with ichunav"
        subtitle="6 Simple Steps to a Safer Election"
        autoPlay={true}
        autoPlayInterval={4000}
        showProgress={true}
        variant="default"
      />
    </div>
  );
}

export default Workflow;

// import * as React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Play, 
//   CheckCircle, 
//   ArrowRight, 
//   Users, 
//   Settings, 
//   Zap,
//   Target,
//   BarChart3,
//   Rocket
// } from "lucide-react";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";

// const defaultSteps = [
//   {
//     id: "setup",
//     title: "Initial Setup",
//     description: "Configure your workspace and connect your data sources",
//     icon: <Settings className="w-6 h-6" />,
//     details: [
//       "Connect your data sources",
//       "Set up user permissions",
//       "Configure workspace settings",
//       "Install necessary integrations"
//     ],
//     status: "completed"
//   },
//   {
//     id: "team",
//     title: "Team Collaboration",
//     description: "Invite team members and assign roles for seamless collaboration",
//     icon: <Users className="w-6 h-6" />,
//     details: [
//       "Invite team members via email",
//       "Assign roles and permissions",
//       "Set up communication channels",
//       "Create shared workspaces"
//     ],
//     status: "active"
//   },
//   {
//     id: "automation",
//     title: "Workflow Automation",
//     description: "Create automated workflows to streamline your processes",
//     icon: <Zap className="w-6 h-6" />,
//     details: [
//       "Design custom workflows",
//       "Set up triggers and actions",
//       "Configure notification rules",
//       "Test automation sequences"
//     ],
//     status: "pending"
//   },
//   {
//     id: "optimization",
//     title: "Performance Optimization",
//     description: "Monitor and optimize your workflows for maximum efficiency",
//     icon: <Target className="w-6 h-6" />,
//     details: [
//       "Analyze workflow performance",
//       "Identify bottlenecks",
//       "Implement optimizations",
//       "Monitor key metrics"
//     ],
//     status: "pending"
//   },
//   {
//     id: "analytics",
//     title: "Analytics & Reporting",
//     description: "Track progress and generate insights from your data",
//     icon: <BarChart3 className="w-6 h-6" />,
//     details: [
//       "Set up custom dashboards",
//       "Create automated reports",
//       "Track key performance indicators",
//       "Export data for analysis"
//     ],
//     status: "pending"
//   },
//   {
//     id: "launch",
//     title: "Go Live",
//     description: "Launch your optimized workflows and start seeing results",
//     icon: <Rocket className="w-6 h-6" />,
//     details: [
//       "Final system checks",
//       "Deploy to production",
//       "Monitor initial performance",
//       "Celebrate your success!"
//     ],
//     status: "pending"
//   }
// ];

// const WorkflowComponent = ({
//   title = "How to Get Started",
//   subtitle = "Follow these simple steps to set up your workflow and start maximizing productivity",
//   steps = defaultSteps,
//   autoPlay = false,
//   autoPlayInterval = 3000,
//   showProgress = true,
//   variant = "default"
// }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(autoPlay);

//   // Auto-play functionality
//   React.useEffect(() => {
//     if (!isPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentStep((prev) => (prev + 1) % steps.length);
//     }, autoPlayInterval);

//     return () => clearInterval(interval);
//   }, [isPlaying, autoPlayInterval, steps.length]);

//   const handleStepClick = (index) => {
//     setCurrentStep(index);
//     setIsPlaying(false);
//   };

//   const handleNext = () => {
//     setCurrentStep((prev) => (prev + 1) % steps.length);
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
//   };

//   const getStepStatus = (index) => {
//     if (index < currentStep) return "completed";
//     if (index === currentStep) return "active";
//     return "pending";
//   };

//   if (variant === "compact") {
//     return (
//       <div className="w-full max-w-4xl mx-auto p-6 bg-background">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
//           <p className="text-muted-foreground">{subtitle}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {steps.slice(0, 3).map((step, index) => (
//             <Card 
//               key={step.id}
//               className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
//                 index === currentStep ? 'ring-2 ring-primary' : ''
//               }`}
//               onClick={() => handleStepClick(index)}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div className={`p-2 rounded-lg ${
//                   getStepStatus(index) === 'completed' ? 'bg-green-100 text-green-600' :
//                   getStepStatus(index) === 'active' ? 'bg-primary/10 text-primary' :
//                   'bg-muted text-muted-foreground'
//                 }`}>
//                   {getStepStatus(index) === 'completed' ? <CheckCircle className="w-5 h-5" /> : step.icon}
//                 </div>
//                 <Badge variant={getStepStatus(index) === 'active' ? 'default' : 'secondary'}>
//                   Step {index + 1}
//                 </Badge>
//               </div>
//               <h3 className="font-semibold mb-2">{step.title}</h3>
//               <p className="text-sm text-muted-foreground">{step.description}</p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6 bg-background">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
//       </div>

//       {/* Progress Bar */}
//       {showProgress && (
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-sm font-medium text-foreground">Progress</span>
//             <span className="text-sm text-muted-foreground">
//               {currentStep + 1} of {steps.length}
//             </span>
//           </div>
//           <div className="w-full bg-muted rounded-full h-2">
//             <motion.div
//               className="bg-primary h-2 rounded-full"
//               initial={{ width: 0 }}
//               animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             />
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Step Navigation */}
//         <div className="space-y-4">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
//                 index === currentStep 
//                   ? 'bg-primary/5 border-l-4 border-primary' 
//                   : 'hover:bg-muted/50'
//               }`}
//               onClick={() => handleStepClick(index)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
//                 getStepStatus(index) === 'completed' 
//                   ? 'bg-green-100 text-green-600' 
//                   : getStepStatus(index) === 'active'
//                   ? 'bg-primary text-primary-foreground'
//                   : 'bg-muted text-muted-foreground'
//               }`}>
//                 {getStepStatus(index) === 'completed' ? (
//                   <CheckCircle className="w-5 h-5" />
//                 ) : (
//                   <span className="text-sm font-semibold">{index + 1}</span>
//                 )}
//               </div>
//               <div className="flex-1">
//                 <h3 className={`font-semibold mb-1 ${
//                   index === currentStep ? 'text-foreground' : 'text-muted-foreground'
//                 }`}>
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">{step.description}</p>
//               </div>
//               {index === currentStep && (
//                 <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Step Details */}
//         <div className="lg:pl-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentStep}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="p-8">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-primary/10 text-primary rounded-lg">
//                     {steps[currentStep].icon}
//                   </div>
//                   <div>
//                     <Badge className="mb-2">Step {currentStep + 1}</Badge>
//                     <h3 className="text-2xl font-bold text-foreground">
//                       {steps[currentStep].title}
//                     </h3>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground mb-6">
//                   {steps[currentStep].description}
//                 </p>

//                 <div className="space-y-3 mb-8">
//                   {steps[currentStep].details.map((detail, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-center gap-3"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                       <span className="text-sm text-foreground">{detail}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Navigation Controls */}
//                 <div className="flex items-center justify-between">
//                   <Button
//                     variant="outline"
//                     onClick={handlePrevious}
//                     disabled={currentStep === 0}
//                   >
//                     Previous
//                   </Button>

//                   <div className="flex items-center gap-2">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => setIsPlaying(!isPlaying)}
//                     >
//                       <Play className={`w-4 h-4 ${isPlaying ? 'text-primary' : ''}`} />
//                       {isPlaying ? 'Pause' : 'Auto Play'}
//                     </Button>
//                   </div>

//                   <Button
//                     onClick={handleNext}
//                     disabled={currentStep === steps.length - 1}
//                   >
//                     Next
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </Button>
//                 </div>
//               </Card>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Step Indicators */}
//       <div className="flex justify-center mt-12">
//         <div className="flex gap-2">
//           {steps.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentStep
//                   ? 'bg-primary scale-125'
//                   : index < currentStep
//                   ? 'bg-green-500'
//                   : 'bg-muted'
//               }`}
//               onClick={() => handleStepClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Usage Example
// function Workflow() {
//   return (
//     <div className="min-h-screen bg-background">
//       <WorkflowComponent
//         title="Master Your Workflow"
//         subtitle="Transform your productivity with our comprehensive step-by-step guide"
//         autoPlay={true}
//         autoPlayInterval={4000}
//         showProgress={true}
//         variant="default"
//       />
//     </div>
//   );
// }

// export default Workflow;