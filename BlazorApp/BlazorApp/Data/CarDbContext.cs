using Microsoft.EntityFrameworkCore;

public class CarDbContext : DbContext
{
    public DbSet<Car> Cars { get; set; }

    public CarDbContext(DbContextOptions<CarDbContext> options) : base(options)
    {
    }
}
