﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан по шаблону.
//
//     Изменения, вносимые в этот файл вручную, могут привести к непредвиденной работе приложения.
//     Изменения, вносимые в этот файл вручную, будут перезаписаны при повторном создании кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Prepod.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class mydbEntities : DbContext
    {
        public mydbEntities()
            : base("name=mydbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<groups> groups { get; set; }
        public virtual DbSet<raspisanie> raspisanie { get; set; }
        public virtual DbSet<students_group> students_group { get; set; }
        public virtual DbSet<user_table> user_table { get; set; }
        public virtual DbSet<zanatye> zanatye { get; set; }
        public virtual DbSet<combzanatye> combzanatye { get; set; }
        public virtual DbSet<groupinzanatye> groupinzanatye { get; set; }
        public virtual DbSet<spisokinzanatye> spisokinzanatye { get; set; }
    }
}
