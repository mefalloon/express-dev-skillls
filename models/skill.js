const skills = [
    {id: 1, skill: 'HTML', proficient: true},
    {id: 2, skill: 'React', proficient: false},
    {id: 3, skill: 'Node.js', proficient: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
    }

    function create(skill) {
      // Add the id
      skill.id = Date.now() % 1000000;
    
      skill.done = false;
      skills.push(skill);
      }
    
    
      function deleteOne(id) {
      // Find the index based on the id of the skill object
      const idx = skills.findIndex(skill => skill.id === parseInt(id));
      skills.splice(idx, 1);
      }
    