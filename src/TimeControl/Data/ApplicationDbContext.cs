using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;
using TimeControl.Models;

namespace TimeControl.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Db.Worker> Workers { get; set; }
        public DbSet<Db.Project> Projects { get; set; }
        public DbSet<Db.Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Db.Task>()
                .HasOne(p => p.Project);
            builder.Entity<Db.Task>()
                .HasOne(p => p.Worker);

            base.OnModelCreating(builder);
        }

        internal static async Task InitializeDatabaseAsync(IServiceProvider serviceProvider)
        {
            using (var db = serviceProvider.GetRequiredService<ApplicationDbContext>())
            {
                var sqlDb = db.Database;
                if (sqlDb != null)
                {
                    await sqlDb.EnsureCreatedAsync();
                }
            }
        }
    }
}