﻿// <auto-generated />
using System;
using Game.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Game.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190813232924_Genre")]
    partial class Genre
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("Game.API.Models.Value", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("WeddingMusic.API.Models.Lineup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BridalParty");

                    b.Property<string>("Family");

                    b.Property<string>("Postlude");

                    b.Property<string>("Prelude");

                    b.Property<string>("Processional");

                    b.Property<string>("Recessional");

                    b.Property<string>("Unity");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Lineup");
                });

            modelBuilder.Entity("WeddingMusic.API.Models.Song", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Artist");

                    b.Property<string>("Genre");

                    b.Property<string>("Image");

                    b.Property<string>("Sample");

                    b.Property<bool>("Saved");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Songs");
                });

            modelBuilder.Entity("WeddingMusic.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<string>("Instruments");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("SavedSongs");

                    b.Property<string>("Street");

                    b.Property<string>("Username");

                    b.Property<string>("Venue");

                    b.Property<string>("WeddingDate");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WeddingMusic.API.Models.Lineup", b =>
                {
                    b.HasOne("WeddingMusic.API.Models.User", "User")
                        .WithMany("Lineup")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
