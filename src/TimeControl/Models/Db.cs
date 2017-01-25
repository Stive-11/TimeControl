using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeControl.Models
{
    public class Db
    {
        public class Worker
        {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int Id { get; set; }

            [Required]
            public string Name { get; set; }
        }

        public class Project
        {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int Id { get; set; }

            [Required]
            public string Name { get; set; }
        }

        public class Task
        {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int Id { get; set; }

            [Required]
            public string Name { get; set; }

            [Required]
            public float Time { get; set; }

            [Required]
            public DateTime Date { get; set; }

            public int WorkerId { set; get; }

            [ForeignKey("WorkerId")]
            public Worker Worker { get; set; }

            public int ProjectId { set; get; }

            [ForeignKey("ProjectId")]
            public Project Project { get; set; }
        }
    }
}