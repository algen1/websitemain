export default function Education() {
  const education = [
    {
      school: "Brunel University London",
      degree: "Computer Science",
      period: "2024 - Present",
      location: "London",
      current: true
    },
    {
      school: "City of Westminster College",
      degree: "BTEC Extended Diploma Level 3",
      grades: "D*DD (Distinction*, Distinction, Distinction)",
      period: "2022 - 2024",
      location: "London",
      additionalQualification: {
        degree: "BTEC Information Technology Level 2",
        grades: "DM (Distinction Merit)",
        period: "2021 - 2021"
      }
    },
    {
      school: "Queensmead High School",
      period: "2016 - 2021",
      location: "South Ruislip, London"
    }
  ]

  return (
    <div className="py-8">
      <h1 className="mb-8 text-2xl font-bold">Education</h1>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 pb-8 ml-4"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
            
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold">
                  {edu.school}
                  {edu.current && (
                    <span className="ml-3 text-sm bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.location}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {edu.period}
              </div>
              
              {edu.degree && (
                <div className="text-base">
                  {edu.degree}
                  {edu.grades && (
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      • {edu.grades}
                    </span>
                  )}
                </div>
              )}

              {edu.additionalQualification && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-base">
                    {edu.additionalQualification.degree}
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      • {edu.additionalQualification.grades}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.additionalQualification.period}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

